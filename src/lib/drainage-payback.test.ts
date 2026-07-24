import { describe, it, expect } from "vitest";
import {
  computeDrainagePayback,
  HORIZON_YEARS,
  SPACING_CLASSES,
  UPLIFT_SCENARIOS,
  SECONDARY_BENEFITS,
  formatYears,
} from "./drainage-payback";

// The article's worked "Moderate Drainage Scenario": 25 ha at €3,000/ha,
// 20% uplift on a maize margin-at-stake of €960/ha (8 t/ha × (€200 − €80)/t).
const ARTICLE_BASE = {
  hectares: 25,
  costPerHa: 3000,
  upliftPct: 20,
  grossMarginPerHa: 960,
};

describe("computeDrainagePayback", () => {
  it("reproduces the article's moderate worked example (15.6-year payback)", () => {
    const r = computeDrainagePayback(ARTICLE_BASE);
    expect(r.totalCost).toBe(75000);
    expect(r.annualYieldBenefit).toBeCloseTo(4800, 5); // 40 t × €120
    expect(r.annualSecondaryBenefit).toBe(0);
    expect(r.annualBenefit).toBeCloseTo(4800, 5);
    expect(r.paybackYears).toBeCloseTo(75000 / 4800, 5); // 15.625
    expect(formatYears(r.paybackYears!)).toBe("15.6");
    expect(r.paybackWithinHorizon).toBe(false); // 15.6 > 15
  });

  it("reproduces the article's adjusted payback with secondary benefits (10.6 years)", () => {
    // Article: +€1,500/yr timely operations +€800/yr nitrogen savings on 25 ha
    // = €60/ha + €32/ha — exactly the two SECONDARY_BENEFITS presets.
    const secondaryPerHa = SECONDARY_BENEFITS.reduce(
      (sum, b) => sum + b.defaultPerHa,
      0,
    );
    expect(secondaryPerHa).toBe(92);
    const r = computeDrainagePayback({ ...ARTICLE_BASE, secondaryPerHa });
    expect(r.annualSecondaryBenefit).toBeCloseTo(2300, 5); // €1,500 + €800
    expect(r.annualBenefit).toBeCloseTo(7100, 5);
    expect(formatYears(r.paybackYears!)).toBe("10.6");
    expect(r.paybackWithinHorizon).toBe(true);
  });

  it("builds a 15-year cumulative schedule with the upfront cost in year 1", () => {
    const r = computeDrainagePayback(ARTICLE_BASE);
    expect(r.rows).toHaveLength(HORIZON_YEARS);
    expect(r.rows[0].upfront).toBe(75000);
    expect(r.rows[0].net).toBeCloseTo(4800 - 75000, 5);
    expect(r.rows[1].upfront).toBe(0);
    // Cumulative at year n = n × benefit − cost.
    expect(r.rows[9].cumulative).toBeCloseTo(10 * 4800 - 75000, 5);
    expect(r.fifteenYearNet).toBeCloseTo(15 * 4800 - 75000, 5); // −€3,000
    expect(r.fifteenYearNetPerHa).toBeCloseTo(-120, 5);
    // Cumulative is strictly increasing after year 1 (constant annual benefit).
    for (let i = 1; i < r.rows.length; i++) {
      expect(r.rows[i].cumulative).toBeGreaterThan(r.rows[i - 1].cumulative);
    }
  });

  it("returns null payback when there is no benefit", () => {
    const r = computeDrainagePayback({
      hectares: 25,
      costPerHa: 3000,
      upliftPct: 0,
      grossMarginPerHa: 960,
    });
    expect(r.paybackYears).toBeNull();
    expect(r.paybackWithinHorizon).toBe(false);
    expect(r.fifteenYearNet).toBeCloseTo(-75000, 5);
  });

  it("scales linearly with area and respects overridden presets", () => {
    const small = computeDrainagePayback({ ...ARTICLE_BASE, hectares: 10 });
    const large = computeDrainagePayback({ ...ARTICLE_BASE, hectares: 50 });
    expect(large.totalCost).toBeCloseTo(5 * small.totalCost, 5);
    expect(large.annualBenefit).toBeCloseTo(5 * small.annualBenefit, 5);
    // Simple payback is scale-invariant — the article's caveat about
    // economies of scale is handled by overriding costPerHa, not hidden here.
    expect(large.paybackYears).toBeCloseTo(small.paybackYears!, 5);

    const overridden = computeDrainagePayback({
      ...ARTICLE_BASE,
      costPerHa: 2400, // e.g. 20% bulk discount, entered by the user
    });
    expect(overridden.totalCost).toBe(60000);
    expect(overridden.paybackYears).toBeCloseTo(60000 / 4800, 5);
  });

  it("keeps every preset inside the article's published ranges", () => {
    const bands: Record<string, [number, number]> = {
      close: [3500, 4500],
      standard: [2500, 3500],
      wide: [1800, 2500],
    };
    for (const c of SPACING_CLASSES) {
      const [lo, hi] = bands[c.key];
      expect(c.defaultCostPerHa).toBeGreaterThanOrEqual(lo);
      expect(c.defaultCostPerHa).toBeLessThanOrEqual(hi);
    }
    const upliftBands: Record<string, [number, number]> = {
      mild: [8, 15],
      moderate: [15, 25],
      severe: [25, 40],
    };
    for (const s of UPLIFT_SCENARIOS) {
      const [lo, hi] = upliftBands[s.key];
      expect(s.defaultUpliftPct).toBeGreaterThanOrEqual(lo);
      expect(s.defaultUpliftPct).toBeLessThanOrEqual(hi);
    }
  });
});
