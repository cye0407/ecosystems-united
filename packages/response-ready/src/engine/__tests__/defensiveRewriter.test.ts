import { describe, it, expect } from 'vitest';
import { createRewriter } from '../defensiveRewriter';
import type { ScrubRule } from '../../types';

// ============================================
// Sample Scrub Rules
// ============================================

const SAMPLE_RULES: ScrubRule[] = [
  { pattern: /\bI think\b/gi, replacement: '' },
  { pattern: /\bperhaps\b/gi, replacement: '' },
  { pattern: /\bas an AI\b/gi, replacement: '' },
  { pattern: /\bplease note that\b/gi, replacement: '' },
  { pattern: /\bit.?s important to note\b/gi, replacement: '' },
  { pattern: 'basically', replacement: '' },
];

// ============================================
// Tests
// ============================================

describe('createRewriter', () => {
  it('returns a rewriter instance with all methods', () => {
    const rewriter = createRewriter(SAMPLE_RULES);
    expect(rewriter.rewriteAnswer).toBeDefined();
    expect(rewriter.rewriteAnswerBatch).toBeDefined();
  });
});

describe('rewriteAnswer', () => {
  const rewriter = createRewriter(SAMPLE_RULES);

  it('removes AI-ism phrases', () => {
    const result = rewriter.rewriteAnswer('I think our company uses renewable energy.');
    expect(result).not.toContain('I think');
    expect(result).toContain('company uses renewable energy');
  });

  it('removes multiple scrub patterns', () => {
    const result = rewriter.rewriteAnswer('Perhaps, as an AI, I think this is relevant.');
    expect(result).not.toContain('Perhaps');
    expect(result).not.toContain('as an AI');
    expect(result).not.toContain('I think');
  });

  it('handles string pattern type', () => {
    const result = rewriter.rewriteAnswer('Our approach is basically to reduce emissions.');
    expect(result).not.toContain('basically');
  });

  it('cleans up double spaces after removal', () => {
    const result = rewriter.rewriteAnswer('I think the approach works well.');
    expect(result).not.toContain('  ');
  });

  it('capitalizes first character', () => {
    const rewriter2 = createRewriter([{ pattern: /^Our /i, replacement: 'our ' }]);
    const result = rewriter2.rewriteAnswer('Our company does well');
    expect(result[0]).toBe(result[0].toUpperCase());
  });

  it('handles empty rules gracefully', () => {
    const emptyRewriter = createRewriter([]);
    const result = emptyRewriter.rewriteAnswer('Some text');
    expect(result).toBe('Some text');
  });

  it('cleans up double periods', () => {
    const rw = createRewriter([{ pattern: /end\./gi, replacement: 'end.' }]);
    const input = 'This is the end.. More text.';
    const result = rw.rewriteAnswer(input);
    expect(result).not.toContain('..');
  });
});

describe('rewriteAnswerBatch', () => {
  const rewriter = createRewriter(SAMPLE_RULES);

  it('applies scrub rules to all answers', () => {
    const results = rewriter.rewriteAnswerBatch([
      'I think we do well.',
      'Perhaps we can improve.',
    ]);
    expect(results[0]).not.toContain('I think');
    expect(results[1]).not.toContain('Perhaps');
  });

  it('applies variety checking for batches of 4+ answers', () => {
    const answers = [
      'Our organization reduces emissions by 20%.',
      'Our organization tracks water usage monthly.',
      'Our organization manages waste effectively.',
      'Our organization trains employees regularly.',
    ];
    const emptyRewriter = createRewriter([]);
    const results = emptyRewriter.rewriteAnswerBatch(answers);
    expect(results).toHaveLength(4);
    // At least one opener should be varied to avoid repetition
    const openers = results.map(a => a.slice(0, 20));
    const uniqueOpeners = new Set(openers);
    expect(uniqueOpeners.size).toBeGreaterThanOrEqual(2);
  });

  it('does not apply variety to short batches', () => {
    const answers = ['One answer.', 'Two answers.'];
    const emptyRewriter = createRewriter([]);
    const results = emptyRewriter.rewriteAnswerBatch(answers);
    expect(results).toEqual(answers);
  });
});
