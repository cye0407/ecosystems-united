# Buyer Requirement Readiness Scorecard - Specification

**Component:** 1 of 6  
**File Type:** Excel (.xlsx)  
**Primary File:** `Buyer-Requirement-Readiness-Scorecard.xlsx`  
**Build Priority:** 1 (Critical - build first)

---

## Purpose

The Readiness Scorecard is the core assessment tool. Users evaluate their current capability across 12 sustainability categories that buyers commonly request. The tool generates an overall readiness score (0-100%), identifies gaps, and highlights quick wins.

---

## Workbook Structure

### Tab Order

1. **Instructions** - How to use the scorecard
2. **Assessment** - Main data entry (12 categories)
3. **Results Dashboard** - Visual summary and overall score
4. **Gap Summary** - Complete list of identified gaps
5. **Quick Wins** - Filtered low-effort opportunities
6. **Definitions** - Category explanations
7. **Scoring Guide** - What each score level means
8. **Config** (hidden) - Lookup tables, weights, settings

---

## Tab 1: Instructions

### Content

```
BUYER REQUIREMENT READINESS SCORECARD
=====================================

WHAT THIS TOOL DOES
-------------------
This scorecard evaluates your capability to respond to buyer sustainability 
data requests across 12 common requirement categories. You'll get:

• Overall readiness score (0-100%)
• Category-by-category breakdown
• Gap identification with severity ratings
• Quick win opportunities

HOW TO COMPLETE THE ASSESSMENT
------------------------------

Step 1: Go to the "Assessment" tab

Step 2: For each of the 12 categories, answer:
   a) Data Availability - What level of data can you provide?
   b) Documentation Status - Is your methodology documented?
   c) Evidence Available - Can you provide supporting evidence?
   d) Response Readiness - Could you respond within 2 weeks?

Step 3: Use the dropdown menus to select your answers
        (Yellow cells = your input required)

Step 4: Review your results on the "Results Dashboard" tab

Step 5: Check "Gap Summary" for detailed gap analysis

Step 6: Review "Quick Wins" for easy improvement opportunities

TIPS FOR ACCURATE ASSESSMENT
----------------------------
• Be honest - overestimating hurts you later when buyers verify
• "Partial data" is better than "no data" - acknowledge what you have
• Consider what you could provide, not just what you routinely track
• When uncertain, choose the lower score

UNDERSTANDING YOUR RESULTS
--------------------------
Overall Score:
  80-100%  = Well prepared for buyer requests
  60-79%   = Moderate readiness, key gaps exist
  40-59%   = Significant gaps, prioritize improvement
  0-39%    = Major capability building needed

Time Required: 2-3 hours for thorough assessment

NEXT STEPS AFTER ASSESSMENT
---------------------------
1. Review Gap Summary for all identified gaps
2. Use Gap Analysis Matrix to prioritize which gaps to close first
3. Use Timeline Planning Tool to schedule gap closure
4. If you need to respond to buyers NOW, use Response Templates

QUESTIONS?
----------
Email: [support email]
```

### Formatting

- Header: Bold, 16pt, company color
- Section headers: Bold, 12pt
- Body text: 11pt, left-aligned
- Background: Light gray or white
- No input cells on this tab

---

## Tab 2: Assessment

### Layout Overview

```
┌─────────────────────────────────────────────────────────────────────────────┐
│ Row 1: Header - "BUYER REQUIREMENT READINESS ASSESSMENT"                    │
│ Row 2: Subheader - "Complete all 12 categories below"                       │
│ Row 3: Blank                                                                │
├─────────────────────────────────────────────────────────────────────────────┤
│ Row 4: Column Headers                                                       │
│   A: Category | B: Sub-requirement | C: Data Availability | D: Documentation│
│   E: Evidence Available | F: Response Ready | G: Category Score | H: Weight │
│   I: Weighted Score | J: Notes                                              │
├─────────────────────────────────────────────────────────────────────────────┤
│ Rows 5-65: Assessment categories (expandable sections)                      │
├─────────────────────────────────────────────────────────────────────────────┤
│ Row 66+: Summary section                                                    │
│   - Total weighted score                                                    │
│   - Maximum possible score                                                  │
│   - Overall readiness percentage                                            │
└─────────────────────────────────────────────────────────────────────────────┘
```

### Column Definitions

| Column | Header | Width | Purpose |
|--------|--------|-------|---------|
| A | Category | 25 | Category name (merged for multi-row categories) |
| B | Sub-requirement | 40 | Specific item being assessed |
| C | Data Availability | 15 | Dropdown: data level (0-5 scale) |
| D | Documentation | 15 | Dropdown: Yes/Partial/No |
| E | Evidence Available | 15 | Dropdown: Yes/Partial/No |
| F | Response Ready (2 weeks) | 15 | Dropdown: Yes/Partial/No |
| G | Item Score | 12 | Formula: calculated from C, D, E, F |
| H | Weight | 8 | Buyer priority weight (from Config) |
| I | Weighted Score | 12 | Formula: G × H |
| J | Notes | 30 | Free text for user notes |

### Assessment Categories Detail

#### Category 1: Carbon Footprint Data (Rows 5-9)

| Row | Sub-requirement | Weight |
|-----|-----------------|--------|
| 5 | Scope 1 emissions (direct operational) | 1.5 |
| 6 | Scope 2 emissions (purchased electricity/energy) | 1.5 |
| 7 | Scope 3 upstream (purchased goods, transportation) | 1.2 |
| 8 | Emission calculation methodology | 1.3 |
| 9 | Year-over-year trend data | 1.0 |

#### Category 2: Energy Consumption (Rows 11-15)

| Row | Sub-requirement | Weight |
|-----|-----------------|--------|
| 11 | Total energy use by source | 1.3 |
| 12 | Renewable vs. non-renewable breakdown | 1.2 |
| 13 | Energy intensity metrics (per unit output) | 1.1 |
| 14 | Historical trend data | 1.0 |
| 15 | Reduction targets and progress | 1.1 |

#### Category 3: Water Use (Rows 17-21)

| Row | Sub-requirement | Weight |
|-----|-----------------|--------|
| 17 | Source tracking (municipal, ground, surface, rain) | 1.2 |
| 18 | Process-level consumption data | 1.1 |
| 19 | Water intensity metrics | 1.1 |
| 20 | Seasonal variation documentation | 0.9 |
| 21 | Water stress risk assessment | 1.0 |

#### Category 4: Waste Management (Rows 23-27)

| Row | Sub-requirement | Weight |
|-----|-----------------|--------|
| 23 | Total waste by stream (organic, recyclable, hazardous, landfill) | 1.2 |
| 24 | Diversion rates (% recycled/composted) | 1.1 |
| 25 | Waste reduction initiatives and results | 1.0 |
| 26 | Hazardous waste compliance documentation | 1.3 |
| 27 | Waste tracking system | 1.0 |

#### Category 5: Sustainable Sourcing (Rows 29-33)

| Row | Sub-requirement | Weight |
|-----|-----------------|--------|
| 29 | Certified input usage (organic, sustainable, verified) | 1.2 |
| 30 | Supply chain traceability | 1.3 |
| 31 | Supplier sustainability requirements | 1.1 |
| 32 | Deforestation-free commitments | 1.0 |
| 33 | Origin documentation for key inputs | 1.2 |

#### Category 6: Biodiversity & Land Use (Rows 35-39)

| Row | Sub-requirement | Weight |
|-----|-----------------|--------|
| 35 | Operational land area breakdown | 1.0 |
| 36 | Conservation area allocation | 1.0 |
| 37 | Biodiversity protection measures | 1.1 |
| 38 | Ecologically sensitive area management | 1.0 |
| 39 | Soil health monitoring | 1.1 |

#### Category 7: Chemical Use & Management (Rows 41-45)

| Row | Sub-requirement | Weight |
|-----|-----------------|--------|
| 41 | Application tracking (products, rates, locations) | 1.2 |
| 42 | Integrated pest management practices | 1.1 |
| 43 | Chemical storage and handling compliance | 1.2 |
| 44 | Reduction plans and progress | 1.0 |
| 45 | Restricted substance compliance | 1.1 |

#### Category 8: Animal Welfare (Rows 47-50)

*Note: Mark N/A if not applicable to operation*

| Row | Sub-requirement | Weight |
|-----|-----------------|--------|
| 47 | Housing and living conditions documentation | 1.1 |
| 48 | Health and veterinary care protocols | 1.1 |
| 49 | Antibiotic use policy and tracking | 1.2 |
| 50 | Welfare certification status | 1.0 |

#### Category 9: Labor & Social Practices (Rows 52-56)

| Row | Sub-requirement | Weight |
|-----|-----------------|--------|
| 52 | Fair labor compliance (wages, hours, conditions) | 1.3 |
| 53 | Health and safety programs | 1.2 |
| 54 | Worker training documentation | 1.0 |
| 55 | Incident tracking and reporting | 1.1 |
| 56 | Social compliance certifications | 1.0 |

#### Category 10: Climate Adaptation (Rows 58-61)

| Row | Sub-requirement | Weight |
|-----|-----------------|--------|
| 58 | Climate risk assessment | 1.1 |
| 59 | Adaptation measures implemented | 1.0 |
| 60 | Business continuity planning | 1.0 |
| 61 | Yield/productivity stability data | 0.9 |

#### Category 11: Certifications & Standards (Rows 63-66)

| Row | Sub-requirement | Weight |
|-----|-----------------|--------|
| 63 | Current certifications held | 1.2 |
| 64 | Audit history and compliance record | 1.1 |
| 65 | Standards alignment (even if not certified) | 1.0 |
| 66 | Certification roadmap | 0.9 |

#### Category 12: Sustainability Governance (Rows 68-72)

| Row | Sub-requirement | Weight |
|-----|-----------------|--------|
| 68 | Sustainability policy documentation | 1.1 |
| 69 | Responsible party assignment | 1.0 |
| 70 | Performance review frequency | 1.0 |
| 71 | Improvement targets and tracking | 1.1 |
| 72 | Stakeholder engagement practices | 0.9 |

### Dropdown Options

#### Column C: Data Availability

| Value | Label | Score |
|-------|-------|-------|
| 0 | No data | 0 |
| 1 | Rough estimates only | 1 |
| 2 | Partial data (some metrics) | 2 |
| 3 | Complete data (unverified) | 3 |
| 4 | Complete data (internally verified) | 4 |
| 5 | Complete data (third-party verified) | 5 |
| N/A | Not applicable to operation | (excluded from scoring) |

#### Columns D, E, F: Documentation/Evidence/Response Ready

| Value | Label | Multiplier |
|-------|-------|------------|
| Yes | Yes | 1.0 |
| Partial | Partial | 0.7 |
| No | No | 0.4 |
| N/A | Not applicable | (excluded) |

### Scoring Formula (Column G)

```
Item Score = Data Availability Score × ((Documentation + Evidence + Response Ready) / 3)

Where:
- Data Availability Score = 0-5 from dropdown
- Documentation/Evidence/Response = multiplier from dropdown (1.0, 0.7, or 0.4)
- Maximum possible item score = 5 × 1.0 = 5.0
```

**Example:**
- Data Availability: 3 (Complete, unverified)
- Documentation: Yes (1.0)
- Evidence: Partial (0.7)
- Response Ready: No (0.4)
- Item Score = 3 × ((1.0 + 0.7 + 0.4) / 3) = 3 × 0.7 = 2.1

### Weighted Score Formula (Column I)

```
Weighted Score = Item Score × Weight
```

### Summary Section (Row 75+)

| Row | Cell A | Cell B | Formula |
|-----|--------|--------|---------|
| 75 | Total Weighted Score | [value] | =SUM(I5:I72) excluding N/A |
| 76 | Maximum Possible Score | [value] | =SUM(applicable weights × 5) |
| 77 | **Overall Readiness** | [percentage] | =B75/B76 formatted as % |
| 78 | Categories Assessed | [count] | =COUNT of non-N/A categories |
| 79 | Gaps Identified | [count] | =COUNT where score < 2.5 |
| 80 | Critical Gaps | [count] | =COUNT where score < 1.5 |

### Formatting Requirements

#### Input Cells (Columns C, D, E, F, J)
- Background: Yellow (#FFFF99)
- Border: Thin black
- Data validation: Dropdown lists
- Unlocked for editing

#### Formula Cells (Columns G, I)
- Background: Light blue (#E6F2FF)
- Border: Thin black
- Locked (protected)

#### Category Headers (Column A merged rows)
- Background: Dark blue (#1F4E79)
- Font: White, bold, 11pt
- Vertical alignment: Center

#### Column Headers (Row 4)
- Background: Medium blue (#2E75B6)
- Font: White, bold, 10pt
- Text wrap: Enabled
- Freeze panes: Row 4 frozen

---

## Tab 3: Results Dashboard

### Layout

```
┌─────────────────────────────────────────────────────────────────────────────┐
│ READINESS ASSESSMENT RESULTS                                                │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│  ┌─────────────────────┐    ┌─────────────────────────────────────────┐    │
│  │                     │    │                                         │    │
│  │   OVERALL SCORE     │    │     SCORE INTERPRETATION               │    │
│  │                     │    │                                         │    │
│  │      67%            │    │  Your operation has MODERATE readiness │    │
│  │                     │    │  for buyer sustainability requests.    │    │
│  │   ████████░░        │    │                                         │    │
│  │                     │    │  Key gaps exist that should be         │    │
│  └─────────────────────┘    │  addressed before buyer requests       │    │
│                             │  arrive.                                │    │
│                             └─────────────────────────────────────────┘    │
│                                                                             │
├─────────────────────────────────────────────────────────────────────────────┤
│ CATEGORY BREAKDOWN                                                          │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│  Category                    Score    Status     Bar                        │
│  ─────────────────────────────────────────────────────                     │
│  Carbon Footprint            45%      ⚠ GAP      ████░░░░░░                │
│  Energy Consumption          78%      ✓ OK       ███████░░░                │
│  Water Use                   62%      ⚠ GAP      ██████░░░░                │
│  Waste Management            85%      ✓ OK       ████████░░                │
│  Sustainable Sourcing        34%      ✗ CRITICAL ███░░░░░░░                │
│  Biodiversity & Land         71%      ✓ OK       ███████░░░                │
│  Chemical Management         55%      ⚠ GAP      █████░░░░░                │
│  Animal Welfare              N/A      —          ——————————                │
│  Labor & Social              82%      ✓ OK       ████████░░                │
│  Climate Adaptation          48%      ⚠ GAP      ████░░░░░░                │
│  Certifications              67%      ⚠ GAP      ██████░░░░                │
│  Sustainability Governance   58%      ⚠ GAP      █████░░░░░                │
│                                                                             │
├─────────────────────────────────────────────────────────────────────────────┤
│ SUMMARY STATISTICS                                                          │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│  Categories Assessed:  11 of 12                                             │
│  Categories Meeting Threshold (>70%):  4                                    │
│  Categories with Gaps (40-70%):  5                                          │
│  Critical Gaps (<40%):  2                                                   │
│  Quick Win Opportunities:  7                                                │
│                                                                             │
├─────────────────────────────────────────────────────────────────────────────┤
│ PRIORITY ACTIONS                                                            │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│  1. Sustainable Sourcing - CRITICAL: Build supply chain traceability       │
│  2. Carbon Footprint - GAP: Establish Scope 1 & 2 measurement              │
│  3. Climate Adaptation - GAP: Complete climate risk assessment             │
│                                                                             │
│  → See "Gap Summary" tab for complete gap analysis                         │
│  → See "Quick Wins" tab for easy improvement opportunities                 │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

### Charts Required

1. **Overall Score Gauge** (or large percentage with progress bar)
   - Conditional formatting: Red (<40%), Yellow (40-70%), Green (>70%)

2. **Category Breakdown Bar Chart**
   - Horizontal bars
   - Color-coded by status
   - Sorted by score (lowest first)

3. **Pie Chart: Gap Distribution**
   - Segments: Meeting threshold / Gap / Critical gap

### Formulas

All data pulled from Assessment tab via formulas. No manual entry on this tab.

---

## Tab 4: Gap Summary

### Layout

| Column | Header | Content |
|--------|--------|---------|
| A | Category | Category name |
| B | Sub-requirement | Specific item |
| C | Current Score | Score from Assessment |
| D | Gap Severity | Critical / High / Medium / Low |
| E | Issue Description | Auto-generated based on score |
| F | Buyer Impact | How this gap affects buyer perception |
| G | Recommended Action | General guidance |
| H | Estimated Effort | Low / Medium / High |
| I | Priority Rank | Auto-calculated |

### Filtering Logic

- Only show rows where Current Score < threshold (default 3.5)
- Auto-sorted by Gap Severity (Critical first)
- Exclude N/A items

### Gap Severity Logic

| Score Range | Severity | Color |
|-------------|----------|-------|
| 0 - 1.5 | Critical | Red (#FF6B6B) |
| 1.5 - 2.5 | High | Orange (#FFA500) |
| 2.5 - 3.5 | Medium | Yellow (#FFD93D) |
| 3.5 - 4.0 | Low | Light Yellow (#FFFACD) |

### Auto-Generated Descriptions

Example formulas for Issue Description (Column E):

```
=IF(C5<1, "No data available for this requirement",
 IF(C5<2, "Only rough estimates available - insufficient for buyer requests",
 IF(C5<3, "Partial data exists but gaps remain",
 IF(C5<3.5, "Data exists but documentation or verification incomplete",
 "Minor improvements needed"))))
```

---

## Tab 5: Quick Wins

### Purpose

Filter gaps to show only those with low estimated effort - items that can be addressed quickly to improve score.

### Criteria for Quick Wins

Quick win = Gap exists AND (Documentation issue OR Evidence issue) AND Data Availability ≥ 3

Logic: If you HAVE the data but just haven't documented it or organized evidence, that's easy to fix.

### Layout

Same as Gap Summary but filtered to quick wins only, sorted by impact (highest first).

### Additional Column

| Column | Header | Content |
|--------|--------|---------|
| J | Quick Fix | Specific action to close this gap |

---

## Tab 6: Definitions

### Content

Full definitions for each of the 12 assessment categories. Each category includes:

1. **What it covers** - Scope of the category
2. **Why buyers ask** - Business rationale
3. **What "good" looks like** - Description of high-scoring capability
4. **Common gaps** - Typical issues operations face
5. **Examples** - Concrete illustrations

### Format

- One category per section
- Expandable/collapsible rows (grouped)
- Printable format

---

## Tab 7: Scoring Guide

### Content

Detailed explanation of the 0-5 scoring scale with examples for each level.

| Score | Label | General Definition | Carbon Example | Energy Example |
|-------|-------|-------------------|----------------|----------------|
| 0 | No data | Cannot provide any information | No emissions tracking | No energy records |
| 1 | Rough estimates | Guesses or industry averages only | Using sector averages | Estimating from bills |
| 2 | Partial data | Some metrics tracked, gaps remain | Scope 1 only, no Scope 2 | Electricity only, no fuel |
| 3 | Complete (unverified) | All metrics tracked, not yet verified | All scopes calculated, internal review | All sources tracked, unaudited |
| 4 | Complete (internal verification) | Tracked with internal quality checks | Methodology documented, internally reviewed | Meters calibrated, data validated |
| 5 | Complete (third-party verified) | External audit or certification | Third-party verification or ISO certified | Verified by auditor |

---

## Tab 8: Config (Hidden)

### Purpose

Backend data for dropdowns, weights, thresholds, and lookup tables. Hidden from users.

### Contents

1. **Dropdown lists** - All options for data validation
2. **Weight table** - Buyer priority weights by sub-requirement
3. **Thresholds** - Score cutoffs for status classifications
4. **Text lookups** - Auto-generated descriptions and recommendations
5. **Version info** - Product version, last updated date

---

## Formatting Standards

### Colors

| Element | Color | Hex |
|---------|-------|-----|
| Input cells | Yellow | #FFFF99 |
| Formula cells | Light blue | #E6F2FF |
| Category headers | Dark blue | #1F4E79 |
| Column headers | Medium blue | #2E75B6 |
| Critical status | Red | #FF6B6B |
| Gap status | Orange/Yellow | #FFA500 |
| OK status | Green | #6BCB77 |

### Fonts

- Headers: Calibri Bold, 11-16pt
- Body: Calibri Regular, 10-11pt
- Numbers: Calibri, right-aligned

### Protection

- All formula cells: Locked
- All input cells: Unlocked
- Sheet protection: Enabled, no password
- Structure protection: Enabled (prevent tab deletion)

### Print Settings

- Orientation: Landscape
- Fit to: 1 page wide
- Headers/footers: Include tab name and page numbers
- Repeat rows: Header rows on each page

---

## Data Validation Rules

### Dropdown Validation (Columns C, D, E, F)

- Source: Named ranges in Config tab
- Error alert: Stop, "Please select from the dropdown list"
- Input message: Brief explanation of the field

### Number Validation (Notes column)

- No validation (free text)
- Max length: 500 characters recommended

---

## Testing Checklist

Before marking this file complete:

- [ ] All dropdowns work correctly
- [ ] All formulas calculate without errors
- [ ] Conditional formatting displays correctly
- [ ] Charts update when data changes
- [ ] Gap Summary filters correctly
- [ ] Quick Wins logic works
- [ ] Print preview looks professional
- [ ] File opens in Excel 2016
- [ ] File opens in Google Sheets (acceptable formatting)
- [ ] Protection allows input but prevents formula editing
- [ ] N/A handling works (excluded from calculations)
- [ ] Overall score calculates correctly (spot check)
- [ ] Dashboard displays correct interpretation text

---

## File Metadata

- **Filename:** `Buyer-Requirement-Readiness-Scorecard.xlsx`
- **Author:** Ecosystems United
- **Subject:** Buyer Sustainability Readiness Assessment
- **Keywords:** sustainability, buyer requirements, assessment, scorecard, CSRD
- **Category:** Assessment Tools

---

## Build Notes

### Recommended Build Approach

1. Create Config tab first with all lookup data
2. Build Assessment tab structure and formulas
3. Add data validation dropdowns
4. Build Results Dashboard with charts
5. Create Gap Summary with filtering
6. Create Quick Wins with logic
7. Add Definitions and Scoring Guide content
8. Apply formatting throughout
9. Set up protection
10. Test thoroughly

### Estimated Build Time

- Experienced Excel developer: 8-12 hours
- Using Python/openpyxl: 6-8 hours
- Manual build: 15-20 hours

---

*This specification should be read alongside the Toolkit Contents Overview (00-TOOLKIT-CONTENTS-OVERVIEW.md) for context on how this component fits with the other toolkit files.*
