import { describe, it, expect } from 'vitest';
import { parseCSVLine, parseCSV } from '../configLoader';

// ============================================
// parseCSVLine
// ============================================

describe('parseCSVLine', () => {
  it('splits a simple comma-separated line', () => {
    expect(parseCSVLine('a,b,c')).toEqual(['a', 'b', 'c']);
  });

  it('handles quoted fields', () => {
    expect(parseCSVLine('"hello, world",b,c')).toEqual(['hello, world', 'b', 'c']);
  });

  it('handles escaped quotes within quoted fields', () => {
    expect(parseCSVLine('"He said ""hello""",b')).toEqual(['He said "hello"', 'b']);
  });

  it('trims whitespace from values', () => {
    expect(parseCSVLine(' a , b , c ')).toEqual(['a', 'b', 'c']);
  });

  it('handles empty fields', () => {
    expect(parseCSVLine('a,,c')).toEqual(['a', '', 'c']);
  });

  it('handles single field', () => {
    expect(parseCSVLine('just one')).toEqual(['just one']);
  });
});

// ============================================
// parseCSV
// ============================================

describe('parseCSV', () => {
  it('parses CSV text into array of objects', () => {
    const text = 'name,age\nAlice,30\nBob,25';
    const rows = parseCSV(text);
    expect(rows).toHaveLength(2);
    expect(rows[0]).toEqual({ name: 'Alice', age: '30' });
    expect(rows[1]).toEqual({ name: 'Bob', age: '25' });
  });

  it('handles Windows line endings', () => {
    const text = 'name,age\r\nAlice,30\r\n';
    const rows = parseCSV(text);
    expect(rows).toHaveLength(1);
    expect(rows[0].name).toBe('Alice');
  });

  it('returns empty array for header-only CSV', () => {
    expect(parseCSV('name,age')).toHaveLength(0);
  });

  it('returns empty array for empty input', () => {
    expect(parseCSV('')).toHaveLength(0);
  });

  it('handles missing columns gracefully', () => {
    const text = 'a,b,c\n1,2';
    const rows = parseCSV(text);
    expect(rows[0]).toEqual({ a: '1', b: '2', c: '' });
  });
});
