import { describe, it, expect } from "vitest";
import { buildKpiBaselineCsv } from "../export";

const KPIS = [
  { k: "Input spend (€/ha)", v: "Fertiliser + crop protection. The line you expect to fall." },
  { k: 'Odd "quoted", kpi', v: "Has, commas\nand a newline" },
];

describe("buildKpiBaselineCsv", () => {
  it("emits a header plus one row per KPI with blank baselines by default", () => {
    const lines = buildKpiBaselineCsv(KPIS, {}).split("\r\n");
    expect(lines[0]).toBe("KPI,Description,Baseline value,Baseline date,Re-check 1,Re-check 2");
    // 1 header + 2 KPI rows (the quoted \n stays inside its field, not a row break)
    expect(lines).toHaveLength(3);
    expect(lines[1]).toBe(
      "Input spend (€/ha),Fertiliser + crop protection. The line you expect to fall.,,,,",
    );
  });

  it("escapes quotes, commas and newlines per RFC 4180", () => {
    const csv = buildKpiBaselineCsv(KPIS, {});
    expect(csv).toContain('"Odd ""quoted"", kpi","Has, commas\nand a newline",,,,');
  });

  it("includes entered baselines and trims the value", () => {
    const csv = buildKpiBaselineCsv(KPIS, {
      "Input spend (€/ha)": { value: " 350 ", date: "2026-07-24" },
    });
    expect(csv).toContain(
      "Input spend (€/ha),Fertiliser + crop protection. The line you expect to fall.,350,2026-07-24,,",
    );
  });
});
