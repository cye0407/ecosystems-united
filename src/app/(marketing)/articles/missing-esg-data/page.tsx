import Link from "next/link";
import NewsletterSignup from "@/components/marketing/NewsletterSignup";

export const metadata = {
  title: "Missing ESG Data: How Agricultural Operations Respond Honestly",
  description:
    "Not every ESG datapoint exists on your farm yet. Here's how to categorize what's missing, use accepted estimation methods, and respond credibly without fabricating numbers.",
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
          Missing ESG Data: How Agricultural Operations Respond Honestly
        </h1>
        <p className="text-xl text-gray-600">
          You opened the buyer questionnaire and half the fields ask for data you
          don&apos;t have. That&apos;s normal. Here&apos;s how to categorize the
          gaps, use accepted estimation methods, and respond credibly&mdash;without
          making things up.
        </p>
      </header>

      {/* Article Content - First Half */}
      <article className="prose prose-gray max-w-none">
        <p>
          Every agricultural operation that receives its first ESG questionnaire
          hits the same wall: questions asking for data that simply doesn&apos;t
          exist in any file, spreadsheet, or shoebox on the farm. Soil organic
          carbon levels. Scope 3 emissions from purchased feed. Biodiversity
          baseline surveys. Methane per livestock unit.
        </p>
        <p>
          The instinct is either to panic, to leave every unknown field blank, or
          to fill them with numbers that sound plausible. All three responses are
          wrong. There is a better way, and it starts with understanding that
          &ldquo;missing data&rdquo; isn&apos;t a single category. What&apos;s
          missing on your farm falls into four distinct buckets&mdash;and each one
          has a different, honest response.
        </p>

        <h2>The Four Categories of Missing Farm Data</h2>
        <p>
          Before you answer a single question, walk through the questionnaire and
          sort every gap into one of these categories. It changes how you respond
          to each one.
        </p>

        <h3>Category 1: Data That Exists but Hasn&apos;t Been Gathered</h3>
        <p>
          This is the largest category for most farms&mdash;and the most
          encouraging one. The information exists somewhere in your operation; it
          just hasn&apos;t been pulled together for ESG purposes.
        </p>
        <ul>
          <li>
            <strong>Fuel receipts sitting with your accountant.</strong> Your
            diesel consumption is recorded in invoices from your fuel supplier.
            It&apos;s in your farm accounts. Nobody has summed it into an annual
            total and converted it to CO2e&mdash;but the raw data is there.
          </li>
          <li>
            <strong>Fertilizer records in your spray logs.</strong> If you keep
            spray records (and you&apos;re legally required to in most
            jurisdictions), your nitrogen application data exists. It just needs
            extracting and totalling.
          </li>
          <li>
            <strong>Livestock numbers in movement records.</strong> Your
            herd/flock numbers are in your movement records, your assurance
            audits, and your vet&apos;s files. Annual averages can be calculated
            from these.
          </li>
          <li>
            <strong>Electricity use on your utility bills.</strong> Total kWh is
            printed on every invoice. It just needs compiling for the reporting
            period.
          </li>
          <li>
            <strong>Training records in filing cabinets.</strong> Sprayer
            certificates (PA1/PA2), chainsaw qualifications, first aid
            training&mdash;these exist as certificates somewhere on the farm.
          </li>
        </ul>
        <p>
          The honest response for this category: provide the data. It takes time
          to collect, but the information is available. Most farms find that 50-70%
          of what a questionnaire asks for falls into this bucket.
        </p>

        <h3>Category 2: Data That Has Never Been Tracked</h3>
        <p>
          This is the genuinely missing data. Your farm has never measured it
          because nobody asked before and you had no reason to.
        </p>
        <ul>
          <li>
            <strong>Biodiversity baseline surveys.</strong> You may know you have
            hedgerows and a pond, but you&apos;ve never formally documented
            habitat features or species counts.
          </li>
          <li>
            <strong>Soil organic carbon measurements.</strong> Standard soil tests
            cover pH, P, and K. Organic matter or organic carbon testing is less
            common and often not included in routine analyses.
          </li>
          <li>
            <strong>Scope 3 emissions from purchased feed.</strong> You buy
            compound feed or straights. You know the tonnage. But the carbon
            footprint of that feed&apos;s production? That&apos;s data your feed
            supplier would need to provide.
          </li>
          <li>
            <strong>Water consumption volumes.</strong> If you&apos;re on mains
            water, bills show volume. If you abstract from a borehole or
            watercourse, you may have an abstraction license but no meter.
          </li>
        </ul>
        <p>
          The honest response: acknowledge the gap clearly. &ldquo;We do not
          currently track soil organic carbon levels. We plan to include organic
          matter analysis in our next soil testing cycle.&rdquo; This is far
          better than a blank field or a fabricated number.
        </p>

        <h3>Category 3: Data That Is Genuinely Not Applicable</h3>
        <p>
          ESG questionnaires are written for general agricultural operations.
          Many questions simply don&apos;t apply to your specific farm type.
        </p>
        <ul>
          <li>
            <strong>Crop farms with no livestock:</strong> Livestock methane
            questions, manure management, animal welfare policies&mdash;all
            genuinely not applicable.
          </li>
          <li>
            <strong>Pastoral operations with no arable:</strong> Pesticide
            application data, crop rotation details, harvest yield
            records&mdash;not applicable.
          </li>
          <li>
            <strong>Dryland farms with no irrigation:</strong> Water abstraction
            volumes, irrigation efficiency metrics&mdash;not applicable.
          </li>
          <li>
            <strong>Family operations with no employees:</strong> Workforce
            diversity statistics, employee grievance mechanisms, HR
            policies&mdash;not applicable in the traditional sense.
          </li>
        </ul>
        <p>
          The honest response: mark the field &ldquo;Not applicable&rdquo; with a
          brief explanation. &ldquo;Not applicable&mdash;arable operation with no
          livestock.&rdquo; This shows you understood the question and made a
          deliberate assessment, not that you skipped it.
        </p>

        <h3>Category 4: Data You Can Estimate Using Accepted Methods</h3>
        <p>
          This is the category many farms overlook&mdash;and it&apos;s the one
          that transforms a patchy response into a credible one. You have enough
          information to calculate a reasonable estimate using published methods.
        </p>
        <ul>
          <li>
            <strong>Livestock methane.</strong> You know your animal numbers by
            type. You&apos;ve never calculated methane emissions. But the IPCC
            publishes Tier 1 default emission factors per head by species and
            region. Multiply and you have a defensible estimate.
          </li>
          <li>
            <strong>Fertilizer N2O.</strong> You know how much nitrogen you
            applied. National inventory guidelines provide emission factors per kg
            of N applied. The calculation is straightforward.
          </li>
          <li>
            <strong>Diesel CO2.</strong> You know your annual diesel consumption
            in litres. The emission factor (2.68 kg CO2 per litre of diesel) is
            standard.
          </li>
          <li>
            <strong>Electricity CO2.</strong> You know your kWh. Your
            country&apos;s grid emission factor converts this to CO2e.
          </li>
        </ul>
        <p>
          The honest response: provide the estimate and state your methodology.
          &ldquo;Estimated using IPCC Tier 1 default factors. Based on an annual
          average of 180 dairy cows.&rdquo; Buyers and auditors accept this
          approach because it uses internationally recognised methods.
        </p>

        <h2>Accepted Estimation Methods for Farm Emissions</h2>
        <p>
          When you don&apos;t have directly measured data, these are the
          estimation approaches that ESG frameworks and buyers recognise as
          credible.
        </p>
        <p>
          <strong>IPCC Tier 1 factors per livestock head.</strong> The
          Intergovernmental Panel on Climate Change publishes default methane
          emission factors for every livestock type: dairy cattle, beef cattle,
          sheep, pigs, poultry, goats. These vary by region (Western Europe,
          Eastern Europe, etc.). Tier 1 is the simplest level&mdash;a single
          factor per animal per year. It&apos;s not precise for your specific herd,
          but it&apos;s the accepted starting point.
        </p>
        <p>
          <strong>National inventory factors for fertilizer N2O.</strong> Each
          country publishes national greenhouse gas inventory reports that include
          emission factors for nitrous oxide from applied nitrogen. These account
          for direct emissions (N2O released from soil after fertilizer
          application) and indirect emissions (from leaching and volatilisation).
        </p>
        <p>
          <strong>Regional average fuel consumption per hectare.</strong> If your
          fuel records are incomplete, industry benchmarks exist for diesel use per
          hectare by crop type and farming system. These are less accurate than
          your actual records but better than zero.
        </p>
        <p>
          <strong>Farm benchmarking data.</strong> Organisations like AHDB in the
          UK, Teagasc in Ireland, and equivalent bodies across Europe publish
          average resource-use figures for different farm types. These provide
          reasonable estimates when farm-specific data is unavailable.
        </p>
        <p>
          The hierarchy is clear: measured data is best, farm-specific estimates
          are next, regional averages are acceptable, and acknowledged gaps are
          better than fabricated precision.
        </p>
      </article>

      {/* Mid-article Newsletter CTA */}
      <div className="my-12">
        <NewsletterSignup />
      </div>

      {/* Continue article - Second Half */}
      <article className="prose prose-gray max-w-none">
        <h2>What NOT to Do with Missing Data</h2>
        <p>
          The mistakes farms make with data gaps are predictable and avoidable.
          Each one damages credibility more than the gap itself would.
        </p>

        <h3>Don&apos;t Claim Zero Emissions Because You&apos;re a &ldquo;Natural&rdquo; Farm</h3>
        <p>
          This happens more than you&apos;d expect. A farm that hasn&apos;t
          calculated emissions reports zero. The reasoning goes: &ldquo;We&apos;re
          a small family farm, we work with nature, we can&apos;t have significant
          emissions.&rdquo;
        </p>
        <p>
          Every farm has emissions. Livestock produce methane. Fertilizer
          application releases nitrous oxide. Machinery burns diesel. Even a
          well-managed organic farm has a carbon footprint. Reporting zero tells
          the buyer either that you don&apos;t understand what&apos;s being asked
          or that you&apos;re being dishonest. Neither builds trust.
        </p>

        <h3>Don&apos;t Ignore Livestock Methane</h3>
        <p>
          On a ruminant operation, enteric fermentation is typically 50-70% of
          total Scope 1 emissions. Omitting it is like a factory omitting its
          largest energy source. If the questionnaire asks about greenhouse gas
          emissions and you have cattle or sheep, methane must be addressed.
        </p>
        <p>
          Even if you can&apos;t provide a precise figure, an IPCC Tier 1
          estimate based on your herd size is expected. The calculation takes
          minutes: number of animals multiplied by the default factor for your
          livestock type. There is no defensible reason to skip it.
        </p>

        <h3>Don&apos;t Upload Generic Policy Templates</h3>
        <p>
          When questionnaires ask for an environmental policy or sustainability
          strategy, do not download a template from the internet, put your farm
          name on it, and upload it. Auditors and experienced buyers recognise
          these immediately. The language is generic, the commitments are vague,
          and the content doesn&apos;t reflect anything about your actual
          operation.
        </p>
        <p>
          A two-paragraph document that honestly describes what your farm actually
          does&mdash;and what you plan to improve&mdash;is worth more than ten
          pages of borrowed corporate language. If you don&apos;t have a formal
          policy, say so. Then describe your practices.
        </p>

        <h3>Don&apos;t Leave Fields Blank Without Explanation</h3>
        <p>
          A blank field is ambiguous. It could mean &ldquo;not applicable,&rdquo;
          &ldquo;don&apos;t know,&rdquo; &ldquo;refused to answer,&rdquo; or
          &ldquo;missed this question.&rdquo; The buyer can&apos;t tell the
          difference. Always indicate why a field is empty: not applicable, not
          currently tracked, or under development.
        </p>

        <h2>Building a Gap-Closing Plan</h2>
        <p>
          Once you&apos;ve categorised your missing data, you have a natural
          improvement roadmap.
        </p>
        <p>
          <strong>Immediate wins (this month):</strong> Gather Category 1
          data&mdash;the information that already exists but hasn&apos;t been
          compiled. Call your accountant for fuel totals. Pull your spray logs for
          nitrogen applied. Get your electricity bills for the reporting period.
        </p>
        <p>
          <strong>Quick estimates (this quarter):</strong> Calculate Category 4
          estimates using IPCC factors. Livestock methane, fertilizer N2O, diesel
          CO2, and electricity CO2 can all be estimated from data you already have.
        </p>
        <p>
          <strong>Data infrastructure (this year):</strong> Start tracking
          Category 2 items. Add organic matter to your next soil test. Install a
          water meter on your borehole. Begin a simple biodiversity log of habitat
          features. Set up a monthly fuel recording system.
        </p>
        <p>
          <strong>Ongoing improvement (years 2-3):</strong> Move from Tier 1
          defaults to Tier 2 calculations using farm-specific data. Replace
          regional averages with your actual measurements. Build a track record
          that shows year-over-year improvement.
        </p>

        <h2>How to Communicate Gaps Professionally</h2>
        <p>
          The language you use matters. Here are examples of how to frame missing
          data in ways that demonstrate competence rather than carelessness.
        </p>
        <p>
          Instead of leaving a field blank: &ldquo;Not currently tracked.
          Establishing monitoring for FY2026.&rdquo;
        </p>
        <p>
          Instead of guessing: &ldquo;Estimated at 485 tonnes CO2e using IPCC
          Tier 1 default factors for 180 dairy cows (Western Europe
          region).&rdquo;
        </p>
        <p>
          Instead of &ldquo;zero&rdquo;: &ldquo;No formal biodiversity survey
          conducted. The farm includes approximately 3.2 km of managed hedgerows,
          two farm ponds, and 4 hectares of environmental stewardship margins.
          Baseline survey planned for 2026.&rdquo;
        </p>
        <p>
          Instead of &ldquo;not applicable&rdquo; without context: &ldquo;Not
          applicable&mdash;300-hectare arable operation with no livestock
          enterprises.&rdquo;
        </p>
        <p>
          Each of these responses shows the buyer that you understand the question,
          you&apos;ve made a genuine assessment, and you have a plan. That&apos;s
          what builds long-term credibility&mdash;not perfection in year one.
        </p>

        <h2>The Stack 1 Perspective</h2>
        <p>
          Missing data is the starting condition for every farm that takes
          measurement seriously. Stack 1&mdash;Core Metrics&mdash;is not about
          having all the answers on day one. It&apos;s about knowing what you
          know, what you don&apos;t know, and what you can defensibly estimate.
        </p>
        <p>
          The farms that handle data gaps well share a common trait: they treat
          their first ESG response as a diagnostic, not an exam. They use it to
          identify where their data infrastructure needs building. They document
          their methodology. They create a plan to close gaps over time.
        </p>
        <p>
          Next year, when the same questionnaire arrives, most of those gaps will
          be filled. The year after, you&apos;ll be providing measured data where
          you once provided estimates, and estimates where you once had blanks.
          That trajectory matters more to buyers than any individual number.
        </p>
      </article>

      {/* Bottom CTA - Stack 1 */}
      <div className="mt-12 p-8 bg-[#3D2E7C] rounded-lg text-white">
        <h3 className="text-2xl font-bold mb-3">
          Turn data gaps into a measurement plan
        </h3>
        <p className="text-white/80 mb-6">
          Every farm starts with missing data. Stack 1 of the Five Stacks
          Framework helps you categorise what you have, estimate what you can, and
          build the infrastructure to close gaps systematically&mdash;so next
          year&apos;s response is stronger than this year&apos;s.
        </p>
        <Link
          href="/framework/stack-1-metrics"
          className="inline-block bg-white text-[#3D2E7C] px-6 py-3 rounded font-semibold hover:bg-gray-100 transition-colors"
        >
          Explore Stack 1: Core Metrics &rarr;
        </Link>
      </div>

      {/* Further Reading */}
      <div className="mt-12 pt-8 border-t border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">
          Further Reading
        </h3>
        <div className="space-y-3">
          <Link
            href="/articles/first-esg-questionnaire"
            className="block p-4 border border-gray-200 rounded-lg hover:border-[#3D2E7C] transition-colors"
          >
            <span className="font-medium text-gray-900">
              First ESG Questionnaire? Where Agricultural Suppliers Start &rarr;
            </span>
            <span className="block text-sm text-gray-600">
              Practical first steps when a buyer sends a sustainability request
            </span>
          </Link>
          <Link
            href="/articles/agricultural-sustainability-checklist"
            className="block p-4 border border-gray-200 rounded-lg hover:border-[#3D2E7C] transition-colors"
          >
            <span className="font-medium text-gray-900">
              The Complete Agricultural Sustainability Assessment Checklist &rarr;
            </span>
            <span className="block text-sm text-gray-600">
              Every datapoint buyers ask for, organised by E, S, and G with
              agriculture-specific detail
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}
