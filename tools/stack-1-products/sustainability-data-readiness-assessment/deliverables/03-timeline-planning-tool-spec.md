# Timeline Planning Tool - Specification

**Component:** 3 of 6  
**File Type:** Excel (.xlsx) + PDF  
**Primary File:** `Timeline-Planning-Tool.xlsx`  
**Build Priority:** 2 (Build after Scorecard and Gap Matrix)

---

## Purpose

The Timeline Planning Tool helps users map their gap closure activities to a calendar. It supports three scenarios (proactive, early warning, reactive) and provides Gantt-style visualization with progress tracking.

---

## Workbook Structure

### Tab Order

1. Instructions
2. Scenario Selection
3. Key Dates
4. Gap Import
5. Milestone Mapping
6. Gantt View
7. Progress Tracker
8. Scenario Comparison
9. Config (hidden)

---

## Tab 1: Instructions

How to use the timeline planning tool. Cover: which scenario to choose, how to enter key dates, how to map milestones, how to track progress. Estimated time: 1-2 hours initial setup, 15-30 min weekly updates.

---

## Tab 2: Scenario Selection

### Dropdown

| Value | Label |
|-------|-------|
| 1 | Proactive Building (6-12 months) |
| 2 | Early Warning (3-6 months) |
| 3 | Reactive Response (Immediate + 90 days) |

### Scenario Details

**Scenario 1: Proactive (6-12 months)**
- Phase 1 (Mo 1-3): Q1 gaps + start baselines
- Phase 2 (Mo 4-6): Core metrics + documentation
- Phase 3 (Mo 7-12): Remaining gaps + verification
- Target: 80%+ readiness

**Scenario 2: Early Warning (3-6 months)**
- Phase 1 (Mo 1-2): All Q1 gaps + critical Q2
- Phase 2 (Mo 3-4): Complete Q2 gaps
- Phase 3 (Mo 5-6): Finalize documentation
- Target: 65%+ readiness

**Scenario 3: Reactive (Immediate + 90 days)**
- Week 1: Triage what you have
- Week 2-4: Submit partial response
- Months 2-4: Build missing capability
- Target: Honest response + improvement

---

## Tab 3: Key Dates

### Sections

1. **Planning Start Date** - When timeline begins
2. **Buyer Deadlines** - Up to 10 entries with date, buyer name, request type, notes
3. **Certification/Audit Windows** - Up to 5 entries
4. **Regulatory Compliance Dates** - Up to 5 entries
5. **Internal Milestones** - Budget cycles, reviews, etc.

### Dropdown Options

**Request Type:** Questionnaire, Data request, Audit, Certification review, Contract renewal, Other

**Status:** Confirmed, Expected, Possible, Completed

### Summary Calculations

- First deadline date
- Days until first deadline
- Total deadlines entered
- Conflict alerts (multiple deadlines within 2 weeks)

---

## Tab 4: Gap Import

Copy gaps from Gap Analysis Matrix. Columns:

| Column | Content |
|--------|---------|
| A | Gap ID |
| B | Category |
| C | Sub-requirement |
| D | Quadrant (Q1/Q2/Q3/Q4) |
| E | Priority Score |
| F | Est. Timeline |
| G | Dependencies (other Gap IDs) |

---

## Tab 5: Milestone Mapping

### Columns

| Column | Header | Input |
|--------|--------|-------|
| A | Gap ID | Linked |
| B | Sub-requirement | Linked |
| C | Start Date | Date |
| D | Milestone 1 | Date + description |
| E | Milestone 2 | Date + description |
| F | Milestone 3 | Date + description |
| G | Target Complete | Date |
| H | Phase | Dropdown: 1/2/3 |
| I | Owner | Text |
| J | Notes | Text |

### Milestone Templates (in Config)

Pre-written milestones by gap type:

**Carbon/Energy/Water gaps:**
1. Gather source data
2. Calculate metrics
3. Document methodology
4. Internal review

**Documentation gaps:**
1. Identify existing practices
2. Draft documentation
3. Review and finalize

**Certification gaps:**
1. Gap assessment
2. Prepare materials
3. Schedule audit
4. Complete audit
5. Address findings

---

## Tab 6: Gantt View

### Chart Specifications

**Type:** Horizontal bar chart (Gantt style)

**Y-axis:** Gap IDs (sorted by start date or priority)

**X-axis:** Months (or weeks for reactive scenario)

**Bars:**
- Length = duration from start to complete
- Color by quadrant or phase
- Milestones shown as diamonds on bar

**Key Dates:**
- Vertical lines for buyer deadlines
- Red for critical, orange for important

**Today Line:**
- Vertical dashed line showing current date

### Visual Elements

- Phase dividers (horizontal bands)
- Dependency arrows (optional, if complex)
- Legend showing colors

### Conditional Formatting

- Past-due items: Red bar
- At-risk (within 2 weeks, not started): Orange bar
- On track: Green bar
- Complete: Gray bar

---

## Tab 7: Progress Tracker

### Layout

| Column | Header | Content |
|--------|--------|---------|
| A | Gap ID | Linked |
| B | Sub-requirement | Linked |
| C | Target Complete | Linked |
| D | Current Status | Dropdown |
| E | % Complete | Number (0-100) |
| F | Days Remaining | Formula |
| G | Risk Flag | Formula |
| H | Blockers | Text |
| I | Last Updated | Date |
| J | Notes | Text |

### Status Dropdown

| Value | Color |
|-------|-------|
| Not Started | Gray |
| In Progress | Blue |
| On Track | Green |
| At Risk | Orange |
| Blocked | Red |
| Complete | Dark Green |
| Deferred | Light Gray |

### Risk Flag Formula

```
=IF(D="Complete", "✓",
 IF(AND(F<14, E<50), "⚠ AT RISK",
 IF(AND(F<7, E<80), "⚠ AT RISK",
 IF(F<0, "✗ OVERDUE", "OK"))))
```

### Summary Dashboard (top of tab)

- Total gaps: [count]
- Complete: [count] ([%])
- On track: [count]
- At risk: [count]
- Overdue: [count]
- Overall progress: [weighted %]

---

## Tab 8: Scenario Comparison

### Purpose

Show side-by-side comparison of how the same gaps would be scheduled under different scenarios.

### Layout

| Gap | Proactive | Early Warning | Reactive |
|-----|-----------|---------------|----------|
| G002 | Feb (Mo 2) | Jan (Mo 1) | Week 2 |
| G001 | Apr (Mo 4) | Feb (Mo 2) | Month 2 |
| G005 | Aug (Mo 8) | May (Mo 5) | Month 4 |

### Use Case

Helps users understand tradeoffs between scenarios and what they give up by choosing a faster timeline.

---

## Tab 9: Config (Hidden)

### Contents

1. Milestone template library
2. Phase definitions by scenario
3. Risk calculation parameters
4. Color codes
5. Dropdown options
6. Calendar helper formulas

---

## Supporting Files

### Timeline-Planning-Guide.pdf

10-15 page PDF covering:

1. **How to think about timeline planning**
   - Why planning matters
   - Common mistakes

2. **Choosing your scenario**
   - Decision tree
   - When to switch scenarios

3. **Working with dependencies**
   - What blocks what
   - Critical path basics

4. **Adjusting your plan**
   - When to re-plan
   - How to communicate changes

5. **Examples**
   - Sample timeline for each scenario

### Milestone-Template-Library.pdf

Reference document with pre-written milestones for common gap types:

- Carbon footprint measurement
- Energy tracking setup
- Water monitoring implementation
- Waste management documentation
- Certification preparation
- Policy development
- Training program creation
- Supplier engagement

---

## Formatting Standards

### Colors

| Element | Hex |
|---------|-----|
| Phase 1 | #C6EFCE (light green) |
| Phase 2 | #FFEB9C (light yellow) |
| Phase 3 | #BDD7EE (light blue) |
| Complete | #D9D9D9 (gray) |
| At Risk | #FFC7CE (light red) |
| Overdue | #FF6B6B (red) |

### Gantt Bar Heights

- Standard: 20pt
- Spacing: 5pt between bars

---

## Testing Checklist

- [ ] Scenario selection updates visible phases
- [ ] Key dates display on Gantt
- [ ] Milestone mapping links correctly
- [ ] Gantt chart renders properly
- [ ] Progress tracker formulas work
- [ ] Risk flags calculate correctly
- [ ] Scenario comparison populates
- [ ] Works in Excel 2016
- [ ] Acceptable in Google Sheets

---

## Build Notes

### Dependencies

- Uses gap data from Gap Analysis Matrix
- Uses key dates entered by user

### Estimated Build Time

- Experienced developer: 6-8 hours
- Python/openpyxl: 5-7 hours
- Manual: 12-15 hours

---

*This specification should be read alongside the Toolkit Contents Overview and Gap Analysis Matrix specification.*
