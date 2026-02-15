"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

export default function ArticleCTA() {
  const pathname = usePathname();

  // Only show on individual article pages, not the index
  if (pathname === "/articles") return null;

  return (
    <div
      className="max-w-4xl mx-auto px-6 pb-16"
    >
      <div
        className="p-8 rounded-lg text-white mt-12"
        style={{ backgroundColor: "#3D2E7C" }}
      >
        <h2 className="text-2xl font-bold mb-3">
          Ready to put this into practice?
        </h2>
        <p className="text-white/80 mb-6">
          The Five Stacks Framework starts with measurement. Take the Stack 1
          assessment to see where your operation stands.
        </p>
        <div className="flex flex-wrap items-center gap-4">
          <Link
            href="/tools/metrics-assessment"
            className="inline-block bg-white text-[#3D2E7C] px-6 py-3 rounded font-semibold hover:bg-gray-100 transition-colors"
          >
            Take the Assessment
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
