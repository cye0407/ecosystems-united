import { getStack } from "@/lib/stacks";
import { getSources } from "./source-ledger";
import type {
  Playbook,
  PlaybookInputs,
  PlaybookMove,
  FundingProgram,
  Region,
} from "./types";
import { REGION_LABELS } from "./types";

// ---------------------------------------------------------------------------
// Stack 5 — The Compounding Engine (Regeneration). The reference playbook.
//
// Deterministic. Given the levers a grower gives us (size, region, practices,
// and the directional ROI figures from the calculator), it selects vetted
// practices, sequences the moves, maps regional funding, and renders honest
// templated prose. Every number is passed through, never invented. Carbon is
// always framed as verifiable upside, never a banked line.
// ---------------------------------------------------------------------------

interface PracticeDef {
  key: string;
  label: string;
  /** Why this practice earns its place, grounded in a source. */
  why: string;
  sourceIds: string[];
  /** Rank for sequencing when recommending what to add next (lower = sooner). */
  priority: number;
}

const PRACTICES: PracticeDef[] = [
  {
    key: "coverCrops",
    label: "Cover crops",
    why: "Keeping living roots and cover through the shoulder seasons is the fastest lever on infiltration and fertiliser need — and the practice most funding schemes pay for.",
    sourceIds: ["sare_cover_crops", "usda_soil_health", "ahdb_soil"],
    priority: 1,
  },
  {
    key: "reducedTill",
    label: "Reduced / no-till",
    why: "Cutting disturbance protects the soil structure and biology your other practices are building, but phase it in — an abrupt switch can dent yield before it recovers.",
    sourceIds: ["usda_soil_health", "ahdb_soil"],
    priority: 2,
  },
  {
    key: "rotation",
    label: "Diverse rotation",
    why: "Diversity breaks pest and disease cycles and spreads market risk across more than one crop — the resilience half of the compounding engine.",
    sourceIds: ["usda_soil_health", "rodale_fst"],
    priority: 3,
  },
  {
    key: "compost",
    label: "Compost / manure",
    why: "Organic amendments feed soil biology and recycle nutrients you'd otherwise buy in, but they are the slowest-compounding of the four — layer them on once the cheaper levers are running.",
    sourceIds: ["fao_gsp", "rodale_fst"],
    priority: 4,
  },
];

const FUNDING_BY_REGION: Record<
  Region,
  { programs: FundingProgram[]; note: string }
> = {
  eu: {
    programs: [
      {
        name: "CAP eco-schemes & rural development",
        snippet:
          "CAP eco-schemes and rural-development measures pay for cover crops, reduced tillage and rotation — but the rates and eligibility are set in your member state's national CAP Strategic Plan.",
        sourceId: "eu_cap",
      },
    ],
    note: "Check your national CAP Strategic Plan for the exact eco-scheme payments in your country — they vary widely between member states.",
  },
  uk: {
    programs: [
      {
        name: "Sustainable Farming Incentive (SFI)",
        snippet:
          "England's SFI pays per-hectare for specific soil, cover-crop and integrated-management actions, with rates published and updated by Defra.",
        sourceId: "uk_sfi",
      },
    ],
    note: "SFI actions and payment rates change periodically — confirm the current offer on gov.uk before you build them into your budget. Devolved nations run their own schemes.",
  },
  us: {
    programs: [
      {
        name: "EQIP & CSP (USDA NRCS)",
        snippet:
          "EQIP cost-shares specific conservation practices and CSP rewards whole-farm conservation performance; both are applied for through your local NRCS office.",
        sourceId: "usda_eqip_csp",
      },
    ],
    note: "Talk to your local NRCS office early — application windows and ranking pools are competitive and time-bound.",
  },
  other: {
    programs: [],
    note: "We don't yet carry a verified funding map for your region. Check your national or regional agriculture ministry for soil-health, agri-environment, or cover-crop payments before assuming none exist.",
  },
};

function formatSignedEur(value: number): string {
  const rounded = Math.round(value);
  const abs = Math.abs(rounded).toLocaleString("en-IE");
  return `${rounded < 0 ? "−" : ""}€${abs}`;
}

const DISCLAIMER =
  "This playbook is a planning tool, not a guarantee. Every figure is directional — carried straight from the assumptions you entered in the calculator — and should be validated against your own records and an agronomist before you commit capital. Carbon and premium income are framed as upside that requires additionality and independent third-party verification; they are never a line you can bank. Regional funding is cited only where we hold a source for your region.";

export function buildStack5Playbook(inputs: PlaybookInputs): Playbook {
  const stack = getStack(5)!;
  const { hectares, region, practices, roi } = inputs;

  const adopted = PRACTICES.filter((p) => practices.includes(p.key));
  const missing = PRACTICES.filter((p) => !practices.includes(p.key)).sort(
    (a, b) => a.priority - b.priority,
  );

  // ---- Numbers block (directional, from the ROI snapshot) ----------------
  const numbers = [];
  if (roi) {
    numbers.push({
      label: "Directional payback",
      value: roi.paybackYear ? `Year ${roi.paybackYear}` : "Beyond 10 years",
      note: roi.paybackYear
        ? "The first year your cumulative return turns positive on the assumptions you entered."
        : "On the assumptions you entered, the model stays negative through year 10 — worth revisiting the levers.",
    });
    numbers.push({
      label: "10-year cumulative net",
      value: formatSignedEur(roi.tenYearNet),
      note: `Across your ${hectares.toLocaleString("en-IE")} ha, directional. ${
        roi.includeCarbon
          ? "Includes carbon as upside — treat that portion as unverified."
          : "Excludes carbon income entirely."
      }`,
    });
    numbers.push({
      label: "Per hectare (10y)",
      value: formatSignedEur(roi.tenYearNetPerHa),
      note: "Cumulative net per hectare — the number to compare against your current gross margin.",
    });
  }

  // ---- Moves (sequenced) -------------------------------------------------
  const moves: PlaybookMove[] = [];
  let order = 1;

  moves.push({
    order: order++,
    title: "Lock a defensible baseline first",
    rationale:
      "Before you change a practice, capture where you are — inputs, soil, yields, costs. Without a baseline you can't prove an improvement to a buyer, a bank, or a funding body, and you can't tell the compounding engine from noise.",
    effect:
      "A start-line you can measure everything against. This is Stack 1 doing its job for Stack 5.",
    sourceIds: ["ipcc_2019", "ghg_protocol_ag"],
  });

  if (missing.length > 0) {
    const next = missing[0];
    moves.push({
      order: order++,
      title: `Add the highest-leverage practice you're missing: ${next.label.toLowerCase()}`,
      rationale: next.why,
      effect:
        "The steepest part of the savings ramp comes from the first one or two practices — start where the cost-to-benefit is best, not where it's hardest.",
      sourceIds: next.sourceIds,
    });
  } else {
    moves.push({
      order: order++,
      title: "Deepen the practices you already run",
      rationale:
        "You already run all four core practices, so the gains now come from doing them better — tighter cover-crop mixes for your rotation slots, and pushing tillage reduction further where the soil can take it.",
      effect: "Compounding on top of a working system rather than adding scope.",
      sourceIds: ["ahdb_soil", "usda_soil_health"],
    });
  }

  moves.push({
    order: order++,
    title: "Phase the transition to ride the J-curve, not fall off it",
    rationale:
      "A regenerative transition usually costs before it pays — a temporary yield dip in the first year or two while the soil adjusts. Stage the change across fields and seasons so the dip never lands on your whole operation at once.",
    effect:
      "The early cash dip stays survivable, and each phased field de-risks the next.",
    sourceIds: ["rodale_fst", "ahdb_soil"],
  });

  const funding = FUNDING_BY_REGION[region];
  if (funding.programs.length > 0) {
    moves.push({
      order: order++,
      title: "Claim the funding that already pays for this",
      rationale: `Several of these practices are directly cost-shared where you farm (${REGION_LABELS[region]}). ${funding.programs[0].snippet}`,
      effect:
        "Public payments shrink the up-front outlay and pull your payback year forward.",
      sourceIds: funding.programs.map((p) => p.sourceId),
    });
  }

  moves.push({
    order: order++,
    title: "Treat carbon and premiums as verifiable upside — last",
    rationale:
      "Carbon income and 'regenerative' premiums can be real, but only after additionality and independent verification. Build the plan so it pays on input savings and resilience alone; let any carbon revenue be a bonus you earn once you can prove it.",
    effect:
      "The plan stands up even if no carbon market materialises — and you stay clear of green-claims rules.",
    sourceIds: ["eu_crcf", "eu_green_claims"],
  });

  // ---- Practice guidance -------------------------------------------------
  const recommended = missing.map((p) => ({
    practice: p.label,
    why: p.why,
    sourceIds: p.sourceIds,
  }));

  // ---- Intro prose (Layer A, templated + honest) -------------------------
  const intro =
    "A regenerative transition costs before it pays. This plan sequences the moves so the early dip stays survivable and each step makes the next one cheaper.";

  const headline = "Your regenerative transition plan";

  // ---- Collect every source the plan drew on -----------------------------
  const sourceIds = new Set<string>();
  moves.forEach((m) => m.sourceIds.forEach((id) => sourceIds.add(id)));
  recommended.forEach((r) => r.sourceIds.forEach((id) => sourceIds.add(id)));
  funding.programs.forEach((p) => sourceIds.add(p.sourceId));
  const sources = getSources([...sourceIds]);

  return {
    stack,
    generatedFor: { hectares, region },
    headline,
    intro,
    numbers,
    moves,
    funding: { region, programs: funding.programs, note: funding.note },
    practiceGuidance: {
      adopted: adopted.map((p) => p.label),
      recommended,
    },
    disclaimer: DISCLAIMER,
    sources,
    composed: null, // Layer B (LLM prose) — blocked on ANTHROPIC_API_KEY.
  };
}
