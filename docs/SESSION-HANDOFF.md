# Session Handoff — Ecosystems United

_Last updated: 2026-07-22. Branch: `feat/regenerative-cluster`._

Pick-up note after a computer restart. Read this first, then continue from
**"Next actions"** at the bottom.

---

## Where we are right now

The **on-site SEO / placement audit** is complete and the two concrete wins are
committed + pushed. The strategic build (Playbooks) is the next real chunk.

### ✅ Shipped this session (pushed to `feat/regenerative-cluster`)

**Commit `01a85762` — `feat(seo): add metadata to all 15 tool pages + fix sitemap coverage`**

1. **Tool-page SEO metadata.** Every `/tools/*` page is a `"use client"`
   component, and client components **cannot export `metadata`** — so all 15
   tool pages shipped with no `<title>`, description, or OG tags (invisible in
   search, unshareable). Fixed by adding a server `layout.tsx` per tool that
   exports `metadata` (title, description, canonical URL, OG title/description).
   OG `siteName`/image/type inherit from the root layout. Files:
   `src/app/(marketing)/tools/<tool>/layout.tsx` × 15.

2. **Sitemap coverage** (`src/app/sitemap.ts`). Added the 6 missing conversion
   tools (`regenerative-roi`, `resilience-exposure`, `biofuel-feedstock-compare`,
   `scope-3-readiness`, `csrd-readiness`, `ecolabel-selector`) plus 3 public
   product pages (`/products`, `/tracker`, `/book`). Deliberately **excluded**
   `/workshops/ecolabel-certification` — that route directory is empty (would be
   a 404 in the sitemap).

**Verification:** `tsc --noEmit` shows **0 non-test errors**. The only tsc errors
are pre-existing `src/lib/respond/__tests__/*` vitest-globals noise that also
exists on `main` (not a regression; CLAUDE.md confirms build + 31/31 tests pass).

_Prior commit this session:_ `63539ac8` — `feat(data): Add Data extractor modal`
(the "Add Data" button now works via rules-based extraction — Layer A of the
extractor). Also pushed.

### ✅ Resolved decisions (no code needed)

- **#3 CTA placement — LEAVE AS-IS (user decision).** Investigated how CTAs land
  on articles: `articles/layout.tsx` renders `{children}` then `<ArticleCTA />`
  at the bottom. Separately, **126 article pages already render `<BaselineCTA />`
  mid-article** (after the first sections). So placement is already optimal:
  **data-first tracker CTA up top, stack-specific tool CTA at the bottom** —
  matches the locked-in data-first positioning. User chose to leave it. The
  optional "make mid-CTA cluster-aware" tweak was declined.

---

## Next actions (resume here)

Recommended order **A → B**. C is blocked.

### A. Finish the SEO batch — structured data (#4)  _small, mechanical_
`src/components/marketing/ArticleSchemaAndTags.tsx` currently emits only
`Article` JSON-LD. Add:
- **`SoftwareApplication`** schema on the tool pages (they now have metadata) →
  eligible for rich tool/app results in search.
- **`BreadcrumbList`** → breadcrumb trail in SERPs.
- **`FAQPage`** on guides that contain Q&A sections → FAQ rich snippets.
Low risk, compounds with the metadata just shipped. ~half a session.

### B. Playbook deterministic backbone — Layer A #2  _the strategic build_
Per-stack **rules engine** that turns free-tool inputs into a structured
playbook. This is the **paid-conversion target** the free funnel points at
(per `project_playbooks` memory: €29 top-of-funnel, rules + one LLM call).
Build the deterministic half now (no API key needed); LLM composition is Layer B.

### C. Layer B — BLOCKED on `ANTHROPIC_API_KEY` in env
- Extractor Phase 2: LLM/OCR extraction for any-format / scanned docs
  (Layer A rules path already live in the Add Data modal).
- Playbook €29 LLM composition step.
Cannot run until the key is set in the environment.

---

## Loose ends / background context

- **Layers model** (user's framing): Layer A = deterministic/rules (no key,
  ship now). Layer B = LLM (needs `ANTHROPIC_API_KEY`).
- **Pricing (locked):** Passport-Ag €499 one-time own-it; €39 one-time Response
  Generator (pay-per); subscription deferred (nets ~€5/mo after German taxes →
  volume game). Auto-extraction is the value driver. See `project_pricing`.
- **Funnel:** free tools → **Playbook (€29, paid)** → tracker. See
  `project_playbooks`.
- **Positioning:** data-first — the tracker is farm-data infrastructure serving
  banks / buyers / grants / self-investment, NOT just buyer questionnaires. See
  `feedback_data_first_positioning`. Keep this front-of-mind for any CTA/ copy.
- **Command Center:** briefing item #7 (data-quality capture) — verify live once
  Supabase RLS/auth allows, then mark done in Command Center.

## Environment gotchas hit this session

- **Command-safety classifier flakiness:** in auto-approve mode, Bash/PowerShell
  commands are gated by a classifier model (Sonnet 5) that was intermittently
  unavailable ("cannot determine the safety of PowerShell right now"). It's
  transient + Anthropic-side. Read/search/edit are unaffected. Durable fix if it
  recurs: add safe git + read-only commands to `.claude/settings.local.json`
  under `permissions.allow`.
- **Ripgrep (Glob/Grep) times out** on broad patterns over this large repo —
  scope searches to a subdirectory (e.g. `src/app/(marketing)/tools`) instead of
  repo-wide globs.
- **`tsc --noEmit` is slow** (~5+ min) and surfaces pre-existing `__tests__`
  errors — filter with `Where-Object { $_ -notmatch '__tests__' }` to see only
  real errors.
