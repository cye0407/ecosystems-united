import type { ExtractedField } from '../types';
/**
 * Upgrade or downgrade confidence based on simple review-oriented signals.
 * This stays intentionally lightweight for the paid reviewed-extraction workflow.
 */
export declare function adjustConfidence(fields: ExtractedField[]): ExtractedField[];
