import Link from "next/link";
import NewsletterSignup from "@/components/marketing/NewsletterSignup";

export const metadata = {
  title: "7 Biofuel Trends Shaping the Industry in 2025",
  description: "From advanced feedstocks to sustainable aviation fuel, these biofuel trends are reshaping energy markets. What agricultural operations need to know.",
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
          7 Biofuel Trends Shaping the Industry in 2025
        </h1>
        <p className="text-xl text-gray-600">
          The biofuel landscape is evolving rapidly. These trends signal where value creation opportunities are emerging for agricultural operations.
        </p>
      </header>

      {/* Article Content */}
      <article className="prose prose-gray max-w-none">
        <p>
          As decarbonization accelerates, biofuels are playing an increasingly important role in the energy transition. For agricultural operations, understanding these trends helps identify where waste streams and crop residues might find new markets.
        </p>

        <h2>1. The Rise of Second-Generation and Advanced Biofuels</h2>
        <p>
          Traditional biofuels like corn ethanol face growing concerns over land use and food security. The shift is toward non-food-based biofuels:
        </p>
        <ul>
          <li><strong>Cellulosic ethanol</strong> from agricultural waste, forestry residues, and municipal waste</li>
          <li><strong>Algae-based biofuels</strong> producing high yields without competing for farmland</li>
          <li><strong>Industrial waste gas conversion</strong> turning emissions into fuel</li>
        </ul>
        <p>
          For farmers, this means crop residues that were previously low-value are gaining market attention as feedstock.
        </p>

        <h2>2. Sustainable Aviation Fuel (SAF) Gaining Traction</h2>
        <p>
          Aviation accounts for 2-3% of global CO₂ emissions, and airlines face pressure to reduce their carbon footprint. SAF is emerging as the primary solution.
        </p>
        <p>
          Major airlines and fuel producers are ramping up SAF production using feedstocks including used cooking oil, forestry residues, algae, and synthetic e-fuels. Government mandates like the EU ReFuelEU Aviation initiative are accelerating adoption.
        </p>
        <p>
          This creates demand for agricultural waste streams that can serve as SAF feedstock.
        </p>

        <h2>3. Biofuel Blending Mandates Expanding</h2>
        <p>
          Governments worldwide are expanding biofuel mandates:
        </p>
        <ul>
          <li><strong>U.S.:</strong> The Renewable Fuel Standard continues pushing for higher ethanol and biodiesel use</li>
          <li><strong>EU:</strong> The Fit for 55 package targets higher biofuel incorporation in transport fuels</li>
          <li><strong>India and Brazil:</strong> Higher ethanol blending mandates (E20 in India, E27 in Brazil) are expanding domestic markets</li>
        </ul>
        <p>
          More aggressive blending policies mean growing demand for biofuel feedstocks.
        </p>
      </article>

      {/* Mid-article Newsletter CTA */}
      <div className="my-12">
        <NewsletterSignup />
      </div>

      {/* Continue article */}
      <article className="prose prose-gray max-w-none">
        <h2>4. Renewable Diesel (HVO) for Heavy Transport</h2>
        <p>
          Unlike traditional biodiesel, renewable diesel (hydrotreated vegetable oil) is chemically identical to petroleum diesel, making it compatible with existing engines and infrastructure.
        </p>
        <p>
          Heavy transport—trucks, buses, construction vehicles—is adopting HVO as a drop-in fuel. Shipping companies are using biofuels to comply with carbon regulations. By late 2025, renewable diesel could outpace biodiesel in trucking and maritime industries.
        </p>

        <h2>5. Waste-to-Biofuel Solutions Scaling Up</h2>
        <p>
          As land use concerns rise, more investment is flowing into waste-to-fuel technologies:
        </p>
        <ul>
          <li>Municipal solid waste converted to biofuels</li>
          <li>Used cooking oil and animal fats becoming biodiesel and SAF</li>
          <li>Agricultural residues (corn stover, wheat straw) converted to cellulosic ethanol</li>
        </ul>
        <p>
          This circular economy approach reduces waste while producing low-carbon fuels with minimal land footprint—and creates potential revenue streams for operations with organic waste.
        </p>

        <h2>6. Synthetic and E-Fuels Emerging</h2>
        <p>
          New innovations are merging biofuels with electrification and hydrogen:
        </p>
        <ul>
          <li><strong>Power-to-X fuels</strong> combine renewable electricity, hydrogen, and CO₂ to create liquid fuels</li>
          <li>Major automakers are investing in e-gasoline and e-diesel as low-emission alternatives</li>
          <li>Advances in green hydrogen and CO₂ capture could make synthetic biofuels viable for hard-to-decarbonize sectors</li>
        </ul>

        <h2>7. Investment and Consolidation Accelerating</h2>
        <p>
          Major oil and gas companies and renewable startups are merging and forming partnerships to expand biofuel production. Traditional energy companies are shifting toward renewables, driving corporate investment in advanced biofuels.
        </p>
        <p>
          This investment signals that biofuels are moving from niche to mainstream energy markets.
        </p>

        <h2>What This Means for Agricultural Operations</h2>
        <p>
          These trends point to growing demand for:
        </p>
        <ul>
          <li>Crop residues as cellulosic feedstock</li>
          <li>Dedicated energy crops on marginal land</li>
          <li>Organic waste streams with biofuel conversion potential</li>
          <li>Used cooking oils and animal fats from processing operations</li>
        </ul>
        <p>
          Stack 3 thinking means evaluating whether your waste streams might have emerging value in these growing markets—and positioning to capture that value as infrastructure develops.
        </p>
      </article>

      {/* Bottom CTA - Stack 3 */}
      <div className="mt-12 p-8 bg-[#7B6BB8] rounded-lg text-white">
        <h3 className="text-2xl font-bold mb-3">Ready to evaluate your circular value opportunities?</h3>
        <p className="text-white/80 mb-4">
          Biofuel market trends create new opportunities for agricultural waste streams—part of Stack 3 in the Five Stacks Framework.
        </p>
        <p className="text-white/80 mb-6">
          Stack 3 focuses on identifying waste and byproducts that can become revenue. Understanding where biofuel markets are heading helps you evaluate whether your residues and waste streams have emerging value.
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
            <span className="block text-sm text-gray-600">Turning crop residues into fuel value</span>
          </Link>
          <Link href="/articles/advanced-biofuels" className="block p-4 border border-gray-200 rounded-lg hover:border-[#7B6BB8] transition-colors">
            <span className="font-medium text-gray-900">What Are Advanced Biofuels? →</span>
            <span className="block text-sm text-gray-600">Next-generation biofuels from waste, algae, and non-food sources</span>
          </Link>
          <Link href="/articles/biofuels-in-aviation" className="block p-4 border border-gray-200 rounded-lg hover:border-[#7B6BB8] transition-colors">
            <span className="font-medium text-gray-900">Biofuels in Aviation →</span>
            <span className="block text-sm text-gray-600">How sustainable aviation fuel is creating new feedstock demand</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
