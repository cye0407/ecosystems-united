import type { StackContent } from "../content-types";

// Stack 2 — Operational Efficiency. Fix leaks before adding new initiatives.
// Funnels from the efficiency-assessment.
export const stack2Content: StackContent = {
  slug: "stack-2-efficiency",
  stackNum: 2,
  accent: "#5B4A9E",
  toolHref: "/tools/efficiency-assessment",
  toolLabel: "Back to the efficiency assessment",

  intakeTitle: "Find where your margin leaks",
  intakeIntro:
    "Tell us about your operation and what's squeezing you. We'll build a plan to find where energy, water, inputs and time leak out of the business, and fix the cheapest, biggest leaks first, before you spend on anything new.",
  sectorLabel: "What do you produce?",
  sectorPlaceholder: "e.g. dairy, arable, mixed",
  scaleLabel: "hectares",
  scaleDefault: 100,

  issuesTitle: "What's squeezing you?",
  issues: [
    { key: "marginsThin", label: "Margins too thin to absorb cost rises" },
    { key: "energyBills", label: "Energy or fuel bills climbing" },
    { key: "waterCost", label: "Water costs or scarcity biting" },
    { key: "wastingInputs", label: "Paying for inputs I don't fully use" },
    { key: "noVisibility", label: "No idea where the money leaks" },
    { key: "buyerData", label: "A buyer wants efficiency data" },
  ],

  focusTitle: "Where to look, in order",
  focusIntro:
    "Start with the cheapest fixes that need no new capital — the energy and inputs you're already paying for — then work outward. The cheapest resource is always the one you don't use.",
  focusAreas: [
    {
      key: "energy",
      label: "Energy & fuel efficiency",
      why: "Energy and fuel are a rising bill you already pay every month, and the first savings usually come from housekeeping, not capital, so this is the fastest money back.",
      pros: [
        "Many wins are free or near-free: maintenance, controls, switching things off, sensible temperatures.",
        "The data already exists on your bills, so you can measure the saving directly.",
        "Cuts both cost and your carbon number at the same time (feeds Stack 1).",
        "On dairy in particular, cooling and water heating can be a majority of the energy bill, so a focused look pays off fast.",
      ],
      cons: [
        "The biggest structural savings (heat recovery, variable-speed drives, better refrigeration) do need capital and payback patience.",
        "Splitting a single bill across activities takes some sub-metering before you can see where it really goes.",
      ],
      howTo:
        "Pull 12 months of electricity and fuel bills into one place, then list your biggest energy users and check each for the free wins first: settings, timers, maintenance, leaks.",
      addresses: ["energyBills", "marginsThin", "noVisibility"],
      priority: 1,
    },
    {
      key: "inputs",
      label: "Input & nutrient-use efficiency",
      why: "Fertiliser, feed and agrochemicals are among the largest cash costs on most operations, and any that the crop or animal doesn't actually use is margin walking off the field.",
      pros: [
        "Right-rate, right-time application often cuts spend with no yield loss.",
        "A soil or nutrient test is cheap relative to a season of over-application.",
        "Less surplus nutrient also means less loss to water and air, which buyers and schemes increasingly ask about.",
      ],
      cons: [
        "Cutting rates carries agronomic risk if done by guesswork rather than testing — go by soil data, not a hunch.",
        "Benefits show up over a season, not a week, so it needs record-keeping to prove.",
        "Some savings need kit (variable-rate gear, better storage) you may not have yet.",
      ],
      howTo:
        "Test your soils or rations, compare actual application rates against agronomic recommendations, and find the fields or lines where you're clearly over-applying.",
      addresses: ["wastingInputs", "marginsThin", "buyerData"],
      priority: 2,
    },
    {
      key: "water",
      label: "Water & irrigation efficiency",
      why: "Where water is metered, scarce or pumped, waste shows up twice — in the water bill and in the energy to move it — so tightening it saves on two lines at once.",
      pros: [
        "Fixing leaks and scheduling irrigation to actual need is low-cost and quick.",
        "Cuts pumping energy alongside water, so it stacks with your energy work.",
        "Positions you well where water scarcity or abstraction limits are tightening.",
      ],
      cons: [
        "Water is often unmetered, so you may have to install metering before you can manage it.",
        "Efficient irrigation kit (drip, soil-moisture sensors) is a real capital step, not a quick fix.",
        "Savings depend heavily on your climate and whether you irrigate at all.",
      ],
      howTo:
        "Meter or estimate your main water uses, walk the system for leaks and overflows, and match irrigation to soil-moisture need rather than a fixed calendar.",
      addresses: ["waterCost", "marginsThin", "noVisibility"],
      priority: 3,
    },
    {
      key: "waste",
      label: "Cutting waste in the process",
      why: "Product loss, spoilage, rework and off-spec output are margin you already spent to produce and then threw away, so recovering even part of it drops straight to the bottom line.",
      pros: [
        "Waste you cut is cost fully recovered, not a marginal saving.",
        "Logging losses usually reveals one or two hotspots you can fix cheaply.",
        "Often improves quality and shelf life as a side effect, not just cost.",
      ],
      cons: [
        "You have to measure loss for a period before you can manage it, which takes discipline.",
        "Some causes (storage, cold chain, handling) need investment to fix properly.",
      ],
      howTo:
        "Pick your biggest output stream and log losses for a few weeks — spoilage, rejects, spillage — then trace the largest cause back to its source.",
      addresses: ["wastingInputs", "marginsThin", "noVisibility"],
      priority: 4,
    },
    {
      key: "benchmark",
      label: "Benchmark & meter what matters",
      why: "You can't tell a good year from a lucky one, or spot a leak early, without a baseline and a few standing meters — this is what turns one-off fixes into ongoing control.",
      pros: [
        "Cheap to start: a spreadsheet of intensity figures beats none at all.",
        "Lets you compare against your own past and, where data exists, against peers.",
        "Gives buyers and lenders the efficiency figures they increasingly ask for.",
      ],
      cons: [
        "Comparable peer benchmarks are patchy in farming, so treat outside numbers as directional.",
        "Metering everything at once is overkill — meter only what you intend to act on.",
      ],
      howTo:
        "Convert each cost into an intensity figure (energy per unit output, input cost per hectare) and record it every month so trend, not noise, drives your decisions.",
      addresses: ["noVisibility", "buyerData", "benchmarking"],
      priority: 5,
    },
  ],

  playbookHeadline: "Your operational-efficiency plan",
  insights: [
    "Efficiency is the cheapest initiative you'll ever run: the resource you don't buy costs nothing and emits nothing. Fix the leaks before you fund anything new.",
    "You don't need every meter and test on day one. Start with the bill you already pay the most on, find the free wins, and prove the saving before you spend on kit.",
    "Order matters: energy and inputs first (biggest, fastest cash back), then water and process waste, with benchmarking underneath so you can tell what actually worked.",
  ],

  resourcesTitle: "Where the numbers come from",
  resources: [
    {
      name: "Carbon Trust — Energy Efficiency in Agriculture guide",
      snippet:
        "Sector guide to cutting farm energy use, covering heating, ventilation, lighting and refrigeration. Notes that on dairy farms, cooling and water heating alone can be a majority of the energy bill.",
      url: "https://www.carbontrust.com/our-work-and-impact/guides-reports-and-tools/energy-efficiency-guide-agriculture",
    },
    {
      name: "IEA — Energy efficiency",
      snippet:
        "The IEA calls efficiency the 'first fuel' — the cheapest, cleanest energy is the energy you never use. Useful framing for why leaks come before new spend.",
      url: "https://www.iea.org/energy-system/energy-efficiency-and-demand/energy-efficiency",
    },
    {
      name: "FAO — Agriculture water use efficiency guidelines",
      snippet:
        "FAO's method for calculating agricultural water use efficiency (output per unit of water). The reference behind sensible water-intensity benchmarks.",
      url: "https://www.fao.org/platforms/water-scarcity/Knowledge/knowledge-products/detail/guidelines-for-the-calculation-of-the-agriculture-water-use-efficiency-for-global-reporting/en",
    },
  ],
  resourcesNote:
    "These are directional references, not targets. Every operation is different, so use them to sanity-check your own figures, not as a promise of what you'll save.",

  checklistTitle: "Getting the leaks plugged",
  checklist: [
    "Rank your costs biggest-first, so you work the leaks that matter",
    "Pull 12 months of energy and fuel bills and hunt the free wins",
    "Test soils or rations and compare rates against recommendations",
    "Meter or estimate water use and walk the system for leaks",
    "Log losses on your biggest output stream for a few weeks",
    "Turn each cost into an intensity figure and track it monthly",
  ],

  kpisTitle: "What to track",
  kpis: [
    { k: "Energy per unit output (kWh)", v: "Energy divided by what you produced — the core efficiency number, comparable year to year." },
    { k: "Water per unit output (m³)", v: "Where water is metered or pumped, output per unit of water shows irrigation and process efficiency." },
    { k: "Input cost per hectare", v: "Fertiliser, feed and chemicals per hectare — flags over-application before the season closes." },
    { k: "Waste / loss (%)", v: "Share of output lost to spoilage, rejects or spillage. What you cut is margin recovered in full." },
    { k: "Margin per hectare", v: "The bottom line every leak feeds into. Rising margin per hectare is the proof the fixes worked." },
    { k: "Energy + water cost (% of revenue)", v: "Utility spend as a share of turnover — early warning when a leak starts to bite." },
  ],
};
