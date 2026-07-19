# Ecosystems United -- Certification, ESG Passport - Agriculture & the Packs Platform

Consolidated plan. Supersedes the "EU Ecolabel add-on" framing.
(Written ASCII-safe on purpose so it renders correctly in any tool/encoding.)

## North star

The product is a thin branded app shell + a swappable domain pack, both drawing on the shared `response-ready` engine. Packs are the unit of reuse and the unit of value.

- `response-ready` = a source-controlled pack library (ESG, GlobalG.A.P., EU Organic, EU Ecolabel, VSME, ...), each pack versioned and freshness-checked against its official source.
- Each product = shell + pack + branding + license. -> ESG Passport (ESG pack, esgforsuppliers), ESG Passport - Agriculture (GlobalG.A.P. pack, Ecosystems United), and eventually any org's standard = their pack = their own Passport (white-label).
- Moat: a pack is not a static workbook -- it is kept current as the scheme/regulation changes. That is what you sell and cross-promote.

Brand separation is a hard requirement: esgforsuppliers stays its own space (ESG/VSME supplier questionnaires). ESG Passport - Agriculture is Ecosystems United-specific. They are siblings sharing only the engine + pack library, never a login or a brand. EU marketing surfaces (tools, takeaways, upsells) point ONLY at EU-owned paid steps -- never at the esgforsuppliers product.

## The EU funnel (two honest branches off the free baseline)

```
free readiness scorecards -> free baseline tracker ->
    ├─ "buyers keep sending ESG/Scope-3 questionnaires" -> Response Generator (EUR 39, pay-per) -> [later] ESG Passport - Agriculture (own-it)
    └─ "I need to certify"                               -> cert-path + evidence-gap tool -> Response Generator (GlobalG.A.P., EU Organic, EU Ecolabel)
```

Language discipline: keep the split concrete -- "answer buyer questionnaires" vs "certify / close evidence gaps." Do NOT market "audit-prep" as a capability until the actual evidence-gap workflows exist; until then it is an evidence-gap checklist, not audit prep.

## What already exists (do not rebuild)

- GlobalG.A.P. pack in `packages/response-ready/domain-packs/globalg-a-p/` -- templates, classification, `GAPFarmData` model. Proven: EU's Response Generator already loads ESG + GlobalG.A.P. packs, and `src/lib/respond/dataBridge.ts` maps the EU baseline via `buildFarmData -> GAPFarmData`.
- Ecolabel selector (`/tools/ecolabel-selector`), certification CTAs, downloadable Ecolabel Readiness Checklist, and agricultural tracker fields (livestock, land use, fertiliser, crops) in the `(app)/data/*` surface.
- ESG Passport shell (`esg-passport` repo) -- local-first, LemonSqueezy-gated. It hardcodes the ESG pack; that is the seam an ag variant swaps.

## Phases

### Phase 1 -- ship the conversion branch, honestly (ready now; keep it SMALL)

Deliberately narrow so we learn from real conversion before building more:
1. Fix the known credibility issues (see tracker pass below). [livestock overcount + false CSV-import claim already fixed, commit 9052eeb9]
2. Expose the paid upsell after baseline: the EU-owned Response Generator (EUR 39). NOT Passport -- ESG Passport - Agriculture does not exist yet, and we do not point EU users at the esgforsuppliers product.
3. Make exports include the right ag data (fix the JSON "complete" export that currently omits landUse/fertiliser/livestock/crops).
4. Ship: push `feat/traffic-conversion-tools`, open PR, `vercel --prod`.

Also in Phase 1 (cleanup from the brand-separation decision): repoint the in-Excel and on-page upsells from the esgforsuppliers ESG Passport to the EU-owned Response Generator. Nothing source-ledger or cert-selector belongs in Phase 1.

Remaining tracker credibility items (from the code review): crops period-scoping (flow); Scope 2 `0%`-grid treated as 100%; "Scope 1 combustion" + "country-specific factors" claimed but not implemented (implement or soften); JSON export ag-data completeness.

### Phase 2 -- pack hardening + certification system (the real platform foundation)

This is what makes "maintained packs" true rather than a claim.
- Pack source/version metadata: add to `packages/response-ready/domain-packs/*` so templates/rules show which standard + version they were reviewed against (e.g. GlobalG.A.P. IFA vX, EU Organic source Y). Shared package -- benefits the ESG pack too; coordinate since esgforsuppliers also consumes it.
- Source ledger + freshness checker (semi-automated, never auto-rewrites):
  - `docs/certification/source-ledger.json` -- per source: official URL, version/date, volatility, affected articles/tools/packs, lastChecked, nextReview. Sources: VSME, CSRD, EU Green Claims, EU Organic, GlobalG.A.P. (IFA version), EU Ecolabel, CAP, EUDR, food-chain Scope 3, key retailer/cert schemes.
  - `scripts/check-certification-sources.mjs` -- fetch source pages, hash key text, emit a Markdown impact report grouped by affected asset. Human decides; script never edits guidance/templates.
- Expand GlobalG.A.P. pack tests; add stubs/specs for EU Organic + EU Ecolabel packs before full templates.
- Cert-selector v2: extend `/tools/ecolabel-selector` from "label family + generic readiness" -> "certification path + evidence-gap plan," two-stage: (1) which cert path fits (product, market, buyer pressure, claim type, current certs); (2) what evidence is missing, mapped to tracker domains (traceability, inputs, soil, water, PPP/IPM, labour, biodiversity, waste, energy, audit history, doc owner). Output: 30/60/90-day gap plan + evidence checklist tied to existing tracker domains. First-class tracks: GlobalG.A.P., EU Organic, EU Ecolabel, Rainforest Alliance/Fairtrade; B Corp later. EU Ecolabel is one option, not the center.
- Article/page freshness metadata where practical (`sourceChecked`, `nextReview`, `certificationTopics`, `sourceUrls`); ArticleCTA routes ecolabel/cert articles to the specific cert track, not only the generic selector.

### Phase 3 -- ESG Passport - Agriculture (EU sibling) + Response Generator evidence-gap modes

- New EU-owned product (recommended: separate repo/deploy branched from `esg-passport`, so esgforsuppliers' Passport stays pristine): swap engine to `gapDomainPack`, add a farm data model + entry UI to the shell (the ESG shell only has `buildCompanyData`; mirror EU's `buildFarmData`), EU branding, a new LemonSqueezy product + license tier.
- Response Generator modes: buyer-questionnaire mode and evidence-gap mode (add explicit "audit-prep" only once the evidence-gap workflow is real).
- Repoint the EU upsell to ESG Passport - Agriculture once live (from the Response Generator interim target).

### Phase 4 (north star) -- the white-label packs platform

- Generalize the shell so any org's standard = their pack = their own branded Passport: per-tenant branding, licensing, and a pack-onboarding path. Cross-promote on LinkedIn to orgs with their own scheme. Do NOT build until Phase 3 proves people pay for a maintained-pack product; white-label = tenant config + billing + permissions + custom standards + support + onboarding, all of which is premature before one paid vertical works.

## Recommended work order (matches the review)

1. Finish + push the current EU conversion branch (Phase 1).
2. Add source/version metadata to existing ESG and GlobalG.A.P. packs.
3. Build the certification source ledger + impact-report script.
4. Expand GlobalG.A.P. tests.
5. Upgrade `/tools/ecolabel-selector` into the certification path / evidence-gap selector.
6. Only then branch the Passport shell for Agriculture.

## Test plan

- Source-ledger parsing, stale-source detection, changed-source impact reports.
- Cert-selector scoring/recommendations across ag products, B2B buyers, EU vs global markets.
- ResponseReady: GlobalG.A.P. classification, data retrieval, missing-data gaps, conservative answer generation.
- Manual: ecolabel articles, CTA routing, checklist download, funnel (note: the ecolabel workshop is retired -- verify the tool/checklist/Response-Gen funnel, not a workshop).

## Assumptions / boundaries

- Ecosystems United is the home for agricultural ecolabel/certification content.
- esgforsuppliers keeps supplier ESG/VSME questionnaire readiness as its center; cross-links to EU only for farm/agricultural certification depth.
- First implementation priority: GlobalG.A.P. (cheapest path to a real proof point -- infra already exists), with EU Organic/EU Ecolabel starting as selector/evidence-gap scaffolds before full response packs.
- `response-ready` is shared by EU and both Passports -- treat pack changes as cross-property.
