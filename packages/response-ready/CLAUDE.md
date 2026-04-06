# ResponseReady

## Project Overview
Domain-agnostic questionnaire response engine. Parses uploaded questionnaires (Excel, CSV, PDF, DOCX), matches questions to a pluggable data model, generates professional answer drafts, and exports results.

The engine itself knows nothing about any specific domain. Domain knowledge is provided via **DomainPack** configurations. The first (and reference) domain pack is ESG.

## Architecture

```
response-ready/
├── src/
│   ├── engine/           # Domain-agnostic processing pipeline
│   │   ├── questionParser.ts      Parse files → ParsedQuestion[]
│   │   ├── keywordMatcher.ts      Match questions using injectable rules
│   │   ├── questionClassifier.ts  Classify questions using injectable signals
│   │   ├── dataRetrieval.ts       Delegate to pack.retrieveData()
│   │   ├── answerGenerator.ts     Generate answers using injectable templates
│   │   ├── defensiveRewriter.ts   Rewrite using injectable scrub rules
│   │   ├── excelExporter.ts       Export using injectable sheet config
│   │   └── configLoader.ts        Load CSV/JSON configs
│   ├── types/
│   │   ├── engine.ts              Generic pipeline types
│   │   ├── domain-pack.ts         DomainPack<TData> interface
│   │   └── index.ts               Barrel export
│   ├── create.ts                  createResponseEngine(pack) factory
│   └── index.ts                   Main export
│
├── domain-packs/
│   └── esg/              # ESG domain pack (first implementation)
│       ├── keywordRules.ts        55 ESG matching rules
│       ├── dataModel.ts           CompanyData + retrieveData()
│       ├── answerTemplates.ts     12 rich ESG templates
│       ├── classifierSignals.ts   POLICY/MEASURE/KPI signals
│       ├── matrixGenerator.ts     QuestionType x Maturity templates
│       ├── informalPractices.ts   Informal practice handler
│       ├── scrubRules.ts          Defensive rewrite patterns
│       ├── industryContext.ts     8 industry contexts
│       ├── emissionFactors.ts     65+ country grid factors
│       ├── frameworkNotes.ts      CSRD/GRI/CDP/EcoVadis notes
│       ├── exportConfig.ts        Excel sheet definitions
│       ├── data/industry/         8 industry JSON files
│       └── index.ts               Assembled esgDomainPack export
│
└── package.json, tsconfig.json
```

## Key Principle
**No ESG-specific knowledge in src/engine/.** All domain knowledge lives in domain-packs/. The engine only knows about generic concepts: questions, rules, data points, templates, confidence levels.

## Relationship to Other Projects
- Extracted from esg-passport (which has the most complete engine)
- Consumed by esg-passport, ecosystems-united, and future products
- Future domain packs: security (SOC 2), RFP, ISO cert prep, B Corp

## Tech Stack
- TypeScript (strict mode)
- xlsx (Excel parsing/export)
- uuid (ID generation)
- pdfjs-dist (optional: PDF parsing)
- mammoth (optional: DOCX parsing)
- Vitest (testing)

## Git Conventions
- Conventional commits: feat:, fix:, refactor:, docs:, test:, chore:
- Commit after each meaningful milestone

## Session Protocol
- Read this file at session start
- During work: commit every meaningful milestone
- At session end: update "Current State" section, commit
