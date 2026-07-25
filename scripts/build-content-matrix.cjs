// Builds docs/content-matrix.csv — the central article tracker for
// ecosystems-united. One row per article under src/app/(marketing)/articles.
const fs = require("fs");
const path = require("path");

const REPO = "C:\\Users\\User\\Documents\\CY\\ecosystems-united";
const ART = path.join(REPO, "src", "app", "(marketing)", "articles");
const CTA = fs.readFileSync(
  path.join(REPO, "src", "components", "marketing", "ArticleCTA.tsx"),
  "utf8",
);

// --- parse slug sets out of ArticleCTA.tsx --------------------------------
function parseSet(name) {
  const m = CTA.match(new RegExp(name + String.raw`\s*=\s*new Set\(\[([\s\S]*?)\]\)`));
  if (!m) return new Set();
  return new Set([...m[1].matchAll(/"([^"]+)"/g)].map((x) => x[1]));
}
const SETS = {
  biofuels: parseSet("BIOFUELS_SLUGS"),
  scope3csrd: parseSet("SCOPE3_CSRD_SLUGS"),
  regenerative: parseSet("REGEN_ECONOMICS_SLUGS"),
  efficiency: parseSet("EFFICIENCY_SLUGS"),
  resilience: parseSet("RESILIENCE_SLUGS"),
};
const SPIKING = new Set([
  "pros-and-cons-of-advanced-biofuels", "regenerative-guide",
  "regenerative-agriculture-economics", "subsurface-drainage-design",
  "agricultural-drainage", "cover-crop-selection-guide", "cover-crops-roi",
]);

const slugHash = (s) => s.split("").reduce((a, c) => a + c.charCodeAt(0), 0);
const PRODUCT_LABELS = ["See Our Pricing", "Try the Response Generator"];

function endCta(slug) {
  if (SETS.biofuels.has(slug)) return ["biofuels", "Compare the 4 Generations -> /tools/biofuel-feedstock-compare"];
  if (SETS.scope3csrd.has(slug)) return ["scope3-csrd", "Check Your Readiness -> /tools/scope-3-readiness"];
  if (SETS.regenerative.has(slug)) return ["regenerative", "Calculate Your Payback -> /tools/regenerative-roi"];
  if (SETS.efficiency.has(slug)) return ["efficiency", "Score your operation -> /tools/efficiency-assessment"];
  if (SETS.resilience.has(slug)) return ["resilience", "Calculate your exposure -> /tools/resilience-exposure"];
  if (slug.includes("ecolabel") || slug.includes("eco-label")) return ["ecolabel", "Find Your Ecolabel -> /tools/ecolabel-selector"];
  const h = slugHash(slug);
  if (h % 10 < 3) return ["product-rotation", PRODUCT_LABELS[h % 2] + " (hash product CTA)"];
  return ["none-fallback", "Newsletter signup"];
}

// Proposed mid CTA under D-015 option A
function midProposed(cluster) {
  switch (cluster) {
    case "biofuels": return "MidCTA: feedstock job copy -> /tools/biofuel-feedstock-compare";
    case "scope3-csrd": return "BaselineCTA (fits: buyer-data IS the job)";
    case "regenerative": return "MidCTA: transition-numbers job copy -> /tools/regenerative-roi";
    case "efficiency": return "MidCTA: leak job copy -> /tools/efficiency-assessment";
    case "resilience": return "MidCTA: disruption job copy -> /tools/resilience-exposure";
    case "ecolabel": return "MidCTA: label-fit job copy -> /tools/ecolabel-selector";
    default: return "BaselineCTA (fallback - unmatched cluster)";
  }
}

// --- scan articles ---------------------------------------------------------
const dirs = fs.readdirSync(ART).filter((d) =>
  fs.existsSync(path.join(ART, d, "page.tsx")));

const pages = {};
for (const d of dirs) pages[d] = fs.readFileSync(path.join(ART, d, "page.tsx"), "utf8");

// pillar detection: *-guide dirs linking >=5 other articles
const outLinks = {};
for (const d of dirs) {
  outLinks[d] = [...pages[d].matchAll(/href="\/articles\/([a-z0-9-]+)"/g)]
    .map((m) => m[1]).filter((s) => s !== d);
}
const pillars = dirs.filter((d) => d.endsWith("-guide") && new Set(outLinks[d]).size >= 5);
// reverse index: article -> pillars linking to it
const pillarOf = {};
for (const p of pillars)
  for (const target of new Set(outLinks[p]))
    (pillarOf[target] ||= []).push(p);

function field(re, src) { const m = src.match(re); return m ? m[1] : ""; }
function wordCount(src) {
  // Count words in text nodes (between > and <), skipping pure-code fragments.
  const texts = [...src.matchAll(/>([^<>{}]+)</g)].map((m) => m[1]);
  let n = 0;
  for (const t of texts) n += (t.match(/[A-Za-zÀ-ü€][A-Za-zÀ-ü0-9€'%.,-]*/g) || []).length;
  return n;
}

const rows = [];
for (const slug of dirs.sort()) {
  const src = pages[slug];
  const title = field(/title:\s*"([^"]+)"/, src);
  const desc = field(/description:\s*"([^"]+)"/, src) || field(/description:\s*\n?\s*"([^"]+)"/, src);
  const kw = [...(field(/keywords:\s*\[([^\]]*)\]/, src) || "").matchAll(/"([^"]+)"/g)]
    .map((m) => m[1]).join(" | ");
  const fwMatches = [...src.matchAll(/framework\/stack-(\d)/g)];
  const stackBadge = fwMatches.length ? fwMatches[0][1] : "";
  const [cluster, endCur] = endCta(slug);
  const isPillar = pillars.includes(slug);
  rows.push({
    slug,
    url: "https://ecosystemsunited.com/articles/" + slug,
    type: isPillar ? "pillar" : "article",
    title,
    title_length: title.length,
    description_length: (desc || "").length,
    keywords: kw,
    word_count_body: wordCount(src),
    cluster_cta_set: cluster,
    matrix_pillar_proposed: (pillarOf[slug] || []).join(" | "),
    stack_badge_current: stackBadge,
    framework_link_count: fwMatches.length,
    has_bottom_framework_block: fwMatches.length >= 2 ? "yes(heuristic)" : "no",
    mid_cta_current: /<BaselineCTA/.test(src) ? "BaselineCTA" : "none",
    mid_cta_proposed_D015: isPillar ? "(pillar - decide separately)" : midProposed(cluster),
    end_cta_current: endCur,
    has_stack_connection_section: /[Tt]he Stack \d/.test(src) ? "yes" : "no",
    spiking_2026_07: SPIKING.has(slug) ? "yes" : "",
    notes: "",
  });
}

const cols = Object.keys(rows[0]);
const esc = (v) => {
  v = String(v ?? "");
  return /[",\n]/.test(v) ? '"' + v.replace(/"/g, '""') + '"' : v;
};
const csv = [cols.join(","), ...rows.map((r) => cols.map((c) => esc(r[c])).join(","))].join("\n");
fs.writeFileSync(path.join(REPO, "docs", "content-matrix.csv"), csv + "\n");
console.log("rows:", rows.length, "| pillars detected:", pillars.length, "|", pillars.join(", "));
