// ============================================
// PDF Parser — extract raw text from PDF files
// ============================================
import pdf from 'pdf-parse';
/**
 * Extract text content from a PDF buffer.
 * Returns structured per-page text for field extraction.
 */
export async function parsePdf(buffer) {
    const data = await pdf(buffer);
    // pdf-parse returns all text concatenated; split by form feeds for pages
    const rawPages = data.text.split('\f').filter((p) => p.trim().length > 0);
    const pages = rawPages.map((text, i) => ({
        pageNumber: i + 1,
        text: text.trim(),
    }));
    return {
        pages,
        fullText: data.text,
        pageCount: data.numpages,
        metadata: {
            title: data.info?.Title || undefined,
            author: data.info?.Author || undefined,
            creationDate: data.info?.CreationDate || undefined,
        },
    };
}
//# sourceMappingURL=pdf.js.map