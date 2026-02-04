import Link from "next/link";
import NewsletterSignup from "@/components/NewsletterSignup";

export const metadata = {
  title: "What Are Small Farms? The Business Case for Staying Small",
  description: "Small farms produce vast amounts of food globally despite structural disadvantages. Here's why staying small can be a strategic advantage, not a limitation.",
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
          What Are Small Farms? The Business Case for Staying Small
        </h1>
        <p className="text-xl text-gray-600">
          Small farms produce vast amounts of the world's food despite structural disadvantages. Understanding why—and what they do differently—reveals strategic advantages that scale can't replicate.
        </p>
      </header>

      {/* Article Content */}
      <article className="prose prose-gray max-w-none">
        <p>
          In the United States, 91% of farms are classified as "small" (earning $1,000-$250,000 annually). Yet operations with over $250,000 in sales produce 85% of agricultural output. Small farms are numerous but capture a small share of total production value.
        </p>
        <p>
          This might look like failure. But it's actually a story about different games being played—and the strategic advantages available to operations that understand them.
        </p>

        <h2>Defining "Small" Varies Wildly</h2>
        <p>
          There's no universal definition of a small farm:
        </p>
        <ul>
          <li><strong>United States:</strong> $1,000-$250,000 in annual sales</li>
          <li><strong>Canada:</strong> Farms that don't sell commodities at market-determined prices</li>
          <li><strong>FAO:</strong> Complex interrelationships between animals, crops, and farming families with limited land, labor, and capital</li>
          <li><strong>European Union:</strong> No concrete definition</li>
        </ul>
        <p>
          The Canadian definition is strategically interesting: it defines "small" by market position, not size. A small farm is one that doesn't compete in commodity markets with set prices—which suggests the competitive advantage lies elsewhere.
        </p>

        <h2>What Small Farms Do Differently</h2>
        <p>
          Small farms that thrive aren't just smaller versions of large operations. They compete on different terms:
        </p>
        <p>
          <strong>Intensity over area:</strong> Clay Bottom Farm in Indiana produces 30 varieties of vegetables to feed 200 families on one acre. That's not inefficiency—it's a different model entirely.
        </p>
        <p>
          <strong>Relationships over transactions:</strong> Direct sales, CSAs, and farmers markets create customer loyalty that commodity markets can't match. When customers know who grows their food, price becomes less decisive.
        </p>
        <p>
          <strong>Diversity over specialization:</strong> Multiple crops and enterprises reduce risk and create year-round revenue streams. One crop fails, others compensate.
        </p>
        <p>
          <strong>Quality over volume:</strong> Attention to detail possible at small scale commands premium pricing. Heritage varieties, specialty products, and superior freshness justify higher prices.
        </p>
      </article>

      {/* Mid-article Newsletter CTA */}
      <div className="my-12">
        <NewsletterSignup />
      </div>

      {/* Continue article */}
      <article className="prose prose-gray max-w-none">
        <h2>The Structural Challenges</h2>
        <p>
          Small farms face real disadvantages within the agribusiness system:
        </p>
        <p>
          <strong>Policy disadvantage:</strong> Government policies were explicitly designed to favor large-scale operations. Subsidies, regulations, and research priorities serve consolidated agriculture. As Joel Salatin documented, many things small farms want to do are literally illegal under rules written for industrial scale.
        </p>
        <p>
          <strong>Capital constraints:</strong> Limited access to affordable financing restricts investment in equipment and infrastructure. Large operations can spread fixed costs across more acres.
        </p>
        <p>
          <strong>Market access barriers:</strong> Grocery stores and distributors want volume, consistency, and low prices—requirements that favor scale.
        </p>
        <p>
          <strong>Knowledge gaps:</strong> Agricultural education increasingly focuses on "the business of farming" oriented toward industrial methods, not diversified small-scale production.
        </p>

        <h2>The Strategic Opportunity</h2>
        <p>
          The same system features that create challenges also create opportunities:
        </p>
        <p>
          <strong>Alternative channels exist:</strong> Farmers markets, CSAs, farm-to-table restaurants, and institutional buyers (schools, hospitals) actively seek what small farms offer. These channels pay premiums for quality, locality, and relationships.
        </p>
        <p>
          <strong>Consumer preferences are shifting:</strong> Transparency, sustainability, and local sourcing matter more to consumers than ever. Small farms can credibly deliver what commodity systems can't.
        </p>
        <p>
          <strong>Technology is democratizing:</strong> Affordable tools (mobile apps, small-scale equipment, online marketplaces) reduce the infrastructure advantage large operations once held.
        </p>
        <p>
          <strong>Sustainability creates differentiation:</strong> Practices that improve soil health, reduce inputs, and document environmental stewardship create stories and certifications that command premium pricing.
        </p>

        <h2>The Five Stacks Connection</h2>
        <p>
          The Five Stacks Framework is essentially a playbook for small farm competitive strategy:
        </p>
        <ul>
          <li><strong>Stack 1 (Certification):</strong> Access premium channels where scale isn't the barrier to entry</li>
          <li><strong>Stack 2 (Efficiency):</strong> Build margin through cost reduction when you can't compete on volume</li>
          <li><strong>Stack 3 (Circular Value):</strong> Capture value from streams the commodity system ignores</li>
          <li><strong>Stack 4 (Practices):</strong> Build productive capacity without ongoing input dependency</li>
          <li><strong>Stack 5 (Story):</strong> Create differentiation through documented sustainability that large operations can't credibly claim</li>
        </ul>
        <p>
          Understanding what small farms are—and what they can be—reveals why sustainability practices often create competitive advantage at smaller scale.
        </p>
      </article>

      {/* Bottom CTA */}
      <div className="mt-12 p-8 bg-[#1a1a2e] rounded-lg text-white">
        <h3 className="text-2xl font-bold mb-3">Ready to build your competitive strategy?</h3>
        <p className="text-white/80 mb-4">
          Small farms compete on different terms than large operations. The Five Stacks Framework helps you build advantages in spaces where scale isn't what wins.
        </p>
        <p className="text-white/80 mb-6">
          The framework provides systematic approaches to differentiation, efficiency, and market positioning designed for operations that can't—and shouldn't try to—compete on volume.
        </p>
        <Link href="/framework" className="inline-block bg-[#4AA88C] text-white px-6 py-3 rounded font-semibold hover:bg-[#3d8f76] transition-colors">
          Explore the Five Stacks Framework →
        </Link>
      </div>

      {/* Further Reading */}
      <div className="mt-12 pt-8 border-t border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Further Reading</h3>
        <div className="space-y-3">
          <Link href="/articles/small-farm-competitive-strategy" className="block p-4 border border-gray-200 rounded-lg hover:border-gray-400 transition-colors">
            <span className="font-medium text-gray-900">Small Farm Competitive Strategy →</span>
            <span className="block text-sm text-gray-600">Differentiation, specialization, and diversification approaches</span>
          </Link>
          <Link href="/articles/direct-marketing-small-farms" className="block p-4 border border-gray-200 rounded-lg hover:border-gray-400 transition-colors">
            <span className="font-medium text-gray-900">Direct Marketing for Small Farms →</span>
            <span className="block text-sm text-gray-600">Building customer relationships that bypass the commodity system</span>
          </Link>
          <Link href="/articles/small-vs-large-agribusiness" className="block p-4 border border-gray-200 rounded-lg hover:border-gray-400 transition-colors">
            <span className="font-medium text-gray-900">Small vs. Large Agribusiness →</span>
            <span className="block text-sm text-gray-600">Understanding where each can compete and win</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
