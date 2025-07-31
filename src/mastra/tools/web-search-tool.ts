import { createTool } from '@mastra/core/tools';
import { z } from 'zod';

export const webSearchTool = createTool({
  id: 'web-search',
  description: 'Perform a web search for a keyword (or query) and return all the results.',
  inputSchema: z.object({
    query: z.string().describe('The keyword or query to search for.'),
  }),
  outputSchema: z.object({
    results: z.string(),
  }),
  execute: async ({ context }) => {
    const apiKey = process.env.JINA_AI_API_KEY;
    if (!apiKey) {
      throw new Error('JINA_AI_API_KEY environment variable is not set.');
    }

    const url = `https://s.jina.ai/?q=${encodeURIComponent(context.query)}`;
    const headers = {
      'Authorization': `Bearer ${apiKey}`,
      'X-Respond-With': 'no-content',
    };

    const response = await fetch(url, { headers });

    if (!response.ok) {
      throw new Error(`Jina AI API request failed with status ${response.status}`);
    }

    const results = await response.text();

    return {
      results,
    };
  },
});
