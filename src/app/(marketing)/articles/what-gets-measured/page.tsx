import Link from "next/link";
import NewsletterSignup from "@/components/marketing/NewsletterSignup";

export const metadata = {
  title: "What Actually Gets Measured in Agricultural Sustainability",
  description: "The 5-7 core metrics that appear on every buyer questionnaire — Scope 3, ESG benchmarks, and what 'good' looks like for your operation type.",
  keywords: ["CSRD", "ESG", "sustainability reporting", "VSME", "agricultural compliance", "gets", "measured", "agriculture", "sustainability"],
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
          What Actually Gets Measured in Agricultural Sustainability (And Why It Matters)
        </h1>
        <p className="text-xl text-gray-600">
          The 5-7 core metrics that cover 80% of what anyone will ask for.
        </p>
      </header>

      {/* Article Content */}
      <article className="prose prose-gray max-w-none">
        <p>
          You've been told you need "sustainability data." Maybe a buyer sent a questionnaire. Maybe your bank mentioned ESG requirements. Maybe you've seen the headlines about CSRD and supply chain reporting.
        </p>
        <p>
          But when you sit down to actually do something about it, the first question is obvious: what am I supposed to measure?
        </p>
        <p>
          The answer isn't as complicated as the sustainability industry makes it seem. A core set of metrics covers most requirements—buyer questionnaires, certification standards, bank requests, and your own operational intelligence. Get these right, and you've handled 80% of what anyone will ask for.
        </p>

        <h2>The Overlap That Works in Your Favor</h2>
        <p>
          Different stakeholders want different things. Buyers need supplier emissions for their Scope 3 reporting. Banks want ESG metrics for lending decisions. Certifications have specific checklists. You want to know where your operation wastes money.
        </p>
        <p>
          Here's the good news: substantial overlap exists between all of these. The metrics that buyers need are often the same ones that reveal operational inefficiencies. The data banks want is the data that helps you make better decisions.
        </p>
        <p>
          This means you're not building multiple measurement systems. You're building one system that serves multiple purposes.
        </p>

        <h2>The Core Metrics That Matter</h2>
        <p>
          For most agricultural operations, five to seven metrics cover the vast majority of requirements. These aren't arbitrary—they're the data points that appear consistently across buyer questionnaires, certification standards, and regulatory frameworks.
        </p>

        <h3>1. Energy Consumption and Emissions</h3>
        <p>
          This is the metric everyone asks about first. Your energy use—electricity, diesel, natural gas, propane—drives your Scope 1 and Scope 2 emissions calculations.
        </p>
        <p><strong>What to track:</strong></p>
        <ul>
          <li>Electricity consumption (kWh) by source if possible</li>
          <li>Fuel consumption by type (liters of diesel, gasoline, propane, natural gas)</li>
          <li>Any renewable energy generation or purchases</li>
        </ul>
        <p><strong>Why it matters beyond compliance:</strong></p>
        <p>
          Energy is usually your largest controllable cost after labor and inputs. Tracking consumption reveals patterns—seasonal spikes, equipment inefficiencies, process waste. Operations that measure energy use typically find 10-20% reduction opportunities within the first year.
        </p>

        <h3>2. Water Use</h3>
        <p>
          Water metrics matter more in some regions than others, but they appear on nearly every sustainability questionnaire regardless of location.
        </p>
        <p><strong>What to track:</strong></p>
        <ul>
          <li>Total water withdrawal by source (municipal, groundwater, surface water, rainwater)</li>
          <li>Water consumption vs. discharge (what comes in, what goes out)</li>
          <li>Irrigation volumes if applicable</li>
        </ul>

        <h3>3. Waste Generation</h3>
        <p>
          Waste metrics capture what leaves your operation that isn't product—everything from packaging to processing residues to end-of-life materials.
        </p>
        <p><strong>What to track:</strong></p>
        <ul>
          <li>Waste volumes by type (organic, recyclable, hazardous, landfill)</li>
          <li>Waste destinations (recycled, composted, landfill, incineration)</li>
          <li>Any waste-to-value streams (byproducts sold, compost produced)</li>
        </ul>

        <h3>4. Land Use and Biodiversity Indicators</h3>
        <p>
          For agricultural operations, land use metrics connect your production to environmental outcomes—soil health, habitat, ecosystem services.
        </p>
        <p><strong>What to track:</strong></p>
        <ul>
          <li>Total land area under management</li>
          <li>Land use types (cropland, pasture, forest, wetland, buildings)</li>
          <li>Any conservation or set-aside areas</li>
          <li>Biodiversity practices (hedgerows, buffer strips, cover crops)</li>
        </ul>

        <h3>5. Production Output</h3>
        <p>
          Production metrics seem obvious, but they're essential for calculating intensity ratios—emissions per kilogram of product, water per tonne of output.
        </p>
        <p><strong>What to track:</strong></p>
        <ul>
          <li>Total production volumes by product type</li>
          <li>Yields per hectare or per animal</li>
          <li>Input-to-output ratios where relevant</li>
        </ul>

        <h3>6. Input Tracking (Often Overlooked)</h3>
        <p>
          Inputs—fertilizers, pesticides, feed, seed, purchased materials—drive both costs and environmental impacts.
        </p>
        <p><strong>What to track:</strong></p>
        <ul>
          <li>Fertilizer use by type and volume</li>
          <li>Pesticide and herbicide applications</li>
          <li>Feed purchases and sources</li>
          <li>Seed and planting material</li>
        </ul>
      </article>

      {/* Mid-article CTA */}
      <div className="my-12 p-6 bg-gray-50 rounded-lg border border-gray-200">
        <p className="font-semibold text-gray-900 mb-2">Not sure which metrics you can actually answer questions about?</p>
        <p className="text-gray-600 text-sm mb-4">
          The Scope 3 Supplier Readiness Scorecard shows you in 5 minutes which metrics you can answer today and where your gaps are.
        </p>
        <a href="#" className="inline-block bg-[#4AA88C] text-white px-4 py-2 rounded font-medium text-sm hover:bg-[#3d8f77] transition-colors">
          Get the Free Scorecard →
        </a>
      </div>

      {/* Continue article */}
      <article className="prose prose-gray max-w-none">
        <h2>What "Good" Looks Like: Benchmark Ranges</h2>
        <p>
          Knowing what to measure is step one. Knowing whether your numbers are competitive is step two.
        </p>
        <p>
          Benchmark data varies significantly by operation type, region, and production system. These ranges give you a starting reference point—your specific context may differ.
        </p>
        <p><strong>Energy intensity (crop production):</strong></p>
        <ul>
          <li>Efficient operations: 0.5-2.0 MJ per kg product</li>
          <li>Average operations: 2.0-5.0 MJ per kg product</li>
          <li>High-energy operations: 5.0+ MJ per kg product</li>
        </ul>
        <p><strong>Waste diversion rates:</strong></p>
        <ul>
          <li>Leading operations: 80%+ diverted from landfill</li>
          <li>Good operations: 50-80% diverted</li>
          <li>Typical operations: 20-50% diverted</li>
        </ul>

        <h2>Prioritization: Where to Start</h2>
        <p>You don't need all metrics on day one. Prioritize based on your situation:</p>
        <p><strong>If buyers are already asking questions:</strong> Start with whatever they're asking about. Most buyer requests focus heavily on energy/emissions and increasingly on water.</p>
        <p><strong>If you're preparing before requests arrive:</strong> Start with energy, because it's the most commonly requested metric and has the clearest operational value.</p>
        <p><strong>If you're optimizing operations (not just compliance):</strong> Start with whatever costs you the most money. Usually that's energy or inputs.</p>

        <h2>Common Mistakes That Waste Time</h2>
        <ul>
          <li><strong>Measuring everything at once.</strong> Start with core metrics. Add sophistication over time.</li>
          <li><strong>Estimating when you could measure.</strong> If you have utility bills, invoices, and production records, use them.</li>
          <li><strong>Perfect data before any data.</strong> Start measuring now with the data you have.</li>
          <li><strong>Not documenting methodology.</strong> How you measured matters as much as what you measured.</li>
        </ul>
      </article>

      {/* Bottom CTA Section */}
      <div className="mt-12 p-8 bg-gray-900 rounded-lg text-white">
        <h3 className="text-xl font-bold mb-2">Ready to build your measurement systems?</h3>
        <p className="text-gray-400 mb-6">
          The Complete Baseline System gives you templates, methodology documentation, and a 12-week implementation guide.
        </p>
        <div className="flex flex-wrap gap-3">
          <a href="#" className="inline-block bg-[#4AA88C] text-white px-5 py-2 rounded font-medium hover:bg-[#3d8f77] transition-colors">
            Get the Complete System — €99
          </a>
          <a href="#" className="inline-block bg-white/10 text-white px-5 py-2 rounded font-medium hover:bg-white/20 transition-colors">
            Or start with the Assessment — €29
          </a>
        </div>
      </div>

      {/* Article Navigation */}
      <div className="mt-12 pt-8 border-t border-gray-200">
        <p className="text-sm text-gray-500 mb-4">Continue reading Stack 1 articles:</p>
        <div className="space-y-3">
          <Link href="/articles/building-baseline" className="block p-4 border border-gray-200 rounded-lg hover:border-[#4AA88C] transition-colors">
            <span className="font-medium text-gray-900">Building Your Baseline →</span>
            <span className="block text-sm text-gray-600">The 90-day approach using data you already have</span>
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
