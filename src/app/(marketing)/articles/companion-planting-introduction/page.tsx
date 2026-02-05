import Link from "next/link";
import NewsletterSignup from "@/components/marketing/NewsletterSignup";

export const metadata = {
  title: "Introduction to Companion Planting: Exploiting Plant Relationships",
  description: "Companion planting grows specific plants together for mutual benefit—pest control, improved growth, or enhanced flavor. Here's how it works.",
};

export default function ArticlePage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      {/* Navigation */}
      <nav className="mb-8">
        <Link href="/framework/stack-4-resilience" className="group flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-[#4AA88C] transition-colors">
          <span className="group-hover:-translate-x-1 transition-transform">←</span> Back to Stack 4: Adaptive Resilience
        </Link>
      </nav>

      {/* Header */}
      <header className="mb-12">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-8 h-8 rounded-full bg-[#3B7D6E] text-white flex items-center justify-center font-bold text-sm">
            4
          </div>
          <span className="text-sm text-gray-500">Stack 4: Adaptive Resilience</span>
        </div>
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Introduction to Companion Planting: Exploiting Plant Relationships
        </h1>
        <p className="text-xl text-gray-600">
          Companion planting deliberately pairs plants that benefit each other—through pest control, improved growth, or enhanced yields. It's a targeted form of polyculture.
        </p>
      </header>

      {/* Article Content */}
      <article className="prose prose-gray max-w-none">
        <p>
          All healthy ecosystems contain complex networks of microbes, insects, plants, and animals that interact to maintain balance. Companion planting is a targeted effort to exploit beneficial relationships between specific plants to improve production.
        </p>
        <p>
          More simply: companion planting grows two plant species together because it's known (or theorized) that they synergistically improve each other's growth.
        </p>

        <h2>How Companion Planting Works</h2>
        <p>
          Plant relationships can improve growth through several mechanisms:
        </p>
        <p>
          <strong>Attracting beneficial insects:</strong> Natural substances produced by plant roots and flowers may attract pollinators or predatory insects that consume pests.
        </p>
        <p>
          <strong>Deterring pests:</strong> Companion crops may produce scents that pests find off-putting, or act as a scent barrier that confuses pests seeking the primary crop.
        </p>
        <p>
          <strong>Improving soil conditions:</strong> Nitrogen-fixing legumes can improve soil fertility for neighboring plants. Different root structures can improve soil aeration and nutrient cycling.
        </p>
        <p>
          <strong>Disease resistance:</strong> Some plant combinations appear to improve resistance to certain diseases, though mechanisms aren't always well understood.
        </p>
        <p>
          <strong>Flavor enhancement:</strong> There's evidence—particularly from traditional knowledge—that certain combinations can improve crop flavor, though this is less studied scientifically.
        </p>

        <h2>Companion Planting vs. Intercropping</h2>
        <p>
          Companion planting and intercropping are related but distinct:
        </p>
        <ul>
          <li><strong>Intercropping</strong> focuses on spatial arrangements and economic productivity—crops are chosen primarily for profitability</li>
          <li><strong>Companion planting</strong> focuses on symbiotic relationships—plants are chosen because they benefit each other</li>
        </ul>
        <p>
          In practice, companion planting can be considered a sub-genre of intercropping. When companion planting practices are implemented in agricultural systems, they typically use intercropping patterns (row, strip, mixed, or relay) while selecting crops based on relationship benefits.
        </p>
      </article>

      {/* Mid-article Newsletter CTA */}
      <div className="my-12">
        <NewsletterSignup />
      </div>

      {/* Continue article */}
      <article className="prose prose-gray max-w-none">
        <h2>Economics of Companion Planting</h2>
        <p>
          Successful companion planting requires understanding each plant species' functionality. In an ideal situation, both the companion and target crop are harvestable, providing direct economic benefit.
        </p>
        <p>
          However, this isn't always the case. Sometimes the companion plant is "sacrificial"—grown only to benefit the primary crop without being harvested itself. In these situations, the economic benefits from improved yield of the primary crop should outweigh the cost of the companion crop.
        </p>
        <p>
          This calculation needs to include:
        </p>
        <ul>
          <li>Seed/planting costs for the companion crop</li>
          <li>Any additional labor for planting and management</li>
          <li>Potential reduction in pest control or fertilizer costs</li>
          <li>Yield improvement in the primary crop</li>
          <li>Any quality or flavor improvements that might command premium prices</li>
        </ul>

        <h2>The Knowledge Gap</h2>
        <p>
          At present, institutional research on companion planting is limited, though the body of knowledge is growing. Much existing expertise comes from "folk" knowledge rooted in local traditions and practices.
        </p>
        <p>
          Unfortunately, much traditional knowledge has been lost due to agricultural industrialization, which favored mechanical and chemical production methods over observation-based growing practices.
        </p>
        <p>
          As sustainability concerns grow and demand for organic and traditional production methods increases, interest in companion planting research is expanding. This will likely generate more scientifically validated recommendations over time.
        </p>

        <h2>Practical Applications</h2>
        <p>
          Currently, companion planting is most common in:
        </p>
        <ul>
          <li><strong>Home gardens:</strong> Where traditional companion planting knowledge has persisted</li>
          <li><strong>Small-scale organic operations:</strong> Where labor-intensive practices are more feasible</li>
          <li><strong>Resource-poor environments:</strong> Where purchased inputs are expensive or unavailable</li>
        </ul>
        <p>
          In larger-scale production, companion planting principles often show up as specialized intercropping practices like trap cropping, repellent planting, or push-pull systems.
        </p>

        <h2>The Stack 4 Connection</h2>
        <p>
          Companion planting represents Stack 4 thinking—implementing sustainable practices that can reduce input costs while maintaining or improving yields. The challenge is that much companion planting relies on traditional knowledge that hasn't been scientifically validated.
        </p>
        <p>
          The Stack 4 approach suggests:
        </p>
        <ul>
          <li>Start with well-documented combinations that have research support</li>
          <li>Test traditional recommendations on small scales before committing large areas</li>
          <li>Measure results systematically—don't assume benefits without verification</li>
          <li>Share findings to contribute to the growing body of knowledge</li>
        </ul>
      </article>

      {/* Bottom CTA - Stack 4 */}
      <div className="mt-12 p-8 bg-[#3B7D6E] rounded-lg text-white">
        <h3 className="text-2xl font-bold mb-3">Ready to implement sustainable practices?</h3>
        <p className="text-white/80 mb-4">
          Companion planting is one approach to reducing inputs while improving outcomes—when implemented with proper measurement and evaluation.
        </p>
        <p className="text-white/80 mb-6">
          Stack 4 focuses on sustainable practices that generate measurable returns. Whether companion planting, intercropping, or other approaches, the key is choosing practices that fit your operation and verifying they deliver expected benefits.
        </p>
        <Link href="/framework/stack-4-resilience" className="inline-block bg-white text-[#3B7D6E] px-6 py-3 rounded font-semibold hover:bg-gray-100 transition-colors">
          Get Started with Stack 4 →
        </Link>
      </div>

      {/* Further Reading */}
      <div className="mt-12 pt-8 border-t border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Further Reading</h3>
        <div className="space-y-3">
          <Link href="/articles/introduction-to-intercropping" className="block p-4 border border-gray-200 rounded-lg hover:border-[#3B7D6E] transition-colors">
            <span className="font-medium text-gray-900">Introduction to Intercropping →</span>
            <span className="block text-sm text-gray-600">The broader framework for multi-crop systems</span>
          </Link>
          <Link href="/articles/intercropping-practices" className="block p-4 border border-gray-200 rounded-lg hover:border-[#3B7D6E] transition-colors">
            <span className="font-medium text-gray-900">Intercropping Practices →</span>
            <span className="block text-sm text-gray-600">Specialized approaches including push-pull systems</span>
          </Link>
          <Link href="/articles/measuring-intercropping-effectiveness" className="block p-4 border border-gray-200 rounded-lg hover:border-[#3B7D6E] transition-colors">
            <span className="font-medium text-gray-900">Measuring Intercropping Effectiveness →</span>
            <span className="block text-sm text-gray-600">Metrics to evaluate whether plant combinations are working</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
