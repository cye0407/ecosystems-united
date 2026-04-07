import Link from "next/link";
import NewsletterSignup from "@/components/marketing/NewsletterSignup";

export const metadata = {
  title: "The Complete VSME Guide for Agricultural SMEs",
  description:
    "Everything agricultural SMEs need to know about the VSME standard — the three modules, which datapoints matter for farms, and how to get VSME-ready without consultants.",
  keywords: ["VSME", "CSRD", "ESG", "sustainability reporting", "agricultural compliance", "SME reporting", "EFRAG", "agriculture", "sustainability"],
};

export default function VSMEGuidePage() {
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
          <div className="w-8 h-8 rounded-full bg-[#3D2E7C] text-white flex items-center justify-center font-bold text-sm">1</div>
          <span className="text-sm text-gray-500">Stack 1: Core Metrics</span>
        </div>
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          The Complete VSME Guide for Agricultural SMEs
        </h1>
        <p className="text-xl text-gray-600">
          Your buyer is reporting under CSRD. They need your data. The VSME standard tells you exactly what to provide, without the complexity of full ESRS. Here&apos;s how it works and what it means for your operation.
        </p>
      </header>

      {/* Article Content */}
      <article className="prose prose-gray max-w-none">
        <p>
          The Voluntary Standard for SMEs, VSME, is EFRAG&apos;s answer to a simple problem: CSRD requires large companies to collect sustainability data from their supply chains, but the full European Sustainability Reporting Standards (ESRS) are disproportionate for small operations. A 15-person farm does not need the same reporting framework as Nestl&eacute;.
        </p>
        <p>
          VSME strips ESRS down to the datapoints that actually matter for SMEs in the value chain. It is the standard your buyers will increasingly reference when they send data requests. Understanding it now means you respond efficiently later, instead of scrambling with every new questionnaire.
        </p>

        <h2>Why VSME Exists</h2>
        <p>
          CSRD obligates approximately 50,000 European companies to report sustainability data across their entire value chain. When Carrefour, Lidl, or Danone report their Scope 3 emissions, they need numbers from every supplier, including farms.
        </p>
        <p>
          But asking a 200-hectare arable farm to complete full ESRS reporting is absurd. Full ESRS has over 1,100 datapoints across 12 topical standards. VSME condenses this into a proportionate framework with three modules, each progressively more detailed.
        </p>
        <p>
          The word &ldquo;voluntary&rdquo; is misleading. VSME is voluntary in the regulatory sense, no authority will fine you for not reporting. But when your buyer adopts VSME as their supply chain data framework, it becomes as voluntary as meeting any other buyer specification. You can decline, and they can find another supplier.
        </p>

        <h2>The Three VSME Modules</h2>
        <p>
          VSME is structured as three progressive modules. Most agricultural suppliers will be asked for the Basic Module initially, with some buyers moving to the Narrative-PAT module as their own reporting matures.
        </p>

        <h3>Module 1: Basic Module</h3>
        <p>
          The minimum viable dataset. This is what most buyers will request first. It covers:
        </p>
        <ul>
          <li><strong>Energy consumption</strong>, total energy in MWh, broken down by source (electricity, diesel, gas, renewables)</li>
          <li><strong>Greenhouse gas emissions</strong>, Scope 1 and Scope 2, in tonnes CO2e. For farms, this includes livestock methane, fertilizer N2O, and fuel combustion</li>
          <li><strong>Workforce basics</strong>, headcount, gender split, health and safety incidents, training hours</li>
          <li><strong>Water</strong>, total withdrawal by source (mains, borehole, surface water, rainwater)</li>
          <li><strong>Waste</strong>, total waste by type and destination (recycling, landfill, composting)</li>
          <li><strong>Biodiversity</strong>, sites near sensitive areas, land use types, habitat features</li>
        </ul>
        <p>
          For agricultural operations, the Basic Module aligns closely with what you already track for farm assurance audits, agri-environment schemes, and existing buyer questionnaires. The data is not new. The structure is.
        </p>

        <h3>Module 2: Narrative-PAT (Policies, Actions, Targets)</h3>
        <p>
          The PAT module asks you to go beyond numbers and document:
        </p>
        <ul>
          <li><strong>Policies</strong>, what written policies guide your environmental, social, and governance practices</li>
          <li><strong>Actions</strong>, what specific measures you have taken (e.g., reduced diesel use by switching to GPS guidance, installed rainwater harvesting, implemented seasonal worker accommodation standards)</li>
          <li><strong>Targets</strong>, where you are heading (e.g., 10% energy reduction by 2027, maintain soil organic matter above 4%)</li>
        </ul>
        <p>
          This is where many farm operations stall, not because they lack practices, but because those practices are not documented. A farm that has rotated crops for twenty years but never written it down as a soil health policy has a documentation gap, not a practice gap.
        </p>

        <h3>Module 3: Business Partners Module</h3>
        <p>
          The most detailed module, designed for SMEs with significant supply chain data requests. It adds:
        </p>
        <ul>
          <li>Detailed emissions breakdowns including Scope 3 categories</li>
          <li>Product-level carbon footprint data</li>
          <li>Due diligence on your own supply chain (feed suppliers, input providers)</li>
          <li>Detailed social metrics including living wage analysis and community impacts</li>
        </ul>
        <p>
          Most agricultural SMEs will not need the Business Partners module in the near term. If your buyer requests it, they are likely a very large operation with advanced sustainability reporting. Start with Basic, build toward PAT, and treat Module 3 as a future horizon.
        </p>

        <h2>VSME Datapoints That Matter Most for Farms</h2>
        <p>
          Not all VSME datapoints carry equal weight for agricultural operations. Based on what buyers actually request from farm suppliers, these are the high-priority areas:
        </p>

        <h3>Energy and Emissions</h3>
        <p>
          This is the single most requested category. Buyers need your energy data to calculate their Scope 3 emissions. For farms, this means:
        </p>
        <ul>
          <li>Diesel consumption (liters and cost, the biggest line item for most arable operations)</li>
          <li>Electricity consumption (kWh by source, including any on-site generation)</li>
          <li>Heating fuel (gas, oil, biomass)</li>
          <li>Livestock emissions (enteric methane, manure management, calculated from headcount using IPCC factors)</li>
          <li>Fertilizer emissions (N2O from nitrogen applications, calculated from kg N applied)</li>
        </ul>
        <p>
          Most of this comes from invoices and application records you already keep. The calculation methodology uses standard emission factors, not direct measurement. The <Link href="/tools/energy-calculator">Energy ROI Calculator</Link> handles the conversion from fuel and electricity inputs to emissions for you.
        </p>

        <h3>Land Use and Biodiversity</h3>
        <p>
          Agriculture is unique in VSME because land use is highly material. Unlike a manufacturer who occupies a warehouse, your operation directly manages ecosystems. Buyers increasingly care about:
        </p>
        <ul>
          <li>Total land area and use types (arable, pasture, woodland, set-aside)</li>
          <li>Proximity to protected areas or Natura 2000 sites</li>
          <li>Habitat features (hedgerows, ponds, field margins, buffer strips)</li>
          <li>Soil management practices (tillage regime, cover cropping, rotation)</li>
        </ul>

        <h3>Workforce</h3>
        <p>
          Social metrics are often underestimated by agricultural operations. VSME asks for:
        </p>
        <ul>
          <li>Total headcount (permanent and seasonal, FTE equivalent)</li>
          <li>Health and safety incidents (reportable accidents, near misses, lost-time injuries)</li>
          <li>Training hours (sprayer certification, machinery competence, first aid, manual handling)</li>
          <li>Working conditions (seasonal worker accommodation where applicable)</li>
        </ul>
        <p>
          If you hold <Link href="/articles/globalg-a-p-grasp-worker-welfare">GlobalG.A.P. GRASP</Link>, you already collect most of this data. VSME and GRASP overlap significantly on social metrics.
        </p>

        <h3>Materials and Inputs</h3>
        <p>
          What goes into your operation:
        </p>
        <ul>
          <li>Fertilizer (kg of N, P, K applied, product types, organic vs. synthetic)</li>
          <li>Crop protection products (active ingredients, application rates)</li>
          <li>Animal feed (tonnes, sources, any certification status)</li>
          <li>Packaging materials (for operations that pack on-farm)</li>
        </ul>
      </article>

      <div className="my-12">
        <NewsletterSignup />
      </div>

      <article className="prose prose-gray max-w-none">
        <h2>How VSME Connects to Standards You Already Know</h2>
        <p>
          VSME does not exist in isolation. If you already comply with farm assurance schemes, certification standards, or environmental regulations, you have significant overlap:
        </p>
        <ul>
          <li><strong><Link href="/articles/globalg-a-p-certification-what-sme-farms-need">GlobalG.A.P. IFA</Link></strong>, covers food safety, traceability, environmental management, and worker welfare. The IFA checklist and VSME share approximately 60-70% of the same underlying data</li>
          <li><strong><Link href="/articles/globalg-a-p-grasp-worker-welfare">GlobalG.A.P. GRASP</Link></strong>, the social practice add-on maps directly to VSME workforce metrics</li>
          <li><strong><Link href="/articles/ecolabel-guide">EU Organic</Link></strong>, organic certification records cover input restrictions, land management, and biodiversity requirements that feed VSME</li>
          <li><strong>Agri-environment schemes</strong>, AECM, stewardship, and similar programs require habitat data, soil management records, and environmental metrics that align with VSME biodiversity requirements</li>
          <li><strong><Link href="/articles/csrd-esg-guide">Full ESRS</Link></strong>, VSME is a simplified subset. If you prepare for VSME, scaling to full ESRS later is incremental, not a restart</li>
        </ul>
        <p>
          This is the core principle: <strong>the underlying data is the same regardless of which standard asks for it</strong>. Energy is energy. Emissions are emissions. Workforce metrics are workforce metrics. What changes between standards is scope, granularity, and format, not the raw operational data.
        </p>
        <p>
          An agricultural operation with well-structured baseline data can respond to VSME, complete a GlobalG.A.P. audit, answer a buyer ESG questionnaire, and prepare for full ESRS, all from the same data infrastructure. The farms that build this infrastructure once gain advantage over those that scramble separately for each request.
        </p>

        <h2>Getting VSME-Ready: A Practical Sequence</h2>
        <p>
          Do not try to complete all VSME modules at once. Follow this sequence:
        </p>
        <ol>
          <li><strong>Collect your energy and fuel data</strong>, utility bills, fuel invoices, meter readings. This covers the most-requested datapoint and gives you emissions calculations immediately</li>
          <li><strong>Document your land use</strong>, field areas, use types, habitat features. You likely have this from farm maps, Basic Payment Scheme applications, or environmental stewardship records</li>
          <li><strong>Compile workforce basics</strong>, headcount, FTE, safety records, training logs. HR records and farm assurance documentation cover most of this</li>
          <li><strong>Gather input records</strong>, fertilizer applications, crop protection records, feed purchases. Spray logs and agronomist records are your source</li>
          <li><strong>Calculate emissions</strong>, apply IPCC Tier 1 emission factors to your energy, fuel, livestock, and fertilizer data. Standard methodology, not bespoke science</li>
          <li><strong>Write your policies</strong>, document what you already do. Environmental management, worker safety, chemical handling. Even a two-page policy is infinitely better than nothing</li>
          <li><strong>Set realistic targets</strong>, 10% diesel reduction, maintain soil organic matter, zero lost-time incidents. Targets should be achievable and measurable</li>
        </ol>
        <p>
          Steps 1-5 give you the <Link href="/articles/vsme-basic-module-explained">Basic Module</Link>. Steps 6-7 move you into <Link href="/articles/vsme-basic-module-explained">Narrative-PAT territory</Link>. The entire process builds on data you largely already possess, it just needs to be structured. The <Link href="/tools/metrics-assessment">Metrics Assessment</Link> is a 5-minute way to see how ready your operation already is.
        </p>

        <h2>Timeline: When Will Your Buyer Ask?</h2>
        <p>
          Large EU companies began CSRD reporting in 2025. Their supply chain data collection is ramping up now. The timeline for farm suppliers:
        </p>
        <ul>
          <li><strong>Now&ndash;2026</strong>, large food retailers and processors are sending initial data requests. These may not reference VSME by name, but the datapoints requested will increasingly align with it</li>
          <li><strong>2026&ndash;2027</strong>, VSME becomes the standard reference framework for supply chain data collection. Buyers shift from ad-hoc questionnaires to structured VSME-aligned templates</li>
          <li><strong>2028+</strong>, listed SMEs begin their own CSRD reporting. Agricultural cooperatives and larger farm groups may report directly</li>
        </ul>
        <p>
          The earlier you structure your data, the less reactive you need to be when requests arrive. Preparation costs less than scrambling.
        </p>

        <h2>The Strategic View</h2>
        <p>
          VSME is not an isolated EU requirement. It is one expression of a global convergence toward standardized sustainability data from supply chains. The ISSB, GRI, CDP, and sector-specific standards are all moving in the same direction. Farms that build robust operational data infrastructure now position themselves for whatever framework comes next.
        </p>
        <p>
          More importantly, the data you collect for VSME has direct operational value. Energy tracking reveals efficiency opportunities. Emissions baselines show where costs can be cut. Workforce metrics highlight training gaps and safety risks. Biodiversity data maps habitat that may qualify for payment-for-ecosystem-services programs.
        </p>
        <p>
          VSME readiness is not a compliance cost. It is the byproduct of measuring what increasingly determines long-term competitiveness: resource efficiency, operational resilience, and market access.
        </p>
      </article>

      <div className="mt-12 p-8 bg-[#3D2E7C] rounded-lg text-white">
        <h3 className="text-2xl font-bold mb-3">Build your VSME-ready baseline</h3>
        <p className="text-white/80 mb-6">
          The Five Stacks Tracker structures your operational data across the same domains VSME asks for, energy, materials, workforce, emissions, land use. Collect once, respond to anything.
        </p>
        <Link href="/signup" className="inline-block bg-white text-[#3D2E7C] px-6 py-3 rounded font-semibold hover:bg-gray-100 transition-colors">
          Start Free &rarr;
        </Link>
      </div>

      <div className="mt-12 pt-8 border-t border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">VSME Deep Dives</h3>
        <div className="space-y-3">
          <Link href="/articles/vsme-basic-module-explained" className="block p-4 border border-gray-200 rounded-lg hover:border-[#3D2E7C] transition-colors">
            <span className="font-medium text-gray-900">VSME Basic Module: The Minimum Your Buyers Will Ask For &rarr;</span>
            <span className="block text-sm text-gray-600">A walkthrough of every datapoint in the Basic Module and where to find it on your farm</span>
          </Link>
          <Link href="/articles/vsme-vs-full-esrs" className="block p-4 border border-gray-200 rounded-lg hover:border-[#3D2E7C] transition-colors">
            <span className="font-medium text-gray-900">VSME vs Full ESRS: What SMEs Actually Need to Report &rarr;</span>
            <span className="block text-sm text-gray-600">Side-by-side comparison so you know exactly what you can skip</span>
          </Link>
          <Link href="/articles/vsme-buyer-questionnaire-response" className="block p-4 border border-gray-200 rounded-lg hover:border-[#3D2E7C] transition-colors">
            <span className="font-medium text-gray-900">Your Buyer Sent a VSME Questionnaire ,  Here&apos;s How to Respond &rarr;</span>
            <span className="block text-sm text-gray-600">From inbox to response in a structured, repeatable workflow</span>
          </Link>
          <Link href="/articles/vsme-five-stacks-mapping" className="block p-4 border border-gray-200 rounded-lg hover:border-[#3D2E7C] transition-colors">
            <span className="font-medium text-gray-900">How the Five Stacks Tracker Maps to VSME Datapoints &rarr;</span>
            <span className="block text-sm text-gray-600">Every VSME requirement matched to the tracker domain that captures it</span>
          </Link>
          <Link href="/articles/csrd-vsme-agricultural-suppliers" className="block p-4 border border-gray-200 rounded-lg hover:border-[#3D2E7C] transition-colors">
            <span className="font-medium text-gray-900">CSRD and VSME: What Agricultural Suppliers Need to Know &rarr;</span>
            <span className="block text-sm text-gray-600">The regulatory context behind VSME and why your buyers are asking</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
