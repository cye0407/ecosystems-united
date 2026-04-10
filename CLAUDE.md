# Ecosystems United

## Project Overview
Ecosystems United is the main platform for the Five Stacks Framework, transforming sustainability compliance (CSRD) into competitive advantage for SMEs. Includes the public website, the EU web app, and the Five Stacks methodology.

## Tech Stack
- Next.js / TypeScript
- Supabase (if applicable â€” confirm)
- Tailwind CSS

## Current State
- Unified Next.js app on main branch — build passes with 162 routes, 0 lint errors, 31/31 tests pass
- 360 View page (/360-view) — read-only collation of all data with year/site filters, sticky nav, 11 domain sections
- 360 View section order matches data hub flow: Company, SWOT, [Agricultural], Infrastructure, Outputs, Materials, Energy, Transport, Workforce, Packaging, Context
- All 8 data pages follow consistent structure: gradient header badge, inline stats row, tabbed content
- Agricultural features: land use (infrastructure), fertiliser (materials), livestock+crops (outputs) — gated by isAgriculturalIndustry()
- Energy page merged from 2-page (landing + entry) into single tabbed page; /data/energy/entry redirects
- Visual consistency: no rainbow multicolor — all category cards use gradient+neutral, table icons use gray-400
- Context page cleaned up: inline stats row (no ProgressBar), no tips card, no tab checkmarks
- Sidebar nav: Dashboard → Data → 360 View → Exports → Settings
- Phosphor Icons (@phosphor-icons/react) with weight="duotone" used consistently throughout
- 12 pillar pages at /articles/[topic]-guide linking all 107+ articles into topic clusters
- ArticleCTA component is stack-aware — shows matching stack assessment per article; ecolabel articles show certification pack waitlist CTA; ~30% of articles show product CTAs
- Stripe payment integration for response generator (€39 first, €19 additional) via /api/stripe/
- Response generator at /respond gated behind credits (ResponseGate component)
- Response engine powered by response-ready package with ESG + GlobalG.A.P. domain packs (200+ templates, question classification, defensive rewriting)
- response-ready package lives in packages/response-ready/ (monorepo, not external dependency)
- WaitlistForm component captures email + interest area to Supabase leads table via analytics.captureLead(); used across products, about, for-advisors, tools, and article CTAs
- Nav: Five Stacks (dropdown) | Guides | Products | For Advisors | About | 🔍 Search | Sign In | [Free Tracker → /tracker]
- Site-wide search (SiteSearch component): Cmd/Ctrl+K, searches articles/products/framework/tools/workshops, client-side index
- Article search bar on /articles with live filtering by keyword + stack filter
- /modern-sustainability merged into /framework, redirects in place
- /pricing redirects to /products
- Products page (/products) is the product catalog; individual product pages: /tracker, /see-it-in-action, /workshops/ecolabel-certification, /book
- Ecolabel workshop at /workshops/ecolabel-certification (€35, Stripe Payment Link checkout)
- ArticleCTA: ecolabel articles promote workshop; ~30% of other articles show product CTAs
- Homepage includes "Why Ecosystems United" section (not another spreadsheet, built for ag, track once answer everything, no lock-in)
- Max-width standard: max-w-5xl for product/tool pages, max-w-4xl for reading pages, max-w-6xl for nav/footer

## Next Steps
- Audit tracker page claims against actual app functionality: CSV import, CSV export, auto-calculated emissions, data quality tracking — verify each works before promoting on marketing pages
- Redesign /tracker page: consolidate 9 sections (21 cards) into ~6 sections with 4 key cards + expandable detail (mockup agreed)
- Add screenshot/preview placeholder to tracker page hero
- Record 2-minute product demo videos: (1) Response Generator fire-drill flow, (2) Tracker before/after experience
- Build remaining certification domain packs: EU Organic, B Corp
- Email nurture infrastructure: choose provider (Resend, ConvertKit, Loops), build sequences
- Social proof: first case study (farm using tracker + response generator to answer buyer questionnaire)
- Schedule first ecolabel workshop session, replace waitlist with live booking

## Architecture
- src/app/(marketing)/ — public website pages (framework, articles, tools, assessments)
- src/app/(app)/ — authenticated dashboard (data entry, respond, exports, settings, onboarding)
- src/app/(auth)/ — login, signup, forgot-password
- src/components/ — shared UI, data, auth, app, and marketing components
- src/lib/ — supabase client, tracking, respond engine, analytics, sentry, validation
- src/stores/ — Zustand stores (appStore, dataStore)
- src/contexts/ — AuthContext (Supabase auth)
- src/hooks/ — useResponseGenerator, useSupabaseSync
- src/types/ — shared TypeScript types
- app-legacy/ — original Vite React app (reference only)
- site/ — original Next.js marketing site (reference only)
- public/ — static assets (logo, icons)

## Git Conventions
- Use conventional commits: feat:, fix:, docs:, refactor:, chore:
- Keep subject lines under 72 characters
- Commit after each meaningful change, not at the end of a session
- Create feature branches for new work: feat/description

## Session Protocol
- At session start: read this file
- During work: commit every meaningful milestone
- At session end: update "Current State" above, commit, push
