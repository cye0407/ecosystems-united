import { PRACTICES, type IssueKey, type PracticeDef } from "./stack-5";

// ---------------------------------------------------------------------------
// Deterministic recommender for Stack 5.
//
// Given a grower's soil type and the issues they want to fix, it (a) reorders
// which practice to start with, and (b) selects a cover-crop species mix matched
// to their problems and soil. Rules-first, honest, and transparent about why
// each thing is recommended. Species agronomy will be source-verified against
// the benchmark research and the authority ledger.
// ---------------------------------------------------------------------------

export type SoilKey =
  | "sandy"
  | "loam"
  | "clay"
  | "silt"
  | "chalk"
  | "peat";

export const SOIL_TYPES: { key: SoilKey; label: string }[] = [
  { key: "sandy", label: "Sandy / light" },
  { key: "loam", label: "Loam / medium" },
  { key: "clay", label: "Clay / heavy" },
  { key: "silt", label: "Silt" },
  { key: "chalk", label: "Chalky / calcareous" },
  { key: "peat", label: "Peaty / organic" },
];

export const FARM_ISSUES: { key: IssueKey; label: string }[] = [
  { key: "compaction", label: "Soil compaction" },
  { key: "erosion", label: "Erosion / runoff" },
  { key: "lowOM", label: "Low organic matter / fertility" },
  { key: "weeds", label: "Weed pressure" },
  { key: "drainage", label: "Poor drainage / waterlogging" },
  { key: "drought", label: "Drought / poor water-holding" },
  { key: "nitrogen", label: "High fertiliser / nitrogen cost" },
  { key: "pests", label: "Pests & disease" },
];

export const ISSUE_LABEL: Record<IssueKey, string> = Object.fromEntries(
  FARM_ISSUES.map((i) => [i.key, i.label]),
) as Record<IssueKey, string>;

export const SOIL_LABEL: Record<SoilKey, string> = Object.fromEntries(
  SOIL_TYPES.map((s) => [s.key, s.label]),
) as Record<SoilKey, string>;

// --- Cover crop species catalog -------------------------------------------
export interface CoverSpecies {
  name: string;
  family: "Legume" | "Grass" | "Brassica" | "Broadleaf";
  addresses: IssueKey[];
  /** Soils where this species is a poor fit. */
  soilAvoid?: SoilKey[];
  note: string;
  /** Directional drilling rate as a solo stand, kg/ha (use ~⅓–½ in a mix). */
  rateKgHa: string;
  /** Temperate (EU/UK) drilling window; shift ~2 weeks for cooler/warmer areas. */
  sowWindow: string;
  /** How to terminate it. */
  terminate: string;
}

const COVER_SPECIES: CoverSpecies[] = [
  {
    name: "Cereal rye",
    family: "Grass",
    addresses: ["erosion", "weeds", "nitrogen", "drought"],
    note: "Hardy winter cover that scavenges leftover nitrogen and smothers weeds. Very reliable establishment.",
    rateKgHa: "90–110",
    sowWindow: "late Aug – early Oct",
    terminate: "roll/crimp, graze, or spray at flowering (late Apr–May) before a spring crop",
  },
  {
    name: "Oats",
    family: "Grass",
    addresses: ["erosion", "weeds"],
    soilAvoid: ["peat"],
    note: "Fast autumn cover that usually winterkills, so termination is easy the following spring.",
    rateKgHa: "80–100",
    sowWindow: "Aug – mid Sept",
    terminate: "usually winterkills in a hard frost; otherwise mow/incorporate in spring",
  },
  {
    name: "Crimson / red clover",
    family: "Legume",
    addresses: ["nitrogen", "lowOM"],
    note: "Fixes nitrogen for the following crop and builds organic matter. Best in a mix.",
    rateKgHa: "15–20",
    sowWindow: "Aug – early Sept",
    terminate: "mow or incorporate in spring once it has flowered and fixed nitrogen",
  },
  {
    name: "Vetch",
    family: "Legume",
    addresses: ["nitrogen", "lowOM"],
    note: "Strong nitrogen fixer; pairs well with a cereal that gives it something to climb.",
    rateKgHa: "25–40",
    sowWindow: "Aug – mid Sept",
    terminate: "terminate at early flowering for peak nitrogen; can be tough to kill, so plan it",
  },
  {
    name: "Forage / tillage radish",
    family: "Brassica",
    addresses: ["compaction", "drainage", "nitrogen"],
    soilAvoid: ["peat"],
    note: "Deep taproot punches through compaction and improves drainage, then winterkills, leaving channels behind.",
    rateKgHa: "6–10 (2–4 in a mix)",
    sowWindow: "Aug – early Sept (needs autumn growth)",
    terminate: "winterkills in frost, leaving root channels behind",
  },
  {
    name: "Mustard",
    family: "Brassica",
    addresses: ["weeds", "pests", "compaction"],
    note: "Biofumigant that suppresses weeds and some soil-borne pests; quick to establish.",
    rateKgHa: "8–12",
    sowWindow: "Aug – Sept",
    terminate: "incorporate at green-bud/flowering for the biofumigant effect, before it seeds",
  },
  {
    name: "Phacelia",
    family: "Broadleaf",
    addresses: ["weeds", "pests"],
    note: "Fast weed-suppressing cover that also feeds pollinators and beneficial insects.",
    rateKgHa: "8–12",
    sowWindow: "Apr – early Sept",
    terminate: "winterkills in a hard frost; otherwise mow before it sets seed",
  },
  {
    name: "Buckwheat",
    family: "Broadleaf",
    addresses: ["weeds", "lowOM"],
    note: "Very fast warm-season cover for weedy or poor ground; frost-sensitive, so a summer gap-filler.",
    rateKgHa: "50–70",
    sowWindow: "May – Aug (frost-free window)",
    terminate: "mow or incorporate before seed set (~5–6 weeks); killed by first frost",
  },
];

export interface SpeciesPick extends CoverSpecies {
  /** Which of the grower's selected issues this species helps with. */
  matched: IssueKey[];
}

/**
 * Recommend cover-crop species for the grower's issues + soil, plus a suggested
 * mix that spans families. Returns [] of picks ranked by how many issues they hit.
 */
export function recommendCoverCrops(
  issues: IssueKey[],
  soil: SoilKey | null,
): { picks: SpeciesPick[]; mixNote: string } {
  const scored = COVER_SPECIES.map((sp) => {
    const matched = sp.addresses.filter((a) => issues.includes(a));
    const soilPenalty = soil && sp.soilAvoid?.includes(soil) ? true : false;
    return { sp, matched, soilPenalty };
  })
    .filter((x) => !x.soilPenalty && (issues.length === 0 || x.matched.length > 0))
    .sort((a, b) => b.matched.length - a.matched.length);

  // If no issues chosen, offer a sensible diverse default.
  const chosen = issues.length === 0
    ? COVER_SPECIES.filter((s) =>
        ["Cereal rye", "Crimson / red clover", "Forage / tillage radish"].includes(s.name),
      ).map((sp) => ({ ...sp, matched: [] as IssueKey[] }))
    : scored.slice(0, 4).map((x) => ({ ...x.sp, matched: x.matched }));

  // Build a mix note if the picks span families.
  const families = new Set(chosen.map((c) => c.family));
  const mixNote =
    families.size >= 2
      ? `A mix spanning ${[...families].join(", ").toLowerCase()} gives you several benefits at once and usually the widest funding eligibility.`
      : "A simple single-species stand is fine to start; add diversity once you're confident with establishment.";

  return { picks: chosen, mixNote };
}

/**
 * Reorder practices by how many of the grower's issues each addresses, so
 * "start here" reflects what they actually want to fix (ties fall back to the
 * base priority). Returns the practices not yet in play, best-first.
 */
export function recommendPractices(
  issues: IssueKey[],
  inPlay: Set<string>,
): { practice: PracticeDef; matched: IssueKey[] }[] {
  return PRACTICES.filter((p) => !inPlay.has(p.key))
    .map((p) => ({ practice: p, matched: p.addresses.filter((a) => issues.includes(a)) }))
    .sort(
      (a, b) =>
        b.matched.length - a.matched.length ||
        a.practice.priority - b.practice.priority,
    );
}

// Soil-specific framing for the "where you stand" insight. Directional, anchored
// to soil behaviour, not invented survey stats.
const SOIL_INSIGHT: Record<SoilKey, string> = {
  sandy:
    "On light, sandy ground, nitrogen and moisture drain away fast. Catch crops like cereal rye plus building organic matter give the quickest wins here.",
  loam:
    "Loam is forgiving ground to transition on — most practices establish reliably, so your sequencing and funding matter more than soil constraints.",
  clay:
    "On heavy clay, compaction and drainage usually limit yield first. Deep-rooting covers like tillage radish and phased reduced-tillage tend to pay back fastest.",
  silt:
    "Silty soils cap and erode easily, so keeping them covered year-round is the priority — cover crops are the natural first move.",
  chalk:
    "Thin, free-draining chalk soils dry out and hold little organic matter, so building it with cover crops and compost is the key lever.",
  peat:
    "Peaty soils are carbon-rich but fragile. Minimise disturbance and skip deep-rooting brassicas — protect what's there rather than pushing hard.",
};

/**
 * A few honest, profile-tailored "where you stand" insights. Anchored to soil
 * behaviour and transition research (SARE, MSU/Datta 2025), clearly directional
 * — no fabricated precise adoption percentages.
 */
export function buildBenchmark(
  soil: SoilKey | null,
  running: string[],
  adding: string[],
): string[] {
  const out: string[] = [];
  if (soil) out.push(SOIL_INSIGHT[soil]);

  if (running.length > 0) {
    const labels = running
      .map((k) => PRACTICES.find((p) => p.key === k)?.label ?? k)
      .join(" and ");
    out.push(
      `You already run ${labels.toLowerCase()}, which puts you ahead of a standing start — the next gain comes from stacking the missing practices onto it.`,
    );
  } else {
    out.push(
      "Cover crops are the single most commonly funded first step, so for a farm starting out that's usually where the money and momentum begin.",
    );
  }

  if (adding.includes("reducedTill")) {
    out.push(
      "Budget for no-till to trim yields by roughly 5% in the first year or two before it recovers, and lean on your cover crop for weed control so you don't fall back on the plough.",
    );
  }

  out.push(
    "Farms that combine cover crops, reduced tillage and diverse rotation typically cut fertiliser use meaningfully over three to four years. The practices reinforce each other, so doing them together beats one at a time.",
  );

  return out;
}

// Agronomic roll-out order: cover crops first (fastest, most funded), then
// reduced tillage (using the cover for weed suppression), then rotation, then
// compost. Research (MSU/Datta 2025, SARE) shows these work as a SYSTEM and
// underperform bolted on in isolation, so the sequence matters.
const SEQ_ORDER = ["coverCrops", "reducedTill", "rotation", "compost"];

export interface TimelineStep {
  year: string;
  title: string;
  detail: string;
}

/**
 * Turn the practices a grower is adding into a sequenced first-three-years plan.
 * This is the differentiator: competitors output a menu, we output an order.
 */
export function buildTimeline(
  adding: string[],
  firstField: string | null,
): TimelineStep[] {
  const lab = (k: string) =>
    PRACTICES.find((p) => p.key === k)?.label ?? k;
  const rollout = SEQ_ORDER.filter((k) => adding.includes(k));
  const [y1, y2, y3] = rollout;
  const where = firstField
    ? `Start on ${firstField}.`
    : "Start on one field, not the whole farm.";

  return [
    {
      year: "Year 1",
      title: y1 ? `Baseline, then start ${lab(y1).toLowerCase()}` : "Lock your baseline",
      detail: `${where} Record a soil test and your current inputs first — that is your start line — then ${
        y1
          ? `establish ${lab(y1).toLowerCase()} in a rotation gap`
          : "deepen the practices you already run"
      }. Keep the rest of the farm as your control to compare against.`,
    },
    {
      year: "Year 2",
      title: y2 ? `Add ${lab(y2).toLowerCase()}` : "Expand what worked",
      detail: y2
        ? `Bring in ${lab(y2).toLowerCase()}${
            y2 === "reducedTill"
              ? ", leaning on your cover crop for weed suppression so you don't fall back on the plough"
              : ""
          }, and widen your year-1 practice to more fields.`
        : "Roll your year-1 practice out to more fields now that you have seen it work on your trial ground.",
    },
    {
      year: "Year 3",
      title: y3 ? `Add ${lab(y3).toLowerCase()}, then review` : "Review and scale",
      detail: `${
        y3 ? `Layer in ${lab(y3).toLowerCase()}. ` : ""
      }Compare your trial fields against your control and scale what actually worked. Because these practices compound as a system, this is usually where the numbers start turning up.`,
    },
  ];
}
