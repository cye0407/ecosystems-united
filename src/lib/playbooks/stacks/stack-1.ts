import type { StackContent } from "../content-types";

// Stack 1 — The Defensible Baseline (Metrics). Funnels from metrics-assessment.
export const stack1Content: StackContent = {
  slug: "stack-1-metrics",
  stackNum: 1,
  accent: "#3D2E7C",
  toolHref: "/tools/metrics-assessment",
  toolLabel: "Back to the baseline assessment",

  intakeTitle: "Build your defensible baseline",
  intakeIntro:
    "Tell us about your operation and what's driving the need for data. We'll build a plan to establish a baseline you can defend to a buyer, a bank, or a CSRD report — measured, not estimated.",
  sectorLabel: "What do you produce?",
  sectorPlaceholder: "e.g. dairy, arable, mixed",
  scaleLabel: "hectares",
  scaleDefault: 100,

  issuesTitle: "What's driving this?",
  issues: [
    { key: "buyerAsks", label: "Buyers asking for data I don't have" },
    { key: "csrd", label: "CSRD / VSME reporting pressure" },
    { key: "finance", label: "Grants or finance need evidence" },
    { key: "noVisibility", label: "No clear picture of my own numbers" },
    { key: "claims", label: "Want to make credible sustainability claims" },
    { key: "benchmarking", label: "Can't tell if I'm improving" },
  ],

  focusTitle: "What to measure, in order",
  focusIntro:
    "Start where the data already exists (your bills) and where the footprint is biggest, then widen.",
  focusAreas: [
    {
      key: "energy",
      label: "Energy & fuel baseline",
      why: "Electricity and fuel are already on your bills and drive most of your footprint, so this is the fastest, highest-value place to start.",
      pros: [
        "The data already exists on 12 months of bills and fuel receipts.",
        "Drives the biggest share of most operations' emissions, so it moves the number most.",
        "Immediately useful for both cost control and reporting.",
      ],
      cons: [
        "Multiple meters or fuel types take some sorting the first time.",
        "Sub-metering to see where energy goes is a later, optional step.",
      ],
      howTo:
        "Pull the last 12 months of electricity bills and fuel/diesel purchases into one place, by month.",
      addresses: ["noVisibility", "buyerAsks", "csrd", "benchmarking"],
      priority: 1,
    },
    {
      key: "emissions",
      label: "Emissions inventory (Scope 1 & 2)",
      why: "Converting your energy and fuel into CO2e with standard factors gives you the number buyers and CSRD actually ask for.",
      pros: [
        "Turns bills you already have into a credible carbon figure.",
        "Uses recognised factors (IPCC / Defra), so it stands up to scrutiny.",
        "The foundation for any credible claim or reduction target.",
      ],
      cons: [
        "Choosing the right factors and boundary needs care the first time.",
        "Scope 3 (upstream) is a bigger, separate job.",
      ],
      howTo:
        "Apply standard emission factors to your energy and fuel totals (the tracker does this automatically), and set your reporting boundary.",
      addresses: ["buyerAsks", "csrd", "claims"],
      priority: 2,
    },
    {
      key: "waterWaste",
      label: "Water & waste records",
      why: "Water and waste are the next data points buyers and CSRD ask for, and quantifying waste often reveals recoverable cost.",
      pros: [
        "Rounds out a reporting-grade baseline beyond carbon.",
        "Waste quantities frequently expose lost margin (Stack 3 territory).",
      ],
      cons: [
        "Water is often unmetered, so you may need to start with estimates.",
        "Waste streams take a period of logging to characterise.",
      ],
      howTo:
        "Record water use for a representative period and weigh or estimate your main waste streams by type.",
      addresses: ["csrd", "noVisibility"],
      priority: 3,
    },
    {
      key: "landInputs",
      label: "Land use & key inputs",
      why: "Area, land-use change, and your main inputs complete the picture buyers and schemes want, and feed directly into Scope 3.",
      pros: [
        "Captures the land data grants and CSRD increasingly require.",
        "Sets up upstream (Scope 3) reporting without re-collecting.",
      ],
      cons: [
        "Input records can be scattered across suppliers and invoices.",
      ],
      howTo:
        "Record your area by use, any recent land-use change, and your main purchased inputs (fertiliser, feed, fuel) with quantities.",
      addresses: ["csrd", "claims"],
      priority: 4,
    },
  ],

  playbookHeadline: "Your defensible-baseline plan",
  insights: [
    "A defensible baseline is what every buyer questionnaire, CSRD report and green claim is built on. Without it you're guessing, and buyers can tell.",
    "You don't need perfect data to start. A baseline built from real bills beats an estimate, and you tighten it over time.",
    "The order matters: energy and fuel first (they're on your bills and drive most of the footprint), then water, waste and land.",
  ],

  resourcesTitle: "The standards this is built on",
  resources: [
    {
      name: "GHG Protocol",
      snippet: "The corporate standard your buyers' carbon accounting is built on. Defines Scopes 1, 2 and 3.",
      url: "https://ghgprotocol.org/corporate-standard",
    },
    {
      name: "VSME standard (EFRAG)",
      snippet: "The voluntary standard for SMEs reporting sustainability data up the value chain — the lighter path to buyer-ready data.",
      url: "https://www.efrag.org/en/projects/voluntary-sme-standard-vsme/concluded",
    },
    {
      name: "IPCC 2019 emission factors",
      snippet: "The Tier 1 default factors behind most farm carbon calculations, including the tracker's.",
      url: "https://www.ipcc-nggip.iges.or.jp/public/2019rf/index.html",
    },
  ],
  resourcesNote:
    "You don't need to read these to start — the tracker applies recognised factors for you. They're here so your numbers are defensible when someone asks how you got them.",

  checklistTitle: "Getting your baseline in place",
  checklist: [
    "Decide your reporting boundary (what's in and out of scope)",
    "Gather the last 12 months of electricity and fuel bills",
    "Apply recognised emission factors (or let the tracker do it)",
    "Record water and main waste streams for a baseline period",
    "Log your land use and main purchased inputs",
    "Keep it all in one place you can update, not a one-off spreadsheet",
  ],

  kpisTitle: "What to track",
  kpis: [
    { k: "Total emissions (t CO2e)", v: "Scope 1 & 2 to start, Scope 3 as you widen. The headline number." },
    { k: "Energy use (kWh)", v: "Electricity + fuel, by month, so you can see trend and seasonality." },
    { k: "Energy intensity", v: "kWh per unit of output — lets you compare across years and to peers." },
    { k: "Water use (m³)", v: "Metered or estimated, for a representative period." },
    { k: "Waste (t, by type)", v: "By stream, so you can spot what's recoverable." },
    { k: "Data quality (%)", v: "Share of numbers backed by primary evidence, not estimates. Improves over time." },
  ],
};
