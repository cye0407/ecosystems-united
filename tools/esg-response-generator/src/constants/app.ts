import type { GenerationConfig, CompanyData, AnswerDraft, MatchResult, ParsedQuestion, ParseResult, ColumnMapping, ClassificationResult } from '@/lib/respond';
import type { CompanyProfile } from '@/types/context';
import type { StepperStep } from '@/components/ui';

// ============================================
// App step type
// ============================================

export type AppStep = 'landing' | 'upload' | 'processing' | 'results' | 'company-profile' | 'company-data' | 'payment' | 'complete';

// ============================================
// Defaults
// ============================================

export const DEFAULT_CONFIG: GenerationConfig = {
  useLLM: false, includeMethodology: true, includeAssumptions: true,
  includeLimitations: true, verbosity: 'standard', aggregateSites: true
};

export const EMPTY_COMPANY_DATA: CompanyData = {
  companyName: '', industry: '', country: '', employeeCount: 0,
  numberOfSites: 1, reportingPeriod: '', revenueBand: ''
};

// ============================================
// Storage keys
// ============================================

export const STORAGE_KEYS = {
  companyProfile: 'esg-rg-company-profile',
  contextProfile: 'esg-rg-context-profile',
  session: 'esg-rg-session',
} as const;

// ============================================
// Session snapshot
// ============================================

export interface SessionSnapshot {
  step: AppStep;
  companyData: CompanyData;
  questionnaireName: string;
  answerDrafts: AnswerDraft[];
  matchResults: MatchResult[];
  questions: ParsedQuestion[];
  parseResult: ParseResult | null;
  hasPaid: boolean;
  reportView?: 'summary' | 'full';
}

// ============================================
// Stepper config
// ============================================

export const STEPPER_STEPS: StepperStep[] = [
  { key: 'upload', label: 'Upload' },
  { key: 'results', label: 'Results' },
  { key: 'improve', label: 'Improve Data' },
  { key: 'final', label: 'Final Report' },
];

export function getStepperCurrent(step: AppStep, hasPaid: boolean): string {
  if (step === 'upload') return 'upload';
  if (step === 'processing') return 'upload';
  if (step === 'results' && !hasPaid) return 'results';
  if (step === 'company-profile' || step === 'company-data') return 'improve';
  if (step === 'results' && hasPaid) return 'final';
  return 'upload';
}

export function getStepperCompleted(step: AppStep, hasPaid: boolean, hasResults: boolean): string[] {
  const completed: string[] = [];
  if (hasResults) completed.push('upload');
  if (hasResults && (step === 'company-profile' || step === 'company-data')) completed.push('results');
  if (hasPaid) { completed.push('results'); completed.push('improve'); }
  return completed;
}

// ============================================
// Evidence type options per domain
// ============================================

export const EVIDENCE_TYPE_OPTIONS: Record<string, string[]> = {
  emissions: [
    'Utility invoices (electricity, gas) for reporting period',
    'Fuel purchase records / delivery notes',
    'GHG inventory calculation spreadsheet',
    'Emissions factor reference (IEA grid factors, DEFRA)',
    'Third-party verification / assurance statement',
    'Fleet fuel card statements',
    'Renewable energy certificates (RECs / GOs)',
  ],
  energy_electricity: [
    'Electricity invoices for all sites',
    'Renewable energy certificates (RECs / GOs)',
    'Power Purchase Agreement (PPA) documentation',
    'Smart meter data export',
  ],
  energy_fuel: [
    'Natural gas invoices',
    'Diesel purchase records',
    'Fleet fuel card statements',
    'DEFRA conversion factor reference',
  ],
  energy_water: [
    'Water utility invoices',
    'Meter reading logs',
  ],
  waste: [
    'Waste collection manifests',
    'Recycling certificates',
    'Hazardous waste consignment notes',
    'Waste contractor annual summary',
  ],
  workforce: [
    'HR system headcount report',
    'Payroll summary',
    'Diversity & inclusion report',
  ],
  health_safety: [
    'Incident log / register',
    'OSHA 300 log or equivalent',
    'Safety committee meeting minutes',
    'TRIR calculation worksheet',
  ],
  training: [
    'Training records database export',
    'LMS completion report',
    'Training plan with completion status',
  ],
  regulatory: [
    'ISO 14001 certificate',
    'ISO 45001 certificate',
    'Latest external audit report',
    'Regulatory compliance register',
  ],
  _default: [
    'Supporting document (certificate, policy, etc.)',
    'Data reference (invoice, meter reading, ERP export)',
    'Internal report or spreadsheet',
    'Third-party audit or verification',
    'Board / management approval minutes',
  ],
};

export function getEvidenceOptions(domain: string | null | undefined): string[] {
  if (domain && EVIDENCE_TYPE_OPTIONS[domain]) {
    return [...EVIDENCE_TYPE_OPTIONS[domain], ...EVIDENCE_TYPE_OPTIONS._default];
  }
  return EVIDENCE_TYPE_OPTIONS._default;
}

// ============================================
// Dropdown options
// ============================================

export const INDUSTRIES = [
  'Manufacturing', 'Transport & Logistics', 'Construction', 'Retail & Wholesale',
  'Technology & Software', 'Energy & Utilities', 'Financial Services', 'Healthcare & Pharma',
  'Agriculture & Food', 'Mining & Metals', 'Chemicals', 'Textiles & Apparel',
  'Automotive', 'Aerospace & Defence', 'Real Estate', 'Telecommunications',
  'Professional Services', 'Hospitality & Tourism', 'Education', 'Other'
];

export const REPORTING_PERIODS = [
  'Jan 2024 - Dec 2024', 'Jan 2023 - Dec 2023',
  'Apr 2024 - Mar 2025', 'Apr 2023 - Mar 2024',
  'Jul 2024 - Jun 2025', 'Jul 2023 - Jun 2024',
  'Q1 2024 (Jan-Mar)', 'Q2 2024 (Apr-Jun)', 'Q3 2024 (Jul-Sep)', 'Q4 2024 (Oct-Dec)',
  'FY 2024', 'FY 2023',
];

export const REVENUE_BANDS = [
  '< \u20AC1M', '\u20AC1M - \u20AC5M', '\u20AC5M - \u20AC10M', '\u20AC10M - \u20AC50M',
  '\u20AC50M - \u20AC250M', '\u20AC250M - \u20AC1B', '> \u20AC1B'
];

// ============================================
// Data category definitions for paginated form
// ============================================

export type DataCategory = 'energy' | 'waste' | 'workforce' | 'health_safety' | 'scope3' | 'governance';

export const DATA_CATEGORIES: { key: DataCategory; label: string; description: string }[] = [
  { key: 'energy', label: 'Energy & Emissions', description: 'Electricity, fuel, water, renewable energy' },
  { key: 'waste', label: 'Waste & Resources', description: 'Waste generation, recycling, hazardous waste' },
  { key: 'workforce', label: 'Workforce & Social', description: 'Diversity, training, employee metrics' },
  { key: 'health_safety', label: 'Health & Safety', description: 'Incident rates, lost time, fatalities' },
  { key: 'scope3', label: 'Supply Chain Emissions', description: 'Business travel, commuting, freight' },
  { key: 'governance', label: 'Governance & Goals', description: 'Certifications, targets, policies' },
];

// ============================================
// FAQ data
// ============================================

export const FAQ_ITEMS = [
  {
    q: 'What file formats are supported?',
    a: 'Excel (.xlsx, .xls), CSV, PDF, and Word (.docx). Multi-sheet Excel files are supported \u2014 each tab is processed as a section.'
  },
  {
    q: 'Is my data stored?',
    a: 'All core processing happens in your browser. Company data is saved to your browser\u2019s local storage for convenience. If you enable AI-enhanced answers, your question text and data are sent to our secure API for language polishing \u2014 this data is not stored after processing. Payment is handled securely by Stripe.'
  },
  {
    q: 'How accurate are the answers?',
    a: 'Answers are tailored from the data you provide. Each answer has a confidence rating (Provided, Estimated, or Unknown) so you know exactly what needs review. Emissions are auto-calculated using country-specific factors from IEA.'
  },
  {
    q: 'Which ESG frameworks are supported?',
    a: 'The tool auto-detects and supports CSRD/ESRS, GRI, CDP, EcoVadis, SASB, and TCFD questionnaires. It also works with custom questionnaires from buyers and supply chain platforms.'
  },
  {
    q: 'What\u2019s in the Excel export?',
    a: 'A multi-sheet workbook with: Executive Summary, Methodology Statement, Answers (with confidence ratings and evidence fields), and a Review Checklist for your team.'
  },
  {
    q: 'How much does it cost?',
    a: '\u20AC99 per questionnaire, one-time payment. No subscription, no hidden fees. You get the full editable report with Excel export, methodology statement, and review checklist.'
  },
];

// ============================================
// Confidence display helpers
// ============================================

export const confidenceColors: Record<string, string> = {
  high: 'bg-confidence-high-bg text-confidence-high border border-green-200',
  medium: 'bg-confidence-medium-bg text-confidence-medium border border-yellow-200',
  low: 'bg-confidence-low-bg text-confidence-low border border-orange-200',
  none: 'bg-confidence-none-bg text-confidence-none border border-red-200',
};

export const confidenceBorderColors: Record<string, string> = {
  high: 'border-l-green-500',
  medium: 'border-l-yellow-500',
  low: 'border-l-orange-500',
  none: 'border-l-red-400',
};

export const confidenceLabels: Record<string, string> = {
  high: 'High confidence', medium: 'Medium confidence',
  low: 'Low confidence', none: 'No data',
};

export const confidenceTips: Record<string, string> = {
  high: 'Answered using data you provided directly',
  medium: 'Answered using estimated or auto-calculated data',
  low: 'Partially answered \u2014 some data is missing',
  none: 'No matching data found \u2014 needs your input',
};

// ============================================
// Route path helpers
// ============================================

export const ROUTES = {
  landing: '/',
  upload: '/upload',
  processing: '/processing',
  results: '/results',
  companyProfile: '/company-profile',
  companyData: '/company-data',
} as const;

export function stepToRoute(step: AppStep): string {
  switch (step) {
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
}

export function routeToStep(pathname: string): AppStep {
  switch (pathname) {
    case ROUTES.landing: return 'landing';
    case ROUTES.upload: return 'upload';
    case ROUTES.processing: return 'processing';
    case ROUTES.results: return 'results';
    case ROUTES.companyProfile: return 'company-profile';
    case ROUTES.companyData: return 'company-data';
    default: return 'landing';
  }
}
