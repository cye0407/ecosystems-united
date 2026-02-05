// ============================================
// Supabase Edge Function: generate-answer
// Calls Anthropic API to enhance questionnaire answers
// ============================================

import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

interface RequestBody {
  question: string;
  category?: string;
  dataPoints: Array<{
    label: string;
    value: string | number;
    unit?: string;
  }>;
  reportingPeriod?: string;
  sites?: string[];
  verbosity?: 'concise' | 'standard' | 'detailed';
  includeMethodology?: boolean;
  includeAssumptions?: boolean;
  includeLimitations?: boolean;
}

serve(async (req) => {
  // Handle CORS preflight
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const anthropicApiKey = Deno.env.get('ANTHROPIC_API_KEY');
    
    if (!anthropicApiKey) {
      throw new Error('ANTHROPIC_API_KEY not configured');
    }

    const body: RequestBody = await req.json();
    
    const {
      question,
      category,
      dataPoints,
      reportingPeriod,
      sites,
      verbosity = 'standard',
      includeMethodology = true,
      includeAssumptions = true,
      includeLimitations = true,
    } = body;

    // Build the data section
    const dataSection = dataPoints.length > 0
      ? dataPoints.map(p => `- ${p.label}: ${p.value}${p.unit ? ' ' + p.unit : ''}`).join('\n')
      : 'No relevant data available.';

    // Verbosity instruction
    const verbosityInstruction = {
      concise: 'Provide a brief, direct answer (1-2 sentences).',
      standard: 'Provide a clear, professional answer (2-4 sentences).',
      detailed: 'Provide a comprehensive answer with context (3-6 sentences).'
    }[verbosity];

    // Build the prompt
    const prompt = `You are helping a company respond to a sustainability questionnaire. Based on the available data, compose a professional response to the following question.

Question: ${question}
${category ? `Category: ${category}` : ''}

Available Data:
${dataSection}

${reportingPeriod ? `Reporting Period: ${reportingPeriod}` : ''}
${sites && sites.length > 0 ? `Sites Covered: ${sites.join(', ')}` : ''}

Instructions:
- ${verbosityInstruction}
- Use the provided data values accurately.
- If data is incomplete, acknowledge limitations honestly.
- Write in first person plural (we, our).
- Do not make up data that is not provided.
- Be professional and suitable for formal questionnaire submission.
${includeMethodology ? '- Include brief methodology notes where relevant.' : ''}
${includeAssumptions ? '- Note any assumptions made.' : ''}
${includeLimitations ? '- Acknowledge data limitations if significant.' : ''}

Response:`;

    // Call Anthropic API
    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': anthropicApiKey,
        'anthropic-version': '2023-06-01',
      },
      body: JSON.stringify({
        model: 'claude-sonnet-4-20250514',
        max_tokens: 1024,
        messages: [
          {
            role: 'user',
            content: prompt,
          },
        ],
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Anthropic API error:', errorText);
      throw new Error(`Anthropic API error: ${response.status}`);
    }

    const data = await response.json();
    const generatedAnswer = data.content[0]?.text || '';

    return new Response(
      JSON.stringify({
        success: true,
        answer: generatedAnswer.trim(),
        usage: {
          inputTokens: data.usage?.input_tokens,
          outputTokens: data.usage?.output_tokens,
        },
      }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    );

  } catch (error) {
    console.error('Error in generate-answer function:', error);
    
    return new Response(
      JSON.stringify({
        success: false,
        error: error.message || 'An error occurred',
      }),
      {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    );
  }
});
