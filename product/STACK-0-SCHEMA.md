# Stack 0 — Fundamentals Schema

**Created:** January 27, 2026  
**Status:** Active  
**Purpose:** Define what Stack 0 captures — the foundation before measurement begins.

---

## Overview

Stack 0 establishes context. Before you measure anything, you need to know:
- Who you are (company profile)
- Where you stand (strategic reflection)
- What you're aiming for (goals)

**Completed once, revisited periodically** (annually or when something significant changes).

---

## Data Model

### 1. Company Profile

The basics. Who is this organization?

| Field | Type | Required | Notes |
|-------|------|----------|-------|
| `legal_entity_name` | string | Yes | Official registered name |
| `trading_name` | string | No | If different from legal name |
| `registration_number` | string | No | Company registration / VAT |
| `industry_code` | string | Yes | NACE code (EU standard) |
| `industry_description` | string | Yes | Human-readable industry |
| `ownership_type` | enum | Yes | Private / Public / Cooperative / Non-profit / Other |
| `founding_year` | integer | No | When established |
| `headquarters_country` | string (ISO) | Yes | ISO country code |
| `headquarters_city` | string | No | City |
| `reporting_period_start` | date | Yes | Fiscal year start |
| `reporting_period_end` | date | Yes | Fiscal year end |

---

### 2. Organizational Scale

How big is this operation?

| Field | Type | Required | Notes |
|-------|------|----------|-------|
| `total_fte` | integer | Yes | Full-time equivalent employees |
| `fte_confidence` | enum | Yes | High / Medium / Low |
| `number_of_sites` | integer | Yes | Physical locations |
| `primary_site_country` | string (ISO) | Yes | Main operations location |
| `other_site_countries` | array[string] | No | Other countries of operation |
| `revenue_band` | enum | Yes | See revenue bands below |
| `revenue_currency` | string | Yes | EUR / USD / GBP / etc. |

**Revenue Bands:**
- `<500k` — Under €500,000
- `500k-1m` — €500,000 – €1,000,000
- `1m-5m` — €1,000,000 – €5,000,000
- `5m-10m` — €5,000,000 – €10,000,000
- `10m-50m` — €10,000,000 – €50,000,000
- `50m-100m` — €50,000,000 – €100,000,000
- `>100m` — Over €100,000,000
- `prefer_not_to_say` — Decline to specify

---

### 3. Sites Registry

Multi-site foundation. Each site gets an ID for later tracking.

| Field | Type | Required | Notes |
|-------|------|----------|-------|
| `site_id` | string | Auto | System-generated unique ID |
| `site_name` | string | Yes | User-defined name |
| `site_type` | enum | Yes | HQ / Production / Warehouse / Office / Retail / Mixed / Other |
| `country` | string (ISO) | Yes | ISO country code |
| `city` | string | No | City/town |
| `floor_area_m2` | number | No | Square meters |
| `ownership` | enum | Yes | Owned / Leased / Shared |
| `operational_since` | date | No | When site became operational |
| `is_primary` | boolean | Yes | Main site flag |

**Note:** At least one site required. Stack 1 data is tracked per site.

---

### 4. Strategic Reflection (SWOT)

Qualitative self-assessment. Gut-level, not data-driven.

| Field | Type | Required | Notes |
|-------|------|----------|-------|
| `strengths` | text | Yes | What's working? What are you good at? |
| `weaknesses` | text | Yes | What's not working? Where do you struggle? |
| `opportunities` | text | Yes | What's possible? What could you pursue? |
| `threats` | text | Yes | What's risky? What could hurt you? |
| `swot_updated_at` | timestamp | Auto | Last update |

**Guidance prompts (shown in UI):**

- **Strengths:** "What do you do better than competitors? What resources or capabilities set you apart? What do customers say you're good at?"
- **Weaknesses:** "Where do you lose money or time? What do you avoid because it's hard? What would your harshest critic say?"
- **Opportunities:** "What trends could benefit you? What's underserved in your market? What could you do that you're not doing?"
- **Threats:** "What keeps you up at night? What's changing that could hurt you? What are competitors doing that worries you?"

**Minimum input:** At least 1-2 sentences per quadrant. Can be brief.

---

### 5. Goals

What does winning look like?

| Field | Type | Required | Notes |
|-------|------|----------|-------|
| `primary_goal` | text | Yes | In your own words |
| `time_horizon` | enum | Yes | 1 year / 2-3 years / 5+ years |
| `primary_motivation` | enum | Yes | See motivations below |
| `secondary_motivations` | array[enum] | No | Additional drivers |
| `success_definition` | text | Yes | How would you know you've won? |

**Primary Motivations:**
- `compliance` — "We need to meet requirements"
- `cost` — "We need to reduce costs / improve margins"
- `customers` — "Our customers are asking for this"
- `values` — "It's the right thing to do"
- `competitive` — "We want advantage over competitors"
- `financing` — "Banks/investors are requiring this"
- `risk` — "We need to reduce exposure"
- `other` — Free text

---

### 6. Regulatory Context

What frameworks apply to this organization?

| Field | Type | Required | Notes |
|-------|------|----------|-------|
| `csrd_applicable` | enum | Yes | Yes / No / Unsure |
| `vsme_applicable` | enum | Yes | Yes / No / Unsure |
| `other_frameworks` | array[string] | No | Free text list |
| `customer_requirements` | text | No | Known buyer demands |
| `certification_held` | array[string] | No | Current certifications |
| `certification_targeted` | array[string] | No | Certifications being pursued |

---

## Completion Criteria

Stack 0 is complete when:

| Section | Requirement |
|---------|-------------|
| Company Profile | All required fields populated |
| Organizational Scale | FTE, sites, revenue band provided |
| Sites Registry | At least 1 site registered |
| SWOT | All 4 quadrants answered (min 1-2 sentences each) |
| Goals | Primary goal + motivation + success definition provided |
| Regulatory Context | CSRD/VSME applicability answered |

---

## Completion Unlocks

When Stack 0 is complete:
- ✅ Stack 1 becomes available
- ✅ Company context populates across the system
- ✅ Site IDs ready for Stack 1 data tracking

---

## Revisit Triggers

Stack 0 should be revisited when:
- Annual planning cycle
- Major organizational change (acquisition, restructure, new site)
- Significant market shift
- Something feels off and you can't articulate why

**System prompt (at 12 months):**
> "It's been a year since you set up your fundamentals. Has anything changed? [Review now] or [Looks good]"

---

## UI Considerations

### Entry Flow (First Time)

1. Welcome → "Let's set up your organization"
2. Company Profile (form)
3. Sites (add at least one)
4. SWOT (guided reflection, one quadrant at a time)
5. Goals (what does winning look like?)
6. Regulatory Context (quick checkboxes + optional detail)
7. Summary → "You're ready to start tracking"

**Estimated time:** 10-15 minutes

### Edit Mode (Returning)

- Dashboard showing current state
- Edit any section
- History of changes (when was SWOT last updated?)

---

## Data Quality Notes

Stack 0 is mostly **qualitative** and **self-reported**. No external validation.

Confidence tagging is not applied here — this is context, not measurement.

**Exception:** `fte_confidence` is tagged because headcount affects intensity calculations later.

---

## Relationships to Other Stacks

| Data from Stack 0 | Used in |
|-------------------|---------|
| `site_id` | Stack 1 — all operational data linked to sites |
| `industry_code` | Stack 2 — benchmarking |
| `revenue_band` | Stack 1, 2 — intensity metrics |
| `total_fte` | Stack 1, 2 — intensity metrics |
| `primary_motivation` | UI — tailored recommendations |
| `regulatory_context` | Stack 1 — export formatting (VSME, etc.) |

---

## Version History

| Date | Change |
|------|--------|
| January 27, 2026 | Initial schema |

---

*This document defines what Stack 0 captures. UI/UX flows and technical implementation are separate concerns.*
