"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import NewsletterSignup from "./NewsletterSignup";

const productCTAs = [
  {
    label: "See Our Pricing",
    desc: "Free baseline tracker, rules-based questionnaire response engine, and certification packs coming soon. See what's available.",
    href: "/products",
    color: "#4AA88C",
    footnote: "Free tracker. No credit card required.",
  },
  {
    label: "Try the Response Generator",
    desc: "Upload a buyer questionnaire, get answers matched from 200+ templates and filled with your tracked data. Rules-based logic, not guesswork.",
    href: "/see-it-in-action",
    color: "#3D2E7C",
    footnote: "From €39 per questionnaire.",
  },
];

const certificationCTA = {
  label: "Find Your Ecolabel — Free",
  desc: "Not sure which ecolabel to pursue? Our free selector matches the right label family to your operation and scores your certification readiness — then take a readiness checklist with you.",
  href: "/tools/ecolabel-selector",
  color: "#5B4A9E",
  footnote: "Free interactive tool. No signup to check your readiness.",
};

const scope3CsrdCTA = {
  label: "Check Your Readiness — Free",
  desc: "Buyers asking for Scope 3 or CSRD data? Score your readiness in 5 minutes, see your weakest area, and get the scorecard to keep — then start tracking so you can answer the next request in minutes, not days.",
  href: "/tools/scope-3-readiness",
  color: "#3D2E7C",
  footnote: "Free interactive tool. Folds straight into your free baseline tracker.",
};

// Scope 3 / CSRD / buyer-request articles funnel into the readiness tools + tracker
const SCOPE3_CSRD_SLUGS = new Set([
  "buyer-scope-3-request",
  "buyer-scrutiny",
  "building-esg-response-system",
  "building-baseline",
  "csrd-esg-guide",
  "csrd-vsme-agricultural-suppliers",
  "scope-1-2-3-agriculture",
  "vsme-buyer-questionnaire-response",
]);

const biofuelsCTA = {
  label: "Compare the 4 Generations",
  desc: "Not all biofuels are equally sustainable. Tell our free tool what matters most for your operation — carbon, land use, scalability — and get the best-fit feedstock ranked for you, plus a workbook to take with you.",
  href: "/tools/biofuel-feedstock-compare",
  color: "#7B6BB8",
  footnote: "Free interactive tool. No signup to compare.",
};

// The 11 biofuels & energy articles that should all funnel into the comparison tool.
const BIOFUELS_SLUGS = new Set([
  "advanced-biofuels",
  "biofuel-sustainability-ranking",
  "biofuel-trends-2025",
  "biofuels-explained",
  "biofuels-guide",
  "biofuels-in-aviation",
  "biomass-energy-farm",
  "cellulosic-biofuels",
  "cellulosic-vs-traditional-biofuels",
  "pros-and-cons-of-advanced-biofuels",
  "ranking-biofuel-sustainability",
]);

const regenEconomicsCTA = {
  label: "Calculate Your Payback",
  desc: "That's the business case in principle. Now run it on your own numbers: the free Regenerative ROI calculator models your transition cost, input savings, optional carbon income, and the year you break even — every assumption adjustable, no hand-waving.",
  href: "/tools/regenerative-roi",
  color: "#2D5A47",
  footnote: "Free interactive calculator. No signup to run it.",
};

// Regenerative-economics cluster (pillar + spokes) funnels into the free tracker
const REGEN_ECONOMICS_SLUGS = new Set([
  "regenerative-guide",
  "regenerative-agriculture-economics",
  "cover-crop-selection-guide",
  "cover-crop-termination",
  "soil-health-business-case",
  "cover-crops-roi",
  "regenerative-practices-2025",
  "carbon-markets-agriculture",
  "regenerative-transition-costs",
  "biochar-soil-amendment",
  "agroforestry-economics",
  "composting-nutrient-cycling-roi",
]);

const efficiencyCTA = {
  label: "Score your operation — Free",
  desc: "You can't fix leaks you can't see. Score your operation across cost, energy, water, and process in 3 minutes, get your weakest area, and take the Efficiency Scorecard workbook with you to work the fixes.",
  href: "/tools/efficiency-assessment",
  color: "#5B4A9E",
  footnote: "Free interactive scorecard. No signup to see your score.",
};

// Stack 2 — operational-efficiency cluster (water, energy, drainage, inputs)
const EFFICIENCY_SLUGS = new Set([
  "water-management-guide",
  "water-quality-management-farms",
  "water-recycling-efficiency",
  "rainwater-harvesting-agriculture",
  "agricultural-irrigation",
  "irrigation-system-planning",
  "precision-irrigation-technology",
  "agricultural-drainage",
  "subsurface-drainage-design",
  "controlled-drainage",
  "nutrient-management-planning",
  "tillage-systems-compared",
  "soil-compaction-management",
  "value-chains-economic-efficiency",
]);

const resilienceCTA = {
  label: "Calculate your exposure — Free",
  desc: "Could one disruption cascade through your operation? Six numbers reveal where you're most exposed — customer and supplier concentration, buffers, runway, key-person risk — with the fix for your weakest link and the workbook to keep.",
  href: "/tools/resilience-exposure",
  color: "#9A8CD0",
  footnote: "Free interactive calculator. No signup to see your exposure.",
};

// Stack 4 — structural-resilience cluster (risk, finance, market, supply)
const RESILIENCE_SLUGS = new Set([
  "resilience-guide",
  "climate-risk-assessment-farms",
  "crop-diversification-risk",
  "farm-insurance-climate-adaptation",
  "farm-succession-planning",
  "financial-resilience-farm-operations",
  "small-farm-financial-planning",
  "market-volatility-strategies",
  "supply-chain-resilience-agriculture",
  "drought-resilience-water-management",
]);

function isEcolabelArticle(slug: string): boolean {
  return slug.includes("ecolabel") || slug.includes("eco-label");
}

function getSlugHash(slug: string): number {
  return slug.split("").reduce((acc, c) => acc + c.charCodeAt(0), 0);
}

export default function ArticleCTA() {
  const pathname = usePathname();

  if (pathname === "/articles") return null;

  const slug = pathname.split("/").pop() || "";

  // Biofuels & energy articles always funnel into the comparison tool
  if (BIOFUELS_SLUGS.has(slug)) {
    return (
      <div className="max-w-4xl mx-auto px-6 pb-16">
        <div
          className="p-8 rounded-lg text-white mt-12"
          style={{ backgroundColor: biofuelsCTA.color }}
        >
          <h2 className="text-2xl font-bold mb-3">
            Which biofuel pathway fits your operation?
          </h2>
          <p className="text-white/80 mb-6">{biofuelsCTA.desc}</p>
          <div className="flex flex-wrap items-center gap-4">
            <Link
              href={biofuelsCTA.href}
              className="inline-block bg-white px-6 py-3 rounded font-semibold hover:bg-gray-100 transition-colors"
              style={{ color: biofuelsCTA.color }}
            >
              {biofuelsCTA.label}
            </Link>
            <Link
              href="/articles"
              className="text-white/70 hover:text-white underline text-sm transition-colors"
            >
              Browse all guides
            </Link>
          </div>
          <p className="text-sm text-white/60 mt-3">{biofuelsCTA.footnote}</p>
        </div>
      </div>
    );
  }

  // Scope 3 / CSRD / buyer-request articles funnel into the readiness tools
  if (SCOPE3_CSRD_SLUGS.has(slug)) {
    return (
      <div className="max-w-4xl mx-auto px-6 pb-16">
        <div
          className="p-8 rounded-lg text-white mt-12"
          style={{ backgroundColor: scope3CsrdCTA.color }}
        >
          <h2 className="text-2xl font-bold mb-3">
            Can you answer a buyer request today?
          </h2>
          <p className="text-white/80 mb-6">{scope3CsrdCTA.desc}</p>
          <div className="flex flex-wrap items-center gap-4">
            <Link
              href={scope3CsrdCTA.href}
              className="inline-block bg-white px-6 py-3 rounded font-semibold hover:bg-gray-100 transition-colors"
              style={{ color: scope3CsrdCTA.color }}
            >
              {scope3CsrdCTA.label}
            </Link>
            <Link
              href="/tools/csrd-readiness"
              className="text-white/70 hover:text-white underline text-sm transition-colors"
            >
              Or check CSRD readiness
            </Link>
          </div>
          <p className="text-sm text-white/60 mt-3">{scope3CsrdCTA.footnote}</p>
        </div>
      </div>
    );
  }

  // Regenerative-economics articles funnel into the free baseline tracker
  if (REGEN_ECONOMICS_SLUGS.has(slug)) {
    return (
      <div className="max-w-4xl mx-auto px-6 pb-16">
        <div
          className="p-8 rounded-lg text-white mt-12"
          style={{ backgroundColor: regenEconomicsCTA.color }}
        >
          <h2 className="text-2xl font-bold mb-3">
            Does it pay on your operation?
          </h2>
          <p className="text-white/80 mb-6">{regenEconomicsCTA.desc}</p>
          <div className="flex flex-wrap items-center gap-4">
            <Link
              href={regenEconomicsCTA.href}
              className="inline-block bg-white px-6 py-3 rounded font-semibold hover:bg-gray-100 transition-colors"
              style={{ color: regenEconomicsCTA.color }}
            >
              {regenEconomicsCTA.label}
            </Link>
            <Link
              href="/tracker"
              className="text-white/70 hover:text-white underline text-sm transition-colors"
            >
              See what the tracker includes
            </Link>
          </div>
          <p className="text-sm text-white/60 mt-3">{regenEconomicsCTA.footnote}</p>
        </div>
      </div>
    );
  }

  // Stack 2 efficiency articles funnel into the Efficiency Scorecard
  if (EFFICIENCY_SLUGS.has(slug)) {
    return (
      <div className="max-w-4xl mx-auto px-6 pb-16">
        <div
          className="p-8 rounded-lg text-white mt-12"
          style={{ backgroundColor: efficiencyCTA.color }}
        >
          <h2 className="text-2xl font-bold mb-3">
            Where is your operation leaking value?
          </h2>
          <p className="text-white/80 mb-6">{efficiencyCTA.desc}</p>
          <div className="flex flex-wrap items-center gap-4">
            <Link
              href={efficiencyCTA.href}
              className="inline-block bg-white px-6 py-3 rounded font-semibold hover:bg-gray-100 transition-colors"
              style={{ color: efficiencyCTA.color }}
            >
              {efficiencyCTA.label}
            </Link>
            <Link
              href="/tracker"
              className="text-white/70 hover:text-white underline text-sm transition-colors"
            >
              See what the tracker includes
            </Link>
          </div>
          <p className="text-sm text-white/60 mt-3">{efficiencyCTA.footnote}</p>
        </div>
      </div>
    );
  }

  // Stack 4 resilience articles funnel into the Resilience Scorecard
  if (RESILIENCE_SLUGS.has(slug)) {
    return (
      <div className="max-w-4xl mx-auto px-6 pb-16">
        <div
          className="p-8 rounded-lg text-white mt-12"
          style={{ backgroundColor: resilienceCTA.color }}
        >
          <h2 className="text-2xl font-bold mb-3">
            Could one disruption break you?
          </h2>
          <p className="text-white/80 mb-6">{resilienceCTA.desc}</p>
          <div className="flex flex-wrap items-center gap-4">
            <Link
              href={resilienceCTA.href}
              className="inline-block bg-white px-6 py-3 rounded font-semibold hover:bg-gray-100 transition-colors"
              style={{ color: resilienceCTA.color }}
            >
              {resilienceCTA.label}
            </Link>
            <Link
              href="/tracker"
              className="text-white/70 hover:text-white underline text-sm transition-colors"
            >
              See what the tracker includes
            </Link>
          </div>
          <p className="text-sm text-white/60 mt-3">{resilienceCTA.footnote}</p>
        </div>
      </div>
    );
  }

  // Ecolabel articles always get the certification pack CTA
  if (isEcolabelArticle(slug)) {
    return (
      <div className="max-w-4xl mx-auto px-6 pb-16">
        <div
          className="p-8 rounded-lg text-white mt-12"
          style={{ backgroundColor: certificationCTA.color }}
        >
          <h2 className="text-2xl font-bold mb-3">
            Turn this knowledge into action
          </h2>
          <p className="text-white/80 mb-6">{certificationCTA.desc}</p>
          <div className="flex flex-wrap items-center gap-4">
            <Link
              href={certificationCTA.href}
              className="inline-block bg-white px-6 py-3 rounded font-semibold hover:bg-gray-100 transition-colors"
              style={{ color: certificationCTA.color }}
            >
              {certificationCTA.label}
            </Link>
            <Link
              href="/articles"
              className="text-white/70 hover:text-white underline text-sm transition-colors"
            >
              Browse all guides
            </Link>
          </div>
          <p className="text-sm text-white/60 mt-3">
            {certificationCTA.footnote}
          </p>
        </div>
      </div>
    );
  }

  // ~30% of other articles get a product CTA
  const hash = getSlugHash(slug);
  const showProductCTA = hash % 10 < 3;

  if (showProductCTA) {
    const product = productCTAs[hash % productCTAs.length];
    return (
      <div className="max-w-4xl mx-auto px-6 pb-16">
        <div
          className="p-8 rounded-lg text-white mt-12"
          style={{ backgroundColor: product.color }}
        >
          <h2 className="text-2xl font-bold mb-3">
            Ready to put this into practice?
          </h2>
          <p className="text-white/80 mb-6">{product.desc}</p>
          <div className="flex flex-wrap items-center gap-4">
            <Link
              href={product.href}
              className="inline-block bg-white px-6 py-3 rounded font-semibold hover:bg-gray-100 transition-colors"
              style={{ color: product.color }}
            >
              {product.label}
            </Link>
            <Link
              href="/articles"
              className="text-white/70 hover:text-white underline text-sm transition-colors"
            >
              Browse all guides
            </Link>
          </div>
          <p className="text-sm text-white/60 mt-3">{product.footnote}</p>
        </div>
      </div>
    );
  }

  // Default (no specific tool branch): the in-body BaselineCTA already carries
  // the free-tracker offer, so the closing slot is the Five Stacks Monthly
  // newsletter — no duplicated baseline CTA.
  return (
    <div className="max-w-4xl mx-auto px-6 pb-16 mt-12">
      <NewsletterSignup />
    </div>
  );
}
