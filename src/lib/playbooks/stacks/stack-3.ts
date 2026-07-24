import type { StackContent } from "../content-types";

// Stack 3 — Margin Recovery / Circularity. What you discard is lost margin.
// Funnels from circularity-assessment.
export const stack3Content: StackContent = {
  slug: "stack-3-circularity",
  stackNum: 3,
  accent: "#7B6BB8",
  toolHref: "/tools/circularity-assessment",
  toolLabel: "Back to the margin-recovery assessment",

  intakeTitle: "Turn your waste streams into margin",
  intakeIntro:
    "Tell us about your operation and what's driving the need to close the loop. We'll build a plan to stop paying to throw away what still has value — cutting disposal costs, cycling nutrients, and turning byproducts into revenue, starting with the moves that pay back fastest.",
  sectorLabel: "What do you produce?",
  sectorPlaceholder: "e.g. dairy, arable, mixed",
  scaleLabel: "hectares",
  scaleDefault: 100,

  issuesTitle: "What's driving this?",
  issues: [
    { key: "highDisposal", label: "Disposal and waste-handling costs are climbing" },
    { key: "buyingInputs", label: "Buying inputs I could be recycling on-farm" },
    { key: "byproductsWasted", label: "Byproducts and residues going to waste" },
    { key: "manureSlurry", label: "Manure or slurry piling up faster than I can use it" },
    { key: "newRevenue", label: "Want a new revenue stream from what I discard" },
    { key: "buyerCircular", label: "A buyer is asking about waste and circularity" },
  ],

  focusTitle: "Where to close the loop, in order",
  focusIntro:
    "Start with the money you're already spending to throw things away, then the inputs you could stop buying, before anything capital-heavy. The cheapest ton of waste is the one you never have to handle.",
  focusAreas: [
    {
      key: "segregate",
      label: "Segregate and cut disposal costs",
      why: "Every skip and haulage charge is a bill for value leaving the gate, and separating streams is the fastest way to shrink it with no capital outlay.",
      pros: [
        "No equipment needed — the saving comes from sorting, not spending.",
        "Mixed waste costs the most to dispose of; clean, separated streams often have buyers or lower gate fees.",
        "Weighing what leaves shows you exactly where the margin is going, which every later move builds on.",
        "Usually pays back within the first invoicing cycle.",
      ],
      cons: [
        "Takes staff discipline and clear labelling to keep streams clean.",
        "Some rural areas have thin markets for separated materials, so check local outlets first.",
      ],
      howTo:
        "For one month, weigh or log what goes in each skip and what you pay to remove it, then split out the two or three biggest streams that could be sold, reused, or disposed of more cheaply.",
      addresses: ["highDisposal", "byproductsWasted", "buyerCircular"],
      priority: 1,
    },
    {
      key: "nutrientCycling",
      label: "Cycle nutrients back to land",
      why: "Manure, slurry, and crop residues carry nitrogen and phosphorus you'd otherwise buy in a bag, so returning them to soil offsets a real input cost.",
      pros: [
        "Directly offsets purchased fertiliser, which is one of the most volatile input costs you carry.",
        "Uses material you already have and already have to manage.",
        "A nutrient-management plan turns a storage headache into a planned input.",
        "Buyers and schemes increasingly credit closed nutrient loops.",
      ],
      cons: [
        "Applying without testing risks over- or under-dosing and can breach nutrient rules in sensitive areas.",
        "Storage and spreading windows are constrained by weather and regulation, so timing takes planning.",
      ],
      howTo:
        "Test your manure or slurry for nutrient content, test your soils, and build a simple plan that matches what you produce to what your fields actually need before you buy any bagged fertiliser.",
      addresses: ["buyingInputs", "manureSlurry", "highDisposal", "buyerCircular"],
      priority: 2,
    },
    {
      key: "byproductRevenue",
      label: "Valorize byproducts into revenue",
      why: "Residues and off-spec product that you currently discard often have a buyer as animal feed, a raw material, or an added-value line, turning a cost into income.",
      pros: [
        "Converts a disposal cost into a revenue line, so it improves margin twice over.",
        "Post-harvest byproducts can be a large share of raw material by weight, so the volume is often there.",
        "Local feed, energy, and processing markets can absorb material with little processing.",
      ],
      cons: [
        "Markets can be seasonal or thin, so a buyer today may not be there next year.",
        "Feed or food outlets bring safety and traceability obligations you have to meet.",
        "May need modest handling or storage to keep the material saleable.",
      ],
      howTo:
        "List your three biggest byproduct or residue streams by volume, then make a few calls to local feed merchants, processors, or composters to find who would take or buy each one.",
      addresses: ["byproductsWasted", "newRevenue", "highDisposal"],
      priority: 3,
    },
    {
      key: "composting",
      label: "Compost on-farm",
      why: "Composting organic residues and manure on-site produces a soil improver you'd otherwise buy and diverts material from paid disposal, at low capital cost.",
      pros: [
        "Turns residues and manure into a stable soil improver that builds organic matter.",
        "Low capital — a windrow and a turner or contractor gets you started.",
        "Reduces both disposal volume and bought-in soil conditioner.",
      ],
      cons: [
        "Needs space, and windrows take months to mature.",
        "Poorly managed piles can smell, leach, or attract vermin, so siting and turning matter.",
        "Selling compost off-farm can trigger quality-standard and permitting requirements.",
      ],
      howTo:
        "Set aside a well-drained area away from watercourses, start one windrow from your cleanest organic residues, and turn it on a schedule so it heats and matures properly.",
      addresses: ["buyingInputs", "byproductsWasted", "manureSlurry"],
      priority: 4,
    },
    {
      key: "anaerobicDigestion",
      label: "Anaerobic digestion / biogas",
      why: "Digesting slurry and organic waste captures energy as biogas and leaves a nutrient-rich digestate, but it earns its place only at scale and with steady feedstock.",
      pros: [
        "Produces heat and power you can use on-site or export, plus digestate you can spread.",
        "Can stack revenue: energy, gate fees for accepting others' waste, and cutting methane from stored slurry.",
        "Turns a continuous manure or slurry flow into a continuous return.",
      ],
      cons: [
        "Capital-heavy and slow to pay back, so it rarely suits small operations on its own.",
        "Needs a reliable, sizeable feedstock supply year-round to run economically.",
        "Adds a plant to operate and maintain, plus permitting and grid or offtake arrangements.",
      ],
      howTo:
        "Before committing, run a feasibility screen on your daily feedstock volume and energy use — the EPA AgSTAR planning resource walks through the numbers — and only proceed if the payback works at your scale.",
      addresses: ["manureSlurry", "newRevenue", "highDisposal"],
      priority: 5,
    },
  ],

  playbookHeadline: "Your margin-recovery plan",
  insights: [
    "What you discard is margin you've already paid to produce and are now paying again to remove. Circularity is a cost-recovery exercise before it's an environmental one.",
    "You don't need a digester to start. The biggest early wins come from separating streams and cycling nutrients — near-zero capital, quick payback — long before anything you have to build.",
    "The order matters: cut disposal cost and offset bought-in inputs first, then chase byproduct revenue, and only weigh capital projects like anaerobic digestion once you know your volumes.",
  ],

  resourcesTitle: "The thinking this is built on",
  resources: [
    {
      name: "FAO — Food Loss and Waste",
      snippet:
        "The UN food agency on why residues and losses are lost resources, and the prevention-first hierarchy for closing the loop on-farm.",
      url: "https://www.fao.org/platforms/green-agriculture/areas-of-work/consumption-food-loss-and-waste/food-loss-and-waste/en",
    },
    {
      name: "Ellen MacArthur Foundation — Food",
      snippet:
        "The reference framing for a circular food system: eliminate waste, circulate materials at their highest value, regenerate nature.",
      url: "https://www.ellenmacarthurfoundation.org/topics/food/overview",
    },
    {
      name: "EPA AgSTAR — Project Planning & Financing",
      snippet:
        "Government guidance on assessing whether an on-farm anaerobic digester actually pays, from feedstock to revenue streams to financing.",
      url: "https://www.epa.gov/agstar/project-planning-and-financing",
    },
  ],
  resourcesNote:
    "You don't need to read these to start. They're here so the plan sits on recognised thinking, and so you can pressure-test a capital project like a digester before you spend on it.",

  checklistTitle: "Getting margin recovery in place",
  checklist: [
    "Weigh and cost what leaves the gate — one month of skips, haulage, and gate fees",
    "Separate your two or three biggest streams so each has its cheapest or best-paid outlet",
    "Test manure, slurry, and soils, and match nutrients to fields before buying bagged fertiliser",
    "Make a few calls to find local buyers for your biggest byproduct streams",
    "Start one compost windrow from your cleanest organic residues if you have the space",
    "Only screen a digester once you know your year-round feedstock volume and energy use",
  ],

  kpisTitle: "What to track",
  kpis: [
    { k: "Disposal cost (currency/yr)", v: "What you pay to remove waste. The number you're trying to shrink." },
    { k: "Waste diverted (%)", v: "Share of waste sold, reused, or cycled instead of dumped. Should climb." },
    { k: "Recovered nutrient value (currency)", v: "Bagged-fertiliser cost offset by manure, slurry, and compost you cycled back." },
    { k: "Byproduct revenue (currency/yr)", v: "Income from residues and off-spec product you used to discard." },
    { k: "Input cost offset (%)", v: "Purchased inputs replaced by recovered materials, versus your baseline." },
    { k: "Energy self-supply (%)", v: "Share of on-farm energy met from biogas or recovered streams, if you run them." },
  ],
};
