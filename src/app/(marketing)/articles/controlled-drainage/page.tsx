import Link from "next/link";
import BaselineCTA from "@/components/marketing/BaselineCTA";

export const metadata = {
  title: "Controlled Drainage and Drainage Water Management | Ecosystems United",
  description: "How controlled drainage structures work, retrofit vs new-install costs, realistic nitrate reduction and water retention benefits, and when drainage water management fits your fields.",
  keywords: ["irrigation", "water management", "drainage", "controlled drainage", "drainage water management", "nitrates directive", "agriculture", "sustainability"],
};

export default function ArticlePage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      {/* Navigation */}
      <nav className="mb-8">
        <Link href="/framework/stack-2-efficiency" className="group flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-[#5B4A9E] transition-colors">
          <span className="group-hover:-translate-x-1 transition-transform">&larr;</span> Back to Stack 2: Operational Efficiency
        </Link>
      </nav>

      {/* Header */}
      <header className="mb-12">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-8 h-8 rounded-full bg-[#5B4A9E] text-white flex items-center justify-center font-bold text-sm">
            2
          </div>
          <span className="text-sm text-gray-500">Stack 2: Operational Efficiency</span>
        </div>
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Controlled Drainage and Drainage Water Management
        </h1>
        <p className="text-xl text-gray-600">
          Conventional tile drainage answers one question: too wet. Controlled drainage answers three: too wet in spring, too dry in summer, and too much nitrate in the ditch.
        </p>
      </header>

      {/* Article Content */}
      <article className="prose prose-gray max-w-none">
        <p>
          Subsurface drainage is one of the highest-return investments on waterlogged land &mdash; and one of its side effects is becoming a regulatory problem. Tile drains give water a fast path out of the field, and that water carries nitrate with it. In an era of nitrate vulnerable zones, tightening water-quality rules, and hotter, drier summers, draining every field as fast as physically possible year-round is starting to look like a design flaw.
        </p>
        <p>
          Controlled drainage &mdash; also called drainage water management &mdash; is the fix. Instead of letting the tile system run unrestricted, you install a water control structure at the outlet and decide, season by season, how much drainage the field actually needs. It is an enhancement to a drainage system, not an alternative to one: the pipes stay, the management changes. This article covers what the structures do, what retrofitting costs against building new, what the research actually shows on nitrate and water retention, and &mdash; the part most articles skip &mdash; the field conditions where it does and does not fit.
        </p>

        <h2>What a Control Structure Actually Does</h2>
        <p>
          A water control structure is a simple in-line chamber &mdash; typically installed on a tile main near the outlet &mdash; holding a stack of removable boards or an adjustable weir. The board height sets the water table level the field drains down to: everything above the boards drains normally; everything below stays in the profile.
        </p>
        <p>
          The management calendar for most arable systems looks like this:
        </p>
        <ul>
          <li><strong>After harvest (autumn/winter):</strong> boards up. The field holds a higher water table through the non-growing season, when drains would otherwise export the most nitrate to no agronomic benefit.</li>
          <li><strong>Before spring fieldwork:</strong> boards out, weeks ahead of planned trafficking. The system drains freely so you get the trafficable, plantable seedbed the drainage was installed for.</li>
          <li><strong>Growing season:</strong> boards partially up once the crop is established, holding moisture within reach of the roots for the dry months.</li>
          <li><strong>Before harvest:</strong> boards out again for load-bearing capacity.
          </li>
        </ul>
        <p>
          The labour is modest &mdash; a few visits a year per structure to move boards &mdash; but it is real management, and it has to actually happen. A controlled drainage system managed like a conventional one delivers conventional results at a higher install cost. Automated, remotely adjustable structures exist and remove the trips, at a meaningful price premium.
        </p>

        <h2>Retrofit vs New Install</h2>
        <p>
          <strong>Retrofit.</strong> Most existing systematic tile systems on suitably flat ground can be retrofitted by cutting control structures into accessible mains. The economics depend almost entirely on how many structures your field needs (see the slope discussion below) and how easy the mains are to reach. Directionally, a supplied-and-installed manual control structure runs on the order of &euro;800&ndash;2,500 depending on pipe diameter, chamber size, and how much excavation the connection needs. One structure can manage anywhere from a couple of hectares to 20+ on genuinely flat land, so retrofit cost per hectare swings from trivial to prohibitive with topography.
        </p>
        <p>
          <strong>New install.</strong> Designing for control from the start is materially cheaper per hectare than retrofitting, because laterals can be laid along the contour so each structure commands the largest possible area. As covered in our{" "}
          <Link href="/articles/subsurface-drainage-design">subsurface drainage design and payback guide</Link>, adding controlled drainage to a new tile system typically adds roughly 5&ndash;15% to project cost, or on the order of &euro;150&ndash;300/ha for structures and management provisions &mdash; against &euro;1,800&ndash;4,500/ha for the tile system itself. If you are investing in new drainage on flat ground in 2026, designing the control in is close to a no-brainer; the marginal cost is small and the option value under both drought and regulation keeps rising.
        </p>
        <p>
          All figures are directional planning ranges for professional installation in Europe; contractor availability and site conditions move them substantially. Get local quotes before building a budget on them.
        </p>

        <h2>What the Research Shows</h2>
        <p>
          <strong>Nitrate: the headline benefit.</strong> Long-running North American field research &mdash; including the multi-state{" "}
          <a href="https://transformingdrainage.org" target="_blank" rel="noopener noreferrer">Transforming Drainage</a>{" "}
          project &mdash; consistently finds controlled drainage cuts annual nitrate loads leaving tile outlets by roughly 30&ndash;50%. The mechanism is mostly volume: less water leaves the field, so less nitrate goes with it, with some additional loss to denitrification in the wetter profile. Two honest caveats. First, results vary widely site to site and year to year &mdash; wet winters narrow the benefit because the system overflows the boards more often. Second, the reduction is measured at the field outlet; some studies find part of the retained water (and nitrate) leaves by other paths instead. It is a genuine, well-replicated water-quality improvement, not a magic zero.
        </p>
        <p>
          <strong>Water retention: the growing reason.</strong> Holding the water table higher into early summer keeps moisture within root reach exactly when European summers increasingly run short of it. Yield effects in the research are honestly modest on average &mdash; typically 0&ndash;5%, with the biggest responses in dry years on drought-prone soils &mdash; so treat yield as insurance value rather than a bankable annual gain. On flat fields with a water source, controlled structures also enable subirrigation: running water backwards into the tile system to feed the crop from below.
        </p>
        <p>
          <strong>What it does not do.</strong> Controlled drainage manages water that would have left through the tiles. It does little for phosphorus (which mostly travels with surface runoff and sediment), it does not fix compaction or surface ponding, and it cannot rescue a badly designed or collapsing tile system. Sequence matters: sound drainage first, then control.
        </p>
      </article>

      {/* Mid-article CTA */}
      <div className="my-12">
        <BaselineCTA />
      </div>

      {/* Continue article */}
      <article className="prose prose-gray max-w-none">
        <h2>When It Fits &mdash; and When It Doesn&apos;t</h2>
        <p>
          Controlled drainage is unusually topography-dependent, because each structure only controls the water table within a limited elevation band &mdash; commonly around 30&ndash;60 cm of head. The practical screen:
        </p>
        <ul>
          <li><strong>Good fit:</strong> flat fields &mdash; slopes under roughly 0.5% &mdash; with systematic (pattern) tile drainage and outlets on your own land. Here one structure commands many hectares and the cost per hectare is low. River valleys, polders, reclaimed marsh, and glacial till plains are classic candidates.</li>
          <li><strong>Marginal:</strong> gentle slopes of 0.5&ndash;1%. Doable if laterals run near the contour, but the structure count &mdash; and cost &mdash; climbs quickly.</li>
          <li><strong>Poor fit:</strong> rolling ground, random or legacy tile layouts with no mapped mains, or fields draining through a neighbour&apos;s system where you don&apos;t control the outlet.</li>
        </ul>
        <p>
          If your land is in the poor-fit column, the water-quality goal doesn&apos;t disappear &mdash; it moves to edge-of-field measures. Woodchip bioreactors, buffer strips, and constructed wetlands treat drainage water where holding it back in the profile isn&apos;t practical, and they combine well with in-field measures like cover crops and sharper nitrogen timing.
        </p>

        <h2>The EU Regulatory Context</h2>
        <p>
          For European farms, the regulatory direction is what turns controlled drainage from an interesting option into a strategic one. The{" "}
          <a href="https://environment.ec.europa.eu/topics/water/nitrates_en" target="_blank" rel="noopener noreferrer">Nitrates Directive</a>{" "}
          caps and conditions nitrogen use in designated nitrate vulnerable zones, and the Water Framework Directive holds member states to water-quality targets that many agricultural catchments still miss. Enforcement is tightening, not loosening: Germany&apos;s revised fertiliser ordinance (D&uuml;ngeverordnung) imposes hard nitrogen restrictions in nitrate-polluted &quot;red areas&quot; after an EU court ruling, and the Netherlands and Denmark have run comparable tightening cycles.
        </p>
        <p>
          That changes the economics in two ways. First, a measure that demonstrably cuts nitrate export from your outlets is evidence &mdash; for regulators, for water boards, and increasingly for buyers asking about water quality in their supply chain. Second, several member states and regions co-fund water-quality measures through CAP eco-schemes, agri-environment programmes, or water-board initiatives; drainage water management and edge-of-field treatment appear in a growing number of these catalogues. Availability and rates vary widely by country and year, so check your national programme &mdash; but do check, because co-funding routinely covers a substantial share of structure costs and shifts the payback math accordingly.
        </p>

        <h2>The Decision Framework</h2>
        <ol>
          <li><strong>Check the topography first.</strong> Under 0.5% slope with pattern tile: strong candidate. Otherwise, look at edge-of-field measures instead.</li>
          <li><strong>Map what you have.</strong> Retrofit feasibility hinges on knowing where the mains run and whether they&apos;re accessible. Old systems without as-built maps need investigation before quotes mean anything.</li>
          <li><strong>Price it both ways.</strong> Structures-per-hectare is the whole cost story. Get a retrofit quote for existing fields; if new drainage is planned anyway, price the designed-in option &mdash; it will look better.</li>
          <li><strong>Chase co-funding before you commit.</strong> A measure with public water-quality benefits is exactly what agri-environment budgets exist for.</li>
          <li><strong>Commit to the management.</strong> Boards that never move deliver nothing. Put the seasonal adjustments in the field calendar like any other operation, and log them &mdash; the record is your evidence.</li>
        </ol>
        <p>
          Controlled drainage sits in a sweet spot that is getting sweeter: it protects the yield case for drainage you already own, adds drought resilience you increasingly need, and produces the water-quality numbers regulators and buyers increasingly ask for &mdash; all for a marginal cost that is small next to the drainage system itself. On flat, tiled ground, it is one of the rare investments that pays in efficiency and compliance at the same time.
        </p>

        <h2>Sources</h2>
        <ul>
          <li>
            <a href="https://transformingdrainage.org" target="_blank" rel="noopener noreferrer">
              Transforming Drainage
            </a>{" "}
            &mdash; multi-state, multi-year field research programme on drainage water management, including nitrate load and yield datasets.
          </li>
          <li>
            European Commission,{" "}
            <a href="https://environment.ec.europa.eu/topics/water/nitrates_en" target="_blank" rel="noopener noreferrer">
              The Nitrates Directive
            </a>{" "}
            &mdash; the EU framework behind nitrate vulnerable zones and national action programmes.
          </li>
          <li>
            <a href="https://extension.umn.edu" target="_blank" rel="noopener noreferrer">
              University of Minnesota Extension
            </a>{" "}
            &mdash; practical guidance on controlled drainage design, management calendars, and suitability screening.
          </li>
        </ul>
      </article>

      {/* Further Reading */}
      <div className="mt-12 pt-8 border-t border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Further Reading</h3>
        <div className="space-y-3">
          <Link href="/articles/subsurface-drainage-design" className="block p-4 border border-gray-200 rounded-lg hover:border-[#5B4A9E] transition-colors">
            <span className="font-medium text-gray-900">Subsurface Drainage: Design, Costs, and Payback &rarr;</span>
            <span className="block text-sm text-gray-600">The tile drainage economics this article builds on</span>
          </Link>
          <Link href="/articles/agricultural-drainage" className="block p-4 border border-gray-200 rounded-lg hover:border-[#5B4A9E] transition-colors">
            <span className="font-medium text-gray-900">Agricultural Drainage &rarr;</span>
            <span className="block text-sm text-gray-600">Surface and subsurface drainage fundamentals</span>
          </Link>
          <Link href="/articles/water-management-guide" className="block p-4 border border-gray-200 rounded-lg hover:border-[#5B4A9E] transition-colors">
            <span className="font-medium text-gray-900">The Complete Guide to Water Management &rarr;</span>
            <span className="block text-sm text-gray-600">Irrigation, drainage, and water infrastructure &mdash; start here</span>
          </Link>
          <Link href="/articles/water-quality-management-farms" className="block p-4 border border-gray-200 rounded-lg hover:border-[#5B4A9E] transition-colors">
            <span className="font-medium text-gray-900">Water Quality Management &rarr;</span>
            <span className="block text-sm text-gray-600">Runoff, nutrients, and regulatory compliance</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
