import type { StackMeta } from "@/lib/stacks";

// ---------------------------------------------------------------------------
// Playbook types — the deterministic backbone.
//
// A Playbook is generated in two layers:
//   Layer A (this engine): rules compute the levers, select vetted source
//           snippets, and render a COMPLETE, honest, templated plan. No API key.
//   Layer B (later):       one grounded LLM call rewrites the prose to feel
//           bespoke, constrained to the Layer A scaffold + selected sources.
//
// Layer A on its own is a shippable product. Layer B only buys "written-for-you"
// polish — it can never introduce a number or claim the engine didn't produce.
// ---------------------------------------------------------------------------

export type Region = "eu" | "uk" | "us" | "other";

export const REGION_LABELS: Record<Region, string> = {
  eu: "European Union",
  uk: "United Kingdom",
  us: "United States",
  other: "Elsewhere",
};

/** Directional ROI figures carried over from the Regenerative ROI tool. */
export interface RoiSnapshot {
  paybackYear: number | null;
  tenYearNet: number;
  tenYearNetPerHa: number;
  includeCarbon: boolean;
}

/** Everything the engine needs to build a Stack-5 playbook. */
export interface PlaybookInputs {
  stack: number;
  hectares: number;
  region: Region;
  /** Practice keys already adopted / selected: coverCrops, reducedTill, compost, rotation. */
  practices: string[];
  inputSpendPerHa?: number;
  grossMarginPerHa?: number;
  roi?: RoiSnapshot;
}

/** A vetted source from the authority ledger. */
export interface PlaybookSource {
  id: string;
  label: string;
  org: string;
  /** GOV | STD | RES | DATA — provenance class. */
  tier: "GOV" | "STD" | "RES" | "DATA";
  url: string;
  /** Short vetted snippet the plan may draw on. Facts come from here, never invented. */
  snippet: string;
}

/** One sequenced action in the plan. */
export interface PlaybookMove {
  order: number;
  title: string;
  rationale: string;
  effect: string;
  /** IDs into the source ledger that back this move. */
  sourceIds: string[];
}

export interface FundingProgram {
  name: string;
  snippet: string;
  sourceId: string;
}

export interface PlaybookNumber {
  label: string;
  value: string;
  note: string;
}

export interface Playbook {
  stack: StackMeta;
  generatedFor: { hectares: number; region: Region };
  headline: string;
  /** Templated opening prose (Layer A). */
  intro: string;
  numbers: PlaybookNumber[];
  moves: PlaybookMove[];
  funding: {
    region: Region;
    programs: FundingProgram[];
    note: string;
  };
  practiceGuidance: {
    adopted: string[];
    recommended: { practice: string; why: string; sourceIds: string[] }[];
  };
  /** Fixed, non-negotiable honesty text. Layer B may never alter this. */
  disclaimer: string;
  /** Every source the plan drew on, for defensibility. */
  sources: PlaybookSource[];
  /** Layer B LLM prose. null until composed (blocked on ANTHROPIC_API_KEY). */
  composed: string | null;
}
