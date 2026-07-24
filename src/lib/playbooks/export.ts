// ---------------------------------------------------------------------------
// Playbook export helpers — the "take it with you" pack.
//
// Pure string builders so they stay unit-testable; the shell wires them to a
// client-side blob download.
// ---------------------------------------------------------------------------

import type { StackKpi } from "./content-types";

/** A user-entered KPI start line: value + date, both optional free text. */
export interface KpiBaseline {
  value: string;
  date: string;
}

/** KPI name -> entered baseline (absent = not entered). */
export type KpiBaselineMap = Record<string, KpiBaseline>;

/** UTF-8 BOM — prefix blob downloads so Excel reads € / CO2e correctly. */
export const CSV_BOM = String.fromCharCode(0xfeff);

const csvEscape = (s: string) =>
  /[",\r\n]/.test(s) ? `"${s.replace(/"/g, '""')}"` : s;

/**
 * KPI baseline sheet: one row per KPI with the entered baseline (blank where
 * not entered) and two empty re-check columns to fill in as you go.
 */
export function buildKpiBaselineCsv(kpis: StackKpi[], baselines: KpiBaselineMap): string {
  const header = ["KPI", "Description", "Baseline value", "Baseline date", "Re-check 1", "Re-check 2"];
  const rows = kpis.map((m) => [
    m.k,
    m.v,
    baselines[m.k]?.value.trim() ?? "",
    baselines[m.k]?.date ?? "",
    "",
    "",
  ]);
  return [header, ...rows].map((r) => r.map(csvEscape).join(",")).join("\r\n");
}
