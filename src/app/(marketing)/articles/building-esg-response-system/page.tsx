import Link from "next/link";
import NewsletterSignup from "@/components/marketing/NewsletterSignup";

export const metadata = {
  title: "Building Your Farm's ESG Response System",
  description:
    "Stop scrambling every time a buyer sends a questionnaire. Build a centralised data system tied to your farming calendar that turns ESG responses from crisis into routine.",
  keywords: ["CSRD", "ESG", "sustainability reporting", "VSME", "agricultural compliance", "building", "response", "system", "agriculture", "sustainability"],
};

export default function ArticlePage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      {/* Navigation */}
      <nav className="mb-8">
        <Link
          href="/framework/stack-2-efficiency"
          className="group flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-[#4AA88C] transition-colors"
        >
          <span className="group-hover:-translate-x-1 transition-transform">
            &larr;
          </span>{" "}
          Back to Stack 2: Operational Efficiency
        </Link>
      </nav>

      {/* Header */}
      <header className="mb-12">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-8 h-8 rounded-full bg-[#5B4A9E] text-white flex items-center justify-center font-bold text-sm">
            2
          </div>
          <span className="text-sm text-gray-500">
            Stack 2: Operational Efficiency
          </span>
        </div>
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Building Your Farm&apos;s ESG Response System
        </h1>
        <p className="text-xl text-gray-600">
          The first questionnaire was a scramble. The second shouldn&apos;t be.
          Here&apos;s how to build a centralised data system that makes every
          future ESG request a matter of hours, not weeks.
        </p>
      </header>

      {/* Article Content - First Half */}
      <article className="prose prose-gray max-w-none">
        <p>
          You survived your first buyer ESG questionnaire. It took weeks of
          digging through filing cabinets, calling your accountant, and
          cross-referencing spray logs with fertilizer invoices. You got it done,
          but the process was painful.
        </p>
        <p>
          Now imagine a second buyer sends a similar request. And then a third.
          Each with slightly different questions, different formats, different
          deadlines. The scramble starts again. This is where most farm operations
          get stuck&mdash;trapped in a reactive cycle where every ESG request
          feels like the first one.
        </p>
        <p>
          Stack 2 of the Five Stacks Framework is about operational
          efficiency&mdash;turning measurement into a system. For ESG responses,
          that means building a Master Data File that lives at the centre of your
          farm&apos;s sustainability reporting.
        </p>

        <h2>The Master Data File</h2>
        <p>
          Your Master Data File is a single, centralised location&mdash;a
          spreadsheet, a shared folder, a database, whatever works for your
          operation&mdash;where all the information a buyer could ask for is
          maintained, current, and ready to use.
        </p>
        <p>
          Think of it as your farm&apos;s ESG control centre. When a
          questionnaire arrives, you open the Master Data File, find the relevant
          numbers, and transfer them. No phone calls. No searching. No panic.
        </p>
        <p>
          Here&apos;s how to structure it.
        </p>

        <h3>Tab 1: Farm Profile</h3>
        <p>
          The baseline facts about your operation that appear on almost every
          questionnaire.
        </p>
        <ul>
          <li>
            <strong>Location and boundaries.</strong> Farm address, coordinates,
            total land area in hectares, and a map reference if available.
          </li>
          <li>
            <strong>Land use breakdown.</strong> Arable hectares by crop, permanent
            pasture, temporary grass, woodland, set-aside, environmental scheme
            areas, buildings and yards.
          </li>
          <li>
            <strong>Enterprises.</strong> What does your farm produce? Dairy, beef,
            sheep, cereals, oilseeds, vegetables, poultry&mdash;list every
            enterprise with approximate scale (hectares or head count).
          </li>
          <li>
            <strong>Livestock numbers.</strong> Annual average head count by type:
            dairy cows, beef cattle (by age category), breeding ewes, lambs,
            sows, finishing pigs, laying hens, broilers. Use your annual average,
            not a single-day snapshot.
          </li>
          <li>
            <strong>Staff numbers.</strong> Permanent full-time, permanent
            part-time, seasonal workers (peak season count and duration), family
            members working on-farm.
          </li>
          <li>
            <strong>Key contacts.</strong> Who handles ESG queries? Agronomist
            name and contact, accountant, vet, farm assurance body.
          </li>
        </ul>

        <h3>Tab 2: Environmental Data</h3>
        <p>
          The quantitative environmental data that drives most ESG
          questionnaires.
        </p>
        <ul>
          <li>
            <strong>Diesel consumption.</strong> Annual litres from fuel delivery
            records. Break down by use if possible: field operations, transport,
            heating.
          </li>
          <li>
            <strong>Electricity consumption.</strong> Annual kWh from utility
            bills. Note any renewable generation (solar panels, wind turbine) and
            whether you export to grid.
          </li>
          <li>
            <strong>Other fuels.</strong> Gas oil, LPG, kerosene, natural
            gas&mdash;annual quantities and purpose.
          </li>
          <li>
            <strong>Fertilizer by type and nitrogen content.</strong> For each
            fertilizer product: product name, tonnes applied, nitrogen content
            (%), total kg N applied. Include organic manure applications if you
            calculate N content.
          </li>
          <li>
            <strong>Pesticides.</strong> Active ingredients applied, total kg or
            litres, by product. Your spray records already contain this.
          </li>
          <li>
            <strong>Water.</strong> Mains water volume from bills. Abstraction
            volume from meter readings or license limits. Irrigation volume if
            applicable.
          </li>
          <li>
            <strong>Waste.</strong> Farm plastics (silage wrap, fertilizer bags,
            crop covers)&mdash;estimated tonnes. Recycling participation. Waste
            oil disposal. Agrochemical container disposal.
          </li>
          <li>
            <strong>Soil tests.</strong> Most recent results by field or block: pH,
            P, K, Mg, organic matter percentage. Date of testing.
          </li>
        </ul>

        <h3>Tab 3: Social Data</h3>
        <p>
          Workforce and community data that questionnaires increasingly include.
        </p>
        <ul>
          <li>
            <strong>Workforce breakdown.</strong> Permanent staff by role,
            seasonal workers by month and duration, family workers. Note any
            agency-supplied labour.
          </li>
          <li>
            <strong>Safety record.</strong> Lost-time incidents, near-misses
            reported, RIDDOR-reportable events. If you have zero incidents,
            record that&mdash;it&apos;s a positive data point.
          </li>
          <li>
            <strong>Training records.</strong> Current certifications by person:
            sprayer certificates (PA1/PA2/PA6), chainsaw competence, first aid,
            telehandler/forklift, livestock handling, food hygiene. Include
            expiry dates.
          </li>
          <li>
            <strong>Working conditions.</strong> Seasonal worker accommodation
            details if applicable. Peak-season working hours. Pay rates relative
            to national minimum/living wage.
          </li>
        </ul>

        <h3>Tab 4: Governance</h3>
        <p>
          Certifications, policies, and management practices.
        </p>
        <ul>
          <li>
            <strong>Farm assurance membership.</strong> Red Tractor, LEAF Marque,
            QMS, Bord Bia, or equivalent. Membership numbers and expiry dates.
          </li>
          <li>
            <strong>Other certifications.</strong> Organic (certifying body and
            registration number), GlobalG.A.P., SALSA, BRC, any retailer-specific
            schemes.
          </li>
          <li>
            <strong>Environmental stewardship.</strong> Countryside Stewardship,
            SFI agreements, equivalent national schemes. Agreement reference,
            start/end dates, key measures.
          </li>
          <li>
            <strong>Policies.</strong> List every documented policy with its date
            and review schedule: health and safety, environmental management,
            chemical handling, animal welfare, biosecurity, worker welfare,
            anti-slavery statement (if required by turnover).
          </li>
        </ul>
      </article>

      {/* Mid-article Newsletter CTA */}
      <div className="my-12">
        <NewsletterSignup />
      </div>

      {/* Continue article - Second Half */}
      <article className="prose prose-gray max-w-none">
        <h2>Tying Data Collection to Farming Rhythms</h2>
        <p>
          The biggest reason farm data systems fail is that they&apos;re designed
          around reporting deadlines instead of farming operations. Your data
          collection should follow the rhythm of your farm, not the rhythm of
          buyer questionnaires.
        </p>

        <h3>Monthly Tasks</h3>
        <ul>
          <li>Record diesel deliveries and consumption</li>
          <li>Log electricity meter reading or file utility bill</li>
          <li>Note any safety incidents or near-misses</li>
          <li>Update seasonal worker records (arrivals, departures)</li>
        </ul>
        <p>
          Time required: 15-20 minutes. Do it on the same day each
          month&mdash;first Monday, end of month, whatever works. The habit matters
          more than the specific day.
        </p>

        <h3>Seasonal Tasks</h3>
        <ul>
          <li>
            <strong>Spring:</strong> Compile fertilizer plan and actual
            applications. Record pesticide use from spray logs. Update crop areas
            if rotations changed.
          </li>
          <li>
            <strong>Summer:</strong> Record irrigation volumes if applicable. Note
            conservation measure activities (hedge trimming, margin management).
          </li>
          <li>
            <strong>Autumn:</strong> Log harvest yields by crop. Record
            post-harvest soil test results. Update cover crop areas.
          </li>
          <li>
            <strong>Winter:</strong> Annual livestock reconciliation (births,
            deaths, purchases, sales). Review and renew training certifications.
            Update policies and review dates.
          </li>
        </ul>

        <h3>At Harvest</h3>
        <ul>
          <li>Yield records by field and crop&mdash;tonnes harvested, moisture content</li>
          <li>Straw/residue management (baled, chopped, removed)</li>
          <li>Post-harvest soil sampling if in your rotation</li>
        </ul>

        <h3>Year-End Reconciliation</h3>
        <ul>
          <li>
            Total annual fuel consumption (cross-check delivery records against
            accounts)
          </li>
          <li>Total electricity (sum of bills or meter readings)</li>
          <li>Livestock closing numbers by category</li>
          <li>Annual training summary&mdash;who holds what, what expires when</li>
          <li>
            Calculate emission estimates using the year&apos;s actual data and
            current emission factors
          </li>
          <li>Review and update the Farm Profile tab</li>
        </ul>
        <p>
          When a buyer questionnaire arrives in February, your year-end
          reconciliation from December means the data is already compiled and
          waiting. The response becomes assembly, not research.
        </p>

        <h2>From Scramble to System</h2>
        <p>
          The difference between a farm that dreads ESG questionnaires and one
          that handles them efficiently isn&apos;t the data they have&mdash;it&apos;s
          the system they&apos;ve built.
        </p>
        <p>
          <strong>Without a system:</strong> Buyer sends questionnaire. Farm
          manager spends two weeks calling the accountant, digging through spray
          records, estimating livestock numbers, and trying to remember which
          fields had cover crops. Response is late, incomplete, and stressful.
        </p>
        <p>
          <strong>With a system:</strong> Buyer sends questionnaire. Farm
          manager opens Master Data File, maps questions to existing tabs, copies
          the relevant figures. Response is complete within hours, not weeks.
        </p>
        <p>
          Tools like our Response Generator can accelerate this further by mapping
          questionnaire questions to your farm data&mdash;turning a multi-day
          scramble into a few hours of review. But the tool is only as good as
          the data behind it. The Master Data File is the foundation.
        </p>

        <h2>Handling Multiple Questionnaires</h2>
        <p>
          As your buyer relationships grow, you&apos;ll receive ESG requests from
          multiple sources. A retailer, a processor, a cooperative, an assurance
          body. Each asks similar questions in different formats.
        </p>
        <p>
          Your Master Data File eliminates the duplication. The underlying data is
          the same regardless of who asks. The only variable is how you present
          it&mdash;which fields map to which questions, what format they need,
          what level of detail.
        </p>
        <p>
          Keep a log of every questionnaire you complete: who asked, when, what
          they requested, what you provided, and any follow-up questions. Over
          time, this log reveals patterns&mdash;the questions every buyer asks,
          the data gaps that keep recurring, the topics gaining importance.
        </p>

        <h2>Version Control and Audit Trail</h2>
        <p>
          Treat your Master Data File like a managed document, not a rough
          spreadsheet.
        </p>
        <ul>
          <li>
            <strong>Date every update.</strong> When you add fuel data for March,
            note the date you entered it and the source (e.g., &ldquo;Entered
            15 April from fuel delivery docket #4521&rdquo;).
          </li>
          <li>
            <strong>Keep previous years.</strong> Don&apos;t overwrite last
            year&apos;s data. Create a new tab or file for each reporting period.
            Year-over-year comparison is increasingly requested.
          </li>
          <li>
            <strong>Note methodology changes.</strong> If you move from estimated
            to measured data, or change your emission factors, document when and
            why. Buyers may ask about trend changes.
          </li>
          <li>
            <strong>Back up regularly.</strong> Cloud storage, a USB drive at your
            accountant&apos;s office, or an emailed copy to yourself. Losing a
            year of compiled data would set you back significantly.
          </li>
        </ul>

        <h2>The Stack 2 Connection</h2>
        <p>
          Stack 1 is about knowing your numbers. Stack 2 is about making those
          numbers operational&mdash;embedding data collection into how your farm
          already works, so sustainability reporting becomes a byproduct of good
          management rather than a separate task.
        </p>
        <p>
          A farm with a working response system doesn&apos;t just answer
          questionnaires faster. It makes better operational decisions because the
          data is visible: where fuel is being consumed, which enterprises are
          most resource-intensive, where costs and emissions can be reduced
          simultaneously.
        </p>
        <p>
          The Master Data File isn&apos;t bureaucracy. It&apos;s operational
          intelligence. And once it&apos;s running, every ESG request becomes an
          opportunity to demonstrate competence rather than a source of stress.
        </p>
      </article>

      {/* Bottom CTA - Stack 2 */}
      <div className="mt-12 p-8 bg-[#5B4A9E] rounded-lg text-white">
        <h3 className="text-2xl font-bold mb-3">
          Ready to systematise your farm&apos;s ESG data?
        </h3>
        <p className="text-white/80 mb-6">
          Stack 2 of the Five Stacks Framework turns measurement into operational
          efficiency. Build a response system that works with your farming
          calendar&mdash;not against it&mdash;so every buyer request is handled
          with confidence.
        </p>
        <Link
          href="/framework/stack-2-efficiency"
          className="inline-block bg-white text-[#5B4A9E] px-6 py-3 rounded font-semibold hover:bg-gray-100 transition-colors"
        >
          Explore Stack 2: Operational Efficiency &rarr;
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
            className="block p-4 border border-gray-200 rounded-lg hover:border-[#5B4A9E] transition-colors"
          >
            <span className="font-medium text-gray-900">
              First ESG Questionnaire? Where Agricultural Suppliers Start &rarr;
            </span>
            <span className="block text-sm text-gray-600">
              Practical first steps when a buyer sends a sustainability request
            </span>
          </Link>
          <Link
            href="/articles/esg-reporting-small-farms"
            className="block p-4 border border-gray-200 rounded-lg hover:border-[#5B4A9E] transition-colors"
          >
            <span className="font-medium text-gray-900">
              ESG Reporting for Small Farms &rarr;
            </span>
            <span className="block text-sm text-gray-600">
              How smaller operations can meet sustainability reporting
              requirements without enterprise-scale resources
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}
