"use client";

import Link from "next/link";
import { useEffect } from "react";
import { analytics } from "@/lib/analytics";

const playbooks = [
  {
    stack: 1,
    title: "Defensible Baseline",
    href: "/playbooks/stack-1-metrics",
    description: "Organize the boundary, evidence, activity data, factors, and estimates behind buyer- or bank-ready baseline work.",
    color: "#3D2E7C",
  },
  {
    stack: 2,
    title: "Operational Efficiency",
    href: "/playbooks/stack-2-efficiency",
    description: "Prioritize where to investigate energy, water, inputs, and process loss before committing capital.",
    color: "#5B4A9E",
  },
  {
    stack: 3,
    title: "Margin Recovery",
    href: "/playbooks/stack-3-circularity",
    description: "Map disposal costs, nutrient loops, and byproduct tests while keeping legal and outlet checks explicit.",
    color: "#7B6BB8",
  },
  {
    stack: 4,
    title: "Structural Resilience",
    href: "/playbooks/stack-4-resilience",
    description: "Work through cash, buyer, insurance, climate, and continuity buffers without treating prompts as universal targets.",
    color: "#9A8CD0",
  },
  {
    stack: 5,
    title: "Regenerative Transition",
    href: "/playbooks/stack-5-regeneration",
    description: "Build a transition worksheet with an explicitly illustrative financial scenario, agronomy prompts, and funding links.",
    color: "#2D5A47",
  },
];

export default function PlaybookCatalog() {
  useEffect(() => {
    analytics.track("playbook_catalog_viewed", { playbook_count: playbooks.length });
  }, []);

  return (
    <div className="grid gap-5 md:grid-cols-2">
      {playbooks.map((playbook) => (
        <article key={playbook.stack} className="flex flex-col rounded-xl border border-gray-200 bg-white p-6">
          <div className="mb-4 flex items-center gap-3">
            <span
              className="flex h-9 w-9 items-center justify-center rounded-full text-sm font-bold text-white"
              style={{ backgroundColor: playbook.color }}
            >
              {playbook.stack}
            </span>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">Stack {playbook.stack}</p>
              <h2 className="text-xl font-bold text-gray-900">{playbook.title}</h2>
            </div>
          </div>
          <p className="mb-6 flex-1 text-sm leading-6 text-gray-600">{playbook.description}</p>
          <Link
            href={playbook.href}
            onClick={() => analytics.track("playbook_catalog_selected", { stack: playbook.stack })}
            className="rounded-md px-5 py-3 text-center text-sm font-semibold text-white transition-opacity hover:opacity-90"
            style={{ backgroundColor: playbook.color }}
          >
            Open free worksheet
          </Link>
        </article>
      ))}
    </div>
  );
}
