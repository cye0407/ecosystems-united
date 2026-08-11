import { beforeEach, describe, expect, it } from "vitest";
import { deriveWeakIssues, saveAssessmentHandoff } from "../assessment-handoff";

describe("assessment playbook handoff", () => {
  beforeEach(() => localStorage.clear());

  it("deduplicates issue keys from partial and weak answers", () => {
    expect(deriveWeakIssues(
      [2, 1, 0, null],
      ["energy", "visibility", "visibility", "buyer"],
    )).toEqual(["visibility"]);
  });

  it("stores a versioned, non-PII handoff for the selected stack", () => {
    saveAssessmentHandoff({
      stack: 4,
      score: 9,
      resultLevel: "Partial capability",
      answers: [0, 2, 1],
      issueByQuestion: ["oneBadYear", "oneBuyer", "keyPerson"],
    });

    expect(JSON.parse(localStorage.getItem("eu:playbook:stack-4")!)).toEqual({
      version: 1,
      assessmentScore: 9,
      assessmentResult: "Partial capability",
      issues: ["oneBadYear", "keyPerson"],
    });
  });
});
