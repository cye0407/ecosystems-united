# Decision Log — ongoing

One entry per decision. Status: OPEN → DECIDED (date + choice), BLOCKED (on
another decision), or PARKED. Presented to Cat one at a time in chat; this
file is the tracker of record.

| ID | Title | Status |
|---|---|---|
| D-001 | Cover-crop pages: stack identity + tool CTA | DECIDED 2026-07-24: A |
| D-002 | Link-mesh batch (drainage, inline links, biofuels loop) | DECIDED 2026-07-24: A |
| D-003 | Regenerative pillar CTA pile-up | DECIDED 2026-07-24: A |
| D-004 | Legacy /framework bottom CTAs on spiking pages | DECIDED 2026-07-24: B |
| D-005 | Additive SEO builds (FAQ schema, drainage calculator, cluster articles) | DECIDED 2026-07-24: C |
| D-006 | Assessment→playbook mapping tables | BLOCKED on D-014 |
| D-007 | Stack 3 assessment scoring quirk | DECIDED 2026-07-24: B |
| D-008 | Merge `feat/playbook-keepable-layer` | DECIDED 2026-07-24: A |
| D-009 | Content: publish coefficients + the sharp opinion | DECIDED 2026-07-24: A w/ rewrite |
| D-010 | Content: two small honesty edits | DECIDED 2026-07-24: A modified |
| D-011 | Publishing sequence + channel infrastructure | DECIDED 2026-07-24: A |
| D-012 | Standalone biofuels playbook | DECIDED 2026-07-25: B |
| D-013 | Framework CTAs site-wide | DECIDED 2026-07-25: A - via combined sweep |
| D-014 | Workspace data capture for playbook concepts | OPEN — decide at Wave-2 scoping |
| D-015 | Stack-job mid-article CTAs (replace blanket BaselineCTA) | DECIDED 2026-07-25: A + matrix gate |
| D-018 | Cluster content template (pillar naming + standard article set) | DECIDED 2026-07-25 (Cat spec) |
| D-019 | Per-cluster playbooks + unique flow into the workspace | DECIDED 2026-07-25 (direction; sequencing open) |
| D-020 | Compliance cluster focus: VSME vs CSRD vs job-led | DECIDED 2026-07-25: A + C surface |
| D-021 | Article page flow (playbook mid / newsletter mid / workspace end / popup) | DECIDED 2026-07-25: flow approved via example; POPUP site-wide OPEN |
| D-022 | EUR 29 gate on the playbook keep-moment | OPEN - Cat thinking |
| D-016 | Article context: pillar back-link + badge | DECIDED 2026-07-25: A (via approved D-021 example) |
| D-017 | "Stack N Connection" body sections (32 articles) | OPEN |
| P-001 | Workspace/product naming | PARKED (Cat: fine-tune later) |
| P-002 | Final price points per tier | PARKED (Cat: fine-tune later) |
| P-003 | Extraction trust model (client-side vs cloud OCR) + ladder placement | PARKED (artifact-library doc §Part 2.6) |

---

## D-001 — Cover-crop pages: stack identity + tool CTA
**Status:** DECIDED

**Context.** `cover-crop-selection-guide` — deepest spiking article, only
one with no tool CTA (newsletter fallback); three-way stack-identity
conflict across the cover-crop pages (3 vs 2 vs 5).

**Decided:** 2026-07-24 — **A** ("Cover crops are regenerative" — Cat).
Stack 5 owns cover crops. Slug added to `REGEN_ECONOMICS_SLUGS`
(ArticleCTA.tsx, commit 71cab900); badge harmonisation to Stack 5 queued
for when the pages are next touched.

---

## D-002 — Link-mesh batch
**Status:** DECIDED

**Context.** Link-only fixes: two-way drainage mesh + pillar back-links;
inline tool links at moment-of-intent on three pages; biofuels loop closure
(tool → stack-3 playbook interim link, pillar back-links).

**Decided:** 2026-07-24 — **A** (all links, incl. the interim stack-3 link
on the biofuels tool; retarget in one line if D-012 builds a biofuels
playbook). Applied: commit d63b09da.

---

## D-003 — Regenerative pillar CTA pile-up
**Status:** DECIDED

**Context.** `regenerative-guide` ended with three stacked blocks
(regeneration-assessment dark CTA, duplicate BaselineCTA, regenerative-roi
ArticleCTA) — two competing assessment tools in one screen.

**Decided:** 2026-07-24 — **A**. One closing tool CTA (regenerative-roi);
dark block + duplicate end-of-page BaselineCTA removed (mid-article
BaselineCTA stays); inline link to cover-crop-selection-guide added in the
cover-crops section. Applied: commit 5b85291a.

---

## D-004 — Legacy /framework bottom CTAs (7 spiking pages)
**Status:** DECIDED

**Context.** Every spiking page carried a hardcoded bottom CTA to
`/framework/stack-N` directly above the tool CTA — competing asks.
Recommendation was to defer; Cat overrode.

**Decided:** 2026-07-24 — **B**, remove the blocks. Cat: "SEO traffic is
for solving a problem, not pitching the framework." Only the tool CTA
closes the page. Consistent with the standing lead-with-the-job rule.
Queued to the implementation agent (third commit). Site-wide extension
split out as D-013.

---

## D-005 — Additive SEO builds
**Status:** DECIDED

**Context.** Three additive items riding the spike: FAQ/HowTo JSON-LD on 3
hot pages (Q&A lifted verbatim from visible text); a drainage payback
calculator from the worked model already published in
subsurface-drainage-design; three new cluster articles verified not to
exist (cover-crop termination costs, controlled drainage, selling-residues
farm-gate economics).

**Decided:** 2026-07-24 — **C** (all of it now). FAQ schema queued to the
link-batch agent (same files); the three articles
(`feat/spike-cluster-articles`) and the calculator
(`feat/drainage-payback-calculator`) dispatched as parallel worktree
agents. The calculator's model is to be REUSED by Stack 2's Wave-2 numbers
module, not rebuilt.

---

## D-006 — Assessment→playbook mapping tables
**Status:** BLOCKED on D-014

**Context.** `feat/assessment-handoff` maps weak assessment answers to
pre-selected playbook issue chips (marketing-side localStorage only).
Flagged rows: Stack 4 Q10 (operational slack → "thin cash reserves",
loosest), Stack 2 (8 questions → one honest key), Stack 3 (2 mappings only,
see D-007).

**Blocked:** 2026-07-24 — Cat: can't decide with incomplete connections;
the full journey (assessment → playbook → workspace capture) must be
settled first, or a solid decision made to NOT capture that data. Revisit
when D-014 is decided. The `feat/assessment-handoff` branch stays unmerged
until then.

---

## D-007 — Stack 3 assessment scoring quirk
**Status:** OPEN

**Context.** Found during handoff work: several circularity-assessment
questions score answering "Yes" to a *bad* state (e.g. "do you pay for
disposal of valuable material?") as 2 points toward a good score. The
quirk is live on the free assessment today, independent of any handoff.

**Decision needed.** Fix the scoring, and how?

**Options with impact.**
- **A) Invert scoring on the affected questions.** Impact: more honest
  scores immediately; code-only change; question copy stays awkward.
- **B) Rephrase the questions so "Yes" is consistently the good state.**
  Impact: cleaner long-term; small copy change to a live free tool; keeps
  scoring code untouched; unlocks honest chip-mappings later if D-006
  unblocks.
- **C) Leave it.** Impact: the free assessment mildly rewards bad states.

**Recommendation.** B — rephrase.

**Decided:** 2026-07-24 — **B**. Three questions rephrased so "Yes" is the
good state: "Is everything you pay to dispose of genuinely worthless?" /
"Is your equipment and space in productive use at least 70% of the time?" /
"Do you put the data and knowledge you collect to use?" Scoring code
untouched. Note: if D-006 ever unblocks, mappings for these questions
become honestly possible against the NEW phrasing.

---

## D-008 — Merge `feat/playbook-keepable-layer`
**Status:** OPEN  (restructured 2026-07-24: originally covered both Wave-1
branches; `feat/assessment-handoff` now waits with D-006/D-014.)

**Context.** The keepable-layer branch (persistence/restore, KPI baseline
capture, CSV export, print header; 36/36 tests green) is independent of the
handoff question — everything it does lives playbook-side. Three as-built
behaviors ride along: saved state beats any incoming handoff (moot until
the handoff branch ships); empty KPI baselines print as blank write-in
boxes; checklist persistence is index-based.

**Decision needed.** Merge it into feat/regenerative-cluster now?

**Options with impact.**
- **A) Merge now, accept as-built behaviors.** Impact: playbooks stop
  losing everything on refresh — the worst gap for any future paid artifact
  — plus baselines/CSV ship; behaviors revisitable.
- **B) Hold for Cat's hands-on review first** (try-it steps in the agent's
  review guide). Impact: nothing lands until reviewed; branch sits.

**Recommendation.** A — additive, well-tested, independent of the parked
data-capture question.

**Decided:** 2026-07-24 — **A**, as a merge train with the two additive
D-005 branches (spike-cluster-articles, drainage-payback-calculator; Cat
did not object to folding them in, calculator handoff lines kept).
Combined verification: 42/42 tests, tsc clean outside the allowed set.
Subsurface "calculating payback" inline link retargeted to
/tools/drainage-payback as flagged.

---

## D-009 — Content: publish the coefficients + the sharp opinion
**Status:** OPEN

**Context.** The regenerative-economics essay publishes the model's exact
internals (8/4/0% dip, 5→30% ramp, €120/ha, €55/ha, 0.875–1.25 multiplier,
no auto-filled subsidies) and plants a flag: "the biggest threat to
regenerative agriculture's economics isn't scepticism. It's the movement's
own marketing." Coefficients also appear in LinkedIn B1/B3 and Reddit
draft 1.

**Decision needed.** Publish both as-is under your name?

**Options with impact.**
- **A) Publish both.** Impact: strongest differentiation; commits you to
  public changelogs when coefficients change (which is the strategy); the
  opinion will be quoted, in both directions.
- **B) Coefficients yes, soften the opinion.** Impact: transparency intact;
  essay loses its sharpest, most shareable edge.
- **C) Round the coefficients.** Impact: less commitment; less credible —
  precision is the proof of honesty here.

**Recommendation.** A.

**Decided:** 2026-07-24 — **A, with a clarity rewrite** (Cat: "I like the
stance but it is confusing language"). Coefficients publish exactly as
coded. The opinion section was rewritten to state the point in one read:
sceptics don't kill regenerative agriculture, broken "pays for itself"
promises do — the threat is hiding the J-curve dip, NOT the movement's
cultural image. Heading changed from the idiom ("inside the house") to
"The overpromise is the threat, not the sceptics".

---

## D-010 — Content: two small honesty edits
**Status:** OPEN

**Context.** Two lines run slightly ahead of reality: LinkedIn C3 ("I'm
building comparison tools in this space" re a residue soil-value
coefficient no tool has yet); the cheat-sheet footer ("corrected by grower
feedback" before any feedback round exists).

**Decision needed.** Apply the two softenings?

**Options with impact.**
- **A) Soften both** (C3 → "I build feedstock comparison tools, and the
  soil-value side is the coefficient I trust least"; footer → "corrections
  from growers welcome — tell me and the next version improves").
  Impact: strictly true on day one; no fake doors.
- **B) Keep as written.** Impact: minor overclaims in the two most
  reputation-sensitive channels.

**Recommendation.** A — one-minute edits, applied on approval.

**Decided:** 2026-07-24 — **A, modified by the new voice rules** (see
D-009 addendum): cheat-sheet footer softened as proposed; LinkedIn C3's
self-build sentence REMOVED entirely (not softened) per Cat's standing
rule — nothing she publishes says "I'm building", and LinkedIn talks to
the audience, not about herself. Full LinkedIn-queue re-voice dispatched;
D-009's coefficient section gained the standing disclaimer: "if you don't
agree with these coefficients, tell me what you'd use instead."

---

## D-011 — Publishing sequence + channel infrastructure
**Status:** OPEN

**Context.** Batch 1 drafted. Proposed order: week 1 LinkedIn cover-crop
trio + first Notes → cover-crops essay opens the new Substack publication →
regenerative-economics essay week 2–3 → biofuels LinkedIn trio later →
Reddit strictly after karma-building (table → artifact drop →
roast-my-numbers), Medium canonical imports ~1 week behind Substack.
Blocked on Cat's accounts: Substack publication, Medium import, LinkedIn
scheduling, Reddit history; the cheat sheet must be a hosted file before
its announcement post.

**Decision needed.** Adopt the sequence; when do accounts get set up?

**Options with impact.**
- **A) Adopt as proposed; Substack + LinkedIn set up this week.** Impact:
  riding the spike within days on the no-dependency channels.
- **B) Substack-first only.** Impact: single-channel focus, slower reach.
- **C) Hold everything until full voice review.** Impact: review was always
  required; no time lost if it happens this week.

**Recommendation.** A, with voice review of notes.md + linkedin-queue.md
as the first, fastest step.

**Decided:** 2026-07-24 — **A**. Sequence adopted. Cat this week: new
Substack publication, LinkedIn scheduler choice, Medium (lower urgency);
Reddit waits on listener-session history. Claude: host the cheat sheet as
a real file BEFORE the artifact-drop post (announcement never precedes the
artifact). All publishing gated on Cat's voice review of the re-voiced
batch.

---

## D-012 — Standalone biofuels playbook
**Status:** OPEN

**Context.** Cat believed a standalone biofuels playbook exists; verified:
no biofuels playbook route exists in this repo — the biofuels funnel ends
at `biofuel-feedstock-compare` → `/signup` (D-002 added an interim
stack-3-circularity link). Biofuels is the site's biggest raw traffic
(~848/wk).

**Decision needed.** Where does biofuels traffic funnel long-term?

**Options with impact.**
- **A) It exists/was planned elsewhere — point me at it.** Impact: link
  retargets; no build.
- **B) Build a standalone biofuels playbook** on the shared shell (slot
  pattern proven; feedstock-compare provides handoff data). Impact: the
  biggest traffic stream gets a real funnel; Wave-2-module-sized effort.
- **C) Stack-3 playbook stays the destination.** Impact: adequate,
  unspecific.

**Recommendation.** B, scheduled with Wave 2.

**Decided:** 2026-07-25 — **B**. Clarified first: the "standalone playbook"
Cat remembered is the Biofuel Feedstock Sustainability Comparison workbook
(.xlsx GatedDownload on the feedstock-compare tool) — live, but a take-away
file, not an interactive playbook. Build the interactive biofuels playbook
on the shared shell as a Wave-2 module: feedstock-compare handoff,
residues four-line ledger as the numbers module (price − collection −
nutrients − soil value), contract/counterparty checks. Interim stack-3
link stays until it ships.

---

## D-013 — Framework CTAs site-wide
**Status:** OPEN

**Context.** D-004 removed the legacy /framework bottom blocks on the 7
spiking pages, per Cat's principle: SEO traffic solves a problem, it isn't
pitched the framework. The same bottom-block pattern exists across the
other ~112 articles, and every article also carries a TOP back-link to
/framework/stack-N. The framework pages remain the education layer,
reachable via nav.

**Decision needed.** Extend the removal site-wide; does the top back-link
go too?

**Options with impact.**
- **A) Remove bottom framework blocks on all articles; keep top
  back-links.** Impact: consistent one-ask page ends; discreet path to the
  education layer stays; ~112-page mechanical sweep.
- **B) Remove both bottom blocks and top back-links.** Impact: framework
  fully exits the article surface; reachable only via nav.
- **C) Spiking pages only (status quo after D-004).** Impact: inconsistent
  pattern on the long tail.

**Recommendation.** A first (mechanical, low-risk), then judge B by whether
the top link carries measurable traffic.

**Decided:** 2026-07-25 — **A in principle**, but Cat's example review
(preview branch feat/d013-example, companion-planting-introduction) found
the removal exposes deeper misfits: the Passport/Baseline mid-CTA doesn't
belong on non-baseline articles, and stack mentions read as randomly
thrown in. Sweep HELD so it runs ONCE combined with D-015/D-016/D-017
verdicts. Example preview stays up for comparison.

---

## D-015 — Stack-job mid-article CTAs
**Status:** OPEN

**Context.** 129 articles hardcode the same mid-article `<BaselineCTA />`
(free tracker + response generator — Stack 1's job) regardless of topic.
Cat on the example page: "the Passport does not fit here at all… we need
stack-based CTAs, or stack-specific ones — instead of 'build your
baseline', something that fits for Stack 4." The page-END CTA (ArticleCTA)
is already slug-set-matched by cluster; the MID CTA is one-size-fits-all.

**Decision needed.** What replaces the blanket mid-CTA?

**Options with impact.**
- **A) Stack-job MidCTA component**, reusing ArticleCTA's existing slug
  sets: S1/CSRD topics keep BaselineCTA (it fits there); S2 topics get the
  leak/efficiency pitch; S3 margin-recovery; S4 the resilience-exposure
  calculator ("could one disruption cascade through your operation?");
  S5 regenerative-roi. Copy is JOB language — no "Stack N" naming (per
  lead-with-the-job). Unmatched articles keep BaselineCTA as fallback.
  Impact: every mid-CTA speaks the reader's actual problem; one new
  component + a 129-file mechanical swap.
- **B) Same, but unmatched articles get the newsletter instead of
  BaselineCTA.** Impact: cleaner fit, weaker product funnel on the tail.
- **C) Remove mid-CTAs entirely outside matched clusters.** Impact:
  cleanest reading experience, weakest funnel.

**Recommendation.** A — mid + end CTA then both speak the cluster's job,
and the Passport pitch appears only where baseline IS the job.

**Decided:** 2026-07-25 — **A, gated on the content matrix.** Central
tracker built: docs/content-matrix.csv (129 rows) + regenerable via
scripts/build-content-matrix.cjs. Finding: 64 articles match NO cluster
set. Cat accepted the cluster-assignment pass: agent proposes
cluster_proposed + reasoning per article in the CSV; Cat reviews/overrides
in Excel; the reviewed matrix is the sweep's single source of truth. No
implementation until the matrix review is done.

**Cat's matrix verdict (2026-07-25):** proposals supported EXCEPT five
rows (esg-competitive-advantage, missing-esg-data,
vsme-basic-module-explained, vsme-five-stacks-mapping, vsme-vs-full-esrs)
→ new **vsme** cluster instead of scope3-csrd, because the target is
small farms (VSME is their standard; Scope-3 is corporate buyer language).
CSV write pending (file Excel-locked). Open detail: the vsme cluster's CTA
destination — honest candidates: BaselineCTA with VSME copy (tracker
covers VSME datapoints) or a reframed csrd-readiness tool.

---

## D-018 — Cluster content template
**Status:** DECIDED 2026-07-25 (Cat's spec)

Every cluster follows a standard template:
1. **Pillar titled "The complete guide to …"** — instant pillar recognition.
2. **"The economics of …" / financial-framework article.**
3. **Pros-and-cons article.**
4. **Different-types article.**
5. **Stack-level bigger-picture article** (e.g. "efficiency in farming
   operations") leading from cluster to the wider story.

Gap analysis: docs/cluster-template-gaps.md (heuristic title matching —
verify before commissioning). Implementation: rename non-conforming
pillars, commission missing slot articles cluster-by-cluster, priority by
traffic.

**Amendment (Cat, 2026-07-25):** renames are NOT automatic — rename only
where the content actually is a complete guide. Regenerative rename
VETOED: its "Financial Framework" guide fills the economics SLOT; the
regenerative complete-guide pillar is missing and gets written new.
Compliance cluster naming waits on D-020.

---

## D-020 — Compliance cluster focus: VSME vs CSRD vs job-led
**Status:** OPEN

**Context.** The compliance content currently splits identities: a
csrd-esg-guide pillar + a scope3-csrd CTA set (buyer-corporate language),
a vsme-guide pillar, Cat's 5-row VSME override in the matrix, and two
tools (/tools/scope-3-readiness, /tools/csrd-readiness). The ICP is small
farms: VSME is THE standard they'd actually fill; "Scope 3" and "CSRD"
are the buyer's vocabulary, not theirs — but also what buyers' emails say
and possibly what search queries contain.

**Decision needed.** What identity leads the compliance cluster?

**Options with impact.**
- **A) VSME-led.** One cluster; vsme-guide becomes/stays the pillar
  ("The complete guide to VSME for farms"); CSRD/Scope-3 articles become
  spokes explaining WHY buyers ask; CTAs speak VSME + tracker ("track
  once, answer the VSME datapoints") + respond engine. Impact: matches
  the small-farm ICP and the tracker's actual VSME mapping; honest;
  CSRD search traffic still captured by spokes.
- **B) CSRD-led.** csrd-esg-guide stays the pillar; VSME is a spoke.
  Impact: rides the bigger regulatory keyword; speaks the buyer's
  language at the reader who isn't the buyer.
- **C) Job-led umbrella.** Neither acronym leads: the cluster is "answer
  buyer requests / prove it to buyers"; VSME and CSRD both spokes; CTA is
  the respond flow. Impact: purest lead-with-the-job; weakest keyword
  anchor for the pillar itself.

**Recommendation.** A, with C's surface language — the cluster's pillar
and CTAs lead with VSME (the reader's actual standard), copy framed as
the job ("a buyer asked — answer from what you track"), CSRD/Scope-3 kept
as high-traffic explainer spokes.

**Decided:** 2026-07-25 — **A with C's surface language.** One VSME-led
compliance cluster: vsme-guide is the pillar (rename to "The complete
guide to…" AFTER a content check per the D-018 amendment); all
scope3-csrd rows in the matrix merge into the vsme cluster; CSRD/Scope-3
articles stay as explainer spokes; CTAs speak VSME in job language.
Matrix updates (5-row override + scope3→vsme merge) batched, pending the
Excel lock release.

---

## D-019 — Per-cluster playbooks + unique workspace flow
**Status:** DECIDED 2026-07-25 (direction; sequencing open)

Cat: each cluster gets **its own playbook**, and based on the playbook's
output, a **unique flow into the workspace** (Cat's phrasing: "the
groundwork" — see P-001; working name gaining traction, not final).
Extends the D-012 biofuels pattern to all clusters. Existing coverage:
five stack playbooks live; biofuels decided (D-012); circular-economy ≈
stack-3 and efficiency ≈ stack-2 may reuse. Net-new candidates from the
matrix: intercropping (10 articles), small-farm-strategy (8),
agribusiness-strategy (7), biodiversity (5), vsme (respond-flavored),
ecolabel (cert-flavored). Sequencing at Wave-2 scoping, informed by
cluster traffic + D-014.

---

## D-016 — Article context: pillar, not framework
**Status:** OPEN

**Context.** 112 articles open with "← Back to Stack N: <name>" pointing
at /framework/stack-N, plus a numbered stack badge in the header. Cat:
stack mentions feel "randomly thrown in." Meanwhile 12 topic pillar guides
exist (intercropping, biofuels, water, regenerative, ecolabel, CSRD…) —
the natural, reader-logical home for each article. The pillar is what a
problem-solving reader actually wants ("more on this topic"), the
framework page is internal scaffolding.

**Decision needed.** Replace framework back-links/badges with pillar
context?

**Options with impact.**
- **A) Top back-link → nearest pillar guide** ("← Intercropping &
  companion planting guide"); drop the numbered stack badge. Needs an
  article→pillar mapping (derivable from pillar link lists + slug sets;
  maintained in one file). Impact: context navigation readers understand;
  framework exits the article surface consistent with D-004/D-013;
  internal links concentrate pillar authority (SEO win).
- **B) Keep a framework back-link but reword to job language.** Impact:
  cosmetic; still routes problem-traffic to scaffolding pages.
- **C) Leave as-is.** Impact: the "randomly thrown in" feeling stays on
  112 pages.

**Recommendation.** A.

**Decided:** —

---

## D-017 — "Stack N Connection" body sections
**Status:** OPEN

**Context.** 32 articles contain an editorial section like "The Stack 4
Connection" — framework name-dropping inside body copy (Cat:
"questionable"). Unlike CTAs/links this is CONTENT — each needs a small
rewrite, not a mechanical strip.

**Decision needed.** How to handle the 32 body sections?

**Options with impact.**
- **A) Reword sweep:** keep each section's substance (it's usually the
  "what this means for your operation" close) but rewrite heading + copy
  in job language, no framework naming. Agent drafts all 32, Cat
  spot-reviews a sample. Impact: articles stop pitching the framework
  mid-read; ~1 agent-session; small voice-drift risk on 32 pages.
- **B) Heading-only rename** ("What this means for your operation"),
  body text untouched. Impact: cheapest; body sentences may still
  name stacks.
- **C) Leave; revisit with the eventual content-refresh stream.**
  Impact: inconsistent with everything else decided today.

**Recommendation.** A, with the sample-review gate.

**Decided:** —

---

## D-014 — Workspace data capture for playbook concepts
**Status:** OPEN — decide at Wave-2 scoping (Cat: "address this when we
cross that path")

**Context.** Verified against `src/types/index.ts`: the playbook layer and
the workspace data model only partially connect. Maps today: Stack 1 KPIs
(emissions, energy, water, waste, data quality) map well; Stack 5 partially
(`LandUse.soilOrganicMatterPercent`/`soilPh`, fuel, fertiliser exist;
infiltration/earthworms don't). Doesn't map: Stack 4's entire KPI set
(runway months, top-buyer share, income streams, insured risks,
debt-to-income — `FinancialContext` holds only qualitative bands); Stacks
2/3's money-side numbers (margin/ha, disposal €, byproduct revenue); and
ALL plan-level concepts — issues, practices running/adding, first move,
kpiBaselines — have no entity anywhere. The seed carries them; nothing
stores them. This gates: D-006 (Cat won't approve chip mappings without the
full journey settled), the handoff-branch merge, the roadmap's "baselines
flow into the tracker" claim, and the Stack 4 numbers module (needs the
numeric fields as inputs).

**Decision needed.** Does the workspace capture plan-layer + numeric
resilience data — and in what shape — or is no-capture the deliberate
design?

**Options with impact.**
- **A) Full extension:** KpiBaseline entity + Plan/Practices entity +
  numeric Stack-4 financial-resilience fields. Impact: "living data you
  own" becomes literally true; playbook→tracker loop closes; biggest
  build; Stack 4 module unblocked.
- **B) KpiBaseline entity only;** plan concepts stay playbook-side
  (localStorage + exports). Impact: tracking/trajectory works (the core
  paid value); plans remain keepable artifacts, not workspace state;
  Stack 4 module still needs its input fields separately.
- **C) Deliberate no-capture:** playbooks are self-contained keepable
  artifacts; the workspace stays an 8-domain physical-data tracker; all
  copy stays softened accordingly. Impact: least build; the
  workspace/Passport story shrinks to "evidence + proof", plans live on
  paper/PDF.

**Recommendation.** Decide when Wave 2 is scoped — this IS the Wave-2
scoping decision. My lean: A, scoped tightly (KpiBaseline + the Stack-4
numeric fields first, Plan entity second) — both are prerequisites for
things already commissioned in spirit.

**Decided:** —
