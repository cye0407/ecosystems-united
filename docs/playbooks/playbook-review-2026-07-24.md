# Five Stacks Playbooks — €29-readiness review (2026-07-24)

Scope: `/playbooks/stack-1-metrics` … `/playbooks/stack-5-regeneration` on
`feat/regenerative-cluster` (tip `c92f8ccb`, 13 commits unpushed). Reviewed as
**paid €29 upsells from the free assessments**, per the documented funnel
(free tools → Playbook €29 → tracker, `docs/SESSION-HANDOFF.md`).

## Verdict

The shared-shell architecture (StackPlaybook + slots) is sound and Stack 5 is
genuinely reference quality. But today **nothing anywhere in `src/` charges or
gates anything** — all five playbooks are fully free — and the four generic
playbooks are well-written *documents*, not *tools*. A buyer paying €29 would
get a nicely formatted static plan they lose on refresh, can only export via
the browser print dialog, and that was not actually built from their
assessment result despite the CTA claiming it was.

What separates "worth €29" from "nice free page" is exactly what the user
keeps: **persistence, tracking, export, and real personalization.** All four
are currently missing or thin.

---

## Cross-cutting gaps (all five stacks)

### 1. No persistence — fatal for a paid product
All worksheet + plan state is React `useState`. Refresh, tab close, or
navigation loses everything. Checklist checkboxes are `defaultChecked` and
never stored. There is no plan URL, no "come back to your plan."
**Fix:** persist worksheet state per stack to localStorage
(`eu:playbook:stack-N:state`), restore on mount, and re-show the generated
plan. For the paid version: server-side save + email link (a €29 artifact that
evaporates on refresh will generate refund requests).

### 2. Export is `window.print()` only
One button, browser print dialog. No downloadable artifacts.
**Fix — the "take it with you" pack** (matches the proven EU download pattern):
- Proper branded PDF (print CSS is a start; add a print header w/ farm name + date).
- **CSV: KPI baseline template** — the KPI cards as rows with empty
  baseline/date/re-check columns. Doubles as the tracker on-ramp.
- Checklist as a working doc (markdown/CSV).
- Timeline as calendar entries (.ics for "start Q4 2026" first move).

### 3. Tracking is promised but not deliverable
Every playbook says "Baseline these now, then re-check as you go. You can only
prove it worked if you measured the start" — and provides **no way to enter a
baseline**. This is the single biggest value upgrade available:
- Add a value + date input on each KPI card ("your start line"), persisted.
- Show entered baselines in the plan + exports.
- Carry them in the Passport seed so the tracker starts pre-loaded.
This converts the playbook from document → tool, and makes the €29 → tracker
funnel real instead of rhetorical.

### 4. Assessment → playbook handoff is broken for stacks 1–4 (copy overclaims)
Assessment result pages say *"A free plan built from your result"* — but only
the Stack 5 tool (`regenerative-roi`) writes a handoff key. Stacks 1–4 declare
no `handoffKey`, the assessments write nothing to localStorage, and the
playbook opens blank. "✓ We carried over what you told the assessment" can
never appear for stacks 1–4.
**Fix:** each assessment writes `eu:playbook:stack-N` (score + per-question
answers); playbook content declares the key; map weak-answer questions to
pre-selected issues/focus areas; surface "Your assessment scored X/20 — weakest
on Y" in *Where you stand*. This makes the personalization honest and visibly
real — the felt difference between generic content and "written for me."

### 5. "Save as Passport" overclaims what the seed does
CTA copy: "everything here becomes living data you own — ready to track."
Reality: onboarding (`onboarding/company/page.tsx`) consumes only
`sector`/`crops`/`location` and hardcodes industry A01. Issues, focus areas,
first move, ROI numbers, and (future) KPI baselines are dropped.
**Fix:** consume the full seed — pre-seed tracker rows/KPIs where possible, or
show a "carried over from your playbook" summary during onboarding. At
minimum, soften the CTA until true (honesty-before-headline rule).

### 6. Monetization is unwired — model DECIDED 2026-07-24 (supersedes the options below)
No Stripe/LemonSqueezy/gate/`isPaid` anywhere in the playbook routes; `€29`
exists only in docs. **Cat's decision (2026-07-24): buy-a-stack-at-a-time
one-time purchases + a "Passport Complete" bundle.** Free tier keeps the
worksheet + on-screen plan (no fake doors, SEO intact); the purchased layer
per stack is the *keepable* artifacts — saved plan, that stack's numbers
module, KPI baseline tracking, exports. Two rungs stand: grower workspace
(per-stack / Complete) vs. commercial certification rung (€499 Passport-Ag).
**AI rule (refined):** hosted LLM is allowed inside discrete paid events —
one composition pass per stack purchase (the `authority-sources.md`
architecture stands), one generation per response credit. *Unlimited/ongoing*
AI is bring-your-own-key only — a buy-once product must never carry unmetered
hosted AI. The deterministic backbone still ships first and must deliver the
paid artifact on its own (compose pass degrades gracefully if the API call
fails), so the real assessment handoff (#4) and per-stack numbers modules
remain top priority. Checkout can reuse the Stripe integration already live
for respond credits.

### 7. Robustness nits
- `buildGenericTimeline` uses only the first 3 selected focus areas — a 4th/5th
  is silently absent from the 3-year plan (worst on stacks 2–4 with 5 areas).
- Clearing the size input coerces to `0` → "Built for … 0 hectares", and on
  Stack 5 zeroes the ROI. Guard/fallback needed.
- Stack 2's `benchmark` focus area lists `addresses: ["benchmarking"]` but no
  such issue key exists in Stack 2 → dead weight in the recommender.
- `region` is collected for stacks 1–4 and used by nothing (only Stack 5
  funding + the seed). Either use it (see per-stack notes) or drop it from
  the generic intake.
- `PlaybookView.tsx` (194 lines) is dead code — nothing imports it.
- No analytics event on print/export (only opened/generated/convert), so the
  most purchase-intent-like action is invisible.

---

## Per-stack review

### Stack 1 — Defensible Baseline (`stack-1-metrics`)
**Content quality: good; strongest buyer-intent fit; zero numbers.**
- The stack whose buyer has the most acute pain (buyer questionnaires, CSRD),
  yet the plan contains no calculation. Add a **quick Scope 1+2 estimator**:
  annual kWh + diesel litres → directional tCO2e, reusing the factors already
  in the tracker (`agricultural-calculations.ts`). "Your baseline is roughly
  X t CO2e — here's how to make it defensible" is the €29 moment.
- **VSME mapping:** tag each KPI with the VSME datapoint it satisfies — the
  plan doubles as a VSME prep sheet, unique vs. generic content.
- **"What buyers will ask" preview:** surface 3–5 real questionnaire questions
  from the response-ready pack that this baseline would answer — direct moat
  tie-in, and the strongest possible "why do this now."
- Region should pick the factor source narrative (Defra vs IPCC vs EPA).
- Only 4 focus areas (others have 5) — fine, but timeline cap is moot here.

### Stack 2 — Operational Efficiency (`stack-2-efficiency`)
**Content quality: good, dairy-leaning; needs its numbers module.**
- This is the money stack with no money view. Add a **leak-finder**: enter
  annual energy/water/input spend → ranked directional savings ranges
  (housekeeping % vs capital %, Carbon Trust-sourced) + simple payback table.
  Same pattern as Stack 5's economics table, much simpler math.
- KPIs demand intensity figures; add a two-input mini-calc (spend ÷ output)
  so the playbook computes the first values with the user.
- Fix the dead `benchmarking` addresses key.
- Examples skew dairy; sector chips (dairy/arable/horticulture) could swap the
  worked examples — cheap, visible personalization.

### Stack 3 — Margin Recovery / Circularity (`stack-3-circularity`)
**Content quality: good generic circularity.**
- ~~Audience mismatch with the biofuels flagship traffic~~ — withdrawn:
  biofuels and ecolabel selection have their own standalone playbooks (Cat,
  2026-07-24), so this playbook rightly stays generic circularity.
- Deterministic value modules, all cheap and honest:
  - **Disposal-cost calculator:** streams × t/yr × gate fee → € leaving the
    gate (the number the whole stack narrative hangs on).
  - **Nutrient-value calculator:** slurry/manure volume × N-P-K content ×
    bagged-fertiliser price → € of fertiliser you already own. Big, credible
    number; pure arithmetic.
  - **AD feasibility screen:** the prose already says "run a feasibility
    screen" — make it a numeric go/no-go (feedstock t/day threshold) instead
    of a link to the EPA.

### Stack 4 — Structural Resilience (`stack-4-resilience`)
**Content quality: the best-written of the four; most quantifiable; no numbers.**
- Its KPIs map 1:1 to trivial calculators with high felt value:
  - **Runway calculator:** monthly fixed costs + current reserves →
    "you have 1.8 months; target 3+" with a build plan at a chosen % of income.
  - **Buyer-concentration score:** top-buyer revenue share → risk band.
  - **Risk × insurance matrix:** the "events that would end the business"
    checklist as a fill-in grid (insured? cost? excess?).
- The Teagasc insurance gotcha (undeclared diversification voids cover) is
  excellent — surface it as an inline warning when `newEnterprise` is
  selected, not just a buried resource.

### Stack 5 — Regeneration (`stack-5-regeneration`) — the reference
**Already close to worth €29. Remaining gaps:**
- **Economics table covers only 2 of 4 practices.** `computeEconomics` prices
  cover crops (cost) and reduced-till (saving); rotation and compost/manure
  produce no line at all, so a rotation+compost selection shows an economics
  table that ignores half the plan. Add directional lines or an explicit
  "not priced here" note.
- Carbon upside hardcodes €30/t and 0.5 t/ha/yr with no way to adjust in the
  playbook (the checkbox flags it "unverified" — good — but the assumptions
  should be visible/editable like funding rate is).
- Species agronomy is marked "will be source-verified" in code comments — the
  verification pass against the authority ledger is still owed before the
  honesty bar is fully met.
- Same persistence/export/baseline gaps as the rest — Stack 5's numbers are
  precisely the ones worth tracking year-on-year (SOM %, input €/ha, fuel).

---

## Suggested build order (if the €29 or freemium model gets the go)

1. **Persistence + restore** (all stacks) — table stakes; also fixes checkbox loss.
2. **Real handoff for stacks 1–4** + honest "built from your result" claim.
3. **KPI baseline capture + export pack** (CSV/PDF/checklist) — the core
   paid value and tracker on-ramp; wire baselines into the Passport seed +
   onboarding consumption.
4. **One deterministic numbers module per stack** (S1 estimator, S2
   leak-finder, S4 runway; S3 disposal/nutrient calcs) — reuse the Stack 5
   slot pattern; this is what makes each stack individually worth money.
5. **Gate + checkout wiring** for the decided model: per-stack purchase +
   Passport Complete bundle (reuse the live Stripe respond-credits flow).
6. **BYO-AI composition** (optional, user's own key; no hosted LLM) — the
   "written for you" prose layer, last because everything above is the
   product without it.

Small fixes regardless of model: timeline 4th-area drop, scale=0 guard,
Stack 2 dead key, delete `PlaybookView.tsx`, print/export analytics event.
