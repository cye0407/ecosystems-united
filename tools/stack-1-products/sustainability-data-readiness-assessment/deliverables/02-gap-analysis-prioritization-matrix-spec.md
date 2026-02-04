# Gap Analysis & Prioritization Matrix - Specification

**Component:** 2 of 6  
**File Type:** Excel (.xlsx)  
**Primary File:** `Gap-Analysis-Prioritization-Matrix.xlsx`  
**Build Priority:** 1 (Critical - build second after Scorecard)

---

## Purpose

The Gap Analysis Matrix takes gaps identified in the Readiness Scorecard and helps users prioritize which to close first. It plots gaps on a quadrant matrix (Buyer Priority × Implementation Difficulty) and generates a prioritized action roadmap.

---

## Workbook Structure

### Tab Order

1. **Instructions** - How to use the prioritization tool
2. **Gap Input** - Import or enter gaps from scorecard
3. **Priority Scoring** - Rate each gap on priority dimensions
4. **Quadrant Matrix** - Visual plot of gaps
5. **Action Roadmap** - Prioritized list with recommended sequence
6. **Resource Planning** - Cost and time estimates
7. **Definitions** - Priority dimension explanations
8. **Config** (hidden) - Lookup tables and settings

---

## Tab 1: Instructions

### Content

```
GAP ANALYSIS & PRIORITIZATION MATRIX
====================================

WHAT THIS TOOL DOES
-------------------
This tool takes the gaps you identified in the Readiness Scorecard and helps
you decide which to fix first. Not all gaps are equal - some matter more to
buyers, some are easier to close. This matrix helps you prioritize.

You'll get:
• Quadrant visualization showing priority vs. difficulty
• Prioritized action list (what to fix in what order)
• Resource estimates (time and cost to close each gap)
• Clear focus on what matters most

HOW TO USE THIS TOOL
--------------------

Step 1: IMPORT YOUR GAPS
   Go to "Gap Input" tab
   Option A: Copy gaps from your Readiness Scorecard Gap Summary
   Option B: Manually enter gaps if working from different source
   Yellow cells = your input

Step 2: SCORE EACH GAP
   Go to "Priority Scoring" tab
   For each gap, rate:
   - Buyer Priority: How important is this to buyers? (1-5)
   - Implementation Difficulty: How hard to fix? (1-5)
   - Cost to Close: Expected expense (dropdown)
   - Timeline to Close: How long will it take? (dropdown)

Step 3: VIEW THE MATRIX
   Go to "Quadrant Matrix" tab
   See where each gap falls:
   - Q1 (Top-Right): High Priority, Easy = DO FIRST
   - Q2 (Top-Left): High Priority, Hard = PLAN CAREFULLY
   - Q3 (Bottom-Right): Low Priority, Easy = DO WHEN TIME ALLOWS
   - Q4 (Bottom-Left): Low Priority, Hard = DEFER OR SKIP

Step 4: BUILD YOUR ROADMAP
   Go to "Action Roadmap" tab
   Review the auto-generated priority sequence
   Adjust if needed based on your specific situation
   Assign target dates

Step 5: PLAN RESOURCES
   Go to "Resource Planning" tab
   Review total time and cost estimates
   Identify resource constraints
   Adjust timeline if needed

TIPS FOR EFFECTIVE PRIORITIZATION
---------------------------------
• Be realistic about difficulty - overconfidence leads to missed deadlines
• Consider dependencies - some gaps block others
• Talk to buyers if possible - confirm what they actually prioritize
• Start small - quick wins build momentum

UNDERSTANDING THE QUADRANTS
---------------------------
Q1 - CRITICAL QUICK WINS (High Priority, Low Difficulty)
   → Maximum impact, minimum effort
   → Close these gaps FIRST
   → Typical timeline: 2-6 weeks

Q2 - STRATEGIC PRIORITIES (High Priority, High Difficulty)  
   → Important but require significant investment
   → Start planning now, execute over 3-12 months
   → May need external help or budget allocation

Q3 - OPPORTUNISTIC IMPROVEMENTS (Low Priority, Low Difficulty)
   → Easy but not urgent
   → Do when bandwidth allows
   → Good for continuous improvement, not critical path

Q4 - DEPRIORITIZE (Low Priority, High Difficulty)
   → Not worth the effort right now
   → Revisit in year 2-3 or if buyer priorities change
   → Don't feel guilty about skipping these

TIME REQUIRED
-------------
• Gap import and scoring: 1-2 hours
• Roadmap planning: 30-60 minutes
• Resource planning: 30 minutes

NEXT STEPS
----------
1. Complete prioritization in this tool
2. Use Timeline Planning Tool to map actions to calendar
3. Begin closing Q1 gaps immediately
4. If buyers ask before you're ready, use Response Templates
```

---

## Tab 2: Gap Input

### Layout

```
┌─────────────────────────────────────────────────────────────────────────────┐
│ GAP INPUT                                                                   │
│ Enter or paste gaps from your Readiness Scorecard below                     │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│ Row 3: Column Headers                                                       │
│   A: Gap ID | B: Category | C: Sub-requirement | D: Current Score |         │
│   E: Gap Severity | F: Brief Description                                    │
│                                                                             │
├─────────────────────────────────────────────────────────────────────────────┤
│ Rows 4-53: Gap entries (up to 50 gaps)                                      │
│                                                                             │
│ Example:                                                                    │
│ G001 | Carbon Footprint | Scope 1 emissions | 1.2 | Critical | No direct... │
│ G002 | Carbon Footprint | Scope 2 emissions | 1.5 | High | Partial data...  │
│ G003 | Water Use | Source tracking | 2.1 | Medium | Some sources tracked... │
│                                                                             │
├─────────────────────────────────────────────────────────────────────────────┤
│ Row 55: Summary                                                             │
│   Total Gaps Entered: [count]                                               │
│   Critical: [count] | High: [count] | Medium: [count] | Low: [count]        │
└─────────────────────────────────────────────────────────────────────────────┘
```

### Column Definitions

| Column | Header | Width | Input Type |
|--------|--------|-------|------------|
| A | Gap ID | 8 | Auto-generated (G001, G002...) or manual |
| B | Category | 20 | Dropdown (12 categories from Scorecard) |
| C | Sub-requirement | 35 | Text (from Scorecard) |
| D | Current Score | 12 | Number (0-5, from Scorecard) |
| E | Gap Severity | 12 | Auto-calculated from score |
| F | Brief Description | 50 | Text |

### Gap Severity Auto-Calculation

```
=IF(D4<1.5, "Critical",
 IF(D4<2.5, "High",
 IF(D4<3.5, "Medium", "Low")))
```

### Formatting

- Input cells (B, C, D, F): Yellow background
- Auto-calculated cells (A, E): Light blue background
- Header row: Medium blue, white text, bold

---

## Tab 3: Priority Scoring

### Layout

```
┌─────────────────────────────────────────────────────────────────────────────┐
│ PRIORITY SCORING                                                            │
│ Rate each gap on the dimensions below to determine priority                 │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│ Row 3: Column Headers                                                       │
│   A: Gap ID | B: Category | C: Sub-requirement |                            │
│   D: Buyer Priority (1-5) | E: Difficulty (1-5) |                           │
│   F: Cost Estimate | G: Timeline Estimate |                                 │
│   H: Risk Level | I: Priority Score | J: Quadrant                           │
│                                                                             │
├─────────────────────────────────────────────────────────────────────────────┤
│ Rows 4-53: Scoring for each gap (linked from Gap Input)                     │
│                                                                             │
│ Example:                                                                    │
│ G001 | Carbon | Scope 1 | 5 | 4 | €€€ | 3-6 mo | Critical | 8.2 | Q2       │
│ G002 | Carbon | Scope 2 | 5 | 2 | €   | <1 mo  | High     | 9.1 | Q1       │
│ G003 | Water  | Source  | 3 | 2 | €   | 1-3 mo | Medium   | 5.5 | Q3       │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

### Column Definitions

| Column | Header | Width | Input Type |
|--------|--------|-------|------------|
| A | Gap ID | 8 | Linked from Gap Input |
| B | Category | 15 | Linked from Gap Input |
| C | Sub-requirement | 30 | Linked from Gap Input |
| D | Buyer Priority | 15 | Dropdown 1-5 |
| E | Implementation Difficulty | 15 | Dropdown 1-5 |
| F | Cost Estimate | 12 | Dropdown |
| G | Timeline Estimate | 12 | Dropdown |
| H | Risk Level | 12 | Dropdown |
| I | Priority Score | 12 | Formula (calculated) |
| J | Quadrant | 8 | Formula (calculated) |

### Dropdown Options

#### Column D: Buyer Priority

| Value | Label | Description |
|-------|-------|-------------|
| 5 | Critical | Buyers explicitly require this, deal-breaker |
| 4 | High | Standard buyer expectation, frequently requested |
| 3 | Medium | Sometimes requested, varies by buyer |
| 2 | Low | Rarely requested, nice-to-have |
| 1 | Minimal | Almost never asked, future-proofing only |

#### Column E: Implementation Difficulty

| Value | Label | Description |
|-------|-------|-------------|
| 1 | Very Easy | Documentation only, no new systems |
| 2 | Easy | Minor process changes, existing data reorganization |
| 3 | Moderate | New tracking required, some technical work |
| 4 | Difficult | Significant systems/process build, expertise needed |
| 5 | Very Difficult | Major investment, multi-month project, external help |

#### Column F: Cost Estimate

| Value | Label | Typical Range |
|-------|-------|---------------|
| € | Zero/Minimal | €0-100 (documentation, reorganization) |
| €€ | Low | €100-500 (templates, basic tools) |
| €€€ | Medium | €500-2,000 (software, consultant hours) |
| €€€€ | High | €2,000-10,000 (certification, major systems) |
| €€€€€ | Very High | €10,000+ (infrastructure, long-term projects) |

#### Column G: Timeline Estimate

| Value | Label |
|-------|-------|
| <1 mo | Less than 1 month |
| 1-3 mo | 1-3 months |
| 3-6 mo | 3-6 months |
| 6-12 mo | 6-12 months |
| 12+ mo | More than 12 months |

#### Column H: Risk Level

| Value | Label | Description |
|-------|-------|-------------|
| Critical | Critical | Inability to respond threatens supplier status |
| High | High | Damages credibility, limits growth opportunities |
| Medium | Medium | Weakens position but not immediately urgent |
| Low | Low | Nice-to-have, minimal stakeholder impact |

### Priority Score Formula (Column I)

```
Priority Score = (Buyer Priority × 2) + (5 - Difficulty) + Risk Modifier

Where:
- Buyer Priority: 1-5 from dropdown
- Difficulty: 1-5 from dropdown (inverted so easier = higher score)
- Risk Modifier: Critical=2, High=1, Medium=0, Low=-1

Score Range: 2-17 (higher = more urgent priority)
```

**Alternative simpler formula:**
```
Priority Score = Buyer Priority + (6 - Difficulty)
Range: 2-10
```

### Quadrant Assignment Formula (Column J)

```
=IF(AND(D4>=4, E4<=2), "Q1",
 IF(AND(D4>=4, E4>=3), "Q2",
 IF(AND(D4<=3, E4<=2), "Q3", "Q4")))

Where:
- Q1: Buyer Priority ≥ 4 AND Difficulty ≤ 2 (High Priority, Low Difficulty)
- Q2: Buyer Priority ≥ 4 AND Difficulty ≥ 3 (High Priority, High Difficulty)
- Q3: Buyer Priority ≤ 3 AND Difficulty ≤ 2 (Low Priority, Low Difficulty)
- Q4: Buyer Priority ≤ 3 AND Difficulty ≥ 3 (Low Priority, High Difficulty)
```

---

## Tab 4: Quadrant Matrix

### Layout

Visual chart with gaps plotted on X-Y grid.

```
┌─────────────────────────────────────────────────────────────────────────────┐
│ GAP PRIORITIZATION MATRIX                                                   │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│  Buyer Priority                                                             │
│       ▲                                                                     │
│     5 │  Q2: STRATEGIC          │  Q1: QUICK WINS                          │
│       │  PRIORITIES              │  (DO FIRST)                              │
│       │                          │                                          │
│     4 │  [G001]  [G005]         │     [G002]  [G008]                       │
│       │          [G012]          │  [G003]                                  │
│       │                          │                                          │
│     3 ├──────────────────────────┼─────────────────────────────────────────│
│       │                          │                                          │
│       │  Q4: DEPRIORITIZE       │  Q3: OPPORTUNISTIC                       │
│     2 │                          │                                          │
│       │     [G007]               │     [G004]  [G009]                       │
│       │  [G010]                  │  [G006]                                  │
│     1 │                          │                                          │
│       └──────────────────────────┴─────────────────────────────────────────►│
│         5    4    3    2    1      1    2    3    4    5                    │
│         ◄─── Harder              Easier ───►                                │
│                    Implementation Difficulty                                │
│                                                                             │
├─────────────────────────────────────────────────────────────────────────────┤
│ QUADRANT SUMMARY                                                            │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│  Q1 - Quick Wins:         4 gaps    │  Focus: Immediate action             │
│  Q2 - Strategic:          3 gaps    │  Focus: Plan and resource            │
│  Q3 - Opportunistic:      4 gaps    │  Focus: When time allows             │
│  Q4 - Deprioritize:       2 gaps    │  Focus: Defer or skip                │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

### Chart Specifications

**Chart Type:** Scatter plot (XY)

**Axes:**
- X-axis: Implementation Difficulty (1-5, reversed so 1=hard on left, 5=easy on right)
- Y-axis: Buyer Priority (1-5, 5 at top)

**Data Points:**
- Each gap plotted as a point
- Labels: Gap ID
- Color coding by category or risk level

**Quadrant Lines:**
- Horizontal line at Y = 3.5
- Vertical line at X = 2.5
- Quadrant labels in each section

**Quadrant Coloring (optional):**
- Q1 (top-right): Light green background
- Q2 (top-left): Light orange background
- Q3 (bottom-right): Light blue background
- Q4 (bottom-left): Light gray background

### Summary Table

Below the chart, show count of gaps in each quadrant with brief guidance.

---

## Tab 5: Action Roadmap

### Layout

```
┌─────────────────────────────────────────────────────────────────────────────┐
│ PRIORITIZED ACTION ROADMAP                                                  │
│ Gaps sorted by priority - address from top to bottom                        │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│ Row 3: Column Headers                                                       │
│   A: Rank | B: Gap ID | C: Category | D: Sub-requirement |                  │
│   E: Quadrant | F: Priority Score | G: Recommended Action |                 │
│   H: Target Start | I: Target Complete | J: Status | K: Notes               │
│                                                                             │
├─────────────────────────────────────────────────────────────────────────────┤
│ Rows 4+: Gaps sorted by Priority Score (highest first)                      │
│                                                                             │
│ Example:                                                                    │
│ 1  | G002 | Carbon    | Scope 2     | Q1 | 9.1 | Document electricity...   │
│ 2  | G008 | Labor     | Training    | Q1 | 8.8 | Compile existing...       │
│ 3  | G001 | Carbon    | Scope 1     | Q2 | 8.2 | Implement fuel tracking..│
│ 4  | G005 | Sourcing  | Traceability| Q2 | 7.9 | Map supply chain...      │
│ ...                                                                         │
│                                                                             │
├─────────────────────────────────────────────────────────────────────────────┤
│ PHASE BREAKDOWN                                                             │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│  PHASE 1 - Immediate (Weeks 1-6): Q1 gaps                                  │
│  PHASE 2 - Short-term (Months 2-6): Q2 gaps (start planning)               │
│  PHASE 3 - Ongoing: Q3 gaps (as bandwidth allows)                          │
│  PHASE 4 - Future: Q4 gaps (revisit annually)                              │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

### Column Definitions

| Column | Header | Width | Input Type |
|--------|--------|-------|------------|
| A | Priority Rank | 8 | Formula (auto-ranked) |
| B | Gap ID | 8 | Linked |
| C | Category | 15 | Linked |
| D | Sub-requirement | 30 | Linked |
| E | Quadrant | 8 | Linked from Priority Scoring |
| F | Priority Score | 12 | Linked from Priority Scoring |
| G | Recommended Action | 40 | Text (user input or auto-suggested) |
| H | Target Start | 12 | Date (user input) |
| I | Target Complete | 12 | Date (user input) |
| J | Status | 12 | Dropdown: Not Started / In Progress / Complete |
| K | Notes | 30 | Text (user input) |

### Sorting

Auto-sort by Priority Score (Column F), descending.

### Status Dropdown Options

| Value | Color |
|-------|-------|
| Not Started | Gray |
| In Progress | Yellow |
| Complete | Green |
| Blocked | Red |
| Deferred | Light gray |

---

## Tab 6: Resource Planning

### Layout

```
┌─────────────────────────────────────────────────────────────────────────────┐
│ RESOURCE PLANNING SUMMARY                                                   │
│ Estimated resources required to close identified gaps                       │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│ COST SUMMARY                                                                │
│ ─────────────────────────────────────────────────────────────              │
│                                                                             │
│  Cost Level     │ Gap Count │ Est. Range      │ Gaps                       │
│  ───────────────┼───────────┼─────────────────┼─────────────────────────── │
│  € (Minimal)    │     4     │ €0-400          │ G002, G008, G003, G006    │
│  €€ (Low)       │     3     │ €300-1,500      │ G004, G009, G011          │
│  €€€ (Medium)   │     3     │ €1,500-6,000    │ G001, G007, G012          │
│  €€€€ (High)    │     2     │ €4,000-20,000   │ G005, G010                │
│  €€€€€ (V.High) │     1     │ €10,000+        │ G013                      │
│  ───────────────┼───────────┼─────────────────┼─────────────────────────── │
│  TOTAL          │    13     │ €15,800-27,900  │                           │
│                                                                             │
│ Note: Ranges are estimates. Actual costs depend on your operation,          │
│ existing infrastructure, and chosen approach.                               │
│                                                                             │
├─────────────────────────────────────────────────────────────────────────────┤
│ TIMELINE SUMMARY                                                            │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│  Timeline       │ Gap Count │ Gaps                                         │
│  ───────────────┼───────────┼───────────────────────────────────────────── │
│  <1 month       │     3     │ G002, G008, G006                             │
│  1-3 months     │     4     │ G003, G004, G009, G011                       │
│  3-6 months     │     4     │ G001, G007, G012, G005                       │
│  6-12 months    │     2     │ G010, G013                                   │
│  12+ months     │     0     │ —                                            │
│                                                                             │
│  Estimated completion of all gaps: 6-12 months                             │
│  Estimated completion of Q1 gaps: 1-3 months                               │
│                                                                             │
├─────────────────────────────────────────────────────────────────────────────┤
│ RESOURCE TYPE BREAKDOWN                                                     │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│  Internal Time (Staff Hours)                                               │
│  ─────────────────────────────────────────────────────────────              │
│  Documentation/admin tasks:  ~40-60 hours                                  │
│  Data collection/tracking:   ~80-120 hours                                 │
│  Process improvements:       ~40-80 hours                                  │
│  Total internal:             ~160-260 hours                                │
│                                                                             │
│  External Resources                                                         │
│  ─────────────────────────────────────────────────────────────              │
│  Consultant hours:           ~20-40 hours (if needed)                      │
│  Certification audits:       1-2 audits                                    │
│  Software/tools:             2-3 subscriptions                             │
│                                                                             │
├─────────────────────────────────────────────────────────────────────────────┤
│ BUDGET ALLOCATION SUGGESTION                                                │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│  Phase 1 (Q1 gaps):    €500-2,000     │ 20% of budget                      │
│  Phase 2 (Q2 gaps):    €8,000-15,000  │ 60% of budget                      │
│  Phase 3 (Q3 gaps):    €2,000-5,000   │ 15% of budget                      │
│  Contingency:          €1,000-3,000   │ 5% of budget                       │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

### Calculations

All summaries calculated from Priority Scoring tab data using COUNTIF and SUMIF formulas.

### Cost Range Lookup Table (in Config)

| Cost Symbol | Min € | Max € |
|-------------|-------|-------|
| € | 0 | 100 |
| €€ | 100 | 500 |
| €€€ | 500 | 2,000 |
| €€€€ | 2,000 | 10,000 |
| €€€€€ | 10,000 | 50,000 |

---

## Tab 7: Definitions

### Content

Detailed explanations of all priority dimensions:

1. **Buyer Priority Scale**
   - What each level (1-5) means
   - How to assess buyer importance
   - Examples for each level

2. **Implementation Difficulty Scale**
   - What each level (1-5) means
   - Factors that affect difficulty
   - Examples for each level

3. **Cost Categories**
   - What's included in each cost range
   - Common expenses by category
   - How to estimate for your situation

4. **Timeline Categories**
   - What affects timeline
   - Dependencies to consider
   - Realistic planning guidance

5. **Risk Levels**
   - Definition of each level
   - How risk affects prioritization
   - Examples

6. **Quadrant Definitions**
   - Detailed guidance for each quadrant
   - Examples of gaps in each
   - Action recommendations

---

## Tab 8: Config (Hidden)

### Contents

1. **Dropdown lists** for all data validation
2. **Cost lookup table** (symbol → range)
3. **Timeline lookup table** (text → months)
4. **Priority score formula parameters**
5. **Quadrant threshold values**
6. **Auto-suggestion text for recommended actions**

---

## Supporting Files

### Action-Roadmap-Template.xlsx

Simplified standalone version of the Action Roadmap tab for users who want a separate project tracking file.

**Contents:**
- Single worksheet
- Columns: Task, Category, Priority, Start Date, End Date, Owner, Status, Notes
- Pre-formatted for printing
- No formulas (manual entry)

### Resource-Planning-Worksheet.xlsx

Detailed budget and time planning tool.

**Contents:**
- Budget worksheet (line-item cost planning)
- Time allocation worksheet (hours by person/role)
- Cash flow worksheet (when costs occur)
- Summary dashboard

---

## Formatting Standards

### Colors

| Element | Color | Hex |
|---------|-------|-----|
| Input cells | Yellow | #FFFF99 |
| Formula/linked cells | Light blue | #E6F2FF |
| Q1 quadrant | Light green | #C6EFCE |
| Q2 quadrant | Light orange | #FFEB9C |
| Q3 quadrant | Light blue | #BDD7EE |
| Q4 quadrant | Light gray | #D9D9D9 |

### Chart Formatting

- Data points: 10pt circles
- Labels: 8pt, positioned to avoid overlap
- Gridlines: Light gray, dashed
- Quadrant dividers: Black, solid, 2pt

---

## Testing Checklist

Before marking this file complete:

- [ ] Gap Input accepts data correctly
- [ ] Priority Scoring dropdowns work
- [ ] Priority Score formula calculates correctly
- [ ] Quadrant assignment formula works
- [ ] Scatter chart plots gaps correctly
- [ ] Quadrant lines display properly
- [ ] Action Roadmap sorts by priority
- [ ] Resource Planning summaries calculate
- [ ] All links between tabs work
- [ ] File opens in Excel 2016
- [ ] File opens in Google Sheets (acceptable)

---

## Build Notes

### Dependencies

This file depends on output from the Readiness Scorecard. Users will manually copy gaps or reference the scorecard file.

### Recommended Build Order

1. Create Config tab with all lookups
2. Build Gap Input structure
3. Build Priority Scoring with formulas
4. Create Quadrant Matrix chart
5. Build Action Roadmap with sorting
6. Create Resource Planning summaries
7. Add Definitions content
8. Apply formatting
9. Test thoroughly

### Estimated Build Time

- Experienced Excel developer: 6-8 hours
- Using Python/openpyxl: 4-6 hours
- Manual build: 10-15 hours

---

*This specification should be read alongside the Toolkit Contents Overview (00-TOOLKIT-CONTENTS-OVERVIEW.md) and the Scorecard specification (01-buyer-requirement-readiness-scorecard-spec.md).*
