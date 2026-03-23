"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { getArticleMeta } from "@/lib/article-metadata";

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

export default function ArticleCTA() {
  const pathname = usePathname();

  // Only show on individual article pages, not the index
  if (pathname === "/articles") return null;

  const slug = pathname.split("/").pop() || "";
  const meta = getArticleMeta(slug);

  const stackNumber = meta?.stackNumber ?? 1;
  const stackColor = meta?.stackColor ?? "#3D2E7C";
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
