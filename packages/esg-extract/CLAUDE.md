# ESG Extract

## Project Overview
Standalone document extraction tool that reads utility bills, waste manifests, payroll summaries, and other operational documents via OCR/parsing, extracts structured ESG data points, and outputs them in a format compatible with ResponseReady and ESG Passport.

## Architecture

```
esg-extract/
├── src/
│   ├── parsers/              # Document type parsers
│   │   ├── pdf.ts            # PDF text + table extraction
│   │   ├── image.ts          # OCR for scanned documents
│   │   └── csv.ts            # Structured data import
│   ├── extractors/           # Domain-specific field extraction
│   │   ├── energy.ts         # Electricity bills, gas invoices
│   │   ├── water.ts          # Water utility bills
│   │   ├── waste.ts          # Waste manifests, disposal receipts
│   │   ├── workforce.ts      # Payroll summaries, HR reports
│   │   └── registry.ts       # Extractor registry + auto-detect
│   ├── matchers/             # Field matching logic
│   │   ├── patterns.ts       # Regex patterns for common providers
│   │   ├── units.ts          # Unit detection and conversion
│   │   └── confidence.ts     # Extraction confidence scoring
│   ├── output/               # Output formatters
│   │   ├── passport.ts       # ESG Passport localStorage format
│   │   ├── responseReady.ts  # ResponseReady ESGCompanyData format
│   │   └── csv.ts            # Generic CSV export
│   ├── types.ts              # Core types
│   └── index.ts              # Main export
├── providers/                # Provider-specific invoice templates
│   ├── energy/               # E.ON, Vattenfall, EDF, Engie, etc.
│   ├── water/                # Municipal water utilities
│   └── waste/                # Veolia, Suez, Remondis, etc.
├── package.json
├── tsconfig.json
└── CLAUDE.md
```

## Key Principle
**Extract, don't interpret.** Pull numbers and units from documents. Never infer, estimate, or fabricate values. If a field can't be read with confidence, flag it for manual review — don't guess.

## Relationship to Other Projects
- Outputs feed into `response-ready` (ESGCompanyData format)
- Outputs feed into `esg-passport` (localStorage dataRecords format)
- Standalone product — does NOT depend on either project at runtime
- Separate trust model: cloud processing for OCR, but extracted data is returned to user (not stored)

## Product Model
- Standalone paid tool (~€500)
- User uploads documents → gets structured data back
- Review step before any data is pushed to Passport
- No data retention on server — process and return

## Tech Stack
- TypeScript (strict mode)
- pdf-parse / pdfjs-dist (PDF text extraction)
- Tesseract.js (OCR for scanned documents)
- Sharp (image preprocessing for OCR quality)
- Vitest (testing)

## Supported Document Types (Phase 1)
1. Electricity bills (kWh, renewable %, cost)
2. Gas invoices (m³ or kWh, cost)
3. Water bills (m³, cost)
4. Waste manifests (kg by category, recycling %)
5. Payroll summaries (headcount, gender split)

## Git Conventions
- Conventional commits: feat:, fix:, refactor:, docs:, test:, chore:
- Commit after each meaningful milestone
