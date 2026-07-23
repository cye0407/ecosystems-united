"use client";

import { useEffect, useMemo, useRef, useState } from "react";
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

const SEED_KEY = "eu:passport:seed";
const REGIONS: Region[] = ["eu", "uk", "us", "other"];
const QUARTERS = ["Q1 (Jan–Mar)", "Q2 (Apr–Jun)", "Q3 (Jul–Sep)", "Q4 (Oct–Dec)"];
const MONTHS = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];
const START_YEARS = ["2026", "2027", "2028"];

interface Handoff {
  scale?: number;
  sector?: string;
  issues?: string[];
}

export default function StackPlaybook({ content }: { content: StackContent }) {
  const router = useRouter();
  const accent = content.accent;
  const playbookRef = useRef<HTMLDivElement>(null);

  const [scale, setScale] = useState(content.scaleDefault);
  const [region, setRegion] = useState<Region>("eu");
  const [sector, setSector] = useState("");
  const [issues, setIssues] = useState<string[]>([]);
  const [running, setRunning] = useState<string[]>([]);
  const [adding, setAdding] = useState<string[]>([content.focusAreas[0]?.key].filter(Boolean) as string[]);
  const [field, setField] = useState("");
  const [startPeriod, setStartPeriod] = useState(QUARTERS[3]);
  const [startYear, setStartYear] = useState(START_YEARS[0]);
  const [cameFromTool, setCameFromTool] = useState(false);
  const [showPlaybook, setShowPlaybook] = useState(false);

  useEffect(() => {
    if (content.handoffKey) {
      try {
        const raw = localStorage.getItem(content.handoffKey);
        if (raw) {
          const d: Handoff = JSON.parse(raw);
          if (typeof d.scale === "number" && d.scale > 0) setScale(d.scale);
          if (typeof d.sector === "string") setSector(d.sector);
          if (Array.isArray(d.issues)) setIssues(d.issues);
          setCameFromTool(true);
        }
      } catch {
        /* defaults are fine */
      }
    }
    analytics.track("playbook_worksheet_opened", { stack: content.stackNum });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const toggle = (list: string[], set: (v: string[]) => void, key: string) =>
    set(list.includes(key) ? list.filter((k) => k !== key) : [...list, key]);

  const startRunning = (key: string) => {
    toggle(running, setRunning, key);
    setAdding((a) => a.filter((k) => k !== key));
  };
  const startAdding = (key: string) => {
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
  const benchmark = buildGenericBenchmark(content, runningAreas, addingAreas[0] ?? null);
  const issueLabel = (key: string) =>
    content.issues.find((i) => i.key === key)?.label ?? key;

  const buildPlaybook = () => {
    setShowPlaybook(true);
    analytics.track("playbook_generated", { stack: content.stackNum });
    setTimeout(
      () => playbookRef.current?.scrollIntoView({ behavior: "smooth", block: "start" }),
      50,
    );
  };

  const handleConvert = () => {
    const seed = {
      stack: content.stackNum,
      scale,
      region,
      sector: sector || null,
      issues,
      running,
      adding,
      firstMove: field ? { field, start: startWhen } : null,
    };
    try {
      localStorage.setItem(SEED_KEY, JSON.stringify(seed));
    } catch {
      /* non-fatal */
    }
    analytics.track("playbook_convert_to_passport", { stack: content.stackNum });
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

  const chip = (
    key: string, label: string, active: boolean, onClick: () => void, star = false,
  ) => (
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

  const inputCls =
    "w-full border border-gray-300 rounded-md px-3 py-2 text-gray-900 focus:outline-none focus:ring-2 focus:border-transparent";

  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      <nav className="mb-6 print:hidden">
        <Link href={content.toolHref} className="text-sm font-medium text-gray-500 hover:text-gray-800">
          &larr; {content.toolLabel}
        </Link>
      </nav>

      <header className="mb-8 print:hidden">
        <span className="text-xs font-semibold uppercase tracking-wide" style={{ color: accent }}>
          Stack {content.stackNum}
        </span>
        <h1 className="text-3xl font-bold text-gray-900 mt-2 mb-2">{content.intakeTitle}</h1>
        <p className="text-gray-600">{content.intakeIntro}</p>
        {cameFromTool && (
          <p className="mt-2 text-sm font-medium" style={{ color: accent }}>
            ✓ We carried over what you told the assessment.
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
                <label className="block text-sm text-gray-600 mb-1">
                  Size ({content.scaleLabel})
                </label>
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
                placeholder={content.sectorPlaceholder} className={inputCls}
                style={{ outlineColor: accent }} />
            </div>
          </section>

          <section className="bg-white border border-gray-200 rounded-xl p-6">
            {stepHead(2, "What do you already have in place?", "So we build on it, not around it.")}
            <div className="grid grid-cols-2 gap-2">
              {content.focusAreas.map((f) =>
                chip(f.key, f.label, running.includes(f.key), () => startRunning(f.key)))}
            </div>
          </section>

          <section className="bg-white border border-gray-200 rounded-xl p-6">
            {stepHead(3, content.issuesTitle, "Pick what's driving this. It shapes the order.")}
            <div className="grid grid-cols-2 gap-2">
              {content.issues.map((i) =>
                chip(i.key, i.label, issues.includes(i.key), () => toggle(issues, setIssues, i.key)))}
            </div>
          </section>

          <section className="bg-white border border-gray-200 rounded-xl p-6">
            {stepHead(4, content.focusTitle, content.focusIntro)}
            <div className="grid grid-cols-2 gap-2">
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
            <div className="grid grid-cols-2 gap-4">
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
            <button onClick={buildPlaybook} disabled={addingAreas.length === 0 && runningAreas.length === 0}
              className="w-full text-white px-4 py-3 rounded-md font-semibold hover:opacity-95 transition-opacity disabled:bg-gray-300"
              style={addingAreas.length > 0 || runningAreas.length > 0 ? { backgroundColor: accent } : undefined}>
              Take me to my playbook &darr;
            </button>
          </div>
        </aside>
      </div>

      {/* Playbook */}
      {showPlaybook && (
        <div ref={playbookRef} className="mt-16 pt-10 border-t border-gray-200 print:mt-0 print:pt-0 print:border-0">
          <header className="mb-6">
            <div className="flex items-start justify-between gap-4">
              <span className="text-xs font-semibold uppercase tracking-wide" style={{ color: accent }}>
                Your personalized playbook
              </span>
              <button onClick={() => window.print()}
                className="print:hidden shrink-0 text-sm font-medium border border-gray-300 rounded-md px-3 py-1.5 text-gray-700 hover:border-gray-400 transition-colors">
                ⤓ Print / save as PDF
              </button>
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mt-2 mb-2">{content.playbookHeadline}</h2>
            {(sector || scale) && (
              <p className="text-gray-600 mb-3">
                Built for {sector ? `${sector}, ` : ""}
                {scale ? `${scale.toLocaleString("en-IE")} ${content.scaleLabel}` : ""}
                {issues.length > 0 ? `, focused on ${issues.map(issueLabel).map((s) => s.toLowerCase()).join(", ")}.` : "."}
              </p>
            )}
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
                    <div className="flex items-start gap-2 text-sm rounded-lg p-3" style={{ backgroundColor: "#F3F2F8" }}>
                      <span className="font-semibold" style={{ color: accent }}>Do this:</span>
                      <span className="text-gray-700">{f.howTo}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          <section className="mb-10">
            <h3 className="text-lg font-bold text-gray-900 mb-3">{content.resourcesTitle}</h3>
            {content.resources.map((r) => (
              <div key={r.name} className="bg-white border border-gray-200 rounded-xl p-5 mb-3">
                <h4 className="font-semibold text-gray-900 text-sm mb-1">{r.name}</h4>
                <p className="text-sm text-gray-600 mb-2">{r.snippet}</p>
                {r.url && (
                  <a href={r.url} target="_blank" rel="noopener noreferrer"
                    className="text-sm font-medium hover:underline" style={{ color: accent }}>
                    Open &rarr;
                  </a>
                )}
              </div>
            ))}
            <p className="text-sm text-gray-500">{content.resourcesNote}</p>
          </section>

          <section className="mb-10">
            <h3 className="text-lg font-bold text-gray-900 mb-3">{content.checklistTitle}</h3>
            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <ul className="space-y-2.5">
                {content.checklist.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-gray-700">
                    <input type="checkbox" defaultChecked={false} className="w-4 h-4 mt-0.5" style={{ accentColor: accent }} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <section className="mb-10">
            <h3 className="text-lg font-bold text-gray-900 mb-1">{content.kpisTitle}</h3>
            <p className="text-sm text-gray-500 mb-4">Baseline these now, then re-check as you go. You can only prove it worked if you measured the start.</p>
            <div className="grid sm:grid-cols-2 gap-3">
              {content.kpis.map((m) => (
                <div key={m.k} className="bg-gray-50 rounded-lg p-4">
                  <p className="font-semibold text-gray-900 text-sm">{m.k}</p>
                  <p className="text-sm text-gray-600">{m.v}</p>
                </div>
              ))}
            </div>
          </section>

          <div className="print:hidden rounded-xl p-7 text-white" style={{ backgroundColor: accent }}>
            <h3 className="text-2xl font-bold mb-2">Keep this. Make it yours.</h3>
            <p className="text-white/85 mb-5 text-sm leading-relaxed">
              You've just mapped your operation. Save it as your Passport and everything here becomes
              living data you own — ready to track, build on, and share with buyers, banks or grant
              bodies when they ask. You only enter it once.
            </p>
            <button onClick={handleConvert}
              className="inline-block bg-white px-6 py-3 rounded-md font-semibold hover:bg-gray-100 transition-colors"
              style={{ color: accent }}>
              Save this as my Passport &rarr;
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
