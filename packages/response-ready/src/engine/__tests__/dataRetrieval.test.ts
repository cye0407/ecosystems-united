import { describe, it, expect } from 'vitest';
import { addIfPresent, deduplicatePoints, emptyDataContext } from '../dataRetrieval';
import type { RetrievedDataPoint, DataContext } from '../../types';

// ============================================
// addIfPresent
// ============================================

describe('addIfPresent', () => {
  it('adds a data point when value is present', () => {
    const points: RetrievedDataPoint[] = [];
    addIfPresent(points, 'energy', 'electricityKwh', 'Electricity', 1000000, { unit: 'kWh' });
    expect(points).toHaveLength(1);
    expect(points[0].field).toBe('electricityKwh');
    expect(points[0].value).toBe(1000000);
    expect(points[0].unit).toBe('kWh');
  });

  it('skips when value is undefined', () => {
    const points: RetrievedDataPoint[] = [];
    addIfPresent(points, 'energy', 'electricityKwh', 'Electricity', undefined);
    expect(points).toHaveLength(0);
  });

  it('skips when value is empty string', () => {
    const points: RetrievedDataPoint[] = [];
    addIfPresent(points, 'energy', 'electricityKwh', 'Electricity', '');
    expect(points).toHaveLength(0);
  });

  it('skips when value is zero', () => {
    const points: RetrievedDataPoint[] = [];
    addIfPresent(points, 'energy', 'electricityKwh', 'Electricity', 0);
    expect(points).toHaveLength(0);
  });

  it('adds string values', () => {
    const points: RetrievedDataPoint[] = [];
    addIfPresent(points, 'company', 'certifications', 'Certifications', 'ISO 14001');
    expect(points).toHaveLength(1);
    expect(points[0].value).toBe('ISO 14001');
  });

  it('defaults to high confidence when not specified', () => {
    const points: RetrievedDataPoint[] = [];
    addIfPresent(points, 'energy', 'electricityKwh', 'Electricity', 500);
    expect(points[0].confidence).toBe('high');
  });

  it('accepts custom confidence', () => {
    const points: RetrievedDataPoint[] = [];
    addIfPresent(points, 'energy', 'electricityKwh', 'Electricity', 500, { confidence: 'low' });
    expect(points[0].confidence).toBe('low');
  });
});

// ============================================
// deduplicatePoints
// ============================================

describe('deduplicatePoints', () => {
  it('removes duplicate points by domain+field', () => {
    const points: RetrievedDataPoint[] = [
      { domain: 'energy', field: 'electricityKwh', label: 'Electricity', value: 1000, confidence: 'high' },
      { domain: 'energy', field: 'electricityKwh', label: 'Electricity (duplicate)', value: 2000, confidence: 'low' },
      { domain: 'energy', field: 'renewablePercent', label: 'Renewable %', value: 40, confidence: 'high' },
    ];
    const result = deduplicatePoints(points);
    expect(result).toHaveLength(2);
    expect(result[0].value).toBe(1000); // Keeps first occurrence
  });

  it('handles empty array', () => {
    expect(deduplicatePoints([])).toHaveLength(0);
  });

  it('preserves unique points', () => {
    const points: RetrievedDataPoint[] = [
      { domain: 'energy', field: 'electricityKwh', label: 'Electricity', value: 1000, confidence: 'high' },
      { domain: 'water', field: 'waterM3', label: 'Water', value: 500, confidence: 'high' },
    ];
    expect(deduplicatePoints(points)).toHaveLength(2);
  });
});

// ============================================
// emptyDataContext
// ============================================

describe('emptyDataContext', () => {
  it('creates an empty context with default metadata', () => {
    const ctx = emptyDataContext();
    expect(ctx.company).toHaveLength(0);
    expect(ctx.operational).toHaveLength(0);
    expect(ctx.calculated).toHaveLength(0);
    expect(ctx.metadata.sitesIncluded).toHaveLength(0);
    expect(ctx.metadata.dataGaps).toHaveLength(0);
  });

  it('accepts partial metadata overrides', () => {
    const ctx = emptyDataContext({ reportingPeriod: '2024', dataGaps: ['Missing emissions data'] });
    expect(ctx.metadata.reportingPeriod).toBe('2024');
    expect(ctx.metadata.dataGaps).toContain('Missing emissions data');
    expect(ctx.metadata.sitesIncluded).toHaveLength(0);
  });
});
