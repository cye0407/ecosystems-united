import Link from "next/link";
import NewsletterSignup from "@/components/marketing/NewsletterSignup";

export const metadata = {
  title: "Scope 1, 2, and 3 Emissions Explained for Agricultural Operations",
  description:
    "Agricultural emissions work differently from manufacturing. Livestock methane, fertilizer N2O, and biological processes dominate farm carbon footprints. Here's what Scope 1, 2, and 3 actually mean for your operation.",
  keywords: ["CSRD", "ESG", "sustainability reporting", "VSME", "agricultural compliance", "scope", "agriculture", "sustainability"],
};

export default function ArticlePage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      {/* Navigation */}
      <nav className="mb-8">
        <Link
          href="/framework/stack-1-metrics"
          className="group flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-[#4AA88C] transition-colors"
        >
          <span className="group-hover:-translate-x-1 transition-transform">
            &larr;
          </span>{" "}
          Back to Stack 1: Core Metrics
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
          Scope 1, 2, and 3 Emissions Explained for Agricultural Operations
        </h1>
        <p className="text-xl text-gray-600">
          Carbon accounting was designed for factories. Agriculture doesn&apos;t fit the mold&mdash;biological processes dominate, seasonal patterns matter, and your biggest emission source might be a cow&apos;s digestive system. Here&apos;s how the three scopes actually apply to farming.
        </p>
      </header>

      {/* Article Content */}
      <article className="prose prose-gray max-w-none">
        <p>
          If you&apos;ve received a buyer questionnaire asking about Scope 1, 2, and 3 emissions, you&apos;ve probably encountered definitions written for energy companies and manufacturers. Scope 1 is &ldquo;direct emissions from owned or controlled sources.&rdquo; Scope 2 is &ldquo;indirect emissions from purchased energy.&rdquo; Scope 3 is &ldquo;all other indirect emissions in the value chain.&rdquo;
        </p>
        <p>
          Those definitions are technically correct. They&apos;re also almost useless for understanding what they mean on a working farm. Agriculture is fundamentally different from manufacturing when it comes to carbon accounting, and applying industrial frameworks without agricultural translation leads to incomplete reporting, missed emission sources, and numbers that don&apos;t reflect reality.
        </p>
        <p>
          This guide translates the three scopes into agricultural terms&mdash;with the specific emission sources, calculation methods, and data requirements that apply to livestock, arable, and mixed farming operations.
        </p>

        <h2>Why Agriculture Is Unique in Carbon Accounting</h2>
        <p>
          In a factory, Scope 1 emissions come almost entirely from burning fossil fuels&mdash;natural gas for heat, diesel for generators, petrol for company vehicles. The calculation is straightforward: litres of fuel multiplied by a standard emission factor gives you tonnes of CO2.
        </p>
        <p>
          On a farm, fuel combustion might represent only 10&ndash;20% of your total Scope 1. The rest comes from <strong>biological processes</strong> that have no parallel in manufacturing: ruminant digestion producing methane, soil microbes converting nitrogen fertilizer into nitrous oxide, and manure decomposing under anaerobic conditions.
        </p>
        <p>
          These biological emissions involve different greenhouse gases&mdash;methane (CH4) and nitrous oxide (N2O)&mdash;that are dramatically more potent than CO2. Methane traps 28 times more heat than CO2 over a 100-year period. Nitrous oxide traps 265 times more. A relatively small quantity of N2O from fertilizer application can represent a larger carbon footprint in CO2 equivalent terms than all the diesel your tractors burn in a year.
        </p>
        <p>
          This is the first thing any farmer needs to understand about carbon accounting: <strong>your emission profile looks nothing like a manufacturer&apos;s</strong>, and the standard industrial guidance will miss most of what matters on your operation.
        </p>

        <h2>Scope 1: Direct Emissions from Your Farm</h2>
        <p>
          Scope 1 covers everything emitted directly from sources you own or control. For agricultural operations, this is where most of the complexity&mdash;and most of the emissions&mdash;sit.
        </p>

        <h3>Enteric Fermentation (Livestock Methane)</h3>
        <p>
          For any operation with ruminant animals&mdash;dairy cows, beef cattle, sheep, goats&mdash;enteric fermentation is typically the single largest emission source. Ruminants produce methane as a natural byproduct of digestion. The methane is released primarily through belching (not flatulence, despite the popular image).
        </p>
        <p>
          On a ruminant farm, enteric fermentation commonly accounts for <strong>50&ndash;70% of total Scope 1 emissions</strong>. This is not something you can eliminate through efficiency improvements. It&apos;s inherent to keeping ruminant livestock. You can influence it through feed composition, breeding, and management practices, but it will always be a significant line item.
        </p>
        <p>
          The IPCC provides default emission factors by livestock type and region. For a European dairy cow, the Tier 1 default is approximately 128 kg CH4 per head per year. For beef cattle on pasture, it&apos;s roughly 57 kg CH4 per head per year. For sheep, approximately 8 kg per head per year.
        </p>

        <h3>Agricultural Soils (Fertilizer N2O)</h3>
        <p>
          When nitrogen is applied to soil&mdash;whether as synthetic fertilizer, organic manure, or crop residues&mdash;soil microbes convert a portion into nitrous oxide through nitrification and denitrification. Given N2O&apos;s potency at 265 times CO2, even small percentage losses create significant emissions.
        </p>
        <p>
          The IPCC default emission factor is that approximately 1% of applied nitrogen is emitted as N2O directly, with additional indirect emissions from leaching and volatilization. Apply 100 tonnes of ammonium nitrate (34.5% N) and you&apos;re looking at roughly 34.5 tonnes of nitrogen applied, producing approximately 0.54 tonnes of N2O, which equals roughly <strong>143 tonnes of CO2e</strong>.
        </p>
        <p>
          For arable farms without livestock, fertilizer N2O is often the dominant Scope 1 source.
        </p>

        <h3>Manure Management</h3>
        <p>
          How manure is stored and handled determines its emission profile. Liquid slurry systems stored in covered or uncovered tanks produce methane through anaerobic decomposition. Solid manure heaps produce both methane and nitrous oxide. Manure spread directly on pasture by grazing animals produces primarily N2O.
        </p>
        <p>
          The emission factor depends heavily on your storage system, climate, and duration of storage. This is one area where management changes can meaningfully reduce emissions&mdash;covered slurry stores, shorter storage periods, and anaerobic digestion all affect the calculation.
        </p>

        <h3>On-Farm Fuel Combustion</h3>
        <p>
          This is the emission source that most closely resembles industrial Scope 1: diesel for tractors, harvesters, loaders, and other machinery. Petrol for smaller equipment. Heating oil or gas for livestock barns, greenhouses, grain dryers, and farm buildings. Propane or LPG for crop drying or weed burning.
        </p>
        <p>
          While fuel is the most straightforward source to measure and calculate&mdash;litres multiplied by a published emission factor&mdash;it&apos;s important to recognize that on many farms, especially livestock operations, fuel is a relatively small fraction of total Scope 1.
        </p>

        <h3>Liming and Urea Application</h3>
        <p>
          Agricultural lime (calcium carbonate) applied to correct soil pH releases CO2 when it reacts with soil acids. Urea fertilizer releases CO2 during hydrolysis in the soil. These are smaller sources but should not be overlooked&mdash;a farm applying 200 tonnes of limestone per year is adding roughly 88 tonnes of CO2 from this source alone.
        </p>
      </article>

      {/* Mid-article Newsletter */}
      <div className="my-12">
        <NewsletterSignup />
      </div>

      {/* Continue article */}
      <article className="prose prose-gray max-w-none">
        <h2>Scope 2: Purchased Electricity</h2>
        <p>
          Scope 2 is the simplest category for most farms. It covers indirect emissions from purchased electricity&mdash;the carbon footprint of generating the power you draw from the grid.
        </p>
        <p>
          For agricultural operations, electricity powers:
        </p>
        <ul>
          <li><strong>Milking parlors</strong> &mdash; vacuum pumps, cooling tanks, washing systems</li>
          <li><strong>Grain drying and storage</strong> &mdash; fans, heaters, monitoring systems</li>
          <li><strong>Cold storage</strong> &mdash; refrigeration for dairy, produce, meat</li>
          <li><strong>Irrigation pumps</strong> &mdash; particularly significant for horticultural and arable operations</li>
          <li><strong>Livestock housing</strong> &mdash; ventilation, lighting, automated feeding</li>
          <li><strong>Farm buildings</strong> &mdash; office, workshop, residential</li>
        </ul>
        <p>
          Calculation is straightforward: total kWh consumed (from your electricity bills) multiplied by your national grid emission factor. In the EU, grid factors vary significantly by country&mdash;from roughly 0.05 kg CO2e/kWh in France (nuclear-heavy) to 0.4 kg CO2e/kWh or higher in Poland (coal-heavy). Using the correct national factor matters.
        </p>
        <p>
          If you have on-farm solar panels or wind turbines, the electricity they generate and you consume on-site has a Scope 2 factor of zero. Electricity exported to the grid is not counted in your footprint (though it may generate carbon credits or offsets depending on your jurisdiction).
        </p>
        <p>
          For most farms, Scope 2 is a relatively small proportion of total emissions&mdash;typically 3&ndash;10%. But it&apos;s often the easiest to reduce through renewable energy investments, making it an attractive early target.
        </p>

        <h2>Scope 3: Your Upstream and Downstream Value Chain</h2>
        <p>
          Scope 3 is everything else&mdash;the emissions embedded in what you buy and what happens to your products after they leave the farm gate. For most farms responding to buyer questionnaires, <strong>Scope 3 is not what&apos;s being asked for</strong>. Your buyer is typically asking for your Scope 1 and 2 data because your farm&apos;s operations fall within <em>their</em> Scope 3.
        </p>
        <p>
          That said, understanding your own Scope 3 gives you the complete picture.
        </p>

        <h3>Upstream Scope 3 (What You Buy)</h3>
        <ul>
          <li><strong>Fertilizer manufacturing</strong> &mdash; producing synthetic nitrogen fertilizer is extremely energy-intensive. The embedded emissions in the fertilizer you purchase can rival the N2O released when you apply it.</li>
          <li><strong>Animal feed production</strong> &mdash; for livestock farms buying concentrates, the land use, transport, and processing of feed ingredients (soya, cereals, palm kernel) carry significant embedded carbon.</li>
          <li><strong>Seed and crop protection products</strong> &mdash; manufacturing pesticides and seed processing have embedded emissions.</li>
          <li><strong>Machinery and equipment</strong> &mdash; the emissions from manufacturing your tractor, harvester, and implements.</li>
          <li><strong>Purchased services</strong> &mdash; contract machinery, veterinary services, transport.</li>
        </ul>

        <h3>Downstream Scope 3 (After Farm Gate)</h3>
        <ul>
          <li><strong>Transport to processor or market</strong> &mdash; haulage from farm to dairy, abattoir, grain merchant, or packhouse.</li>
          <li><strong>Processing</strong> &mdash; pasteurization, milling, slaughtering, packing.</li>
          <li><strong>Packaging</strong> &mdash; materials for consumer-ready products.</li>
          <li><strong>Distribution and retail</strong> &mdash; logistics to store shelves.</li>
          <li><strong>Consumer use and waste</strong> &mdash; refrigeration, cooking, food waste.</li>
        </ul>
        <p>
          For most farm suppliers responding to buyer requests, you should focus on Scope 1 and 2 first. Scope 3 can come later as your reporting matures, and your buyer likely has their own methodology for the downstream portion.
        </p>

        <h2>A Worked Example: 200-Head Dairy Farm</h2>
        <p>
          To make this concrete, here&apos;s what the three scopes look like for a 200-head dairy operation in Western Europe, using IPCC Tier 1 defaults and typical operational data.
        </p>
        <p><strong>Scope 1 &mdash; Direct Emissions:</strong></p>
        <ul>
          <li>Enteric fermentation: 200 dairy cows &times; 128 kg CH4/head/year = 25.6 tonnes CH4 = <strong>~718 tonnes CO2e</strong></li>
          <li>Fertilizer N2O: 80 tonnes synthetic N applied &times; ~6.2 kg CO2e/kg N (direct + indirect) = <strong>~496 tonnes CO2e</strong></li>
          <li>Manure management: estimated at <strong>~120 tonnes CO2e</strong> (depends on storage system)</li>
          <li>On-farm diesel: 50,000 litres &times; 2.7 kg CO2e/litre = <strong>~135 tonnes CO2e</strong></li>
          <li>Heating and liming: estimated at <strong>~45 tonnes CO2e</strong></li>
          <li><em>Scope 1 total: approximately 1,514 tonnes CO2e</em></li>
        </ul>
        <p><strong>Scope 2 &mdash; Purchased Electricity:</strong></p>
        <ul>
          <li>120,000 kWh &times; 0.4 kg CO2e/kWh (EU average) = <strong>~48 tonnes CO2e</strong></li>
        </ul>
        <p><strong>Scope 3 &mdash; Value Chain (Upstream Only):</strong></p>
        <ul>
          <li>Fertilizer manufacturing: ~80 tonnes product &times; embedded carbon = <strong>~280 tonnes CO2e</strong></li>
          <li>Purchased feed: ~400 tonnes concentrates = <strong>~200 tonnes CO2e</strong></li>
          <li>Other inputs and services: estimated at <strong>~60 tonnes CO2e</strong></li>
          <li><em>Scope 3 upstream estimate: approximately 540 tonnes CO2e</em></li>
        </ul>
        <p>
          <strong>The key takeaway:</strong> enteric fermentation alone&mdash;one biological process&mdash;accounts for roughly 34% of this farm&apos;s total footprint across all scopes. Fuel combustion, the focus of most industrial carbon accounting, represents about 6%. If you approach agricultural carbon accounting with an industrial mindset, you&apos;ll miss the majority of what matters.
        </p>

        <h2>What This Means for Your Buyer Response</h2>
        <p>
          When your buyer asks for emission data, they typically need your Scope 1 and Scope 2 figures. For most agricultural suppliers, this means gathering four categories of data:
        </p>
        <ul>
          <li><strong>Livestock numbers</strong> by type and category (for enteric fermentation and manure)</li>
          <li><strong>Nitrogen applied</strong> by source&mdash;synthetic fertilizer, organic manure, crop residues (for soil N2O)</li>
          <li><strong>Fuel consumption</strong> in litres by type&mdash;diesel, petrol, heating oil, LPG (for combustion CO2)</li>
          <li><strong>Electricity consumption</strong> in kWh from your utility bills (for Scope 2)</li>
        </ul>
        <p>
          If you can provide these four data points with documented sources, you have the foundation for a credible emission calculation. Your buyer may apply the emission factors themselves, or they may ask you to calculate using standard IPCC Tier 1 methodology.
        </p>
        <p>
          The important thing is not precision&mdash;it&apos;s completeness. A farm that reports only diesel and electricity (the easy bits) while omitting livestock methane and fertilizer N2O is dramatically understating its footprint. An honest, complete estimate using default factors is far more useful than a precise calculation that ignores the biggest sources.
        </p>

        <h2>Moving Beyond Defaults</h2>
        <p>
          IPCC Tier 1 defaults are a legitimate starting point, but they represent regional averages. As your carbon accounting matures, you can move to Tier 2 (country-specific factors) and eventually Tier 3 (farm-specific calculations based on your actual management practices, feed rations, and soil conditions).
        </p>
        <p>
          Higher tiers generally produce lower emission estimates for well-managed farms, because default factors are intentionally conservative. A dairy farm with optimized feed rations producing less methane per litre of milk than average benefits from a Tier 2 or 3 approach that reflects their actual performance.
        </p>
        <p>
          But start with Tier 1. Get the complete picture first. Refine accuracy later. The biggest mistake is spending months perfecting your diesel calculation while ignoring the enteric fermentation that dwarfs it.
        </p>
      </article>

      {/* Bottom CTA */}
      <div className="mt-12 p-8 bg-[#3D2E7C] rounded-lg text-white">
        <h3 className="text-2xl font-bold mb-3">
          Ready to map your farm&apos;s emission profile?
        </h3>
        <p className="text-white/80 mb-6">
          Understanding your scopes is the first step. Stack 1 of the Five Stacks Framework helps you turn raw activity data&mdash;livestock numbers, fertilizer records, fuel invoices&mdash;into defensible emission figures that satisfy buyer requests.
        </p>
        <Link
          href="/framework/stack-1-metrics"
          className="inline-block bg-white text-[#3D2E7C] px-6 py-3 rounded font-semibold hover:bg-gray-100 transition-colors"
        >
          Get Started with Stack 1 &rarr;
        </Link>
      </div>

      {/* Further Reading */}
      <div className="mt-12 pt-8 border-t border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">
          Further Reading
        </h3>
        <div className="space-y-3">
          <Link
            href="/articles/buyer-scope-3-request"
            className="block p-4 border border-gray-200 rounded-lg hover:border-[#3D2E7C] transition-colors"
          >
            <span className="font-medium text-gray-900">
              Your Buyer Sent a Scope 3 Request &mdash; Now What? &rarr;
            </span>
            <span className="block text-sm text-gray-600">
              What agricultural suppliers actually need to provide when carbon data is requested
            </span>
          </Link>
          <Link
            href="/articles/building-baseline"
            className="block p-4 border border-gray-200 rounded-lg hover:border-[#3D2E7C] transition-colors"
          >
            <span className="font-medium text-gray-900">
              From Gut Feel to Data Defense: Building Your Operational Baseline &rarr;
            </span>
            <span className="block text-sm text-gray-600">
              The 90-day approach to audit-defensible data using what you already have
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}
