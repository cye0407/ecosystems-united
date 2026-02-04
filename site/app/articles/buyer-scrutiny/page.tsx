import Link from "next/link";
import NewsletterSignup from "@/components/NewsletterSignup";

export const metadata = {
  title: "Surviving Buyer ESG Scrutiny: What Agricultural Operations Need to Know",
  description: "Why your buyers need your data for their CSRD reporting, what they actually ask for, and when to be ready.",
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
          Surviving Buyer ESG Scrutiny: What Agricultural Operations Need to Know
        </h1>
        <p className="text-xl text-gray-600">
          Why your buyers need your data for their CSRD reporting—and when to be ready.
        </p>
      </header>

      {/* Article Content */}
      <article className="prose prose-gray max-w-none">
        <p>
          You've probably heard about CSRD, ESG reporting, and sustainability requirements. Maybe it sounds like something for big corporations, not agricultural operations your size.
        </p>
        <p>
          Here's the catch: you may not be directly covered by these regulations, but your buyers probably are. And they can't report their own sustainability performance without data from you.
        </p>
        <p>
          This isn't theoretical future pressure. Large food companies, retailers, and processors are already sending supplier questionnaires. The question isn't whether you'll face sustainability data requests—it's whether you'll be ready when they arrive.
        </p>

        <h2>The Regulatory Landscape (And Why It Matters to You)</h2>
        <p>
          <strong>CSRD (Corporate Sustainability Reporting Directive)</strong> is the European regulation requiring large companies to report detailed sustainability information. Most agricultural SMEs don't meet size thresholds—you're probably not directly covered.
        </p>
        <p><strong>But here's how it reaches you:</strong></p>
        <p>
          Companies covered by CSRD must report their Scope 3 emissions—the emissions from their entire value chain, including suppliers. A food manufacturer needs emissions data from the farms supplying their ingredients. A retailer needs data from every supplier on their shelves.
        </p>
        <p>They can't report what they can't measure. So they ask you.</p>
        <p><strong>The practical reality:</strong></p>
        <ul>
          <li>Direct regulation: Probably doesn't apply to you</li>
          <li>Indirect pressure: Almost certainly does, or will soon</li>
        </ul>

        <h2>How Supply Chain Pressure Actually Works</h2>
        <p><strong>The timeline pattern:</strong></p>
        <ul>
          <li><strong>Year 0:</strong> Large buyer faces CSRD reporting requirements</li>
          <li><strong>Year 1:</strong> Buyer realizes they need supplier data for Scope 3 reporting</li>
          <li><strong>Year 1-2:</strong> Buyer sends questionnaires to major suppliers</li>
          <li><strong>Year 2-3:</strong> Buyer expands data requests, starts incorporating sustainability into procurement decisions</li>
          <li><strong>Year 3+:</strong> Suppliers without adequate data face pricing pressure, reduced orders, or replacement</li>
        </ul>
        <p>This isn't speculation—it's the pattern already visible in sectors where sustainability reporting matured earlier.</p>
      </article>

      {/* Mid-article CTA */}
      <div className="my-12 p-6 bg-gray-50 rounded-lg border border-gray-200">
        <p className="font-semibold text-gray-900 mb-2">Not sure if you're in the pressure zone?</p>
        <p className="text-gray-600 text-sm mb-4">
          The Scope 3 Supplier Readiness Scorecard helps you assess your exposure in 5 minutes—how many buyers are likely covered, whether you've received questionnaires, and your readiness level.
        </p>
        <a href="#" className="inline-block bg-[#4AA88C] text-white px-4 py-2 rounded font-medium text-sm hover:bg-[#3d8f77] transition-colors">
          Get the Free Scorecard →
        </a>
      </div>

      {/* Continue article */}
      <article className="prose prose-gray max-w-none">
        <h2>What Buyers Actually Ask For</h2>
        <p>Sustainability questionnaires vary, but common patterns emerge:</p>
        
        <h3>Emissions and energy (appears on virtually every questionnaire)</h3>
        <ul>
          <li>Total greenhouse gas emissions (Scope 1 and 2)</li>
          <li>Emissions intensity per unit of product</li>
          <li>Energy consumption by source</li>
          <li>Renewable energy percentage</li>
          <li>Emission reduction targets and progress</li>
        </ul>
        <p>This is the non-negotiable category. If you can only prepare for one thing, prepare for emissions questions.</p>

        <h3>Environmental management</h3>
        <ul>
          <li>Environmental certifications held</li>
          <li>Waste management practices</li>
          <li>Water consumption and management</li>
        </ul>

        <h3>Social and governance</h3>
        <ul>
          <li>Health and safety performance</li>
          <li>Labor standards compliance</li>
          <li>Sustainability governance structure</li>
        </ul>

        <h2>How to Assess Your Exposure</h2>
        <p><strong>High exposure indicators:</strong></p>
        <ul>
          <li>Your largest buyers are multinational companies or EU-based</li>
          <li>You've already received sustainability questionnaires</li>
          <li>You supply into retail, food service, or export markets</li>
          <li>Your buyers have published sustainability commitments</li>
        </ul>
        <p><strong>Lower exposure (for now):</strong></p>
        <ul>
          <li>Primarily local or regional sales</li>
          <li>Buyers are smaller companies not covered by CSRD</li>
          <li>Direct-to-consumer channels dominate</li>
        </ul>
        <p>Even lower-exposure operations should prepare. Requirements cascade. Today's exempt buyer becomes tomorrow's covered company.</p>

        <h2>Timeline Planning: When to Be Ready</h2>
        <p><strong>If you've already received questionnaires:</strong> You're behind. Priority is responding adequately to current requests while building systematic capability.</p>
        <p><strong>If your major buyers are large companies:</strong> Expect requests within 12-24 months. Build baseline measurement capability now.</p>
        <p><strong>If your buyers are smaller or local:</strong> You have more time, but use it. Build capability before pressure arrives.</p>
      </article>

      {/* Bottom CTA Section */}
      <div className="mt-12 p-8 bg-gray-900 rounded-lg text-white">
        <h3 className="text-xl font-bold mb-2">Be ready before the requests arrive</h3>
        <p className="text-gray-400 mb-6">
          The Complete Baseline System helps you build audit-defensible data for the metrics buyers actually ask about.
        </p>
        <div className="flex flex-wrap gap-3">
          <a href="#" className="inline-block bg-[#4AA88C] text-white px-5 py-2 rounded font-medium hover:bg-[#3d8f77] transition-colors">
            Get the Complete System — €99
          </a>
          <a href="#" className="inline-block bg-white/10 text-white px-5 py-2 rounded font-medium hover:bg-white/20 transition-colors">
            Start with the Assessment — €29
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
          <Link href="/articles/building-baseline" className="block p-4 border border-gray-200 rounded-lg hover:border-[#4AA88C] transition-colors">
            <span className="font-medium text-gray-900">Building Your Baseline →</span>
            <span className="block text-sm text-gray-600">The 90-day approach using data you already have</span>
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
