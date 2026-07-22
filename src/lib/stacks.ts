// ---------------------------------------------------------------------------
// The Five Stacks — canonical model.
//
// This list was previously duplicated inline in framework/page.tsx and
// tools/stack-assessment/page.tsx. It is centralised here so the Playbook
// engine, the framework pages, and the assessments all draw from one source.
// If you change a stack's name/slug/colour, do it here.
// ---------------------------------------------------------------------------

export interface StackMeta {
  num: number;
  /** Short marketing title, e.g. "The Compounding Engine". */
  title: string;
  /** One-word theme used in tool copy, e.g. "Regeneration". */
  theme: string;
  /** URL slug for the framework page: /framework/{slug}. */
  slug: string;
  /** Brand colour for this stack. */
  color: string;
  /** The governing principle. */
  principle: string;
  /** The outcome a farm gets from operating this stack. */
  outcome: string;
}

export const STACKS: StackMeta[] = [
  {
    num: 1,
    title: "The Defensible Baseline",
    theme: "Metrics",
    slug: "stack-1-metrics",
    color: "#3D2E7C",
    principle: "If it can't be measured, it can't be defended",
    outcome:
      "Defensible baseline data for emissions, energy, water, waste, land use",
  },
  {
    num: 2,
    title: "Operational Efficiency",
    theme: "Efficiency",
    slug: "stack-2-efficiency",
    color: "#5B4A9E",
    principle: "Fix leaks before adding new initiatives",
    outcome: "Data reveals patterns — where margins leak, where processes waste",
  },
  {
    num: 3,
    title: "Margin Recovery",
    theme: "Circularity",
    slug: "stack-3-circularity",
    color: "#7B6BB8",
    principle: "What you discard is lost margin",
    outcome: "Waste streams converted into revenue or cost-savings",
  },
  {
    num: 4,
    title: "Structural Resilience",
    theme: "Resilience",
    slug: "stack-4-resilience",
    color: "#9A8CD0",
    principle: "Systems must absorb shocks without breaking",
    outcome: "Multiple value streams so you're not dependent on one thing",
  },
  {
    num: 5,
    title: "The Compounding Engine",
    theme: "Regeneration",
    slug: "stack-5-regeneration",
    color: "#B8ADE3",
    principle: "Build systems that improve as they operate",
    outcome:
      "Automated feedback loop — more efficient and more profitable with every cycle",
  },
];

export function getStack(num: number): StackMeta | undefined {
  return STACKS.find((s) => s.num === num);
}

export function getStackBySlug(slug: string): StackMeta | undefined {
  return STACKS.find((s) => s.slug === slug);
}
