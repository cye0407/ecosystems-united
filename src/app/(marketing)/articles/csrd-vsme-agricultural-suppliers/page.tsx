import Link from "next/link";
import NewsletterSignup from "@/components/marketing/NewsletterSignup";

export const metadata = {
  title: "CSRD and VSME: What Agricultural Suppliers Need to Know",
  description:
    "How the EU's CSRD and Voluntary SME Standard affect agricultural suppliers. Key datapoints, timelines, and practical preparation for farm operations.",
};

export default function ArticlePage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <nav className="mb-8">
        <Link href="/framework/stack-1-metrics" className="group flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-[#4AA88C] transition-colors">
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
          CSRD and VSME: What Agricultural Suppliers Need to Know
        </h1>
        <p className="text-xl text-gray-600">
          Large food companies must now report sustainability data across their entire supply chain. Here&apos;s what that means for farm operations and how the simplified VSME standard keeps it manageable.
        </p>
      </header>

      <article className="prose prose-gray max-w-none">
        <p>
          If you supply food processors, retailers, cooperatives, or exporters in Europe, you&apos;ve likely heard about CSRD&mdash;the Corporate Sustainability Reporting Directive. This EU regulation is transforming sustainability reporting requirements for large companies and, by extension, their agricultural supply chains.
        </p>
        <p>
          For farms and agricultural SMEs, CSRD raises practical questions: Does this apply to me directly? What will my buyers expect? How do I prepare without expensive consultants?
        </p>

        <h2>Understanding CSRD&apos;s Supply Chain Impact</h2>
        <p>
          CSRD requires approximately 50,000 European companies to publish detailed sustainability reports. These reports cover environmental, social, and governance topics including carbon emissions, biodiversity impacts, water use, and worker conditions.
        </p>
        <p>
          The critical part: CSRD-obligated companies must report on their <strong>entire value chain</strong>, not just direct operations. For a food retailer or processor, that means they need sustainability data from the farms that supply them.
        </p>
        <p>
          CSRD doesn&apos;t directly obligate most farms. However, your buyers are obligated, and they will ask you for data. Your ability to provide that data efficiently affects your relationship with EU buyers.
        </p>
        <p>
          Think of it this way: Tesco, Carrefour, Nestl&eacute;, Danone, Unilever&mdash;they all have public sustainability commitments and CSRD obligations. They need your data to meet theirs.
        </p>

        <h2>The VSME Standard: CSRD-Lite for Farms</h2>
        <p>
          Recognizing that full CSRD reporting standards are disproportionate for small operations, EU regulators developed the VSME&mdash;Voluntary SME Standard. This simplified framework covers the same sustainability topics with reduced datapoints and less complexity.
        </p>
        <p>
          The VSME is &ldquo;voluntary&rdquo; in the technical sense that regulators won&apos;t fine you. However, when your buyer asks you to report using VSME, it becomes voluntary in the same way that meeting buyer specifications has always been voluntary&mdash;technically optional, but commercially necessary.
        </p>

        <h2>VSME Datapoints for Agricultural Operations</h2>
        <p>
          <strong>Environmental datapoints</strong> are where agriculture diverges most from generic guidance:
        </p>
        <ul>
          <li>Energy consumption (diesel, electricity, heating fuel)</li>
          <li>Greenhouse gas emissions (Scope 1 and 2 minimum&mdash;including livestock methane and fertilizer N2O)</li>
          <li>Land use and management (hectares, crop rotation, tillage practices)</li>
          <li>Water extraction and consumption (irrigation, livestock, processing)</li>
          <li>Fertilizer and pesticide use (kg applied, active ingredients)</li>
          <li>Biodiversity impacts (habitat features, conservation measures)</li>
          <li>Waste generation (farm plastics, agrochemical containers, organic waste)</li>
        </ul>
        <p>
          <strong>Social datapoints</strong> address your workforce:
        </p>
        <ul>
          <li>Health and safety metrics (machinery incidents, chemical exposure, livestock handling)</li>
          <li>Working conditions (hours during peak seasons, seasonal worker accommodation)</li>
          <li>Training and development (sprayer certification, machinery competence, first aid)</li>
          <li>Fair treatment (wages, contracts for seasonal staff, grievance mechanisms)</li>
        </ul>
        <p>
          <strong>Governance datapoints</strong> cover your management practices:
        </p>
        <ul>
          <li>Who is responsible for sustainability decisions</li>
          <li>What policies guide your operations</li>
          <li>Farm assurance and certification status</li>
          <li>How you manage risks in your own supply chain (feed, inputs)</li>
        </ul>

        <h2>Materiality: What Matters Most for Farms</h2>
        <p>
          CSRD uses &ldquo;double materiality&rdquo;&mdash;you report on topics that affect your business financially AND topics where your business affects the world.
        </p>
        <p>
          For agricultural operations, certain topics are almost always material:
        </p>
        <ul>
          <li><strong>Climate/emissions</strong>&mdash;farms have significant direct emissions from livestock and soils</li>
          <li><strong>Water</strong>&mdash;agriculture is a major water user, especially irrigated operations</li>
          <li><strong>Biodiversity</strong>&mdash;this is HIGHLY material for farms (unlike most manufacturing). Land management directly affects ecosystems</li>
          <li><strong>Soil health</strong>&mdash;your productive asset and a carbon sink</li>
          <li><strong>Worker safety</strong>&mdash;farming is one of the most hazardous industries</li>
        </ul>
        <p>
          Your buyer may provide guidance on which topics they consider material for their supply chain. If they specifically request water data, they&apos;ve determined water is material to their reporting.
        </p>
      </article>

      <div className="my-12">
        <NewsletterSignup />
      </div>

      <article className="prose prose-gray max-w-none">
        <h2>Timeline: When This Becomes Real</h2>
        <p>
          Large EU companies started CSRD reporting in 2025. Listed SMEs begin in 2026-2028. For farm suppliers, the impact follows:
        </p>
        <ul>
          <li>If you supply large food retailers or processors&mdash;expect formal data requests now or very soon</li>
          <li>If you supply through cooperatives&mdash;your cooperative may be aggregating data on your behalf already</li>
          <li>If you supply smaller EU companies&mdash;you may have until 2028-2029 before requests become systematic</li>
        </ul>
        <p>
          Either way, preparation now is more efficient than reaction later.
        </p>

        <h2>How to Prepare Without Consultants</h2>
        <p>
          The good news: many farms already collect much of this data for existing requirements. The task is organizing it for ESG format.
        </p>
        <p>
          <strong>Start with emissions.</strong> Compile your fuel records, electricity bills, livestock numbers, and fertilizer applications. Use IPCC default emission factors to calculate a baseline. This covers the most-requested datapoint.
        </p>
        <p>
          <strong>Organize existing records.</strong> Your spray logs, livestock movement records, soil test results, and farm assurance audit reports already contain ESG-relevant data. Centralize them so they&apos;re accessible when requests arrive.
        </p>
        <p>
          <strong>Document your practices.</strong> Write down what you actually do around environmental management, worker safety, and chemical handling. Even a two-page farm environmental management plan is sufficient. Date it, sign it, communicate it to staff.
        </p>
        <p>
          <strong>Leverage your certifications.</strong> Farm assurance (Red Tractor, LEAF Marque), organic certification, GlobalG.A.P., and environmental stewardship agreements all align with VSME requirements. Document what you already comply with.
        </p>
        <p>
          <strong>Set targets.</strong> CSRD expects companies to have sustainability targets. Realistic targets for a farm: 10% diesel reduction through precision application, maintaining soil organic matter above X%, achieving zero lost-time safety incidents.
        </p>

        <h2>VSME vs. Existing Farm Assessments</h2>
        <p>
          If you already complete farm assurance audits, environmental stewardship applications, or organic certification inspections, you&apos;ll find substantial overlap with VSME. The underlying data is largely the same&mdash;emissions, practices, social metrics&mdash;but the presentation format differs.
        </p>
        <p>
          The good news: VSME preparation makes every other assessment easier. A farm with VSME-ready data can quickly complete buyer questionnaires, assurance audits, and certification inspections because the hard work&mdash;data collection and documentation&mdash;is already done.
        </p>

        <h2>The Strategic View</h2>
        <p>
          CSRD and VSME aren&apos;t isolated EU requirements. Sustainability reporting is converging globally. The farms that build robust ESG data infrastructure now will find themselves well-positioned regardless of which specific framework dominates.
        </p>
        <p>
          Moreover, sustainability data capability is becoming a competitive differentiator in food supply chains. Farms that can quickly and credibly provide VSME-aligned data gain advantage over those that can&apos;t&mdash;especially as buyers increasingly factor sustainability into sourcing decisions and premium pricing.
        </p>
        <p>
          The key is treating VSME not as bureaucratic compliance but as infrastructure for measuring what increasingly determines long-term competitiveness: resource efficiency, soil health, operational resilience, and market access.
        </p>
      </article>

      <div className="mt-12 p-8 bg-[#3D2E7C] rounded-lg text-white">
        <h3 className="text-2xl font-bold mb-3">Your farm data is the foundation</h3>
        <p className="text-white/80 mb-6">
          CSRD and VSME come down to one thing: can you measure and defend your operation&apos;s performance? Stack 1 of the Five Stacks Framework builds exactly that capability.
        </p>
        <Link href="/framework/stack-1-metrics" className="inline-block bg-white text-[#3D2E7C] px-6 py-3 rounded font-semibold hover:bg-gray-100 transition-colors">
          Get Started with Stack 1 &rarr;
        </Link>
      </div>

      <div className="mt-12 pt-8 border-t border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Further Reading</h3>
        <div className="space-y-3">
          <Link href="/articles/first-esg-questionnaire" className="block p-4 border border-gray-200 rounded-lg hover:border-[#3D2E7C] transition-colors">
            <span className="font-medium text-gray-900">First ESG Questionnaire? Where to Start &rarr;</span>
            <span className="block text-sm text-gray-600">Practical first steps when a buyer sends a sustainability request</span>
          </Link>
          <Link href="/articles/scope-1-2-3-agriculture" className="block p-4 border border-gray-200 rounded-lg hover:border-[#3D2E7C] transition-colors">
            <span className="font-medium text-gray-900">Scope 1, 2, 3 Emissions for Agricultural Operations &rarr;</span>
            <span className="block text-sm text-gray-600">Understanding greenhouse gas scopes for farm operations</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
