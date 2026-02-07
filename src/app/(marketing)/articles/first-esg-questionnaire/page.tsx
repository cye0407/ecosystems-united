import Link from "next/link";
import NewsletterSignup from "@/components/marketing/NewsletterSignup";

export const metadata = {
  title: "First ESG Questionnaire? Where Agricultural Suppliers Start",
  description:
    "First ESG questionnaire from a buyer? Here's where agricultural operations start, what they're really asking for, and how to respond without prior sustainability reporting experience.",
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
          First ESG Questionnaire? Where Agricultural Suppliers Start
        </h1>
        <p className="text-xl text-gray-600">
          Your buyer sent a sustainability questionnaire. The questions ask about
          carbon emissions, biodiversity, worker welfare, and policies you may
          not have documented. Here&apos;s how to respond without panic.
        </p>
      </header>

      {/* Article Content */}
      <article className="prose prose-gray max-w-none">
        <p>
          The questionnaire arrived from your buyer&mdash;maybe a retailer, a
          food processor, or your cooperative. Perhaps through email with a
          spreadsheet attached, perhaps as an invitation to register on a
          platform you&apos;ve never heard of. It asks about carbon emissions,
          water use, biodiversity measures, seasonal worker conditions, and
          policies you may or may not have written down.
        </p>
        <p>
          You&apos;ve successfully run your farm for years&mdash;or
          decades&mdash;without any of this. Now a buyer you depend on is asking
          for information that feels completely outside your expertise. Where do
          you even begin?
        </p>
        <p>
          This guide is for agricultural operations encountering ESG requests for
          the first time. No sustainability background required. No judgment
          about why you haven&apos;t done this before. Just a practical starting
          point.
        </p>

        <h2>First, Don&apos;t Panic</h2>
        <p>
          The urgency you feel is manufactured by unfamiliarity, not by actual
          complexity. ESG questionnaires look intimidating because they use
          jargon and cover topics outside your usual operations. But the
          underlying requests are mostly straightforward:
        </p>
        <ul>
          <li>How much diesel, electricity, and heating fuel do you use?</li>
          <li>What inputs go onto your land (fertilizer, pesticides)?</li>
          <li>How do you manage water, waste, and biodiversity?</li>
          <li>How do you treat your workers, including seasonal staff?</li>
          <li>What policies and certifications guide your operations?</li>
        </ul>
        <p>
          You have answers to these questions. They just need to be organized and
          formatted in ways you&apos;ve never been asked to provide before.
        </p>
        <p>
          Thousands of farms are receiving these requests for the first time this
          year. The buyers sending them know their supply chains include
          operations at every stage of ESG maturity. They&apos;re not expecting
          perfection from a first response. They&apos;re expecting a good-faith
          effort to provide what you can.
        </p>

        <h2>Understand Why This Is Happening</h2>
        <p>
          Buyer ESG requests aren&apos;t random. They&apos;re driven by
          regulation&mdash;specifically the EU&apos;s Corporate Sustainability
          Reporting Directive (CSRD), which requires large companies to disclose
          detailed sustainability data including their supply chain&apos;s
          environmental impact.
        </p>
        <p>
          Your buyer isn&apos;t asking because they&apos;ve suddenly become
          passionate about sustainability. They&apos;re asking because regulators
          require them to report Scope 3 emissions&mdash;the carbon footprint of
          everything they source. Your farm is part of what they source. They
          need your data to complete their compliance obligations.
        </p>
        <p>
          This context matters because it tells you what buyers actually need:
          data they can use in their own reports. Not marketing language about
          your commitment to the land. Not vague aspirations. Concrete
          information they can plug into their disclosures.
        </p>

        <h2>The Three-Step First Response</h2>

        <h3>Step 1: Review the Questionnaire (1-2 hours)</h3>
        <p>
          Before gathering data, understand what&apos;s being asked. Read
          through the entire questionnaire without trying to answer anything.
          Note:
        </p>
        <ul>
          <li>
            What topics does it cover? (Environmental only? Social too?
            Governance?)
          </li>
          <li>
            What format are answers expected in? (Multiple choice? Numbers?
            Document uploads?)
          </li>
          <li>What&apos;s the deadline?</li>
          <li>What&apos;s mandatory versus optional?</li>
          <li>
            What questions genuinely don&apos;t apply to your operation?
          </li>
        </ul>
        <p>
          Many questionnaires include sections that don&apos;t apply to every
          farm. A crop farm won&apos;t have livestock methane data. A pastoral
          operation won&apos;t have pesticide application records. A small
          holding won&apos;t have complex supply chain data. Identifying
          what&apos;s not applicable saves time chasing data you don&apos;t need.
        </p>

        <h3>Step 2: Gather What You Already Have (1-2 weeks)</h3>
        <p>
          Most ESG data already exists somewhere on your farm. The challenge is
          knowing where to look.
        </p>
        <p>
          <strong>For environmental questions:</strong>
        </p>
        <ul>
          <li>
            Electricity bills show energy consumption (check with your
            accountant)
          </li>
          <li>
            Fuel receipts show diesel use for tractors and machinery (your fuel
            supplier or farm accounts)
          </li>
          <li>
            Fertilizer invoices show application rates and nitrogen content (your
            agronomist or supplier records)
          </li>
          <li>
            Spray records document pesticide use (required by law in most
            jurisdictions)
          </li>
          <li>
            Water extraction license shows abstraction volumes (if you irrigate)
          </li>
          <li>
            Livestock movement records show herd/flock numbers (required for
            traceability)
          </li>
          <li>
            Soil test results show organic matter and nutrient levels (from your
            agronomist)
          </li>
          <li>
            Farm assurance audit reports cover many environmental practices
          </li>
        </ul>
        <p>
          <strong>For social questions:</strong>
        </p>
        <ul>
          <li>
            Payroll records have employee counts, including seasonal workers
          </li>
          <li>Farm safety logs have incident and near-miss records</li>
          <li>
            Training certificates show sprayer qualifications (PA1/PA2),
            chainsaw, first aid
          </li>
          <li>
            Existing farm safety policy covers most workforce practice questions
          </li>
        </ul>
        <p>
          <strong>For governance questions:</strong>
        </p>
        <ul>
          <li>
            Farm assurance membership (Red Tractor, LEAF, QMS) covers quality
            and standards
          </li>
          <li>Organic certification documentation if applicable</li>
          <li>
            Environmental stewardship agreements show conservation commitments
          </li>
          <li>Food safety certifications (SALSA, GlobalG.A.P.)</li>
        </ul>
        <p>
          Don&apos;t create documents you don&apos;t have. If the questionnaire
          asks for a formal environmental policy and you don&apos;t have one, the
          honest answer is &ldquo;No, we don&apos;t have a formal environmental
          policy.&rdquo; That&apos;s a legitimate response for a farm new to ESG
          reporting.
        </p>

        <h3>Step 3: Complete and Submit (2-4 hours)</h3>
        <p>
          With data gathered, work through the questionnaire systematically:
        </p>
        <p>
          <strong>For quantitative questions:</strong> Enter the numbers
          you&apos;ve gathered. Note your methodology if there&apos;s space.
          Indicate what&apos;s measured versus estimated.
        </p>
        <p>
          <strong>For text questions:</strong> Keep answers factual and specific.
          &ldquo;We track diesel consumption monthly through fuel delivery
          records and maintain spray logs for all pesticide applications&rdquo;
          beats &ldquo;We are committed to environmental stewardship.&rdquo;
        </p>
        <p>
          <strong>For questions you can&apos;t answer:</strong> Use &ldquo;Not
          applicable&rdquo; for genuinely irrelevant questions. For questions
          where you lack data, note that you don&apos;t currently track this
          metric. Leaving fields blank with no explanation is worse than
          explaining why you can&apos;t answer.
        </p>
      </article>

      {/* Mid-article Newsletter CTA */}
      <div className="my-12">
        <NewsletterSignup />
      </div>

      {/* Continue article */}
      <article className="prose prose-gray max-w-none">
        <h2>Common First-Timer Questions</h2>
        <p>
          <strong>
            What if I don&apos;t have the policies they&apos;re asking about?
          </strong>
        </p>
        <p>
          Many questionnaires ask about environmental policies, worker welfare
          policies, and codes of conduct. If you don&apos;t have formal
          documented policies, that&apos;s a legitimate answer. You can add that
          you&apos;re developing one if that&apos;s true, but don&apos;t claim to
          have documents that don&apos;t exist.
        </p>

        <p>
          <strong>What if my numbers look bad?</strong>
        </p>
        <p>
          You have no idea what others report. And &ldquo;bad&rdquo; is
          relative&mdash;a farm that actually measures its diesel consumption and
          fertilizer use is more credible than one that claims zero impact.
          Buyers want accurate data, even if it shows room for improvement.
        </p>

        <p>
          <strong>
            I already have farm assurance&mdash;isn&apos;t that enough?
          </strong>
        </p>
        <p>
          Farm assurance schemes like Red Tractor cover many ESG topics, but ESG
          questionnaires often ask for specific quantitative data (exact kWh,
          litres, tonnes CO2e) that assurance audits don&apos;t require. Your
          assurance membership is a strong foundation&mdash;it just needs
          supplementing with actual numbers.
        </p>

        <p>
          <strong>Should I hire a consultant?</strong>
        </p>
        <p>
          For a first-time response to a standard buyer questionnaire, probably
          not. The cost-benefit rarely makes sense for a farm operation. Your own
          records, your accountant&apos;s data, and your agronomist&apos;s
          reports contain most of what&apos;s needed.
        </p>

        <h2>After You Submit</h2>
        <p>Once your first response is complete, capture what you learned:</p>
        <p>
          <strong>Document your sources.</strong> Where did each piece of data
          come from? Your accountant? Your spray records? Your fuel supplier?
          This makes next year&apos;s response dramatically easier.
        </p>
        <p>
          <strong>Note the gaps.</strong> What couldn&apos;t you answer? What
          took longest to find? These are the areas to improve before the next
          request.
        </p>
        <p>
          <strong>Save your answers.</strong> You&apos;ll receive similar
          questionnaires from other buyers. Having your responses saved means
          future requests start from 70% complete rather than zero.
        </p>
        <p>
          <strong>Consider what to track going forward.</strong> If gathering
          last year&apos;s diesel data required digging through a year of
          receipts, set up a simple monthly log. Future you will be grateful.
        </p>

        <h2>The Stack 1 Connection</h2>
        <p>
          Your first ESG questionnaire is the hardest one you&apos;ll complete.
          Every subsequent request benefits from work you&apos;ve already done.
        </p>
        <p>
          This is exactly what Stack 1&mdash;Core Metrics&mdash;is about:
          building a defensible baseline. Not perfection, not transformation.
          Just honest measurement of where you are today, organized so you can
          respond to anyone who asks.
        </p>
        <p>
          Farms that treat the first request as a one-time fire drill repeat the
          scramble every time. Farms that treat it as establishing a
          foundation&mdash;saving answers, documenting sources, beginning to
          track data&mdash;find that the second request takes half the time and
          the fifth becomes routine.
        </p>
      </article>

      {/* Bottom CTA - Stack 1 */}
      <div className="mt-12 p-8 bg-[#3D2E7C] rounded-lg text-white">
        <h3 className="text-2xl font-bold mb-3">
          Ready to build your baseline?
        </h3>
        <p className="text-white/80 mb-6">
          Your first ESG questionnaire reveals what you need to measure. Stack 1
          of the Five Stacks Framework helps you turn that scramble into a
          system&mdash;defensible data you can provide to any buyer, any time.
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
              What agricultural suppliers need to know about carbon data requests
            </span>
          </Link>
          <Link
            href="/articles/missing-esg-data"
            className="block p-4 border border-gray-200 rounded-lg hover:border-[#3D2E7C] transition-colors"
          >
            <span className="font-medium text-gray-900">
              Missing ESG Data: How to Respond Honestly &rarr;
            </span>
            <span className="block text-sm text-gray-600">
              Professional strategies when you don&apos;t have everything
              they&apos;re asking for
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}
