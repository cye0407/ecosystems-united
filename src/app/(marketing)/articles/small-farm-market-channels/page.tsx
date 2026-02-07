import Link from "next/link";
import NewsletterSignup from "@/components/marketing/NewsletterSignup";

export const metadata = {
  title: "5 Market Channels for Small Farms Beyond the Farmgate",
  description: "CSA, food hubs, farmers markets, restaurant partnerships, and online box schemes. A practical guide to diversifying market channels for small farm resilience.",
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
          5 Market Channels for Small Farms Beyond the Farmgate
        </h1>
        <p className="text-xl text-gray-600">
          Selling everything at the farmgate or through a single wholesaler is a fragile strategy. Here are five market channels that give small farms better margins, stronger customer relationships, and real resilience.
        </p>
      </header>

      {/* Article Content */}
      <article className="prose prose-gray max-w-none">
        <p>
          Most small farms start with one sales channel&mdash;a local market, a wholesaler, maybe a roadside stand. That&apos;s fine for getting started, but it&apos;s a vulnerability. If that single channel dries up&mdash;your wholesaler drops you, the market closes, a new competitor undercuts your price&mdash;you&apos;re scrambling.
        </p>
        <p>
          Diversified market channels aren&apos;t just a nice idea. They&apos;re a survival strategy. Each channel you add reduces your dependence on any single buyer, smooths out seasonal revenue gaps, and gives you more control over pricing. The goal isn&apos;t to be everywhere at once. It&apos;s to build two or three channels that work together and protect you when one has a bad month.
        </p>
        <p>
          Here are five channels worth considering&mdash;with honest assessments of what each actually takes.
        </p>

        <h2>1. Community Supported Agriculture (CSA)</h2>
        <p>
          CSA is a subscription model. Customers buy a &ldquo;share&rdquo; of your harvest at the start of the season, paying upfront. In return, they receive a weekly box of whatever you&apos;re producing. The concept is simple: customers share the risk and reward of farming with you.
        </p>
        <p>
          <strong>How to price a share:</strong> Calculate your total production costs for the season&mdash;seeds, labor, inputs, packing materials, delivery. Add the margin you need to be profitable. Divide by the number of shares you can realistically fill. Most small farms charge somewhere between &euro;15 and &euro;30 per weekly share depending on what&apos;s included, the region, and the length of the season. Be transparent about what members can expect during lean weeks versus peak harvest.
        </p>
        <p>
          <strong>Logistics matter more than you think:</strong> Packing 30 or 50 boxes every week is real labour. You need a system&mdash;a packing shed, a consistent schedule, and clear distribution points. Many CSAs use central pickup locations (community centres, workplaces, car parks) to avoid the cost of home delivery. Some farms share distribution with other CSA operations to split costs.
        </p>
        <p>
          <strong>Retention is the hard part:</strong> Getting members in year one is exciting. Keeping them in year three is the real challenge. The farms that retain well communicate constantly&mdash;weekly newsletters, recipe ideas, honest updates when crops fail. They treat members as partners, not just customers.
        </p>
        <p>
          <strong>Be honest about the downsides:</strong> CSA requires significant upfront planning. You need that capital at the start of the season before you&apos;ve grown anything. Weather risk is shared with your members, which sounds good until a bad season means you&apos;re delivering thin boxes and fielding disappointed emails. And the marketing effort to fill shares every year is not trivial&mdash;expect to spend real time on outreach, open days, and social media.
        </p>

        <h2>2. Food Hubs and Aggregation Points</h2>
        <p>
          A food hub is a facility that aggregates products from multiple small farms, then handles the marketing, distribution, and logistics of selling to larger institutional buyers&mdash;schools, hospitals, corporate cafeterias, restaurants.
        </p>
        <p>
          <strong>Why this matters for small farms:</strong> Institutional buyers want local produce, but they can&apos;t manage relationships with 20 individual farms. They need one invoice, one delivery, consistent supply. Food hubs solve this by acting as the intermediary. You produce; they sell.
        </p>
        <p>
          <strong>How to find one:</strong> Check with your regional agricultural extension service, farming associations, or local food networks. In the EU, many LEADER-funded rural development groups have established or supported food hub projects. Some cooperatives function as informal food hubs even if they don&apos;t use the term.
        </p>
        <p>
          <strong>What to expect:</strong> You&apos;ll typically receive less per unit than selling direct to consumers, but your marketing burden drops dramatically. No stall to staff, no boxes to pack for individual customers, no social media to maintain. You deliver in bulk and someone else handles the rest. For farms with strong production capacity but limited time or appetite for direct marketing, this is often the right fit.
        </p>
        <p>
          <strong>The trade-off:</strong> You lose the direct customer relationship. You also lose some control over pricing. But if your bottleneck is marketing rather than production, food hubs remove the constraint that&apos;s actually holding you back.
        </p>
      </article>

      {/* Mid-article Newsletter CTA */}
      <div className="my-12">
        <NewsletterSignup />
      </div>

      {/* Continue article */}
      <article className="prose prose-gray max-w-none">
        <h2>3. Farmers Markets and Farm Shops</h2>
        <p>
          Farmers markets remain the most common direct sales channel for small farms, and for good reason. They put you face-to-face with your customers. You get immediate feedback, you build regulars, and you capture the full retail margin.
        </p>
        <p>
          <strong>What success actually requires:</strong> Showing up consistently is non-negotiable. The farms that do well at markets are the ones that are there every week, rain or shine, with a well-presented stall and enough stock. Inconsistency kills market businesses faster than anything else. If customers can&apos;t rely on you being there, they stop looking for you.
        </p>
        <p>
          <strong>Presentation matters:</strong> Clean, attractive displays sell more. Labels, signage, and clear pricing reduce friction. Samples and tastings convert browsers into buyers. None of this is complicated, but it takes time and attention that many production-focused farmers underestimate.
        </p>
        <p>
          <strong>The economics:</strong> You&apos;ll earn higher margins per unit than almost any other channel. But factor in the true cost&mdash;travel time, stall fees, setup and teardown, the staff hours standing behind the table, and the product that doesn&apos;t sell. When you calculate revenue per hour rather than revenue per kilo, markets are good but not always as profitable as they first appear.
        </p>
        <p>
          <strong>Farm shops</strong> work on similar principles but eliminate the travel. If your farm is accessible and gets passing traffic, an on-farm shop or honesty box can generate steady sales with minimal additional labour. The investment is in setup&mdash;a clean space, proper signage, possibly a small chiller&mdash;rather than weekly time commitment.
        </p>

        <h2>4. Restaurant and Chef Partnerships</h2>
        <p>
          Restaurants increasingly want local sourcing. It&apos;s good for their brand, their menus, and often their margins. For small farms, direct supply relationships with chefs can mean premium prices and consistent demand for specific products.
        </p>
        <p>
          <strong>How to approach chefs:</strong> Don&apos;t cold-call during service. Visit during prep hours, bring samples, and be specific about what you can supply and when. Chefs want to know three things: what you grow, when it&apos;s available, and whether you&apos;re reliable. Lead with those answers.
        </p>
        <p>
          <strong>What chefs need from you:</strong> Reliability is everything. A chef who puts your courgettes on the menu needs those courgettes delivered on Tuesday morning, every Tuesday, in the quantity promised. If you can&apos;t deliver, communicate early&mdash;a text on Sunday saying &ldquo;short on courgettes this week, have extra beans instead&rdquo; is infinitely better than a no-show on delivery day.
        </p>
        <p>
          <strong>Pricing:</strong> Restaurant supply typically commands premium prices&mdash;often 20&ndash;40% above wholesale&mdash;because you&apos;re delivering freshness, provenance, and flexibility that distributors can&apos;t match. But be realistic about volumes. A single restaurant might take 5&ndash;10 kg of salad leaves per week, not 500 kg.
        </p>
        <p>
          <strong>The demanding side:</strong> Chefs work to tight schedules and have strong opinions. Orders might change last-minute. Payment terms can stretch. And if quality drops once, you may not get a second chance. This channel rewards farms that are organised, communicative, and genuinely committed to consistency.
        </p>

        <h2>5. Online and Box Scheme Sales</h2>
        <p>
          The shift to online food purchasing accelerated dramatically during COVID and hasn&apos;t reversed. Farm box schemes&mdash;where customers order a weekly or fortnightly box of seasonal produce for home delivery&mdash;have become a mainstream channel.
        </p>
        <p>
          <strong>How it works:</strong> Customers order through your website or a third-party platform. You pack boxes according to what&apos;s available that week, and either deliver yourself or use a courier. Some farms run pure subscription models (automatic weekly delivery), while others let customers order on demand.
        </p>
        <p>
          <strong>Technology requirements:</strong> You need a functional ordering system. This can range from a simple website with an order form and payment processing to a full e-commerce platform with subscription management. Tools like Shopify, WooCommerce, or dedicated farm-box platforms (Open Food Network, for example) handle the technical side. The key is making ordering easy and reliable for the customer.
        </p>
        <p>
          <strong>Delivery logistics:</strong> This is where most farms struggle. Delivery is expensive and time-consuming. A round trip delivering 20 boxes across a 30-kilometre radius eats into margin fast. Successful box schemes either cluster deliveries geographically, use central collection points, or charge realistic delivery fees. Some partner with local delivery services or other farms to share routes.
        </p>
        <p>
          <strong>Subscription management:</strong> The recurring revenue from subscriptions is attractive, but managing pauses, cancellations, dietary preferences, and complaints requires systems. Even a small operation with 40 subscribers needs a clear process for handling changes, or it becomes an administrative headache that consumes your evenings.
        </p>

        <h2>Choosing the Right Channels for Your Farm</h2>
        <p>
          Not every channel suits every farm. The right mix depends on what you produce, where you are, and what you&apos;re good at:
        </p>
        <ul>
          <li><strong>High-diversity vegetable farms</strong> are natural fits for CSA and box schemes where variety is the product.</li>
          <li><strong>Farms with a few strong specialty products</strong> (herbs, salad, mushrooms) often do best with restaurant partnerships and farmers markets.</li>
          <li><strong>Larger small farms</strong> with volume but limited marketing capacity benefit most from food hubs and aggregation.</li>
          <li><strong>Farms with good road access</strong> and passing traffic should consider on-farm shops before investing in distant market stalls.</li>
        </ul>
        <p>
          <strong>Start with one and expand deliberately.</strong> Pick the channel that best matches your current capacity. Get good at it. Build the systems. Then add a second channel once the first is running smoothly. The biggest mistake small farms make is launching three channels simultaneously, doing all of them poorly, and burning out by August.
        </p>
        <p>
          <strong>Don&apos;t over-commit.</strong> Every channel you add requires time, logistics, and attention. A CSA with 30 members, a Tuesday market, and two restaurant accounts is a full plate. Adding a box scheme on top of that isn&apos;t ambitious&mdash;it&apos;s reckless unless you have the team and systems to support it.
        </p>

        <h2>The Five Stacks Connection</h2>
        <p>
          Diversified market channels connect directly to Stack 4 (Resilience) in the Five Stacks Framework. A farm that relies on a single buyer or a single market is structurally fragile. Adding channels doesn&apos;t just increase revenue&mdash;it reduces the impact of any single disruption.
        </p>
        <p>
          But the connection runs deeper than that:
        </p>
        <ul>
          <li><strong>Stack 1 (Certification):</strong> Organic, biodynamic, or regional quality certifications open doors to channels that require them&mdash;many food hubs and restaurant buyers specifically seek certified producers.</li>
          <li><strong>Stack 2 (Efficiency):</strong> Streamlined packing, delivery routes, and order management make multi-channel selling viable rather than chaotic.</li>
          <li><strong>Stack 3 (Circular Value):</strong> Waste from one channel becomes product for another&mdash;imperfect produce goes to box schemes, trimmings go to restaurants, surplus goes to food hubs.</li>
          <li><strong>Stack 5 (Story):</strong> Each channel reinforces your brand. CSA members become your advocates. Market regulars spread the word. Chefs name you on their menus. The story compounds across channels.</li>
        </ul>
        <p>
          Market channel diversification isn&apos;t just a sales tactic. It&apos;s a structural decision that determines how resilient your farm business actually is. Build channels deliberately, run them well, and you create a business that can absorb shocks instead of being destroyed by them.
        </p>
      </article>

      {/* Bottom CTA */}
      <div className="mt-12 p-8 bg-[#2D5A47] rounded-lg text-white">
        <h3 className="text-2xl font-bold mb-3">Ready to diversify your market channels?</h3>
        <p className="text-white/80 mb-4">
          Building multiple market channels is one of the most effective ways to strengthen your farm business. The Five Stacks Framework helps you develop the certifications, systems, and positioning that make each channel work.
        </p>
        <p className="text-white/80 mb-6">
          Learn how competitive strategy connects production decisions to market positioning&mdash;so every channel you add reinforces the others.
        </p>
        <Link href="/articles/small-farm-competitive-strategy" className="inline-block bg-[#4AA88C] text-white px-6 py-3 rounded font-semibold hover:bg-[#3d8f76] transition-colors">
          Read Small Farm Competitive Strategy &rarr;
        </Link>
      </div>

      {/* Further Reading */}
      <div className="mt-12 pt-8 border-t border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Further Reading</h3>
        <div className="space-y-3">
          <Link href="/articles/direct-marketing-small-farms" className="block p-4 border border-gray-200 rounded-lg hover:border-[#2D5A47] transition-colors">
            <span className="font-medium text-gray-900">Direct Marketing for Small Farms &rarr;</span>
            <span className="block text-sm text-gray-600">7 keys to building customer relationships that command premium prices</span>
          </Link>
          <Link href="/articles/small-farm-competitive-strategy" className="block p-4 border border-gray-200 rounded-lg hover:border-[#2D5A47] transition-colors">
            <span className="font-medium text-gray-900">Small Farm Competitive Strategy &rarr;</span>
            <span className="block text-sm text-gray-600">Differentiation, specialization, and diversification for operations that can&apos;t compete on volume</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
