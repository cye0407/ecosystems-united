// ============================================
// useResponseGenerator - Hook using response-ready engine
// ============================================

import { useState, useCallback, useMemo, useRef } from 'react';
import { useAppStore } from '@/stores/appStore';
import { useDataStore } from '@/stores/dataStore';
import { buildCompanyData, buildCompanyProfile } from '@/lib/respond/dataBridge';
import type { StoreData } from '@/lib/respond/dataRetrieval';
import { v4 as uuid } from 'uuid';
import type {
  ParseResult,
  ParsedQuestion,
  MatchResult,
  AnswerDraft,
  GenerationConfig,
  ResponseEngine,
} from 'response-ready';

export type WorkflowStep = 'idle' | 'parsing' | 'matching' | 'generating' | 'review' | 'complete';

// Use `any` for the engine generic to avoid strict type mismatch
// between ESGCompanyData (from domain pack) and our bridge output.
// The data shapes are compatible at runtime.
// eslint-disable-next-line @typescript-eslint/no-explicit-any
let _engine: ResponseEngine<any, any> | null = null;
async function getEngine() {
  if (!_engine) {
    const { createResponseEngine } = await import('response-ready');
    const { esgDomainPack } = await import('response-ready/domain-packs/esg');
    _engine = createResponseEngine(esgDomainPack);
  }
  return _engine;
}

interface ConfidenceBreakdown {
  high: number;
  medium: number;
  low: number;
  none: number;
}

interface MatchStats {
  byDomain: Record<string, number>;
  totalMatched: number;
  totalUnmatched: number;
}

const DEFAULT_CONFIG: GenerationConfig = {
  useLLM: false,
  includeMethodology: true,
  includeAssumptions: true,
  includeLimitations: true,
  verbosity: 'standard',
  aggregateSites: true,
};

export function useResponseGenerator() {
  const appStore = useAppStore();
  const dataStore = useDataStore();

  const [step, setStep] = useState<WorkflowStep>('idle');
  const [isProcessing, setIsProcessing] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [progress, setProgress] = useState(0);

  const [parseResult, setParseResult] = useState<ParseResult | null>(null);
  const [questions, setQuestions] = useState<ParsedQuestion[]>([]);
  const [matchResults, setMatchResults] = useState<MatchResult[]>([]);
  const [answerDrafts, setAnswerDrafts] = useState<AnswerDraft[]>([]);

  const [config, setConfigState] = useState<GenerationConfig>(DEFAULT_CONFIG);

  // Build store data snapshot
  const storeData = useMemo((): StoreData => ({
    company: appStore.company,
    sites: appStore.sites,
    goals: appStore.goals,
    swot: appStore.swot,
    regulatoryContext: appStore.regulatoryContext,
    materials: dataStore.materials,
    materialInputs: dataStore.materialInputs,
    packaging: dataStore.packaging,
    packagingInputs: dataStore.packagingInputs,
    energyElectricity: dataStore.energyElectricity,
    energyFuels: dataStore.energyFuels,
    energyWater: dataStore.energyWater,
    assets: dataStore.assets,
    transportLogs: dataStore.transportLogs,
    workforce: dataStore.workforce,
    healthSafety: dataStore.healthSafety,
    training: dataStore.training,
    waste: dataStore.waste,
    productOutputs: dataStore.productOutputs,
    directEmissions: dataStore.directEmissions,
    effluents: dataStore.effluents,
    externalContext: dataStore.externalContext,
    financialContext: dataStore.financialContext,
    buyerRequirements: dataStore.buyerRequirements,
  }), [appStore, dataStore]);

  // Stats
  const matchStats = useMemo((): MatchStats | null => {
    if (matchResults.length === 0) return null;
    const byDomain: Record<string, number> = {};
    let totalMatched = 0;
    let totalUnmatched = 0;
    for (const m of matchResults) {
      if (m.primaryDomain) {
        byDomain[m.primaryDomain] = (byDomain[m.primaryDomain] || 0) + 1;
        totalMatched++;
      } else {
        totalUnmatched++;
      }
    }
    return { byDomain, totalMatched, totalUnmatched };
  }, [matchResults]);

  const confidenceBreakdown = useMemo((): ConfidenceBreakdown => {
    const breakdown = { high: 0, medium: 0, low: 0, none: 0 };
    answerDrafts.forEach(draft => {
      const conf = draft.answerConfidence as keyof ConfidenceBreakdown;
      if (conf in breakdown) breakdown[conf]++;
    });
    return breakdown;
  }, [answerDrafts]);

  // Main workflow
  const startSession = useCallback(async (
    file: File,
    questionnaireName: string,
    requestor?: string
  ) => {
    setError(null);
    setIsProcessing(true);
    setProgress(0);

    try {
      const engine = await getEngine();

      // Step 1: Parse
      setStep('parsing');
      setProgress(10);
      const result = await engine.parseFile(file);
      setParseResult(result);

      if (!result.success || result.questions.length === 0) {
        throw new Error(result.errors?.[0] || 'Failed to parse questionnaire');
      }

      setQuestions(result.questions);
      setProgress(30);

      // Step 2: Match
      setStep('matching');
      const matches = engine.matchQuestions(result.questions);
      setMatchResults(matches);
      setProgress(50);

      // Step 3: Generate
      setStep('generating');
      const companyData = buildCompanyData(storeData);
      const profile = buildCompanyProfile(storeData);

      const drafts: AnswerDraft[] = [];
      for (let i = 0; i < result.questions.length; i++) {
        const question = result.questions[i];
        const match = matches[i];
        const dataContext = engine.retrieveData(match, companyData);

        // Classify if available
        const classification = engine.classifyQuestion
          ? engine.classifyQuestion(question.id, question.text, question.category)
          : undefined;

        const draft = engine.generateDraft(
          question,
          match,
          dataContext,
          config,
          profile || undefined,
          classification
        );

        // Apply defensive rewriting
        draft.answer = engine.rewriter.rewriteAnswer(draft.answer);

        drafts.push(draft);
        setProgress(50 + Math.round((i / result.questions.length) * 40));
      }

      setAnswerDrafts(drafts);
      setProgress(100);
      setStep('review');
    } catch (err) {
      const message = err instanceof Error ? err.message : 'An error occurred';
      setError(message);
      setStep('idle');
    } finally {
      setIsProcessing(false);
    }
  }, [storeData, config]);

  const regenerateAnswer = useCallback(async (questionId: string) => {
    const questionIndex = questions.findIndex(q => q.id === questionId);
    if (questionIndex === -1) return;

    const engine = await getEngine();
    const question = questions[questionIndex];
    const match = matchResults[questionIndex];
    const companyData = buildCompanyData(storeData);
    const profile = buildCompanyProfile(storeData);
    const dataContext = engine.retrieveData(match, companyData);

    const classification = engine.classifyQuestion
      ? engine.classifyQuestion(question.id, question.text, question.category)
      : undefined;

    const newDraft = engine.generateDraft(
      question,
      match,
      dataContext,
      config,
      profile || undefined,
      classification
    );

    newDraft.answer = engine.rewriter.rewriteAnswer(newDraft.answer);

    setAnswerDrafts(prev => prev.map((draft, i) =>
      i === questionIndex ? newDraft : draft
    ));
  }, [questions, matchResults, storeData, config]);

  const updateAnswer = useCallback((questionId: string, updates: Partial<AnswerDraft>) => {
    setAnswerDrafts(prev => prev.map(draft =>
      draft.questionId === questionId
        ? { ...draft, ...updates }
        : draft
    ));
  }, []);

  const completeSession = useCallback(() => {
    setStep('complete');
  }, []);

  const resetSession = useCallback(() => {
    setStep('idle');
    setIsProcessing(false);
    setError(null);
    setProgress(0);
    setParseResult(null);
    setQuestions([]);
    setMatchResults([]);
    setAnswerDrafts([]);
  }, []);

  const setConfig = useCallback((updates: Partial<GenerationConfig>) => {
    setConfigState(prev => ({ ...prev, ...updates }));
  }, []);

  return {
    step,
    isProcessing,
    error,
    progress,
    parseResult,
    questions,
    matchResults,
    answerDrafts,
    matchStats,
    confidenceBreakdown,
    startSession,
    regenerateAnswer,
    updateAnswer,
    completeSession,
    resetSession,
    config,
    setConfig,
  };
}
