import Link from "next/link";

export const metadata = {
  title: "Guides | Ecosystems United",
  description: "Practical sustainability guides for agricultural businesses and SMEs. Problem-focused content that helps you implement, not just understand.",
};

const guideCategories = [
  {
    name: "Understanding Agribusiness",
    description: "How the agricultural system works and where you fit in it",
    color: "#1a1a2e",
    guides: [
      { slug: "what-is-agribusiness", title: "What Is Agribusiness?", desc: "Understanding the system you operate in" },
      { slug: "origins-history-agribusiness", title: "Origins and History of Agribusiness", desc: "How the system was built—and why it matters" },
      { slug: "advantages-disadvantages-agribusiness", title: "Advantages and Disadvantages", desc: "What the system gives you vs. what it costs" },
      { slug: "agriculture-vs-agribusiness", title: "Agriculture vs. Agribusiness", desc: "Where can you actually compete?" },
      { slug: "small-vs-large-agribusiness", title: "Small vs. Large Agribusiness", desc: "Finding your competitive position" },
      { slug: "sustainability-in-agribusiness", title: "Sustainability in Agribusiness", desc: "How sustainability creates advantage" },
    ]
  },
  {
    name: "Small Farm Strategy",
    description: "Building competitive advantage at smaller scale",
    color: "#2D5A47",
    guides: [
      { slug: "what-are-small-farms", title: "What Are Small Farms?", desc: "The business case for staying small" },
      { slug: "small-farm-competitive-strategy", title: "Small Farm Competitive Strategy", desc: "Differentiation, specialization, diversification" },
      { slug: "direct-marketing-small-farms", title: "Direct Marketing for Small Farms", desc: "7 keys to building customer relationships" },
    ]
  },
  {
    name: "Ecolabels & Certification",
    description: "Understanding certification as competitive strategy",
    color: "#3D2E7C",
    guides: [
      { slug: "what-are-ecolabels", title: "What Are Ecolabels?", desc: "Third-party verification that opens doors" },
      { slug: "the-different-types-of-ecolabels", title: "Types of Ecolabels", desc: "Single-attribute vs. lifecycle approaches" },
      { slug: "most-trustworthy-ecolabels", title: "Most Trustworthy Ecolabels", desc: "Which certifications actually matter" },
      { slug: "advantages-and-disadvantages-of-ecolabels", title: "Ecolabel Advantages & Disadvantages", desc: "The business case for certification" },
      { slug: "disadvantages-of-ecolabels", title: "Disadvantages of Ecolabels", desc: "When certification doesn't pay" },
      { slug: "challenges-to-ecolabels", title: "Challenges to Ecolabels", desc: "Why ecolabel systems struggle" },
      { slug: "drivers-of-ecolabel-adoption", title: "Drivers of Ecolabel Adoption", desc: "What factors lead to uptake" },
      { slug: "how-to-spot-fake-ecolabels", title: "How to Spot Fake Ecolabels", desc: "Protecting yourself from greenwashing" },
      { slug: "esg-labels-in-2025", title: "ESG Labels in 2025", desc: "Current trends and opportunities" },
    ]
  },
  {
    name: "Biofuels & Energy",
    description: "Understanding biofuel economics and applications",
    color: "#5B4A9E",
    guides: [
      { slug: "biofuels-explained", title: "Biofuels Explained", desc: "What they are and how they work" },
      { slug: "advanced-biofuels", title: "What Are Advanced Biofuels?", desc: "Next-generation fuel technology" },
      { slug: "cellulosic-biofuels", title: "Cellulosic Biofuels", desc: "Turning agricultural waste into energy" },
      { slug: "cellulosic-vs-traditional-biofuels", title: "Cellulosic vs. Traditional Biofuels", desc: "Comparing economics and sustainability" },
      { slug: "pros-and-cons-of-advanced-biofuels", title: "Pros and Cons of Advanced Biofuels", desc: "Economic and environmental trade-offs" },
      { slug: "biofuel-sustainability-ranking", title: "Ranking Biofuel Sustainability", desc: "Which feedstocks perform best" },
      { slug: "biofuel-trends-2025", title: "Biofuel Trends 2025", desc: "Where the industry is heading" },
      { slug: "biofuels-in-aviation", title: "Biofuels in Aviation", desc: "Sustainable aviation fuel opportunities" },
    ]
  },
  {
    name: "Circular Economy & Efficiency",
    description: "Turning waste into value and fixing operational leaks",
    color: "#7B6BB8",
    guides: [
      { slug: "circular-economy-explained", title: "The Circular Economy Explained", desc: "Systems thinking for resource efficiency" },
      { slug: "value-chains-economic-efficiency", title: "Value Chains and Efficiency", desc: "Where value gets captured and lost" },
      { slug: "life-cycle-assessment-explained", title: "Life Cycle Assessment Explained", desc: "Measuring full environmental impact" },
    ]
  },
  {
    name: "Intercropping & Multi-Crop Systems",
    description: "Diversity as risk management and operational strategy",
    color: "#3B7D6E",
    guides: [
      { slug: "introduction-to-intercropping", title: "Introduction to Intercropping", desc: "Principles and getting started" },
      { slug: "intercropping-practices", title: "Intercropping Practices", desc: "Implementation approaches that work" },
      { slug: "advantages-disadvantages-intercropping", title: "Intercropping Pros and Cons", desc: "When diversity pays—and when it doesn't" },
      { slug: "measuring-intercropping-effectiveness", title: "Measuring Effectiveness", desc: "LER, IER, and other metrics" },
      { slug: "intercropping-organic-systems", title: "Intercropping in Organic Systems", desc: "Biological synergies without synthetics" },
      { slug: "intercropping-vs-polyculture", title: "Intercropping vs. Polyculture", desc: "Multi-crop systems that reduce risk" },
      { slug: "companion-planting-introduction", title: "Companion Planting Introduction", desc: "Strategic plant combinations" },
    ]
  },
  {
    name: "Regenerative Agriculture Economics",
    description: "The business case for soil health and sustainable practices",
    color: "#2D5A47",
    guides: [
      { slug: "regenerative-agriculture-economics", title: "Economics of Regenerative Ag", desc: "Financial framework for transitions" },
      { slug: "soil-health-business-case", title: "Soil Health: The Business Case", desc: "How healthy soil reduces costs" },
      { slug: "cover-crops-roi", title: "Cover Crops: Investment & Returns", desc: "Cost-benefit analysis" },
      { slug: "regenerative-practices-2025", title: "7 Practices Delivering ROI in 2025", desc: "What's working and why" },
    ]
  },
  {
    name: "Water & Infrastructure",
    description: "Managing water and drainage for productivity",
    color: "#4A7C9B",
    guides: [
      { slug: "agricultural-irrigation", title: "Agricultural Irrigation", desc: "Systems and efficiency approaches" },
      { slug: "irrigation-system-planning", title: "Planning an Irrigation System", desc: "What to consider before investing" },
      { slug: "agricultural-drainage", title: "Agricultural Drainage", desc: "Managing water for soil health" },
    ]
  },
];

export default function GuidesPage() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <div className="mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          Guides
        </h1>
        <p className="text-xl text-gray-600 mb-4">
          Practical sustainability guides for agricultural businesses and SMEs. 
          Problem-focused content that helps you implement, not just understand.
        </p>
        <p className="text-gray-600">
          Every guide connects back to the{" "}
          <Link href="/framework" className="text-[#4AA88C] hover:underline">
            Five Stacks Framework
          </Link>
          —because sustainability that doesn't improve operations isn't sustainable.
        </p>
      </div>

      {/* Featured: Implementation Guide */}
      <div className="mb-12">
        <Link 
          href="/framework/implementation"
          className="block p-6 bg-gradient-to-r from-[#1a1a2e] to-[#2d2d4a] rounded-lg text-white hover:opacity-95 transition-opacity"
        >
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xs bg-[#4AA88C] text-white px-2 py-1 rounded">Pillar Guide</span>
          </div>
          <h2 className="text-2xl font-bold mb-2">Five Stacks Implementation Guide</h2>
          <p className="text-white/70 mb-3">
            The complete guide to implementing the Five Stacks Framework. Economic data, case studies, 
            decision matrix, 12-month roadmap, and funding resources.
          </p>
          <span className="text-[#4AA88C] font-medium">Read the full guide →</span>
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
              Take our interactive assessments to identify where you are and what to focus on next.
            </p>
          </div>
          <Link
            href="/tools"
            className="inline-block bg-[#4AA88C] text-white px-6 py-3 rounded font-semibold hover:bg-[#3d8f76] transition-colors whitespace-nowrap"
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
                  <h3 className="font-medium text-gray-900 group-hover:text-[#4AA88C] transition-colors mb-1 line-clamp-2">
                    {guide.title} →
                  </h3>
                  <p className="text-sm text-gray-600 line-clamp-2">{guide.desc}</p>
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
          These guides provide depth on specific topics. The Five Stacks Framework 
          shows how they connect into a systematic approach to sustainability that 
          builds competitive advantage.
        </p>
        <Link 
          href="/framework" 
          className="inline-block bg-[#4AA88C] text-white px-6 py-3 rounded font-semibold hover:bg-[#3d8f76] transition-colors"
        >
          Explore the Framework →
        </Link>
      </div>
    </div>
  );
}
