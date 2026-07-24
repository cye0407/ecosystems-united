# SEO Spike Ride Plan — July 2026

**Scope:** the 7 article pages currently spiking, their funnel wiring, link mesh, structured data, and cluster-extension opportunities.
**Status:** analysis only — NO changes applied. Every item touching CTAs, links, or copy is `[proposal — needs approval]` per the no-CTA-changes-without-approval rule. New-content items are `[safe — additive]`.

Verified against the codebase on branch `feat/regenerative-cluster` (2026-07-24):

- Tools that exist: `/tools/regenerative-roi`, `/tools/efficiency-assessment`, `/tools/biofuel-feedstock-compare`, `/tools/regeneration-assessment`, `/tools/soil-health-checklist`, + 10 more.
- Playbooks that exist: `/playbooks/stack-1-metrics`, `/playbooks/stack-2-efficiency`, `/playbooks/stack-3-circularity`, `/playbooks/stack-4-resilience` (via `src/lib/playbooks/registry.ts`), and `/playbooks/stack-5-regeneration` (own page). **There is no standalone biofuels playbook** — nearest funnel for biofuels traffic is `biofuel-feedstock-compare` → Stack 3 circularity playbook.
- No article body anywhere links to a `/playbooks/*` route. The playbook layer is only reachable through the tools — so the article→tool handoff is the single point of failure for the whole funnel.

---

## 1. Per-page current state

CTA layers on every article page (3 slots):
1. **Top** — back-link to a `/framework/stack-N-*` page (legacy education funnel).
2. **Mid** — `BaselineCTA` (free tracker + €39 response generator), hardcoded in each page body.
3. **Bottom** — an in-page hardcoded CTA block (almost always `/framework/stack-N-*`), **plus** the layout-injected stack-aware `ArticleCTA` (`src/components/marketing/ArticleCTA.tsx`) that renders *after* it.

| Page (slug) | Stack badge | In-page bottom CTA → | ArticleCTA (layout) → | Best-fit funnel entry? | JSON-LD | Inbound links (site) |
|---|---|---|---|---|---|---|
| `pros-and-cons-of-advanced-biofuels` | 3 | `/framework/stack-3-circularity` | `biofuel-feedstock-compare` (BIOFUELS set) | YES — tool is right; framework CTA competes | Article only | 3 (biofuels-guide + 2 siblings) |
| `regenerative-guide` (pillar) | 5 | `/tools/regeneration-assessment` (dark block) | `regenerative-roi` (REGEN set) + `/tracker` | CONFLICT — two different assessment tools + BaselineCTA rendered TWICE (mid + end) | Article only | 10 (all 9 spokes + regenerative-roi tool) |
| `regenerative-agriculture-economics` | 5 | `/framework/stack-5-regeneration` | `regenerative-roi` (REGEN set) | YES — correct; framework CTA competes | Article only | 10 |
| `subsurface-drainage-design` | 2 | `/framework/stack-2-efficiency` | `efficiency-assessment` (EFFICIENCY set) | YES — correct; framework CTA competes | Article only | **1** (water-management-guide only) |
| `agricultural-drainage` | 2 | `/framework/stack-2-efficiency` | `efficiency-assessment` (EFFICIENCY set) | YES — correct; framework CTA competes | Article only | 5 |
| `cover-crop-selection-guide` | 3 | `/framework/stack-3-circularity` | **NEWSLETTER fallback** — slug is in NO ArticleCTA set (hash 2606 → newsletter) | **NO — biggest gap.** Deepest article on the list (388 lines) ends with a newsletter signup, no tool | Article only | **1** (soil-management-guide only) |
| `cover-crops-roi` | **2** (inconsistent: selection guide says 3, regen cluster says 5) | `/framework/stack-2-efficiency` | `regenerative-roi` (REGEN set) | Mostly — closing tool is right; in-page CTA pushes a different stack | Article only | 11 |

All 7 slugs have entries in `src/lib/article-metadata.ts`, so Article JSON-LD is emitted for all. No FAQPage or HowTo schema exists anywhere in the repo (`ToolStructuredData.tsx` emits SoftwareApplication + BreadcrumbList for tools only).

### Per-page detail

**pros-and-cons-of-advanced-biofuels** (`src/app/(marketing)/articles/pros-and-cons-of-advanced-biofuels/page.tsx`)
- Further reading: `advanced-biofuels`, `cellulosic-biofuels`, `circular-economy-explained`. Missing: `biofuels-guide` pillar (links TO this page, but not back), `biofuels-in-aviation` (the "where biofuels make sense" section names aviation explicitly), `biomass-energy-farm` / `farm-waste-to-value` (the Stack 3 close is literally about monetising waste streams).
- Downstream: `biofuel-feedstock-compare` tool itself dead-ends into `/signup?from=biofuel-compare&stack=3` + one article — it never links the Stack 3 circularity playbook, so biofuels traffic can't reach the playbook layer at all.
- Structure is a native FAQ: "pros and cons" pages win FAQ rich results.

**regenerative-guide** (pillar)
- Link mesh is the best on the site — all 9 spokes linked inline with descriptive anchors. But the cover-crops section links only `cover-crops-roi`, NOT `cover-crop-selection-guide` (the spiking sibling), and nothing links the selection guide from this pillar.
- CTA overload at page end: dark block → `regeneration-assessment` (5-min qualitative tool), then `BaselineCTA` (second render), then layout `ArticleCTA` → `regenerative-roi`. Two different "assess yourself" tools within one screen dilutes both; the ROI calculator is the one wired to the Stack 5 playbook (`/tools/regenerative-roi` links `/playbooks/stack-5-regeneration`).

**regenerative-agriculture-economics**
- Cleanest page of the seven. "Part of the regenerative framework" breadcrumb ✓, correct ArticleCTA ✓. The "Building Your Business Case — Step 3: Financial modeling" paragraph describes exactly what `/tools/regenerative-roi` does but doesn't link it — an inline link there converts at the moment of highest intent.

**subsurface-drainage-design**
- Thinnest inbound mesh of the seven: only `water-management-guide` links to it, and the page itself never links back to that pillar. Further reading is 2 bare links (`agricultural-drainage`, `soil-health-business-case`).
- Contains a full worked payback model (€3,000/ha, yield scenarios, 7–15 yr payback) as static prose — this is a ready-made calculator spec, and the highest-commercial-intent content on the list.
- Missing sibling links: `soil-compaction-management` ("compaction vs drainage" diagnosis is discussed in-body), `irrigation-system-planning` (there's a whole "Integration with Irrigation" section), `precision-irrigation-technology`.

**agricultural-drainage**
- Links `agricultural-irrigation` + `irrigation-system-planning` but NOT `subsurface-drainage-design` — the sibling link is one-way (subsurface → this page only). Readers landing on the overview page never see the deep-dive with the cost/payback content. Also no link to the `water-management-guide` pillar.

**cover-crop-selection-guide**
- The best content of the seven (species profiles, costs/ha, mixes, termination, regional guidance) and the worst funnel: absent from every ArticleCTA slug set, so the layout renders the newsletter fallback. Per the funnel design, cover-crop pages should feed `regenerative-roi` → Stack 5 playbook (note: the page badge says Stack 3 — Cat should confirm which stack identity wins before the slug-set change).
- Further reading: `cover-crops-roi`, `soil-organic-matter-building` (bare links). Missing: `regenerative-guide` pillar, `intercropping-guide` cluster, `nutrient-management-planning`.
- The "Goals Matrix" (which species for which goal) is a textbook FAQPage schema candidate; the 6-step "Making Your Selection" is a HowTo candidate.

**cover-crops-roi**
- Solid mesh (11 inbound) and correct closing tool. Minor incoherence: page badge + in-page bottom CTA say Stack 2 while its ArticleCTA membership and the pillar breadcrumb say Stack 5/regen. Won't block conversion; worth harmonising when touched next.

---

## 2. Ranked action list (highest leverage first)

### A1. Put `cover-crop-selection-guide` into the regenerative funnel — `[proposal — needs approval]`
Add the slug to `REGEN_ECONOMICS_SLUGS` in `ArticleCTA.tsx` (one line) so the page closes with the `regenerative-roi` calculator instead of the newsletter fallback. Highest-traffic-quality page on the list currently has zero tool CTA. Decision needed: regen funnel (per the cluster plan) vs Stack 3 badge already on the page. Effort: S.

### A2. Two-way drainage mesh + pillar links — `[proposal — needs approval]`
- `agricultural-drainage` Further Reading: add `subsurface-drainage-design` (overview → deep-dive with the money content) and `water-management-guide`.
- `subsurface-drainage-design`: add back-link to `water-management-guide` pillar + `soil-compaction-management` + `irrigation-system-planning` in Further Reading.
Overview page is the broader-intent entry; right now its readers never discover the commercial deep-dive. Effort: S.

### A3. Resolve the regenerative-guide CTA pile-up — `[proposal — needs approval]`
Page ends with regeneration-assessment CTA → duplicate BaselineCTA → regenerative-roi ArticleCTA (three blocks, two competing tools). Proposal: keep ONE tool CTA (recommend `regenerative-roi` — it's the one wired to the Stack 5 playbook), drop the duplicate end-of-page BaselineCTA. Also add an inline link to `cover-crop-selection-guide` in the pillar's cover-crops section. Effort: S–M.

### A4. FAQPage/HowTo JSON-LD component + wire on 3 pages — `[safe — additive]`
Build a small `FaqJsonLd` (and optionally `HowToJsonLd`) sibling to `ArticleJsonLd.tsx` and add it to: `pros-and-cons-of-advanced-biofuels` (pros/cons Q&A), `cover-crop-selection-guide` (goals matrix), `subsurface-drainage-design` (cost/payback questions). No CTA, link, or visible-copy change; pure additive markup targeting rich results while the pages are hot. Content of Q/A pairs should be lifted verbatim from on-page text (Google requires visible correspondence). Effort: M.

### A5. Inline tool links at moment-of-intent — `[proposal — needs approval]`
- `regenerative-agriculture-economics` → link "financial modeling" (Step 3) to `/tools/regenerative-roi`.
- `subsurface-drainage-design` → link the payback section to `/tools/efficiency-assessment` (until A7 exists).
- `pros-and-cons-of-advanced-biofuels` → link "evaluate biofuel pathways" body text to `/tools/biofuel-feedstock-compare`.
In-body links at the exact paragraph where the reader is doing the math outperform end-of-page blocks. Effort: S.

### A6. Biofuels loop closure — `[proposal — needs approval]`
- `pros-and-cons-of-advanced-biofuels` Further Reading: add `biofuels-guide` pillar and `biofuels-in-aviation` (+ optionally `farm-waste-to-value` to match the Stack 3 close).
- `biofuel-feedstock-compare` tool: add a `/playbooks/stack-3-circularity` link so biofuels traffic can reach the playbook layer (today it dead-ends at signup). Verified: no standalone biofuels playbook exists — do NOT link one.
Effort: S.

### A7. Drainage payback calculator tool — `[safe — additive]`
Extract the worked model already published in `subsurface-drainage-design` (cost/ha × spacing class, yield uplift scenario, extra benefits toggle → payback years) into `/tools/` following the `regenerative-roi` pattern, funneling to Stack 2 playbook. Highest-commercial-intent spike page gets its own interactive entry instead of a generic scorecard. Effort: L.

### A8. Cluster-extension articles while intent is hot — `[safe — additive]`
Checked against the full `src/app/(marketing)/articles/` inventory (119 articles) — none of these exist:

**Cover-crop cluster** (feeds regenerative-roi):
1. *Cover crop termination: methods, timing, and cost per hectare* — termination is mentioned in both spiking cover-crop pages but has no dedicated page; it's the #1 practical follow-up question.
2. *Cover crop seeding-rate & mix cost calculator* (tool-lite or article) — the selection guide already lists rates and €/ha per species; assembling them is cheap.
3. *Grazing cover crops: forage value and livestock integration economics* — "integrated livestock/managed grazing" is named in the regen pillar as a top-ROI practice with no supporting page.

**Drainage cluster** (feeds efficiency-assessment):
4. *Controlled drainage & drainage water management* — described at length inside subsurface-drainage-design (30–50% nitrate reduction) but has no page; strong EU-regulation search angle.
5. *Wet fields: compaction or drainage? A diagnosis guide* — bridges `soil-compaction-management` and both drainage pages; classic problem-first query.

**Biofuels cluster** (feeds biofuel-feedstock-compare):
6. *Selling crop residues as biofuel feedstock: farm-gate economics* — the spiking page's Stack 3 close poses exactly this question ("could selling feedstock generate revenue?") and no page answers it. (Biogas is already covered by `biomass-energy-farm` — don't duplicate.)

**Regen-economics cluster:**
7. *Regenerative sourcing premiums: what buyers actually pay* — the pillar claims buyers pay premiums for verifiable regenerative sourcing; no page substantiates it. Doubles as a bridge to the ESG/buyer-questionnaire product funnel.

Effort: M per article.

### A9. Harmonise stack identity on cover-crop pages — `[proposal — needs approval]`
`cover-crop-selection-guide` badges Stack 3, `cover-crops-roi` badges Stack 2, the regen cluster claims both for Stack 5. Pick one story (recommend Stack 5/regen, matching ArticleCTA and the pillar) and align badges + bottom CTAs when the pages are next touched. Cosmetic for users, but confusing multi-stack signals also dilute internal anchor-text consistency. Effort: S.

### A10. Framework-vs-tool bottom CTA rationalisation (all 7 pages) — `[proposal — needs approval]`
Every spiking page carries a legacy hardcoded bottom CTA to `/framework/stack-N-*` immediately above the newer stack-aware tool CTA — two full-width colored blocks back-to-back with competing asks. Long-term proposal: retarget the in-page block to the matching tool/playbook or remove it, leaving one closing ask per page. Flagged last because it's the most invasive change and master's funnel state is Cat's live tuning. Effort: M.

---

## 3. Notes & caveats

- All findings verified in code, not in production; branch `feat/regenerative-cluster` — production (`vercel --prod`) state is unverified per project memory.
- `wordpress-redirects.ts` references several spiking slugs — the spike may partly be legacy-URL equity resolving; worth a GSC query check before investing in A7/A8 ordering.
- Nothing in this document has been applied. Items A1–A3, A5, A6, A9, A10 change CTAs/links/copy and require explicit approval. A4, A7, A8 are additive (new files/markup/pages) but still ship through normal review.
