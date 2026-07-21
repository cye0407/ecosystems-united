import type { ExtractedField } from '../types';
/**
 * Run generic pattern extraction across a text body.
 * Returns all matched fields with confidence scores.
 */
export declare function extractWithGenericPatterns(text: string, page?: number): ExtractedField[];
