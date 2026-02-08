import Link from "next/link";
import NewsletterSignup from "@/components/marketing/NewsletterSignup";

export const metadata = {
  title: "Biofuels in Aviation: How SAF Is Creating New Feedstock Demand",
  description: "Sustainable Aviation Fuel is driving demand for agricultural feedstocks. Learn how this trend creates opportunities for farm waste streams.",
  keywords: ["biofuels", "renewable energy", "biomass", "sustainable fuel", "aviation", "agriculture", "sustainability"],
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
          Biofuels in Aviation: How SAF Is Creating New Feedstock Demand
        </h1>
        <p className="text-xl text-gray-600">
          Sustainable Aviation Fuel (SAF) is one of the fastest-growing biofuel markets—and it's creating demand for agricultural feedstocks that could benefit farm operations.
        </p>
      </header>

      {/* Article Content */}
      <article className="prose prose-gray max-w-none">
        <p>
          Aviation accounts for about 2% of global CO₂ emissions, and airlines face growing pressure to reduce their carbon footprint. Unlike ground transportation, planes can't easily switch to electric or hydrogen power for long-haul flights. That makes Sustainable Aviation Fuel (SAF) the primary pathway for aviation decarbonization.
        </p>
        <p>
          SAF can cut lifecycle greenhouse gas emissions by up to 80% compared to conventional jet fuel. This is driving major investment—and creating demand for feedstocks that agricultural operations can potentially supply.
        </p>

        <h2>Why Aviation Is Betting on Biofuels</h2>
        <p>
          The aviation industry has set a goal to reach net-zero carbon by 2050, with SAF as the primary near-term solution. Airlines see biofuels as:
        </p>
        <ul>
          <li>The best available lever to decarbonize while maintaining current operations</li>
          <li>A hedge against oil price volatility and supply disruptions</li>
          <li>A way to meet regulatory requirements and carbon mandates</li>
          <li>A brand differentiator for environmentally conscious travelers</li>
        </ul>

        <h2>Airline Commitments Are Growing</h2>
        <p>
          Airlines are signing multi-year purchase agreements with SAF producers:
        </p>
        <ul>
          <li><strong>Delta and Southwest:</strong> Committed to replacing 10% of jet fuel with SAF by 2030</li>
          <li><strong>United Airlines:</strong> Leading U.S. adoption with multiple SAF investments</li>
          <li><strong>KLM and Lufthansa:</strong> Regular SAF use on select routes with long-term supply agreements</li>
        </ul>
        <p>
          Over 360,000 commercial flights have already used SAF blends, and that number is growing rapidly as production scales up.
        </p>

        <h2>Feedstocks Driving SAF Production</h2>
        <p>
          SAF production uses a range of feedstocks—many of which come from agricultural operations:
        </p>
        <ul>
          <li><strong>Used cooking oil:</strong> One of the most common current feedstocks</li>
          <li><strong>Animal fats:</strong> From meat processing operations</li>
          <li><strong>Forestry residues:</strong> Wood waste from logging and milling</li>
          <li><strong>Crop residues:</strong> Corn stover, wheat straw, other agricultural waste</li>
          <li><strong>Dedicated energy crops:</strong> Camelina, switchgrass, and other non-food crops</li>
          <li><strong>Algae:</strong> Still developing but high potential</li>
        </ul>
      </article>

      {/* Mid-article Newsletter CTA */}
      <div className="my-12">
        <NewsletterSignup />
      </div>

      {/* Continue article */}
      <article className="prose prose-gray max-w-none">
        <h2>Policy Is Accelerating Demand</h2>
        <p>
          Government mandates are creating guaranteed demand for SAF:
        </p>
        <ul>
          <li><strong>U.S.:</strong> Inflation Reduction Act provides tax credits up to $1.75 per gallon for SAF</li>
          <li><strong>EU:</strong> ReFuelEU mandates 2% SAF by 2025, increasing to 70% by 2050</li>
          <li><strong>California:</strong> Low Carbon Fuel Standard provides additional incentives</li>
        </ul>
        <p>
          These policies create stable demand signals that encourage investment across the SAF supply chain—including feedstock production.
        </p>

        <h2>The Challenge: Cost and Scale</h2>
        <p>
          SAF currently costs 2-5 times more than conventional jet fuel. The price premium reflects:
        </p>
        <ul>
          <li>High production costs for conversion technology</li>
          <li>Limited refining capacity</li>
          <li>Feedstock collection and processing expenses</li>
        </ul>
        <p>
          In 2022, SAF accounted for only about 0.1% of total jet fuel used in the U.S. The Biden administration's SAF Grand Challenge aims to scale production to 3 billion gallons annually by 2030—a dramatic increase from roughly 16 million gallons in 2021.
        </p>
        <p>
          This scaling creates significant opportunity for feedstock suppliers.
        </p>

        <h2>What This Means for Agricultural Operations</h2>
        <p>
          The SAF market is creating demand for materials that agricultural operations already produce or could produce:
        </p>
        <ul>
          <li><strong>Crop residues:</strong> Corn stover, wheat straw, and other harvest byproducts</li>
          <li><strong>Used cooking oil:</strong> From processing or food service operations</li>
          <li><strong>Animal fats:</strong> From livestock processing</li>
          <li><strong>Cover crops:</strong> Some can serve as energy feedstock after their soil health benefits</li>
          <li><strong>Marginal land crops:</strong> Camelina and other oilseeds that grow on land not suited for food crops</li>
        </ul>
        <p>
          As SAF production scales, feedstock demand will grow. Operations that understand this market can position to capture value from materials currently treated as waste or low-value byproducts.
        </p>

        <h2>The Stack 3 Connection</h2>
        <p>
          Aviation biofuels exemplify Stack 3 thinking: finding value in what others discard. The question for your operation is whether SAF feedstock markets could create value from your waste streams—and whether the infrastructure exists to connect you to those markets.
        </p>
      </article>

      {/* Bottom CTA - Stack 3 */}
      <div className="mt-12 p-8 bg-[#7B6BB8] rounded-lg text-white">
        <h3 className="text-2xl font-bold mb-3">Ready to evaluate your feedstock opportunities?</h3>
        <p className="text-white/80 mb-4">
          Aviation biofuel demand is creating new markets for agricultural waste streams—part of Stack 3 in the Five Stacks Framework.
        </p>
        <p className="text-white/80 mb-6">
          Stack 3 focuses on systematically identifying waste and byproducts that can become revenue. Understanding SAF feedstock demand helps you evaluate whether your crop residues, used oils, or other materials have emerging market value.
        </p>
        <Link href="/framework/stack-3-circular" className="inline-block bg-white text-[#7B6BB8] px-6 py-3 rounded font-semibold hover:bg-gray-100 transition-colors">
          Get Started with Stack 3 →
        </Link>
      </div>

      {/* Further Reading */}
      <div className="mt-12 pt-8 border-t border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Further Reading</h3>
        <div className="space-y-3">
          <Link href="/articles/biofuel-trends-2025" className="block p-4 border border-gray-200 rounded-lg hover:border-[#7B6BB8] transition-colors">
            <span className="font-medium text-gray-900">7 Biofuel Trends in 2025 →</span>
            <span className="block text-sm text-gray-600">Where biofuel markets are heading and what it means for agriculture</span>
          </Link>
          <Link href="/articles/cellulosic-biofuels" className="block p-4 border border-gray-200 rounded-lg hover:border-[#7B6BB8] transition-colors">
            <span className="font-medium text-gray-900">Cellulosic Biofuels →</span>
            <span className="block text-sm text-gray-600">Turning crop residues into fuel value</span>
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
