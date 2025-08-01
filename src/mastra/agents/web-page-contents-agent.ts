import { google } from '@ai-sdk/google';
import { Agent } from '@mastra/core/agent';
import { Memory } from '@mastra/memory';
import { LibSQLStore } from '@mastra/libsql';
// import { webPageContentsTool } from '../tools/web-page-contents-tool';
// use mock:
import { webPageContentsTool } from '../tools/web-page-contents-tool.mock'; 


export const webPageContentsAgent = new Agent({
  name: 'Web Page Contents Agent',
  instructions: `
      You are an expert at retrieving and extracting the most relevant information from a web page.

      Your primary function is to help users get the most specific and related information from a given URL. When responding:
      - Return the full contents of the web page.
      - The content will be in Markdown format.
      - You should not summarize or otherwise alter the content of the page.

      Use the webPageContentsTool to retrieve the contents of the web page.
`,
  model: google('gemini-1.5-flash'),
  tools: { webPageContentsTool },
  memory: new Memory({
    storage: new LibSQLStore({
      url: 'file:../mastra.db', // path is relative to the .mastra/output directory
    }),
  }),
});
