"use client";

import { useEffect, useMemo, useState } from "react";
import { computeRoi, formatSignedEur, formatEur } from "@/lib/playbooks/roi-model";
import { computeEconomics } from "@/lib/playbooks/stack-5-economics";
import {
  recommendCoverCrops,
  buildBenchmark,
  SOIL_TYPES,
  type SoilKey,
} from "@/lib/playbooks/stack-5-recommend";
import { PRACTICES, getStack5Funding, getFundingChecklist, type IssueKey } from "@/lib/playbooks/stack-5";
import { SOURCE_LEDGER } from "@/lib/playbooks/source-ledger";
import { REGION_LABELS } from "@/lib/playbooks/types";
import { analytics } from "@/lib/analytics";
import type { PlaybookCore, PlaybookSlots } from "@/components/marketing/StackPlaybook";
import JCurveChart from "./JCurveChart";
import EconomicsTable from "./EconomicsTable";
import CoverCropBlock from "./CoverCropBlock";

const ACCENT = "#2D5A47";

// Same per-stack persistence pattern as the shell's `eu:playbook:stack-5:state`,
// but for the slot-owned extras (spend, soil, carbon, funding checklist).
const EXTRAS_KEY = "eu:playbook:stack-5:extras";

function useStack5Extras(core: PlaybookCore) {
  const [inputSpend, setInputSpend] = useState("");
  const [grossMargin, setGrossMargin] = useState("");
  const [soil, setSoil] = useState<SoilKey | "">("");
  const [location, setLocation] = useState("");
  const [includeCarbon, setIncludeCarbon] = useState(false);
  const [fundingRate, setFundingRate] = useState("");
  const [fundingChecks, setFundingChecks] = useState<Record<number, boolean>>({});
  const [hydrated, setHydrated] = useState(false);

  // One-time localStorage hydration on mount — the same pattern the shell uses
  // for its saved state (an effect, not a lazy initializer, to stay SSR-safe).
  /* eslint-disable react-hooks/set-state-in-effect */
  useEffect(() => {
    try {
      const handoffRaw = localStorage.getItem("eu:playbook:stack-5");
      if (handoffRaw) {
        const handoff = JSON.parse(handoffRaw) as Record<string, unknown>;
        if (typeof handoff.inputSpendPerHa === "number") setInputSpend(String(handoff.inputSpendPerHa));
        if (typeof handoff.grossMarginPerHa === "number") setGrossMargin(String(handoff.grossMarginPerHa));
        if (handoff.roi && typeof handoff.roi === "object") {
          const roi = handoff.roi as Record<string, unknown>;
          if (typeof roi.includeCarbon === "boolean") setIncludeCarbon(roi.includeCarbon);
        }
      }
      const raw = localStorage.getItem(EXTRAS_KEY);
      if (raw) {
        const s = JSON.parse(raw) as Record<string, unknown>;
        if (typeof s.inputSpend === "string") setInputSpend(s.inputSpend);
        if (typeof s.grossMargin === "string") setGrossMargin(s.grossMargin);
        if (typeof s.soil === "string" && (s.soil === "" || SOIL_TYPES.some((t) => t.key === s.soil))) {
          setSoil(s.soil as SoilKey | "");
        }
        if (typeof s.location === "string") setLocation(s.location);
        if (typeof s.includeCarbon === "boolean") setIncludeCarbon(s.includeCarbon);
        if (typeof s.fundingRate === "string") setFundingRate(s.fundingRate);
        if (Array.isArray(s.fundingChecks)) {
          setFundingChecks(Object.fromEntries(
            s.fundingChecks.filter((n): n is number => typeof n === "number").map((n) => [n, true]),
          ));
        }
      }
    } catch {
      /* malformed saved extras — defaults are fine */
    }
    setHydrated(true);
  }, []);
  /* eslint-enable react-hooks/set-state-in-effect */

  useEffect(() => {
    if (!hydrated) return;
    const t = setTimeout(() => {
      try {
        localStorage.setItem(EXTRAS_KEY, JSON.stringify({
          inputSpend, grossMargin, soil, location, includeCarbon, fundingRate,
          fundingChecks: Object.keys(fundingChecks).filter((k) => fundingChecks[Number(k)]).map(Number),
        }));
      } catch {
        /* storage unavailable — non-fatal */
      }
    }, 400);
    return () => clearTimeout(t);
  }, [hydrated, inputSpend, grossMargin, soil, location, includeCarbon, fundingRate, fundingChecks]);

  const toggleFundingCheck = (i: number) =>
    setFundingChecks((c) => ({ ...c, [i]: !c[i] }));

  const spend = parseFloat(inputSpend) || 0;
  const margin = parseFloat(grossMargin) || 0;
  // Only practices the user is adding belong in a transition-cost scenario.
  // Existing practices remain visible in the plan but are not charged as new.
  const totalPractices = core.adding.length;

  const roi = useMemo(
    () =>
      computeRoi({
        hectares: core.scale,
        inputSpendPerHa: spend,
        grossMarginPerHa: margin,
        numPractices: totalPractices,
        carbon: includeCarbon ? { pricePerTonne: 30, seqRatePerHa: 0.5 } : undefined,
      }),
    [core.scale, spend, margin, totalPractices, includeCarbon],
  );
  const econ = useMemo(
    () =>
      computeEconomics({
        hectares: core.scale,
        year5InputSavings: roi.year5Savings,
        practices: core.adding,
        fundingPerHa: parseFloat(fundingRate) || 0,
      }),
    [core.scale, roi.year5Savings, core.adding, fundingRate],
  );
  const coverRecs = useMemo(
    () => recommendCoverCrops(core.issues as IssueKey[], soil || null),
    [core.issues, soil],
  );
  const numbersReady = spend > 0 && margin > 0 && totalPractices > 0;

  return {
    inputSpend, setInputSpend, grossMargin, setGrossMargin, soil, setSoil,
    location, setLocation, includeCarbon, setIncludeCarbon, fundingRate, setFundingRate,
    fundingChecks, toggleFundingCheck,
    spend, margin, roi, econ, coverRecs, numbersReady,
  };
}

type Stack5Extras = ReturnType<typeof useStack5Extras>;

const inputCls =
  "w-full border border-gray-300 rounded-md px-3 py-2 text-gray-900 focus:outline-none focus:ring-2 focus:border-transparent";

export const stack5Slots: PlaybookSlots<Stack5Extras> = {
  useExtras: useStack5Extras,

  canGenerate: (_core, e) => e.numbersReady,

  benchmark: (core, e) => buildBenchmark(e.soil || null, core.running, core.adding),

  seedExtras: (core, e) => ({
    soil: e.soil || null,
    location: e.location || null,
    crops: core.sector || null,
    fundingRatePerHa: parseFloat(e.fundingRate) || 0,
    roi: {
      model: "illustrative-v1",
      paybackYear: e.roi.paybackYear,
      tenYearNet: Math.round(e.roi.tenYearNet),
      tenYearNetPerHa: Math.round(e.roi.tenYearNetPerHa),
      year5Savings: Math.round(e.roi.year5Savings),
      includeCarbon: e.includeCarbon,
    },
  }),

  intakeExtras: (_core, e) => (
    <section className="bg-white border border-gray-200 rounded-xl p-6">
      <div className="flex items-start gap-3 mb-4">
        <div className="w-7 h-7 shrink-0 rounded-full text-white flex items-center justify-center text-sm font-bold"
          style={{ backgroundColor: ACCENT }}>+</div>
        <div>
          <h2 className="font-semibold text-gray-900 leading-tight">Your soil & current numbers</h2>
          <p className="text-sm text-gray-500 mt-0.5">Tailors the species prompts and powers an illustrative scenario.</p>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
        <div>
          <label className="block text-sm text-gray-600 mb-1">Main soil type</label>
          <select value={e.soil} onChange={(ev) => e.setSoil(ev.target.value as SoilKey | "")}
            className={`${inputCls} bg-white`} style={{ outlineColor: ACCENT }}>
            <option value="">Select…</option>
            {SOIL_TYPES.map((s) => <option key={s.key} value={s.key}>{s.label}</option>)}
          </select>
        </div>
        <div>
          <label className="block text-sm text-gray-600 mb-1">Location <span className="text-gray-400">(optional)</span></label>
          <input type="text" value={e.location} onChange={(ev) => e.setLocation(ev.target.value)}
            placeholder="County / region" className={inputCls} style={{ outlineColor: ACCENT }} />
        </div>
        <div>
          <label className="block text-sm text-gray-600 mb-1">Input spend (€/ha/yr)</label>
          <input type="number" min="0" value={e.inputSpend} onChange={(ev) => e.setInputSpend(ev.target.value)}
            className={inputCls} style={{ outlineColor: ACCENT }} />
          <p className="text-xs text-gray-400 mt-1">Fertiliser + crop protection</p>
        </div>
        <div>
          <label className="block text-sm text-gray-600 mb-1">Gross margin (€/ha/yr)</label>
          <input type="number" min="0" value={e.grossMargin} onChange={(ev) => e.setGrossMargin(ev.target.value)}
            className={inputCls} style={{ outlineColor: ACCENT }} />
        </div>
      </div>
      <label className="flex items-center gap-3 text-sm text-gray-700 cursor-pointer">
        <input type="checkbox" checked={e.includeCarbon} onChange={(ev) => e.setIncludeCarbon(ev.target.checked)}
          className="w-4 h-4" style={{ accentColor: ACCENT }} />
        Add an unverified carbon scenario from year 2 (€30/t at 0.5 tCO₂e/ha/year)
      </label>
    </section>
  ),

  livePanel: (_core, e) => (
    <>
      <h2 className="font-bold text-gray-900 mb-1">Illustrative scenario</h2>
      <p className="text-xs text-gray-500 mb-4">Generic assumptions, updating as you go—not a forecast.</p>
      {e.numbersReady ? (
        <>
          <div className="mb-3"><JCurveChart rows={e.roi.rows} accent={ACCENT} /></div>
          <div className="space-y-2 mb-4">
            <div className="flex justify-between items-baseline">
              <span className="text-sm text-gray-600">Illustrative break-even</span>
              <span className="font-bold text-gray-900">
                {e.roi.paybackYear ? `Year ${e.roi.paybackYear}` : "10y+"}</span>
            </div>
            <div className="flex justify-between items-baseline">
              <span className="text-sm text-gray-600">Modelled input saving, yr 5</span>
              <span className="font-bold" style={{ color: ACCENT }}>{formatEur(e.roi.year5Savings)}/yr</span>
            </div>
            <div className="flex justify-between items-baseline">
              <span className="text-sm text-gray-600">Modelled 10-year net</span>
              <span className="font-bold" style={{ color: e.roi.tenYearNet >= 0 ? ACCENT : "#B4413C" }}>
                {formatSignedEur(e.roi.tenYearNet)}</span>
            </div>
          </div>
        </>
      ) : (
        <p className="text-sm text-gray-500 mb-4">Add input spend, gross margin, and at least one new practice to run the scenario.</p>
      )}
    </>
  ),

  focusAreaExtras: (core, e, key) =>
    key === "coverCrops" ? (
      <CoverCropBlock picks={e.coverRecs.picks} mixNote={e.coverRecs.mixNote}
        issues={core.issues as IssueKey[]} hasSoil={Boolean(e.soil)} crops={core.sector} accent={ACCENT} />
    ) : null,

  playbookTop: (core, e) => (
    <>
      <section className="mb-10">
        <h3 className="text-lg font-bold text-gray-900 mb-1">Illustrative transition scenario</h3>
        <p className="text-sm text-gray-500 mb-4">A sensitivity view using generic assumptions—not a farm forecast.</p>
        <div className="grid sm:grid-cols-[1fr_1fr] gap-6 items-center bg-white border border-gray-200 rounded-xl p-6">
          <div><JCurveChart rows={e.roi.rows} accent={ACCENT} /></div>
          <div className="space-y-3">
            <div>
              <p className="text-sm text-gray-500">Illustrative break-even</p>
              <p className="text-2xl font-bold text-gray-900">
                {e.roi.paybackYear ? `Year ${e.roi.paybackYear}` : "Beyond 10 years"}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Modelled annual input saving by year 5</p>
              <p className="text-2xl font-bold" style={{ color: ACCENT }}>{formatEur(e.roi.year5Savings)}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Modelled 10-year cumulative net</p>
              <p className="text-2xl font-bold" style={{ color: e.roi.tenYearNet >= 0 ? ACCENT : "#B4413C" }}>
                {formatSignedEur(e.roi.tenYearNet)}</p>
            </div>
          </div>
        </div>
        <div className="mt-4 rounded-lg bg-amber-50 border border-amber-200 p-4 text-sm text-gray-700">
          <strong>Know what the model assumes.</strong> It applies the same generic savings ramp and
          transition dip to every selected practice, uses a default €120/ha upfront cost calibrated to
          two new practices, and does not model crop, soil, weather, learning effects, or practice-specific
          performance. Use it to test sensitivity—not to approve an investment.
        </div>
      </section>
      <EconomicsTable econ={e.econ} hectares={core.scale} fundingRate={e.fundingRate}
        setFundingRate={e.setFundingRate} accent={ACCENT} />
    </>
  ),

  playbookBottom: (core, e) => {
    const funding = getStack5Funding(core.region);
    const inPlay = new Set([...core.running, ...core.adding]);
    const usedSourceIds = new Set<string>();
    PRACTICES.filter((p) => inPlay.has(p.key)).forEach((p) =>
      p.sourceIds.forEach((id) => usedSourceIds.add(id)));
    funding.programs.forEach((f) => usedSourceIds.add(f.sourceId));
    const sources = Object.values(SOURCE_LEDGER).filter((s) => usedSourceIds.has(s.id));

    return (
      <>
        <section className="mb-10">
          <h3 className="text-lg font-bold text-gray-900 mb-3">
            The money where you farm &mdash; {REGION_LABELS[core.region]}
          </h3>
          {funding.programs.map((p) => {
            const url = SOURCE_LEDGER[p.sourceId]?.url;
            return (
              <div key={p.name} className="bg-white border border-gray-200 rounded-xl p-5 mb-3">
                <h4 className="font-semibold text-gray-900 text-sm mb-1">{p.name}</h4>
                <p className="text-sm text-gray-600 mb-2">{p.snippet}</p>
                {url && (
                  <a href={url} target="_blank" rel="noopener noreferrer"
                    onClick={() => analytics.track("playbook_funding_source_opened", { stack: 5 })}
                    className="text-sm font-medium hover:underline" style={{ color: ACCENT }}>Open the scheme &rarr;</a>
                )}
              </div>
            );
          })}
          <p className="text-sm text-gray-500">{funding.note}</p>
        </section>

        <section className="mb-10">
          <h3 className="text-lg font-bold text-gray-900 mb-3">How to actually claim it &mdash; checklist</h3>
          <div className="bg-white border border-gray-200 rounded-xl p-6">
            <ul className="space-y-2.5">
              {getFundingChecklist(core.region).map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-gray-700">
                  <input type="checkbox" checked={e.fundingChecks[i] === true}
                    onChange={() => e.toggleFundingCheck(i)}
                    className="w-4 h-4 mt-0.5" style={{ accentColor: ACCENT }} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <details className="mb-10">
          <summary className="cursor-pointer text-sm text-gray-500 hover:text-gray-700">
            Sources this plan draws on
          </summary>
          <ul className="space-y-1.5 mt-2">
            {sources.map((s) => (
              <li key={s.id} className="text-sm text-gray-500">
                <span className="text-xs font-mono text-gray-400 mr-2">[{s.tier}]</span>
                <a href={s.url} target="_blank" rel="noopener noreferrer" className="hover:underline"
                  onClick={() => analytics.track("playbook_source_opened", { stack: 5 })}>
                  {s.org} &mdash; {s.label}
                </a>
              </li>
            ))}
          </ul>
        </details>
      </>
    );
  },
};
