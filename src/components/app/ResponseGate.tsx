"use client";

import {
  CreditCard,
  Sparkle,
  Upload,
  ListChecks,
  Globe,
  Lightning,
} from "@phosphor-icons/react";
import { Button } from "@/components/ui";
import { useResponseCredits } from "@/hooks/useResponseCredits";

export default function ResponseGate() {
  const { isFirstPurchase, loading, error, startCheckout } =
    useResponseCredits();

  if (loading) {
    return (
      <div className="max-w-xl mx-auto py-12 text-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-forest-700 mx-auto" />
      </div>
    );
  }

  const features = [
    {
      icon: Upload,
      text: "Upload any questionnaire — Excel, CSV, or Word",
    },
    {
      icon: Sparkle,
      text: "Answers generated from your actual tracked data",
    },
    {
      icon: ListChecks,
      text: "Supports EcoVadis, CDP, CSRD/VSME, GlobalG.A.P., and custom formats",
    },
    {
      icon: Globe,
      text: "Review, edit, and export as CSV",
    },
  ];

  return (
    <div className="max-w-xl mx-auto py-12">
      <div className="bg-white border border-gray-200 rounded-2xl p-8">
        <div className="text-center space-y-3 mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-forest-700 mb-2">
            <Lightning className="w-8 h-8 text-white" weight="duotone" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900">
            {isFirstPurchase
              ? "Unlock the Response Generator"
              : "Buy Another Response"}
          </h2>
          <p className="text-gray-500 max-w-md mx-auto">
            {isFirstPurchase
              ? "Upload a buyer questionnaire and get professional draft answers from your tracked data."
              : "Generate responses for another buyer questionnaire using your latest data."}
          </p>
        </div>

        {/* Feature list — only show on first purchase */}
        {isFirstPurchase && (
          <div className="space-y-3 mb-8">
            {features.map((f, i) => (
              <div key={i} className="flex items-start gap-3">
                <f.icon
                  className="w-5 h-5 text-forest-700 mt-0.5 flex-shrink-0"
                  weight="duotone"
                />
                <span className="text-sm text-gray-600">{f.text}</span>
              </div>
            ))}
          </div>
        )}

        {/* Price */}
        <div className="text-center mb-6">
          <span className="text-4xl font-bold text-gray-900">
            €{isFirstPurchase ? "39" : "19"}
          </span>
          <span className="text-gray-500 ml-2">one-time</span>
        </div>

        {/* Buy button */}
        <Button
          onClick={startCheckout}
          className="w-full h-12 text-base font-medium"
        >
          <CreditCard className="w-5 h-5 mr-2" weight="duotone" />
          {isFirstPurchase
            ? "Get Response Generator — €39"
            : "Buy Additional Response — €19"}
        </Button>

        {!isFirstPurchase && (
          <p className="text-xs text-gray-400 text-center mt-3">
            Each purchase unlocks one questionnaire response.
          </p>
        )}

        {error && (
          <p className="text-sm text-red-600 text-center mt-4">{error}</p>
        )}
      </div>
    </div>
  );
}
