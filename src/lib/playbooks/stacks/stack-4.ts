import type { StackContent } from "../content-types";

// Stack 4 — Structural Resilience. Funnels from the resilience-assessment.
// "Systems must absorb shocks without breaking." Buffers and multiple value
// streams so the operation isn't dependent on any one thing.
export const stack4Content: StackContent = {
  slug: "stack-4-resilience",
  stackNum: 4,
  accent: "#9A8CD0",
  toolHref: "/tools/resilience-assessment",
  toolLabel: "Back to the resilience assessment",

  intakeTitle: "Build a farm that bends without breaking",
  intakeIntro:
    "Tell us about your operation and what keeps you up at night. We'll build a plan to layer in buffers — cash, buyers, insurance, and income streams — so one bad shock becomes a setback you absorb, not a crisis that breaks you.",
  sectorLabel: "What do you produce?",
  sectorPlaceholder: "e.g. dairy, arable, mixed",
  scaleLabel: "hectares",
  scaleDefault: 100,

  issuesTitle: "What's driving this?",
  issues: [
    { key: "oneBuyer", label: "Too dependent on one buyer" },
    { key: "oneBadYear", label: "One bad year would sink us" },
    { key: "weather", label: "Weather and climate exposure" },
    { key: "priceSwings", label: "Prices are too volatile" },
    { key: "thinReserves", label: "Thin cash reserves" },
    { key: "keyPerson", label: "Too much rides on one person" },
  ],

  focusTitle: "Where to build buffers, in order",
  focusIntro:
    "Start with the cheapest buffers that protect everything else — cash and a second buyer — before you spend capital on a new enterprise.",
  focusAreas: [
    {
      key: "cashBuffer",
      label: "Cash buffer and runway",
      why: "A cash reserve is the cheapest resilience you can build, because it turns almost any shock from an emergency into an inconvenience.",
      pros: [
        "Costs nothing but discipline to start — no new enterprise, no learning curve.",
        "Buys time to make good decisions instead of forced sales at the bottom of the market.",
        "Lets you hold stock or delay a sale when prices are against you.",
        "Reassures lenders and buyers that you can weather a bad quarter.",
      ],
      cons: [
        "Money in reserve is money not earning a return or paying down debt.",
        "Building it means holding back drawings or reinvestment for a while.",
        "Easy to raid for non-emergencies without a clear rule for what counts.",
      ],
      howTo:
        "Open a separate account and set a standing order for a fixed share of each payment until you reach roughly three months of fixed costs.",
      addresses: ["thinReserves", "oneBadYear", "priceSwings"],
      priority: 1,
    },
    {
      key: "diversifyBuyers",
      label: "Spread your buyers and markets",
      why: "If one buyer takes more than about half your output they effectively set your price, so spreading sales is low-cost insurance against losing them.",
      pros: [
        "Usually possible without new capital — new relationships and outlets, not new kit.",
        "Weakens any single buyer's power over your price.",
        "One lost contract stops being an existential event.",
        "Can open routes (direct, co-op, processor, export) that pay better.",
      ],
      cons: [
        "More buyers means more admin, invoicing, and quality specs to meet.",
        "Smaller volumes per buyer can cost you volume discounts or priority.",
        "Some markets need certification or packaging you don't yet have.",
      ],
      howTo:
        "List your buyers by share of revenue, then find and approach one credible alternative outlet for your largest line.",
      addresses: ["oneBuyer", "priceSwings", "oneBadYear"],
      priority: 2,
    },
    {
      key: "insureKeyRisks",
      label: "Insure the risks that would break you",
      why: "Insurance is the one buffer you can put a price on today for the rare events that would otherwise wipe out the business.",
      pros: [
        "Converts a catastrophic, unaffordable loss into a known annual cost.",
        "Often required for finance, and cheaper than self-insuring a rare disaster.",
        "Frees you to take sensible risks elsewhere, knowing the worst case is capped.",
      ],
      cons: [
        "Premiums are a real cost every year, most of which you never claim on.",
        "Cover has exclusions and excesses — read what actually pays out.",
        "Over-insuring low-impact risks wastes money better held as cash.",
      ],
      howTo:
        "List the handful of events that would genuinely end the business, check what each costs to insure, and tell your insurer about any diversified activity so your cover stays valid.",
      addresses: ["weather", "oneBadYear", "keyPerson"],
      priority: 3,
    },
    {
      key: "climateBuffers",
      label: "Weather and climate buffers",
      why: "Weather is the shock you can most reliably expect, so physical and agronomic buffers pay back across many years rather than one.",
      pros: [
        "Water storage, forage reserves, and resilient varieties cut the worst-case yield hit.",
        "Many measures (soil organic matter, shelter, storage) help in both drought and flood.",
        "Often overlaps with grant-funded climate schemes, which shares the cost.",
      ],
      cons: [
        "Buffers tie up capital or land that earns nothing in a normal year.",
        "The payoff only shows up in bad years, so it's easy to under-invest.",
        "Agronomic changes carry their own learning curve and lead time.",
      ],
      howTo:
        "Pick the one weather event that hurt you most in the last five years and add a single buffer against it — a forage reserve, water storage, or a more resilient variety.",
      addresses: ["weather", "oneBadYear"],
      priority: 4,
    },
    {
      key: "newEnterprise",
      label: "Add a genuinely different income stream",
      why: "A new stream that doesn't rise and fall with your main line is the strongest structural buffer, but it is also the most capital- and attention-hungry move, so it comes last.",
      pros: [
        "Income that's weakly linked to your main crop smooths the whole business.",
        "Can put assets you already own (buildings, land, footfall) to fuller use.",
        "Diversified income is now roughly a tenth of average farm income and rising, so there is a real, proven market.",
      ],
      cons: [
        "New enterprises carry their own rules, learning curve, and start-up losses.",
        "Splitting focus can dilute returns and quality on your core business.",
        "Usually needs capital, and often planning permission, insurance changes, and new skills.",
      ],
      howTo:
        "Shortlist one enterprise that uses an asset you already have, and test the smallest possible version before committing capital.",
      addresses: ["oneBadYear", "priceSwings", "keyPerson", "weather"],
      priority: 5,
    },
  ],

  playbookHeadline: "Your structural-resilience plan",
  insights: [
    "Resilience isn't one big move, it's a stack of buffers. No single one saves you, but together they turn a shock into a setback instead of an ending.",
    "The cheapest resilience is the boring kind: a few months of cash and a second buyer. Build those before you build anything new.",
    "Every buffer costs something in a normal year — cash not invested, land not cropped, a premium never claimed. That cost is the price of surviving the bad year, and it's almost always worth paying.",
  ],

  resourcesTitle: "Where this comes from",
  resources: [
    {
      name: "FAO — Managing Risk in Farming",
      snippet:
        "FAO's plain-language farm management extension guide on the sources of risk in farming and the tools — diversification, reserves, insurance — for managing them.",
      url: "https://www.fao.org/4/i3229e/i3229e.pdf",
    },
    {
      name: "Teagasc — Insurance and diversification",
      snippet:
        "Ireland's agriculture authority on a trap most diversifiers miss: standard farm insurance only covers farming, so any new activity has to be declared or cover can lapse.",
      url: "https://teagasc.ie/rural-economy/rural-development/diversification/insurance-tips/",
    },
    {
      name: "AHDB — Farm diversification and resilience",
      snippet:
        "AHDB on the state of UK farm diversification — over 70% of farms now run some diversified activity, worth roughly a tenth of average farm business income.",
      url: "https://ahdb.org.uk/news/interest-in-farm-diversification-rises",
    },
  ],
  resourcesNote:
    "You don't need these to start — your own numbers come first. They're here for when you want the evidence behind a move, or the small print (like telling your insurer) that catches people out.",

  checklistTitle: "Building resilience into the operation",
  checklist: [
    "Work out your monthly fixed costs and how many months of them your reserves could cover today",
    "Open a separate reserve account and automate a fixed share of each payment into it",
    "List your buyers by share of revenue and flag any single one above half",
    "Approach one credible alternative outlet for your largest product line",
    "Name the handful of events that would end the business and check the cost to insure each",
    "Pick the weather risk that hurt most recently and add one buffer against it",
  ],

  kpisTitle: "What to track",
  kpis: [
    { k: "Cash runway (months)", v: "Months of fixed costs your reserves could cover with no income. Build toward three or more." },
    { k: "Top-buyer share (%)", v: "Share of revenue from your single largest buyer. The lower it is, the less power any one buyer holds over you." },
    { k: "Number of income streams", v: "Distinct, weakly-linked sources of revenue. More streams smooth the whole business." },
    { k: "Insured share of key risks (%)", v: "Of the events that would end the business, how many are covered. The gap is what you're self-insuring." },
    { k: "Debt-to-income", v: "Borrowing set against annual income. Lower leaves more room to absorb a bad year without forced sales." },
    { k: "Worst-year income drop (%)", v: "How far income fell in your hardest recent year. Your buffers should shrink this over time." },
  ],
};
