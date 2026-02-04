import Link from "next/link";
import NewsletterSignup from "@/components/NewsletterSignup";

export const metadata = {
  title: "Agricultural Drainage: Benefits for Soil Health and Operational Efficiency",
  description: "Proper drainage prevents waterlogging, improves soil health, and extends your working season. Learn how drainage systems contribute to operational efficiency.",
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
          Agricultural Drainage: Benefits for Soil Health and Operational Efficiency
        </h1>
        <p className="text-xl text-gray-600">
          Proper drainage prevents waterlogging, improves soil conditions, and extends your operational window. Understanding drainage systems helps you identify efficiency opportunities.
        </p>
      </header>

      {/* Article Content */}
      <article className="prose prose-gray max-w-none">
        <p>
          Agricultural drainage plays a crucial role in optimizing land productivity and soil health. It serves two primary purposes: removing excess surface and subsurface water, and preventing soil salinity by flushing out soluble salts. Effective drainage enhances crop growth, improves soil conditions, and supports long-term sustainability.
        </p>
        <p>
          For operations dealing with wet conditions, drainage isn't just about preventing crop loss—it's about gaining operational days, improving input efficiency, and protecting long-term soil structure.
        </p>

        <h2>Types of Agricultural Drainage Systems</h2>

        <h3>Surface Drainage</h3>
        <p>
          Surface drainage removes excess water from the land's surface, preventing waterlogging and soil erosion. It relies on land grading and constructed channels to redirect water efficiently. This is typically the first line of defense against standing water.
        </p>

        <h3>Subsurface Drainage</h3>
        <p>
          Subsurface drainage regulates the water table within the soil to prevent root zone saturation. Systems consist of either open drains (exposed ditches that lower the water table) or pipe drains (buried pipes that remove excess water from deeper soil layers).
        </p>
        <p>
          Both types direct excess water to a collector drain, ensuring optimal soil conditions and preventing ponding that damages crops and limits field access.
        </p>

        <h2>Key Components of a Drainage System</h2>
        <p>
          A well-designed agricultural drainage system consists of three main components:
        </p>
        <p>
          <strong>Field drainage system:</strong> Controls the water table and prevents ponding using a network of field drains to gather excess water.
        </p>
        <p>
          <strong>Main drainage system:</strong> Transports collected water from field drains to an outlet point, often utilizing a canalized stream to improve flow efficiency.
        </p>
        <p>
          <strong>Outlet system:</strong> Discharges excess drainage water into a lake, river, or appropriate receiving body. May rely on gravity or require pumping stations depending on elevation.
        </p>
      </article>

      {/* Mid-article Newsletter CTA */}
      <div className="my-12">
        <NewsletterSignup />
      </div>

      {/* Continue article */}
      <article className="prose prose-gray max-w-none">
        <h2>Benefits of Agricultural Drainage</h2>
        <p>
          The primary benefit is improved soil aeration, which cascades into multiple operational advantages:
        </p>
        
        <h3>Crop Performance Benefits</h3>
        <ul>
          <li><strong>Deeper crop rooting:</strong> Enhanced plant stability and nutrient absorption</li>
          <li><strong>Greater crop variety:</strong> Expanded options for what can be planted</li>
          <li><strong>Fewer weeds:</strong> Reduced competition for soil nutrients and water</li>
          <li><strong>Improved fertilizer efficiency:</strong> Maximized nutrient uptake, reduced runoff</li>
          <li><strong>Reduced denitrification:</strong> Lower nitrogen loss and environmental impact</li>
          <li><strong>Healthier grass swards:</strong> Stronger root systems in pastureland</li>
        </ul>

        <h3>Operational Benefits</h3>
        <ul>
          <li><strong>Easier land access:</strong> Prevents machinery from sinking into waterlogged fields</li>
          <li><strong>Higher soil bearing capacity:</strong> Better support for farm infrastructure</li>
          <li><strong>Improved soil tilth and workability:</strong> Better seedbed preparation</li>
          <li><strong>Extended tillage period:</strong> Operations possible over a longer season</li>
          <li><strong>Enhanced micro-fauna habitat:</strong> More earthworms and beneficial organisms improving soil permeability</li>
          <li><strong>Increased soil temperature:</strong> Earlier planting and faster germination</li>
        </ul>

        <h2>Managing Soil Salinity</h2>
        <p>
          Drainage also inhibits soil salinity buildup. Salinity levels indicate the amount of salt present in soil—too much salt retards plant growth. To remove excess salts, leaching is encouraged through drainage systems.
        </p>
        <p>
          Leaching—the process of removing salts from soil with water—can occur naturally or through irrigation and drainage systems. Sometimes leaching is necessary to repair land negatively impacted by agricultural activities. It also protects the root zone from salinization by capillary rise of saline water.
        </p>

        <h2>The Stack 2 Connection</h2>
        <p>
          Drainage is a Stack 2 efficiency issue. Poor drainage costs you in multiple ways:
        </p>
        <ul>
          <li>Lost operational days when fields are too wet to work</li>
          <li>Reduced input efficiency when fertilizers leach or denitrify</li>
          <li>Lower yields from waterlogged crops</li>
          <li>Equipment damage and soil compaction from working wet fields</li>
          <li>Long-term soil structure degradation</li>
        </ul>
        <p>
          Measuring the impact of drainage problems—tracking lost days, yield differences, input efficiency—reveals the true cost of inadequate drainage and helps justify improvement investments.
        </p>
      </article>

      {/* Bottom CTA - Stack 2 */}
      <div className="mt-12 p-8 bg-[#5B4A9E] rounded-lg text-white">
        <h3 className="text-2xl font-bold mb-3">Ready to find your operational leaks?</h3>
        <p className="text-white/80 mb-4">
          Drainage efficiency is part of Stack 2 in the Five Stacks Framework—identifying where operational issues cost you money before adding new initiatives.
        </p>
        <p className="text-white/80 mb-6">
          Stack 2 focuses on fixing leaks before adding new programs. Your baseline data reveals patterns specific to your operation—where you lose days, where inputs are wasted, where processes are inefficient. Drainage problems are often hidden costs that measurement makes visible.
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
            <span className="block text-sm text-gray-600">Understanding irrigation systems and their efficiency trade-offs</span>
          </Link>
          <Link href="/articles/irrigation-system-planning" className="block p-4 border border-gray-200 rounded-lg hover:border-[#5B4A9E] transition-colors">
            <span className="font-medium text-gray-900">Planning an Irrigation System →</span>
            <span className="block text-sm text-gray-600">Essential questions to answer before installing irrigation</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
