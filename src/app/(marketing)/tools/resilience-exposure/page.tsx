"use client";

import { useState } from "react";
import Link from "next/link";
import GatedDownload from "@/components/marketing/GatedDownload";

const STACK = "#9A8CD0";

// Each dimension turns one number into a 0-100 exposure (higher = more fragile)
// via three bands, plus the mitigation to show when it's your weakest link.
type Dim = {
  key: string;
  label: string;
  unit: string;
  min: number;
  max: number;
  step: number;
  help: string;
  exposure: (v: number) => number;
  mitigation: string;
};

const band = (v: number, lowAt: number, highAt: number, invert = false) => {
  // invert=false: higher v = safer (buffer, runway, insurance)
  // invert=true:  higher v = riskier (concentration, single points)
  const lo = 15,
    mid = 55,
    hi = 90;
  if (!invert) {
    if (v >= lowAt) return lo;
    if (v <= highAt) return hi;
    return mid;
  }
  if (v <= lowAt) return lo;
  if (v >= highAt) return hi;
  return mid;
};

const DIMS: Dim[] = [
  {
    key: "customer",
    label: "Customer concentration",
    unit: "% of revenue from top customer",
    min: 0,
    max: 100,
    step: 5,
    help: "Lose this one buyer and how much revenue walks out?",
    exposure: (v) => band(v, 30, 50, true),
    mitigation:
      "Diversify your customer base. Target adding 2-3 mid-size buyers before your top customer exceeds ~30% of revenue. A direct-sales or cooperative channel can spread the risk.",
  },
  {
    key: "supplier",
    label: "Supplier concentration",
    unit: "% of critical inputs from one supplier",
    min: 0,
    max: 100,
    step: 5,
    help: "One supplier for a critical input is one disruption from a stoppage.",
    exposure: (v) => band(v, 30, 50, true),
    mitigation:
      "Qualify a backup supplier for every critical input now, before you need one. Even a small standing relationship with a second source turns a shutdown into an inconvenience.",
  },
  {
    key: "buffer",
    label: "Operating buffer",
    unit: "days you could run if key supply stopped",
    min: 0,
    max: 120,
    step: 5,
    help: "How long can you keep going when the input tap turns off?",
    exposure: (v) => band(v, 45, 14),
    mitigation:
      "Build a buffer for your most critical, hardest-to-replace inputs — aim for 3-6 weeks of cover. Buffer costs working capital, so target it where a stockout would actually halt production.",
  },
  {
    key: "runway",
    label: "Financial runway",
    unit: "months of operating costs in reserve",
    min: 0,
    max: 18,
    step: 1,
    help: "A bad season is survivable if you can fund the recovery.",
    exposure: (v) => band(v, 6, 2),
    mitigation:
      "Build toward 3-6 months of operating-cost reserve. Pair it with a pre-arranged credit line you don't have to draw — the point is optionality when a shock lands, not just cash on hand.",
  },
  {
    key: "keyPerson",
    label: "Key-person risk",
    unit: "critical roles only one person can do",
    min: 0,
    max: 8,
    step: 1,
    help: "If that person left tomorrow, what stops?",
    exposure: (v) => band(v, 0, 3, true),
    mitigation:
      "Document the critical role and cross-train a second person on it. Even a written playbook for the key tasks turns a resignation or illness from a crisis into a handover.",
  },
  {
    key: "insurance",
    label: "Risk coverage",
    unit: "% of major risks insured or contingency-planned",
    min: 0,
    max: 100,
    step: 10,
    help: "Weather, fire, disease, liability — how much is actually covered?",
    exposure: (v) => band(v, 70, 30),
    mitigation:
      "Map your top exposures (weather, disease, fire, liability, key equipment) and check each has either insurance or a contingency plan. Uninsured, unplanned risks are the ones that end operations.",
  },
];

const defaults: Record<string, number> = {
  customer: 25,
  supplier: 40,
  buffer: 21,
  runway: 3,
  keyPerson: 2,
  insurance: 50,
};

function overallBand(score: number) {
  if (score < 35) return { level: "Resilient", color: "#4AA88C", summary: "Your operation can absorb most shocks. Keep the weakest dimension from drifting." };
  if (score <= 60) return { level: "Exposed", color: "#f59e0b", summary: "You'd survive a disruption, but it would hurt. Close your biggest exposure before it's tested." };
  return { level: "Fragile", color: "#ef4444", summary: "A single disruption could cascade. Start with your weakest link this quarter." };
}

export default function ResilienceExposurePage() {
  const [vals, setVals] = useState<Record<string, number>>(defaults);
  const [computed, setComputed] = useState(false);

  const rows = DIMS.map((d) => ({ d, exposure: d.exposure(vals[d.key]) }));
  const score = Math.round(rows.reduce((s, r) => s + r.exposure, 0) / rows.length);
  const weakest = [...rows].sort((a, b) => b.exposure - a.exposure)[0];
  const overall = overallBand(score);

  return (
    <div className="max-w-2xl mx-auto px-6 py-16">
      <nav className="mb-8">
        <Link href="/tools" className="group flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-[#4AA88C] transition-colors">
          <span className="group-hover:-translate-x-1 transition-transform">←</span> Back to Tools
        </Link>
      </nav>

      <header className="mb-10">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-full text-white flex items-center justify-center font-bold" style={{ backgroundColor: STACK }}>
            4
          </div>
          <span className="text-sm text-gray-500">Stack 4 · Structural Resilience</span>
        </div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Resilience Exposure Calculator</h1>
        <p className="text-gray-600">
          Six numbers tell you where a single disruption would hurt most. Adjust
          the sliders to your operation and see your exposure map.
        </p>
      </header>

      {/* Inputs */}
      <div className="space-y-6 mb-8">
        {DIMS.map((d) => (
          <div key={d.key} className="bg-gray-50 rounded-lg p-5">
            <div className="flex items-baseline justify-between mb-1">
              <label className="font-medium text-gray-900">{d.label}</label>
              <span className="text-sm font-semibold" style={{ color: STACK }}>
                {vals[d.key]}
                {d.max === 100 && d.unit.includes("%") ? "%" : ""}
              </span>
            </div>
            <p className="text-xs text-gray-500 mb-3">{d.unit} — {d.help}</p>
            <input
              type="range"
              min={d.min}
              max={d.max}
              step={d.step}
              value={vals[d.key]}
              onChange={(e) => {
                setVals({ ...vals, [d.key]: Number(e.target.value) });
                setComputed(true);
              }}
              className="w-full accent-[#9A8CD0]"
            />
          </div>
        ))}
      </div>

      {/* Result */}
      <div className="rounded-lg border border-gray-200 overflow-hidden mb-8">
        <div className="p-6 text-center text-white" style={{ backgroundColor: overall.color }}>
          <div className="text-sm uppercase tracking-wide opacity-90">Overall exposure</div>
          <div className="text-4xl font-bold my-1">{score}/100</div>
          <div className="text-lg font-semibold">{overall.level}</div>
          <p className="text-sm opacity-90 mt-1 max-w-md mx-auto">{overall.summary}</p>
        </div>

        <div className="p-6 space-y-3">
          {rows.map((r) => (
            <div key={r.d.key}>
              <div className="flex justify-between text-sm mb-1">
                <span className="text-gray-700">{r.d.label}</span>
                <span className="font-medium text-gray-500">
                  {r.exposure < 35 ? "Low" : r.exposure <= 60 ? "Medium" : "High"}
                </span>
              </div>
              <div className="h-2 bg-gray-100 rounded-full">
                <div
                  className="h-2 rounded-full transition-all"
                  style={{
                    width: `${r.exposure}%`,
                    backgroundColor: r.exposure < 35 ? "#4AA88C" : r.exposure <= 60 ? "#f59e0b" : "#ef4444",
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Weakest link */}
      <div className="bg-white border-2 rounded-lg p-6 mb-8" style={{ borderColor: STACK }}>
        <h2 className="text-sm font-semibold uppercase tracking-wide mb-2" style={{ color: STACK }}>
          Your biggest exposure
        </h2>
        <p className="font-semibold text-gray-900 mb-2">{weakest.d.label}</p>
        <p className="text-gray-600 text-sm">{weakest.d.mitigation}</p>
      </div>

      {/* Take-it-with-you */}
      <div className="bg-[#1a1a2e] rounded-lg p-6 mb-8 text-white">
        <h2 className="font-semibold mb-2">Take the Resilience Scorecard with you</h2>
        <p className="text-white/70 text-sm mb-4">
          Get the branded workbook to keep &mdash; the full resilience checklist
          with built-in scoring, a band guide, an action plan, and a quarterly
          tracker to re-run this over time. Drop your email and download it now.
        </p>
        <GatedDownload
          feature="resilience-exposure"
          fileUrl="/downloads/farm-resilience-scorecard.xlsx"
          fileName="Farm-Resilience-Scorecard.xlsx"
          buttonLabel="Get the scorecard"
          downloadLabel="Download the scorecard (.xlsx)"
        />
      </div>

      {/* Funnel */}
      <div className="flex flex-col gap-4">
        <Link
          href="/signup?from=resilience-exposure&stack=4"
          className="bg-[#4AA88C] text-white px-6 py-3 rounded-md font-medium hover:bg-[#3d8f77] text-center"
        >
          Track the data behind these numbers — Free →
        </Link>
        <div className="flex gap-4">
          <Link
            href="/framework/stack-4-resilience"
            className="flex-1 text-center border border-gray-300 text-gray-700 px-6 py-3 rounded font-semibold hover:bg-gray-50 transition-colors"
          >
            Learn about Stack 4
          </Link>
          <Link
            href="/tools/resilience-assessment"
            className="flex-1 text-center border border-gray-300 text-gray-700 px-6 py-3 rounded font-semibold hover:bg-gray-50 transition-colors"
          >
            Take the full assessment
          </Link>
        </div>
      </div>

      <p className="text-center text-sm text-gray-500 mt-4">
        Directional estimate from your inputs. The free tracker turns these into
        tracked numbers you can act on.
      </p>
      {!computed && <span className="sr-only">Adjust a slider to recalculate.</span>}
    </div>
  );
}
