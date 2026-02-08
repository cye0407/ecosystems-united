import Link from "next/link";
import NewsletterSignup from "@/components/marketing/NewsletterSignup";

export const metadata = {
  title: "Will You Lose Buyers Without ESG Data?",
  description:
    "You probably won't lose a buyer over one incomplete ESG response. But gradual marginalization is real: industry averages that make you look worse, non-responsive flags, and exclusion from premium programs.",
  keywords: ["CSRD", "ESG", "sustainability reporting", "VSME", "agricultural compliance", "lose", "buyers", "without", "agriculture", "sustainability"],
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
          Will You Lose Buyers Without ESG Data?
        </h1>
        <p className="text-xl text-gray-600">
          The honest answer: probably not tomorrow. But the way agricultural supply chains are moving, silence isn&apos;t neutral&mdash;it&apos;s a slow slide toward marginalization. Here&apos;s what&apos;s actually happening and what buyers genuinely expect from farm suppliers.
        </p>
      </header>

      {/* Article Content */}
      <article className="prose prose-gray max-w-none">
        <p>
          You&apos;ve heard the warnings. &ldquo;Buyers are demanding ESG data.&rdquo; &ldquo;Suppliers who can&apos;t report will be replaced.&rdquo; &ldquo;CSRD will filter you out.&rdquo; The sustainability consulting industry has a financial interest in making this sound as urgent and terrifying as possible.
        </p>
        <p>
          Let&apos;s cut through the noise with an honest assessment. Will you literally lose your buyer contract because you didn&apos;t complete an ESG questionnaire? Almost certainly not&mdash;at least not over a single missed response. But is ignoring ESG data requests entirely a risk-free strategy? Absolutely not.
        </p>
        <p>
          The reality sits between the panic and the complacency, and understanding exactly where requires looking at how agricultural supply chains actually work.
        </p>

        <h2>Who Is Asking and Why</h2>
        <p>
          The buyers sending ESG questionnaires to farm suppliers are not doing it because they want to. They&apos;re doing it because they have to.
        </p>
        <p>
          <strong>Major retailers</strong>&mdash;Tesco, Carrefour, Aldi, Lidl, Sainsbury&apos;s, Albert Heijn&mdash;have made public sustainability commitments with specific timelines. These aren&apos;t aspirational statements buried in annual reports. They&apos;re measurable targets: net zero by 2040, 50% Scope 3 reduction by 2030, deforestation-free supply chains by 2025. To report progress, they need data from every link in their supply chain, including your farm.
        </p>
        <p>
          <strong>Food processors and manufacturers</strong>&mdash;Nestle, Danone, Kerry Group, ABP, Arla, FrieslandCampina&mdash;face the same pressure from both regulators and their retail customers. The CSRD requires large EU companies to disclose supply chain sustainability data. Your processor can&apos;t complete their compliance without information from suppliers like you.
        </p>
        <p>
          <strong>Agricultural cooperatives</strong> are increasingly aggregating member ESG data to present a collective sustainability profile to downstream buyers. If your cooperative asks for data and you don&apos;t provide it, they&apos;ll use estimates&mdash;and those estimates won&apos;t flatter you.
        </p>
        <p>
          <strong>Export aggregators</strong> serving international markets face sustainability requirements from importing countries and customers. If you&apos;re selling into premium export channels, ESG data requirements are tightening faster than domestic markets.
        </p>

        <h2>What Actually Happens When You Don&apos;t Respond</h2>
        <p>
          Here&apos;s the sequence that plays out in practice. It&apos;s not dramatic. It&apos;s gradual. And that&apos;s what makes it dangerous.
        </p>

        <h3>Stage 1: Industry Averages Replace Your Data</h3>
        <p>
          When a buyer needs to report their Scope 3 emissions and a supplier hasn&apos;t provided data, they don&apos;t leave a blank. They use industry average emission factors&mdash;generic estimates for &ldquo;dairy farming in Western Europe&rdquo; or &ldquo;cereal production, conventional.&rdquo;
        </p>
        <p>
          These averages are, by design, conservative. They represent the middle of the pack at best, and often the higher end to avoid understating emissions. If your farm is even slightly better than average&mdash;more efficient machinery, lower fertilizer rates, renewable energy, any improvement at all&mdash;the industry average <strong>makes you look worse than you are</strong>.
        </p>
        <p>
          You won&apos;t know this is happening. Your buyer won&apos;t tell you they&apos;ve assigned you an estimated carbon footprint. But in their internal data, your farm now has a number attached to it&mdash;and it&apos;s almost certainly higher than your actual performance.
        </p>

        <h3>Stage 2: You Get Flagged as Non-Responsive</h3>
        <p>
          Procurement teams track supplier engagement rates on sustainability requests. Suppliers who respond are in one column. Suppliers who don&apos;t are in another. This classification isn&apos;t about punishment&mdash;it&apos;s about risk assessment.
        </p>
        <p>
          A non-responsive supplier is an unknown quantity. Unknown quantities represent risk in supply chain management. When your buyer&apos;s sustainability team reviews supplier performance, non-responsive suppliers get flagged for follow-up, escalation, or&mdash;eventually&mdash;consideration for replacement.
        </p>

        <h3>Stage 3: Alternatives Get Examined More Closely</h3>
        <p>
          No buyer drops a reliable supplier over a single unanswered questionnaire. But when contract renewal discussions happen, when sourcing reviews take place, when volume allocations are being decided, a sustainability team member now has a seat at the table.
        </p>
        <p>
          &ldquo;Farm A provides complete ESG data, shows year-on-year improvement, and participates in our sustainability program. Farm B hasn&apos;t responded to three requests.&rdquo; Neither the sustainability person nor the procurement person will recommend dropping Farm B. But if Farm A and Farm B are otherwise comparable, the conversation shifts.
        </p>

        <h3>Stage 4: Premium Programs Pass You By</h3>
        <p>
          This is where the real cost sits. Many buyers are developing premium supplier programs&mdash;preferred supplier status, sustainability bonuses, premium pricing tiers, early access to new contracts, co-investment in farm improvements. These programs universally require ESG data as an entry criterion.
        </p>
        <p>
          Arla&apos;s sustainability incentive pays a premium per kilo of milk to farmers who meet sustainability criteria. Tesco&apos;s Sustainable Farming Groups offer preferred status and collaborative improvement programs. Danone&apos;s regenerative agriculture program provides technical support and premium pricing.
        </p>
        <p>
          If you&apos;re not providing ESG data, you&apos;re not eligible. The premium goes to farms that are. Over years, this differential compounds. The responsive farms get better prices, more investment, and stronger relationships. The silent farms get standard terms and declining relative position.
        </p>
      </article>

      {/* Mid-article Newsletter */}
      <div className="my-12">
        <NewsletterSignup />
      </div>

      {/* Continue article */}
      <article className="prose prose-gray max-w-none">
        <h2>What Buyers Actually Expect from Farm Suppliers</h2>
        <p>
          The bar is lower than you think. Buyers sending questionnaires to agricultural suppliers are not expecting the same sophistication as a multinational chemical company. They know their supply base includes family farms, small holdings, and operations that have never heard of ESG until the email arrived.
        </p>
        <p>
          What they genuinely expect:
        </p>
        <p>
          <strong>A response.</strong> Any response. Acknowledging the request and engaging with it&mdash;even if your data is incomplete&mdash;puts you in a fundamentally different category than silence. A farm that replies &ldquo;we don&apos;t have all of this but here&apos;s what we can provide&rdquo; is infinitely more useful than a farm that doesn&apos;t reply at all.
        </p>
        <p>
          <strong>Honesty about your capabilities.</strong> Buyers have heard every sustainability buzzword. What they value is a supplier who says &ldquo;we track diesel and electricity accurately, we have livestock numbers, but we haven&apos;t calculated our full carbon footprint yet.&rdquo; That&apos;s an honest starting point they can work with.
        </p>
        <p>
          <strong>Accurate data where you provide it.</strong> Don&apos;t guess. Don&apos;t round creatively. Don&apos;t copy what you think they want to hear. If your diesel consumption was 42,000 litres last year, report 42,000 litres. If you don&apos;t know your water consumption, say so rather than inventing a number.
        </p>
        <p>
          <strong>A trajectory showing improvement.</strong> Year one: basic energy and livestock data. Year two: add fertilizer inputs and waste tracking. Year three: a credible emission estimate. Buyers understand that building ESG capacity takes time. They want to see movement, not perfection.
        </p>

        <h2>Data You Already Have (You Just Don&apos;t Know It&apos;s ESG Data)</h2>
        <p>
          If you&apos;ve been farming in the EU, you already generate sustainability data through regulatory compliance&mdash;you just haven&apos;t labeled it that way.
        </p>
        <p>
          <strong>Cross-compliance records</strong> from CAP payments cover environmental management, soil protection, water management, and biodiversity maintenance. These are ESG data points documented annually.
        </p>
        <p>
          <strong>Agri-environment scheme participation</strong>&mdash;Countryside Stewardship, GLAS, CAP Eco-Schemes&mdash;demonstrates active environmental management with specific biodiversity and habitat targets. Scheme agreements and payment records are evidence of environmental governance.
        </p>
        <p>
          <strong>Nitrates Directive compliance</strong> requires nutrient management planning, spreading records, and storage capacity calculations. This data feeds directly into emission calculations and environmental performance metrics.
        </p>
        <p>
          <strong>Integrated Pest Management (IPM) records</strong>, required under the Sustainable Use Directive, document your approach to crop protection. These satisfy ESG questions about chemical management and environmental responsibility.
        </p>
        <p>
          <strong>Animal identification and movement records</strong>&mdash;legally required for traceability&mdash;provide exact livestock numbers by category and period, which are the primary input for agricultural methane calculations.
        </p>
        <p>
          The work isn&apos;t creating new data. It&apos;s connecting existing compliance records to ESG questions. A nutrient management plan isn&apos;t just a regulatory requirement&mdash;it&apos;s evidence of responsible environmental practice. Spray records aren&apos;t just legal compliance&mdash;they&apos;re documentation of integrated pest management.
        </p>

        <h2>The Real Risk: Not the Cliff, but the Slope</h2>
        <p>
          The sustainability consulting industry often presents ESG as a cliff edge: comply or die. That&apos;s not how agricultural supply chains work. Buyers depend on reliable suppliers. Switching costs are real. Relationships matter. No one is getting a termination letter because they missed a CDP questionnaire.
        </p>
        <p>
          The actual risk is a slope. A gradual decline in relative competitive position that compounds over years:
        </p>
        <ul>
          <li>Year 1: You skip the questionnaire. Nothing visible happens.</li>
          <li>Year 2: Industry averages are used for your data. Your &ldquo;carbon footprint&rdquo; in the buyer&apos;s system is higher than reality.</li>
          <li>Year 3: A premium sustainability program launches. You&apos;re not eligible.</li>
          <li>Year 4: Contract renewal. Your competitor provides full ESG data and qualifies for preferred pricing.</li>
          <li>Year 5: Volume allocation review. The sustainability team recommends shifting 10% of volume to compliant suppliers.</li>
        </ul>
        <p>
          No single year is catastrophic. But the farm that started providing data in Year 1 is now in a premium program with better pricing, stronger buyer relationships, and operational efficiency insights from the data they&apos;ve been collecting. The farm that ignored it for five years faces a steeper climb to catch up, with less goodwill and a worse data trail in the buyer&apos;s systems.
        </p>

        <h2>The Practical Calculation</h2>
        <p>
          Forget the fear and the hype. Run the numbers for your own situation.
        </p>
        <p>
          <strong>Cost of starting ESG reporting:</strong> Roughly 2&ndash;3 days of your time to gather existing records, organize them, and complete your first buyer questionnaire. No consultants needed. No software purchases. Perhaps an hour per month to maintain records going forward.
        </p>
        <p>
          <strong>Cost of not starting:</strong> Unknown but increasing. At minimum, you&apos;re being represented by industry averages that don&apos;t reflect your operation. At maximum, you&apos;re excluded from premium programs, overlooked for volume increases, and gradually marginalized as competitors build their ESG capacity.
        </p>
        <p>
          <strong>Potential upside:</strong> Preferred supplier status, premium pricing programs, operational efficiency insights from systematic data tracking, stronger buyer relationships, and the ability to respond to any questionnaire from any buyer within hours rather than weeks.
        </p>
        <p>
          For 2&ndash;3 days of effort and an hour per month, the risk-reward calculation is heavily skewed toward starting. Not because the sky is falling, but because the cost of action is low and the cost of inaction compounds.
        </p>

        <h2>Where to Start</h2>
        <p>
          If this article has moved you from &ldquo;I&apos;ll deal with it later&rdquo; to &ldquo;I should probably start,&rdquo; the next step is straightforward:
        </p>
        <ul>
          <li>Respond to the next questionnaire you receive, even if your answers are incomplete</li>
          <li>Gather 12 months of energy, fuel, and input records</li>
          <li>Compile your certifications, assurance memberships, and scheme agreements</li>
          <li>Document your worker numbers, training records, and safety policy</li>
        </ul>
        <p>
          That&apos;s not a transformation project. It&apos;s a week of administrative effort using records that already exist. And it moves you from the &ldquo;non-responsive&rdquo; column to the &ldquo;engaged supplier&rdquo; column&mdash;a shift that costs almost nothing but changes how every buyer in your supply chain perceives your operation.
        </p>
      </article>

      {/* Bottom CTA */}
      <div className="mt-12 p-8 bg-[#3D2E7C] rounded-lg text-white">
        <h3 className="text-2xl font-bold mb-3">
          Don&apos;t let industry averages speak for your farm
        </h3>
        <p className="text-white/80 mb-6">
          Every day without your own ESG data, buyers fill the gap with generic estimates that don&apos;t reflect your operation. Stack 1 of the Five Stacks Framework helps you build a defensible baseline from records you already keep&mdash;so your numbers tell your story, not an industry average.
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
            href="/articles/first-esg-questionnaire"
            className="block p-4 border border-gray-200 rounded-lg hover:border-[#3D2E7C] transition-colors"
          >
            <span className="font-medium text-gray-900">
              First ESG Questionnaire? Where Agricultural Suppliers Start &rarr;
            </span>
            <span className="block text-sm text-gray-600">
              Step-by-step guide to responding to your first buyer sustainability request
            </span>
          </Link>
          <Link
            href="/articles/esg-competitive-advantage"
            className="block p-4 border border-gray-200 rounded-lg hover:border-[#3D2E7C] transition-colors"
          >
            <span className="font-medium text-gray-900">
              ESG as Competitive Advantage for Agricultural Suppliers &rarr;
            </span>
            <span className="block text-sm text-gray-600">
              How early ESG adopters in agriculture are turning compliance into premium positioning
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}
