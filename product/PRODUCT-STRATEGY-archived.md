# Five Stacks Platform — Product Strategy

**Created:** January 26, 2026  
**Status:** Strategic direction confirmed, pre-development

---

## The Decision

After extensive consideration of Excel toolkits vs. web applications, the decision is clear:

**Build a unified web platform, not Excel templates.**

### Why

1. **Development velocity** — A webapp with clean inputs/outputs ships faster than polished, protected, multi-sheet Excel workbooks
2. **Enjoyment** — Building webapps is energizing; Excel template maintenance is draining
3. **Use case fit** — Operational efficiency tracking happens in the field, on the floor, on the move—not at a desk with spreadsheets
4. **Modern operators** — New generations work differently; tools should fit how people actually work
5. **Maintenance sanity** — One codebase to maintain, not dozens of versioned Excel files

---

## Product Architecture

### Core Platform: Five Stacks

**What it is:** A web application for building operational excellence through the Five Stacks methodology.

**Entry point:** ecosystemsunited.com/five-stacks

**Model:** Lifetime purchase after 14-day free trial

**Price range:** €147-197 for core platform

**Key characteristics:**
- Mobile-friendly (field use, on-the-go tracking)
- All 5 stacks methodology included
- Universal tracking (energy, water, waste, inputs, outputs)
- Export capability (audit-ready outputs they own)
- One account, one login, one place

---

### Calculator Modules

**What they are:** Focused tools that solve specific problems, living inside the platform.

**Entry points:** Individual landing pages (ecosystemsunited.com/solar-efficiency-calculator, etc.)

**Model:** 
- Standalone purchase: €29-39 each
- Add-on price (for core owners): €19-29 each
- All work independently OR integrate with core data

**14-day trial applies to all.**

#### Potential Modules (to be prioritized based on demand)

| Module | SEO Entry Point | What It Does |
|--------|-----------------|--------------|
| Solar ROI Calculator | Solar articles | Payback, sizing, ROI analysis |
| Intercropping Value Calculator | Intercropping content | Yield optimization, companion planning |
| Ecolabel Prep Tool | Ecolabel articles (high traffic!) | "Which ecolabel fits?" → checklist → gap analysis |
| VSME Prep/Delivery | CSRD/VSME content | Guided VSME completion → export |
| Water Efficiency Analyzer | Water/irrigation content | Usage tracking, efficiency benchmarks |
| Carbon Credit Feasibility | Carbon/emissions content | "Am I a candidate?" → estimation |
| Crop Rotation Planner | Ag content | Multi-year planning, soil health |
| Feed Conversion Optimizer | Livestock content | Input/output efficiency |
| Waste-to-Value Scanner | Circular economy content | Identify valorization opportunities |

**Build priority:** TBD based on existing traffic data and user feedback.

---

## Revenue Model

### Entry Paths

**Path A: Core → Modules**
Someone buys Five Stacks core (€147) → sees calculator modules → buys what's relevant (€19-29 each as add-ons)

**Path B: Module → Core**
Someone finds article via SEO → sees relevant calculator (€29-39 standalone) → buys it → loves it → gets upsold to Five Stacks core

### Pricing Structure

| Product | Standalone | With Core |
|---------|------------|-----------|
| Five Stacks Core | €147-197 | — |
| Individual Calculator | €29-39 | €19-29 |
| Bundle (Core + 3 calculators) | €179-229 | — |

### The Guarantee

14-day free trial on everything. No credit card required to start. Full functionality during trial.

If they later upgrade (calculator → core), credit toward purchase.

---

## Technical Architecture

### Stack

| Layer | Technology | Why |
|-------|------------|-----|
| Frontend | React + Tailwind | Already know it from ESG Passport |
| Hosting | Vercel | Already have Pro account |
| Database + Auth | Supabase | All-in-one, generous free tier, scales |
| Payments | Lemon Squeezy | Handles EU VAT, entitlements, familiar |
| Email | Resend | Transactional emails, good free tier |

### Key Principles

- **One codebase** — All modules live in the same app
- **Modular unlocks** — Account tracks what user has purchased
- **Shared data backbone** — Operational metrics feed into multiple tools
- **Mobile-first** — Designed for field use, not just desktop

### Cost Projection

| Phase | Monthly Cost |
|-------|--------------|
| Building | ~€0 (Vercel Pro + Claude Max already covered) |
| Early (0-100 users) | ~€0 + payment fees |
| Growing (100-1000 users) | ~€25-50 (Supabase Pro) + payment fees |
| Scaling (1000+ users) | ~€100-170 + payment fees |

---

## Relationship to Other Products

### Completely Separate Products

| Product | Domain | Problem Solved | Model |
|---------|--------|----------------|-------|
| ESG Toolkit | esgforsuppliers.com | Quick CSRD answers | One-time Excel download |
| ESG Passport | TBD | Ongoing compliance tracking | SaaS subscription |
| Five Stacks | ecosystemsunited.com | Operational excellence | Lifetime + modules |

**No shared infrastructure.** Different audiences, different jobs-to-be-done.

- **ESG Passport:** "I need to answer buyer questionnaires without panicking" → SME ops managers at desks
- **Five Stacks:** "I want to build operational excellence into how I work" → Modern operators on the go

### Learning Path

ESG Passport ships first. It's the training ground for:
- Auth + accounts (Supabase)
- Payment integration (Lemon Squeezy)
- Trial logic + entitlements
- Real user feedback
- Support patterns

Then Five Stacks builds fresh, informed by everything learned.

---

## Timeline (Rough)

| Phase | Focus | Duration |
|-------|-------|----------|
| Now → Q1 2026 | Polish ESG Passport, add auth/payments, ship | 4-6 weeks |
| Q1-Q2 2026 | ESG Passport live, collecting feedback | Ongoing |
| Q2 2026 | Start Five Stacks core build | 6-8 weeks |
| Q2-Q3 2026 | First calculator modules, marketing pages | 2-4 weeks |
| Q3+ 2026 | Add modules based on demand | Ongoing |

---

## Design Philosophy

### For the Modern Operator

> "Old guard tools assumed you'd carve out time to do the admin. The new reality is that if it doesn't fit into the flow of work, it doesn't get done."

- **Mobile-first** — Capture data in the moment, not later at a desk
- **Focused tools** — Each module does one thing well
- **Real ownership** — Lifetime purchase, exportable data, no subscription treadmill
- **Professional outputs** — Audit-ready exports that hold up to scrutiny

### The Five Stacks Concepts Are Timeless

The methodology isn't new—baseline metrics, operational efficiency, circular value, resilience, regeneration. These are business fundamentals.

What's new is packaging them for how people actually work now: mobile, fragmented attention, in the field, wanting something that works without requiring "office hours."

---

## Open Questions (To Resolve During Build)

1. **Trial mechanics** — Full functionality or limited? Probably full.
2. **Multi-site support** — One account = one operation, or multiple? Could be a Pro feature.
3. **Vertical packs vs. universal** — Start universal, add ag/manufacturing/services templates later?
4. **Benchmark data** — Where does industry comparison data come from?
5. **Offline support** — PWA for true field use without connectivity?

---

## Next Steps

1. Document core data model (what does each stack actually track?)
2. Map calculator module specs
3. Finish ESG Passport (the learning ground)
4. Begin Five Stacks core build

---

*This document captures the strategic direction as of January 26, 2026. Details will evolve as development progresses.*
