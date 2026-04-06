import { describe, it, expect } from 'vitest';
import { createClassifier } from '../questionClassifier';
import type { SignalRule } from '../../types';

// ============================================
// Sample Signal Rules (simplified ESG-like)
// ============================================

const SAMPLE_SIGNALS: SignalRule[] = [
  {
    type: 'POLICY',
    patterns: [/\bpolicy\b/i, /\bcommitment\b/i, /\bgovernance\b/i],
    keywords: ['policy', 'commitment', 'board', 'oversight'],
    weight: 10,
  },
  {
    type: 'MEASURE',
    patterns: [/\bprocess\b/i, /\bprocedure\b/i, /\bimplemented\b/i],
    keywords: ['process', 'procedure', 'training', 'program'],
    weight: 10,
  },
  {
    type: 'KPI',
    patterns: [/\bhow much\b/i, /\bwhat is the total\b/i, /\bpercentage\b/i],
    keywords: ['metric', 'data', 'total', 'rate', 'kwh', 'tonnes'],
    weight: 10,
  },
];

const QUESTION_TYPES = ['POLICY', 'MEASURE', 'KPI'];

// ============================================
// Tests
// ============================================

describe('createClassifier', () => {
  it('returns a classifier instance with all methods', () => {
    const classifier = createClassifier(SAMPLE_SIGNALS, QUESTION_TYPES);
    expect(classifier.classifyQuestion).toBeDefined();
    expect(classifier.classifyQuestions).toBeDefined();
    expect(classifier.getClassificationStats).toBeDefined();
  });
});

describe('classifyQuestion', () => {
  const classifier = createClassifier(SAMPLE_SIGNALS, QUESTION_TYPES, 'MEASURE');

  it('classifies a policy question', () => {
    const result = classifier.classifyQuestion('q1', 'What is your company policy on environmental management?');
    expect(result.questionId).toBe('q1');
    expect(result.questionType).toBe('POLICY');
    expect(result.matchedSignals.length).toBeGreaterThan(0);
  });

  it('classifies a KPI question', () => {
    const result = classifier.classifyQuestion('q2', 'How much electricity did you consume in total kWh?');
    expect(result.questionType).toBe('KPI');
  });

  it('classifies a measure question', () => {
    const result = classifier.classifyQuestion('q3', 'Describe the training procedures implemented for staff.');
    expect(result.questionType).toBe('MEASURE');
  });

  it('falls back to default type when no signals match', () => {
    const result = classifier.classifyQuestion('q4', 'General company information');
    expect(result.questionType).toBe('MEASURE');
  });

  it('uses category text in classification when provided', () => {
    const result = classifier.classifyQuestion('q5', 'Describe your approach', 'Governance & Policy');
    expect(result.questionType).toBe('POLICY');
  });

  it('returns confidence levels', () => {
    const result = classifier.classifyQuestion('q6', 'What is your policy and commitment to board oversight and governance?');
    expect(['high', 'medium', 'low']).toContain(result.confidence);
  });
});

describe('classifyQuestions', () => {
  const classifier = createClassifier(SAMPLE_SIGNALS, QUESTION_TYPES);

  it('classifies multiple questions', () => {
    const results = classifier.classifyQuestions([
      { id: 'q1', text: 'What is your policy on emissions?' },
      { id: 'q2', text: 'How much total energy in kWh?' },
      { id: 'q3', text: 'Describe the training process implemented.' },
    ]);
    expect(results).toHaveLength(3);
    expect(results[0].questionType).toBe('POLICY');
    expect(results[1].questionType).toBe('KPI');
    expect(results[2].questionType).toBe('MEASURE');
  });
});

describe('getClassificationStats', () => {
  const classifier = createClassifier(SAMPLE_SIGNALS, QUESTION_TYPES);

  it('computes stats from classification results', () => {
    const results = classifier.classifyQuestions([
      { id: 'q1', text: 'Policy on governance and board oversight commitment' },
      { id: 'q2', text: 'Total kWh percentage and rate metric' },
      { id: 'q3', text: 'Process and procedure training program' },
    ]);
    const stats = classifier.getClassificationStats(results);
    expect(stats.byType.POLICY).toBe(1);
    expect(stats.byType.KPI).toBe(1);
    expect(stats.byType.MEASURE).toBe(1);
  });
});
