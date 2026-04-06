// ============================================
// ESG Domain Pack — Assembly
// ============================================
// Assembles all ESG-specific modules into a single DomainPack.

import type { DomainPack } from '../../src/types/domain-pack';
import { ESG_KEYWORD_RULES, ESG_DOMAIN_SUGGESTIONS } from './keywordRules';
import { ESG_CLASSIFIER_SIGNALS, ESG_QUESTION_TYPES, ESG_DEFAULT_QUESTION_TYPE } from './classifierSignals';
import { ESG_ANSWER_TEMPLATES } from './answerTemplates';
import { ESG_SCRUB_RULES } from './scrubRules';
import { ESG_FRAMEWORK_NOTES, ESG_FIELD_TO_METRIC_KEY } from './frameworkNotes';
import { ESG_EXPORT_SHEETS } from './exportConfig';
import { esgIndustryContextProvider } from './industryContext';
import { esgMaturityResolver } from './matrixGenerator';
import { esgMatrixGenerator } from './matrixGenerator';
import { esgInformalPracticeHandler } from './informalPractices';
import { esgRetrieveData } from './dataModel';
import type { ESGCompanyData } from './dataModel';
import type { ESGCompanyProfile } from './types';

// ============================================
// Assembled Pack
// ============================================

export const esgDomainPack: DomainPack<ESGCompanyData, ESGCompanyProfile> = {
  name: 'esg',
  version: '1.0.0',

  // Keyword Matching
  keywordRules: ESG_KEYWORD_RULES,
  domainSuggestions: ESG_DOMAIN_SUGGESTIONS,

  // Question Classification
  questionTypes: [...ESG_QUESTION_TYPES],
  classifierSignals: ESG_CLASSIFIER_SIGNALS,
  defaultQuestionType: ESG_DEFAULT_QUESTION_TYPE,

  // Answer Generation
  answerTemplates: ESG_ANSWER_TEMPLATES,
  frameworkNotes: ESG_FRAMEWORK_NOTES,
  fieldToMetricKey: ESG_FIELD_TO_METRIC_KEY,

  // Context Providers
  industryContextProvider: esgIndustryContextProvider,
  maturityResolver: esgMaturityResolver,
  matrixGenerator: esgMatrixGenerator,
  informalPracticeHandler: esgInformalPracticeHandler,

  // Defensive Rewriting
  scrubRules: ESG_SCRUB_RULES,

  // Data Retrieval
  retrieveData: esgRetrieveData,

  // Excel Export
  exportSheets: ESG_EXPORT_SHEETS,
};

// Re-export types for consumer use
export type { ESGCompanyData } from './dataModel';
export type { ESGCompanyProfile, InformalPractice, PracticeTopic, MaturityLevel } from './types';
export { SUPPORTED_COUNTRIES } from './emissionFactors';
