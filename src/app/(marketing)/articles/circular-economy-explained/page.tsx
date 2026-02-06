import Link from "next/link";
import NewsletterSignup from "@/components/marketing/NewsletterSignup";

export const metadata = {
  title: "The Circular Economy Explained: From Waste Streams to Value Streams",
  description: "How circular economy principles transform agricultural waste into margin. Understanding the shift from linear 'take-make-dispose' to circular value creation.",
};

export default function ArticlePage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      {/* Navigation */}
      <nav className="mb-8">
        <Link href="/framework/stack-3-circularity" className="group flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-[#4AA88C] transition-colors">
          <span className="group-hover:-translate-x-1 transition-transform">←</span> Back to Stack 3: Circular Value Creation
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
          The Circular Economy Explained: From Waste Streams to Value Streams
        </h1>
        <p className="text-xl text-gray-600">
          What you discard can become margin. Understanding the shift from linear waste to circular value.
        </p>
      </header>

      {/* Article Content */}
      <article className="prose prose-gray max-w-none">
        <p>
          Much of the industrialized economy depends on cheap, easily-available resources and fossil energy. This dependency assumes continuous economic growth is both possible and necessary—that consumption must perpetually expand. Products in this system lack durability by design. They're built to promote replacement, not longevity.
        </p>
        <p>
          The result? Massive waste generation from a "throwaway" culture that pursues the next new thing regardless of need. This waste ends up in landfills, oceans, or incinerators. But new economic strategies are emerging that use existing resources more intelligently.
        </p>

        <h2>What the Circular Economy Actually Means</h2>
        <p>
          A circular economy is an industrial system designed to eliminate waste through regenerative and restorative practices. It encourages superior design, materials, products, and business models that shift toward renewable energy and eliminate environmentally harmful chemicals.
        </p>
        <p>
          The key insight: optimize around cycles of disassembly and reuse that go beyond both disposal and recycling. This avoids wasting the energy and labor typically lost in linear systems.
        </p>
        <p>
          For agricultural operations, this principle is particularly powerful. Every operation generates streams of material that currently cost money to manage. Circular thinking asks: what if those streams generated revenue instead?
        </p>

        <h2>Consumables vs. Durables: The Critical Distinction</h2>
        <p>
          Within a circular economy, components are differentiated between consumable and durable categories:
        </p>
        <p>
          <strong>Consumable components</strong> are designed with non-toxic or beneficial biological materials that can be safely reintegrated into the environment—either directly or through cascading uses. Agricultural byproducts often fall into this category: crop residues, processing waste, and organic materials that can return to soil or feed other processes.
        </p>
        <p>
          <strong>Durable components</strong> are designed for reuse, repair, or upgrading depending on the technology involved. Equipment, packaging systems, and infrastructure fit here.
        </p>
        <p>
          By distinguishing between these categories, agricultural systems become more resilient and less resource-dependent. You stop paying to dispose of materials that have remaining value.
        </p>

        <h2>From Consumers to Users: A Shift in Relationships</h2>
        <p>
          In a circular economy, the concept of "users" replaces "consumers." This enables new contract types—longer-term relationships based on service rather than single transactions.
        </p>
        <p>
          Consider agricultural equipment: manufacturers or retailers could retain ownership of leased equipment, taking responsibility for maintenance. This incentivizes building longer-lasting, higher-quality products. The economic logic shifts from "sell more units" to "maximize value per unit over time."
        </p>
        <p>
          This matters because input prices are predicted to rise as competition for resources intensifies. Energy required to manufacture new products increases. Valuable resources become worth reserving rather than discarding.
        </p>
      </article>

      {/* Mid-article Newsletter CTA */}
      <div className="my-12">
        <NewsletterSignup />
      </div>

      {/* Continue article */}
      <article className="prose prose-gray max-w-none">
        <h2>Circular Principles in Agricultural Context</h2>
        <p>
          Agricultural operations have natural advantages for circular implementation:
        </p>
        <ul>
          <li><strong>Byproduct streams are biological:</strong> Most agricultural waste can return to productive use—compost, animal feed, bioenergy feedstock, or soil amendment</li>
          <li><strong>Nutrient cycles already exist:</strong> Farms historically operated circularly before industrial agriculture linearized them</li>
          <li><strong>Local loops are possible:</strong> Geographic concentration enables byproduct exchange between operations</li>
          <li><strong>Seasonal patterns create opportunities:</strong> What's waste in one season may be valuable input in another</li>
        </ul>

        <h2>Starting Points for Agricultural Circularity</h2>
        <p>
          Common circular opportunities in agricultural operations include:
        </p>
        <ul>
          <li><strong>Crop residue valorization:</strong> Straw, stalks, and prunings as feedstock for other processes</li>
          <li><strong>Processing byproducts:</strong> Pomace, hulls, and screenings with secondary market value</li>
          <li><strong>Nutrient recovery:</strong> Capturing and reusing nutrients from waste streams</li>
          <li><strong>Water cascading:</strong> Reusing process water through treatment and application matching</li>
          <li><strong>Energy generation:</strong> Biogas from organic waste, biomass for heat</li>
          <li><strong>Packaging systems:</strong> Returnable containers, bulk systems, reduced single-use materials</li>
        </ul>

        <h2>The Economic Logic</h2>
        <p>
          Circular approaches often face a perception problem: they're seen as environmental initiatives that cost money. The reality is different.
        </p>
        <p>
          Every waste stream has a disposal cost. Every input has a purchase cost. Circular systems reduce both while potentially creating new revenue. The question isn't whether you can afford to think circularly—it's whether you can afford to keep paying for linear waste management.
        </p>

        <h2>Moving from Concept to Implementation</h2>
        <p>
          The circular economy isn't just theory—it's a practical framework for rethinking how materials flow through your operation. The starting point is usually simpler than expected: pick one waste stream, understand its true cost, and explore what value it might hold.
        </p>
        <p>
          Most operations find that the first circular opportunity pays for the investigation into subsequent ones. Success compounds.
        </p>
      </article>

      {/* Bottom CTA - Stack 3 */}
      <div className="mt-12 p-8 bg-[#7B6BB8] rounded-lg text-white">
        <h3 className="text-2xl font-bold mb-3">Ready to turn waste into margin?</h3>
        <p className="text-white/80 mb-4">
          Circular economy implementation is Stack 3 in the Five Stacks Framework—a progressive approach to agricultural sustainability where each capability builds on the previous.
        </p>
        <p className="text-white/80 mb-6">
          Stack 3 focuses on transforming what you've learned about your operation into new value streams: turning waste into revenue, efficiency gains into competitive positioning, and operational insights into restructured processes. The framework helps you build these capabilities in sequence, so circular implementations have the foundation they need to succeed.
        </p>
        <Link href="/framework/stack-3-circularity" className="inline-block bg-white text-[#7B6BB8] px-6 py-3 rounded font-semibold hover:bg-gray-100 transition-colors">
          Get Started with Stack 3 →
        </Link>
      </div>
    </div>
  );
}
