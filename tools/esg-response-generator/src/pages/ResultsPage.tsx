import {
  DownloadSimple, CaretDown, CaretUp, ArrowsClockwise,
  Warning, Database, Sparkle, Info, CurrencyDollar, List, ChartBar
} from '@phosphor-icons/react';
import { Card, CardTitle, Button, Input, TextArea } from '@/components/ui';
import { ReadinessScoreDashboard } from '@/components/ReadinessScore';
import { useSession } from '@/context/SessionContext';
import { isSupabaseConfigured } from '@/lib/supabase';
import { getClassificationStats } from '@/lib/respond';
import { cn } from '@/lib/utils';
import {
  confidenceColors, confidenceBorderColors, confidenceLabels, confidenceTips,
  getEvidenceOptions,
} from '@/constants/app';

export function ResultsPage() {
  const {
    answerDrafts, matchResults, parseResult, questionnaireName,
    hasPaid, handlePayment, paymentLoading, handleExport,
    expandedAnswers, toggleExpand,
    updateAnswer, regenerateAnswer, regenerateWithLLM,
    goToImproveData,
    confidenceBreakdown, matchStats,
    reportView, setReportView,
    showSummaryDrawer, setShowSummaryDrawer,
    contextProfile, classifications,
  } = useSession();

  const expandAll = () => {
    // Expand all by toggling each that isn't expanded
    answerDrafts.forEach(d => {
      if (!expandedAnswers.has(d.questionId)) {
        toggleExpand(d.questionId);
      }
    });
  };

  const collapseAll = () => {
    answerDrafts.forEach(d => {
      if (expandedAnswers.has(d.questionId)) {
        toggleExpand(d.questionId);
      }
    });
  };

  return (
    <div className="animate-fade-in">
      {/* Unlock CTA */}
      {!hasPaid && (
        <Card className="mb-6 bg-primary-100 border-primary-200">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <h3 className="font-bold text-gray-900 text-lg">Your report is ready!</h3>
              <p className="text-sm text-gray-600">All answers are visible below. Unlock to edit answers, add evidence, and export the full Excel pack.</p>
              <p className="text-xs text-gray-500 mt-1">&euro;99 one-time &middot; Secure payment via Stripe</p>
            </div>
            <Button size="lg" onClick={handlePayment} isLoading={paymentLoading}>
              Unlock Full Report &mdash; &euro;99
            </Button>
          </div>
        </Card>
      )}

      {/* Improve Data CTA */}
      {(confidenceBreakdown.none > 0 || confidenceBreakdown.low > 0) && (
        <Card className="mb-6 bg-amber-50 border-amber-200">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <h3 className="font-semibold text-amber-900">
                {confidenceBreakdown.none + confidenceBreakdown.low} answer{confidenceBreakdown.none + confidenceBreakdown.low !== 1 ? 's' : ''} could be improved with more data
              </h3>
              <p className="text-sm text-amber-700">Add your company data to fill gaps and increase confidence scores.</p>
            </div>
            <Button variant="outline" onClick={goToImproveData}>
              <Database className="w-4 h-4 mr-2" weight="duotone" /> Improve Answers
            </Button>
          </div>
        </Card>
      )}

      {/* View Toggle Tabs */}
      {hasPaid && (
        <div className="flex gap-1 mb-6 bg-slate-100 rounded-lg p-1 w-fit">
          <button
            onClick={() => setReportView('summary')}
            className={cn(
              'flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition-all',
              reportView === 'summary' ? 'bg-white text-slate-800 shadow-sm' : 'text-slate-500 hover:text-slate-700'
            )}
          >
            <ChartBar className="w-4 h-4" weight="duotone" /> Summary
          </button>
          <button
            onClick={() => setReportView('full')}
            className={cn(
              'flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition-all',
              reportView === 'full' ? 'bg-white text-slate-800 shadow-sm' : 'text-slate-500 hover:text-slate-700'
            )}
          >
            <List className="w-4 h-4" weight="duotone" /> Full Report
          </button>
        </div>
      )}

      {/* ========== SUMMARY VIEW ========== */}
      {(reportView === 'summary' || !hasPaid) && (
        <>
          {/* Readiness Score Dashboard */}
          {answerDrafts.length > 0 && (
            <div className="mb-6">
              <ReadinessScoreDashboard
                answerDrafts={answerDrafts}
                profile={contextProfile}
                compact={!hasPaid}
              />
            </div>
          )}

          {/* Summary Bar */}
          <Card className="mb-6 bg-white">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
              <div>
                <h2 className="font-semibold text-slate-800">{parseResult?.metadata.fileName || questionnaireName}</h2>
                <p className="text-sm text-slate-500">
                  {answerDrafts.length} questions analyzed
                  {parseResult?.metadata.sheetsProcessed && parseResult.metadata.sheetsProcessed > 1 && (
                    <span className="ml-2">&middot; {parseResult.metadata.sheetsProcessed} sheets</span>
                  )}
                  {parseResult?.metadata.detectedFramework && (
                    <span className="ml-2">&middot; Framework: <strong>{parseResult.metadata.detectedFramework}</strong></span>
                  )}
                </p>
              </div>
              <div className="flex flex-wrap items-center gap-4">
                <div className="flex gap-1.5">
                  <span className="px-2.5 py-1 rounded-md text-xs font-semibold bg-confidence-high-bg text-confidence-high cursor-help tabular-nums" title="Answered using data you provided directly">{confidenceBreakdown.high} high</span>
                  <span className="px-2.5 py-1 rounded-md text-xs font-semibold bg-confidence-medium-bg text-confidence-medium cursor-help tabular-nums" title="Answered using estimated or auto-calculated data">{confidenceBreakdown.medium} medium</span>
                  <span className="px-2.5 py-1 rounded-md text-xs font-semibold bg-confidence-low-bg text-confidence-low cursor-help tabular-nums" title="Partially answered — some data is missing">{confidenceBreakdown.low} low</span>
                  <span className="px-2.5 py-1 rounded-md text-xs font-semibold bg-confidence-none-bg text-confidence-none cursor-help tabular-nums" title="No matching data found — needs your input">{confidenceBreakdown.none} no data</span>
                </div>
                {hasPaid ? (
                  <Button variant="outline" onClick={handleExport}>
                    <DownloadSimple className="w-4 h-4 mr-2" weight="duotone" /> Export Excel
                  </Button>
                ) : (
                  <Button variant="outline" disabled className="opacity-50">
                    <DownloadSimple className="w-4 h-4 mr-2" weight="duotone" /> Export (unlock to download)
                  </Button>
                )}
              </div>
            </div>
          </Card>

          {/* What's in the Excel export */}
          {!hasPaid && (
            <Card className="mb-6">
              <CardTitle className="text-sm mb-3">What&apos;s in the Excel Export?</CardTitle>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {[
                  { icon: '1', title: 'Executive Summary', desc: 'Overview with gap analysis' },
                  { icon: '2', title: 'Methodology', desc: 'Attach to your submission' },
                  { icon: '3', title: 'Full Answers', desc: 'With confidence & evidence' },
                  { icon: '4', title: 'Review Checklist', desc: 'For your team to check' },
                ].map(sheet => (
                  <div key={sheet.title} className="text-center p-3 bg-gray-50 rounded-lg">
                    <div className="w-6 h-6 rounded-full bg-primary text-white text-xs font-bold flex items-center justify-center mx-auto mb-2">{sheet.icon}</div>
                    <p className="text-xs font-semibold text-gray-900">{sheet.title}</p>
                    <p className="text-[10px] text-gray-500">{sheet.desc}</p>
                  </div>
                ))}
              </div>
            </Card>
          )}

          {/* Category summary */}
          {matchStats && (
            <Card className="mb-6">
              <CardTitle className="text-sm mb-3">Questions by Category</CardTitle>
              <div className="flex flex-wrap gap-2">
                {Object.entries(matchStats.byDomain).sort((a, b) => b[1] - a[1]).map(([domain, count]) => (
                  <span key={domain} className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gray-100 text-xs font-medium text-gray-700">
                    <span className="capitalize">{domain.replace(/_/g, ' ')}</span>
                    <span className="bg-gray-300 text-gray-600 rounded-full w-5 h-5 flex items-center justify-center text-[10px]">{count}</span>
                  </span>
                ))}
              </div>
            </Card>
          )}

          {/* Strategy Map */}
          {classifications.length > 0 && contextProfile && (() => {
            const stats = getClassificationStats(classifications);
            const total = stats.policy + stats.measure + stats.kpi;
            if (total === 0) return null;

            const policyPct = Math.round((stats.policy / total) * 100);
            const measurePct = Math.round((stats.measure / total) * 100);
            const kpiPct = Math.round((stats.kpi / total) * 100);

            const policyAnswered = answerDrafts.filter(d => d.questionType === 'POLICY' && d.confidenceSource !== 'unknown').length;
            const measureAnswered = answerDrafts.filter(d => d.questionType === 'MEASURE' && d.confidenceSource !== 'unknown').length;
            const kpiAnswered = answerDrafts.filter(d => d.questionType === 'KPI' && d.confidenceSource !== 'unknown').length;
            const policyGap = stats.policy - policyAnswered;
            const measureGap = stats.measure - measureAnswered;
            const kpiGap = stats.kpi - kpiAnswered;
            const worstGap = Math.max(policyGap, measureGap, kpiGap);

            let insight = '';
            let recommendation = '';
            if (worstGap === policyGap && policyGap > 0) {
              insight = `Your responses score well on 'Measures' but have ${policyGap} unanswered Policy question${policyGap > 1 ? 's' : ''}.`;
              recommendation = 'By formalizing your informal practices into signed Policy documents, you could significantly increase your score. Download our Policy Templates in the ESG Passport.';
            } else if (worstGap === kpiGap && kpiGap > 0) {
              insight = `Your responses show strong management approach but ${kpiGap} KPI question${kpiGap > 1 ? 's' : ''} lack${kpiGap === 1 ? 's' : ''} quantified data.`;
              recommendation = 'Consolidating your operational data into formal metrics will strengthen your reporting. Access our Data Collection Templates in the ESG Passport.';
            } else if (worstGap === measureGap && measureGap > 0) {
              insight = `${measureGap} Measure question${measureGap > 1 ? 's' : ''} could benefit from more specific operational detail.`;
              recommendation = 'Document your existing shop-floor processes to convert informal practices into scored responses.';
            } else {
              insight = 'Your responses provide good coverage across Policy, Measures, and KPI questions.';
              recommendation = 'Consider uploading supporting documents to convert "Estimated" responses to "Verified" status.';
            }

            return (
              <Card className="mb-6" padding="md">
                <CardTitle className="text-sm mb-3">Strategy Map — Question Type Breakdown</CardTitle>
                <div className="grid grid-cols-3 gap-4 mb-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-600">{stats.policy}</div>
                    <div className="text-xs text-gray-500">Policy</div>
                    <div className="w-full bg-gray-200 rounded-full h-1.5 mt-1">
                      <div className="bg-purple-500 h-1.5 rounded-full" style={{ width: `${policyPct}%` }} />
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600">{stats.measure}</div>
                    <div className="text-xs text-gray-500">Measures</div>
                    <div className="w-full bg-gray-200 rounded-full h-1.5 mt-1">
                      <div className="bg-blue-500 h-1.5 rounded-full" style={{ width: `${measurePct}%` }} />
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600">{stats.kpi}</div>
                    <div className="text-xs text-gray-500">KPI / Reporting</div>
                    <div className="w-full bg-gray-200 rounded-full h-1.5 mt-1">
                      <div className="bg-green-500 h-1.5 rounded-full" style={{ width: `${kpiPct}%` }} />
                    </div>
                  </div>
                </div>
                <div className="bg-amber-50 border border-amber-200 rounded-lg p-3">
                  <p className="text-sm font-medium text-amber-800">Strategy Insight:</p>
                  <p className="text-sm text-amber-700 mt-1">{insight}</p>
                  <p className="text-xs text-amber-600 mt-2">{recommendation}</p>
                </div>
              </Card>
            );
          })()}

          {/* Navigate to full report */}
          {hasPaid && (
            <div className="text-center mt-6">
              <Button size="lg" onClick={() => setReportView('full')}>
                <List className="w-5 h-5 mr-2" weight="duotone" />
                View Full Report
              </Button>
            </div>
          )}

          {/* Answer cards — partial preview, truncated answers */}
          {!hasPaid && (
            <div className="space-y-3 mt-6">
              {answerDrafts.map((draft, index) => {
                const truncateAnswer = (text: string): string => {
                  if (!text) return '';
                  const firstSentenceEnd = text.search(/[.!?]\s/);
                  const cutoff = firstSentenceEnd > 30 && firstSentenceEnd < 150 ? firstSentenceEnd + 1 : 120;
                  if (text.length <= cutoff) return text;
                  return text.slice(0, cutoff).trimEnd() + '...';
                };
                const preview = truncateAnswer(draft.answer);
                const isTruncated = preview !== draft.answer;

                return (
                  <Card key={draft.questionId} className={cn('transition-all border-l-[3px]', confidenceBorderColors[draft.answerConfidence] || 'border-l-slate-200')}>
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex flex-wrap items-center gap-2 mb-2">
                          <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-slate-100 text-[10px] font-bold text-slate-500">{index + 1}</span>
                          <span className={cn('px-2 py-0.5 rounded-md text-xs font-medium cursor-help', confidenceColors[draft.answerConfidence])} title={confidenceTips[draft.answerConfidence]}>
                            {confidenceLabels[draft.answerConfidence]}
                          </span>
                          {draft.questionType && (
                            <span className={cn('px-1.5 py-0.5 rounded-md text-[10px] font-semibold uppercase tracking-wide border',
                              draft.questionType === 'POLICY' ? 'border-purple-200 text-purple-600 bg-purple-50' :
                              draft.questionType === 'MEASURE' ? 'border-blue-200 text-blue-600 bg-blue-50' :
                              'border-green-200 text-green-600 bg-green-50'
                            )}>{draft.questionType}</span>
                          )}
                        </div>
                        <p className="font-medium text-slate-800 leading-snug">{draft.questionText}</p>
                        <p className="text-sm text-slate-500 mt-2 leading-relaxed">
                          {preview}
                          {isTruncated && (
                            <span className="inline-flex items-center gap-1 ml-1 text-accent text-xs font-medium">
                              <CurrencyDollar className="w-3 h-3" weight="duotone" /> Unlock to see full answer
                            </span>
                          )}
                        </p>
                      </div>
                    </div>
                  </Card>
                );
              })}
            </div>
          )}
        </>
      )}

      {/* ========== FULL REPORT VIEW ========== */}
      {reportView === 'full' && hasPaid && (
        <>
          {/* Collapsible Summary Drawer */}
          <div className="mb-6">
            <button
              onClick={() => setShowSummaryDrawer(!showSummaryDrawer)}
              className="w-full flex items-center justify-between px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg hover:bg-slate-100 transition-colors"
            >
              <span className="flex items-center gap-2 text-sm font-medium text-slate-700">
                <ChartBar className="w-4 h-4" weight="duotone" /> Summary Overview
              </span>
              {showSummaryDrawer ? <CaretUp className="w-4 h-4 text-slate-400" weight="bold" /> : <CaretDown className="w-4 h-4 text-slate-400" weight="bold" />}
            </button>
            {showSummaryDrawer && (
              <div className="mt-2 border border-slate-200 rounded-lg p-4 space-y-4 bg-white">
                {answerDrafts.length > 0 && (
                  <ReadinessScoreDashboard answerDrafts={answerDrafts} profile={contextProfile} />
                )}
                <div className="flex flex-wrap gap-4">
                  <div className="flex gap-1.5">
                    <span className="px-2.5 py-1 rounded-md text-xs font-semibold bg-confidence-high-bg text-confidence-high tabular-nums">{confidenceBreakdown.high} high</span>
                    <span className="px-2.5 py-1 rounded-md text-xs font-semibold bg-confidence-medium-bg text-confidence-medium tabular-nums">{confidenceBreakdown.medium} medium</span>
                    <span className="px-2.5 py-1 rounded-md text-xs font-semibold bg-confidence-low-bg text-confidence-low tabular-nums">{confidenceBreakdown.low} low</span>
                    <span className="px-2.5 py-1 rounded-md text-xs font-semibold bg-confidence-none-bg text-confidence-none tabular-nums">{confidenceBreakdown.none} no data</span>
                  </div>
                </div>
                {matchStats && (
                  <div className="flex flex-wrap gap-2">
                    {Object.entries(matchStats.byDomain).sort((a, b) => b[1] - a[1]).map(([domain, count]) => (
                      <span key={domain} className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gray-100 text-xs font-medium text-gray-700">
                        <span className="capitalize">{domain.replace(/_/g, ' ')}</span>
                        <span className="bg-gray-300 text-gray-600 rounded-full w-5 h-5 flex items-center justify-center text-[10px]">{count}</span>
                      </span>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Export bar */}
          <Card className="mb-6 bg-white">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="font-semibold text-slate-800">{parseResult?.metadata.fileName || questionnaireName}</h2>
                <p className="text-sm text-slate-500">{answerDrafts.length} questions</p>
              </div>
              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm" onClick={goToImproveData}>
                  <Database className="w-4 h-4 mr-1" weight="duotone" /> Edit Data
                </Button>
                <Button variant="ghost" size="sm" onClick={() => {
                  if (expandedAnswers.size === answerDrafts.length) {
                    collapseAll();
                  } else {
                    expandAll();
                  }
                }}>
                  {expandedAnswers.size === answerDrafts.length ? (
                    <><CaretUp className="w-4 h-4 mr-1" weight="bold" /> Collapse All</>
                  ) : (
                    <><CaretDown className="w-4 h-4 mr-1" weight="bold" /> Expand All</>
                  )}
                </Button>
                <Button variant="outline" onClick={handleExport}>
                  <DownloadSimple className="w-4 h-4 mr-2" weight="duotone" /> Export Excel
                </Button>
              </div>
            </div>
          </Card>

          {/* Answer Cards */}
          <div className="space-y-3">
            {answerDrafts.map((draft, index) => (
              <Card key={draft.questionId} className={cn('transition-all border-l-[3px]', confidenceBorderColors[draft.answerConfidence] || 'border-l-slate-200')}>
                <div className="flex items-start justify-between cursor-pointer" onClick={() => toggleExpand(draft.questionId)}>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-slate-100 text-[10px] font-bold text-slate-500">{index + 1}</span>
                      <span className={cn('px-2 py-0.5 rounded-md text-xs font-medium cursor-help', confidenceColors[draft.answerConfidence])} title={confidenceTips[draft.answerConfidence]}>
                        {confidenceLabels[draft.answerConfidence]}
                      </span>
                      {draft.questionType && (
                        <span className={cn('px-1.5 py-0.5 rounded-md text-[10px] font-semibold uppercase tracking-wide border',
                          draft.questionType === 'POLICY' ? 'border-purple-200 text-purple-600 bg-purple-50' :
                          draft.questionType === 'MEASURE' ? 'border-blue-200 text-blue-600 bg-blue-50' :
                          'border-green-200 text-green-600 bg-green-50'
                        )}>{draft.questionType}</span>
                      )}
                      {draft.isEstimate && (
                        <span className="text-xs text-orange-600 flex items-center gap-1">
                          <Warning className="w-3 h-3" weight="fill" /> Estimated
                        </span>
                      )}
                      {draft.matchResult.primaryDomain && (
                        <span className="text-[11px] text-slate-400">&rarr; {draft.matchResult.primaryDomain.replace('_', ' ')}</span>
                      )}
                      {draft.category && <span className="text-[11px] text-slate-400">{draft.category}</span>}
                    </div>
                    <p className="font-medium text-slate-800 leading-snug">{draft.questionText}</p>
                    {!expandedAnswers.has(draft.questionId) && draft.answer && (
                      <p className="text-sm text-slate-500 mt-2 line-clamp-2 leading-relaxed">{draft.answer}</p>
                    )}
                  </div>
                  <div className="ml-4">
                    {expandedAnswers.has(draft.questionId) ? <CaretUp className="w-5 h-5 text-gray-400" weight="bold" /> : <CaretDown className="w-5 h-5 text-gray-400" weight="bold" />}
                  </div>
                </div>

                {expandedAnswers.has(draft.questionId) && (
                  <div className="mt-4 pt-4 border-t space-y-4">
                    {draft.matchResult.matchedKeywords.length > 0 && (
                      <div className="flex items-start gap-2 text-xs">
                        <Sparkle className="w-3 h-3 text-primary mt-0.5" weight="duotone" />
                        <div>
                          <span className="text-gray-500">Matched: </span>
                          <span className="text-forest-700">{draft.matchResult.matchedKeywords.join(', ')}</span>
                        </div>
                      </div>
                    )}

                    <TextArea label="Answer" value={draft.answer} onChange={e => updateAnswer(draft.questionId, { answer: e.target.value })} rows={4} style={{ fieldSizing: 'content' as any, minHeight: '6rem' }} />

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <Input label="Data Value" value={draft.dataValue || ''} onChange={e => updateAnswer(draft.questionId, { dataValue: e.target.value })} />
                      <Input label="Period" value={draft.dataPeriod || ''} onChange={e => updateAnswer(draft.questionId, { dataPeriod: e.target.value })} />
                    </div>

                    {/* Evidence */}
                    <div className="space-y-2">
                      <label className="block text-sm font-medium text-gray-700">Evidence / Source</label>
                      <select
                        className="w-full rounded-md border border-gray-300 bg-white py-2 px-3 text-sm focus:border-primary focus:ring-1 focus:ring-primary"
                        value=""
                        onChange={e => {
                          if (e.target.value) {
                            const current = draft.evidence || '';
                            const updated = current ? `${current}; ${e.target.value}` : e.target.value;
                            updateAnswer(draft.questionId, { evidence: updated, dataSource: updated });
                          }
                        }}
                      >
                        <option value="">+ Add from suggested evidence...</option>
                        {getEvidenceOptions(draft.matchResult.primaryDomain).map(opt => (
                          <option key={opt} value={opt}>{opt}</option>
                        ))}
                      </select>
                      {draft.suggestedEvidence && draft.suggestedEvidence.length > 0 && (
                        <div className="flex flex-wrap gap-1">
                          {draft.suggestedEvidence.map((sug, i) => (
                            <button
                              key={i}
                              type="button"
                              className="text-xs px-2 py-1 rounded-full bg-blue-50 text-blue-700 hover:bg-blue-100 transition-colors"
                              onClick={() => {
                                const current = draft.evidence || '';
                                const updated = current ? `${current}; ${sug}` : sug;
                                updateAnswer(draft.questionId, { evidence: updated, dataSource: updated });
                              }}
                            >
                              + {sug}
                            </button>
                          ))}
                        </div>
                      )}
                      <Input
                        label=""
                        value={draft.evidence || ''}
                        onChange={e => updateAnswer(draft.questionId, { evidence: e.target.value, dataSource: e.target.value })}
                        placeholder="e.g., Electricity bill Jan-Dec 2024, ISO 14001 certificate"
                      />
                    </div>

                    {draft.confidenceSource !== 'unknown' && (
                      <label className="flex items-center gap-2 text-sm text-gray-700 cursor-pointer">
                        <input type="checkbox" checked={draft.confidenceSource === 'estimated'}
                          onChange={e => updateAnswer(draft.questionId, { confidenceSource: e.target.checked ? 'estimated' : 'provided' })}
                          className="rounded border-gray-300" />
                        This value is estimated
                      </label>
                    )}

                    {draft.promptForMissing && (
                      <div className="p-3 bg-blue-50 rounded-lg text-sm text-blue-700">
                        <Info className="w-4 h-4 inline mr-1" weight="duotone" />{draft.promptForMissing}
                      </div>
                    )}

                    {draft.metricKeysUsed && draft.metricKeysUsed.length > 0 && (
                      <div className="text-xs text-gray-400">Metric keys: {draft.metricKeysUsed.join(', ')}</div>
                    )}

                    {draft.limitations && draft.limitations.length > 0 && (
                      <div className="p-3 bg-amber-50 rounded-lg text-sm">
                        <div className="flex items-center gap-2 text-amber-800 font-medium mb-1">
                          <Info className="w-4 h-4" weight="duotone" /> Data Limitations
                        </div>
                        <ul className="list-disc list-inside text-amber-700 space-y-1">
                          {draft.limitations.map((l, i) => <li key={i}>{l}</li>)}
                        </ul>
                      </div>
                    )}

                    {(draft.dataContext.operational.length > 0 || draft.dataContext.company.length > 0) && (
                      <div className="p-3 bg-gray-50 rounded-lg text-sm">
                        <div className="flex items-center gap-2 text-gray-700 font-medium mb-2">
                          <Database className="w-4 h-4" weight="duotone" /> Available Data Points
                        </div>
                        <div className="grid grid-cols-2 gap-2 text-xs">
                          {[...draft.dataContext.company, ...draft.dataContext.operational].slice(0, 6).map((point, i) => (
                            <div key={i} className="flex justify-between">
                              <span className="text-gray-500">{point.label}</span>
                              <span className="font-medium">{point.value}{point.unit && ` ${point.unit}`}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    <div className="flex justify-end gap-2 pt-2">
                      <Button variant="ghost" size="sm" onClick={() => regenerateAnswer(draft.questionId)}>
                        <ArrowsClockwise className="w-4 h-4 mr-1" weight="duotone" /> Regenerate
                      </Button>
                      {isSupabaseConfigured() && draft.confidenceSource !== 'unknown' && (
                        <Button variant="ghost" size="sm" onClick={() => regenerateWithLLM(draft.questionId)}>
                          <Sparkle className="w-4 h-4 mr-1" weight="duotone" /> Enhance with AI
                        </Button>
                      )}
                    </div>
                  </div>
                )}
              </Card>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
