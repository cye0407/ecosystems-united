import { describe, expect, it } from 'vitest';
import { isDottedGmail, looksLikeBot } from './bot-check';

const human = { honeypot: '', startedAt: 0, now: 10_000 };

describe('isDottedGmail', () => {
  it('flags the bot pattern', () => {
    expect(isDottedGmail('e.d.ik.i.l.i.go@gmail.com')).toBe(true);
    expect(isDottedGmail('a.b.c.d@googlemail.com')).toBe(true);
  });

  it('allows normal addresses', () => {
    expect(isDottedGmail('jane.doe@gmail.com')).toBe(false);
    expect(isDottedGmail('j.a.doe@gmail.com')).toBe(false);
    expect(isDottedGmail('first.middle.last.name@farm.co.uk')).toBe(false);
    expect(isDottedGmail('not-an-email')).toBe(false);
  });
});

describe('looksLikeBot', () => {
  it('passes a normal signup', () => {
    expect(looksLikeBot({ ...human, email: 'jane.doe@gmail.com' })).toBe(false);
  });

  it('catches a filled honeypot', () => {
    expect(looksLikeBot({ ...human, email: 'jane@farm.com', honeypot: 'http://spam' })).toBe(true);
  });

  it('catches an instant submit', () => {
    expect(looksLikeBot({ ...human, email: 'jane@farm.com', now: 800 })).toBe(true);
  });

  it('catches dotted Gmail', () => {
    expect(looksLikeBot({ ...human, email: 'x.e.n.o.p@gmail.com' })).toBe(true);
  });
});
