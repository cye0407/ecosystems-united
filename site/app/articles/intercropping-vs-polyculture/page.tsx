import Link from "next/link";
import NewsletterSignup from "@/components/NewsletterSignup";

export const metadata = {
  title: "Intercropping vs. Polyculture: Multi-Crop Systems That Reduce Risk and Build Margin",
  description: "Multi-crop systems spread risk, reduce inputs, and create operational resilience. Here's how to choose between intercropping and polyculture approaches.",
};

export default function ArticlePage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      {/* Navigation */}
      <nav className="mb-8">
        <Link href="/framework/stack-4-resilience" className="group flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-[#3B7D6E] transition-colors">
          <span className="group-hover:-translate-x-1 transition-transform">←</span> Back to Stack 4: Adaptive Resilience
        </Link>
      </nav>

      {/* Header */}
      <header className="mb-12">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-8 h-8 rounded-full bg-[#3B7D6E] text-white flex items-center justify-center font-bold text-sm">
            4
          </div>
          <span className="text-sm text-gray-500">Stack 4: Adaptive Resilience</span>
        </div>
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Intercropping vs. Polyculture: Multi-Crop Systems That Reduce Risk and Build Margin
        </h1>
        <p className="text-xl text-gray-600">
          Diversity in agricultural systems isn't just ecological virtue—it's risk management and operational resilience. Here's how different multi-crop approaches deliver business value.
        </p>
      </header>

      {/* Article Content */}
      <article className="prose prose-gray max-w-none">
        <p>
          Monoculture is optimized for mechanization and volume. But it concentrates risk: one pest, one disease, one weather event can wipe out your entire year. Multi-crop systems spread that risk while often reducing input requirements and creating multiple revenue streams.
        </p>
        <p>
          The question isn't whether diversity is valuable—it's which approach fits your operation, equipment, and markets.
        </p>

        <h2>Intercropping: Structured Diversity</h2>
        <p>
          <strong>Definition:</strong> Growing two or more crops simultaneously in the same field, typically in specific patterns (alternate rows, strips, or mixed plantings).
        </p>
        <p>
          <strong>Characteristics:</strong>
        </p>
        <ul>
          <li>Usually involves annual crops</li>
          <li>Plants arranged in deliberate patterns</li>
          <li>Focuses on complementary resource use</li>
          <li>More compatible with mechanization than complex polyculture</li>
        </ul>
        <p>
          <strong>Classic example:</strong> The "Three Sisters" of Native American agriculture—corn provides structure for beans to climb, beans fix nitrogen that corn needs, squash provides ground cover that suppresses weeds and retains moisture. Each component benefits the others.
        </p>
        <p>
          <strong>Business case:</strong> More efficient use of space, water, and nutrients. Natural pest management through diversity. Risk spreading—if one crop fails, others may compensate. Potential yield advantages over monocultures when measured by Land Equivalent Ratio.
        </p>

        <h2>Polyculture: Ecosystem Mimicry</h2>
        <p>
          <strong>Definition:</strong> Cultivation of multiple plant species in the same space, intentionally mimicking the diversity found in natural ecosystems.
        </p>
        <p>
          <strong>Characteristics:</strong>
        </p>
        <ul>
          <li>Can include both annual and perennial plants</li>
          <li>More complex compositions and layers than intercropping</li>
          <li>Aims to create functional ecosystems, not just crop combinations</li>
          <li>Greater emphasis on ecological relationships between components</li>
        </ul>
        <p>
          <strong>Business case:</strong> Enhanced ecological resilience. Improved soil health through diverse root structures. Expanded habitat for beneficial organisms. Greater sustainability over time as the system matures.
        </p>
      </article>

      {/* Mid-article Newsletter CTA */}
      <div className="my-12">
        <NewsletterSignup />
      </div>

      {/* Continue article */}
      <article className="prose prose-gray max-w-none">
        <h2>The Key Distinction</h2>
        <p>
          All intercropping is a form of polyculture, but not all polycultures are intercropping. The differences matter operationally:
        </p>
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead>
              <tr>
                <th className="text-left">Factor</th>
                <th className="text-left">Intercropping</th>
                <th className="text-left">Polyculture</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Timeframe</strong></td>
                <td>Usually single season</td>
                <td>Often includes perennials</td>
              </tr>
              <tr>
                <td><strong>Complexity</strong></td>
                <td>Typically 2-3 species</td>
                <td>Can involve dozens of species</td>
              </tr>
              <tr>
                <td><strong>Arrangement</strong></td>
                <td>Often regular patterns</td>
                <td>May mimic natural ecosystems</td>
              </tr>
              <tr>
                <td><strong>Primary goal</strong></td>
                <td>Yield optimization</td>
                <td>Ecological function plus yields</td>
              </tr>
              <tr>
                <td><strong>Management</strong></td>
                <td>Often mechanized</td>
                <td>More observation-based</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2>Five Types of Multi-Crop Systems</h2>
        <p>
          <strong>1. Annual intercropping:</strong> Multiple annual crops grown together for one season. Simplest to implement and exit. Examples: wheat and chickpeas in alternating rows, corn-bean-squash combinations.
        </p>
        <p>
          <strong>2. Multi-story cultivation:</strong> Utilizing vertical space by combining plants of different heights. Examples: food forests with tall trees, fruit shrubs, and ground crops. Coffee under banana shade.
        </p>
        <p>
          <strong>3. Perennial polycultures:</strong> Systems composed primarily of perennial plants. Minimal soil disturbance once established, deep root systems that build soil over time. Examples: perennial grains mixed with nitrogen-fixing legumes, meadow orchards.
        </p>
        <p>
          <strong>4. Cover cropping systems:</strong> Non-cash crops planted during off-seasons or alongside primary crops. Examples: winter rye after corn, clover understory in orchards, living mulches between vegetable rows.
        </p>
        <p>
          <strong>5. Agroforestry:</strong> Intentional combination of trees with crops and/or livestock. Types include silvopasture (trees + grazing), alley cropping (rows of trees with crops between), and forest farming (cultivation under forest canopy).
        </p>

        <h2>Operational Considerations</h2>
        <p>
          Multi-crop systems aren't without challenges:
        </p>
        <ul>
          <li><strong>Knowledge requirements:</strong> Understanding plant interactions takes time to develop</li>
          <li><strong>Management complexity:</strong> More variables to monitor than monocultures</li>
          <li><strong>Mechanization limitations:</strong> Standard equipment is designed for single crops</li>
          <li><strong>Market access:</strong> Conventional supply chains may not accommodate diverse harvests</li>
          <li><strong>Transition periods:</strong> Converting from monoculture may involve temporary yield reductions</li>
        </ul>
        <p>
          The strategic question: do the benefits (risk reduction, input savings, resilience) outweigh these costs for your specific operation?
        </p>

        <h2>Choosing the Right Approach</h2>
        <p>
          The best system depends on:
        </p>
        <ul>
          <li><strong>Equipment:</strong> What can you plant and harvest with existing machinery?</li>
          <li><strong>Markets:</strong> Do you have outlets for diverse products?</li>
          <li><strong>Timeline:</strong> Are you building for this season or the next decade?</li>
          <li><strong>Knowledge:</strong> What are your learning resources and risk tolerance?</li>
          <li><strong>Goals:</strong> Production, conservation, resilience, or all three?</li>
        </ul>
        <p>
          Many successful farmers blend elements from different approaches, creating hybrid systems tailored to their context.
        </p>

        <h2>The Stack 4 Connection</h2>
        <p>
          Multi-crop systems exemplify Stack 4's focus on sustainable practices that improve operational performance:
        </p>
        <ul>
          <li><strong>Risk reduction:</strong> Diversity spreads exposure across multiple crops and revenue streams</li>
          <li><strong>Input savings:</strong> Natural pest management and nutrient cycling reduce purchased inputs</li>
          <li><strong>Soil building:</strong> Diverse root systems and continuous cover improve soil health over time</li>
          <li><strong>Resilience:</strong> Systems with multiple components weather disruptions better than monocultures</li>
        </ul>
        <p>
          Stack 4 practices don't require philosophical commitment to ecology—they require understanding that diverse systems often perform better economically when measured over time.
        </p>
      </article>

      {/* Bottom CTA - Stack 4 */}
      <div className="mt-12 p-8 bg-[#3B7D6E] rounded-lg text-white">
        <h3 className="text-2xl font-bold mb-3">Ready to diversify your system?</h3>
        <p className="text-white/80 mb-4">
          Multi-crop approaches reduce risk and build resilience—but choosing the right system for your operation matters.
        </p>
        <p className="text-white/80 mb-6">
          Stack 4 focuses on sustainable practices that deliver operational value. The Five Stacks Framework helps you implement diversity strategically, measure results, and build documentation for Stack 5 market positioning.
        </p>
        <Link href="/framework/stack-4-resilience" className="inline-block bg-white text-[#3B7D6E] px-6 py-3 rounded font-semibold hover:bg-gray-100 transition-colors">
          Explore Stack 4 →
        </Link>
      </div>

      {/* Further Reading */}
      <div className="mt-12 pt-8 border-t border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Further Reading</h3>
        <div className="space-y-3">
          <Link href="/articles/introduction-to-intercropping" className="block p-4 border border-gray-200 rounded-lg hover:border-[#3B7D6E] transition-colors">
            <span className="font-medium text-gray-900">Introduction to Intercropping →</span>
            <span className="block text-sm text-gray-600">Patterns, principles, and getting started</span>
          </Link>
          <Link href="/articles/measuring-intercropping-effectiveness" className="block p-4 border border-gray-200 rounded-lg hover:border-[#3B7D6E] transition-colors">
            <span className="font-medium text-gray-900">Measuring Intercropping Effectiveness →</span>
            <span className="block text-sm text-gray-600">LER, IER, and other metrics for evaluation</span>
          </Link>
          <Link href="/articles/cover-crops-roi" className="block p-4 border border-gray-200 rounded-lg hover:border-[#3B7D6E] transition-colors">
            <span className="font-medium text-gray-900">Cover Crops: Investment and Returns →</span>
            <span className="block text-sm text-gray-600">Cost-benefit analysis of cover crop programs</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
