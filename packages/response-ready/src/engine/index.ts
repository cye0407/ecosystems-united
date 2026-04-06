// ============================================
// ResponseReady — Engine Barrel Export
// ============================================

// Question Parser
export { parseQuestionFile, reprocessWithMapping, parseQuestionsFromText } from './questionParser';

// Config Loader
export { parseCSV, parseCSVLine, loadMappingRules, loadMetricKeys } from './configLoader';

// Keyword Matcher
export { createMatcher } from './keywordMatcher';
export type { KeywordMatcherInstance } from './keywordMatcher';

// Question Classifier
export { createClassifier } from './questionClassifier';
export type { ClassifierInstance } from './questionClassifier';

// Data Retrieval
export { retrieveData, addIfPresent, deduplicatePoints, emptyDataContext } from './dataRetrieval';

// Answer Generator
export { createAnswerGenerator, buildDataMap, val, has, num, str, fmt } from './answerGenerator';
export type { AnswerGeneratorDeps, AnswerGeneratorInstance } from './answerGenerator';

// Defensive Rewriter
export { createRewriter } from './defensiveRewriter';
export type { RewriterInstance } from './defensiveRewriter';

// Excel Exporter
export { exportToExcel, exportToBuffer } from './excelExporter';
export type { ExportOptions } from './excelExporter';
