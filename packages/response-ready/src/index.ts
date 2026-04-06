// ============================================
// ResponseReady — Main Export
// ============================================
// The primary entry point for the response-ready package.

// Factory
export { createResponseEngine } from './create';
export type { ResponseEngine } from './create';

// Types
export type {
  // Confidence & Source
  ConfidenceLevel,
  DataSource,

  // Question Parsing
  ParsedQuestion,
  ParseResult,
  ColumnMapping,

  // Keyword Matching
  KeywordRule,
  MatchResult,

  // Data Retrieval
  RetrievedDataPoint,
  DataContext,

  // Classification
  ClassificationResult,
  SignalRule,

  // Answer Generation
  AnswerDraft,
  AnswerTemplate,
  GenerationConfig,
  ResponseSession,

  // Configuration
  MetricKey,
  MappingRule,

  // Defensive Rewriting
  ScrubRule,

  // Excel Export
  ExportSheetConfig,
  ExportMetadata,
  SheetData,
} from './types';

// DomainPack interface (for pack authors)
export type {
  DomainPack,
  IndustryContext,
  IndustryContextProvider,
  MaturityResolver,
  MatrixGenerator,
  InformalPracticeHandler,
  Calculator,
} from './types/domain-pack';

// Engine utilities (for pack authors building custom retrieveData/templates)
export {
  addIfPresent,
  deduplicatePoints,
  emptyDataContext,
} from './engine/dataRetrieval';

export {
  buildDataMap,
  val,
  has,
  num,
  str,
  fmt,
} from './engine/answerGenerator';

export {
  parseCSV,
  parseCSVLine,
} from './engine/configLoader';

// Pack registry (for multi-pack consumers)
export {
  registerPack,
  getRegisteredPacks,
  getPackByName,
  detectPack,
  clearRegistry,
} from './engine/packRegistry';

export type {
  PackRegistryEntry,
  PackDetectionResult,
} from './engine/packRegistry';
