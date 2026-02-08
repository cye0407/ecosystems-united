import Link from "next/link";
import NewsletterSignup from "@/components/marketing/NewsletterSignup";

export const metadata = {
  title: "Your Buyer Sent a Scope 3 Request — Now What?",
  description:
    "Buyer wants your Scope 3 data? Here's what agricultural operations actually need to provide, from livestock emissions to fertilizer use, without a carbon accounting degree.",
  keywords: ["CSRD", "ESG", "sustainability reporting", "VSME", "agricultural compliance", "buyer", "scope", "request", "agriculture", "sustainability"],
};

export default function ArticlePage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <nav className="mb-8">
        <Link
          href="/framework/stack-1-metrics"
          className="group flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-[#4AA88C] transition-colors"
        >
          <span className="group-hover:-translate-x-1 transition-transform">&larr;</span>{" "}
          Back to Stack 1: Core Metrics
        </Link>
      </nav>

      <header className="mb-12">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-8 h-8 rounded-full bg-[#3D2E7C] text-white flex items-center justify-center font-bold text-sm">1</div>
          <span className="text-sm text-gray-500">Stack 1: Core Metrics</span>
        </div>
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Your Buyer Sent a Scope 3 Request &mdash; Now What?
        </h1>
        <p className="text-xl text-gray-600">
          The email mentions &ldquo;Scope 3&rdquo; and suddenly you&apos;re searching for what that means. Here&apos;s what&apos;s actually being asked, what you can realistically provide, and why agricultural emissions work differently.
        </p>
      </header>

      <article className="prose prose-gray max-w-none">
        <p>
          Your buyer needs carbon data from their supply chain, and your farm is part of that chain. The questionnaire asks about emission categories you&apos;ve never heard of, activity data you&apos;ve never tracked, and methodologies you couldn&apos;t explain.
        </p>
        <p>
          Scope 3 requests are becoming standard for suppliers to large food companies. Here&apos;s what&apos;s actually being asked and how agricultural operations can respond.
        </p>

        <h2>What Scope 3 Actually Means</h2>
        <p>Carbon emissions are categorized into three &ldquo;scopes&rdquo;:</p>
        <p>
          <strong>Scope 1</strong> covers direct emissions from sources you own or control. For farms, this is significant and unique: livestock methane from enteric fermentation, nitrous oxide from fertilizer application, diesel for tractors and harvesters, heating for barns and greenhouses, and manure management emissions.
        </p>
        <p>
          <strong>Scope 2</strong> covers indirect emissions from purchased electricity&mdash;powering milking parlors, grain dryers, irrigation pumps, cold storage, and farm buildings.
        </p>
        <p>
          <strong>Scope 3</strong> is everything else in the value chain. Upstream: fertilizer manufacturing, feed production, seed, pesticide manufacturing. Downstream: transport to processor, processing, packaging, retail, consumer.
        </p>
        <p>
          Here&apos;s the key: when your buyer reports their emissions, your farm&apos;s operations fall into <em>their</em> Scope 3. They can&apos;t complete their carbon report without data from suppliers like you.
        </p>

        <h2>Why Agricultural Emissions Are Different</h2>
        <p>
          This is critical to understand: agriculture is fundamentally different from manufacturing when it comes to carbon accounting. In a factory, almost all Scope 1 emissions come from burning fuel. On a farm, <strong>biological processes</strong> often dominate.
        </p>
        <p>
          A 200-head dairy operation might have Scope 1 that looks like this:
        </p>
        <ul>
          <li>Enteric fermentation (cattle methane): ~70% of total</li>
          <li>Fertilizer N2O from soils: ~15%</li>
          <li>Diesel for machinery: ~10%</li>
          <li>Manure management: ~5%</li>
        </ul>
        <p>
          Compare that to a manufacturer where Scope 1 is almost entirely fuel combustion. The calculation methods, emission factors, and data requirements are completely different for agricultural operations.
        </p>

        <h2>What Buyers Typically Want</h2>
        <p>
          <strong>Total emissions in CO2 equivalent (CO2e).</strong> The headline number. How many tonnes of carbon dioxide equivalent are associated with what you produce for them?
        </p>
        <p>
          <strong>Activity data.</strong> Even if you can&apos;t calculate emissions yourself, buyers will often accept raw data: livestock numbers by type, hectares by crop, fertilizer tonnes applied, diesel litres consumed, electricity kWh. They can apply emission factors themselves.
        </p>
        <p>
          <strong>Methodology explanation.</strong> How did you arrive at these numbers? What&apos;s included and excluded?
        </p>
        <p>
          <strong>Year-over-year comparison.</strong> If you&apos;ve been tracking, they want to see trends.
        </p>

        <h2>The Honest Starting Point</h2>
        <p>
          If you&apos;ve never tracked carbon emissions, start with what you know:
        </p>
        <p>
          <strong>Livestock numbers.</strong> Your herd/flock records are legally required. These feed directly into methane calculations using IPCC default factors.
        </p>
        <p>
          <strong>Fertilizer records.</strong> Your spray logs and purchase invoices show how much nitrogen you applied. This drives N2O calculations.
        </p>
        <p>
          <strong>Fuel consumption.</strong> Diesel receipts from your fuel supplier or farm accounts. This is your machinery Scope 1.
        </p>
        <p>
          <strong>Electricity bills.</strong> Your utility records show kWh consumed. This is your Scope 2.
        </p>
        <p>
          With just these four inputs, you can provide a reasonable first estimate that covers the vast majority of your farm&apos;s emissions.
        </p>
      </article>

      <div className="my-12">
        <NewsletterSignup />
      </div>

      <article className="prose prose-gray max-w-none">
        <h2>A Quick Calculation Example</h2>
        <p>For a 200-head dairy farm in Western Europe:</p>
        <ul>
          <li>200 dairy cows &times; 128 kg CH4/head/year (IPCC default) = 25.6 tonnes CH4 = <strong>~718 tonnes CO2e</strong> from enteric fermentation</li>
          <li>50,000 litres diesel &times; 2.7 kg CO2e/litre = <strong>~135 tonnes CO2e</strong> from machinery</li>
          <li>80 tonnes synthetic N fertilizer &times; ~6.2 kg CO2e/kg N (direct + indirect N2O) = <strong>~496 tonnes CO2e</strong> from soils</li>
          <li>120,000 kWh electricity &times; 0.4 kg CO2e/kWh = <strong>~48 tonnes CO2e</strong> (Scope 2)</li>
        </ul>
        <p>
          Total: roughly <strong>1,400 tonnes CO2e</strong>. That&apos;s a defensible first estimate built from data you already have.
        </p>

        <h2>What If You Can&apos;t Calculate Full Emissions?</h2>
        <p>
          <strong>Provide activity data and let them calculate.</strong> Send your livestock numbers, hectares by crop, fertilizer kg applied, diesel litres. Sophisticated buyers have systems to apply IPCC or national inventory emission factors.
        </p>
        <p>
          <strong>Use IPCC Tier 1 defaults.</strong> Published emission factors exist for every livestock type and region. They&apos;re not perfect for your specific operation, but they&apos;re accepted methodology.
        </p>
        <p>
          <strong>Calculate what you can, acknowledge what you can&apos;t.</strong> &ldquo;We have measured our Scope 1 and 2 emissions. Scope 3 calculations (purchased feed, fertilizer manufacturing) are in development.&rdquo; Honest and shows a path forward.
        </p>

        <h2>Common Agricultural Scope 3 Mistakes</h2>
        <p>
          <strong>Ignoring livestock methane.</strong> It&apos;s biological, not energy-based, but it&apos;s still Scope 1. For ruminant operations, it&apos;s typically the single largest emission source.
        </p>
        <p>
          <strong>Forgetting fertilizer N2O.</strong> Nitrous oxide from applied nitrogen is a major source that many farms overlook. It&apos;s 265 times more potent than CO2 per tonne.
        </p>
        <p>
          <strong>Double-counting with your processor.</strong> Your Scope 1 emissions become the processor&apos;s Scope 3. Make sure the boundary is clear&mdash;your data covers farm gate, not beyond.
        </p>
        <p>
          <strong>Using outdated emission factors.</strong> Grid electricity gets cleaner over time. IPCC factors get updated. Use current factors for current reporting.
        </p>

        <h2>The Competitive Reality</h2>
        <p>
          Farms that can provide carbon data have an advantage. Not because buyers prefer the lowest-emission supplier, but because they make their buyers&apos; compliance easier.
        </p>
        <p>
          When a food processor is choosing between two similar farms, one that provides clean carbon data and one that doesn&apos;t respond, the choice is straightforward. The compliant farm reduces their workload. The non-responsive farm creates it.
        </p>
        <p>
          You don&apos;t need the lowest carbon footprint. You need a credible number, clearly documented, delivered on time. That&apos;s the bar. Many of your neighbouring farms won&apos;t clear it.
        </p>
      </article>

      <div className="mt-12 p-8 bg-[#3D2E7C] rounded-lg text-white">
        <h3 className="text-2xl font-bold mb-3">Ready to make sense of your farm&apos;s carbon data?</h3>
        <p className="text-white/80 mb-6">
          Scope 3 requests are about measurement&mdash;and measurement is the foundation of Stack 1. The Five Stacks Framework starts with building a defensible baseline from data you already have.
        </p>
        <Link
          href="/framework/stack-1-metrics"
          className="inline-block bg-white text-[#3D2E7C] px-6 py-3 rounded font-semibold hover:bg-gray-100 transition-colors"
        >
          Get Started with Stack 1 &rarr;
        </Link>
      </div>

      <div className="mt-12 pt-8 border-t border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Further Reading</h3>
        <div className="space-y-3">
          <Link href="/articles/scope-1-2-3-agriculture" className="block p-4 border border-gray-200 rounded-lg hover:border-[#3D2E7C] transition-colors">
            <span className="font-medium text-gray-900">Scope 1, 2, 3 Emissions for Agricultural Operations &rarr;</span>
            <span className="block text-sm text-gray-600">The complete guide to what counts where on a farm</span>
          </Link>
          <Link href="/articles/what-gets-measured" className="block p-4 border border-gray-200 rounded-lg hover:border-[#3D2E7C] transition-colors">
            <span className="font-medium text-gray-900">What Actually Gets Measured in Agricultural Sustainability &rarr;</span>
            <span className="block text-sm text-gray-600">The 5-7 core metrics that appear on every buyer questionnaire</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
