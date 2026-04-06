// ============================================
// ResponseReady — Type Exports
// ============================================

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
} from './engine';

export type {
  DomainPack,
  IndustryContext,
  IndustryContextProvider,
  MaturityResolver,
  MatrixGenerator,
  InformalPracticeHandler,
  Calculator,
} from './domain-pack';
