import Link from "next/link";
import NewsletterSignup from "@/components/marketing/NewsletterSignup";

export const metadata = {
  title: "Value Chains: Understanding How Value Flows Through Your Operation",
  description: "Value chain analysis reveals where you add value and where you lose it. Learn how this framework helps identify operational efficiency opportunities.",
  keywords: ["circular economy", "resource efficiency", "waste reduction", "life cycle assessment", "value", "chains", "economic", "efficiency", "agriculture", "sustainability"],
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
          Value Chains: Understanding How Value Flows Through Your Operation
        </h1>
        <p className="text-xl text-gray-600">
          Value chain analysis reveals where you add value—and where you lose it. This framework helps identify the efficiency opportunities hiding in your operations.
        </p>
      </header>

      {/* Article Content */}
      <article className="prose prose-gray max-w-none">
        <p>
          First introduced in 1985 by Michael Porter, the value chain concept describes how value is added to raw materials through various production processes to generate a final product that can be sold for a higher price. For agricultural operations, understanding your value chain reveals where margin is created—and where it leaks away.
        </p>

        <h2>Two Ways to Think About Value Chains</h2>
        <p>
          Value chains can be interpreted at two scales:
        </p>
        <p>
          <strong>Internal value chain:</strong> The activities within your operation that produce output. This includes everything from acquiring inputs through production, processing, and delivery. These activities can be individual or cooperative—producers working together toward common goals. This is sometimes called vertical integration or functional upgrading.
        </p>
        <p>
          <strong>Extended value chain:</strong> The complex range of activities across multiple actors that bring raw materials to consumers. This broader view encompasses suppliers, processors, distributors, retailers, and everyone in between. These relationships depend on coordination, long-term partnerships, and optimization at each handoff.
        </p>
        <p>
          In either case, the aim is optimizing product flow throughout the production process—identifying bottlenecks, improving division of labor, reaching economies of scale, and meeting market standards.
        </p>

        <h2>Why Value Chain Analysis Matters for Efficiency</h2>
        <p>
          Value chain construction directly impacts competitiveness. But despite adding value at each step, costs are also incurred. This marks the need for effective planning and strategic analysis.
        </p>
        <p>
          For agricultural operations, value chain analysis helps answer:
        </p>
        <ul>
          <li>Where in my process do I actually create value?</li>
          <li>Where do I incur costs that don't translate to value?</li>
          <li>Which activities are core to my competitive position?</li>
          <li>Where are the bottlenecks limiting my throughput?</li>
          <li>What would change if I optimized a specific step?</li>
        </ul>
      </article>

      {/* Mid-article Newsletter CTA */}
      <div className="my-12">
        <NewsletterSignup />
      </div>

      {/* Continue article */}
      <article className="prose prose-gray max-w-none">
        <h2>Factors That Support Value Chain Development</h2>
        <p>
          Several factors contribute to successful value chain optimization:
        </p>
        <p>
          <strong>Producer organization:</strong> The presence and protection of producer groups can be fundamental—collective action often enables capabilities individual operations can't achieve alone.
        </p>
        <p>
          <strong>Policy and program support:</strong> Government and institutional programs can play important roles through:
        </p>
        <ul>
          <li>Providing or creating access to markets</li>
          <li>Supporting development of quality standards and labels</li>
          <li>Providing timely market information</li>
          <li>Stipulating local procurement preferences</li>
          <li>Technical training and financial assistance</li>
          <li>Licensing and regulatory frameworks</li>
        </ul>

        <h2>Strategic Requirements for Value Chain Optimization</h2>
        <p>
          Effective value chain development requires four strategic elements:
        </p>
        <ul>
          <li><strong>Market orientation:</strong> Understanding what buyers actually value and will pay for</li>
          <li><strong>Homogeneous target group:</strong> Clarity about who you're serving and what they need</li>
          <li><strong>Closeness/clusters:</strong> Geographic or relational proximity that enables coordination</li>
          <li><strong>Organization:</strong> Structures that enable collective action and optimization</li>
        </ul>

        <h2>Three Primary Strategies</h2>
        <p>
          Building on these elements, three primary strategies can improve your value chain position:
        </p>
        <p>
          <strong>Processing to create higher-value products:</strong> Transform raw output into products commanding higher prices—producing jam from fruit, flour from grain, or value-added products from commodity inputs.
        </p>
        <p>
          <strong>Focusing on niche markets:</strong> Target segments that value specific attributes you can provide—organic, local, heritage varieties, or specialty products.
        </p>
        <p>
          <strong>Intervening in other parts of the value chain:</strong> Focus on specific components where you can add value—direct sales, processing partnerships, or service integration.
        </p>
        <p>
          Regardless of strategy chosen, identifying and meeting consumer demands ensures long-term viability. This creates "market pull" rather than pushing products into unwilling channels.
        </p>

        <h2>The Stack 2 Connection</h2>
        <p>
          Value chain analysis is core to Stack 2—operational efficiency. Once you have baseline data (Stack 1), you can analyze where value is created and lost in your operation.
        </p>
        <p>
          This analysis reveals:
        </p>
        <ul>
          <li>Which activities consume resources without proportional value creation</li>
          <li>Where bottlenecks limit throughput</li>
          <li>Which steps could be optimized, outsourced, or eliminated</li>
          <li>Where investment would yield the greatest return</li>
        </ul>
        <p>
          Data from Stack 1 powers this analysis. Without measurement, value chain optimization is guesswork. With measurement, it becomes systematic improvement.
        </p>
      </article>

      {/* Bottom CTA - Stack 2 */}
      <div className="mt-12 p-8 bg-[#5B4A9E] rounded-lg text-white">
        <h3 className="text-2xl font-bold mb-3">Ready to find where your margin leaks?</h3>
        <p className="text-white/80 mb-4">
          Value chain analysis is part of Stack 2 in the Five Stacks Framework—turning baseline data into operational intelligence that reveals improvement opportunities.
        </p>
        <p className="text-white/80 mb-6">
          Stack 2 focuses on moving from passive data collection to informed operational changes. Your baseline data reveals patterns specific to your operation—where you waste resources, where margins leak, where processes are inefficient. This isn't reporting for compliance; it's operational intelligence about how your business actually works.
        </p>
        <Link href="/framework/stack-2-efficiency" className="inline-block bg-white text-[#5B4A9E] px-6 py-3 rounded font-semibold hover:bg-gray-100 transition-colors">
          Get Started with Stack 2 →
        </Link>
      </div>

      {/* Further Reading */}
      <div className="mt-12 pt-8 border-t border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Further Reading</h3>
        <div className="space-y-3">
          <Link href="/articles/sustainability-in-agribusiness" className="block p-4 border border-gray-200 rounded-lg hover:border-[#5B4A9E] transition-colors">
            <span className="font-medium text-gray-900">Sustainability in Agribusiness →</span>
            <span className="block text-sm text-gray-600">How smart practices drive long-term profitability through operational efficiency</span>
          </Link>
          <Link href="/framework/stack-1-metrics" className="block p-4 border border-gray-200 rounded-lg hover:border-[#3D2E7C] transition-colors">
            <span className="font-medium text-gray-900">Stack 1: Core Metrics →</span>
            <span className="block text-sm text-gray-600">Build the baseline data that powers value chain analysis</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
