import Link from "next/link";
import NewsletterSignup from "@/components/NewsletterSignup";

export const metadata = {
  title: "The Origins and History of Agribusiness: How the System Was Built",
  description: "Agribusiness wasn't inevitable—it was designed. Understanding how the system was built helps you see where opportunities exist today.",
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
          The Origins and History of Agribusiness: How the System Was Built
        </h1>
        <p className="text-xl text-gray-600">
          The agribusiness system wasn't inevitable—it was deliberately designed. Understanding how it was built helps you see where the opportunities and constraints exist today.
        </p>
      </header>

      {/* Article Content */}
      <article className="prose prose-gray max-w-none">
        <p>
          The word "agribusiness" was coined in 1957 by John H. Davis and Ray A. Goldberg in their book <em>A Concept of Agribusiness</em>. But more than a definition, they outlined a vision: the private sector, not government, should control agricultural development. Large corporations would revolutionize food and fiber production.
        </p>
        <p>
          Their vision was realized. Understanding how it happened reveals the system you're operating within today.
        </p>

        <h2>The Original Vision (1957)</h2>
        <p>
          Davis and Goldberg argued that flaws in the agricultural sector came from New Deal-era government intervention. Their solution: shift power to the private sector through the political economy.
        </p>
        <p>
          Critically, their vision wasn't focused on what happens <em>on the farm</em>. They emphasized what happens <em>off the farm</em>—external industries like finance, processing, and retail would drive agricultural change.
        </p>
        <p>
          <strong>Strategic insight:</strong> From the beginning, agribusiness was designed to capture value in processing and distribution, not production. The farm became one input among many, not the center of value creation.
        </p>

        <h2>Policy Shifts (1970s)</h2>
        <p>
          By the 1970s, government policy shifted toward their vision. Secretary of Agriculture Earl Butz championed policies favoring large-scale, industrialized production. His famous directive: "Get big or get out."
        </p>
        <p>
          These policies:
        </p>
        <ul>
          <li>Encouraged consolidation and scale</li>
          <li>Favored commodity production over diversification</li>
          <li>Created dependency on purchased inputs</li>
          <li>Directed research toward industrial methods</li>
        </ul>
        <p>
          <strong>Strategic insight:</strong> Policy was explicitly designed to favor large operations. Understanding this history explains why the playing field isn't level—it was never intended to be.
        </p>

        <h2>The Upgrade Trap</h2>
        <p>
          Shifting to industrialized production required farmers to upgrade: new machinery, modern seeds, chemical inputs. Agribusiness partnered with universities to develop these technologies and orient agricultural education toward "the business of farming."
        </p>
        <p>
          Farmers needed financing for these upgrades. To make payments and provide collateral, they needed more land. Consolidation became necessary, not optional.
        </p>
        <p>
          <strong>Strategic insight:</strong> The upgrade cycle creates ongoing dependency. Each technology purchase creates need for the next. Breaking this cycle requires deliberate strategy.
        </p>
      </article>

      {/* Mid-article Newsletter CTA */}
      <div className="my-12">
        <NewsletterSignup />
      </div>

      {/* Continue article */}
      <article className="prose prose-gray max-w-none">
        <h2>The Farm Crisis (1980s)</h2>
        <p>
          When the farm real estate bubble burst in the 1980s, almost half of all farmers went out of business. Those who had taken on debt to expand and upgrade were most vulnerable.
        </p>
        <p>
          Corporate agriculture entities filled the void. Since then, corporate agriculture has maintained dominance in production and market share.
        </p>
        <p>
          <strong>Strategic insight:</strong> The crisis wasn't random—it was a predictable result of debt-driven expansion meeting market correction. Operations that survive long-term manage debt conservatively and maintain flexibility.
        </p>

        <h2>The Modern Landscape</h2>
        <p>
          Davis and Goldberg's vision has largely been realized:
        </p>
        <ul>
          <li>A handful of corporations control over 75% of the agricultural input industry</li>
          <li>Consolidation continues: Monsanto-Bayer (2018), Dow-DuPont (2017), Syngenta-ChemChina (2018)</li>
          <li>Consumer brands (Coca-Cola, Nestle, Mars, General Mills) control significant market share with brand relationships unknown to most consumers</li>
        </ul>
        <p>
          Yet government intervention remains massive—contradicting the original anti-government argument:
        </p>
        <ul>
          <li>In 2018, 22% of USDA's $146 billion budget ($32 billion) went to commodity programs</li>
          <li>Lobbyists spent $133 million to influence fund distribution</li>
          <li>Large corporations receive grants, tax breaks, and subsidies despite billion-dollar profits</li>
        </ul>
        <p>
          <strong>Strategic insight:</strong> The system uses government resources while being controlled by private interests. Understanding who actually benefits from "agricultural policy" reveals where opportunities do—and don't—exist.
        </p>

        <h2>What This History Means for Your Operation</h2>
        <p>
          The agribusiness system was designed to:
        </p>
        <ul>
          <li>Capture value off-farm (processing, distribution, retail)</li>
          <li>Favor scale and consolidation</li>
          <li>Create input dependency</li>
          <li>Direct policy toward corporate interests</li>
        </ul>
        <p>
          Knowing this shapes strategy:
        </p>
        <ul>
          <li><strong>Don't expect the system to change for you</strong>—it's working as designed for its beneficiaries</li>
          <li><strong>Capture value yourself</strong> where possible (direct sales, processing, differentiation)</li>
          <li><strong>Reduce input dependency</strong> to break the upgrade cycle</li>
          <li><strong>Access alternative channels</strong> that value what the commodity system doesn't</li>
          <li><strong>Manage debt conservatively</strong>—the crisis pattern repeats</li>
        </ul>

        <h2>The Five Stacks Connection</h2>
        <p>
          The Five Stacks Framework is essentially a playbook for building value outside the mainstream agribusiness system:
        </p>
        <ul>
          <li><strong>Stack 1:</strong> Certifications that access channels the commodity system can't easily enter</li>
          <li><strong>Stack 2:</strong> Efficiency that reduces your exposure to the input dependency cycle</li>
          <li><strong>Stack 3:</strong> Circular value from streams the commodity system ignores</li>
          <li><strong>Stack 4:</strong> Practices that build capacity without ongoing input purchases</li>
          <li><strong>Stack 5:</strong> Story and positioning that commands premium pricing outside commodity markets</li>
        </ul>
        <p>
          Understanding agribusiness history helps you see why this approach works: you're building competitive advantage in spaces the system wasn't designed to occupy.
        </p>
      </article>

      {/* Bottom CTA */}
      <div className="mt-12 p-8 bg-[#1a1a2e] rounded-lg text-white">
        <h3 className="text-2xl font-bold mb-3">Ready to build outside the system?</h3>
        <p className="text-white/80 mb-4">
          Understanding how agribusiness was built reveals where the opportunities exist. The Five Stacks Framework helps you capture value in spaces the system wasn't designed to occupy.
        </p>
        <p className="text-white/80 mb-6">
          The framework provides systematic approaches to reducing dependency, accessing alternative markets, and building competitive advantage through sustainability.
        </p>
        <Link href="/framework" className="inline-block bg-[#4AA88C] text-white px-6 py-3 rounded font-semibold hover:bg-[#3d8f76] transition-colors">
          Explore the Five Stacks Framework →
        </Link>
      </div>

      {/* Further Reading */}
      <div className="mt-12 pt-8 border-t border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Further Reading</h3>
        <div className="space-y-3">
          <Link href="/articles/what-is-agribusiness" className="block p-4 border border-gray-200 rounded-lg hover:border-gray-400 transition-colors">
            <span className="font-medium text-gray-900">What Is Agribusiness? →</span>
            <span className="block text-sm text-gray-600">Understanding the system you operate in</span>
          </Link>
          <Link href="/articles/advantages-disadvantages-agribusiness" className="block p-4 border border-gray-200 rounded-lg hover:border-gray-400 transition-colors">
            <span className="font-medium text-gray-900">Advantages and Disadvantages of Agribusiness →</span>
            <span className="block text-sm text-gray-600">What it gives you vs. what it costs</span>
          </Link>
          <Link href="/articles/agriculture-vs-agribusiness" className="block p-4 border border-gray-200 rounded-lg hover:border-gray-400 transition-colors">
            <span className="font-medium text-gray-900">Agriculture vs. Agribusiness →</span>
            <span className="block text-sm text-gray-600">Where can you actually compete?</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
