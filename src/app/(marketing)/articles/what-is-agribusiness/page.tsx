import Link from "next/link";
import NewsletterSignup from "@/components/marketing/NewsletterSignup";

export const metadata = {
  title: "What Is Agribusiness? Understanding the System You Operate In",
  description: "Agribusiness is the network that captures value from farm production. Understanding how it works helps you position your operation to capture more value yourself.",
};

export default function ArticlePage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      {/* Navigation */}
      <nav className="mb-8">
        <Link href="/articles" className="group flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-[#4AA88C] transition-colors">
          <span className="group-hover:-translate-x-1 transition-transform">←</span> Back to Articles
        </Link>
      </nav>

      {/* Header */}
      <header className="mb-12">
        <div className="flex items-center gap-3 mb-6">
          <span className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">Foundational</span>
        </div>
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          What Is Agribusiness? Understanding the System You Operate In
        </h1>
        <p className="text-xl text-gray-600">
          Agribusiness is the network that captures value between farm gate and consumer. Understanding how it works helps you position your operation strategically.
        </p>
      </header>

      {/* Article Content */}
      <article className="prose prose-gray max-w-none">
        <p>
          Whether you run 50 acres or 5,000, you're operating inside the agribusiness system. Understanding how that system works—where value gets captured, who the players are, what drives their decisions—helps you position your operation to capture more value yourself.
        </p>
        <p>
          This isn't about judging agribusiness as good or bad. It's about understanding the landscape you're navigating.
        </p>

        <h2>The Original Definition</h2>
        <p>
          Davis and Goldberg (1957) defined agribusiness as "the sum total of all operations involved in the manufacture and distribution of farm supplies; production operations on the farm; and the storage, processing, and distribution of farm commodities and items made from them."
        </p>
        <p>
          In plain terms: <strong>agribusiness encompasses everything that enables production and moves products from farm to end user</strong>. It's the network of activities beyond "just farming" that brings food and fiber to markets.
        </p>

        <h2>The Three Main Value-Capture Zones</h2>
        <p>
          The stakeholders who profit from agribusiness generally fall into three categories. Understanding where value accumulates helps you identify opportunities:
        </p>

        <h3>1. Service Providers</h3>
        <p>
          <strong>What they do:</strong> Consultation, brokering, sales, plus activities that directly facilitate farming—spraying, irrigation installation, equipment rental, slaughtering, distribution, retail.
        </p>
        <p>
          <strong>How they capture value:</strong> They sit between actors, facilitating transactions and taking margin on each one. They don't produce the end product, but they're essential connectors.
        </p>
        <p>
          <strong>Strategic implication:</strong> Every service you outsource is margin you're giving up. Some outsourcing makes sense (specialization, capital efficiency). Some doesn't. Evaluate each relationship.
        </p>

        <h3>2. Research & Development</h3>
        <p>
          <strong>What they do:</strong> Expand knowledge, create new products, overcome production barriers. Both private companies and public institutions (land-grant universities) operate here.
        </p>
        <p>
          <strong>How they capture value:</strong> Private R&D creates proprietary products they sell at premium. Public R&D shares knowledge but often serves industrial-scale interests.
        </p>
        <p>
          <strong>Strategic implication:</strong> Private R&D produces products designed to create ongoing dependency. Public R&D is free but may not address your specific situation. Extension services remain underutilized by many operations.
        </p>

        <h3>3. Finance</h3>
        <p>
          <strong>What they do:</strong> Provide capital for expansion and operations—primarily banks, but also cooperatives and increasingly, corporate supply chain financing.
        </p>
        <p>
          <strong>How they capture value:</strong> Interest, fees, and influence over business practices. Financing comes with expectations that can drive operations toward certain decisions.
        </p>
        <p>
          <strong>Strategic implication:</strong> Outside capital brings outside pressure. The terms of financing shape what's possible. Understanding this relationship is essential for strategic planning.
        </p>
      </article>

      {/* Mid-article Newsletter CTA */}
      <div className="my-12">
        <NewsletterSignup />
      </div>

      {/* Continue article */}
      <article className="prose prose-gray max-w-none">
        <h2>How Agribusiness Evolved</h2>
        <p>
          The current system emerged through several waves:
        </p>
        <ul>
          <li><strong>Industrialization:</strong> Mechanization replaced manual labor, increasing scale requirements</li>
          <li><strong>Green Revolution:</strong> High-yield varieties, synthetic inputs, and irrigation boosted production but increased input dependency</li>
          <li><strong>Globalization:</strong> International markets created opportunities but also competition from operations with different cost structures</li>
          <li><strong>Consolidation:</strong> Fewer, larger players at each step of the value chain</li>
        </ul>
        <p>
          Each wave increased efficiency at scale while making it harder for smaller operations to compete on the same terms. The system is optimized for volume, not margin per unit.
        </p>

        <h2>The Governance Factor</h2>
        <p>
          How agribusiness operates depends heavily on governance—regulations, subsidies, and industry standards. Currently:
        </p>
        <ul>
          <li>Subsidies disproportionately benefit large-scale operations</li>
          <li>Regulations often favor established players who shaped them</li>
          <li>Industry standards are set by those with market power</li>
        </ul>
        <p>
          This isn't a conspiracy—it's how systems work. Larger players have more resources to influence policy. Understanding this helps you work within constraints rather than being surprised by them.
        </p>

        <h2>Where This Leaves Farm Operations</h2>
        <p>
          Very few farms are completely self-sustaining. You're engaging with the agribusiness network whether you're buying inputs, selling products, or accessing capital. The question isn't whether to participate—it's how to participate strategically.
        </p>
        <p>
          <strong>Options for capturing more value:</strong>
        </p>
        <ul>
          <li><strong>Vertical integration:</strong> Do more steps yourself (processing, direct sales) to capture margin currently going to intermediaries</li>
          <li><strong>Differentiation:</strong> Create products the commodity system can't easily replicate—quality, story, certification</li>
          <li><strong>Cost structure optimization:</strong> Reduce dependency on expensive inputs through soil health, efficiency improvements</li>
          <li><strong>Alternative channels:</strong> Direct markets, CSAs, institutional buyers who value what you offer</li>
        </ul>

        <h2>The Five Stacks Connection</h2>
        <p>
          The Five Stacks Framework is essentially a playbook for capturing more value within the agribusiness system:
        </p>
        <ul>
          <li><strong>Stack 1 (Certification):</strong> Access premium channels the commodity system can't easily enter</li>
          <li><strong>Stack 2 (Efficiency):</strong> Reduce your cost exposure to input price volatility</li>
          <li><strong>Stack 3 (Circular Value):</strong> Capture value from waste streams instead of paying for disposal</li>
          <li><strong>Stack 4 (Practices):</strong> Build productive capacity that reduces ongoing input dependency</li>
          <li><strong>Stack 5 (Story):</strong> Differentiate through documented sustainability that commands premium pricing</li>
        </ul>
        <p>
          Understanding agribusiness helps you see where the framework fits: it's about positioning strategically within the system, not fighting it.
        </p>
      </article>

      {/* Bottom CTA */}
      <div className="mt-12 p-8 bg-[#1a1a2e] rounded-lg text-white">
        <h3 className="text-2xl font-bold mb-3">Ready to position your operation strategically?</h3>
        <p className="text-white/80 mb-4">
          Understanding agribusiness is the first step. The Five Stacks Framework helps you capture more value within the system.
        </p>
        <p className="text-white/80 mb-6">
          The framework provides a systematic approach to building competitive advantage through sustainability—reducing input dependency, accessing premium markets, and creating differentiation the commodity system can't replicate.
        </p>
        <Link href="/framework" className="inline-block bg-[#4AA88C] text-white px-6 py-3 rounded font-semibold hover:bg-[#3d8f76] transition-colors">
          Explore the Five Stacks Framework →
        </Link>
      </div>

      {/* Further Reading */}
      <div className="mt-12 pt-8 border-t border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Further Reading</h3>
        <div className="space-y-3">
          <Link href="/articles/advantages-disadvantages-agribusiness" className="block p-4 border border-gray-200 rounded-lg hover:border-gray-400 transition-colors">
            <span className="font-medium text-gray-900">Advantages and Disadvantages of Agribusiness →</span>
            <span className="block text-sm text-gray-600">What the system gives you vs. what it costs</span>
          </Link>
          <Link href="/articles/agriculture-vs-agribusiness" className="block p-4 border border-gray-200 rounded-lg hover:border-gray-400 transition-colors">
            <span className="font-medium text-gray-900">Agriculture vs. Agribusiness →</span>
            <span className="block text-sm text-gray-600">Understanding the distinction and where you fit</span>
          </Link>
          <Link href="/articles/sustainability-in-agribusiness" className="block p-4 border border-gray-200 rounded-lg hover:border-gray-400 transition-colors">
            <span className="font-medium text-gray-900">Sustainability in Agribusiness →</span>
            <span className="block text-sm text-gray-600">How sustainability practices create competitive advantage</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
