"use client";

import { useState } from "react";
import Link from "next/link";
import { analytics } from "@/lib/analytics";
import GatedDownload from "@/components/marketing/GatedDownload";

// ---------------------------------------------------------------------------
// Regenerative Transition ROI — a DIRECTIONAL J-curve model.
//
// Every number below is an adjustable assumption, not a forecast. The point of
// the tool is to let a grower shape the model around their own operation and
// see roughly when a regenerative transition turns cash-positive — never to
// promise a return. See the disclaimer surfaced next to the results.
// ---------------------------------------------------------------------------

const ACCENT = "#2D5A47"; // regenerative cluster green (tool identity)
const GREEN = "#4AA88C"; // baseline funnel CTA

const YEARS = 10;

// Input-cost savings ramp: share of current annual input spend saved, by year.
// Years 1-5 explicit, held flat thereafter. Year-3-to-5 range (20-30%) sits
// inside the article's cited "15-40% within 3-5 years".
const SAVINGS_RAMP = [0.05, 0.12, 0.2, 0.26, 0.3];

// Temporary transition yield dip: share of gross margin lost, by year.
// ~8% in year 1 easing to 0 by year 3 — the figure used in the tillage article.
const YIELD_DIP = [0.08, 0.04, 0.0];

const PRACTICES = [
  { key: "coverCrops", label: "Cover crops" },
  { key: "reducedTill", label: "Reduced / no-till" },
  { key: "compost", label: "Compost / manure" },
  { key: "rotation", label: "Diverse rotation" },
] as const;

type PracticeKey = (typeof PRACTICES)[number]["key"];

// How the practice count scales the two levers. More practices => more savings
// (kept gentle so year-5 savings stay within the cited 15-40% band) and a
// proportionally larger up-front outlay.
function savingsMultiplier(numPractices: number): number {
  return 0.75 + 0.125 * numPractices; // 1 practice 0.875 … 4 practices 1.25
}
function costScale(numPractices: number): number {
  return numPractices / 2; // up-front cost field is calibrated to a 2-practice transition
}

interface YearRow {
  year: number;
  savings: number;
  yieldDip: number; // positive = margin lost
  carbon: number;
  upfront: number; // positive = up-front outlay, year 1 only
  net: number;
  cumulative: number;
}

function formatEur(value: number): string {
  return `€${Math.round(value).toLocaleString("en-IE")}`;
}

function formatSignedEur(value: number): string {
  const rounded = Math.round(value);
  const abs = Math.abs(rounded).toLocaleString("en-IE");
  return `${rounded < 0 ? "−" : ""}€${abs}`;
}

export default function RegenerativeRoiPage() {
  const [form, setForm] = useState({
    hectares: "100",
    inputSpend: "350",
    grossMargin: "800",
    upfrontCost: "120",
    carbonPrice: "30",
    seqRate: "0.5",
  });
  const [practices, setPractices] = useState<Record<PracticeKey, boolean>>({
    coverCrops: true,
    reducedTill: true,
    compost: false,
    rotation: false,
  });
  const [includeCarbon, setIncludeCarbon] = useState(false);
  const [calculated, setCalculated] = useState(false);

  const handleChange = (field: keyof typeof form, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    setCalculated(false);
  };
  const togglePractice = (key: PracticeKey) => {
    setPractices((prev) => ({ ...prev, [key]: !prev[key] }));
    setCalculated(false);
  };
  const toggleCarbon = () => {
    setIncludeCarbon((prev) => !prev);
    setCalculated(false);
  };

  const hectares = parseFloat(form.hectares) || 0;
  const inputSpendPerHa = parseFloat(form.inputSpend) || 0;
  const grossMarginPerHa = parseFloat(form.grossMargin) || 0;
  const upfrontCostPerHa = parseFloat(form.upfrontCost) || 0;
  const carbonPrice = parseFloat(form.carbonPrice) || 0;
  const seqRate = parseFloat(form.seqRate) || 0;

  const numPractices = PRACTICES.filter((p) => practices[p.key]).length;

  const canCalculate =
    hectares > 0 &&
    inputSpendPerHa > 0 &&
    grossMarginPerHa > 0 &&
    numPractices > 0;

  // Build the 10-year cash-flow schedule (the J-curve).
  const savingsMult = savingsMultiplier(numPractices);
  const scale = costScale(numPractices);
  const rows: YearRow[] = [];
  let running = 0;
  for (let i = 0; i < YEARS; i++) {
    const year = i + 1;
    const savingsShare =
      (SAVINGS_RAMP[i] ?? SAVINGS_RAMP[SAVINGS_RAMP.length - 1]) * savingsMult;
    const savings = inputSpendPerHa * hectares * savingsShare;
    const yieldDip = grossMarginPerHa * hectares * (YIELD_DIP[i] ?? 0);
    const carbon =
      includeCarbon && year >= 2 ? hectares * seqRate * carbonPrice : 0;
    const upfront = i === 0 ? upfrontCostPerHa * scale * hectares : 0;
    const net = savings + carbon - yieldDip - upfront;
    running += net;
    rows.push({ year, savings, yieldDip, carbon, upfront, net, cumulative: running });
  }

  const paybackYear = rows.find((r) => r.cumulative >= 0)?.year ?? null;
  const tenYearNet = rows[rows.length - 1].cumulative;
  const tenYearNetPerHa = hectares > 0 ? tenYearNet / hectares : 0;
  const maxAbs = Math.max(...rows.map((r) => Math.abs(r.cumulative)), 1);

  const handleCalculate = () => {
    if (!canCalculate) return;
    setCalculated(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
    analytics.track("calculator_used", {
      label: "regenerative_roi",
      payback_year: paybackYear,
      ten_year_net: Math.round(tenYearNet),
    });
  };

  const handleReset = () => {
    setForm({
      hectares: "100",
      inputSpend: "350",
      grossMargin: "800",
      upfrontCost: "120",
      carbonPrice: "30",
      seqRate: "0.5",
    });
    setPractices({
      coverCrops: true,
      reducedTill: true,
      compost: false,
      rotation: false,
    });
    setIncludeCarbon(false);
    setCalculated(false);
  };

  const inputClass =
    "w-full border border-gray-300 rounded-md px-3 py-2 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:border-transparent";
  const focusRing = { outlineColor: ACCENT } as const;

  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <nav className="mb-8">
        <Link
          href="/tools"
          className="group flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-[#2D5A47] transition-colors"
        >
          <span className="group-hover:-translate-x-1 transition-transform">
            &larr;
          </span>{" "}
          Back to Tools
        </Link>
      </nav>

      <header className="mb-10">
        <div className="flex items-center gap-3 mb-4">
          <div
            className="w-10 h-10 rounded-full text-white flex items-center justify-center font-bold"
            style={{ backgroundColor: ACCENT }}
          >
            R
          </div>
          <span className="text-sm text-gray-500">Regenerative transition</span>
        </div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          Regenerative Transition ROI Calculator
        </h1>
        <p className="text-gray-600">
          A regenerative transition usually costs before it pays. This tool
          sketches the J-curve on your own operation &mdash; the early dip, and
          roughly which year the cumulative return turns positive. Move every
          assumption until the model reflects your fields.
        </p>
      </header>

      {/* Inputs */}
      <section className="mb-10 space-y-6">
        <div className="bg-gray-50 rounded-lg p-6">
          <h2 className="font-medium text-gray-900 mb-4">Your operation</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm text-gray-600 mb-1">
                Farm size (hectares)
              </label>
              <input
                type="number"
                min="0"
                step="1"
                value={form.hectares}
                onChange={(e) => handleChange("hectares", e.target.value)}
                className={inputClass}
                style={focusRing}
              />
            </div>
            <div>
              <label className="block text-sm text-gray-600 mb-1">
                Input spend (&euro;/ha/yr)
              </label>
              <input
                type="number"
                min="0"
                step="10"
                value={form.inputSpend}
                onChange={(e) => handleChange("inputSpend", e.target.value)}
                className={inputClass}
                style={focusRing}
              />
              <p className="text-xs text-gray-400 mt-1">
                Fertiliser + crop protection
              </p>
            </div>
            <div>
              <label className="block text-sm text-gray-600 mb-1">
                Gross margin (&euro;/ha/yr)
              </label>
              <input
                type="number"
                min="0"
                step="10"
                value={form.grossMargin}
                onChange={(e) => handleChange("grossMargin", e.target.value)}
                className={inputClass}
                style={focusRing}
              />
              <p className="text-xs text-gray-400 mt-1">
                Used to value the transition-year yield dip
              </p>
            </div>
          </div>
        </div>

        {/* Practices */}
        <div className="bg-gray-50 rounded-lg p-6">
          <h2 className="font-medium text-gray-900 mb-1">Practices adopting</h2>
          <p className="text-sm text-gray-500 mb-4">
            Each practice adds up-front cost and lifts the savings ramp.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {PRACTICES.map((p) => {
              const on = practices[p.key];
              return (
                <button
                  key={p.key}
                  type="button"
                  onClick={() => togglePractice(p.key)}
                  className={`flex items-center gap-3 py-3 px-4 rounded-md border text-left text-sm font-medium transition-colors ${
                    on
                      ? "text-white"
                      : "bg-white border-gray-300 text-gray-700 hover:border-gray-400"
                  }`}
                  style={on ? { backgroundColor: ACCENT, borderColor: ACCENT } : undefined}
                >
                  <span
                    className={`inline-flex items-center justify-center w-5 h-5 rounded border text-xs ${
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
        </div>

        {/* Carbon */}
        <div className="bg-gray-50 rounded-lg p-6">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h2 className="font-medium text-gray-900 mb-1">
                Include carbon income?
              </h2>
              <p className="text-sm text-gray-500">
                Optional. Off by default &mdash; carbon revenue is not guaranteed.
              </p>
            </div>
            <button
              type="button"
              onClick={toggleCarbon}
              role="switch"
              aria-checked={includeCarbon}
              className={`relative inline-flex h-6 w-11 shrink-0 items-center rounded-full transition-colors ${
                includeCarbon ? "" : "bg-gray-300"
              }`}
              style={includeCarbon ? { backgroundColor: ACCENT } : undefined}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  includeCarbon ? "translate-x-6" : "translate-x-1"
                }`}
              />
            </button>
          </div>

          {includeCarbon && (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-5">
                <div>
                  <label className="block text-sm text-gray-600 mb-1">
                    Carbon price (&euro;/tCO2e)
                  </label>
                  <input
                    type="number"
                    min="0"
                    step="1"
                    value={form.carbonPrice}
                    onChange={(e) => handleChange("carbonPrice", e.target.value)}
                    className={inputClass}
                    style={focusRing}
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-600 mb-1">
                    Sequestration rate (tCO2e/ha/yr)
                  </label>
                  <input
                    type="number"
                    min="0"
                    step="0.1"
                    value={form.seqRate}
                    onChange={(e) => handleChange("seqRate", e.target.value)}
                    className={inputClass}
                    style={focusRing}
                  />
                </div>
              </div>
              <p className="text-xs text-gray-500 mt-3 bg-amber-50 border border-amber-200 rounded p-3">
                Carbon revenue requires <strong>additionality</strong> and{" "}
                <strong>third-party verification</strong>, is applied here only
                from year 2, and is <strong>not guaranteed</strong>. Treat it as
                upside, not a line you can bank.
              </p>
            </>
          )}
        </div>

        {/* Advanced assumption */}
        <div className="bg-gray-50 rounded-lg p-6">
          <h2 className="font-medium text-gray-900 mb-4">
            Up-front transition cost
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm text-gray-600 mb-1">
                Up-front cost (&euro;/ha)
              </label>
              <input
                type="number"
                min="0"
                step="10"
                value={form.upfrontCost}
                onChange={(e) => handleChange("upfrontCost", e.target.value)}
                className={inputClass}
                style={focusRing}
              />
              <p className="text-xs text-gray-400 mt-1">
                Seed, equipment adjustment, advice. Calibrated to a 2-practice
                transition and scaled by how many you pick.
              </p>
            </div>
            <div className="text-sm text-gray-500 flex items-end">
              <p>
                With {numPractices} practice{numPractices === 1 ? "" : "s"}{" "}
                selected, the model applies{" "}
                <strong className="text-gray-700">
                  {formatEur(upfrontCostPerHa * scale)}/ha
                </strong>{" "}
                up-front ({formatEur(upfrontCostPerHa * scale * hectares)} total)
                in year 1.
              </p>
            </div>
          </div>
        </div>

        <div className="flex gap-4">
          <button
            onClick={handleCalculate}
            disabled={!canCalculate}
            className="flex-1 py-3 rounded-md font-semibold text-white transition-colors disabled:bg-gray-200 disabled:text-gray-500 disabled:cursor-not-allowed"
            style={canCalculate ? { backgroundColor: ACCENT } : undefined}
          >
            See the payback timeline
          </button>
          <button
            onClick={handleReset}
            className="px-6 py-3 rounded-md font-semibold border border-gray-300 text-gray-700 hover:border-gray-400 transition-colors"
          >
            Reset
          </button>
        </div>
        {!canCalculate && (
          <p className="text-sm text-gray-500">
            Enter farm size, input spend and gross margin, and pick at least one
            practice.
          </p>
        )}
      </section>

      {/* Results */}
      {calculated && (
        <section className="mb-10">
          {/* Disclaimer */}
          <div className="rounded-lg border-l-4 p-5 mb-8 bg-gray-50" style={{ borderColor: ACCENT }}>
            <p className="text-sm text-gray-700">
              <strong>Directional estimate, not a forecast.</strong> Every
              assumption here is adjustable and should be validated against your
              own records and an agronomist. Regenerative outcomes vary widely by
              soil, climate, starting point, and practice. This is a planning
              sketch, never a promised return.
            </p>
          </div>

          {/* Headline numbers */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <p className="text-sm text-gray-500 mb-1">Payback year</p>
              <p className="text-2xl font-bold text-gray-900">
                {paybackYear ? `Year ${paybackYear}` : "Not within 10y"}
              </p>
              <p className="text-xs text-gray-400 mt-1">
                {paybackYear
                  ? "First year cumulative net turns positive"
                  : "Cumulative net stays negative through year 10 on these inputs"}
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <p className="text-sm text-gray-500 mb-1">10-year cumulative net</p>
              <p
                className="text-2xl font-bold"
                style={{ color: tenYearNet >= 0 ? ACCENT : "#B4413C" }}
              >
                {formatSignedEur(tenYearNet)}
              </p>
              <p className="text-xs text-gray-400 mt-1">Across the whole farm</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <p className="text-sm text-gray-500 mb-1">Per hectare (10y)</p>
              <p
                className="text-2xl font-bold"
                style={{ color: tenYearNetPerHa >= 0 ? ACCENT : "#B4413C" }}
              >
                {formatSignedEur(tenYearNetPerHa)}
              </p>
              <p className="text-xs text-gray-400 mt-1">Cumulative net per ha</p>
            </div>
          </div>

          {/* J-curve: cumulative bars */}
          <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
            <h2 className="font-semibold text-gray-900 mb-1">
              The J-curve: cumulative net by year
            </h2>
            <p className="text-sm text-gray-500 mb-5">
              Early years dip below the line (up-front cost + yield dip), then
              climb as input savings{includeCarbon ? " and carbon" : ""} accrue.
            </p>
            <div className="space-y-2">
              {rows.map((r) => {
                const pct = (Math.abs(r.cumulative) / maxAbs) * 50; // half-width each side
                const positive = r.cumulative >= 0;
                return (
                  <div key={r.year} className="flex items-center gap-3 text-sm">
                    <span className="w-12 shrink-0 text-gray-500">
                      Yr {r.year}
                    </span>
                    <div className="relative flex-1 h-5 flex items-center">
                      <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gray-300" />
                      <div className="w-1/2 flex justify-end">
                        {!positive && (
                          <div
                            className="h-3.5 rounded-l"
                            style={{
                              width: `${pct}%`,
                              backgroundColor: "#C6706B",
                            }}
                          />
                        )}
                      </div>
                      <div className="w-1/2 flex justify-start">
                        {positive && (
                          <div
                            className="h-3.5 rounded-r"
                            style={{ width: `${pct}%`, backgroundColor: ACCENT }}
                          />
                        )}
                      </div>
                    </div>
                    <span
                      className="w-24 shrink-0 text-right font-medium"
                      style={{ color: positive ? ACCENT : "#B4413C" }}
                    >
                      {formatSignedEur(r.cumulative)}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Year-by-year table */}
          <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8 overflow-x-auto">
            <h2 className="font-semibold text-gray-900 mb-4">
              Year-by-year cash flow
            </h2>
            <table className="w-full text-sm border-collapse min-w-[560px]">
              <thead>
                <tr className="text-gray-500">
                  <th className="text-left font-medium pb-3 pr-3">Year</th>
                  <th className="text-right font-medium pb-3 px-2">
                    Input savings
                  </th>
                  <th className="text-right font-medium pb-3 px-2">Yield dip</th>
                  {includeCarbon && (
                    <th className="text-right font-medium pb-3 px-2">Carbon</th>
                  )}
                  <th className="text-right font-medium pb-3 px-2">Up-front</th>
                  <th className="text-right font-medium pb-3 px-2">Net</th>
                  <th className="text-right font-medium pb-3 pl-2">Cumulative</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((r) => (
                  <tr key={r.year} className="border-t border-gray-100">
                    <td className="py-2.5 pr-3 text-gray-700">{r.year}</td>
                    <td className="py-2.5 px-2 text-right text-gray-700">
                      {r.savings ? formatEur(r.savings) : "—"}
                    </td>
                    <td className="py-2.5 px-2 text-right text-gray-500">
                      {r.yieldDip ? `−${formatEur(r.yieldDip)}` : "—"}
                    </td>
                    {includeCarbon && (
                      <td className="py-2.5 px-2 text-right text-gray-700">
                        {r.carbon ? formatEur(r.carbon) : "—"}
                      </td>
                    )}
                    <td className="py-2.5 px-2 text-right text-gray-500">
                      {r.upfront ? `−${formatEur(r.upfront)}` : "—"}
                    </td>
                    <td
                      className="py-2.5 px-2 text-right font-medium"
                      style={{ color: r.net >= 0 ? ACCENT : "#B4413C" }}
                    >
                      {formatSignedEur(r.net)}
                    </td>
                    <td
                      className="py-2.5 pl-2 text-right font-semibold"
                      style={{ color: r.cumulative >= 0 ? ACCENT : "#B4413C" }}
                    >
                      {formatSignedEur(r.cumulative)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Assumptions surfaced */}
          <div className="bg-gray-50 rounded-lg p-6 mb-8">
            <h2 className="font-semibold text-gray-900 mb-3">
              What&apos;s under the hood
            </h2>
            <ul className="text-sm text-gray-600 space-y-2 list-disc pl-5">
              <li>
                <strong>Input-cost savings</strong> ramp 5% &rarr; 12% &rarr; 20%
                &rarr; 26% &rarr; 30% of your input spend over years 1&ndash;5,
                then hold. That brackets the widely cited{" "}
                <strong>15&ndash;40% within 3&ndash;5 years</strong>. Your
                practice mix nudges it up or down.
              </li>
              <li>
                <strong>Transition yield dip</strong> of ~8% of gross margin in
                year 1, easing to ~4% in year 2 and gone by year 3 &mdash; the
                figure used in our tillage article.
              </li>
              <li>
                <strong>Up-front cost</strong> applied once, in year 1, scaled by
                how many practices you adopt.
              </li>
              {includeCarbon && (
                <li>
                  <strong>Carbon income</strong> = hectares &times; sequestration
                  rate &times; carbon price, from year 2 &mdash; only if it clears
                  additionality and verification.
                </li>
              )}
            </ul>
          </div>

          {/* Take-it-with-you download */}
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-8">
            <h2 className="font-semibold text-gray-900 mb-2">
              Take the model with you
            </h2>
            <p className="text-sm text-gray-600 mb-4">
              Get the full Regenerative Transition ROI model as a spreadsheet
              &mdash; every assumption in an editable cell, the 10-year schedule,
              and the payback calc, so you can rebuild it against your own
              records. Drop your email and download it now.
            </p>
            <GatedDownload
              feature="regenerative-roi"
              fileUrl="/downloads/regenerative-transition-roi-model.xlsx"
              fileName="Regenerative-Transition-ROI-Model.xlsx"
              buttonLabel="Get the ROI model"
              downloadLabel="Download the ROI model (.xlsx)"
              placeholder="you@farm.com"
            />
          </div>

          {/* Funnel CTA */}
          <div className="flex flex-col gap-4">
            <Link
              href="/signup?from=regenerative-roi&stack=5"
              className="text-white px-6 py-3 rounded-md font-medium text-center hover:opacity-95 transition-opacity"
              style={{ backgroundColor: GREEN }}
            >
              Start Your Baseline — Free Plan &rarr;
            </Link>
            <p className="text-center text-sm text-gray-500">
              Track your real inputs, soil, and costs and this stops being an
              estimate.
            </p>
            <div className="flex gap-4">
              <Link
                href="/articles/regenerative-guide"
                className="flex-1 text-center border border-gray-300 text-gray-700 px-6 py-3 rounded font-semibold hover:bg-gray-50 transition-colors"
              >
                Read the full framework
              </Link>
              <button
                onClick={handleReset}
                className="flex-1 text-center border border-gray-300 text-gray-700 px-6 py-3 rounded font-semibold hover:border-gray-400 transition-colors"
              >
                Recalculate / reset
              </button>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
