import Link from "next/link";
import BaselineCTA from "@/components/marketing/BaselineCTA";

export const metadata = {
  title: "The Complete Guide to Soil & Land Management for Farms",
  description: "Data-driven soil health, nutrient management, erosion control, and strategic land use for agricultural operations.",
  keywords: ["soil management", "soil health", "nutrient management", "erosion control", "land use planning", "cover crops", "tillage systems", "soil testing", "agricultural land", "soil organic matter"],
};

export default function SoilManagementGuidePage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      {/* Navigation */}
      <nav className="mb-8">
        <Link href="/framework/stack-1-metrics" className="group flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-[#4AA88C] transition-colors">
          <span className="group-hover:-translate-x-1 transition-transform">&larr;</span> Back to Stack 1: Core Metrics
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
          The Complete Guide to Soil &amp; Land Management
        </h1>
        <p className="text-xl text-gray-600">
          Data-driven soil health, nutrient management, and strategic land use for agricultural operations.
        </p>
      </header>

      {/* Article Content */}
      <article className="prose prose-gray max-w-none">
        <p>
          Soil is the most valuable asset on any agricultural operation, yet it is also the most poorly documented. Most farms can tell you exactly what they paid for seed, fertiliser, and diesel last year. Very few can tell you what happened to their soil organic matter, their nutrient balances, or their erosion rates over the same period.
        </p>
        <p>
          That gap matters more now than ever. Buyer ESG questionnaires increasingly ask about land management practices. CSRD reporting demands data on soil health, nutrient loading, and land use change. Certification schemes from organic to regenerative all require documented soil management plans. And behind all of these external pressures sits a simpler truth: operations that manage soil well spend less on inputs, lose less to erosion, and produce more consistently over time.
        </p>
        <p>
          This guide covers the full scope of soil and land management for agricultural operations &mdash; from testing and nutrient planning through to tillage decisions and long-term land use strategy. Every section links to a detailed article for the specific topic. The goal is to give you a single reference point for building a soil management programme that is both operationally sound and audit-defensible.
        </p>

        <h2>Start with What You Have: Soil Testing</h2>
        <p>
          You cannot manage what you have not measured. That principle applies to energy, water, waste, and it applies to soil. The starting point for any credible soil management programme is a structured <Link href="/articles/soil-testing-guide">soil testing protocol</Link> that gives you repeatable, comparable data over time.
        </p>
        <p>
          Most operations test soil sporadically &mdash; once before a new crop, or when something goes visibly wrong. That approach produces data points. It does not produce trends. For reporting purposes and for operational decision-making, you need consistent sampling methodology, consistent lab analysis, and consistent timing. A soil test taken in March and another taken in October from the same field are not comparable without significant caveats.
        </p>
        <p>
          The practical minimum is annual testing on a fixed schedule, using the same sampling protocol and the same laboratory. Test for pH, phosphorus, potassium, magnesium, organic matter, and texture at minimum. If you are in a programme that requires it, add biological indicators &mdash; microbial biomass carbon, respiration rates, or earthworm counts. The key is consistency. Three years of consistent data from a basic panel is worth more than one year of comprehensive analysis.
        </p>

        <h2>Building Soil Organic Matter</h2>
        <p>
          Soil organic matter is the single metric that connects soil health, carbon sequestration, water retention, and nutrient cycling. It is also the metric that most clearly demonstrates long-term stewardship to buyers and auditors. A farm that can show rising organic matter levels over five years is telling a story that no sustainability report can fabricate.
        </p>
        <p>
          The challenge is that <Link href="/articles/soil-organic-matter-building">building soil organic matter</Link> is slow. Depending on your starting point, soil type, and climate, meaningful increases take three to seven years of consistent practice. There are no shortcuts. But there are well-documented approaches: cover cropping, reduced tillage, organic amendments, diverse rotations, and managed residue retention.
        </p>
        <p>
          For reporting purposes, organic matter percentage from your annual soil tests becomes a key performance indicator. Track it by field or management zone. Set realistic targets &mdash; a 0.1 to 0.2 percentage point increase per year is genuinely excellent on most soil types. Document every practice that contributes: what cover crops were planted, what amendments were applied, what residue management was used. The data trail matters as much as the result.
        </p>

        <h2>Nutrient Management: Balancing Inputs and Outputs</h2>
        <p>
          Nutrient management is where soil health meets regulatory compliance most directly. Nitrate Vulnerable Zones, water quality regulations, and buyer sustainability requirements all converge on the same question: are you applying the right nutrients, in the right amounts, at the right time, in the right place?
        </p>
        <p>
          A structured <Link href="/articles/nutrient-management-planning">nutrient management plan</Link> turns that question into a documented system. It starts with soil test results, factors in crop requirements, accounts for all nutrient sources (mineral fertiliser, organic manures, atmospheric deposition, biological fixation), and produces field-level application plans that balance inputs against crop offtake.
        </p>
        <p>
          The operational benefit is direct: over-application of fertiliser is wasted money. Under-application costs yield. A nutrient balance that accounts for all sources and all removals optimises both. The reporting benefit is equally direct: when a buyer asks about your fertiliser use, you have a documented plan with field-level records rather than a vague estimate of total spend.
        </p>
        <p>
          Track nitrogen, phosphorus, and potassium balances annually. Calculate surplus or deficit per hectare. Where surpluses exist, document why and what steps you are taking to reduce them. This is the kind of data that transforms a compliance burden into an operational improvement tool.
        </p>

        <h2>Erosion: The Silent Loss</h2>
        <p>
          Soil erosion is the most expensive problem most farms never quantify. A millimetre of topsoil lost across a hundred hectares is roughly 1,500 tonnes of soil. That soil carries nutrients, organic matter, and biological activity that took decades to build. Yet because erosion happens gradually &mdash; except during dramatic events &mdash; it rarely appears in operational accounts.
        </p>
        <p>
          Effective <Link href="/articles/erosion-control-strategies">erosion control strategies</Link> start with identifying where erosion is occurring and how severe it is. Slopes, soil type, crop cover, rainfall patterns, and field boundaries all interact. The Universal Soil Loss Equation and its variants give you a framework for estimating erosion risk by field, which lets you prioritise interventions where they will have the most impact.
        </p>
        <p>
          Practical measures range from simple to structural: maintaining ground cover through winter, contour cultivation, grass waterways, buffer strips along watercourses, and managed drainage. Each measure has a documented effectiveness range. The choice depends on your specific risk profile, terrain, and budget.
        </p>
        <p>
          For reporting, document your erosion risk assessment, the control measures in place, and any observed erosion events. Photographic records are surprisingly effective for auditors. A dated photograph of a grass buffer strip after heavy rain demonstrates more than a paragraph of policy text.
        </p>
      </article>

      {/* Mid-article Newsletter */}
      <div className="my-12">
        <BaselineCTA />
      </div>

      {/* Continue article */}
      <article className="prose prose-gray max-w-none">
        <h2>Strategic Land Use Planning</h2>
        <p>
          How you allocate land across your operation determines almost everything else &mdash; what you can grow, what infrastructure you need, what environmental risks you face, and what opportunities you can pursue. Yet most operations inherit their land use pattern rather than designing it.
        </p>
        <p>
          <Link href="/articles/land-use-planning-farms">Strategic land use planning</Link> takes a whole-farm view. It maps current use against soil capability, identifies fields that are under-performing relative to their potential, and considers non-productive uses &mdash; biodiversity corridors, buffer zones, agroforestry strips &mdash; as part of the total land management picture rather than as concessions.
        </p>
        <p>
          From a reporting perspective, land use classification is a fundamental CSRD data point. Buyers want to know how much of your total area is in productive use, how much is set aside for environmental purposes, and whether any land use change has occurred. A land use map with clear classifications, updated annually, is one of the most useful documents you can have in your reporting file.
        </p>

        <h2>Managing Soil Compaction</h2>
        <p>
          Compaction is the structural counterpart to chemical soil degradation. Heavy machinery on wet soils creates compacted layers that restrict root growth, reduce water infiltration, increase runoff and erosion, and lower yields. The costs are real but diffuse &mdash; spread across reduced yields, increased fuel consumption for cultivation, and higher erosion risk.
        </p>
        <p>
          <Link href="/articles/soil-compaction-management">Soil compaction management</Link> combines prevention and remediation. Prevention means controlled traffic farming where feasible, matching tyre pressures to field conditions, avoiding fieldwork when soils are too wet, and managing headlands and gateways where compaction concentrates. Remediation means targeted subsoiling or deep cultivation &mdash; but only where compaction is confirmed, not as a routine insurance practice.
        </p>
        <p>
          Penetrometer readings give you quantifiable compaction data by field and depth. Recording these alongside yield maps and drainage performance builds a picture that connects soil structure to operational outcomes. That connection is what makes the data actionable rather than academic.
        </p>

        <h2>Cover Crops: Ground Cover as Infrastructure</h2>
        <p>
          Cover crops are not a single practice &mdash; they are a platform. Depending on species selection, a cover crop can fix nitrogen, scavenge residual nutrients, suppress weeds, break pest cycles, improve soil structure, increase organic matter, reduce erosion, and provide forage or biomass. The challenge is choosing the right cover crop for your specific objectives.
        </p>
        <p>
          The <Link href="/articles/cover-crop-selection-guide">cover crop selection guide</Link> works through the decision systematically: what is your primary objective, what is your soil type, what is the window between cash crops, what establishment method is available, and what termination method fits your system? A legume-grass mix for nitrogen fixation and structure requires different planning than a fast-establishing brassica for nutrient scavenging.
        </p>
        <p>
          For reporting, cover crop area as a percentage of total arable area is a widely requested metric. Track species used, sowing dates, termination dates, and estimated biomass production. If you are claiming soil carbon benefits, the biomass data becomes essential for any sequestration calculations.
        </p>

        <h2>Tillage Systems: Matching Practice to Purpose</h2>
        <p>
          The tillage debate &mdash; plough versus minimum tillage versus no-till &mdash; generates more heat than light in most agricultural discussions. The reality is that there is no universally correct tillage system. There are trade-offs, and the right choice depends on your soil type, climate, rotation, weed pressure, and equipment.
        </p>
        <p>
          <Link href="/articles/tillage-systems-compared">Comparing tillage systems</Link> on a data-driven basis means looking at the measurable outcomes: fuel consumption per hectare, soil organic matter trends, erosion rates, crop establishment costs, weed control costs, and yield. A system that reduces fuel costs but increases herbicide costs has not necessarily improved. A system that builds organic matter but cannot establish crops reliably in your conditions has limited value.
        </p>
        <p>
          The operational recommendation is to trial reduced tillage on appropriate fields rather than converting the whole farm at once. Measure the results &mdash; fuel use, establishment quality, yield, soil condition &mdash; for at least three years before drawing conclusions. Soil systems respond slowly to management changes, and one season of data is meaningless noise.
        </p>
        <p>
          For sustainability reporting, tillage system by field area is relevant to multiple indicators: energy use (fuel consumption), soil health (organic matter, compaction), and emissions (soil carbon, diesel combustion). Document what system you use on each field and why. If you are transitioning, document the transition plan and the metrics you are tracking.
        </p>

        <h2>Putting It Together: A Soil Management Programme</h2>
        <p>
          Individual practices matter, but the real value comes from integrating them into a coherent programme. Soil testing informs nutrient planning. Nutrient planning influences cover crop selection. Cover crop selection affects tillage decisions. Tillage decisions affect compaction risk. Compaction risk feeds back into land use planning. Everything connects.
        </p>
        <p>
          A complete soil management programme for reporting purposes includes: an annual soil testing schedule with consistent methodology, a nutrient management plan updated with each season&rsquo;s soil results, documented erosion risk assessment and control measures, a land use map with annual updates, compaction monitoring on high-risk fields, cover crop records by field and season, and tillage system documentation with rationale.
        </p>
        <p>
          That sounds like a lot of paperwork. In practice, most of it exists already in some form &mdash; in agronomist reports, fertiliser plans, cross-compliance records, and farm assurance documentation. The task is not creating new data. It is organising existing data into a structure that serves both operational decisions and external reporting.
        </p>

        <h2>Where to Start</h2>
        <p>
          If you do not currently have a structured soil management programme, start with testing. Get a consistent baseline across your fields. Everything else &mdash; nutrient planning, organic matter targets, erosion assessment &mdash; depends on knowing what you are working with.
        </p>
        <p>
          If you are already testing and planning nutrients but not documenting the broader picture, start connecting the pieces. Add cover crop records and tillage documentation to your existing data. Build the land use map. Calculate your nutrient balances. The data is probably there; the structure is not.
        </p>
        <p>
          If you are already doing all of this but struggling to present it for buyer questionnaires and sustainability reports, the metrics assessment below will help you identify which elements translate directly into reportable indicators and where the gaps remain.
        </p>
        <p>
          Soil management is a long game. The practices you implement this year will show results in three, five, ten years. But the documentation starts now, and the sooner you start building a data trail, the stronger your position when buyers, auditors, and regulators come asking questions.
        </p>
      </article>

      {/* Bottom CTA Section */}
      <div className="mt-12 p-8 bg-gray-900 rounded-lg text-white">
        <h3 className="text-xl font-bold mb-2">Find out where your operation stands</h3>
        <p className="text-gray-400 mb-6">
          The metrics assessment identifies which soil and land management data you are already tracking, where the gaps are, and what to prioritise next. Takes 5 minutes. No signup required.
        </p>
        <Link href="/tools/metrics-assessment" className="inline-block bg-[#4AA88C] text-white px-5 py-2 rounded font-medium hover:bg-[#3d8f77] transition-colors">
          Take the Metrics Assessment &rarr;
        </Link>
      </div>

      {/* Article Navigation */}
      <div className="mt-12 pt-8 border-t border-gray-200">
        <p className="text-sm text-gray-500 mb-4">All articles in this series:</p>
        <div className="space-y-3">
          <Link href="/articles/soil-testing-guide" className="block p-4 border border-gray-200 rounded-lg hover:border-[#4AA88C] transition-colors">
            <span className="font-medium text-gray-900">Complete Guide to Soil Testing &rarr;</span>
            <span className="block text-sm text-gray-600">Consistent sampling, lab analysis, and building comparable data over time</span>
          </Link>
          <Link href="/articles/soil-organic-matter-building" className="block p-4 border border-gray-200 rounded-lg hover:border-[#4AA88C] transition-colors">
            <span className="font-medium text-gray-900">Building Soil Organic Matter &rarr;</span>
            <span className="block text-sm text-gray-600">Practical approaches to raising organic matter with documented results</span>
          </Link>
          <Link href="/articles/nutrient-management-planning" className="block p-4 border border-gray-200 rounded-lg hover:border-[#4AA88C] transition-colors">
            <span className="font-medium text-gray-900">Nutrient Management Planning &rarr;</span>
            <span className="block text-sm text-gray-600">Balancing inputs and outputs for efficiency and compliance</span>
          </Link>
          <Link href="/articles/erosion-control-strategies" className="block p-4 border border-gray-200 rounded-lg hover:border-[#4AA88C] transition-colors">
            <span className="font-medium text-gray-900">Erosion Control Strategies &rarr;</span>
            <span className="block text-sm text-gray-600">Identifying risk, prioritising interventions, and documenting outcomes</span>
          </Link>
          <Link href="/articles/land-use-planning-farms" className="block p-4 border border-gray-200 rounded-lg hover:border-[#4AA88C] transition-colors">
            <span className="font-medium text-gray-900">Strategic Land Use Planning &rarr;</span>
            <span className="block text-sm text-gray-600">Whole-farm land allocation for productivity and reporting</span>
          </Link>
          <Link href="/articles/soil-compaction-management" className="block p-4 border border-gray-200 rounded-lg hover:border-[#4AA88C] transition-colors">
            <span className="font-medium text-gray-900">Soil Compaction Management &rarr;</span>
            <span className="block text-sm text-gray-600">Prevention, diagnosis, and targeted remediation</span>
          </Link>
          <Link href="/articles/cover-crop-selection-guide" className="block p-4 border border-gray-200 rounded-lg hover:border-[#4AA88C] transition-colors">
            <span className="font-medium text-gray-900">Cover Crop Selection Guide &rarr;</span>
            <span className="block text-sm text-gray-600">Matching species to objectives, soil types, and rotation windows</span>
          </Link>
          <Link href="/articles/tillage-systems-compared" className="block p-4 border border-gray-200 rounded-lg hover:border-[#4AA88C] transition-colors">
            <span className="font-medium text-gray-900">Tillage Systems Compared &rarr;</span>
            <span className="block text-sm text-gray-600">Data-driven comparison of plough, min-till, and no-till approaches</span>
          </Link>
        </div>
      </div>

      {/* Newsletter */}
      <div className="mt-12">
        <BaselineCTA />
      </div>
    </div>
  );
}
