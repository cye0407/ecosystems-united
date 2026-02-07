import Link from "next/link";
import NewsletterSignup from "@/components/marketing/NewsletterSignup";

export const metadata = {
  title: "Managing Market Price Volatility on the Farm | Ecosystems United",
  description: "Commodity prices swing. Input costs spike. How to build a marketing and risk management strategy that smooths revenue and protects margins.",
};

export default function ArticlePage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <nav className="mb-8">
        <Link
          href="/framework/stack-4-resilience"
          className="text-gray-600 hover:text-[#9A8CD0] transition-colors"
        >
          &larr; Back to Stack 4: Resilience
        </Link>
      </nav>

      <header className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-8 h-8 rounded-full bg-[#9A8CD0] text-white flex items-center justify-center font-bold text-sm">
            4
          </div>
          <span className="text-[#9A8CD0] font-semibold">Stack 4: Resilience</span>
        </div>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Managing Market Price Volatility on the Farm
        </h1>
        <p className="text-xl text-gray-600">
          Commodity prices swing. Input costs spike. How to build a marketing and risk management strategy that smooths revenue and protects margins.
        </p>
      </header>

      <article className="prose prose-gray max-w-none">
        <p className="text-lg">
          For farmers, price volatility isn&apos;t just a statistic &mdash; it&apos;s the difference between a profitable year and a devastating loss. Corn prices can swing 30% in a single season. Fertilizer costs can double overnight. Yet most farms still operate with minimal marketing strategy beyond &ldquo;sell it when we need cash.&rdquo;
        </p>

        <p>
          The farms that thrive through market cycles aren&apos;t the ones with the highest yields. They&apos;re the ones that understand how to smooth revenue volatility, protect their margins, and turn price risk into competitive advantage. This article breaks down the practical tools and strategies you need to build a resilient marketing plan.
        </p>

        <h2>Understanding Agricultural Price Cycles</h2>

        <p>
          Agricultural markets move in predictable patterns &mdash; and unpredictable shocks. The predictable part: seasonal cycles driven by planting, growing, and harvest. Prices typically peak before planting (when supply is tightest) and bottom at harvest (when supply floods the market). The unpredictable part: weather disasters, geopolitical events, currency swings, and demand shocks.
        </p>

        <p>
          The key insight is that you can&apos;t predict prices, but you can manage your exposure. Instead of trying to time the market perfectly, successful farmers build systems that capture acceptable margins across a range of price scenarios. They sell portions of their crop at different times, use different contract structures, and maintain flexibility to respond as conditions change.
        </p>

        <h2>Forward Contracts: Locking in Prices Before Harvest</h2>

        <p>
          A forward contract lets you lock in a price months before you deliver grain. If you sign a contract in March for December delivery at $5.50/bushel, you get $5.50 &mdash; whether the market is at $4.50 or $6.50 in December. This is the foundation of farm marketing: eliminating downside risk by accepting a known price.
        </p>

        <p>
          The strategy isn&apos;t to forward contract 100% of your crop. It&apos;s to forward contract enough to cover your cost of production plus a minimum profit margin. Many successful operations forward contract 30-50% of expected production at prices that guarantee breakeven or better. This creates a floor under your revenue while leaving upside potential if markets rally.
        </p>

        <p>
          Critical considerations: Production risk (don&apos;t contract more than your minimum expected yield), basis risk (local prices versus futures prices), and contract terms (delivery windows, quality specifications, cancellation penalties). Read every contract carefully and understand your obligations.
        </p>

        <h2>Pool Marketing Through Cooperatives</h2>

        <p>
          Many cooperatives offer pool marketing programs where you deliver grain into a pool and receive the average price received by the pool over a specified period. Instead of selling all your grain on one day, you&apos;re automatically spreading sales across weeks or months &mdash; smoothing out daily volatility.
        </p>

        <p>
          Pool marketing removes the psychological stress of timing decisions. You&apos;re not trying to pick the top; you&apos;re accepting the average. For many farmers, especially those without dedicated time for marketing analysis, pools deliver consistently better results than unplanned spot sales. Look for pools with transparent pricing, reasonable fees, and track records you can verify.
        </p>

        <h2>Storage as a Marketing Tool</h2>

        <p>
          On-farm grain storage isn&apos;t just about convenience &mdash; it&apos;s a marketing asset that gives you flexibility to sell when prices are favorable rather than when you need bin space. The economics of storage are straightforward: compare the cost of storage (interest on grain value, shrink, quality loss, facility costs) against the expected price appreciation.
        </p>

        <p>
          A common rule of thumb: storage makes economic sense if you can capture 2-3 cents per bushel per month of carry in the market. But the strategic value goes beyond simple carry math. Storage gives you options: the option to wait for basis improvement, the option to capture seasonal rallies, the option to avoid harvest-pressure prices. These options have real value even if you can&apos;t precisely quantify them.
        </p>

        <p>
          Modern grain marketing often combines storage with hedging strategies &mdash; storing physical grain while selling futures contracts to lock in favorable carry. This captures the profit from storage while eliminating price risk. It requires understanding futures markets and margin requirements, but for operations with significant storage capacity, it can add meaningful profit.
        </p>

        <h2>Diversified Marketing Windows</h2>

        <p>
          The worst marketing strategy is selling everything in a single transaction. The best strategy is systematic diversification across time. Set target percentages and price triggers: &ldquo;We&apos;ll sell 20% by June 1, another 20% by September 1, another 20% by December 1, with the remaining 40% flexible based on market conditions and cash needs.&rdquo;
        </p>

        <p>
          This approach forces discipline and removes emotion. You&apos;re not making panicked decisions when you need cash; you&apos;re executing a plan. You&apos;re not paralyzed trying to pick the perfect price; you&apos;re systematically capturing the range of available prices. Over time, diversified marketing windows consistently outperform reactive selling.
        </p>

        <h2>Input Cost Hedging</h2>

        <p>
          Price volatility cuts both ways. While output prices can drop, input prices can spike &mdash; creating a devastating margin squeeze. Fertilizer, fuel, and chemical costs can fluctuate 50% or more year to year. Managing input price risk is just as important as managing grain price risk.
        </p>

        <p>
          The primary tool is forward buying: purchasing inputs months before you need them when prices are favorable. Many suppliers offer early-order programs with discounts for commitment. The key is having the capital or credit to prepay, and the storage to handle early delivery. If fertilizer is $400/ton in August versus $600/ton in March, the $200 savings on 100 tons is $20,000 &mdash; real money that flows straight to your bottom line.
        </p>

        <p>
          Some operations use more sophisticated strategies like buying fertilizer futures or options, but for most farms, simple forward buying based on multi-year price comparisons delivers the majority of the benefit with minimal complexity.
        </p>
      </article>

      <div className="my-12">
        <NewsletterSignup />
      </div>

      <article className="prose prose-gray max-w-none">
        <h2>Contract Structures: Fixed Price, Minimum Price, Basis Contracts</h2>

        <p>
          Not all contracts are created equal. Understanding the menu of available contract structures lets you match risk management tools to your specific situation and market outlook.
        </p>

        <p>
          <strong>Fixed-price contracts</strong> are the simplest: you commit to deliver a specific quantity at a specific price. No upside, no downside. Use these when you want certainty and are comfortable with the offered price relative to your cost of production.
        </p>

        <p>
          <strong>Minimum-price contracts (or hedge-to-arrive contracts)</strong> guarantee a floor price but preserve upside potential if markets rally. You pay a premium (similar to buying insurance), but you&apos;re protected against price collapse while still able to benefit from price increases. These work well when you want protection but believe there&apos;s upside potential.
        </p>

        <p>
          <strong>Basis contracts</strong> lock in your local basis (the difference between local cash price and futures price) while leaving the futures price floating. This is useful when basis is favorable but you want to wait on the overall price direction. You can later lock the futures portion with a futures order, converting the basis contract into a fixed price when you&apos;re ready.
        </p>

        <p>
          The sophisticated marketing plan uses all three structures strategically: fixed-price contracts to establish your profit floor, minimum-price contracts to capture potential rallies while staying protected, and basis contracts to separate basis risk from price risk and manage each independently.
        </p>

        <h2>When to Sell: Avoiding Bottom-Third Selling</h2>

        <p>
          Most farmers don&apos;t need to sell at the top 10% of prices to be profitable. They just need to avoid selling in the bottom third. The difference between average execution and bottom-third execution can be 50 cents per bushel &mdash; on a 2,000-acre corn farm, that&apos;s over $150,000 in lost revenue.
        </p>

        <p>
          How do you avoid bottom-third selling? First, never sell grain you don&apos;t have to sell. Build cash reserves and operating credit so you&apos;re not forced to sell at harvest lows to meet immediate bills. Second, set minimum-acceptable prices based on cost of production, not market whims. If your floor is $4.80 and the market is offering $4.60, don&apos;t sell &mdash; store or hedge instead.
        </p>

        <p>
          Third, track five-year price ranges for your commodities. If current prices are in the bottom 20% of the five-year range, be extremely cautious about selling. If they&apos;re in the top 20%, be aggressive. This simple historical context prevents selling into obvious lows and encourages selling into obvious highs.
        </p>

        <h2>Cost of Production as Your Floor Price</h2>

        <p>
          You can&apos;t make intelligent marketing decisions without knowing your cost of production per bushel or per pound. This isn&apos;t your cash costs &mdash; it&apos;s your total economic cost including land, labor, equipment depreciation, and return on capital. If you don&apos;t know this number with precision, you&apos;re flying blind.
        </p>

        <p>
          Calculate cost of production annually, broken down by enterprise. Update it as input costs change. Use it as the foundation of your marketing plan: any price above cost of production plus target profit margin is a price worth considering. Any price below cost of production is a price you need to avoid unless you absolutely have to sell.
        </p>

        <p>
          This discipline prevents the common trap of selling based on emotions or arbitrary price targets. Your cost of production is your reality. The market doesn&apos;t care about your costs, but you should &mdash; because selling below cost except in extreme circumstances is a path to eventual failure.
        </p>

        <h2>Revenue Diversification: Don&apos;t Rely on One Commodity</h2>

        <p>
          While this article focuses on marketing strategies, the ultimate price risk management is revenue diversification. Farms that rely entirely on corn income face total exposure to corn price volatility. Farms with corn, soybeans, wheat, livestock, and custom work have natural hedges &mdash; when one market is down, others may be up.
        </p>

        <p>
          Diversification extends to marketing channels too. Selling exclusively to one buyer creates concentration risk and often leaves money on the table. Maintaining relationships with multiple grain buyers, exploring identity-preserved or specialty markets, and considering direct-to-consumer channels for portions of production all reduce dependency and increase resilience.
        </p>

        <h2>Practical Marketing Plan Template</h2>

        <p>
          Theory is useless without implementation. Here&apos;s a template for a farm marketing plan you can adapt to your operation:
        </p>

        <p><strong>1. Calculate Cost of Production</strong></p>
        <ul>
          <li>Total economic cost per unit for each enterprise</li>
          <li>Minimum acceptable sale price = cost + minimum profit margin</li>
        </ul>

        <p><strong>2. Set Production Estimates</strong></p>
        <ul>
          <li>Conservative estimate (bottom 20% of historical yields)</li>
          <li>Expected estimate (average yield)</li>
          <li>Optimistic estimate (top 20% of historical yields)</li>
        </ul>

        <p><strong>3. Establish Price Targets and Timeframes</strong></p>
        <ul>
          <li>Target 1: 20% of expected production sold by [date] at [price trigger]</li>
          <li>Target 2: 20% of expected production sold by [date] at [price trigger]</li>
          <li>Target 3: 20% of expected production sold by [date] at [price trigger]</li>
          <li>Remaining 40%: flexible based on market conditions</li>
        </ul>

        <p><strong>4. Select Contract Structures</strong></p>
        <ul>
          <li>Fixed-price contracts for floor protection (conservative estimate volume)</li>
          <li>Minimum-price contracts for upside potential (moderate portion)</li>
          <li>Basis contracts when basis is favorable (timing flexibility)</li>
        </ul>

        <p><strong>5. Monitor and Adjust</strong></p>
        <ul>
          <li>Weekly price checks against targets</li>
          <li>Monthly review of sold percentage versus plan</li>
          <li>Quarterly reassessment of production estimates and market conditions</li>
        </ul>

        <p><strong>6. Input Cost Management</strong></p>
        <ul>
          <li>Forward-buy fertilizer when prices are in bottom 30% of multi-year range</li>
          <li>Lock fuel and chemical prices when favorable</li>
          <li>Maintain 6-12 months of cash reserves to enable forward buying</li>
        </ul>

        <h2>Building Resilience Through Marketing Discipline</h2>

        <p>
          Market volatility isn&apos;t going away. If anything, climate instability, geopolitical tensions, and policy changes are making agricultural markets more volatile, not less. The farms that survive and thrive will be the ones that treat marketing as a core competency, not an afterthought.
        </p>

        <p>
          This doesn&apos;t require becoming a commodities trader. It requires discipline: knowing your costs, setting a plan, diversifying across time and contract structures, and executing consistently. It requires emotional control: not panicking at lows, not getting greedy at highs. It requires continuous learning: understanding the tools available and adapting as markets evolve.
        </p>

        <p>
          Price volatility is risk. But with the right strategies, it&apos;s manageable risk &mdash; and that management is what separates resilient farms from vulnerable ones.
        </p>
      </article>

      <div className="mt-12 p-8 bg-[#9A8CD0] rounded-lg text-white">
        <h3 className="text-2xl font-bold mb-4">
          Explore Stack 4: Resilience
        </h3>
        <p className="mb-6">
          Learn how to build financial buffers, manage risk, and create adaptive capacity that lets your farm weather shocks and volatility.
        </p>
        <Link
          href="/framework/stack-4-resilience"
          className="inline-block bg-white text-[#9A8CD0] px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
        >
          Discover Stack 4 &rarr;
        </Link>
      </div>

      <div className="mt-12 pt-8 border-t border-gray-200">
        <h3 className="text-xl font-bold text-gray-900 mb-4">Further Reading</h3>
        <div className="space-y-3">
          <Link
            href="/articles/financial-resilience-farm-operations"
            className="block text-[#9A8CD0] hover:underline"
          >
            Building Financial Resilience in Farm Operations &rarr;
          </Link>
          <Link
            href="/articles/crop-diversification-risk"
            className="block text-[#9A8CD0] hover:underline"
          >
            Crop Diversification as a Risk Management Strategy &rarr;
          </Link>
        </div>
      </div>
    </div>
  );
}
