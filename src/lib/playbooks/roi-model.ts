// ---------------------------------------------------------------------------
// Regenerative transition ROI — the shared J-curve model.
//
// This is the same directional model the /tools/regenerative-roi calculator
// uses, extracted so the Stack 5 guided worksheet can show the numbers move
// live as a grower enters their operation. Every figure is an adjustable
// assumption, never a forecast.
// ---------------------------------------------------------------------------

const YEARS = 10;

// Input-cost savings ramp: share of annual input spend saved, by year (1-5),
// held flat thereafter. Brackets the cited "15-40% within 3-5 years".
const SAVINGS_RAMP = [0.05, 0.12, 0.2, 0.26, 0.3];

// Temporary transition yield dip: share of gross margin lost, by year.
const YIELD_DIP = [0.08, 0.04, 0.0];

// More practices => a steeper savings ramp and a larger up-front outlay.
function savingsMultiplier(numPractices: number): number {
  return 0.75 + 0.125 * numPractices; // 1 practice 0.875 … 4 practices 1.25
}
function costScale(numPractices: number): number {
  return numPractices / 2; // up-front field is calibrated to a 2-practice transition
}

export interface RoiYearRow {
  year: number;
  savings: number;
  yieldDip: number;
  carbon: number;
  upfront: number;
  net: number;
  cumulative: number;
}

export interface RoiInputs {
  hectares: number;
  inputSpendPerHa: number;
  grossMarginPerHa: number;
  /** Up-front €/ha, calibrated to a 2-practice transition. Defaults to 120. */
  upfrontCostPerHa?: number;
  numPractices: number;
  /** Optional carbon upside. Omit to exclude carbon entirely. */
  carbon?: { pricePerTonne: number; seqRatePerHa: number };
}

export interface RoiResult {
  rows: RoiYearRow[];
  paybackYear: number | null;
  tenYearNet: number;
  tenYearNetPerHa: number;
  /** Directional year-5 input saving (annual), the headline "money" figure. */
  year5Savings: number;
}

export function computeRoi(input: RoiInputs): RoiResult {
  const {
    hectares,
    inputSpendPerHa,
    grossMarginPerHa,
    upfrontCostPerHa = 120,
    numPractices,
    carbon,
  } = input;

  const savingsMult = savingsMultiplier(numPractices);
  const scale = costScale(numPractices);
  const rows: RoiYearRow[] = [];
  let running = 0;

  for (let i = 0; i < YEARS; i++) {
    const year = i + 1;
    const savingsShare =
      (SAVINGS_RAMP[i] ?? SAVINGS_RAMP[SAVINGS_RAMP.length - 1]) * savingsMult;
    const savings = inputSpendPerHa * hectares * savingsShare;
    const yieldDip = grossMarginPerHa * hectares * (YIELD_DIP[i] ?? 0);
    const carbonIncome =
      carbon && year >= 2
        ? hectares * carbon.seqRatePerHa * carbon.pricePerTonne
        : 0;
    const upfront = i === 0 ? upfrontCostPerHa * scale * hectares : 0;
    const net = savings + carbonIncome - yieldDip - upfront;
    running += net;
    rows.push({
      year,
      savings,
      yieldDip,
      carbon: carbonIncome,
      upfront,
      net,
      cumulative: running,
    });
  }

  const paybackYear = rows.find((r) => r.cumulative >= 0)?.year ?? null;
  const tenYearNet = rows[rows.length - 1].cumulative;
  const tenYearNetPerHa = hectares > 0 ? tenYearNet / hectares : 0;
  const year5Savings = rows[4]?.savings ?? 0;

  return { rows, paybackYear, tenYearNet, tenYearNetPerHa, year5Savings };
}

export function formatEur(value: number): string {
  return `€${Math.round(value).toLocaleString("en-IE")}`;
}

export function formatSignedEur(value: number): string {
  const rounded = Math.round(value);
  const abs = Math.abs(rounded).toLocaleString("en-IE");
  return `${rounded < 0 ? "−" : ""}€${abs}`;
}
