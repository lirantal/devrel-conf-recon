
import { Mastra } from '@mastra/core/mastra';
import { PinoLogger } from '@mastra/loggers';
import { LibSQLStore } from '@mastra/libsql';
import { confWorkflow } from './workflows/conf-workflow';
import { websearchAgent } from './agents/web-search-agent';
import { webPageContentsAgent } from './agents/web-page-contents-agent';

export const mastra = new Mastra({
  workflows: { confWorkflow },
  agents: { websearchAgent, webPageContentsAgent },
  storage: new LibSQLStore({
    // stores telemetry, evals, ... into memory storage, if it needs to persist, change to file:../mastra.db
    url: ":memory:",
  }),
  logger: new PinoLogger({
    name: 'Mastra',
    level: 'info',
  }),
});
