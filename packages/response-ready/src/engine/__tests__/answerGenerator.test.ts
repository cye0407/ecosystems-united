import { describe, it, expect } from 'vitest';
import { createAnswerGenerator, buildDataMap, val, has, num, str, fmt } from '../answerGenerator';
import type {
  ParsedQuestion,
  MatchResult,
  DataContext,
  GenerationConfig,
  AnswerTemplate,
  RetrievedDataPoint,
} from '../../types';

// ============================================
// Helpers
// ============================================

function q(text: string, overrides: Partial<ParsedQuestion> = {}): ParsedQuestion {
  return { id: overrides.id ?? 'q1', rowIndex: 0, text, rawRow: {}, ...overrides };
}

function match(domain: string, topics: string[] = ['general'], confidence: 'high' | 'medium' | 'low' | 'none' = 'high'): MatchResult {
  return {
    questionId: 'q1',
    primaryDomain: domain,
    secondaryDomains: [],
    topics,
    confidence,
    matchedKeywords: ['test'],
    suggestedDataPoints: [],
  };
}

function ctx(operational: RetrievedDataPoint[] = [], metadata?: Partial<DataContext['metadata']>): DataContext {
  return {
    company: [],
    operational,
    calculated: [],
    metadata: { sitesIncluded: [], dataGaps: [], ...metadata },
  };
}

const CONFIG: GenerationConfig = {
  useLLM: false,
  includeMethodology: false,
  includeAssumptions: true,
  includeLimitations: true,
  verbosity: 'standard',
  aggregateSites: false,
};

// ============================================
// Data Map Helpers
// ============================================

describe('buildDataMap', () => {
  it('builds a map from DataContext', () => {
    const context = ctx([
      { domain: 'energy', field: 'electricityKwh', label: 'Electricity', value: 1000, confidence: 'high' },
    ]);
    const map = buildDataMap(context);
    expect(map.has('electricityKwh')).toBe(true);
    expect(map.get('electricityKwh')?.value).toBe(1000);
  });
});

describe('val', () => {
  it('returns value for existing field', () => {
    const map = new Map<string, RetrievedDataPoint>();
    map.set('kwh', { domain: 'energy', field: 'kwh', label: 'kWh', value: 500, confidence: 'high' });
    expect(val(map, 'kwh')).toBe(500);
  });

  it('returns null for missing field', () => {
    expect(val(new Map(), 'missing')).toBeNull();
  });
});

describe('has', () => {
  it('returns true when all fields have values', () => {
    const map = new Map<string, RetrievedDataPoint>();
    map.set('a', { domain: 'd', field: 'a', label: 'A', value: 10, confidence: 'high' });
    map.set('b', { domain: 'd', field: 'b', label: 'B', value: 'yes', confidence: 'high' });
    expect(has(map, 'a', 'b')).toBe(true);
  });

  it('returns true when a field is zero (zero is a valid value)', () => {
    const map = new Map<string, RetrievedDataPoint>();
    map.set('a', { domain: 'd', field: 'a', label: 'A', value: 0, confidence: 'high' });
    expect(has(map, 'a')).toBe(true);
  });

  it('returns false when a field is missing', () => {
    expect(has(new Map(), 'missing')).toBe(false);
  });
});

describe('num', () => {
  it('returns numeric value', () => {
    const map = new Map<string, RetrievedDataPoint>();
    map.set('n', { domain: 'd', field: 'n', label: 'N', value: 42, confidence: 'high' });
    expect(num(map, 'n')).toBe(42);
  });

  it('returns 0 for non-numeric value', () => {
    const map = new Map<string, RetrievedDataPoint>();
    map.set('s', { domain: 'd', field: 's', label: 'S', value: 'hello', confidence: 'high' });
    expect(num(map, 's')).toBe(0);
  });
});

describe('str', () => {
  it('returns string value', () => {
    const map = new Map<string, RetrievedDataPoint>();
    map.set('s', { domain: 'd', field: 's', label: 'S', value: 'hello', confidence: 'high' });
    expect(str(map, 's')).toBe('hello');
  });

  it('converts numbers to strings', () => {
    const map = new Map<string, RetrievedDataPoint>();
    map.set('n', { domain: 'd', field: 'n', label: 'N', value: 42, confidence: 'high' });
    expect(str(map, 'n')).toBe('42');
  });
});

describe('fmt', () => {
  it('formats numbers with locale', () => {
    expect(fmt(1000000)).toBe('1,000,000');
  });

  it('limits decimal places', () => {
    const result = fmt(3.14159);
    expect(result).toContain('3.1');
  });
});

// ============================================
// Answer Generator
// ============================================

describe('createAnswerGenerator', () => {
  const templates: AnswerTemplate[] = [
    {
      domains: ['energy'],
      topics: ['electricity'],
      generate: (dataMap) => {
        const kwh = val(dataMap, 'electricityKwh');
        if (kwh === null) return null;
        return `Our total electricity consumption is ${fmt(kwh as number)} kWh.`;
      },
    },
  ];

  it('generates an answer using a matching template', () => {
    const generator = createAnswerGenerator({ templates });
    const draft = generator.generateAnswerDraft(
      q('How much electricity do you use?'),
      match('energy', ['electricity']),
      ctx([{ domain: 'energy', field: 'electricityKwh', label: 'Electricity', value: 1000000, confidence: 'high' }]),
      CONFIG
    );
    expect(draft.answer).toContain('1,000,000');
    expect(draft.answer).toContain('kWh');
    expect(draft.confidenceSource).toBe('provided');
  });

  it('generates a fallback when no template matches', () => {
    const generator = createAnswerGenerator({ templates: [] });
    const draft = generator.generateAnswerDraft(
      q('What is your water usage?'),
      match('water', ['water_use']),
      ctx([{ domain: 'water', field: 'waterM3', label: 'Water Usage', value: 5000, unit: 'm³', confidence: 'high' }]),
      CONFIG
    );
    expect(draft.answer).toContain('Water Usage');
    expect(draft.answer).toContain('5000');
  });

  it('returns unknown when no data is available', () => {
    const generator = createAnswerGenerator({ templates: [] });
    const draft = generator.generateAnswerDraft(
      q('What is your policy?'),
      match(null as unknown as string, [], 'none'),
      ctx(),
      CONFIG
    );
    expect(draft.confidenceSource).toBe('unknown');
    expect(draft.answer).toContain('Unknown');
  });

  it('marks estimated when calculated values are present', () => {
    const generator = createAnswerGenerator({ templates: [] });
    const context: DataContext = {
      company: [],
      operational: [],
      calculated: [{ domain: 'emissions', field: 'estimated_scope2', label: 'Estimated Scope 2', value: 500, confidence: 'medium' }],
      metadata: { sitesIncluded: [], dataGaps: [] },
    };
    const draft = generator.generateAnswerDraft(
      q('What are scope 2 emissions?'),
      match('emissions', ['scope_2']),
      context,
      CONFIG
    );
    expect(draft.isEstimate).toBe(true);
    expect(draft.confidenceSource).toBe('estimated');
  });

  it('reports data gaps', () => {
    const generator = createAnswerGenerator({ templates: [] });
    const context = ctx(
      [{ domain: 'energy', field: 'electricityKwh', label: 'Electricity', value: 1000, confidence: 'high' }],
      { dataGaps: ['Missing renewable data'] }
    );
    const draft = generator.generateAnswerDraft(
      q('Energy overview?'),
      match('energy', ['electricity']),
      context,
      CONFIG
    );
    expect(draft.hasDataGaps).toBe(true);
    expect(draft.limitations).toContain('Missing renewable data');
  });

  it('applies scrub rules to generated answers', () => {
    const generator = createAnswerGenerator({
      templates: [{
        domains: ['test'],
        topics: ['test'],
        generate: () => 'I think this is great perhaps.',
      }],
      scrubRules: [
        { pattern: /\bI think\b/gi, replacement: '' },
        { pattern: /\bperhaps\b/gi, replacement: '' },
      ],
    });
    const draft = generator.generateAnswerDraft(
      q('Test?'),
      match('test', ['test']),
      ctx([{ domain: 'test', field: 'test', label: 'Test', value: 1, confidence: 'high' }]),
      CONFIG
    );
    expect(draft.answer).not.toContain('I think');
    expect(draft.answer).not.toContain('perhaps');
  });

  it('tracks metric keys used', () => {
    const generator = createAnswerGenerator({
      templates: [],
      fieldToMetricKey: { electricityKwh: 'E.1.1' },
    });
    const draft = generator.generateAnswerDraft(
      q('Electricity?'),
      match('energy', ['electricity']),
      ctx([{ domain: 'energy', field: 'electricityKwh', label: 'Electricity', value: 5000, unit: 'kWh', confidence: 'high' }]),
      CONFIG
    );
    expect(draft.metricKeysUsed).toContain('E.1.1');
  });
});

describe('generateAnswerDrafts', () => {
  it('generates multiple drafts at once', () => {
    const generator = createAnswerGenerator({ templates: [] });
    const drafts = generator.generateAnswerDrafts(
      [q('Q1?', { id: 'q1' }), q('Q2?', { id: 'q2' })],
      [match('energy', ['electricity']), match('water', ['water_use'])],
      [
        ctx([{ domain: 'energy', field: 'kwh', label: 'kWh', value: 100, confidence: 'high' }]),
        ctx([{ domain: 'water', field: 'waterM3', label: 'Water', value: 200, confidence: 'high' }]),
      ],
      CONFIG
    );
    expect(drafts).toHaveLength(2);
    expect(drafts[0].questionId).toBe('q1');
    expect(drafts[1].questionId).toBe('q2');
  });
});
