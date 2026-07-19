"use client";

import { useState } from "react";
import Link from "next/link";
import { analytics } from "@/lib/analytics";
import GatedDownload from "@/components/marketing/GatedDownload";

// Directional sustainability profiles for the four biofuel generations,
// synthesised from published biofuel-generation research and the criteria in
// /articles/biofuel-sustainability-ranking. Scores are 1 (poor) to 5 (strong)
// and are meant for orientation, not lab-grade lifecycle analysis.
const CRITERIA = [
  {
    key: "carbon",
    label: "Low carbon footprint",
    desc: "Net greenhouse-gas emissions versus fossil fuels",
  },
  {
    key: "feedstock",
    label: "Feedstock availability",
    desc: "Abundance and renewability of the feedstock",
  },
  {
    key: "land",
    label: "Low land-use impact",
    desc: "Avoids deforestation, soil degradation, food competition",
  },
  {
    key: "eroi",
    label: "Energy efficiency (EROI)",
    desc: "Energy returned versus energy invested to produce the fuel",
  },
  {
    key: "scalability",
    label: "Scalability today",
    desc: "Commercial feasibility and production potential right now",
  },
] as const;

type CriterionKey = (typeof CRITERIA)[number]["key"];

type Generation = {
  id: string;
  name: string;
  short: string;
  examples: string;
  verdict: string;
  scores: Record<CriterionKey, number>;
};

const GENERATIONS: Generation[] = [
  {
    id: "gen1",
    name: "1st Generation",
    short: "Food-crop based",
    examples: "Corn & sugarcane ethanol, vegetable-oil biodiesel",
    verdict: "Better than fossil fuels, but food competition and land use limit long-term viability.",
    scores: { carbon: 2, feedstock: 2, land: 1, eroi: 3, scalability: 5 },
  },
  {
    id: "gen2",
    name: "2nd Generation",
    short: "Lignocellulosic / waste",
    examples: "Corn stover, wheat straw, forestry & farm residues",
    verdict: "The best balance of sustainability and practicality — and where farm waste streams become feedstock.",
    scores: { carbon: 4, feedstock: 4, land: 4, eroi: 4, scalability: 3 },
  },
  {
    id: "gen3",
    name: "3rd Generation",
    short: "Algae based",
    examples: "Lipid-rich algae grown on non-arable land",
    verdict: "High sustainability — absorbs CO₂, no food competition — but extraction is costly and hard to scale.",
    scores: { carbon: 5, feedstock: 4, land: 5, eroi: 2, scalability: 2 },
  },
  {
    id: "gen4",
    name: "4th Generation",
    short: "Engineered microbes",
    examples: "Genetically engineered algae & microbes",
    verdict: "Highest long-term potential, including carbon-negative pathways — but still years from commercial viability.",
    scores: { carbon: 5, feedstock: 5, land: 5, eroi: 3, scalability: 1 },
  },
];

// Weight levels the user assigns to each criterion.
const WEIGHTS = [
  { label: "Not important", value: 0 },
  { label: "Somewhat", value: 1 },
  { label: "Critical", value: 2 },
] as const;

const ACCENT = "#7B6BB8"; // Stack 3 / Biofuels & Energy
const GREEN = "#4AA88C"; // baseline funnel CTA

function scoreColor(score: number) {
  if (score >= 4) return "#4AA88C"; // green
  if (score === 3) return "#D9A441"; // amber
  return "#C0607A"; // muted red
}

export default function BiofuelFeedstockComparePage() {
  const [weights, setWeights] = useState<Record<CriterionKey, number>>({
    carbon: 1,
    feedstock: 1,
    land: 1,
    eroi: 1,
    scalability: 1,
  });
  const [showResults, setShowResults] = useState(false);

  const setWeight = (key: CriterionKey, value: number) =>
    setWeights((prev) => ({ ...prev, [key]: value }));

  const anyWeighted = Object.values(weights).some((w) => w > 0);

  // Weighted total per generation, normalised to a 0–100 fit score.
  const ranked = GENERATIONS.map((gen) => {
    const weightSum = CRITERIA.reduce((s, c) => s + weights[c.key], 0) || 1;
    const raw = CRITERIA.reduce(
      (s, c) => s + gen.scores[c.key] * weights[c.key],
      0
    );
    const fit = Math.round((raw / (weightSum * 5)) * 100);
    return { ...gen, fit };
  }).sort((a, b) => b.fit - a.fit);

  const winner = ranked[0];

  const handleSubmit = () => {
    if (!anyWeighted) return;
    setShowResults(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
    analytics.track("calculator_used", {
      label: "biofuel_feedstock_compare",
      winner: winner.id,
      fit: winner.fit,
    });
  };

  const handleReset = () => {
    setWeights({ carbon: 1, feedstock: 1, land: 1, eroi: 1, scalability: 1 });
    setShowResults(false);
  };

  if (showResults) {
    return (
      <div className="max-w-3xl mx-auto px-6 py-16">
        <nav className="mb-8">
          <Link
            href="/tools"
            className="group flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-[#4AA88C] transition-colors"
          >
            <span className="group-hover:-translate-x-1 transition-transform">←</span>{" "}
            Back to Tools
          </Link>
        </nav>

        {/* Winner */}
        <div className="text-center mb-10">
          <p className="text-sm uppercase tracking-wide text-gray-500 mb-2">
            Best fit for your priorities
          </p>
          <div
            className="inline-flex items-center justify-center px-6 py-2 rounded-full text-white text-lg font-bold mb-3"
            style={{ backgroundColor: ACCENT }}
          >
            {winner.name} — {winner.short}
          </div>
          <p className="text-gray-600 max-w-xl mx-auto">{winner.verdict}</p>
        </div>

        {/* Ranked fit */}
        <div className="bg-gray-50 rounded-lg p-6 mb-8">
          <h2 className="font-semibold text-gray-900 mb-4">
            How the four generations rank for you
          </h2>
          <div className="space-y-3">
            {ranked.map((gen) => (
              <div key={gen.id}>
                <div className="flex justify-between text-sm mb-1">
                  <span className="font-medium text-gray-800">
                    {gen.name} · {gen.short}
                  </span>
                  <span className="text-gray-500">{gen.fit}% fit</span>
                </div>
                <div className="h-2.5 w-full bg-gray-200 rounded-full overflow-hidden">
                  <div
                    className="h-full rounded-full"
                    style={{
                      width: `${gen.fit}%`,
                      backgroundColor: gen.id === winner.id ? ACCENT : "#C4BCE0",
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Full matrix */}
        <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8 overflow-x-auto">
          <h2 className="font-semibold text-gray-900 mb-4">
            The full comparison
          </h2>
          <table className="w-full text-sm border-collapse min-w-[520px]">
            <thead>
              <tr>
                <th className="text-left font-medium text-gray-500 pb-3 pr-3">
                  Criterion
                </th>
                {GENERATIONS.map((gen) => (
                  <th
                    key={gen.id}
                    className="text-center font-medium text-gray-700 pb-3 px-2"
                  >
                    {gen.name.replace(" Generation", " Gen")}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {CRITERIA.map((c) => (
                <tr key={c.key} className="border-t border-gray-100">
                  <td className="py-2.5 pr-3 text-gray-700">{c.label}</td>
                  {GENERATIONS.map((gen) => (
                    <td key={gen.id} className="py-2.5 px-2 text-center">
                      <span
                        className="inline-flex items-center justify-center w-7 h-7 rounded-full text-white text-xs font-semibold"
                        style={{ backgroundColor: scoreColor(gen.scores[c.key]) }}
                        title={`${gen.scores[c.key]} / 5`}
                      >
                        {gen.scores[c.key]}
                      </span>
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
          <p className="text-xs text-gray-400 mt-4">
            Scores are directional (1–5), synthesised from published
            biofuel-generation research for orientation — not a lab-grade
            lifecycle assessment.
          </p>
        </div>

        {/* Agricultural angle */}
        <div className="rounded-lg p-6 mb-8 text-white" style={{ backgroundColor: ACCENT }}>
          <h2 className="font-semibold mb-2">If you farm, start with 2nd generation</h2>
          <p className="text-white/85 text-sm">
            Second-generation pathways turn crop residues and farm waste — corn
            stover, wheat straw, forestry residues — into feedstock, with no
            additional land and technology that&apos;s already commercially
            viable. That&apos;s a Stack 3 (margin recovery) opportunity: value
            you&apos;re currently leaving in the field.
          </p>
        </div>

        {/* Take-it-with-you download */}
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-8">
          <h2 className="font-semibold text-gray-900 mb-2">
            Take the full workbook with you
          </h2>
          <p className="text-sm text-gray-600 mb-4">
            Get the branded Biofuel Feedstock Sustainability Comparison workbook —
            the full 4-generation matrix, a &quot;score it yourself&quot; sheet with
            live formulas so you can weight it for your own operation, plus notes
            and sources. Drop your email and download it now.
          </p>
          <GatedDownload
            feature="biofuels-comparison"
            fileUrl="/downloads/biofuel-feedstock-sustainability-comparison.xlsx"
            fileName="Biofuel-Feedstock-Sustainability-Comparison.xlsx"
            buttonLabel="Get the workbook"
            downloadLabel="Download the workbook (.xlsx)"
            placeholder="you@farm.com"
          />
        </div>

        {/* Funnel CTA */}
        <div className="flex flex-col gap-4">
          <Link
            href="/signup?from=biofuel-compare&stack=3"
            className="bg-[#4AA88C] text-white px-6 py-3 rounded-md font-medium hover:bg-[#3d8f77] text-center"
            style={{ backgroundColor: GREEN }}
          >
            Start Your Baseline — Free Plan →
          </Link>
          <div className="flex gap-4">
            <Link
              href="/articles/biofuel-sustainability-ranking"
              className="flex-1 text-center border border-gray-300 text-gray-700 px-6 py-3 rounded font-semibold hover:bg-gray-50 transition-colors"
            >
              Read the deep dive
            </Link>
            <button
              onClick={handleReset}
              className="flex-1 text-center border border-gray-300 text-gray-700 px-6 py-3 rounded font-semibold hover:border-gray-400"
            >
              Re-weight & compare again
            </button>
          </div>
        </div>

        <p className="text-center text-sm text-gray-500 mt-4">
          The free plan includes the full 8-domain tracker, CSV exports, and
          multi-site support.
        </p>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto px-6 py-16">
      <nav className="mb-8">
        <Link
          href="/tools"
          className="group flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-[#4AA88C] transition-colors"
        >
          <span className="group-hover:-translate-x-1 transition-transform">←</span>{" "}
          Back to Tools
        </Link>
      </nav>

      <header className="mb-10">
        <div className="flex items-center gap-3 mb-4">
          <div
            className="w-10 h-10 rounded-full text-white flex items-center justify-center font-bold"
            style={{ backgroundColor: ACCENT }}
          >
            3
          </div>
          <span className="text-sm text-gray-500">Biofuels &amp; Energy</span>
        </div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          Biofuel Feedstock Comparison
        </h1>
        <p className="text-gray-600">
          Not all biofuels are equally sustainable. Tell us what matters most for
          your operation and we&apos;ll rank the four generations for you.
        </p>
      </header>

      <div className="space-y-6">
        {CRITERIA.map((c) => (
          <div key={c.key} className="bg-gray-50 rounded-lg p-6">
            <p className="font-medium text-gray-900 mb-1">{c.label}</p>
            <p className="text-sm text-gray-500 mb-4">{c.desc}</p>
            <div className="flex gap-3">
              {WEIGHTS.map((w) => (
                <button
                  key={w.value}
                  onClick={() => setWeight(c.key, w.value)}
                  className={`flex-1 py-2 px-3 rounded font-medium text-sm transition-colors ${
                    weights[c.key] === w.value
                      ? "text-white"
                      : "bg-white border border-gray-300 text-gray-700 hover:border-[#7B6BB8]"
                  }`}
                  style={
                    weights[c.key] === w.value
                      ? { backgroundColor: ACCENT }
                      : undefined
                  }
                >
                  {w.label}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8">
        <button
          onClick={handleSubmit}
          disabled={!anyWeighted}
          className={`w-full py-3 rounded font-semibold transition-colors ${
            anyWeighted
              ? "text-white"
              : "bg-gray-200 text-gray-500 cursor-not-allowed"
          }`}
          style={anyWeighted ? { backgroundColor: GREEN } : undefined}
        >
          {anyWeighted
            ? "See my best-fit biofuel"
            : "Mark at least one priority as important"}
        </button>
      </div>
    </div>
  );
}
