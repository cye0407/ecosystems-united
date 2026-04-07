import Link from "next/link";
import NewsletterSignup from "@/components/marketing/NewsletterSignup";

export const metadata = {
  title: "Your Buyer Sent a VSME Questionnaire — Here's How to Respond",
  description:
    "Step-by-step guide to responding to a VSME-aligned buyer questionnaire. From identifying what's being asked to structuring your response with confidence.",
  keywords: ["VSME", "buyer questionnaire", "ESG response", "CSRD", "sustainability reporting", "agricultural compliance", "agriculture", "sustainability"],
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
          Your Buyer Sent a VSME Questionnaire, Here&apos;s How to Respond
        </h1>
        <p className="text-xl text-gray-600">
          The questionnaire is in your inbox. The deadline is in weeks. Here is a structured approach to responding efficiently, honestly, and in a way that strengthens your position as a supplier.
        </p>
      </header>

      {/* Article Content */}
      <article className="prose prose-gray max-w-none">
        <p>
          You received an email from your buyer&apos;s sustainability team, or procurement, or quality assurance, with an attached questionnaire referencing VSME, CSRD, or supply chain sustainability data. The questionnaire might be a spreadsheet, a PDF form, an online portal, or a link to a platform like EcoVadis, Sedex, or IntegrityNext.
        </p>
        <p>
          Regardless of format, the underlying request is the same: your buyer needs structured sustainability data from your operation to meet their CSRD reporting obligations. Here is how to handle it without panic.
        </p>

        <h2>Step 1: Read the Entire Questionnaire Before Answering Anything</h2>
        <p>
          This sounds obvious. Most people skip it. They open the questionnaire, see the first section, and start filling it in. Then they hit a question on page four that changes how they should have answered page one.
        </p>
        <p>
          Read the full document first. Look for:
        </p>
        <ul>
          <li><strong>Reporting period</strong>, what time frame does the buyer want data for? Usually the last calendar year or financial year</li>
          <li><strong>Scope</strong>, does this cover your entire operation or just the portion that supplies this buyer?</li>
          <li><strong>Mandatory vs. optional sections</strong>, some questionnaires mark sections as required or optional. Focus on mandatory first</li>
          <li><strong>Data format</strong>, do they want specific units (MWh, tonnes CO2e, m&sup3;)? Match their format exactly</li>
          <li><strong>Evidence requirements</strong>, do they want supporting documents (certificates, policies, audit reports) attached?</li>
          <li><strong>Deadline</strong>, when is the response due? Plan backwards from this date</li>
        </ul>

        <h2>Step 2: Map Questions to Your Existing Data</h2>
        <p>
          Most VSME-aligned questionnaires ask for variations of the same core data. Map each section to where that data already exists in your operation:
        </p>
        <ul>
          <li><strong>Energy questions</strong> &rarr; utility bills, fuel invoices, meter readings</li>
          <li><strong>Emissions questions</strong> &rarr; calculated from energy data using standard factors</li>
          <li><strong>Workforce questions</strong> &rarr; payroll records, HR files, accident book, training logs</li>
          <li><strong>Water questions</strong> &rarr; utility bills, abstraction records, irrigation logs</li>
          <li><strong>Waste questions</strong> &rarr; waste transfer notes, recycling records, skip hire invoices</li>
          <li><strong>Biodiversity questions</strong> &rarr; farm maps, stewardship agreements, environmental records</li>
          <li><strong>Policy questions</strong> &rarr; existing farm policies, assurance documentation, management plans</li>
          <li><strong>Certification questions</strong> &rarr; certificates, audit reports (GlobalG.A.P., organic, LEAF, Red Tractor)</li>
        </ul>
        <p>
          If you have been <Link href="/articles/building-baseline">building your operational baseline</Link>, most of this is already structured. If not, this questionnaire is the catalyst to start.
        </p>

        <h2>Step 3: Identify Gaps Honestly</h2>
        <p>
          You will not have perfect data for every question. That is normal. The important thing is how you handle gaps:
        </p>
        <ul>
          <li><strong>Data you have but need to convert</strong>, fuel in liters but they ask for MWh, or electricity in kWh but they want tonnes CO2e. This is a calculation gap, not a data gap. Standard conversion factors resolve it</li>
          <li><strong>Data you have but not for the right period</strong>, you have last year&apos;s figures but they want this year&apos;s. Use available data and note the time mismatch</li>
          <li><strong>Data you do not collect</strong>, for example, water use from an unmetered borehole. State that it is not currently measured, describe your estimation methodology if you have one, and note plans to improve (e.g., meter installation)</li>
          <li><strong>Questions that do not apply</strong>, a question about marine resources for a landlocked arable farm. Mark as not applicable with a brief explanation</li>
        </ul>
        <p>
          The worst response to a gap is silence. The second worst is making up a number. The best response is an honest statement of what you know, what you do not know, and what you are doing about it. Read more about <Link href="/articles/missing-esg-data">handling missing ESG data</Link>.
        </p>

        <h2>Step 4: Structure Your Responses</h2>
        <p>
          For each question, follow this pattern:
        </p>
        <ol>
          <li><strong>Direct answer</strong>, the number or statement they asked for. Lead with the data</li>
          <li><strong>Methodology note</strong>, brief explanation of how you arrived at the figure (e.g., &ldquo;calculated from fuel invoices using DEFRA 2024 emission factors&rdquo;)</li>
          <li><strong>Boundary statement</strong>, what is included and excluded (e.g., &ldquo;covers main farm site only, excludes rented grazing 15km away&rdquo;)</li>
          <li><strong>Context where helpful</strong>, if a number looks unusual, explain why (e.g., &ldquo;energy consumption higher than previous year due to new cold storage installation in Q3&rdquo;)</li>
        </ol>
        <p>
          This pattern builds credibility. A number without methodology looks like a guess. A number with methodology, boundary, and context looks like it came from an operation that understands its own performance.
        </p>

        <h2>Step 5: Leverage Your Certifications</h2>
        <p>
          If you hold farm assurance or environmental certifications, reference them explicitly:
        </p>
        <ul>
          <li><strong><Link href="/articles/globalg-a-p-certification-what-sme-farms-need">GlobalG.A.P. IFA</Link></strong>, covers food safety, environmental management, worker welfare, traceability. Reference your certificate number and last audit date</li>
          <li><strong><Link href="/articles/globalg-a-p-grasp-worker-welfare">GlobalG.A.P. GRASP</Link></strong>, specifically addresses social practices and worker welfare</li>
          <li><strong>Organic certification</strong>, demonstrates chemical input restrictions, biodiversity management, soil health practices</li>
          <li><strong>Environmental stewardship</strong>, habitat management, biodiversity commitments, buffer zones</li>
          <li><strong>Red Tractor, LEAF Marque, other assurance</strong>, each covers specific aspects of the VSME framework</li>
        </ul>
        <p>
          Certifications are third-party verified evidence. They carry more weight than self-declarations. If a questionnaire asks about your environmental management policy and you hold GlobalG.A.P., your IFA compliance is the policy in action.
        </p>
      </article>

      <div className="my-12">
        <NewsletterSignup />
      </div>

      <article className="prose prose-gray max-w-none">
        <h2>Step 6: Review Before Submitting</h2>
        <p>
          Before you send:
        </p>
        <ul>
          <li><strong>Check units</strong>, did they ask for MWh and you provided kWh? Liters instead of tonnes? Unit mismatches are the most common error</li>
          <li><strong>Check the reporting period</strong>, is all your data from the same time frame?</li>
          <li><strong>Check completeness</strong>, are there unanswered questions? Even &ldquo;not applicable&rdquo; is better than blank</li>
          <li><strong>Check consistency</strong>, do your numbers add up? If you report 50,000 liters of diesel and 10 tonnes CO2e, the emissions look too low (should be ~130 tonnes). Internal consistency matters</li>
          <li><strong>Attach evidence</strong>, if the questionnaire asked for supporting documents, include them. Certificates, policies, calculation spreadsheets</li>
        </ul>

        <h2>Step 7: Save Everything for Next Time</h2>
        <p>
          This will not be the last questionnaire you receive. Save:
        </p>
        <ul>
          <li>Your completed response (as submitted)</li>
          <li>The source data and calculations behind your answers</li>
          <li>Any feedback or follow-up questions from the buyer</li>
          <li>Notes on what was difficult or where data was missing</li>
        </ul>
        <p>
          Next year&apos;s questionnaire will ask for the same data with updated numbers. If your source data is structured and your methodology is documented, the second response takes a fraction of the first.
        </p>
        <p>
          This is the operational discipline that separates farms that scramble from farms that respond. The first questionnaire is the hardest. Everything after that builds on what you already have.
        </p>

        <h2>Common Mistakes to Avoid</h2>
        <ul>
          <li><strong>Ignoring the request</strong>, non-response signals to your buyer that you are not a viable long-term supplier. Even a partial response is better than silence</li>
          <li><strong>Inflating or fabricating data</strong>, buyers increasingly cross-reference data between suppliers and against benchmarks. Inconsistencies erode trust faster than gaps</li>
          <li><strong>Providing too much detail</strong>, answer what was asked. A 40-page response to a 10-question questionnaire suggests you do not understand what was requested</li>
          <li><strong>Treating it as a one-off</strong>, VSME data requests will be annual. Build infrastructure for ongoing data collection, not a panic response</li>
          <li><strong>Paying for a consultant when you could do it yourself</strong>, the <Link href="/articles/vsme-basic-module-explained">Basic Module datapoints</Link> are operational data you already have. Structure it yourself first, then decide if you need help</li>
        </ul>

        <h2>What If the Questionnaire Is Not VSME-Specific?</h2>
        <p>
          Many buyer questionnaires do not reference VSME by name. They may use EcoVadis, CDP Supply Chain, Sedex, or a proprietary format. The underlying data requirements overlap heavily with VSME.
        </p>
        <p>
          If you have VSME-ready data, you can respond to virtually any buyer sustainability questionnaire because the core metrics are universal: energy, emissions, water, waste, workforce, biodiversity, governance. The format changes; the data does not.
        </p>
        <p>
          This is why building a structured operational baseline matters more than preparing for any single questionnaire format. <Link href="/articles/building-esg-response-system">Build the system</Link>, and the responses follow.
        </p>
      </article>

      <div className="mt-12 p-8 bg-[#3D2E7C] rounded-lg text-white">
        <h3 className="text-2xl font-bold mb-3">Turn questionnaire panic into a 15-minute review</h3>
        <p className="text-white/80 mb-6">
          Track your operational data in the Five Stacks Tracker. When the next questionnaire arrives, use the Response Generator to draft answers from your verified data, with confidence scores so you know what is solid and what needs work.
        </p>
        <div className="flex flex-wrap gap-4">
          <Link href="/signup" className="inline-block bg-white text-[#3D2E7C] px-6 py-3 rounded font-semibold hover:bg-gray-100 transition-colors">
            Start Tracking Free &rarr;
          </Link>
          <Link href="/products" className="inline-block border border-white/60 text-white px-6 py-3 rounded font-semibold hover:bg-white/10 transition-colors">
            See Response Generator &rarr;
          </Link>
        </div>
      </div>

      <div className="mt-12 pt-8 border-t border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Further Reading</h3>
        <div className="space-y-3">
          <Link href="/articles/first-esg-questionnaire" className="block p-4 border border-gray-200 rounded-lg hover:border-[#3D2E7C] transition-colors">
            <span className="font-medium text-gray-900">First ESG Questionnaire? Where to Start &rarr;</span>
            <span className="block text-sm text-gray-600">The fundamentals if this is your very first sustainability data request</span>
          </Link>
          <Link href="/articles/missing-esg-data" className="block p-4 border border-gray-200 rounded-lg hover:border-[#3D2E7C] transition-colors">
            <span className="font-medium text-gray-900">Missing ESG Data: How to Respond Honestly &rarr;</span>
            <span className="block text-sm text-gray-600">Handling gaps without undermining your credibility</span>
          </Link>
          <Link href="/articles/vsme-five-stacks-mapping" className="block p-4 border border-gray-200 rounded-lg hover:border-[#3D2E7C] transition-colors">
            <span className="font-medium text-gray-900">How the Five Stacks Tracker Maps to VSME Datapoints &rarr;</span>
            <span className="block text-sm text-gray-600">Every VSME requirement matched to the tracker domain that captures it</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
