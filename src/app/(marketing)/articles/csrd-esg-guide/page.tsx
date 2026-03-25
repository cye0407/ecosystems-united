import Link from "next/link";
import NewsletterSignup from "@/components/marketing/NewsletterSignup";

export const metadata = {
  title: "The Complete CSRD & ESG Guide for Agricultural Suppliers",
  description: "Everything agricultural SMEs need to know about CSRD, VSME, buyer ESG questionnaires, and building audit-defensible sustainability data.",
  keywords: ["CSRD", "ESG", "VSME", "agricultural suppliers", "sustainability reporting", "buyer questionnaires", "scope 3", "baseline data", "compliance", "competitive advantage"],
};

export default function CSRDESGGuidePage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      {/* Navigation */}
      <nav className="mb-8">
        <Link href="/framework/stack-1-metrics" className="group flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-[#4AA88C] transition-colors">
          <span className="group-hover:-translate-x-1 transition-transform">&larr;</span> Back to Stack 1: Core Metrics
        </Link>
      </nav>

      {/* Header */}
      <header className="mb-12">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-8 h-8 rounded-full bg-[#3D2E7C] text-white flex items-center justify-center font-bold text-sm">
            1
          </div>
          <span className="text-sm text-gray-500">Stack 1: Core Metrics</span>
        </div>
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          The Complete CSRD &amp; ESG Guide for Agricultural Suppliers
        </h1>
        <p className="text-xl text-gray-600">
          Everything you need to know about sustainability reporting, buyer questionnaires, and building defensible data &mdash; without the consultancy jargon.
        </p>
      </header>

      {/* Article Content */}
      <article className="prose prose-gray max-w-none">
        <p>
          If you run an agricultural operation anywhere in the supply chain of a European buyer, sustainability reporting is no longer optional. The Corporate Sustainability Reporting Directive (CSRD) is live, and its effects are cascading down supply chains faster than most SMEs expected.
        </p>
        <p>
          This guide is the practical reference we wish existed when suppliers started calling us about ESG questionnaires landing in their inbox. It covers the regulatory landscape, the metrics that actually matter, and the step-by-step process for building data infrastructure that survives buyer scrutiny. No aspirational language. No sustainability theater. Infrastructure, not narratives.
        </p>

        <h2>The Regulatory Reality: CSRD and VSME</h2>
        <p>
          CSRD requires large EU companies to report detailed sustainability data &mdash; including data from their supply chain. That means you. Even if your operation has fifteen employees and two tractors, if your buyers report under CSRD, they need numbers from you.
        </p>
        <p>
          The <Link href="/articles/csrd-vsme-agricultural-suppliers">VSME (Voluntary SME) standard</Link> was designed as a proportionate framework for smaller suppliers. It strips away the complexity of full ESRS reporting and focuses on the data points buyers actually request. Understanding VSME is the first step toward responding efficiently rather than reactively.
        </p>
        <p>
          Here is what catches most agricultural suppliers off guard: CSRD is not asking you to become sustainable. It is asking you to measure and report what you already do. The gap is not in your operations &mdash; it is in your documentation.
        </p>

        <h2>Why Buyer ESG Questionnaires Are Increasing</h2>
        <p>
          Large food companies, retailers, and processors now face mandatory Scope 3 reporting. Scope 3 means everything in their supply chain &mdash; which means your farm, your processing facility, your transport emissions. When a buyer sends you a <Link href="/articles/first-esg-questionnaire">first ESG questionnaire</Link>, they are not being difficult. They are responding to their own regulatory obligations.
        </p>
        <p>
          Understanding <Link href="/articles/scope-1-2-3-agriculture">Scope 1, 2, and 3 emissions in an agricultural context</Link> removes most of the confusion. Scope 1 is what you burn directly &mdash; diesel, gas, propane. Scope 2 is purchased electricity. Scope 3 is everything else: purchased inputs, transport, waste treatment. When a buyer sends a <Link href="/articles/buyer-scope-3-request">Scope 3 data request</Link>, they need your Scope 1 and 2 numbers to feed into their Scope 3 calculations.
        </p>
        <p>
          The volume of these requests is accelerating. The question is not whether you will receive one. The question is whether you will be ready when it arrives, or whether you will scramble and risk <Link href="/articles/lose-buyers-without-esg">losing the relationship entirely</Link>.
        </p>

        <h2>The Core Metrics Every Supplier Needs</h2>
        <p>
          Sustainability reporting sounds vast. In practice, for agricultural SMEs, it comes down to five to seven core metrics that cover ninety percent of what buyers request. Understanding <Link href="/articles/what-gets-measured">what actually gets measured</Link> prevents you from drowning in irrelevant frameworks.
        </p>

        <h3>Energy</h3>
        <p>
          Total energy consumption by source &mdash; electricity (kWh), gas, diesel, propane, renewables. This is the single most requested metric because it feeds directly into emissions calculations. You already have this data in utility bills and fuel invoices.
        </p>

        <h3>Water</h3>
        <p>
          Total water withdrawal by source. Metered supply is straightforward. Borehole and rainwater harvesting need either meters or documented estimation methodology. Irrigation volumes matter significantly for crop operations.
        </p>

        <h3>Waste</h3>
        <p>
          Waste generated by type and destination &mdash; landfill, recycling, composting, anaerobic digestion. Waste transfer notes and contractor invoices provide most of this. Agricultural operations often have better waste data than they realise because organic waste streams are already tracked for agronomic reasons.
        </p>

        <h3>Emissions</h3>
        <p>
          Greenhouse gas emissions in tonnes CO2 equivalent, broken down by scope. For most agricultural SMEs, this is calculated from energy and fuel data using standard emission factors &mdash; not measured directly. The methodology matters more than the precision.
        </p>

        <h3>Production Output</h3>
        <p>
          Whatever you produce &mdash; tonnes of grain, litres of milk, heads processed, pallets shipped. Production output is the denominator for intensity metrics (emissions per tonne, energy per unit), which is how buyers compare suppliers.
        </p>

        <p>
          The <Link href="/articles/agricultural-sustainability-checklist">agricultural sustainability checklist</Link> maps these metrics to the specific data sources available on most operations. If you are not sure where to start, start there.
        </p>
      </article>

      {/* Mid-article Newsletter */}
      <div className="my-12">
        <NewsletterSignup />
      </div>

      {/* Continue article */}
      <article className="prose prose-gray max-w-none">
        <h2>Building a Defensible Baseline in 90 Days</h2>
        <p>
          The most common mistake is waiting for perfect systems before reporting anything. You do not need enterprise software or a sustainability department. You need 90 days of focused effort and the data you already have.
        </p>
        <p>
          The full methodology is laid out in <Link href="/articles/building-baseline">building your operational baseline</Link>, but here is the summary:
        </p>
        <p>
          <strong>Days 1&ndash;14: Inventory.</strong> Gather every utility bill, fuel invoice, waste transfer note, supplier receipt, and production record you can find for the last 12 months. Do not analyse. Just locate and organise.
        </p>
        <p>
          <strong>Days 15&ndash;45: Calculate.</strong> Start with energy &mdash; it is the most commonly requested and you almost certainly have utility bills. Calculate total consumption by source, then derive emissions using published conversion factors.
        </p>
        <p>
          <strong>Days 46&ndash;75: Fill gaps.</strong> Where measured data does not exist, implement simple tracking. A fuel log for vehicles without fuel cards. A meter reading schedule for unmetered water. A waste log for skips without weigh tickets.
        </p>
        <p>
          <strong>Days 76&ndash;90: Document.</strong> Write your methodology statement. Cross-check numbers for plausibility. Compile your baseline report with source references for every figure.
        </p>
        <p>
          After 90 days you have defensible numbers for the core metrics, a documented methodology, a system for ongoing data collection, and &mdash; critically &mdash; the ability to respond to buyer questionnaires without panic.
        </p>

        <h2>Handling Missing Data</h2>
        <p>
          Every operation has gaps. Maybe you switched electricity suppliers and lost access to older bills. Maybe your water is from an unmetered borehole. Maybe waste has always been handled informally.
        </p>
        <p>
          <Link href="/articles/missing-esg-data">Missing ESG data</Link> is normal and expected. Auditors and buyers do not expect perfection. They expect honesty about what is measured, what is estimated, and what is not yet tracked &mdash; plus a plan for closing the gaps.
        </p>
        <p>
          The rule: documented estimates are acceptable. Undocumented guesses are not. If you estimate borehole water usage based on pump run-hours and flow rate, write that down. That is methodology. If you write &ldquo;approximately 5,000 cubic metres&rdquo; with no supporting calculation, that is a liability.
        </p>

        <h2>Reporting for Small Farms</h2>
        <p>
          Small-scale operations face a particular challenge: the reporting burden feels disproportionate to the operation&rsquo;s size. A 50-hectare mixed farm should not need the same reporting infrastructure as an industrial processor.
        </p>
        <p>
          It does not. <Link href="/articles/esg-reporting-small-farms">ESG reporting for small farms</Link> can be proportionate and practical. The VSME standard exists precisely for this reason. Focus on the metrics your specific buyers request, use the data sources you already have, and document your methodology clearly. A spreadsheet with documented sources beats an expensive platform filled with estimates.
        </p>

        <h2>Building a Response System</h2>
        <p>
          Responding to one buyer questionnaire is a project. Responding to the fourth, fifth, and sixth is a system problem. Every questionnaire uses slightly different formats, asks slightly different questions, and has different deadlines. Without a system, each one consumes days of senior management time.
        </p>
        <p>
          <Link href="/articles/building-esg-response-system">Building a response system</Link> means separating the data layer from the response layer. Your core metrics live in one place, updated on a consistent schedule. When a questionnaire arrives, you pull from the data layer and format for the specific request. The data work happens once. The formatting happens per questionnaire.
        </p>
        <p>
          This is infrastructure thinking. Build the pipes once, then connect new taps as needed.
        </p>

        <h2>Surviving Buyer Scrutiny</h2>
        <p>
          Buyer ESG scrutiny is intensifying on a predictable timeline. First come the questionnaires. Then come the audits. Then come the supplier scorecards that directly affect contract decisions.
        </p>
        <p>
          <Link href="/articles/buyer-scrutiny">Surviving buyer ESG scrutiny</Link> comes down to three things: having the data, being able to explain the methodology, and showing improvement over time. Buyers do not expect suppliers to be carbon neutral. They expect suppliers to know their numbers and have a credible plan.
        </p>
        <p>
          The suppliers who get dropped are not the ones with high emissions. They are the ones who cannot answer basic questions about their own operations.
        </p>

        <h2>Turning Compliance into Competitive Advantage</h2>
        <p>
          Here is what most compliance-focused guides miss: the same data that satisfies CSRD requirements reveals operational inefficiencies. Energy data shows where you are overspending. Water data shows where you are wasting. Waste data shows where you are losing value.
        </p>
        <p>
          <Link href="/articles/esg-competitive-advantage">ESG as competitive advantage</Link> is not a slogan &mdash; it is an operational reality for suppliers who treat sustainability data as business intelligence rather than a compliance burden. When you know your energy cost per tonne of output, you can optimise it. When you know your water intensity, you can benchmark against peers. When you can demonstrate year-on-year improvement, you become a preferred supplier rather than a risk to manage.
        </p>
        <p>
          The suppliers who will thrive are the ones who stop treating ESG as a cost center and start treating it as an operational feedback loop.
        </p>

        <h2>Common Mistakes and How to Avoid Them</h2>
        <p>
          After working with hundreds of agricultural suppliers on ESG reporting, the same mistakes come up repeatedly:
        </p>
        <ul>
          <li><strong>Waiting for perfect data before reporting anything.</strong> Start with what you have. A baseline built from utility bills and invoices is infinitely more useful than a plan to install sensors next year.</li>
          <li><strong>Trying to measure everything at once.</strong> Focus on the five to seven metrics buyers actually request. Expand later from a position of competence, not chaos.</li>
          <li><strong>Treating each questionnaire as a standalone project.</strong> Build a data layer once. Format responses per request. This is the difference between 40 hours per questionnaire and 4.</li>
          <li><strong>Ignoring the operational value.</strong> If you only use sustainability data for compliance, you are leaving money on the table. Every metric is also an efficiency metric.</li>
          <li><strong>Outsourcing understanding.</strong> Hiring a consultant to fill in questionnaires without building internal capability means you pay again next year, and the year after. Build the infrastructure internally.</li>
          <li><strong>Confusing narrative with data.</strong> Buyers want numbers with methodology, not mission statements. A two-page data response beats a twenty-page sustainability report with no verifiable figures.</li>
        </ul>

        <h2>Where to Start Right Now</h2>
        <p>
          If you have read this far and are wondering what to do first, here is the honest answer: it depends on where you are.
        </p>
        <p>
          <strong>If you have never responded to an ESG questionnaire:</strong> Read <Link href="/articles/first-esg-questionnaire">the first ESG questionnaire guide</Link> and take the metrics assessment below. Understand what is being asked before you start collecting.
        </p>
        <p>
          <strong>If you have responded but it was painful:</strong> Read <Link href="/articles/building-esg-response-system">building your response system</Link> and start separating data from formatting. Your second response should take a fraction of the time.
        </p>
        <p>
          <strong>If you have basic data but gaps:</strong> Read <Link href="/articles/missing-esg-data">handling missing data</Link> and prioritise closing the gaps that buyers care about most. Energy and emissions first, then water and waste.
        </p>
        <p>
          <strong>If you are already reporting and want to improve:</strong> Read <Link href="/articles/esg-competitive-advantage">ESG as competitive advantage</Link> and start using your data for operational decisions, not just compliance responses.
        </p>
        <p>
          The regulatory pressure is not going away. The buyer expectations are not softening. But the suppliers who build real data infrastructure now &mdash; not narratives, not greenwashing, not aspirational targets, but actual measured operational data &mdash; are the ones who will still be in the supply chain five years from now.
        </p>
      </article>

      {/* Bottom CTA Section */}
      <div className="mt-12 p-8 bg-gray-900 rounded-lg text-white">
        <h3 className="text-xl font-bold mb-2">Find out where your operation stands</h3>
        <p className="text-gray-400 mb-6">
          The metrics assessment identifies which of the core metrics you are already tracking, where the gaps are, and what to prioritise next. Takes 5 minutes. No signup required.
        </p>
        <Link href="/tools/metrics-assessment" className="inline-block bg-[#4AA88C] text-white px-5 py-2 rounded font-medium hover:bg-[#3d8f77] transition-colors">
          Take the Metrics Assessment &rarr;
        </Link>
      </div>

      {/* Article Navigation */}
      <div className="mt-12 pt-8 border-t border-gray-200">
        <p className="text-sm text-gray-500 mb-4">Popular articles in this series:</p>
        <div className="space-y-3">
          <Link href="/articles/building-baseline" className="block p-4 border border-gray-200 rounded-lg hover:border-[#4AA88C] transition-colors">
            <span className="font-medium text-gray-900">Building Your Operational Baseline &rarr;</span>
            <span className="block text-sm text-gray-600">The 90-day approach to audit-defensible data using what you already have</span>
          </Link>
          <Link href="/articles/first-esg-questionnaire" className="block p-4 border border-gray-200 rounded-lg hover:border-[#4AA88C] transition-colors">
            <span className="font-medium text-gray-900">First ESG Questionnaire? &rarr;</span>
            <span className="block text-sm text-gray-600">What buyers are actually asking and how to respond without panic</span>
          </Link>
          <Link href="/articles/what-gets-measured" className="block p-4 border border-gray-200 rounded-lg hover:border-[#4AA88C] transition-colors">
            <span className="font-medium text-gray-900">What Gets Measured &rarr;</span>
            <span className="block text-sm text-gray-600">The 5-7 core metrics and why they matter</span>
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
