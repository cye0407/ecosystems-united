import Link from "next/link";
import BaselineCTA from "@/components/marketing/BaselineCTA";

export const metadata = {
  title: "How the Five Stacks Tracker Maps to VSME Datapoints",
  description:
    "Every VSME requirement matched to the Five Stacks Tracker domain that captures it. See how one data system covers VSME, ESRS, GlobalG.A.P., and buyer questionnaires.",
  keywords: ["VSME", "Five Stacks", "tracker", "CSRD", "ESG", "sustainability reporting", "data mapping", "agricultural compliance", "agriculture", "sustainability"],
};

export default function ArticlePage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      {/* Navigation */}
      <nav className="mb-8">
        <Link href="/articles/vsme-guide" className="group flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-[#4AA88C] transition-colors">
          <span className="group-hover:-translate-x-1 transition-transform">&larr;</span> Back to VSME Guide
        </Link>
      </nav>

      {/* Header */}
      <header className="mb-12">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-8 h-8 rounded-full bg-[#3D2E7C] text-white flex items-center justify-center font-bold text-sm">1</div>
          <span className="text-sm text-gray-500">Stack 1: Core Metrics</span>
        </div>
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          How the Five Stacks Tracker Maps to VSME Datapoints
        </h1>
        <p className="text-xl text-gray-600">
          You track your operational data in eight domains. VSME asks for sustainability data across six categories. Here is exactly where they overlap, and why one data system covers multiple standards.
        </p>
      </header>

      {/* Article Content */}
      <article className="prose prose-gray max-w-none">
        <p>
          The Five Stacks Tracker was not designed to be a VSME compliance tool. It was designed to structure operational data for agricultural SMEs. But the overlap is substantial, because VSME asks for the same operational reality that good management requires.
        </p>
        <p>
          This is the principle at work: <strong>well-structured operational data serves any reporting framework</strong>. VSME, full ESRS, GlobalG.A.P., EcoVadis, CDP, buyer-specific questionnaires, they all draw from the same underlying data. The framework determines which datapoints to extract and how to present them. The data itself is constant.
        </p>

        <h2>The Mapping</h2>
        <p>
          The tracker has eight operational domains. Here is how each maps to VSME requirements:
        </p>

        <h3>Energy &amp; Utilities &rarr; VSME Energy and Emissions</h3>
        <p>
          The Energy domain captures electricity consumption, fuel use (diesel, gas, heating oil), water consumption, and on-site renewable generation. This directly feeds:
        </p>
        <ul>
          <li><strong>VSME energy consumption</strong>, total energy in MWh by source. The tracker stores electricity in kWh and fuel in liters; conversion to MWh uses standard factors</li>
          <li><strong>VSME Scope 2 emissions</strong>, calculated from electricity consumption using grid emission factors</li>
          <li><strong>VSME Scope 1 emissions (partial)</strong>, fuel combustion emissions calculated from diesel, gas, and oil consumption</li>
          <li><strong>VSME water withdrawal</strong>, water consumption by source (mains, borehole, surface, rainwater)</li>
        </ul>
        <p>
          The tracker auto-calculates emissions from energy data using IPCC Tier 1 factors. You enter liters of diesel; the system produces tonnes CO2e. No manual calculation required. If you want to see the math first without signing up, the <Link href="/tools/energy-calculator">Energy ROI Calculator</Link> runs the same conversions in your browser.
        </p>

        <h3>Materials &rarr; VSME Materials and Pollution</h3>
        <p>
          The Materials domain captures raw materials, consumables, and inputs including fertilizer applications. This feeds:
        </p>
        <ul>
          <li><strong>VSME materials and inputs</strong>, quantities of key inputs by type</li>
          <li><strong>VSME Scope 1 emissions (partial)</strong>, fertilizer N2O emissions calculated from kg nitrogen applied</li>
          <li><strong>VSME pollution indicators</strong>, crop protection product use, active ingredients, application rates</li>
        </ul>
        <p>
          For agricultural operations, the Materials domain is where much of the sector-specific data lives. Fertilizer records, spray logs, and input purchases are standard farm data, the tracker structures them for reporting.
        </p>

        <h3>Outputs &rarr; VSME Emissions and Waste</h3>
        <p>
          The Outputs domain captures production output, waste generation, and, for agricultural operations, livestock records and crop yields. This feeds:
        </p>
        <ul>
          <li><strong>VSME waste data</strong>, waste by type and destination (landfill, recycling, composting, recovery)</li>
          <li><strong>VSME Scope 1 emissions (partial)</strong>, livestock methane (enteric fermentation) and manure management emissions, calculated from headcount and species</li>
          <li><strong>VSME production metrics</strong>, output volumes that serve as denominators for intensity metrics (emissions per tonne, energy per unit produced)</li>
        </ul>
        <p>
          Livestock emissions are a major component of agricultural Scope 1. The tracker calculates enteric methane and manure emissions from livestock headcount using IPCC default factors for each species.
        </p>

        <h3>Infrastructure &rarr; VSME Biodiversity and Land Use</h3>
        <p>
          The Infrastructure domain captures sites, buildings, equipment, and, for agricultural operations, land use records. This feeds:
        </p>
        <ul>
          <li><strong>VSME land use</strong>, total area by use type (arable, pasture, woodland, buildings, set-aside)</li>
          <li><strong>VSME biodiversity</strong>, habitat features, proximity to protected sites, land management practices</li>
          <li><strong>VSME site information</strong>, location, operational boundaries, multi-site structures</li>
        </ul>
        <p>
          Land use data is where agriculture diverges most from generic VSME guidance. A manufacturer reports a warehouse footprint. A farm reports hundreds of hectares with multiple land types, habitat features, and ecological significance. The Infrastructure domain handles this complexity.
        </p>

        <h3>Workforce &rarr; VSME Social Metrics</h3>
        <p>
          The Workforce domain captures employee headcount, health and safety data, training records, and working conditions. This maps directly to:
        </p>
        <ul>
          <li><strong>VSME workforce headcount</strong>, total employees, FTE, permanent vs. seasonal, gender split</li>
          <li><strong>VSME health and safety</strong>, reportable incidents, lost-time injuries, near misses, fatalities</li>
          <li><strong>VSME training</strong>, total training hours, certifications held, competence records</li>
          <li><strong>VSME working conditions</strong>, contract types, working hours, seasonal accommodation (where applicable)</li>
        </ul>
        <p>
          If you hold <Link href="/articles/globalg-a-p-grasp-worker-welfare">GlobalG.A.P. GRASP</Link>, your workforce data already meets or exceeds VSME social requirements. The tracker structures the same information GRASP auditors review.
        </p>

        <h3>Transport &rarr; VSME Emissions (Extended)</h3>
        <p>
          The Transport domain captures inbound, outbound, and internal logistics. For VSME:
        </p>
        <ul>
          <li><strong>VSME Scope 1 emissions (partial)</strong>, own-vehicle transport emissions from fuel consumption</li>
          <li><strong>VSME Scope 3 context</strong>, if your buyer requests Business Partners module data, transport logistics feed value chain emissions</li>
        </ul>
        <p>
          Most farm transport emissions are already captured in the Energy domain as diesel consumption. The Transport domain adds route-level detail for operations that need to distinguish farm machinery from road haulage.
        </p>

        <h3>Packaging &rarr; VSME Resource Use</h3>
        <p>
          The Packaging domain captures primary, secondary, and tertiary packaging for operations that pack on-farm. This feeds:
        </p>
        <ul>
          <li><strong>VSME resource use</strong>, packaging materials by type and weight</li>
          <li><strong>VSME waste</strong>, packaging waste generated, recycled content, recyclability</li>
        </ul>
        <p>
          Not all farm operations pack on-site. For those that do (fresh produce, eggs, dairy), packaging data is a meaningful VSME requirement. For operations that sell in bulk to processors, this domain may have minimal entries.
        </p>

        <h3>Context &rarr; VSME Governance and Strategy</h3>
        <p>
          The Context domain captures external factors, financial position, regulatory status, and strategic context. This feeds:
        </p>
        <ul>
          <li><strong>VSME governance</strong>, who is responsible for sustainability decisions, what policies exist</li>
          <li><strong>VSME CSRD status</strong>, your own regulatory position and your buyers&apos; requirements</li>
          <li><strong>VSME adoption tracking</strong>, the tracker explicitly tracks your VSME readiness stage</li>
        </ul>
      </article>

      <div className="my-12">
        <BaselineCTA />
      </div>

      <article className="prose prose-gray max-w-none">
        <h2>Coverage Summary</h2>
        <p>
          When you fill in the eight tracker domains, the VSME Basic Module is largely covered:
        </p>
        <ul>
          <li><strong>Energy</strong>, fully covered by Energy &amp; Utilities domain</li>
          <li><strong>Emissions</strong>, fully covered across Energy (fuel), Materials (fertilizer), and Outputs (livestock), with auto-calculation</li>
          <li><strong>Workforce</strong>, fully covered by Workforce domain</li>
          <li><strong>Water</strong>, fully covered by Energy &amp; Utilities domain</li>
          <li><strong>Waste</strong>, fully covered by Outputs domain</li>
          <li><strong>Biodiversity/land use</strong>, covered by Infrastructure domain</li>
          <li><strong>Governance</strong>, partially covered by Context domain (VSME PAT module requires additional policy documentation)</li>
        </ul>
        <p>
          The gap is in the Narrative-PAT module: written policies, documented actions, and formal targets. The tracker provides the data that underpins these narratives, but the narrative itself, your environmental management policy, your emissions reduction target, requires documentation beyond data entry.
        </p>

        <h2>Beyond VSME: One Data System, Multiple Standards</h2>
        <p>
          The same eight domains feed more than VSME:
        </p>
        <ul>
          <li><strong><Link href="/articles/csrd-esg-guide">Full ESRS</Link></strong>, the tracker data provides the foundation. Scaling to full ESRS means adding granularity and narrative, not restarting</li>
          <li><strong><Link href="/articles/globalg-a-p-certification-what-sme-farms-need">GlobalG.A.P. IFA</Link></strong>, Materials, Outputs, Workforce, and Infrastructure data align with IFA control points</li>
          <li><strong>EcoVadis</strong>, EcoVadis questionnaires map to the same domains: environment, labor, ethics, sustainable procurement</li>
          <li><strong>CDP Supply Chain</strong>, energy and emissions data feeds CDP climate disclosures directly</li>
          <li><strong>Buyer-specific questionnaires</strong>, regardless of format, the questions draw from the same operational data</li>
        </ul>
        <p>
          This is not marketing. It is arithmetic. A litre of diesel is a litre of diesel whether your buyer asks about it through VSME, EcoVadis, or a proprietary spreadsheet. An FTE is an FTE whether GRASP or VSME requests it. The data is the data.
        </p>
        <p>
          The operations that build structured data infrastructure once, through the tracker or any equivalent system, respond to every subsequent request from a position of readiness. The operations that treat each questionnaire as a separate exercise spend the same time scrambling, every time.
        </p>

        <h2>Getting Started</h2>
        <p>
          If you are working toward VSME readiness using the tracker, the most efficient sequence is:
        </p>
        <ol>
          <li><strong>Energy &amp; Utilities</strong>, this gives you the most-requested data (energy consumption) and the foundation for emissions calculations</li>
          <li><strong>Materials</strong>, fertilizer and input records complete your agricultural Scope 1 emissions picture</li>
          <li><strong>Outputs</strong>, livestock records add the remaining agricultural emissions, and waste data covers another VSME category</li>
          <li><strong>Workforce</strong>, headcount, safety, and training data complete the social metrics</li>
          <li><strong>Infrastructure</strong>, land use and habitat data cover biodiversity requirements</li>
          <li><strong>Transport, Packaging, Context</strong>, fill in as relevant to your operation</li>
        </ol>
        <p>
          After four domains (Energy, Materials, Outputs, Workforce), you have the core VSME Basic Module covered. The remaining domains add depth and cover edge cases specific to your operation.
        </p>
        <p>
          The tracker dashboard shows your completion progress across domains, and the <Link href="/articles/building-baseline">baseline-building guide</Link> provides a 90-day timeline for getting from zero to audit-defensible data.
        </p>
      </article>

      <div className="mt-12 p-8 bg-[#3D2E7C] rounded-lg text-white">
        <h3 className="text-2xl font-bold mb-3">Collect once, respond to anything</h3>
        <p className="text-white/80 mb-6">
          The Five Stacks Tracker structures your operational data across the same domains that VSME, ESRS, GlobalG.A.P., and buyer questionnaires all draw from. One data system. Every standard.
        </p>
        <Link href="/signup" className="inline-block bg-white text-[#3D2E7C] px-6 py-3 rounded font-semibold hover:bg-gray-100 transition-colors">
          Start Free &rarr;
        </Link>
      </div>

      <div className="mt-12 pt-8 border-t border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Further Reading</h3>
        <div className="space-y-3">
          <Link href="/articles/vsme-basic-module-explained" className="block p-4 border border-gray-200 rounded-lg hover:border-[#3D2E7C] transition-colors">
            <span className="font-medium text-gray-900">VSME Basic Module: The Minimum Your Buyers Will Ask For &rarr;</span>
            <span className="block text-sm text-gray-600">Every datapoint walkthrough with farm-specific guidance</span>
          </Link>
          <Link href="/articles/vsme-buyer-questionnaire-response" className="block p-4 border border-gray-200 rounded-lg hover:border-[#3D2E7C] transition-colors">
            <span className="font-medium text-gray-900">Your Buyer Sent a VSME Questionnaire ,  Here&apos;s How to Respond &rarr;</span>
            <span className="block text-sm text-gray-600">From inbox to response in a structured workflow</span>
          </Link>
          <Link href="/articles/what-gets-measured" className="block p-4 border border-gray-200 rounded-lg hover:border-[#3D2E7C] transition-colors">
            <span className="font-medium text-gray-900">What Gets Measured in Agricultural Sustainability &rarr;</span>
            <span className="block text-sm text-gray-600">The core metrics on every buyer questionnaire</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
