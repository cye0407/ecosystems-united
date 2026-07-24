"use client";

import { useMemo, useState } from "react";
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
import type { PlaybookCore, PlaybookSlots } from "@/components/marketing/StackPlaybook";
import JCurveChart from "./JCurveChart";
import EconomicsTable from "./EconomicsTable";
import CoverCropBlock from "./CoverCropBlock";

const ACCENT = "#2D5A47";

function useStack5Extras(core: PlaybookCore) {
  const [inputSpend, setInputSpend] = useState("350");
  const [grossMargin, setGrossMargin] = useState("800");
  const [soil, setSoil] = useState<SoilKey | "">("");
  const [location, setLocation] = useState("");
  const [includeCarbon, setIncludeCarbon] = useState(false);
  const [fundingRate, setFundingRate] = useState("");

  const spend = parseFloat(inputSpend) || 0;
  const margin = parseFloat(grossMargin) || 0;
  const totalPractices = core.running.length + core.adding.length;

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
        practices: [...core.running, ...core.adding],
        fundingPerHa: parseFloat(fundingRate) || 0,
      }),
    [core.scale, roi.year5Savings, core.running, core.adding, fundingRate],
  );
  const coverRecs = useMemo(
    () => recommendCoverCrops(core.issues as IssueKey[], soil || null),
    [core.issues, soil],
  );
  const numbersReady = spend > 0 && totalPractices > 0;

  return {
    inputSpend, setInputSpend, grossMargin, setGrossMargin, soil, setSoil,
    location, setLocation, includeCarbon, setIncludeCarbon, fundingRate, setFundingRate,
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
          <p className="text-sm text-gray-500 mt-0.5">Tailors the species mix and powers the money view.</p>
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
        Include carbon income as upside (unverified, from year 2)
      </label>
    </section>
  ),

  livePanel: (_core, e) => (
    <>
      <h2 className="font-bold text-gray-900 mb-1">Your numbers, live</h2>
      <p className="text-xs text-gray-500 mb-4">Directional, updating as you go.</p>
      {e.numbersReady ? (
        <>
          <div className="mb-3"><JCurveChart rows={e.roi.rows} accent={ACCENT} /></div>
          <div className="space-y-2 mb-4">
            <div className="flex justify-between items-baseline">
              <span className="text-sm text-gray-600">Payback</span>
              <span className="font-bold text-gray-900">
                {e.roi.paybackYear ? `Year ${e.roi.paybackYear}` : "10y+"}</span>
            </div>
            <div className="flex justify-between items-baseline">
              <span className="text-sm text-gray-600">Input saving, yr 5</span>
              <span className="font-bold" style={{ color: ACCENT }}>{formatEur(e.roi.year5Savings)}/yr</span>
            </div>
            <div className="flex justify-between items-baseline">
              <span className="text-sm text-gray-600">10-year net</span>
              <span className="font-bold" style={{ color: e.roi.tenYearNet >= 0 ? ACCENT : "#B4413C" }}>
                {formatSignedEur(e.roi.tenYearNet)}</span>
            </div>
          </div>
        </>
      ) : (
        <p className="text-sm text-gray-500 mb-4">Add your input spend and pick a practice to see your numbers.</p>
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
        <h3 className="text-lg font-bold text-gray-900 mb-4">What the transition looks like</h3>
        <div className="grid sm:grid-cols-[1fr_1fr] gap-6 items-center bg-white border border-gray-200 rounded-xl p-6">
          <div><JCurveChart rows={e.roi.rows} accent={ACCENT} /></div>
          <div className="space-y-3">
            <div>
              <p className="text-sm text-gray-500">Directional payback</p>
              <p className="text-2xl font-bold text-gray-900">
                {e.roi.paybackYear ? `Year ${e.roi.paybackYear}` : "Beyond 10 years"}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Annual input saving by year 5</p>
              <p className="text-2xl font-bold" style={{ color: ACCENT }}>{formatEur(e.roi.year5Savings)}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">10-year cumulative net</p>
              <p className="text-2xl font-bold" style={{ color: e.roi.tenYearNet >= 0 ? ACCENT : "#B4413C" }}>
                {formatSignedEur(e.roi.tenYearNet)}</p>
            </div>
          </div>
        </div>
        <div className="mt-4 rounded-lg bg-amber-50 border border-amber-200 p-4 text-sm text-gray-700">
          <strong>Set your expectations honestly.</strong> Research on transitions finds yields typically
          run about 5&ndash;12% below conventional in years 1&ndash;2, reach parity around year 3, and
          profits recover by roughly year 4 as fuel and fertiliser costs fall. These practices work as a{" "}
          <em>system</em>: no-till, cover crops, and rotation underperform bolted on one at a time.
          Figures vary by farm and region; treat them as directional.
        </div>
      </section>
      <EconomicsTable econ={e.econ} hectares={core.scale} fundingRate={e.fundingRate}
        setFundingRate={e.setFundingRate} accent={ACCENT} />
    </>
  ),

  playbookBottom: (core) => {
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
                  <input type="checkbox" defaultChecked={false} className="w-4 h-4 mt-0.5" style={{ accentColor: ACCENT }} />
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
                <a href={s.url} target="_blank" rel="noopener noreferrer" className="hover:underline">
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
