# Stack 1 — Baseline Schema

**Created:** January 27, 2026  
**Status:** Active  
**Purpose:** Define what Stack 1 captures — the operational ledger that enables everything else.

---

## Overview

Stack 1 is the baseline. The physical ledger. The foundation.

**Canonical definition:**
> Stack 1 is complete when the organization can reconstruct a defensible mass-, energy-, and output-balance for its operations — with transparent uncertainty — and reuse that dataset across Scope 3, ESG reporting, circular mapping, and risk analysis without rebuilding it.

---

## Structure

Stack 1 has two phases:

| Phase | What it covers | Milestone |
|-------|----------------|-----------|
| **Phase 1** | Operational Ledger (8 domains) | 80% = Response-ready |
| **Phase 2** | Context Lenses (External + Financial) | Stack 1 complete |

---

## Data Quality: The Credibility Layer

**Every data point in Stack 1 carries:**

| Field | Type | Required | Notes |
|-------|------|----------|-------|
| `value` | number/string | Yes | The actual data |
| `unit` | string | Yes | Unit of measurement |
| `period` | string | Yes | Time period (YYYY-MM or YYYY-Q# or YYYY) |
| `site_id` | string | Yes | Links to Stack 0 site registry |
| `source` | enum | Yes | Bill / Invoice / ERP / Meter / Supplier / Estimate / Other |
| `source_detail` | string | No | Specific source description |
| `confidence` | enum | Yes | High / Medium / Low |
| `estimation_method` | string | Conditional | Required if source = Estimate |
| `last_updated` | timestamp | Auto | When this record was last modified |
| `updated_by` | string | Auto | User who made the change |

**Confidence definitions:**

| Level | Meaning |
|-------|---------|
| **High** | Measured, documented, verifiable (bills, meters, invoices) |
| **Medium** | Calculated from reliable proxies, or partially documented |
| **Low** | Estimated, assumed, or based on industry averages |

**Hard rule:** If mass/energy is unknown → estimation method must be logged. No data > bad data.

---

# Phase 1: Operational Ledger (8 Domains)

## Domain 1: Resource & Material Inputs

The physical ledger. Mass and composition of what enters your operation.

**Why it matters:** Scope 3 Category 1 cannot exist without this. Circularity mapping begins here.

### 1.1 Materials Registry

| Field | Type | Required | Notes |
|-------|------|----------|-------|
| `material_id` | string | Auto | System-generated |
| `material_name` | string | Yes | User-defined name |
| `material_category` | enum | Yes | Raw material / Component / Consumable / Other |
| `material_type` | string | Yes | Specific type (steel, plastic, cotton, etc.) |
| `unit_of_measure` | enum | Yes | kg / t / L / m³ / units |

### 1.2 Material Inputs (per period)

| Field | Type | Required | Notes |
|-------|------|----------|-------|
| `material_id` | string | Yes | Links to registry |
| `site_id` | string | Yes | Links to Stack 0 |
| `period` | string | Yes | YYYY-MM |
| `quantity` | number | Yes | Amount purchased/received |
| `unit` | string | Yes | Must match registry unit |
| `virgin_content_percent` | number | Progressive | 0-100 |
| `recycled_content_percent` | number | Progressive | 0-100 |
| `supplier_name` | string | Yes | Legal entity name |
| `supplier_country` | string (ISO) | Yes | Country of origin |
| `supplier_id` | string | Auto | System links repeat suppliers |
| `cost` | number | Progressive | Total cost for this input |
| `cost_currency` | string | Conditional | Required if cost provided |
| `hazardous` | boolean | Progressive | REACH/SVHC relevant |
| `certification` | string | No | Any material certifications |
| + data quality fields | | | source, confidence, etc. |

**Progressive fields:** Not required for baseline completion, but valuable for deeper analysis.

---

## Domain 2: Packaging

Packaging is not a footnote — it is Scope 3 and waste in disguise.

### 2.1 Packaging Registry

| Field | Type | Required | Notes |
|-------|------|----------|-------|
| `packaging_id` | string | Auto | System-generated |
| `packaging_name` | string | Yes | User-defined name |
| `packaging_level` | enum | Yes | Primary / Secondary / Tertiary |
| `material_type` | enum | Yes | Paper / Cardboard / Plastic / Metal / Glass / Wood / Composite / Other |
| `material_detail` | string | No | Specific material (PET, corrugated, etc.) |

### 2.2 Packaging Inputs (per period)

| Field | Type | Required | Notes |
|-------|------|----------|-------|
| `packaging_id` | string | Yes | Links to registry |
| `site_id` | string | Yes | Links to Stack 0 |
| `period` | string | Yes | YYYY-MM |
| `quantity_units` | number | Yes | Number of units |
| `total_weight_kg` | number | Yes | Total weight |
| `recycled_content_percent` | number | Progressive | 0-100 |
| `recyclability_class` | enum | Progressive | Recyclable / Partially / Not recyclable / Unknown |
| `linked_product` | string | No | Which product this packages |
| `supplier_name` | string | Progressive | |
| `supplier_country` | string (ISO) | Progressive | |
| `cost` | number | Progressive | |
| + data quality fields | | | |

---

## Domain 3: Energy & Utilities

Operational thermodynamics. Where ESG frameworks converge.

**Key rule:** Energy is always tracked per site. No site → no Scope 2 integrity.

### 3.1 Electricity

| Field | Type | Required | Notes |
|-------|------|----------|-------|
| `site_id` | string | Yes | Links to Stack 0 |
| `period` | string | Yes | YYYY-MM |
| `consumption_kwh` | number | Yes | Total kWh consumed |
| `source_grid_percent` | number | Yes | % from grid |
| `source_onsite_renewable_percent` | number | Yes | % from on-site generation |
| `source_ppa_percent` | number | Yes | % from power purchase agreements |
| `green_tariff` | boolean | No | On a certified green tariff? |
| `cost` | number | Progressive | Total cost |
| `cost_currency` | string | Conditional | |
| + data quality fields | | | |

**Validation:** source_grid + source_onsite_renewable + source_ppa must = 100%

### 3.2 Thermal Fuels

| Field | Type | Required | Notes |
|-------|------|----------|-------|
| `site_id` | string | Yes | |
| `period` | string | Yes | YYYY-MM |
| `fuel_type` | enum | Yes | Natural gas / LPG / Heating oil / Diesel / Petrol / Coal / Biomass / Other |
| `quantity` | number | Yes | Amount consumed |
| `unit` | enum | Yes | kWh / L / m³ / kg / t |
| `purpose` | enum | Yes | Heating / Process / Vehicles / Backup generation / Other |
| `cost` | number | Progressive | |
| + data quality fields | | | |

### 3.3 Water

| Field | Type | Required | Notes |
|-------|------|----------|-------|
| `site_id` | string | Yes | |
| `period` | string | Yes | YYYY-MM |
| `withdrawal_m3` | number | Yes | Total water withdrawn |
| `source` | enum | Yes | Municipal / Groundwater / Surface / Rainwater / Other |
| `discharge_m3` | number | Progressive | Water discharged |
| `discharge_destination` | enum | Progressive | Sewer / Treatment plant / Surface water / Other |
| `consumption_m3` | number | Auto | withdrawal - discharge |
| `cost` | number | Progressive | |
| + data quality fields | | | |

### 3.4 Calculated: Emissions

Auto-calculated from energy inputs. User can override with measured values.

| Field | Type | Required | Notes |
|-------|------|----------|-------|
| `site_id` | string | Yes | |
| `period` | string | Yes | YYYY-MM |
| `scope_1_tco2e` | number | Calculated | From fuels |
| `scope_1_calculation_method` | string | Auto | Which emission factors used |
| `scope_2_location_tco2e` | number | Calculated | Grid average method |
| `scope_2_market_tco2e` | number | Calculated | Supplier-specific if available |
| `scope_2_calculation_method` | string | Auto | Which emission factors used |
| `emission_factor_source` | string | Auto | Database used (e.g., DEFRA 2025) |
| `user_override` | boolean | No | Did user provide measured values? |
| `user_override_notes` | string | Conditional | If override, explain source |

---

## Domain 4: Operational Infrastructure

Fixed assets and physical exposure. Where resilience quietly starts.

### 4.1 Site Details

Extends Stack 0 site registry with operational data.

| Field | Type | Required | Notes |
|-------|------|----------|-------|
| `site_id` | string | Yes | Links to Stack 0 |
| `floor_area_m2` | number | Yes | Total floor space |
| `floor_area_production_m2` | number | Progressive | Production/operational area |
| `floor_area_office_m2` | number | Progressive | Office/admin area |
| `floor_area_warehouse_m2` | number | Progressive | Storage area |
| `building_age_years` | number | Progressive | Age of main building |
| `last_major_renovation` | date | Progressive | |
| `energy_rating` | string | Progressive | EPC or equivalent rating |
| `owned_or_leased` | enum | Yes | Owned / Leased / Shared |
| `lease_end_date` | date | Conditional | If leased |

### 4.2 Asset Registry

Major equipment and infrastructure.

| Field | Type | Required | Notes |
|-------|------|----------|-------|
| `asset_id` | string | Auto | System-generated |
| `site_id` | string | Yes | Links to site |
| `asset_name` | string | Yes | User-defined |
| `asset_category` | enum | Yes | Production equipment / HVAC / Vehicles / IT / Other |
| `asset_type` | string | Yes | Specific type |
| `quantity` | number | Yes | How many |
| `acquisition_year` | integer | Progressive | When acquired |
| `expected_lifespan_years` | integer | Progressive | |
| `criticality` | enum | Progressive | Low / Medium / High / Critical |
| `replacement_cost` | number | Progressive | |
| `energy_consumption_kwh_year` | number | Progressive | Estimated annual consumption |
| `maintenance_frequency` | enum | Progressive | Monthly / Quarterly / Annual / As needed |

---

## Domain 5: Transportation & Logistics

Movement as emissions.

**Blunt truth:** Spend-based logistics data is acceptable at Stack 1 only if activity data is unavailable — and must be flagged.

### 5.1 Transport Log (per period)

| Field | Type | Required | Notes |
|-------|------|----------|-------|
| `transport_id` | string | Auto | |
| `site_id` | string | Yes | Origin site |
| `period` | string | Yes | YYYY-MM |
| `direction` | enum | Yes | Inbound / Outbound / Internal |
| `mode` | enum | Yes | Road / Rail / Sea / Air / Multimodal |
| `vehicle_type` | string | Progressive | Truck, van, container ship, etc. |
| `distance_km` | number | Preferred | Total distance |
| `weight_t` | number | Preferred | Total weight transported |
| `tkm` | number | Calculated | Tonne-kilometers (weight × distance) |
| `fuel_type` | enum | Progressive | Diesel / Petrol / Electric / LNG / Unknown |
| `fuel_quantity` | number | Progressive | If known |
| `fuel_unit` | enum | Conditional | L / kWh / kg |
| `carrier_name` | string | Progressive | |
| `load_factor_percent` | number | Progressive | Capacity utilization |
| `spend` | number | Fallback | Use if activity data unavailable |
| `spend_currency` | string | Conditional | |
| `data_type` | enum | Yes | Activity-based / Spend-based |
| + data quality fields | | | |

**Preference hierarchy:**
1. Activity data (distance + weight + fuel) — best
2. Activity data (distance + weight) — good
3. Spend-based — acceptable fallback, flagged

---

## Domain 6: Human & Safety Capital

Minimal social reality. This is not culture — it's exposure.

### 6.1 Workforce (per period)

| Field | Type | Required | Notes |
|-------|------|----------|-------|
| `site_id` | string | Yes | |
| `period` | string | Yes | YYYY-MM or YYYY-Q# |
| `total_fte` | number | Yes | Full-time equivalents |
| `total_headcount` | number | Progressive | Actual people count |
| `permanent_employees` | number | Progressive | |
| `temporary_employees` | number | Progressive | |
| `contractors` | number | Progressive | |
| `female_percent` | number | Progressive | Gender split |
| `male_percent` | number | Progressive | |
| `other_gender_percent` | number | Progressive | |
| `total_hours_worked` | number | Yes | Total hours in period |
| + data quality fields | | | |

### 6.2 Health & Safety (per period)

| Field | Type | Required | Notes |
|-------|------|----------|-------|
| `site_id` | string | Yes | |
| `period` | string | Yes | YYYY-MM or YYYY-Q# |
| `recordable_incidents` | number | Yes | Total recordable incidents |
| `lost_time_incidents` | number | Yes | Incidents causing missed work |
| `lost_days` | number | Progressive | Total days lost |
| `fatalities` | number | Yes | Work-related deaths (hopefully 0) |
| `near_misses` | number | Progressive | Reported near misses |
| `trir` | number | Calculated | Total Recordable Incident Rate |
| `ltir` | number | Calculated | Lost Time Incident Rate |
| + data quality fields | | | |

**Calculated metrics:**
- TRIR = (recordable_incidents × 200,000) / total_hours_worked
- LTIR = (lost_time_incidents × 200,000) / total_hours_worked

### 6.3 Training (per period)

| Field | Type | Required | Notes |
|-------|------|----------|-------|
| `site_id` | string | Yes | |
| `period` | string | Yes | YYYY-MM or YYYY-Q# |
| `total_training_hours` | number | Progressive | Total hours delivered |
| `employees_trained` | number | Progressive | Number of employees |
| `training_hours_per_fte` | number | Calculated | |
| `safety_training_hours` | number | Progressive | H&S specific |
| `sustainability_training_hours` | number | Progressive | ESG specific |
| + data quality fields | | | |

---

## Domain 7: Systematic Outputs

The exit side of mass balance. Leakage and externalization.

**Key insight:** If outputs aren't tracked, efficiency is impossible and circularity is fiction.

### 7.1 Waste (per period)

| Field | Type | Required | Notes |
|-------|------|----------|-------|
| `site_id` | string | Yes | |
| `period` | string | Yes | YYYY-MM |
| `waste_category` | enum | Yes | General / Recyclable / Organic / Hazardous / WEEE / Construction / Other |
| `waste_type` | string | Progressive | Specific waste stream |
| `quantity_kg` | number | Yes | Total weight |
| `disposal_route` | enum | Yes | Landfill / Incineration / Recycling / Composting / Reuse / Other |
| `disposal_partner` | string | Progressive | Waste handler name |
| `hazardous` | boolean | Yes | Classified as hazardous? |
| `cost` | number | Progressive | Disposal cost |
| `revenue` | number | Progressive | If waste generates income |
| + data quality fields | | | |

### 7.2 Products/Outputs (per period)

What leaves as value (not waste).

| Field | Type | Required | Notes |
|-------|------|----------|-------|
| `site_id` | string | Yes | |
| `period` | string | Yes | YYYY-MM |
| `product_name` | string | Yes | Product or service |
| `quantity` | number | Yes | Units produced/delivered |
| `unit` | string | Yes | kg / t / units / hours / etc. |
| `revenue` | number | Progressive | Revenue from this output |
| + data quality fields | | | |

### 7.3 Emissions — Direct Sources

Scope 1 emissions not from fuel combustion.

| Field | Type | Required | Notes |
|-------|------|----------|-------|
| `site_id` | string | Yes | |
| `period` | string | Yes | YYYY-MM |
| `emission_source` | enum | Yes | Refrigerants / Process emissions / Fugitive / Other |
| `source_detail` | string | Yes | Specific source |
| `refrigerant_type` | string | Conditional | R-410A, R-134a, etc. |
| `quantity_kg` | number | Yes | Amount released/recharged |
| `tco2e` | number | Calculated | Based on GWP |
| + data quality fields | | | |

### 7.4 Effluents (if applicable)

| Field | Type | Required | Notes |
|-------|------|----------|-------|
| `site_id` | string | Yes | |
| `period` | string | Yes | YYYY-MM |
| `effluent_type` | enum | Yes | Wastewater / Process water / Stormwater / Other |
| `volume_m3` | number | Yes | |
| `destination` | enum | Yes | Municipal sewer / Treatment plant / Surface water / Ground |
| `treatment_level` | enum | Progressive | None / Primary / Secondary / Tertiary |
| `permit_required` | boolean | Progressive | |
| `permit_compliant` | boolean | Conditional | If permit required |
| + data quality fields | | | |

---

## Domain 8: Data Quality & Traceability

This domain is **embedded throughout** — not a separate data entry section.

### Quality Dashboard (calculated)

| Metric | Calculation |
|--------|-------------|
| `total_data_points` | Count of all records across domains |
| `high_confidence_percent` | % with confidence = High |
| `medium_confidence_percent` | % with confidence = Medium |
| `low_confidence_percent` | % with confidence = Low |
| `estimated_percent` | % with source = Estimate |
| `data_coverage_percent` | Domains with data / 7 (excluding this domain) |
| `temporal_coverage_months` | Number of months with data |
| `stale_data_count` | Records not updated in 60+ days |

### Completion Score (for progress bar)

| Component | Weight | Calculation |
|-----------|--------|-------------|
| Domain coverage | 40% | (Domains with any data / 7) × 100 |
| Temporal depth | 30% | (Months with data / 12) × 100 (capped at 100) |
| Data quality | 20% | (High confidence % + Medium confidence % × 0.5) |
| Key fields complete | 10% | Critical fields populated |

**80% threshold** = Response-ready milestone

---

# Phase 2: Context Lenses

## External Lens: Your Environment

What's happening around you?

### Market Context

| Field | Type | Required | Notes |
|-------|------|----------|-------|
| `primary_markets` | array[string] | Yes | Geographic markets served |
| `market_scope` | enum | Yes | Local / Regional / National / EU / Global |
| `customer_type` | enum | Yes | B2B / B2C / Both |
| `key_customer_industries` | array[string] | Yes | What industries do your customers operate in? |
| `customer_concentration` | enum | Yes | Low (<20% from top customer) / Medium (20-50%) / High (>50%) |
| `top_customer_share_percent` | number | Progressive | % revenue from largest customer |

### Competitive Context

| Field | Type | Required | Notes |
|-------|------|----------|-------|
| `competitive_pressure_sustainability` | enum | Yes | None / Low / Medium / High |
| `competitor_sustainability_activity` | text | Progressive | What are competitors doing? |
| `market_sustainability_trend` | enum | Yes | Not a factor / Emerging / Established / Differentiator |
| `price_premium_potential` | enum | Progressive | None / Small (1-5%) / Medium (5-15%) / Significant (>15%) |

### Regulatory Context

| Field | Type | Required | Notes |
|-------|------|----------|-------|
| `csrd_status` | enum | Yes | Not applicable / Will apply (date) / Currently applies |
| `csrd_expected_date` | date | Conditional | When CSRD will apply |
| `vsme_adoption` | enum | Yes | Not considering / Considering / Implementing / Complete |
| `other_regulations` | array[string] | Progressive | Other applicable frameworks |
| `regulatory_pressure` | enum | Yes | None / Low / Medium / High |

### Buyer Requirements (Known)

| Field | Type | Required | Notes |
|-------|------|----------|-------|
| `buyer_requirement_id` | string | Auto | |
| `buyer_name` | string | Yes | Customer/buyer name |
| `requirement_type` | enum | Yes | Questionnaire / Data request / Certification / Audit / Other |
| `platform` | string | Progressive | EcoVadis, CDP, custom, etc. |
| `frequency` | enum | Yes | One-time / Annual / Ongoing |
| `deadline` | date | Progressive | Next deadline |
| `status` | enum | Yes | Not started / In progress / Complete / Recurring |
| `notes` | text | No | |

---

## Financial Lens: Your Budget Reality

What can you afford? What's the return?

### Financial Position

| Field | Type | Required | Notes |
|-------|------|----------|-------|
| `revenue_band` | enum | Yes | From Stack 0, confirm or update |
| `gross_margin_band` | enum | Yes | <10% / 10-20% / 20-40% / 40-60% / >60% |
| `profitability_trend` | enum | Yes | Declining / Stable / Growing |
| `cash_position` | enum | Yes | Tight / Adequate / Strong |

### Sustainability Investment

| Field | Type | Required | Notes |
|-------|------|----------|-------|
| `sustainability_budget_annual` | number | Progressive | Dedicated budget |
| `sustainability_budget_currency` | string | Conditional | |
| `budget_type` | enum | Yes | None / Ad hoc / Dedicated line item |
| `capex_capacity_12mo` | enum | Yes | None / Limited (<€50k) / Moderate (€50-200k) / Significant (>€200k) |
| `investment_priority` | enum | Yes | Not a priority / Low / Medium / High |

### Cost Pain Points

| Field | Type | Required | Notes |
|-------|------|----------|-------|
| `primary_cost_concerns` | array[enum] | Yes | Energy / Materials / Labor / Waste / Logistics / Compliance / Other |
| `cost_pressure_level` | enum | Yes | Low / Medium / High / Critical |
| `cost_reduction_target` | number | Progressive | % reduction goal |
| `cost_reduction_timeframe` | enum | Conditional | 1 year / 2-3 years / 5+ years |

### Financing & External Pressure

| Field | Type | Required | Notes |
|-------|------|----------|-------|
| `financing_relationships` | array[enum] | Yes | Bank loans / Investors / Grants / None |
| `sustainability_linked_financing` | enum | Yes | No / Exploring / In place |
| `lender_esg_requirements` | enum | Yes | None / Informal / Formal requirements |
| `insurance_esg_questions` | boolean | Progressive | Has insurer asked ESG questions? |

---

## Stack 1 Completion

### Completion Criteria

| Component | Requirement |
|-----------|-------------|
| Phase 1: Operational Ledger | 80%+ completion score |
| Phase 1: Reflection | Post-baseline reflection answered |
| Phase 2: External | All required fields in External lens |
| Phase 2: Financial | All required fields in Financial lens |

### Reflection Prompt (After Phase 1 @ 80%)

Shown to user before Phase 2:

> **Your baseline is response-ready.**
>
> Before we add context, take a moment to reflect:
>
> 1. Looking at your numbers, what stands out?
> 2. What surprised you?
> 3. What's your biggest concern?
>
> [Text input for each]

Stored as:
| Field | Type |
|-------|------|
| `reflection_standout` | text |
| `reflection_surprise` | text |
| `reflection_concern` | text |
| `reflection_completed_at` | timestamp |

### What Completion Unlocks

- ✅ Full Response Generator capability
- ✅ All Stack 1 exports (Scope 3 pack, raw data)
- ✅ Clean handoff to Stack 2+ (no gap warnings)
- ✅ Baseline health dashboard
- ✅ Year-over-year comparison (when enough data)

---

## Exports

### Scope 3 Data Pack

Auto-generated Excel containing:
- Company profile
- Emissions (Scope 1 + 2) by site
- Energy consumption by type
- Materials with supplier + origin
- Transport activity
- Methodology notes
- Confidence summary

### Raw Data Export

CSV/JSON containing all Stack 1 data with full metadata.

### Response Generator

Upload questionnaire → system maps to data → generates answers with confidence flags.

*(Detailed spec in separate document)*

---

## Milestones & Gamification

### Progress Bar (0-80%)

| Threshold | Milestone | Unlocks |
|-----------|-----------|---------|
| 25% | "You can respond to basic Scope 3 requests" | Basic Response Generator |
| 50% | "Your baseline covers core EcoVadis sections" | EcoVadis export preview |
| 80% | "VSME-ready. Your baseline is complete." | Full exports, Phase 2 prompt |

### Badges (Beyond 80%)

| Badge | Criteria |
|-------|----------|
| 🏷️ Full Materials | Domain 1 100% complete |
| 🏷️ Full Transport | Domain 5 100% complete |
| 🏷️ Supplier Origins | All materials have country of origin |
| 🏷️ 12-Month History | 12 consecutive months of data |
| 🏷️ High Confidence | 90%+ data points at High confidence |
| 🏷️ Zero Estimates | No estimated data points |

### Fun Facts (Examples)

Triggered at milestones or random completion:

- "The average SME spends 14 hours rebuilding sustainability data for each new request. You just eliminated that."
- "You've logged [X] tonnes of materials. That's equivalent to [Y] elephants."
- "Your Scope 2 emissions could be offset by [Z] trees growing for a year."
- "Companies with complete baselines respond to buyer requests 5x faster."

---

## Data Validation Rules

### Cross-Domain Validations

| Rule | Check |
|------|-------|
| Material balance | Inputs ≈ Outputs + Waste (within tolerance) |
| Energy emissions | Calculated emissions match entered fuels |
| Water balance | Withdrawal ≥ Discharge |
| Workforce consistency | FTE consistent across periods (flag large swings) |
| Site coverage | All active sites have data |

### Temporal Validations

| Rule | Check |
|------|-------|
| No future data | Period cannot be in the future |
| Reasonable ranges | Flag outliers vs. previous periods (>50% change) |
| Gap detection | Missing periods flagged |

### Quality Warnings (Non-Blocking)

- "Your energy data is 100% estimated. Can you locate actual bills?"
- "Transport is spend-based only. Activity data would improve accuracy."
- "Site X has no data for 3 months. Is it still operational?"

---

## Import Capability

For users who have baseline data elsewhere:

### Supported Formats
- CSV (with template)
- Excel (with template)
- JSON (API)

### Import Validation
- Map columns to schema
- Flag missing required fields
- Assign default confidence (Medium) unless specified
- User confirms before import finalizes

### Post-Import
- Data appears in relevant domains
- Quality dashboard updates
- Gaps clearly shown
- "You imported [X] records. Review and enhance?"

---

## Version History

| Date | Change |
|------|--------|
| January 27, 2026 | Initial schema |

---

*This document defines what Stack 1 captures. UI/UX flows, Response Generator spec, and technical implementation are separate concerns.*
