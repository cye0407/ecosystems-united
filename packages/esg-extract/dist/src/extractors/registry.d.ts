import type { ExtractionResult, ExtractionConfig } from '../types';
/**
 * Process a document buffer (PDF) and extract ESG data.
 * Auto-detects document type and routes to the right extractor.
 */
export declare function extractFromPdf(buffer: Buffer, config?: ExtractionConfig): Promise<ExtractionResult>;
/**
 * Process raw text and extract ESG data.
 * Auto-detects document type and routes to the right extractor.
 */
export declare function extractFromText(text: string, config?: ExtractionConfig): ExtractionResult;
