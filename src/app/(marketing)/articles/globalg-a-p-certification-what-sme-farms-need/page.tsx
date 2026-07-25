import Link from "next/link";
import NewsletterSignup from "@/components/marketing/NewsletterSignup";

export const metadata = {
  title: "GlobalG.A.P. Certification: What SME Farms Actually Need",
  description:
    "What GlobalG.A.P. IFA certification requires from small and mid-sized farms. Control points, documentation, costs, and how to prepare without a consultant.",
  keywords: ["GlobalG.A.P.", "IFA certification", "farm assurance", "food safety certification", "ecolabels", "certification", "sustainability standards", "agriculture", "sustainability"],
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
          GlobalG.A.P. Certification: What SME Farms Actually Need
        </h1>
        <p className="text-xl text-gray-600">
          GlobalG.A.P. is the world&apos;s most widely adopted farm assurance
          standard. Over 200,000 producers in 135 countries hold it. If your
          buyers are retailers or food processors, they probably require it.
          Here&apos;s what it actually involves.
        </p>
      </header>

      {/* Article Content */}
      <article className="prose prose-gray max-w-none">
        <p>
          GlobalG.A.P. stands for Global Good Agricultural Practices. The
          Integrated Farm Assurance (IFA) standard is its flagship
          certification, covering food safety, environmental management,
          worker welfare, and traceability in a single audit. Most European
          retailers require it from fresh produce suppliers. Increasingly,
          buyers in the Middle East, Asia, and the Americas are adopting it too.
        </p>
        <p>
          For a small or mid-sized farm, the standard can look overwhelming.
          The IFA v6 checklist runs to hundreds of control points. But the
          reality is more manageable than it appears. Most of what GlobalG.A.P.
          asks for is documentation of practices you&apos;re already following.
        </p>

        <h2>What GlobalG.A.P. IFA Actually Covers</h2>
        <p>
          The standard is structured into modules. As a crop producer, you&apos;ll
          typically be assessed against the All Farm Base module plus the Crops
          Base module, and then your specific scope (Fruit and Vegetables,
          Combinable Crops, etc.). The main areas are:
        </p>
        <ul>
          <li><strong>Site management:</strong> land use history, field maps, risk assessments</li>
          <li><strong>Record keeping and traceability:</strong> batch numbering, recall procedures, internal audits</li>
          <li><strong>Soil and substrate management:</strong> soil analysis, erosion control, fertility planning</li>
          <li><strong>Fertilizer management:</strong> nutrient plans based on soil analysis, application records, storage compliance</li>
          <li><strong>Water management:</strong> water sources, quality testing, irrigation records, efficiency measures</li>
          <li><strong>Integrated Pest Management (IPM):</strong> documented IPM plan, scouting records, biological controls before chemical</li>
          <li><strong>Plant Protection Products (PPP):</strong> spray records, MRL compliance, sprayer calibration, safe storage, container disposal</li>
          <li><strong>Harvest and post-harvest:</strong> hygiene protocols, cold chain management, foreign body prevention</li>
          <li><strong>Worker health, safety, and welfare:</strong> training records, PPE, first aid, working conditions, no child labor</li>
          <li><strong>Environmental management:</strong> environmental policy, biodiversity action plan, waste management</li>
        </ul>

        <h2>Control Points: Major Must vs. Minor Must vs. Recommendation</h2>
        <p>
          Not all control points carry equal weight. GlobalG.A.P. classifies them into three levels:
        </p>
        <ul>
          <li><strong>Major Must:</strong> 100% compliance required. Failure on a single major must means no certification. These cover food safety essentials and legal compliance.</li>
          <li><strong>Minor Must:</strong> 95% compliance required. You can fail up to 5% of minor musts and still pass. These cover best practices in record keeping and management systems.</li>
          <li><strong>Recommendations:</strong> no minimum compliance required, but they signal best practice and may become minor musts in future versions.</li>
        </ul>
        <p>
          The practical implication: focus your preparation on major musts first. If every major must is covered, you&apos;re unlikely to fail.
        </p>

        <h2>What Documentation You Need</h2>
        <p>
          GlobalG.A.P. is a documentation-heavy standard. The auditor needs to see records, not just practices. The key documents most farms need to prepare:
        </p>
        <ul>
          <li>Farm map with field/plot reference numbers</li>
          <li>Risk assessment covering food safety, environmental, and worker hazards</li>
          <li>Nutrient management plan (based on soil analysis results)</li>
          <li>IPM plan with pest observation records</li>
          <li>Spray diary / PPP application records</li>
          <li>Sprayer calibration certificates</li>
          <li>Water quality analysis results</li>
          <li>Worker training records</li>
          <li>Accident / incident log</li>
          <li>Complaint procedure and log</li>
          <li>Recall/withdrawal procedure (with evidence of mock recall test)</li>
          <li>Internal self-assessment checklist</li>
        </ul>
        <p>
          If you already track operational data (energy use, water consumption,
          fertilizer applications, worker hours), you have the raw material for
          most of these documents. The gap is usually formatting and
          organization, not the data itself.
        </p>

        <h2>Who Needs GlobalG.A.P.?</h2>
        <p>
          Strictly speaking, GlobalG.A.P. is voluntary. In practice, if you supply
          fresh produce to any major European retailer (Aldi, Lidl, Tesco,
          Carrefour, Rewe), it&apos;s mandatory. Most food processors and
          wholesale buyers also require it. Some export markets outside Europe
          use it as their default import standard.
        </p>
        <p>
          If your buyers haven&apos;t asked for it yet, check whether they&apos;re
          moving toward it. Many buyers are expanding certification requirements
          to include smaller suppliers who were previously exempt. The trend is
          toward more coverage, not less.
        </p>
        <p>
          There&apos;s also a commercial argument. Certified farms typically access
          better prices, more stable contracts, and a wider pool of potential
          buyers. The certification itself is a signal of operational
          competence. It tells buyers you manage risk, keep records, and
          can trace your products. For more on how certifications create market
          access, see our{" "}
          <Link href="/articles/advantages-and-disadvantages-of-ecolabels">advantages and disadvantages of ecolabels</Link>
          {" "}analysis.
        </p>

        <h2>The Certification Process</h2>
        <p>
          The process follows a predictable path:
        </p>
        <ul>
          <li><strong>Registration:</strong> register with GlobalG.A.P. and receive your GGN (GlobalG.A.P. Number)</li>
          <li><strong>Self-assessment:</strong> work through the checklist internally, identify gaps</li>
          <li><strong>Preparation:</strong> fill documentation gaps, implement missing practices, train workers</li>
          <li><strong>Initial audit:</strong> a Certification Body (CB) auditor inspects your operation on-site</li>
          <li><strong>Corrective actions:</strong> fix any non-conformances within 28 days (minor) or immediately (major)</li>
          <li><strong>Certificate issued:</strong> valid for one year, with annual re-certification</li>
        </ul>
        <p>
          The self-assessment is where most of the work happens. If you do a
          thorough self-assessment and address every gap before the auditor
          arrives, the audit itself is straightforward. Our{" "}
          <Link href="/articles/globalg-a-p-audit-preparation-guide">audit preparation guide</Link>
          {" "}walks through this step by step.
        </p>

        <h2>What It Costs</h2>
        <p>
          Costs vary by country, farm size, and certification body, but typical
          ranges for an SME operation:
        </p>
        <ul>
          <li><strong>Registration fee:</strong> approximately &euro;50&ndash;100/year</li>
          <li><strong>Audit fee:</strong> &euro;400&ndash;1,200 depending on farm size and scope</li>
          <li><strong>Preparation costs:</strong> variable; if you do it yourself, it&apos;s mainly time. Hiring a consultant adds &euro;1,000&ndash;5,000</li>
          <li><strong>Total first-year cost:</strong> typically &euro;1,000&ndash;3,000 for a small operation doing most preparation internally</li>
        </ul>
        <p>
          For a detailed breakdown and strategies to reduce costs, see{" "}
          <Link href="/articles/globalg-a-p-certification-costs">the real cost of GlobalG.A.P. certification</Link>.
        </p>

        <h2>Where to Start</h2>
        <p>
          If you&apos;re considering GlobalG.A.P. or have been asked by a buyer to
          get certified, start with three things:
        </p>
        <ul>
          <li><strong>Download the IFA checklist</strong> for your scope from the GlobalG.A.P. website and do an honest self-assessment</li>
          <li><strong>Start tracking your operational data:</strong> energy, water, fertilizer, PPP use, waste, worker hours. This is the raw material for compliance documentation</li>
          <li><strong>Identify your major must gaps.</strong> These are the ones that can block certification entirely</li>
        </ul>
        <p>
          If you&apos;re already tracking baseline data with a tool like Ecosystems
          United, you can upload a GlobalG.A.P. checklist and get draft answers
          generated from your tracked data, turning weeks of preparation
          into minutes.
        </p>
      </article>

      {/* Newsletter (D-021 mid-2) */}
      <div className="mt-12">
        <NewsletterSignup />
      </div>


      {/* Further Reading */}
      <div className="mt-12 pt-8 border-t border-gray-200">
        <p className="text-sm text-gray-500 mb-4">Related articles:</p>
        <div className="space-y-3">
          <Link href="/articles/globalg-a-p-audit-preparation-guide" className="block p-4 border border-gray-200 rounded-lg hover:border-[#5B4A9E] transition-colors">
            <span className="font-medium text-gray-900">How to Prepare for a GlobalG.A.P. Audit &rarr;</span>
            <span className="block text-sm text-gray-600">A practical 30-day preparation timeline</span>
          </Link>
          <Link href="/articles/globalg-a-p-vs-organic-certification" className="block p-4 border border-gray-200 rounded-lg hover:border-[#5B4A9E] transition-colors">
            <span className="font-medium text-gray-900">GlobalG.A.P. vs Organic: Which Certification? &rarr;</span>
            <span className="block text-sm text-gray-600">Comparing costs, requirements, and market access</span>
          </Link>
          <Link href="/articles/globalg-a-p-certification-costs" className="block p-4 border border-gray-200 rounded-lg hover:border-[#5B4A9E] transition-colors">
            <span className="font-medium text-gray-900">The Real Cost of GlobalG.A.P. Certification &rarr;</span>
            <span className="block text-sm text-gray-600">What it costs and how to reduce the burden</span>
          </Link>
        </div>
      </div>

    </div>
  );
}
