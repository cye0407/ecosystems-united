export interface ParsedPage {
    pageNumber: number;
    text: string;
}
export interface ParsedDocument {
    pages: ParsedPage[];
    fullText: string;
    pageCount: number;
    metadata: {
        title?: string;
        author?: string;
        creationDate?: string;
    };
}
/**
 * Extract text content from a PDF buffer.
 * Returns structured per-page text for field extraction.
 */
export declare function parsePdf(buffer: Buffer): Promise<ParsedDocument>;
