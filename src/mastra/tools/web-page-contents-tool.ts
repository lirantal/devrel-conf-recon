import { createTool } from '@mastra/core/tools';

// A simple in-memory cache
const cache = new Map<string, string>();
import { z } from 'zod';

export const webPageContentsTool = createTool({
  id: 'web-page-contents',
  description: 'Retrieve the contents of a web page given a URL.',
  inputSchema: z.object({
    url: z.string().describe('The URL of the web page to retrieve.'),
  }),
  outputSchema: z.object({
    contents: z.string(),
  }),
  execute: async ({ context }) => {
    const { url: pageUrl } = context;

    // Check the cache first
    if (cache.has(pageUrl)) {
      console.log('Returning cached results for:', pageUrl);
      return { contents: cache.get(pageUrl)! };
    }

    const apiKey = process.env.JINA_AI_API_KEY;
    if (!apiKey) {
      throw new Error('JINA_AI_API_KEY environment variable is not set.');
    }

    const url = `https://r.jina.ai/${pageUrl}`;
    const headers = {
      'Authorization': `Bearer ${apiKey}`,
    };

    const response = await fetch(url, { headers });

    if (!response.ok) {
      throw new Error(`Jina AI API request failed with status ${response.status}`);
    }

    const contents = await response.text();

    // Store the result in the cache
    cache.set(pageUrl, contents);

    return {
      contents,
    };
  },
});
