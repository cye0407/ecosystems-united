import Link from "next/link";
import NewsletterSignup from "@/components/marketing/NewsletterSignup";

export const metadata = {
  title: "Ranking Biofuel Sustainability: Comparing the 4 Generations",
  description: "Not all biofuels are equally sustainable. Compare first through fourth-generation biofuels on carbon footprint, land use, and scalability.",
  keywords: ["biofuels", "renewable energy", "biomass", "sustainable fuel", "biofuel", "sustainability", "ranking", "agriculture"],
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
          Ranking Biofuel Sustainability: Comparing the 4 Generations
        </h1>
        <p className="text-xl text-gray-600">
          Not all biofuels are equally sustainable. Understanding the differences helps you evaluate which pathways might fit your operation's waste streams.
        </p>
      </header>

      {/* Article Content */}
      <article className="prose prose-gray max-w-none">
        <p>
          The environmental impact of biofuels depends on factors including feedstock sources, greenhouse gas emissions, land use, and energy conversion efficiency. Different generations of biofuels offer different sustainability profiles—and different opportunities for agricultural operations.
        </p>

        <h2>Evaluation Criteria</h2>
        <p>
          To assess sustainability, we consider:
        </p>
        <ul>
          <li><strong>Carbon footprint:</strong> Net GHG emissions compared to fossil fuels</li>
          <li><strong>Feedstock availability:</strong> Abundance and renewability of feedstocks</li>
          <li><strong>Land use impact:</strong> Deforestation, soil degradation, biodiversity concerns</li>
          <li><strong>Energy efficiency:</strong> Energy return on investment (EROI)</li>
          <li><strong>Scalability:</strong> Commercial feasibility and production potential</li>
        </ul>

        <h2>Fourth-Generation Biofuels (Genetically Engineered)</h2>
        <p>
          <strong>Overall sustainability rank: Highest potential, lowest current viability</strong>
        </p>
        <p>
          Fourth-generation biofuels use engineered algae and microbes with optimized metabolic pathways. They offer minimal land use, carbon-negative potential, and no competition with agriculture.
        </p>
        <p>
          <strong>Challenge:</strong> Still in research phase with expensive production. The most promising long-term option, but commercial viability remains years away.
        </p>

        <h2>Third-Generation Biofuels (Algae-Based)</h2>
        <p>
          <strong>Overall sustainability rank: High sustainability, moderate viability</strong>
        </p>
        <p>
          Algae-based biofuels absorb CO₂ during growth, don't compete with food crops, and can grow in non-arable areas with minimal land footprint.
        </p>
        <p>
          <strong>Challenge:</strong> High lipid yield but expensive extraction process. Costly infrastructure and scaling limitations slow adoption.
        </p>
      </article>

      {/* Mid-article Newsletter CTA */}
      <div className="my-12">
        <NewsletterSignup />
      </div>

      {/* Continue article */}
      <article className="prose prose-gray max-w-none">
        <h2>Second-Generation Biofuels (Lignocellulosic/Waste-Based)</h2>
        <p>
          <strong>Overall sustainability rank: Best balance of sustainability and practicality</strong>
        </p>
        <p>
          Second-generation biofuels use agricultural residues, non-food biomass, and waste materials. They have lower carbon footprint than first-generation, no competition with food production, and are already commercially viable.
        </p>
        <p>
          <strong>Opportunity for agriculture:</strong> This is where crop residues and farm waste can become feedstock. Corn stover, wheat straw, forestry residues—materials currently discarded or low-value can enter biofuel supply chains.
        </p>
        <p>
          <strong>Challenge:</strong> Requires advanced processing technology, but production is scaling.
        </p>

        <h2>First-Generation Biofuels (Food Crop-Based)</h2>
        <p>
          <strong>Overall sustainability rank: Better than fossil fuels, but significant concerns</strong>
        </p>
        <p>
          First-generation biofuels—corn ethanol, sugarcane ethanol, biodiesel from vegetable oils—are well-established with existing infrastructure.
        </p>
        <p>
          <strong>Concerns:</strong> Competes with food supply, requires arable land, deforestation and soil degradation issues, higher resource demands. While better than fossil fuels, sustainability trade-offs limit long-term viability.
        </p>

        <h2>The Agricultural Opportunity</h2>
        <p>
          For agricultural operations, second-generation biofuels represent the most accessible opportunity:
        </p>
        <ul>
          <li>Crop residues already generated can become feedstock</li>
          <li>No additional land required—uses existing waste streams</li>
          <li>Technology is commercially viable and scaling</li>
          <li>Markets and infrastructure are developing</li>
        </ul>
        <p>
          Third and fourth-generation biofuels may eventually offer additional opportunities, but second-generation pathways represent near-term potential for capturing value from agricultural waste.
        </p>

        <h2>What This Means for Your Operation</h2>
        <p>
          Understanding biofuel generations helps you evaluate:
        </p>
        <ul>
          <li>Which of your waste streams might have value as biofuel feedstock</li>
          <li>What infrastructure and markets exist in your region</li>
          <li>Whether selling residues or growing energy crops makes economic sense</li>
          <li>How to position for emerging opportunities as the market develops</li>
        </ul>
      </article>

      {/* Bottom CTA - Stack 3 */}
      <div className="mt-12 p-8 bg-[#7B6BB8] rounded-lg text-white">
        <h3 className="text-2xl font-bold mb-3">Ready to evaluate your circular value opportunities?</h3>
        <p className="text-white/80 mb-4">
          Second-generation biofuels turn agricultural waste into value—a Stack 3 opportunity in the Five Stacks Framework.
        </p>
        <p className="text-white/80 mb-6">
          Stack 3 focuses on systematically identifying waste streams and byproducts that can become revenue. Understanding which biofuel pathways are viable helps you evaluate whether your residues have untapped market value.
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
            <span className="block text-sm text-gray-600">Second-generation biofuels from agricultural residues</span>
          </Link>
          <Link href="/articles/advanced-biofuels" className="block p-4 border border-gray-200 rounded-lg hover:border-[#7B6BB8] transition-colors">
            <span className="font-medium text-gray-900">What Are Advanced Biofuels? →</span>
            <span className="block text-sm text-gray-600">Technologies behind next-generation biofuels</span>
          </Link>
          <Link href="/articles/pros-and-cons-of-advanced-biofuels" className="block p-4 border border-gray-200 rounded-lg hover:border-[#7B6BB8] transition-colors">
            <span className="font-medium text-gray-900">Pros and Cons of Advanced Biofuels →</span>
            <span className="block text-sm text-gray-600">A balanced assessment of opportunities and challenges</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
