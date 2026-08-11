import type { Metadata } from "next";
import PlaybookCatalog from "@/components/marketing/PlaybookCatalog";

export const metadata: Metadata = {
  title: "Free Five Stacks Planning Playbooks",
  description:
    "Five free operational planning worksheets for baseline evidence, efficiency, margin recovery, resilience, and regenerative transition decisions.",
  alternates: { canonical: "/playbooks" },
};

export default function PlaybooksPage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-16">
      <header className="mx-auto mb-12 max-w-3xl text-center">
        <span className="inline-flex rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-emerald-800">
          Free · no signup required
        </span>
        <h1 className="mt-4 text-4xl font-bold text-gray-900">Turn an assessment into a working plan</h1>
        <p className="mt-4 text-lg leading-8 text-gray-600">
          Choose a stack, review the scope, and build a worksheet you can save locally, print, or use to start a baseline in the free tracker.
        </p>
        <p className="mt-3 text-sm text-gray-500">
          These are planning tools, not audits, legal advice, verified calculations, or investment recommendations.
        </p>
      </header>
      <PlaybookCatalog />
    </main>
  );
}
