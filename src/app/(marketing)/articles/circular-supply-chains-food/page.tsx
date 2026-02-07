import Link from "next/link";
import NewsletterSignup from "@/components/marketing/NewsletterSignup";

export const metadata = {
  title: "Building Circular Supply Chains in Agriculture",
  description: "How farms can participate in and benefit from circular supply chain models. From by-product markets to packaging reduction, practical steps for closing the loop.",
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
          Building Circular Supply Chains in Agriculture
        </h1>
        <p className="text-xl text-gray-600">
          How farms can participate in and benefit from circular supply chain models&mdash;closing loops, capturing value, and reducing waste at every stage.
        </p>
      </header>

      {/* Article Content */}
      <article className="prose prose-gray max-w-none">
        <h2>Linear vs. Circular in Food</h2>
        <p>
          The industrial food system is relentlessly linear: inputs in, products out, waste to landfill. Raw materials are extracted, processed into food, consumed, and whatever remains&mdash;packaging, spoiled produce, processing residues&mdash;gets discarded. It&apos;s a model built on the assumption that resources are infinite and disposal is cheap. Neither assumption holds anymore.
        </p>
        <p>
          Circular supply chains close these loops. Food waste becomes animal feed or compost. Packaging is reusable or compostable. By-products find secondary markets instead of skips. Nutrients return to the soil that grew the original crop. The logic is straightforward: what leaves one process becomes input for another.
        </p>
        <p>
          Farms sit at the beginning of the food chain&mdash;and increasingly at the end too. When food waste returns as compost, when processing residues become soil amendments, when packaging systems loop back through direct sales, the farm becomes both the starting point and the closing point of the circle. That&apos;s not just environmental virtue. It&apos;s an economic position with genuine advantages.
        </p>
        <p>
          The shift from linear to circular isn&apos;t theoretical. It&apos;s already happening in pockets across agriculture. The question is whether your operation is positioned to participate&mdash;or whether you&apos;re still paying to dispose of materials that someone else would pay to receive.
        </p>

        <h2>Where Farms Fit in Circular Chains</h2>
        <p>
          Most people think of farms as producers. That&apos;s the obvious role: grow crops, raise livestock, sell output. But in a circular supply chain, farms can occupy multiple positions simultaneously:
        </p>
        <ul>
          <li><strong>As producers:</strong> The primary role. Growing food, fibre, or fuel. This doesn&apos;t change&mdash;but circular thinking changes how you handle everything that isn&apos;t your primary product.</li>
          <li><strong>As waste processors:</strong> Accepting food waste from processors, retailers, or caterers for composting or anaerobic digestion. Your land and infrastructure become part of the waste management system&mdash;and you get paid for it, or at minimum receive free organic matter.</li>
          <li><strong>As by-product users:</strong> Brewery grain for cattle feed. Vegetable processing waste for soil amendment. Bakery returns for pig feed. Food processing generates enormous volumes of material that has value to the right farm operation.</li>
          <li><strong>As packaging minimizers:</strong> Direct sales through farm shops, box schemes, and farmers&apos; markets reduce packaging layers dramatically. Returnable crate systems eliminate single-use packaging entirely for local supply chains.</li>
        </ul>
        <p>
          Your farm can play multiple roles. A mixed operation might produce crops, accept food waste for composting, use brewery grain for livestock feed, and sell direct with minimal packaging&mdash;all simultaneously. Each role captures value that a linear system would discard.
        </p>

        <h2>By-Product Markets</h2>
        <p>
          One operation&apos;s waste is another&apos;s input. This isn&apos;t a slogan&mdash;it&apos;s a practical description of how by-product markets work. The food processing industry generates vast quantities of material that has genuine value to agricultural operations:
        </p>
        <ul>
          <li><strong>Brewery spent grain and distillery draff:</strong> High-protein livestock feed, available in large quantities near any brewery or distillery. Often free or very cheap&mdash;the processor saves on disposal costs.</li>
          <li><strong>Vegetable processing waste:</strong> Peelings, trim, and off-cuts from processors. Suitable for composting, animal feed (depending on type), or anaerobic digestion.</li>
          <li><strong>Bakery returns:</strong> Unsold bread and baked goods. Excellent energy source for pig and poultry feed when properly handled.</li>
          <li><strong>Sugar beet tops and pulp:</strong> Valuable livestock feed and soil organic matter source, typically available seasonally in large volumes.</li>
          <li><strong>Potato waste:</strong> Processing waste from chip and crisp manufacturers. Can be used as animal feed or AD feedstock.</li>
          <li><strong>Citrus peel and fruit pomace:</strong> From juice and cider producers. Useful as feed, AD feedstock, or compost ingredient.</li>
        </ul>
        <p>
          Building relationships with food processors creates mutual value. They reduce disposal costs&mdash;which can be substantial. You reduce input costs&mdash;which directly improves margin. The transaction works because it eliminates waste for both parties. That&apos;s the core logic of circularity: value that was being destroyed gets captured instead.
        </p>
        <p>
          Start by mapping food processors within practical transport distance. Contact them about their waste streams. Many are actively looking for outlets because disposal costs keep rising and regulations around waste are tightening. You may find that what they&apos;re paying to remove is exactly what you&apos;re paying to buy.
        </p>
      </article>

      {/* Mid-article Newsletter CTA */}
      <div className="my-12">
        <NewsletterSignup />
      </div>

      {/* Continue article */}
      <article className="prose prose-gray max-w-none">
        <h2>Reducing Food Waste On-Farm</h2>
        <p>
          Post-harvest losses are significant and often underappreciated. In some crop sectors, 20&ndash;40% of harvested produce never reaches the consumer. The causes are well understood:
        </p>
        <ul>
          <li><strong>Cosmetic rejection by retailers:</strong> Produce that&apos;s perfectly nutritious but the wrong shape, size, or colour. Supermarket specifications have historically been ruthless about appearance, though this is slowly changing.</li>
          <li><strong>Storage losses:</strong> Inadequate storage infrastructure leading to spoilage, pest damage, or quality degradation before produce reaches market.</li>
          <li><strong>Handling damage:</strong> Bruising, cutting, and compression damage during harvest, packing, and transport that downgrades or condemns otherwise good produce.</li>
          <li><strong>Market timing:</strong> Gluts that depress prices below the cost of harvest, making it uneconomic to pick the crop at all.</li>
        </ul>
        <p>
          Each of these losses represents invested resources&mdash;seed, fertiliser, water, labour, fuel&mdash;that generated no return. The circular approach isn&apos;t just to accept these losses but to find value in what would otherwise be wasted:
        </p>
        <ul>
          <li><strong>Markets for seconds:</strong> Juicing operations, food processors, jam and preserve makers, and dried fruit producers all need produce where appearance doesn&apos;t matter. Farm shops and box schemes often welcome &ldquo;wonky&rdquo; produce at fair prices.</li>
          <li><strong>Food bank partnerships:</strong> Surplus produce donated to food banks and community kitchens. While not revenue-generating, this creates goodwill, may offer tax benefits, and prevents disposal costs.</li>
          <li><strong>Storage infrastructure:</strong> Investment in proper cold storage, controlled atmosphere, or processing facilities extends the window for selling produce and reduces spoilage losses.</li>
          <li><strong>Buyer specification negotiation:</strong> Working with buyers to relax unnecessary cosmetic standards. The more data you have on rejection rates and their cost, the stronger your negotiating position.</li>
          <li><strong>Value-added products:</strong> Turning surplus or cosmetically imperfect produce into jams, sauces, chutneys, dried products, or frozen goods. This captures value from produce that would otherwise be wasted and often generates higher margins per kilogram than fresh sales.</li>
        </ul>

        <h2>Packaging and Distribution</h2>
        <p>
          Packaging is one of the most visible waste streams in food systems, and farms that sell direct or through short supply chains have a genuine advantage here. Practical steps include:
        </p>
        <ul>
          <li><strong>Returnable crate systems:</strong> For local supply chains&mdash;restaurants, independent retailers, box schemes&mdash;returnable crates eliminate single-use packaging entirely. The upfront investment is modest and the per-use cost drops rapidly with reuse cycles.</li>
          <li><strong>Minimal packaging for direct sales:</strong> Farm shop and market customers generally bring their own bags or accept loose produce. This isn&apos;t just waste reduction&mdash;it&apos;s cost reduction. Packaging materials are a direct expense that disappears with direct sales.</li>
          <li><strong>Bulk delivery:</strong> Supplying to processors, caterers, or wholesale buyers in bulk reduces per-unit packaging dramatically. A single large container replaces dozens of retail packs.</li>
          <li><strong>Compostable alternatives:</strong> Where packaging is necessary, compostable options made from agricultural by-products (starch-based films, moulded fibre trays) close the loop. Some farms even compost their own packaging waste on-site.</li>
        </ul>
        <p>
          Distribution efficiency matters too. Consolidated deliveries, route optimisation, and shared logistics with neighbouring farms all reduce the carbon and cost footprint of getting produce to market. These aren&apos;t glamorous changes, but they compound over time into meaningful savings.
        </p>

        <h2>Building Circular Partnerships</h2>
        <p>
          The circular economy doesn&apos;t work in isolation. Linear systems are simple: buy inputs, produce output, dispose of waste. Circular systems require partnerships&mdash;connections between operations where one entity&apos;s output becomes another&apos;s input. This takes deliberate effort to build.
        </p>
        <p>
          Start by mapping who&apos;s near you:
        </p>
        <ul>
          <li><strong>Food processors with waste streams you could use:</strong> Breweries, bakeries, juice producers, vegetable packers, meat processors. Their waste is your potential input.</li>
          <li><strong>Livestock operations that could use your crop by-products:</strong> Straw, crop residues, vegetable trim, grain seconds. Your by-products are their potential feed or bedding.</li>
          <li><strong>Local composting or anaerobic digestion facilities:</strong> These may accept your organic waste or supply you with digestate and compost. Some farms develop their own AD capacity and become processors for the surrounding area.</li>
          <li><strong>Other farms with complementary operations:</strong> A livestock farm and an arable farm near each other have natural circular potential&mdash;manure for fertility, straw for bedding, grain for feed.</li>
          <li><strong>Local authorities and waste management companies:</strong> Some councils actively seek agricultural partners for food waste composting or green waste processing.</li>
        </ul>
        <p>
          Stack 3 is about creating these value loops. The first loop is usually the hardest&mdash;it requires identifying a partner, negotiating terms, and establishing logistics. But once one loop works, you understand the model. The second and third loops come faster because you know what to look for and how to structure the arrangement.
        </p>
        <p>
          The farms that thrive in the coming decades won&apos;t be the ones that produce the most. They&apos;ll be the ones embedded in the most effective circular networks&mdash;capturing value at multiple points, reducing input costs through by-product exchange, and eliminating waste disposal as a cost category entirely. That&apos;s not idealism. It&apos;s operational strategy, and it starts with one phone call to one nearby processor asking a simple question: &ldquo;What do you currently pay to throw away?&rdquo;
        </p>
      </article>

      {/* Bottom CTA - Stack 3 */}
      <div className="mt-12 p-8 bg-[#7B6BB8] rounded-lg text-white">
        <h3 className="text-2xl font-bold mb-3">Ready to close the loop on your supply chain?</h3>
        <p className="text-white/80 mb-4">
          Circular supply chain development is part of Stack 3 in the Five Stacks Framework&mdash;turning waste streams into value streams and building the partnerships that make circularity work in practice.
        </p>
        <p className="text-white/80 mb-6">
          Stack 3 focuses on transforming your operation from a linear process into a circular system. By-product markets, waste reduction strategies, and partnership networks don&apos;t just reduce environmental impact&mdash;they reduce costs and create new revenue. The framework helps you build these capabilities systematically, so each circular loop reinforces the next.
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
            <span className="block text-sm text-gray-600">From waste streams to value streams&mdash;understanding the shift from linear disposal to circular value creation</span>
          </Link>
          <Link href="/articles/value-chains-economic-efficiency" className="block p-4 border border-gray-200 rounded-lg hover:border-[#7B6BB8] transition-colors">
            <span className="font-medium text-gray-900">Value Chains: Economic Efficiency &rarr;</span>
            <span className="block text-sm text-gray-600">How value chain analysis reveals where you add value and where you lose it across your operation</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
