# Agent Instructions: Building the Buyer Scrutiny Readiness Assessment Files

**Purpose:** Step-by-step instructions for building the actual deliverable files from specifications.

---

## Files to Build

| Priority | File | Type | Spec Doc | Est. Hours |
|----------|------|------|----------|------------|
| 1 | Buyer-Requirement-Readiness-Scorecard.xlsx | Excel | 01-spec | 8-12 |
| 1 | Gap-Analysis-Prioritization-Matrix.xlsx | Excel | 02-spec | 6-8 |
| 1 | Response-Template-Library.docx | Word | 04-spec | 4-6 |
| 2 | Timeline-Planning-Tool.xlsx | Excel | 03-spec | 6-8 |
| 2 | Buyer-Communication-Strategy-Guide.pdf | PDF | 05-spec | 8-12 |
| 3 | Benchmark-Comparison-Database.xlsx | Excel | 06-spec | 6-8 |
| 3 | Supporting PDFs | PDF | Various | 4-6 |
| 4 | Quick Start materials | PDF | 00-overview | 2-3 |

**Total: 44-63 hours**

---

## Build Order

1. **Readiness Scorecard** - Core assessment tool
2. **Gap Analysis Matrix** - Uses Scorecard output
3. **Response Templates** - Standalone high value
4. **Timeline Planning Tool** - Uses Gap Matrix output
5. **Communication Strategy Guide** - Reference document
6. **Benchmark Database** - Comparative context
7. **Supporting PDFs** - Instructions and guides
8. **Quick Start & Packaging** - Final assembly

---

## Recommended Approach: Python + openpyxl

### Setup

```bash
pip install openpyxl python-docx
```

### Project Structure

```
/build/
├── scripts/
│   ├── build_scorecard.py
│   ├── build_gap_matrix.py
│   ├── build_timeline.py
│   ├── build_benchmark.py
│   └── utils/
│       ├── styles.py
│       └── validation.py
├── output/
└── test/
```

---

## Excel Build Pattern

### 1. Create Workbook and Tabs

```python
from openpyxl import Workbook
wb = Workbook()
wb.active.title = 'Instructions'
wb.create_sheet('Assessment')
# ... etc
```

### 2. Build Config Tab (Hidden)

Always build Config first with:
- Dropdown option lists
- Lookup values
- Weights and thresholds
- Formula parameters

### 3. Add Data Validation

```python
from openpyxl.worksheet.datavalidation import DataValidation
dv = DataValidation(type="list", formula1='"Option1,Option2,Option3"')
ws.add_data_validation(dv)
dv.add('C5:C50')
```

### 4. Add Formulas

Use string formulas referencing cells:
```python
ws['G5'] = '=IF(C5="N/A","",VLOOKUP(C5,Config!$A$1:$B$7,2,FALSE)*AVERAGE(...))'
```

### 5. Apply Formatting

```python
from openpyxl.styles import Font, PatternFill, Protection

# Input cells: Yellow, unlocked
input_fill = PatternFill(start_color="FFFF99", fill_type="solid")
cell.fill = input_fill
cell.protection = Protection(locked=False)

# Formula cells: Light blue, locked
formula_fill = PatternFill(start_color="E6F2FF", fill_type="solid")
```

### 6. Add Charts

```python
from openpyxl.chart import BarChart, Reference
chart = BarChart()
# Configure...
ws.add_chart(chart, "A15")
```

### 7. Set Protection

```python
ws.protection.sheet = True
ws.protection.password = None  # No password
```

### 8. Save and Test

```python
wb.save('output/filename.xlsx')
```

---

## Word Document Build Pattern

```python
from docx import Document
from docx.shared import Pt

doc = Document()
doc.add_heading('Title', 0)
doc.add_heading('Section', level=1)
doc.add_paragraph('Content...')

# Bold placeholders
p = doc.add_paragraph()
p.add_run('[PLACEHOLDER]').bold = True

doc.save('output/filename.docx')
```

---

## Testing Protocol

### Excel Files

1. Open in Excel (not just Python)
2. Enter test data in all input fields
3. Verify all formulas calculate correctly
4. Test all dropdowns
5. Check charts update with data
6. Try invalid inputs (should be blocked)
7. Verify protection (can't edit formulas)
8. Print preview
9. Save, close, reopen - still works?
10. Test in Excel 2016 and Google Sheets

### Word Files

1. Open in Word
2. Check formatting consistency
3. Verify all sections present
4. Test in Google Docs
5. Export to PDF and check

---

## Quality Checklist

### All Files

- [ ] Consistent branding/colors
- [ ] Clear file names
- [ ] Instructions included
- [ ] Tested thoroughly
- [ ] Works in target software versions

### Excel Specific

- [ ] Input cells yellow and unlocked
- [ ] Formula cells locked
- [ ] Dropdowns work
- [ ] Formulas calculate
- [ ] Charts display
- [ ] Sheet protection enabled

### Word Specific

- [ ] Consistent formatting
- [ ] Placeholders clearly marked
- [ ] Sections logically organized
- [ ] PDF export clean

---

## Final Package Structure

```
Buyer-Scrutiny-Readiness-Assessment-v1.0/
├── 00-START-HERE/
│   ├── Quick-Start-Guide.pdf
│   └── README.txt
├── 01-Readiness-Scorecard/
│   └── Buyer-Requirement-Readiness-Scorecard.xlsx
├── 02-Gap-Analysis/
│   └── Gap-Analysis-Prioritization-Matrix.xlsx
├── 03-Timeline-Planning/
│   └── Timeline-Planning-Tool.xlsx
├── 04-Response-Templates/
│   ├── Response-Template-Library.docx
│   └── Response-Template-Library.pdf
├── 05-Communication-Strategy/
│   └── Buyer-Communication-Strategy-Guide.pdf
├── 06-Benchmarks/
│   └── Benchmark-Comparison-Database.xlsx
└── LICENSE.txt
```

ZIP as: `Buyer-Scrutiny-Readiness-Assessment-v1.0.zip`

---

## Common Issues and Solutions

### Formulas Don't Calculate

- Check cell references are correct
- Verify Config tab data is in expected location
- Test formula in Excel directly first

### Dropdowns Empty

- Verify Data Validation source range
- Check Config tab has data
- Try explicit list vs. range reference

### Charts Don't Update

- Verify data range references
- Check for hidden/filtered rows
- Refresh chart data

### Protection Blocks Input Cells

- Verify input cells have `Protection(locked=False)`
- Set protection AFTER unlocking input cells

### Google Sheets Compatibility

- Avoid Excel-only functions (FILTER, XLOOKUP)
- Use simpler formulas where possible
- Test after any formula changes

---

## Estimated Build Timeline

| Phase | Tasks | Hours |
|-------|-------|-------|
| 1 | Scorecard + Gap Matrix + Templates | 18-26 |
| 2 | Timeline + Strategy Guide | 14-20 |
| 3 | Benchmark + Supporting PDFs | 10-14 |
| 4 | Quick Start + Testing + Packaging | 4-6 |
| **Total** | | **46-66** |

With focused effort: 2-3 weeks part-time or 1 week full-time.

---

## Notes for AI Agents

When building these files:

1. **Read the spec first** - Each spec doc has detailed requirements
2. **Build Config tab first** - It powers everything else
3. **Test incrementally** - Don't build entire file before testing
4. **Match spec exactly** - Colors, column widths, formulas as specified
5. **Document deviations** - If you change something, note why
6. **Save versions** - Keep backups during development

---

*Reference the individual spec files (01-06) for detailed requirements on each component.*
