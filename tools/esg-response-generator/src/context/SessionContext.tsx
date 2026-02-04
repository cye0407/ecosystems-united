import { createContext, useContext, useState, useCallback, useEffect, type ReactNode } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { v4 as uuid } from 'uuid';
import {
  parseQuestionFile, matchQuestions, retrieveDataForCompany,
  generateAnswerDraft, getMatchStatistics,
  loadMappingRules, loadMetricKeys, initializeMatcher, exportToExcel,
  generateAnswerWithLLM, buildLLMRequest, reprocessWithMapping,
  classifyQuestions,
  type ParseResult, type ParsedQuestion, type MatchResult,
  type AnswerDraft, type GenerationConfig, type CompanyData, type ColumnMapping,
  type ClassificationResult
} from '@/lib/respond';
import { isSupabaseConfigured } from '@/lib/supabase';
import { createCheckoutSession, verifyPayment } from '@/lib/stripe';
import type { CompanyProfile } from '@/types/context';
import {
  type AppStep, type DataCategory,
  DEFAULT_CONFIG, EMPTY_COMPANY_DATA, STORAGE_KEYS,
  DATA_CATEGORIES, ROUTES, routeToStep,
  type SessionSnapshot,
} from '@/constants/app';
import type { UnknownFields } from '@/components/shared/UnknownToggle';

// ============================================
// Persistence helpers
// ============================================

function loadCompanyProfile(): CompanyData {
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.companyProfile);
    if (raw) return { ...EMPTY_COMPANY_DATA, ...JSON.parse(raw) };
  } catch { /* ignore */ }
  return EMPTY_COMPANY_DATA;
}

function saveCompanyProfile(data: CompanyData) {
  try { localStorage.setItem(STORAGE_KEYS.companyProfile, JSON.stringify(data)); } catch { /* ignore */ }
}

function saveSession(snapshot: SessionSnapshot) {
  try { localStorage.setItem(STORAGE_KEYS.session, JSON.stringify(snapshot)); } catch { /* ignore */ }
}

function loadSession(): SessionSnapshot | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.session);
    if (raw) return JSON.parse(raw);
  } catch { /* ignore */ }
  return null;
}

// ============================================
// Context type
// ============================================

interface SessionContextType {
  // Step / navigation
  step: AppStep;
  setStep: (step: AppStep) => void;

  // Core state
  sessionId: string;
  companyData: CompanyData;
  setCompanyData: React.Dispatch<React.SetStateAction<CompanyData>>;
  questionnaireName: string;
  error: string | null;
  setError: (error: string | null) => void;
  progress: number;
  parseResult: ParseResult | null;
  answerDrafts: AnswerDraft[];
  matchResults: MatchResult[];
  questions: ParsedQuestion[];
  classifications: ClassificationResult[];

  // UI state
  expandedAnswers: Set<string>;
  hasPaid: boolean;
  useLLM: boolean;
  setUseLLM: (v: boolean) => void;
  llmStatus: string | null;
  uploadedFile: File | null;
  showColumnMapping: boolean;
  manualMapping: ColumnMapping;
  setManualMapping: React.Dispatch<React.SetStateAction<ColumnMapping>>;
  showOwnEmissions: boolean;
  setShowOwnEmissions: (v: boolean) => void;
  unknownFields: UnknownFields;
  setUnknownFields: React.Dispatch<React.SetStateAction<UnknownFields>>;
  contextProfile: CompanyProfile | null;
  setContextProfile: React.Dispatch<React.SetStateAction<CompanyProfile | null>>;
  selectedCategories: Set<DataCategory>;
  companyDataPage: number;
  setCompanyDataPage: React.Dispatch<React.SetStateAction<number>>;
  openFaqIndex: number | null;
  setOpenFaqIndex: React.Dispatch<React.SetStateAction<number | null>>;
  reportView: 'summary' | 'full';
  setReportView: React.Dispatch<React.SetStateAction<'summary' | 'full'>>;
  showSummaryDrawer: boolean;
  setShowSummaryDrawer: React.Dispatch<React.SetStateAction<boolean>>;
  returnToResults: boolean;
  paymentLoading: boolean;
  showProfileSaved: boolean;

  // Callbacks
  handleFileUpload: (file: File) => Promise<void>;
  handleManualMapping: () => Promise<void>;
  handleRegenerate: () => Promise<void>;
  handlePayment: () => Promise<void>;
  handleExport: () => void;
  clearSessionAndReset: () => void;
  updateAnswer: (questionId: string, updates: Partial<AnswerDraft>) => void;
  regenerateAnswer: (questionId: string) => void;
  regenerateWithLLM: (questionId: string) => Promise<void>;
  toggleExpand: (id: string) => void;
  goToImproveData: () => void;
  returnFromImproveData: () => void;
  updateCompanyField: (field: keyof CompanyData, value: string | number) => void;
  parseNumeric: (raw: string, opts?: { integer?: boolean; max?: number }) => number;
  toggleCategory: (key: DataCategory) => void;
  saveProfile: () => void;
  loadSavedProfile: () => void;

  // Computed
  confidenceBreakdown: { high: number; medium: number; low: number; none: number };
  matchStats: ReturnType<typeof getMatchStatistics> | null;
  hasResults: boolean;
  categoryPages: DataCategory[];
  totalPages: number;
}

const SessionContext = createContext<SessionContextType | null>(null);

export function useSession(): SessionContextType {
  const ctx = useContext(SessionContext);
  if (!ctx) throw new Error('useSession must be used within a SessionProvider');
  return ctx;
}

// ============================================
// Provider
// ============================================

export function SessionProvider({ children }: { children: ReactNode }) {
  const navigate = useNavigate();
  const location = useLocation();

  // Core state
  const [step, setStepRaw] = useState<AppStep>('landing');
  const [sessionId] = useState(() => uuid());
  const [companyData, setCompanyData] = useState<CompanyData>(loadCompanyProfile);
  const [questionnaireName, setQuestionnaireName] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [progress, setProgress] = useState(0);
  const [parseResult, setParseResult] = useState<ParseResult | null>(null);
  const [answerDrafts, setAnswerDrafts] = useState<AnswerDraft[]>([]);
  const [matchResults, setMatchResults] = useState<MatchResult[]>([]);
  const [questions, setQuestions] = useState<ParsedQuestion[]>([]);
  const [expandedAnswers, setExpandedAnswers] = useState<Set<string>>(new Set());
  const [paymentLoading, setPaymentLoading] = useState(false);
  const [hasPaid, setHasPaid] = useState(false);
  const [showProfileSaved, setShowProfileSaved] = useState(false);
  const [useLLM, setUseLLM] = useState(true);
  const [llmStatus, setLlmStatus] = useState<string | null>(null);
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [showColumnMapping, setShowColumnMapping] = useState(false);
  const [manualMapping, setManualMapping] = useState<ColumnMapping>({ questionText: '' });
  const [showOwnEmissions, setShowOwnEmissions] = useState(false);
  const [unknownFields, setUnknownFields] = useState<UnknownFields>(new Set());
  const [contextProfile, setContextProfile] = useState<CompanyProfile | null>(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEYS.contextProfile);
      if (raw) return JSON.parse(raw);
    } catch { /* ignore */ }
    return null;
  });
  const [classifications, setClassifications] = useState<ClassificationResult[]>([]);
  const [selectedCategories, setSelectedCategories] = useState<Set<DataCategory>>(new Set(['energy']));
  const [companyDataPage, setCompanyDataPage] = useState(0);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  const [reportView, setReportView] = useState<'summary' | 'full'>('summary');
  const [showSummaryDrawer, setShowSummaryDrawer] = useState(false);
  const [returnToResults, setReturnToResults] = useState(false);

  // Navigation wrapper: update step and navigate
  const setStep = useCallback((newStep: AppStep) => {
    setStepRaw(newStep);
    const route = (() => {
      switch (newStep) {
        case 'landing': return ROUTES.landing;
        case 'upload': return ROUTES.upload;
        case 'processing': return ROUTES.processing;
        case 'results': return ROUTES.results;
        case 'company-profile': return ROUTES.companyProfile;
        case 'company-data': return ROUTES.companyData;
        case 'payment': return ROUTES.results;
        case 'complete': return ROUTES.results;
        default: return ROUTES.landing;
      }
    })();
    navigate(route);
  }, [navigate]);

  // Sync step from route on location change
  useEffect(() => {
    const stepFromRoute = routeToStep(location.pathname);
    setStepRaw(stepFromRoute);
  }, [location.pathname]);

  // Computed
  const categoryPages: DataCategory[] = DATA_CATEGORIES.filter(c => selectedCategories.has(c.key)).map(c => c.key);
  const totalPages = categoryPages.length + 1;

  const toggleCategory = useCallback((key: DataCategory) => {
    setSelectedCategories(prev => {
      const next = new Set(prev);
      if (next.has(key)) next.delete(key); else next.add(key);
      return next;
    });
  }, []);

  // Restore session on mount
  useEffect(() => {
    const saved = loadSession();
    if (saved && saved.answerDrafts.length > 0) {
      const restoredStep = saved.step === 'payment' ? 'results' : saved.step;
      setStepRaw(restoredStep);
      setCompanyData(saved.companyData);
      setQuestionnaireName(saved.questionnaireName);
      setAnswerDrafts(saved.answerDrafts);
      setMatchResults(saved.matchResults);
      setQuestions(saved.questions);
      setParseResult(saved.parseResult);
      setHasPaid(saved.hasPaid);
      if (saved.reportView) setReportView(saved.reportView);
      // Navigate to the restored step's route
      const route = (() => {
        switch (restoredStep) {
          case 'results': return ROUTES.results;
          case 'upload': return ROUTES.upload;
          case 'company-profile': return ROUTES.companyProfile;
          case 'company-data': return ROUTES.companyData;
          default: return ROUTES.landing;
        }
      })();
      if (location.pathname === '/') {
        navigate(route, { replace: true });
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Load config CSVs on mount
  useEffect(() => {
    loadMappingRules().then(rules => initializeMatcher(rules)).catch(() => {});
    loadMetricKeys().catch(() => {});
  }, []);

  // Save session whenever relevant state changes
  useEffect(() => {
    if (answerDrafts.length > 0) {
      saveSession({ step, companyData, questionnaireName, answerDrafts, matchResults, questions, parseResult, hasPaid, reportView });
    }
  }, [step, companyData, questionnaireName, answerDrafts, matchResults, questions, parseResult, hasPaid, reportView]);

  // Warn before leaving
  useEffect(() => {
    const handler = (e: BeforeUnloadEvent) => {
      if (step !== 'landing' && step !== 'complete') { e.preventDefault(); }
    };
    window.addEventListener('beforeunload', handler);
    return () => window.removeEventListener('beforeunload', handler);
  }, [step]);

  // Check for payment return
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const payment = params.get('payment');
    const sid = params.get('session');
    if (payment === 'success' && sid) {
      verifyPayment(sid).then(result => { if (result.paid) { setHasPaid(true); setStepRaw('results'); setReportView('full'); } });
      window.history.replaceState({}, '', window.location.pathname);
    }
  }, []);

  // Callbacks
  const updateCompanyField = useCallback((field: keyof CompanyData, value: string | number) => {
    setCompanyData(prev => ({ ...prev, [field]: value }));
  }, []);

  const parseNumeric = useCallback((raw: string, opts?: { integer?: boolean; max?: number }): number => {
    const n = opts?.integer ? parseInt(raw) : parseFloat(raw);
    if (isNaN(n)) return 0;
    if (n < 0) return 0;
    if (opts?.max !== undefined && n > opts.max) return opts.max;
    return n;
  }, []);

  const processQuestions = useCallback(async (result: ParseResult, file: File) => {
    setParseResult(result);
    if (!result.success || result.questions.length === 0) {
      if (result.metadata.availableColumns && result.metadata.availableColumns.length > 0) {
        setUploadedFile(file);
        setShowColumnMapping(true);
        setStepRaw('upload');
        navigate(ROUTES.upload);
        setError('We couldn\u2019t find the questions in your file. Can you help us identify the right column?');
        return;
      }
      throw new Error(result.errors[0] || 'Failed to parse questionnaire');
    }

    setQuestions(result.questions);
    setLlmStatus(`Extracted ${result.questions.length} questions \u2014 classifying...`);
    setProgress(20);

    const classResults = classifyQuestions(
      result.questions.map(q => ({ id: q.id, text: q.text, category: q.category }))
    );
    setClassifications(classResults);
    setLlmStatus('Matching questions to data domains...');
    setProgress(30);

    const matches = matchQuestions(result.questions);
    setMatchResults(matches);
    setLlmStatus('Generating draft answers...');
    setProgress(50);

    const config: GenerationConfig = { ...DEFAULT_CONFIG, useLLM };
    const drafts: AnswerDraft[] = [];
    for (let i = 0; i < result.questions.length; i++) {
      const question = result.questions[i];
      const match = matches[i];
      const dataContext = retrieveDataForCompany(match, companyData);
      const draft = generateAnswerDraft(question, match, dataContext, config, contextProfile || undefined, classResults[i]);
      drafts.push(draft);
      setLlmStatus(`Generating draft answers... (${i + 1}/${result.questions.length})`);
      setProgress(50 + Math.round((i / result.questions.length) * 40));
    }

    // LLM enhancement pass
    if (useLLM && isSupabaseConfigured()) {
      setLlmStatus('Polishing answers with AI...');
      let enhanced = 0;
      const MAX_LLM_CALLS = 100;
      for (let i = 0; i < drafts.length && enhanced < MAX_LLM_CALLS; i++) {
        const draft = drafts[i];
        if (draft.confidenceSource === 'unknown') continue;
        try {
          const llmReq = buildLLMRequest(draft.questionText, draft.category, draft.dataContext, config, contextProfile || undefined, draft.questionType);
          const llmRes = await generateAnswerWithLLM(llmReq);
          if (llmRes.success && llmRes.answer) { drafts[i] = { ...draft, answer: llmRes.answer }; enhanced++; }
        } catch { /* keep template */ }
        setLlmStatus(`Polishing answers with AI... (${enhanced}/${Math.min(drafts.length, MAX_LLM_CALLS)})`);
      }
      setLlmStatus(enhanced > 0 ? `Polished ${enhanced} answers with AI` : null);
    }

    setAnswerDrafts(drafts);
    setLlmStatus('Finalising your report...');
    setProgress(100);
    setQuestionnaireName(file.name.replace(/\.[^.]+$/, ''));
    setStepRaw('results');
    navigate(ROUTES.results);
  }, [companyData, useLLM, contextProfile, navigate]);

  const handleFileUpload = useCallback(async (file: File) => {
    setError(null); setStepRaw('processing'); navigate(ROUTES.processing); setProgress(10); setLlmStatus(null);
    setUploadedFile(file); setShowColumnMapping(false);
    try {
      const result = await parseQuestionFile(file);
      await processQuestions(result, file);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
      setStepRaw('upload');
      navigate(ROUTES.upload);
    }
  }, [processQuestions, navigate]);

  const handleManualMapping = useCallback(async () => {
    if (!uploadedFile || !manualMapping.questionText) return;
    setError(null); setStepRaw('processing'); navigate(ROUTES.processing); setProgress(10); setShowColumnMapping(false);
    try {
      const result = await reprocessWithMapping(uploadedFile, manualMapping);
      await processQuestions(result, uploadedFile);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
      setStepRaw('upload');
      navigate(ROUTES.upload);
    }
  }, [uploadedFile, manualMapping, processQuestions, navigate]);

  const handleRegenerate = useCallback(async () => {
    if (questions.length === 0 || matchResults.length === 0) return;
    setStepRaw('processing'); navigate(ROUTES.processing); setProgress(10); setLlmStatus('Re-generating answers with your updated data...');
    try {
      const config: GenerationConfig = { ...DEFAULT_CONFIG, useLLM };
      const drafts: AnswerDraft[] = [];
      for (let i = 0; i < questions.length; i++) {
        const question = questions[i];
        const match = matchResults[i];
        const dataContext = retrieveDataForCompany(match, companyData);
        const draft = generateAnswerDraft(question, match, dataContext, config, contextProfile || undefined, classifications[i]);
        drafts.push(draft);
        setLlmStatus(`Re-generating answers... (${i + 1}/${questions.length})`);
        setProgress(10 + Math.round((i / questions.length) * 80));
      }

      if (useLLM && isSupabaseConfigured()) {
        setLlmStatus('Polishing answers with AI...');
        let enhanced = 0;
        const MAX_LLM_CALLS = 100;
        for (let i = 0; i < drafts.length && enhanced < MAX_LLM_CALLS; i++) {
          const draft = drafts[i];
          if (draft.confidenceSource === 'unknown') continue;
          try {
            const llmReq = buildLLMRequest(draft.questionText, draft.category, draft.dataContext, config, contextProfile || undefined, draft.questionType);
            const llmRes = await generateAnswerWithLLM(llmReq);
            if (llmRes.success && llmRes.answer) { drafts[i] = { ...draft, answer: llmRes.answer }; enhanced++; }
          } catch { /* keep template */ }
          setLlmStatus(`Polishing answers with AI... (${enhanced}/${Math.min(drafts.length, MAX_LLM_CALLS)})`);
        }
      }

      setAnswerDrafts(drafts);
      setProgress(100);
      setStepRaw('results');
      navigate(ROUTES.results);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
      setStepRaw('results');
      navigate(ROUTES.results);
    }
  }, [questions, matchResults, companyData, useLLM, contextProfile, classifications, navigate]);

  const handlePayment = useCallback(async () => {
    setPaymentLoading(true);
    try {
      const result = await createCheckoutSession(sessionId);
      if ('url' in result) { window.location.href = result.url; }
      else { setHasPaid(true); setStepRaw('results'); setReportView('full'); }
    } catch { setHasPaid(true); setStepRaw('results'); setReportView('full'); }
    finally { setPaymentLoading(false); }
  }, [sessionId]);

  const handleExport = useCallback(() => {
    exportToExcel({ answerDrafts, companyData, questionnaireName, framework: parseResult?.metadata.detectedFramework });
  }, [answerDrafts, companyData, questionnaireName, parseResult]);

  const clearSessionAndReset = useCallback(() => {
    if (answerDrafts.length > 0 && !window.confirm('This will clear all your data and results. Are you sure?')) return;
    setAnswerDrafts([]);
    setQuestions([]);
    setMatchResults([]);
    setClassifications([]);
    setParseResult(null);
    setProgress(0);
    setLlmStatus(null);
    setError(null);
    setQuestionnaireName('');
    setStepRaw('landing');
    setHasPaid(false);
    setReturnToResults(false);
    try { localStorage.removeItem(STORAGE_KEYS.session); } catch { /* ignore */ }
    navigate(ROUTES.landing);
  }, [answerDrafts.length, navigate]);

  const updateAnswer = useCallback((questionId: string, updates: Partial<AnswerDraft>) => {
    setAnswerDrafts(prev => prev.map(d => d.questionId === questionId ? { ...d, ...updates } : d));
  }, []);

  const regenerateAnswer = useCallback((questionId: string) => {
    const idx = questions.findIndex(q => q.id === questionId);
    if (idx === -1) return;
    const dataContext = retrieveDataForCompany(matchResults[idx], companyData);
    const newDraft = generateAnswerDraft(questions[idx], matchResults[idx], dataContext, DEFAULT_CONFIG, contextProfile || undefined, classifications[idx]);
    setAnswerDrafts(prev => prev.map((d, i) => i === idx ? newDraft : d));
  }, [questions, matchResults, companyData, contextProfile, classifications]);

  const regenerateWithLLM = useCallback(async (questionId: string) => {
    const idx = questions.findIndex(q => q.id === questionId);
    if (idx === -1 || !isSupabaseConfigured()) return;
    const draft = answerDrafts[idx];
    const config: GenerationConfig = { ...DEFAULT_CONFIG, useLLM: true };
    try {
      const llmReq = buildLLMRequest(draft.questionText, draft.category, draft.dataContext, config, contextProfile || undefined, draft.questionType);
      const llmRes = await generateAnswerWithLLM(llmReq);
      if (llmRes.success && llmRes.answer) {
        setAnswerDrafts(prev => prev.map((d, i) => i === idx ? { ...d, answer: llmRes.answer! } : d));
      }
    } catch { /* keep existing */ }
  }, [questions, answerDrafts, contextProfile]);

  const toggleExpand = useCallback((id: string) => {
    setExpandedAnswers(prev => {
      const n = new Set(prev);
      if (n.has(id)) n.delete(id); else n.add(id);
      return n;
    });
  }, []);

  const goToImproveData = useCallback(() => {
    setReturnToResults(true);
    setStep('company-profile');
  }, [setStep]);

  const returnFromImproveData = useCallback(() => {
    setReturnToResults(false);
    handleRegenerate();
  }, [handleRegenerate]);

  const saveProfile = useCallback(() => {
    saveCompanyProfile(companyData);
    setShowProfileSaved(true);
    setTimeout(() => setShowProfileSaved(false), 2000);
  }, [companyData]);

  const loadSavedProfile = useCallback(() => {
    const p = loadCompanyProfile();
    if (p.companyName) setCompanyData(p);
  }, []);

  // Computed values
  const confidenceBreakdown = answerDrafts.reduce(
    (acc, d) => { acc[d.answerConfidence]++; return acc; },
    { high: 0, medium: 0, low: 0, none: 0 }
  );

  const matchStats = matchResults.length > 0 ? getMatchStatistics(matchResults) : null;
  const hasResults = answerDrafts.length > 0;

  const value: SessionContextType = {
    step, setStep,
    sessionId, companyData, setCompanyData, questionnaireName, error, setError,
    progress, parseResult, answerDrafts, matchResults, questions, classifications,
    expandedAnswers, hasPaid, useLLM, setUseLLM, llmStatus,
    uploadedFile, showColumnMapping, manualMapping, setManualMapping,
    showOwnEmissions, setShowOwnEmissions,
    unknownFields, setUnknownFields,
    contextProfile, setContextProfile,
    selectedCategories, companyDataPage, setCompanyDataPage,
    openFaqIndex, setOpenFaqIndex,
    reportView, setReportView, showSummaryDrawer, setShowSummaryDrawer,
    returnToResults, paymentLoading, showProfileSaved,
    handleFileUpload, handleManualMapping, handleRegenerate,
    handlePayment, handleExport, clearSessionAndReset,
    updateAnswer, regenerateAnswer, regenerateWithLLM,
    toggleExpand, goToImproveData, returnFromImproveData,
    updateCompanyField, parseNumeric, toggleCategory,
    saveProfile, loadSavedProfile,
    confidenceBreakdown, matchStats, hasResults,
    categoryPages, totalPages,
  };

  return (
    <SessionContext.Provider value={value}>
      {children}
    </SessionContext.Provider>
  );
}
