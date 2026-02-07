import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Guides",
  description:
    "Practical sustainability guides for agricultural businesses and SMEs. Problem-focused content that helps you implement, not just understand.",
};

const guideCategories = [
  {
    name: "CSRD & ESG Compliance",
    description: "Navigating sustainability reporting requirements for agricultural suppliers",
    color: "#3D2E7C",
    guides: [
      {
        slug: "first-esg-questionnaire",
        title: "First ESG Questionnaire?",
        desc: "Where agricultural suppliers start",
      },
      {
        slug: "csrd-vsme-agricultural-suppliers",
        title: "CSRD & VSME for Agriculture",
        desc: "What the EU regulations mean for farms",
      },
      {
        slug: "scope-1-2-3-agriculture",
        title: "Scope 1, 2, 3 for Agriculture",
        desc: "Emissions explained for farm operations",
      },
      {
        slug: "buyer-scope-3-request",
        title: "Buyer Scope 3 Request",
        desc: "What to do when the carbon data request arrives",
      },
      {
        slug: "esg-reporting-small-farms",
        title: "ESG Reporting for Small Farms",
        desc: "The 80/20 getting started guide",
      },
      {
        slug: "lose-buyers-without-esg",
        title: "Will You Lose Buyers?",
        desc: "The real risk of ignoring ESG requests",
      },
      {
        slug: "missing-esg-data",
        title: "Missing ESG Data",
        desc: "How to respond honestly with gaps",
      },
      {
        slug: "building-esg-response-system",
        title: "Building Your Response System",
        desc: "Stop scrambling, start systematizing",
      },
      {
        slug: "esg-competitive-advantage",
        title: "ESG as Competitive Advantage",
        desc: "Turn compliance into differentiation",
      },
      {
        slug: "agricultural-sustainability-checklist",
        title: "Sustainability Checklist",
        desc: "Complete assessment prep for farms",
      },
    ],
  },
  {
    name: "Understanding Agribusiness",
    description: "How the agricultural system works and where you fit in it",
    color: "#1a1a2e",
    guides: [
      {
        slug: "what-is-agribusiness",
        title: "What Is Agribusiness?",
        desc: "Understanding the system you operate in",
      },
      {
        slug: "origins-history-agribusiness",
        title: "Origins and History of Agribusiness",
        desc: "How the system was built—and why it matters",
      },
      {
        slug: "advantages-disadvantages-agribusiness",
        title: "Advantages and Disadvantages",
        desc: "What the system gives you vs. what it costs",
      },
      {
        slug: "agriculture-vs-agribusiness",
        title: "Agriculture vs. Agribusiness",
        desc: "Where can you actually compete?",
      },
      {
        slug: "small-vs-large-agribusiness",
        title: "Small vs. Large Agribusiness",
        desc: "Finding your competitive position",
      },
      {
        slug: "sustainability-in-agribusiness",
        title: "Sustainability in Agribusiness",
        desc: "How sustainability creates advantage",
      },
      {
        slug: "agribusiness-technology-trends",
        title: "Technology Trends in Agribusiness",
        desc: "What's delivering ROI and what's hype",
      },
      {
        slug: "agribusiness-supply-chain-explained",
        title: "The Agribusiness Supply Chain",
        desc: "From farm gate to consumer plate",
      },
    ],
  },
  {
    name: "Small Farm Strategy",
    description: "Building competitive advantage at smaller scale",
    color: "#2D5A47",
    guides: [
      {
        slug: "what-are-small-farms",
        title: "What Are Small Farms?",
        desc: "The business case for staying small",
      },
      {
        slug: "small-farm-competitive-strategy",
        title: "Small Farm Competitive Strategy",
        desc: "Differentiation, specialization, diversification",
      },
      {
        slug: "direct-marketing-small-farms",
        title: "Direct Marketing for Small Farms",
        desc: "7 keys to building customer relationships",
      },
      {
        slug: "small-farm-market-channels",
        title: "5 Market Channels Beyond the Farmgate",
        desc: "CSA, food hubs, restaurants, and more",
      },
      {
        slug: "why-consumers-want-local-food",
        title: "Why Consumers Want Local Food",
        desc: "What's driving demand and how to position your farm",
      },
      {
        slug: "industrial-food-system-small-farms",
        title: "What Small Farms Are Up Against",
        desc: "The industrial food system and where it's vulnerable",
      },
      {
        slug: "small-farm-value-added-products",
        title: "Value-Added Products",
        desc: "From raw commodities to revenue",
      },
      {
        slug: "cooperative-models-small-farms",
        title: "Cooperative Models",
        desc: "Strength in numbers for market access",
      },
      {
        slug: "small-farm-financial-planning",
        title: "Financial Planning for Small Farms",
        desc: "Cash flow, seasonality, and investment",
      },
      {
        slug: "food-deserts-market-opportunity",
        title: "Food Deserts as Market Opportunity",
        desc: "Underserved markets your farm can reach",
      },
    ],
  },
  {
    name: "Ecolabels & Certification",
    description: "Understanding certification as competitive strategy",
    color: "#3D2E7C",
    guides: [
      {
        slug: "what-are-ecolabels",
        title: "What Are Ecolabels?",
        desc: "Third-party verification that opens doors",
      },
      {
        slug: "the-different-types-of-ecolabels",
        title: "Types of Ecolabels",
        desc: "Single-attribute vs. lifecycle approaches",
      },
      {
        slug: "most-trustworthy-ecolabels",
        title: "Most Trustworthy Ecolabels",
        desc: "Which certifications actually matter",
      },
      {
        slug: "advantages-and-disadvantages-of-ecolabels",
        title: "Ecolabel Advantages & Disadvantages",
        desc: "The business case for certification",
      },
      {
        slug: "disadvantages-of-ecolabels",
        title: "Disadvantages of Ecolabels",
        desc: "When certification doesn't pay",
      },
      {
        slug: "challenges-to-ecolabels",
        title: "Challenges to Ecolabels",
        desc: "Why ecolabel systems struggle",
      },
      {
        slug: "drivers-of-ecolabel-adoption",
        title: "Drivers of Ecolabel Adoption",
        desc: "What factors lead to uptake",
      },
      {
        slug: "how-to-spot-fake-ecolabels",
        title: "How to Spot Fake Ecolabels",
        desc: "Protecting yourself from greenwashing",
      },
      {
        slug: "esg-labels-in-2025",
        title: "ESG Labels in 2025",
        desc: "Current trends and opportunities",
      },
    ],
  },
  {
    name: "Biofuels & Energy",
    description: "Understanding biofuel economics and applications",
    color: "#5B4A9E",
    guides: [
      {
        slug: "biofuels-explained",
        title: "Biofuels Explained",
        desc: "What they are and how they work",
      },
      {
        slug: "advanced-biofuels",
        title: "What Are Advanced Biofuels?",
        desc: "Next-generation fuel technology",
      },
      {
        slug: "cellulosic-biofuels",
        title: "Cellulosic Biofuels",
        desc: "Turning agricultural waste into energy",
      },
      {
        slug: "cellulosic-vs-traditional-biofuels",
        title: "Cellulosic vs. Traditional Biofuels",
        desc: "Comparing economics and sustainability",
      },
      {
        slug: "pros-and-cons-of-advanced-biofuels",
        title: "Pros and Cons of Advanced Biofuels",
        desc: "Economic and environmental trade-offs",
      },
      {
        slug: "biofuel-sustainability-ranking",
        title: "Ranking Biofuel Sustainability",
        desc: "Which feedstocks perform best",
      },
      {
        slug: "biofuel-trends-2025",
        title: "Biofuel Trends 2025",
        desc: "Where the industry is heading",
      },
      {
        slug: "biofuels-in-aviation",
        title: "Biofuels in Aviation",
        desc: "Sustainable aviation fuel opportunities",
      },
    ],
  },
  {
    name: "Circular Economy & Efficiency",
    description: "Turning waste into value and fixing operational leaks",
    color: "#7B6BB8",
    guides: [
      {
        slug: "circular-economy-explained",
        title: "The Circular Economy Explained",
        desc: "Systems thinking for resource efficiency",
      },
      {
        slug: "value-chains-economic-efficiency",
        title: "Value Chains and Efficiency",
        desc: "Where value gets captured and lost",
      },
      {
        slug: "life-cycle-assessment-explained",
        title: "Life Cycle Assessment Explained",
        desc: "Measuring full environmental impact",
      },
      {
        slug: "farm-waste-to-value",
        title: "Farm Waste to Value",
        desc: "Turning waste streams into revenue",
      },
      {
        slug: "closed-loop-nutrient-cycling",
        title: "Closed-Loop Nutrient Cycling",
        desc: "Keeping N, P, and K on the farm",
      },
      {
        slug: "biomass-energy-farm",
        title: "Biomass Energy on the Farm",
        desc: "Boilers, biogas, and small-scale options",
      },
      {
        slug: "water-recycling-efficiency",
        title: "Water Recycling & Efficiency",
        desc: "Irrigation efficiency and water reuse systems",
      },
      {
        slug: "circular-supply-chains-food",
        title: "Circular Supply Chains in Food",
        desc: "By-product markets and circular partnerships",
      },
    ],
  },
  {
    name: "Intercropping & Multi-Crop Systems",
    description: "Diversity as risk management and operational strategy",
    color: "#3B7D6E",
    guides: [
      {
        slug: "introduction-to-intercropping",
        title: "Introduction to Intercropping",
        desc: "Principles and getting started",
      },
      {
        slug: "intercropping-practices",
        title: "Intercropping Practices",
        desc: "Implementation approaches that work",
      },
      {
        slug: "advantages-disadvantages-intercropping",
        title: "Intercropping Pros and Cons",
        desc: "When diversity pays—and when it doesn't",
      },
      {
        slug: "measuring-intercropping-effectiveness",
        title: "Measuring Effectiveness",
        desc: "LER, IER, and other metrics",
      },
      {
        slug: "intercropping-organic-systems",
        title: "Intercropping in Organic Systems",
        desc: "Biological synergies without synthetics",
      },
      {
        slug: "intercropping-vs-polyculture",
        title: "Intercropping vs. Polyculture",
        desc: "Multi-crop systems that reduce risk",
      },
      {
        slug: "companion-planting-introduction",
        title: "Companion Planting Introduction",
        desc: "Strategic plant combinations",
      },
      {
        slug: "intercropping-cereal-legume",
        title: "Cereal-Legume Intercropping",
        desc: "The most practical system for temperate farms",
      },
      {
        slug: "intercropping-pest-management",
        title: "Intercropping for Pest Management",
        desc: "Reducing chemical inputs through diversity",
      },
      {
        slug: "intercropping-climate-resilience",
        title: "Intercropping for Climate Resilience",
        desc: "Yield stability under weather extremes",
      },
    ],
  },
  {
    name: "Regenerative Agriculture Economics",
    description: "The business case for soil health and sustainable practices",
    color: "#2D5A47",
    guides: [
      {
        slug: "regenerative-agriculture-economics",
        title: "Economics of Regenerative Ag",
        desc: "Financial framework for transitions",
      },
      {
        slug: "soil-health-business-case",
        title: "Soil Health: The Business Case",
        desc: "How healthy soil reduces costs",
      },
      {
        slug: "cover-crops-roi",
        title: "Cover Crops: Investment & Returns",
        desc: "Cost-benefit analysis",
      },
      {
        slug: "regenerative-practices-2025",
        title: "7 Practices Delivering ROI in 2025",
        desc: "What's working and why",
      },
      {
        slug: "carbon-markets-agriculture",
        title: "Carbon Markets for Agriculture",
        desc: "Credits, verification, and what's actually worth it",
      },
      {
        slug: "regenerative-transition-costs",
        title: "Regenerative Transition Costs",
        desc: "The J-curve economics of changing practices",
      },
      {
        slug: "biochar-soil-amendment",
        title: "Biochar as Soil Amendment",
        desc: "Economics of carbon-rich soil improvement",
      },
      {
        slug: "agroforestry-economics",
        title: "Agroforestry Economics",
        desc: "The long-term investment case for trees on farms",
      },
      {
        slug: "composting-nutrient-cycling-roi",
        title: "Composting & Nutrient Cycling ROI",
        desc: "On-farm composting that pays for itself",
      },
    ],
  },
  {
    name: "Soil & Land Management",
    description: "Data-driven soil health and strategic land use",
    color: "#5A7247",
    guides: [
      {
        slug: "soil-testing-guide",
        title: "Complete Guide to Soil Testing",
        desc: "What to test, when, and how to interpret results",
      },
      {
        slug: "soil-organic-matter-building",
        title: "Building Soil Organic Matter",
        desc: "Practices, timelines, and economic returns",
      },
      {
        slug: "nutrient-management-planning",
        title: "Nutrient Management Planning",
        desc: "Optimizing inputs and reducing waste",
      },
      {
        slug: "erosion-control-strategies",
        title: "Erosion Control Strategies",
        desc: "Protecting your most valuable asset",
      },
      {
        slug: "land-use-planning-farms",
        title: "Strategic Land Use Planning",
        desc: "Matching land capability to enterprise",
      },
      {
        slug: "soil-compaction-management",
        title: "Soil Compaction Management",
        desc: "Detection, prevention, and remediation economics",
      },
      {
        slug: "cover-crop-selection-guide",
        title: "Cover Crop Selection Guide",
        desc: "Matching species to purpose",
      },
      {
        slug: "tillage-systems-compared",
        title: "Tillage Systems Compared",
        desc: "Conventional, minimum, and no-till economics",
      },
    ],
  },
  {
    name: "Water & Infrastructure",
    description: "Managing water and drainage for productivity",
    color: "#4A7C9B",
    guides: [
      {
        slug: "agricultural-irrigation",
        title: "Agricultural Irrigation",
        desc: "Systems and efficiency approaches",
      },
      {
        slug: "irrigation-system-planning",
        title: "Planning an Irrigation System",
        desc: "What to consider before investing",
      },
      {
        slug: "agricultural-drainage",
        title: "Agricultural Drainage",
        desc: "Managing water for soil health",
      },
      {
        slug: "precision-irrigation-technology",
        title: "Precision Irrigation Technology",
        desc: "Sensors, VRI, and the ROI of smart water",
      },
      {
        slug: "rainwater-harvesting-agriculture",
        title: "Rainwater Harvesting for Farms",
        desc: "Collection, storage, and cost-benefit analysis",
      },
      {
        slug: "drought-resilience-water-management",
        title: "Drought Resilience Planning",
        desc: "Water budgeting and adaptive management",
      },
      {
        slug: "water-quality-management-farms",
        title: "Water Quality Management",
        desc: "Runoff, nutrients, and regulatory compliance",
      },
      {
        slug: "subsurface-drainage-design",
        title: "Subsurface Drainage Design",
        desc: "Tile drainage costs, yield gains, and payback",
      },
    ],
  },
  {
    name: "Resilience & Risk Management",
    description: "Building adaptive capacity against climate, market, and supply chain risks",
    color: "#9A8CD0",
    guides: [
      {
        slug: "climate-risk-assessment-farms",
        title: "Climate Risk Assessment for Farms",
        desc: "Identify, quantify, and prepare for climate risks",
      },
      {
        slug: "crop-diversification-risk",
        title: "Crop Diversification as Risk Management",
        desc: "Portfolio theory meets the field",
      },
      {
        slug: "farm-insurance-climate-adaptation",
        title: "Farm Insurance & Climate Adaptation",
        desc: "The insurance-adaptation feedback loop",
      },
      {
        slug: "supply-chain-resilience-agriculture",
        title: "Supply Chain Resilience",
        desc: "Reducing dependency and building redundancy",
      },
      {
        slug: "financial-resilience-farm-operations",
        title: "Financial Resilience for Farms",
        desc: "Cash reserves, stress testing, and staying solvent",
      },
      {
        slug: "pest-disease-climate-change",
        title: "Pest & Disease Under Climate Change",
        desc: "What's shifting and how to prepare",
      },
      {
        slug: "farm-succession-planning",
        title: "Farm Succession Planning",
        desc: "Business continuity across generations",
      },
      {
        slug: "market-volatility-strategies",
        title: "Managing Market Volatility",
        desc: "Smoothing revenue and protecting margins",
      },
    ],
  },
  {
    name: "Biodiversity & Habitat",
    description: "Measuring, creating, and monetizing biodiversity on farm",
    color: "#4A8B6F",
    guides: [
      {
        slug: "biodiversity-assessment-farms",
        title: "Biodiversity Assessment for Farms",
        desc: "Survey methods, metrics, and CSRD reporting",
      },
      {
        slug: "hedgerow-management-economics",
        title: "Hedgerow Management & Economics",
        desc: "Carbon, shelter effects, and wildlife corridors",
      },
      {
        slug: "pollinator-habitat-farm",
        title: "Pollinator Habitat on the Farm",
        desc: "Creating habitat that pays through better yields",
      },
      {
        slug: "biodiversity-net-gain-agriculture",
        title: "Biodiversity Net Gain",
        desc: "The new market for habitat on agricultural land",
      },
    ],
  },
];

export default function GuidesPage() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <div className="mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">Guides</h1>
        <p className="text-xl text-gray-600 mb-4">
          Practical sustainability guides for agricultural businesses and SMEs.
          Problem-focused content that helps you implement, not just understand.
        </p>
        <p className="text-gray-600">
          Every guide connects back to the{" "}
          <Link href="/framework" className="text-primary hover:underline">
            Five Stacks Framework
          </Link>
          —because sustainability that doesn&apos;t improve operations isn&apos;t sustainable.
        </p>
      </div>

      {/* Featured: Implementation Guide */}
      <div className="mb-12">
        <Link
          href="/framework/implementation"
          className="block p-6 bg-gradient-to-r from-[#1a1a2e] to-[#2d2d4a] rounded-lg text-white hover:opacity-95 transition-opacity"
        >
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xs bg-primary text-white px-2 py-1 rounded">
              Pillar Guide
            </span>
          </div>
          <h2 className="text-2xl font-bold mb-2">
            Five Stacks Implementation Guide
          </h2>
          <p className="text-white/70 mb-3">
            The complete guide to implementing the Five Stacks Framework.
            Economic data, case studies, decision matrix, 12-month roadmap, and
            funding resources.
          </p>
          <span className="text-primary font-medium">Read the full guide →</span>
        </Link>
      </div>

      {/* Interactive Tools callout */}
      <div className="mb-12 p-6 bg-gray-50 rounded-lg">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h2 className="text-lg font-semibold text-gray-900 mb-1">
              Want to assess your operation?
            </h2>
            <p className="text-gray-600">
              Take our interactive assessments to identify where you are and
              what to focus on next.
            </p>
          </div>
          <Link
            href="/tools"
            className="inline-block bg-primary text-white px-6 py-3 rounded font-semibold hover:bg-primary-dark transition-colors whitespace-nowrap"
          >
            View Tools →
          </Link>
        </div>
      </div>

      {/* Categories */}
      <div className="space-y-12">
        {guideCategories.map((category) => (
          <section key={category.name}>
            <div className="mb-6">
              <h2 className="text-2xl font-semibold text-gray-900 mb-2">
                {category.name}
              </h2>
              <p className="text-gray-600">{category.description}</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {category.guides.map((guide) => (
                <Link
                  key={guide.slug}
                  href={`/articles/${guide.slug}`}
                  className="flex flex-col p-4 border border-gray-200 rounded-lg hover:border-gray-400 transition-colors group h-28"
                >
                  <h3 className="font-medium text-gray-900 group-hover:text-primary transition-colors mb-1 line-clamp-2">
                    {guide.title} →
                  </h3>
                  <p className="text-sm text-gray-600 line-clamp-2">
                    {guide.desc}
                  </p>
                </Link>
              ))}
            </div>
          </section>
        ))}
      </div>

      {/* Framework CTA */}
      <div className="mt-16 p-8 bg-[#1a1a2e] rounded-lg text-white">
        <h2 className="text-2xl font-bold mb-3">Looking for structure?</h2>
        <p className="text-white/80 mb-6">
          These guides provide depth on specific topics. The Five Stacks
          Framework shows how they connect into a systematic approach to
          sustainability that builds competitive advantage.
        </p>
        <Link
          href="/framework"
          className="inline-block bg-primary text-white px-6 py-3 rounded font-semibold hover:bg-primary-dark transition-colors"
        >
          Explore the Framework →
        </Link>
      </div>
    </div>
  );
}
