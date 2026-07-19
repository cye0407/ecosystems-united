#!/usr/bin/env node
/**
 * Certification source freshness checker.
 *
 * Reads docs/certification/source-ledger.json, fetches each source's official
 * page, hashes its visible text, and reports which sources changed since the
 * last baseline so a human can review the affected packs/tools/articles.
 *
 * It NEVER edits guidance, templates, or pack content. The only thing it can
 * write (with --update-hashes) is the ledger's own contentHash + lastChecked,
 * to baseline "current" after a human has reviewed a change.
 *
 * Usage:
 *   node scripts/check-certification-sources.mjs                 # report only
 *   node scripts/check-certification-sources.mjs --update-hashes # baseline hashes after review
 *   node scripts/check-certification-sources.mjs --fail-on-change # exit 1 if any source changed (CI)
 *   node scripts/check-certification-sources.mjs --only=eu-csrd,eudr
 */

import { readFile, writeFile } from "node:fs/promises";
import { createHash } from "node:crypto";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const REPO_ROOT = join(__dirname, "..");
const LEDGER_PATH = join(REPO_ROOT, "docs/certification/source-ledger.json");
const REPORT_PATH = join(REPO_ROOT, "docs/certification/last-report.md");

const args = process.argv.slice(2);
const UPDATE_HASHES = args.includes("--update-hashes");
const FAIL_ON_CHANGE = args.includes("--fail-on-change");
const onlyArg = args.find((a) => a.startsWith("--only="));
const ONLY = onlyArg ? onlyArg.slice("--only=".length).split(",").map((s) => s.trim()) : null;
const FETCH_TIMEOUT_MS = 20000;
const UA = "EcosystemsUnited-SourceFreshnessBot/1.0 (+https://ecosystemsunited.com)";

/** Reduce an HTML page to a normalized visible-text hash (directional, not exact). */
function htmlToHashableText(html) {
  return html
    .replace(/<script[\s\S]*?<\/script>/gi, " ")
    .replace(/<style[\s\S]*?<\/style>/gi, " ")
    .replace(/<!--[\s\S]*?-->/g, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/&nbsp;/gi, " ")
    .replace(/&amp;/gi, "&")
    .replace(/&[a-z]+;/gi, " ")
    .replace(/\s+/g, " ")
    .trim()
    .toLowerCase();
}

function sha256(text) {
  return createHash("sha256").update(text, "utf8").digest("hex");
}

async function fetchSource(url) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), FETCH_TIMEOUT_MS);
  try {
    const res = await fetch(url, {
      signal: controller.signal,
      redirect: "follow",
      headers: { "User-Agent": UA, Accept: "text/html,application/xhtml+xml" },
    });
    if (!res.ok) return { ok: false, error: `HTTP ${res.status}` };
    const html = await res.text();
    const text = htmlToHashableText(html);
    if (text.length < 200) return { ok: false, error: "suspiciously short body (blocked or JS-only page?)" };
    return { ok: true, hash: sha256(text), length: text.length, finalUrl: res.url };
  } catch (err) {
    return { ok: false, error: err.name === "AbortError" ? "timeout" : String(err.message || err) };
  } finally {
    clearTimeout(timer);
  }
}

function todayISO() {
  return new Date().toISOString().slice(0, 10);
}

function isOverdue(nextReview) {
  if (!nextReview) return false;
  return nextReview < todayISO();
}

function affectedLine(affects) {
  const parts = [];
  if (affects?.packs?.length) parts.push(`packs: ${affects.packs.join(", ")}`);
  if (affects?.tools?.length) parts.push(`tools: ${affects.tools.join(", ")}`);
  if (affects?.articles?.length) parts.push(`articles: ${affects.articles.join(", ")}`);
  return parts.length ? parts.join("  |  ") : "_no assets mapped yet_";
}

async function main() {
  const ledger = JSON.parse(await readFile(LEDGER_PATH, "utf8"));
  let sources = ledger.sources || [];
  if (ONLY) sources = sources.filter((s) => ONLY.includes(s.id));

  const results = [];
  for (const src of sources) {
    process.stderr.write(`Checking ${src.id} ... `);
    const fetched = await fetchSource(src.officialUrl);
    let status;
    if (!fetched.ok) status = "UNREACHABLE";
    else if (!src.contentHash) status = "NEW";
    else if (src.contentHash === fetched.hash) status = "UNCHANGED";
    else status = "CHANGED";
    process.stderr.write(status + (fetched.ok ? "" : ` (${fetched.error})`) + "\n");
    results.push({ src, fetched, status, overdue: isOverdue(src.nextReview) });

    if (UPDATE_HASHES && fetched.ok) {
      src.contentHash = fetched.hash;
      src.lastChecked = todayISO();
      if (src.verifyUrl === false) src.verifyUrl = true; // fetched successfully -> URL confirmed
    }
  }

  const changed = results.filter((r) => r.status === "CHANGED");
  const fresh = results.filter((r) => r.status === "NEW");
  const unreachable = results.filter((r) => r.status === "UNREACHABLE");
  const unchanged = results.filter((r) => r.status === "UNCHANGED");
  const overdue = results.filter((r) => r.overdue);

  const lines = [];
  lines.push("# Certification Source Freshness Report");
  lines.push("");
  lines.push(`Generated: ${new Date().toISOString()}  (${UPDATE_HASHES ? "hashes baselined" : "report only"})`);
  lines.push("");
  lines.push("## Summary");
  lines.push("");
  lines.push(`- ${results.length} sources checked`);
  lines.push(`- ${changed.length} changed since baseline`);
  lines.push(`- ${fresh.length} new (no baseline yet)`);
  lines.push(`- ${unreachable.length} unreachable`);
  lines.push(`- ${overdue.length} overdue for scheduled review`);
  lines.push("");

  const section = (title, rows, withReason) => {
    if (!rows.length) return;
    lines.push(`## ${title}`);
    lines.push("");
    for (const r of rows) {
      lines.push(`### ${r.src.name}  \`${r.src.id}\``);
      lines.push(`- Source: ${r.src.officialUrl}`);
      lines.push(`- Version: ${r.src.version || "n/a"}  |  Volatility: ${r.src.volatility || "n/a"}  |  Next review: ${r.src.nextReview || "n/a"}`);
      if (withReason && r.fetched && !r.fetched.ok) lines.push(`- Reason: ${r.fetched.error}`);
      lines.push(`- Review these: ${affectedLine(r.src.affects)}`);
      lines.push("");
    }
  };

  section("⚠️ Changed since last baseline - review the affected assets", changed);
  section("🆕 New sources (no baseline - run --update-hashes after a first review)", fresh);
  section("🔴 Unreachable (check the URL / it may block bots)", unreachable, true);
  if (overdue.length) {
    lines.push("## 🕒 Overdue for scheduled review");
    lines.push("");
    for (const r of overdue) lines.push(`- \`${r.src.id}\` ${r.src.name} - nextReview ${r.src.nextReview}`);
    lines.push("");
  }
  if (unchanged.length) {
    lines.push("## ✅ Unchanged");
    lines.push("");
    lines.push(unchanged.map((r) => `\`${r.src.id}\``).join(", "));
    lines.push("");
  }
  lines.push("---");
  lines.push("_This report flags sources for human review. It does not change any guidance, template, or pack. Baseline current content with `--update-hashes` only after you have reviewed each change._");

  const report = lines.join("\n") + "\n";
  await writeFile(REPORT_PATH, report, "utf8");
  process.stdout.write(report);

  if (UPDATE_HASHES) {
    await writeFile(LEDGER_PATH, JSON.stringify(ledger, null, 2) + "\n", "utf8");
    process.stderr.write(`\nLedger baselined -> ${LEDGER_PATH}\n`);
  }
  process.stderr.write(`Report written -> ${REPORT_PATH}\n`);

  if (FAIL_ON_CHANGE && (changed.length > 0 || unreachable.length > 0)) process.exit(1);
}

main().catch((err) => {
  console.error("check-certification-sources failed:", err);
  process.exit(2);
});
