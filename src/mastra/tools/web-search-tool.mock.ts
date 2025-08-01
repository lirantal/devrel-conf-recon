import { createTool } from '@mastra/core/tools';
import { z } from 'zod';

export const webSearchTool = createTool({
  id: 'web-search',
  description: 'A mock web search tool that returns canned results.',
  inputSchema: z.object({
    query: z.string().describe('The keyword or query to search for.'),
  }),
  outputSchema: z.object({
    results: z.string(),
  }),
  execute: async ({ context }) => {
    const { query } = context;
    console.log('Returning mock results for:', query);

    // Return some predefined mock data
    if (query.toLocaleLowerCase().startsWith('nodetlv')) {
      return {
        results: `
[1] Title: NodeTLV Conference - NodeTLV
[1] URL Source: https://www.nodetlv.com/
[1] Description: NodeTLV, the premier Node.js conference in Tel Aviv, featuring expert talks, networking, and the latest in JavaScript backend development.

[2] Title: The NodeTLV 2025 agenda is now live We're excited to share the ...
[2] URL Source: https://m.facebook.com/nodetlv/posts/the-nodetlv-2025-agenda-is-now-livewere-excited-to-share-the-full-schedule-for-t/1140800971177211/
[2] Description: The NodeTLV 2025 agenda is now live We're excited to share the full schedule for the conference, packed with top-tier speakers and technical sessions...

[3] Title: NodeTLV Conference - X
[3] URL Source: https://x.com/nodetlv?lang=en
[3] Description: Israel's Annual Node.js Conference ... The NodeTLV 2025 schedule is now live. Explore the full agenda, discover the talks, and start planning your day.

[4] Title: Node.TLV - The NodeTLV 2025 agenda is now live We're excited ...
[4] URL Source: https://m.facebook.com/nodetlv/photos/the-nodetlv-2025-agenda-is-now-livewere-excited-to-share-the-full-schedule-for-t/1140800934510548/
[4] Description: The NodeTLV 2025 agenda is now live We're excited to share the full schedule for the conference, packed with top-tier speakers and technical sessions...

[5] Title: NodeTLV | The NodeTLV 2025 agenda is now live We're excited to ...
[5] URL Source: https://www.instagram.com/p/DHn5i7hvT-f/
[5] Description: We're excited to share the full schedule for the conference, packed with top-tier speakers and technical sessions you won't want to miss. Join us on June 26th ...

[6] Title: Agenda - NodeTLV
[6] URL Source: https://www.nodetlv.com/2025-agenda/
[6] Description: Missing: Israel conference

[7] Title: NodeTLV | LinkedIn
[7] URL Source: https://il.linkedin.com/showcase/node.tlv/?trk=public_post_reshare_feed-actor-name
[7] Description: The NodeTLV 2025 schedule is now live. Explore the full agenda, discover the talks, and start planning your day. June 26th, 2025 NodeTLV.com #NodeTLV ...

[8] Title: NodeTLV '25 - Eventzilla
[8] URL Source: https://www.eventzilla.net/e/nodetlv-25-2138641309
[8] Description: After 5 SOLD OUT years, we are thrilled to announce the 6th edition of Node.TLV conference. The conference is held in the center of the vibrant city of Tel Aviv ...

[9] Title: NodeTLV 25, David Intercontinental, Tel Aviv-Yafo, 26 June 2025
[9] URL Source: https://allevents.in/tel%2520aviv-yafo/nodetlv-25/10000976095948257
[9] Description: Find tickets & information for NodeTLV 25. happening at David Intercontinental, Tel Aviv-Yafo, TA on Thu, 26 Jun, 2025 at 08:00 am IST.

[10] Title: We are proud to announce that Honeycomb will be sponsoring ...
[10] URL Source: https://www.instagram.com/nodetlvconf/p/DH_D8rtu0_O/
[10] Description: The NodeTLV 2025 agenda is now live We're excited to share the full schedule for the conference, packed with top-tier speakers and technical sessions you ...
        `
      };
    }

    return { results: 'No mock results found for this query.' };
  },
});
