import Link from "next/link";
import NewsletterSignup from "@/components/marketing/NewsletterSignup";

export const metadata = {
  title: "Biofuels Explained: Converting Organic Materials into Energy Value",
  description: "Biofuels transform renewable organic materials into fuel. Understanding biofuel basics helps evaluate opportunities for agricultural operations.",
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
          Biofuels Explained: Converting Organic Materials into Energy Value
        </h1>
        <p className="text-xl text-gray-600">
          Biofuels transform what was once waste or low-value biomass into fuel. For agricultural operations, they represent a potential circular value stream.
        </p>
      </header>

      {/* Article Content */}
      <article className="prose prose-gray max-w-none">
        <p>
          A biofuel is fuel produced from renewable organic materials—sugar crops, oil seed crops, animal fats, or agricultural waste. They're considered potential substitutes for fossil fuels, though calling petroleum "extremely old biofuel" is technically accurate.
        </p>
        <p>
          There are two main varieties: plant-based and animal-based. Plant-based products use fermented sugars to create fuels like ethanol. Animal-based products combine alcohol with animal fat to create biodiesel.
        </p>

        <h2>Why Biofuels Matter for Agriculture</h2>
        <p>
          For agricultural operations, biofuels represent a potential value stream from materials that might otherwise be waste or low-value commodities. The <a href="https://www.energy.gov/eere/bioenergy/biofuel-basics" target="_blank" rel="noopener noreferrer">U.S. Department of Energy</a> estimates that most vehicles can use gasoline with up to 10 percent ethanol—the most widely produced biofuel.
        </p>
        <p>
          The potential benefits for agricultural operations include:
        </p>
        <ul>
          <li>New revenue streams from crop residues and waste materials</li>
          <li>Diversified income beyond commodity prices</li>
          <li>On-farm energy production reducing external dependencies</li>
          <li>Value capture from materials currently leaving the operation</li>
        </ul>

        <h2>The Trade-offs</h2>
        <p>
          Biofuels come with genuine controversies that agricultural operations should understand:
        </p>
        <p>
          <strong>Food vs. fuel:</strong> Whether finite agricultural resources should be allocated to fuel rather than food when hunger remains a global issue. This tension is being addressed through use of waste products for biofuel production rather than edible portions.
        </p>
        <p>
          <strong>Land use impacts:</strong> Global concerns about rainforest destruction for biofuel feedstock production (sugarcane, palm oil). Location and sourcing matter significantly.
        </p>
        <p>
          <strong>Net energy questions:</strong> Some biofuels require significant energy inputs for production, raising questions about true efficiency gains.
        </p>
        <p>
          <strong>Infrastructure compatibility:</strong> Consumer concerns about ethanol effects on motors and equipment, though newer engines are generally designed for biofuel blends.
        </p>
      </article>

      {/* Mid-article Newsletter CTA */}
      <div className="my-12">
        <NewsletterSignup />
      </div>

      {/* Continue article */}
      <article className="prose prose-gray max-w-none">
        <h2>Potential Benefits</h2>
        <p>
          If biofuel use continues to expand, benefits could include:
        </p>
        <ul>
          <li>Increased domestic energy production and energy independence</li>
          <li>Reduction in some air pollutants</li>
          <li>New income sources for farmers</li>
          <li>Possibility of sustainable production development</li>
          <li>Lower greenhouse gas emissions when burned (compared to fossil fuels)</li>
        </ul>

        <h2>Potential Downsides</h2>
        <p>
          Conversely, expanded biofuel production may result in:
        </p>
        <ul>
          <li>Land-use changes with environmental consequences</li>
          <li>Increased need for agricultural subsidies</li>
          <li>Greater use of pesticides, herbicides, and fertilizers</li>
          <li>Higher food crop prices from production shifts</li>
          <li>Water and soil quality impacts from intensive feedstock production</li>
        </ul>

        <h2>Advanced Biofuels: Addressing the Trade-offs</h2>
        <p>
          Many concerns about first-generation biofuels are being addressed through advanced biofuels that use:
        </p>
        <ul>
          <li>Agricultural waste and residues instead of food crops</li>
          <li>Algae that can be grown on non-arable land</li>
          <li>Cellulosic materials from forestry and crop residues</li>
          <li>Municipal and industrial waste streams</li>
        </ul>
        <p>
          These approaches avoid the food-vs-fuel debate while potentially creating value from materials currently treated as waste.
        </p>

        <h2>The Stack 3 Connection</h2>
        <p>
          Biofuels exemplify Stack 3 thinking: what you discard can become margin. Agricultural operations generate significant organic waste streams—crop residues, processing byproducts, manure. Biofuel pathways represent one option for converting these from disposal costs into value.
        </p>
        <p>
          The question isn't whether biofuels are universally good or bad—it's whether they make sense for your specific operation given your waste streams, local infrastructure, and market access.
        </p>
      </article>

      {/* Bottom CTA - Stack 3 */}
      <div className="mt-12 p-8 bg-[#7B6BB8] rounded-lg text-white">
        <h3 className="text-2xl font-bold mb-3">Ready to find value in what you discard?</h3>
        <p className="text-white/80 mb-4">
          Biofuels are one pathway for circular value creation—part of Stack 3 in the Five Stacks Framework.
        </p>
        <p className="text-white/80 mb-6">
          Stack 3 focuses on identifying waste streams and byproducts that can become revenue or cost savings. Biofuels are just one option—composting, animal feed, biogas, and other pathways might fit your operation better. The key is systematic evaluation of what's leaving your operation without capturing value.
        </p>
        <Link href="/framework/stack-3-circular" className="inline-block bg-white text-[#7B6BB8] px-6 py-3 rounded font-semibold hover:bg-gray-100 transition-colors">
          Get Started with Stack 3 →
        </Link>
      </div>

      {/* Further Reading */}
      <div className="mt-12 pt-8 border-t border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Further Reading</h3>
        <div className="space-y-3">
          <Link href="/articles/advanced-biofuels" className="block p-4 border border-gray-200 rounded-lg hover:border-[#7B6BB8] transition-colors">
            <span className="font-medium text-gray-900">What Are Advanced Biofuels? →</span>
            <span className="block text-sm text-gray-600">Next-generation biofuels from waste, algae, and non-food sources</span>
          </Link>
          <Link href="/articles/circular-economy-explained" className="block p-4 border border-gray-200 rounded-lg hover:border-[#7B6BB8] transition-colors">
            <span className="font-medium text-gray-900">The Circular Economy Explained →</span>
            <span className="block text-sm text-gray-600">The broader framework for turning waste into value</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
