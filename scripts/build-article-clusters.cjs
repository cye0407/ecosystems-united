// Generates src/lib/article-clusters.ts from docs/content-matrix.csv.
// THE MATRIX IS THE SOURCE OF TRUTH — never hand-edit the generated file;
// change the matrix (cluster_proposed / matrix_pillar_proposed) and re-run:
//   node scripts/build-article-clusters.cjs
//
// Normalisation applied to cluster_proposed:
//   "(pillar)"                -> "pillar"
//   "none (candidate: X)"     -> "X"   (candidate clusters, no playbook yet)
//   anything else             -> verbatim
const fs = require("fs");
const path = require("path");

const REPO = path.resolve(__dirname, "..");
const CSV = path.join(REPO, "docs", "content-matrix.csv");
const OUT = path.join(REPO, "src", "lib", "article-clusters.ts");

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

function normaliseCluster(raw) {
  const v = (raw || "").trim();
  if (v === "(pillar)") return "pillar";
  const m = v.match(/^none \(candidate: ([a-z0-9-]+)\)$/);
  if (m) return m[1];
  return v || "none";
}

const [header, ...data] = parseCSV(fs.readFileSync(CSV, "utf8"));
const col = (name) => header.indexOf(name);
const iSlug = col("slug");
const iCluster = col("cluster_proposed");
const iPillar = col("matrix_pillar_proposed");
if (iSlug < 0 || iCluster < 0 || iPillar < 0) {
  throw new Error("content-matrix.csv is missing slug/cluster_proposed/matrix_pillar_proposed");
}

const entries = [];
for (const r of data) {
  const slug = (r[iSlug] || "").trim();
  if (!slug) continue;
  const cluster = normaliseCluster(r[iCluster]);
  const pillarSlug = ((r[iPillar] || "").split("|")[0] || "").trim() || null;
  entries.push({ slug, cluster, pillarSlug });
}
entries.sort((a, b) => a.slug.localeCompare(b.slug));

const lines = entries.map(
  (e) =>
    `  "${e.slug}": { cluster: "${e.cluster}", pillarSlug: ${e.pillarSlug ? `"${e.pillarSlug}"` : "null"} },`,
);

const out = `// GENERATED FILE — do not edit by hand.
// Source of truth: docs/content-matrix.csv (cluster_proposed, matrix_pillar_proposed).
// Refresh with: node scripts/build-article-clusters.cjs

export interface ArticleClusterEntry {
  /** Normalised cluster: playbook clusters (baseline, efficiency, circular-economy,
   * resilience, regenerative), tool clusters (biofuels, ecolabel, vsme),
   * candidate clusters (no tool/playbook yet), "pillar", or "none". */
  cluster: string;
  /** First proposed pillar for the top back-link, or null (-> /articles). */
  pillarSlug: string | null;
}

export const ARTICLE_CLUSTERS: Record<string, ArticleClusterEntry> = {
${lines.join("\n")}
};

export function getArticleCluster(slug: string): ArticleClusterEntry {
  return ARTICLE_CLUSTERS[slug] ?? { cluster: "none", pillarSlug: null };
}
`;

fs.writeFileSync(OUT, out);
console.log(`wrote ${OUT} (${entries.length} entries)`);
const byCluster = {};
for (const e of entries) byCluster[e.cluster] = (byCluster[e.cluster] || 0) + 1;
console.log(Object.entries(byCluster).sort((a, b) => b[1] - a[1])
  .map(([k, v]) => `${k}:${v}`).join("  "));
