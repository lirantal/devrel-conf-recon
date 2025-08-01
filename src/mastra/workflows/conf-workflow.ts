import { createStep, createWorkflow } from '@mastra/core/workflows';
import { z } from 'zod';

const searchConferenceWebsite = createStep({
  id: 'search-conference-website',
  description: 'Search the web for the conference website page that contains the talks (agenda)',
  inputSchema: z.object({
    conferenceName: z.string().describe('The conference name to search for security talks in'),
  }),
  outputSchema: z.object({
    websiteURL: z.string(),
  }),
  execute: async ({ inputData, mastra }) => {
    
    if (!inputData) {
      throw new Error('No input data provided');
    }

    const agent = mastra?.getAgent('websearchAgent');
    if (!agent) {
      throw new Error('Agent not found');
    }

    const prompt = `Run a web search to find the conference website's page that contains the full agenda with full schedule for the event: ${inputData.conferenceName}`

    const response = await agent.stream([
      {
        role: 'user',
        content: prompt,
      },
    ]);

    let websiteURL = '';

    for await (const chunk of response.textStream) {
      process.stdout.write(chunk);
      websiteURL += chunk;
    }

    return {
      websiteURL,
    };
  },
});

const fetchConfSecurityTalks = createStep({
  id: 'fetch-conference-security-talks',
  description: 'List security talks in a conference',
  inputSchema: z.object({
    websiteURL: z.string().describe('The website URL that contains all the talks for the conference'),
  }),
  outputSchema: z.object({
    talks: z.string(),
  }),
  execute: async ({ inputData, mastra }) => {
    
    if (!inputData) {
      throw new Error('No input data provided');
    }

    const agent = mastra?.getAgent('webPageContentsTool');
    if (!agent) {
      throw new Error('Agent not found');
    }

    const prompt = `Based on the website URL, extract all the talks from it, and then select all the talks that are related to application security, information security, or cybersecurity.
    
    The conference's website URL is: ${inputData.websiteURL}

    For each security talk in the list of talks for the conference, structure your response exactly as follows:

\`\`\`
══════════════════════════════════════════════════════
Security talks for conference: [Conference name]]
══════════════════════════════════════════════════════

Speaker: [Speaker name]
Talk: [Talk title]
Twitter: [Twitter handle for speaker]
LinkedIn: [LinkedIn URL for speaker]

\`\`\`
    `;

    const response = await agent.stream([
      {
        role: 'user',
        content: prompt,
      },
    ]);

    let talksText = '';

    for await (const chunk of response.textStream) {
      process.stdout.write(chunk);
      talksText += chunk;
    }

    return {
      talks: talksText,
    };
  },
});

const confWorkflow = createWorkflow({
  id: 'conf-workflow',
  inputSchema: z.object({
    conferenceName: z.string().describe('The conference name to get security talks for'),
  }),
  outputSchema: z.object({
    talks: z.string(),
  }),
})
  .then(searchConferenceWebsite)
  .then(fetchConfSecurityTalks);

confWorkflow.commit();

export { confWorkflow };
