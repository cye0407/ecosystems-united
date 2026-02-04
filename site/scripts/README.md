# Stack Reference Fixes

This directory contains scripts and fixed article files to correct stack naming inconsistencies.

## The Problem

Several articles have incorrect stack references:
- **Stack 4** articles say "Sustainable Practices" instead of "Adaptive Resilience"
- **Stack 5** articles say "Story & Positioning" instead of "Regenerative Advantage"
- Links point to non-existent routes (`stack-4-practices`, `stack-5-story`)
- Two articles (`cover-crops-roi`, `soil-health-business-case`) are assigned to Stack 5 but should be Stack 2

## How to Fix

### Step 1: Run the automated script

```bash
cd site
node scripts/fix-stack-references.js
```

This will:
- Replace `stack-4-practices` → `stack-4-resilience`
- Replace `Stack 4: Sustainable Practices` → `Stack 4: Adaptive Resilience`
- Replace `stack-5-story` → `stack-5-regenerative`
- Replace `Stack 5: Story & Positioning` → `Stack 5: Regenerative Advantage`

### Step 2: Manually copy the reassigned articles

Two articles need to be moved from Stack 5 to Stack 2. The corrected versions are in this folder:

```bash
# Copy the fixed cover-crops-roi
cp scripts/fixed-articles/cover-crops-roi-page.tsx app/articles/cover-crops-roi/page.tsx

# Copy the fixed soil-health-business-case
cp scripts/fixed-articles/soil-health-business-case-page.tsx app/articles/soil-health-business-case/page.tsx
```

### Step 3: Review and commit

```bash
# Review the changes
git diff

# If everything looks good
git add .
git commit -m "Fix stack references and reassign efficiency articles to Stack 2"
```

## Correct Stack Names

| Stack | Title | Slug | Color |
|-------|-------|------|-------|
| 1 | Core Metrics | stack-1-metrics | #3D2E7C |
| 2 | Operational Efficiency | stack-2-efficiency | #5B4A9E |
| 3 | Circular Value Creation | stack-3-circularity | #7B6BB8 |
| 4 | Adaptive Resilience | stack-4-resilience | #3B7D6E (or #9A8CD0) |
| 5 | Regenerative Advantage | stack-5-regenerative | #2D5A47 (or #B8ADE3) |

## Files Affected

### Automated fixes (Stack 4 name changes):
- `intercropping-vs-polyculture/page.tsx`
- `introduction-to-intercropping/page.tsx`
- `intercropping-practices/page.tsx`
- `advantages-disadvantages-intercropping/page.tsx`
- `measuring-intercropping-effectiveness/page.tsx`
- `intercropping-organic-systems/page.tsx`
- `companion-planting-introduction/page.tsx`

### Automated fixes (Stack 5 name changes):
- `regenerative-agriculture-economics/page.tsx`
- `regenerative-practices-2025/page.tsx`

### Manual reassignment (Stack 5 → Stack 2):
- `cover-crops-roi/page.tsx` - About efficiency/cost savings
- `soil-health-business-case/page.tsx` - About cost reduction

## Note on Stack 5 Content

Stack 5 "Regenerative Advantage" should focus on:
- Systems that improve as they operate
- Compound improvement over time
- Self-reinforcing cycles
- Strategic agility

It should NOT focus primarily on:
- Market positioning (that's an outcome, not the stack itself)
- Certification/documentation (that supports Stack 1 and enables Stack 5)

Market positioning is what you GET from regenerative advantage, not what it IS.
