// Refreshes docs/content-matrix.csv — the central article tracker.
// THE CSV IS THE SOURCE OF TRUTH for layout + manual columns:
//  - Cat's column ORDER and row ORDER are preserved exactly.
//  - Manual columns (cluster_proposed, cluster_reasoning, notes, and any
//    column this script doesn't recognize) are carried over untouched.
//  - Only DERIVED columns (see DERIVED below) are recomputed from the code.
//  - New articles are appended at the bottom; vanished articles are dropped
//    (reported on stdout). Unnamed/empty columns are dropped.
// Run: node scripts/build-content-matrix.cjs
const fs = require("fs");
const path = require("path");

const REPO = "C:\\Users\\User\\Documents\\CY\\ecosystems-united";
const ART = path.join(REPO, "src", "app", "(marketing)", "articles");
const CSV = path.join(REPO, "docs", "content-matrix.csv");
const CTA = fs.readFileSync(
  path.join(REPO, "src", "components", "marketing", "ArticleCTA.tsx"),
  "utf8",
);

// --- slug sets from ArticleCTA.tsx -----------------------------------------
function parseSetDef(name) {
  const m = CTA.match(new RegExp(name + String.raw`\s*=\s*new Set\(\[([\s\S]*?)\]\)`));
  if (!m) return new Set();
  return new Set([...m[1].matchAll(/"([^"]+)"/g)].map((x) => x[1]));
}
const SETS = {
  biofuels: parseSetDef("BIOFUELS_SLUGS"),
  "scope3-csrd": parseSetDef("SCOPE3_CSRD_SLUGS"),
  regenerative: parseSetDef("REGEN_ECONOMICS_SLUGS"),
  efficiency: parseSetDef("EFFICIENCY_SLUGS"),
  resilience: parseSetDef("RESILIENCE_SLUGS"),
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
  if (SETS["scope3-csrd"].has(slug)) return ["scope3-csrd", "Check Your Readiness -> /tools/scope-3-readiness"];
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

// --- scan articles ----------------------------------------------------------
const dirs = fs.readdirSync(ART).filter((d) =>
  fs.existsSync(path.join(ART, d, "page.tsx")));
const pages = {};
for (const d of dirs) pages[d] = fs.readFileSync(path.join(ART, d, "page.tsx"), "utf8");

const outLinks = {};
for (const d of dirs) {
  outLinks[d] = [...pages[d].matchAll(/href="\/articles\/([a-z0-9-]+)"/g)]
    .map((m) => m[1]).filter((s) => s !== d);
}
const pillars = dirs.filter((d) => d.endsWith("-guide") && new Set(outLinks[d]).size >= 5);
const pillarOf = {};
for (const p of pillars)
  for (const target of new Set(outLinks[p]))
    (pillarOf[target] ||= []).push(p);

function field(re, src) { const m = src.match(re); return m ? m[1] : ""; }
function wordCount(src) {
  const texts = [...src.matchAll(/>([^<>{}]+)</g)].map((m) => m[1]);
  let n = 0;
  for (const t of texts) n += (t.match(/[A-Za-zÀ-ü€][A-Za-zÀ-ü0-9€'%.,-]*/g) || []).length;
  return n;
}

function computeRow(slug) {
  const src = pages[slug];
  const title = field(/title:\s*"([^"]+)"/, src);
  const desc = field(/description:\s*"([^"]+)"/, src);
  const kw = [...(field(/keywords:\s*\[([^\]]*)\]/, src) || "").matchAll(/"([^"]+)"/g)]
    .map((m) => m[1]).join(" | ");
  const fwMatches = [...src.matchAll(/framework\/stack-(\d)/g)];
  const [cluster, endCur] = endCta(slug);
  const isPillar = pillars.includes(slug);
  return {
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
    stack_badge_current: fwMatches.length ? fwMatches[0][1] : "",
    framework_link_count: fwMatches.length,
    has_bottom_framework_block: fwMatches.length >= 2 ? "yes(heuristic)" : "no",
    mid_cta_current: /<BaselineCTA/.test(src) ? "BaselineCTA" : "none",
    mid_cta_proposed_D015: isPillar ? "(pillar - decide separately)" : midProposed(cluster),
    end_cta_current: endCur,
    has_stack_connection_section: /[Tt]he Stack \d/.test(src) ? "yes" : "no",
    spiking_2026_07: SPIKING.has(slug) ? "yes" : "",
  };
}
// Columns this script OWNS (recomputed). Everything else is manual: carried.
const DERIVED = new Set(Object.keys(computeRow(dirs[0])));
DERIVED.delete("slug"); // slug is the join key, never rewritten

// --- merge with the existing CSV (source of truth for layout + manual) -----
function parseCSV(text) {
  const rows = [];
  let row = [], cell = "", q = false;
  for (let i = 0; i < text.length; i++) {
    const c = text[i];
    if (q) {
      if (c === '"' && text[i + 1] === '"') { cell += '"'; i++; }
      else if (c === '"') q = false;
      else cell += c;
    } else if (c === '"') q = true;
    else if (c === ",") { row.push(cell); cell = ""; }
    else if (c === "\n") { row.push(cell.replace(/\r$/, "")); rows.push(row); row = []; cell = ""; }
    else cell += c;
  }
  if (cell || row.length) { row.push(cell); rows.push(row); }
  return rows.filter((r) => r.length > 1 || (r[0] || "").trim() !== "");
}

let header, orderedSlugs = [], existingBySlug = {};
if (fs.existsSync(CSV)) {
  const [h, ...data] = parseCSV(fs.readFileSync(CSV, "utf8"));
  header = h.filter((c) => c.trim() !== ""); // drop unnamed/empty columns
  const si = h.indexOf("slug");
  for (const r of data) {
    const slug = r[si];
    if (!slug) continue;
    const obj = {};
    h.forEach((col, i) => { if (col.trim() !== "") obj[col] = r[i] ?? ""; });
    existingBySlug[slug] = obj;
    orderedSlugs.push(slug);
  }
} else {
  header = ["slug", ...Object.keys(computeRow(dirs[0])).filter((c) => c !== "slug"),
    "cluster_proposed", "cluster_reasoning", "notes"];
}
// Ensure every derived column + the standard manual columns exist in header.
for (const col of [...DERIVED, "cluster_proposed", "cluster_reasoning", "notes"])
  if (!header.includes(col)) header.push(col);

const live = new Set(dirs);
const dropped = orderedSlugs.filter((s) => !live.has(s));
const kept = orderedSlugs.filter((s) => live.has(s));
const added = dirs.filter((s) => !existingBySlug[s]).sort();

const outRows = [];
for (const slug of [...kept, ...added]) {
  const prev = existingBySlug[slug] || {};
  const fresh = computeRow(slug);
  const row = {};
  for (const col of header) {
    if (col === "slug") row[col] = slug;
    else if (DERIVED.has(col)) row[col] = fresh[col];
    else row[col] = prev[col] ?? "";
  }
  outRows.push(row);
}

const esc = (v) => {
  v = String(v ?? "");
  return /[",\n]/.test(v) ? '"' + v.replace(/"/g, '""') + '"' : v;
};
fs.writeFileSync(CSV,
  [header.join(","), ...outRows.map((r) => header.map((c) => esc(r[c])).join(","))].join("\n") + "\n");
console.log(`rows: ${outRows.length} | kept order: ${kept.length} | added: ${added.length}${added.length ? " (" + added.join(", ") + ")" : ""} | dropped: ${dropped.length}${dropped.length ? " (" + dropped.join(", ") + ")" : ""}`);
console.log("column order preserved from existing file; manual columns carried: " +
  header.filter((c) => c !== "slug" && !DERIVED.has(c)).join(", "));
