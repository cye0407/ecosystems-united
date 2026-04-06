import { describe, it, expect } from 'vitest';
import * as XLSX from 'xlsx';
import { parseQuestionFile, reprocessWithMapping, parseQuestionsFromText } from '../questionParser';

// ============================================
// Helpers — build fake File objects from data
// ============================================

function makeExcelFile(
  sheets: Record<string, Record<string, unknown>[]>,
  fileName = 'test.xlsx'
): File {
  const wb = XLSX.utils.book_new();
  for (const [name, rows] of Object.entries(sheets)) {
    const ws = XLSX.utils.json_to_sheet(rows);
    XLSX.utils.book_append_sheet(wb, ws, name);
  }
  const buf = XLSX.write(wb, { type: 'array', bookType: 'xlsx' });
  return new File([buf], fileName, {
    type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
  });
}

function makeCsvFile(csv: string, fileName = 'test.csv'): File {
  const buf = new TextEncoder().encode(csv);
  return new File([buf], fileName, { type: 'text/csv' });
}

// ============================================
// looksLikeQuestion (tested via parseSheetData)
// ============================================

describe('question detection heuristics', () => {
  it('detects interrogative questions', async () => {
    const file = makeExcelFile({
      Sheet1: [
        { Question: 'What are your total greenhouse gas emissions?' },
        { Question: 'How does your company manage water resources?' },
        { Question: 'Does your organization have an environmental policy?' },
      ],
    });
    const result = await parseQuestionFile(file);
    expect(result.success).toBe(true);
    expect(result.questions).toHaveLength(3);
  });

  it('detects imperative questions', async () => {
    const file = makeExcelFile({
      Sheet1: [
        { Question: 'Describe your waste management procedures.' },
        { Question: 'Provide details of your energy consumption in the reporting period.' },
        { Question: 'List all certifications related to environmental management.' },
      ],
    });
    const result = await parseQuestionFile(file);
    expect(result.success).toBe(true);
    expect(result.questions).toHaveLength(3);
  });

  it('detects questions ending with question mark even if short', async () => {
    const file = makeExcelFile({
      Sheet1: [
        { Question: 'ISO 14001?' },
        { Question: 'Scope 1?' },
      ],
    });
    const result = await parseQuestionFile(file);
    expect(result.success).toBe(true);
    expect(result.questions).toHaveLength(2);
  });

  it('detects questions with reference IDs', async () => {
    const file = makeExcelFile({
      Sheet1: [
        { Question: 'C1.1 Report your absolute Scope 1 emissions' },
        { Question: 'GRI 305 Provide a summary of your emissions data' },
        { Question: 'ESRS E1 Describe climate change mitigation targets' },
      ],
    });
    const result = await parseQuestionFile(file);
    expect(result.success).toBe(true);
    expect(result.questions.length).toBeGreaterThanOrEqual(2);
  });

  it('skips guidance text, instructions, and metadata', async () => {
    const file = makeExcelFile({
      Sheet1: [
        { Question: 'What are your emissions?' },
        { Question: 'Guidance: Please enter data in tonnes CO2e' },
        { Question: 'Note: This section is optional' },
        { Question: 'Instructions: Fill in all fields below' },
        { Question: 'Select one from the dropdown' },
        { Question: 'yes' },
        { Question: 'N/A' },
        { Question: '42' },
        { Question: 'Copyright 2024 EcoVadis' },
      ],
    });
    const result = await parseQuestionFile(file);
    expect(result.success).toBe(true);
    expect(result.questions).toHaveLength(1);
    expect(result.questions[0].text).toContain('emissions');
  });

  it('skips text longer than 300 characters', async () => {
    const longText = 'A'.repeat(301);
    const file = makeExcelFile({
      Sheet1: [
        { Question: 'What are your emissions?' },
        { Question: longText },
      ],
    });
    const result = await parseQuestionFile(file);
    expect(result.questions).toHaveLength(1);
  });

  it('skips text starting with lowercase', async () => {
    const file = makeExcelFile({
      Sheet1: [
        { Question: 'What are your emissions?' },
        { Question: 'this is just a note about the above question' },
      ],
    });
    const result = await parseQuestionFile(file);
    expect(result.questions).toHaveLength(1);
  });
});

// ============================================
// Column Detection
// ============================================

describe('column detection', () => {
  it('auto-detects "Question" column header', async () => {
    const file = makeExcelFile({
      Sheet1: [
        { ID: '1', Question: 'What are your Scope 1 emissions?', Category: 'Environment' },
        { ID: '2', Question: 'Describe your water management approach.', Category: 'Environment' },
      ],
    });
    const result = await parseQuestionFile(file);
    expect(result.success).toBe(true);
    expect(result.questions).toHaveLength(2);
    expect(result.metadata.columnMapping.questionText).toBe('Question');
  });

  it('auto-detects "Description" column header', async () => {
    const file = makeExcelFile({
      Sheet1: [
        { Ref: 'E1', Description: 'What is your total electricity consumption?', Section: 'Energy' },
      ],
    });
    const result = await parseQuestionFile(file);
    expect(result.success).toBe(true);
    expect(result.questions).toHaveLength(1);
  });

  it('auto-detects "Indicator" column header', async () => {
    const file = makeExcelFile({
      Sheet1: [
        { Code: 'GRI-305-1', Indicator: 'Describe direct GHG emissions (Scope 1).', Topic: 'Emissions' },
      ],
    });
    const result = await parseQuestionFile(file);
    expect(result.success).toBe(true);
    expect(result.questions).toHaveLength(1);
  });

  it('uses heuristic fallback when no header matches patterns', async () => {
    const file = makeExcelFile({
      Sheet1: [
        { 'Column A': '1', 'Column B': 'What are your total emissions by scope?', 'Column C': 'Env' },
        { 'Column A': '2', 'Column B': 'Describe your workforce diversity policy.', 'Column C': 'Soc' },
        { 'Column A': '3', 'Column B': 'How do you manage hazardous waste disposal?', 'Column C': 'Env' },
      ],
    });
    const result = await parseQuestionFile(file);
    expect(result.success).toBe(true);
    // Should pick Column B as question column via heuristics (question marks, length, action words)
    expect(result.questions.length).toBeGreaterThanOrEqual(2);
  });

  it('detects category column', async () => {
    const file = makeExcelFile({
      Sheet1: [
        { Question: 'What are your Scope 1 emissions?', Category: 'Environment' },
      ],
    });
    const result = await parseQuestionFile(file);
    expect(result.metadata.columnMapping.category).toBe('Category');
    expect(result.questions[0].category).toBe('Environment');
  });

  it('detects referenceId column', async () => {
    const file = makeExcelFile({
      Sheet1: [
        { Reference: 'E1.1', Question: 'What are your total emissions?' },
      ],
    });
    const result = await parseQuestionFile(file);
    expect(result.metadata.columnMapping.referenceId).toBe('Reference');
    expect(result.questions[0].referenceId).toBe('E1.1');
  });
});

// ============================================
// Framework Detection
// ============================================

describe('framework detection', () => {
  it('detects CDP framework from question text', async () => {
    const file = makeExcelFile({
      Sheet1: [
        { Question: 'C1.1 What does your organization do?' },
        { Question: 'C2.1 Does your organization have a process for identifying climate-related risks?' },
      ],
    });
    const result = await parseQuestionFile(file);
    expect(result.metadata.detectedFramework).toBe('CDP');
  });

  it('detects GRI framework', async () => {
    const file = makeExcelFile({
      Sheet1: [
        { Question: 'GRI 305 Report your direct emissions data.' },
        { Question: 'GRI 302 Describe energy consumption within the organization.' },
      ],
    });
    const result = await parseQuestionFile(file);
    expect(result.metadata.detectedFramework).toBe('GRI');
  });

  it('detects CSRD/ESRS framework', async () => {
    const file = makeExcelFile({
      Sheet1: [
        { Question: 'ESRS E1 Describe your climate change mitigation targets.' },
        { Question: 'ESRS S1 Describe working conditions in your operations.' },
      ],
    });
    const result = await parseQuestionFile(file);
    expect(result.metadata.detectedFramework).toBe('CSRD');
  });

  it('detects EcoVadis framework', async () => {
    const file = makeExcelFile({
      Sheet1: [
        { Question: 'Does your company have an EcoVadis rating?' },
        { Question: 'What actions have you taken to improve your EcoVadis score?' },
      ],
    });
    const result = await parseQuestionFile(file);
    expect(result.metadata.detectedFramework).toBe('EcoVadis');
  });

  it('returns undefined for generic questionnaire', async () => {
    const file = makeExcelFile({
      Sheet1: [
        { Question: 'What is your total energy consumption?' },
        { Question: 'Describe your waste management approach.' },
      ],
    });
    const result = await parseQuestionFile(file);
    expect(result.metadata.detectedFramework).toBeUndefined();
  });
});

// ============================================
// Multi-Sheet Handling
// ============================================

describe('multi-sheet handling', () => {
  it('parses questions from multiple sheets', async () => {
    const file = makeExcelFile({
      Environment: [
        { Question: 'What are your carbon emissions?' },
      ],
      Social: [
        { Question: 'Describe your workforce diversity approach.' },
      ],
    });
    const result = await parseQuestionFile(file);
    expect(result.success).toBe(true);
    expect(result.questions).toHaveLength(2);
  });

  it('uses sheet name as category for multi-sheet workbooks', async () => {
    const file = makeExcelFile({
      Environment: [
        { Question: 'What are your emissions?' },
      ],
      Governance: [
        { Question: 'Describe your board oversight of sustainability.' },
      ],
    });
    const result = await parseQuestionFile(file);
    const envQ = result.questions.find(q => q.text.includes('emissions'));
    const govQ = result.questions.find(q => q.text.includes('board'));
    expect(envQ?.category).toBe('Environment');
    expect(govQ?.category).toBe('Governance');
  });

  it('skips guidance/instruction sheets', async () => {
    const file = makeExcelFile({
      Instructions: [
        { Question: 'Please fill in all fields below.' },
        { Question: 'Select from the options provided.' },
      ],
      Guidance: [
        { Question: 'Refer to the glossary for definitions.' },
      ],
      Questions: [
        { Question: 'What are your total emissions?' },
      ],
    });
    const result = await parseQuestionFile(file);
    expect(result.success).toBe(true);
    expect(result.questions).toHaveLength(1);
    expect(result.questions[0].text).toContain('emissions');
  });

  it('skips dropdown/validation/summary sheets', async () => {
    const file = makeExcelFile({
      Questionnaire: [
        { Question: 'Describe your energy efficiency measures.' },
      ],
      Dropdown_Options: [
        { Question: 'yes' },
        { Question: 'no' },
      ],
      Summary: [
        { Question: 'Total score: 85' },
      ],
    });
    const result = await parseQuestionFile(file);
    expect(result.questions).toHaveLength(1);
  });
});

// ============================================
// Deduplication
// ============================================

describe('deduplication', () => {
  it('removes exact duplicate questions', async () => {
    const file = makeExcelFile({
      Sheet1: [
        { Question: 'What are your Scope 1 emissions?' },
        { Question: 'What are your Scope 1 emissions?' },
      ],
    });
    const result = await parseQuestionFile(file);
    expect(result.questions).toHaveLength(1);
  });

  it('removes case-insensitive duplicates', async () => {
    const file = makeExcelFile({
      Sheet1: [
        { Question: 'What are your Scope 1 emissions?' },
        { Question: 'what are your scope 1 emissions?' },
      ],
    });
    const result = await parseQuestionFile(file);
    expect(result.questions).toHaveLength(1);
  });

  it('removes whitespace-variant duplicates', async () => {
    const file = makeExcelFile({
      Sheet1: [
        { Question: 'What are your  Scope 1  emissions?' },
        { Question: 'What are your Scope 1 emissions?' },
      ],
    });
    const result = await parseQuestionFile(file);
    expect(result.questions).toHaveLength(1);
  });
});

// ============================================
// Edge Cases
// ============================================

describe('edge cases', () => {
  it('handles empty workbook', async () => {
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, XLSX.utils.aoa_to_sheet([]), 'Empty');
    const buf = XLSX.write(wb, { type: 'array', bookType: 'xlsx' });
    const file = new File([buf], 'empty.xlsx', {
      type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    });
    const result = await parseQuestionFile(file);
    expect(result.success).toBe(false);
    expect(result.questions).toHaveLength(0);
  });

  it('handles file with only headers', async () => {
    const file = makeExcelFile({
      Sheet1: [],
    });
    const result = await parseQuestionFile(file);
    expect(result.success).toBe(false);
  });

  it('returns unsupported format error for .doc', async () => {
    const file = new File([new ArrayBuffer(10)], 'test.doc', {
      type: 'application/msword',
    });
    const result = await parseQuestionFile(file);
    expect(result.success).toBe(false);
    expect(result.errors[0]).toContain('.doc');
    expect(result.errors[0]).toContain('.docx');
  });

  it('returns error for unknown file extensions', async () => {
    const file = new File([new ArrayBuffer(10)], 'test.txt');
    const result = await parseQuestionFile(file);
    expect(result.success).toBe(false);
    expect(result.errors[0]).toContain('Unsupported');
  });

  it('warns when >100 questions extracted', async () => {
    const rows = Array.from({ length: 120 }, (_, i) => ({
      Question: `What is metric ${i + 1} in your sustainability report?`,
    }));
    const file = makeExcelFile({ Sheet1: rows });
    const result = await parseQuestionFile(file);
    expect(result.success).toBe(true);
    expect(result.errors.some(e => e.includes('seems high'))).toBe(true);
    expect(result.metadata.autoDetectionConfidence).toBe('low');
  });

  it('preserves row index for traceability', async () => {
    const file = makeExcelFile({
      Sheet1: [
        { Question: 'Not a question' },
        { Question: 'What are your Scope 1 emissions?' },
        { Question: 'Another non-question' },
        { Question: 'How much electricity do you consume?' },
      ],
    });
    const result = await parseQuestionFile(file);
    expect(result.questions).toHaveLength(2);
    // rowIndex should be row number in Excel (header=1, first data=2)
    expect(result.questions[0].rowIndex).toBe(3); // row 3 (1-indexed, header + 1 skip + this)
    expect(result.questions[1].rowIndex).toBe(5);
  });
});

// ============================================
// Manual Mapping (reprocessWithMapping)
// ============================================

describe('reprocessWithMapping', () => {
  it('uses manually specified column mapping', async () => {
    const file = makeExcelFile({
      Sheet1: [
        { 'Col A': 'ENV', 'Col B': 'What is your electricity consumption?', 'Col C': 'E1.1' },
        { 'Col A': 'SOC', 'Col B': 'Describe workforce diversity.', 'Col C': 'S1.1' },
      ],
    });
    const result = await reprocessWithMapping(file, {
      questionText: 'Col B',
      category: 'Col A',
      referenceId: 'Col C',
    });
    expect(result.success).toBe(true);
    expect(result.questions).toHaveLength(2);
    expect(result.questions[0].category).toBe('ENV');
    expect(result.questions[0].referenceId).toBe('E1.1');
  });

  it('returns empty when mapping points to wrong column', async () => {
    const file = makeExcelFile({
      Sheet1: [
        { 'Col A': '1', 'Col B': 'What are your emissions?' },
      ],
    });
    const result = await reprocessWithMapping(file, {
      questionText: 'Col A',
    });
    // Col A has '1' which is numeric-only and should be skipped
    expect(result.questions).toHaveLength(0);
  });
});

// ============================================
// CSV Parsing
// ============================================

describe('CSV parsing', () => {
  it('parses a simple CSV questionnaire', async () => {
    const csv = `Question,Category
What are your total carbon emissions?,Environment
Describe your diversity policy.,Social
How do you handle waste disposal?,Environment`;
    const file = makeCsvFile(csv);
    const result = await parseQuestionFile(file);
    expect(result.success).toBe(true);
    expect(result.questions).toHaveLength(3);
  });
});

// ============================================
// parseQuestionsFromText (plain text parser)
// ============================================

describe('parseQuestionsFromText', () => {
  it('splits text into questions by line', () => {
    const questions = parseQuestionsFromText(
      'What are your emissions?\nHow much water do you use?\nDescribe your waste policy.'
    );
    expect(questions).toHaveLength(3);
    expect(questions[0].text).toBe('What are your emissions?');
    expect(questions[2].text).toBe('Describe your waste policy.');
  });

  it('skips empty lines', () => {
    const questions = parseQuestionsFromText(
      'What are your emissions?\n\n\nHow much water?'
    );
    expect(questions).toHaveLength(2);
  });

  it('assigns sequential rowIndex', () => {
    const questions = parseQuestionsFromText('Line 1\nLine 2\nLine 3');
    expect(questions[0].rowIndex).toBe(1);
    expect(questions[1].rowIndex).toBe(2);
    expect(questions[2].rowIndex).toBe(3);
  });

  it('generates unique IDs', () => {
    const questions = parseQuestionsFromText('Q1?\nQ2?\nQ3?');
    const ids = new Set(questions.map(q => q.id));
    expect(ids.size).toBe(3);
  });
});

// ============================================
// Required Field Parsing
// ============================================

describe('required field parsing', () => {
  it('parses required=yes as true', async () => {
    const file = makeExcelFile({
      Sheet1: [
        { Question: 'What are your Scope 1 emissions?', Required: 'Yes' },
        { Question: 'Describe your biodiversity approach.', Required: 'No' },
      ],
    });
    const result = await parseQuestionFile(file);
    expect(result.questions[0].required).toBe(true);
    expect(result.questions[1].required).toBe(false);
  });

  it('parses required=mandatory as true', async () => {
    const file = makeExcelFile({
      Sheet1: [
        { Question: 'What are your Scope 2 emissions?', Required: 'mandatory' },
        { Question: 'How do you manage water use?', Required: 'optional' },
      ],
    });
    const result = await parseQuestionFile(file);
    expect(result.questions[0].required).toBe(true);
    expect(result.questions[1].required).toBe(false);
  });
});
