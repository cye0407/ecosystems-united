import Link from "next/link";
import NewsletterSignup from "@/components/NewsletterSignup";

export const metadata = {
  title: "8 Essential Questions Before Installing an Irrigation System",
  description: "Irrigation systems are major investments. Answer these essential questions about soil, climate, water source, and crops before committing to installation.",
};

export default function ArticlePage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      {/* Navigation */}
      <nav className="mb-8">
        <Link href="/framework/stack-2-efficiency" className="group flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-[#4AA88C] transition-colors">
          <span className="group-hover:-translate-x-1 transition-transform">←</span> Back to Stack 2: Operational Efficiency
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
          8 Essential Questions Before Installing an Irrigation System
        </h1>
        <p className="text-xl text-gray-600">
          Irrigation is a major capital investment. These questions help you assess whether irrigation makes sense—and if so, what type fits your situation.
        </p>
      </header>

      {/* Article Content */}
      <article className="prose prose-gray max-w-none">
        <p>
          Irrigation systems offer significant benefits: wider crop variety, protection from irregular weather, support for leaching harmful salts, and increased productivity. Irrigated crops typically outperform rain-fed production.
        </p>
        <p>
          But irrigation is expensive to install and operate. Before committing, you need clear answers to fundamental questions about your operation, climate, and resources.
        </p>

        <h2>Question 1: Why Do You Want an Irrigation System?</h2>
        <p>
          Start with purpose. Are you trying to enable crops that won't grow without irrigation? Increase yields on existing crops? Reduce weather risk? Each goal leads to different system requirements and investment levels.
        </p>
        <p>
          Be specific about expected returns. "More water" isn't a business case. "Enable high-value vegetable production worth $X per acre" is.
        </p>

        <h2>Question 2: What Type of Soil Do You Have?</h2>
        <p>
          Soil type determines water behavior—how fast it infiltrates, how much it holds, how quickly it drains.
        </p>
        <ul>
          <li><strong>Sandy soils:</strong> Fast infiltration, low water holding capacity, frequent irrigation needed</li>
          <li><strong>Clay soils:</strong> Slow infiltration, high holding capacity, risk of waterlogging</li>
          <li><strong>Loamy soils:</strong> Balanced characteristics, most irrigation-friendly</li>
        </ul>
        <p>
          Most soils are combinations. Know your actual soil characteristics before designing a system.
        </p>

        <h2>Question 3: What's Your Precipitation Pattern?</h2>
        <p>
          Understanding your rainfall pattern determines irrigation needs:
        </p>
        <ul>
          <li>When does your area receive the most rain?</li>
          <li>Is rain distributed throughout the year or concentrated in seasons?</li>
          <li>What's the annual precipitation? (Arid: less than 200mm; Semi-arid: less than 400mm; Semi-humid: more than 800mm; Humid: more than 1000mm)</li>
        </ul>
        <p>
          Irrigation supplements natural rainfall. Know what nature provides before calculating what you need to add.
        </p>

        <h2>Question 4: What Are Your Temperature Ranges?</h2>
        <p>
          Temperature affects water needs and system design:
        </p>
        <ul>
          <li>Hot conditions increase evapotranspiration and water demand</li>
          <li>Freezing temperatures require winterization or frost protection</li>
          <li>Temperature extremes affect equipment selection and durability</li>
        </ul>
      </article>

      {/* Mid-article Newsletter CTA */}
      <div className="my-12">
        <NewsletterSignup />
      </div>

      {/* Continue article */}
      <article className="prose prose-gray max-w-none">
        <h2>Question 5: What's Your Water Balance?</h2>
        <p>
          How does water flow in and out of your environmental system? Most critically: <strong>Is there a renewable source of water that can support irrigation?</strong>
        </p>
        <p className="font-semibold text-red-700">
          If the answer is no, an irrigation system should NOT be installed.
        </p>
        <p>
          Drawing down non-renewable water sources (depleting aquifers, for example) creates long-term problems that outweigh short-term benefits.
        </p>

        <h2>Question 6: What Are Your Soil Conditions?</h2>
        <p>
          Beyond soil type, understand these characteristics:
        </p>
        <ul>
          <li><strong>Available water capacity (AWC):</strong> The range of water that soil can store and make available to crops</li>
          <li><strong>Field capacity:</strong> How much moisture soil retains after drainage—typically reached 2-3 days after irrigation</li>
          <li><strong>Soil depth:</strong> Deeper soils hold more water and support deeper rooting</li>
          <li><strong>Humus content:</strong> Organic matter improves water retention and soil health</li>
          <li><strong>Slope:</strong> Affects runoff, erosion risk, and system design requirements</li>
        </ul>

        <h2>Question 7: What Crops Do You Want to Grow?</h2>
        <p>
          Different crops have different water demands and irrigation responses:
        </p>
        <ul>
          <li>What are the water requirements of your target crops?</li>
          <li>Are they perennial (trees, vines) or annual (vegetables, grains)?</li>
          <li>How do they respond to water stress and irrigation timing?</li>
          <li>Will you use cover crops that affect water dynamics?</li>
          <li>How will crop rotation affect irrigation needs across seasons?</li>
        </ul>

        <h2>Question 8: What Water Will You Use?</h2>
        <p>
          Water source and quality are critical:
        </p>
        <p>
          <strong>Is the water renewable?</strong> If you're drawing from a source that won't replenish, stop here. An irrigation system should NOT be installed on non-renewable water.
        </p>
        <p>
          <strong>What type of water?</strong> Fresh, recycled, or treated wastewater each have different considerations.
        </p>
        <p>
          <strong>What's the water quality?</strong>
        </p>
        <ul>
          <li>Salt levels (can damage crops and soil over time)</li>
          <li>pH levels (affects nutrient availability)</li>
          <li>Heavy metals or other contaminants</li>
          <li>Hygiene issues if using recycled water</li>
        </ul>

        <h2>The Stack 2 Connection</h2>
        <p>
          These questions are Stack 2 thinking applied to a major capital decision. Before investing in irrigation infrastructure, you need data about your current situation—soil, climate, water, crops.
        </p>
        <p>
          Stack 2 asks: what do we know, and what do we need to know? Irrigation decisions made without this foundation often result in systems that are wrong-sized, inefficient, or unsuited to actual conditions.
        </p>
        <p>
          Once answers are clear, you can evaluate system types, calculate expected returns, and make investment decisions based on evidence rather than assumptions.
        </p>
      </article>

      {/* Bottom CTA - Stack 2 */}
      <div className="mt-12 p-8 bg-[#5B4A9E] rounded-lg text-white">
        <h3 className="text-2xl font-bold mb-3">Ready to make data-driven infrastructure decisions?</h3>
        <p className="text-white/80 mb-4">
          Planning irrigation systems is Stack 2 in action—using baseline data to make informed operational investments.
        </p>
        <p className="text-white/80 mb-6">
          Stack 2 focuses on understanding your operation before making changes. Your soil, climate, and water data determine what infrastructure makes sense. Without this foundation, you risk investing in systems that don't fit your actual situation.
        </p>
        <Link href="/framework/stack-2-efficiency" className="inline-block bg-white text-[#5B4A9E] px-6 py-3 rounded font-semibold hover:bg-gray-100 transition-colors">
          Get Started with Stack 2 →
        </Link>
      </div>

      {/* Further Reading */}
      <div className="mt-12 pt-8 border-t border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Further Reading</h3>
        <div className="space-y-3">
          <Link href="/articles/agricultural-irrigation" className="block p-4 border border-gray-200 rounded-lg hover:border-[#5B4A9E] transition-colors">
            <span className="font-medium text-gray-900">Agricultural Irrigation Methods →</span>
            <span className="block text-sm text-gray-600">Compare gravity vs. pressure systems and their efficiency trade-offs</span>
          </Link>
          <Link href="/articles/agricultural-drainage" className="block p-4 border border-gray-200 rounded-lg hover:border-[#5B4A9E] transition-colors">
            <span className="font-medium text-gray-900">Agricultural Drainage →</span>
            <span className="block text-sm text-gray-600">Drainage and irrigation work together—understand both systems</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
