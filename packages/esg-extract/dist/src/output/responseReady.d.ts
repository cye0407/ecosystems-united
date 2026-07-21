import type { ExtractionResult, ResponseReadyData } from '../types';
/**
 * Convert extraction results to ResponseReady flat data format.
 * Returns a partial object — only fields that were extracted.
 */
export declare function toResponseReadyData(result: ExtractionResult): ResponseReadyData;
