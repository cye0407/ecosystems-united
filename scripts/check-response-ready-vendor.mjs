#!/usr/bin/env node
/**
 * Read-only drift detector for EU's vendored copy of response-ready.
 *
 * EU consumes response-ready via `file:packages/response-ready` (a committed
 * copy), while the canonical engine lives in the sibling repo ../response-ready
 * (which esg-passport tracks). This script reports how EU's copy differs from
 * canonical for the parts EU actually uses (the engine + the esg and
 * globalg-a-p packs), so drift is visible instead of silent.
 *
 * It NEVER writes anything. The actual sync/upgrade is a separate, test-gated
 * step (see .vendor-manifest.json + docs/certification/response-ready-sync-baseline.md).
 *
 * Usage:
 *   npm run check:vendor                 # print a drift summary
 *   node scripts/check-response-ready-vendor.mjs --list   # also list changed/added/removed files
 *   node scripts/check-response-ready-vendor.mjs --fail-on-drift   # exit 1 if drift exists (CI)
 */

import { readFile, readdir, stat } from "node:fs/promises";
import { createHash } from "node:crypto";
import { existsSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join, relative } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const REPO_ROOT = join(__dirname, "..");
const EU_COPY = join(REPO_ROOT, "packages/response-ready");
const CANON = join(REPO_ROOT, "..", "response-ready");
const MANIFEST = join(EU_COPY, ".vendor-manifest.json");

const args = process.argv.slice(2);
const LIST = args.includes("--list");
const FAIL_ON_DRIFT = args.includes("--fail-on-drift");

// The subtrees EU actually consumes. We ignore build output, deps, tests, and maps.
const TRACKED = ["src", "domain-packs/esg", "domain-packs/globalg-a-p"];
const IGNORE_DIRS = new Set(["node_modules", "dist", "__tests__", ".git"]);
const IGNORE_EXT = [".map", ".log"];

async function walk(root, sub, acc) {
  const abs = join(root, sub);
  if (!existsSync(abs)) return acc;
  const entries = await readdir(abs, { withFileTypes: true });
  for (const e of entries) {
    if (e.isDirectory()) {
      if (IGNORE_DIRS.has(e.name)) continue;
      await walk(root, join(sub, e.name), acc);
    } else if (e.isFile()) {
      if (IGNORE_EXT.some((ext) => e.name.endsWith(ext))) continue;
      acc.push(join(sub, e.name));
    }
  }
  return acc;
}

async function hashFile(p) {
  try {
    const buf = await readFile(p);
    return createHash("sha256").update(buf).digest("hex");
  } catch {
    return null;
  }
}

async function main() {
  if (!existsSync(CANON)) {
    console.error(`Canonical repo not found at ${CANON}. Clone response-ready as a sibling of ecosystems-united.`);
    process.exit(2);
  }
  const manifest = existsSync(MANIFEST) ? JSON.parse(await readFile(MANIFEST, "utf8")) : {};
  const canonSha = await (async () => {
    // best-effort: read canonical git HEAD without spawning git
    const headPath = join(CANON, ".git", "HEAD");
    try {
      const head = (await readFile(headPath, "utf8")).trim();
      if (head.startsWith("ref:")) {
        const ref = head.slice(4).trim();
        return (await readFile(join(CANON, ".git", ref), "utf8")).trim().slice(0, 7);
      }
      return head.slice(0, 7);
    } catch {
      return "unknown";
    }
  })();

  const changed = [];
  const onlyEu = [];
  const onlyCanon = [];
  let identical = 0;

  for (const sub of TRACKED) {
    const euFiles = await walk(EU_COPY, sub, []);
    const canonFiles = await walk(CANON, sub, []);
    const euSet = new Set(euFiles);
    const canonSet = new Set(canonFiles);
    const all = new Set([...euFiles, ...canonFiles]);
    for (const rel of all) {
      const inEu = euSet.has(rel);
      const inCanon = canonSet.has(rel);
      if (inEu && !inCanon) onlyEu.push(rel);
      else if (!inEu && inCanon) onlyCanon.push(rel);
      else {
        const [a, b] = await Promise.all([hashFile(join(EU_COPY, rel)), hashFile(join(CANON, rel))]);
        if (a === b) identical++;
        else changed.push(rel);
      }
    }
  }

  const drift = changed.length + onlyEu.length + onlyCanon.length;
  console.log("response-ready vendor drift (EU copy vs canonical)");
  console.log("=================================================");
  console.log(`Canonical HEAD:   ${canonSha}`);
  console.log(`Manifest target:  ${manifest.targetSha || "n/a"}   status: ${manifest.status || "n/a"}`);
  console.log(`Tracked subtrees: ${TRACKED.join(", ")}`);
  console.log("");
  console.log(`  identical:            ${identical}`);
  console.log(`  changed (differ):     ${changed.length}`);
  console.log(`  only in EU copy:      ${onlyEu.length}`);
  console.log(`  only in canonical:    ${onlyCanon.length}`);
  console.log(`  ---------------------`);
  console.log(`  total drift:          ${drift}`);
  console.log("");
  if (drift === 0) {
    console.log("EU's copy matches canonical for the tracked subtrees. No sync needed.");
  } else {
    console.log("EU's copy is DIVERGED from canonical. The sync/upgrade is a separate, test-gated step");
    console.log("(see .vendor-manifest.json + docs/certification/response-ready-sync-baseline.md).");
  }
  if (LIST && drift) {
    const show = (title, arr) => {
      if (!arr.length) return;
      console.log(`\n${title} (${arr.length}):`);
      arr.slice(0, 60).forEach((f) => console.log(`  ${f}`));
      if (arr.length > 60) console.log(`  ... and ${arr.length - 60} more`);
    };
    show("changed", changed);
    show("only in canonical (EU is missing / behind)", onlyCanon);
    show("only in EU (EU-local, would be lost on a blind overwrite)", onlyEu);
  }

  if (FAIL_ON_DRIFT && drift > 0) process.exit(1);
}

main().catch((err) => {
  console.error("check-response-ready-vendor failed:", err);
  process.exit(2);
});
