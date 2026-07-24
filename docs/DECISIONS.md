# Decision Log — ongoing

One entry per decision. Status: OPEN → DECIDED (with date + choice) or PARKED.
Presented to Cat one at a time in chat; this file is the tracker of record.

| ID | Title | Status |
|---|---|---|
| D-001 | Cover-crop pages: stack identity + tool CTA | DECIDED 2026-07-24: A |
| D-002 | Link-mesh batch (drainage, inline links, biofuels loop) | DECIDED 2026-07-24: A |
| D-003 | Regen pillar CTA pile-up | OPEN |
| D-004 | Legacy /framework bottom CTAs on spiking pages | OPEN |
| D-005 | Additive SEO builds (FAQ schema, drainage calculator, cluster articles) | OPEN |
| D-006 | Assessment→playbook mapping tables | OPEN |
| D-007 | Stack 3 assessment scoring quirk | OPEN |
| D-008 | Merge the two Wave-1 code branches | OPEN |
| D-009 | Content: publish coefficients + the sharp opinion | OPEN |
| D-010 | Content: two small honesty edits | OPEN |
| D-011 | Publishing sequence + channel infrastructure | OPEN |
| D-012 | Standalone biofuels playbook | OPEN |
| P-001 | Workspace/product naming | PARKED (Cat: fine-tune later) |
| P-002 | Final price points per tier | PARKED (Cat: fine-tune later) |
| P-003 | Extraction trust model (client-side vs cloud OCR) + ladder placement | PARKED (artifact-library doc §Part 2.6) |

---

## D-001 — Cover-crop pages: stack identity + tool CTA
**Status:** OPEN

**Context.** `cover-crop-selection-guide` is the deepest article in the SEO
spike (species profiles, costs, mixes) and the only spiking page with **no
tool CTA at all** — it's absent from every ArticleCTA slug set, so it closes
with the newsletter fallback. Related inconsistency: it badges Stack 3,
`cover-crops-roi` badges Stack 2, and the regenerative cluster + regenerative-roi
CTA set claim cover crops for Stack 5.

**Decision needed.** Which stack owns cover crops site-wide, and does the
selection guide get the regenerative-roi CTA?

**Options with impact.**
- **A) Stack 5 / regen.** Add slug to `REGEN_ECONOMICS_SLUGS` (1 line) →
  page closes with the regenerative-roi calculator → Stack 5 playbook — the
  strongest funnel on the site. Harmonise both cover-crop pages' badges to 5
  when next touched. Impact: biggest conversion leak on the spike closed;
  consistent anchor-text/topic signal for SEO.
- **B) Stack 3 (respect current badge).** Add slug to a Stack 3 CTA set →
  funnels to circularity assessment. Impact: leak closed, but into a weaker
  funnel (no numbers module yet) and contradicts the regenerative cluster's claim.
- **C) Do nothing.** Newsletter fallback stays. Impact: spike traffic on the
  best article keeps converting to nothing.

**Recommendation.** A — Stack 5. Cover crops are the core regen practice,
the ROI calculator is the only tool wired through to a playbook, and the
regenerative cluster already treats these pages as its spokes.

**Decided:** 2026-07-24 — **A** ("Cover crops are regenerative" — Cat).
Slug added to `REGEN_ECONOMICS_SLUGS` (ArticleCTA.tsx); badge harmonisation
to Stack 5 on both cover-crop pages queued for when the pages are next
touched (was A9).

---

## D-002 — Link-mesh batch (A2 + A5 + A6)
**Status:** OPEN

**Context.** Three link-only fixes from the SEO report, no copy rewrites:
(1) drainage mesh is one-way in the wrong direction — the broad-intent
`agricultural-drainage` never links the commercial deep-dive
`subsurface-drainage-design` or the water pillar; (2) three spiking pages
describe a tool at the exact paragraph where readers do the math but don't
link it; (3) biofuels traffic dead-ends — `biofuel-feedstock-compare` links
only `/signup`, and the pros/cons page doesn't link its own pillar back.

**Decision needed.** Approve the batch of link additions?

**Options with impact.**
- **A) Approve all.** ~10 links across 5 files. Impact: overview→deep-dive
  routing for drainage, moment-of-intent conversion on 3 pages, biofuels
  traffic can finally reach the playbook layer (stack-3-circularity — see
  D-012 for the standalone-playbook question).
- **B) Approve links only, skip the tool→playbook link** until D-012 is
  settled. Impact: article mesh improves; biofuels tool still dead-ends.
- **C) Decline.** Impact: none of the above; drainage deep-dive stays
  undiscoverable from its own overview page.

**Recommendation.** A. Additive links, zero copy risk, reversible; the
stack-3 link can be retargeted if D-012 later creates a biofuels playbook.

**Decided:** 2026-07-24 — **A** (all links, incl. the interim stack-3 link
on the biofuels tool). Applied via background agent.

---

## D-003 — Regen pillar CTA pile-up
**Status:** OPEN

**Context.** `regenerative-guide` (the pillar, 10 inbound links) ends with
three stacked blocks: a dark CTA to `regeneration-assessment` (qualitative
5-min tool), a *second* BaselineCTA (it already renders one mid-page), and
the layout's regenerative-roi CTA. Two competing "assess yourself" tools
within one screen; only regenerative-roi links onward to the Stack 5
playbook.

**Decision needed.** Consolidate to one closing tool CTA?

**Options with impact.**
- **A) Keep regenerative-roi, drop the dark regeneration-assessment block +
  duplicate BaselineCTA; add an inline link to cover-crop-selection-guide in
  the pillar's cover-crops section.** Impact: one clear ask into the
  strongest funnel; regeneration-assessment remains reachable from /tools.
- **B) Keep regeneration-assessment as the closing ask instead.** Impact:
  qualitative tool wins; readers never reach the ROI numbers or playbook.
- **C) Leave as-is.** Impact: three asks dilute each other on the pillar
  receiving the spike.

**Recommendation.** A.

**Decided:** —

---

## D-004 — Legacy /framework bottom CTAs (all 7 spiking pages)
**Status:** OPEN

**Context.** Every spiking page carries a hardcoded full-width bottom CTA to
`/framework/stack-N` immediately above the newer stack-aware tool CTA — two
colored blocks, competing asks. This is the most invasive proposal (7 pages,
and the framework pages are the education funnel).

**Decision needed.** Retarget, remove, or keep the legacy blocks?

**Options with impact.**
- **A) Retarget each block to the matching tool/playbook.** Impact: one
  destination per page end; framework pages lose some internal traffic.
- **B) Remove the block entirely, keep only the ArticleCTA.** Impact:
  cleanest close; least work; same framework-traffic cost.
- **C) Keep as-is.** Impact: status quo dilution, but zero risk to the live
  funnel tuning.
- **D) Defer until D-001–003 ship and GSC shows their effect.** Impact:
  evidence before the invasive change.

**Recommendation.** D — do the surgical fixes first, revisit with data.

**Decided:** —

---

## D-005 — Additive SEO builds
**Status:** OPEN

**Context.** Three "safe — additive" items ride the spike without touching
any existing CTA/copy: FAQ/HowTo JSON-LD (M), a drainage payback calculator
extracted from the worked model already published in the subsurface article
(L), and seven verified-not-existing cluster articles (M each).

**Decision needed.** Which to commission now?

**Options with impact.**
- **A) A4 FAQ schema only.** Impact: rich-result eligibility on 3 hot pages;
  fastest win.
- **B) A4 + first articles.** Suggested first three: cover-crop termination
  costs, controlled drainage, selling-residues farm-gate economics (each
  extends a spiking cluster; termination is the #1 practical follow-up
  question). Impact: cluster depth while intent is hot.
- **C) A4 + articles + A7 drainage calculator.** Impact: the
  highest-commercial-intent page gets its own interactive funnel entry;
  largest effort.
- **D) None.** Impact: spike rides on existing pages only.

**Recommendation.** B now, A7 queued behind the Wave-2 numbers modules
(same build pattern, better sequenced with Stack 2's module).

**Decided:** —

---

## D-006 — Assessment→playbook mapping tables
**Status:** OPEN

**Context.** `feat/assessment-handoff` makes assessments actually pass
results to playbooks. Mapping principle: only capability-gap questions map;
external drivers are never inferred. Full tables in the agent report; the
three flagged rows: Stack 4 Q10 (inventory/capacity buffer → "Thin cash
reserves" — operational slack ≈ cash, loosest mapping), Stack 2 (8 questions
→ the single key "No idea where the money leaks"), Stack 3 (only 2 mappings
because of its scoring quirk, see D-007).

**Decision needed.** Approve the tables; veto/remap any row?

**Options with impact.**
- **A) Approve all as-is.** Impact: handoff ships everywhere; S4 Q10 slightly
  loose; S2 chips are monotone but honest.
- **B) Approve minus S4 Q10.** Impact: cleanest honesty; Q10 weak answers
  simply don't pre-select anything.
- **C) Rework S2 for variety.** Impact: would require inferring drivers the
  agent explicitly rejected as dishonest — not actually available without
  changing the assessment questions themselves.

**Recommendation.** B — drop S4 Q10, approve the rest unchanged.

**Decided:** —

---

## D-007 — Stack 3 assessment scoring quirk
**Status:** OPEN

**Context.** Found during handoff work: several circularity-assessment
questions score answering "Yes" to a *bad* state (e.g. "do you pay for
disposal of valuable material?") as 2 points toward a good score. The
handoff skipped mapping them; the quirk itself remains live on the
assessment.

**Decision needed.** Fix the scoring, and how?

**Options with impact.**
- **A) Invert scoring on the affected questions.** Impact: scores drop for
  users who previously answered "Yes" to bad states — more honest results,
  small content change to a live free tool.
- **B) Rephrase the questions so "Yes" is consistently the good state.**
  Impact: cleaner long-term; slightly more copy work; keeps scoring code
  untouched.
- **C) Leave it.** Impact: the free assessment mildly rewards bad states;
  handoff for those questions stays impossible.

**Recommendation.** B — rephrase; it also unlocks honest mappings for those
questions later.

**Decided:** —

---

## D-008 — Merge the two Wave-1 code branches
**Status:** OPEN

**Context.** `feat/playbook-keepable-layer` (36/36 green) and
`feat/assessment-handoff` (31/31 green) both base off
`feat/regenerative-cluster`, disjoint files, but interacting behavior:
saved playbook state wins over an incoming assessment handoff on revisit.
Three as-built behaviors ride along: saved-beats-handoff; empty KPI
baselines print as blank write-in boxes; checklist persistence is
index-based (future copy reordering misaligns old ticks, degrades
gracefully).

**Decision needed.** Merge both (after D-006 verdict applied) with the
as-built behaviors?

**Options with impact.**
- **A) Merge both, accept as-built.** Impact: the keepable layer + honest
  handoff land together; combined suite run once post-merge; behaviors
  revisitable later.
- **B) Merge keepable-layer only.** Impact: persistence ships; assessments
  keep overclaim-free copy but no real handoff.
- **C) Hold both for hands-on review first.** Impact: nothing lands until
  Cat runs the try-it steps in each review guide.

**Recommendation.** A, immediately after D-006 is decided (and the veto, if
any, applied).

**Decided:** —

---

## D-009 — Content: publish the coefficients + the sharp opinion
**Status:** OPEN

**Context.** The regen essay's centerpiece is radical transparency: it
publishes the model's exact internals (8/4/0% dip, 5→30% ramp, €120/ha,
€55/ha, 0.875–1.25 multiplier, no auto-filled subsidies) and plants a flag:
"the biggest threat to regenerative agriculture's economics isn't
scepticism. It's the movement's own marketing." Coefficients also appear in
LinkedIn B1/B3 and Reddit draft 1.

**Decision needed.** Publish both as-is under your name?

**Options with impact.**
- **A) Publish both.** Impact: strongest possible differentiation; commits
  you to public changelogs when coefficients change (which is the strategy —
  Reddit corrections feed the model); the opinion will be quoted, in both
  directions.
- **B) Coefficients yes, soften the opinion.** Impact: transparency intact;
  essay loses its sharpest (most shareable) edge.
- **C) Round the coefficients ("~8%", "roughly €120").** Impact: less
  commitment; also less credible — precision is the proof of honesty here.

**Recommendation.** A. This is the honesty-as-moat position doing exactly
its job; the commitment it creates is one you've already chosen.

**Decided:** —

---

## D-010 — Content: two small honesty edits
**Status:** OPEN

**Context.** Two lines are slightly ahead of reality: LinkedIn C3 says "I'm
building comparison tools in this space" about a residue soil-value
coefficient that exists in no tool yet (the feedstock comparison tool
itself does exist); the cheat-sheet footer claims it's "corrected by grower
feedback" before any feedback round has happened.

**Decision needed.** Apply the two softenings?

**Options with impact.**
- **A) Soften both** (C3 → "I build feedstock comparison tools, and the
  soil-value side is the coefficient I trust least"; footer → "corrections
  from growers welcome — tell me and the next version improves"). Impact:
  strictly true on day one; no fake doors.
- **B) Keep as written.** Impact: minor overclaims in the two most
  reputation-sensitive channels.

**Recommendation.** A — one-minute edits, I apply them on approval.

**Decided:** —

---

## D-011 — Publishing sequence + channel infrastructure
**Status:** OPEN

**Context.** Batch 1 is drafted. Proposed order: week 1 LinkedIn cover-crop
trio + first Notes → cover-crops essay as the new Substack publication's
opener → regen essay week 2–3 → biofuels LinkedIn trio later → Reddit
strictly after karma-building (table → artifact drop → roast-my-numbers),
Medium canonical imports ~1 week after each Substack run. Blocked on your
accounts: Substack publication, Medium import, LinkedIn scheduling, Reddit
account history; the cheat sheet must exist as a hosted file before its
announcement post.

**Decision needed.** Adopt the sequence, and when do the accounts get set up?

**Options with impact.**
- **A) Adopt as proposed; set up Substack + LinkedIn this week.** Impact:
  riding the spike within days on the two no-dependency channels.
- **B) Adopt but Substack-first only.** Impact: single-channel focus; slower
  reach compounding.
- **C) Hold all publishing until after voice review of every piece.**
  Impact: review was always required — this just sequences it; no time lost
  if review happens this week.

**Recommendation.** A, with your voice review of `notes.md` +
`linkedin-queue.md` as the first (fastest) step.

**Decided:** —

---

## D-012 — Standalone biofuels playbook
**Status:** OPEN

**Context.** You stated biofuels has its own standalone playbook; the SEO
agent verified **no biofuels playbook route exists in this repo** — the
biofuels funnel currently ends at `biofuel-feedstock-compare` → `/signup`.
Biofuels is the site's biggest raw traffic (~848/wk).

**Decision needed.** Where does biofuels traffic funnel long-term?

**Options with impact.**
- **A) It exists elsewhere / was planned elsewhere — point me at it.**
  Impact: A6's link retargets there; no build.
- **B) Build a standalone biofuels playbook** on the shared shell (slot
  pattern now proven; feedstock-compare tool provides the handoff data).
  Impact: the biggest traffic stream gets a real funnel; ~Wave-2-module
  sized effort.
- **C) Stack-3 playbook stays the destination.** Impact: adequate,
  unspecific; the circularity playbook doesn't speak biofuels language.

**Recommendation.** B, scheduled with Wave 2 — the traffic volume justifies
its own playbook, and D-002's interim stack-3 link keeps the funnel alive
meanwhile.

**Decided:** —
