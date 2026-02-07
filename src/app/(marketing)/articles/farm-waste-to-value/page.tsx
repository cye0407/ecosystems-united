import Link from "next/link";
import NewsletterSignup from "@/components/marketing/NewsletterSignup";

export const metadata = {
  title: "Farm Waste Streams: Where Value Is Being Lost",
  description: "A practical audit of farm waste streams and circular opportunities. Identify organic, plastic, and biomass waste that could generate value instead of disposal costs.",
};

export default function ArticlePage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      {/* Navigation */}
      <nav className="mb-8">
        <Link href="/framework/stack-3-circularity" className="group flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-[#4AA88C] transition-colors">
          <span className="group-hover:-translate-x-1 transition-transform">&larr;</span> Back to Stack 3: Circular Value Creation
        </Link>
      </nav>

      {/* Header */}
      <header className="mb-12">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-8 h-8 rounded-full bg-[#7B6BB8] text-white flex items-center justify-center font-bold text-sm">
            3
          </div>
          <span className="text-sm text-gray-500">Stack 3: Circular Value Creation</span>
        </div>
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Farm Waste Streams: Where Value Is Being Lost
        </h1>
        <p className="text-xl text-gray-600">
          A practical audit of what leaves your farm as waste &mdash; and what it could be worth if captured correctly.
        </p>
      </header>

      {/* Article Content */}
      <article className="prose prose-gray max-w-none">
        <h2>Every Waste Stream Is a Failed Resource Stream</h2>
        <p>
          Farms generate significant volumes of waste. Crop residues, livestock manure, silage wrap, agrochemical containers, rejected produce, packaging materials, woody biomass from hedgerow management &mdash; the list is long and the tonnages are real. Most of this material has value if captured correctly. The question isn&apos;t whether waste exists on your operation. It&apos;s whether you&apos;re paying to dispose of something that could pay you.
        </p>
        <p>
          The economics of farm waste are often invisible because disposal costs get absorbed into general overheads. You pay for skip hire, for waste collection, for burning permits, for contractor time spent moving material that has no destination. These costs accumulate quietly. A typical mixed farm can spend thousands annually on waste management without ever questioning whether that spend is necessary.
        </p>
        <p>
          Circular thinking starts with a simple reframe: waste is a resource in the wrong place. Every material leaving your farm as waste once had value &mdash; and in many cases, it still does. The gap between &ldquo;waste&rdquo; and &ldquo;resource&rdquo; is usually knowledge, infrastructure, or habit. All three are fixable.
        </p>

        <h2>Organic Waste Streams</h2>
        <p>
          Organic waste is typically the highest volume stream on any farm, and it&apos;s also where the most value is being lost. Start here.
        </p>
        <p>
          <strong>Manure and slurry</strong> contain significant nutrient value &mdash; nitrogen, phosphorus, and potassium that you would otherwise buy as synthetic fertilizer. The challenge is management: raw spreading is inefficient and can create environmental problems. Properly composted or processed manure delivers nutrients more effectively, improves soil structure, and reduces the risk of nutrient runoff. If you&apos;re spreading raw manure, you&apos;re getting a fraction of its potential value.
        </p>
        <p>
          <strong>Crop residues</strong> serve multiple purposes depending on how they&apos;re managed. Incorporated into soil, they build organic matter and improve water retention. Baled and stored, they become animal bedding or livestock feed supplements. Processed through biomass systems, they generate energy. The wrong answer is burning them in the field &mdash; you destroy nutrient value, release carbon, and create air quality issues. The right answer depends on your operation&apos;s specific needs, but almost any deliberate use beats disposal.
        </p>
        <p>
          <strong>Food-grade rejects</strong> &mdash; produce that doesn&apos;t meet cosmetic standards, undersized crops, or harvest surplus &mdash; represent embodied costs that have already been incurred. These can become animal feed, inputs for processing operations, or composting feedstock. Some operations have found markets for &ldquo;imperfect&rdquo; produce at lower price points, recovering at least partial value from crops that would otherwise be written off entirely.
        </p>
        <p>
          Quantify what you&apos;re currently losing. Estimate annual volumes for each organic waste stream. Assign the disposal cost you&apos;re currently paying. Then research the potential value if that material were redirected. The gap between those two numbers is your circular opportunity.
        </p>

        <h2>Plastic Waste Streams</h2>
        <p>
          Farm plastics are a growing environmental and financial concern. Silage wrap, bale net and twine, fertilizer bags, seed bags, and crop protection containers all accumulate over a season. Left unmanaged, they create storage problems, fire hazards, and environmental liabilities. Burned illegally, they generate toxic emissions and potential prosecution.
        </p>
        <p>
          Farm plastic recycling schemes now exist in most regions, and they&apos;re worth investigating. These programs typically collect specific plastic types &mdash; silage wrap being the most common &mdash; and process them for recycling. Collection may be on-farm or at designated drop-off points. In some schemes, the farmer pays a reduced collection fee. In others, the material has positive value and generates a small return.
        </p>
        <p>
          The key requirement is cleanliness and separation. Mixed, contaminated plastics have minimal recycling value. Clean, sorted plastics have market value. This means establishing on-farm collection points where different plastic types are stored separately and kept reasonably clean. The upfront effort is modest &mdash; designated storage areas and a sorting habit &mdash; and the ongoing benefit compounds.
        </p>
        <p>
          <strong>Agrochemical containers</strong> deserve special mention. Triple-rinsed crop protection containers have established return programs in most agricultural regions. These programs are often free and ensure proper disposal of containers that would otherwise be classified as hazardous waste. If you&apos;re not using these programs, you&apos;re paying for disposal that could be free and taking on unnecessary liability.
        </p>
      </article>

      {/* Mid-article Newsletter CTA */}
      <div className="my-12">
        <NewsletterSignup />
      </div>

      {/* Continue article */}
      <article className="prose prose-gray max-w-none">
        <h2>Biomass and Energy</h2>
        <p>
          Woody biomass is an underutilized resource on many farms. Hedgerow management, orchard prunings, woodland thinnings, and clearance work all generate material that typically gets chipped and left, burned in heaps, or hauled away at cost. Each of these default options wastes energy value that could offset your heating bills or generate additional revenue.
        </p>
        <p>
          <strong>On-farm biomass boilers</strong> convert woody waste into heat, displacing oil or gas purchases. For operations with significant heating requirements &mdash; livestock housing, grain drying, dairy parlors, processing facilities, or farmhouse heating &mdash; biomass boilers can deliver substantial cost savings. The economics depend on your current heating costs, available biomass volume, and boiler capital costs, but many installations achieve payback within three to five years.
        </p>
        <p>
          <strong>Biochar production</strong> from woody waste creates a stable carbon-rich soil amendment that improves soil structure, water retention, and nutrient availability. Biochar effectively locks carbon into soil for centuries, which has additional value as carbon sequestration becomes monetizable. Small-scale biochar kilns are increasingly accessible and can process material that would otherwise be waste.
        </p>
        <p>
          <strong>Anaerobic digestion</strong> of manure and crop waste produces biogas for heating or electricity generation, plus a nutrient-rich digestate that serves as fertilizer. AD systems range from small on-farm units to larger cooperative installations. The technology is mature and well-understood, though capital costs mean it&apos;s most viable at scale or where feedstock volumes are consistent and substantial.
        </p>
        <p>
          The common thread across all biomass and energy opportunities is the same: you&apos;re converting a disposal cost into an energy asset. Material that was costing you money to remove now reduces your energy bills or generates income.
        </p>

        <h2>The Waste Audit</h2>
        <p>
          Before implementing any circular strategy, you need to understand what you&apos;re actually dealing with. A waste audit is the starting point &mdash; and it&apos;s simpler than it sounds.
        </p>
        <p>
          Walk your operation with fresh eyes. Look at every point where material leaves the farm as waste. Check the yard, the field margins, the storage areas, the bins, the skip. Ask yourself four questions at each point:
        </p>
        <ul>
          <li><strong>What is this material?</strong> Be specific &mdash; &ldquo;plastic&rdquo; isn&apos;t enough. Is it silage wrap, fertilizer bags, or bale twine?</li>
          <li><strong>What volume do you generate annually?</strong> Estimate in tonnes, cubic meters, or whatever unit makes sense for the material.</li>
          <li><strong>What disposal cost do you currently pay?</strong> Include collection fees, skip hire, contractor time, and transport.</li>
          <li><strong>Could this material have value elsewhere?</strong> As a resource, as energy, as an input for another process?</li>
        </ul>
        <p>
          Document what you find. A simple spreadsheet listing each waste stream, its volume, its current cost, and its potential value is enough. This audit becomes the foundation for every circular decision you make. Without it, you&apos;re guessing. With it, you can prioritize based on real numbers.
        </p>

        <h2>Practical First Steps</h2>
        <p>
          You don&apos;t need to transform your entire operation overnight. Start with the highest-volume, lowest-effort opportunities and build from there.
        </p>
        <p>
          <strong>Join a farm plastic recycling scheme.</strong> This is usually the easiest first step. Contact your local agricultural supplier or farming organization to find schemes operating in your area. Set up separated collection points on farm. The effort is minimal and the cost savings begin immediately.
        </p>
        <p>
          <strong>Compost organic waste instead of spreading raw.</strong> Composting converts organic material into a more valuable soil amendment while reducing odor, pathogen risk, and nutrient loss. A simple windrow composting system requires minimal infrastructure &mdash; a hard standing area and a way to turn the material periodically. The resulting compost is worth significantly more to your soil than the raw material it came from.
        </p>
        <p>
          <strong>Investigate biomass heating if you have woody waste and heating costs.</strong> Get quotes for biomass boiler installations. Calculate your current annual heating spend. Estimate your available biomass volume. If the numbers look promising, visit an existing installation to see the practical reality before committing.
        </p>
        <p>
          <strong>Use agrochemical container return programs.</strong> If you&apos;re not already doing this, start immediately. It&apos;s free, it&apos;s simple, and it removes a hazardous waste liability from your operation.
        </p>
        <p>
          Each step reduces disposal costs and may generate new value. More importantly, each step builds the habit of seeing waste as resource &mdash; and that shift in perspective is where the real long-term value lies. Once you start looking at your operation through a circular lens, opportunities you previously overlooked become obvious.
        </p>
        <p>
          The waste audit is your starting point. The first circular implementation is your proof of concept. Everything after that builds on momentum and evidence. Start with what&apos;s easy, measure the results, and let the numbers guide your next move.
        </p>
      </article>

      {/* Bottom CTA - Stack 3 */}
      <div className="mt-12 p-8 bg-[#7B6BB8] rounded-lg text-white">
        <h3 className="text-2xl font-bold mb-3">Ready to turn your waste streams into value streams?</h3>
        <p className="text-white/80 mb-4">
          Identifying and capturing value from waste is a core capability of Stack 3 in the Five Stacks Framework &mdash; transforming what your operation discards into what it profits from.
        </p>
        <p className="text-white/80 mb-6">
          Stack 3 focuses on circular value creation: turning waste into revenue, byproducts into inputs, and disposal costs into competitive advantage. The framework helps you build these capabilities systematically, starting with a waste audit and progressing to full circular integration.
        </p>
        <Link href="/framework/stack-3-circularity" className="inline-block bg-white text-[#7B6BB8] px-6 py-3 rounded font-semibold hover:bg-gray-100 transition-colors">
          Get Started with Stack 3 &rarr;
        </Link>
      </div>

      {/* Further Reading */}
      <div className="mt-12 pt-8 border-t border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Further Reading</h3>
        <div className="space-y-3">
          <Link href="/articles/circular-economy-explained" className="block p-4 border border-gray-200 rounded-lg hover:border-[#7B6BB8] transition-colors">
            <span className="font-medium text-gray-900">The Circular Economy Explained &rarr;</span>
            <span className="block text-sm text-gray-600">Understanding the shift from linear waste to circular value creation in agricultural operations</span>
          </Link>
          <Link href="/articles/composting-nutrient-cycling-roi" className="block p-4 border border-gray-200 rounded-lg hover:border-[#7B6BB8] transition-colors">
            <span className="font-medium text-gray-900">Composting &amp; Nutrient Cycling ROI &rarr;</span>
            <span className="block text-sm text-gray-600">The financial case for turning organic waste into high-value soil amendments</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
