import Link from "next/link";
import NewsletterSignup from "@/components/NewsletterSignup";

export const metadata = {
  title: "Five Stacks Implementation Guide | Ecosystems United",
  description: "A practical guide to implementing the Five Stacks Framework. Economic data, case studies, 12-month roadmap, and funding resources for sustainable agriculture.",
};

export default function ImplementationGuidePage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      {/* Header */}
      <header className="mb-12">
        <nav className="mb-8">
          <Link href="/framework" className="group flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-[#4AA88C] transition-colors">
            <span className="group-hover:-translate-x-1 transition-transform">←</span> Back to Framework Overview
          </Link>
        </nav>
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          Five Stacks Implementation Guide
        </h1>
        <p className="text-xl text-gray-600 mb-6">
          A practical guide to implementing the Five Stacks Framework. Economic data, case studies, 
          decision tools, and a 12-month roadmap for building sustainability that improves your operation.
        </p>
        <div className="p-4 bg-amber-50 border border-amber-200 rounded-lg">
          <p className="text-amber-800 text-sm">
            <strong>Who this is for:</strong> Agricultural SMEs and farm operations looking to implement 
            sustainability practices that deliver measurable economic returns—not just environmental benefits.
          </p>
        </div>
      </header>

      {/* Table of Contents */}
      <div className="mb-12 p-6 bg-gray-50 rounded-lg">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">In this guide</h2>
        <div className="grid md:grid-cols-2 gap-2 text-sm">
          <a href="#why-sequence-matters" className="text-[#4AA88C] hover:underline">Why the sequence matters</a>
          <a href="#stack-1" className="text-[#4AA88C] hover:underline">Stack 1: Core Metrics</a>
          <a href="#stack-2" className="text-[#4AA88C] hover:underline">Stack 2: Operational Efficiency</a>
          <a href="#stack-3" className="text-[#4AA88C] hover:underline">Stack 3: Circular Value Creation</a>
          <a href="#stack-4" className="text-[#4AA88C] hover:underline">Stack 4: Adaptive Resilience</a>
          <a href="#stack-5" className="text-[#4AA88C] hover:underline">Stack 5: Regenerative Advantage</a>
          <a href="#decision-matrix" className="text-[#4AA88C] hover:underline">Decision matrix</a>
          <a href="#economic-synergies" className="text-[#4AA88C] hover:underline">Economic synergies</a>
          <a href="#12-month-roadmap" className="text-[#4AA88C] hover:underline">12-month roadmap</a>
          <a href="#common-pitfalls" className="text-[#4AA88C] hover:underline">Common pitfalls</a>
          <a href="#funding-resources" className="text-[#4AA88C] hover:underline">Funding resources</a>
          <a href="#faqs" className="text-[#4AA88C] hover:underline">FAQs</a>
        </div>
      </div>

      {/* Main Content */}
      <article className="prose prose-gray max-w-none">
        
        {/* Introduction */}
        <p className="text-lg">
          Most sustainability programs fail because they reverse the sequence—starting with vision 
          and marketing instead of operations and measurement. The Five Stacks Framework fixes this 
          by building capability systematically, from baseline metrics through regenerative advantage.
        </p>
        <p>
          This guide translates the framework into practical implementation strategies with documented 
          economic outcomes. The figures represent verified results across multiple studies, providing 
          realistic benchmarks for what's possible with consistent implementation.
        </p>

        {/* Why Sequence Matters */}
        <h2 id="why-sequence-matters">Why the sequence matters</h2>
        <p>
          Each stack creates the conditions that make the next stack possible and profitable:
        </p>
        <ul>
          <li><strong>Without metrics (Stack 1)</strong>, you can't identify which efficiency improvements will have the biggest impact</li>
          <li><strong>Without efficiency (Stack 2)</strong>, you're adding circular systems to a leaky operation</li>
          <li><strong>Without circularity (Stack 3)</strong>, you're missing value streams that fund resilience investments</li>
          <li><strong>Without resilience (Stack 4)</strong>, your regenerative claims lack operational foundation</li>
          <li><strong>Without the progression</strong>, Stack 5 becomes greenwashing instead of genuine market positioning</li>
        </ul>
        <p>
          The framework isn't about doing everything at once. It's about doing things in the right order 
          so each investment creates returns that fund the next level.
        </p>

        {/* Stack 1 */}
        <h2 id="stack-1">Stack 1: Core Metrics</h2>
        <p className="text-lg italic text-gray-600">If it can't be measured, it can't be defended.</p>
        
        <p>
          Before you can improve anything, you need to know where you stand. Stack 1 establishes the 
          baseline measurements that make everything else possible—identifying your biggest opportunities 
          and proving your improvements are real.
        </p>

        <h3>What to measure</h3>
        <ul>
          <li><strong>Input costs by category:</strong> Fertilizer, pesticides, fuel, water, energy—know where your money goes</li>
          <li><strong>Yield data by field/enterprise:</strong> Which areas perform and which underperform?</li>
          <li><strong>Soil baseline:</strong> pH, organic matter, key nutrients. This is your foundation.</li>
          <li><strong>Labor and time allocation:</strong> Where does effort go? What's the return on that effort?</li>
          <li><strong>Waste streams:</strong> What leaves your operation without capturing value?</li>
        </ul>

        <h3>How to baseline</h3>
        <p>
          Start simple. A basic soil test costs $15-30 and tells you more about your operation's potential 
          than most expensive analyses. Track input purchases for one full season before making changes—you 
          need comparison data.
        </p>
        <p>
          <strong>Start here:</strong> Soil test your three most important fields. Track every input purchase 
          for one season with simple categories. Note yields by field. This baseline costs almost nothing 
          but makes everything else possible.
        </p>

        <div className="not-prose my-8 p-6 bg-gray-50 rounded-lg">
          <h4 className="font-semibold text-gray-900 mb-3">Related guides & tools</h4>
          <div className="space-y-2">
            <Link href="/tools/soil-health-checklist" className="block text-[#4AA88C] hover:underline">
              🔧 Soil Microbial Health Checklist (Interactive Tool) →
            </Link>
            <Link href="/articles/life-cycle-assessment-explained" className="block text-[#4AA88C] hover:underline">
              Life Cycle Assessment Explained →
            </Link>
            <Link href="/articles/what-are-ecolabels" className="block text-[#4AA88C] hover:underline">
              What Are Ecolabels? →
            </Link>
          </div>
        </div>

        {/* Stack 2 */}
        <h2 id="stack-2">Stack 2: Operational Efficiency</h2>
        <p className="text-lg italic text-gray-600">Fix leaks before adding new initiatives.</p>
        
        <p>
          With baseline data in hand, Stack 2 identifies where you're losing money to inefficiency and 
          fixes the highest-impact leaks first. These improvements often pay for themselves within 1-2 
          seasons while creating the margin that funds later investments.
        </p>

        <h3>Key practices & economic returns</h3>
        
        <p><strong>Cover cropping:</strong> A $30-40/acre investment typically generates fertilizer savings 
        of $30-50/acre within 1-3 seasons. The math works because cover crops cycle nutrients, reduce 
        erosion, and improve soil biology—effects that compound over time.</p>
        
        <p><strong>Conservation tillage:</strong> Generally saves $15-30/acre in fuel and labor costs while 
        improving moisture retention. Reduced passes mean reduced equipment wear, less compaction, and 
        more time for other activities.</p>
        
        <p><strong>Strategic crop rotation:</strong> Breaks pest cycles naturally, typically reducing 
        pesticide costs by 15-25%. Also spreads risk and can improve soil health when designed thoughtfully.</p>
        
        <p><strong>Energy efficiency:</strong> Audits typically identify 20-40% potential savings. Lighting 
        and equipment upgrades often achieve payback within 2-3 years.</p>

        <h3>Case study: Iowa row crop operation</h3>
        <div className="not-prose my-6 p-6 bg-blue-50 border border-blue-100 rounded-lg">
          <p className="text-gray-700 mb-3">
            A 320-acre Iowa farm implemented cover crops and reduced tillage over three years, reducing 
            nitrogen applications by 40 lbs/acre with no yield penalty.
          </p>
          <p className="text-gray-700 mb-3"><strong>Results by year four:</strong></p>
          <ul className="text-gray-700 space-y-1 ml-4">
            <li>• $45/acre reduction in fertilizer costs</li>
            <li>• $22/acre reduction in fuel and equipment costs</li>
            <li>• $40/acre in watershed improvement program payments</li>
            <li>• <strong>Total: $107/acre improvement = $34,240/year</strong></li>
          </ul>
        </div>

        <p>
          <strong>Start here:</strong> Begin with basic soil testing to identify limitations. Winter cover 
          crops often provide the fastest initial return. Consider a simple single-species cover (cereal rye) 
          as an entry point before complex mixes.
        </p>

        <div className="not-prose my-8 p-6 bg-gray-50 rounded-lg">
          <h4 className="font-semibold text-gray-900 mb-3">Related guides</h4>
          <div className="space-y-2">
            <Link href="/articles/cover-crops-roi" className="block text-[#4AA88C] hover:underline">
              Cover Crops: Investment and Returns →
            </Link>
            <Link href="/articles/regenerative-agriculture-economics" className="block text-[#4AA88C] hover:underline">
              The Economics of Regenerative Agriculture →
            </Link>
            <Link href="/articles/soil-health-business-case" className="block text-[#4AA88C] hover:underline">
              Soil Health: The Business Case →
            </Link>
          </div>
        </div>

        {/* Stack 3 */}
        <h2 id="stack-3">Stack 3: Circular Value Creation</h2>
        <p className="text-lg italic text-gray-600">What you discard can become margin.</p>
        
        <p>
          Every "waste" product represents unrealized value. Stack 3 converts disposal costs into savings 
          or revenue—turning cost centers into profit centers.
        </p>

        <h3>Key practices & economic returns</h3>
        
        <p><strong>On-farm composting:</strong> Converts waste biomass into valuable soil amendments, reducing 
        external input needs. Crop residues, culled produce, and livestock bedding become fertility instead 
        of disposal problems.</p>
        
        <p><strong>Water recirculation:</strong> Generally reduces water costs by 25-50% while improving 
        consistency of supply. Captured water is often higher quality than purchased inputs.</p>
        
        <p><strong>Precision application:</strong> Reduces input overuse by 15-40% in the first year. 
        Applying the right amount in the right place means less waste and lower costs.</p>

        <h3>Case study: New York vegetable operation</h3>
        <div className="not-prose my-6 p-6 bg-blue-50 border border-blue-100 rounded-lg">
          <p className="text-gray-700 mb-3">
            A 30-acre diversified vegetable operation developed an on-farm composting system using crop 
            residues and implemented efficient irrigation.
          </p>
          <p className="text-gray-700 mb-3"><strong>Results over five years:</strong></p>
          <ul className="text-gray-700 space-y-1 ml-4">
            <li>• 40% reduction in water usage</li>
            <li>• Eliminated purchased fertilizer ($7,000+ annual savings)</li>
            <li>• Soil organic matter increased from 2.1% to 4.3%</li>
            <li>• Significantly improved drought resilience</li>
          </ul>
        </div>

        <p>
          <strong>Start here:</strong> Conduct a waste stream audit. Identify your largest sources of unused 
          organic material. Static compost piles work well for beginners before advancing to turned windrows.
        </p>

        <div className="not-prose my-8 p-6 bg-gray-50 rounded-lg">
          <h4 className="font-semibold text-gray-900 mb-3">Related guides</h4>
          <div className="space-y-2">
            <Link href="/articles/circular-economy-explained" className="block text-[#4AA88C] hover:underline">
              The Circular Economy Explained →
            </Link>
            <Link href="/articles/value-chains-economic-efficiency" className="block text-[#4AA88C] hover:underline">
              Value Chains and Economic Efficiency →
            </Link>
          </div>
        </div>

      </article>

      {/* Mid-page CTA */}
      <div className="my-12">
        <NewsletterSignup />
      </div>

      <article className="prose prose-gray max-w-none">

        {/* Stack 4 */}
        <h2 id="stack-4">Stack 4: Adaptive Resilience</h2>
        <p className="text-lg italic text-gray-600">Systems must absorb shocks without breaking.</p>
        
        <p>
          Stack 4 builds operations that flex instead of snap. Diversification, biological buffers, and 
          risk-spreading strategies create resilience that protects your gains from Stacks 1-3.
        </p>

        <h3>Key practices & economic returns</h3>
        
        <p><strong>Beneficial insect habitat:</strong> Strategic flowering borders typically reduce insecticide 
        applications by 20-50% within 2-3 seasons, representing savings of $15-40/acre annually. Conservation 
        programs often pay $300-600/acre for habitat establishment.</p>
        
        <p><strong>Crop diversification:</strong> Farms with 4+ crops in rotation show 25-35% lower income 
        volatility and 15-30% better performance during extreme weather compared to less diverse operations.</p>
        
        <p><strong>Strategic intercropping:</strong> Compatible intercrops can increase per-acre revenue by 
        15-40% compared to monocultures while reducing pest pressure through biological diversity.</p>

        <h3>Case study: Pennsylvania diversified operation</h3>
        <div className="not-prose my-6 p-6 bg-blue-50 border border-blue-100 rounded-lg">
          <p className="text-gray-700 mb-3">
            A 180-acre diversified vegetable and grain operation established 8 acres of pollinator habitat 
            along field borders and waterways.
          </p>
          <p className="text-gray-700 mb-3"><strong>Results within two years:</strong></p>
          <ul className="text-gray-700 space-y-1 ml-4">
            <li>• 35% reduction in insecticide applications ($8,500 annual savings)</li>
            <li>• $4,800 in conservation program payments</li>
            <li>• 18-22% yield increase in insect-pollinated crops</li>
            <li>• Habitat establishment cost: $3,600 (full ROI in year one)</li>
          </ul>
        </div>

        <p>
          <strong>Start here:</strong> Identify underproductive field edges, wet areas, or steep slopes that 
          could convert to beneficial habitat. NRCS often provides free seed and technical assistance. Start 
          with 20-30 foot borders adjacent to high-value crops.
        </p>

        <div className="not-prose my-8 p-6 bg-gray-50 rounded-lg">
          <h4 className="font-semibold text-gray-900 mb-3">Related guides</h4>
          <div className="space-y-2">
            <Link href="/articles/intercropping-vs-polyculture" className="block text-[#4AA88C] hover:underline">
              Intercropping vs. Polyculture →
            </Link>
            <Link href="/articles/introduction-to-intercropping" className="block text-[#4AA88C] hover:underline">
              Introduction to Intercropping →
            </Link>
            <Link href="/articles/small-farm-competitive-strategy" className="block text-[#4AA88C] hover:underline">
              Small Farm Competitive Strategy →
            </Link>
          </div>
        </div>

        {/* Stack 5 */}
        <h2 id="stack-5">Stack 5: Regenerative Advantage</h2>
        <p className="text-lg italic text-gray-600">Build systems that improve as they operate.</p>
        
        <p>
          With Stacks 1-4 in place, you have documented improvements, reduced costs, captured circular value, 
          and built resilience. Stack 5 turns this operational foundation into market positioning—premium 
          pricing, certification access, and buyer relationships that reward your sustainability investments.
        </p>

        <h3>Key practices & economic returns</h3>
        
        <p><strong>Documentation systems:</strong> Simple record-keeping enables verification for premium 
        markets. Photos, field records, and input tracking serve dual purposes—improving your own management 
        while creating authentic marketing content.</p>
        
        <p><strong>Certification pathways:</strong> Organic, regenerative, and specialty certifications 
        typically command 10-40% price premiums. The right certification depends on your market and 
        operational fit.</p>
        
        <p><strong>Direct market positioning:</strong> Effectively communicating sustainable practices can 
        secure 15-25% price premiums at farmers markets and with direct buyers, while strengthening customer 
        loyalty.</p>

        <h3>Case study: Market positioning results</h3>
        <div className="not-prose my-6 p-6 bg-blue-50 border border-blue-100 rounded-lg">
          <p className="text-gray-700 mb-3">
            The New York vegetable operation (from Stack 3) leveraged their documented practices into 
            market positioning.
          </p>
          <p className="text-gray-700 mb-3"><strong>Results:</strong></p>
          <ul className="text-gray-700 space-y-1 ml-4">
            <li>• Consistent 20% price premium at farmers markets</li>
            <li>• Strengthened customer loyalty through transparency</li>
            <li>• Maintained premium pricing even as competition increased</li>
            <li>• Documentation from earlier stacks became marketing assets</li>
          </ul>
        </div>

        <p>
          <strong>Start here:</strong> Document your current practices with photos, simple records, and input 
          tracking. Focus on practices most visible to consumers—reduced pesticides, pollinator habitat, soil 
          conservation. Build the story from operational reality.
        </p>

        <div className="not-prose my-8 p-6 bg-gray-50 rounded-lg">
          <h4 className="font-semibold text-gray-900 mb-3">Related guides</h4>
          <div className="space-y-2">
            <Link href="/articles/direct-marketing-small-farms" className="block text-[#4AA88C] hover:underline">
              Direct Marketing for Small Farms →
            </Link>
            <Link href="/articles/most-trustworthy-ecolabels" className="block text-[#4AA88C] hover:underline">
              Most Trustworthy Ecolabels →
            </Link>
            <Link href="/articles/esg-labels-in-2025" className="block text-[#4AA88C] hover:underline">
              ESG Labels in 2025 →
            </Link>
          </div>
        </div>

        {/* Decision Matrix */}
        <h2 id="decision-matrix">Decision matrix: Where to start</h2>
        <p>
          Use this matrix to evaluate which practices might be the best starting point for your operation 
          based on your constraints and goals:
        </p>
      </article>

      {/* Decision Matrix Table */}
      <div className="my-8 overflow-x-auto">
        <table className="min-w-full text-sm border border-gray-200 rounded-lg overflow-hidden">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-3 text-left font-semibold text-gray-900">Practice</th>
              <th className="px-4 py-3 text-left font-semibold text-gray-900">Upfront Cost</th>
              <th className="px-4 py-3 text-left font-semibold text-gray-900">Complexity</th>
              <th className="px-4 py-3 text-left font-semibold text-gray-900">Time to ROI</th>
              <th className="px-4 py-3 text-left font-semibold text-gray-900">Best For</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            <tr>
              <td className="px-4 py-3 font-medium">Cover Cropping</td>
              <td className="px-4 py-3 text-green-700">Low</td>
              <td className="px-4 py-3 text-yellow-700">Medium</td>
              <td className="px-4 py-3">1-2 seasons</td>
              <td className="px-4 py-3 text-gray-600">Soil health, fertility, erosion</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="px-4 py-3 font-medium">Conservation Tillage</td>
              <td className="px-4 py-3 text-yellow-700">Medium</td>
              <td className="px-4 py-3 text-yellow-700">Medium</td>
              <td className="px-4 py-3">Immediate-1 season</td>
              <td className="px-4 py-3 text-gray-600">Fuel/labor savings, moisture</td>
            </tr>
            <tr>
              <td className="px-4 py-3 font-medium">Crop Rotation</td>
              <td className="px-4 py-3 text-green-700">Low</td>
              <td className="px-4 py-3 text-yellow-700">Medium</td>
              <td className="px-4 py-3">1-3 seasons</td>
              <td className="px-4 py-3 text-gray-600">Pest management, risk spreading</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="px-4 py-3 font-medium">Composting</td>
              <td className="px-4 py-3 text-yellow-700">Medium</td>
              <td className="px-4 py-3 text-yellow-700">Medium</td>
              <td className="px-4 py-3">1-2 seasons</td>
              <td className="px-4 py-3 text-gray-600">Nutrient management, waste reduction</td>
            </tr>
            <tr>
              <td className="px-4 py-3 font-medium">Energy Efficiency</td>
              <td className="px-4 py-3 text-green-700">Low-Medium</td>
              <td className="px-4 py-3 text-green-700">Low</td>
              <td className="px-4 py-3">Immediate-2 years</td>
              <td className="px-4 py-3 text-gray-600">Operating cost reduction</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="px-4 py-3 font-medium">Beneficial Habitat</td>
              <td className="px-4 py-3 text-green-700">Low</td>
              <td className="px-4 py-3 text-green-700">Low</td>
              <td className="px-4 py-3">1-2 seasons</td>
              <td className="px-4 py-3 text-gray-600">Pest reduction, conservation payments</td>
            </tr>
            <tr>
              <td className="px-4 py-3 font-medium">Solar Installation</td>
              <td className="px-4 py-3 text-red-700">High</td>
              <td className="px-4 py-3 text-red-700">High</td>
              <td className="px-4 py-3">5-8 years</td>
              <td className="px-4 py-3 text-gray-600">Long-term energy independence</td>
            </tr>
          </tbody>
        </table>
      </div>

      <article className="prose prose-gray max-w-none">
        <p><strong>How to use this matrix:</strong></p>
        <ul>
          <li><strong>Capital constrained?</strong> Start with low-cost practices (cover crops, rotation, habitat)</li>
          <li><strong>Need quick wins?</strong> Focus on immediate-ROI practices (tillage reduction, energy efficiency)</li>
          <li><strong>Limited management time?</strong> Choose low-complexity practices first</li>
          <li><strong>Building for long-term?</strong> Layer practices—start simple, add complexity as you learn</li>
        </ul>

        {/* Economic Synergies */}
        <h2 id="economic-synergies">Economic synergies: Stacking practices</h2>
        <p>
          The real power emerges when practices combine to create mutually reinforcing systems. 
          These combinations consistently outperform individual practices:
        </p>
      </article>

      {/* Synergies Table */}
      <div className="my-8 overflow-x-auto">
        <table className="min-w-full text-sm border border-gray-200 rounded-lg overflow-hidden">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-3 text-left font-semibold text-gray-900">Practice Combination</th>
              <th className="px-4 py-3 text-left font-semibold text-gray-900">Synergistic Benefit</th>
              <th className="px-4 py-3 text-left font-semibold text-gray-900">Economic Impact</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            <tr>
              <td className="px-4 py-3 font-medium">Cover Crops + Reduced Tillage</td>
              <td className="px-4 py-3 text-gray-600">Accelerated soil improvement, better moisture</td>
              <td className="px-4 py-3">20-40% greater returns than either alone</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="px-4 py-3 font-medium">Composting + Precision Application</td>
              <td className="px-4 py-3 text-gray-600">Improved input efficiency, reduced waste</td>
              <td className="px-4 py-3">20-25% reduction in external inputs</td>
            </tr>
            <tr>
              <td className="px-4 py-3 font-medium">Energy Efficiency + Renewables</td>
              <td className="px-4 py-3 text-gray-600">Reduced base load before sizing systems</td>
              <td className="px-4 py-3">15-30% improved ROI on renewable investment</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="px-4 py-3 font-medium">Habitat + Diversification</td>
              <td className="px-4 py-3 text-gray-600">Natural pest control + reduced income volatility</td>
              <td className="px-4 py-3">Compounds risk reduction across system</td>
            </tr>
          </tbody>
        </table>
      </div>

      <article className="prose prose-gray max-w-none">

        {/* 12-Month Roadmap */}
        <h2 id="12-month-roadmap">12-month implementation roadmap</h2>
        
        <h3>Phase 1: Foundation (Months 1-3)</h3>
        <ul>
          <li>Complete basic farm assessment and soil testing</li>
          <li>Identify highest-ROI first intervention using decision matrix</li>
          <li>Establish baseline documentation (input costs, yields by field)</li>
          <li>Start tracking key metrics for comparison</li>
        </ul>

        <h3>Phase 2: First Practices (Months 3-6)</h3>
        <ul>
          <li>Implement first efficiency practice (cover crops, tillage reduction, or energy audit)</li>
          <li>Identify and address one major resource inefficiency</li>
          <li>Begin researching relevant programs and incentives</li>
          <li>Document changes with photos and simple records</li>
        </ul>

        <h3>Phase 3: Integration & Expansion (Months 6-12)</h3>
        <ul>
          <li>Add complementary practice based on initial results</li>
          <li>Improve documentation systems</li>
          <li>Apply for relevant incentive programs</li>
          <li>Evaluate market positioning opportunities</li>
          <li>Plan year two based on what you've learned</li>
        </ul>

        {/* Common Pitfalls */}
        <h2 id="common-pitfalls">Common pitfalls (and how to avoid them)</h2>

        <h3>Pitfall: Overly ambitious timelines</h3>
        <p>
          Many operations attempt too much change too quickly, leading to overwhelm and mistakes.
        </p>
        <p><strong>Prevention:</strong></p>
        <ul>
          <li>Create a multi-year transition plan with clearly defined phases</li>
          <li>Focus on mastering one practice before adding another</li>
          <li>Celebrate small wins to maintain motivation</li>
        </ul>

        <h3>Pitfall: Poor practice selection</h3>
        <p>
          Implementing practices in the wrong order or choosing techniques poorly suited to your operation.
        </p>
        <p><strong>Prevention:</strong></p>
        <ul>
          <li>Begin with thorough assessment to identify limiting factors</li>
          <li>Prioritize practices that address your most significant challenges first</li>
          <li>Look for successful models on similar operations in your region</li>
        </ul>

        <h3>Pitfall: Insufficient monitoring</h3>
        <p>
          Failure to track outcomes or adjust approaches based on results.
        </p>
        <p><strong>Prevention:</strong></p>
        <ul>
          <li>Establish simple baseline measurements before implementing changes</li>
          <li>Set specific, measurable goals for each practice</li>
          <li>Be willing to modify approaches that consistently underperform</li>
        </ul>

        <h3>Pitfall: Skipping to Stack 5</h3>
        <p>
          Jumping to market positioning and certification without operational foundation.
        </p>
        <p><strong>Prevention:</strong></p>
        <ul>
          <li>Build the story from documented operational improvements</li>
          <li>Ensure claims are backed by measurable changes</li>
          <li>Let market positioning emerge from genuine practice, not precede it</li>
        </ul>

        {/* Funding Resources */}
        <h2 id="funding-resources">Funding resources</h2>
        <p>
          Numerous programs can help offset costs and provide technical assistance:
        </p>

        <h3>USDA Programs</h3>
        <ul>
          <li><strong>Environmental Quality Incentives Program (EQIP):</strong> Cost-share funding for cover crops, reduced tillage, habitat establishment, and many other practices</li>
          <li><strong>Conservation Stewardship Program (CSP):</strong> Annual payments for advanced conservation systems already in place</li>
          <li><strong>SARE Producer Grants:</strong> Funding for on-farm research and demonstration projects</li>
        </ul>

        <h3>State and regional resources</h3>
        <ul>
          <li><strong>State Departments of Agriculture:</strong> Many offer programs for sustainable practice adoption</li>
          <li><strong>Soil and Water Conservation Districts:</strong> Local technical assistance and sometimes funding</li>
          <li><strong>Land Grant University Extension:</strong> Education, research, and sometimes equipment access</li>
        </ul>

        <h3>Private funding sources</h3>
        <ul>
          <li><strong>Supply chain initiatives:</strong> Companies like General Mills, Unilever, and others offer grower incentives</li>
          <li><strong>Carbon markets:</strong> Emerging opportunities for documented soil carbon increases</li>
          <li><strong>Specialty lenders:</strong> Organizations specializing in sustainable agriculture financing</li>
        </ul>

        {/* FAQs */}
        <h2 id="faqs">Frequently asked questions</h2>

        <h3>Will I see returns in the first year?</h3>
        <p>
          Some practices (energy efficiency, tillage reduction) show immediate returns. Others (soil health, 
          habitat establishment) typically take 1-3 years to reach full economic potential. The framework 
          sequences practices so early wins fund longer-term investments.
        </p>

        <h3>Do I need to go organic?</h3>
        <p>
          No. These practices create economic and environmental benefits regardless of certification. Many 
          conventional operations implement cover crops, reduced tillage, and efficiency improvements while 
          still using targeted synthetic inputs where they make sense.
        </p>

        <h3>What if I rent my farmland?</h3>
        <p>
          Land tenure complicates long-term soil investments. Consider focusing first on practices with 
          shorter-term returns, discussing longer leases with landowners (sustainable practices protect 
          their asset value), or cost-sharing arrangements for improvements that increase land value.
        </p>

        <h3>How do I know which stack I'm on?</h3>
        <p>
          Ask yourself: Do I have baseline metrics? (Stack 1) Have I addressed major inefficiencies? (Stack 2) 
          Am I capturing value from waste streams? (Stack 3) Is my operation resilient to shocks? (Stack 4) 
          Am I positioned in premium markets? (Stack 5) Start where you have gaps.
        </p>

        <h3>Can I work on multiple stacks at once?</h3>
        <p>
          Yes, but respect the sequence. You can implement Stack 2 efficiency practices while still building 
          Stack 1 metrics—but don't skip to Stack 5 market positioning without the operational foundation. 
          The stacks build on each other for a reason.
        </p>

      </article>

      {/* Bottom CTA */}
      <div className="mt-16 p-8 bg-[#1a1a2e] rounded-lg text-white">
        <h2 className="text-2xl font-bold mb-3">Ready to start?</h2>
        <p className="text-white/80 mb-6">
          The path to sustainable competitive advantage doesn't begin with perfection—it begins with 
          measurement. Start with Stack 1: baseline your operation, identify your biggest opportunities, 
          and build from there.
        </p>
        <div className="flex flex-wrap gap-4">
          <Link 
            href="/framework" 
            className="inline-block bg-[#4AA88C] text-white px-6 py-3 rounded font-semibold hover:bg-[#3d8f76] transition-colors"
          >
            Explore the Framework →
          </Link>
          <Link 
            href="/articles" 
            className="inline-block bg-white/10 text-white px-6 py-3 rounded font-semibold hover:bg-white/20 transition-colors"
          >
            Browse All Guides →
          </Link>
        </div>
      </div>

      {/* Last updated */}
      <p className="mt-8 text-sm text-gray-500 text-center">
        Last updated: January 2026
      </p>
    </div>
  );
}
