import { Card, CardTitle, Button } from './ui';
import type { AnswerDraft } from '../lib/respond/types';
import type { CompanyProfile } from '../types/context';

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

interface ThemeScore {
  theme: string;
  icon: string;
  total: number;
  answered: number;
  estimated: number;
  unknown: number;
  pct: number;
}

interface Blocker {
  questionText: string;
  category: string;
  impact: 'HIGH' | 'MEDIUM';
  reason: string;
}

interface QuickWin {
  action: string;
  impact: string;
  pointsGain: number;
}

interface ReadinessAnalysis {
  overallScore: number;
  level: 'Provisional' | 'Bronze' | 'Silver' | 'Gold';
  themes: ThemeScore[];
  blockers: Blocker[];
  quickWins: QuickWin[];
  missingDocumentCount: number;
}

// ---------------------------------------------------------------------------
// Scoring algorithm
// ---------------------------------------------------------------------------

const THEME_MAP: Record<string, string[]> = {
  'Environment': ['energy_electricity', 'energy_fuel', 'energy_water', 'emissions', 'waste', 'effluents'],
  'Labor & Human Rights': ['workforce', 'health_safety', 'training'],
  'Ethics': ['regulatory', 'goals'],
  'Sustainable Procurement': ['materials', 'transport', 'packaging', 'buyer_requirements'],
};

const THEME_ICONS: Record<string, string> = {
  'Environment': '\u{1F331}',
  'Labor & Human Rights': '\u{1F477}',
  'Ethics': '\u2696\uFE0F',
  'Sustainable Procurement': '\u{1F517}',
};

function computeReadiness(drafts: AnswerDraft[], profile?: CompanyProfile | null): ReadinessAnalysis {
  // Theme-level scoring
  const themes: ThemeScore[] = Object.entries(THEME_MAP).map(([theme, domains]) => {
    const themeDrafts = drafts.filter(d =>
      d.matchResult.primaryDomain && domains.includes(d.matchResult.primaryDomain)
    );
    const total = themeDrafts.length;
    const answered = themeDrafts.filter(d => d.confidenceSource === 'provided').length;
    const estimated = themeDrafts.filter(d => d.confidenceSource === 'estimated').length;
    const unknown = themeDrafts.filter(d => d.confidenceSource === 'unknown').length;

    // Weight: provided = 1.0, estimated = 0.5, unknown = 0
    const pct = total > 0 ? Math.round(((answered * 1.0 + estimated * 0.5) / total) * 100) : 0;

    return { theme, icon: THEME_ICONS[theme] || '', total, answered, estimated, unknown, pct };
  });

  // Overall score (weighted average by question count)
  const totalQ = themes.reduce((s, t) => s + t.total, 0);
  const weightedSum = themes.reduce((s, t) => s + (t.pct * t.total), 0);
  const overallScore = totalQ > 0 ? Math.round(weightedSum / totalQ) : 0;

  let level: ReadinessAnalysis['level'];
  if (overallScore >= 75) level = 'Gold';
  else if (overallScore >= 55) level = 'Silver';
  else if (overallScore >= 35) level = 'Bronze';
  else level = 'Provisional';

  // Blockers: high-impact questions with unknown status
  const blockers: Blocker[] = drafts
    .filter(d => d.confidenceSource === 'unknown')
    .filter(d => d.questionType === 'POLICY' || d.matchResult.confidence === 'high')
    .slice(0, 8)
    .map(d => ({
      questionText: d.questionText.length > 80 ? d.questionText.slice(0, 80) + '...' : d.questionText,
      category: d.category || d.matchResult.primaryDomain?.replace(/_/g, ' ') || 'General',
      impact: d.questionType === 'POLICY' ? 'HIGH' as const : 'MEDIUM' as const,
      reason: d.questionType === 'POLICY'
        ? 'Policy questions carry high weight in scoring frameworks'
        : 'High-confidence match indicates this is a core question',
    }));

  // Quick wins: items where a simple action could upgrade the score
  const quickWins: QuickWin[] = [];

  // QW1: Sign a drafted policy
  const informalPolicies = drafts.filter(d => d.questionType === 'POLICY' && d.confidenceSource === 'estimated');
  if (informalPolicies.length > 0) {
    quickWins.push({
      action: `Sign and date ${informalPolicies.length} draft polic${informalPolicies.length > 1 ? 'ies' : 'y'} generated from your informal practices`,
      impact: 'Convert informal practices to scored Policy responses',
      pointsGain: Math.min(informalPolicies.length * 5, 15),
    });
  }

  // QW2: Upload utility invoices
  const estimatedKPIs = drafts.filter(d => d.questionType === 'KPI' && d.confidenceSource === 'estimated');
  if (estimatedKPIs.length > 0) {
    quickWins.push({
      action: 'Upload utility invoices (electricity, gas, water) as supporting evidence',
      impact: 'Upgrade estimated KPI values to "Verified" status',
      pointsGain: Math.min(estimatedKPIs.length * 3, 12),
    });
  }

  // QW3: Add certifications
  const noCerts = !profile?.informalPractices?.some(p => p.id === 'sc_supplier_checks');
  const certQuestions = drafts.filter(d => d.matchResult.topics.includes('certifications' as any));
  if (certQuestions.length > 0 && noCerts) {
    quickWins.push({
      action: 'Upload copies of ISO or other management system certificates',
      impact: 'Strengthen both Policy and Measure responses with certified evidence',
      pointsGain: 10,
    });
  }

  // QW4: Complete the missing themes
  const weakestTheme = themes.filter(t => t.total > 0).sort((a, b) => a.pct - b.pct)[0];
  if (weakestTheme && weakestTheme.pct < 40) {
    quickWins.push({
      action: `Focus on ${weakestTheme.theme}: ${weakestTheme.unknown} question${weakestTheme.unknown !== 1 ? 's' : ''} need${weakestTheme.unknown === 1 ? 's' : ''} data input`,
      impact: `Improving your weakest theme will have the highest impact on overall score`,
      pointsGain: Math.min(weakestTheme.unknown * 4, 15),
    });
  }

  // QW5: Add evidence references
  const noEvidence = drafts.filter(d => d.confidenceSource !== 'unknown' && (!d.evidence || d.evidence.trim() === ''));
  if (noEvidence.length > 5) {
    quickWins.push({
      action: `Add evidence references to ${noEvidence.length} answered questions`,
      impact: 'Evidence-backed responses receive higher scores in audit',
      pointsGain: 8,
    });
  }

  const missingDocumentCount = drafts.filter(d => d.confidenceSource === 'unknown').length +
    drafts.filter(d => d.confidenceSource !== 'unknown' && (!d.evidence || d.evidence.trim() === '')).length;

  return { overallScore, level, themes, blockers, quickWins: quickWins.slice(0, 5), missingDocumentCount };
}

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

interface ReadinessScoreProps {
  answerDrafts: AnswerDraft[];
  profile?: CompanyProfile | null;
  onUpgrade?: () => void;
  /** When true, show only the top-level score + theme bars (no blockers/quick wins) */
  compact?: boolean;
}

const LEVEL_STYLES: Record<string, { bg: string; text: string; border: string }> = {
  'Provisional': { bg: 'bg-orange-50', text: 'text-orange-700', border: 'border-orange-200' },
  'Bronze': { bg: 'bg-yellow-50', text: 'text-yellow-700', border: 'border-yellow-200' },
  'Silver': { bg: 'bg-blue-50', text: 'text-blue-700', border: 'border-blue-200' },
  'Gold': { bg: 'bg-green-50', text: 'text-green-700', border: 'border-green-200' },
};

export function ReadinessScoreDashboard({ answerDrafts, profile, onUpgrade, compact }: ReadinessScoreProps) {
  if (answerDrafts.length === 0) return null;

  const analysis = computeReadiness(answerDrafts, profile);
  const ls = LEVEL_STYLES[analysis.level] || LEVEL_STYLES['Provisional'];

  return (
    <div className="space-y-4">
      {/* Overall Score Card */}
      <Card padding="lg">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-5">
            {/* Score circle */}
            <div className={`relative w-20 h-20 rounded-full flex items-center justify-center border-4 ${ls.border} ${ls.bg}`}>
              <span className={`text-2xl font-bold ${ls.text}`}>{analysis.overallScore}%</span>
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-800">
                Readiness Score: <span className={ls.text}>{analysis.level}</span>
              </h3>
              <p className="text-sm text-slate-500">
                {analysis.themes.reduce((s, t) => s + t.answered, 0)} verified &middot;{' '}
                {analysis.themes.reduce((s, t) => s + t.estimated, 0)} estimated &middot;{' '}
                {analysis.themes.reduce((s, t) => s + t.unknown, 0)} need input
              </p>
            </div>
          </div>

          {/* Quick CTA */}
          {analysis.quickWins.length > 0 && (
            <div className="text-right">
              <p className="text-sm text-slate-600">
                <strong>{analysis.quickWins.length} Quick Win{analysis.quickWins.length > 1 ? 's' : ''}</strong> identified
              </p>
              <p className="text-xs text-slate-400">
                +{analysis.quickWins.reduce((s, w) => s + w.pointsGain, 0)} potential points
              </p>
            </div>
          )}
        </div>
      </Card>

      {/* Theme Breakdown */}
      <Card padding="md">
        <CardTitle className="text-sm mb-4">Readiness by Theme</CardTitle>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {analysis.themes.filter(t => t.total > 0).map(t => (
            <div key={t.theme} className="flex items-center gap-3">
              <span className="text-lg">{t.icon}</span>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm font-medium text-slate-800 truncate">{t.theme}</span>
                  <span className="text-xs text-slate-500 ml-2">{t.pct}%</span>
                </div>
                <div className="w-full bg-slate-200 rounded-full h-2">
                  <div
                    className={`h-2 rounded-full transition-all duration-500 ${
                      t.pct >= 70 ? 'bg-green-500' : t.pct >= 40 ? 'bg-yellow-500' : 'bg-red-400'
                    }`}
                    style={{ width: `${t.pct}%` }}
                  />
                </div>
                <div className="flex gap-2 mt-1 text-[10px] text-slate-400">
                  <span>{t.answered} verified</span>
                  <span>&middot;</span>
                  <span>{t.estimated} estimated</span>
                  <span>&middot;</span>
                  <span>{t.unknown} missing</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Card>

      {/* Blockers */}
      {!compact && analysis.blockers.length > 0 && (
        <Card padding="md">
          <CardTitle className="text-sm mb-3 text-red-700">Blockers ({analysis.blockers.length})</CardTitle>
          <p className="text-xs text-slate-500 mb-3">High-impact questions that still need data or a policy document.</p>
          <div className="space-y-2">
            {analysis.blockers.map((b, i) => (
              <div key={i} className="flex items-start gap-2 p-2 rounded-lg bg-red-50 border border-red-100">
                <span className={`px-1.5 py-0.5 rounded text-[10px] font-bold ${
                  b.impact === 'HIGH' ? 'bg-red-200 text-red-800' : 'bg-orange-200 text-orange-800'
                }`}>{b.impact}</span>
                <div className="min-w-0">
                  <p className="text-sm text-slate-800 truncate">{b.questionText}</p>
                  <p className="text-xs text-slate-500">{b.category} &mdash; {b.reason}</p>
                </div>
              </div>
            ))}
          </div>
        </Card>
      )}

      {/* Quick Wins */}
      {!compact && analysis.quickWins.length > 0 && (
        <Card padding="md" className="bg-forest-700/5 border-forest-700/20">
          <CardTitle className="text-sm mb-3 text-forest-700">Quick Wins</CardTitle>
          <div className="space-y-3">
            {analysis.quickWins.map((w, i) => (
              <div key={i} className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-forest-700 text-white text-xs flex items-center justify-center font-bold">{i + 1}</span>
                <div>
                  <p className="text-sm font-medium text-slate-800">{w.action}</p>
                  <p className="text-xs text-slate-500">{w.impact} &middot; <strong className="text-forest-700">+{w.pointsGain} pts</strong></p>
                </div>
              </div>
            ))}
          </div>

          {/* ESG Passport CTA */}
          <div className="mt-4 pt-4 border-t border-forest-700/20">
            <p className="text-sm text-slate-700">
              You have <strong>{analysis.quickWins.length} Quick Wins</strong> identified.
              Upgrade to <strong>ESG Passport</strong> to download policy templates and save your progress.
            </p>
            {onUpgrade && (
              <Button className="mt-2" onClick={onUpgrade}>
                Explore ESG Passport
              </Button>
            )}
          </div>
        </Card>
      )}
    </div>
  );
}

// Export analysis function for use in Excel export
export { computeReadiness, type ReadinessAnalysis, type ThemeScore, type QuickWin, type Blocker };
