// ---------------------------------------------------------------------------
// Stack 5 — the euro economics.
//
// Decomposes the transition into a concrete, whole-farm money picture at
// maturity (~year 5): where the savings come from, the ongoing cost of the
// practice, and the funding on top. Complements the J-curve (which shows timing)
// with a "where the money is" breakdown a farmer can take to a bank.
//
// Coefficients are directional and EU-leaning, flagged in the UI. The N /
// fertiliser saving is taken from the ROI model's year-5 input saving so the two
// views never double-count or contradict. Funding is entered by the grower
// (rates vary by country and scheme), never asserted.
// ---------------------------------------------------------------------------

/** Directional per-hectare coefficients. Sourced/caveated in the UI. */
export const ECON = {
  // Seed + one establishment pass for a cover crop, per hectare, per year.
  coverSeedPerHa: 55,
  // Fuel + labour saved per year once reduced/no-till is established, per ha.
  // (~$17/acre US CEAP fuel saving, rounded to a conservative EU €/ha.)
  fuelSavingPerHaNoTill: 40,
  // A typical cover-crop eco-scheme payment range, for the hint only. NOT applied
  // unless the grower enters their own rate — funding varies hugely by country.
  fundingHintLowPerHa: 50,
  fundingHintHighPerHa: 130,
} as const;

export interface EconLine {
  label: string;
  perHa: number; // signed: + saving/income, − cost
  total: number;
  kind: "saving" | "cost" | "funding";
  note?: string;
}

export interface EconResult {
  lines: EconLine[];
  netWithoutFunding: number;
  netWithFunding: number;
  fundingTotal: number;
}

export function computeEconomics(args: {
  hectares: number;
  /** The ROI model's year-5 annual input saving (fertiliser + crop protection). */
  year5InputSavings: number;
  practices: string[];
  /** Grower-entered eco-scheme / SFI rate, €/ha/yr. 0 if unknown. */
  fundingPerHa: number;
}): EconResult {
  const { hectares, year5InputSavings, practices, fundingPerHa } = args;
  const lines: EconLine[] = [];

  // 1. Fertiliser / crop-protection saving (from the ROI model, at maturity).
  if (year5InputSavings > 0) {
    lines.push({
      label: "Fertiliser & crop-protection saved",
      perHa: hectares > 0 ? year5InputSavings / hectares : 0,
      total: year5InputSavings,
      kind: "saving",
      note: "At maturity (~year 5), from your input spend and practice mix.",
    });
  }

  // 2. Fuel & labour saving from dropping tillage passes.
  if (practices.includes("reducedTill")) {
    lines.push({
      label: "Fuel & labour saved (reduced / no-till)",
      perHa: ECON.fuelSavingPerHaNoTill,
      total: ECON.fuelSavingPerHaNoTill * hectares,
      kind: "saving",
      note: "Directional; fewer passes mean less diesel and machinery time.",
    });
  }

  // 3. Ongoing cover-crop seed & establishment cost.
  if (practices.includes("coverCrops")) {
    lines.push({
      label: "Cover-crop seed & establishment",
      perHa: -ECON.coverSeedPerHa,
      total: -ECON.coverSeedPerHa * hectares,
      kind: "cost",
      note: "Seed plus one pass, each year you keep the cover in.",
    });
  }

  // Honesty: rotation and compost are in the plan but not yet priced here.
  const unpriced: string[] = [];
  if (practices.includes("rotation")) unpriced.push("diverse rotation");
  if (practices.includes("compost")) unpriced.push("compost / manure");
  if (unpriced.length > 0) {
    lines.push({
      label: `${unpriced.join(" and ")}: value not priced here`,
      perHa: 0,
      total: 0,
      kind: "cost",
      note: "Real, but harder to generalise — treat as upside on top of the numbers above.",
    });
  }

  const netWithoutFunding = lines.reduce((s, l) => s + l.total, 0);
  const fundingTotal = fundingPerHa * hectares;

  if (fundingPerHa > 0) {
    lines.push({
      label: "Estimated eco-scheme / SFI payment",
      perHa: fundingPerHa,
      total: fundingTotal,
      kind: "funding",
      note: "The rate you entered. Confirm against your national scheme.",
    });
  }

  return {
    lines,
    netWithoutFunding,
    netWithFunding: netWithoutFunding + fundingTotal,
    fundingTotal,
  };
}

export function formatEur0(value: number): string {
  const r = Math.round(value);
  const abs = Math.abs(r).toLocaleString("en-IE");
  return `${r < 0 ? "−" : ""}€${abs}`;
}
