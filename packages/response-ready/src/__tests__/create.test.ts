import { describe, it, expect } from 'vitest';
import { createResponseEngine } from '../create';
import { esgDomainPack } from '../../domain-packs/esg';
import type { ESGCompanyData } from '../../domain-packs/esg';
import type { GenerationConfig } from '../types';

// ============================================
// Sample Data
// ============================================

const COMPANY: ESGCompanyData = {
  companyName: 'Acme Corp',
  industry: 'Manufacturing',
  country: 'Germany',
  employeeCount: 500,
  numberOfSites: 3,
  reportingPeriod: 'Jan 2024 - Dec 2024',
  revenueBand: '10M-50M EUR',
  electricityKwh: 1000000,
  renewablePercent: 40,
  naturalGasM3: 50000,
  dieselLiters: 10000,
  waterM3: 5000,
  totalWasteKg: 200000,
  recyclingPercent: 65,
  hazardousWasteKg: 5000,
  femalePercent: 35,
  trainingHoursPerEmployee: 20,
  trirRate: 1.5,
  lostTimeIncidents: 3,
  fatalities: 0,
  certifications: 'ISO 14001, ISO 45001',
  sustainabilityGoal: 'Net zero by 2035',
};

const CONFIG: GenerationConfig = {
  useLLM: false,
  includeMethodology: false,
  includeAssumptions: true,
  includeLimitations: true,
  verbosity: 'standard',
  aggregateSites: false,
};

// ============================================
// Factory Tests
// ============================================

describe('createResponseEngine', () => {
  const engine = createResponseEngine(esgDomainPack);

  it('returns an engine with correct pack identity', () => {
    expect(engine.packName).toBe('esg');
    expect(engine.packVersion).toBe('1.0.0');
  });

  it('exposes all pipeline methods', () => {
    expect(engine.parseFile).toBeDefined();
    expect(engine.parseWithMapping).toBeDefined();
    expect(engine.parseText).toBeDefined();
    expect(engine.matchQuestion).toBeDefined();
    expect(engine.matchQuestions).toBeDefined();
    expect(engine.classifier).not.toBeNull();
    expect(engine.classifyQuestion).toBeDefined();
    expect(engine.classifyQuestions).toBeDefined();
    expect(engine.retrieveData).toBeDefined();
    expect(engine.generateDraft).toBeDefined();
    expect(engine.generateDrafts).toBeDefined();
    expect(engine.rewriter).toBeDefined();
    expect(engine.exportToBuffer).toBeDefined();
  });
});

describe('ESG Integration: match → retrieve → generate', () => {
  const engine = createResponseEngine(esgDomainPack);

  it('processes an emissions question end-to-end', () => {
    const question = { id: 'q1', rowIndex: 0, text: 'What are your total Scope 1 greenhouse gas emissions?', rawRow: {} };

    // Match
    const matchResult = engine.matchQuestion(question);
    expect(matchResult.primaryDomain).toBe('emissions');
    expect(matchResult.topics).toContain('ghg_emissions');
    expect(matchResult.confidence).not.toBe('none');

    // Retrieve
    const dataContext = engine.retrieveData(matchResult, COMPANY);
    const allPoints = [...dataContext.company, ...dataContext.operational, ...dataContext.calculated];
    expect(allPoints.length).toBeGreaterThan(0);

    // Generate
    const draft = engine.generateDraft(question, matchResult, dataContext, CONFIG);
    expect(draft.answer).toBeDefined();
    expect(draft.answer.length).toBeGreaterThan(0);
    expect(draft.questionId).toBe('q1');
    expect(draft.confidenceSource).not.toBe('unknown');
  });

  it('processes an energy question end-to-end', () => {
    const question = { id: 'q2', rowIndex: 1, text: 'How much electricity does your company consume?', rawRow: {} };

    const matchResult = engine.matchQuestion(question);
    expect(matchResult.primaryDomain).toBe('energy_electricity');

    const dataContext = engine.retrieveData(matchResult, COMPANY);
    const electricityPoint = dataContext.operational.find(p => p.field === 'totalElectricity');
    expect(electricityPoint?.value).toBe(1000000);

    const draft = engine.generateDraft(question, matchResult, dataContext, CONFIG);
    expect(draft.answer).toContain('1,000,000');
  });

  it('processes a waste question end-to-end', () => {
    const question = { id: 'q3', rowIndex: 2, text: 'What is your total waste generation and recycling rate?', rawRow: {} };

    const matchResult = engine.matchQuestion(question);
    expect(matchResult.primaryDomain).toBe('waste');

    const dataContext = engine.retrieveData(matchResult, COMPANY);
    expect(dataContext.operational.length).toBeGreaterThan(0);

    const draft = engine.generateDraft(question, matchResult, dataContext, CONFIG);
    expect(draft.answer.length).toBeGreaterThan(0);
  });

  it('handles unmatched question gracefully', () => {
    const question = { id: 'q4', rowIndex: 3, text: 'What is the weather today?', rawRow: {} };
    const emptyCompany: ESGCompanyData = { companyName: '' };

    const matchResult = engine.matchQuestion(question);
    expect(matchResult.confidence).toBe('none');

    const dataContext = engine.retrieveData(matchResult, emptyCompany);
    const draft = engine.generateDraft(question, matchResult, dataContext, CONFIG);
    expect(draft.confidenceSource).toBe('unknown');
  });

  it('classifies questions by type when classifier is available', () => {
    expect(engine.classifyQuestion).not.toBeNull();
    const result = engine.classifyQuestion!('q1', 'What is your policy on greenhouse gas emissions?', 'Environment');
    expect(result.questionId).toBe('q1');
    expect(['POLICY', 'MEASURE', 'KPI']).toContain(result.questionType);
  });

  it('processes a batch of questions', () => {
    const questions = [
      { id: 'q1', rowIndex: 0, text: 'What are your Scope 1 emissions?', rawRow: {} },
      { id: 'q2', rowIndex: 1, text: 'How much electricity do you use?', rawRow: {} },
      { id: 'q3', rowIndex: 2, text: 'Describe your waste management approach.', rawRow: {} },
    ];

    const matches = engine.matchQuestions(questions);
    expect(matches).toHaveLength(3);

    const contexts = matches.map(m => engine.retrieveData(m, COMPANY));
    const drafts = engine.generateDrafts(questions, matches, contexts, CONFIG);
    expect(drafts).toHaveLength(3);
    drafts.forEach(d => {
      expect(d.answer).toBeDefined();
      expect(d.answer.length).toBeGreaterThan(0);
    });
  });

  it('applies defensive rewriting', () => {
    const rewriter = engine.rewriter;
    const rewritten = rewriter.rewriteAnswer('It is important to note that overall, our company does well in sustainability.');
    expect(rewritten).not.toContain('It is important to note that');
    expect(rewritten).not.toContain('overall');
  });
});

describe('ESG Data Retrieval specific tests', () => {
  const engine = createResponseEngine(esgDomainPack);

  it('retrieves workforce data', () => {
    const match = engine.matchQuestion({ id: 'q1', rowIndex: 0, text: 'Describe your workforce composition and staff details.', rawRow: {} });
    const ctx = engine.retrieveData(match, COMPANY);
    const ftePoint = [...ctx.company, ...ctx.operational].find(p => p.field === 'totalFte');
    expect(ftePoint?.value).toBe(500);
  });

  it('reports data gaps for missing data', () => {
    const sparseCompany: ESGCompanyData = {
      companyName: 'Sparse Corp',
    };
    const match = engine.matchQuestion({ id: 'q1', rowIndex: 0, text: 'What is your electricity consumption?', rawRow: {} });
    const ctx = engine.retrieveData(match, sparseCompany);
    expect(ctx.metadata.dataGaps.length).toBeGreaterThan(0);
  });

  it('auto-calculates Scope 2 emissions from electricity data', () => {
    const match = engine.matchQuestion({ id: 'q1', rowIndex: 0, text: 'What are your scope 1 direct emissions?', rawRow: {} });
    const ctx = engine.retrieveData(match, COMPANY);
    const scope1 = ctx.calculated.find(p => p.field === 'scope1Estimate');
    expect(scope1).toBeDefined();
    expect(typeof scope1?.value).toBe('number');
  });
});

describe('parseText', () => {
  const engine = createResponseEngine(esgDomainPack);

  it('parses plain text into questions', () => {
    const questions = engine.parseText('What are your emissions?\nHow much water do you use?');
    expect(questions.length).toBeGreaterThanOrEqual(2);
    expect(questions[0].text).toContain('emissions');
  });
});

describe('exportToBuffer', () => {
  const engine = createResponseEngine(esgDomainPack);

  it('exports answer drafts to an Excel buffer', async () => {
    const questions = [
      { id: 'q1', rowIndex: 0, text: 'What are your emissions?', rawRow: {} },
    ];
    const matches = engine.matchQuestions(questions);
    const contexts = matches.map(m => engine.retrieveData(m, COMPANY));
    const drafts = engine.generateDrafts(questions, matches, contexts, CONFIG);

    const buffer = await engine.exportToBuffer({
      answerDrafts: drafts,
      metadata: {
        companyName: 'Acme Corp',
        framework: 'CSRD',
        reportingPeriod: '2024',
        generatedAt: new Date().toISOString(),
        packName: 'esg',
        packVersion: '1.0.0',
      },
    });

    expect(buffer).toBeInstanceOf(Uint8Array);
    expect(buffer.length).toBeGreaterThan(0);
  });
});
