// ---------------------------------------------------------------------------
// Subsurface drainage payback — a DIRECTIONAL simple-payback model.
//
// Every preset below comes straight from the published worked model in the
// subsurface-drainage-design article (installation cost by spacing class,
// yield-response bands, and the two quantified secondary benefits). Every
// preset is overridable in the UI, every output is a planning sketch — never
// a promised return. Drainage outcomes vary widely by soil, outlet, design
// and season.
// ---------------------------------------------------------------------------

/** How many years the cumulative view runs. */
export const HORIZON_YEARS = 15;

export type SpacingClassKey = "close" | "standard" | "wide";

export interface SpacingClassDef {
  key: SpacingClassKey;
  label: string;
  /** Drain spacing + the soil it suits, straight from the article. */
  detail: string;
  /** The article's published cost range for this class. */
  range: string;
  /** Midpoint-ish preset within the published range, €/ha. Overridable. */
  defaultCostPerHa: number;
}

// Installation cost presets — article: "Installation Costs per Hectare".
export const SPACING_CLASSES: SpacingClassDef[] = [
  {
    key: "close",
    label: "Close spacing",
    detail: "10–15 m spacing — heavy clay",
    range: "€3,500–4,500/ha",
    defaultCostPerHa: 4000,
  },
  {
    key: "standard",
    label: "Standard spacing",
    detail: "15–20 m spacing — clay loam to loam",
    range: "€2,500–3,500/ha",
    defaultCostPerHa: 3000,
  },
  {
    key: "wide",
    label: "Wide spacing",
    detail: "20–30 m spacing — sandy loam to sand",
    range: "€1,800–2,500/ha",
    defaultCostPerHa: 2150,
  },
];

export type UpliftScenarioKey = "mild" | "moderate" | "severe";

export interface UpliftScenarioDef {
  key: UpliftScenarioKey;
  label: string;
  detail: string;
  /** The article's published yield-response band. */
  range: string;
  /** Preset % within the band. Overridable. */
  defaultUpliftPct: number;
}

// Yield-response presets — article: "Typical Yield Responses".
export const UPLIFT_SCENARIOS: UpliftScenarioDef[] = [
  {
    key: "mild",
    label: "Mildly affected",
    detail: "Occasional wetness, small problem areas",
    range: "8–15% response",
    defaultUpliftPct: 10,
  },
  {
    key: "moderate",
    label: "Moderately waterlogged",
    detail: "Wet soils, delayed planting, visible stress",
    range: "15–25% response",
    defaultUpliftPct: 20,
  },
  {
    key: "severe",
    label: "Severely waterlogged",
    detail: "Standing water 7+ days after rainfall",
    range: "25–40% response",
    defaultUpliftPct: 30,
  },
];

export type SecondaryBenefitKey = "earlierAccess" | "inputSavings";

export interface SecondaryBenefitDef {
  key: SecondaryBenefitKey;
  label: string;
  /** Where the preset comes from in the article's adjusted-payback example. */
  source: string;
  /** €/ha/yr preset (article example figure ÷ its 25 ha). Overridable. */
  defaultPerHa: number;
}

// Secondary-benefit presets — article: "Adjusted Payback Including Additional
// Benefits" (€1,500/yr timely operations + €800/yr nitrogen savings on 25 ha).
export const SECONDARY_BENEFITS: SecondaryBenefitDef[] = [
  {
    key: "earlierAccess",
    label: "Earlier field access & timely operations",
    source:
      "Article example: €1,500/yr on 25 ha for earlier planting (3–7 days) and flexible spray/harvest windows",
    defaultPerHa: 60,
  },
  {
    key: "inputSavings",
    label: "Reduced nitrogen losses in wet years",
    source:
      "Article example: €800/yr on 25 ha from better root development and reduced denitrification",
    defaultPerHa: 32,
  },
];

export interface DrainageInputs {
  /** Hectares to drain (the waterlogged area, not the whole farm). */
  hectares: number;
  /** Installation cost, €/ha. Preset by spacing class, overridable. */
  costPerHa: number;
  /** Expected yield uplift on the drained area, in percent (e.g. 20). */
  upliftPct: number;
  /**
   * Crop gross margin at stake, €/ha/yr — output value net of the variable
   * costs of the extra tonnes (harvest, drying, handling). The article's
   * maize example works out to €960/ha (8 t/ha × (€200 − €80)/t).
   */
  grossMarginPerHa: number;
  /** Summed €/ha/yr of any enabled secondary benefits. Defaults to 0. */
  secondaryPerHa?: number;
}

export interface DrainageYearRow {
  year: number;
  /** Annual benefit (yield + secondary), whole area. */
  benefit: number;
  /** Installation cost, applied once in year 1. */
  upfront: number;
  net: number;
  cumulative: number;
}

export interface DrainageResult {
  totalCost: number;
  annualYieldBenefit: number;
  annualSecondaryBenefit: number;
  annualBenefit: number;
  /** Simple payback in years (totalCost / annualBenefit), null if no benefit. */
  paybackYears: number | null;
  /** Whether the simple payback lands inside the 15-year view. */
  paybackWithinHorizon: boolean;
  rows: DrainageYearRow[];
  fifteenYearNet: number;
  fifteenYearNetPerHa: number;
}

export function computeDrainagePayback(input: DrainageInputs): DrainageResult {
  const {
    hectares,
    costPerHa,
    upliftPct,
    grossMarginPerHa,
    secondaryPerHa = 0,
  } = input;

  const totalCost = hectares * costPerHa;
  const annualYieldBenefit = hectares * grossMarginPerHa * (upliftPct / 100);
  const annualSecondaryBenefit = hectares * secondaryPerHa;
  const annualBenefit = annualYieldBenefit + annualSecondaryBenefit;

  const paybackYears = annualBenefit > 0 ? totalCost / annualBenefit : null;

  const rows: DrainageYearRow[] = [];
  let running = 0;
  for (let year = 1; year <= HORIZON_YEARS; year++) {
    const upfront = year === 1 ? totalCost : 0;
    const net = annualBenefit - upfront;
    running += net;
    rows.push({ year, benefit: annualBenefit, upfront, net, cumulative: running });
  }

  const fifteenYearNet = rows[rows.length - 1].cumulative;

  return {
    totalCost,
    annualYieldBenefit,
    annualSecondaryBenefit,
    annualBenefit,
    paybackYears,
    paybackWithinHorizon: paybackYears !== null && paybackYears <= HORIZON_YEARS,
    rows,
    fifteenYearNet,
    fifteenYearNetPerHa: hectares > 0 ? fifteenYearNet / hectares : 0,
  };
}

export function formatEur(value: number): string {
  return `€${Math.round(value).toLocaleString("en-IE")}`;
}

export function formatSignedEur(value: number): string {
  const rounded = Math.round(value);
  const abs = Math.abs(rounded).toLocaleString("en-IE");
  return `${rounded < 0 ? "−" : ""}€${abs}`;
}

/** One decimal for payback display, e.g. 15.6. */
export function formatYears(value: number): string {
  return (Math.round(value * 10) / 10).toLocaleString("en-IE", {
    minimumFractionDigits: 1,
    maximumFractionDigits: 1,
  });
}
