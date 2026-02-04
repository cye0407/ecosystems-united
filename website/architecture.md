# Ecosystems United - Site Architecture

**Created:** January 2026  
**Status:** Planning  
**Updated:** January 25, 2026

---

## Overview

Modern static site replacing WordPress. Built for:
- Clean content management (markdown + frontmatter)
- Interactive tools (web apps)
- Long-term maintainability
- Fast performance

---

## Site Structure

```
ecosystemsunited.com/
│
├── / (home)
├── /framework/
│   ├── /framework/ (Five Stacks overview)
│   ├── /framework/stack-1-metrics/
│   ├── /framework/stack-2-efficiency/
│   ├── /framework/stack-3-circularity/
│   ├── /framework/stack-4-resilience/
│   └── /framework/stack-5-regenerative/
│
├── /guides/
│   └── [implementation guides by topic]
│
├── /articles/
│   └── [SEO articles - problem-focused]
│
├── /tools/
│   ├── /tools/ (tools overview)
│   ├── /tools/stack-assessment/
│   ├── /tools/baseline-calculator/
│   └── [future interactive tools]
│
├── /resources/
│   └── [downloadable PDFs, checklists, templates]
│
└── /about/
```

---

## Page Types

### 1. Core Pages (static)
| Page | Purpose |
|------|---------|
| Home | Value prop, framework intro, entry points by pain point |
| About | Who's behind this, credibility, positioning |
| Framework Overview | Five Stacks explained, why sequence matters |
| Tools Overview | What tools exist, what's coming |

### 2. Framework Pages (5 total)
One page per stack. Each includes:
- What this stack is
- Why it comes in this position (dependencies)
- What it enables (unlocks)
- Key activities
- How to know you're ready for next stack
- Related articles/guides
- Related tools (if any)

### 3. Guides
Long-form implementation content. Practical how-to.
- Tagged by stack
- Tagged by audience
- Clear CTAs to tools/resources

### 4. Articles
SEO-focused content. Problem-first.
- Adapted from ESG for Suppliers (ag-focused)
- New content targeting ag SME pain points
- Tagged by stack, audience, topic

### 5. Tools (web apps)
Interactive assessments, calculators, generators.
- Stack Assessment: "Which stack are you on?"
- Baseline Calculator: Core metrics estimator
- [Future: Response generator, ROI calculator, etc.]

### 6. Resources
Downloadable assets (gated or ungated).
- Checklists
- Templates
- PDF guides

---

## Taxonomy

Simple, intentional, tied to Five Stacks.

### Stack
```
stack-1 | stack-2 | stack-3 | stack-4 | stack-5 | general
```

### Content Type
```
framework | guide | article | tool | resource
```

### Audience
```
farmer | operations | ag-sme | sme-general | all
```

**Audience definitions:**
- `farmer` — Individual farmers, farm owners/operators
- `operations` — Operations managers, COOs, process-focused roles in ag/food businesses
- `ag-sme` — Agricultural SMEs (€5-15M), often facing buyer sustainability requirements
- `sme-general` — Non-ag SMEs facing similar compliance pressure
- `all` — Content applicable across audiences

### Topic (optional, for filtering)
```
carbon | water | energy | waste | certification | compliance | soil | biodiversity | [etc.]
```

---

## URL Structure

Keep it flat and readable:

| Type | Pattern | Example |
|------|---------|---------|
| Framework | `/framework/[stack-slug]/` | `/framework/stack-1-metrics/` |
| Guide | `/guides/[slug]/` | `/guides/baseline-data-collection/` |
| Article | `/articles/[slug]/` | `/articles/customer-asking-esg-data/` |
| Tool | `/tools/[slug]/` | `/tools/stack-assessment/` |
| Resource | `/resources/[slug]/` | `/resources/carbon-calculation-checklist/` |

**Migration note:** Existing WordPress posts with traffic should keep their current URLs via redirects or matching slugs.

---

## Content Frontmatter Schema

All markdown files use consistent frontmatter:

```yaml
---
title: "Article Title"
slug: "url-slug"
description: "Meta description for SEO"
date: 2026-01-25
updated: 2026-01-25

# Taxonomy
type: article | guide | framework | resource
stack: stack-1 | stack-2 | stack-3 | stack-4 | stack-5 | general
audience: 
  - farmer
  - operations
topics:
  - carbon
  - compliance

# SEO
keywords:
  - primary keyword
  - secondary keyword

# Content
cta: toolkit | newsletter | assessment | none
cta_text: "Optional custom CTA text"
related:
  - /articles/related-article/
  - /guides/related-guide/

# Migration (for WP imports)
wp_id: 1234
wp_original_slug: "old-wordpress-slug"
---
```

---

## Tech Stack

### Decision: Next.js + MDX

- **Framework:** Next.js 14 (App Router)
- **Content:** MDX files in `/content/` folder
- **Styling:** Tailwind CSS
- **Hosting:** Vercel (free tier to start)
- **Interactive tools:** React components, same codebase
- **Search:** Built-in search (Pagefind, Algolia DocSearch, or simple client-side)
- **Analytics:** Plausible or Vercel Analytics (see below)
- **Comments:** None

**Why Next.js:**
- Single codebase for content + tools
- Tools/web apps are a priority — React is needed anyway
- Vercel deployment is seamless
- Good long-term maintainability

---

## Decisions Made

### Domain
- **ecosystemsunited.com** — no subdomains needed for now
- Future consideration: `tools.ecosystemsunited.com` if tools become substantial, but not necessary

### Newsletter/Email
- **Not implemented yet** — will add when needed
- Options to consider later: Buttondown (simple, cheap), ConvertKit (more features), or Resend (developer-friendly)
- Can add signup forms without committing to a platform immediately

### Gated Content
- **None currently** — will add gating as resources are created
- Stack 1 toolkit is close; that could be first gated resource

### Tools MVP
- **Content first, tools second**
- Launch with content (articles, framework pages) for SEO building
- Add Stack Assessment tool when ready
- Links/CTAs can point to "coming soon" or be added later

### Analytics
**Recommendation: Plausible**

| Feature | Google Analytics | Plausible | Vercel Analytics |
|---------|-----------------|-----------|------------------|
| Free tier | Yes | No (€9/mo) | Yes (limited) |
| Privacy-friendly | No | Yes | Yes |
| Simple dashboard | No (complex) | Yes | Yes |
| No cookie banner needed | No | Yes | Yes |
| Traffic sources, pages, etc. | Yes | Yes | Basic |

- **Plausible** costs €9/month but is clean, simple, GDPR-compliant without cookie banners
- **Vercel Analytics** is free on hobby plan but limited
- **Google Analytics** is free but complex, requires cookie consent, and Google gets your data

Suggestion: Start with **Vercel Analytics** (free), upgrade to **Plausible** if you want more insight without the Google overhead.

### Comments
- **No** — not needed, adds moderation burden

### Search
- **Yes** — will implement
- Options:
  - **Pagefind** (free, static, runs at build time) — good for content sites
  - **Algolia DocSearch** (free for docs/content sites) — more powerful
  - **Simple client-side** (filter through posts JSON) — works for smaller sites
- Recommendation: Start with **Pagefind** — free, fast, no external dependencies

---

## Migration Plan

### Phase 1: Architecture & Setup ← WE ARE HERE
- [x] Define site structure
- [x] Define taxonomy
- [x] Define frontmatter schema
- [x] Choose tech stack
- [ ] Set up repo structure
- [ ] Create base Next.js project
- [ ] Deploy empty shell to Vercel

### Phase 2: Content Preparation
- [ ] Parse WordPress XML → clean markdown with frontmatter
- [ ] Categorize 51 keeper posts by stack/audience/type
- [ ] Flag posts needing rewrites
- [ ] Adapt ESG for Suppliers articles for ag audience
- [ ] Write/refine framework pages (5 stacks)

### Phase 3: Build & Content Migration
- [ ] Build page templates (home, framework, article, guide)
- [ ] Import cleaned content
- [ ] Set up redirects for changed URLs
- [ ] Implement search (Pagefind)
- [ ] QA internal links

### Phase 4: Tools Development (post-launch)
- [ ] Stack Assessment tool
- [ ] Additional tools as prioritized

### Phase 5: Launch
- [ ] DNS cutover to Vercel
- [ ] Noindex/retire WordPress
- [ ] Submit new sitemap to Search Console
- [ ] Monitor and iterate

---

## Next Steps

1. Set up repo structure for Next.js project
2. Parse WordPress keeper posts → clean markdown
3. Begin framework page content
4. Build base templates

---

**Related docs:**
- `instructions/ecosystems-united-working-with-claude.md`
- `frameworks/five-stacks/five-stacks-overview.md`
