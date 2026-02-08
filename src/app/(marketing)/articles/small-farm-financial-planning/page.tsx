import Link from "next/link";
import NewsletterSignup from "@/components/marketing/NewsletterSignup";

export const metadata = {
  title: "Small Farm Financial Planning: Cash Flow, Seasonality, and Investment",
  description: "A practical financial guide for agricultural SMEs covering cash flow management, cost structures, enterprise analysis, and where sustainability data overlaps with your bottom line.",
  keywords: ["small farms", "farm strategy", "direct marketing", "local food", "small", "farm", "financial", "planning", "agriculture", "sustainability"],
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
          Small Farm Financial Planning: Cash Flow, Seasonality, and Investment
        </h1>
        <p className="text-xl text-gray-600">
          Revenue arrives in lumps. Costs arrive every month. Managing that mismatch&mdash;not eliminating it&mdash;is the fundamental financial skill in farming.
        </p>
      </header>

      {/* Article Content */}
      <article className="prose prose-gray max-w-none">
        <h2>Farming Is a Cash Flow Business</h2>
        <p>
          Most businesses receive revenue in a relatively steady stream&mdash;monthly invoices, weekly sales, recurring subscriptions. Farming doesn&apos;t work that way. Revenue arrives in lumps: harvest payments, livestock sales at market, seasonal produce income, subsidy disbursements. These are concentrated into specific windows that vary by enterprise and region.
        </p>
        <p>
          Costs, on the other hand, are continuous. Land rent or mortgage payments are due monthly. Insurance premiums don&apos;t wait for harvest. Loan repayments, feed bills, fuel, electricity, permanent labor&mdash;these arrive on schedule regardless of whether anything has been sold yet.
        </p>
        <p>
          This timing mismatch is the fundamental financial challenge of farming. It isn&apos;t a problem to solve&mdash;it&apos;s a reality to manage. Every financial decision you make on a small farm should be evaluated through this lens: does it smooth cash flow or make it lumpier? Does it give you flexibility during lean months or lock you into fixed obligations?
        </p>
        <p>
          The farms that fail financially aren&apos;t always the ones with bad yields or poor products. Often, they&apos;re the ones that ran out of cash three weeks before the next payment came in.
        </p>

        <h2>Understanding Your Cost Structure</h2>
        <p>
          Before you can manage cash flow, you need to understand what your money actually goes toward. Farm costs split into two categories, and most small farms underestimate the first.
        </p>
        <p>
          <strong>Fixed costs</strong> don&apos;t change with production volume. Land payments, building maintenance, insurance, permanent labor, equipment depreciation, and basic utilities are due whether you produce anything or not. These are your baseline&mdash;the amount you spend before a single seed goes in the ground.
        </p>
        <p>
          <strong>Variable costs</strong> scale with production. Seed, fertilizer, fuel, casual labor, packaging, transport, and processing costs go up when you produce more and down when you produce less. These are the costs you can actually adjust in response to conditions.
        </p>
        <p>
          Here&apos;s where small farms consistently get it wrong: they underestimate fixed costs because they don&apos;t account for three things.
        </p>
        <ul>
          <li><strong>Family labor:</strong> If you or your family members work on the farm without drawing a wage, that&apos;s still a cost. It&apos;s just one you&apos;re absorbing personally. Any honest financial analysis needs to include a realistic value for unpaid labor.</li>
          <li><strong>Depreciation:</strong> Equipment, buildings, and infrastructure lose value over time and eventually need replacement. If you&apos;re not setting aside money for that replacement, you&apos;re slowly consuming your capital base.</li>
          <li><strong>Opportunity cost of land:</strong> If you own your land, what would it earn if rented out? That&apos;s the baseline return your farming operation needs to beat. If you can&apos;t match the rental value, you&apos;re effectively paying for the privilege of farming.</li>
        </ul>
        <p>
          Getting your cost structure right isn&apos;t about being pessimistic. It&apos;s about making decisions based on actual numbers rather than feelings. A farm that &ldquo;feels&rdquo; profitable but doesn&apos;t account for family labor and depreciation may be quietly losing money.
        </p>

        <h2>Cash Flow Management</h2>
        <p>
          Once you understand your costs, the next step is mapping them against your income on a monthly basis. This means building a 12-month cash flow forecast aligned to your farming calendar.
        </p>
        <p>
          <strong>When cash comes in:</strong>
        </p>
        <ul>
          <li>Harvest payments (autumn for arable, varies for horticulture)</li>
          <li>Milk checks (monthly for dairy, but often with seasonal price variation)</li>
          <li>Livestock sales (market days, contract deliveries, seasonal demand peaks)</li>
          <li>Subsidy and support payments (specific disbursement dates&mdash;know them)</li>
          <li>Direct sales revenue (farmers&apos; markets, box schemes, farm shop&mdash;often seasonal)</li>
        </ul>
        <p>
          <strong>When cash goes out:</strong>
        </p>
        <ul>
          <li>Spring inputs (seed, fertilizer, crop protection&mdash;often the biggest outflow of the year)</li>
          <li>Machinery servicing (pre-season maintenance, breakdowns during peak periods)</li>
          <li>Insurance renewals (often annual lump sums)</li>
          <li>Contractor bills (silage, harvesting, spreading&mdash;concentrated in specific weeks)</li>
          <li>Regular fixed costs (monthly, relentless, non-negotiable)</li>
        </ul>
        <p>
          Plot these on a month-by-month spreadsheet. You&apos;ll see the gaps immediately. Most farms have a predictable cash deficit in late winter and early spring&mdash;when input costs are highest and income from the previous season has been spent.
        </p>
        <p>
          <strong>The 3-month operating reserve:</strong> This is your target. Maintain enough liquid cash or accessible credit to cover three months of fixed costs plus any scheduled variable costs. This buffer absorbs the timing mismatch without forcing you into expensive short-term borrowing or desperate sales decisions.
        </p>
        <p>
          Building this reserve takes time. Start by directing a fixed percentage of every income event into a separate account. Treat it like a bill you pay to yourself.
        </p>
      </article>

      {/* Mid-article Newsletter CTA */}
      <div className="my-12">
        <NewsletterSignup />
      </div>

      {/* Continue article */}
      <article className="prose prose-gray max-w-none">
        <h2>The Enterprise Analysis</h2>
        <p>
          Most mixed farms operate multiple enterprises: arable, livestock, horticulture, direct sales, maybe agritourism or contracting on the side. The question most farmers avoid asking is: which of these actually make money?
        </p>
        <p>
          Many mixed operations cross-subsidize between enterprises without realizing it. The profitable dairy operation quietly funds the beef enterprise that hasn&apos;t turned a profit in years. The direct sales income masks the fact that the vegetable production itself runs at a loss.
        </p>
        <p>
          A simple gross margin analysis per enterprise reveals where profit actually comes from. For each enterprise, calculate: total revenue minus total variable costs equals gross margin. Then ask whether that gross margin is sufficient to justify the fixed costs and management time allocated to it.
        </p>
        <p>
          This analysis often produces uncomfortable results. Sometimes the enterprise you&apos;re most attached to&mdash;the one that defines your identity as a farmer&mdash;is the one losing money. That doesn&apos;t necessarily mean you should drop it. But you should know the true cost of keeping it, and make that decision consciously rather than by default.
        </p>
        <p>
          Review enterprise margins annually. Conditions change, markets shift, and what worked five years ago may not work now.
        </p>

        <h2>Investment Decisions</h2>
        <p>
          Small farms face investment decisions constantly: replace that aging tractor or keep repairing it? Buy a grain dryer or continue paying for contract drying? Rent additional land or intensify what you have?
        </p>
        <p>
          Three principles help frame these decisions:
        </p>
        <p>
          <strong>Repair vs. replace:</strong> A machine doesn&apos;t need replacing because it&apos;s old. It needs replacing when repair costs plus downtime costs exceed the annualized cost of a replacement. Track your repair bills by machine. When a single piece of equipment consistently accounts for a disproportionate share of your maintenance budget, the numbers will tell you when it&apos;s time.
        </p>
        <p>
          <strong>Own vs. contract:</strong> Owning equipment makes sense when utilization is high enough to justify the capital cost. If you use a combine for two weeks a year, you&apos;re paying 52 weeks of depreciation and storage for 2 weeks of work. Contracting or sharing with neighbors often makes more financial sense for equipment with low annual utilization.
        </p>
        <p>
          <strong>Buy vs. rent land:</strong> Buying land ties up capital that could be deployed elsewhere. Renting preserves flexibility. The decision depends on your cost of capital, the rental market in your area, and your planning horizon. Younger farmers with growth ambitions may value flexibility over ownership. Established operations may value the security and long-term appreciation.
        </p>
        <p>
          The small farm advantage in investment decisions is real: smaller investments mean faster payback periods and lower risk if things don&apos;t work out. The trap is buying equipment you could share or hire&mdash;the desire to own everything is expensive and often unnecessary.
        </p>

        <h2>Financial Planning Meets Sustainability</h2>
        <p>
          Here&apos;s what most sustainability guides won&apos;t tell you: your ESG data and your financial data overlap significantly. They&apos;re not separate reporting burdens&mdash;they&apos;re two views of the same underlying operations.
        </p>
        <p>
          <strong>Energy consumption</strong> is both a cost line item and a carbon emission. When you reduce diesel use or switch to more efficient machinery, your fuel bill drops and your Scope 1 emissions drop in lockstep. One data point, two reports.
        </p>
        <p>
          <strong>Fertilizer use</strong> is both an input cost and an environmental metric. Nitrogen application rates drive both your variable cost per hectare and your nitrous oxide emissions. Precision application that reduces waste saves money and improves your environmental footprint simultaneously.
        </p>
        <p>
          <strong>Water consumption</strong> is both a utility cost and a resource depletion indicator. Irrigation efficiency isn&apos;t just an environmental practice&mdash;it&apos;s a cost reduction strategy.
        </p>
        <p>
          <strong>Waste streams</strong> are both a disposal cost and a circular economy opportunity. What you pay to dispose of is something you could potentially be selling, composting, or feeding back into production.
        </p>
        <p>
          This is what Stack 2 of the Five Stacks Framework&mdash;Operational Efficiency&mdash;is fundamentally about. It isn&apos;t asking you to spend money on sustainability. It&apos;s asking you to notice that financial efficiency and environmental efficiency are often the same thing, and to capture both.
        </p>
        <p>
          If you&apos;re already tracking costs carefully, you&apos;re halfway to your sustainability data. If you&apos;re already working on sustainability metrics, you&apos;re generating financial intelligence. The trick is connecting the two rather than treating them as separate exercises.
        </p>

        <h2>Subsidies and Support</h2>
        <p>
          Agricultural support payments&mdash;whether CAP in Europe, ELMS in England, or state and federal programs elsewhere&mdash;are part of your financial picture. Ignoring them leaves money on the table. Depending on them builds a fragile business.
        </p>
        <p>
          <strong>Basic income support:</strong> Area-based or historical entitlements that provide baseline income. These are declining in most jurisdictions and likely to continue declining. Plan accordingly.
        </p>
        <p>
          <strong>Environmental stewardship payments:</strong> These are growing. Payments for biodiversity, soil health, water quality, and carbon sequestration reward practices that many well-managed farms already implement. If you&apos;re doing the work, get paid for it.
        </p>
        <p>
          <strong>Capital grants and investment support:</strong> Often available for efficiency improvements, renewable energy, and environmental infrastructure. These can significantly improve the ROI on investments you were already considering.
        </p>
        <p>
          The practical approach: don&apos;t build a business plan that depends on subsidies&mdash;policy changes too often and too unpredictably. But don&apos;t ignore free money either. Layer support payments on top of an operation that works without them, and treat them as an accelerator rather than a foundation.
        </p>
        <p>
          Keep records of everything you do. Many support schemes require evidence of practice, and the farms that document well are the farms that claim successfully. This documentation habit also feeds directly into ESG reporting&mdash;another place where good record-keeping pays twice.
        </p>
      </article>

      {/* Bottom CTA */}
      <div className="mt-12 p-8 bg-[#2D5A47] rounded-lg text-white">
        <h3 className="text-2xl font-bold mb-3">Financial efficiency is environmental efficiency</h3>
        <p className="text-white/80 mb-4">
          Your cost data and your sustainability data are two views of the same operations. Stack 2 of the Five Stacks Framework helps you capture both&mdash;reducing costs while building the environmental metrics that buyers and regulators increasingly require.
        </p>
        <p className="text-white/80 mb-6">
          Stop treating financial management and sustainability reporting as separate tasks. They&apos;re the same work, done once, used twice.
        </p>
        <Link href="/framework/stack-2-efficiency" className="inline-block bg-white text-[#2D5A47] px-6 py-3 rounded font-semibold hover:bg-gray-100 transition-colors">
          Explore Stack 2: Operational Efficiency &rarr;
        </Link>
      </div>

      {/* Further Reading */}
      <div className="mt-12 pt-8 border-t border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Further Reading</h3>
        <div className="space-y-3">
          <Link href="/articles/small-farm-competitive-strategy" className="block p-4 border border-gray-200 rounded-lg hover:border-[#2D5A47] transition-colors">
            <span className="font-medium text-gray-900">Small Farm Competitive Strategy &rarr;</span>
            <span className="block text-sm text-gray-600">Differentiation, specialization, and diversification for operations that can&apos;t compete on volume</span>
          </Link>
          <Link href="/articles/what-are-small-farms" className="block p-4 border border-gray-200 rounded-lg hover:border-[#2D5A47] transition-colors">
            <span className="font-medium text-gray-900">What Are Small Farms? &rarr;</span>
            <span className="block text-sm text-gray-600">Defining small farms and understanding their structural advantages and constraints</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
