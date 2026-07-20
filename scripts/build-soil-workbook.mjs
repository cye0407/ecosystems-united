// Generates the Soil Microbial Health Checklist workbook (.xlsx) served by
// /tools/soil-health-checklist via GatedDownload. Mirrors the on-screen tool:
// 14 questions across 3 categories, built-in scoring formulas, grade guide,
// action plan, and a season-over-season tracker.
import * as XLSX from 'xlsx';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const OUT = process.argv[2];
if (!OUT) throw new Error('Pass output path as arg 1');

const wb = XLSX.utils.book_new();

// ---- Start Here ----
const about = [
  ['Soil Microbial Health Checklist'],
  ['Your workbook — Ecosystems United · Five Stacks, Stack 1: The Defensible Baseline'],
  [],
  ['How to use this workbook'],
  ['1. Open the "Assessment" sheet. For each of the 14 questions, enter your score (0, 1, or 2) in the "Your Score" column.'],
  ['2. Your category subtotals, total, percentage, and grade calculate automatically at the bottom.'],
  ['3. Read the "Score Guide" for what your grade means, and the "Action Plan" for what to do next.'],
  ['4. Re-run it each season on the "Season Tracker" sheet to watch your soil biology improve over time.'],
  [],
  ['Why it matters'],
  ['Soil biology drives water holding, nutrient cycling, and resilience. Small management changes compound.'],
  ['These indicators connect what is happening underground to your bottom line and to what buyers ask about.'],
  [],
  ['More: ecosystemsunited.com/tools/soil-health-checklist'],
];
XLSX.utils.book_append_sheet(wb, XLSX.utils.aoa_to_sheet(about), 'Start Here');

// ---- Assessment ----
const q = [
  ['Management Practices', 'How often do you till or disturb your soil?', 'Full tillage every season', 'Reduced tillage (fewer passes or strip-till)', 'No-till or minimal disturbance'],
  ['Management Practices', 'How much of the year does your soil have living plant cover?', 'Only during cash crop season (4-6 months)', 'Extended coverage with cover crops (6-9 months)', 'Year-round living roots when possible'],
  ['Management Practices', 'How many different crop species are in your rotation?', '1-2 crops (e.g., corn-soy)', '3-4 crops including cover crops', '5+ species including diverse cover crop mixes'],
  ['Management Practices', 'How do you approach fertilizer application?', 'Standard rates based on general recommendations', 'Soil-test based with some adjustments', 'Precision application based on soil biology and tissue tests'],
  ['Management Practices', 'How do you manage pests and diseases?', 'Calendar-based or preventive chemical applications', 'Scouting-based IPM with reduced chemical use', 'Biological controls and diverse rotations as primary strategy'],
  ['Observable Indicators', 'When you dig into your soil, what do you smell?', 'Little smell, or sour/metallic odor', 'Mild earthy smell', 'Rich, pleasant earthy smell (like forest floor)'],
  ['Observable Indicators', 'How many earthworms do you typically find in a shovel of soil (top 6 inches)?', '0-2 earthworms', '3-5 earthworms', '6+ earthworms'],
  ['Observable Indicators', 'How does water infiltrate when it rains?', 'Puddles and runoff, slow to absorb', 'Moderate infiltration, some puddling', 'Water soaks in quickly, minimal runoff'],
  ['Observable Indicators', 'What does your soil structure look like when you break apart a clod?', 'Dense, blocky, or powdery', 'Some aggregates visible but inconsistent', 'Crumbly aggregates that hold together gently'],
  ['Observable Indicators', 'Do you see white fungal threads (mycorrhizae) on roots or in soil?', 'Rarely or never', 'Occasionally in some areas', 'Regularly visible, especially on cover crop roots'],
  ['Performance & Resilience', 'How do your crops perform during drought stress?', 'Significant yield loss, visible stress early', 'Moderate stress, recovers with rain', 'Maintains relatively well, less stressed than neighbors'],
  ['Performance & Resilience', 'How has your fertilizer requirement changed over the past 5 years?', 'Increasing to maintain yields', 'About the same', 'Decreasing while maintaining or improving yields'],
  ['Performance & Resilience', 'What is your soil organic matter trend?', 'Declining or unknown', 'Stable', 'Increasing (documented through testing)'],
  ['Performance & Resilience', 'How quickly do crop residues break down after harvest?', 'Slowly — residue still visible at planting', 'Moderate breakdown over winter', 'Rapid decomposition, residue well-incorporated'],
];

const rows = [];
rows.push(['Soil Microbial Health — Assessment']);
rows.push(['Enter your score (0, 1, or 2) in the last column. Totals calculate automatically.']);
rows.push([]);
rows.push(['#', 'Category', 'Question', 'Score 0', 'Score 1', 'Score 2', 'Your Score (0-2)']);
const firstQRow = rows.length + 1; // 1-based Excel row of first question
q.forEach((item, i) => rows.push([i + 1, item[0], item[1], item[2], item[3], item[4], null]));
const lastQRow = firstQRow + q.length - 1;
const gCol = 'G';
const pracEnd = firstQRow + 4;   // 5 practices questions
const indEnd = firstQRow + 9;    // next 5
const perfEnd = firstQRow + 13;  // final 4
rows.push([]);
const subStart = rows.length + 1;
rows.push([null, null, null, null, null, 'Management Practices (max 10)', null]);
rows.push([null, null, null, null, null, 'Observable Indicators (max 10)', null]);
rows.push([null, null, null, null, null, 'Performance & Resilience (max 8)', null]);
rows.push([null, null, null, null, null, 'TOTAL (max 28)', null]);
const totalRow = subStart + 3;
rows.push([null, null, null, null, null, 'Percentage', null]);
const pctRow = totalRow + 1;
rows.push([null, null, null, null, null, 'Grade', null]);
const gradeRow = pctRow + 1;
const ws = XLSX.utils.aoa_to_sheet(rows);
// SheetJS drops {f} objects passed via aoa, and its writer only emits a
// formula when the cell also carries a cached value (v). Assign directly.
const numF = (f) => ({ t: 'n', v: 0, w: '0', f });
ws[`${gCol}${subStart}`] = numF(`SUM(${gCol}${firstQRow}:${gCol}${pracEnd})`);
ws[`${gCol}${subStart + 1}`] = numF(`SUM(${gCol}${pracEnd + 1}:${gCol}${indEnd})`);
ws[`${gCol}${subStart + 2}`] = numF(`SUM(${gCol}${indEnd + 1}:${gCol}${perfEnd})`);
ws[`${gCol}${totalRow}`] = numF(`SUM(${gCol}${firstQRow}:${gCol}${lastQRow})`);
ws[`${gCol}${pctRow}`] = numF(`ROUND(${gCol}${totalRow}/28*100,0)`);
ws[`${gCol}${gradeRow}`] = { t: 's', v: 'F - Critical', w: 'F - Critical', f: `IF(${gCol}${pctRow}>=85,"A - Excellent",IF(${gCol}${pctRow}>=70,"B - Good",IF(${gCol}${pctRow}>=55,"C - Developing",IF(${gCol}${pctRow}>=40,"D - Needs Work","F - Critical"))))` };
ws['!cols'] = [{ wch: 4 }, { wch: 26 }, { wch: 60 }, { wch: 30 }, { wch: 30 }, { wch: 34 }, { wch: 16 }];
XLSX.utils.book_append_sheet(wb, ws, 'Assessment');

// ---- Score Guide ----
const guide = [
  ['Score Guide'],
  [],
  ['Grade', 'Range', 'What it means'],
  ['A', '85-100%', 'Excellent — strong, functioning soil biology. Focus on documentation for market positioning and premium access.'],
  ['B', '70-84%', 'Good — healthy foundation with room to deepen. Diversify and keep the living roots going.'],
  ['C', '55-69%', 'Developing — biology is establishing. Reduce disturbance and add organic matter consistently.'],
  ['D', '40-54%', 'Needs work — soil biology is under stress. Prioritise the High-priority actions.'],
  ['F', 'Under 40%', 'Critical — start with the fundamentals: cut tillage, add cover, feed the biology.'],
];
const gws = XLSX.utils.aoa_to_sheet(guide);
gws['!cols'] = [{ wch: 8 }, { wch: 12 }, { wch: 90 }];
XLSX.utils.book_append_sheet(wb, gws, 'Score Guide');

// ---- Action Plan ----
const plan = [
  ['Action Plan'],
  ['Match your category scores to the actions below.'],
  [],
  ['Category', 'If you scored', 'Priority', 'Action'],
  ['Management Practices', 'Under 50%', 'High', 'Reduce tillage intensity. Even one fewer pass per season helps fungal networks establish.'],
  ['Management Practices', 'Under 50%', 'High', 'Add cover crops. Start with a simple cereal rye after harvest — low cost, high impact.'],
  ['Management Practices', '50-75%', 'Medium', 'Diversify your cover crop mix. Add a legume for nitrogen fixation and a brassica for deep rooting.'],
  ['Observable Indicators', 'Under 50%', 'High', 'Your soil biology needs support. Focus on reducing disturbance and adding organic matter.'],
  ['Observable Indicators', 'Under 50%', 'Medium', 'Do a simple infiltration test monthly. Pour a gallon of water and time absorption.'],
  ['Observable Indicators', '50-75%', 'Medium', 'Consider mycorrhizal inoculants for high-value crops to boost fungal colonization.'],
  ['Performance & Resilience', 'Under 50%', 'High', 'Track organic matter annually. It predicts water holding, nutrient cycling, and resilience.'],
  ['All categories', '75%+', 'Maintain', 'Your soil biology is strong. Document it for market positioning and premium access.'],
];
const pws = XLSX.utils.aoa_to_sheet(plan);
pws['!cols'] = [{ wch: 26 }, { wch: 14 }, { wch: 10 }, { wch: 90 }];
XLSX.utils.book_append_sheet(wb, pws, 'Action Plan');

// ---- Season Tracker ----
const tracker = [
  ['Season Tracker'],
  ['Re-run the assessment each season and log your results here to watch the trend.'],
  [],
  ['Date', 'Practices %', 'Indicators %', 'Performance %', 'Total %', 'Grade', 'Notes'],
  ...Array.from({ length: 12 }, () => [null, null, null, null, null, null, null]),
];
const tws = XLSX.utils.aoa_to_sheet(tracker);
tws['!cols'] = [{ wch: 14 }, { wch: 12 }, { wch: 13 }, { wch: 14 }, { wch: 10 }, { wch: 16 }, { wch: 40 }];
XLSX.utils.book_append_sheet(wb, tws, 'Season Tracker');

XLSX.writeFile(wb, OUT);
console.log('Wrote', OUT);
