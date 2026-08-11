"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { analytics } from "@/lib/analytics";
import { REGION_LABELS } from "@/lib/playbooks/types";
import type { Region } from "@/lib/playbooks";
import {
  recommendFocusAreas,
  buildGenericTimeline,
  buildGenericBenchmark,
  type StackContent,
  type FocusArea,
} from "@/lib/playbooks/content-types";
import {
  buildKpiBaselineCsv,
  CSV_BOM,
  type KpiBaseline,
  type KpiBaselineMap,
} from "@/lib/playbooks/export";

const SEED_KEY = "eu:passport:seed";
const REGIONS: Region[] = ["eu", "uk", "us", "other"];
const QUARTERS = ["Q1 (Jan–Mar)", "Q2 (Apr–Jun)", "Q3 (Jul–Sep)", "Q4 (Oct–Dec)"];
const MONTHS = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];
const CURRENT_YEAR = new Date().getFullYear();
const START_YEARS = [0, 1, 2].map((offset) => String(CURRENT_YEAR + offset));

// ---------------------------------------------------------------------------
// Core state the shell owns and exposes to slots. Stack 5's premium slots read
// from this plus their own extra state (managed in slots.useExtras).
// ---------------------------------------------------------------------------
export interface PlaybookCore {
  content: StackContent;
  accent: string;
  scale: number;
  region: Region;
  sector: string;
  issues: string[];
  running: string[];
  adding: string[];
  field: string;
  startWhen: string;
  runningAreas: FocusArea[];
  addingAreas: FocusArea[];
  inPlayAreas: FocusArea[];
  recommendedKey: string | undefined;
  inputCls: string;
}

// Declarative slots. Stack 5 supplies all; stacks 1-4 supply none and render the
// lighter default layout. Rich modules are NEVER baked into the shell body.
export interface PlaybookSlots<E = Record<string, unknown>> {
  /** Owns Stack-5 extra state (spend, margin, soil, carbon, funding) + derived. */
  useExtras?: (core: PlaybookCore) => E;
  /** Extra intake section(s), rendered under step 1. */
  intakeExtras?: (core: PlaybookCore, extras: E) => ReactNode;
  /** Replaces the default "Your plan so far" panel body (above the shared CTA). */
  livePanel?: (core: PlaybookCore, extras: E) => ReactNode;
  /** Rendered inside a focus-area card, keyed by focus-area key. */
  focusAreaExtras?: (core: PlaybookCore, extras: E, focusKey: string) => ReactNode;
  /** Extra playbook sections after "Where you stand" (e.g. graph + economics). */
  playbookTop?: (core: PlaybookCore, extras: E) => ReactNode;
  /** Extra playbook sections after the focus areas (e.g. funding + sources). */
  playbookBottom?: (core: PlaybookCore, extras: E) => ReactNode;
  /** Extra fields merged into the Passport seed. */
  seedExtras?: (core: PlaybookCore, extras: E) => Record<string, unknown>;
  /** Gate on generation (Stack 5 requires numbers entered). */
  canGenerate?: (core: PlaybookCore, extras: E) => boolean;
  /** Override the "Where you stand" lines (e.g. Stack 5's soil-aware benchmark). */
  benchmark?: (core: PlaybookCore, extras: E) => string[];
}

interface Handoff {
  scale?: number;
  hectares?: number;
  sector?: string;
  issues?: string[];
  practices?: string[];
  assessmentScore?: number;
}

const isStringArray = (v: unknown): v is string[] =>
  Array.isArray(v) && v.every((x) => typeof x === "string");

export default function StackPlaybook<E = Record<string, unknown>>({
  content,
  slots,
}: {
  content: StackContent;
  slots?: PlaybookSlots<E>;
}) {
  const router = useRouter();
  const accent = content.accent;
  const playbookRef = useRef<HTMLDivElement>(null);

  const [scale, setScale] = useState(content.scaleDefault);
  const [region, setRegion] = useState<Region>("eu");
  const [sector, setSector] = useState("");
  const [issues, setIssues] = useState<string[]>([]);
  const [running, setRunning] = useState<string[]>([]);
  const [adding, setAdding] = useState<string[]>([]);
  const [field, setField] = useState("");
  const [startPeriod, setStartPeriod] = useState(QUARTERS[3]);
  const [startYear, setStartYear] = useState(START_YEARS[0]);
  const [cameFromTool, setCameFromTool] = useState(false);
  const [showPlaybook, setShowPlaybook] = useState(false);
  const [checks, setChecks] = useState<Record<number, boolean>>({});
  const [kpiBaselines, setKpiBaselines] = useState<KpiBaselineMap>({});
  const [hydrated, setHydrated] = useState(false);
  const kpiStarted = useRef(false);
  const checklistMilestones = useRef(new Set<number>());

  const stateKey = `eu:playbook:stack-${content.stackNum}:state`;

  useEffect(() => {
    let handoffLoaded = false;
    let savedStateLoaded = false;
    if (content.handoffKey) {
      try {
        const raw = localStorage.getItem(content.handoffKey);
        if (raw) {
          const d: Handoff = JSON.parse(raw);
          const handoffScale = typeof d.scale === "number" ? d.scale : d.hectares;
          if (typeof handoffScale === "number" && handoffScale > 0) setScale(handoffScale);
          if (typeof d.sector === "string") setSector(d.sector);
          if (Array.isArray(d.issues)) setIssues(d.issues);
          if (Array.isArray(d.practices)) setAdding(d.practices);
          handoffLoaded = Boolean(
            (typeof handoffScale === "number" && handoffScale > 0) ||
            d.sector || d.issues?.length || d.practices?.length ||
            typeof d.assessmentScore === "number",
          );
          setCameFromTool(handoffLoaded);
        }
      } catch {
        /* defaults are fine */
      }
    }
    // Saved worksheet state wins over the handoff — it's the user's later edits.
    try {
      const raw = localStorage.getItem(stateKey);
      if (raw) {
        const s = JSON.parse(raw) as Record<string, unknown>;
        savedStateLoaded = true;
        if (typeof s.scale === "number" && Number.isFinite(s.scale) && s.scale >= 0) setScale(s.scale);
        if (typeof s.region === "string" && (REGIONS as string[]).includes(s.region)) setRegion(s.region as Region);
        if (typeof s.sector === "string") setSector(s.sector);
        if (isStringArray(s.issues)) setIssues(s.issues);
        if (isStringArray(s.running)) setRunning(s.running);
        if (isStringArray(s.adding)) setAdding(s.adding);
        if (typeof s.field === "string") setField(s.field);
        if (typeof s.startPeriod === "string" && [...QUARTERS, ...MONTHS].includes(s.startPeriod)) setStartPeriod(s.startPeriod);
        if (typeof s.startYear === "string" && START_YEARS.includes(s.startYear)) setStartYear(s.startYear);
        if (Array.isArray(s.checks)) {
          setChecks(Object.fromEntries(
            s.checks.filter((n): n is number => typeof n === "number").map((n) => [n, true]),
          ));
        }
        if (s.kpiBaselines && typeof s.kpiBaselines === "object" && !Array.isArray(s.kpiBaselines)) {
          const clean: KpiBaselineMap = {};
          for (const [k, v] of Object.entries(s.kpiBaselines as Record<string, unknown>)) {
            if (v && typeof v === "object") {
              const b = v as Partial<KpiBaseline>;
              clean[k] = {
                value: typeof b.value === "string" ? b.value : "",
                date: typeof b.date === "string" ? b.date : "",
              };
            }
          }
          setKpiBaselines(clean);
        }
        if (s.generated === true) setShowPlaybook(true);
      }
    } catch {
      /* malformed saved state — start a fresh worksheet */
    }
    setHydrated(true);
    analytics.track("playbook_worksheet_opened", {
      stack: content.stackNum,
      slug: content.slug,
      handoff_loaded: handoffLoaded,
      saved_state_loaded: savedStateLoaded,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Persist everything the worksheet + plan holds, debounced, per stack.
  useEffect(() => {
    if (!hydrated) return;
    const t = setTimeout(() => {
      try {
        localStorage.setItem(stateKey, JSON.stringify({
          scale, region, sector, issues, running, adding, field, startPeriod, startYear,
          generated: showPlaybook,
          checks: Object.keys(checks).filter((k) => checks[Number(k)]).map(Number),
          kpiBaselines,
        }));
      } catch {
        /* storage unavailable — non-fatal */
      }
    }, 400);
    return () => clearTimeout(t);
  }, [hydrated, stateKey, scale, region, sector, issues, running, adding, field,
    startPeriod, startYear, showPlaybook, checks, kpiBaselines]);

  const toggle = (list: string[], set: (v: string[]) => void, key: string) =>
    set(list.includes(key) ? list.filter((k) => k !== key) : [...list, key]);

  const startRunning = (key: string) => {
    if (!running.includes(key)) {
      analytics.track("playbook_focus_selected", { stack: content.stackNum, status: "already_have" });
    }
    toggle(running, setRunning, key);
    setAdding((a) => a.filter((k) => k !== key));
  };
  const startAdding = (key: string) => {
    if (!adding.includes(key)) {
      analytics.track("playbook_focus_selected", { stack: content.stackNum, status: "adding" });
    }
    toggle(adding, setAdding, key);
    setRunning((r) => r.filter((k) => k !== key));
  };

  const areaFor = (key: string) => content.focusAreas.find((f) => f.key === key);
  const inPlay = new Set([...running, ...adding]);
  const recommendedKey = recommendFocusAreas(content.focusAreas, issues, inPlay)[0]?.area.key;
  const runningAreas = running.map(areaFor).filter(Boolean) as FocusArea[];
  const addingAreas = (adding.map(areaFor).filter(Boolean) as FocusArea[]).sort(
    (a, b) => a.priority - b.priority,
  );
  const inPlayAreas = content.focusAreas.filter((f) => inPlay.has(f.key));
  const startWhen = `${startPeriod.replace(/ \(.*\)/, "")} ${startYear}`;
  const timeline = buildGenericTimeline(addingAreas, field || null);
  const issueLabel = (key: string) => content.issues.find((i) => i.key === key)?.label ?? key;

  const inputCls =
    "w-full border border-gray-300 rounded-md px-3 py-2 text-gray-900 focus:outline-none focus:ring-2 focus:border-transparent";

  const core: PlaybookCore = {
    content, accent, scale, region, sector, issues, running, adding, field, startWhen,
    runningAreas, addingAreas, inPlayAreas, recommendedKey, inputCls,
  };

  // Optional premium state. `slots` is stable per mounted page, so this optional
  // hook call keeps a consistent order across renders.
  const extras = (slots?.useExtras ? slots.useExtras(core) : ({} as E));

  const canGenerate = slots?.canGenerate
    ? slots.canGenerate(core, extras)
    : addingAreas.length > 0 || runningAreas.length > 0;

  const benchmark = slots?.benchmark
    ? slots.benchmark(core, extras)
    : buildGenericBenchmark(content, runningAreas, addingAreas[0] ?? null);

  const buildPlaybook = () => {
    setShowPlaybook(true);
    analytics.track("playbook_generated", {
      stack: content.stackNum,
      slug: content.slug,
      handoff_loaded: cameFromTool,
      issue_count: issues.length,
      focus_count: inPlayAreas.length,
      has_sector: Boolean(sector.trim()),
      has_start_location: Boolean(field.trim()),
      region,
    });
    setTimeout(
      () => playbookRef.current?.scrollIntoView({ behavior: "smooth", block: "start" }),
      50,
    );
  };

  const setBaseline = (kpi: string, patch: Partial<KpiBaseline>) => {
    if (!kpiStarted.current && Boolean(patch.value || patch.date)) {
      kpiStarted.current = true;
      analytics.track("playbook_kpi_baseline_started", { stack: content.stackNum });
    }
    setKpiBaselines((b) => ({
      ...b,
      [kpi]: { ...(b[kpi] ?? { value: "", date: "" }), ...patch },
    }));
  };

  const toggleChecklist = (index: number) => {
    const willCheck = checks[index] !== true;
    const completed = Object.values(checks).filter(Boolean).length + (willCheck ? 1 : -1);
    setChecks((current) => ({ ...current, [index]: willCheck }));
    if (content.checklist.length === 0 || !willCheck) return;
    const percent = Math.round((completed / content.checklist.length) * 100);
    const milestone = [100, 50, 25].find((value) => percent >= value);
    if (milestone && !checklistMilestones.current.has(milestone)) {
      checklistMilestones.current.add(milestone);
      analytics.track("playbook_checklist_progress", {
        stack: content.stackNum,
        milestone_percent: milestone,
      });
    }
  };

  const enteredBaselines = () =>
    content.kpis
      .map((m) => ({
        kpi: m.k,
        value: (kpiBaselines[m.k]?.value ?? "").trim(),
        date: kpiBaselines[m.k]?.date ?? "",
      }))
      .filter((b) => b.value || b.date);

  const handleCsvExport = () => {
    try {
      // CSV_BOM so Excel opens the € and CO2e characters as UTF-8.
      const blob = new Blob([CSV_BOM + buildKpiBaselineCsv(content.kpis, kpiBaselines)], {
        type: "text/csv;charset=utf-8",
      });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `${content.slug}-kpi-baselines.csv`;
      document.body.appendChild(a);
      a.click();
      a.remove();
      URL.revokeObjectURL(url);
    } catch {
      /* non-fatal */
    }
    analytics.track("playbook_export_csv", {
      stack: content.stackNum,
      baseline_count: enteredBaselines().length,
    });
  };

  const handleConvert = () => {
    const seed = {
      stack: content.stackNum, scale, region, sector: sector || null,
      issues, running, adding,
      firstMove: field ? { field, start: startWhen } : null,
      kpiBaselines: enteredBaselines(),
      ...(slots?.seedExtras ? slots.seedExtras(core, extras) : {}),
    };
    try {
      localStorage.setItem(SEED_KEY, JSON.stringify(seed));
    } catch {
      /* non-fatal */
    }
    analytics.track("playbook_convert_to_passport", {
      stack: content.stackNum,
      issue_count: issues.length,
      focus_count: inPlayAreas.length,
      baseline_count: enteredBaselines().length,
    });
    router.push(`/onboarding?from=playbook&stack=${content.stackNum}`);
  };

  const stepHead = (n: number, title: string, sub?: string) => (
    <div className="flex items-start gap-3 mb-4">
      <div className="w-7 h-7 shrink-0 rounded-full text-white flex items-center justify-center text-sm font-bold"
        style={{ backgroundColor: accent }}>{n}</div>
      <div>
        <h2 className="font-semibold text-gray-900 leading-tight">{title}</h2>
        {sub && <p className="text-sm text-gray-500 mt-0.5">{sub}</p>}
      </div>
    </div>
  );

  const chip = (key: string, label: string, active: boolean, onClick: () => void, star = false) => (
    <button key={key} type="button" onClick={onClick}
      className={`relative flex items-center gap-2 py-2 px-3 rounded-md border text-left text-sm font-medium transition-colors ${
        active ? "text-white" : "bg-white border-gray-300 text-gray-700 hover:border-gray-400"
      }`}
      style={active ? { backgroundColor: accent, borderColor: accent } : undefined}>
      <span className={`inline-flex items-center justify-center w-4 h-4 rounded border text-[10px] ${
        active ? "border-white/70" : "border-gray-300"}`}>{active ? "✓" : ""}</span>
      {label}
      {star && !active && (
        <span className="absolute -top-2 -right-2 text-[10px] font-semibold text-white px-1.5 py-0.5 rounded-full"
          style={{ backgroundColor: accent }}>start here</span>
      )}
    </button>
  );

  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      <nav className="mb-6 print:hidden">
        <Link href={content.toolHref} className="text-sm font-medium text-gray-500 hover:text-gray-800">
          &larr; {content.toolLabel}
        </Link>
      </nav>

      <header className="mb-8 print:hidden">
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-xs font-semibold uppercase tracking-wide" style={{ color: accent }}>
            Stack {content.stackNum}
          </span>
          <span className="rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-semibold text-emerald-800">
            Free planning worksheet
          </span>
        </div>
        <h1 className="text-3xl font-bold text-gray-900 mt-2 mb-2">{content.intakeTitle}</h1>
        <p className="text-gray-600">{content.intakeIntro}</p>
        <p className="mt-3 rounded-lg border border-amber-200 bg-amber-50 p-3 text-sm text-gray-700">
          <strong>Scope:</strong> {content.scopeNote}
        </p>
        {cameFromTool && (
          <p className="mt-2 text-sm font-medium" style={{ color: accent }}>
            Assessment details found. Review the selections below before generating your worksheet.
          </p>
        )}
      </header>

      {/* Intake */}
      <div className="grid lg:grid-cols-[1fr_18rem] gap-8 items-start print:hidden">
        <div className="space-y-6">
          <section className="bg-white border border-gray-200 rounded-xl p-6">
            {stepHead(1, "Your operation", "The basics we tailor the plan to.")}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-gray-600 mb-1">Size ({content.scaleLabel})</label>
                <input type="number" min="0" value={scale}
                  onChange={(e) => setScale(parseFloat(e.target.value) || 0)}
                  className={inputCls} style={{ outlineColor: accent }} />
              </div>
              <div>
                <label className="block text-sm text-gray-600 mb-1">Region</label>
                <select value={region} onChange={(e) => setRegion(e.target.value as Region)}
                  className={`${inputCls} bg-white`} style={{ outlineColor: accent }}>
                  {REGIONS.map((r) => <option key={r} value={r}>{REGION_LABELS[r]}</option>)}
                </select>
              </div>
            </div>
            <div className="mt-4">
              <label className="block text-sm text-gray-600 mb-1">{content.sectorLabel}</label>
              <input type="text" value={sector} onChange={(e) => setSector(e.target.value)}
                placeholder={content.sectorPlaceholder} className={inputCls} style={{ outlineColor: accent }} />
            </div>
          </section>

          {slots?.intakeExtras?.(core, extras)}

          <section className="bg-white border border-gray-200 rounded-xl p-6">
            {stepHead(2, "What do you already have in place?", "So we build on it, not around it.")}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {content.focusAreas.map((f) =>
                chip(f.key, f.label, running.includes(f.key), () => startRunning(f.key)))}
            </div>
          </section>

          <section className="bg-white border border-gray-200 rounded-xl p-6">
            {stepHead(3, content.issuesTitle, "Pick what's driving this. It shapes the order.")}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {content.issues.map((i) =>
                chip(i.key, i.label, issues.includes(i.key), () => {
                  if (!issues.includes(i.key)) {
                    analytics.track("playbook_issue_selected", { stack: content.stackNum });
                  }
                  toggle(issues, setIssues, i.key);
                }))}
            </div>
          </section>

          <section className="bg-white border border-gray-200 rounded-xl p-6">
            {stepHead(4, content.focusTitle, content.focusIntro)}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {content.focusAreas.filter((f) => !running.includes(f.key)).map((f) =>
                chip(f.key, f.label, adding.includes(f.key), () => startAdding(f.key), f.key === recommendedKey))}
            </div>
            {addingAreas[0] && (
              <p className="text-sm text-gray-600 mt-4">
                <span className="font-medium text-gray-800">{addingAreas[0].label}:</span>{" "}
                {addingAreas[0].why}
              </p>
            )}
          </section>

          <section className="bg-white border border-gray-200 rounded-xl p-6">
            {stepHead(5, "Where and when will you start?", "One first move beats a grand plan.")}
            <div className="mb-4">
              <label className="block text-sm text-gray-600 mb-1">Where will you start?</label>
              <input type="text" value={field} onChange={(e) => setField(e.target.value)}
                placeholder="e.g. the dairy unit, North block, one product line"
                className={inputCls} style={{ outlineColor: accent }} />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-gray-600 mb-1">Start (month or quarter)</label>
                <select value={startPeriod} onChange={(e) => setStartPeriod(e.target.value)}
                  className={`${inputCls} bg-white`} style={{ outlineColor: accent }}>
                  <optgroup label="By quarter">{QUARTERS.map((q) => <option key={q}>{q}</option>)}</optgroup>
                  <optgroup label="By month">{MONTHS.map((m) => <option key={m}>{m}</option>)}</optgroup>
                </select>
              </div>
              <div>
                <label className="block text-sm text-gray-600 mb-1">Year</label>
                <select value={startYear} onChange={(e) => setStartYear(e.target.value)}
                  className={`${inputCls} bg-white`} style={{ outlineColor: accent }}>
                  {START_YEARS.map((y) => <option key={y}>{y}</option>)}
                </select>
              </div>
            </div>
          </section>
        </div>

        {/* Live panel */}
        <aside className="lg:sticky lg:top-24 self-start">
          <div className="bg-gray-50 border border-gray-200 rounded-xl p-5">
            {slots?.livePanel ? (
              slots.livePanel(core, extras)
            ) : (
              <>
                <h2 className="font-bold text-gray-900 mb-3">Your plan so far</h2>
                <div className="space-y-2 text-sm mb-4">
                  <div><span className="text-gray-500">Adding: </span>
                    <span className="text-gray-900">
                      {addingAreas.length > 0 ? addingAreas.map((a) => a.label).join(", ") : "nothing yet"}
                    </span>
                  </div>
                  {runningAreas.length > 0 && (
                    <div><span className="text-gray-500">Already have: </span>
                      <span className="text-gray-900">{runningAreas.map((a) => a.label).join(", ")}</span>
                    </div>
                  )}
                  {field && (
                    <div><span className="text-gray-500">Starting: </span>
                      <span className="text-gray-900">{field}, {startWhen}</span>
                    </div>
                  )}
                </div>
              </>
            )}
            <button onClick={buildPlaybook} disabled={!canGenerate}
              className="w-full text-white px-4 py-3 rounded-md font-semibold hover:opacity-95 transition-opacity disabled:bg-gray-300"
              style={canGenerate ? { backgroundColor: accent } : undefined}>
              Take me to my playbook &darr;
            </button>
          </div>
        </aside>
      </div>

      {/* Playbook */}
      {showPlaybook && (
        <div ref={playbookRef} className="mt-16 pt-10 border-t border-gray-200 print:mt-0 print:pt-0 print:border-0">
          {/* Print-only identity line so the saved PDF says what it is. */}
          <div className="hidden print:block mb-4 pb-2 border-b border-gray-300 text-sm text-gray-600">
            Ecosystems United &mdash; Stack {content.stackNum} playbook
            {sector.trim() ? ` · ${sector.trim()}` : ""}
            {scale > 0 ? ` · ${scale.toLocaleString("en-IE")} ${content.scaleLabel}` : ""}
            {` · generated ${new Date().toLocaleDateString("en-IE", { day: "numeric", month: "long", year: "numeric" })}`}
          </div>
          <header className="mb-6">
            <div className="flex items-start justify-between gap-4">
              <span className="text-xs font-semibold uppercase tracking-wide" style={{ color: accent }}>
                Your tailored planning worksheet
              </span>
              <div className="print:hidden shrink-0 flex flex-wrap justify-end gap-2">
                {content.kpis.length > 0 && (
                  <button
                    onClick={handleCsvExport}
                    className="text-sm font-medium border border-gray-300 rounded-md px-3 py-1.5 text-gray-700 hover:border-gray-400 transition-colors">
                    ⤓ Download KPI baseline sheet (CSV)
                  </button>
                )}
                <button
                  onClick={() => {
                    analytics.track("playbook_export_pdf", { stack: content.stackNum });
                    window.print();
                  }}
                  className="text-sm font-medium border border-gray-300 rounded-md px-3 py-1.5 text-gray-700 hover:border-gray-400 transition-colors">
                  ⤓ Print / save as PDF
                </button>
              </div>
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mt-2 mb-2">{content.playbookHeadline}</h2>
            {(() => {
              const builtParts = [
                sector.trim() || null,
                scale > 0 ? `${scale.toLocaleString("en-IE")} ${content.scaleLabel}` : null,
              ].filter(Boolean) as string[];
              if (builtParts.length === 0 && issues.length === 0) return null;
              const focus =
                issues.length > 0
                  ? `${builtParts.length ? ", " : ""}focused on ${issues.map(issueLabel).map((s) => s.toLowerCase()).join(", ")}.`
                  : ".";
              return (
                <p className="text-gray-600 mb-3">Built for {builtParts.join(", ")}{focus}</p>
              );
            })()}
            <div className="rounded-lg border-l-4 p-4 bg-gray-50 text-sm text-gray-700" style={{ borderColor: accent }}>
              <strong>Read this as a plan, not a promise.</strong> It's built from what you told us and
              recognised best practice. Validate it against your own situation and an adviser before you
              commit real money.
            </div>
          </header>

          <section className="mb-10">
            <h3 className="text-lg font-bold text-gray-900 mb-3">Where you stand</h3>
            <ul className="space-y-2">
              {benchmark.map((b, i) => (
                <li key={i} className="flex gap-3 text-sm text-gray-700">
                  <span style={{ color: accent }} className="mt-0.5">▸</span><span>{b}</span>
                </li>
              ))}
            </ul>
          </section>

          {slots?.playbookTop?.(core, extras)}

          <section className="mb-10">
            <h3 className="text-lg font-bold text-gray-900 mb-1">Your first three years, in order</h3>
            <p className="text-sm text-gray-500 mb-5">The sequence de-risks it. Here's the order for your operation.</p>
            <div className="space-y-4">
              {timeline.map((t) => (
                <div key={t.year} className="flex gap-4">
                  <div className="shrink-0 w-16 pt-1">
                    <span className="text-sm font-bold" style={{ color: accent }}>{t.year}</span>
                  </div>
                  <div className="flex-1 border-l-2 pl-4 pb-1" style={{ borderColor: "#E5E7EB" }}>
                    <h4 className="font-semibold text-gray-900">{t.title}</h4>
                    <p className="text-sm text-gray-600 mt-1">{t.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-10">
            <h3 className="text-lg font-bold text-gray-900 mb-5">Your focus areas</h3>
            <div className="space-y-5">
              {inPlayAreas.map((f) => {
                const isAdding = adding.includes(f.key);
                return (
                  <div key={f.key} className="bg-white border border-gray-200 rounded-xl p-6">
                    <div className="flex items-center gap-3 mb-2">
                      <h4 className="font-bold text-gray-900">{f.label}</h4>
                      <span className="text-xs font-medium px-2 py-0.5 rounded-full"
                        style={{ backgroundColor: isAdding ? accent : "#E5E7EB", color: isAdding ? "#fff" : "#374151" }}>
                        {isAdding ? "adding" : "already have"}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 mb-4">{f.why}</p>
                    <div className="grid sm:grid-cols-2 gap-4 mb-4">
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-wide text-gray-500 mb-1">Pros</p>
                        <ul className="text-sm text-gray-700 space-y-1 list-disc pl-4">
                          {f.pros.map((x) => <li key={x}>{x}</li>)}
                        </ul>
                      </div>
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-wide text-gray-500 mb-1">Watch out for</p>
                        <ul className="text-sm text-gray-700 space-y-1 list-disc pl-4">
                          {f.cons.map((x) => <li key={x}>{x}</li>)}
                        </ul>
                      </div>
                    </div>
                    {slots?.focusAreaExtras?.(core, extras, f.key)}
                    <div className="flex items-start gap-2 text-sm rounded-lg p-3" style={{ backgroundColor: "#F3F2F8" }}>
                      <span className="font-semibold" style={{ color: accent }}>Do this:</span>
                      <span className="text-gray-700">{f.howTo}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          {slots?.playbookBottom?.(core, extras)}

          {content.resources.length > 0 && (
            <section className="mb-10">
              <h3 className="text-lg font-bold text-gray-900 mb-3">{content.resourcesTitle}</h3>
              {content.resources.map((r) => (
                <div key={r.name} className="bg-white border border-gray-200 rounded-xl p-5 mb-3">
                  <h4 className="font-semibold text-gray-900 text-sm mb-1">{r.name}</h4>
                  <p className="text-sm text-gray-600 mb-2">{r.snippet}</p>
                  {r.url && (
                    <a href={r.url} target="_blank" rel="noopener noreferrer"
                      onClick={() => analytics.track("playbook_source_opened", { stack: content.stackNum })}
                      className="text-sm font-medium hover:underline" style={{ color: accent }}>Open &rarr;</a>
                  )}
                </div>
              ))}
              <p className="text-sm text-gray-500">{content.resourcesNote}</p>
            </section>
          )}

          {content.checklist.length > 0 && (
            <section className="mb-10">
              <h3 className="text-lg font-bold text-gray-900 mb-3">{content.checklistTitle}</h3>
              <div className="bg-white border border-gray-200 rounded-xl p-6">
                <ul className="space-y-2.5">
                  {content.checklist.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-gray-700">
                      <input type="checkbox" checked={checks[i] === true}
                        onChange={() => toggleChecklist(i)}
                        className="w-4 h-4 mt-0.5" style={{ accentColor: accent }} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>
          )}

          {content.kpis.length > 0 && (
            <section className="mb-10">
              <h3 className="text-lg font-bold text-gray-900 mb-1">{content.kpisTitle}</h3>
              <p className="text-sm text-gray-500 mb-4">Baseline these now, then re-check as you go. You can only prove it worked if you measured the start.</p>
              <div className="grid sm:grid-cols-2 gap-3">
                {content.kpis.map((m) => {
                  const b = kpiBaselines[m.k] ?? { value: "", date: "" };
                  return (
                    <div key={m.k} className="bg-gray-50 rounded-lg p-4">
                      <p className="font-semibold text-gray-900 text-sm">{m.k}</p>
                      <p className="text-sm text-gray-600">{m.v}</p>
                      <div className="mt-3 grid grid-cols-[1fr_8.5rem] gap-2">
                        <div>
                          <label className="block text-[11px] text-gray-400 mb-0.5">Your start value</label>
                          <input type="text" value={b.value}
                            onChange={(e) => setBaseline(m.k, { value: e.target.value })}
                            placeholder="—"
                            className="w-full border border-gray-200 rounded px-2 py-1 text-sm text-gray-900 bg-white focus:outline-none focus:ring-1 print:border-0 print:bg-transparent print:px-0"
                            style={{ outlineColor: accent }} />
                        </div>
                        <div>
                          <label className="block text-[11px] text-gray-400 mb-0.5">Date</label>
                          <input type="date" value={b.date}
                            onChange={(e) => setBaseline(m.k, { date: e.target.value })}
                            className="w-full border border-gray-200 rounded px-2 py-1 text-sm text-gray-900 bg-white focus:outline-none focus:ring-1 print:border-0 print:bg-transparent print:px-0"
                            style={{ outlineColor: accent }} />
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>
          )}

          <div className="print:hidden rounded-xl p-7 text-white" style={{ backgroundColor: accent }}>
            <h3 className="text-2xl font-bold mb-2">Continue in the free tracker</h3>
            <p className="text-white/85 mb-5 text-sm leading-relaxed">
              Your operation details will prefill tracker onboarding. This worksheet and its KPI entries
              remain saved in this browser; review them here whenever you return on this device.
            </p>
            <button onClick={handleConvert}
              className="inline-block bg-white px-6 py-3 rounded-md font-semibold hover:bg-gray-100 transition-colors"
              style={{ color: accent }}>
              Continue to the tracker &rarr;
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
