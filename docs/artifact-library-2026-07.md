# Artifact Library + Extraction/Respond Wiring (2026-07-24)

Companion to `docs/roadmap-workspace-2026-07.md`. Two parts: (1) the catalog
of **prepared things a grower can generate as drafts from their own data**
(this IS the paid-value catalog — every ladder tier sells artifacts from this
list), and (2) how `esg-extract` and the response-ready **GlobalG.A.P. pack**
wire into the workspace to feed them.

Pattern for every artifact: deterministic template + farm data injected +
**gaps honestly flagged** (mad-libs guided-builder UX from the Passport
policy-builder prototype fills the gaps) + optional purchase-time compose
pass. Never boilerplate: an artifact only claims what the data supports.

## Part 1 — The catalog

Legend: tier F = free, S = stack module, C = Passport Complete, X = cert rung
(€499). ✔ = engine already exists, ◐ = partial, ○ = new build.

### Buyer-facing (respond engine + tracker)
| # | Artifact | Needs | Engine | Tier |
|---|---|---|---|---|
| 1 | Buyer data pack (VSME-lite one-pager: emissions, energy, water, waste + data-quality flags) | tracker domains | ESG pack exportConfig ◐ | C |
| 2 | Questionnaire answer drafts | tracker + the buyer's form | respond engine ✔ (live) | credits |
| 3 | Farm profile one-pager (practices + evidence, "about our farm") | profile + playbook practices | template ○ | S1 |
| 4 | Product footprint sheet (per-tonne/-litre intensity) | outputs + energy/emissions | tracker calcs ◐ | S1 |

### Lender/grant-facing (Stack 4 + economics)
| # | Artifact | Needs | Engine | Tier |
|---|---|---|---|---|
| 5 | Resilience statement (runway, buyer concentration, insured risks, buffers) | S4 module inputs | S4 calculators ○ | S4 |
| 6 | Grant/funding evidence annex (baseline + planned practices + expected ROI) | tracker + playbook plan | playbook seed + ROI ◐ | S5/C |
| 7 | Investment case one-pager (J-curve, payback, economics table) | S5 module inputs | roi-model ✔ needs export | S5 |

### Certifier-facing (GlobalG.A.P. pack)
| # | Artifact | Needs | Engine | Tier |
|---|---|---|---|---|
| 8 | GG IFA self-assessment pre-fill + gap report | tracker→GAPFarmData adapter | GAP pack ✔ + adapter ○ | X |
| 9 | Audit-prep evidence binder checklist (docs to gather, mapped to control points) | gap report | GAP templates ◐ | X |
| 10 | GRASP social-practice readiness sheet | workforce data | GAP pack + workforce extractor ◐ | X |

### Operational (playbooks + calculators)
| # | Artifact | Needs | Engine | Tier |
|---|---|---|---|---|
| 11 | 3-year sequenced plan (the playbook itself, keepable) | playbook worksheet | ✔ needs persistence/export | S |
| 12 | KPI baseline sheet (CSV, start-line values + recheck dates) | baselines entered | review item ○ | S |
| 13 | Nutrient management plan draft | soil/manure tests + S3 calc | S3 module ○ | S3 |
| 14 | Cover-crop plan (species, rates, windows, termination) | soil + issues | stack-5-recommend ✔ needs export | S5 |
| 15 | Energy leak report (ranked savings + payback) | spend inputs | S2 module ○ | S2 |
| 16 | Waste & disposal cost report | streams + fees | S3 module ○ | S3 |
| 17 | Risk register + contingency one-pagers | S4 inputs | S4 module ○ | S4 |

### Market/story (Stack 5 + honesty engine)
| # | Artifact | Needs | Engine | Tier |
|---|---|---|---|---|
| 18 | Honest claims sheet (what you can/can't say, evidence-conditional, Green-Claims-aware) | tracked evidence | scrubRules + exclusionRules ◐ | C |
| 19 | Farm story page draft (for direct-market growers) | profile + practices + claims sheet | template ○ + compose pass | C |

Build order comes from demand signal, not guesswork: free versions of the
cheapest artifacts (11, 12, 14 exist or nearly) double as Reddit artifact
drops (`docs/reddit-kit-2026-07.md` archetype 8) — download counts rank what
gets built next.

## Part 2 — Wiring esg-extract + the GlobalG.A.P. pack

### Verified current state (2026-07-24)
- **EU app** already has the Add Data modal + `src/lib/extract/mapResult.ts`
  mapping esg-extract `ExtractionResult`s onto tracker records (types copied
  locally, no hard dependency). Vendored `packages/response-ready` includes
  `esg` + `globalg-a-p` packs (IFA v6 + GRASP, `GAPFarmData` dataModel,
  export sheets, scrub rules).
- **esg-extract** (`CY/esg-extract`): rules-based, "extract don't
  interpret", confidence scoring, extractors for energy / fuel / waste /
  workforce + provider invoice templates; outputs already in ResponseReady
  and Passport formats. **Gap:** CLAUDE.md's architecture lists a water-bill
  extractor (`water.ts`) that does not exist in `src/extractors/`.
- **Fork caution:** response-ready canonical (`1b48ab8`) vs EU's older
  vendored copy — the test-gated sync (PR #3) must land **before** building
  on pack internals.

### Wiring plan, in order
1. **Sync the fork** (PR #3) — prerequisite for everything touching packs.
2. **Extraction kills Stack 1 entry friction** (the #1 agtech adoption
   blocker). Extend Add Data coverage: verify fuel-receipt mapping, build
   the missing water extractor, then the ag-new ones — **input invoices**
   (fertiliser/feed/seed quantities + spend → Stacks 2/3 calculators) and
   **settlement statements** (milk/grain volumes → output intensity KPIs).
   Each is the established pattern: extractor in esg-extract, mapping in
   `mapResult.ts`. Extraction confidence flags flow into the data-quality
   score the tracker already has.
3. **Tracker ↔ GAPFarmData adapter** — one module that retrieves tracker
   data into the GAP pack's data model. Unlocks artifacts 8–10 and the cert
   rung's readiness view.
4. **Readiness meter = pack-coverage function.** "% of pack X's answer
   templates satisfiable from your data" — same function, three uses: buyer
   readiness (ESG/VSME pack), cert readiness (GAP pack), and the free
   tracker's progress meter. This makes the meter honest by construction:
   it measures the same thing the respond engine will actually do.
5. **Artifact composer** — deterministic doc assembly (template + data +
   flagged gaps), reusing pack exportConfig sheets; purchase-time compose
   pass on top per the AI rule.
6. **Trust-model decision (Cat):** esg-extract standalone assumes cloud OCR.
   For the own-it/local-first story, prefer client-side extraction where
   possible (pdf text in-browser; OCR via wasm Tesseract) and keep cloud OCR
   as explicit opt-in for scanned docs. Also: extraction's ladder placement
   — proposal: small free taste (first 2–3 documents), full extraction in
   Complete; the €500-standalone model stays for the corporate rung.
