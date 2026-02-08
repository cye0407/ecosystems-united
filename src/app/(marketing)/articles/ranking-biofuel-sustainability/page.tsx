import Link from "next/link";
import NewsletterSignup from "@/components/marketing/NewsletterSignup";

export const metadata = {
  title: "Ranking the Sustainability of Biofuels: Comparing the 4 Generations",
  description: "Not all biofuels are equally sustainable. Compare first through fourth generation biofuels on carbon footprint, land use, and scalability.",
  keywords: ["biofuels", "renewable energy", "biomass", "sustainable fuel", "ranking", "biofuel", "agriculture", "sustainability"],
};

export default function ArticlePage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      {/* Navigation */}
      <nav className="mb-8">
        <Link href="/framework/stack-3-circular" className="group flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-[#4AA88C] transition-colors">
          <span className="group-hover:-translate-x-1 transition-transform">←</span> Back to Stack 3: Circular Value Creation
        </Link>
      </nav>

      {/* Header */}
      <header className="mb-12">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-8 h-8 rounded-full bg-[#7B6BB8] text-white flex items-center justify-center font-bold text-sm">
            3
          </div>
          <span className="text-sm text-gray-500">Stack 3: Circular Value Creation</span>
        </div>
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Ranking the Sustainability of Biofuels: Comparing the 4 Generations
        </h1>
        <p className="text-xl text-gray-600">
          Not all biofuels are equally sustainable. Understanding the differences helps you evaluate which pathways make sense for your operation.
        </p>
      </header>

      {/* Article Content */}
      <article className="prose prose-gray max-w-none">
        <p>
          The global transition toward renewable energy has placed biofuels at the center of the conversation about sustainable alternatives to fossil fuels. However, not all biofuels are equally sustainable. Their environmental impact depends on feedstock sources, greenhouse gas emissions, land use, and energy conversion efficiency.
        </p>

        <h2>Evaluation Criteria</h2>
        <p>
          To assess sustainability, we consider:
        </p>
        <ul>
          <li><strong>Carbon footprint:</strong> Net GHG emissions compared to fossil fuels</li>
          <li><strong>Feedstock availability:</strong> Abundance and renewability of feedstocks</li>
          <li><strong>Land use impact:</strong> Deforestation, soil degradation, and biodiversity concerns</li>
          <li><strong>Energy efficiency:</strong> Energy return on investment and production efficiency</li>
          <li><strong>Scalability:</strong> Commercial feasibility and production potential</li>
        </ul>

        <h2>Fourth-Generation Biofuels: Highest Potential, Lowest Readiness</h2>
        <p>
          <strong>What they are:</strong> Genetically engineered and photosynthetic biofuels using modified algae and microbes.
        </p>
        <p>
          <strong>Sustainability profile:</strong>
        </p>
        <ul>
          <li>Minimal emissions with carbon-negative potential</li>
          <li>Uses engineered algae and microbes, avoiding food competition</li>
          <li>Minimal land use, no competition with agriculture</li>
          <li>High yield with optimized metabolic pathways</li>
        </ul>
        <p>
          <strong>The catch:</strong> Still in research phase with expensive production. The most promising in terms of sustainability, but commercial viability remains a challenge.
        </p>

        <h2>Third-Generation Biofuels: Algae-Based</h2>
        <p>
          <strong>What they are:</strong> Biofuels derived from algae cultivation.
        </p>
        <p>
          <strong>Sustainability profile:</strong>
        </p>
        <ul>
          <li>Absorbs CO₂ during growth, near carbon-neutral</li>
          <li>Doesn't compete with food crops but requires water and nutrients</li>
          <li>Minimal land use, can grow in non-arable areas</li>
          <li>High lipid yield but expensive extraction process</li>
        </ul>
        <p>
          <strong>The catch:</strong> Costly infrastructure and scaling limitations. Highly sustainable but production challenges and costs slow adoption.
        </p>
      </article>

      {/* Mid-article Newsletter CTA */}
      <div className="my-12">
        <NewsletterSignup />
      </div>

      {/* Continue article */}
      <article className="prose prose-gray max-w-none">
        <h2>Second-Generation Biofuels: Best Current Balance</h2>
        <p>
          <strong>What they are:</strong> Lignocellulosic ethanol and waste-based biofuels from agricultural residues, non-food biomass, and waste.
        </p>
        <p>
          <strong>Sustainability profile:</strong>
        </p>
        <ul>
          <li>Lower carbon footprint than fossil fuels (varies by feedstock)</li>
          <li>Uses agricultural residues and non-food biomass</li>
          <li>Less land impact than first-generation, though some concerns remain</li>
          <li>High energy return, improved conversion processes</li>
          <li>Requires advanced processing but commercially viable</li>
        </ul>
        <p>
          <strong>The verdict:</strong> The strongest current alternative—already in commercial production with improved sustainability over first-generation biofuels. This is where most agricultural feedstock opportunities exist today.
        </p>

        <h2>First-Generation Biofuels: Established but Limited</h2>
        <p>
          <strong>What they are:</strong> Corn ethanol, sugarcane ethanol, and biodiesel from vegetable oils.
        </p>
        <p>
          <strong>Sustainability profile:</strong>
        </p>
        <ul>
          <li>Reduces GHGs compared to fossil fuels but not carbon-neutral</li>
          <li>Food-based, competes with food supply</li>
          <li>Deforestation, soil degradation, and water use concerns</li>
          <li>Lower energy efficiency than second-generation, high resource demand</li>
          <li>Well-established with existing infrastructure</li>
        </ul>
        <p>
          <strong>The verdict:</strong> Better than fossil fuels, but sustainability concerns related to food security and land use limit long-term viability. The infrastructure exists, but the model has clear constraints.
        </p>

        <h2>The Practical Takeaway</h2>
        <p>
          For agricultural operations evaluating circular value opportunities:
        </p>
        <ul>
          <li><strong>Second-generation pathways</strong> offer the best current balance of sustainability and commercial viability—this is where crop residue and agricultural waste have the most immediate market potential</li>
          <li><strong>First-generation pathways</strong> have established infrastructure but face growing sustainability scrutiny</li>
          <li><strong>Third and fourth-generation</strong> technologies are promising but not yet commercially accessible for most operations</li>
        </ul>
        <p>
          Understanding these differences helps you evaluate which biofuel markets might create value for your specific waste streams and residues.
        </p>
      </article>

      {/* Bottom CTA - Stack 3 */}
      <div className="mt-12 p-8 bg-[#7B6BB8] rounded-lg text-white">
        <h3 className="text-2xl font-bold mb-3">Ready to evaluate your circular value opportunities?</h3>
        <p className="text-white/80 mb-4">
          Understanding biofuel sustainability helps you identify which markets make sense for your waste streams—part of Stack 3 in the Five Stacks Framework.
        </p>
        <p className="text-white/80 mb-6">
          Stack 3 focuses on finding value in what you discard. Second-generation biofuels currently offer the most accessible pathway for agricultural residues, but the landscape is evolving. Knowing where the market is heading helps you position for emerging opportunities.
        </p>
        <Link href="/framework/stack-3-circular" className="inline-block bg-white text-[#7B6BB8] px-6 py-3 rounded font-semibold hover:bg-gray-100 transition-colors">
          Get Started with Stack 3 →
        </Link>
      </div>

      {/* Further Reading */}
      <div className="mt-12 pt-8 border-t border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Further Reading</h3>
        <div className="space-y-3">
          <Link href="/articles/cellulosic-biofuels" className="block p-4 border border-gray-200 rounded-lg hover:border-[#7B6BB8] transition-colors">
            <span className="font-medium text-gray-900">Cellulosic Biofuels →</span>
            <span className="block text-sm text-gray-600">Second-generation biofuels from crop residues</span>
          </Link>
          <Link href="/articles/advanced-biofuels" className="block p-4 border border-gray-200 rounded-lg hover:border-[#7B6BB8] transition-colors">
            <span className="font-medium text-gray-900">What Are Advanced Biofuels? →</span>
            <span className="block text-sm text-gray-600">Third and fourth-generation technologies on the horizon</span>
          </Link>
          <Link href="/articles/pros-and-cons-of-advanced-biofuels" className="block p-4 border border-gray-200 rounded-lg hover:border-[#7B6BB8] transition-colors">
            <span className="font-medium text-gray-900">Pros and Cons of Advanced Biofuels →</span>
            <span className="block text-sm text-gray-600">A balanced assessment of benefits and challenges</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
