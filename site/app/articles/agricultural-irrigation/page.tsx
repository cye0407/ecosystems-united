import Link from "next/link";
import NewsletterSignup from "@/components/NewsletterSignup";

export const metadata = {
  title: "Agricultural Irrigation: Methods, Advantages, and Efficiency Trade-offs",
  description: "Irrigation supports 40% of global food production. Understanding different irrigation methods helps you choose systems that balance water efficiency with operational needs.",
};

export default function ArticlePage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      {/* Navigation */}
      <nav className="mb-8">
        <Link href="/framework/stack-2-efficiency" className="group flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-[#4AA88C] transition-colors">
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
          Agricultural Irrigation: Methods, Advantages, and Efficiency Trade-offs
        </h1>
        <p className="text-xl text-gray-600">
          Irrigation supports 40% of global food production while using 70% of freshwater. Understanding different methods helps you balance water efficiency with operational needs.
        </p>
      </header>

      {/* Article Content */}
      <article className="prose prose-gray max-w-none">
        <p>
          Irrigation is defined as the artificial application of water to soil through various systems of tubes, pumps, and sprayers. Approximately 20% of the world's agricultural land is irrigated, yet 40% of global food supply comes from irrigated lands—with 70% of freshwater reserves used for irrigation purposes.
        </p>
        <p>
          These numbers highlight both the importance of irrigation and the efficiency imperative. Water is increasingly scarce and expensive. Choosing the right irrigation method—and operating it efficiently—directly impacts your operational costs and environmental footprint.
        </p>

        <h2>Why Irrigation Matters</h2>
        <p>
          The main reasons for irrigation are:
        </p>
        <p>
          <strong>Insufficient rainfall:</strong> This may be due to rainy and dry seasons, drought, or arid/semi-arid climate conditions. Irrigation systems may also maintain consistent moisture levels even in areas with moderate precipitation, as consistent moisture improves crop performance.
        </p>
        <p>
          <strong>High soil salinity:</strong> High salinity can be natural (common in semi-arid and arid locations) or result from poor agricultural practices and ineffective drainage. In salt-affected areas, irrigation must often be coupled with drainage to achieve desired benefits.
        </p>

        <h2>Types of Irrigation Systems</h2>
        <p>
          There are two main categories: gravity-powered and pressure-driven systems.
        </p>

        <h3>Gravity-Powered Systems</h3>
        <p>
          These include furrow irrigation, basin irrigation, and hand irrigation systems. Water flows by gravity through channels or across field surfaces.
        </p>
        <p><strong>Advantages:</strong></p>
        <ul>
          <li>Low cost—gravity is free and simple systems can be developed</li>
          <li>Can be used indefinitely with proper maintenance</li>
          <li>No energy costs for water delivery</li>
          <li>Promotes community coordination where water sources are shared</li>
        </ul>
        <p><strong>Disadvantages:</strong></p>
        <ul>
          <li>Requires constant monitoring to prevent over- or under-watering</li>
          <li>Difficult to adapt to specific plant needs</li>
          <li>Lower water use efficiency—significant evaporation and runoff</li>
          <li>Limited to relatively flat terrain</li>
        </ul>
      </article>

      {/* Mid-article Newsletter CTA */}
      <div className="my-12">
        <NewsletterSignup />
      </div>

      {/* Continue article */}
      <article className="prose prose-gray max-w-none">
        <h3>Pressure-Powered Systems</h3>
        <p>
          These include drip irrigation, sprinkler systems, and center pivot systems. Water is pumped and distributed under pressure.
        </p>
        <p><strong>Advantages:</strong></p>
        <ul>
          <li>High water use efficiency—especially drip systems</li>
          <li>Very adaptable to specific plant needs</li>
          <li>Enables wider crop variety, especially higher-value crops</li>
          <li>Can work on varied terrain</li>
          <li>Automation reduces labor requirements</li>
        </ul>
        <p><strong>Disadvantages:</strong></p>
        <ul>
          <li>High installation costs</li>
          <li>Ongoing energy and maintenance costs</li>
          <li>Requires technical knowledge for proper operation</li>
          <li>Systems need replacement every 10-20 years as technology advances</li>
          <li>More complex troubleshooting when problems occur</li>
        </ul>

        <h2>Efficiency Comparison</h2>
        <p>
          Water application efficiency varies significantly by method:
        </p>
        <ul>
          <li><strong>Flood/furrow irrigation:</strong> 40-60% efficiency (40-60% of water reaches crop roots)</li>
          <li><strong>Sprinkler systems:</strong> 65-85% efficiency</li>
          <li><strong>Drip irrigation:</strong> 85-95% efficiency</li>
        </ul>
        <p>
          However, efficiency isn't the only consideration. Capital costs, maintenance complexity, crop suitability, and labor availability all factor into the right choice for your operation.
        </p>

        <h2>The Stack 2 Connection</h2>
        <p>
          Irrigation is a major operational cost and a significant resource use category. Stack 2 thinking asks: where is water being wasted, and what's the cost?
        </p>
        <p>
          Key efficiency questions for your irrigation system:
        </p>
        <ul>
          <li>What's your actual water application efficiency versus theoretical?</li>
          <li>How much water (and money) is lost to evaporation, runoff, or deep percolation?</li>
          <li>Are you irrigating based on actual soil moisture or calendar schedules?</li>
          <li>What's the energy cost per acre-inch of water applied?</li>
          <li>Where are maintenance issues causing water waste?</li>
        </ul>
        <p>
          Measuring these factors reveals improvement opportunities. Sometimes simple fixes—repairing leaks, adjusting timing, adding soil moisture sensors—deliver significant savings without major capital investment.
        </p>
      </article>

      {/* Bottom CTA - Stack 2 */}
      <div className="mt-12 p-8 bg-[#5B4A9E] rounded-lg text-white">
        <h3 className="text-2xl font-bold mb-3">Ready to find your operational leaks?</h3>
        <p className="text-white/80 mb-4">
          Irrigation efficiency is part of Stack 2 in the Five Stacks Framework—identifying where water and energy waste costs you money.
        </p>
        <p className="text-white/80 mb-6">
          Stack 2 focuses on fixing leaks before adding new initiatives. Your water use data reveals patterns—where you over-irrigate, where timing is off, where equipment issues waste resources. These are often easy wins that improve both costs and environmental performance.
        </p>
        <Link href="/framework/stack-2-efficiency" className="inline-block bg-white text-[#5B4A9E] px-6 py-3 rounded font-semibold hover:bg-gray-100 transition-colors">
          Get Started with Stack 2 →
        </Link>
      </div>

      {/* Further Reading */}
      <div className="mt-12 pt-8 border-t border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Further Reading</h3>
        <div className="space-y-3">
          <Link href="/articles/irrigation-system-planning" className="block p-4 border border-gray-200 rounded-lg hover:border-[#5B4A9E] transition-colors">
            <span className="font-medium text-gray-900">Planning an Irrigation System →</span>
            <span className="block text-sm text-gray-600">8 essential questions to answer before installing irrigation</span>
          </Link>
          <Link href="/articles/agricultural-drainage" className="block p-4 border border-gray-200 rounded-lg hover:border-[#5B4A9E] transition-colors">
            <span className="font-medium text-gray-900">Agricultural Drainage →</span>
            <span className="block text-sm text-gray-600">How proper drainage supports irrigation efficiency and soil health</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
