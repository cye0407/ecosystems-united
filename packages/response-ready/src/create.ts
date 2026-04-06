// ============================================
// ResponseReady — Engine Factory
// ============================================
// createResponseEngine(pack) wires a DomainPack into the
// generic processing pipeline and returns a ready-to-use engine.

import type {
  ParseResult,
  ParsedQuestion,
  MatchResult,
  DataContext,
  AnswerDraft,
  GenerationConfig,
  ClassificationResult,
  MappingRule,
} from './types';

import type { DomainPack } from './types/domain-pack';

import { parseQuestionFile, reprocessWithMapping, parseQuestionsFromText } from './engine/questionParser';
import { createMatcher } from './engine/keywordMatcher';
import type { KeywordMatcherInstance } from './engine/keywordMatcher';
import { createClassifier } from './engine/questionClassifier';
import type { ClassifierInstance } from './engine/questionClassifier';
import { createAnswerGenerator } from './engine/answerGenerator';
import type { AnswerGeneratorInstance } from './engine/answerGenerator';
import { createRewriter } from './engine/defensiveRewriter';
import type { RewriterInstance } from './engine/defensiveRewriter';
import { exportToExcel, exportToBuffer } from './engine/excelExporter';
import type { ExportOptions } from './engine/excelExporter';
import { loadMappingRules, loadMetricKeys } from './engine/configLoader';

// ============================================
// Engine Interface
// ============================================

export interface ResponseEngine<TData = Record<string, unknown>, TProfile = Record<string, unknown>> {
  /** Pack identity */
  packName: string;
  packVersion: string;

  // --- Parsing ---
  parseFile: (file: File) => Promise<ParseResult>;
  parseWithMapping: (file: File, mapping: { questionText: string; category?: string; subcategory?: string; referenceId?: string; required?: string }) => Promise<ParseResult>;
  parseText: (text: string) => ParsedQuestion[];

  // --- Matching ---
  matcher: KeywordMatcherInstance;
  matchQuestion: (question: ParsedQuestion) => MatchResult;
  matchQuestions: (questions: ParsedQuestion[]) => MatchResult[];

  // --- Classification (if pack provides signals) ---
  classifier: ClassifierInstance | null;
  classifyQuestion: ((questionId: string, text: string, category?: string) => ClassificationResult) | null;
  classifyQuestions: ((questions: Array<{ id: string; text: string; category?: string }>) => ClassificationResult[]) | null;

  // --- Data Retrieval ---
  retrieveData: (matchResult: MatchResult, data: TData) => DataContext;

  // --- Answer Generation ---
  generator: AnswerGeneratorInstance<TProfile>;
  generateDraft: (
    question: ParsedQuestion,
    matchResult: MatchResult,
    dataContext: DataContext,
    config: GenerationConfig,
    profile?: TProfile,
    classification?: ClassificationResult
  ) => AnswerDraft;
  generateDrafts: (
    questions: ParsedQuestion[],
    matchResults: MatchResult[],
    dataContexts: DataContext[],
    config: GenerationConfig,
    profile?: TProfile,
    classifications?: ClassificationResult[]
  ) => AnswerDraft[];

  // --- Defensive Rewriting ---
  rewriter: RewriterInstance;

  // --- Export ---
  exportToExcel: (opts: Omit<ExportOptions, 'customSheets'>) => Promise<void>;
  exportToBuffer: (opts: Omit<ExportOptions, 'customSheets' | 'fileName'>) => Promise<Uint8Array>;

  // --- Config Loading ---
  loadCsvRules: (url: string) => Promise<MappingRule[]>;

  // --- LLM Prompt (if pack provides) ---
  buildLLMPrompt: DomainPack<TData, TProfile>['buildLLMPrompt'];
}

// ============================================
// Factory Function
// ============================================

/**
 * Create a fully-wired response engine from a domain pack.
 *
 * @example
 * ```ts
 * import { createResponseEngine } from 'response-ready';
 * import { esgDomainPack } from 'response-ready/domain-packs/esg';
 *
 * const engine = createResponseEngine(esgDomainPack);
 * const result = await engine.parseFile(file);
 * const matches = engine.matchQuestions(result.questions);
 * ```
 */
export function createResponseEngine<TData = Record<string, unknown>, TProfile = Record<string, unknown>>(
  pack: DomainPack<TData, TProfile>
): ResponseEngine<TData, TProfile> {
  // Wire up matcher
  const matcher = createMatcher(pack.keywordRules, pack.domainSuggestions);

  // Wire up classifier (optional)
  const classifier = pack.classifierSignals && pack.questionTypes
    ? createClassifier(pack.classifierSignals, pack.questionTypes, pack.defaultQuestionType)
    : null;

  // Wire up answer generator
  const generator = createAnswerGenerator<TProfile>({
    templates: pack.answerTemplates,
    frameworkNotes: pack.frameworkNotes,
    fieldToMetricKey: pack.fieldToMetricKey,
    scrubRules: pack.scrubRules,
    maturityResolver: pack.maturityResolver,
    matrixGenerator: pack.matrixGenerator,
    informalPracticeHandler: pack.informalPracticeHandler,
    industryContextProvider: pack.industryContextProvider,
  });

  // Wire up rewriter
  const rewriter = createRewriter(pack.scrubRules || []);

  return {
    packName: pack.name,
    packVersion: pack.version,

    // Parsing
    parseFile: parseQuestionFile,
    parseWithMapping: reprocessWithMapping,
    parseText: parseQuestionsFromText,

    // Matching
    matcher,
    matchQuestion: matcher.matchQuestion,
    matchQuestions: matcher.matchQuestions,

    // Classification
    classifier,
    classifyQuestion: classifier ? classifier.classifyQuestion : null,
    classifyQuestions: classifier ? classifier.classifyQuestions : null,

    // Data Retrieval
    retrieveData: (matchResult, data) => pack.retrieveData(matchResult, data),

    // Answer Generation
    generator,
    generateDraft: generator.generateAnswerDraft,
    generateDrafts: generator.generateAnswerDrafts,

    // Rewriting
    rewriter,

    // Export
    exportToExcel: (opts) => exportToExcel({ ...opts, customSheets: pack.exportSheets }),
    exportToBuffer: (opts) => exportToBuffer({ ...opts, customSheets: pack.exportSheets }),

    // Config Loading
    loadCsvRules: async (url: string) => {
      const rules = await loadMappingRules(url);
      matcher.setCsvRules(rules);
      return rules;
    },

    // LLM Prompt
    buildLLMPrompt: pack.buildLLMPrompt,
  };
}
