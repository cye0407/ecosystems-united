import Link from "next/link";
import NewsletterSignup from "@/components/marketing/NewsletterSignup";

export const metadata = {
  title: "Cellulosic Biofuels: Turning Agricultural Waste into Energy Value",
  description: "Cellulosic biofuels convert crop residues and plant waste into renewable fuel. Learn how this technology creates new value streams from agricultural byproducts.",
  keywords: ["biofuels", "renewable energy", "biomass", "sustainable fuel", "cellulosic", "agriculture", "sustainability"],
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
          Cellulosic Biofuels: Turning Agricultural Waste into Energy Value
        </h1>
        <p className="text-xl text-gray-600">
          Cellulosic biofuels convert the fibrous, inedible parts of plants—crop residues, forestry waste, energy crops—into renewable fuel. For agricultural operations, they represent a potential revenue stream from materials currently discarded.
        </p>
      </header>

      {/* Article Content */}
      <article className="prose prose-gray max-w-none">
        <p>
          Cellulosic biofuels are renewable fuels made from the fibrous, inedible parts of plants—agricultural residues, forestry waste, and dedicated energy crops. Unlike traditional biofuels derived from food sources like corn or sugarcane, these advanced biofuels utilize non-food biomass, making them a more sustainable energy source.
        </p>
        <p>
          For farmers and landowners, cellulosic biofuels offer an opportunity to convert agricultural byproducts—corn stalks, wheat straw, forestry waste—into a revenue stream rather than a disposal problem.
        </p>

        <h2>The Production Process</h2>
        <p>
          Producing cellulosic biofuels involves multiple steps to break down tough plant material into usable fuel:
        </p>

        <h3>Step 1: Feedstock Collection</h3>
        <p>
          Raw materials come primarily from agricultural waste and forestry byproducts. Common feedstocks include corn stover (stalks, leaves, and cobs), wheat straw, rice husks, and forestry residues like sawdust and tree trimmings. Some farmers grow dedicated energy crops such as switchgrass and miscanthus specifically for biofuel production.
        </p>

        <h3>Step 2: Pre-Treatment</h3>
        <p>
          Plant materials must undergo pre-treatment to break down complex cellulose and lignin structures. Techniques like heat, acid treatment, or mechanical grinding loosen plant fibers, preparing biomass for conversion.
        </p>

        <h3>Step 3: Conversion</h3>
        <p>
          Two main conversion methods exist:
        </p>
        <ul>
          <li><strong>Biochemical process:</strong> Specialized enzymes break down cellulose into simple sugars, then microorganisms ferment these sugars into ethanol</li>
          <li><strong>Thermochemical process:</strong> Biomass is heated at high temperatures with limited oxygen, producing syngas that's converted into liquid biofuels</li>
        </ul>

        <h3>Step 4: Refining</h3>
        <p>
          The resulting ethanol is distilled and purified before blending with gasoline. Leftover biomass can be repurposed for electricity generation or other uses.
        </p>
      </article>

      {/* Mid-article Newsletter CTA */}
      <div className="my-12">
        <NewsletterSignup />
      </div>

      {/* Continue article */}
      <article className="prose prose-gray max-w-none">
        <h2>Why Cellulosic Biofuels Matter</h2>

        <h3>Sustainable Use of Waste Materials</h3>
        <p>
          Cellulosic biofuels utilize waste from agriculture and forestry, preventing materials from being discarded or burned. Unlike corn ethanol, they don't compete with food production. For farmers, this means potential additional revenue from materials that would otherwise go unused.
        </p>

        <h3>Lower Carbon Footprint</h3>
        <p>
          Cellulosic biofuels can reduce greenhouse gas emissions by up to 86% compared to fossil fuels. Since plants absorb CO₂ as they grow, these biofuels help offset emissions in their lifecycle.
        </p>

        <h3>Economic Benefits</h3>
        <p>
          Growing demand creates opportunities for farmers to sell crop residues or grow energy crops. Increased production also supports job creation in rural areas.
        </p>

        <h3>Infrastructure Compatibility</h3>
        <p>
          Cellulosic ethanol can blend with gasoline and work in conventional engines. Unlike hydrogen or electric vehicles, it can be distributed through existing fuel stations.
        </p>

        <h2>Current Challenges</h2>
        <ul>
          <li><strong>High production costs:</strong> Breaking down cellulosic biomass is more complex and expensive than processing food-based biofuels</li>
          <li><strong>Feedstock supply chain:</strong> Collecting, transporting, and storing biomass efficiently remains challenging</li>
          <li><strong>Limited commercial scale:</strong> While some plants are operational, many remain in early stages</li>
        </ul>

        <h2>The Stack 3 Connection</h2>
        <p>
          Cellulosic biofuels are a prime example of Stack 3 thinking—what you discard can become margin. Agricultural operations generate significant crop residues that currently have limited value. Cellulosic biofuel pathways offer one potential route to capturing that value.
        </p>
        <p>
          The opportunity for your operation might be:
        </p>
        <ul>
          <li>Selling crop residues to biofuel producers as feedstock</li>
          <li>Growing dedicated energy crops on marginal land</li>
          <li>Understanding how emerging biofuel markets might affect residue values</li>
          <li>Evaluating whether on-farm energy production makes economic sense</li>
        </ul>
        <p>
          The technology is still developing, but tracking these developments positions you to capture value as the market matures.
        </p>
      </article>

      {/* Bottom CTA - Stack 3 */}
      <div className="mt-12 p-8 bg-[#7B6BB8] rounded-lg text-white">
        <h3 className="text-2xl font-bold mb-3">Ready to find value in what you discard?</h3>
        <p className="text-white/80 mb-4">
          Cellulosic biofuels represent one pathway for circular value creation—part of Stack 3 in the Five Stacks Framework.
        </p>
        <p className="text-white/80 mb-6">
          Stack 3 focuses on systematically identifying waste streams and byproducts that can become revenue or cost savings. Understanding the cellulosic biofuel landscape helps you evaluate whether your crop residues have emerging market value.
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
            <span className="block text-sm text-gray-600">The basics of converting organic materials into energy</span>
          </Link>
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
