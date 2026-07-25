import Link from "next/link";
import NewsletterSignup from "@/components/marketing/NewsletterSignup";

export const metadata = {
  title: "Selling Crop Residues as Biofuel Feedstock: Farm-Gate Economics",
  description: "What buyers actually pay for straw and stover, what collection costs, and the soil value of residue removal that rarely gets priced. An honest farm-gate ledger for the residue-selling decision.",
  keywords: ["biofuels", "renewable energy", "biomass", "crop residues", "straw", "stover", "feedstock", "farm economics", "agriculture", "sustainability"],
};

export default function ArticlePage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      {/* Navigation */}
      <nav className="mb-8">
        <Link href="/articles" className="group flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-[#4AA88C] transition-colors">
          <span className="group-hover:-translate-x-1 transition-transform">←</span> All guides
        </Link>
      </nav>

      {/* Header */}
      <header className="mb-12">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Selling Crop Residues as Biofuel Feedstock: Farm-Gate Economics
        </h1>
        <p className="text-xl text-gray-600">
          Cellulosic biofuel plants want your straw and stover. Here&apos;s what they pay, what selling actually costs you &mdash; and the soil value of that residue, which almost never appears in the buyer&apos;s offer.
        </p>
      </header>

      {/* Article Content */}
      <article className="prose prose-gray max-w-none">
        <p>
          The pitch is appealing: material you currently chop and leave in the field becomes a revenue line. Advanced biofuel producers, straw-fired heat plants, and pellet mills all buy agricultural residues, and policy support for non-food feedstocks keeps demand growing. The U.S. Department of Energy&apos;s{" "}
          <a href="https://www.energy.gov/eere/bioenergy/2023-billion-ton-report" target="_blank" rel="noopener noreferrer">Billion-Ton Report</a>{" "}
          identifies agricultural residues as one of the largest near-term biomass resources available, and EU renewable energy rules explicitly favour residue-based fuels over food-crop biofuels.
        </p>
        <p>
          But &quot;the plant pays &euro;60 a tonne&quot; is not a margin &mdash; it&apos;s the top line of a ledger most sellers never finish. The honest version has four entries: the price, the cost of getting bales to the gate, the fertiliser you just exported, and the soil you slowly spend. This article prices all four, with the usual caveat done honestly: every number below is directional, regional, and volatile. Use them to structure the decision, then fill in local quotes.
        </p>

        <h2>Line 1: What Buyers Actually Pay</h2>
        <p>
          Residue prices are local and swing hard with weather, because the biggest competing buyer is the livestock sector:
        </p>
        <ul>
          <li><strong>Cereal straw (EU, ex-farm, baled):</strong> commonly in the &euro;40&ndash;80/tonne range in normal years, varying strongly by region and bale type. In drought years, when forage is short, livestock and mushroom-substrate demand has pushed straw well past &euro;100/tonne &mdash; at which point energy buyers usually cannot compete.</li>
          <li><strong>Maize stover (US benchmark):</strong> cellulosic and bedding buyers have typically paid in the region of $50&ndash;70/short ton delivered; the farm-gate share after harvest and haul costs is far thinner. European stover markets are small and contract-specific.</li>
          <li><strong>Heat and power plants / pellet mills:</strong> often contract on energy content and moisture, with price formulas rather than spot prices. Spec penalties (moisture, ash, contamination) can claw back a meaningful share of the headline price.</li>
        </ul>
        <p>
          Note what this means strategically: the energy buyer is usually the <em>floor</em> buyer, not the premium buyer. If you are set up to sell straw at all, the bedding and forage market frequently outbids the biofuel plant in exactly the years straw is scarce. A multi-year energy contract trades that upside away for certainty &mdash; sometimes a good trade, but know you are making it.
        </p>

        <h2>Line 2: What It Costs to Sell</h2>
        <p>
          Residue lying in a swath is not a product. Getting it to the farm gate typically costs:
        </p>
        <ul>
          <li><strong>Raking and baling:</strong> roughly &euro;20&ndash;35/tonne at contractor rates for big square bales, less with owned kit at scale.</li>
          <li><strong>Stacking, storage, and loading:</strong> a further &euro;5&ndash;15/tonne, plus dry-matter losses if bales sit out uncovered.</li>
          <li><strong>Haulage:</strong> highly distance-dependent; straw is bulky and cheap, so economics usually die beyond a few tens of kilometres unless the buyer collects.</li>
          <li><strong>Field costs:</strong> an extra traffic pass or two (compaction risk on wet autumns), possible harvest delay, and nutrient spreading later to compensate.</li>
        </ul>
        <p>
          Who bales matters as much as the price. A contract where the buyer bales and collects at &euro;45/tonne can net you more than one where you deliver at &euro;70 &mdash; and shifts the weather and machinery risk to their side of the ledger.
        </p>

        <h2>Line 3: The Fertiliser You Just Exported</h2>
        <p>
          Every tonne of cereal straw that leaves the field takes nutrients with it &mdash; directionally around 8&ndash;12 kg of potash (K<sub>2</sub>O), 1&ndash;2 kg of phosphate (P<sub>2</sub>O<sub>5</sub>), and roughly 5 kg of nitrogen (much of which would not have been crop-available next season, but potash and phosphate would). Standard nutrient references such as{" "}
          <a href="https://ahdb.org.uk" target="_blank" rel="noopener noreferrer">AHDB</a>&apos;s
          nutrient management guide (RB209) publish per-tonne straw values precisely so this line can be priced.
        </p>
        <p>
          At recent fertiliser prices this replacement value lands around &euro;10&ndash;20/tonne of straw, dominated by potash &mdash; and it moves with fertiliser markets, which is exactly when straw decisions get made badly: high fertiliser prices raise both the temptation of straw revenue and the true cost of exporting nutrients. Whatever your local numbers, this line is objective and calculable. Deduct it before you compare the offer to anything.
        </p>

        <h2>Line 4: The Soil Value Nobody Prices</h2>
        <p>
          Here is the part the buyer&apos;s offer never includes. Residue returned to the field is not waste &mdash; it is next decade&apos;s organic matter, this winter&apos;s erosion armour, and next July&apos;s moisture retention:
        </p>
        <ul>
          <li><strong>Organic matter:</strong> straw and stover are the main carbon input on many arable farms. Only a fraction of residue carbon (roughly 10&ndash;20%) ends up as stable soil organic matter, but continuous removal cuts that input to near zero, and organic matter you stop building shows up years later as poorer structure, lower water-holding capacity, and higher input dependence.</li>
          <li><strong>Erosion:</strong> residue cover is one of the most effective erosion controls that exists. On sloping or light ground, removal converts directly into soil loss risk over winter.</li>
          <li><strong>Moisture:</strong> surface residue reduces evaporation &mdash; increasingly valuable as European summers dry out.</li>
        </ul>
        <p>
          Because these costs arrive slowly and never as an invoice, they are usually priced at zero. Two honest correctives. First, U.S. guidance on stover harvest &mdash; for example Iowa State&apos;s{" "}
          <a href="https://www.extension.iastate.edu/agdm/crops/html/a1-70.html" target="_blank" rel="noopener noreferrer">Ag Decision Maker analysis of corn stover value</a>{" "}
          &mdash; consistently concludes that only partial removal (leaving at least half the residue, and more on erodible ground) is defensible even on high-yielding fields. Second, there is now a public price signal for the soil side: Ireland&apos;s Straw Incorporation Measure pays farmers on the order of &euro;250/ha (rates vary by year and crop &mdash; check{" "}
          <a href="https://www.teagasc.ie" target="_blank" rel="noopener noreferrer">Teagasc</a>{" "}
          and current scheme terms) to chop and incorporate cereal straw rather than sell it. When a government pays real money for straw to stay in the field, treating its soil value as zero in your own ledger is not conservative accounting &mdash; it is a pricing error. At typical straw yields of 3&ndash;5 t/ha, &euro;250/ha implies a soil-side value in the rough region of &euro;50&ndash;80/tonne &mdash; often more than the energy buyer is offering for the same tonne.
        </p>

        <h2>The Ledger, Worked</h2>
        <p>
          A directional example for cereal straw, buyer collects nothing, normal year:
        </p>
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead>
              <tr>
                <th className="text-left">Ledger line</th>
                <th className="text-left">&euro;/tonne</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Sale price (ex-farm, baled)</td>
                <td>+60</td>
              </tr>
              <tr>
                <td>Baling, stacking, loading</td>
                <td>&minus;30</td>
              </tr>
              <tr>
                <td>Nutrient replacement (mostly K)</td>
                <td>&minus;15</td>
              </tr>
              <tr>
                <td>Soil value (site-dependent, usually unpriced)</td>
                <td>&minus;0 to &minus;50+</td>
              </tr>
              <tr>
                <td><strong>Honest net</strong></td>
                <td><strong>+15 down to clearly negative</strong></td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          That last line is the whole article. On flat, high-organic-matter ground, in a year with a strong straw price and a buyer who bales, selling part of the residue is a perfectly sound circular revenue stream. On light or sloping ground, at floor prices, delivering your own bales &mdash; the same transaction is quietly selling soil capital at a discount. Both outcomes are common. The ledger, run per field and per year, tells you which one you&apos;re in.
        </p>

        <h2>Contracts and Counterparties</h2>
        <p>
          If the ledger comes out positive, the contract still has to survive contact with reality:
        </p>
        <ul>
          <li><strong>Counterparty risk is not theoretical.</strong> Several first-wave cellulosic ethanol plants closed or were sold within years of opening, leaving contracted growers with baled straw and no buyer. Prefer operating plants with a track record; treat a plant under construction as a prospect, not a market.</li>
          <li><strong>Spec clauses:</strong> moisture limits, ash/soil contamination, bale format, rejection rights. Understand what a rejected load costs you before signing.</li>
          <li><strong>Term and indexation:</strong> multi-year contracts should index to something (energy price, fertiliser price, or straw market reference) &mdash; a flat nominal price for five years is a slow-motion discount.</li>
          <li><strong>Drought clauses:</strong> the years straw is worth most are the years your soil and your neighbours need it most. Negotiate tonnage flexibility, or price the option you are giving away.</li>
          <li><strong>Who bales, who hauls:</strong> as above &mdash; the logistics split often matters more than the headline price.</li>
        </ul>

        <h2>The Alternative: Use It Yourself</h2>
        <p>
          Before selling residues to someone else&apos;s energy plant, run the on-farm option. Straw-fired grain drying and heating displace bought propane or heating oil at retail prices &mdash; often a better margin per tonne than any feedstock contract &mdash; and anaerobic digestion values residues while returning most nutrients to your fields as digestate. Our guide to{" "}
          <Link href="/articles/biomass-energy-farm">biomass energy on the farm</Link>{" "}
          covers boilers, biogas, and the small-scale options; the difference in principle is that on-farm use captures the energy value <em>and</em> keeps the nutrient loop closed, while feedstock sales export both.
        </p>
        <p>
          Selling residues is a genuine circular-economy opportunity &mdash; but only when the full ledger says so. The farms that do this well sell surplus residue from their strongest fields in strong-price years, keep it on fragile fields and in dry years, and treat the soil line as a real number rather than a rounding error. That discipline is what separates a revenue stream from an asset sale.
        </p>

        <h2>Sources</h2>
        <ul>
          <li>
            U.S. Department of Energy,{" "}
            <a href="https://www.energy.gov/eere/bioenergy/2023-billion-ton-report" target="_blank" rel="noopener noreferrer">
              2023 Billion-Ton Report
            </a>{" "}
            &mdash; assessment of agricultural residue availability for bioenergy.
          </li>
          <li>
            Iowa State University Extension, Ag Decision Maker,{" "}
            <a href="https://www.extension.iastate.edu/agdm/crops/html/a1-70.html" target="_blank" rel="noopener noreferrer">
              Estimating a Value for Corn Stover
            </a>{" "}
            &mdash; harvest cost and nutrient replacement framework for residue pricing.
          </li>
          <li>
            <a href="https://ahdb.org.uk" target="_blank" rel="noopener noreferrer">
              AHDB
            </a>{" "}
            &mdash; nutrient management guide (RB209) with per-tonne nutrient values of removed straw.
          </li>
          <li>
            <a href="https://www.teagasc.ie" target="_blank" rel="noopener noreferrer">
              Teagasc
            </a>{" "}
            &mdash; research and guidance on straw incorporation and Ireland&apos;s Straw Incorporation Measure.
          </li>
        </ul>
      </article>

      {/* Newsletter (D-021 mid-2) */}
      <div className="mt-12">
        <NewsletterSignup />
      </div>

      {/* Further Reading */}
      <div className="mt-12 pt-8 border-t border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Further Reading</h3>
        <div className="space-y-3">
          <Link href="/articles/pros-and-cons-of-advanced-biofuels" className="block p-4 border border-gray-200 rounded-lg hover:border-[#7B6BB8] transition-colors">
            <span className="font-medium text-gray-900">Pros and Cons of Advanced Biofuels &rarr;</span>
            <span className="block text-sm text-gray-600">The economic and environmental trade-offs behind residue demand</span>
          </Link>
          <Link href="/articles/cellulosic-biofuels" className="block p-4 border border-gray-200 rounded-lg hover:border-[#7B6BB8] transition-colors">
            <span className="font-medium text-gray-900">Cellulosic Biofuels &rarr;</span>
            <span className="block text-sm text-gray-600">The technology buying your straw and stover</span>
          </Link>
          <Link href="/articles/biomass-energy-farm" className="block p-4 border border-gray-200 rounded-lg hover:border-[#7B6BB8] transition-colors">
            <span className="font-medium text-gray-900">Biomass Energy on the Farm &rarr;</span>
            <span className="block text-sm text-gray-600">Boilers, biogas, and using residues yourself instead of selling them</span>
          </Link>
          <Link href="/articles/biofuels-guide" className="block p-4 border border-gray-200 rounded-lg hover:border-[#7B6BB8] transition-colors">
            <span className="font-medium text-gray-900">The Complete Guide to Biofuels &rarr;</span>
            <span className="block text-sm text-gray-600">Biofuel economics and energy opportunities &mdash; start here</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
