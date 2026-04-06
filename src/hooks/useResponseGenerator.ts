// ============================================
// useResponseGenerator - Hook using response-ready engine
// ============================================

import { useState, useCallback, useMemo, useRef } from 'react';
import { useAppStore } from '@/stores/appStore';
import { useDataStore } from '@/stores/dataStore';
import { buildCompanyData, buildCompanyProfile, buildFarmData } from '@/lib/respond/dataBridge';
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

export type WorkflowStep = 'idle' | 'parsing' | 'pack_confirm' | 'matching' | 'generating' | 'review' | 'complete';

export interface PackOption {
  name: string;
  label: string;
  description: string;
}

// ============================================
// Engine cache — keyed by pack name
// ============================================

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const engineCache = new Map<string, ResponseEngine<any, any>>();

async function getEngine(packName: string) {
  if (engineCache.has(packName)) return engineCache.get(packName)!;

  const { createResponseEngine } = await import('response-ready');

  if (packName === 'globalg-a-p') {
    const { gapDomainPack } = await import('response-ready/domain-packs/globalg-a-p');
    const engine = createResponseEngine(gapDomainPack);
    engineCache.set(packName, engine);
    return engine;
  }

  // Default: ESG
  const { esgDomainPack } = await import('response-ready/domain-packs/esg');
  const engine = createResponseEngine(esgDomainPack);
  engineCache.set(packName, engine);
  return engine;
}

// ============================================
// Framework → pack mapping
// ============================================

const FRAMEWORK_TO_PACK: Record<string, string> = {
  // ESG frameworks → ESG pack
  CSRD: 'esg',
  GRI: 'esg',
  CDP: 'esg',
  EcoVadis: 'esg',
  SASB: 'esg',
  TCFD: 'esg',
  UN_SDG: 'esg',
  // Certification frameworks → dedicated packs
  'GLOBALG.A.P.': 'globalg-a-p',
  // Future packs (fall back to ESG for now)
  B_CORP: 'esg',
  ISO_14001: 'esg',
  ORGANIC_EU: 'esg',
  RAINFOREST_ALLIANCE: 'esg',
  FAIRTRADE: 'esg',
};

const PACK_OPTIONS: PackOption[] = [
  { name: 'esg', label: 'ESG / Sustainability', description: 'EcoVadis, CDP, CSRD, GRI, and general sustainability questionnaires' },
  { name: 'globalg-a-p', label: 'GlobalG.A.P. IFA', description: 'Farm assurance certification audits and checklists' },
];

function detectPackFromFramework(framework: string | undefined): { packName: string; confidence: 'high' | 'low' } {
  if (framework && FRAMEWORK_TO_PACK[framework]) {
    return { packName: FRAMEWORK_TO_PACK[framework], confidence: 'high' };
  }
  return { packName: 'esg', confidence: 'low' };
}

// ============================================
// Hook
// ============================================

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

  // Pack selection state
  const [detectedPackName, setDetectedPackName] = useState<string>('esg');
  const [packConfidence, setPackConfidence] = useState<'high' | 'low'>('high');
  const [selectedPackName, setSelectedPackName] = useState<string>('esg');

  const [config, setConfigState] = useState<GenerationConfig>(DEFAULT_CONFIG);

  // Ref to hold the file for deferred processing after pack confirmation
  const pendingFileRef = useRef<{ file: File; name: string; requestor?: string } | null>(null);

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
    // Agricultural data
    landUse: dataStore.landUse,
    fertiliserApplications: dataStore.fertiliserApplications,
    livestockRecords: dataStore.livestockRecords,
    cropOutputs: dataStore.cropOutputs,
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

  // Build data for the selected pack.
  // Returns `any` because different packs have different data shapes
  // and the engine generic is already `any`.
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const buildDataForPack = useCallback((packName: string): any => {
    if (packName === 'globalg-a-p') {
      return buildFarmData(storeData);
    }
    return buildCompanyData(storeData);
  }, [storeData]);

  // Run the match+generate pipeline with a specific pack
  const runPipeline = useCallback(async (packName: string, result: ParseResult) => {
    try {
      const engine = await getEngine(packName);

      // Step 2: Match
      setStep('matching');
      const matches = engine.matchQuestions(result.questions);
      setMatchResults(matches);
      setProgress(50);

      // Step 3: Generate
      setStep('generating');
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const data: any = buildDataForPack(packName);
      // Use `any` for profile to avoid strict type mismatch between pack-specific
      // profile types and our bridge output. Shapes are compatible at runtime.
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const profile = buildCompanyProfile(storeData) as any;

      const drafts: AnswerDraft[] = [];
      for (let i = 0; i < result.questions.length; i++) {
        const question = result.questions[i];
        const match = matches[i];
        const dataContext = engine.retrieveData(match, data);

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
  }, [storeData, config, buildDataForPack]);

  // Main workflow — parse, detect pack, then proceed or ask
  const startSession = useCallback(async (
    file: File,
    questionnaireName: string,
    requestor?: string
  ) => {
    setError(null);
    setIsProcessing(true);
    setProgress(0);

    try {
      // Use ESG engine for parsing (parser is pack-agnostic)
      const engine = await getEngine('esg');

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

      // Step 1.5: Auto-detect pack
      const { packName, confidence } = detectPackFromFramework(result.metadata.detectedFramework);
      setDetectedPackName(packName);
      setSelectedPackName(packName);
      setPackConfidence(confidence);

      // If high confidence, proceed directly. If low, pause for confirmation.
      if (confidence === 'high') {
        await runPipeline(packName, result);
      } else {
        // Pause at pack_confirm step — user can confirm or change
        pendingFileRef.current = { file, name: questionnaireName, requestor };
        setStep('pack_confirm');
        setIsProcessing(false);
      }
    } catch (err) {
      const message = err instanceof Error ? err.message : 'An error occurred';
      setError(message);
      setStep('idle');
      setIsProcessing(false);
    }
  }, [runPipeline]);

  // User confirms or changes the pack selection
  const confirmPack = useCallback(async (packName: string) => {
    if (!parseResult) return;
    setSelectedPackName(packName);
    setIsProcessing(true);
    await runPipeline(packName, parseResult);
  }, [parseResult, runPipeline]);

  const regenerateAnswer = useCallback(async (questionId: string) => {
    const questionIndex = questions.findIndex(q => q.id === questionId);
    if (questionIndex === -1) return;

    const engine = await getEngine(selectedPackName);
    const question = questions[questionIndex];
    const match = matchResults[questionIndex];
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const data: any = buildDataForPack(selectedPackName);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const profile = buildCompanyProfile(storeData) as any;
    const dataContext = engine.retrieveData(match, data);

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
  }, [questions, matchResults, storeData, config, selectedPackName, buildDataForPack]);

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
    setDetectedPackName('esg');
    setPackConfidence('high');
    setSelectedPackName('esg');
    pendingFileRef.current = null;
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
    // Pack selection
    detectedPackName,
    packConfidence,
    selectedPackName,
    packOptions: PACK_OPTIONS,
    confirmPack,
  };
}
