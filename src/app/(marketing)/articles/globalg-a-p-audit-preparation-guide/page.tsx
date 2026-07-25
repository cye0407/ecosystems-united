import Link from "next/link";
import NewsletterSignup from "@/components/marketing/NewsletterSignup";

export const metadata = {
  title: "How to Prepare for a GlobalG.A.P. Audit in 30 Days",
  description:
    "A practical 30-day timeline for GlobalG.A.P. IFA audit preparation. Week-by-week checklist covering documentation, records, site readiness, and mock audit.",
  keywords: ["GlobalG.A.P.", "audit preparation", "IFA audit", "farm audit", "certification audit", "ecolabels", "certification", "agriculture", "sustainability"],
};

export default function ArticlePage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      {/* Navigation */}
      <nav className="mb-8">
        <Link href="/articles" className="group flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-[#4AA88C] transition-colors">
          <span className="group-hover:-translate-x-1 transition-transform">←</span> All guides
        </Link>
      </nav>

      {/* Header */}
      <header className="mb-12">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          How to Prepare for a GlobalG.A.P. Audit in 30 Days
        </h1>
        <p className="text-xl text-gray-600">
          Your GlobalG.A.P. audit is approaching. Whether it&apos;s your first
          certification or an annual renewal, here&apos;s a week-by-week plan to
          make sure you&apos;re ready.
        </p>
      </header>

      {/* Article Content */}
      <article className="prose prose-gray max-w-none">
        <p>
          Most farms that fail a GlobalG.A.P. audit don&apos;t fail because their
          practices are wrong. They fail because their documentation is
          incomplete. The auditor needs to see evidence that you do what you
          say you do. That means records, dates, signatures, and procedures
          written down, not just good intentions.
        </p>
        <p>
          This guide breaks preparation into four weeks. If you have more time,
          spread it out. If you have less, focus on weeks 1 and 2. They
          cover the major musts that can block certification entirely.
        </p>

        <h2>Week 1: Self-Assessment and Major Must Review</h2>
        <p>
          Start with the IFA checklist for your scope (download from the
          GlobalG.A.P. database). Go through every control point and mark each
          as compliant, non-compliant, or not applicable.
        </p>
        <p>
          <strong>Focus on major musts first.</strong> These require 100% compliance.
          Common major must gaps for first-time certifications:
        </p>
        <ul>
          <li><strong>Traceability system:</strong> can you trace any product back to the field and forward to the buyer within 4 hours?</li>
          <li><strong>Recall procedure:</strong> is it documented? Have you done a mock recall?</li>
          <li><strong>PPP compliance:</strong> are all products registered for your crop in your country? Are pre-harvest intervals observed?</li>
          <li><strong>PPP storage:</strong> locked, ventilated, with spill containment and inventory?</li>
          <li><strong>Worker safety:</strong> documented risk assessment, training records, PPE provision?</li>
          <li><strong>Hygiene:</strong> handwashing facilities, clean toilets accessible to workers?</li>
        </ul>
        <p>
          For each gap you find, write down what needs to be done and who will
          do it. Don&apos;t try to fix everything in week 1. Just identify the
          full scope. If you need a refresher on what the standard covers, see our{" "}
          <Link href="/articles/globalg-a-p-certification-what-sme-farms-need">overview of GlobalG.A.P. requirements</Link>.
        </p>

        <h2>Week 2: Documentation Blitz</h2>
        <p>
          This is the hardest week. Sit down and produce the documents the
          auditor will ask to see:
        </p>
        <ul>
          <li><strong>Farm map:</strong> show all fields/plots with unique reference numbers, buildings, water sources, buffer zones, and neighboring land use</li>
          <li><strong>Risk assessment:</strong> cover food safety, environmental, and occupational hazards. Include site history (previous land use for at least 5 years)</li>
          <li><strong>Nutrient management plan:</strong> based on soil analysis, showing target vs. actual application rates per field</li>
          <li><strong>IPM plan:</strong> describe your prevention, observation, and intervention hierarchy</li>
          <li><strong>Recall procedure:</strong> step-by-step instructions for identifying, notifying, and retrieving affected product</li>
          <li><strong>Complaint procedure:</strong> how complaints are received, recorded, investigated, and resolved</li>
        </ul>
        <p>
          For each document, keep it simple. The auditor wants to see that the
          procedure exists and is being followed, not that it reads like
          a legal document. Two pages with clear steps beats twenty pages of
          corporate language.
        </p>

        <h2>Week 3: Records and Evidence</h2>
        <p>
          Documents describe what you do. Records prove you did it. The auditor
          will check that your records match your procedures. Key records to
          compile:
        </p>
        <ul>
          <li><strong>Spray diary:</strong> every PPP application with date, field, product, rate, justification, weather, operator, PHI, and REI</li>
          <li><strong>Fertilizer records:</strong> date, field, product, rate, method, operator for every application</li>
          <li><strong>Irrigation records:</strong> date, field, volume/duration for every irrigation event</li>
          <li><strong>Water quality test results:</strong> microbiological analysis within the last 12 months</li>
          <li><strong>Soil analysis results:</strong> within the required period for your scope</li>
          <li><strong>Sprayer calibration certificate:</strong> current-year calibration by a certified technician</li>
          <li><strong>Training records:</strong> who was trained, on what, when, by whom. Include induction records for seasonal workers</li>
          <li><strong>Accident log:</strong> any workplace incidents, investigation, and corrective actions</li>
          <li><strong>First aid kit checks:</strong> regular inspection dates</li>
          <li><strong>MRL test results:</strong> if your buyers require pre-harvest residue analysis</li>
        </ul>
        <p>
          If you&apos;ve been tracking your operational data systematically, you
          already have most of this. The task is organizing it into the format
          the auditor expects.
        </p>
              <h2>Week 4: Site Walk and Mock Audit</h2>
        <p>
          With documentation and records in order, walk your site as the auditor
          would. Check these physical requirements:
        </p>
        <ul>
          <li><strong>Chemical store:</strong> locked, ventilated, signed, with spill containment, inventory list visible, no expired products</li>
          <li><strong>Fertilizer storage:</strong> covered, separated from PPP, organic and inorganic segregated</li>
          <li><strong>Worker facilities:</strong> clean toilets, handwashing with soap, drinking water, rest area</li>
          <li><strong>First aid kits:</strong> stocked and accessible at every work location</li>
          <li><strong>PPE:</strong> available, in good condition, appropriate to the products being used</li>
          <li><strong>Empty container storage:</strong> triple-rinsed containers in a secure, designated area</li>
          <li><strong>Signage:</strong> field identification markers match your farm map</li>
          <li><strong>Equipment:</strong> sprayer calibration sticker visible and current</li>
        </ul>
        <p>
          Then do a mock audit. Have someone who isn&apos;t involved in daily
          operations walk through the checklist and challenge you on each point.
          This is also when you should run your mock recall. Pick a random
          batch number and demonstrate that you can trace it from field to buyer
          within 4 hours.
        </p>

        <h2>Common Reasons Audits Fail</h2>
        <p>
          The most common non-conformances are preventable:
        </p>
        <ul>
          <li><strong>Missing or incomplete spray records.</strong> The single most common finding. Every application needs every field filled in</li>
          <li><strong>Expired products in the chemical store.</strong> Dispose of them before the audit</li>
          <li><strong>No evidence of mock recall.</strong> This is a major must. Don&apos;t skip it</li>
          <li><strong>Training records without dates or signatures.</strong> A record without a date is not a record</li>
          <li><strong>Inadequate worker welfare facilities,</strong> especially for seasonal workers in remote fields. See our{" "}
            <Link href="/articles/globalg-a-p-grasp-worker-welfare">GRASP worker welfare guide</Link>
            {" "}for specifics</li>
          <li><strong>No soil analysis.</strong> You can&apos;t justify your fertilizer plan without it</li>
        </ul>

        <h2>After the Audit</h2>
        <p>
          If the auditor identifies non-conformances (and they usually do, even
          for experienced farms), you&apos;ll have 28 days to submit evidence of
          corrective actions for minor non-conformances. Major non-conformances
          need to be resolved before the certificate can be issued.
        </p>
        <p>
          The certificate is valid for one year. Start your next year&apos;s
          preparation on day one by maintaining your records continuously
          rather than reconstructing them before each audit. A system that
          tracks your data year-round turns annual audit preparation from a
          month-long project into a day of review.
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
          <Link href="/articles/globalg-a-p-certification-what-sme-farms-need" className="block p-4 border border-gray-200 rounded-lg hover:border-[#5B4A9E] transition-colors">
            <span className="font-medium text-gray-900">GlobalG.A.P. Certification: What SME Farms Need &rarr;</span>
            <span className="block text-sm text-gray-600">What the IFA standard actually requires</span>
          </Link>
          <Link href="/articles/globalg-a-p-grasp-worker-welfare" className="block p-4 border border-gray-200 rounded-lg hover:border-[#5B4A9E] transition-colors">
            <span className="font-medium text-gray-900">GlobalG.A.P. GRASP: Worker Welfare Requirements &rarr;</span>
            <span className="block text-sm text-gray-600">The social practice add-on explained</span>
          </Link>
        </div>
      </div>

    </div>
  );
}
