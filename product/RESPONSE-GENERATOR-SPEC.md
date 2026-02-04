# Response Generator — Feature Specification

**Created:** January 27, 2026  
**Status:** Active  
**Purpose:** Define the hero feature that turns Stack 1 data into questionnaire answers.

---

## Overview

The Response Generator is the primary value delivery mechanism for Stack 1.

**The promise:**
> "Upload any sustainability questionnaire. Get answers with one click."

**What it does:**
1. User uploads/pastes questionnaire
2. System parses and extracts questions
3. System maps questions to Stack 1 data
4. System generates answers with confidence flags
5. User reviews and adjusts
6. User exports response

---

## User Flow

```
┌─────────────────────────────────────────────────────────────────┐
│  1. UPLOAD                                                      │
│  ─────────────────────────────────────────────────────────────  │
│  • Upload Excel/PDF                                             │
│  • Paste questions manually                                     │
│  • Select from saved templates                                  │
└─────────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────────┐
│  2. PARSE                                                       │
│  ─────────────────────────────────────────────────────────────  │
│  • Extract questions from document                              │
│  • Identify question IDs/numbers                                │
│  • Detect question categories                                   │
│  • Show user for confirmation: "We found X questions"           │
└─────────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────────┐
│  3. MAP                                                         │
│  ─────────────────────────────────────────────────────────────  │
│  • Match questions to Stack 1 data fields                       │
│  • Identify which data answers which question                   │
│  • Flag questions with no matching data                         │
│  • Flag questions needing narrative (not data)                  │
└─────────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────────┐
│  4. GENERATE                                                    │
│  ─────────────────────────────────────────────────────────────  │
│  • Pull data from Stack 1                                       │
│  • Apply answer templates                                       │
│  • Calculate aggregations as needed                             │
│  • Assign confidence levels                                     │
│  • Generate methodology notes                                   │
└─────────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────────┐
│  5. REVIEW                                                      │
│  ─────────────────────────────────────────────────────────────  │
│  • Show all Q&A pairs                                           │
│  • Highlight confidence levels                                  │
│  • Allow edits to any answer                                    │
│  • Flag gaps requiring user input                               │
│  • Show data sources for each answer                            │
└─────────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────────┐
│  6. EXPORT                                                      │
│  ─────────────────────────────────────────────────────────────  │
│  • Excel (matches original format if possible)                  │
│  • PDF report                                                   │
│  • Copy to clipboard (for portal paste)                         │
│  • Save as template for future use                              │
└─────────────────────────────────────────────────────────────────┘
```

---

## Input Handling

### Supported Input Formats

| Format | How it's processed |
|--------|-------------------|
| Excel (.xlsx, .xls) | Parse worksheets, detect question columns |
| PDF | Extract text, identify Q&A structure |
| CSV | Parse rows as questions |
| Manual paste | Text input, one question per line or structured |
| Saved template | Previously used questionnaire format |

### Excel Parsing Logic

1. Scan worksheets for question-like content
2. Detect columns:
   - Question ID / Number
   - Question text
   - Category / Section
   - Expected answer format (if specified)
   - Existing answer (if partially complete)
3. Present to user: "We found questions in columns A-C. Is this correct?"
4. Allow column remapping if wrong

### PDF Parsing Logic

1. Extract text content
2. Identify numbered/bulleted items as questions
3. Detect section headers as categories
4. Present extracted questions for confirmation
5. Allow manual edits if parsing missed something

### Manual Entry

- Paste block of text
- System attempts to split into questions
- Or: add questions one by one
- Assign categories manually

---

## Question Mapping

### Mapping Engine

The system maps questions to Stack 1 data using:

1. **Keyword matching** — Question contains terms that map to data fields
2. **Pattern recognition** — Common question patterns (e.g., "What is your total energy consumption?")
3. **Category inference** — Question category suggests data domain
4. **Learning** — Improve over time based on user confirmations/corrections

### Mapping Categories

| Category | Maps to Stack 1 Domain |
|----------|----------------------|
| Energy / Emissions | Domain 3: Energy & Utilities |
| Materials / Inputs | Domain 1: Resource & Material Inputs |
| Packaging | Domain 2: Packaging |
| Water | Domain 3: Energy & Utilities (water section) |
| Waste | Domain 7: Systematic Outputs |
| Transport / Logistics | Domain 5: Transportation & Logistics |
| Workforce / Employment | Domain 6: Human & Safety Capital |
| Health & Safety | Domain 6: Human & Safety Capital |
| Facilities / Sites | Domain 4: Operational Infrastructure |
| Suppliers | Domain 1 (supplier fields) |
| Governance / Policy | Flag as "Narrative required" |
| Targets / Goals | Flag as "Narrative required" |
| Certifications | Stack 0: Regulatory Context |

### Mapping Confidence

Each mapping gets a confidence level:

| Level | Meaning |
|-------|---------|
| **High** | Clear keyword match, unambiguous data field |
| **Medium** | Probable match, may need user confirmation |
| **Low** | Best guess, user should verify |
| **None** | No matching data found |

---

## Answer Generation

### Answer Structure

Each generated answer includes:

| Field | Description |
|-------|-------------|
| `question_id` | Original question ID/number |
| `question_text` | The question |
| `category` | Detected category |
| `answer` | Generated answer text |
| `data_value` | Raw data value(s) used |
| `data_unit` | Unit of measurement |
| `data_period` | Time period the data covers |
| `data_source` | Where the data came from (Stack 1 field) |
| `data_confidence` | Confidence of underlying data (High/Medium/Low) |
| `answer_confidence` | Confidence of the mapping + answer |
| `methodology` | How the answer was derived |
| `assumptions` | Any assumptions made |
| `evidence` | What documentation supports this |
| `user_edited` | Has user modified this answer? |
| `user_notes` | User's additional notes |

### Answer Templates

Answers are generated using templates that produce professional, auditor-safe language.

**Example templates:**

**Energy consumption:**
> "Total energy consumption for [PERIOD] was [VALUE] [UNIT], comprising [ELECTRICITY]% electricity and [THERMAL]% thermal fuels. [RENEWABLE]% was from renewable sources. Data source: [SOURCE]. Confidence: [CONFIDENCE]."

**Emissions:**
> "Scope 1 emissions for [PERIOD] were [SCOPE1] tCO2e. Scope 2 emissions (location-based) were [SCOPE2] tCO2e. Calculations use [EMISSION_FACTOR_SOURCE] emission factors. [METHODOLOGY_NOTE]"

**Materials:**
> "Total material inputs for [PERIOD] were [VALUE] [UNIT], sourced from [SUPPLIER_COUNT] suppliers across [COUNTRY_COUNT] countries. [RECYCLED]% recycled content."

**Workforce:**
> "Total workforce as of [DATE] was [FTE] FTE across [SITE_COUNT] sites. [FEMALE]% female, [MALE]% male."

**Waste:**
> "Total waste generated in [PERIOD] was [VALUE] [UNIT]. Disposal routes: [RECYCLING]% recycling, [LANDFILL]% landfill, [INCINERATION]% incineration. Recycling rate: [RATE]%."

### Handling Missing Data

When data is not available:

| Scenario | Generated Answer |
|----------|-----------------|
| No data at all | "Data not currently tracked. [Add data →]" |
| Partial data | "Based on available data: [ANSWER]. Note: [MISSING] not yet tracked." |
| Estimated data | "[ANSWER]. Note: This value is estimated based on [METHOD]." |
| Out of period | "Most recent data is from [PERIOD]: [ANSWER]. Current period not yet available." |

### Handling Narrative Questions

Some questions require narrative, not data:

- "Describe your environmental policy"
- "What targets have you set?"
- "How do you engage with suppliers on sustainability?"

For these:

> "This question requires a narrative response. Suggested elements to address: [SUGGESTIONS]. [Draft answer →]"

System provides prompts but doesn't fabricate answers.

---

## Confidence Scoring

### Overall Answer Confidence

Combines:
- **Mapping confidence** — How sure are we this data answers this question?
- **Data confidence** — How reliable is the underlying data?

| Mapping | Data | Overall |
|---------|------|---------|
| High | High | ✅ High — Ready to submit |
| High | Medium | ⚠️ Medium — Review recommended |
| High | Low | ⚠️ Medium — Data quality note |
| Medium | Any | ⚠️ Medium — Verify mapping |
| Low | Any | ❓ Low — User input needed |
| None | N/A | ❌ No data — Manual answer required |

### Visual Indicators

| Icon | Meaning |
|------|---------|
| ✅ | High confidence — good to go |
| ⚠️ | Medium confidence — review |
| ❓ | Low confidence — needs attention |
| ❌ | No data — manual input required |
| ✏️ | User has edited this answer |

---

## Review Interface

### Layout

```
┌─────────────────────────────────────────────────────────────────┐
│  Response Generator: [Questionnaire Name]                       │
│  ─────────────────────────────────────────────────────────────  │
│  Progress: 42/50 questions answered  [84%] ████████████░░       │
│  Confidence: 35 ✅  |  12 ⚠️  |  3 ❓  |  0 ❌                   │
└─────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────┐
│  Filters: [All] [Needs Review ⚠️❓] [High ✅] [Edited ✏️]        │
│  Category: [All] [Energy] [Waste] [Workforce] [...]             │
└─────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────┐
│  Q12. What was your total electricity consumption in 2025?  ✅  │
│  ─────────────────────────────────────────────────────────────  │
│  Category: Energy                                               │
│  ─────────────────────────────────────────────────────────────  │
│  Answer:                                                        │
│  ┌───────────────────────────────────────────────────────────┐ │
│  │ Total electricity consumption for 2025 was 245,000 kWh,   │ │
│  │ comprising 100% grid electricity. 15% was certified       │ │
│  │ renewable via green tariff. Data source: utility bills.   │ │
│  │ Confidence: High.                                         │ │
│  └───────────────────────────────────────────────────────────┘ │
│  ─────────────────────────────────────────────────────────────  │
│  Data: 245,000 kWh | Period: Jan-Dec 2025 | Source: Domain 3   │
│  [Edit answer] [View source data] [Add note]                    │
└─────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────┐
│  Q13. What are your Scope 3 emissions?                      ⚠️  │
│  ─────────────────────────────────────────────────────────────  │
│  Category: Emissions                                            │
│  ─────────────────────────────────────────────────────────────  │
│  Answer:                                                        │
│  ┌───────────────────────────────────────────────────────────┐ │
│  │ Scope 3 Category 1 (Purchased goods): Estimated at 420    │ │
│  │ tCO2e based on material inputs and supplier data.         │ │
│  │ Categories 4-9: Not yet calculated.                       │ │
│  │ Note: Scope 3 calculation is partial.                     │ │
│  └───────────────────────────────────────────────────────────┘ │
│  ─────────────────────────────────────────────────────────────  │
│  ⚠️ Partial data — only Category 1 available                    │
│  [Edit answer] [View source data] [Add missing data]            │
└─────────────────────────────────────────────────────────────────┘
```

### Edit Mode

When user clicks "Edit answer":

- Answer text becomes editable
- Original generated answer preserved (can "Reset to generated")
- User changes tracked
- Save confirms edit

### Bulk Actions

- "Mark all high-confidence as approved"
- "Export only approved answers"
- "Flag all ⚠️ for review"

---

## Export Options

### Excel Export

Generates Excel file with:

| Column | Content |
|--------|---------|
| Question ID | Original ID |
| Question | Question text |
| Category | Detected category |
| Answer | Final answer (user-edited if modified) |
| Confidence | High / Medium / Low |
| Data Period | Time period covered |
| Methodology | How answer was derived |
| Assumptions | Any assumptions |
| Evidence | Supporting documentation |
| Notes | User notes |

Format options:
- **Match original** — Attempt to recreate input format with answers filled in
- **Standard template** — Ecosystems United format
- **Custom columns** — User selects what to include

### PDF Report

Professional report including:
- Cover page with company info
- Executive summary (X questions answered, Y% high confidence)
- Full Q&A listing
- Methodology section
- Data sources appendix
- Confidence breakdown

### Copy to Clipboard

For pasting into online portals:
- Select question(s)
- Copy answer text only
- Or copy with question + answer

### Save as Template

Save questionnaire structure for reuse:
- Question mapping preserved
- Next time: "Use saved mapping for [Customer X] questionnaire?"
- Skip parsing, go straight to generate

---

## Saved Responses

### Response History

Every generated response is saved:

| Field | Description |
|-------|-------------|
| `response_id` | Unique ID |
| `questionnaire_name` | User-defined name |
| `requestor` | Who asked for this |
| `created_at` | When generated |
| `updated_at` | Last modified |
| `question_count` | Total questions |
| `answered_count` | Questions with answers |
| `confidence_breakdown` | High/Medium/Low counts |
| `status` | Draft / Complete / Sent |
| `exported_at` | When last exported |
| `export_format` | How it was exported |

### Reuse Workflow

When similar questionnaire arrives:
1. System detects similarity to previous
2. "This looks like [Previous Questionnaire]. Use same mapping?"
3. Pre-populate answers from updated Stack 1 data
4. Show what changed since last time

---

## Minimum Viable Version

### MVP Scope

**Must have:**
- Excel upload + parsing
- Basic keyword mapping
- Answer generation from Stack 1 data
- Simple review interface
- Excel export
- Confidence indicators

**Nice to have (v1.1):**
- PDF upload
- Learning from corrections
- Saved templates
- PDF export
- Portal copy/paste

**Later:**
- AI-enhanced mapping
- Auto-detect questionnaire type (EcoVadis, CDP, etc.)
- Pre-built mappings for common questionnaires
- Collaborative review

### MVP Data Requirements

Response Generator requires minimum Stack 1 data:
- At least 25% completion (basic responses possible)
- Recommended: 80% completion (full capability)

At <25%:
> "Your baseline data is limited. Response Generator will work better with more data. [Continue anyway] or [Add data first]"

---

## Question Mapping Database

### Core Mappings

Pre-built mappings for common question patterns:

| Pattern | Maps to | Answer Template |
|---------|---------|-----------------|
| "total energy consumption" | Domain 3: electricity + fuels | Energy template |
| "electricity usage/consumption" | Domain 3: electricity | Electricity template |
| "scope 1 emissions" | Domain 3: calculated scope 1 | Scope 1 template |
| "scope 2 emissions" | Domain 3: calculated scope 2 | Scope 2 template |
| "water consumption/usage/withdrawal" | Domain 3: water | Water template |
| "waste generated/produced" | Domain 7: waste | Waste template |
| "recycling rate" | Domain 7: waste (calculated) | Recycling template |
| "number of employees/workforce" | Domain 6: workforce | Workforce template |
| "health and safety/incidents/accidents" | Domain 6: H&S | Safety template |
| "training hours" | Domain 6: training | Training template |
| "suppliers/supply chain" | Domain 1: supplier fields | Supplier template |
| "materials/raw materials" | Domain 1: materials | Materials template |
| "packaging" | Domain 2: packaging | Packaging template |
| "transport/logistics/shipping" | Domain 5: transport | Transport template |
| "sites/facilities/locations" | Domain 4 + Stack 0 | Sites template |

### Extensible Mapping

Users can:
- Confirm suggested mappings (improves system)
- Correct wrong mappings (trains system)
- Add custom mappings for recurring questions

---

## Error Handling

| Scenario | System Response |
|----------|-----------------|
| Upload fails | "Could not read file. Supported formats: .xlsx, .xls, .pdf, .csv" |
| No questions found | "No questions detected. Try manual entry or different format." |
| All questions unmapped | "Could not match questions to your data. Your baseline may be incomplete." |
| Export fails | "Export failed. Try again or download as [alternative format]." |
| Data changed mid-session | "Your baseline data was updated. [Refresh answers] or [Keep current]" |

---

## Performance Considerations

| Metric | Target |
|--------|--------|
| File upload | < 5 seconds for typical questionnaire |
| Question parsing | < 10 seconds for 100 questions |
| Answer generation | < 15 seconds for full questionnaire |
| Export generation | < 10 seconds |

For large questionnaires (>200 questions):
- Process in background
- Show progress indicator
- Email when complete (optional)

---

## Security & Privacy

- Uploaded files processed, not stored permanently (unless saved as template)
- Answers contain only user's own data
- No cross-user data exposure
- Export files generated on-demand, not cached
- User can delete saved responses

---

## Success Metrics

| Metric | Target |
|--------|--------|
| Questions auto-answered | > 70% for users with 80%+ baseline |
| High confidence answers | > 50% for users with 80%+ baseline |
| Time to complete questionnaire | < 30 minutes (vs. hours manually) |
| User edits required | < 30% of answers |
| Repeat usage | > 60% use again within 3 months |

---

## Version History

| Date | Change |
|------|--------|
| January 27, 2026 | Initial specification |

---

*This document defines the Response Generator feature. Technical implementation details are separate.*
