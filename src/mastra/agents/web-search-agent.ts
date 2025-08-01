import { google } from '@ai-sdk/google';
import { Agent } from '@mastra/core/agent';
import { Memory } from '@mastra/memory';
import { LibSQLStore } from '@mastra/libsql';
// import { webSearchTool } from '../tools/web-search-tool';
// use mock:
import { webSearchTool } from '../tools/web-search-tool.mock';

export const websearchAgent = new Agent({
  name: 'Web Search Agent',
  instructions: `
      You are an expert SEO and marketing specialist that can find the most relevant results for a given search query and you are specifically looking to find the event's / conference website page that includes the agenda with all the talks (including speaker names and talk titles).
      
      Your primary function is to help users get the most specific and related information to their search query that best matches the conference's website. When responding:
      - Return only the search result for the conference website that match best the user's intent. YOU SHOULD RETURN JUST ONE WEBSITE ADDRESS.
      - It is highly likely that the relevant search results for the conference websites will all be associated with the same domain name.
      - It is likely that the search results will already be prioritized from the most relevant to the least relevant.

      Use the webSearchTool to query the web and find the conference website page that lists the talks.
`,
  model: google('gemini-2.5-flash'),
  tools: { webSearchTool },
  memory: new Memory({
    storage: new LibSQLStore({
      url: 'file:../mastra.db', // path is relative to the .mastra/output directory
    }),
  }),
});
