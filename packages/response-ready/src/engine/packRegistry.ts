// ============================================
// ResponseReady — Pack Registry & Auto-Selection
// ============================================
// Maps detected frameworks to domain packs and provides
// auto-selection logic based on parsed questionnaire content.

import type { DomainPack } from '../types/domain-pack';
import type { ParseResult } from '../types/engine';

// ============================================
// Pack Category
// ============================================
// Frameworks that share a domain pack are grouped into a category.
// e.g. EcoVadis, CDP, CSRD, GRI all route to the 'esg' pack.

export interface PackRegistryEntry {
  /** The domain pack instance */
  pack: DomainPack<unknown, unknown>;
  /** Frameworks this pack handles */
  frameworks: string[];
  /** Human-readable label for UI */
  label: string;
  /** Short description for UI */
  description: string;
}

export interface PackDetectionResult {
  /** The recommended pack entry, or null if no match */
  entry: PackRegistryEntry | null;
  /** The detected framework string (from parser) */
  detectedFramework: string | undefined;
  /** How confident we are in the auto-selection */
  confidence: 'high' | 'low';
  /** Reason for the selection */
  reason: string;
}

// ============================================
// Registry
// ============================================

const entries: PackRegistryEntry[] = [];

/**
 * Register a domain pack with the frameworks it handles.
 */
export function registerPack(entry: PackRegistryEntry): void {
  entries.push(entry);
}

/**
 * Get all registered packs (for building UI dropdowns, etc.)
 */
export function getRegisteredPacks(): readonly PackRegistryEntry[] {
  return entries;
}

/**
 * Get a pack by its name.
 */
export function getPackByName(name: string): PackRegistryEntry | undefined {
  return entries.find(e => e.pack.name === name);
}

/**
 * Auto-detect which pack to use based on a ParseResult.
 *
 * Logic:
 * 1. If the parser detected a specific framework, find the pack that handles it → high confidence.
 * 2. If no framework detected, try keyword-scoring each pack's rules against the questions → low confidence.
 * 3. If still no match, return null so the UI can ask the user.
 */
export function detectPack(parseResult: ParseResult): PackDetectionResult {
  const { detectedFramework } = parseResult.metadata;

  // --- Step 1: Framework match ---
  if (detectedFramework) {
    for (const entry of entries) {
      if (entry.frameworks.includes(detectedFramework)) {
        return {
          entry,
          detectedFramework,
          confidence: 'high',
          reason: `Detected ${detectedFramework} framework — using ${entry.label}.`,
        };
      }
    }
    // Framework detected but no pack registered for it — still useful info
    return {
      entry: null,
      detectedFramework,
      confidence: 'low',
      reason: `Detected ${detectedFramework} framework but no matching pack is registered.`,
    };
  }

  // --- Step 2: Keyword scoring fallback ---
  if (parseResult.questions.length > 0 && entries.length > 0) {
    const allText = parseResult.questions.map(q => q.text.toLowerCase()).join(' ');
    let bestEntry: PackRegistryEntry | null = null;
    let bestScore = 0;

    for (const entry of entries) {
      let score = 0;
      for (const rule of entry.pack.keywordRules) {
        for (const kw of rule.keywords) {
          if (allText.includes(kw.toLowerCase())) {
            score += rule.weight;
          }
        }
      }
      if (score > bestScore) {
        bestScore = score;
        bestEntry = entry;
      }
    }

    // Require a minimum score threshold to avoid false positives
    if (bestEntry && bestScore >= 30) {
      return {
        entry: bestEntry,
        detectedFramework: undefined,
        confidence: 'low',
        reason: `No specific framework detected. Best keyword match: ${bestEntry.label} (score: ${bestScore}). Please confirm.`,
      };
    }
  }

  // --- Step 3: No match ---
  return {
    entry: null,
    detectedFramework: undefined,
    confidence: 'low',
    reason: 'Could not determine the questionnaire type. Please select manually.',
  };
}

/**
 * Clear registry (useful for testing).
 */
export function clearRegistry(): void {
  entries.length = 0;
}
