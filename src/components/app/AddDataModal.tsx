"use client";

import { useState } from "react";
import { X, Sparkle, Upload, FileText, Check, WarningCircle } from "@phosphor-icons/react";
import { Button, Select } from "@/components/ui";
import { useAppStore } from "@/stores/appStore";
import {
  mapResult,
  type ExtractionResult,
  type MappedRecord,
} from "@/lib/extract/mapResult";

const confidenceStyle: Record<string, string> = {
  high: "bg-green-100 text-green-700",
  medium: "bg-amber-100 text-amber-700",
  low: "bg-gray-100 text-gray-600",
};

export default function AddDataModal({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const sites = useAppStore((s) => s.sites);
  const [tab, setTab] = useState<"paste" | "upload">("paste");
  const [text, setText] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<ExtractionResult | null>(null);
  const [mapped, setMapped] = useState<MappedRecord | null>(null);
  const [siteId, setSiteId] = useState(sites[0]?.id ?? "");
  const [period, setPeriod] = useState("");
  const [saved, setSaved] = useState(false);

  if (!open) return null;

  async function extract() {
    setLoading(true);
    setError(null);
    try {
      let res: Response;
      if (tab === "upload" && file) {
        const fd = new FormData();
        fd.append("file", file);
        res = await fetch("/api/extract", { method: "POST", body: fd });
      } else {
        res = await fetch("/api/extract", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ text }),
        });
      }
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Extraction failed.");
      setResult(data as ExtractionResult);
      setMapped(mapResult(data as ExtractionResult));
      setPeriod((data.period as string) || new Date().toISOString().slice(0, 7));
      if (!siteId && sites[0]) setSiteId(sites[0].id);
    } catch (e) {
      setError(e instanceof Error ? e.message : "Extraction failed.");
    } finally {
      setLoading(false);
    }
  }

  function save() {
    if (mapped && siteId && period) {
      mapped.commit(siteId, period);
      setSaved(true);
    }
  }

  function reset() {
    setText("");
    setFile(null);
    setResult(null);
    setMapped(null);
    setError(null);
    setSaved(false);
  }

  const canExtract = tab === "upload" ? !!file : text.trim().length > 20;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-lg max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between p-5 border-b border-gray-100">
          <div className="flex items-center gap-2">
            <Sparkle className="w-5 h-5 text-forest-700" weight="duotone" />
            <h2 className="font-semibold text-gray-900">Add data from a document</h2>
          </div>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600" aria-label="Close">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-5">
          {/* Saved */}
          {saved ? (
            <div className="text-center py-6">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-green-100 mb-3">
                <Check className="w-7 h-7 text-green-700" weight="bold" />
              </div>
              <p className="font-semibold text-gray-900 mb-1">Added to your tracker</p>
              <p className="text-sm text-gray-500 mb-6">
                {mapped?.domainLabel} · {mapped?.detail}
              </p>
              <div className="flex gap-3 justify-center">
                <Button variant="secondary" onClick={reset}>Add another</Button>
                <Button onClick={onClose}>Done</Button>
              </div>
            </div>
          ) : result ? (
            /* Review */
            <div className="space-y-4">
              <div className="text-xs text-gray-500">
                Detected: <span className="font-medium text-gray-700">{result.documentType.replace(/_/g, " ")}</span>
                {result.provider ? ` · ${result.provider}` : ""}
              </div>

              {mapped ? (
                <>
                  <div className="rounded-xl border border-gray-200 p-4">
                    <div className="flex items-center justify-between">
                      <span className="font-medium text-gray-900">{mapped.domainLabel}</span>
                      <span className={`text-xs px-2 py-0.5 rounded ${confidenceStyle[mapped.confidence]}`}>
                        {mapped.confidence} confidence
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 mt-1">{mapped.detail}</p>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="text-xs font-medium text-gray-500">Site</label>
                      <Select
                        value={siteId}
                        onChange={(e) => setSiteId(e.target.value)}
                        options={
                          sites.length
                            ? sites.map((s) => ({ value: s.id, label: s.siteName }))
                            : [{ value: "", label: "Add a site first" }]
                        }
                      />
                    </div>
                    <div>
                      <label className="text-xs font-medium text-gray-500">Period</label>
                      <input
                        value={period}
                        onChange={(e) => setPeriod(e.target.value)}
                        placeholder="YYYY-MM"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:border-forest-700"
                      />
                    </div>
                  </div>

                  <p className="text-xs text-gray-400">
                    Review before saving — extracted numbers are suggestions, not
                    gospel. You can refine everything in the domain page after.
                  </p>

                  <div className="flex gap-3 justify-end pt-2">
                    <Button variant="secondary" onClick={reset}>Back</Button>
                    <Button onClick={save} disabled={!siteId || !period}>
                      Add to tracker
                    </Button>
                  </div>
                </>
              ) : (
                <div className="rounded-xl border border-amber-200 bg-amber-50 p-4">
                  <div className="flex items-start gap-2">
                    <WarningCircle className="w-5 h-5 text-amber-600 shrink-0" weight="duotone" />
                    <div>
                      <p className="text-sm font-medium text-amber-800">
                        Couldn&apos;t auto-map this document
                      </p>
                      <p className="text-sm text-amber-700 mt-1">
                        We read {result.fields.length} field
                        {result.fields.length === 1 ? "" : "s"} but can&apos;t place
                        this type yet. Enter it in the matching domain page, or try
                        an electricity, water, fuel, waste, or payroll document.
                      </p>
                    </div>
                  </div>
                  <div className="flex justify-end mt-3">
                    <Button variant="secondary" onClick={reset}>Try another</Button>
                  </div>
                </div>
              )}
            </div>
          ) : (
            /* Input */
            <div className="space-y-4">
              <div className="flex gap-2">
                <button
                  onClick={() => setTab("paste")}
                  className={`flex-1 py-2 rounded-lg text-sm font-medium flex items-center justify-center gap-2 ${tab === "paste" ? "bg-forest-700 text-white" : "bg-gray-100 text-gray-600"}`}
                >
                  <FileText className="w-4 h-4" /> Paste text
                </button>
                <button
                  onClick={() => setTab("upload")}
                  className={`flex-1 py-2 rounded-lg text-sm font-medium flex items-center justify-center gap-2 ${tab === "upload" ? "bg-forest-700 text-white" : "bg-gray-100 text-gray-600"}`}
                >
                  <Upload className="w-4 h-4" /> Upload PDF
                </button>
              </div>

              {tab === "paste" ? (
                <textarea
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                  rows={7}
                  placeholder="Paste the text of a bill, invoice, waste manifest, or payroll summary…"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:border-forest-700"
                />
              ) : (
                <label className="block border-2 border-dashed border-gray-300 rounded-lg p-6 text-center cursor-pointer hover:border-forest-700">
                  <input
                    type="file"
                    accept=".pdf,.txt,.csv"
                    className="hidden"
                    onChange={(e) => setFile(e.target.files?.[0] ?? null)}
                  />
                  <Upload className="w-6 h-6 text-gray-400 mx-auto mb-2" />
                  <p className="text-sm text-gray-600">{file ? file.name : "Choose a PDF or text file"}</p>
                </label>
              )}

              {error && <p className="text-sm text-red-600">{error}</p>}

              <div className="flex items-center justify-between">
                <p className="text-xs text-gray-400">
                  Rules-based extraction. Scanned images &amp; AI extraction coming soon.
                </p>
                <Button onClick={extract} disabled={!canExtract || loading}>
                  {loading ? "Reading…" : "Extract"}
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
