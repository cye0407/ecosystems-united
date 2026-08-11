export interface AssessmentHandoffInput {
  stack: number;
  score: number;
  resultLevel: string;
  answers: (number | null)[];
  issueByQuestion: (string | null)[];
}

export function deriveWeakIssues(
  answers: (number | null)[],
  issueByQuestion: (string | null)[],
): string[] {
  return Array.from(new Set(
    answers.flatMap((answer, index) => {
      const issue = issueByQuestion[index];
      return answer !== null && answer <= 1 && issue ? [issue] : [];
    }),
  ));
}

export function saveAssessmentHandoff(input: AssessmentHandoffInput): void {
  if (typeof window === "undefined") return;
  const issues = deriveWeakIssues(input.answers, input.issueByQuestion);
  try {
    localStorage.setItem(
      `eu:playbook:stack-${input.stack}`,
      JSON.stringify({
        version: 1,
        assessmentScore: input.score,
        assessmentResult: input.resultLevel,
        issues,
      }),
    );
  } catch {
    // Storage can be unavailable in private browsing. The worksheet still works.
  }
}
