# Workspace + Passport — Plan & Roadmap (2026-07-24)

Companion to `docs/playbooks/playbook-review-2026-07-24.md`. Names and price
points are placeholders — fine-tuning deferred by Cat.

## Decisions locked (2026-07-24)

1. **Passport = the exported artifact** (the credential that travels to
   buyers/lenders/certifiers). **The workspace = the product** growers live
   in. Rename happens; naming fine-tuned later.
2. **Two rungs:** grower workspace (wedge: small farms, market gardeners,
   homesteaders-with-income, transition farmers) vs. commercial certification
   rung (€499 Passport-Ag, GlobalG.A.P./cert packs — unchanged).
3. **Pricing model:** buy-a-stack-at-a-time (one-time) + a **Passport
   Complete** bundle. Free tier keeps tracker + assessments + on-screen
   playbook plans (no fake doors).
4. **AI rule (refined 2026-07-24): hosted AI only behind discrete paid
   events; unlimited AI only via bring-your-own-key.** A one-time LLM
   composition pass at stack purchase is fine (cost is bounded and baked into
   the price — the original `authority-sources.md` architecture stands). Same
   for per-credit response generation. What a buy-once-keep-forever product
   must never carry is *unlimited/ongoing* hosted AI (chat, always-on
   assistant) — that's BYO-key territory. The deterministic backbone still
   ships first and is the product without any key.
5. Biofuels and ecolabel selection keep their own standalone playbooks;
   Stack 3's playbook stays generic circularity.

## Pricing ladder (shape decided; numbers = Cat's call)

| Tier | Contents | Price (placeholder) |
|---|---|---|
| Free | Tracker (8 domains, CSV), assessments, calculators, on-screen playbook plans | €0 |
| Stack module ×5 | Keepable playbook layer: saved plan, numbers module, KPI baseline tracking, exports for that stack + one hosted LLM composition pass at purchase | ~€29 each |
| Respond credits | Answer a real buyer questionnaire from tracked data (live today at /respond; pay-per, includes per-credit generation) | €39 first / €19 addl (existing) |
| Passport Complete | All 5 stack modules + audience-addressed proof packs (buyer / lender / certifier) + N bundled response credits | ~€99–129 |
| Certification rung | Passport-Ag: cert packs (GlobalG.A.P., organic…), full respond engine | €499 (existing) |
| BYO-AI | Optional: user's own API key powers *unlimited* AI (assistant over your data, extraction at will) | free capability |

Principles: every paid unit is a *keepable artifact*, never access to
content; hosted AI exists only inside discrete paid events (per purchase,
per credit) — never unlimited on a one-time price. The free→paid line is
"what you take with you and track over time."

---

## Product roadmap

### Phase 0 — Hygiene (small, now; no dependencies)
Pre-monetization honesty + robustness fixes from the review:
- Assessment CTA claim ("built from your result") vs. no handoff — fix or soften.
- "Save as Passport" seed: onboarding consumes the full seed (issues, focus
  areas, first move, ROI), not just sector/location.
- Timeline drops 4th+ focus area; scale=0 guard; Stack 2 dead issue key;
  delete dead `PlaybookView.tsx`; print/export analytics event.

### Phase 1 — The loop, thin, end to end (Stack 1 only)
Goal: one grower can go evidence → insight → **exported proof**, free.
- Real assessment→playbook handoff (score + answers pre-select issues).
- KPI baseline capture (value + date) persisted; carried into tracker via seed.
- **Passport-readiness meter** in the tracker ("you can answer N% of what a
  buyer will ask") — the retention/ROI answer to data-entry friction. Score
  it against the respond engine's question templates, so the meter and the
  respond product measure the same thing.
- **Buyer proof-pack v1**: compiled export from tracker data + respond
  engine (mostly wiring — tracker, engine, exports all exist).
- **Respond integration ("track once, answer everything"):** tracked data
  prefills /respond answers — the cross-form-reuse moat made visible. Surface
  the respond CTA at the moments buyer pressure shows up (Stack 1 playbook
  "buyers asking for data" issue, proof-pack export screen, readiness meter).
- Validation gate: do free users generate playbooks, enter baselines, export
  proof packs, and does anyone hit /respond from the workspace? (analytics
  events per step).

### Phase 2 — Stack modules + commerce
Goal: the first purchasable stack, then repeat ×4.
- Playbook persistence + restore (all stacks) — table stakes.
- Per-stack gate + checkout (reuse the live Stripe respond-credits flow).
- Numbers modules, one per stack, in order of intent strength:
  1. **S1** Scope 1+2 estimator (reuse tracker factors) + VSME-mapped KPIs +
     "what buyers will ask" preview from respond templates.
  2. **S4** runway calculator + buyer-concentration score + risk×insurance
     grid (most differentiated; the lender story).
  3. **S2** leak-finder (spend → ranked savings + payback).
  4. **S3** disposal-cost + manure nutrient-value calculators, AD go/no-go.
  (S5 already has its module; fix economics table covering only 2 of 4
  practices + carbon assumption visibility.)
- **Purchase-time LLM composition** (hosted, one pass per stack purchase,
  per the AI rule): bespoke prose over the deterministic scaffold, grounded
  by the authority ledger, numbers re-checked post-generation. Needs
  `ANTHROPIC_API_KEY` in env (still the blocker); the module must degrade
  gracefully to pure-deterministic if the call fails — never block delivery
  of a paid artifact on an API.
- Ship S1 as the first paid module; validate before building the rest.

### Phase 3 — Passport Complete + rename ship
- Bundle SKU; lender + certifier proof packs join the buyer pack; N response
  credits bundled into Complete (proposal — makes the reactive and proactive
  faces of the evidence layer one purchase).
- Rebrand rides on this ship (new name needs a new thing to point at):
  workspace name across site, "ESG" removed from all grower-facing copy,
  pricing page for the ladder, redirects.
- Two-rung split made explicit: grower workspace vs. Passport-Ag cert rung.

### Phase 4 — BYO-AI (the *unlimited* layer)
- Local-first key storage (user's Anthropic/OpenAI key, never our server).
- Unlimited features hosted AI can't offer at a one-time price: re-compose
  plans as data changes, assistant over your own farm data, extraction at
  will (Layer B of the extractor), draft-answer help beyond purchased
  credits. Authority-ledger grounding rules apply to all of it.

---

## Distribution roadmap (parallel from Phase 1)

Assets: ~5k/wk agronomy SEO traffic (biofuels flagship ~848/wk), 107+
articles, Airlock pipeline (Saturday scheduler), CY Daily Engine cadence.

### The content refinery (one source → four surfaces)
Each high-value article gets transformed once and fanned out:
1. **Substack essay** — rewritten into substack-speak (first-person,
   narrative, opinionated; not a repost). New publication for the
   farm-resilience/proof theme (separate from Evolution Unfiltered).
2. **Substack Notes** — 2–3 excerpts/data points/contrarian observations per
   essay for reach. Notes culture punishes marketing; these are insights
   that happen to have an author with a product.
3. **Medium** — canonical-link republish (import tool preserves canonical →
   no SEO damage). Reuses the Substack transform; submit to relevant pubs.
4. **LinkedIn** — 3 prescheduled posts per source article. Primary target on
   LinkedIn is the **advisor/agronomist/buyer layer** (the /for-advisors
   audience), which *does* live there, even if farmers don't.

Claude drafts all transformations in batches for Cat's review (voice check);
Cat publishes/schedules. Nothing auto-posts.

### Reddit — the tedium fix
Reddit is highest-value but Cat won't scour threads. Build a **Reddit
listener** (Airlock-shaped, internal tool — hosted AI fine here):
- Scheduled scan of target subreddits (r/farming, r/smallfarms,
  r/RegenerativeAg, r/homestead, r/Permaculture, r/AskAgronomists…) via the
  public JSON API for question-shaped posts matching stack topics.
- Relevance scoring + dedupe → **weekly digest of 5–10 answerable threads**,
  each with the question summarized and a suggested answer angle drawn from
  our articles/calculators.
- Delivered Saturday (Airlock scheduler precedent) to Discord/Command
  Center. Cat spends ~30 focused min/wk answering genuinely.
- Account hygiene: genuine answers first, no link-dropping; links only where
  directly relevant/asked. The digest includes "no-link" answers on purpose —
  karma and credibility are the asset.

### Weekly rhythm (aligned with CY Daily Engine)
- **Mon (content day):** review Claude's transform batch → schedule 1
  Substack essay + Notes + LinkedIn queue.
- **Sat 8am:** Reddit digest lands → answer session.
- Monthly: GSC + UTM review (which channel → assessments → playbooks).

### Metrics / validation gates
- Product: playbook generations, baselines entered, proof-pack exports,
  per-stack purchases, Complete take-rate.
- Distribution: Substack subs, Medium/LinkedIn referrals (UTM), Reddit-driven
  signups, channel→assessment conversion.

---

## Division of labor

**Claude/Codex (autonomous, batch-reported):** Phase 0 fixes, seed wiring,
persistence, numbers modules, proof-pack v1 wiring, Reddit listener build,
transform drafts, LinkedIn drafts, analytics events.

**Cat (decisions + publishing):** names + final prices, Stripe SKU setup,
Substack/Medium account creation, all publishing/scheduling (voice), Reddit
answering, rebrand go/no-go timing.
