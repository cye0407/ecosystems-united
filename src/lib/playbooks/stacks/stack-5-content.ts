import type { StackContent } from "../content-types";
import { PRACTICES } from "../stack-5";
import { FARM_ISSUES } from "../stack-5-recommend";

// Stack 5 — The Compounding Engine (Regeneration). The reference playbook.
// Uses the shared shell; its rich modules (J-curve, economics, cover-crop
// species, region funding) are supplied as slots (see stack5Slots.tsx). Empty
// resources/checklist here because those are region-specific and rendered by the
// playbookBottom slot instead; KPIs are the static measurement plan.
export const stack5Content: StackContent = {
  slug: "stack-5-regeneration",
  stackNum: 5,
  accent: "#2D5A47",
  handoffKey: "eu:playbook:stack-5",
  toolHref: "/tools/regenerative-roi",
  toolLabel: "Back to the ROI calculator",

  intakeTitle: "Tell us about your farm, get your playbook",
  intakeIntro:
    "Answer a few things about your land, soil, and what you want to fix. We build you a personalized regenerative playbook: the practices to add in order, the cover-crop mix for your soil, an honest look at the numbers, and the funding that pays for it. What you enter becomes your Passport when you're ready, so you only fill it in once.",
  sectorLabel: "What do you grow?",
  sectorPlaceholder: "e.g. winter wheat, barley, oilseed rape",
  scaleLabel: "hectares",
  scaleDefault: 100,

  issuesTitle: "What do you want to fix?",
  issues: FARM_ISSUES,

  focusTitle: "Choose what to add next",
  focusIntro: "Toggle a practice and watch the numbers on the right move. Start with the one marked.",
  focusAreas: PRACTICES,

  playbookHeadline: "Your regenerative transition, step by step",
  // The dynamic, soil-aware "where you stand" comes from the benchmark slot.
  insights: [],

  resourcesTitle: "Sources",
  resources: [],
  resourcesNote: "",

  checklistTitle: "How to claim it",
  checklist: [],

  kpisTitle: "What to measure",
  kpis: [
    { k: "Soil organic matter (%)", v: "Lab soil test. The headline number for soil health and carbon." },
    { k: "Water infiltration", v: "Time how long water takes to soak in. Improves as structure builds." },
    { k: "Earthworm count", v: "Count in a spade-full in spring. A quick, free biology proxy." },
    { k: "Yield per hectare", v: "By field, so you can compare trial fields against your control." },
    { k: "Input spend (€/ha)", v: "Fertiliser + crop protection. The line you expect to fall." },
    { k: "Fuel use", v: "Litres per hectare. Drops as you cut tillage passes." },
  ],
};
