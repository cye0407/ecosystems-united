import Link from "next/link";
import NewsletterSignup from "@/components/marketing/NewsletterSignup";

export const metadata = {
  title: "Soil Health: The Business Case for Your Most Undervalued Asset",
  description: "Soil health isn't environmental idealism—it's operational economics. Here's how healthy soil reduces costs, stabilizes yields, and builds long-term asset value.",
};

export default function ArticlePage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      {/* Navigation */}
      <nav className="mb-8">
        <Link href="/framework/stack-2-efficiency" className="group flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-[#5B4A9E] transition-colors">
          <span className="group-hover:-translate-x-1 transition-transform">←</span> Back to Stack 2: Operational Efficiency
        </Link>
      </nav>

      {/* Header */}
      <header className="mb-12">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-8 h-8 rounded-full bg-[#5B4A9E] text-white flex items-center justify-center font-bold text-sm">
            2
          </div>
          <span className="text-sm text-gray-500">Stack 2: Operational Efficiency</span>
        </div>
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Soil Health: The Business Case for Your Most Undervalued Asset
        </h1>
        <p className="text-xl text-gray-600">
          Beneath every profitable operation lies its most undervalued asset: living, functioning soil. When managed as a dynamic system, soil becomes your ally in reducing costs and building resilience.
        </p>
      </header>

      {/* Article Content */}
      <article className="prose prose-gray max-w-none">
        <p>
          Soil health isn't environmental idealism—it's operational economics. Healthy soil reduces input costs, stabilizes yields across variable seasons, and builds long-term asset value. Degraded soil does the opposite: it requires increasing inputs to maintain declining yields, creating a spiral of rising costs and falling margins.
        </p>
        <p>
          The business case is straightforward: soil that functions as a living system does work you'd otherwise pay for.
        </p>

        <h2>The Economic Functions of Healthy Soil</h2>
        <p>
          Healthy soil operates like a well-run business unit—delivering services that directly affect your cost structure:
        </p>
        <p>
          <strong>Nutrient cycling:</strong> Billions of soil organisms break down organic matter and make nutrients plant-available. When this system works, you buy less fertilizer. When it doesn't, you're paying for nutrients that should be cycling naturally.
        </p>
        <p>
          <strong>Water management:</strong> Each 1% increase in soil organic matter improves water-holding capacity by approximately 16,000-20,000 gallons per acre. That's irrigation you don't need to pay for, and field access you retain after rain events.
        </p>
        <p>
          <strong>Pest and disease suppression:</strong> Diverse soil biology creates natural competition that suppresses pathogens. Healthy root systems with mycorrhizal associations give plants natural disease resistance. Less disease pressure means lower pesticide costs.
        </p>
        <p>
          <strong>Structural stability:</strong> Biological activity creates soil aggregates that resist erosion and compaction. Better structure means fewer passes to achieve the same seedbed, less fuel, and less equipment wear.
        </p>

        <h2>The Cost of Degraded Soil</h2>
        <p>
          Most operations don't account for soil degradation as a cost—but it shows up in the books regardless:
        </p>
        <ul>
          <li>Increasing fertilizer rates to maintain the same yields</li>
          <li>More frequent compaction issues requiring remediation</li>
          <li>Higher irrigation costs as water-holding capacity declines</li>
          <li>Greater yield variability during weather stress</li>
          <li>More pest and disease pressure requiring intervention</li>
        </ul>
        <p>
          Agricultural soils have lost 50-70% of their original carbon content in many regions. That carbon loss represents reduced capacity to hold nutrients, water, and support biological activity. Rebuilding it creates measurable economic returns.
        </p>
      </article>

      {/* Mid-article Newsletter CTA */}
      <div className="my-12">
        <NewsletterSignup />
      </div>

      {/* Continue article */}
      <article className="prose prose-gray max-w-none">
        <h2>Documented Returns from Soil Health Investments</h2>
        <p>
          Research and farmer experience document consistent patterns:
        </p>
        <p>
          <strong>Input cost reductions:</strong> 20-50% fertilizer reductions after 3-5 years of cover crops and reduced tillage. Early adopters report savings of $50-$150 per acre on inputs.
        </p>
        <p>
          <strong>Yield stability:</strong> Fields with healthy soil show smaller yield drops during drought years. This "yield insurance" effect is worth significant value during challenging seasons.
        </p>
        <p>
          <strong>Operational efficiency:</strong> Better infiltration means 2-3 days earlier field access after rain events. Over a season, that's meaningful capacity.
        </p>
        <p>
          <strong>Premium market access:</strong> Documented soil health improvements support regenerative certifications, organic transitions, and supply chain partnerships that pay premiums.
        </p>

        <h2>Measuring Soil Health Without Lab Costs</h2>
        <p>
          You don't need expensive testing to assess soil health. Simple field methods provide immediate feedback:
        </p>
        <p>
          <strong>Infiltration test:</strong> Push a metal ring 3 inches into soil, pour in 1 inch of water, time until it disappears. Compare across fields and over time. Faster infiltration indicates better structure.
        </p>
        <p>
          <strong>Slake test:</strong> Drop a dried soil clump into water. Does it hold together or dissolve? Stable aggregates indicate biological activity and organic matter.
        </p>
        <p>
          <strong>Earthworm count:</strong> Dig a 1-foot square hole, 6-8 inches deep. Count worms. Healthy soils typically show 6-10+ per square foot.
        </p>
        <p>
          <strong>Root examination:</strong> Dig up plants with roots intact. Look for branching patterns, depth, and any restrictions. Extensive root systems indicate good soil structure.
        </p>
        <p>
          Track these indicators over time. Improvement in these simple metrics correlates with the economic benefits you're building.
        </p>

        <h2>The ROI Timeline</h2>
        <p>
          Soil health investments follow a predictable pattern:
        </p>
        <ul>
          <li><strong>Year 1:</strong> Some benefits visible (reduced erosion, improved infiltration). Costs may exceed savings as you invest in new practices.</li>
          <li><strong>Years 2-3:</strong> Break-even for most practices. Input reductions begin to offset investment costs.</li>
          <li><strong>Years 3-5:</strong> Positive ROI compounds. Fertilizer reductions, yield stability, and operational efficiency accumulate.</li>
          <li><strong>Years 5+:</strong> Significant cost structure advantage. Premium market access becomes viable. Land value appreciation from documented soil improvement.</li>
        </ul>
        <p>
          The key insight: soil health is a capital investment, not an annual expense. Like equipment or infrastructure, it builds productive capacity that pays returns over time.
        </p>

        <h2>The Stack 2 Connection</h2>
        <p>
          Soil health is the foundation of Stack 2 efficiency—it's where operational leaks either compound or get fixed:
        </p>
        <ul>
          <li><strong>Fertilizer efficiency:</strong> Healthy soil biology cycles nutrients instead of losing them to runoff and volatilization</li>
          <li><strong>Water efficiency:</strong> Better structure captures and holds moisture instead of losing it</li>
          <li><strong>Equipment efficiency:</strong> Good tilth requires fewer passes and less horsepower</li>
          <li><strong>Yield efficiency:</strong> Healthy soil delivers more output per unit of input</li>
        </ul>
        <p>
          Stack 2 asks: where does your operation lose money to inefficiency? For most agricultural operations, degraded soil is the biggest hidden leak—one that compounds every year it goes unaddressed.
        </p>
      </article>

      {/* Bottom CTA - Stack 2 */}
      <div className="mt-12 p-8 bg-[#5B4A9E] rounded-lg text-white">
        <h3 className="text-2xl font-bold mb-3">Ready to fix your biggest efficiency leak?</h3>
        <p className="text-white/80 mb-4">
          Soil health improvement is often the highest-leverage efficiency investment—reducing costs across fertilizer, water, equipment, and yield simultaneously.
        </p>
        <p className="text-white/80 mb-6">
          Stack 2 focuses on identifying where your operation loses margin and implementing changes that pay for themselves. The Five Stacks Framework helps you build soil health as an operational advantage, not just an environmental practice.
        </p>
        <Link href="/framework/stack-2-efficiency" className="inline-block bg-white text-[#5B4A9E] px-6 py-3 rounded font-semibold hover:bg-gray-100 transition-colors">
          Explore Stack 2 →
        </Link>
      </div>

      {/* Further Reading */}
      <div className="mt-12 pt-8 border-t border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Further Reading</h3>
        <div className="space-y-3">
          <Link href="/articles/cover-crops-roi" className="block p-4 border border-gray-200 rounded-lg hover:border-[#5B4A9E] transition-colors">
            <span className="font-medium text-gray-900">Cover Crops: Investment and Returns →</span>
            <span className="block text-sm text-gray-600">Cost-benefit analysis of cover crop programs</span>
          </Link>
          <Link href="/articles/regenerative-agriculture-economics" className="block p-4 border border-gray-200 rounded-lg hover:border-[#5B4A9E] transition-colors">
            <span className="font-medium text-gray-900">The Economics of Regenerative Agriculture →</span>
            <span className="block text-sm text-gray-600">Financial framework for ecological farming decisions</span>
          </Link>
          <Link href="/tools/soil-health-checklist" className="block p-4 border border-gray-200 rounded-lg hover:border-[#5B4A9E] transition-colors">
            <span className="font-medium text-gray-900">🔧 Soil Microbial Health Checklist →</span>
            <span className="block text-sm text-gray-600">Interactive assessment tool for soil biology</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
