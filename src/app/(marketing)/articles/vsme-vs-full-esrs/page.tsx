import Link from "next/link";
import NewsletterSignup from "@/components/marketing/NewsletterSignup";

export const metadata = {
  title: "VSME vs Full ESRS: What SMEs Actually Need to Report",
  description:
    "Side-by-side comparison of VSME and full ESRS reporting standards. What agricultural SMEs can skip, what they must cover, and when full ESRS might apply.",
  keywords: ["VSME", "ESRS", "CSRD", "ESG", "sustainability reporting", "agricultural compliance", "SME reporting", "agriculture", "sustainability"],
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
          VSME vs Full ESRS: What SMEs Actually Need to Report
        </h1>
        <p className="text-xl text-gray-600">
          Full ESRS has over 1,100 datapoints. VSME has a fraction of that. Here is what the two standards share, where they differ, and how to know which one applies to your operation.
        </p>
      </header>

      {/* Article Content */}
      <article className="prose prose-gray max-w-none">
        <p>
          If you are an agricultural SME receiving sustainability data requests from buyers, you have probably encountered both terms: ESRS and VSME. They sound similar, they come from the same body (EFRAG), and they cover the same topics. But the reporting burden is dramatically different.
        </p>
        <p>
          Understanding the difference determines whether you spend weeks or months on compliance. Most agricultural SMEs need VSME. Full ESRS is for the companies buying from you, not for you.
        </p>

        <h2>What Full ESRS Covers</h2>
        <p>
          The European Sustainability Reporting Standards (ESRS) are the detailed reporting framework underpinning CSRD. They include:
        </p>
        <ul>
          <li><strong>ESRS 1</strong>, General requirements (how to report)</li>
          <li><strong>ESRS 2</strong>, General disclosures (governance, strategy, materiality assessment)</li>
          <li><strong>ESRS E1</strong>, Climate change (detailed emissions, transition plans, carbon pricing exposure)</li>
          <li><strong>ESRS E2</strong>, Pollution (air, water, soil pollutants, substances of concern)</li>
          <li><strong>ESRS E3</strong>, Water and marine resources (detailed water management, marine impact)</li>
          <li><strong>ESRS E4</strong>, Biodiversity and ecosystems (impact assessment, dependencies, transition plans)</li>
          <li><strong>ESRS E5</strong>, Resource use and circular economy (material flows, product design, waste hierarchy)</li>
          <li><strong>ESRS S1</strong>, Own workforce (comprehensive labor metrics, living wage, collective bargaining)</li>
          <li><strong>ESRS S2</strong>, Workers in the value chain (your supply chain&apos;s labor practices)</li>
          <li><strong>ESRS S3</strong>, Affected communities (impact on local communities)</li>
          <li><strong>ESRS S4</strong>, Consumers and end-users (product safety, information, responsible marketing)</li>
          <li><strong>ESRS G1</strong>, Business conduct (anti-corruption, political influence, payment practices)</li>
        </ul>
        <p>
          Each standard contains multiple disclosure requirements, each with multiple datapoints. The total exceeds 1,100 individual data items. Most require narrative explanations alongside quantitative data. Some require forward-looking transition plans with milestones and financial projections.
        </p>
        <p>
          Full ESRS was designed for large, listed companies with dedicated sustainability teams. It assumes resources that most agricultural SMEs do not have.
        </p>

        <h2>What VSME Covers</h2>
        <p>
          VSME takes the same sustainability topics and reduces them to what is proportionate for an SME. The <Link href="/articles/vsme-basic-module-explained">Basic Module</Link> covers:
        </p>
        <ul>
          <li>Energy consumption (total, by source)</li>
          <li>GHG emissions (Scope 1 and 2)</li>
          <li>Workforce basics (headcount, safety, training)</li>
          <li>Water withdrawal (total, by source)</li>
          <li>Waste (total, by type and destination)</li>
          <li>Biodiversity (land use, sensitive areas, habitat features)</li>
        </ul>
        <p>
          The Narrative-PAT module adds policies, actions taken, and targets set. The Business Partners module adds detail for SMEs with significant value chain roles.
        </p>
        <p>
          Where full ESRS asks for transition plans, scenario analysis, and financial quantification of climate risks, VSME asks for basic metrics and factual descriptions of what you do.
        </p>

        <h2>Side-by-Side: What You Can Skip</h2>
        <p>
          Here is what VSME drops relative to full ESRS, with specific implications for agricultural operations:
        </p>

        <h3>Materiality Assessment</h3>
        <p>
          <strong>Full ESRS:</strong> Requires a formal double materiality assessment with stakeholder engagement, financial quantification of sustainability risks, and documented methodology. This alone can take months and often involves consultants.
        </p>
        <p>
          <strong>VSME:</strong> No formal materiality assessment required. You report on the datapoints in the module. The standard has already determined what is proportionate for SMEs.
        </p>
        <p>
          <strong>For farms:</strong> This is the single biggest simplification. You skip the entire process of determining which topics are material and just report the standardized dataset.
        </p>

        <h3>Transition Plans</h3>
        <p>
          <strong>Full ESRS:</strong> Requires a detailed climate transition plan with milestones, capital expenditure projections, alignment with 1.5&deg;C pathways, and annual progress reporting.
        </p>
        <p>
          <strong>VSME:</strong> Asks for targets (PAT module) but not a formal transition plan. A target like &ldquo;reduce diesel consumption 10% by 2028&rdquo; is sufficient.
        </p>
        <p>
          <strong>For farms:</strong> You set realistic operational targets rather than modeling climate scenarios. The difference between &ldquo;we aim to reduce fuel use&rdquo; and a 50-page transition plan with carbon budget trajectories.
        </p>

        <h3>Scope 3 Emissions</h3>
        <p>
          <strong>Full ESRS:</strong> Requires Scope 3 emissions across all 15 categories, purchased goods, transport, waste treatment, employee commuting, investments, and more. This is the most technically demanding requirement in ESRS E1.
        </p>
        <p>
          <strong>VSME:</strong> Basic and PAT modules require only Scope 1 and Scope 2. The Business Partners module introduces some Scope 3 categories, but most SMEs will not be asked for this.
        </p>
        <p>
          <strong>For farms:</strong> You report your direct emissions (fuel, livestock, fertilizer) and purchased electricity. You do not need to calculate the carbon footprint of every input you buy.
        </p>

        <h3>Financial Quantification</h3>
        <p>
          <strong>Full ESRS:</strong> Requires financial quantification of sustainability-related risks and opportunities, how climate change might affect revenue, how transition costs appear in capex plans, what stranded asset exposure exists.
        </p>
        <p>
          <strong>VSME:</strong> No financial quantification required. You report physical metrics (tonnes, kWh, m&sup3;, headcount), not their financial implications.
        </p>
        <p>
          <strong>For farms:</strong> You report how much diesel you used, not what would happen to your revenue if carbon prices reached &euro;150/tonne. Practical data, not financial modeling.
        </p>

        <h3>Value Chain Due Diligence</h3>
        <p>
          <strong>Full ESRS:</strong> Requires due diligence on labor practices, environmental impacts, and human rights across your supply chain (ESRS S2).
        </p>
        <p>
          <strong>VSME:</strong> Basic and PAT modules focus on your own operations. Only the Business Partners module touches supply chain due diligence.
        </p>
        <p>
          <strong>For farms:</strong> You report on your own workforce and operations. You do not need to audit your feed supplier&apos;s labor practices or your agrochemical provider&apos;s environmental record.
        </p>
      </article>

      <div className="my-12">
        <NewsletterSignup />
      </div>

      <article className="prose prose-gray max-w-none">
        <h2>When Does Full ESRS Apply to You?</h2>
        <p>
          Full ESRS currently applies to:
        </p>
        <ul>
          <li>Large EU companies (over 250 employees, or &euro;50M revenue, or &euro;25M balance sheet), reporting from 2025</li>
          <li>EU-listed SMEs (on regulated markets), reporting from 2026-2028, with opt-out possible until 2028</li>
          <li>Non-EU companies with significant EU activity (&euro;150M+ EU revenue), reporting from 2028</li>
        </ul>
        <p>
          Most agricultural operations fall below these thresholds. You are in the value chain of companies that report under full ESRS, which is why they request data from you. But the standard they use to request that data is VSME, not full ESRS.
        </p>
        <p>
          <strong>Exception:</strong> If your agricultural operation is a listed SME (rare for farms, less rare for agricultural cooperatives or processing companies), you may need to report under a simplified ESRS set for listed SMEs, which is more detailed than VSME but less than full ESRS.
        </p>
        <p>
          <strong>Exception:</strong> If your operation grows beyond the thresholds (e.g., a large agricultural group, contract farming organization, or cooperative), full ESRS will apply directly. Having VSME-ready data makes the transition to full ESRS incremental, not a cold start.
        </p>

        <h2>The Practical Implication</h2>
        <p>
          VSME is not a watered-down compromise. It is a deliberate design choice that balances data quality with reporting burden. Your buyers get the supply chain data they need. You provide it without the overhead of a framework designed for multinational corporations.
        </p>
        <p>
          The underlying data is the same regardless of which standard frames the reporting. Energy consumption does not change because you report under VSME instead of ESRS E1. What changes is the scope, the granularity, and the surrounding documentation requirements.
        </p>
        <p>
          This means VSME preparation is never wasted. If your operation grows, if regulations change, or if a buyer requests full ESRS alignment, the data foundation is already built. The additional work is adding detail and documentation, not starting over.
        </p>

        <h2>How to Decide Which Standard to Prepare For</h2>
        <p>
          In most cases, the decision is simple:
        </p>
        <ul>
          <li><strong>You supply to CSRD-obligated companies</strong>, prepare for VSME. This is the framework designed for your position in the value chain</li>
          <li><strong>You are a CSRD-obligated company yourself</strong>, prepare for full ESRS. Use VSME to collect data from your own suppliers</li>
          <li><strong>You are not sure</strong>, start with VSME. It covers the core data. If you later discover you need full ESRS, the VSME data gives you a running start</li>
        </ul>
        <p>
          Starting with VSME is never the wrong answer. It is either the destination or the first leg of the journey. The <Link href="/tools/metrics-assessment">Metrics Assessment</Link> takes 5 minutes and shows you where you stand against the core requirements that both VSME and ESRS share.
        </p>
      </article>

      <div className="mt-12 p-8 bg-[#3D2E7C] rounded-lg text-white">
        <h3 className="text-2xl font-bold mb-3">Start with the data, not the standard</h3>
        <p className="text-white/80 mb-6">
          The Five Stacks Tracker captures the operational data that feeds both VSME and ESRS. Build your baseline once, and you are ready for whichever standard your buyer references.
        </p>
        <Link href="/signup" className="inline-block bg-white text-[#3D2E7C] px-6 py-3 rounded font-semibold hover:bg-gray-100 transition-colors">
          Start Free &rarr;
        </Link>
      </div>

      <div className="mt-12 pt-8 border-t border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Further Reading</h3>
        <div className="space-y-3">
          <Link href="/articles/vsme-guide" className="block p-4 border border-gray-200 rounded-lg hover:border-[#3D2E7C] transition-colors">
            <span className="font-medium text-gray-900">The Complete VSME Guide for Agricultural SMEs &rarr;</span>
            <span className="block text-sm text-gray-600">All three modules explained with the full context</span>
          </Link>
          <Link href="/articles/vsme-basic-module-explained" className="block p-4 border border-gray-200 rounded-lg hover:border-[#3D2E7C] transition-colors">
            <span className="font-medium text-gray-900">VSME Basic Module: The Minimum Your Buyers Will Ask For &rarr;</span>
            <span className="block text-sm text-gray-600">Every datapoint walkthrough with farm-specific guidance</span>
          </Link>
          <Link href="/articles/csrd-esg-guide" className="block p-4 border border-gray-200 rounded-lg hover:border-[#3D2E7C] transition-colors">
            <span className="font-medium text-gray-900">The Complete CSRD &amp; ESG Guide &rarr;</span>
            <span className="block text-sm text-gray-600">The broader regulatory landscape for agricultural suppliers</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
