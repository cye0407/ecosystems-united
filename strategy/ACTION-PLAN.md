# Ecosystems United — Post-Launch Action Plan

**Created:** 2026-02-08 (launch day)
**Last updated:** 2026-03-19
**Source:** Persona panel review of live site + Five Stacks free tracker proposition

---

## Phase 1: Go-to-Market Engine ✅ (mostly shipped)
*Get the free tracker live and monetization visible*

- [x] Ship free Stack 1 tracker as installable PWA (desktop/mobile)
- [ ] Use "free plan" language throughout (not "free for life")
- [x] CSV data export from all 8 domains (data portability = trust)
- [ ] Clear privacy statement on tracker page ("we don't sell your data") — privacy policy exists at /privacy, but no on-page statement on tracker
- [x] Multi-site support free — call it out explicitly in marketing copy
- [x] Response generator teaser/demo visible inside tracker (don't hide it)
- [ ] Upgrade triggers: "Your data could auto-answer 47 EcoVadis questions"
- [ ] Assessment results flow into tracker setup (not a dead end) — assessments exist but no link from results → tracker
- [x] PWA install prompt + desktop presence (taskbar utility, not browser tab)
- [x] "For Advisors" landing page — signal the consultant channel early
- [x] Wire up usage tracking (see Phase 1b below)

---

## Phase 1b: Usage Tracking ✅ (core wired)
*Instrument everything before scaling — know what's working*

Analytics wired to Supabase `site_events` table + Vercel Analytics. Cookie consent banner implemented.

- [x] Analytics provider chosen — Supabase `site_events` + Vercel Analytics
- [x] Wire `src/lib/analytics.ts` send() function to Supabase
- [x] Cookie consent banner with accept/decline

### Marketing Site Events
- [x] Page views (all routes)
- [x] Assessment starts and completions (per stack)
- [x] CTA clicks
- [ ] Article engagement: scroll depth, time on page
- [ ] Assessment → tracker conversion (did they click through?)
- [ ] Newsletter signup clicks (Buttondown)
- [ ] WordPress redirect hits (which old URLs are still getting traffic?)

### Tracker Events
- [ ] PWA installs (beforeinstallprompt event)
- [ ] Domain completion: which of the 8 domains get filled first, which get abandoned
- [ ] Data entry sessions: frequency, duration, records per session
- [ ] Multi-site usage: how many users add >1 site
- [ ] CSV export usage (how often, which domains)
- [ ] Response generator teaser clicks (upgrade intent signal)
- [ ] Return visits: daily/weekly/monthly active users

### Funnel Metrics (the numbers that matter)
- [ ] **Visitor → Assessment**: what % of site visitors take an assessment?
- [ ] **Assessment → Tracker**: what % of assessment completers open the tracker?
- [ ] **Tracker → 3-month baseline**: what % enter data for 3+ months in any domain?
- [ ] **Tracker → Upgrade click**: what % click the response generator teaser?
- [ ] **Article → Assessment**: which articles drive the most assessment starts?
- [ ] **Referral source**: organic search vs. direct vs. buyer referral vs. consultant referral

### Channel-Specific Tracking
- [ ] UTM parameter support for buyer/consultant referral links
- [ ] Advisor referral codes (track which consultants drive signups)
- [ ] Buyer referral attribution (which retailers are sending suppliers?)

### Dashboard / Reporting
- [ ] Weekly metrics summary (automated or manual check)
- [ ] Key leading indicators to watch:
  - PWA installs per week
  - Domains with data per user (target: 3+ within first month)
  - Assessment completion rate
  - Response generator teaser click rate
  - Return visit frequency

---

## Phase 2: Trust Layer
*Real proof that this works*

- [ ] One real case study: small farm, shoebox receipts → answering buyer questionnaire
- [ ] "Used by" / "Trusted by" section on homepage or framework page
- [ ] Longevity signals: open data export, active changelog, company backing
- [ ] Pilot program — recruit 5-10 farms to use Stack 1 tracker, document results
- [ ] Micro-scale ROI examples in key articles (sized for 10-50 hectare operations, not industrial)

---

## Phase 3: Content Experience & SEO
*Turn the library into a journey — and make it discoverable*

### Content Structure (shipped)
- [x] Intent-based landing paths (3 entry points at /start/):
  - /start/buyer-questionnaire → "I just got a buyer questionnaire"
  - /start/csrd → "I need to understand CSRD"
  - /start/costs → "My costs are out of control"
- [x] Stack filtering on articles index page (All, Stack 1–5 tabs)
- [x] Stack-aware ArticleCTA on all articles (matches article's stack → relevant assessment)
- [x] "Explore further" article links on Stack 1 and Stack 3 framework pages
- [x] See it in action page with dashboard mockup + response generator preview

### Content Structure (remaining)
- [ ] Pillar/cluster pages — hub pages for top article clusters (circularity, intercropping, CSRD, biofuels, small farm strategy) linking to all articles in cluster + parent stack page
- [ ] "Start Here" recommendation on articles index page
- [ ] Assessment results → tracker handoff (button from results to start tracking)
- [ ] Full-text search on articles page
- [ ] Recommended content based on user's stack level

### SEO & AI Discoverability
- [ ] AI/GEO content optimization — question-based H2s, answer-first paragraphs, source citations in top articles (ChatGPT is #3 referrer)
- [ ] Organization + WebSite JSON-LD on root layout
- [ ] BreadcrumbList schema on articles and framework pages
- [ ] FAQ schema on "what is X" articles and framework pages
- [ ] Fix `dateModified` in ArticleJsonLd (currently equals `datePublished`)
- [ ] Fix sitemap `lastModified` (currently set to `now` on every build)
- [ ] Proper 1200x630 OG image (currently using logo.png)

---

## Phase 4: Channel Development
*Consultants and buyers as distribution*

### Consultant/Advisor Channel
- [x] "For Advisors" landing page with problem statement, features, coming-soon roadmap
- [ ] Consultant dashboard — view across multiple clients
- [ ] White-label assessments for advisor practices
- [ ] Referral notifications (advisor pinged when client completes Stack 1)
- [ ] Five Stacks certification/credential for consultants
- [ ] Listed advisor directory ("find a Five Stacks advisor near you")
- [ ] Consultant onboarding playbook (install → 3 months data → strategy call)

### Buyer Channel
- [ ] "For Buyers" landing page — "Recommend this to your supply chain"
- [ ] Supplier recommendation template (email/letter buyers can send)
- [ ] Messaging: how supplier data quality improves buyer Scope 3 reporting
- [ ] Mapping to specific buyer questionnaire frameworks (EcoVadis, CDP)

---

## Phase 5: Polish & Positioning
*Sharpen the message*

- [ ] Five Stacks → EcoVadis / CDP / CSRD / VSME mapping page
- [ ] Homepage sharpened to one clear positioning line
  - Candidate: "The operating system for farm sustainability"
  - Surface "Infrastructure, Not Narratives" as the tagline
- [ ] Geographic scope clarity (EU? UK? Global?)
- [ ] Regional tagging on articles (UK schemes vs EU regulations vs universal)
- [ ] Emphasize 8-domain structure as the moat/differentiator in marketing

---

## What to Focus on Now (as of 2026-03-19)

Based on week of Mar 12–19 analytics: 68 homepage visitors, 41 framework visitors, ChatGPT is #3 referrer (10 visitors), Stack 3 (Circularity) is top framework page.

**Priority order:**
1. **Pillar/cluster pages** — biggest organic traffic lever; connects 107 articles into topical authority clusters
2. **Assessment → tracker handoff** — plug the conversion gap between free tools and signup
3. **AI/GEO content optimization** — lean into ChatGPT as proven referral channel
4. **Structured data cleanup** — Organization JSON-LD, breadcrumbs, dateModified fix
5. **Case study + social proof** — trust signals for conversion

---

## Strategic Notes

### Why free tracker first
The tracker is cheap to serve (client-side data entry, near-zero marginal cost). The response generator is where compute/AI costs live. Free tracker creates data gravity — 12 months of 8-domain data creates massive switching costs. The upgrade sells itself.

### Why consultants matter
One consultant with 40 clients is worth more than 40 individual signups. They become unpaid onboarding, unpaid support, and unpaid evangelists. James (panel persona) would build his entire practice around this if given basic tools. The "For Advisors" page in Phase 1 is a low-cost signal that this channel is open.

### Why buyers matter
Adama (panel persona) would actively recommend this to 500+ suppliers. She doesn't care about the business model — she cares that her Scope 3 data quality improves. Buyers become the largest unpaid distribution channel if the tool is free and the content is credible.

### The content insight
107 articles of consultant-grade quality. The content is significantly better than the content strategy. The library is excellent — it needs a librarian, a front door, and a path to the register.

### The positioning insight
"Infrastructure, Not Narratives" is the strongest differentiator. Every competitor talks about saving the planet. This site talks about saving your margins. For the target audience (agricultural SMEs tired of sustainability theater), that's exactly right.

---

## Panel Personas (reference)

| Persona | Role | Key Insight |
|---------|------|-------------|
| Maria | Small olive farm, Portugal, 12 employees | "Free means I'd actually try it. Show me one case study of someone like me." |
| Thomas | Sustainability lead, dairy cooperative, Netherlands, 85 employees | "The tracker is the hook. Once I've entered 3 months of data, I'm not switching." |
| Adama | Procurement, large food retailer, France | "I'd recommend this to 500 suppliers. You're solving my Scope 3 problem by solving theirs." |
| Rachel | SaaS pricing strategist | "Textbook product-led growth. Free tracker → data gravity → paid response generator." |
| James | Agricultural consultant, UK, 40+ clients | "A free tracker I can roll out across all 40 clients? Game-changer for my practice." |
