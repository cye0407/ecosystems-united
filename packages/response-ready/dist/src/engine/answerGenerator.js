// ============================================
// ResponseReady — Answer Generator (Domain-Agnostic)
// ============================================
// Orchestrates the 3-phase answer generation pipeline.
// All domain-specific templates, maturity logic, and industry
// context are injected from the DomainPack.
// ============================================
// Data Map Helpers (exported for pack use)
// ============================================
export function val(dataMap, field) {
    const p = dataMap.get(field);
    return p?.value ?? null;
}
export function has(dataMap, ...fields) {
    return fields.every(f => {
        const v = val(dataMap, f);
        return v !== null && v !== undefined && v !== '';
    });
}
export function num(dataMap, field) {
    const v = val(dataMap, field);
    return typeof v === 'number' ? v : 0;
}
export function str(dataMap, field) {
    const v = val(dataMap, field);
    return v !== null && v !== undefined ? String(v) : '';
}
export function fmt(n) {
    return n.toLocaleString('en-US', { maximumFractionDigits: 1 });
}
export function buildDataMap(context) {
    const map = new Map();
    [...context.company, ...context.operational, ...context.calculated].forEach(point => {
        map.set(point.field, point);
    });
    return map;
}
// ============================================
// Defensive Rewriting (inline, single-answer)
// ============================================
function applyRewriteRules(text, rules) {
    let result = text;
    for (const rule of rules) {
        const pattern = typeof rule.pattern === 'string' ? new RegExp(rule.pattern, 'gi') : rule.pattern;
        result = result.replace(pattern, rule.replacement);
    }
    // Clean up artifacts
    result = result.replace(/\s{2,}/g, ' ').trim();
    result = result.replace(/^\s*[,;]\s*/gm, '');
    result = result.replace(/\.\s*\./g, '.');
    // Capitalize first character
    if (result.length > 0 && result[0] !== result[0].toUpperCase()) {
        result = result[0].toUpperCase() + result.slice(1);
    }
    return result;
}
// ============================================
// Template Matching
// ============================================
function findMatchingTemplate(matchResult, templates, questionType) {
    if (!matchResult.primaryDomain)
        return null;
    const primaryTopics = matchResult.primaryTopics || matchResult.topics;
    const candidates = templates.filter(t => {
        const domainMatch = t.domains.includes(matchResult.primaryDomain) ||
            matchResult.secondaryDomains.some(d => t.domains.includes(d));
        if (!domainMatch)
            return false;
        // Must overlap with at least one topic (prefer primary topics)
        if (!t.topics.some(topic => matchResult.topics.includes(topic)))
            return false;
        // If template declares questionTypes, must match the classified type
        if (t.questionTypes && questionType && !t.questionTypes.includes(questionType))
            return false;
        return true;
    });
    return candidates.sort((a, b) => {
        // Prefer templates matching the primary domain
        const aPrimary = a.domains.includes(matchResult.primaryDomain) ? 1 : 0;
        const bPrimary = b.domains.includes(matchResult.primaryDomain) ? 1 : 0;
        if (bPrimary !== aPrimary)
            return bPrimary - aPrimary;
        // Prefer templates that match questionType explicitly over untyped
        const aTypeMatch = (a.questionTypes && questionType && a.questionTypes.includes(questionType)) ? 1 : 0;
        const bTypeMatch = (b.questionTypes && questionType && b.questionTypes.includes(questionType)) ? 1 : 0;
        if (bTypeMatch !== aTypeMatch)
            return bTypeMatch - aTypeMatch;
        // Prefer templates overlapping with primary domain topics (not just union)
        const aPrimaryOverlap = a.topics.filter(t => primaryTopics.includes(t)).length;
        const bPrimaryOverlap = b.topics.filter(t => primaryTopics.includes(t)).length;
        if (bPrimaryOverlap !== aPrimaryOverlap)
            return bPrimaryOverlap - aPrimaryOverlap;
        // Prefer more specific templates: higher % of template topics matched by question
        // e.g. ['recycling'] (1/1=100%) beats ['waste_total','waste_management'] (1/2=50%)
        const aSpecificity = a.topics.length > 0 ? aPrimaryOverlap / a.topics.length : 0;
        const bSpecificity = b.topics.length > 0 ? bPrimaryOverlap / b.topics.length : 0;
        if (Math.abs(bSpecificity - aSpecificity) > 0.01)
            return bSpecificity - aSpecificity;
        // Then total topic overlap as tiebreaker
        const aOverlap = a.topics.filter(t => matchResult.topics.includes(t)).length;
        const bOverlap = b.topics.filter(t => matchResult.topics.includes(t)).length;
        return bOverlap - aOverlap;
    })[0] || null;
}
// ============================================
// Confidence Determination
// ============================================
function determineConfidence(context, matchResult) {
    const allPoints = [...context.company, ...context.operational, ...context.calculated];
    if (allPoints.length === 0)
        return 'none';
    const hasHighConfidence = allPoints.some(p => p.confidence === 'high');
    const hasMediumConfidence = allPoints.some(p => p.confidence === 'medium');
    const hasDataGaps = context.metadata.dataGaps.length > 0;
    if (matchResult.confidence === 'high' && hasHighConfidence && !hasDataGaps)
        return 'high';
    if (matchResult.confidence !== 'none' && (hasHighConfidence || hasMediumConfidence))
        return 'medium';
    if (allPoints.length > 0)
        return 'low';
    return 'none';
}
// ============================================
// Framework Notes
// ============================================
function getFrameworkNote(framework, frameworkNotes) {
    if (!framework || !frameworkNotes)
        return '';
    return frameworkNotes[framework] || '';
}
export function createAnswerGenerator(deps) {
    const { templates, frameworkNotes, fieldToMetricKey = {}, scrubRules = [], maturityResolver, matrixGenerator, informalPracticeHandler, industryContextProvider, } = deps;
    function generateSimpleAnswer(context, matchResult, framework, profile, questionType) {
        const dataMap = buildDataMap(context);
        const allPoints = [...context.company, ...context.operational, ...context.calculated];
        const hasData = allPoints.some(p => p.value !== null && p.value !== undefined && p.value !== '');
        // Phase 1: Try rich data templates FIRST (highest quality — data-driven answers)
        const template = findMatchingTemplate(matchResult, templates, questionType);
        if (template) {
            let answer = template.generate(dataMap, framework);
            if (answer) {
                answer += getFrameworkNote(framework, frameworkNotes);
                const primaryPoint = allPoints[0];
                return {
                    answer,
                    dataValue: primaryPoint ? `${primaryPoint.value}${primaryPoint.unit ? ' ' + primaryPoint.unit : ''}` : undefined,
                    dataSource: primaryPoint?.source,
                };
            }
        }
        // Phase 2: Try matrix generator (QuestionType x Maturity) as fallback
        // Only use the matrix when there's actual data or informal practices to back it up.
        // Without data, the matrix generates plausible-sounding but fabricated answers — skip to Phase 5 (honest "no data") instead.
        if (profile && questionType && maturityResolver && matrixGenerator) {
            const maturityBand = maturityResolver.resolve(profile, matchResult, hasData);
            const hasOperationalData = [...context.operational, ...context.calculated].some(p => p.value !== null && p.value !== undefined && p.value !== '');
            const shouldUseMatrix = hasOperationalData || maturityBand === 'informal' || maturityBand === 'formal';
            if (shouldUseMatrix) {
                const matrixAnswer = matrixGenerator.generate(questionType, maturityBand, matchResult, dataMap, context, profile, framework);
                if (matrixAnswer) {
                    const primaryPoint = allPoints[0];
                    return {
                        answer: matrixAnswer,
                        dataValue: primaryPoint ? `${primaryPoint.value}${primaryPoint.unit ? ' ' + primaryPoint.unit : ''}` : undefined,
                        dataSource: primaryPoint?.source,
                        usedPractice: maturityBand === 'informal' || maturityBand === 'none',
                    };
                }
            }
        }
        // Phase 3: Try informal practice handler
        if (profile && informalPracticeHandler) {
            const relevant = informalPracticeHandler.findRelevant(profile, matchResult);
            if (relevant.length > 0) {
                const answer = informalPracticeHandler.generateAnswer('', // company name — pack should resolve from profile
                relevant, matchResult, '', // industry — pack should resolve from profile
                framework);
                return { answer, usedPractice: true };
            }
        }
        // Phase 4: Structured data points — only from primary domain (avoid dumping company profile for unrelated questions)
        const primaryDomain = matchResult.primaryDomain;
        const relevantPoints = primaryDomain
            ? allPoints.filter(p => p.domain === primaryDomain || matchResult.secondaryDomains.slice(0, 1).includes(p.domain))
            : allPoints;
        if (relevantPoints.length > 0) {
            const statements = relevantPoints.slice(0, 5).filter(p => p.value !== null && p.value !== undefined).map(p => {
                if (typeof p.value === 'boolean')
                    return `${p.label}: ${p.value ? 'Yes' : 'No'}`;
                return `${p.label}: ${p.value}${p.unit ? ' ' + p.unit : ''}`;
            });
            if (statements.length > 0) {
                let answer = statements.join('. ') + '.';
                answer += getFrameworkNote(framework, frameworkNotes);
                return {
                    answer,
                    dataValue: relevantPoints[0]?.value !== undefined ? `${relevantPoints[0].value}${relevantPoints[0].unit ? ' ' + relevantPoints[0].unit : ''}` : undefined,
                };
            }
        }
        // Phase 5: No data at all — honest answer
        return {
            answer: 'We do not currently have data available for this disclosure. We are establishing data collection processes and expect to report on this in our next reporting cycle.',
        };
    }
    function generateAnswerDraft(question, matchResult, dataContext, _config, profile, classification) {
        const framework = question.framework;
        const questionType = classification?.questionType;
        const { answer, dataValue, dataSource, usedPractice } = generateSimpleAnswer(dataContext, matchResult, framework, profile, questionType);
        const answerConfidence = determineConfidence(dataContext, matchResult);
        const limitations = [...dataContext.metadata.dataGaps];
        const assumptions = [];
        const hasEstimates = dataContext.calculated.some(p => p.label.toLowerCase().includes('estimate') ||
            p.label.toLowerCase().includes('auto-calculated') ||
            p.confidence === 'low' ||
            p.confidence === 'medium');
        if (hasEstimates) {
            assumptions.push('Some values are estimates based on activity data and standard conversion factors.');
        }
        let confidenceSource;
        if (answerConfidence === 'none') {
            confidenceSource = 'unknown';
        }
        else if (hasEstimates || answerConfidence === 'low') {
            confidenceSource = 'estimated';
        }
        else {
            confidenceSource = 'provided';
        }
        // Collect metric keys used
        const allPoints = [...dataContext.company, ...dataContext.operational, ...dataContext.calculated];
        const metricKeysUsed = [...new Set(allPoints.map(p => fieldToMetricKey[p.field]).filter((k) => !!k))];
        // Merge CSV metric keys
        if (matchResult.csvMetricKeys) {
            for (const k of matchResult.csvMetricKeys) {
                if (!metricKeysUsed.includes(k))
                    metricKeysUsed.push(k);
            }
        }
        // Upgrade confidence if informal practice filled the gap
        if (usedPractice && confidenceSource === 'unknown') {
            confidenceSource = 'estimated';
        }
        // Apply defensive rewriting or mark as unknown
        let finalAnswer = answer;
        const promptForMissing = matchResult.csvPromptIfMissing || undefined;
        if (confidenceSource === 'unknown' && !usedPractice) {
            const promptSuffix = promptForMissing ? ` ${promptForMissing}` : '';
            finalAnswer = `Unknown — input required.${promptSuffix}`;
        }
        else if (scrubRules.length > 0) {
            finalAnswer = applyRewriteRules(finalAnswer, scrubRules);
        }
        return {
            questionId: question.id,
            questionText: question.text,
            category: question.category,
            questionType,
            matchResult,
            dataContext,
            answer: finalAnswer,
            dataValue,
            dataPeriod: dataContext.metadata.reportingPeriod,
            dataSource,
            answerConfidence,
            confidenceSource,
            methodology: undefined,
            assumptions: assumptions.length > 0 ? assumptions : undefined,
            limitations: limitations.length > 0 ? limitations : undefined,
            evidence: '',
            metricKeysUsed,
            promptForMissing,
            needsReview: answerConfidence !== 'high',
            isEstimate: hasEstimates,
            hasDataGaps: dataContext.metadata.dataGaps.length > 0,
        };
    }
    function generateAnswerDrafts(questions, matchResults, dataContexts, config, profile, classifications) {
        return questions.map((q, i) => generateAnswerDraft(q, matchResults[i], dataContexts[i], config, profile, classifications?.[i]));
    }
    return { generateAnswerDraft, generateAnswerDrafts };
}
//# sourceMappingURL=answerGenerator.js.map