import { NextRequest, NextResponse } from "next/server";
import { extractFromText, extractFromPdf } from "esg-extract";

export const runtime = "nodejs";

/**
 * Document extraction endpoint (Phase 1 — rules-based, no LLM).
 *
 * Accepts either raw text (JSON body) or an uploaded file (multipart form).
 * Runs esg-extract's rules extractors and returns an ExtractionResult the
 * client maps to tracker domains in a review step. Phase 2 will inject an LLM
 * path here for un-templated documents.
 */
export async function POST(req: NextRequest) {
  try {
    const contentType = req.headers.get("content-type") || "";

    // Text path (pasted bill text) — pure rules, no native deps.
    if (contentType.includes("application/json")) {
      const { text } = await req.json();
      if (!text || typeof text !== "string" || !text.trim()) {
        return NextResponse.json(
          { error: "No text provided." },
          { status: 400 },
        );
      }
      return NextResponse.json(extractFromText(text));
    }

    // File path (PDF upload) — parser is lazy-loaded inside esg-extract.
    if (contentType.includes("multipart/form-data")) {
      const form = await req.formData();
      const file = form.get("file");
      if (!(file instanceof File)) {
        return NextResponse.json(
          { error: "No file uploaded." },
          { status: 400 },
        );
      }
      const name = file.name.toLowerCase();
      const buffer = Buffer.from(await file.arrayBuffer());

      if (name.endsWith(".pdf")) {
        return NextResponse.json(await extractFromPdf(buffer));
      }
      if (name.endsWith(".txt") || name.endsWith(".csv")) {
        return NextResponse.json(extractFromText(buffer.toString("utf-8")));
      }
      return NextResponse.json(
        {
          error:
            "Unsupported file type. Upload a PDF or text file, or paste the text. Image/scan extraction is coming with the AI extractor.",
        },
        { status: 415 },
      );
    }

    return NextResponse.json(
      { error: "Send JSON { text } or a multipart file upload." },
      { status: 400 },
    );
  } catch (err) {
    return NextResponse.json(
      { error: err instanceof Error ? err.message : "Extraction failed." },
      { status: 500 },
    );
  }
}
