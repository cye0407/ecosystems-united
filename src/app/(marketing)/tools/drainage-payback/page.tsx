"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { analytics } from "@/lib/analytics";
import {
  SPACING_CLASSES,
  UPLIFT_SCENARIOS,
  SECONDARY_BENEFITS,
  computeDrainagePayback,
  formatEur,
  formatSignedEur,
  formatYears,
  HORIZON_YEARS,
  type SpacingClassKey,
  type UpliftScenarioKey,
  type SecondaryBenefitKey,
} from "@/lib/drainage-payback";

// ---------------------------------------------------------------------------
// Drainage Payback Calculator — the subsurface-drainage article's worked
// payback model, made interactive. Every preset comes from the article's
// published figures and every one is overridable. Directional, never a
// promised return.
// ---------------------------------------------------------------------------

const ACCENT = "#5B4A9E"; // Stack 2: Efficiency

export default function DrainagePaybackPage() {
  // Defaults reproduce the article's worked "Moderate Drainage Scenario":
  // 25 ha at €3,000/ha, 20% uplift, €960/ha margin at stake → 15.6 years.
  const [form, setForm] = useState({
    hectares: "25",
    costPerHa: "3000",
    upliftPct: "20",
    grossMargin: "960",
  });
  const [spacingClass, setSpacingClass] = useState<SpacingClassKey>("standard");
  const [scenario, setScenario] = useState<UpliftScenarioKey>("moderate");
  const [secondaryOn, setSecondaryOn] = useState<Record<SecondaryBenefitKey, boolean>>({
    earlierAccess: false,
    inputSavings: false,
  });
  const [secondaryValues, setSecondaryValues] = useState<Record<SecondaryBenefitKey, string>>({
    earlierAccess: "60",
    inputSavings: "32",
  });
  const [calculated, setCalculated] = useState(false);

  useEffect(() => {
    analytics.track("tool_opened", { label: "drainage_payback" });
  }, []);

  const handleChange = (field: keyof typeof form, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    setCalculated(false);
  };
  const selectSpacing = (key: SpacingClassKey) => {
    setSpacingClass(key);
    const preset = SPACING_CLASSES.find((c) => c.key === key)!.defaultCostPerHa;
    setForm((prev) => ({ ...prev, costPerHa: String(preset) }));
    setCalculated(false);
  };
  const selectScenario = (key: UpliftScenarioKey) => {
    setScenario(key);
    const preset = UPLIFT_SCENARIOS.find((s) => s.key === key)!.defaultUpliftPct;
    setForm((prev) => ({ ...prev, upliftPct: String(preset) }));
    setCalculated(false);
  };
  const toggleSecondary = (key: SecondaryBenefitKey) => {
    setSecondaryOn((prev) => ({ ...prev, [key]: !prev[key] }));
    setCalculated(false);
  };
  const changeSecondaryValue = (key: SecondaryBenefitKey, value: string) => {
    setSecondaryValues((prev) => ({ ...prev, [key]: value }));
    setCalculated(false);
  };

  const hectares = parseFloat(form.hectares) || 0;
  const costPerHa = parseFloat(form.costPerHa) || 0;
  const upliftPct = parseFloat(form.upliftPct) || 0;
  const grossMarginPerHa = parseFloat(form.grossMargin) || 0;
  const secondaryPerHa = SECONDARY_BENEFITS.reduce(
    (sum, b) =>
      secondaryOn[b.key] ? sum + (parseFloat(secondaryValues[b.key]) || 0) : sum,
    0,
  );

  const canCalculate =
    hectares > 0 && costPerHa > 0 && upliftPct > 0 && grossMarginPerHa > 0;

  const result = computeDrainagePayback({
    hectares,
    costPerHa,
    upliftPct,
    grossMarginPerHa,
    secondaryPerHa,
  });
  const maxAbs = Math.max(...result.rows.map((r) => Math.abs(r.cumulative)), 1);

  const handleCalculate = () => {
    if (!canCalculate) return;
    setCalculated(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
    analytics.track("calculator_used", {
      label: "drainage_payback",
      payback_years:
        result.paybackYears !== null
          ? Math.round(result.paybackYears * 10) / 10
          : null,
      total_cost: Math.round(result.totalCost),
      uplift_pct: upliftPct,
    });
    // Hand off to the Stack 2 Playbook so what you told the calculator is
    // pre-filled there. Only what's honestly implied by using this tool:
    // modeling a drainage fix = a water problem; the nitrogen-savings toggle
    // = inputs you pay for and lose.
    try {
      const issues = [
        "waterCost",
        ...(secondaryOn.inputSavings ? ["wastingInputs"] : []),
      ];
      localStorage.setItem("eu:playbook:stack-2", JSON.stringify({ issues }));
    } catch {
      // localStorage unavailable (private mode) — the playbook form still works.
    }
  };

  const handleReset = () => {
    setForm({ hectares: "25", costPerHa: "3000", upliftPct: "20", grossMargin: "960" });
    setSpacingClass("standard");
    setScenario("moderate");
    setSecondaryOn({ earlierAccess: false, inputSavings: false });
    setSecondaryValues({ earlierAccess: "60", inputSavings: "32" });
    setCalculated(false);
  };

  const inputClass =
    "w-full border border-gray-300 rounded-md px-3 py-2 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:border-transparent";
  const focusRing = { outlineColor: ACCENT } as const;

  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <nav className="mb-8 print:hidden">
        <Link
          href="/tools"
          className="group flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-[#5B4A9E] transition-colors"
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
            2
          </div>
          <span className="text-sm text-gray-500">
            Stack 2: Efficiency &middot; Water management
          </span>
        </div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          Drainage Payback Calculator
        </h1>
        <p className="text-gray-600">
          Would tile drainage pay for itself on your wet fields? Pick the
          spacing your soil needs and how waterlogged the area really is, and
          see the installation cost, the annual benefit, and roughly how many
          years to payback. Every preset comes from our published drainage
          model and every one is adjustable.
        </p>
      </header>

      {/* Inputs */}
      <section className="mb-10 space-y-6">
        <div className="bg-gray-50 rounded-lg p-6">
          <h2 className="font-medium text-gray-900 mb-4">The area to drain</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm text-gray-600 mb-1">
                Hectares to drain
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
              <p className="text-xs text-gray-400 mt-1">
                The waterlogged area, not the whole farm
              </p>
            </div>
            <div>
              <label className="block text-sm text-gray-600 mb-1">
                Gross margin at stake (&euro;/ha/yr)
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
                Output value net of harvest, drying and handling. Our maize
                example works out to &euro;960/ha (8 t &times; &euro;120/t net).
              </p>
            </div>
          </div>
        </div>

        {/* Spacing class */}
        <div className="bg-gray-50 rounded-lg p-6">
          <h2 className="font-medium text-gray-900 mb-1">
            Drain spacing your soil needs
          </h2>
          <p className="text-sm text-gray-500 mb-4">
            Heavier soil needs closer drains and costs more per hectare. Ranges
            are our published 2025&ndash;2026 installed costs for 20+ ha jobs.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-4">
            {SPACING_CLASSES.map((c) => {
              const on = spacingClass === c.key;
              return (
                <button
                  key={c.key}
                  type="button"
                  onClick={() => selectSpacing(c.key)}
                  className={`py-3 px-4 rounded-md border text-left transition-colors ${
                    on
                      ? "text-white"
                      : "bg-white border-gray-300 text-gray-700 hover:border-gray-400"
                  }`}
                  style={on ? { backgroundColor: ACCENT, borderColor: ACCENT } : undefined}
                >
                  <span className="block text-sm font-medium">{c.label}</span>
                  <span className={`block text-xs mt-1 ${on ? "text-white/80" : "text-gray-500"}`}>
                    {c.detail}
                  </span>
                  <span className={`block text-xs mt-1 ${on ? "text-white/80" : "text-gray-400"}`}>
                    {c.range}
                  </span>
                </button>
              );
            })}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm text-gray-600 mb-1">
                Installation cost (&euro;/ha)
              </label>
              <input
                type="number"
                min="0"
                step="50"
                value={form.costPerHa}
                onChange={(e) => handleChange("costPerHa", e.target.value)}
                className={inputClass}
                style={focusRing}
              />
              <p className="text-xs text-gray-400 mt-1">
                Preset from the spacing class &mdash; replace with your
                contractor&apos;s quote. Larger jobs often come in 20&ndash;30%
                cheaper per hectare.
              </p>
            </div>
          </div>
        </div>

        {/* Waterlogging scenario */}
        <div className="bg-gray-50 rounded-lg p-6">
          <h2 className="font-medium text-gray-900 mb-1">
            How waterlogged is the area?
          </h2>
          <p className="text-sm text-gray-500 mb-4">
            Yield-response bands from our drainage model. The wetter the
            baseline, the bigger the response &mdash; and the honest answer is a
            band, not a number.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-4">
            {UPLIFT_SCENARIOS.map((s) => {
              const on = scenario === s.key;
              return (
                <button
                  key={s.key}
                  type="button"
                  onClick={() => selectScenario(s.key)}
                  className={`py-3 px-4 rounded-md border text-left transition-colors ${
                    on
                      ? "text-white"
                      : "bg-white border-gray-300 text-gray-700 hover:border-gray-400"
                  }`}
                  style={on ? { backgroundColor: ACCENT, borderColor: ACCENT } : undefined}
                >
                  <span className="block text-sm font-medium">{s.label}</span>
                  <span className={`block text-xs mt-1 ${on ? "text-white/80" : "text-gray-500"}`}>
                    {s.detail}
                  </span>
                  <span className={`block text-xs mt-1 ${on ? "text-white/80" : "text-gray-400"}`}>
                    {s.range}
                  </span>
                </button>
              );
            })}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm text-gray-600 mb-1">
                Expected yield uplift (%)
              </label>
              <input
                type="number"
                min="0"
                step="1"
                value={form.upliftPct}
                onChange={(e) => handleChange("upliftPct", e.target.value)}
                className={inputClass}
                style={focusRing}
              />
              <p className="text-xs text-gray-400 mt-1">
                Preset mid-band &mdash; adjust to what your yield maps say
              </p>
            </div>
          </div>
        </div>

        {/* Secondary benefits */}
        <div className="bg-gray-50 rounded-lg p-6">
          <h2 className="font-medium text-gray-900 mb-1">
            Secondary benefits (optional)
          </h2>
          <p className="text-sm text-gray-500 mb-4">
            Off by default &mdash; these are modest, harder-to-bank additions on
            top of the yield case, not the reason to invest.
          </p>
          <div className="space-y-3">
            {SECONDARY_BENEFITS.map((b) => {
              const on = secondaryOn[b.key];
              return (
                <div key={b.key} className="bg-white border border-gray-200 rounded-md p-4">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-sm font-medium text-gray-900">{b.label}</p>
                      <p className="text-xs text-gray-500 mt-1">{b.source}</p>
                    </div>
                    <button
                      type="button"
                      onClick={() => toggleSecondary(b.key)}
                      role="switch"
                      aria-checked={on}
                      aria-label={b.label}
                      className={`relative inline-flex h-6 w-11 shrink-0 items-center rounded-full transition-colors ${
                        on ? "" : "bg-gray-300"
                      }`}
                      style={on ? { backgroundColor: ACCENT } : undefined}
                    >
                      <span
                        className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                          on ? "translate-x-6" : "translate-x-1"
                        }`}
                      />
                    </button>
                  </div>
                  {on && (
                    <div className="mt-3 max-w-[200px]">
                      <label className="block text-xs text-gray-600 mb-1">
                        Value (&euro;/ha/yr)
                      </label>
                      <input
                        type="number"
                        min="0"
                        step="1"
                        value={secondaryValues[b.key]}
                        onChange={(e) => changeSecondaryValue(b.key, e.target.value)}
                        className={inputClass}
                        style={focusRing}
                      />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        <div className="flex gap-4 print:hidden">
          <button
            onClick={handleCalculate}
            disabled={!canCalculate}
            className="flex-1 py-3 rounded-md font-semibold text-white transition-colors disabled:bg-gray-200 disabled:text-gray-500 disabled:cursor-not-allowed"
            style={canCalculate ? { backgroundColor: ACCENT } : undefined}
          >
            See the payback
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
            Enter the area, installation cost, yield uplift and gross margin.
          </p>
        )}
      </section>

      {/* Results */}
      {calculated && (
        <section className="mb-10">
          {/* Disclaimer */}
          <div className="rounded-lg border-l-4 p-5 mb-8 bg-gray-50" style={{ borderColor: ACCENT }}>
            <p className="text-sm text-gray-700">
              <strong>Directional estimate, not a forecast.</strong> Drainage
              response depends on your soil, outlet, design and the seasons you
              get &mdash; every figure here is an adjustable assumption from our
              published model, to be validated against your yield maps and a
              contractor&apos;s design before you commit capital. This is a
              plan-shaping sketch, never a promised return.
            </p>
          </div>

          {/* Headline numbers */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <p className="text-sm text-gray-500 mb-1">Installation cost</p>
              <p className="text-2xl font-bold text-gray-900">
                {formatEur(result.totalCost)}
              </p>
              <p className="text-xs text-gray-400 mt-1">
                {hectares} ha &times; {formatEur(costPerHa)}/ha
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <p className="text-sm text-gray-500 mb-1">Net annual benefit</p>
              <p className="text-2xl font-bold" style={{ color: ACCENT }}>
                {formatEur(result.annualBenefit)}
              </p>
              <p className="text-xs text-gray-400 mt-1">
                {formatEur(result.annualYieldBenefit)} yield
                {result.annualSecondaryBenefit > 0 && (
                  <> + {formatEur(result.annualSecondaryBenefit)} secondary</>
                )}
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <p className="text-sm text-gray-500 mb-1">Simple payback</p>
              <p className="text-2xl font-bold text-gray-900">
                {result.paybackYears !== null
                  ? `≈ ${formatYears(result.paybackYears)} yrs`
                  : "—"}
              </p>
              <p className="text-xs text-gray-400 mt-1">
                {result.paybackYears === null
                  ? "No annual benefit on these inputs"
                  : result.paybackWithinHorizon
                    ? "Cost ÷ annual benefit. Under 10 is excellent for infrastructure."
                    : `Beyond the ${HORIZON_YEARS}-year view on these inputs`}
              </p>
            </div>
          </div>

          {/* Cumulative view */}
          <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
            <h2 className="font-semibold text-gray-900 mb-1">
              Cumulative position over {HORIZON_YEARS} years
            </h2>
            <p className="text-sm text-gray-500 mb-5">
              The full cost lands in year 1, then the annual benefit works it
              back. Tile systems last 50+ years, so what the line does after
              payback is the long tail of the return.
            </p>
            <div className="space-y-2">
              {result.rows.map((r) => {
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
                            style={{ width: `${pct}%`, backgroundColor: "#C6706B" }}
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
            <p className="text-sm text-gray-500 mt-4">
              {HORIZON_YEARS}-year cumulative net:{" "}
              <strong
                style={{ color: result.fifteenYearNet >= 0 ? ACCENT : "#B4413C" }}
              >
                {formatSignedEur(result.fifteenYearNet)}
              </strong>{" "}
              ({formatSignedEur(result.fifteenYearNetPerHa)}/ha).
            </p>
          </div>

          {/* Assumptions surfaced */}
          <div className="bg-gray-50 rounded-lg p-6 mb-8">
            <h2 className="font-semibold text-gray-900 mb-3">
              What&apos;s under the hood
            </h2>
            <ul className="text-sm text-gray-600 space-y-2 list-disc pl-5">
              <li>
                <strong>Annual yield benefit</strong> = hectares &times; gross
                margin at stake &times; yield uplift. The uplift presets are the
                mid-points of our published response bands (mild
                8&ndash;15%, moderate 15&ndash;25%, severe 25&ndash;40%).
              </li>
              <li>
                <strong>Installation cost</strong> presets sit inside the
                published ranges by spacing class (close &euro;3,500&ndash;4,500,
                standard &euro;2,500&ndash;3,500, wide
                &euro;1,800&ndash;2,500 per ha) and land once, in year 1.
              </li>
              {result.annualSecondaryBenefit > 0 && (
                <li>
                  <strong>Secondary benefits</strong> add{" "}
                  {formatEur(secondaryPerHa)}/ha/yr &mdash; the article&apos;s
                  worked figures for timely operations and reduced nitrogen
                  losses, deliberately modest and off by default.
                </li>
              )}
              <li>
                <strong>Simple payback</strong> = cost &divide; annual benefit.
                No discounting, no crop-price swings, no maintenance reserve
                (budget &euro;20&ndash;40/ha/yr for that) &mdash; simple on
                purpose, so you can see the shape before a contractor models it
                properly.
              </li>
            </ul>
          </div>

          {/* Primary next step: Stack 2 Playbook */}
          <div
            className="rounded-lg p-6 mb-8 text-white print:hidden"
            style={{ backgroundColor: ACCENT }}
          >
            <h2 className="text-xl font-bold mb-2">
              Drainage is one leak. Find the rest.
            </h2>
            <p className="text-white/85 text-sm mb-4">
              Waterlogged fields are one place your margin leaks &mdash; the
              Stack 2 Playbook builds you a plan across all of them: energy,
              inputs, water and waste, cheapest fixes first. What you told the
              calculator carries over.
            </p>
            <Link
              href="/playbooks/stack-2-efficiency"
              className="inline-block bg-white text-[#5B4A9E] px-6 py-3 rounded-md font-semibold hover:bg-gray-100 transition-colors"
            >
              Build my efficiency plan &rarr;
            </Link>
          </div>

          {/* Secondary links */}
          <div className="flex gap-4 print:hidden">
            <Link
              href="/articles/subsurface-drainage-design"
              className="flex-1 text-center border border-gray-300 text-gray-700 px-6 py-3 rounded font-semibold hover:bg-gray-50 transition-colors"
            >
              Read the full drainage model
            </Link>
            <button
              onClick={handleReset}
              className="flex-1 text-center border border-gray-300 text-gray-700 px-6 py-3 rounded font-semibold hover:border-gray-400 transition-colors"
            >
              Recalculate / reset
            </button>
          </div>
        </section>
      )}
    </div>
  );
}
