# Execution Plan: ResponseReady — Domain-Agnostic Questionnaire Response Engine

**Date:** February 2026
**Location:** `CY/response-ready/` (standalone package at root)
**Status:** Ready for execution

---

## 1. Architecture Overview

```
response-ready/                       (standalone TypeScript package)
├── src/
│   ├── engine/                       (domain-agnostic core)
│   │   ├── questionParser.ts         Parse any document → questions
│   │   ├── keywordMatcher.ts         Match questions using pluggable rules
│   │   ├── dataRetrieval.ts          Retrieve data using pluggable model
│   │   ├── answerGenerator.ts        Generate answers using pluggable templates
│   │   ├── questionClassifier.ts     Classify questions using pluggable signals
│   │   ├── defensiveRewriter.ts      Rewrite answers using pluggable scrub rules
│   │   ├── excelExporter.ts          Export using pluggable sheet config
│   │   └── configLoader.ts           Load CSV/JSON configs
│   │
│   ├── types/
│   │   ├── engine.ts                 Core engine types (ParsedQuestion, MatchResult, etc.)
│   │   ├── domain-pack.ts            DomainPack interface definition
│   │   └── index.ts                  Barrel export
│   │
│   ├── create.ts                     createResponseEngine(pack) factory
│   └── index.ts                      Main export
│
├── domain-packs/
│   └── esg/                          (ESG domain pack — first implementation)
│       ├── index.ts                  Export the pack
│       ├── keywordRules.ts           ~55 ESG keyword rules
│       ├── dataModel.ts              CompanyData interface + retrieval logic
│       ├── answerTemplates.ts        ~12 rich ESG answer templates
│       ├── classifierSignals.ts      POLICY/MEASURE/KPI signal rules
│       ├── scrubRules.ts             44 defensive rewrite patterns
│       ├── industryContext.ts         8 industry contexts (600+ lines)
│       ├── emissionFactors.ts         65+ country emission factors
│       ├── frameworkNotes.ts          CSRD/GRI/CDP/EcoVadis/SASB/TCFD notes
│       ├── exportConfig.ts           ESG-specific Excel sheet definitions
│       └── data/
│           └── industry/             8 industry JSON files
│
├── package.json
├── tsconfig.json
├── vitest.config.ts
├── CLAUDE.md
└── README.md
```

---

## 2. The DomainPack Interface

This is the contract between the engine and any domain implementation.

```typescript
// types/domain-pack.ts

interface DomainPack<TData = Record<string, any>> {
  /** Pack identity */
  name: string;                                    // e.g. 'esg', 'security', 'rfp'
  version: string;                                 // semver

  /** Keyword matching rules */
  keywordRules: KeywordRule[];                     // Domain-specific rules
  domainSuggestions: Record<string, string[]>;     // Data suggestions per domain

  /** Question classification (optional — not all domains classify) */
  questionTypes?: string[];                        // e.g. ['POLICY','MEASURE','KPI']
  classifierSignals?: SignalRule[];                 // Signal patterns per type
  defaultQuestionType?: string;                    // Fallback when ambiguous

  /** Answer generation */
  answerTemplates: AnswerTemplate[];               // Rich templates
  frameworkNotes?: Record<string, string>;          // Framework-specific suffixes

  /** Context providers (optional) */
  industryContextProvider?: IndustryContextProvider;// Industry-specific terms + measures
  maturityResolver?: MaturityResolver;             // Maturity band logic
  matrixGenerator?: MatrixGenerator;               // QuestionType × Maturity templates
  informalPracticeHandler?: InformalPracticeHandler;// Handle informal/undocumented practices

  /** Defensive rewriting */
  scrubRules?: ScrubRule[];                        // String replacement patterns

  /** Domain-specific calculators (optional) */
  calculators?: Record<string, Calculator<TData>>; // e.g. emissionFactors for ESG

  /** Data retrieval — the core domain-specific function */
  retrieveData: (matchResult: MatchResult, data: TData) => DataContext;

  /** Excel export sheet configuration */
  exportSheets?: ExportSheetConfig[];

  /** LLM prompt builder (optional) */
  buildLLMPrompt?: (question: ParsedQuestion, context: DataContext, config: GenerationConfig) => string;
}
```

---

## 3. What Moves Where

### Files That Stay in Engine (Domain-Agnostic)

| Current File (esg-passport) | ResponseReady Location | Changes Needed |
|---|---|---|
| `questionParser.ts` (527 lines) | `engine/questionParser.ts` | **None** — already fully generic. Parses Excel/CSV/PDF/DOCX without ESG knowledge. |
| `configLoader.ts` | `engine/configLoader.ts` | **None** — already generic CSV/JSON loader. |
| `keywordMatcher.ts` (201 lines) | `engine/keywordMatcher.ts` | **Extract KEYWORD_RULES and DOMAIN_SUGGESTIONS** into ESG pack. Engine keeps: `matchQuestion()`, `matchQuestions()`, `getMatchStatistics()`, scoring logic. Rules become injectable via `initializeMatcher(rules)` (already exists!) or via DomainPack. |
| `questionClassifier.ts` (247 lines) | `engine/questionClassifier.ts` | **Extract SIGNAL_RULES** into ESG pack. Engine keeps: `scoreQuestion()`, `classifyQuestion()`, classification logic. Signal rules become injectable. |
| `dataRetrieval.ts` (187 lines) | `engine/dataRetrieval.ts` | **Replace entirely with delegation.** Current `switch(domain)` block is 100% ESG-specific. Engine becomes a thin wrapper that calls `pack.retrieveData()`. |
| `answerGenerator.ts` (855 lines) | `engine/answerGenerator.ts` | **Extract ANSWER_TEMPLATES, PRACTICE_TOPIC_TO_DOMAINS, matrix logic** into ESG pack. Engine keeps: `generateAnswerDraft()` orchestration, `determineConfidence()`, `buildDataMap()`, `generateAnswerDrafts()`, `buildLLMPrompt()` shell. Templates + matrix become injectable via DomainPack. |
| `defensiveRewriter.ts` | `engine/defensiveRewriter.ts` | **Extract scrub rules** into ESG pack. Engine keeps: `rewriteAnswer()` function that applies pluggable rules. |
| `excelExporter.ts` | `engine/excelExporter.ts` | **Extract sheet definitions** into ESG pack. Engine keeps: generic multi-sheet workbook builder. Sheet structure becomes configurable. |

### Files That Move to ESG Domain Pack

| Current File | Pack Location | What It Becomes |
|---|---|---|
| `keywordMatcher.ts` → `KEYWORD_RULES` array (lines 15-69) | `esg/keywordRules.ts` | Exported array of 55 KeywordRule objects |
| `keywordMatcher.ts` → `DOMAIN_SUGGESTIONS` map (lines 89-112) | `esg/keywordRules.ts` | Exported alongside rules |
| `questionClassifier.ts` → `SIGNAL_RULES` array (lines 27-142) | `esg/classifierSignals.ts` | Exported array of SignalRule objects |
| `answerGenerator.ts` → `ANSWER_TEMPLATES` array (lines 66-352) | `esg/answerTemplates.ts` | Exported array of AnswerTemplate objects |
| `answerGenerator.ts` → `PRACTICE_TOPIC_TO_DOMAINS` + informal logic (lines 358-425) | `esg/informalPractices.ts` | Exported as InformalPracticeHandler |
| `answerGenerator.ts` → `generateMatrixAnswer()` + maturity logic (lines 430-591) | `esg/matrixGenerator.ts` | Exported as MatrixGenerator |
| `answerGenerator.ts` → `frameworkNote()` (lines 49-60) | `esg/frameworkNotes.ts` | Exported Record<string, string> |
| `dataRetrieval.ts` → entire `switch` block (lines 19-152) | `esg/dataModel.ts` | Exported as `retrieveData()` function implementing DomainPack interface |
| `emissionFactors.ts` (entire file) | `esg/emissionFactors.ts` | ESG-specific calculator |
| `industryContext.ts` (600+ lines) | `esg/industryContext.ts` | ESG-specific context provider |
| `defensiveRewriter.ts` → scrub rules | `esg/scrubRules.ts` | Exported array of ScrubRule objects |
| `excelExporter.ts` → sheet definitions | `esg/exportConfig.ts` | Exported sheet configuration |
| `types.ts` → `CompanyData` interface (lines 12-55) | `esg/dataModel.ts` | ESG-specific data model |
| `types.ts` → `DataDomain` type (lines 101-108) | `esg/keywordRules.ts` | ESG-specific domain enum |
| `types.ts` → `TopicTag` type (lines 110-121) | `esg/keywordRules.ts` | ESG-specific topic enum |
| `data/industry/*.json` (8 files) | `esg/data/industry/*.json` | ESG industry context data |

### Types That Stay Generic in Engine

| Type | Why It's Generic |
|---|---|
| `ParsedQuestion` | Any questionnaire has questions with id, text, category |
| `ParseResult` | Any parse operation returns questions + metadata |
| `ColumnMapping` | Any spreadsheet has columns to detect |
| `MatchResult` | Any matching produces domain, confidence, keywords (domain/topic are strings, not enum) |
| `RetrievedDataPoint` | Any data point has field, label, value, unit, confidence |
| `DataContext` | Any retrieval produces company, operational, calculated data |
| `AnswerDraft` | Any generation produces answer text + confidence + metadata |
| `GenerationConfig` | Any generation has verbosity, methodology, assumptions toggles |
| `ResponseSession` | Any session tracks progress through the pipeline |
| `MetricKey`, `MappingRule` | Any domain can define metric keys and mapping rules |

**Key change:** `DataDomain` and `TopicTag` become `string` in the engine (not union types). The ESG pack defines the specific values. The engine doesn't care what domains exist — it just passes them through.

---

## 4. The Factory Function

```typescript
// create.ts

import type { DomainPack } from './types/domain-pack';

export function createResponseEngine<TData>(pack: DomainPack<TData>) {
  // Initialize matcher with pack's keyword rules
  const matcher = createMatcher(pack.keywordRules, pack.domainSuggestions);

  // Initialize classifier with pack's signal rules (if provided)
  const classifier = pack.classifierSignals
    ? createClassifier(pack.classifierSignals, pack.defaultQuestionType)
    : null;

  // Initialize generator with pack's templates and context providers
  const generator = createGenerator({
    templates: pack.answerTemplates,
    frameworkNotes: pack.frameworkNotes,
    industryContext: pack.industryContextProvider,
    maturityResolver: pack.maturityResolver,
    matrixGenerator: pack.matrixGenerator,
    informalPracticeHandler: pack.informalPracticeHandler,
    scrubRules: pack.scrubRules,
    calculators: pack.calculators,
  });

  return {
    /** Parse a questionnaire file into structured questions */
    parseFile: (file: File) => parseQuestionFile(file),

    /** Parse raw text into questions */
    parseText: (text: string) => parseQuestionsFromText(text),

    /** Match questions to data domains */
    match: (questions: ParsedQuestion[]) => matcher.matchQuestions(questions),

    /** Classify questions by type (if pack supports it) */
    classify: classifier
      ? (questions: ParsedQuestion[]) => classifier.classifyQuestions(questions)
      : undefined,

    /** Retrieve relevant data for matched questions */
    retrieve: (matchResult: MatchResult, data: TData) => pack.retrieveData(matchResult, data),

    /** Generate answer drafts */
    generate: (questions, matches, contexts, config, profile?, classifications?) =>
      generator.generateAnswerDrafts(questions, matches, contexts, config, profile, classifications),

    /** Export to Excel */
    exportToExcel: (drafts: AnswerDraft[], metadata: ExportMetadata) =>
      exportToExcel(drafts, metadata, pack.exportSheets),

    /** Full pipeline: parse → match → classify → retrieve → generate */
    process: async (file: File, data: TData, config: GenerationConfig, profile?: any) => {
      const parseResult = await parseQuestionFile(file);
      if (!parseResult.success) return { success: false, errors: parseResult.errors };

      const matches = matcher.matchQuestions(parseResult.questions);
      const classifications = classifier?.classifyQuestions(parseResult.questions);
      const contexts = matches.map(m => pack.retrieveData(m, data));
      const drafts = generator.generateAnswerDrafts(
        parseResult.questions, matches, contexts, config, profile, classifications
      );

      return { success: true, parseResult, matches, classifications, drafts };
    },

    /** Pack metadata */
    pack: { name: pack.name, version: pack.version },
  };
}
```

---

## 5. Usage Examples

### ESG (Current Use Case)
```typescript
import { createResponseEngine } from 'response-ready';
import { esgDomainPack } from 'response-ready/domain-packs/esg';

const engine = createResponseEngine(esgDomainPack);
const result = await engine.process(uploadedFile, companyData, { verbosity: 'standard' }, companyProfile);
```

### Security Questionnaire (Future)
```typescript
import { createResponseEngine } from 'response-ready';
import { securityDomainPack } from 'response-ready/domain-packs/security';

const engine = createResponseEngine(securityDomainPack);
const result = await engine.process(socQuestionnaire, securityData, { verbosity: 'detailed' });
```

### Custom Domain
```typescript
import { createResponseEngine } from 'response-ready';
import type { DomainPack } from 'response-ready';

const myPack: DomainPack<MyDataModel> = {
  name: 'iso-9001',
  version: '1.0.0',
  keywordRules: [...],
  answerTemplates: [...],
  retrieveData: (match, data) => { ... },
};

const engine = createResponseEngine(myPack);
```

---

## 6. Execution Steps

### Phase 1: Scaffold the Package (30 min)

```
Step 1.1: Create response-ready/ directory at CY root
Step 1.2: Initialize package.json (TypeScript, Vitest, no React dependency)
Step 1.3: Set up tsconfig.json (strict, ES modules, declaration output)
Step 1.4: Create directory structure (src/engine, src/types, domain-packs/esg)
Step 1.5: Create CLAUDE.md with project context
```

### Phase 2: Define Core Types (1-2 hours)

```
Step 2.1: Create src/types/engine.ts
  - Copy generic types from esg-passport: ParsedQuestion, ParseResult, ColumnMapping,
    MatchResult, RetrievedDataPoint, DataContext, AnswerDraft, GenerationConfig,
    ResponseSession, MetricKey, MappingRule
  - Change DataDomain and TopicTag from union types to 'string'
  - Keep KeywordRule but make domain/topics use string

Step 2.2: Create src/types/domain-pack.ts
  - Define the DomainPack<TData> interface
  - Define supporting interfaces: AnswerTemplate, SignalRule, ScrubRule,
    IndustryContextProvider, MaturityResolver, MatrixGenerator,
    InformalPracticeHandler, Calculator, ExportSheetConfig

Step 2.3: Create src/types/index.ts barrel export
```

### Phase 3: Extract Engine Modules (2-3 hours)

```
Step 3.1: Copy questionParser.ts verbatim (already generic)
Step 3.2: Copy configLoader.ts verbatim (already generic)

Step 3.3: Refactor keywordMatcher.ts
  - Remove hardcoded KEYWORD_RULES and DOMAIN_SUGGESTIONS
  - Accept rules via constructor/init: createMatcher(rules, suggestions)
  - Keep: matchQuestion(), matchQuestions(), getMatchStatistics(), scoring logic
  - Export: createMatcher factory function

Step 3.4: Refactor questionClassifier.ts
  - Remove hardcoded SIGNAL_RULES
  - Accept signals via constructor: createClassifier(signals, defaultType)
  - Keep: scoreQuestion(), classifyQuestion(), getClassificationStats()
  - Export: createClassifier factory function

Step 3.5: Refactor dataRetrieval.ts
  - Remove the switch(domain) block entirely
  - Engine becomes thin wrapper: calls pack.retrieveData()
  - Keep: deduplicate(), addIfPresent() as utilities exported for packs to use

Step 3.6: Refactor answerGenerator.ts
  - Remove ANSWER_TEMPLATES, PRACTICE_TOPIC_TO_DOMAINS, matrix logic
  - Accept templates + context providers via config object
  - Keep: generateAnswerDraft() orchestration, determineConfidence(),
    buildDataMap(), generateAnswerDrafts()
  - Templates, matrix, practices become injected callbacks

Step 3.7: Refactor defensiveRewriter.ts
  - Remove hardcoded scrub rules
  - Accept rules via parameter: rewriteAnswer(text, rules)
  - Keep: rewrite logic, batch processing

Step 3.8: Refactor excelExporter.ts
  - Remove ESG-specific sheet definitions
  - Accept sheet config via parameter: exportToExcel(drafts, metadata, sheetConfig)
  - Keep: workbook builder, styling, column sizing
```

### Phase 4: Build ESG Domain Pack (2-3 hours)

```
Step 4.1: Create esg/keywordRules.ts
  - Move KEYWORD_RULES (55 rules) from keywordMatcher.ts
  - Move DOMAIN_SUGGESTIONS from keywordMatcher.ts
  - Export DataDomain and TopicTag type unions (for ESG-specific type safety)

Step 4.2: Create esg/dataModel.ts
  - Move CompanyData interface from types.ts
  - Move the switch(domain) retrieval logic from dataRetrieval.ts
  - Import emissionFactors for calculated fields
  - Export as retrieveData() implementing DomainPack.retrieveData

Step 4.3: Create esg/answerTemplates.ts
  - Move ANSWER_TEMPLATES (12 templates) from answerGenerator.ts
  - Move frameworkNote() helper

Step 4.4: Create esg/classifierSignals.ts
  - Move SIGNAL_RULES from questionClassifier.ts
  - Export question types: ['POLICY', 'MEASURE', 'KPI']

Step 4.5: Create esg/matrixGenerator.ts
  - Move generateMatrixAnswer() from answerGenerator.ts
  - Move resolveMaturityBand()
  - Export as MatrixGenerator implementation

Step 4.6: Create esg/informalPractices.ts
  - Move PRACTICE_TOPIC_TO_DOMAINS from answerGenerator.ts
  - Move findRelevantPractices() and generateInformalManagementAnswer()
  - Export as InformalPracticeHandler implementation

Step 4.7: Create esg/scrubRules.ts
  - Move scrub patterns from defensiveRewriter.ts

Step 4.8: Move esg/emissionFactors.ts (verbatim copy)
Step 4.9: Move esg/industryContext.ts (verbatim copy)
Step 4.10: Move esg/data/industry/*.json (8 files)
Step 4.11: Create esg/exportConfig.ts (sheet definitions from excelExporter.ts)

Step 4.12: Create esg/index.ts
  - Assemble and export the complete esgDomainPack object implementing DomainPack<CompanyData>
```

### Phase 5: Create Factory + Main Export (1 hour)

```
Step 5.1: Create src/create.ts — the createResponseEngine() factory
Step 5.2: Create src/index.ts — barrel export of everything
Step 5.3: Verify build passes: npm run build
```

### Phase 6: Tests (1-2 hours)

```
Step 6.1: Copy and adapt existing tests from esg-passport/src/lib/respond/__tests__/
Step 6.2: Test the factory with ESG pack
Step 6.3: Test that engine works with a minimal custom pack (proves domain-agnosticism)
Step 6.4: Run full test suite: npm test
```

### Phase 7: Refactor ESG Passport to Consume ResponseReady (2-3 hours)

```
Step 7.1: Add response-ready as a local dependency in esg-passport/package.json
  - "response-ready": "file:../response-ready"

Step 7.2: Replace esg-passport/src/lib/respond/ imports
  - import { createResponseEngine } from 'response-ready'
  - import { esgDomainPack } from 'response-ready/domain-packs/esg'
  - Remove duplicated engine files from esg-passport

Step 7.3: Update dataBridge.js to work with new engine interface
Step 7.4: Update Respond.jsx page to use engine.process() or individual steps
Step 7.5: Verify esg-passport build passes
Step 7.6: Verify all existing functionality works identically
```

### Phase 8: Archive + Clean Up (30 min)

```
Step 8.1: Move CY/esg-response-generator/ to CY/Old/esg-response-generator-standalone/
Step 8.2: Move CY/ecosystems-united/tools/esg-response-generator/ to CY/Old/eu-tools-esg-rg/
Step 8.3: Rename CY/Old/esg-response-generator/ to CY/Old/esg-response-generator-v1/
Step 8.4: Update ecosystems-united to reference response-ready (or note for future update)
Step 8.5: Update _shared/strategy-doc-feb-2026.md decision log
```

---

## 7. Package Configuration

### package.json
```json
{
  "name": "response-ready",
  "version": "0.1.0",
  "type": "module",
  "description": "Domain-agnostic questionnaire response engine",
  "main": "dist/index.js",
  "types": "dist/index.d.ts",
  "exports": {
    ".": "./dist/index.js",
    "./domain-packs/esg": "./dist/domain-packs/esg/index.js"
  },
  "scripts": {
    "build": "tsc",
    "test": "vitest run",
    "dev": "tsc --watch"
  },
  "dependencies": {
    "xlsx": "^0.18.5",
    "uuid": "^13.0.0"
  },
  "optionalDependencies": {
    "pdfjs-dist": "^5.4.624",
    "mammoth": "^1.11.0"
  },
  "devDependencies": {
    "typescript": "~5.9.3",
    "vitest": "^4.0.18"
  }
}
```

Note: `pdfjs-dist` and `mammoth` are optional — the parser gracefully handles their absence (returns unsupported format error). Excel/CSV parsing always works.

### tsconfig.json
```json
{
  "compilerOptions": {
    "target": "ES2022",
    "module": "ESNext",
    "moduleResolution": "bundler",
    "declaration": true,
    "declarationMap": true,
    "sourceMap": true,
    "outDir": "dist",
    "rootDir": ".",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "resolveJsonModule": true
  },
  "include": ["src/**/*", "domain-packs/**/*"]
}
```

---

## 8. Future Domain Packs

Once ResponseReady is extracted, new domains are just configuration:

| Domain Pack | KeywordRules | DataModel | Templates | Effort |
|---|---|---|---|---|
| **ESG** (built) | 55 rules | CompanyData (28 fields) | 12 templates | Done |
| **Security** (SOC 2, ISO 27001) | ~40 rules | SecurityPosture (controls, policies, incidents) | ~15 templates | 1-2 weeks |
| **RFP** | ~30 rules | CompanyCapabilities (services, experience, pricing) | ~10 templates | 1-2 weeks |
| **ISO Cert Prep** | ~35 rules | ManagementSystem (processes, docs, audits) | ~12 templates | 1-2 weeks |
| **B Corp** | ~25 rules | ImpactAssessment (governance, workers, community, environment) | ~10 templates | 1 week |

Each pack is a self-contained directory with no engine changes needed.

---

## 9. Success Criteria

- [ ] `response-ready/` builds cleanly with TypeScript (no errors)
- [ ] All existing esg-passport tests pass when using response-ready + ESG pack
- [ ] A minimal custom domain pack can be created and works (proves agnosticism)
- [ ] `createResponseEngine(esgDomainPack).process(file, data, config)` produces identical output to current esg-passport engine
- [ ] esg-passport consumes response-ready as local dependency
- [ ] esg-response-generator archived to Old/
- [ ] No ESG-specific knowledge in engine/ files (only in domain-packs/esg/)

---

## 10. Estimated Total Effort

| Phase | Effort |
|-------|--------|
| 1. Scaffold | 30 min |
| 2. Core types | 1-2 hours |
| 3. Extract engine | 2-3 hours |
| 4. ESG domain pack | 2-3 hours |
| 5. Factory + export | 1 hour |
| 6. Tests | 1-2 hours |
| 7. Refactor esg-passport | 2-3 hours |
| 8. Archive + clean up | 30 min |
| **Total** | **~10-15 hours** |
