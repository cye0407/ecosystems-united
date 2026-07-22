"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { analytics } from "@/lib/analytics";
import { computeRoi, formatSignedEur, formatEur } from "@/lib/playbooks/roi-model";
import { PRACTICES, getStack5Funding } from "@/lib/playbooks/stack-5";
import { REGION_LABELS } from "@/lib/playbooks/types";
import type { Region } from "@/lib/playbooks";

const ACCENT = "#2D5A47";
const HANDOFF_KEY = "eu:playbook:stack-5";
const SEED_KEY = "eu:passport:seed";

const REGIONS: Region[] = ["eu", "uk", "us", "other"];
const SEASONS = ["This autumn", "This spring", "Next season", "Not sure yet"];

interface HandoffData {
  hectares?: number;
  practices?: string[];
  inputSpendPerHa?: number;
  grossMarginPerHa?: number;
}

export default function Stack5Worksheet() {
  const router = useRouter();

  // Step 1 — land
  const [hectares, setHectares] = useState(100);
  const [region, setRegion] = useState<Region>("eu");
  // Step 2 — baseline
  const [inputSpend, setInputSpend] = useState("350");
  const [grossMargin, setGrossMargin] = useState("800");
  const [running, setRunning] = useState<string[]>(["coverCrops"]);
  // Step 3 — what to add
  const [adding, setAdding] = useState<string[]>(["reducedTill"]);
  const [includeCarbon, setIncludeCarbon] = useState(false);
  // Step 4 — first move
  const [field, setField] = useState("");
  const [fieldHa, setFieldHa] = useState("");
  const [season, setSeason] = useState(SEASONS[0]);
  const [committed, setCommitted] = useState(false);
  // Step 5 — funding
  const [fundingChosen, setFundingChosen] = useState<string[]>([]);

  const [cameFromTool, setCameFromTool] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(HANDOFF_KEY);
      if (raw) {
        const d: HandoffData = JSON.parse(raw);
        if (typeof d.hectares === "number" && d.hectares > 0) setHectares(d.hectares);
        if (typeof d.inputSpendPerHa === "number")
          setInputSpend(String(d.inputSpendPerHa));
        if (typeof d.grossMarginPerHa === "number")
          setGrossMargin(String(d.grossMarginPerHa));
        if (Array.isArray(d.practices) && d.practices.length > 0) {
          // First carried practice becomes "already running"; rest are the plan.
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

  const toggle = (
    list: string[],
    setList: (v: string[]) => void,
    key: string,
  ) =>
    setList(
      list.includes(key) ? list.filter((k) => k !== key) : [...list, key],
    );

  // A practice can't be both "running" and "adding".
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
        carbon: includeCarbon
          ? { pricePerTonne: 30, seqRatePerHa: 0.5 }
          : undefined,
      }),
    [hectares, spend, margin, totalPractices, includeCarbon],
  );

  // What we'd recommend adding next: highest-priority practice not yet in play.
  const inPlay = new Set([...running, ...adding]);
  const recommendedKey = PRACTICES.filter((p) => !inPlay.has(p.key)).sort(
    (a, b) => a.priority - b.priority,
  )[0]?.key;

  const funding = getStack5Funding(region);
  const labelFor = (key: string) =>
    PRACTICES.find((p) => p.key === key)?.label ?? key;
  const firstAddLabel = adding[0] ? labelFor(adding[0]) : "your next practice";

  const numbersReady = spend > 0 && totalPractices > 0;

  const handleConvert = () => {
    const seed = {
      stack: 5,
      hectares,
      region,
      baseline: {
        inputSpendPerHa: spend,
        grossMarginPerHa: margin,
        practices: running,
      },
      adding,
      firstMove: field
        ? { field, hectares: parseFloat(fieldHa) || null, season }
        : null,
      funding: fundingChosen,
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

  // -- small presentational helpers --------------------------------------
  const stepHead = (n: number, title: string, sub?: string) => (
    <div className="flex items-start gap-3 mb-4">
      <div
        className="w-7 h-7 shrink-0 rounded-full text-white flex items-center justify-center text-sm font-bold"
        style={{ backgroundColor: ACCENT }}
      >
        {n}
      </div>
      <div>
        <h2 className="font-semibold text-gray-900 leading-tight">{title}</h2>
        {sub && <p className="text-sm text-gray-500 mt-0.5">{sub}</p>}
      </div>
    </div>
  );

  const chip = (key: string, active: boolean, onClick: () => void, star = false) => (
    <button
      key={key}
      type="button"
      onClick={onClick}
      className={`relative flex items-center gap-2 py-2 px-3 rounded-md border text-left text-sm font-medium transition-colors ${
        active
          ? "text-white"
          : "bg-white border-gray-300 text-gray-700 hover:border-gray-400"
      }`}
      style={active ? { backgroundColor: ACCENT, borderColor: ACCENT } : undefined}
    >
      <span
        className={`inline-flex items-center justify-center w-4 h-4 rounded border text-[10px] ${
          active ? "border-white/70" : "border-gray-300"
        }`}
      >
        {active ? "✓" : ""}
      </span>
      {labelFor(key)}
      {star && !active && (
        <span
          className="absolute -top-2 -right-2 text-[10px] font-semibold text-white px-1.5 py-0.5 rounded-full"
          style={{ backgroundColor: ACCENT }}
        >
          start here
        </span>
      )}
    </button>
  );

  const inputCls =
    "w-full border border-gray-300 rounded-md px-3 py-2 text-gray-900 focus:outline-none focus:ring-2 focus:border-transparent";

  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      <nav className="mb-6">
        <Link
          href="/tools/regenerative-roi"
          className="text-sm font-medium text-gray-500 hover:text-gray-800"
        >
          &larr; Back to the ROI calculator
        </Link>
      </nav>

      <header className="mb-8">
        <span
          className="text-xs font-semibold uppercase tracking-wide"
          style={{ color: ACCENT }}
        >
          Stack 5 &middot; The Compounding Engine
        </span>
        <h1 className="text-3xl font-bold text-gray-900 mt-2 mb-2">
          Let&apos;s build your regenerative plan
        </h1>
        <p className="text-gray-600">
          Answer as you go. Your plan and your numbers update live on the right,
          and nothing here is homework: what you fill in becomes your Passport at
          the end, so you only enter it once.
        </p>
        {cameFromTool && (
          <p className="mt-2 text-sm font-medium" style={{ color: ACCENT }}>
            ✓ We carried over the numbers from your ROI calculation.
          </p>
        )}
      </header>

      <div className="grid lg:grid-cols-[1fr_20rem] gap-8 items-start">
        {/* ---- Worksheet steps ---- */}
        <div className="space-y-6">
          {/* Step 1 */}
          <section className="bg-white border border-gray-200 rounded-xl p-6">
            {stepHead(1, "Your land", "The basics we size everything to.")}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-gray-600 mb-1">
                  Working area (hectares)
                </label>
                <input
                  type="number"
                  min="0"
                  value={hectares}
                  onChange={(e) => setHectares(parseFloat(e.target.value) || 0)}
                  className={inputCls}
                  style={{ outlineColor: ACCENT }}
                />
              </div>
              <div>
                <label className="block text-sm text-gray-600 mb-1">Region</label>
                <select
                  value={region}
                  onChange={(e) => setRegion(e.target.value as Region)}
                  className={`${inputCls} bg-white`}
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
          </section>

          {/* Step 2 */}
          <section className="bg-white border border-gray-200 rounded-xl p-6">
            {stepHead(
              2,
              "Where you're starting today",
              "Your real numbers now. This is your baseline, and the start line we measure progress from.",
            )}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-sm text-gray-600 mb-1">
                  Input spend (€/ha/yr)
                </label>
                <input
                  type="number"
                  min="0"
                  value={inputSpend}
                  onChange={(e) => setInputSpend(e.target.value)}
                  className={inputCls}
                  style={{ outlineColor: ACCENT }}
                />
                <p className="text-xs text-gray-400 mt-1">
                  Fertiliser + crop protection
                </p>
              </div>
              <div>
                <label className="block text-sm text-gray-600 mb-1">
                  Gross margin (€/ha/yr)
                </label>
                <input
                  type="number"
                  min="0"
                  value={grossMargin}
                  onChange={(e) => setGrossMargin(e.target.value)}
                  className={inputCls}
                  style={{ outlineColor: ACCENT }}
                />
              </div>
            </div>
            <label className="block text-sm text-gray-600 mb-2">
              Which of these do you already run?
            </label>
            <div className="grid grid-cols-2 gap-2">
              {PRACTICES.map((p) =>
                chip(p.key, running.includes(p.key), () => startRunning(p.key)),
              )}
            </div>
            <p className="text-sm text-gray-500 mt-3">
              {running.length === 0
                ? "No worries if you're at the very start. That is exactly what this plan is for."
                : running.length >= 3
                  ? "You already run most of the core practices. You are further along than most farms."
                  : `Good. Running ${running.length} of the four already puts you ahead of a standing start.`}
            </p>
          </section>

          {/* Step 3 */}
          <section className="bg-white border border-gray-200 rounded-xl p-6">
            {stepHead(
              3,
              "Choose what to add next",
              "Toggle a practice and watch the numbers on the right move. Start with the one marked.",
            )}
            <div className="grid grid-cols-2 gap-2 mb-4">
              {PRACTICES.filter((p) => !running.includes(p.key)).map((p) =>
                chip(
                  p.key,
                  adding.includes(p.key),
                  () => startAdding(p.key),
                  p.key === recommendedKey,
                ),
              )}
            </div>
            {adding[0] && (
              <p className="text-sm text-gray-600 mb-4">
                <span className="font-medium text-gray-800">
                  {firstAddLabel}:
                </span>{" "}
                {PRACTICES.find((p) => p.key === adding[0])?.why}
              </p>
            )}
            <label className="flex items-center gap-3 text-sm text-gray-700 cursor-pointer">
              <input
                type="checkbox"
                checked={includeCarbon}
                onChange={(e) => setIncludeCarbon(e.target.checked)}
                className="w-4 h-4"
                style={{ accentColor: ACCENT }}
              />
              Include carbon income as upside (unverified, from year 2)
            </label>
            {includeCarbon && (
              <p className="text-xs text-gray-500 mt-2 bg-amber-50 border border-amber-200 rounded p-3">
                Carbon revenue needs additionality and third-party verification.
                Treat it as a bonus you might earn, never a line you can bank.
              </p>
            )}
          </section>

          {/* Step 4 */}
          <section className="bg-white border border-gray-200 rounded-xl p-6">
            {stepHead(
              4,
              "Commit to a first move",
              "Real transitions start on one field, not the whole farm. Pick where to trial it.",
            )}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
              <div className="sm:col-span-2">
                <label className="block text-sm text-gray-600 mb-1">
                  Which field first?
                </label>
                <input
                  type="text"
                  value={field}
                  onChange={(e) => setField(e.target.value)}
                  placeholder="e.g. North 12"
                  className={inputCls}
                  style={{ outlineColor: ACCENT }}
                />
              </div>
              <div>
                <label className="block text-sm text-gray-600 mb-1">
                  Size (ha)
                </label>
                <input
                  type="number"
                  min="0"
                  value={fieldHa}
                  onChange={(e) => setFieldHa(e.target.value)}
                  className={inputCls}
                  style={{ outlineColor: ACCENT }}
                />
              </div>
            </div>
            <label className="block text-sm text-gray-600 mb-1">When?</label>
            <select
              value={season}
              onChange={(e) => setSeason(e.target.value)}
              className={`${inputCls} bg-white mb-4`}
              style={{ outlineColor: ACCENT }}
            >
              {SEASONS.map((s) => (
                <option key={s}>{s}</option>
              ))}
            </select>
            {field && (
              <label className="flex items-start gap-3 text-sm bg-gray-50 rounded-md p-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={committed}
                  onChange={(e) => setCommitted(e.target.checked)}
                  className="w-4 h-4 mt-0.5"
                  style={{ accentColor: ACCENT }}
                />
                <span className="text-gray-700">
                  I&apos;ll trial{" "}
                  <span className="font-medium">{firstAddLabel.toLowerCase()}</span>{" "}
                  on <span className="font-medium">{field}</span>
                  {fieldHa ? ` (${fieldHa} ha)` : ""} — {season.toLowerCase()}.
                </span>
              </label>
            )}
          </section>

          {/* Step 5 */}
          <section className="bg-white border border-gray-200 rounded-xl p-6">
            {stepHead(
              5,
              "Claim the funding",
              `What pays for this where you farm (${REGION_LABELS[region]}).`,
            )}
            {funding.programs.length > 0 ? (
              <div className="space-y-3">
                {funding.programs.map((p) => (
                  <label
                    key={p.name}
                    className="flex items-start gap-3 cursor-pointer"
                  >
                    <input
                      type="checkbox"
                      checked={fundingChosen.includes(p.name)}
                      onChange={() =>
                        toggle(fundingChosen, setFundingChosen, p.name)
                      }
                      className="w-4 h-4 mt-1"
                      style={{ accentColor: ACCENT }}
                    />
                    <span>
                      <span className="font-semibold text-gray-900 text-sm">
                        {p.name}
                      </span>
                      <span className="block text-sm text-gray-600">
                        {p.snippet}
                      </span>
                    </span>
                  </label>
                ))}
              </div>
            ) : null}
            <p className="text-sm text-gray-500 mt-3">{funding.note}</p>
          </section>
        </div>

        {/* ---- Live plan panel ---- */}
        <aside className="lg:sticky lg:top-24 self-start">
          <div className="bg-gray-50 border border-gray-200 rounded-xl p-5">
            <h2 className="font-bold text-gray-900 mb-1">Your plan so far</h2>
            <p className="text-xs text-gray-500 mb-4">
              Directional, and updating as you go.
            </p>

            {numbersReady ? (
              <div className="space-y-3 mb-4">
                <div className="flex justify-between items-baseline">
                  <span className="text-sm text-gray-600">Payback</span>
                  <span className="font-bold text-gray-900">
                    {roi.paybackYear ? `Year ${roi.paybackYear}` : "10y+"}
                  </span>
                </div>
                <div className="flex justify-between items-baseline">
                  <span className="text-sm text-gray-600">
                    Input saving, yr 5
                  </span>
                  <span className="font-bold" style={{ color: ACCENT }}>
                    {formatEur(roi.year5Savings)}/yr
                  </span>
                </div>
                <div className="flex justify-between items-baseline">
                  <span className="text-sm text-gray-600">10-year net</span>
                  <span
                    className="font-bold"
                    style={{ color: roi.tenYearNet >= 0 ? ACCENT : "#B4413C" }}
                  >
                    {formatSignedEur(roi.tenYearNet)}
                  </span>
                </div>
              </div>
            ) : (
              <p className="text-sm text-gray-500 mb-4">
                Add your input spend and pick a practice to see your numbers.
              </p>
            )}

            <div className="border-t border-gray-200 pt-3 space-y-2 text-sm">
              <div>
                <span className="text-gray-500">Adding: </span>
                <span className="text-gray-900">
                  {adding.length > 0
                    ? adding.map(labelFor).join(", ")
                    : "nothing yet"}
                </span>
              </div>
              {field && (
                <div>
                  <span className="text-gray-500">First move: </span>
                  <span className="text-gray-900">
                    {field}
                    {fieldHa ? ` (${fieldHa} ha)` : ""}, {season.toLowerCase()}
                  </span>
                </div>
              )}
              {fundingChosen.length > 0 && (
                <div>
                  <span className="text-gray-500">Funding to chase: </span>
                  <span className="text-gray-900">{fundingChosen.length}</span>
                </div>
              )}
            </div>

            <button
              onClick={handleConvert}
              className="w-full mt-5 text-white px-4 py-3 rounded-md font-semibold hover:opacity-95 transition-opacity"
              style={{ backgroundColor: ACCENT }}
            >
              Save this as my Passport &rarr;
            </button>
            <p className="text-xs text-gray-500 mt-2 text-center">
              Keeps everything you entered as living farm data you own.
            </p>
          </div>
        </aside>
      </div>
    </div>
  );
}
