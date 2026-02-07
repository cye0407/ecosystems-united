import Link from "next/link";
import NewsletterSignup from "@/components/marketing/NewsletterSignup";

export const metadata = {
  title: "The Complete Guide to Soil Testing for Farms | Ecosystems United",
  description: "What to test, when to test, how to interpret results, and how soil data feeds into both agronomic decisions and ESG reporting. The foundation of data-driven farming.",
};

export default function ArticlePage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <nav className="mb-8">
        <Link
          href="/framework/stack-1-metrics"
          className="text-gray-600 hover:text-[#4AA88C] transition-colors"
        >
          &larr; Back to Stack 1: Core Metrics
        </Link>
      </nav>

      <header className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-8 h-8 rounded-full bg-[#3D2E7C] text-white flex items-center justify-center font-semibold">
            1
          </div>
          <span className="text-sm font-medium text-gray-600">Stack 1: Core Metrics</span>
        </div>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          The Complete Guide to Soil Testing for Farms
        </h1>
        <p className="text-xl text-gray-600">
          What to test, when to test, how to interpret results, and how soil data feeds into both agronomic decisions and ESG reporting. The foundation of data-driven farming.
        </p>
      </header>

      <article className="prose prose-gray max-w-none">
        <h2>Why Soil Testing Matters</h2>
        <p>
          Soil testing is the foundation of data-driven farming. Without accurate soil data, you&apos;re guessing at fertiliser rates, risking over-application that harms margins and the environment, or under-application that limits yields. For SME farms navigating CSRD and VSME compliance, soil testing provides the baseline metrics required to report on nutrient management, soil health, and environmental impact.
        </p>
        <p>
          From an agronomic perspective, soil tests reveal nutrient availability, pH imbalances, and organic matter levels &mdash; all of which directly affect crop performance. From an ESG perspective, they document your starting point, track improvements over time, and provide evidence of responsible resource management. If you&apos;re serious about sustainability compliance or simply want to farm more profitably, soil testing isn&apos;t optional.
        </p>

        <h2>Sampling Methodology: Grid vs Zone</h2>
        <p>
          How you sample determines the quality of your data. Two common approaches exist: grid sampling and zone-based sampling.
        </p>
        <p>
          <strong>Grid sampling</strong> divides your field into a regular grid (typically 1-3 hectare cells) and collects composite samples from each cell. This method provides high spatial resolution and is ideal for precision farming, variable rate fertiliser application, and tracking changes over time. The downside: it&apos;s expensive (more samples = higher lab costs) and time-consuming.
        </p>
        <p>
          <strong>Zone-based sampling</strong> groups areas with similar soil types, topography, or yield history into management zones, then samples each zone. This approach is more cost-effective and still provides actionable data for most farms. If your fields are relatively uniform or you&apos;re just starting a soil testing program, zone-based sampling is the practical choice.
        </p>
        <p>
          <strong>Timing:</strong> Sample in autumn (September to November) after harvest or in early spring (February to March) before fertiliser application. Avoid sampling immediately after heavy rain, during drought, or after recent lime or fertiliser applications. Consistency is key &mdash; sample at the same time each year to track trends accurately.
        </p>
        <p>
          <strong>Depth:</strong> Standard sampling depth is 0-15cm for arable crops, 0-7.5cm for grassland. Some advanced protocols include deeper samples (15-30cm, 30-60cm) to assess subsoil constraints or legacy nutrient accumulation.
        </p>

        <h2>Standard Soil Tests</h2>
        <p>
          A basic soil test panel typically includes:
        </p>
        <ul>
          <li><strong>pH:</strong> Measures soil acidity or alkalinity. Most crops prefer pH 6.0-7.0. Low pH reduces nutrient availability and can release toxic aluminium; high pH locks up phosphorus and micronutrients.</li>
          <li><strong>Phosphorus (P):</strong> Essential for root development and energy transfer. Reported as P Index (0-4) or mg/L. Over-application risks water pollution; under-application limits yields.</li>
          <li><strong>Potassium (K):</strong> Critical for disease resistance, water regulation, and crop quality. Reported as K Index (0-4) or mg/L.</li>
          <li><strong>Magnesium (Mg):</strong> Required for chlorophyll production. Often overlooked but deficiency causes yellowing and poor growth.</li>
          <li><strong>Organic Matter (OM%):</strong> Indicates soil fertility, water-holding capacity, and carbon storage. Target: 3-6% for arable soils, 5-10% for grassland.</li>
        </ul>
        <p>
          These five parameters form the core of nutrient management planning and ESG reporting. A basic test costs approximately £25-35 per sample, depending on your lab and turnaround time.
        </p>

        <h2>Advanced Tests</h2>
        <p>
          Beyond the standard panel, advanced tests provide deeper insights:
        </p>
        <ul>
          <li><strong>Micronutrients (Cu, Zn, Mn, B, Fe, Mo):</strong> Deficiencies are often subtle but can limit yields and crop quality. Useful for intensive horticulture or crops with known micronutrient demands.</li>
          <li><strong>Cation Exchange Capacity (CEC):</strong> Measures the soil&apos;s ability to hold and release nutrients. High CEC soils (clay, high OM) retain nutrients better; low CEC soils (sand, low OM) require more frequent applications.</li>
          <li><strong>Soil Biological Activity (respiration, microbial biomass, enzyme activity):</strong> Emerging metrics that assess soil health beyond chemistry. Expensive and less standardised, but valuable for regenerative farming programs.</li>
          <li><strong>Bulk Density and Infiltration:</strong> Physical tests that reveal compaction, drainage issues, and soil structure. Rarely offered by standard labs but critical for diagnosing yield limitations.</li>
        </ul>
        <p>
          Advanced tests add £15-50+ per sample. Unless you have a specific problem or are targeting premium markets, stick with the standard panel for routine monitoring.
        </p>
      </article>

      <div className="my-12">
        <NewsletterSignup />
      </div>

      <article className="prose prose-gray max-w-none">
        <h2>Interpreting Results</h2>
        <p>
          Your lab report will list measured values and often provide an interpretation (e.g., &ldquo;Low,&rdquo; &ldquo;Moderate,&rdquo; &ldquo;Adequate&rdquo;). Here&apos;s how to read the key metrics:
        </p>
        <ul>
          <li><strong>pH:</strong> If below 6.0 on arable land, apply lime to raise pH (typically 2-5 tonnes/ha, depending on soil type and target pH). If above 7.5, consider acidifying amendments or acid-tolerant varieties.</li>
          <li><strong>P and K Indices:</strong> Index 0-1 = deficient, apply maintenance + build-up rates. Index 2 = adequate, apply maintenance rates to replace offtake. Index 3-4 = high, reduce or skip applications to avoid waste and environmental risk.</li>
          <li><strong>Organic Matter:</strong> Below 3% on arable land signals degraded soil and poor resilience. Build OM through manure, compost, cover crops, or reduced tillage.</li>
          <li><strong>Magnesium:</strong> Often reported as Mg Index. If low, apply calcified seaweed, dolomitic lime, or magnesium sulphate (Epsom salts).</li>
        </ul>
        <p>
          Don&apos;t interpret results in isolation. Cross-reference with crop offtake data, previous fertiliser applications, and visual symptoms in the field. If you&apos;re unsure, consult an agronomist or your fertiliser supplier &mdash; most offer free advice if you buy inputs through them.
        </p>

        <h2>Frequency Recommendations</h2>
        <p>
          How often should you test? It depends on your system intensity and risk tolerance:
        </p>
        <ul>
          <li><strong>Arable farms (intensive rotations, high inputs):</strong> Test every 3-4 years per field. More frequent testing (annually or biennially) is justified for high-value crops, precision farming systems, or fields with known variability.</li>
          <li><strong>Grassland (beef, sheep, dairy):</strong> Test every 4-5 years. Resample sooner if yields decline, pH drifts, or after heavy manure/slurry applications.</li>
          <li><strong>Horticulture:</strong> Test annually or even twice per year for high-intensity operations (protected cropping, vegetable production). Nutrient depletion and pH shifts happen faster.</li>
          <li><strong>Organic or regenerative systems:</strong> Test every 2-3 years to track OM, biological activity, and nutrient cycling. These systems rely on slow-release nutrients, so regular monitoring ensures you&apos;re not mining soil reserves.</li>
        </ul>
        <p>
          Budget approximately £500-1,500 annually for a 100-hectare farm using zone-based sampling (10-20 samples at £30-50 each, plus sampling labour).
        </p>

        <h2>Connecting Soil Data to CSRD and VSME Reporting</h2>
        <p>
          Soil testing data feeds directly into CSRD (Corporate Sustainability Reporting Directive) and VSME (Voluntary Sustainability Disclosures for SMEs) compliance:
        </p>
        <ul>
          <li><strong>Environmental Impact Metrics (ESRS E2):</strong> Report soil organic matter trends, pH stability, and nutrient balances (P and K surplus or deficit). These demonstrate responsible resource use and pollution prevention.</li>
          <li><strong>Baseline and Progress Tracking:</strong> Use initial soil tests as your baseline. Annual or biennial retesting documents improvements (e.g., OM increasing from 3.2% to 4.1% over five years).</li>
          <li><strong>Nutrient Management Plans:</strong> Soil test results underpin your NMP, showing that fertiliser rates are evidence-based rather than guesswork. This satisfies auditor requirements and supports VSME disclosures on agricultural inputs.</li>
          <li><strong>Water Quality Risk:</strong> High P Index fields (3-4) near watercourses represent a pollution risk. Document your management response (reduced P rates, buffer strips, precision application) in your sustainability reporting.</li>
          <li><strong>Carbon Storage (Scope 3 Reporting):</strong> Increasing soil OM sequesters carbon. While not yet mandatory for most SMEs, forward-looking farms are tracking OM as a carbon credit opportunity and future-proofing measure.</li>
        </ul>
        <p>
          Store soil test results in a centralised system (spreadsheet, farm management software, or ESG reporting platform) with clear metadata: sample date, field ID, lab, sampling method. This ensures data integrity and simplifies audits.
        </p>

        <h2>Building a Soil Testing Program</h2>
        <p>
          If you&apos;re starting from scratch, follow this roadmap:
        </p>
        <ol>
          <li><strong>Year 1:</strong> Establish a baseline. Sample all fields (or at least representative fields from each soil type/rotation). Use zone-based sampling to control costs. Record sampling points with GPS if possible.</li>
          <li><strong>Year 2-3:</strong> Implement nutrient management recommendations from Year 1 tests. Monitor crop performance and visual symptoms. Resample problem fields if issues persist.</li>
          <li><strong>Year 4-5:</strong> Conduct the first full re-sampling cycle. Compare results to baseline to assess trends (OM change, pH drift, nutrient depletion or accumulation).</li>
          <li><strong>Ongoing:</strong> Integrate soil testing into your farm calendar. Treat it as routine maintenance, like servicing machinery. Update your nutrient management plan and ESG disclosures after each round of testing.</li>
        </ol>
        <p>
          Partner with a reputable lab (NRM, Lancrop, Yara, or regional agricultural labs). Ask about bulk discounts, turnaround times, and reporting formats. Some labs offer digital integration with farm management software, which saves time on data entry.
        </p>
        <p>
          Finally, don&apos;t let perfect be the enemy of good. A simple, consistent soil testing program beats an overly ambitious plan that never gets executed. Start with the basics (pH, P, K, Mg, OM%), sample at the same time each year, and track trends. Everything else builds from there.
        </p>
      </article>

      <div className="mt-12 p-8 bg-[#3D2E7C] rounded-lg text-white">
        <h3 className="text-2xl font-bold mb-4">Ready to Build Your Core Metrics?</h3>
        <p className="mb-6">
          Soil testing is just one component of Stack 1: Core Metrics. Explore the full framework to transform your sustainability data into competitive advantage.
        </p>
        <Link
          href="/framework/stack-1-metrics"
          className="inline-block bg-white text-[#3D2E7C] px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
        >
          Explore Stack 1: Core Metrics
        </Link>
      </div>

      <div className="mt-12 pt-8 border-t border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Further Reading</h3>
        <div className="space-y-3">
          <Link
            href="/articles/soil-health-business-case"
            className="block text-[#4AA88C] hover:underline"
          >
            The Business Case for Soil Health: Beyond Compliance &rarr;
          </Link>
          <Link
            href="/articles/nutrient-management-planning"
            className="block text-[#4AA88C] hover:underline"
          >
            Nutrient Management Planning for CSRD Compliance &rarr;
          </Link>
        </div>
      </div>
    </div>
  );
}
