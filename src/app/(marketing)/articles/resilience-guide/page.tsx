import Link from "next/link";
import NewsletterSignup from "@/components/marketing/NewsletterSignup";

export const metadata = {
  title: "The Complete Guide to Farm Resilience & Risk Management",
  description: "How farms build adaptive capacity against climate, market, and supply chain risks.",
  keywords: ["farm resilience", "risk management", "climate adaptation", "crop diversification", "supply chain resilience", "financial resilience", "farm succession", "market volatility", "agriculture"],
};

export default function ResilienceGuidePage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      {/* Navigation */}
      <nav className="mb-8">
        <Link href="/framework/stack-4-resilience" className="group flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-[#9A8CD0] transition-colors">
          <span className="group-hover:-translate-x-1 transition-transform">&larr;</span> Back to Stack 4: Resilience
        </Link>
      </nav>

      {/* Header */}
      <header className="mb-12">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-8 h-8 rounded-full bg-[#9A8CD0] text-white flex items-center justify-center font-bold text-sm">
            4
          </div>
          <span className="text-sm text-gray-500">Stack 4: Resilience</span>
        </div>
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          The Complete Guide to Farm Resilience &amp; Risk Management
        </h1>
        <p className="text-xl text-gray-600">
          Building adaptive capacity against climate, market, and supply chain risks.
        </p>
      </header>

      {/* Article Content */}
      <article className="prose prose-gray max-w-none">
        <p>
          Resilience is not a buzzword. It is the measurable capacity of a farm operation to absorb shocks, adapt to changing conditions, and continue functioning when things go wrong. Drought, price crashes, pest outbreaks, supply chain disruptions, regulatory shifts &mdash; the question is never whether these will happen. The question is whether your operation is structured to survive them.
        </p>
        <p>
          Most farm risk management advice focuses on a single dimension: buy insurance, diversify crops, or save more cash. Real resilience requires working across all of those dimensions simultaneously. This guide covers the full landscape &mdash; climate, biological, financial, market, and operational risks &mdash; and connects them to practical strategies you can implement without a consultancy budget.
        </p>

        <h2>Understanding Your Climate Risk Exposure</h2>
        <p>
          Climate risk is no longer a thirty-year projection. It is showing up in current growing seasons as shifting rainfall patterns, compressed planting windows, and heat events that exceed historical norms. The first step in building resilience is understanding your specific exposure.
        </p>
        <p>
          A structured <Link href="/articles/climate-risk-assessment-farms">climate risk assessment</Link> identifies which climate hazards are most likely to affect your location and operations. This is not about global temperature targets. It is about understanding whether your soil type, elevation, water source, and crop mix are positioned to handle the conditions your region is actually trending toward. Farms that complete this assessment often discover that their highest risk is not the one they assumed &mdash; a livestock operation worried about heat stress may find that water availability is the binding constraint.
        </p>
        <p>
          The assessment also establishes a baseline for adaptation planning. You cannot measure whether your resilience is improving if you have not documented where you started. Climate risk data feeds directly into insurance decisions, crop selection, and infrastructure investment &mdash; which means it pays for itself in better decisions long before any regulatory body asks for it.
        </p>

        <h2>Diversification as Structural Risk Reduction</h2>
        <p>
          Monoculture is efficient in stable conditions and catastrophic in unstable ones. When a single crop fails, a monoculture operation loses everything. When one crop in a diversified rotation fails, the operation absorbs the hit and continues.
        </p>
        <p>
          <Link href="/articles/crop-diversification-risk">Crop diversification as a risk management strategy</Link> goes beyond simply growing more things. Effective diversification considers correlation &mdash; choosing crops that respond differently to the same stresses. Planting three crops that all fail in drought is not diversification. Planting a drought-tolerant grain alongside an irrigated vegetable crop alongside a perennial that can survive a missed season &mdash; that is structural risk reduction.
        </p>
        <p>
          Diversification also applies to market channels. An operation selling exclusively to one processor is not diversified regardless of how many crops it grows. True resilience means diversifying across biological, temporal, and market dimensions simultaneously.
        </p>

        <h2>Insurance and Financial Protection</h2>
        <p>
          Insurance is the most obvious risk management tool, and also the most commonly misunderstood. Too many operations are either underinsured against their actual exposure or paying for coverage that does not match their risk profile.
        </p>
        <p>
          <Link href="/articles/farm-insurance-climate-adaptation">Farm insurance in the context of climate adaptation</Link> is evolving rapidly. Parametric insurance products that pay out based on weather triggers rather than assessed losses are becoming available for agricultural operations. Index-based products tied to rainfall or temperature thresholds can provide faster payouts than traditional loss adjustment. But these products require understanding your climate data &mdash; which circles back to the risk assessment.
        </p>
        <p>
          The strategic question is not just what to insure but how insurance fits into a broader financial resilience plan. Insurance covers catastrophic events. It does not cover chronic margin erosion from gradually shifting conditions. For that, you need operational adaptation.
        </p>

        <h2>Supply Chain Vulnerabilities</h2>
        <p>
          The pandemic and subsequent logistics disruptions exposed what many agricultural operations already suspected: supply chains that appear robust in normal conditions can become fragile very quickly. Fertiliser price spikes, equipment part shortages, and buyer insolvency all fall under supply chain risk.
        </p>
        <p>
          Building <Link href="/articles/supply-chain-resilience-agriculture">supply chain resilience in agriculture</Link> starts with mapping your dependencies. Where do your critical inputs come from? How many alternative suppliers exist? What is your lead time for essential materials, and what happens if that lead time doubles? Most operations have never formally documented these dependencies, which means they discover vulnerabilities only when a disruption is already underway.
        </p>
        <p>
          Practical supply chain resilience includes maintaining buffer stocks of critical inputs, building relationships with alternative suppliers before you need them, and reducing dependency on single-source inputs where possible. It also means understanding your buyers&rsquo; resilience &mdash; because a buyer who goes insolvent is a supply chain failure for you, even if your own operation is running perfectly.
        </p>

        <h2>Financial Resilience and Cash Flow Management</h2>
        <p>
          Farm financial resilience is not just about profitability in good years. It is about survivability in bad ones. The operations that fail are rarely the ones with the worst agronomy. They are the ones that run out of cash at the wrong moment.
        </p>
        <p>
          <Link href="/articles/financial-resilience-farm-operations">Financial resilience for farm operations</Link> requires understanding your fixed versus variable cost structure, your breakeven point at different price levels, and your cash flow timing. Many agricultural operations are profitable on an annual basis but have seasonal cash flow gaps that create vulnerability. A delayed harvest payment combined with an input purchase deadline can create a liquidity crisis even in a profitable year.
        </p>
        <p>
          Building financial resilience means maintaining adequate reserves, managing debt terms to match agricultural cash flow cycles, and stress-testing your finances against realistic adverse scenarios. What happens to your cash position if yields drop twenty percent? If your primary buyer delays payment by sixty days? If input costs increase by thirty percent? If you cannot answer those questions with numbers, your financial resilience is based on hope rather than infrastructure.
        </p>
      </article>

      {/* Mid-article Newsletter */}
      <div className="my-12">
        <NewsletterSignup />
      </div>

      {/* Continue article */}
      <article className="prose prose-gray max-w-none">
        <h2>Biological Threats in a Changing Climate</h2>
        <p>
          Climate change is not just about temperature and rainfall. It is rewriting the map of pest and disease pressure. Species that were previously limited by winter temperatures are expanding their range. Growing seasons are shifting, which changes the timing of pest life cycles relative to crop vulnerability windows.
        </p>
        <p>
          Understanding <Link href="/articles/pest-disease-climate-change">pest and disease dynamics under climate change</Link> is essential for any operation that relies on historical experience for crop protection decisions. The pest complex your father managed is not the pest complex you will face. Integrated pest management strategies need to account for novel species, altered timing, and the potential for multiple stress events compounding &mdash; drought-stressed crops are more vulnerable to pest damage, which creates cascading failures.
        </p>
        <p>
          Monitoring and early detection systems become more valuable as uncertainty increases. Operations that rely on reactive pest management &mdash; waiting until damage is visible before responding &mdash; will face increasing losses compared to those with systematic scouting and threshold-based decision frameworks.
        </p>

        <h2>Succession and Continuity Planning</h2>
        <p>
          The most overlooked resilience risk on most farms is also the most consequential: what happens when the current operator can no longer run the operation? Whether through retirement, illness, or unexpected incapacity, operations without succession plans face existential risk.
        </p>
        <p>
          <Link href="/articles/farm-succession-planning">Farm succession planning</Link> is not just about inheritance. It is about ensuring operational continuity. Who knows the irrigation system? Who has relationships with buyers? Who understands the financial structure? If all of that knowledge lives in one person&rsquo;s head, the operation has a single point of failure regardless of how diversified its crops are or how strong its balance sheet looks.
        </p>
        <p>
          Effective succession planning documents operational knowledge, develops capability in the next generation or management team, and creates legal and financial structures that allow smooth transitions. It is unglamorous work that most operations defer indefinitely &mdash; until a health event forces rushed decisions under the worst possible conditions.
        </p>

        <h2>Managing Market Volatility</h2>
        <p>
          Agricultural commodity markets have always been volatile, but the amplitude and frequency of price swings have increased. Globalised supply chains mean that a drought in South America affects grain prices in Europe. Energy market disruptions cascade into fertiliser costs within weeks.
        </p>
        <p>
          <Link href="/articles/market-volatility-strategies">Strategies for managing market volatility</Link> range from simple forward contracting to more sophisticated hedging approaches. The right strategy depends on your operation&rsquo;s scale, market access, and risk tolerance. But every operation needs some form of price risk management &mdash; selling everything at spot prices is not a strategy, it is gambling.
        </p>
        <p>
          Market resilience also involves reducing your sensitivity to price swings. Operations with lower breakeven costs can survive price troughs that bankrupt higher-cost competitors. Operations with storage capacity can time their sales rather than selling at harvest when prices are typically lowest. Operations with value-added processing or direct sales channels capture more margin and reduce exposure to commodity price volatility.
        </p>

        <h2>Building an Integrated Resilience Framework</h2>
        <p>
          The mistake most operations make is treating each risk category in isolation. Climate adaptation is handled by the agronomist. Financial risk is handled by the accountant. Supply chain issues are dealt with reactively. Succession planning is deferred.
        </p>
        <p>
          Real resilience requires integration. Your climate risk assessment should inform your crop diversification decisions, which should inform your insurance coverage, which should inform your financial planning. Your supply chain mapping should feed into your cash flow projections. Your succession plan should ensure that all of this institutional knowledge transfers to the next generation.
        </p>
        <p>
          This is not about creating a complex management system. It is about ensuring that the people making decisions in each area are aware of the dependencies and interactions. A diversification decision that improves climate resilience but creates a supply chain vulnerability is not a net gain. An insurance decision made without understanding the financial resilience context may be wasted premium.
        </p>

        <h2>Where to Start</h2>
        <p>
          If you are reading this and wondering which risk to address first, the honest answer is: address the one most likely to end your operation. For most farms, that hierarchy looks like this:
        </p>
        <ul>
          <li><strong>Financial resilience first.</strong> Without adequate cash reserves and manageable debt, no other resilience measure matters. An operation that runs out of cash cannot adapt to anything.</li>
          <li><strong>Climate risk assessment second.</strong> Understand your exposure before you invest in adaptation. The assessment costs time, not money, and it prevents expensive mistakes.</li>
          <li><strong>Diversification third.</strong> Once you understand your financial constraints and climate exposure, diversify strategically rather than randomly.</li>
          <li><strong>Supply chain and market risk in parallel.</strong> Map your dependencies and implement basic price risk management. Neither requires significant capital.</li>
          <li><strong>Succession planning ongoing.</strong> Start documenting operational knowledge now, regardless of your age or health. This is the risk that catches operations completely unprepared.</li>
        </ul>
        <p>
          Resilience is not a destination. It is a continuous process of identifying vulnerabilities, building capacity to absorb shocks, and adapting as conditions change. The operations that will still be viable in twenty years are the ones that start building that capacity today &mdash; systematically, measurably, and with their eyes open.
        </p>
      </article>

      {/* Bottom CTA Section */}
      <div className="mt-12 p-8 bg-gray-900 rounded-lg text-white">
        <h3 className="text-xl font-bold mb-2">Assess your farm&rsquo;s resilience</h3>
        <p className="text-gray-400 mb-6">
          The resilience assessment identifies your operation&rsquo;s key vulnerabilities across climate, financial, market, and supply chain dimensions &mdash; and prioritises what to address first. Takes 5 minutes. No signup required.
        </p>
        <Link href="/tools/resilience-assessment" className="inline-block bg-[#9A8CD0] text-white px-5 py-2 rounded font-medium hover:bg-[#8577be] transition-colors">
          Take the Resilience Assessment &rarr;
        </Link>
      </div>

      {/* Article Navigation */}
      <div className="mt-12 pt-8 border-t border-gray-200">
        <p className="text-sm text-gray-500 mb-4">Popular articles in this series:</p>
        <div className="space-y-3">
          <Link href="/articles/climate-risk-assessment-farms" className="block p-4 border border-gray-200 rounded-lg hover:border-[#9A8CD0] transition-colors">
            <span className="font-medium text-gray-900">Climate Risk Assessment for Farms &rarr;</span>
            <span className="block text-sm text-gray-600">Identify your specific climate hazards and build an adaptation baseline</span>
          </Link>
          <Link href="/articles/financial-resilience-farm-operations" className="block p-4 border border-gray-200 rounded-lg hover:border-[#9A8CD0] transition-colors">
            <span className="font-medium text-gray-900">Financial Resilience for Farms &rarr;</span>
            <span className="block text-sm text-gray-600">Cash flow management, reserves, and stress-testing for agricultural operations</span>
          </Link>
          <Link href="/articles/supply-chain-resilience-agriculture" className="block p-4 border border-gray-200 rounded-lg hover:border-[#9A8CD0] transition-colors">
            <span className="font-medium text-gray-900">Supply Chain Resilience &rarr;</span>
            <span className="block text-sm text-gray-600">Map dependencies and build redundancy before disruptions hit</span>
          </Link>
        </div>
      </div>

      {/* Newsletter */}
      <div className="mt-12">
        <NewsletterSignup />
      </div>
    </div>
  );
}
