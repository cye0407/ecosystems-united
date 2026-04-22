# 2026-04-13 Positioning and Pillar Tracker

Purpose: track decisions, actions, backlog findings, and open choices from the April 13, 2026 site review conversation.

## Decisions Made Today

- Core positioning direction:
  `Ecosystems United helps SME farms build the operational capability to meet buyer demands, reduce risk, and improve margins.`
- Messaging implication:
  `questionnaire/response generation` is a wedge offer, not the whole company identity.
- Brand implication:
  `buyer-ready and commercially resilient SME farms` is the authority position.
- Content implication:
  focus should shift from "more information" to clearer commercial journeys and stronger topic ownership around farm operator pains.
- Confirmed 4-pillar working set:
  - `Buyer Readiness and Baseline Infrastructure`
  - `Certification and Market Access`
  - `Small Farm Competitive Strategy and Margin`
  - `Resilience and Risk`
- Final decision for today:
  keep `Buyer Readiness and Baseline Infrastructure` as the working label and do not spend more energy renaming it now.
- Publication decision:
  do not push/deploy the local GlobalG.A.P. cluster yet.
- Reason:
  suspected bugs need review before any push or deploy decision.
- Deferred operational task:
  review bugs in the GlobalG.A.P. cluster and related local-ahead changes before publishing.

## Working Actions From Today

- Track all strategy changes and decisions from this date in this file.
- Audit repo and git backlog for already-written pillar or cluster pages before planning any net-new content.
- Prep a 4-pillar structure that fits the new positioning rather than defaulting to "response generation" as the center of the business.

## Repo / Git Findings

### What already exists on `main`

These are already present in the codebase and should be treated as existing pillar-style assets, not missing work:

- CSRD / ESG pillar:
  [src/app/(marketing)/articles/csrd-esg-guide/page.tsx](/abs/path/C:/Users/User/Documents/CY/ecosystems-united/src/app/(marketing)/articles/csrd-esg-guide/page.tsx)
- VSME pillar:
  [src/app/(marketing)/articles/vsme-guide/page.tsx](/abs/path/C:/Users/User/Documents/CY/ecosystems-united/src/app/(marketing)/articles/vsme-guide/page.tsx)
- Small farm strategy pillar:
  [src/app/(marketing)/articles/small-farm-guide/page.tsx](/abs/path/C:/Users/User/Documents/CY/ecosystems-united/src/app/(marketing)/articles/small-farm-guide/page.tsx)
- Ecolabel / certification pillar:
  [src/app/(marketing)/articles/ecolabel-guide/page.tsx](/abs/path/C:/Users/User/Documents/CY/ecosystems-united/src/app/(marketing)/articles/ecolabel-guide/page.tsx)
- Resilience pillar:
  [src/app/(marketing)/articles/resilience-guide/page.tsx](/abs/path/C:/Users/User/Documents/CY/ecosystems-united/src/app/(marketing)/articles/resilience-guide/page.tsx)
- GlobalG.A.P. certification cluster anchor:
  [src/app/(marketing)/articles/globalg-a-p-certification-what-sme-farms-need/page.tsx](/abs/path/C:/Users/User/Documents/CY/ecosystems-united/src/app/(marketing)/articles/globalg-a-p-certification-what-sme-farms-need/page.tsx)

### Relevant shipped history

- `b8c36557` `feat: add pillar pages for all 12 article clusters`
- `21d50f2b` `feat: add VSME content cluster (pillar + 4 articles)`
- `59535335` `feat: add GlobalG.A.P. article cluster and book download page`

### Branch / backlog check

- `feat/nextjs-unification` has no unique commits ahead of `main`.
- `feat/vsme-content` has one extra commit:
  `019328cb fix: update tracker page — remove stale content, fix layout`
- `main` already contains a later equivalent tracker fix:
  `6123014c fix: update tracker page — remove stale content, fix layout`
- Conclusion:
  no obvious unpublished pillar-content backlog was found on side branches.

### Local vs remote

- Local `main` is ahead of `origin/main`.
- Files ahead of remote include the GlobalG.A.P. article cluster and book page, so those may be unpushed/unpublished depending on deployment flow.

## 4-Pillar Prep

This is the current working proposal, aligned to the new positioning.

### Pillar 1: Buyer Readiness and Baseline Infrastructure

- Job to be done:
  help SME farms answer buyer/compliance demands without scrambling.
- Existing core pages:
  `csrd-esg-guide`, `vsme-guide`, `building-baseline`, `buyer-scrutiny`, `building-esg-response-system`
- Role in business:
  authority + entry point for farms feeling reporting pressure.
- Notes:
  this is where the response engine fits, but it should sit under the larger baseline/readiness story.

### Pillar 2: Certification and Market Access

- Job to be done:
  help farms decide which certifications matter commercially and prepare efficiently.
- Existing core pages:
  `ecolabel-guide`, `globalg-a-p-certification-what-sme-farms-need`, `globalg-a-p-audit-preparation-guide`, `globalg-a-p-vs-organic-certification`
- Role in business:
  commercial proof that data and documentation lead to retained/won buyers.
- Notes:
  stronger than a generic "ecolabels" topic if framed around market access and buyer requirements.

### Pillar 3: Small Farm Competitive Strategy and Margin

- Job to be done:
  help smaller operations compete without trying to mimic industrial scale.
- Existing core pages:
  `small-farm-guide`, `small-farm-competitive-strategy`, `small-farm-market-channels`, `direct-marketing-small-farms`, `small-farm-financial-planning`
- Role in business:
  core authority layer for the "SME farm" identity.
- Notes:
  this pillar likely needs the clearest commercial bridge to tools/products.

### Pillar 4: Resilience and Risk

- Job to be done:
  help farms reduce operational brittleness across climate, market, financial, and supply chain risk.
- Existing core pages:
  `resilience-guide`, `climate-risk-assessment-farms`, `financial-resilience-farm-operations`, `market-volatility-strategies`, `supply-chain-resilience-agriculture`
- Role in business:
  supports the "commercial resilience" half of the positioning.
- Notes:
  this pillar is strong editorially and may need clearer conversion paths.

## Current Interpretation

- The issue is not "you do not have pillar pages."
- The issue is closer to:
  some pillar pages already exist, but they are not yet being treated as the front-door commercial assets for the business.
- The next planning step should be:
  decide which 4 pillars are primary, then make nav, internal linking, CTAs, and homepage routing reinforce them.

## Closeout Status For Today

- Positioning direction aligned.
- Existing pillar-style assets checked in repo.
- Side-branch / backlog check completed.
- 4-pillar working set confirmed.
- Naming debate intentionally stopped at a good-enough working label.
- Publish/deploy of GlobalG.A.P. cluster deferred pending bug review.

## Decisions Needed

- Decide whether `VSME` remains a standalone pillar or is folded into the broader `Buyer Readiness and Baseline Infrastructure` pillar.
- Decide whether `Small Farm Competitive Strategy` or `Operational Efficiency / Margin Recovery` is the third primary pillar.
- Decide whether `Certification and Market Access` should be the official naming instead of `Ecolabels & Certification`.
- Review bugs in the unpublished GlobalG.A.P. cluster before any push/deploy decision.

## Suggested Next Non-Implementation Planning Step

- Build a simple matrix for the 4 chosen pillars:
  audience pain, primary page, supporting pages, CTA, paid offer, proof needed, and current gaps.

## Change Log

### 2026-04-13

- Added dated tracker for positioning and pillar-workstream decisions.
- Recorded final working positioning around buyer demands, risk reduction, and margin improvement for SME farms.
- Logged repo audit result:
  pillar-style pages already exist for CSRD/ESG, VSME, small farm strategy, ecolabels, resilience, and GlobalG.A.P.
- Logged git/backlog result:
  no obvious unpublished pillar-content backlog found on side branches.
- Confirmed the 4-pillar working set.
- Deferred publishing of the local GlobalG.A.P. cluster until bug review is completed.
