// Generates the Stack 2 (Efficiency) and Stack 4 (Resilience) scorecard
// workbooks served via GatedDownload on their assessment tools. Mirrors the
// on-screen tools: 10 questions scored 0 (No) / 1 (Partial) / 2 (Yes), a total
// with an auto-graded band, a score guide, an action plan, and a tracker.
import * as XLSX from "xlsx";

const numF = (f) => ({ t: "n", v: 0, w: "0", f });

// Shared 4-band model (matches the tools: <=6, <=12, <=17, else /20).
const bandFormula = (cell) =>
  `IF(${cell}>=18,"Strong",IF(${cell}>=13,"Solid foundation",IF(${cell}>=7,"Partial capability","Foundation needed")))`;

function buildScorecard(cfg) {
  const wb = XLSX.utils.book_new();

  // Start Here
  XLSX.utils.book_append_sheet(
    wb,
    XLSX.utils.aoa_to_sheet([
      [cfg.title],
      [`${cfg.stack} · Ecosystems United`],
      [],
      [cfg.subtitle],
      [],
      ["How to use this workbook"],
      ['1. On the "Scorecard" sheet, score each question: 2 = Yes, 1 = Partially, 0 = No.'],
      ["2. Your total and band calculate automatically at the bottom."],
      ['3. Read the "Score Guide" for what your band means and the "Action Plan" for what to do next.'],
      ['4. Re-run it each quarter on the "Tracker" sheet to watch the trend.'],
      [],
      ["More: ecosystemsunited.com/tools/" + cfg.slug],
    ]),
    "Start Here",
  );

  // Scorecard
  const rows = [];
  rows.push([cfg.title]);
  rows.push(["Score each question: 2 = Yes, 1 = Partially, 0 = No."]);
  rows.push([]);
  rows.push(["#", "Question", "Your Score (0-2)"]);
  const firstQ = rows.length + 1;
  cfg.questions.forEach((q, i) => rows.push([i + 1, q, null]));
  const lastQ = firstQ + cfg.questions.length - 1;
  rows.push([]);
  rows.push([null, "TOTAL (max 20)", null]);
  const totalRow = rows.length;
  rows.push([null, "Band", null]);
  const bandRow = rows.length;
  const ws = XLSX.utils.aoa_to_sheet(rows);
  ws[`C${totalRow}`] = numF(`SUM(C${firstQ}:C${lastQ})`);
  ws[`C${bandRow}`] = {
    t: "s",
    v: "Foundation needed",
    w: "Foundation needed",
    f: bandFormula(`C${totalRow}`),
  };
  ws["!cols"] = [{ wch: 4 }, { wch: 88 }, { wch: 16 }];
  XLSX.utils.book_append_sheet(wb, ws, "Scorecard");

  // Score Guide
  const guide = [["Score Guide"], [], ["Score", "Band", "What it means"]];
  cfg.bands.forEach((b) => guide.push([b.range, b.level, b.summary]));
  const gws = XLSX.utils.aoa_to_sheet(guide);
  gws["!cols"] = [{ wch: 10 }, { wch: 20 }, { wch: 90 }];
  XLSX.utils.book_append_sheet(wb, gws, "Score Guide");

  // Action Plan
  const plan = [["Action Plan"], ["Find your band, then work the next step."], [], ["Band", "Do this next"]];
  cfg.bands.forEach((b) => plan.push([b.level, b.recommendation]));
  const pws = XLSX.utils.aoa_to_sheet(plan);
  pws["!cols"] = [{ wch: 20 }, { wch: 100 }];
  XLSX.utils.book_append_sheet(wb, pws, "Action Plan");

  // Tracker
  const tracker = [
    ["Tracker"],
    ["Re-score each quarter and log it here to watch the trend."],
    [],
    ["Date", "Total /20", "Band", "Notes"],
    ...Array.from({ length: 8 }, () => [null, null, null, null]),
  ];
  const tws = XLSX.utils.aoa_to_sheet(tracker);
  tws["!cols"] = [{ wch: 14 }, { wch: 11 }, { wch: 20 }, { wch: 50 }];
  XLSX.utils.book_append_sheet(wb, tws, "Tracker");

  XLSX.writeFile(wb, cfg.out);
  console.log("Wrote", cfg.out);
}

const bands = (recs) => [
  { range: "0-6", level: "Foundation needed", summary: recs[0].summary, recommendation: recs[0].rec },
  { range: "7-12", level: "Partial capability", summary: recs[1].summary, recommendation: recs[1].rec },
  { range: "13-17", level: "Solid foundation", summary: recs[2].summary, recommendation: recs[2].rec },
  { range: "18-20", level: "Strong", summary: recs[3].summary, recommendation: recs[3].rec },
];

buildScorecard({
  title: "Farm Efficiency Scorecard",
  stack: "Stack 2 — Operational Efficiency",
  subtitle: "Find where your operation is leaking value, and fix the biggest leaks first.",
  slug: "efficiency-assessment",
  out: "public/downloads/farm-efficiency-scorecard.xlsx",
  questions: [
    "Do you know your top 3 operational costs as a percentage of revenue?",
    "Have you compared your energy costs to industry benchmarks?",
    "Do you track waste/scrap/spoilage rates?",
    "Have you identified processes with unnecessary steps or redundancy?",
    "Do you know your equipment utilization rates?",
    "Have you mapped where labor time goes vs. where it creates value?",
    "Have you fixed at least one significant inefficiency in the past 12 months?",
    "Do you have a prioritized list of efficiency opportunities with estimated ROI?",
    "Can you quantify the cost of your top 3 inefficiencies?",
    "Do you have a system for catching new leaks as they emerge?",
  ],
  bands: bands([
    { summary: "Significant leaks you haven't identified yet. Get visibility before optimizing.", rec: "Make Stack 1 (Metrics) solid first — you can't fix leaks you can't see — then map your top cost categories." },
    { summary: "Some inefficiencies found, but no systematic approach. Value is still escaping.", rec: "Build a prioritized leak list with estimated costs and ROI. Start with highest-impact, lowest-effort fixes." },
    { summary: "Good leak detection with some gaps closed. Focus on the harder fixes and ongoing monitoring.", rec: "Tackle the medium-effort, high-impact opportunities and build a system so new leaks don't accumulate." },
    { summary: "Your operation is tight. You're ready to capture value from outputs, not just stop losing it.", rec: "Move to Stack 3: Circularity — your efficiency gains are the foundation for circular value capture." },
  ]),
});

buildScorecard({
  title: "Farm Resilience Scorecard",
  stack: "Stack 4 — Structural Resilience",
  subtitle: "How well can your operation absorb a shock without breaking?",
  slug: "resilience-assessment",
  out: "public/downloads/farm-resilience-scorecard.xlsx",
  questions: [
    "Do you know your single points of failure (one supplier, one customer, one key person)?",
    "What percentage of revenue comes from your top customer? (Yes = <30%, Partially = 30-50%, No = >50%)",
    "What percentage of key inputs come from a single supplier? (Yes = <30%, Partially = 30-50%, No = >50%)",
    "Do you have documented contingency plans for your top 3 risk scenarios?",
    "Have you stress-tested your operation against a realistic disruption scenario?",
    "Do you monitor external trends that could affect your business (regulations, market shifts, climate)?",
    "Could your operation continue if a key employee left tomorrow?",
    "Do you have backup suppliers identified for critical inputs?",
    "Have you recovered from a significant disruption in the past 3 years?",
    "Do you carry inventory or capacity buffer, or do you run lean with no slack?",
  ],
  bands: bands([
    { summary: "Significant vulnerabilities. A single disruption could cascade into serious problems.", rec: "Map your single points of failure first — know what could break you before it does. Don't skip Stacks 1-3." },
    { summary: "Some risks identified, but no systematic contingency planning. A disruption would hurt.", rec: "Build contingency plans for your top 3 risk scenarios and identify backup suppliers for critical inputs." },
    { summary: "Good risk awareness with some redundancy. Focus on stress-testing and early-warning systems.", rec: "Run scenario models against real data and build sensing mechanisms for the external shifts that matter to you." },
    { summary: "Your operation can absorb shocks. Turn that foundation into market advantage.", rec: "Move to Stack 5: Regeneration — use your proven resilience as a differentiator with customers and partners." },
  ]),
});
