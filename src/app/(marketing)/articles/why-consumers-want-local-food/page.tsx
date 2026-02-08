import Link from "next/link";
import NewsletterSignup from "@/components/marketing/NewsletterSignup";

export const metadata = {
  title: "Why Consumers Are Seeking Out Local Food (And What That Means for Your Farm)",
  description: "Consumer demand for local food is growing fast. Here's what's driving it, what buyers actually want, and how your farm can position itself to capture the premium.",
  keywords: ["small farms", "farm strategy", "direct marketing", "local food", "consumers", "want", "local", "food", "agriculture", "sustainability"],
};

export default function ArticlePage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      {/* Navigation */}
      <nav className="mb-8">
        <Link href="/articles" className="group flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-[#4AA88C] transition-colors">
          <span className="group-hover:-translate-x-1 transition-transform">&larr;</span> Back to Articles
        </Link>
      </nav>

      {/* Header */}
      <header className="mb-12">
        <div className="flex items-center gap-3 mb-6">
          <span className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">Small Farm Strategy</span>
        </div>
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Why Consumers Are Seeking Out Local Food (And What That Means for Your Farm)
        </h1>
        <p className="text-xl text-gray-600">
          The shift toward local food isn&apos;t a trend piece or a lifestyle fad. It&apos;s a structural change in how people buy food &mdash; and it&apos;s creating real opportunity for farms that know how to meet it.
        </p>
      </header>

      {/* Article Content */}
      <article className="prose prose-gray max-w-none">
        <h2>The Shift Is Real</h2>
        <p>
          Consumer spending on local and direct food channels has been climbing steadily for over a decade. Farmers markets, CSA subscriptions, farm shops, box schemes, and direct-to-consumer delivery &mdash; all trending upward. In the UK and across Europe, the number of operational farmers markets has more than doubled since the early 2000s. CSA membership continues to grow year on year.
        </p>
        <p>
          This isn&apos;t a passing enthusiasm driven by a documentary or a celebrity chef. It&apos;s backed by repeat purchasing behaviour. People who start buying local food tend to keep buying local food. Retention rates for CSA schemes and regular farmers market shoppers are consistently strong. The customers are sticky.
        </p>
        <p>
          If you&apos;re running a small or mid-sized farm, this matters. It means the demand side of the equation is working in your favour &mdash; if you understand what&apos;s driving it and how to respond.
        </p>

        <h2>What&apos;s Driving It</h2>
        <p>
          There&apos;s no single reason consumers are shifting toward local food. It&apos;s a cluster of motivations, and different buyers weight them differently. But the same themes come up consistently:
        </p>
        <ul>
          <li><strong>Food safety and traceability:</strong> People want to know where their food comes from. Not in the abstract &mdash; they want to know the farm, the field, the producer. Industrial supply chains feel opaque. A bag of carrots from a named farm 12 miles away feels knowable.</li>
          <li><strong>Quality and freshness:</strong> Produce picked that morning tastes different from produce picked five days ago on another continent. Consumers notice. Once someone has eaten a tomato harvested hours before, supermarket tomatoes feel like a compromise.</li>
          <li><strong>Environmental concern:</strong> Food miles, plastic packaging, energy-intensive cold chains &mdash; these bother a growing segment of buyers. Local food sidesteps most of these issues in ways that are obvious and visible.</li>
          <li><strong>Animal welfare:</strong> For meat, dairy, and eggs, local buying often comes with the ability to see the animals and how they&apos;re kept. That visibility builds confidence in ways that a label on a supermarket package cannot.</li>
          <li><strong>Supporting local economies:</strong> Many consumers actively want their money to stay in their community. Buying from a local farm feels like a direct economic contribution in a way that buying from a multinational does not.</li>
          <li><strong>Distrust of industrial food systems:</strong> Every food scandal &mdash; contamination, mislabelling, undisclosed additives &mdash; pushes more people toward shorter, simpler supply chains. Local food benefits every time the industrial system fails to earn trust.</li>
        </ul>
        <p>
          None of these motivations are irrational. They&apos;re practical concerns held by practical people who are willing to spend money to address them. That&apos;s your market.
        </p>

        <h2>What Consumers Actually Want</h2>
        <p>
          Understanding the motivation is one thing. Understanding the expectation is another. Here&apos;s what local food buyers are actually looking for:
        </p>
        <ul>
          <li><strong>Transparency, not marketing:</strong> They want honest information about how food is produced. They don&apos;t want polished branding &mdash; they want straight answers. &ldquo;We spray twice a season for blight&rdquo; earns more trust than &ldquo;nature&apos;s finest harvest.&rdquo;</li>
          <li><strong>Consistency, not perfection:</strong> They&apos;ll accept a wonky carrot. What they won&apos;t accept is showing up to the market and finding you didn&apos;t bring what you said you&apos;d bring. Reliability matters more than aesthetics.</li>
          <li><strong>Relationship:</strong> They want to know the farmer. A face, a name, a conversation. This is the single biggest advantage you have over any supermarket.</li>
          <li><strong>Story:</strong> How is it produced? Why do you do it this way? What makes your farm different? They want context for what they&apos;re buying &mdash; and they&apos;ll pay for it.</li>
          <li><strong>Convenience:</strong> This is the one that trips up a lot of direct sellers. Consumers want local food, but they also want it to be easy to buy. Awkward collection times, unreliable availability, and complicated ordering systems lose customers fast.</li>
        </ul>
        <p>
          Equally important &mdash; what they don&apos;t want: guilt trips about their other shopping habits, lectures on sustainability, or being made to feel like buying local is a moral obligation. People buy food because it&apos;s good, it&apos;s trustworthy, and it fits into their life. Keep it practical.
        </p>
      </article>

      {/* Mid-article Newsletter CTA */}
      <div className="my-12">
        <NewsletterSignup />
      </div>

      {/* Continue article */}
      <article className="prose prose-gray max-w-none">
        <h2>How to Position Your Farm</h2>
        <p>
          Here&apos;s the connection most farm operators miss: the sustainability practices you&apos;re already implementing are your marketing. You don&apos;t need to invent a brand story. You need to tell the one you&apos;re already living.
        </p>
        <p>
          If you&apos;re tracking your environmental data through something like the Five Stacks Framework &mdash; soil health metrics, input usage, energy consumption, biodiversity indicators &mdash; that data becomes your story. It&apos;s not abstract. It&apos;s specific, verifiable, and exactly what discerning buyers want to see.
        </p>
        <ul>
          <li><strong>Your traceability is your transparency.</strong> If a customer asks where this lamb was raised and what it ate, you can answer. A supermarket can&apos;t.</li>
          <li><strong>Your ESG data is your credibility.</strong> Stack 1 data &mdash; emissions, water use, soil carbon &mdash; isn&apos;t just for compliance reporting. It&apos;s proof that you operate the way you say you do.</li>
          <li><strong>Your face and your fields are your brand.</strong> Consumers don&apos;t connect with logos. They connect with people and places. Let them see both.</li>
        </ul>
        <p>
          This doesn&apos;t mean you need a professional photographer or a social media strategy. It means showing up at the market, answering questions honestly, and being consistently present in the channels where your customers buy.
        </p>

        <h2>The Premium Opportunity</h2>
        <p>
          Local food commands premiums of 10&ndash;30% over commodity equivalents in most markets. For some products &mdash; heritage breeds, rare varieties, value-added goods &mdash; the premium can be significantly higher.
        </p>
        <p>
          But here&apos;s what matters: the premium doesn&apos;t come from slapping a &ldquo;local&rdquo; label on your product. It comes from trust and relationship. A customer who knows you, who has visited your farm, who has bought from you for three seasons &mdash; that customer will pay more because the value proposition is clear to them.
        </p>
        <p>
          How to earn and maintain the premium:
        </p>
        <ul>
          <li><strong>Be consistent.</strong> Show up every week. Have stock. Deliver on time. Reliability is the foundation of premium pricing.</li>
          <li><strong>Be honest.</strong> If the harvest was poor this week, say so. If you had a crop failure, explain what happened. Honesty deepens trust; spin destroys it.</li>
          <li><strong>Be visible.</strong> Invite people to the farm. Post about what you&apos;re doing. Share the realities of production &mdash; good seasons and bad ones.</li>
          <li><strong>Document your practices.</strong> The difference between &ldquo;we&apos;re sustainable&rdquo; and &ldquo;here&apos;s our soil carbon data from the last three years&rdquo; is the difference between a claim and proof. Proof commands premiums.</li>
        </ul>

        <h2>The Limits</h2>
        <p>
          Honesty requires acknowledging where this strategy doesn&apos;t fit. Not every farm can or should pivot to direct-to-consumer local food sales.
        </p>
        <ul>
          <li><strong>Some products don&apos;t suit it.</strong> Commodity grain, oilseed, and bulk feed operations won&apos;t find a direct consumer market for most of their output. The product doesn&apos;t lend itself to farmers market sales.</li>
          <li><strong>Volume operations may be better served elsewhere.</strong> If your competitive advantage is efficiency at scale, direct marketing may actually reduce your margins by adding labour and logistics costs that your operation isn&apos;t designed for.</li>
          <li><strong>Geography matters.</strong> A farm 90 minutes from the nearest population centre faces very different economics than one on the edge of a city. Delivery costs and market access are real constraints.</li>
          <li><strong>It&apos;s labour-intensive.</strong> Direct sales require customer service, logistics, market attendance, and relationship management. If you&apos;re already stretched thin on production, adding a direct marketing operation can break what&apos;s working.</li>
        </ul>
        <p>
          The right approach is honest assessment. If direct local sales fit your product, your location, your labour capacity, and your temperament &mdash; the opportunity is real and growing. If they don&apos;t, there are other channels and other strategies that may serve you better. The worst move is chasing a trend that doesn&apos;t match your operation.
        </p>
      </article>

      {/* Bottom CTA */}
      <div className="mt-12 p-8 bg-[#2D5A47] rounded-lg text-white">
        <h3 className="text-2xl font-bold mb-3">Build the strategy behind the opportunity</h3>
        <p className="text-white/80 mb-4">
          Consumer demand for local food is a market reality. But capturing it requires more than good produce &mdash; it requires positioning, data, and a clear competitive strategy.
        </p>
        <p className="text-white/80 mb-6">
          Learn how differentiation, specialization, and diversification help small farms turn local demand into sustainable revenue.
        </p>
        <Link href="/articles/small-farm-competitive-strategy" className="inline-block bg-white text-[#2D5A47] px-6 py-3 rounded font-semibold hover:bg-gray-100 transition-colors">
          Read: Small Farm Competitive Strategy &rarr;
        </Link>
      </div>

      {/* Further Reading */}
      <div className="mt-12 pt-8 border-t border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Further Reading</h3>
        <div className="space-y-3">
          <Link href="/articles/small-farm-market-channels" className="block p-4 border border-gray-200 rounded-lg hover:border-[#2D5A47] transition-colors">
            <span className="font-medium text-gray-900">Small Farm Market Channels &rarr;</span>
            <span className="block text-sm text-gray-600">Choosing the right sales channels for your operation and your product</span>
          </Link>
          <Link href="/articles/direct-marketing-small-farms" className="block p-4 border border-gray-200 rounded-lg hover:border-[#2D5A47] transition-colors">
            <span className="font-medium text-gray-900">Direct Marketing for Small Farms &rarr;</span>
            <span className="block text-sm text-gray-600">7 keys to building customer relationships that bypass commodity pricing</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
