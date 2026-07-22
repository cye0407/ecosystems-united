"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { analytics } from "@/lib/analytics";
import { buildPlaybook } from "@/lib/playbooks";
import type { PlaybookInputs, Region, RoiSnapshot } from "@/lib/playbooks";
import { REGION_LABELS } from "@/lib/playbooks/types";

// Regenerative-cluster identity (matches the ROI calculator this funnels from).
const ACCENT = "#2D5A47";

// localStorage key the Regenerative ROI tool writes its result to for handoff.
const HANDOFF_KEY = "eu:playbook:stack-5";

const PRACTICE_OPTIONS = [
  { key: "coverCrops", label: "Cover crops" },
  { key: "reducedTill", label: "Reduced / no-till" },
  { key: "rotation", label: "Diverse rotation" },
  { key: "compost", label: "Compost / manure" },
] as const;

const REGIONS: Region[] = ["eu", "uk", "us", "other"];

interface HandoffData {
  hectares?: number;
  practices?: string[];
  inputSpendPerHa?: number;
  grossMarginPerHa?: number;
  roi?: RoiSnapshot;
}

export default function Stack5PlaybookPage() {
  const [hectares, setHectares] = useState(100);
  const [region, setRegion] = useState<Region>("eu");
  const [practices, setPractices] = useState<string[]>([
    "coverCrops",
    "reducedTill",
  ]);
  const [roi, setRoi] = useState<RoiSnapshot | undefined>(undefined);
  const [cameFromTool, setCameFromTool] = useState(false);

  // Read the handoff from the ROI tool, if the grower arrived that way.
  useEffect(() => {
    try {
      const raw = localStorage.getItem(HANDOFF_KEY);
      if (!raw) return;
      const data: HandoffData = JSON.parse(raw);
      if (typeof data.hectares === "number" && data.hectares > 0)
        setHectares(data.hectares);
      if (Array.isArray(data.practices) && data.practices.length > 0)
        setPractices(data.practices);
      if (data.roi) setRoi(data.roi);
      setCameFromTool(true);
    } catch {
      // Ignore malformed handoff — the form defaults are fine.
    }
  }, []);

  useEffect(() => {
    analytics.track("playbook_viewed", { stack: 5, from_tool: cameFromTool });
    // Fire once on mount intent — cameFromTool settles synchronously enough.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const inputs: PlaybookInputs = useMemo(
    () => ({ stack: 5, hectares, region, practices, roi }),
    [hectares, region, practices, roi],
  );

  const playbook = useMemo(() => buildPlaybook(inputs), [inputs]);

  const togglePractice = (key: string) =>
    setPractices((prev) =>
      prev.includes(key) ? prev.filter((k) => k !== key) : [...prev, key],
    );

  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <nav className="mb-8">
        <Link
          href="/tools/regenerative-roi"
          className="group flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-[#2D5A47] transition-colors"
        >
          <span className="group-hover:-translate-x-1 transition-transform">
            &larr;
          </span>{" "}
          Back to the ROI calculator
        </Link>
      </nav>

      <header className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <div
            className="w-10 h-10 rounded-full text-white flex items-center justify-center font-bold"
            style={{ backgroundColor: ACCENT }}
          >
            5
          </div>
          <span className="text-sm text-gray-500">
            Stack 5 · {playbook.stack.title}
          </span>
        </div>
        <h1 className="text-3xl font-bold text-gray-900 mb-3">
          {playbook.headline}
        </h1>
        <p className="text-gray-600">{playbook.intro}</p>
        {cameFromTool && (
          <p className="mt-3 text-sm text-[#2D5A47]">
            ✓ Built from the numbers you just entered in the ROI calculator.
          </p>
        )}
      </header>

      {/* Editable operation bar — drives the live playbook. */}
      <section className="bg-gray-50 rounded-lg p-6 mb-10">
        <h2 className="font-medium text-gray-900 mb-4">Your operation</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-sm text-gray-600 mb-1">
              Farm size (hectares)
            </label>
            <input
              type="number"
              min="0"
              step="1"
              value={hectares}
              onChange={(e) => setHectares(parseFloat(e.target.value) || 0)}
              className="w-full border border-gray-300 rounded-md px-3 py-2 text-gray-900 focus:outline-none focus:ring-2 focus:border-transparent"
              style={{ outlineColor: ACCENT }}
            />
          </div>
          <div>
            <label className="block text-sm text-gray-600 mb-1">Region</label>
            <select
              value={region}
              onChange={(e) => setRegion(e.target.value as Region)}
              className="w-full border border-gray-300 rounded-md px-3 py-2 text-gray-900 bg-white focus:outline-none focus:ring-2 focus:border-transparent"
              style={{ outlineColor: ACCENT }}
            >
              {REGIONS.map((r) => (
                <option key={r} value={r}>
                  {REGION_LABELS[r]}
                </option>
              ))}
            </select>
          </div>
        </div>
        <label className="block text-sm text-gray-600 mb-2">
          Practices you run (or plan to)
        </label>
        <div className="grid grid-cols-2 gap-2">
          {PRACTICE_OPTIONS.map((p) => {
            const on = practices.includes(p.key);
            return (
              <button
                key={p.key}
                type="button"
                onClick={() => togglePractice(p.key)}
                className={`flex items-center gap-2 py-2 px-3 rounded-md border text-left text-sm font-medium transition-colors ${
                  on
                    ? "text-white"
                    : "bg-white border-gray-300 text-gray-700 hover:border-gray-400"
                }`}
                style={
                  on ? { backgroundColor: ACCENT, borderColor: ACCENT } : undefined
                }
              >
                <span
                  className={`inline-flex items-center justify-center w-4 h-4 rounded border text-[10px] ${
                    on ? "border-white/70" : "border-gray-300"
                  }`}
                >
                  {on ? "✓" : ""}
                </span>
                {p.label}
              </button>
            );
          })}
        </div>
      </section>

      {/* Directional numbers (only when handed over from the tool). */}
      {playbook.numbers.length > 0 && (
        <section className="mb-10">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {playbook.numbers.map((n) => (
              <div
                key={n.label}
                className="bg-white border border-gray-200 rounded-lg p-5"
              >
                <p className="text-sm text-gray-500 mb-1">{n.label}</p>
                <p className="text-2xl font-bold text-gray-900">{n.value}</p>
                <p className="text-xs text-gray-400 mt-1">{n.note}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* The sequenced moves. */}
      <section className="mb-10">
        <h2 className="text-xl font-bold text-gray-900 mb-5">
          Your sequence of moves
        </h2>
        <div className="space-y-4">
          {playbook.moves.map((m) => (
            <div
              key={m.order}
              className="bg-white border border-gray-200 rounded-lg p-5"
            >
              <div className="flex items-start gap-3">
                <div
                  className="w-7 h-7 shrink-0 rounded-full text-white flex items-center justify-center text-sm font-bold"
                  style={{ backgroundColor: ACCENT }}
                >
                  {m.order}
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">{m.title}</h3>
                  <p className="text-sm text-gray-600 mb-2">{m.rationale}</p>
                  <p className="text-sm text-gray-500">
                    <span className="font-medium text-gray-700">Effect: </span>
                    {m.effect}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Practices to add next. */}
      {playbook.practiceGuidance.recommended.length > 0 && (
        <section className="mb-10">
          <h2 className="text-xl font-bold text-gray-900 mb-2">
            Practices worth adding
          </h2>
          <p className="text-sm text-gray-500 mb-5">
            You already run:{" "}
            {playbook.practiceGuidance.adopted.length > 0
              ? playbook.practiceGuidance.adopted.join(", ")
              : "none of the core four yet"}
            . In priority order, here's what compounds fastest next.
          </p>
          <div className="space-y-3">
            {playbook.practiceGuidance.recommended.map((r) => (
              <div key={r.practice} className="bg-gray-50 rounded-lg p-5">
                <h3 className="font-semibold text-gray-900 mb-1">
                  {r.practice}
                </h3>
                <p className="text-sm text-gray-600">{r.why}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Funding money-map. */}
      <section className="mb-10">
        <h2 className="text-xl font-bold text-gray-900 mb-2">
          The money map — {REGION_LABELS[playbook.funding.region]}
        </h2>
        {playbook.funding.programs.length > 0 ? (
          <div className="space-y-3 mb-4">
            {playbook.funding.programs.map((p) => (
              <div
                key={p.name}
                className="bg-white border border-gray-200 rounded-lg p-5"
              >
                <h3 className="font-semibold text-gray-900 mb-1">{p.name}</h3>
                <p className="text-sm text-gray-600">{p.snippet}</p>
              </div>
            ))}
          </div>
        ) : null}
        <p className="text-sm text-gray-500 bg-amber-50 border border-amber-200 rounded p-4">
          {playbook.funding.note}
        </p>
      </section>

      {/* Honesty disclaimer — fixed. */}
      <section className="mb-10">
        <div
          className="rounded-lg border-l-4 p-5 bg-gray-50"
          style={{ borderColor: ACCENT }}
        >
          <p className="text-sm text-gray-700">
            <strong>How to read this plan.</strong> {playbook.disclaimer}
          </p>
        </div>
      </section>

      {/* Sources. */}
      <section className="mb-12">
        <h2 className="text-lg font-bold text-gray-900 mb-3">
          Sources this plan draws on
        </h2>
        <ul className="space-y-2">
          {playbook.sources.map((s) => (
            <li key={s.id} className="text-sm text-gray-600">
              <span className="inline-block text-xs font-mono text-gray-400 mr-2">
                [{s.tier}]
              </span>
              <a
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-gray-800 hover:text-[#2D5A47] underline decoration-gray-300"
              >
                {s.org} — {s.label}
              </a>
            </li>
          ))}
        </ul>
      </section>

      {/* Funnel onward to the tracker. */}
      <div className="flex flex-col gap-4">
        <Link
          href="/signup?from=playbook&stack=5"
          className="text-white px-6 py-3 rounded-md font-medium text-center hover:opacity-95 transition-opacity"
          style={{ backgroundColor: ACCENT }}
        >
          Track your real inputs — Free Plan &rarr;
        </Link>
        <p className="text-center text-sm text-gray-500">
          Log your actual inputs, soil and costs in the tracker and this plan
          stops being directional.
        </p>
      </div>
    </div>
  );
}
