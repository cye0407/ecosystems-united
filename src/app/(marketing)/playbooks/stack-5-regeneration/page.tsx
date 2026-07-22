"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { analytics } from "@/lib/analytics";
import {
  computeRoi,
  formatSignedEur,
  formatEur,
  type RoiYearRow,
} from "@/lib/playbooks/roi-model";
import { PRACTICES, getStack5Funding, type IssueKey } from "@/lib/playbooks/stack-5";
import {
  SOIL_TYPES,
  FARM_ISSUES,
  ISSUE_LABEL,
  recommendCoverCrops,
  recommendPractices,
  buildTimeline,
  type SoilKey,
} from "@/lib/playbooks/stack-5-recommend";
import { computeEconomics, formatEur0, ECON } from "@/lib/playbooks/stack-5-economics";
import { SOURCE_LEDGER } from "@/lib/playbooks/source-ledger";
import { REGION_LABELS } from "@/lib/playbooks/types";
import type { Region } from "@/lib/playbooks";

const ACCENT = "#2D5A47";
const HANDOFF_KEY = "eu:playbook:stack-5";
const SEED_KEY = "eu:passport:seed";

const REGIONS: Region[] = ["eu", "uk", "us", "other"];
const QUARTERS = ["Q1 (Jan–Mar)", "Q2 (Apr–Jun)", "Q3 (Jul–Sep)", "Q4 (Oct–Dec)"];
const MONTHS = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];
const START_YEARS = ["2026", "2027", "2028"];

interface HandoffData {
  hectares?: number;
  practices?: string[];
  inputSpendPerHa?: number;
  grossMarginPerHa?: number;
}

// --- J-curve visualization -------------------------------------------------
function JCurveChart({ rows, accent }: { rows: RoiYearRow[]; accent: string }) {
  const W = 340, H = 170, padX = 30, padTop = 12, padBottom = 26;
  const vals = rows.map((r) => r.cumulative);
  const max = Math.max(...vals, 0);
  const min = Math.min(...vals, 0);
  const range = max - min || 1;
  const plotH = H - padTop - padBottom;
  const x = (i: number) => padX + (i / (rows.length - 1)) * (W - padX - 8);
  const y = (v: number) => padTop + (1 - (v - min) / range) * plotH;
  const zeroY = y(0);
  const linePts = rows.map((r, i) => `${x(i)},${y(r.cumulative)}`).join(" ");
  const areaPts = `${x(0)},${zeroY} ${linePts} ${x(rows.length - 1)},${zeroY}`;
  const payback = rows.find((r) => r.cumulative >= 0);

  return (
    <svg viewBox={`0 0 ${W} ${H}`} className="w-full h-auto" role="img"
      aria-label="Cumulative net return by year">
      {/* zero baseline */}
      <line x1={padX} y1={zeroY} x2={W - 8} y2={zeroY} stroke="#9CA3AF"
        strokeDasharray="3 3" strokeWidth="1" />
      <text x={4} y={zeroY + 3} fontSize="9" fill="#9CA3AF">€0</text>
      {/* area + line */}
      <polygon points={areaPts} fill={accent} opacity="0.10" />
      <polyline points={linePts} fill="none" stroke={accent} strokeWidth="2" />
      {/* payback marker */}
      {payback && (
        <g>
          <circle cx={x(payback.year - 1)} cy={y(payback.cumulative)} r="3.5"
            fill={accent} />
          <text x={x(payback.year - 1)} y={y(payback.cumulative) - 7}
            fontSize="9" fill={accent} textAnchor="middle" fontWeight="600">
            payback
          </text>
        </g>
      )}
      {/* x labels */}
      {[0, 4, 9].map((i) => (
        <text key={i} x={x(i)} y={H - 8} fontSize="9" fill="#6B7280"
          textAnchor="middle">Yr {i + 1}</text>
      ))}
    </svg>
  );
}

export default function Stack5Worksheet() {
  const router = useRouter();
  const playbookRef = useRef<HTMLDivElement>(null);

  const [hectares, setHectares] = useState(100);
  const [region, setRegion] = useState<Region>("eu");
  const [soil, setSoil] = useState<SoilKey | "">("");
  const [location, setLocation] = useState("");
  const [crops, setCrops] = useState("");
  const [issues, setIssues] = useState<IssueKey[]>([]);
  const [inputSpend, setInputSpend] = useState("350");
  const [grossMargin, setGrossMargin] = useState("800");
  const [running, setRunning] = useState<string[]>(["coverCrops"]);
  const [adding, setAdding] = useState<string[]>(["reducedTill"]);
  const [includeCarbon, setIncludeCarbon] = useState(false);
  const [field, setField] = useState("");
  const [fieldHa, setFieldHa] = useState("");
  const [startPeriod, setStartPeriod] = useState(QUARTERS[3]);
  const [startYear, setStartYear] = useState(START_YEARS[0]);
  const [fundingChosen, setFundingChosen] = useState<string[]>([]);
  const [fundingRate, setFundingRate] = useState("");
  const [cameFromTool, setCameFromTool] = useState(false);
  const [showPlaybook, setShowPlaybook] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(HANDOFF_KEY);
      if (raw) {
        const d: HandoffData = JSON.parse(raw);
        if (typeof d.hectares === "number" && d.hectares > 0) setHectares(d.hectares);
        if (typeof d.inputSpendPerHa === "number") setInputSpend(String(d.inputSpendPerHa));
        if (typeof d.grossMarginPerHa === "number") setGrossMargin(String(d.grossMarginPerHa));
        if (Array.isArray(d.practices) && d.practices.length > 0) {
          setRunning([d.practices[0]]);
          setAdding(d.practices.slice(1));
        }
        setCameFromTool(true);
      }
    } catch {
      /* defaults are fine */
    }
    analytics.track("playbook_worksheet_opened", { stack: 5 });
  }, []);

  const toggle = (list: string[], setList: (v: string[]) => void, key: string) =>
    setList(list.includes(key) ? list.filter((k) => k !== key) : [...list, key]);

  const startRunning = (key: string) => {
    toggle(running, setRunning, key);
    setAdding((a) => a.filter((k) => k !== key));
  };
  const startAdding = (key: string) => {
    toggle(adding, setAdding, key);
    setRunning((r) => r.filter((k) => k !== key));
  };

  const totalPractices = running.length + adding.length;
  const spend = parseFloat(inputSpend) || 0;
  const margin = parseFloat(grossMargin) || 0;

  const roi = useMemo(
    () =>
      computeRoi({
        hectares,
        inputSpendPerHa: spend,
        grossMarginPerHa: margin,
        numPractices: totalPractices,
        carbon: includeCarbon ? { pricePerTonne: 30, seqRatePerHa: 0.5 } : undefined,
      }),
    [hectares, spend, margin, totalPractices, includeCarbon],
  );

  const inPlay = new Set([...running, ...adding]);
  const soilKey = soil || null;
  const recommendedKey = recommendPractices(issues, inPlay)[0]?.practice.key;
  const coverRecs = useMemo(
    () => recommendCoverCrops(issues, soilKey),
    [issues, soilKey],
  );

  const funding = getStack5Funding(region);
  const labelFor = (key: string) => PRACTICES.find((p) => p.key === key)?.label ?? key;
  const firstAddLabel = adding[0] ? labelFor(adding[0]) : "your next practice";
  const numbersReady = spend > 0 && totalPractices > 0;
  const inPlayPractices = PRACTICES.filter((p) => inPlay.has(p.key)).sort(
    (a, b) => a.priority - b.priority,
  );
  const startWhen = `${startPeriod.replace(/ \(.*\)/, "")} ${startYear}`;
  const timeline = buildTimeline(adding, field || null);
  const econ = useMemo(
    () =>
      computeEconomics({
        hectares,
        year5InputSavings: roi.year5Savings,
        practices: [...running, ...adding],
        fundingPerHa: parseFloat(fundingRate) || 0,
      }),
    [hectares, roi.year5Savings, running, adding, fundingRate],
  );
  const farmProfile = [
    crops.trim() ? crops.trim() : null,
    soil ? SOIL_TYPES.find((s) => s.key === soil)?.label.toLowerCase() : null,
    location.trim() ? location.trim() : null,
  ].filter(Boolean);

  const buildPlaybook = () => {
    setShowPlaybook(true);
    analytics.track("playbook_generated", { stack: 5, payback: roi.paybackYear });
    setTimeout(
      () => playbookRef.current?.scrollIntoView({ behavior: "smooth", block: "start" }),
      50,
    );
  };

  const handleConvert = () => {
    const seed = {
      stack: 5,
      hectares,
      region,
      soil: soil || null,
      location: location || null,
      crops: crops || null,
      issues,
      baseline: { inputSpendPerHa: spend, grossMarginPerHa: margin, practices: running },
      adding,
      firstMove: field
        ? { field, hectares: parseFloat(fieldHa) || null, start: startWhen }
        : null,
      funding: fundingChosen,
      fundingRatePerHa: parseFloat(fundingRate) || 0,
      roi: {
        paybackYear: roi.paybackYear,
        tenYearNet: Math.round(roi.tenYearNet),
        tenYearNetPerHa: Math.round(roi.tenYearNetPerHa),
        year5Savings: Math.round(roi.year5Savings),
        includeCarbon,
      },
    };
    try {
      localStorage.setItem(SEED_KEY, JSON.stringify(seed));
    } catch {
      /* non-fatal */
    }
    analytics.track("playbook_convert_to_passport", { stack: 5 });
    router.push("/onboarding?from=playbook&stack=5");
  };

  const stepHead = (n: number, title: string, sub?: string) => (
    <div className="flex items-start gap-3 mb-4">
      <div className="w-7 h-7 shrink-0 rounded-full text-white flex items-center justify-center text-sm font-bold"
        style={{ backgroundColor: ACCENT }}>{n}</div>
      <div>
        <h2 className="font-semibold text-gray-900 leading-tight">{title}</h2>
        {sub && <p className="text-sm text-gray-500 mt-0.5">{sub}</p>}
      </div>
    </div>
  );

  const chip = (key: string, active: boolean, onClick: () => void, star = false) => (
    <button key={key} type="button" onClick={onClick}
      className={`relative flex items-center gap-2 py-2 px-3 rounded-md border text-left text-sm font-medium transition-colors ${
        active ? "text-white" : "bg-white border-gray-300 text-gray-700 hover:border-gray-400"
      }`}
      style={active ? { backgroundColor: ACCENT, borderColor: ACCENT } : undefined}>
      <span className={`inline-flex items-center justify-center w-4 h-4 rounded border text-[10px] ${
        active ? "border-white/70" : "border-gray-300"}`}>{active ? "✓" : ""}</span>
      {labelFor(key)}
      {star && !active && (
        <span className="absolute -top-2 -right-2 text-[10px] font-semibold text-white px-1.5 py-0.5 rounded-full"
          style={{ backgroundColor: ACCENT }}>start here</span>
      )}
    </button>
  );

  const inputCls =
    "w-full border border-gray-300 rounded-md px-3 py-2 text-gray-900 focus:outline-none focus:ring-2 focus:border-transparent";

  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      <nav className="mb-6">
        <Link href="/tools/regenerative-roi"
          className="text-sm font-medium text-gray-500 hover:text-gray-800">
          &larr; Back to the ROI calculator
        </Link>
      </nav>

      <header className="mb-8">
        <span className="text-xs font-semibold uppercase tracking-wide" style={{ color: ACCENT }}>
          Stack 5 &middot; The Compounding Engine
        </span>
        <h1 className="text-3xl font-bold text-gray-900 mt-2 mb-2">
          Tell us about your farm, get your playbook
        </h1>
        <p className="text-gray-600">
          Answer a few things about your land, soil, and what you want to fix. We
          build you a personalized regenerative playbook: the practices to add in
          order, the cover-crop mix for your soil, an honest look at the numbers,
          and the funding that pays for it. What you enter becomes your Passport
          when you&apos;re ready, so you only fill it in once.
        </p>
        {cameFromTool && (
          <p className="mt-2 text-sm font-medium" style={{ color: ACCENT }}>
            ✓ We carried over the numbers from your ROI calculation.
          </p>
        )}
      </header>

      {/* ================= PHASE 1: INTAKE ================= */}
      <div className="grid lg:grid-cols-[1fr_20rem] gap-8 items-start">
        <div className="space-y-6">
          {/* Step 1 */}
          <section className="bg-white border border-gray-200 rounded-xl p-6">
            {stepHead(1, "Your land & soil", "The basics we tailor everything to.")}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-gray-600 mb-1">Working area (hectares)</label>
                <input type="number" min="0" value={hectares}
                  onChange={(e) => setHectares(parseFloat(e.target.value) || 0)}
                  className={inputCls} style={{ outlineColor: ACCENT }} />
              </div>
              <div>
                <label className="block text-sm text-gray-600 mb-1">Region</label>
                <select value={region} onChange={(e) => setRegion(e.target.value as Region)}
                  className={`${inputCls} bg-white`} style={{ outlineColor: ACCENT }}>
                  {REGIONS.map((r) => <option key={r} value={r}>{REGION_LABELS[r]}</option>)}
                </select>
              </div>
              <div>
                <label className="block text-sm text-gray-600 mb-1">Main soil type</label>
                <select value={soil} onChange={(e) => setSoil(e.target.value as SoilKey | "")}
                  className={`${inputCls} bg-white`} style={{ outlineColor: ACCENT }}>
                  <option value="">Select…</option>
                  {SOIL_TYPES.map((s) => <option key={s.key} value={s.key}>{s.label}</option>)}
                </select>
              </div>
              <div>
                <label className="block text-sm text-gray-600 mb-1">
                  Location <span className="text-gray-400">(optional)</span>
                </label>
                <input type="text" value={location} onChange={(e) => setLocation(e.target.value)}
                  placeholder="County / region" className={inputCls} style={{ outlineColor: ACCENT }} />
              </div>
            </div>
            <div className="mt-4">
              <label className="block text-sm text-gray-600 mb-1">
                What do you grow? <span className="text-gray-400">(your main crops or rotation)</span>
              </label>
              <input type="text" value={crops} onChange={(e) => setCrops(e.target.value)}
                placeholder="e.g. winter wheat, barley, oilseed rape" className={inputCls}
                style={{ outlineColor: ACCENT }} />
            </div>
          </section>

          {/* Step 2 */}
          <section className="bg-white border border-gray-200 rounded-xl p-6">
            {stepHead(2, "Where you're starting today",
              "Your real numbers now. This is your baseline, and the start line we measure progress from.")}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-sm text-gray-600 mb-1">Input spend (€/ha/yr)</label>
                <input type="number" min="0" value={inputSpend}
                  onChange={(e) => setInputSpend(e.target.value)} className={inputCls}
                  style={{ outlineColor: ACCENT }} />
                <p className="text-xs text-gray-400 mt-1">Fertiliser + crop protection</p>
              </div>
              <div>
                <label className="block text-sm text-gray-600 mb-1">Gross margin (€/ha/yr)</label>
                <input type="number" min="0" value={grossMargin}
                  onChange={(e) => setGrossMargin(e.target.value)} className={inputCls}
                  style={{ outlineColor: ACCENT }} />
              </div>
            </div>
            <label className="block text-sm text-gray-600 mb-2">Which of these do you already run?</label>
            <div className="grid grid-cols-2 gap-2">
              {PRACTICES.map((p) => chip(p.key, running.includes(p.key), () => startRunning(p.key)))}
            </div>
            <p className="text-sm text-gray-500 mt-3">
              {running.length === 0
                ? "No worries if you're at the very start. That is exactly what this plan is for."
                : running.length >= 3
                  ? "You already run most of the core practices. You are further along than most farms."
                  : `Good. Running ${running.length} of the four already puts you ahead of a standing start.`}
            </p>
          </section>

          {/* Step 3 — issues */}
          <section className="bg-white border border-gray-200 rounded-xl p-6">
            {stepHead(3, "What do you want to fix?",
              "Pick the problems you're up against. We'll match practices and cover-crop species to them.")}
            <div className="grid grid-cols-2 gap-2">
              {FARM_ISSUES.map((i) => {
                const on = issues.includes(i.key);
                return (
                  <button key={i.key} type="button"
                    onClick={() => toggle(issues, setIssues as (v: string[]) => void, i.key)}
                    className={`flex items-center gap-2 py-2 px-3 rounded-md border text-left text-sm font-medium transition-colors ${
                      on ? "text-white" : "bg-white border-gray-300 text-gray-700 hover:border-gray-400"
                    }`}
                    style={on ? { backgroundColor: ACCENT, borderColor: ACCENT } : undefined}>
                    <span className={`inline-flex items-center justify-center w-4 h-4 rounded border text-[10px] ${
                      on ? "border-white/70" : "border-gray-300"}`}>{on ? "✓" : ""}</span>
                    {i.label}
                  </button>
                );
              })}
            </div>
            {issues.length > 0 && (
              <p className="text-sm text-gray-500 mt-3">
                Good. Your playbook will lead with what tackles{" "}
                {issues.map((i) => ISSUE_LABEL[i].toLowerCase()).join(", ")}.
              </p>
            )}
          </section>

          {/* Step 4 — what to add */}
          <section className="bg-white border border-gray-200 rounded-xl p-6">
            {stepHead(4, "Choose what to add next",
              "Toggle a practice and watch the numbers on the right move. Start with the one marked.")}
            <div className="grid grid-cols-2 gap-2 mb-4">
              {PRACTICES.filter((p) => !running.includes(p.key)).map((p) =>
                chip(p.key, adding.includes(p.key), () => startAdding(p.key), p.key === recommendedKey))}
            </div>
            {adding[0] && (
              <p className="text-sm text-gray-600 mb-4">
                <span className="font-medium text-gray-800">{firstAddLabel}:</span>{" "}
                {PRACTICES.find((p) => p.key === adding[0])?.why}
              </p>
            )}
            <label className="flex items-center gap-3 text-sm text-gray-700 cursor-pointer">
              <input type="checkbox" checked={includeCarbon}
                onChange={(e) => setIncludeCarbon(e.target.checked)} className="w-4 h-4"
                style={{ accentColor: ACCENT }} />
              Include carbon income as upside (unverified, from year 2)
            </label>
            {includeCarbon && (
              <p className="text-xs text-gray-500 mt-2 bg-amber-50 border border-amber-200 rounded p-3">
                Carbon revenue needs additionality and third-party verification. Treat it as a
                bonus you might earn, never a line you can bank.
              </p>
            )}
          </section>

          {/* Step 4 */}
          <section className="bg-white border border-gray-200 rounded-xl p-6">
            {stepHead(5, "Commit to a first move",
              "Real transitions start on one field, not the whole farm. Pick where and when.")}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
              <div className="sm:col-span-2">
                <label className="block text-sm text-gray-600 mb-1">Which field first?</label>
                <input type="text" value={field} onChange={(e) => setField(e.target.value)}
                  placeholder="e.g. North 12" className={inputCls} style={{ outlineColor: ACCENT }} />
              </div>
              <div>
                <label className="block text-sm text-gray-600 mb-1">Size (ha)</label>
                <input type="number" min="0" value={fieldHa}
                  onChange={(e) => setFieldHa(e.target.value)} className={inputCls}
                  style={{ outlineColor: ACCENT }} />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-gray-600 mb-1">Start (month or quarter)</label>
                <select value={startPeriod} onChange={(e) => setStartPeriod(e.target.value)}
                  className={`${inputCls} bg-white`} style={{ outlineColor: ACCENT }}>
                  <optgroup label="By quarter">
                    {QUARTERS.map((q) => <option key={q}>{q}</option>)}
                  </optgroup>
                  <optgroup label="By month">
                    {MONTHS.map((m) => <option key={m}>{m}</option>)}
                  </optgroup>
                </select>
              </div>
              <div>
                <label className="block text-sm text-gray-600 mb-1">Year</label>
                <select value={startYear} onChange={(e) => setStartYear(e.target.value)}
                  className={`${inputCls} bg-white`} style={{ outlineColor: ACCENT }}>
                  {START_YEARS.map((y) => <option key={y}>{y}</option>)}
                </select>
              </div>
            </div>
          </section>

          {/* Step 5 */}
          <section className="bg-white border border-gray-200 rounded-xl p-6">
            {stepHead(6, "Claim the funding", `What pays for this where you farm (${REGION_LABELS[region]}).`)}
            {funding.programs.length > 0 && (
              <div className="space-y-3">
                {funding.programs.map((p) => {
                  const url = SOURCE_LEDGER[p.sourceId]?.url;
                  return (
                    <label key={p.name} className="flex items-start gap-3 cursor-pointer">
                      <input type="checkbox" checked={fundingChosen.includes(p.name)}
                        onChange={() => toggle(fundingChosen, setFundingChosen, p.name)}
                        className="w-4 h-4 mt-1" style={{ accentColor: ACCENT }} />
                      <span>
                        <span className="font-semibold text-gray-900 text-sm">{p.name}</span>
                        <span className="block text-sm text-gray-600">{p.snippet}</span>
                        {url && (
                          <a href={url} target="_blank" rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="text-sm font-medium hover:underline" style={{ color: ACCENT }}>
                            Open the scheme &rarr;
                          </a>
                        )}
                      </span>
                    </label>
                  );
                })}
              </div>
            )}
            <p className="text-sm text-gray-500 mt-3">{funding.note}</p>
          </section>
        </div>

        {/* Live panel */}
        <aside className="lg:sticky lg:top-24 self-start">
          <div className="bg-gray-50 border border-gray-200 rounded-xl p-5">
            <h2 className="font-bold text-gray-900 mb-1">Your numbers, live</h2>
            <p className="text-xs text-gray-500 mb-4">Directional, updating as you go.</p>
            {numbersReady ? (
              <>
                <div className="mb-3"><JCurveChart rows={roi.rows} accent={ACCENT} /></div>
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between items-baseline">
                    <span className="text-sm text-gray-600">Payback</span>
                    <span className="font-bold text-gray-900">
                      {roi.paybackYear ? `Year ${roi.paybackYear}` : "10y+"}</span>
                  </div>
                  <div className="flex justify-between items-baseline">
                    <span className="text-sm text-gray-600">Input saving, yr 5</span>
                    <span className="font-bold" style={{ color: ACCENT }}>
                      {formatEur(roi.year5Savings)}/yr</span>
                  </div>
                  <div className="flex justify-between items-baseline">
                    <span className="text-sm text-gray-600">10-year net</span>
                    <span className="font-bold"
                      style={{ color: roi.tenYearNet >= 0 ? ACCENT : "#B4413C" }}>
                      {formatSignedEur(roi.tenYearNet)}</span>
                  </div>
                </div>
              </>
            ) : (
              <p className="text-sm text-gray-500 mb-4">
                Add your input spend and pick a practice to see your numbers.
              </p>
            )}
            <button onClick={buildPlaybook} disabled={!numbersReady}
              className="w-full text-white px-4 py-3 rounded-md font-semibold hover:opacity-95 transition-opacity disabled:bg-gray-300"
              style={numbersReady ? { backgroundColor: ACCENT } : undefined}>
              Take me to my playbook &darr;
            </button>
          </div>
        </aside>
      </div>

      {/* ================= PHASE 2: THE PLAYBOOK ================= */}
      {showPlaybook && (
        <div ref={playbookRef} className="mt-16 pt-10 border-t border-gray-200">
          <header className="mb-6">
            <span className="text-xs font-semibold uppercase tracking-wide" style={{ color: ACCENT }}>
              Your personalized playbook
            </span>
            <h2 className="text-3xl font-bold text-gray-900 mt-2 mb-2">
              Your regenerative transition, step by step
            </h2>
            {farmProfile.length > 0 && (
              <p className="text-gray-600 mb-3">
                Built for {farmProfile.join(", ")}
                {hectares ? ` across ${hectares.toLocaleString("en-IE")} ha` : ""}
                {issues.length > 0
                  ? `, focused on ${issues.map((i) => ISSUE_LABEL[i].toLowerCase()).join(", ")}.`
                  : "."}
              </p>
            )}
            <div className="rounded-lg border-l-4 p-4 bg-gray-50 text-sm text-gray-700"
              style={{ borderColor: ACCENT }}>
              <strong>Read this as a plan, not a promise.</strong> Every figure is directional,
              built from the numbers you entered, and should be checked against your own records
              and an agronomist before you commit capital. Carbon and premiums are upside that
              needs third-party verification, never guaranteed.
            </div>
          </header>

          {/* Numbers + graph */}
          <section className="mb-10">
            <h3 className="text-lg font-bold text-gray-900 mb-4">What the transition looks like</h3>
            <div className="grid sm:grid-cols-[1fr_1fr] gap-6 items-center bg-white border border-gray-200 rounded-xl p-6">
              <div><JCurveChart rows={roi.rows} accent={ACCENT} /></div>
              <div className="space-y-3">
                <div>
                  <p className="text-sm text-gray-500">Directional payback</p>
                  <p className="text-2xl font-bold text-gray-900">
                    {roi.paybackYear ? `Year ${roi.paybackYear}` : "Beyond 10 years"}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Annual input saving by year 5</p>
                  <p className="text-2xl font-bold" style={{ color: ACCENT }}>
                    {formatEur(roi.year5Savings)}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">10-year cumulative net</p>
                  <p className="text-2xl font-bold"
                    style={{ color: roi.tenYearNet >= 0 ? ACCENT : "#B4413C" }}>
                    {formatSignedEur(roi.tenYearNet)}</p>
                </div>
                <p className="text-xs text-gray-400">
                  The dip is real. The curve turns up as input savings compound. Phasing the change
                  across fields keeps the dip survivable.
                </p>
              </div>
            </div>
            <div className="mt-4 rounded-lg bg-amber-50 border border-amber-200 p-4 text-sm text-gray-700">
              <strong>Set your expectations honestly.</strong> Research on transitions finds yields
              typically run about 5&ndash;12% below conventional in years 1&ndash;2, reach parity
              around year 3, and profits recover by roughly year 4 as fuel and fertiliser costs fall
              &mdash; with better long-run returns after that. These practices work as a{" "}
              <em>system</em>: no-till, cover crops, and rotation underperform bolted on one at a
              time. Figures vary by farm and region; treat them as directional.
            </div>
          </section>

          {/* The money, in euros */}
          <section className="mb-10">
            <h3 className="text-lg font-bold text-gray-900 mb-1">The money, in euros</h3>
            <p className="text-sm text-gray-500 mb-4">
              Where the money comes from at maturity (~year 5), across your{" "}
              {hectares.toLocaleString("en-IE")} ha. Directional, whole-farm, per year.
            </p>
            <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
              <table className="w-full text-sm">
                <tbody>
                  {econ.lines.map((l) => (
                    <tr key={l.label} className="border-b border-gray-100">
                      <td className="py-3 px-4">
                        <span className="text-gray-800">{l.label}</span>
                        {l.note && (
                          <span className="block text-xs text-gray-400">{l.note}</span>
                        )}
                      </td>
                      <td className="py-3 px-4 text-right text-gray-500 whitespace-nowrap">
                        {formatEur0(l.perHa)}/ha
                      </td>
                      <td className="py-3 px-4 text-right font-medium whitespace-nowrap"
                        style={{ color: l.total >= 0 ? ACCENT : "#B4413C" }}>
                        {formatEur0(l.total)}
                      </td>
                    </tr>
                  ))}
                  <tr className="bg-gray-50">
                    <td className="py-3 px-4 font-semibold text-gray-900">
                      Net per year, before funding
                    </td>
                    <td className="py-3 px-4" />
                    <td className="py-3 px-4 text-right font-bold"
                      style={{ color: econ.netWithoutFunding >= 0 ? ACCENT : "#B4413C" }}>
                      {formatEur0(econ.netWithoutFunding)}
                    </td>
                  </tr>
                  {econ.fundingTotal > 0 && (
                    <tr className="bg-gray-50 border-t border-gray-200">
                      <td className="py-3 px-4 font-semibold text-gray-900">
                        Net per year, with funding
                      </td>
                      <td className="py-3 px-4" />
                      <td className="py-3 px-4 text-right font-bold" style={{ color: ACCENT }}>
                        {formatEur0(econ.netWithFunding)}
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
            {/* Funding rate input */}
            <div className="mt-4 bg-gray-50 rounded-lg p-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Add your funding rate to see net with support
              </label>
              <div className="flex items-center gap-2">
                <span className="text-gray-500 text-sm">€</span>
                <input type="number" min="0" value={fundingRate}
                  onChange={(e) => setFundingRate(e.target.value)}
                  placeholder="0"
                  className="w-28 border border-gray-300 rounded-md px-3 py-2 text-gray-900 focus:outline-none focus:ring-2 focus:border-transparent"
                  style={{ outlineColor: ACCENT }} />
                <span className="text-gray-500 text-sm">/ha/yr</span>
              </div>
              <p className="text-xs text-gray-400 mt-2">
                Cover-crop eco-schemes commonly land somewhere around €{ECON.fundingHintLowPerHa}–{ECON.fundingHintHighPerHa}/ha,
                but rates vary a lot by country and scheme. Enter your actual rate from your national
                CAP plan or SFI action — we never assume a payment you haven&apos;t confirmed.
              </p>
            </div>
            <p className="text-xs text-gray-400 mt-3">
              Coefficients are directional and EU-leaning (cover seed ~€{ECON.coverSeedPerHa}/ha,
              no-till fuel &amp; labour ~€{ECON.fuelSavingPerHaNoTill}/ha). Validate against your own
              records before committing capital.
            </p>
          </section>

          {/* Sequenced first three years */}
          <section className="mb-10">
            <h3 className="text-lg font-bold text-gray-900 mb-1">Your first three years, in order</h3>
            <p className="text-sm text-gray-500 mb-5">
              The sequence matters as much as the practices. Here is the order that de-risks the
              transition on your farm.
            </p>
            <div className="space-y-4">
              {timeline.map((t) => (
                <div key={t.year} className="flex gap-4">
                  <div className="shrink-0 w-16 pt-1">
                    <span className="text-sm font-bold" style={{ color: ACCENT }}>{t.year}</span>
                  </div>
                  <div className="flex-1 border-l-2 pl-4 pb-1" style={{ borderColor: "#E5E7EB" }}>
                    <h4 className="font-semibold text-gray-900">{t.title}</h4>
                    <p className="text-sm text-gray-600 mt-1">{t.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Practices with pros/cons/how-to */}
          <section className="mb-10">
            <h3 className="text-lg font-bold text-gray-900 mb-1">Your practices, in priority order</h3>
            <p className="text-sm text-gray-500 mb-5">
              What you run and what you&apos;re adding, each with the honest trade-offs and a first step.
            </p>
            <div className="space-y-5">
              {inPlayPractices.map((p) => {
                const isAdding = adding.includes(p.key);
                return (
                  <div key={p.key} className="bg-white border border-gray-200 rounded-xl p-6">
                    <div className="flex items-center gap-3 mb-2">
                      <h4 className="font-bold text-gray-900">{p.label}</h4>
                      <span className="text-xs font-medium px-2 py-0.5 rounded-full"
                        style={{
                          backgroundColor: isAdding ? ACCENT : "#E5E7EB",
                          color: isAdding ? "#fff" : "#374151",
                        }}>
                        {isAdding ? "adding" : "already running"}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 mb-4">{p.why}</p>
                    <div className="grid sm:grid-cols-2 gap-4 mb-4">
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-wide text-gray-500 mb-1">Pros</p>
                        <ul className="text-sm text-gray-700 space-y-1 list-disc pl-4">
                          {p.pros.map((x) => <li key={x}>{x}</li>)}
                        </ul>
                      </div>
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-wide text-gray-500 mb-1">Watch out for</p>
                        <ul className="text-sm text-gray-700 space-y-1 list-disc pl-4">
                          {p.cons.map((x) => <li key={x}>{x}</li>)}
                        </ul>
                      </div>
                    </div>
                    {p.key === "coverCrops" && (
                      <div className="bg-gray-50 rounded-lg p-4 mb-4">
                        <p className="text-sm font-semibold text-gray-800 mb-1">
                          {issues.length > 0 || soil
                            ? "Recommended for your soil and issues"
                            : "Which cover crop? It depends on your goal and rotation slot"}
                        </p>
                        <p className="text-xs text-gray-500 mb-3">{coverRecs.mixNote}</p>
                        <ul className="text-sm text-gray-700 space-y-3">
                          {coverRecs.picks.map((sp) => (
                            <li key={sp.name} className="border-l-2 pl-3" style={{ borderColor: "#D1D9D4" }}>
                              <span className="font-medium">{sp.name}</span>{" "}
                              <span className="text-xs text-gray-400">({sp.family})</span>
                              {sp.matched.length > 0 && (
                                <span className="text-xs ml-1" style={{ color: ACCENT }}>
                                  · tackles {sp.matched.map((m) => ISSUE_LABEL[m].toLowerCase()).join(", ")}
                                </span>
                              )}
                              <span className="block text-gray-600">{sp.note}</span>
                              <span className="block text-xs text-gray-500 mt-1">
                                <strong>Rate</strong> {sp.rateKgHa} kg/ha ·{" "}
                                <strong>Drill</strong> {sp.sowWindow} ·{" "}
                                <strong>Terminate</strong> {sp.terminate}
                              </span>
                            </li>
                          ))}
                        </ul>
                        <p className="text-xs text-gray-500 mt-3">
                          <strong>Where it goes:</strong> drill into the gap after an early-harvested
                          crop{crops.trim() ? ` in your rotation (${crops.trim()})` : ""} — e.g. after
                          winter barley or oilseed rape, before a spring crop. Rates and windows are
                          directional for a temperate climate; shift about two weeks for cooler or
                          warmer areas, and cut rates to a third or half in a mix.
                        </p>
                      </div>
                    )}
                    <div className="flex items-start gap-2 text-sm rounded-lg p-3"
                      style={{ backgroundColor: "#F0F5F2" }}>
                      <span className="font-semibold" style={{ color: ACCENT }}>Do this:</span>
                      <span className="text-gray-700">{p.howTo}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          {/* First move */}
          <section className="mb-10">
            <h3 className="text-lg font-bold text-gray-900 mb-3">Your first move</h3>
            <div className="bg-white border border-gray-200 rounded-xl p-6">
              {field ? (
                <p className="text-gray-800">
                  Trial <span className="font-semibold">{firstAddLabel.toLowerCase()}</span> on{" "}
                  <span className="font-semibold">{field}</span>
                  {fieldHa ? ` (${fieldHa} ha)` : ""}, starting{" "}
                  <span className="font-semibold">{startWhen}</span>. Keep the rest of the farm as
                  your control and compare for a full season before scaling.
                </p>
              ) : (
                <p className="text-gray-500">
                  Head back to step 4 and name the field you&apos;ll start on. Committing to one
                  field is what turns this plan into action.
                </p>
              )}
            </div>
          </section>

          {/* Funding */}
          <section className="mb-10">
            <h3 className="text-lg font-bold text-gray-900 mb-3">
              The money where you farm — {REGION_LABELS[region]}
            </h3>
            {funding.programs.map((p) => {
              const url = SOURCE_LEDGER[p.sourceId]?.url;
              return (
                <div key={p.name} className="bg-white border border-gray-200 rounded-xl p-5 mb-3">
                  <h4 className="font-semibold text-gray-900 text-sm mb-1">{p.name}</h4>
                  <p className="text-sm text-gray-600 mb-2">{p.snippet}</p>
                  {url && (
                    <a href={url} target="_blank" rel="noopener noreferrer"
                      className="text-sm font-medium hover:underline" style={{ color: ACCENT }}>
                      Open the scheme &rarr;
                    </a>
                  )}
                </div>
              );
            })}
            <p className="text-sm text-gray-500">{funding.note}</p>
          </section>

          {/* Sources */}
          <details className="mb-10">
            <summary className="cursor-pointer text-sm text-gray-500 hover:text-gray-700">
              Sources this plan draws on
            </summary>
            <ul className="space-y-1.5 mt-2">
              {Object.values(SOURCE_LEDGER)
                .filter((s) => inPlayPractices.some((p) => p.sourceIds.includes(s.id)) ||
                  funding.programs.some((f) => f.sourceId === s.id))
                .map((s) => (
                  <li key={s.id} className="text-sm text-gray-500">
                    <span className="text-xs font-mono text-gray-400 mr-2">[{s.tier}]</span>
                    <a href={s.url} target="_blank" rel="noopener noreferrer" className="hover:underline">
                      {s.org} — {s.label}
                    </a>
                  </li>
                ))}
            </ul>
          </details>

          {/* Passport conversion — after the plan */}
          <div className="rounded-xl p-7 text-white" style={{ backgroundColor: ACCENT }}>
            <h3 className="text-2xl font-bold mb-2">Keep this. Make it yours.</h3>
            <p className="text-white/85 mb-5 text-sm leading-relaxed">
              You&apos;ve just mapped your operation. Save it as your Passport and everything here
              becomes living data you own: your baseline, your practices, your first move, ready to
              track against real numbers and share with buyers, banks, or grant bodies when they ask.
              You only enter it once.
            </p>
            <button onClick={handleConvert}
              className="inline-block bg-white px-6 py-3 rounded-md font-semibold hover:bg-gray-100 transition-colors"
              style={{ color: ACCENT }}>
              Save this as my Passport &rarr;
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
