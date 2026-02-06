import Link from "next/link";
import NewsletterSignup from "@/components/marketing/NewsletterSignup";

export const metadata = {
  title: "From Gut Feel to Data Defense: Building Your Operational Baseline",
  description: "The 90-day approach to building audit-defensible baseline data using utility bills, invoices, and production records you already have.",
};

export default function ArticlePage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      {/* Navigation */}
      <nav className="mb-8">
        <Link href="/framework/stack-1-metrics" className="group flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-[#4AA88C] transition-colors">
          <span className="group-hover:-translate-x-1 transition-transform">←</span> Back to Stack 1: Core Metrics
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
          From Gut Feel to Data Defense: Building Your Operational Baseline
        </h1>
        <p className="text-xl text-gray-600">
          The 90-day approach to audit-defensible data using what you already have.
        </p>
      </header>

      {/* Article Content */}
      <article className="prose prose-gray max-w-none">
        <p>
          You know you need sustainability data. You probably even know what metrics matter—energy, water, waste, emissions, production output. But there's a gap between knowing you should measure something and actually having defensible numbers to report.
        </p>
        <p>
          Most agricultural operations stall here. The task feels enormous. Where do you even start? Do you need consultants? Software? A full-time sustainability person?
        </p>
        <p>
          Here's the reality: you already have more data than you think, scattered across utility bills, supplier invoices, and production records. The work isn't generating data from nothing—it's organizing what you have into metrics that survive scrutiny.
        </p>

        <h2>You Already Have More Data Than You Think</h2>
        <p>Before you buy anything or hire anyone, look at what's already flowing through your operation.</p>
        <p><strong>Utility bills tell you energy and water consumption.</strong> Electricity bills show kWh. Gas bills show cubic meters or therms. Water bills show volume. This is measured data, not estimates—exactly what auditors want to see.</p>
        <p><strong>Fuel invoices tell you diesel, petrol, and propane use.</strong> Every fill-up receipt, fuel card statement, or supplier invoice documents consumption. Aggregate these by year and you have Scope 1 emission inputs.</p>
        <p><strong>Supplier invoices tell you input volumes.</strong> Fertilizer purchases, feed deliveries, seed orders, chemical applications—all documented on invoices you already have.</p>
        <p><strong>Production records tell you output.</strong> Harvest weights, milk volumes, processing throughput, sales records—whatever you track for operational or financial purposes also serves as the denominator for intensity metrics.</p>
        <p>The first step isn't measurement—it's inventory. What data do you already have? Where does it live? How far back does it go?</p>

        <h2>What "Audit-Defensible" Actually Means</h2>
        <p>The phrase "audit-defensible" sounds intimidating. It's not.</p>
        <p>Audit-defensible doesn't mean perfect data. It means documented methodology. Auditors and buyers don't expect you to have laboratory-grade precision. They expect you to show your work.</p>
        <p><strong>Documented methodology means:</strong></p>
        <ul>
          <li>You can explain where each number came from</li>
          <li>You can show the source documents</li>
          <li>You can explain your assumptions</li>
          <li>You can demonstrate consistency</li>
        </ul>
        <p><strong>The practical standard:</strong> If a skeptical buyer asked "how did you get this number?" could you answer clearly and produce supporting evidence? That's the bar for audit-defensible.</p>
      </article>

      {/* Mid-article CTA */}
      <div className="my-12 p-6 bg-gray-50 rounded-lg border border-gray-200">
        <p className="font-semibold text-gray-900 mb-2">Want to know exactly where your data gaps are before you start building?</p>
        <p className="text-gray-600 text-sm mb-4">
          The Sustainability Data Readiness Assessment maps your current state across 12 buyer requirement categories.
        </p>
        <a href="#" className="inline-block bg-[#3D2E7C] text-white px-4 py-2 rounded font-medium text-sm hover:bg-[#2d2260] transition-colors">
          Get the Assessment — €29 →
        </a>
      </div>

      {/* Continue article */}
      <article className="prose prose-gray max-w-none">
        <h2>The 90-Day Baseline Approach</h2>
        <p>You don't need a year to establish useful baselines. Ninety days of focused effort produces minimum viable baselines that satisfy initial buyer requests.</p>
        
        <h3>Days 1-14: Inventory and Organize</h3>
        <p>Gather existing data sources. Collect utility bills, fuel invoices, supplier records, production logs, waste documentation. Don't analyze yet—just locate and organize.</p>
        
        <h3>Days 15-45: Calculate Core Metrics</h3>
        <p>Start with energy because it's the most commonly requested and you almost certainly have utility bills. Calculate total consumption by source, then emissions using standard factors.</p>
        
        <h3>Days 46-75: Fill Critical Gaps</h3>
        <p>For metrics where you have no data, implement simple tracking. A fuel log for vehicles without fuel cards. A meter reading schedule for unmetered water sources.</p>
        
        <h3>Days 76-90: Document and Verify</h3>
        <p>Write your methodology statement. Cross-check numbers for plausibility. Compile your baseline report.</p>
        
        <p><strong>What you have after 90 days:</strong> Defensible baseline figures for core metrics, documented methodology, a system for ongoing collection, and clear understanding of where to improve.</p>

        <h2>Common Baseline Failures (And How to Avoid Them)</h2>
        <ul>
          <li><strong>Starting too broad.</strong> Trying to measure everything at once produces low-quality data across many metrics instead of solid data on the important ones.</li>
          <li><strong>Perfectionism paralysis.</strong> Waiting for perfect data systems before reporting anything. Start with what you have.</li>
          <li><strong>Undocumented estimates.</strong> Estimates are acceptable when measured data doesn't exist. Undocumented estimates are not.</li>
          <li><strong>Missing the operational value.</strong> The same data that satisfies buyer requests reveals efficiency opportunities.</li>
        </ul>
      </article>

      {/* Bottom CTA Section */}
      <div className="mt-12 p-8 bg-gray-900 rounded-lg text-white">
        <h3 className="text-xl font-bold mb-2">Build your baseline with structure</h3>
        <p className="text-gray-400 mb-6">
          The Complete Baseline System gives you templates for energy, water, waste, and production plus a 12-week implementation guide.
        </p>
        <div className="flex flex-wrap gap-3">
          <a href="#" className="inline-block bg-[#4AA88C] text-white px-5 py-2 rounded font-medium hover:bg-[#3d8f77] transition-colors">
            Get the Complete System — €99
          </a>
          <a href="#" className="inline-block bg-white/10 text-white px-5 py-2 rounded font-medium hover:bg-white/20 transition-colors">
            Assessment + System Bundle — €119
          </a>
        </div>
      </div>

      {/* Article Navigation */}
      <div className="mt-12 pt-8 border-t border-gray-200">
        <p className="text-sm text-gray-500 mb-4">Continue reading Stack 1 articles:</p>
        <div className="space-y-3">
          <Link href="/articles/what-gets-measured" className="block p-4 border border-gray-200 rounded-lg hover:border-[#4AA88C] transition-colors">
            <span className="font-medium text-gray-900">What Actually Gets Measured →</span>
            <span className="block text-sm text-gray-600">The 5-7 core metrics and why they matter</span>
          </Link>
          <Link href="/articles/buyer-scrutiny" className="block p-4 border border-gray-200 rounded-lg hover:border-[#4AA88C] transition-colors">
            <span className="font-medium text-gray-900">Surviving Buyer ESG Scrutiny →</span>
            <span className="block text-sm text-gray-600">The supply chain pressure timeline and how to prepare</span>
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
