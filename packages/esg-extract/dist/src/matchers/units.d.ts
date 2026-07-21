/** Normalize a number string from European or US format to a JS number */
export declare function parseNumber(raw: string): number | null;
/** Detect unit from text near a number */
export declare function detectUnit(text: string): string | null;
/** Convert a value from one unit to canonical */
export declare function convertToCanonical(value: number, fromUnit: string, toUnit: string): number;
