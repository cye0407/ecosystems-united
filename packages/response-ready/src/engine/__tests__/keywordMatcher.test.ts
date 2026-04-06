import { describe, it, expect } from 'vitest';
import { createMatcher } from '../keywordMatcher';
import type { ParsedQuestion, KeywordRule, MappingRule } from '../../types';

// ============================================
// Helpers
// ============================================

function q(text: string, overrides: Partial<ParsedQuestion> = {}): ParsedQuestion {
  return { id: overrides.id ?? 'q1', rowIndex: overrides.rowIndex ?? 0, text, rawRow: {}, ...overrides };
}

const SAMPLE_RULES: KeywordRule[] = [
  { keywords: ['greenhouse gas', 'ghg', 'carbon dioxide', 'co2'], domain: 'emissions', topics: ['ghg_emissions'], weight: 10 },
  { keywords: ['scope 1', 'direct emissions'], domain: 'emissions', topics: ['scope_1'], weight: 12 },
  { keywords: ['energy', 'electricity', 'kwh'], domain: 'energy', topics: ['electricity'], weight: 10 },
  { keywords: ['renewable', 'solar', 'wind'], domain: 'energy', topics: ['renewable_energy'], weight: 8 },
  { keywords: ['water', 'consumption'], domain: 'water', topics: ['water_use'], weight: 10 },
  { keywords: ['waste', 'recycling'], domain: 'waste', topics: ['waste_management'], weight: 10 },
  { keywords: ['employee', 'workforce', 'staff'], domain: 'workforce', topics: ['general'], weight: 8 },
];

const SAMPLE_SUGGESTIONS: Record<string, string[]> = {
  emissions: ['totalScope1', 'totalScope2', 'naturalGasM3'],
  energy: ['electricityKwh', 'renewablePercent'],
  water: ['waterM3'],
  waste: ['totalWasteKg', 'recyclingPercent'],
  workforce: ['employeeCount', 'femalePercent'],
};

// ============================================
// Tests
// ============================================

describe('createMatcher', () => {
  it('returns a matcher instance with all methods', () => {
    const matcher = createMatcher(SAMPLE_RULES, SAMPLE_SUGGESTIONS);
    expect(matcher.matchQuestion).toBeDefined();
    expect(matcher.matchQuestions).toBeDefined();
    expect(matcher.getMatchStatistics).toBeDefined();
    expect(matcher.setCsvRules).toBeDefined();
  });
});

describe('matchQuestion', () => {
  const matcher = createMatcher(SAMPLE_RULES, SAMPLE_SUGGESTIONS);

  it('matches a question about emissions with high confidence', () => {
    const result = matcher.matchQuestion(q('What are your total greenhouse gas emissions for scope 1?'));
    expect(result.primaryDomain).toBe('emissions');
    expect(result.topics).toContain('ghg_emissions');
    expect(result.topics).toContain('scope_1');
    expect(result.confidence).not.toBe('none');
    expect(result.matchedKeywords.length).toBeGreaterThan(0);
  });

  it('matches a question about energy', () => {
    const result = matcher.matchQuestion(q('How much electricity does your company consume?'));
    expect(result.primaryDomain).toBe('energy');
    expect(result.topics).toContain('electricity');
  });

  it('returns none confidence when no keywords match', () => {
    const result = matcher.matchQuestion(q('What is your company address?'));
    expect(result.confidence).toBe('none');
    expect(result.primaryDomain).toBeNull();
  });

  it('includes suggested data points from the matching domain', () => {
    const result = matcher.matchQuestion(q('What is your total water consumption?'));
    expect(result.primaryDomain).toBe('water');
    expect(result.suggestedDataPoints).toContain('waterM3');
  });

  it('returns the correct questionId', () => {
    const result = matcher.matchQuestion(q('What about waste?', { id: 'q42' }));
    expect(result.questionId).toBe('q42');
  });

  it('matches using category text as well', () => {
    const result = matcher.matchQuestion(q('Describe your approach', { category: 'Greenhouse Gas Emissions' }));
    expect(result.primaryDomain).toBe('emissions');
  });
});

describe('matchQuestions', () => {
  const matcher = createMatcher(SAMPLE_RULES, SAMPLE_SUGGESTIONS);

  it('matches multiple questions at once', () => {
    const questions = [
      q('What are your GHG emissions?', { id: 'q1' }),
      q('How much electricity do you use?', { id: 'q2' }),
      q('What is your employee count?', { id: 'q3' }),
    ];
    const results = matcher.matchQuestions(questions);
    expect(results).toHaveLength(3);
    expect(results[0].primaryDomain).toBe('emissions');
    expect(results[1].primaryDomain).toBe('energy');
    expect(results[2].primaryDomain).toBe('workforce');
  });
});

describe('getMatchStatistics', () => {
  const matcher = createMatcher(SAMPLE_RULES, SAMPLE_SUGGESTIONS);

  it('computes statistics from match results', () => {
    const results = matcher.matchQuestions([
      q('GHG emissions scope 1', { id: 'q1' }),
      q('Electricity consumption', { id: 'q2' }),
      q('Company address', { id: 'q3' }),
    ]);
    const stats = matcher.getMatchStatistics(results);
    expect(stats.total).toBe(3);
    expect(stats.unmatchedCount).toBe(1);
    expect(stats.byDomain.emissions).toBe(1);
    expect(stats.byDomain.energy).toBe(1);
  });
});

describe('setCsvRules', () => {
  it('applies CSV rules before keyword matching', () => {
    const matcher = createMatcher(SAMPLE_RULES, SAMPLE_SUGGESTIONS);
    const csvRules: MappingRule[] = [
      {
        priority: 1,
        patternType: 'keyword',
        pattern: 'biodiversity',
        category: 'environment',
        metricKeys: ['biodiversity_score'],
        answerTemplate: '',
        promptIfMissing: 'Please provide biodiversity data',
      },
    ];
    matcher.setCsvRules(csvRules);

    const result = matcher.matchQuestion(q('What is your approach to biodiversity?'));
    expect(result.csvMetricKeys).toContain('biodiversity_score');
    expect(result.csvPromptIfMissing).toBe('Please provide biodiversity data');
  });

  it('supports regex pattern type in CSV rules', () => {
    const matcher = createMatcher(SAMPLE_RULES, SAMPLE_SUGGESTIONS);
    const csvRules: MappingRule[] = [
      {
        priority: 1,
        patternType: 'regex',
        pattern: 'scope\\s*[12]',
        category: 'emissions',
        metricKeys: ['scope_emissions'],
        answerTemplate: '',
        promptIfMissing: '',
      },
    ];
    matcher.setCsvRules(csvRules);

    const result = matcher.matchQuestion(q('Report your scope 1 emissions'));
    expect(result.csvMetricKeys).toContain('scope_emissions');
  });
});
