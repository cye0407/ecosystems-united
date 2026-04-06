import { describe, it, expect } from 'vitest';
import * as XLSX from 'xlsx';
import { createResponseEngine } from '../create';
import { esgDomainPack } from '../../domain-packs/esg';
import type { ESGCompanyData } from '../../domain-packs/esg';
import type { ESGCompanyProfile } from '../../domain-packs/esg/types';
import type { GenerationConfig, ParsedQuestion } from '../types';

// ============================================
// Test Data
// ============================================

const FULL_COMPANY: ESGCompanyData = {
  companyName: 'TestCorp GmbH',
  industry: 'Manufacturing',
  country: 'Germany',
  employeeCount: 250,
  numberOfSites: 2,
  reportingPeriod: '2025',
  revenueBand: '10M-50M EUR',
  electricityKwh: 750000,
  renewablePercent: 55,
  naturalGasM3: 30000,
  dieselLiters: 5000,
  waterM3: 8000,
  scope1Tco2e: 120,
  scope2Tco2e: 280,
  totalWasteKg: 180000,
  recyclingPercent: 72,
  hazardousWasteKg: 3000,
  femalePercent: 42,
  trainingHoursPerEmployee: 16,
  trirRate: 0.8,
  lostTimeIncidents: 1,
  fatalities: 0,
  certifications: 'ISO 14001, ISO 9001',
  sustainabilityGoal: 'Carbon neutral by 2030',
};

const SPARSE_COMPANY: ESGCompanyData = {
  companyName: 'Tiny Supplier Ltd',
  industry: 'Services',
  country: 'United Kingdom',
  employeeCount: 15,
};

const PROFILE: ESGCompanyProfile = {
  companyName: 'TestCorp GmbH',
  industry: 'Manufacturing',
  country: 'Germany',
  employeeCount: 250,
  numberOfSites: 2,
  reportingPeriod: '2025',
  revenueBand: '10M-50M EUR',
  informalPractices: [],
  maturityLevel: 'Developing',
  maturityScore: 35,
};

const CONFIG: GenerationConfig = {
  useLLM: false,
  includeMethodology: true,
  includeAssumptions: true,
  includeLimitations: true,
  verbosity: 'standard',
  aggregateSites: false,
};

// ============================================
// Helpers
// ============================================

function q(id: string, text: string, category?: string): ParsedQuestion {
  return { id, rowIndex: 0, text, category, rawRow: {} };
}

function makeExcelFile(rows: Record<string, unknown>[], fileName = 'questionnaire.xlsx'): File {
  const wb = XLSX.utils.book_new();
  const ws = XLSX.utils.json_to_sheet(rows);
  XLSX.utils.book_append_sheet(wb, ws, 'Questions');
  const buf = XLSX.write(wb, { type: 'array', bookType: 'xlsx' });
  return new File([buf], fileName, {
    type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
  });
}

// ============================================
// Full Pipeline Tests
// ============================================

describe('full pipeline: parse → match → classify → retrieve → generate', () => {
  const engine = createResponseEngine(esgDomainPack);

  it('processes an EcoVadis-style questionnaire end-to-end', async () => {
    const file = makeExcelFile([
      { Question: 'What is your total energy consumption?', Category: 'Environment' },
      { Question: 'What percentage of your energy comes from renewable sources?', Category: 'Environment' },
      { Question: 'What are your total Scope 1 and Scope 2 emissions?', Category: 'Environment' },
      { Question: 'Describe your waste management approach.', Category: 'Environment' },
      { Question: 'What is your employee turnover rate?', Category: 'Social' },
      { Question: 'Describe your health and safety management system.', Category: 'Social' },
      { Question: 'Does your company have an anti-corruption policy?', Category: 'Ethics' },
    ]);

    // Step 1: Parse
    const parseResult = await engine.parseFile(file);
    expect(parseResult.success).toBe(true);
    expect(parseResult.questions.length).toBeGreaterThanOrEqual(5);

    // Step 2: Match
    const matches = engine.matchQuestions(parseResult.questions);
    expect(matches).toHaveLength(parseResult.questions.length);
    const matchedCount = matches.filter(m => m.confidence !== 'none').length;
    expect(matchedCount).toBeGreaterThanOrEqual(5);

    // Step 3: Classify
    const classifications = engine.classifyQuestions!(
      parseResult.questions.map(q => ({ id: q.id, text: q.text, category: q.category }))
    );
    expect(classifications).toHaveLength(parseResult.questions.length);
    classifications.forEach(c => {
      expect(['POLICY', 'MEASURE', 'KPI']).toContain(c.questionType);
    });

    // Step 4: Retrieve
    const contexts = matches.map(m => engine.retrieveData(m, FULL_COMPANY));
    expect(contexts).toHaveLength(matches.length);

    // Step 5: Generate
    const drafts = engine.generateDrafts(
      parseResult.questions, matches, contexts, CONFIG, PROFILE, classifications
    );
    expect(drafts).toHaveLength(parseResult.questions.length);

    // Verify quality
    drafts.forEach(draft => {
      expect(draft.answer).toBeDefined();
      expect(draft.answer.length).toBeGreaterThan(0);
      expect(draft.questionId).toBeDefined();
      expect(['high', 'medium', 'low', 'none']).toContain(draft.answerConfidence);
    });

    // At least some should have real data
    const dataBackedDrafts = drafts.filter(d => d.confidenceSource === 'provided');
    expect(dataBackedDrafts.length).toBeGreaterThanOrEqual(3);
  });

  it('handles a sparse company (minimal data) without crashing', () => {
    const questions = [
      q('q1', 'What are your total greenhouse gas emissions?'),
      q('q2', 'How much electricity do you consume annually?'),
      q('q3', 'Describe your water management practices.'),
      q('q4', 'What is your employee diversity breakdown?'),
    ];

    const matches = engine.matchQuestions(questions);
    const contexts = matches.map(m => engine.retrieveData(m, SPARSE_COMPANY));
    const drafts = engine.generateDrafts(questions, matches, contexts, CONFIG);

    expect(drafts).toHaveLength(4);
    drafts.forEach(draft => {
      expect(draft.answer).toBeDefined();
      expect(draft.answer.length).toBeGreaterThan(0);
    });

    // Most should flag data gaps since SPARSE_COMPANY has almost no data
    const gapDrafts = drafts.filter(d => d.hasDataGaps);
    expect(gapDrafts.length).toBeGreaterThanOrEqual(2);
  });
});

// ============================================
// Domain Coverage Tests
// ============================================

describe('domain coverage: all major ESG topics produce answers', () => {
  const engine = createResponseEngine(esgDomainPack);

  const topicQuestions: [string, string][] = [
    ['emissions', 'What are your total Scope 1 and Scope 2 greenhouse gas emissions?'],
    ['energy', 'How much electricity does your company consume annually?'],
    ['renewable', 'What percentage of your energy comes from renewable sources?'],
    ['water', 'What is your annual water consumption?'],
    ['waste', 'Describe your waste generation and recycling rates.'],
    ['workforce', 'What is the total number of employees and gender breakdown?'],
    ['health_safety', 'What is your total recordable incident rate (TRIR)?'],
    ['training', 'How many hours of training per employee do you provide?'],
    ['ethics', 'Does your company have an anti-corruption and ethics policy?'],
    ['supply_chain', 'How do you assess ESG risks in your supply chain?'],
    ['biodiversity', 'What is your approach to biodiversity and land use?'],
    ['human_rights', 'Describe your human rights due diligence process.'],
  ];

  for (const [topic, text] of topicQuestions) {
    it(`matches and generates answer for ${topic}`, () => {
      const question = q(`q_${topic}`, text);
      const match = engine.matchQuestion(question);

      // Most topics should match (some niche ones may not)
      if (match.confidence === 'none') {
        // acceptable for very niche topics — just verify no crash
        const ctx = engine.retrieveData(match, FULL_COMPANY);
        const draft = engine.generateDraft(question, match, ctx, CONFIG);
        expect(draft.answer).toBeDefined();
        return;
      }

      expect(match.primaryDomain).toBeTruthy();
      const ctx = engine.retrieveData(match, FULL_COMPANY);
      const draft = engine.generateDraft(question, match, ctx, CONFIG, PROFILE);
      expect(draft.answer.length).toBeGreaterThan(20);
    });
  }
});

// ============================================
// Answer Quality Tests
// ============================================

describe('answer quality', () => {
  const engine = createResponseEngine(esgDomainPack);

  it('includes actual data values in answers when data is available', () => {
    const question = q('q1', 'What is your total electricity consumption?');
    const match = engine.matchQuestion(question);
    const ctx = engine.retrieveData(match, FULL_COMPANY);
    const draft = engine.generateDraft(question, match, ctx, CONFIG, PROFILE);

    // Should contain the actual value 750000 or formatted version
    expect(draft.answer).toMatch(/750[,.]?000/);
  });

  it('generates non-empty answer when profile is provided', () => {
    const question = q('q1', 'Describe your greenhouse gas emissions management.');
    const match = engine.matchQuestion(question);
    const ctx = engine.retrieveData(match, FULL_COMPANY);
    const draft = engine.generateDraft(question, match, ctx, CONFIG, PROFILE);

    expect(draft.answer.length).toBeGreaterThan(50);
    expect(draft.answerConfidence).not.toBe('none');
  });

  it('flags answers as needsReview when confidence is low', () => {
    const question = q('q1', 'Elaborate on your approach to emerging contaminants in wastewater.');
    const match = engine.matchQuestion(question);
    const ctx = engine.retrieveData(match, SPARSE_COMPANY);
    const draft = engine.generateDraft(question, match, ctx, CONFIG);

    if (draft.answerConfidence === 'low' || draft.answerConfidence === 'none') {
      expect(draft.needsReview).toBe(true);
    }
  });

  it('defensive rewriter removes filler phrases from scrub rules', () => {
    const rewriter = engine.rewriter;
    // Test phrases that match actual scrub rules
    expect(rewriter.rewriteAnswer('It is important to note that we measure emissions.'))
      .not.toMatch(/^It is important to note that/i);
    expect(rewriter.rewriteAnswer('Overall, our company performs well.'))
      .not.toMatch(/overall,?\s/i);
    expect(rewriter.rewriteAnswer('In conclusion, we are improving.'))
      .not.toMatch(/in conclusion,?\s/i);
    expect(rewriter.rewriteAnswer('Based on the available data, our emissions are 100 tCO2e.'))
      .not.toMatch(/^Based on/i);
    expect(rewriter.rewriteAnswer('Furthermore, we track waste.'))
      .toContain('Additionally');
  });
});

// ============================================
// Export Tests
// ============================================

describe('Excel export from pipeline', () => {
  const engine = createResponseEngine(esgDomainPack);

  it('exports a complete questionnaire response to Excel buffer', async () => {
    const questions = [
      q('q1', 'What are your Scope 1 emissions?'),
      q('q2', 'What is your electricity consumption?'),
      q('q3', 'Describe your waste management approach.'),
      q('q4', 'What is your employee headcount?'),
    ];

    const matches = engine.matchQuestions(questions);
    const contexts = matches.map(m => engine.retrieveData(m, FULL_COMPANY));
    const drafts = engine.generateDrafts(questions, matches, contexts, CONFIG, PROFILE);

    const buffer = await engine.exportToBuffer({
      answerDrafts: drafts,
      metadata: {
        companyName: 'TestCorp GmbH',
        framework: 'Custom',
        reportingPeriod: '2025',
        generatedAt: new Date().toISOString(),
        packName: 'esg',
        packVersion: '1.0.0',
      },
    });

    expect(buffer).toBeInstanceOf(Uint8Array);
    expect(buffer.length).toBeGreaterThan(100);

    // Verify it's a valid XLSX file by reading it back
    const wb = XLSX.read(buffer, { type: 'array' });
    expect(wb.SheetNames.length).toBeGreaterThan(0);
  });
});

// ============================================
// Template Questionnaire Simulation
// ============================================

describe('simulate built-in template questionnaires', () => {
  const engine = createResponseEngine(esgDomainPack);

  // Simulates what happens when a user selects a pre-loaded template
  const templateSamples = [
    {
      name: 'EcoVadis-style',
      questions: [
        'Does your company have an environmental policy?',
        'What are your total Scope 1 and 2 greenhouse gas emissions?',
        'What percentage of energy is from renewable sources?',
        'Describe your waste reduction initiatives.',
        'Does your company have a code of conduct for suppliers?',
      ],
    },
    {
      name: 'CDP-style',
      questions: [
        'What is your governance structure around climate issues?',
        'How does climate change affect your business strategy?',
        'What are your Scope 1 emissions in metric tonnes CO2e?',
        'What are your Scope 2 emissions (location-based)?',
        'Describe your emissions reduction targets.',
      ],
    },
    {
      name: 'Custom buyer questionnaire',
      questions: [
        'Please provide your company name and address.',
        'What is your annual revenue range?',
        'List any ISO certifications your company holds.',
        'What is your electricity consumption in kWh?',
        'How many workplace accidents occurred last year?',
        'Do you have a modern slavery statement?',
      ],
    },
  ];

  for (const template of templateSamples) {
    it(`processes ${template.name} template without errors`, () => {
      const questions = template.questions.map((text, i) => q(`t${i}`, text));
      const matches = engine.matchQuestions(questions);
      const contexts = matches.map(m => engine.retrieveData(m, FULL_COMPANY));
      const drafts = engine.generateDrafts(questions, matches, contexts, CONFIG, PROFILE);

      expect(drafts).toHaveLength(template.questions.length);

      // No answer should be empty string
      drafts.forEach((d, i) => {
        expect(d.answer.length).toBeGreaterThan(0,
          `Answer for "${template.questions[i]}" should not be empty`
        );
      });

      // At least half should have data-backed answers for a full company
      const backed = drafts.filter(d => d.confidenceSource !== 'unknown').length;
      expect(backed).toBeGreaterThanOrEqual(Math.floor(template.questions.length / 2));
    });
  }
});
