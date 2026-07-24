# Playbook Authority Sources (draft for review)

Every Playbook claim, figure, and funding reference must trace to an authoritative source below.
This is the credibility + honesty backbone: rules/LLM compose the plan, but the *facts* come from here.
Reuses the freshness system — these become a JSON ledger monitored by `npm run check:sources`, so
if CAP rules or a carbon framework change, the affected playbooks get flagged for review.

Legend: [GOV] government/EU · [STD] standards body · [RES] research institute/extension · [DATA] dataset

## Stack 5 — Regenerative economics / soil / cover crops (the reference playbook)

Soil health & regenerative practice
- [RES] Rodale Institute — Farming Systems Trial (long-run regenerative economics/agronomy): rodaleinstitute.org
- [GOV] USDA NRCS Soil Health: nrcs.usda.gov/conservation-basics/natural-resource-concerns/soils/soil-health
- [RES] SARE (USDA Sustainable Agriculture Research & Education) — Cover Crops: sare.org/resources
- [RES] AHDB (UK) — soil & cover crops (extension-grade, EU-relevant): ahdb.org.uk
- [RES] FiBL — organic/regenerative research: fibl.org
- [GOV] FAO Global Soil Partnership: fao.org/global-soil-partnership
- [GOV] EU Soil Observatory (EUSO / ESDAC): esdac.jrc.ec.europa.eu

Funding (region-specific — the "money map")
- [GOV] EU CAP eco-schemes + national CAP Strategic Plans: agriculture.ec.europa.eu/common-agricultural-policy
- [GOV] UK Sustainable Farming Incentive (SFI): gov.uk/guidance/sustainable-farming-incentive
- [GOV] USDA EQIP / CSP (US buyers): nrcs.usda.gov/programs-initiatives

Carbon farming & markets (highest hallucination risk → tightest grounding)
- [GOV] EU Carbon Removals & Carbon Farming Certification (CRCF): climate.ec.europa.eu/eu-action/carbon-removals
- [STD] GHG Protocol (Agricultural Guidance / Scope 3): ghgprotocol.org
- [STD] ISO 14064-2 (project-level GHG quantification)
- [STD] Verra VCS + Gold Standard (voluntary carbon methodologies): verra.org / goldstandard.org

## Stack 3 — Advanced biofuels / margin recovery (already partly in the cert ledger)
- [RES] IEA Bioenergy: ieabioenergy.com
- [GOV] EU Renewable Energy Directive (RED III) sustainability criteria: energy.ec.europa.eu (also in source-ledger.json)
- [DATA] Argonne GREET model (lifecycle carbon intensity): greet.anl.gov
- [GOV] EU EUDR (deforestation-free feedstock): see source-ledger.json (eudr)

## Stack 2 — Water, drainage & operational efficiency
- [GOV] FAO AQUASTAT (agricultural water): fao.org/aquastat
- [STD] ICID — International Commission on Irrigation & Drainage: icid.org
- [RES] University extension drainage guides (e.g. Iowa State, Teagasc for EU): teagasc.ie
- [STD] GHG Protocol / IPCC Tier factors for energy & emissions (already used in the tracker)

## Cross-cutting (all playbooks)
- [GOV] IPCC 2019 Refinement — Tier 1 emission factors (already backing the tracker's calculations)
- [STD] EU Green Claims Directive — what you may/may not claim (in source-ledger.json)

## Honesty rules baked into every playbook
- Numbers are DIRECTIONAL and come from the deterministic engine (the ROI model / tracker), never invented.
- Carbon/premium income framed as UPSIDE requiring third-party verification — never guaranteed.
- Region-specific funding only cited when we have the source for that region; otherwise say "check your national scheme."
- Every playbook ends with the source list it drew on (trust + defensibility).

---

## Generation architecture (rules-first, LLM-where-valuable)

1. **Deterministic backbone (no LLM):** compute the levers (ROI numbers, selected practices, weakest
   dimension, region, size) and SELECT the relevant vetted source snippets from this ledger. All
   NUMBERS come from here.
2. **LLM composition (grounded, one call per purchase):** the model is given ONLY the deterministic
   scaffold + the selected authoritative snippets, and asked to compose the bespoke prose — constrained
   to those sources, told to inject the pre-computed numbers verbatim, and to cite. It makes the plan
   feel written-for-you without inventing facts.
3. **Guardrails:** numbers are re-checked against the deterministic values post-generation; the source
   list is appended; the directional disclaimer is fixed template text the LLM cannot alter.

Net: rules guarantee correctness + numbers; the LLM buys "bespoke feel"; the authority ledger keeps it
honest and current. One-time generation per €29 purchase makes the LLM cost trivial.
