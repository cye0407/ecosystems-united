import Link from "next/link";
import NewsletterSignup from "@/components/marketing/NewsletterSignup";

export const metadata = {
  title: "The Complete Agricultural Sustainability Assessment Checklist",
  description:
    "Every ESG datapoint buyers ask agricultural operations for, organised by Environment, Social, and Governance. Use this checklist for gap analysis and to build your farm's data infrastructure.",
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
          The Complete Agricultural Sustainability Assessment Checklist
        </h1>
        <p className="text-xl text-gray-600">
          Every ESG datapoint that buyer questionnaires ask agricultural
          operations for&mdash;organised by Environment, Social, and Governance.
          Print this, work through it, and you&apos;ll know exactly where your
          farm stands.
        </p>
      </header>

      {/* Article Content - First Half */}
      <article className="prose prose-gray max-w-none">
        <p>
          This checklist compiles the sustainability datapoints that appear
          across buyer ESG questionnaires, VSME requirements, farm assurance
          audits, and CSRD-driven supply chain requests. It is written
          specifically for agricultural operations&mdash;not adapted from a
          generic corporate template.
        </p>
        <p>
          Not every item applies to every farm. A crop operation won&apos;t have
          livestock data. A pastoral farm won&apos;t have pesticide records. Work
          through the list, mark what you have, what you don&apos;t, and what
          doesn&apos;t apply. That gap analysis becomes your roadmap.
        </p>

        <h2>Environment</h2>

        <h3>Energy and Emissions</h3>
        <ul>
          <li>
            <strong>Diesel consumption (litres/year).</strong> Total farm diesel
            from fuel delivery records or accounts. Break down by field
            operations, transport, and heating if possible.
          </li>
          <li>
            <strong>Electricity consumption (kWh/year).</strong> From utility
            bills or meter readings. Note tariff type and whether you generate
            any renewable electricity on-farm (solar, wind).
          </li>
          <li>
            <strong>Other fuels.</strong> Gas oil, LPG, kerosene, natural gas,
            coal&mdash;annual quantities in litres, kg, or kWh as appropriate.
          </li>
          <li>
            <strong>Livestock by type and number.</strong> Annual average head
            count: dairy cows, beef cattle (breeding, finishing, calves), sheep
            (breeding ewes, lambs), pigs (sows, finishing), poultry (layers,
            broilers), goats, horses.
          </li>
          <li>
            <strong>Fertilizer&mdash;synthetic.</strong> For each product: product
            name, total kg applied, nitrogen content (%), total kg N applied
            annually. From spray logs and purchase invoices.
          </li>
          <li>
            <strong>Fertilizer&mdash;organic.</strong> Manure, slurry, digestate,
            compost: tonnes applied, estimated N content, application method.
          </li>
          <li>
            <strong>Scope 1 emissions calculation.</strong> Tonnes CO2e from
            diesel combustion, livestock enteric fermentation (methane), manure
            management (methane and N2O), fertilizer application (N2O), and any
            other direct sources. State methodology and emission factors used.
          </li>
          <li>
            <strong>Scope 2 emissions calculation.</strong> Tonnes CO2e from
            purchased electricity. State grid emission factor used and source.
          </li>
          <li>
            <strong>Scope 3 emissions (if available).</strong> Purchased feed,
            fertilizer manufacturing, seed, pesticide manufacturing, contracted
            transport. Note which categories are included and which are excluded.
          </li>
          <li>
            <strong>Emission intensity.</strong> Tonnes CO2e per tonne of product,
            per hectare, or per unit of output. Choose the metric most relevant
            to your buyers.
          </li>
        </ul>

        <h3>Land and Soil</h3>
        <ul>
          <li>
            <strong>Total farm area (hectares).</strong> Including all owned and
            rented land.
          </li>
          <li>
            <strong>Land use breakdown.</strong> Arable (by crop), permanent
            pasture, temporary grass, rough grazing, woodland, orchards,
            environmental scheme areas, buildings/yards, other.
          </li>
          <li>
            <strong>Crop rotation.</strong> Describe your typical rotation cycle.
            Note any changes from previous years.
          </li>
          <li>
            <strong>Soil testing.</strong> Most recent results by field or block:
            pH, P (phosphorus), K (potassium), Mg (magnesium), organic matter
            (%). Date of last test. Frequency of testing.
          </li>
          <li>
            <strong>Soil organic carbon.</strong> If tested separately from
            organic matter. Method used (loss on ignition, Walkley-Black, etc.).
          </li>
          <li>
            <strong>Tillage practices.</strong> Conventional plough, min-till,
            direct drill, strip-till&mdash;hectares under each system.
          </li>
          <li>
            <strong>Cover crops.</strong> Hectares sown, species used, timing
            (autumn-sown, overwinter, spring-destroyed).
          </li>
          <li>
            <strong>Erosion management.</strong> Measures in place: contour
            farming, buffer strips, beetle banks, drainage management.
          </li>
        </ul>

        <h3>Water</h3>
        <ul>
          <li>
            <strong>Total water consumption.</strong> Mains water from bills (m3
            or litres). Borehole/river abstraction from meter or license.
          </li>
          <li>
            <strong>Irrigation.</strong> Hectares irrigated, volume applied (m3),
            crop types irrigated, irrigation method (overhead, drip, pivot),
            water source.
          </li>
          <li>
            <strong>Livestock water use.</strong> Estimated from head count and
            standard consumption rates if not separately metered.
          </li>
          <li>
            <strong>Water quality.</strong> Any water quality monitoring data.
            Compliance with abstraction license conditions. Membership of
            catchment management schemes.
          </li>
        </ul>

        <h3>Biodiversity</h3>
        <ul>
          <li>
            <strong>Hedgerows.</strong> Approximate total length (km). Management
            regime (annually trimmed, rotationally managed, laid). Species
            composition if known.
          </li>
          <li>
            <strong>Ponds and watercourses.</strong> Number of ponds. Length of
            watercourses with buffer strips. Condition and management.
          </li>
          <li>
            <strong>Field margins and buffer strips.</strong> Total area (hectares)
            or length (km). Width. Management (annually cut, left fallow,
            wildflower mix).
          </li>
          <li>
            <strong>Environmental stewardship participation.</strong> Scheme name,
            agreement reference, key measures included, start and end dates.
          </li>
          <li>
            <strong>Pesticide use.</strong> Total active ingredient applied (kg).
            Number of different products used. Use of integrated pest management
            (IPM) approaches. Reduction targets if any.
          </li>
          <li>
            <strong>Habitat features.</strong> Woodland area, mature trees
            (approximate count), nesting sites, wildlife corridors, wetland
            areas, species-rich grassland.
          </li>
          <li>
            <strong>Biodiversity monitoring.</strong> Any species surveys, bird
            counts, pollinator monitoring, or baseline assessments conducted.
            Date and findings.
          </li>
        </ul>

        <h3>Waste</h3>
        <ul>
          <li>
            <strong>Farm plastics.</strong> Estimated tonnes of silage wrap,
            fertilizer bags, crop covers, bale wrap. Recycling arrangements
            (collection scheme membership).
          </li>
          <li>
            <strong>General recycling.</strong> Participation in recycling for
            cardboard, metal, tyres.
          </li>
          <li>
            <strong>Organic waste.</strong> Manure and slurry management method.
            Green waste composting. Anaerobic digestion if applicable.
          </li>
          <li>
            <strong>Hazardous waste.</strong> Waste oil disposal route.
            Agrochemical container management (triple-rinsed, returned to scheme).
            Battery disposal. Veterinary waste disposal.
          </li>
        </ul>
      </article>

      {/* Mid-article Newsletter CTA */}
      <div className="my-12">
        <NewsletterSignup />
      </div>

      {/* Continue article - Second Half */}
      <article className="prose prose-gray max-w-none">
        <h2>Social</h2>

        <h3>Workforce</h3>
        <ul>
          <li>
            <strong>Permanent staff.</strong> Full-time and part-time headcount.
            Roles (farm manager, tractor operator, stockperson, etc.).
          </li>
          <li>
            <strong>Seasonal workers.</strong> Peak number employed, duration of
            employment (weeks/months), source (direct hire, agency, gangmaster).
            Nationality breakdown if requested.
          </li>
          <li>
            <strong>Family workers.</strong> Number of family members working
            on-farm, whether paid or unpaid, hours contributed.
          </li>
          <li>
            <strong>Working hours during peak seasons.</strong> Average and
            maximum weekly hours during harvest, lambing, calving, or other peak
            periods.
          </li>
          <li>
            <strong>Seasonal worker accommodation.</strong> If provided: type
            (on-farm, arranged off-farm), condition, inspection regime.
          </li>
          <li>
            <strong>Wages.</strong> Compliance with national minimum/living wage.
            Overtime arrangements. Payment method and frequency.
          </li>
        </ul>

        <h3>Health and Safety</h3>
        <ul>
          <li>
            <strong>Risk assessments.</strong> Documented risk assessments for key
            activities: machinery operation, livestock handling, working at
            height, chemical handling, lone working.
          </li>
          <li>
            <strong>Incident record.</strong> Lost-time injuries in the reporting
            period. Near-misses reported. RIDDOR-reportable events. Fatalities.
          </li>
          <li>
            <strong>Machinery safety.</strong> Guarding compliance, PTO safety,
            roll-over protection. Maintenance and inspection records.
          </li>
          <li>
            <strong>Chemical exposure management.</strong> COSHH assessments for
            pesticides, veterinary medicines, cleaning chemicals. PPE provision
            and use. Exposure monitoring if applicable.
          </li>
          <li>
            <strong>Lone worker policy.</strong> Procedures for workers operating
            alone, especially during high-risk activities.
          </li>
          <li>
            <strong>PPE.</strong> Types provided (hearing protection, eye
            protection, respiratory equipment, chemical-resistant clothing).
            Replacement schedule.
          </li>
        </ul>

        <h3>Training and Development</h3>
        <ul>
          <li>
            <strong>Sprayer certification.</strong> PA1, PA2, PA6 (or national
            equivalent). Holder names and expiry dates.
          </li>
          <li>
            <strong>Chainsaw competence.</strong> CS30, CS31, CS38 (or
            equivalent). Holder names and expiry.
          </li>
          <li>
            <strong>First aid.</strong> Number of trained first aiders. Certificate
            dates and renewal schedule.
          </li>
          <li>
            <strong>Livestock handling.</strong> Formal training in animal
            handling, particularly for cattle. Awareness of livestock-related
            accident risks.
          </li>
          <li>
            <strong>Machinery competence.</strong> Telehandler, forklift,
            all-terrain vehicle training. Holder names and dates.
          </li>
          <li>
            <strong>Food hygiene.</strong> Relevant for operations involved in
            packing, processing, or direct sales.
          </li>
          <li>
            <strong>Sustainability/ESG training.</strong> Any staff training on
            environmental management, carbon awareness, or sustainability
            practices.
          </li>
        </ul>

        <h2>Governance</h2>

        <h3>Certifications and Assurance</h3>
        <ul>
          <li>
            <strong>Farm assurance.</strong> Red Tractor, QMS, FAWL, Bord Bia, or
            equivalent. Membership number, valid until date, most recent audit
            date and outcome.
          </li>
          <li>
            <strong>LEAF Marque.</strong> If certified: registration number,
            valid until, audit date.
          </li>
          <li>
            <strong>Organic certification.</strong> Certifying body (Soil
            Association, OF&amp;G, etc.), registration number, scope of
            certification, valid until.
          </li>
          <li>
            <strong>GlobalG.A.P.</strong> GGN number, certification scope, valid
            until.
          </li>
          <li>
            <strong>Food safety.</strong> SALSA, BRC, SQF, or retailer-specific
            schemes. Certification details and audit dates.
          </li>
          <li>
            <strong>Other relevant certifications.</strong> Carbon Trust, RSPO,
            Rainforest Alliance, retailer sustainability tiers, or any
            sector-specific schemes.
          </li>
        </ul>

        <h3>Policies and Documentation</h3>
        <ul>
          <li>
            <strong>Environmental management plan.</strong> Documented plan
            covering emissions reduction, resource efficiency, biodiversity
            management. Date, review schedule, who is responsible.
          </li>
          <li>
            <strong>Health and safety policy.</strong> Written H&amp;S policy
            (legally required above a certain staff threshold in most
            jurisdictions). Date and signatory.
          </li>
          <li>
            <strong>Worker welfare policy.</strong> Covering working conditions,
            fair treatment, grievance mechanisms. Particularly important for
            operations using seasonal or migrant labour.
          </li>
          <li>
            <strong>Chemical handling policy.</strong> Storage, application,
            disposal, emergency procedures for pesticides and veterinary
            medicines.
          </li>
          <li>
            <strong>Animal welfare policy.</strong> If livestock operation: housing
            standards, health management, transport, slaughter. Compliance with
            Five Freedoms or equivalent framework.
          </li>
          <li>
            <strong>Biosecurity plan.</strong> Disease prevention measures,
            visitor protocols, quarantine procedures, cleaning and disinfection
            schedules.
          </li>
          <li>
            <strong>Anti-slavery/modern slavery statement.</strong> Required for
            UK businesses above &pound;36m turnover, but increasingly requested
            by buyers from all suppliers.
          </li>
          <li>
            <strong>Sustainability targets.</strong> Documented reduction targets
            for emissions, energy, water, waste. Base year, target year,
            progress to date.
          </li>
        </ul>

        <h2>How to Use This Checklist</h2>
        <p>
          This checklist is a diagnostic tool, not a to-do list that must be
          completed in full before you respond to a buyer. Here&apos;s how to use
          it effectively.
        </p>
        <p>
          <strong>Step 1: Gap analysis.</strong> Work through every item. Mark
          each as: &ldquo;Have it&rdquo; (data exists and is accessible),
          &ldquo;Can get it&rdquo; (data exists but needs compiling),
          &ldquo;Don&apos;t have it&rdquo; (never tracked), or &ldquo;Not
          applicable&rdquo; (doesn&apos;t apply to your farm type).
        </p>
        <p>
          <strong>Step 2: Prioritise by buyer demand.</strong> Which datapoints
          do your current and prospective buyers ask for most frequently? These
          are your highest priorities. Energy, emissions, and fertilizer data
          appear on virtually every questionnaire. Biodiversity and social data
          are growing in importance but may be less urgent.
        </p>
        <p>
          <strong>Step 3: Organise centrally.</strong> Every item marked
          &ldquo;Have it&rdquo; or &ldquo;Can get it&rdquo; should be compiled
          into your Master Data File. One location, updated regularly, accessible
          when needed.
        </p>
        <p>
          <strong>Step 4: Assign ownership.</strong> On a family farm, this might
          be one person. On a larger operation, different staff may be responsible
          for different data areas: the farm manager for environmental data, the
          office manager for social and governance data, the agronomist for soil
          and input data.
        </p>
        <p>
          <strong>Step 5: Keep it current.</strong> A checklist is only useful if
          the data behind it is maintained. Tie updates to your farming
          calendar&mdash;monthly fuel records, seasonal spray logs, annual
          livestock reconciliation&mdash;so the system stays current without
          requiring a separate &ldquo;ESG data collection&rdquo; exercise.
        </p>

        <h2>The Stack 1 Foundation</h2>
        <p>
          This checklist is the practical expression of Stack 1&mdash;Core
          Metrics. It defines what you need to measure, where the data comes
          from, and how to organise it for use.
        </p>
        <p>
          A farm that can work through this checklist and account for every
          item&mdash;whether with data, an estimate, a plan to collect, or a
          reasoned &ldquo;not applicable&rdquo;&mdash;has a defensible baseline.
          That baseline is the foundation for everything else: efficient response
          systems (Stack 2), competitive advantage (Stack 3), operational
          resilience (Stack 4), and long-term regenerative value (Stack 5).
        </p>
        <p>
          Start where you are. Gather what you have. Document what you
          don&apos;t. Build from there. Every farm that takes sustainability
          reporting seriously began with exactly this exercise&mdash;and every one
          of them found they had more data than they expected.
        </p>
      </article>

      {/* Bottom CTA - Stack 1 */}
      <div className="mt-12 p-8 bg-[#3D2E7C] rounded-lg text-white">
        <h3 className="text-2xl font-bold mb-3">
          Ready to build your farm&apos;s measurement baseline?
        </h3>
        <p className="text-white/80 mb-6">
          This checklist shows you what to measure. Stack 1 of the Five Stacks
          Framework shows you how&mdash;turning scattered farm data into a
          defensible baseline that satisfies any buyer, any questionnaire, any
          time.
        </p>
        <Link
          href="/framework/stack-1-metrics"
          className="inline-block bg-white text-[#3D2E7C] px-6 py-3 rounded font-semibold hover:bg-gray-100 transition-colors"
        >
          Get Started with Stack 1: Core Metrics &rarr;
        </Link>
      </div>

      {/* Further Reading */}
      <div className="mt-12 pt-8 border-t border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">
          Further Reading
        </h3>
        <div className="space-y-3">
          <Link
            href="/articles/esg-reporting-small-farms"
            className="block p-4 border border-gray-200 rounded-lg hover:border-[#3D2E7C] transition-colors"
          >
            <span className="font-medium text-gray-900">
              ESG Reporting for Small Farms &rarr;
            </span>
            <span className="block text-sm text-gray-600">
              How smaller operations can meet sustainability reporting
              requirements without enterprise-scale resources
            </span>
          </Link>
          <Link
            href="/articles/scope-1-2-3-agriculture"
            className="block p-4 border border-gray-200 rounded-lg hover:border-[#3D2E7C] transition-colors"
          >
            <span className="font-medium text-gray-900">
              Scope 1, 2, 3 Emissions for Agricultural Operations &rarr;
            </span>
            <span className="block text-sm text-gray-600">
              The complete guide to what counts where on a farm
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}
