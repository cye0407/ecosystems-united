# Article-flow sweep — agent report (2026-07-26)

Branch: `feat/article-flow-sweep` (pushed, NOT merged; head b7be0d96).
Implements D-013/D-015/D-016/D-017 per the approved D-021 flow, driven by
docs/content-matrix.csv. Full agent report reproduced below for Cat's
review; decisions to confirm/veto are in §6.

## 1. Counts

- 129/129 pages swept (117 articles + 12 pillars), 14 per-cluster commits.
- Mid-1 playbook CTAs placed: 46 (efficiency 15, regenerative 13,
  resilience 11, baseline 4, circular-economy 3). Left empty: 83 —
  biofuels, vsme, ecolabel and all candidate clusters, per Cat's rule.
- Mid-2 newsletter: 125 placed, 4 skipped (<600 words).
- Body sections reworded: 31 matrix-flagged + ~35 additional
  framework-naming sections/sentences the matrix regex missed.
- Removed: 112 stack badges + framework top-links (→ pillar back-links),
  78 bottom framework blocks, ~10 bottom /signup tracker-pitch blocks,
  ~20 bottom BaselineCTAs, 2 Further-Reading framework cards.
  191 framework links → 0.
- Verification: eslint 0; tsc clean outside src/lib/respond/__tests__;
  vitest 42/42; next build prerenders all 129 routes; matrix refreshed as
  final commit (derived columns only; Cat's layout/manual columns intact).

## 2. CTA copy variants (review surface)

### Mid-1 playbook CTAs — shared privacy line:
"Everything you enter stays in your browser — it never leaves your device."
Shared need line: "What it takes: five questions about your operation. No
signup, nothing to install."

- efficiency → stack-2: H "Find where your operation leaks money" · Get:
  which leaks to chase first — energy, inputs, water, or process waste —
  the order to work them over your first three years, and the six numbers
  that prove the fixes worked. · Btn "Get my leak-fixing sequence — free"
- baseline → stack-1: H "Know your numbers before someone else asks for
  them" · Get: the handful of numbers your operation should be tracking
  first, the order to set them up, and what each one lets you answer —
  for a buyer, a lender, or yourself. · Btn "Get my measurement plan — free"
- circular-economy → stack-3: H "Someone is profiting from what you throw
  away" · Get: which of your waste streams are worth money, which one to
  tackle first, and the numbers that tell you whether selling, reusing, or
  cutting them pays best. · Btn "Get my waste-to-value plan — free"
- resilience → stack-4: H "Could one bad season take you down?" · Get:
  where your operation is most exposed — one big buyer, one key supplier,
  thin reserves — which exposure to fix first, and the numbers that show
  your buffer growing. · Btn "Get my exposure fix-list — free"
- regenerative → stack-5: H "Make the transition pay — in the right
  order" · Get: which regenerative practices to start with on your
  operation, the sequence that keeps cash flow alive through the yield
  dip, and the numbers that show whether it's working. · Btn "Get my
  transition sequence — free"

### End workspace CTAs — all: primary → /tracker, secondary "See it in
action first" → /see-it-in-action, shared privacy footnote: "Your data is
yours: stored on your device, synced only to your private account. We
don't mine it — and you can export everything, anytime."

- efficiency: "Stop guessing where the water — and the money — goes"
  (approved example, verbatim)
- baseline: "Stop rebuilding the same numbers every time someone asks"
- circular-economy: "Your waste streams have a price tag — find it"
- resilience: "You can't fix an exposure you haven't measured"
- regenerative: "If the practice works, your numbers should show it"
- biofuels: "Know what your residues are worth before someone names a
  price" — negotiate from your own numbers.
- ecolabel: "Certification is an evidence game — start collecting yours
  now" — records organized the way audits ask for them.
- vsme: "The next buyer questionnaire doesn't have to cost you a week" —
  Btn "Track once, answer every request — free"
- intercropping: "Trialling a new cropping system? Let the numbers call
  it" — did the multi-crop system out-earn the old one.
- small-farm-strategy: "Small farms win on knowing their numbers"
- agribusiness-strategy: "Position yourself with numbers, not hunches"
- biodiversity: "Habitat pays better when you can show what you did" —
  Btn "Put your land on record — free"
- land-use-planning: "Plan your land from your own numbers"
- pillar/default: "Stop reading about it — see your own numbers"

(Each variant's full get/need sentences live in ArticleCTA.tsx and
MidPlaybookCTA.tsx on the branch.)

## 3. Preview URLs

Base: https://ecosystems-united-git-feat-articl-2893ee-cats-projects-d4bc9b2c.vercel.app
(previews are login-protected — open while logged into Vercel; unique-URL
equivalent: https://ecosystems-united-l9hi9r16t-cats-projects-d4bc9b2c.vercel.app)

1. /articles/agricultural-drainage — mid-1 cluster page (full flow)
2. /articles/introduction-to-intercropping — empty-mid-1 candidate page
3. /articles/esg-competitive-advantage — heaviest body rework
4. /articles/cover-crop-termination — no-pillar fallback ("All guides")
5. /articles/vsme-guide — pillar page

## 4. Pattern resistances (handled, not regex-eaten)

CRLF everywhere; two nav formats; badge markup variants; solo BaselineCTA
placements; bottom BaselineCTAs under {/* Newsletter */}; Further-Reading
framework cards; what-gets-measured hand-placement; "Continue reading
Stack 1 articles:" → "Keep reading:" (3 pages); indentation normalization
across 72 pages after removing split article blocks.

## 5. Verification details

Greps: href="/framework under articles/ → 0; <BaselineCTA under articles/
→ 0 (component kept — 3 tools pages still use it). Refreshed matrix:
mid_cta_current = 46× MidPlaybookCTA / 79× newsletter-only / 4× none;
framework_link_count = 0 and has_stack_connection_section = no on all
129 rows.

## 6. Judgment calls to confirm or veto (Cat)

1. circular-economy candidate rows (3 pages) DID get mid-1 → stack-3
   playbook (spec listed the mapping; playbook exists). Reversible.
2. Ecolabel end CTA = workspace variant; selector reachable via inline
   links only now. Reversible.
3. Removed ~10 bottom /signup "Start Free" tracker-pitch blocks (vsme +
   GlobalG.A.P. + what-gets-measured pages) — duplicate ask vs the new
   workspace end CTA. Not literally in spec; veto restores.
4. Extended removal to plain /framework links ("Explore the Five Stacks
   Framework →" blocks) + 2 Further-Reading framework cards — same
   pattern, banned copy.
5. LARGEST DISCRETIONARY EXTENSION: body rework beyond the 32 flagged
   rows (~35 more sections/sentences incl. "The Five Stacks Connection"
   on 12 strategy pages) under the binding never-"Five Stacks"/"Stack N"
   copy rule. Substance kept. Spot-check: what-are-small-farms,
   small-farm-market-channels, carbon-markets-agriculture.
6. Back-link text = exact pillar H1s (example's shortened label
   normalized to the real H1).
7. Matrix oddities followed as-is: ecolabel-guide + csrd-esg-guide pillars
   back-link to vsme-guide; two GlobalG.A.P. articles back-link to
   vsme-guide. Fix in the matrix if unwanted, then re-sweep those rows.
8. Left in place (follow-up candidates): "Foundational" pills, pillar
   dark tool-CTA blocks (matrix says "decide separately"), article
   routing blocks, "Five Stacks Tracker" product-name mentions in
   vsme-five-stacks-mapping (article's own subject), /articles index
   stack filters.
9. scripts/build-content-matrix.cjs: absolute path made repo-relative;
   cluster/end-CTA derivation now reads src/lib/article-clusters.ts
   (the old ArticleCTA slug sets no longer exist).
10. agricultural-irrigation example mid-1 swapped to the shared
    component (identical copy); WorkspacePopupExample stays on that page
    only (site-wide popup = still open, D-021 note).

## Merge status

NOT merged. Merging feat/article-flow-sweep → main = production release
(auto-deploy). Awaiting Cat's review of §2/§3/§6.
