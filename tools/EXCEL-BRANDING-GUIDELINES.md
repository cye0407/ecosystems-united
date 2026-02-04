# Ecosystems United Excel Toolkit Branding Guidelines
**Version:** 1.0
**Updated:** 2025-01-23

---

## Color Palette

### Primary Colors (RGB Values)

| Use | Color | RGB | Hex | Notes |
|-----|-------|-----|-----|-------|
| Main headers | Brand Navy | 11, 21, 56 | #0B1538 | White text, ALL CAPS |
| Sub-headers (tables only) | Soft Sky | 186, 210, 235 | #BAD2EB | Black text, ALL CAPS |
| Input fields | Soft Green | 234, 241, 222 | #EAF1DE | User fills these |
| Locked/formula cells | Light Grey | 217, 217, 217 | #D9D9D9 | Standard Excel light grey |
| Text | Black | 0, 0, 0 | #000000 | Calibri |
| Header text (main) | White | 255, 255, 255 | #FFFFFF | On dark blue only |

---

## Typography

| Element | Font | Size | Style |
|---------|------|------|-------|
| Page title | Calibri | 24 | Bold, Black |
| Page description | Calibri | 11 | Regular |
| How-to steps | Calibri | 11 | Regular |
| Main headers | Calibri | 14 | Bold, ALL CAPS |
| Sub-headers | Calibri | 11 | Bold, ALL CAPS |
| Table/body text | Calibri | 11 | Regular |
| Footer | Calibri | 9 | Regular |

---

## Page Structure

### Standard Page Layout

```
Row 1:  [empty - for spacing]
Row 2:  Column B: PAGE TITLE (24pt, bold, black)
Row 3:  Column B: One-sentence description of what this page does
Row 4:  [empty]
Row 5:  Column B: "How to use this page:" (bold)
Row 6:  Column B: 1. First step
Row 7:  Column B: 2. Second step
Row 8:  Column B: 3. Third step (max 5 steps)
Row 9:  [empty]
Row 10: [First content begins]
```

### Column Widths
- Column A: 15 width (spacing/indent column)
- Other columns: As needed for content

### Alignment
- Everything: Left-aligned
- Content under headers/subheaders: Indented 1 tab

---

## Tables

### Main Table Headers
- Background: Brand Navy (11, 21, 56)
- Text: White, Bold, ALL CAPS
- Example: `CATEGORY/SUB-REQUIREMENTS`

### Sub-Headers (within tables)
- Background: Soft Sky (186, 210, 235)
- Text: Black, Bold, ALL CAPS
- Example: `1. CARBON FOOTPRINT DATA`

---

## Non-Table Content

### Instructions, How-To, Body Text
- No background colors
- Text: Black, Calibri
- Headers: Bold, but no colored background

### Input Fields (User Fills)
- Background: Soft Green (234, 241, 222)
- Border: Thin border if needed
- No protection

### Formula/Locked Fields
- Background: Light Grey (217, 217, 217)
- Protection: Lock cells (but don't protect sheet unless instructed)

---

## Links

### Standard Links
- Color: Black (not blue)
- Underline: Yes (in body text)
- Underline: No (in tables - header should indicate links exist)

---

## Footer

### Placement
- Bottom-right of each sheet
- Right-aligned in rightmost content column

### Format
```
[Template Name] · Ecosystems United · v1.1     Questions? Email contact@ecosystemsunited.com
```

### Style
- Font: Calibri, 9pt
- Color: Grey or black

---

## Formulas & Data Validation

### Error Protection
- All formulas must include error handling
- Use `IFERROR()`, `IFNA()`, or similar
- Never show `#REF!`, `#N/A`, `#DIV/0!` to users

### Dropdowns
- Use data validation dropdowns whenever possible
- Path of least resistance for users
- Source lists on hidden reference sheet or named ranges

### Named Ranges
- Create named ranges for:
  - Dropdown source lists
  - Key input cells referenced multiple times
  - Cross-sheet references

### Cell Protection
- Lock cells containing formulas
- Leave input cells unlocked
- Do NOT protect sheets unless specifically instructed

---

## Required Elements

### Every Workbook Must Have:
1. **START HERE** sheet (first tab)
   - Overview of the toolkit
   - How to use it
   - Links to other sheets
   
2. **Footer** on every sheet
   - Template name, Ecosystems United branding, version number
   - Contact email

3. **Instructions** on each data entry sheet
   - Max 5 steps
   - Clear, actionable

---

## Gridlines

- **Default:** No gridlines (turn off in View settings)
- Use borders intentionally for tables and data entry areas

---

## Version Control

Format: `v1.0`, `v1.1`, `v2.0`
- Minor fixes: increment decimal (v1.0 → v1.1)
- Major updates: increment whole number (v1.1 → v2.0)

---

## Checklist Before Finalizing

- [ ] Column A set to width 15
- [ ] Page title in B2, 24pt bold
- [ ] One-sentence description below title
- [ ] How-to steps (max 5)
- [ ] All headers capitalized
- [ ] Input fields: green (234, 241, 222)
- [ ] Formula cells: grey, locked
- [ ] Dropdowns used where possible
- [ ] All formulas error-protected
- [ ] Named ranges created
- [ ] Links styled correctly (black, underlined in text)
- [ ] Footer on every sheet
- [ ] START HERE sheet exists
- [ ] Gridlines hidden
- [ ] Version number in footer

---

*This document should be referenced when creating or updating any Ecosystems United Excel toolkit.*
