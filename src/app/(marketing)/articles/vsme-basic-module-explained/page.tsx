import Link from "next/link";
import NewsletterSignup from "@/components/marketing/NewsletterSignup";

export const metadata = {
  title: "VSME Basic Module: The Minimum Your Buyers Will Ask For",
  description:
    "A walkthrough of every datapoint in the VSME Basic Module and where to find it on your farm. Energy, emissions, workforce, water, waste, and biodiversity.",
  keywords: ["VSME", "VSME Basic Module", "CSRD", "ESG", "sustainability reporting", "agricultural compliance", "agriculture", "sustainability"],
};

export default function ArticlePage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      {/* Navigation */}
      <nav className="mb-8">
        <Link href="/articles/vsme-guide" className="group flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-[#4AA88C] transition-colors">
          <span className="group-hover:-translate-x-1 transition-transform">←</span> The Complete VSME Guide for Agricultural SMEs
        </Link>
      </nav>

      {/* Header */}
      <header className="mb-12">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          VSME Basic Module: The Minimum Your Buyers Will Ask For
        </h1>
        <p className="text-xl text-gray-600">
          The Basic Module is the entry point to VSME reporting. It covers the core datapoints your buyers need for their own CSRD obligations. Here is every requirement, where to find the data on your farm, and what good enough looks like.
        </p>
      </header>

      {/* Article Content */}
      <article className="prose prose-gray max-w-none">
        <p>
          When your buyer references VSME, they almost certainly mean the Basic Module. It is the minimum dataset that allows a CSRD-obligated company to report on their supply chain. Think of it as the floor, the least you will be asked for, not the most.
        </p>
        <p>
          The good news: the Basic Module is designed to be achievable. It does not ask for lifecycle assessments, product-level carbon footprints, or Scope 3 breakdowns. It asks for operational data that most well-run agricultural operations already have, just not in a standardized format.
        </p>

        <h2>Energy Consumption</h2>
        <p>
          <strong>What VSME asks for:</strong> Total energy consumption in MWh, broken down by source.
        </p>
        <p>
          <strong>Where to find it on your farm:</strong>
        </p>
        <ul>
          <li><strong>Electricity</strong>, utility bills give you kWh directly. Convert to MWh by dividing by 1,000</li>
          <li><strong>Diesel</strong>, fuel invoices or tank delivery records. Liters convert to MWh using standard factors (1 litre diesel &asymp; 0.0101 MWh)</li>
          <li><strong>Gas</strong>, utility bills in kWh or m&sup3;. If in m&sup3;, multiply by the calorific value on your bill</li>
          <li><strong>Heating oil</strong>, delivery invoices. Liters convert using standard factors (1 litre kerosene &asymp; 0.0103 MWh)</li>
          <li><strong>Renewables</strong>, if you have solar panels, a wind turbine, or biomass heating, include generation data from inverter readings or meter exports</li>
        </ul>
        <p>
          <strong>What good enough looks like:</strong> Annual totals by source, derived from invoices. You do not need real-time monitoring. Twelve months of bills compiled into a table is sufficient for VSME Basic.
        </p>
        <p>
          <strong>Common gap:</strong> Red diesel used across multiple enterprises (farm, contracting, landlord obligations). If you cannot split consumption by use, report the total and note the estimation methodology.
        </p>

        <h2>Greenhouse Gas Emissions</h2>
        <p>
          <strong>What VSME asks for:</strong> Scope 1 and Scope 2 emissions in tonnes CO2 equivalent.
        </p>
        <p>
          <strong>How to calculate for a farm:</strong>
        </p>
        <ul>
          <li><strong>Scope 1</strong>, direct emissions from your operation:
            <ul>
              <li>Fuel combustion (diesel, gas, oil), multiply liters by DEFRA/IPCC emission factors</li>
              <li>Livestock methane (enteric fermentation), multiply headcount by species-specific factors</li>
              <li>Manure management emissions, from livestock housing and storage systems</li>
              <li>Fertilizer N2O, multiply kg nitrogen applied by default emission factor (typically 0.01 kg N2O-N per kg N)</li>
              <li>Liming, if you apply lime, multiply tonnes by emission factor for CaCO3 or dolomite</li>
            </ul>
          </li>
          <li><strong>Scope 2</strong>, purchased electricity emissions. Multiply kWh by your grid&apos;s emission factor (location-based) or your supplier&apos;s specific factor (market-based)</li>
        </ul>
        <p>
          <strong>What good enough looks like:</strong> IPCC Tier 1 calculations using default emission factors. No one expects farm-level direct measurement of methane. Standard factors applied consistently to your activity data is the accepted methodology.
        </p>
        <p>
          <strong>Common gap:</strong> Many operations have energy data but have never converted it to CO2e. The calculation is mechanical, once you have energy data, emissions follow from a multiplication table. The <Link href="/tools/energy-calculator">Energy ROI Calculator</Link> does this conversion in your browser, with no signup required.
        </p>

        <h2>Workforce Metrics</h2>
        <p>
          <strong>What VSME asks for:</strong> Headcount, gender breakdown, health and safety data, training.
        </p>
        <p>
          <strong>Where to find it on your farm:</strong>
        </p>
        <ul>
          <li><strong>Headcount</strong>, payroll records. Report total employees and FTE (full-time equivalent) to account for part-time and seasonal workers</li>
          <li><strong>Gender split</strong>, from HR records or payroll. Percentage male/female across the workforce</li>
          <li><strong>Health and safety</strong>, accident book entries, RIDDOR reports, near-miss logs. Report lost-time injuries, recordable incidents, and fatalities (hopefully zero)</li>
          <li><strong>Training</strong>, training records, certificates. Total hours or days of training delivered. For farms, this includes sprayer certification (PA1/PA2/PA6), chainsaw competence, first aid, manual handling, telehandler operation</li>
        </ul>
        <p>
          <strong>What good enough looks like:</strong> Annual snapshot numbers. You do not need a sophisticated HR system. A spreadsheet with headcount by month, a safety record, and a training log covers the Basic Module requirement.
        </p>
        <p>
          <strong>Common gap:</strong> Seasonal workers. If you employ harvest labor, contract gangs, or agency workers, document how you count them. FTE normalizes this, a worker employed for 3 months equals 0.25 FTE.
        </p>

        <h2>Water</h2>
        <p>
          <strong>What VSME asks for:</strong> Total water withdrawal by source.
        </p>
        <p>
          <strong>Where to find it on your farm:</strong>
        </p>
        <ul>
          <li><strong>Mains water</strong>, utility bills give you m&sup3; directly</li>
          <li><strong>Borehole/groundwater</strong>, abstraction license records or meter readings. If unmetered, document your estimation method</li>
          <li><strong>Surface water</strong>, abstraction records where applicable</li>
          <li><strong>Rainwater harvesting</strong>, estimated from collection system capacity and rainfall data if not metered</li>
          <li><strong>Irrigation</strong>, this is often the largest water use on farm. Metered volumes, or calculated from application rates and areas irrigated</li>
        </ul>
        <p>
          <strong>What good enough looks like:</strong> Annual totals by source. For irrigated operations, break out irrigation separately as buyers particularly care about agricultural water use.
        </p>
        <p>
          <strong>Common gap:</strong> Unmetered borehole use. If you abstract groundwater without a meter, install one. In the interim, document your estimation methodology (pump capacity &times; running hours is the standard approach).
        </p>

        <h2>Waste</h2>
        <p>
          <strong>What VSME asks for:</strong> Total waste generated by type and destination.
        </p>
        <p>
          <strong>Where to find it on your farm:</strong>
        </p>
        <ul>
          <li><strong>General waste</strong>, skip hire invoices, waste collection records. Tonnes or m&sup3; to landfill</li>
          <li><strong>Recycling</strong>, farm plastics collection (crop covers, silage wrap, fertilizer bags), metal recycling, cardboard</li>
          <li><strong>Hazardous waste</strong>, agrochemical containers, waste oils, veterinary waste. Waste transfer notes are your source</li>
          <li><strong>Organic waste</strong>, crop residues, animal bedding, food processing waste. Note: material that stays on farm (straw incorporated, manure spread) is not waste in the reporting sense</li>
        </ul>
        <p>
          <strong>What good enough looks like:</strong> Annual totals by category and destination. Waste transfer notes provide most of this. Farm plastic recycling schemes (like the UK&apos;s farm plastics collection) give you documented recycling volumes.
        </p>

        <h2>Biodiversity</h2>
        <p>
          <strong>What VSME asks for:</strong> Basic information about land use, proximity to sensitive areas, and habitat features.
        </p>
        <p>
          <strong>Where to find it on your farm:</strong>
        </p>
        <ul>
          <li><strong>Land use breakdown</strong>, total hectares by type (arable, permanent pasture, temporary grass, woodland, set-aside, buildings/yards)</li>
          <li><strong>Sensitive areas</strong>, check whether any of your land is near or within a Natura 2000 site, SSSI, or other protected designation. Your national environmental agency&apos;s mapping tool shows this</li>
          <li><strong>Habitat features</strong>, hedgerow length, ponds, field margins, buffer strips, woodland. Environmental stewardship records or agri-environment scheme maps are your source</li>
        </ul>
        <p>
          <strong>What good enough looks like:</strong> A land use table and a statement about proximity to protected sites. You do not need a full <Link href="/articles/biodiversity-assessment-farms">biodiversity assessment</Link> for the Basic Module, just factual descriptions of what habitats exist on your land.
        </p>
              <h2>Putting It Together</h2>
        <p>
          The Basic Module is a structured collection of data you largely already possess. The work is not generating new information, it is organizing existing records into a consistent format. A farm that tracks energy, keeps safety records, holds spray logs, and has filed environmental stewardship applications is already 70-80% of the way there.
        </p>
        <p>
          The remaining 20-30% is typically:
        </p>
        <ul>
          <li>Converting energy data to emissions using standard factors</li>
          <li>Normalising workforce data into FTE and annual totals</li>
          <li>Structuring water data by source rather than total</li>
          <li>Compiling habitat features into a single document</li>
        </ul>
        <p>
          This is a structuring exercise, not a data collection exercise. The difference matters because it determines how long preparation takes. Farms that recognise this are VSME-ready in weeks, not months.
        </p>

        <h2>What Comes After Basic</h2>
        <p>
          Once your buyer sees that you can provide Basic Module data reliably, they may progress to requesting <Link href="/articles/vsme-guide">Narrative-PAT</Link> data, your policies, the actions you have taken, and your targets. This is less about data collection and more about documentation. The practices exist; the task is writing them down.
        </p>
        <p>
          The sequence matters: build your data first (Basic), then document your approach (PAT). Trying to write policies before you have data to back them up produces empty statements. Data-backed policies are credible. Data-free policies are marketing.
        </p>
      </article>

      {/* Newsletter (D-021 mid-2) */}
      <div className="mt-12">
        <NewsletterSignup />
      </div>


      <div className="mt-12 pt-8 border-t border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Further Reading</h3>
        <div className="space-y-3">
          <Link href="/articles/vsme-guide" className="block p-4 border border-gray-200 rounded-lg hover:border-[#3D2E7C] transition-colors">
            <span className="font-medium text-gray-900">The Complete VSME Guide for Agricultural SMEs &rarr;</span>
            <span className="block text-sm text-gray-600">All three modules explained with the full context</span>
          </Link>
          <Link href="/articles/vsme-vs-full-esrs" className="block p-4 border border-gray-200 rounded-lg hover:border-[#3D2E7C] transition-colors">
            <span className="font-medium text-gray-900">VSME vs Full ESRS: What SMEs Actually Need to Report &rarr;</span>
            <span className="block text-sm text-gray-600">Side-by-side comparison so you know exactly what you can skip</span>
          </Link>
          <Link href="/articles/building-baseline" className="block p-4 border border-gray-200 rounded-lg hover:border-[#3D2E7C] transition-colors">
            <span className="font-medium text-gray-900">Building Your Operational Baseline &rarr;</span>
            <span className="block text-sm text-gray-600">From gut feel to audit-defensible data in 90 days</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
