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
    "Tell us about your operation and what's driving the need for data. We'll build a plan for a documented baseline using activity data, evidence, appropriate emission factors, and clearly labelled estimates.",
  scopeNote:
    "This worksheet organizes the evidence job. It does not calculate a complete emissions inventory or produce a CSRD report. Farm emissions boundaries vary by production system, so verify material sources and methods before sharing a total.",
  handoffKey: "eu:playbook:stack-1",
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
    "Start where reliable activity data already exists, then add the material sources for your production system.",
  focusAreas: [
    {
      key: "energy",
      label: "Energy & fuel baseline",
      why: "Electricity and fuel are usually documented on bills, making them a practical first evidence set even when they are not the operation's largest emissions sources.",
      pros: [
        "The data already exists on 12 months of bills and fuel receipts.",
        "Creates a traceable starting point for cost and emissions calculations.",
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
      why: "A defensible inventory combines relevant activity data with documented factors. For farms, Scope 1 may include livestock, manure, and managed-soil emissions as well as fuel.",
      pros: [
        "Turns documented activity data into a reproducible carbon estimate.",
        "Uses recognised methods and records the factors applied.",
        "The foundation for any credible claim or reduction target.",
      ],
      cons: [
        "Choosing the right factors and boundary needs care the first time.",
        "Production-system sources such as livestock, manure, and soils require additional activity data and methods.",
        "Upstream Scope 3 is a separate job after the operational boundary is sound.",
      ],
      howTo:
        "Set the reporting boundary, list every material Scope 1 and 2 source for your production system, then apply documented factors to the relevant activity data.",
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
      why: "Area, land-use change, fertiliser, feed, and other inputs support buyer requests and help identify both direct agricultural emissions and upstream Scope 3 sources.",
      pros: [
        "Captures the land data grants and CSRD increasingly require.",
        "Supports managed-soil calculations where relevant and sets up upstream Scope 3 work.",
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
    "A defensible baseline records its boundary, activity data, factors, estimates, evidence, and limitations. That makes it reviewable when a buyer or bank asks.",
    "You don't need perfect data to start. Use primary records where available and label every estimate so data quality can improve over time.",
    "Bills are a practical first evidence set, but the material emissions sources depend on what you produce. Livestock, manure, and managed soils can dominate a farm inventory.",
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
    "Use these to choose methods and document factors. The tracker can structure common activity data, but it is not a substitute for a production-system-complete inventory.",

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
    { k: "Total emissions (t CO2e)", v: "Scope 1 and 2 using a documented boundary, including material biological sources where relevant; add Scope 3 as you widen." },
    { k: "Energy use (kWh)", v: "Electricity + fuel, by month, so you can see trend and seasonality." },
    { k: "Energy intensity", v: "kWh per unit of output — lets you compare across years and to peers." },
    { k: "Water use (m³)", v: "Metered or estimated, for a representative period." },
    { k: "Waste (t, by type)", v: "By stream, so you can spot what's recoverable." },
    { k: "Data quality (%)", v: "Share of numbers backed by primary evidence, not estimates. Improves over time." },
  ],
};
