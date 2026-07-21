import type { ExtractionResult, PassportDataRecord } from '../types';
/**
 * Convert extraction results to ESG Passport dataRecord format.
 * Returns a partial record — only fields that were extracted.
 */
export declare function toPassportRecord(result: ExtractionResult): PassportDataRecord;
