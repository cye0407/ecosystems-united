import Link from "next/link";
import NewsletterSignup from "@/components/marketing/NewsletterSignup";

export const metadata = {
  title: "What Are Advanced Biofuels? The Next Generation of Renewable Energy",
  description: "Advanced biofuels use waste materials, algae, and non-food sources. Learn how they differ from first-generation biofuels and what opportunities they create.",
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
          What Are Advanced Biofuels? The Next Generation of Renewable Energy
        </h1>
        <p className="text-xl text-gray-600">
          Advanced biofuels address the limitations of first-generation biofuels by using waste materials, algae, and non-food sources—creating value from what was previously discarded.
        </p>
      </header>

      {/* Article Content */}
      <article className="prose prose-gray max-w-none">
        <p>
          Unlike first-generation biofuels that rely on food crops like corn and sugarcane, advanced biofuels use waste materials, algae, and synthetic processes to create energy-dense fuels with lower environmental impact. They represent a more circular approach to energy production.
        </p>

        <h2>What Makes Biofuels "Advanced"?</h2>
        <p>
          Advanced biofuels are next-generation liquid fuels designed as alternatives to gasoline, diesel, and jet fuel. What sets them apart is their feedstock and production process:
        </p>
        <ul>
          <li><strong>Second-generation biofuels:</strong> Made from non-food crops, agricultural residues, and forestry waste</li>
          <li><strong>Third-generation biofuels:</strong> Derived from algae and other rapidly growing biomass sources</li>
          <li><strong>Synthetic biofuels:</strong> Created using captured CO₂ and renewable hydrogen, mimicking fossil fuel properties</li>
        </ul>

        <h2>Key Production Technologies</h2>
        <p>
          Advanced biofuel production involves biochemical, thermochemical, or synthetic processes:
        </p>
        <ul>
          <li><strong>Hydrothermal liquefaction:</strong> Converts wet biomass into energy-rich bio-oil</li>
          <li><strong>Gasification and Fischer-Tropsch synthesis:</strong> Produces synthetic fuels from biomass-derived gases</li>
          <li><strong>Microbial fermentation:</strong> Uses engineered bacteria or yeast to produce ethanol or hydrocarbons</li>
        </ul>
        <p>
          These methods optimize carbon efficiency, reduce emissions, and enable biofuels to work within existing energy infrastructure.
        </p>

        <h2>Benefits of Advanced Biofuels</h2>
        
        <h3>Lower Carbon Emissions</h3>
        <p>
          Advanced biofuels can reduce greenhouse gas emissions by up to 80% compared to fossil fuels. The carbon footprint is smaller because raw materials absorb CO₂ during growth, creating a more closed carbon cycle.
        </p>

        <h3>Efficient Use of Waste</h3>
        <p>
          Many advanced biofuels upcycle waste materials—agricultural residues, municipal waste, industrial byproducts—into energy. This reduces landfill mass and methane emissions while creating value.
        </p>

        <h3>Drop-In Compatibility</h3>
        <p>
          Some advanced biofuels can blend with existing fossil fuels or be used directly in current engines without modification. This makes implementation easier compared to alternatives requiring new infrastructure.
        </p>
      </article>

      {/* Mid-article Newsletter CTA */}
      <div className="my-12">
        <NewsletterSignup />
      </div>

      {/* Continue article */}
      <article className="prose prose-gray max-w-none">
        <h2>Challenges to Widespread Adoption</h2>
        
        <h3>High Production Costs</h3>
        <p>
          Producing biofuels from algae, waste, or synthetic processes remains expensive compared to fossil fuels due to complex feedstock processing, high energy inputs, and limited economies of scale in a still-developing industry.
        </p>

        <h3>Limited Infrastructure</h3>
        <p>
          Current refineries and distribution networks are optimized for fossil fuels. Transitioning requires new investment in production plants, transportation, and logistics.
        </p>

        <h3>Policy Uncertainty</h3>
        <p>
          Although some governments provide incentives, inconsistent policies and fluctuating subsidies create uncertainty for investment and scaling decisions.
        </p>

        <h3>Feedstock Supply</h3>
        <p>
          Algae-based fuels require specific cultivation conditions. Agricultural waste availability fluctuates by season and region. Supply chain stability remains a challenge.
        </p>

        <h2>Innovations Driving Progress</h2>
        <p>
          Research is addressing these challenges through:
        </p>
        <ul>
          <li><strong>CRISPR and synthetic biology:</strong> Engineered microbes producing high-energy hydrocarbons more efficiently</li>
          <li><strong>AI and machine learning:</strong> Optimizing production by predicting best feedstock processing conditions</li>
          <li><strong>Carbon capture integration:</strong> Biofuel plants designed to capture and reuse CO₂</li>
          <li><strong>Next-generation feedstocks:</strong> Fast-growing seaweed, bacteria-derived oils, engineered fungi</li>
        </ul>

        <h2>The Stack 3 Connection</h2>
        <p>
          Advanced biofuels embody Stack 3 principles: finding value in what others discard. For agricultural operations, this means evaluating whether your waste streams—crop residues, processing byproducts, or other organic materials—could become feedstock for biofuel production.
        </p>
        <p>
          The opportunity isn't necessarily producing biofuels yourself. It might be:
        </p>
        <ul>
          <li>Selling agricultural residues to biofuel producers</li>
          <li>Partnering with local facilities for waste-to-energy conversion</li>
          <li>Understanding how biofuel markets might affect crop residue values</li>
          <li>Identifying which waste streams have emerging value as biofuel feedstock</li>
        </ul>
      </article>

      {/* Bottom CTA - Stack 3 */}
      <div className="mt-12 p-8 bg-[#7B6BB8] rounded-lg text-white">
        <h3 className="text-2xl font-bold mb-3">Ready to find value in what you discard?</h3>
        <p className="text-white/80 mb-4">
          Advanced biofuels represent one pathway for circular value creation—part of Stack 3 in the Five Stacks Framework.
        </p>
        <p className="text-white/80 mb-6">
          Stack 3 focuses on systematically identifying waste streams and byproducts that can become revenue or cost savings. Understanding the biofuel landscape helps you evaluate whether your organic waste streams have untapped value.
        </p>
        <Link href="/framework/stack-3-circular" className="inline-block bg-white text-[#7B6BB8] px-6 py-3 rounded font-semibold hover:bg-gray-100 transition-colors">
          Get Started with Stack 3 →
        </Link>
      </div>

      {/* Further Reading */}
      <div className="mt-12 pt-8 border-t border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Further Reading</h3>
        <div className="space-y-3">
          <Link href="/articles/biofuels-explained" className="block p-4 border border-gray-200 rounded-lg hover:border-[#7B6BB8] transition-colors">
            <span className="font-medium text-gray-900">Biofuels Explained →</span>
            <span className="block text-sm text-gray-600">The basics of converting organic materials into energy value</span>
          </Link>
          <Link href="/articles/cellulosic-biofuels" className="block p-4 border border-gray-200 rounded-lg hover:border-[#7B6BB8] transition-colors">
            <span className="font-medium text-gray-900">Cellulosic Biofuels →</span>
            <span className="block text-sm text-gray-600">Turning crop residues and woody materials into fuel</span>
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
