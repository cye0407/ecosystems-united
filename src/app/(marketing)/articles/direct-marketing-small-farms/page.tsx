import Link from "next/link";
import NewsletterSignup from "@/components/marketing/NewsletterSignup";

export const metadata = {
  title: "Direct Marketing for Small Farms: 7 Keys to Building Customer Relationships",
  description: "Direct marketing lets small farms bypass commodity pricing and build relationships that command premium prices. Here are the 7 keys to making it work.",
  keywords: ["small farms", "farm strategy", "direct marketing", "local food", "direct", "marketing", "small", "farms", "agriculture", "sustainability"],
};

export default function ArticlePage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      {/* Navigation */}
      <nav className="mb-8">
        <Link href="/articles/small-farm-guide" className="group flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-[#4AA88C] transition-colors">
          <span className="group-hover:-translate-x-1 transition-transform">←</span> The Complete Small Farm Strategy Guide
        </Link>
      </nav>

      {/* Header */}
      <header className="mb-12">
        <div className="flex items-center gap-3 mb-6">
          <span className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">Foundational</span>
        </div>
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Direct Marketing for Small Farms: 7 Keys to Building Customer Relationships
        </h1>
        <p className="text-xl text-gray-600">
          Commodity selling is impersonal and price-driven. Direct marketing creates trust, loyalty, and premium prices. Here's how to make it work.
        </p>
      </header>

      {/* Article Content */}
      <article className="prose prose-gray max-w-none">
        <p>
          Commodity selling operates on market-determined prices with standardized, large-scale, impersonal transactions. Direct marketing is fundamentally different: 1:1 relationships between producer and buyer that create alternative forms of value.
        </p>
        <p>
          This matters strategically because direct marketing enables small farms to compete on terms where they have advantages—trust, quality, relationships, story—rather than on volume and price where they don't.
        </p>

        <h2>What Consumers Actually Want</h2>
        <p>
          Direct marketing succeeds by meeting consumer preferences that commodity systems don't address:
        </p>
        <ul>
          <li><strong>Authenticity:</strong> Interest in simpler things, knowing where food comes from</li>
          <li><strong>Community:</strong> Desire to support local businesses and producers</li>
          <li><strong>Family:</strong> Activities the whole household can enjoy together</li>
          <li><strong>Security:</strong> Confidence that food is safe and produced responsibly</li>
          <li><strong>Convenience:</strong> Food that tastes good and is readily available</li>
          <li><strong>Balance:</strong> Connection between food, lifestyle, and values</li>
        </ul>
        <p>
          These aren't just nice-to-haves—they're purchasing drivers. Customers pay premium prices for products that deliver on these values. Large-scale commodity systems can't credibly claim most of them.
        </p>

        <h2>The 7 Keys to Direct Marketing Success</h2>

        <h3>1. Involve All Players</h3>
        <p>
          Build a strong, diverse network to leverage different skills and talents. Direct marketing requires production, customer service, logistics, and communication—rarely does one person excel at all of them. Family members, employees, partners, and collaborators each contribute different strengths.
        </p>

        <h3>2. Start Small</h3>
        <p>
          Smaller operations are easier to manage and can adapt more easily to challenges and opportunities. Test channels, products, and approaches before scaling. Learn what works in your specific market before committing significant resources.
        </p>

        <h3>3. Grow Naturally</h3>
        <p>
          Once a plan has proven successful, expand at a sustainable rate. Rushing growth often breaks what made the operation work—quality suffers, relationships thin out, costs overrun revenue. Let demand pull growth rather than pushing supply.
        </p>
              <h3>4. Keep Good Records</h3>
        <p>
          Quality information enables evaluation of progress and determines whether goals are being met. Track not just financials, but also:
        </p>
        <ul>
          <li>Which products sell best at which channels</li>
          <li>Customer preferences and feedback</li>
          <li>On-farm productivity by crop/enterprise</li>
          <li>Time and labor costs by activity</li>
        </ul>
        <p>
          What gets measured gets managed. What doesn't get measured gets assumed—usually wrongly.
        </p>

        <h3>5. Make Decisions Based on Recorded Success</h3>
        <p>
          Let data inform decisions rather than assumptions or traditions. If the records show that farmers market A generates twice the revenue per hour as market B, that information should drive resource allocation. If heritage tomatoes outsell standard varieties 3:1, plant more heritage varieties.
        </p>

        <h3>6. Find and Develop Your Niche Market</h3>
        <p>
          Think like a consumer to determine what products and services they actually want. Then:
        </p>
        <ul>
          <li>Interact continuously with customers to understand evolving preferences</li>
          <li>Offer incentives (tastings, samples, first access) to build and maintain loyalty</li>
          <li>Differentiate based on what your specific operation does uniquely well</li>
          <li>Don't try to be everything to everyone—own a specific position</li>
        </ul>

        <h3>7. Develop a Toolset for Information</h3>
        <p>
          Being prepared helps develop new customers and maintain loyalty with existing ones. Essential tools include:
        </p>
        <ul>
          <li>Business cards and signage</li>
          <li>Price lists and product information sheets</li>
          <li>Recipes and preparation tips</li>
          <li>Website and social media presence</li>
          <li>Email list for announcements and offers</li>
        </ul>
        <p>
          Information reduces friction. Customers who know what you offer, what it costs, and how to use it are more likely to buy.
        </p>

        <h2>Direct Marketing Channels</h2>
        <p>
          Options for small farm direct marketing include:
        </p>
        <ul>
          <li><strong>Farmers markets:</strong> High visibility, direct customer interaction, immediate feedback</li>
          <li><strong>CSA (Community Supported Agriculture):</strong> Upfront payment, committed customers, shared risk</li>
          <li><strong>Farm stands and on-farm sales:</strong> Low overhead, showcase the operation</li>
          <li><strong>Restaurants and chefs:</strong> Premium prices for quality, consistent demand</li>
          <li><strong>Institutional buyers:</strong> Schools, hospitals, corporate cafeterias seeking local sourcing</li>
          <li><strong>Online and delivery:</strong> Expanded reach, convenience for customers</li>
        </ul>
        <p>
          Different channels serve different purposes. Farmers markets build awareness; CSAs create predictable income; restaurant sales command premium prices. Most successful direct marketers use multiple channels strategically.
        </p>

        <h2>What makes direct marketing hold together</h2>
        <p>
          Direct marketing success rests on the same capabilities that strengthen the rest of your operation:
        </p>
        <ul>
          <li><strong>Certification:</strong> Creates credibility claims for direct marketing channels</li>
          <li><strong>Efficiency:</strong> Improvements support profitability even with direct marketing labor costs</li>
          <li><strong>Circular value:</strong> Creates additional products for direct channels</li>
          <li><strong>Sustainable practices:</strong> Become part of the story customers value</li>
          <li><strong>Story and positioning:</strong> Exactly what direct marketing communicates</li>
        </ul>
        <p>
          The framework supports the differentiation, relationships, and documentation that make direct marketing work.
        </p>
      </article>

      {/* Newsletter (D-021 mid-2) */}
      <div className="mt-12">
        <NewsletterSignup />
      </div>


      {/* Further Reading */}
      <div className="mt-12 pt-8 border-t border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Further Reading</h3>
        <div className="space-y-3">
          <Link href="/articles/small-farm-competitive-strategy" className="block p-4 border border-gray-200 rounded-lg hover:border-gray-400 transition-colors">
            <span className="font-medium text-gray-900">Small Farm Competitive Strategy →</span>
            <span className="block text-sm text-gray-600">Differentiation, specialization, and diversification</span>
          </Link>
          <Link href="/articles/what-are-small-farms" className="block p-4 border border-gray-200 rounded-lg hover:border-gray-400 transition-colors">
            <span className="font-medium text-gray-900">What Are Small Farms? →</span>
            <span className="block text-sm text-gray-600">The business case for staying small</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
