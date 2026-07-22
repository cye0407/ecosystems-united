"use client";

import type { ReactNode } from "react";
import Link from "next/link";
import type { Playbook } from "@/lib/playbooks";
import { REGION_LABELS } from "@/lib/playbooks/types";

// ---------------------------------------------------------------------------
// Shared renderer for any stack's Playbook.
//
// Kept deliberately simple: this is a plan to READ, not a dashboard. Inputs and
// sources are tucked into expanders so the plan itself leads. The per-stack page
// owns the input controls (passed as `operationBar`) and the handoff.
//
// Funnel (locked 2026-07-22): the plan is free. No paywall. The one conversion
// is the end CTA — turn the plan into a Passport (tracked operational data).
// ---------------------------------------------------------------------------

interface PlaybookViewProps {
  playbook: Playbook;
  accent: string;
  cameFromTool: boolean;
  /** The editable input controls, shown inside the "Adjust" expander. */
  operationBar: ReactNode;
  backHref: string;
  backLabel: string;
  onConvertToPassport: () => void;
}

export default function PlaybookView({
  playbook,
  accent,
  cameFromTool,
  operationBar,
  backHref,
  backLabel,
  onConvertToPassport,
}: PlaybookViewProps) {
  const { hectares, region } = playbook.generatedFor;
  const adopted = playbook.practiceGuidance.adopted;
  const summaryBits = [
    `${hectares.toLocaleString("en-IE")} ha`,
    REGION_LABELS[region],
    adopted.length > 0 ? adopted.join(", ").toLowerCase() : "no practices yet",
  ].join(" · ");

  return (
    <div className="max-w-2xl mx-auto px-6 py-14">
      <nav className="mb-8">
        <Link
          href={backHref}
          className="group flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-gray-800 transition-colors"
        >
          <span className="group-hover:-translate-x-1 transition-transform">
            &larr;
          </span>{" "}
          {backLabel}
        </Link>
      </nav>

      <header className="mb-6">
        <span
          className="text-xs font-semibold uppercase tracking-wide"
          style={{ color: accent }}
        >
          Stack {playbook.stack.num} &middot; {playbook.stack.title}
        </span>
        <h1 className="text-3xl font-bold text-gray-900 mt-2 mb-3">
          {playbook.headline}
        </h1>
        <p className="text-gray-600">{playbook.intro}</p>
      </header>

      {/* Compact "what this is tailored to" + tuck the inputs away. */}
      <details className="mb-10 group">
        <summary className="flex items-center justify-between gap-2 cursor-pointer list-none bg-gray-50 rounded-lg px-4 py-3 text-sm text-gray-600 hover:bg-gray-100 transition-colors">
          <span>
            {cameFromTool && (
              <span className="font-medium" style={{ color: accent }}>
                &#10003;{" "}
              </span>
            )}
            Tailored to <span className="text-gray-900">{summaryBits}</span>
          </span>
          <span className="text-gray-400 group-open:hidden">Adjust &darr;</span>
          <span className="text-gray-400 hidden group-open:inline">Close &uarr;</span>
        </summary>
        <div className="mt-3">{operationBar}</div>
      </details>

      {/* Directional numbers (only when the tool handed figures over). */}
      {playbook.numbers.length > 0 && (
        <div className="grid grid-cols-3 gap-3 mb-10">
          {playbook.numbers.map((n) => (
            <div key={n.label} className="rounded-lg bg-gray-50 p-4">
              <p className="text-xs text-gray-500 mb-1">{n.label}</p>
              <p className="text-lg font-bold text-gray-900">{n.value}</p>
            </div>
          ))}
        </div>
      )}

      {/* The plan. */}
      <section className="mb-10">
        <h2 className="text-lg font-bold text-gray-900 mb-4">
          Do these, in order
        </h2>
        <ol className="space-y-5">
          {playbook.moves.map((m) => (
            <li key={m.order} className="flex gap-4">
              <div
                className="w-7 h-7 shrink-0 rounded-full text-white flex items-center justify-center text-sm font-bold"
                style={{ backgroundColor: accent }}
              >
                {m.order}
              </div>
              <div className="pt-0.5">
                <h3 className="font-semibold text-gray-900">{m.title}</h3>
                <p className="text-sm text-gray-600 mt-1">{m.rationale}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      {/* Funding, compact. */}
      <section className="mb-10">
        <h2 className="text-lg font-bold text-gray-900 mb-3">
          The money where you farm
        </h2>
        {playbook.funding.programs.map((p) => (
          <div key={p.name} className="mb-3">
            <h3 className="font-semibold text-gray-900 text-sm">{p.name}</h3>
            <p className="text-sm text-gray-600">{p.snippet}</p>
          </div>
        ))}
        <p className="text-sm text-gray-500">{playbook.funding.note}</p>
      </section>

      {/* The one conversion: turn this plan into a Passport. */}
      <div
        className="rounded-xl p-7 text-white mb-8"
        style={{ backgroundColor: accent }}
      >
        <h2 className="text-xl font-bold mb-2">Keep this. Make it yours.</h2>
        <p className="text-white/85 mb-5 text-sm leading-relaxed">
          Turn this plan into your Passport and it becomes living data you own:
          your size, region, and practices carried straight in, ready to track
          against real numbers and share with buyers, banks, or grant bodies when
          they ask.
        </p>
        <button
          onClick={onConvertToPassport}
          className="inline-block bg-white px-6 py-3 rounded-md font-semibold hover:bg-gray-100 transition-colors"
          style={{ color: accent }}
        >
          Turn this into my Passport &rarr;
        </button>
      </div>

      {/* Fine print, tucked away. */}
      <details className="mb-3">
        <summary className="cursor-pointer text-sm text-gray-500 hover:text-gray-700">
          How to read this plan
        </summary>
        <p className="text-sm text-gray-500 mt-2 leading-relaxed">
          {playbook.disclaimer}
        </p>
      </details>
      <details>
        <summary className="cursor-pointer text-sm text-gray-500 hover:text-gray-700">
          Sources ({playbook.sources.length})
        </summary>
        <ul className="space-y-1.5 mt-2">
          {playbook.sources.map((s) => (
            <li key={s.id} className="text-sm text-gray-500">
              <span className="text-xs font-mono text-gray-400 mr-2">
                [{s.tier}]
              </span>
              <a
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                {s.org} &mdash; {s.label}
              </a>
            </li>
          ))}
        </ul>
      </details>
    </div>
  );
}
