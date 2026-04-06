"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { getArticleMeta } from "@/lib/article-metadata";
import WaitlistForm from "@/components/marketing/WaitlistForm";

const stackCTAs: Record<number, { label: string; desc: string; href: string }> = {
  1: {
    label: "Take the Metrics Assessment",
    desc: "The Five Stacks Framework starts with measurement. Take the Stack 1 assessment to see where your operation stands.",
    href: "/tools/metrics-assessment",
  },
  2: {
    label: "Take the Efficiency Assessment",
    desc: "Find the leaks in your operation. Take the Stack 2 assessment to see where you're losing margin.",
    href: "/tools/efficiency-assessment",
  },
  3: {
    label: "Take the Circularity Assessment",
    desc: "Turn waste streams into value streams. Take the Stack 3 assessment to find your recovery opportunities.",
    href: "/tools/circularity-assessment",
  },
  4: {
    label: "Take the Resilience Assessment",
    desc: "Test your operation against disruption. Take the Stack 4 assessment to find structural vulnerabilities.",
    href: "/tools/resilience-assessment",
  },
  5: {
    label: "Take the Regeneration Assessment",
    desc: "Compound your advantage. Take the Stack 5 assessment to see how your gains build on each other.",
    href: "/tools/regeneration-assessment",
  },
};

const productCTAs = [
  {
    label: "See Our Pricing",
    desc: "Free baseline tracker, rules-based questionnaire response engine, and certification packs coming soon. See what's available.",
    href: "/pricing",
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
  label: "Join the Waitlist",
  desc: "We're building certification packs — auto-generate your GlobalG.A.P., EU Organic, or B Corp application from your tracked data. Same engine, new questionnaires.",
  href: "/contact",
  color: "#5B4A9E",
  footnote: "Coming soon. Track your baseline now to be ready.",
};

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
  const meta = getArticleMeta(slug);

  const stackNumber = meta?.stackNumber ?? 1;
  const stackColor = meta?.stackColor ?? "#3D2E7C";

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
          <WaitlistForm
            feature="certification-packs"
            variant="compact"
            buttonLabel="Join Waitlist"
            placeholder="you@farm.com"
          />
          <div className="flex items-center gap-4 mt-3">
            <Link
              href="/pricing"
              className="text-white/70 hover:text-white underline text-sm transition-colors"
            >
              See all products
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

  // Default: stack assessment CTA
  const cta = stackCTAs[stackNumber] ?? stackCTAs[1];

  return (
    <div className="max-w-4xl mx-auto px-6 pb-16">
      <div
        className="p-8 rounded-lg text-white mt-12"
        style={{ backgroundColor: stackColor }}
      >
        <h2 className="text-2xl font-bold mb-3">
          Ready to put this into practice?
        </h2>
        <p className="text-white/80 mb-6">{cta.desc}</p>
        <div className="flex flex-wrap items-center gap-4">
          <Link
            href={cta.href}
            className="inline-block bg-white px-6 py-3 rounded font-semibold hover:bg-gray-100 transition-colors"
            style={{ color: stackColor }}
          >
            {cta.label}
          </Link>
          <Link
            href="/articles"
            className="text-white/70 hover:text-white underline text-sm transition-colors"
          >
            Browse all guides
          </Link>
        </div>
        <p className="text-sm text-white/60 mt-3">
          5 minutes. No signup. See where you stand.
        </p>
      </div>
    </div>
  );
}
