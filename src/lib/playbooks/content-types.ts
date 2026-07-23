// ---------------------------------------------------------------------------
// Generic playbook content contract for stacks 1-4.
//
// Stack 5 (regeneration) has a bespoke page with an ROI model + cover-crop
// agronomy. Stacks 1-4 funnel from assessments (a banded score, not a
// calculator), so they share ONE structure — a farm/operation profile that
// generates a personalized plan — parameterized by a per-stack content module
// implementing this contract. The shared <StackPlaybook> renders it.
// ---------------------------------------------------------------------------

export interface FocusArea {
  key: string;
  label: string;
  /** Why this move earns its place. */
  why: string;
  pros: string[];
  cons: string[];
  /** First concrete "do this" step. */
  howTo: string;
  /** Issue keys this move helps address. */
  addresses: string[];
  /** Roll-out order (lower = sooner). */
  priority: number;
}

export interface StackIssue {
  key: string;
  label: string;
}

export interface StackResource {
  name: string;
  snippet: string;
  url?: string;
}

export interface StackKpi {
  k: string;
  v: string;
}

export interface StackContent {
  slug: string;
  stackNum: number;
  accent: string;
  /** localStorage key the source tool writes its handoff to (optional). */
  handoffKey?: string;
  toolHref: string;
  toolLabel: string;

  // Intake copy
  intakeTitle: string;
  intakeIntro: string;
  /** Label for the "what you produce / do" free-text field. */
  sectorLabel: string;
  sectorPlaceholder: string;
  /** Unit for the scale input, e.g. "hectares", "employees". */
  scaleLabel: string;
  scaleDefault: number;

  issuesTitle: string;
  issues: StackIssue[];

  focusTitle: string;
  focusIntro: string;
  focusAreas: FocusArea[];

  // Playbook copy
  playbookHeadline: string;
  /** A few honest, static "where you stand" framing lines (issue-agnostic). */
  insights: string[];

  resourcesTitle: string;
  resources: StackResource[];
  resourcesNote: string;

  checklistTitle: string;
  checklist: string[];

  kpisTitle: string;
  kpis: StackKpi[];
}

// --- Generic helpers shared across stacks 1-4 ------------------------------

/** Order focus areas by how many of the grower's issues each addresses. */
export function recommendFocusAreas(
  focusAreas: FocusArea[],
  issues: string[],
  inPlay: Set<string>,
): { area: FocusArea; matched: string[] }[] {
  return focusAreas
    .filter((f) => !inPlay.has(f.key))
    .map((f) => ({ area: f, matched: f.addresses.filter((a) => issues.includes(a)) }))
    .sort(
      (a, b) => b.matched.length - a.matched.length || a.area.priority - b.area.priority,
    );
}

export interface TimelineStep {
  year: string;
  title: string;
  detail: string;
}

/** Sequence the focus areas a grower is adding into a first-three-years plan. */
export function buildGenericTimeline(
  adding: FocusArea[],
  firstField: string | null,
): TimelineStep[] {
  const ordered = [...adding].sort((a, b) => a.priority - b.priority);
  const [y1, y2, y3] = ordered;
  const where = firstField
    ? `Start with ${firstField}.`
    : "Start small — one area, one part of the operation.";
  return [
    {
      year: "Year 1",
      title: y1 ? `Baseline, then start ${y1.label.toLowerCase()}` : "Lock your baseline",
      detail: `${where} Record where you are today first — that is your start line — then ${
        y1 ? `put ${y1.label.toLowerCase()} in place` : "deepen what you already do"
      }. ${y1 ? y1.howTo : ""}`,
    },
    {
      year: "Year 2",
      title: y2 ? `Add ${y2.label.toLowerCase()}` : "Expand what worked",
      detail: y2
        ? `Bring in ${y2.label.toLowerCase()} and widen your year-1 move. ${y2.howTo}`
        : "Roll your year-1 move out more widely now that you have seen it work.",
    },
    {
      year: "Year 3",
      title: y3 ? `Add ${y3.label.toLowerCase()}, then review` : "Review and scale",
      detail: `${
        y3 ? `Layer in ${y3.label.toLowerCase()}. ` : ""
      }Compare against your baseline and scale what actually moved the numbers.`,
    },
  ];
}

/** Honest, profile-tailored "where you stand" lines. */
export function buildGenericBenchmark(
  content: StackContent,
  running: FocusArea[],
  addingReducedFirst: FocusArea | null,
): string[] {
  const out = [...content.insights];
  if (running.length > 0) {
    out.unshift(
      `You already have ${running
        .map((r) => r.label.toLowerCase())
        .join(" and ")} in place, which puts you ahead — the next gain comes from stacking the missing pieces onto it.`,
    );
  }
  if (addingReducedFirst) {
    out.push(
      `Starting with ${addingReducedFirst.label.toLowerCase()} is the highest-leverage first move for what you told us you want to fix.`,
    );
  }
  return out;
}
