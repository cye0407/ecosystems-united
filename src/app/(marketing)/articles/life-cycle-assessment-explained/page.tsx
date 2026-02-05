import Link from "next/link";
import NewsletterSignup from "@/components/marketing/NewsletterSignup";

export const metadata = {
  title: "What Is a Life Cycle Assessment? Understanding LCA for Agricultural Operations",
  description: "Life cycle assessments evaluate environmental impact from creation to end-of-life. Learn how LCA methodology connects to sustainability measurement and reporting.",
};

export default function ArticlePage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      {/* Navigation */}
      <nav className="mb-8">
        <Link href="/framework/stack-1-metrics" className="group flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-[#4AA88C] transition-colors">
          <span className="group-hover:-translate-x-1 transition-transform">←</span> Back to Stack 1: Core Metrics
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
          What Is a Life Cycle Assessment? Understanding LCA for Agricultural Operations
        </h1>
        <p className="text-xl text-gray-600">
          Life cycle assessments provide the methodological foundation for measuring environmental impact. Understanding LCA helps you speak the language of sustainability reporting.
        </p>
      </header>

      {/* Article Content */}
      <article className="prose prose-gray max-w-none">
        <p>
          Every process and act of consumption affects resources and the environment. Understanding and evaluating these processes is challenging because of the various influencing factors and uncertainties involved. Life cycle assessments (LCAs) provide a framework for evaluating the environmental impact of a product, process, or activity throughout its entire lifecycle—from creation to end of life.
        </p>
        <p>
          For agricultural operations, LCA methodology matters because it underlies much of modern sustainability reporting. When buyers ask about your carbon footprint, when certifications require impact documentation, when you want to understand where your environmental burden actually comes from—LCA provides the systematic approach.
        </p>

        <h2>What LCA Actually Measures</h2>
        <p>
          The concept of life cycle assessment evolved in the 1960s and has been standardized since. It's gone by many names: eco-balancing, resource and environment profile analysis, environmental profiling, cradle-to-grave analysis.
        </p>
        <p>
          The approach has centralized around frameworks from <a href="https://www.iso.org/standard/37456.html" target="_blank" rel="noopener noreferrer">ISO (International Organization for Standardization)</a> and SETAC (Society of Environmental Toxicology and Chemistry). These standards provide the methodology that makes LCA results comparable across studies and organizations.
        </p>
        <p>
          LCAs are generally conducted for three purposes:
        </p>
        <ul>
          <li>Comparing and evaluating alternative products, processes, or services</li>
          <li>Evaluating alternative lifecycles for a product, process, or service</li>
          <li>Identifying lifecycle stages where the greatest improvements can be made</li>
        </ul>

        <h2>The Four Phases of LCA</h2>

        <h3>Phase 1: Goal and Scope Definition</h3>
        <p>
          Defining purpose and scope is the first step. This establishes the boundaries of the assessment—without clear boundaries, scope creep undermines results.
        </p>
        <p>
          Key elements to define:
        </p>
        <ul>
          <li><strong>Expected outcome:</strong> What decision will this assessment inform?</li>
          <li><strong>System boundaries:</strong> What's included and excluded?</li>
          <li><strong>Functional unit:</strong> The unit of measurement (e.g., kg of product, hectare of land, unit of output)</li>
        </ul>
        <p>
          The functional unit is particularly important—it's what allows comparison between different products or processes. For agricultural products, this might be emissions per kilogram of output, water use per hectare, or energy per unit of production.
        </p>
      </article>

      {/* Mid-article Newsletter CTA */}
      <div className="my-12">
        <NewsletterSignup />
      </div>

      {/* Continue article */}
      <article className="prose prose-gray max-w-none">
        <h3>Phase 2: Life Cycle Inventory (LCI)</h3>
        <p>
          The inventory phase is the most time and resource-intensive. It requires in-depth accounting of all inputs and outputs across the defined system boundary.
        </p>
        <p>
          Common inputs to track:
        </p>
        <ul>
          <li>Energy consumption by type and source</li>
          <li>Water use</li>
          <li>Raw materials and purchased inputs</li>
        </ul>
        <p>
          Common outputs to track:
        </p>
        <ul>
          <li>Products and co-products</li>
          <li>Emissions to air, water, and soil</li>
          <li>Waste streams</li>
        </ul>
        <p>
          If data is available from LCA databases, this process becomes less intensive. However, database data is typically generic—accommodations should be made for your specific context.
        </p>

        <h3>Phase 3: Life Cycle Impact Assessment (LCIA)</h3>
        <p>
          The impact assessment translates inventory data into environmental impact categories. Each inventory flow is assigned to an impact category based on its environmental effect.
        </p>
        <p>
          The process typically involves:
        </p>
        <ul>
          <li><strong>Classification:</strong> Grouping data into common impact categories</li>
          <li><strong>Characterization:</strong> Modeling how inventory flows affect environmental outcomes (e.g., how different greenhouse gases contribute to global warming)</li>
          <li><strong>Normalization:</strong> Creating comparable scales across different impact categories</li>
          <li><strong>Valuation:</strong> Weighting the relative importance of different environmental burdens</li>
        </ul>
        <p>
          Through characterization, inventory results become comparable using equivalency factors—this is how different activities get converted to "CO2 equivalents" or similar standardized metrics.
        </p>

        <h3>Phase 4: Interpretation</h3>
        <p>
          The final phase examines findings and draws conclusions. If the process has been systematic and aligned with the original scope and objectives, conclusions can drive intelligent decision-making.
        </p>
        <p>
          Good interpretation identifies:
        </p>
        <ul>
          <li>Significant issues and hotspots</li>
          <li>Data quality limitations</li>
          <li>Completeness and consistency of results</li>
          <li>Conclusions and recommendations</li>
        </ul>

        <h2>Why LCA Matters for Agricultural Operations</h2>
        <p>
          You probably won't conduct a formal LCA of your operation—full assessments require significant expertise and resources. But understanding LCA methodology helps you:
        </p>
        <ul>
          <li><strong>Speak the language:</strong> When buyers or certifiers reference "life cycle impacts" or "cradle-to-gate emissions," you understand what they mean</li>
          <li><strong>Collect the right data:</strong> LCA frameworks identify what inputs and outputs matter for environmental accounting</li>
          <li><strong>Interpret results:</strong> When you see environmental impact data, you understand how it was derived and what its limitations might be</li>
          <li><strong>Identify improvement opportunities:</strong> LCA thinking helps you find where in your operation the biggest environmental gains are possible</li>
        </ul>

        <h2>Connection to Sustainability Reporting</h2>
        <p>
          Modern sustainability reporting frameworks—including those your buyers use for Scope 3 reporting—build on LCA methodology. The product carbon footprints, water footprints, and environmental impact data that supply chains increasingly request are essentially simplified LCA outputs.
        </p>
        <p>
          This is why LCA understanding sits within Stack 1. Building your baseline measurement systems with LCA principles in mind ensures your data can feed into the reporting frameworks that matter for market access.
        </p>
      </article>

      {/* Bottom CTA - Stack 1 */}
      <div className="mt-12 p-8 bg-[#3D2E7C] rounded-lg text-white">
        <h3 className="text-2xl font-bold mb-3">Ready to build your measurement foundation?</h3>
        <p className="text-white/80 mb-4">
          Understanding LCA methodology is part of Stack 1 in the Five Stacks Framework—knowing the external landscape and measurement frameworks you're operating in.
        </p>
        <p className="text-white/80 mb-6">
          Stack 1 focuses on building defensible baseline data for core sustainability metrics. With LCA-informed measurement systems, your data speaks the language that buyers, certifiers, and reporting frameworks require.
        </p>
        <Link href="/framework/stack-1-metrics" className="inline-block bg-white text-[#3D2E7C] px-6 py-3 rounded font-semibold hover:bg-gray-100 transition-colors">
          Get Started with Stack 1 →
        </Link>
      </div>

      {/* Further Reading */}
      <div className="mt-12 pt-8 border-t border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Further Reading</h3>
        <div className="space-y-3">
          <Link href="/articles/what-are-ecolabels" className="block p-4 border border-gray-200 rounded-lg hover:border-[#4AA88C] transition-colors">
            <span className="font-medium text-gray-900">What Are Ecolabels? →</span>
            <span className="block text-sm text-gray-600">Understanding the certification landscape and what gets measured</span>
          </Link>
          <Link href="/articles/the-different-types-of-ecolabels" className="block p-4 border border-gray-200 rounded-lg hover:border-[#4AA88C] transition-colors">
            <span className="font-medium text-gray-900">The Different Types of Ecolabels →</span>
            <span className="block text-sm text-gray-600">Type I, II, and III certifications—including Type III environmental declarations based on LCA</span>
          </Link>
          <Link href="/articles/esg-labels-in-2025" className="block p-4 border border-gray-200 rounded-lg hover:border-[#4AA88C] transition-colors">
            <span className="font-medium text-gray-900">ESG Labels in 2025 →</span>
            <span className="block text-sm text-gray-600">How environmental, social, and governance frameworks build on measurement methodology</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
