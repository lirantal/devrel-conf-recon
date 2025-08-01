import { createTool } from '@mastra/core/tools';

// A simple in-memory cache
const cache = new Map<string, string>();
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
    const { query } = context;

    // Check the cache first
    if (cache.has(query)) {
      console.log('Returning cached results for:', query);
      return { results: cache.get(query)! };
    }

    const apiKey = process.env.JINA_AI_API_KEY;
    if (!apiKey) {
      throw new Error('JINA_AI_API_KEY environment variable is not set.');
    }

    const url = `https://s.jina.ai/?q=${encodeURIComponent(query)}`;
    const headers = {
      'Authorization': `Bearer ${apiKey}`,
      'X-Respond-With': 'no-content',
    };

    const response = await fetch(url, { headers });

    if (!response.ok) {
      throw new Error(`Jina AI API request failed with status ${response.status}`);
    }

    const results = await response.text();

    // Store the result in the cache
    cache.set(query, results);

    return {
      results,
    };
  },
});
