import Link from "next/link";
import BaselineCTA from "@/components/marketing/BaselineCTA";

export const metadata = {
  title: "Biodiversity on the Farm: Measuring, Creating, and Monetizing Habitat",
  description: "How farms measure, create, and monetize biodiversity — from assessment methods to hedgerow economics and biodiversity net gain.",
  keywords: ["biodiversity", "farm biodiversity", "biodiversity net gain", "hedgerow management", "pollinator habitat", "biodiversity assessment", "agriculture", "habitat creation", "regenerative agriculture"],
};

export default function BiodiversityGuidePage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      {/* Navigation */}
      <nav className="mb-8">
        <Link href="/framework/stack-5-regeneration" className="group flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-[#4AA88C] transition-colors">
          <span className="group-hover:-translate-x-1 transition-transform">&larr;</span> Back to Stack 5: Regeneration
        </Link>
      </nav>

      {/* Header */}
      <header className="mb-12">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-8 h-8 rounded-full bg-[#B8ADE3] text-white flex items-center justify-center font-bold text-sm">
            5
          </div>
          <span className="text-sm text-gray-500">Stack 5: Regeneration</span>
        </div>
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Biodiversity on the Farm: Measuring, Creating, and Monetizing Habitat
        </h1>
        <p className="text-xl text-gray-600">
          How agricultural operations can build biodiversity that meets reporting requirements and generates value.
        </p>
      </header>

      {/* Article Content */}
      <article className="prose prose-gray max-w-none">
        <p>
          Biodiversity has moved from the margins of sustainability reporting to the centre of it. Regulators, buyers, and lenders now treat habitat condition as a material risk &mdash; alongside emissions and water use. For agricultural operations, this shift changes the calculus entirely. Land that was considered unproductive suddenly has measurable, reportable, and in some cases monetizable value.
        </p>
        <p>
          This guide covers the practical reality of biodiversity on working farms: how to assess what you have, how to create habitat that delivers ecological function, and how to capture financial value from the effort. No aspirational language. No greenwashing. Just the infrastructure for turning biodiversity from a vague ambition into a documented operational asset.
        </p>

        <h2>Why Biodiversity Matters to Your Buyers Now</h2>
        <p>
          CSRD reporting requires large companies to disclose their impacts on biodiversity across the value chain. That means your farm. When a buyer reports under ESRS E4 (Biodiversity and Ecosystems), they need data from suppliers about land use, habitat condition, and species impact. The same cascade that brought carbon questionnaires to your inbox is now bringing biodiversity questionnaires.
        </p>
        <p>
          The difference is that biodiversity data is harder to fake. You cannot buy offsets and call it done. Buyers and auditors want to see what habitat exists on your land, what condition it is in, and what you are doing to maintain or improve it. This requires a <Link href="/articles/biodiversity-assessment-farms">biodiversity assessment</Link> &mdash; a structured evaluation of the ecological features on your operation.
        </p>
        <p>
          Operations that have already completed a baseline assessment are months ahead of those still treating biodiversity as someone else&rsquo;s problem. The regulatory timeline is not slowing down.
        </p>

        <h2>Starting With Assessment: Know What You Have</h2>
        <p>
          You cannot manage what you have not measured, and biodiversity is no exception. A <Link href="/articles/biodiversity-assessment-farms">biodiversity assessment for farms</Link> maps the ecological features across your holding &mdash; hedgerows, ponds, field margins, woodland edges, watercourses, rough grassland, and any other semi-natural habitat.
        </p>
        <p>
          The assessment is not a species-by-species catalogue. For most agricultural operations, it is a habitat-level evaluation: what types of habitat exist, what condition are they in, and what is their connectivity. This approach is proportionate to the scale of a working farm and aligns with the metrics buyers and regulators actually request.
        </p>
        <p>
          Critically, the assessment establishes your baseline. Every future improvement &mdash; every hedgerow planted, every margin widened, every pond restored &mdash; is measured against this starting point. Without a documented baseline, you cannot demonstrate progress. And demonstrating progress is where the financial value sits.
        </p>

        <h2>Hedgerows: The Infrastructure of Farm Biodiversity</h2>
        <p>
          If biodiversity on the farm has a backbone, it is the hedgerow network. Hedgerows provide nesting habitat for birds, foraging corridors for mammals, overwintering sites for beneficial insects, and root systems that reduce soil erosion and surface runoff. They are also the most economically quantifiable biodiversity feature on most farms.
        </p>
        <p>
          The economics of <Link href="/articles/hedgerow-management-economics">hedgerow management</Link> are more favourable than most farmers assume. Establishment costs are real but front-loaded. Ongoing management &mdash; trimming on a two or three-year rotation rather than annually &mdash; actually reduces costs compared to the standard annual flail. The payback comes through multiple channels: agri-environment scheme payments, reduced input costs on sheltered fields, carbon sequestration credits, and increasingly through buyer sustainability scorecards that reward documented habitat management.
        </p>
        <p>
          The key insight from hedgerow economics is that management regime matters more than total length. A well-managed hedgerow &mdash; tall, thick, with a wide base and diverse species composition &mdash; delivers several times the ecological value of a tightly trimmed single-species line. Changing how you manage existing hedgerows often delivers more biodiversity uplift than planting new ones.
        </p>

        <h2>Pollinator Habitat: Function Over Aesthetics</h2>
        <p>
          Pollinator decline is one of the most publicly visible biodiversity issues, and for good reason. Approximately seventy-five percent of global food crops depend to some degree on animal pollination. For agricultural operations, pollinator habitat is not a nice-to-have &mdash; it is functional infrastructure that directly supports productivity.
        </p>
        <p>
          Building effective <Link href="/articles/pollinator-habitat-farm">pollinator habitat on the farm</Link> requires understanding what pollinators actually need: continuous forage from March through October, undisturbed nesting sites within flight range of crops, and shelter from wind and rain. A wildflower strip that blooms for three weeks in June and then gets mown does not meet these requirements. A network of diverse margins, hedgerow bases, and permanent grassland patches does.
        </p>
        <p>
          The practical approach is to think in terms of pollinator infrastructure rather than pollinator gardens. Where are the gaps in the forage calendar? Where are nesting opportunities limited? Where does the landscape force pollinators to cross large open areas without shelter? Answering these questions and filling the gaps creates measurable habitat improvement that shows up in both assessment scores and, over time, in crop yields on pollination-dependent enterprises.
        </p>
      </article>

      {/* Mid-article Newsletter */}
      <div className="my-12">
        <BaselineCTA />
      </div>

      {/* Continue article */}
      <article className="prose prose-gray max-w-none">
        <h2>Biodiversity Net Gain: The Regulatory and Financial Frontier</h2>
        <p>
          <Link href="/articles/biodiversity-net-gain-agriculture">Biodiversity net gain (BNG)</Link> is reshaping how land is valued. Under BNG frameworks, any development that impacts habitat must deliver a measurable net increase in biodiversity &mdash; typically ten percent above the pre-development baseline. When development sites cannot achieve this on-site, they must purchase biodiversity units from off-site providers. Those providers are, increasingly, farms.
        </p>
        <p>
          For agricultural operations, BNG creates a genuine revenue stream from habitat creation and management. The market is still maturing, but early transactions have valued biodiversity units at significant premiums over agricultural rental income. The critical requirements are a registered baseline assessment, a legally binding habitat management plan of at least thirty years, and independent monitoring to verify delivery.
        </p>
        <p>
          BNG is not for every farm. The economics depend on location, existing habitat condition, and opportunity cost of the land. But for operations with marginal agricultural land, degraded habitats with high uplift potential, or proximity to development pressure, BNG can transform the financial equation for land management.
        </p>

        <h2>Integrating Biodiversity Into Existing Operations</h2>
        <p>
          The most common objection to biodiversity management is that it competes with production. On some margins, this is true &mdash; a field margin taken out of cropping does reduce output from that strip. But the framing misses the operational benefits.
        </p>
        <p>
          Well-placed habitat features reduce pest pressure by supporting natural predators. Hedgerows reduce wind damage and soil loss. Riparian buffers reduce watercourse pollution and associated regulatory risk. Field margins on poor-performing headlands may cost less in foregone crop value than they save in input costs.
        </p>
        <p>
          The farms that manage biodiversity most effectively do not bolt it onto existing systems &mdash; they integrate it into farm planning from the start. Habitat features are positioned where they deliver the most ecological function with the least production trade-off. This is landscape-level thinking applied at farm scale.
        </p>

        <h2>Building the Documentation Layer</h2>
        <p>
          Biodiversity without documentation is invisible to buyers, auditors, and payment schemes. The documentation layer for farm biodiversity includes your baseline assessment and date, a map of habitat features with condition ratings, the management plan for each feature type, records of management activities actually carried out, and any monitoring data such as species surveys or habitat condition reassessments.
        </p>
        <p>
          This documentation serves multiple purposes. It satisfies buyer questionnaire requirements under ESRS E4. It supports applications to agri-environment schemes. It provides evidence for BNG registration. And it creates an auditable record that demonstrates genuine habitat management rather than unsubstantiated claims.
        </p>
        <p>
          The same infrastructure-not-narratives principle applies here as it does to carbon data. A documented management plan with photographic evidence and dated records beats a glossy sustainability report every time.
        </p>

        <h2>Where to Start</h2>
        <p>
          If biodiversity management is new to your operation, the sequence matters:
        </p>
        <p>
          <strong>First:</strong> Complete a <Link href="/articles/biodiversity-assessment-farms">baseline biodiversity assessment</Link>. You need to know what you have before you can plan improvements or report to buyers.
        </p>
        <p>
          <strong>Second:</strong> Review your <Link href="/articles/hedgerow-management-economics">hedgerow management</Link>. Changes to existing management regimes often deliver the fastest and most cost-effective biodiversity gains.
        </p>
        <p>
          <strong>Third:</strong> Evaluate <Link href="/articles/pollinator-habitat-farm">pollinator habitat</Link> gaps. Identify where forage and nesting opportunities are missing and plan targeted interventions.
        </p>
        <p>
          <strong>Fourth:</strong> Investigate <Link href="/articles/biodiversity-net-gain-agriculture">biodiversity net gain</Link> opportunities. If your land and location suit BNG, the financial returns can be substantial and long-term.
        </p>
        <p>
          Biodiversity on the farm is no longer optional for operations in European supply chains. But unlike many compliance requirements, it offers genuine operational and financial upside for those who approach it with rigour rather than rhetoric. The farms that build real biodiversity infrastructure now &mdash; measured, documented, and managed for ecological function &mdash; are the ones that will capture value from the shift rather than being caught out by it.
        </p>
      </article>

      {/* Bottom CTA Section */}
      <div className="mt-12 p-8 bg-gray-900 rounded-lg text-white">
        <h3 className="text-xl font-bold mb-2">Assess your regeneration readiness</h3>
        <p className="text-gray-400 mb-6">
          The regeneration assessment evaluates where your operation stands on biodiversity, soil health, and ecosystem function &mdash; and identifies the highest-impact next steps. Takes 5 minutes. No signup required.
        </p>
        <Link href="/tools/regeneration-assessment" className="inline-block bg-[#4AA88C] text-white px-5 py-2 rounded font-medium hover:bg-[#3d8f77] transition-colors">
          Take the Regeneration Assessment &rarr;
        </Link>
      </div>

      {/* Article Navigation */}
      <div className="mt-12 pt-8 border-t border-gray-200">
        <p className="text-sm text-gray-500 mb-4">Articles in this series:</p>
        <div className="space-y-3">
          <Link href="/articles/biodiversity-assessment-farms" className="block p-4 border border-gray-200 rounded-lg hover:border-[#4AA88C] transition-colors">
            <span className="font-medium text-gray-900">Biodiversity Assessment for Farms &rarr;</span>
            <span className="block text-sm text-gray-600">How to map and evaluate the ecological features on your holding</span>
          </Link>
          <Link href="/articles/hedgerow-management-economics" className="block p-4 border border-gray-200 rounded-lg hover:border-[#4AA88C] transition-colors">
            <span className="font-medium text-gray-900">Hedgerow Management &amp; Economics &rarr;</span>
            <span className="block text-sm text-gray-600">The financial case for better hedgerow management on working farms</span>
          </Link>
          <Link href="/articles/pollinator-habitat-farm" className="block p-4 border border-gray-200 rounded-lg hover:border-[#4AA88C] transition-colors">
            <span className="font-medium text-gray-900">Pollinator Habitat on the Farm &rarr;</span>
            <span className="block text-sm text-gray-600">Building functional pollinator infrastructure that supports productivity</span>
          </Link>
          <Link href="/articles/biodiversity-net-gain-agriculture" className="block p-4 border border-gray-200 rounded-lg hover:border-[#4AA88C] transition-colors">
            <span className="font-medium text-gray-900">Biodiversity Net Gain &rarr;</span>
            <span className="block text-sm text-gray-600">How farms can generate revenue from habitat creation under BNG frameworks</span>
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
