import { createTool } from '@mastra/core/tools';
import { z } from 'zod';

export const mockWebPageContentsTool = createTool({
  id: 'web-page-contents',
  description: 'A mock web page contents tool that returns canned results.',
  inputSchema: z.object({
    url: z.string().describe('The URL of the web page to retrieve.'),
  }),
  outputSchema: z.object({
    contents: z.string(),
  }),
  execute: async ({ context }) => {
    const { url } = context;
    console.log('Returning mock results for:', url);

    // Return some predefined mock data
    if (url === 'https://www.nodetlv.com/2025-agenda/') {
      return {
        contents: `
Title: Agenda - NodeTLV

URL Source: https://www.nodetlv.com/2025-agenda/

Markdown Content:
Agenda - NodeTLV

===============
[Skip to content](https://www.nodetlv.com/2025-agenda/#content "Skip to content")

[![Image 3](https://www.nodetlv.com/wp-content/uploads/2025/02/cropped-NodeTLV-website-logo-600x280-px-png-1-500x167.png)](https://www.nodetlv.com/)

*   [Tickets](https://www.nodetlv.com/#tickets)
*   [Job Board](https://www.nodetlv.com/jobs/)
*   [Sponsors](https://www.nodetlv.com/sponsors/)
*   [Speakers](https://www.nodetlv.com/speakers/)
*   [Agenda](https://www.nodetlv.com/2025-agenda/)
*   [Code of Conduct](https://www.nodetlv.com/code-of-conduct/)
*   [About](https://www.nodetlv.com/about/)

*   [Tickets](https://www.nodetlv.com/#tickets)
*   [Job Board](https://www.nodetlv.com/jobs/)
*   [Sponsors](https://www.nodetlv.com/sponsors/)
*   [Speakers](https://www.nodetlv.com/speakers/)
*   [Agenda](https://www.nodetlv.com/2025-agenda/)
*   [Code of Conduct](https://www.nodetlv.com/code-of-conduct/)
*   [About](https://www.nodetlv.com/about/)

![Image 4: NodeTLV-website-logo-600x280-px.png (1)](https://www.nodetlv.com/wp-content/uploads/2025/02/NodeTLV-website-logo-600x280-px-png-1.png)

Agenda
------

Hall B

Hall A

All

*    08:00 -
*   09:00

Check-in & Light Breakfast

*    10:00 -
*   10:30

*   Hall B

[Using Heap Dumps to Find and Fix Node.js Memory and CPU Problems](https://www.nodetlv.com/events/taking-a-dump-using-heap-dumps-to-find-and-fix-nodejs-memory-and-cpu-problems/)

Dan Shappir

English | Intemediate | Testing and Debugging

JavaScript uses Garbage Collection (GC) for memory management. As a result, many developers that use JavaScript based systems, such as NodeJS, assume that they’re free of memory issues...

[Read More...](https://www.nodetlv.com/events/taking-a-dump-using-heap-dumps-to-find-and-fix-nodejs-memory-and-cpu-problems/)

*    10:35 -
*   11:05

*   Hall B

[Eventful Applications: Mastering Reactive Patterns with Node.js](https://www.nodetlv.com/events/eventful-databases-mastering-reactive-patterns-with-node-js/)

Ben Greenberg

English | Beginner/Intro | Performance Optimization

Reactive programming introduces a structured approach to building responsive and resilient systems, making it particularly well-suited ...

[Read More...](https://www.nodetlv.com/events/eventful-databases-mastering-reactive-patterns-with-node-js/)

*    11:05 -
*   11:30

Snack Break

*    11:30 -
*   12:00

*   Hall B

[What is OpenTelemetry? A Look Through node.js](https://www.nodetlv.com/events/what-is-opentelemetry-a-look-through-node-js/)

Ben Stav

Hebrew | Intermediate | Deployment and Scaling

OpenTelemetry is the 2nd most popular CNCF project, and for good reason: It's been going *huge*, disrupting how observability is done...

[Read More...](https://www.nodetlv.com/events/what-is-opentelemetry-a-look-through-node-js)

*    12:05 -
*   12:20

*   Hall B

[Lost Without a Crew: Why Some Secrets Shouldn’t Stay Single](https://www.nodetlv.com/events/lost-without-a-crew-why-some-secrets-shouldnt-stay-single/)

Oren Efraim

Hebrew | Intermediate | Authentication and Security

Ahoy, mateys! Imagine a crew of tech-savvy pirates who discover a hidden treasure but don’t trust each other enough to guard it alone...

[Read More...](https://www.nodetlv.com/events/lost-without-a-crew-why-some-secrets-shouldnt-stay-single)

*    12:20 -
*   12:35

*   Hall B

[Beyond 429: The Art of Rate Limiting](https://www.nodetlv.com/events/beyond-429-the-art-of-rate-limiting/)

Michal Hershkovitz

Hebrew | Intermediate | Deployment and Scaling

Ever had too many people show up to your party and realize your tiny TLV apartment just can’t handle 50 guests at once?

[Read More...](https://www.nodetlv.com/events/beyond-429-the-art-of-rate-limiting)

*    12:40 -
*   13:10

*   Hall B

[The Recipe for Runtimes: In Between V8 and Node.js](https://www.nodetlv.com/events/the-recipe-for-runtimes-in-between-v8-and-node-js/)

Chemi Atlow

English | Intermediate | Node.js Fundamentals

How do JavaScript runtimes like Node.js, Deno, and Bun bring your code to life?

[Read More...](https://www.nodetlv.com/events/the-recipe-for-runtimes-in-etween-v8-and-node-js/)

*    13:15 -
*   13:30

*   Hall B

[Navigating the Node.js Supply Chain Minefield](https://www.nodetlv.com/events/navigating-the-node-js-supply-chain-minefield/)

Melanie Shoresh

Hebrew | Intermediate | Authentication and Security

How much do you really trust your dependencies?

[Read More...](https://www.nodetlv.com/events/navigating-the-node-js-supply-chain-minefield/)

*    13:45 -
*   14:45

Lunch Break

*    14:45 -
*   15:15

*   Hall B

[Cover to Cover with Node.js](https://www.nodetlv.com/events/cover-to-cover-with-node-js/)

Alon Kashtan, Mai Zohar

English | Intermediate 

What’s the weirdest technical request you’ve ever received from your product team?

[Read More...](https://www.nodetlv.com/events/cover-to-cover-with-node-js/)

*    15:20 -
*   15:35

*   Hall B

[Design Twice, Code Once: A Practical Guide to API-First Approach with TypeSpec](https://www.nodetlv.com/events/design-twice-code-once-a-practical-guide-to-api-first-approach-with-typespec/)

Doron Feldman

English | Intermediate 

APIs are the backbone of modern software. Embracing an API-first approach helps us build scalable, maintainable, and developer-friendly applications...

[Read More...](https://www.nodetlv.com/events/design-twice-code-once-a-practical-guide-to-api-first-approach-with-typespec/)

*    08:00 -
*   09:00

Check-in & Light Breakfast

*    09:00 -
*   09:20

*   Hall A

[Opening Words](https://www.nodetlv.com/events/opening-words/)

*    09:20 -
*   09:50

*   Hall A

[Keynote: Tooling Like It’s 2025](https://www.nodetlv.com/events/tooling-like-its-2025/)

Josh Goldberg

English | Intermediate | Node.js Fundamentals 

TypeScript! ESLint! Biome! Oh my! So many tools exist that we can choose from as modern developers. Do you ever feel like you're getting lost in a sea of GitHub README.mds and configuration file messes?

[Read More...](https://www.nodetlv.com/events/tooling-like-its-2025/)

*    10:00 -
*   10:30

*   Hall A

[From Lagging to Lightning: How We Made Our App 10x Faster with ClickHouse](https://www.nodetlv.com/events/from-lagging-to-lightning-how-we-made-our-app-10x-faster-with-clickhouse/)

May Walter

Hebrew | Advanced | Performance Optimization

Achieving high performance in data-driven applications can be challenging—but it’s possible! In this talk, we’ll explore how we achieved a 10x improvement by transitioning to ClickHouse...

[Read More...](https://www.nodetlv.com/events/from-lagging-to-lightning-how-we-made-our-app-10x-faster-with-clickhouse/)

*    10:35 -
*   11:05

*   Hall A

[An HTTP Request Is Just 3 Tcp Packets on Top of Each Other in a Trench Coat](https://www.nodetlv.com/events/an-http-request-is-just-3-tcp-packets-on-top-of-each-other-in-a-trench-coat/)

Yonatan Mevorach

English | Intermediate | Node.js Fundamentals

As Web developers we spend most of our days working with HTTP and the application layer. We know that our data gets transported over TCP...

[Read More...](https://www.nodetlv.com/2025-agenda/an-http-request-is-just-3-tcp-packets-on-top-of-each-other-in-a-trench-coat)

*    11:05 -
*   11:30

Snack Break

*    11:30 -
*   12:00

*   Hall A

[E2E Tests: Crime and Punishment](https://www.nodetlv.com/events/e2e-tests-crime-and-punishment/)

Tally Barak

English | Intermediate | Testing and Debugging

E2E testing often feels like a nightmare—slow, complex, and fraught with challenges. This talk cuts through the fear...

[Read More...](https://www.nodetlv.com/events/e2e-tests-crime-and-punishment/)

*    12:05 -
*   12:35

*   Hall A

[Weaponizing LLMs to Hack Your Node.js Apps](https://www.nodetlv.com/events/weaponizing-llms-to-hack-your-node-js-apps/)

Liran Tal

English | Intermediate | Authentication and Security 

Developers have gone full-steam from traditional programming to AI code assistants and vibe coding but what would you know when Claude 3.7 suggests vulnerable code in your Mongoose model hooks?

[Read More...](https://www.nodetlv.com/events/weaponizing-llms-to-hack-your-node-js-apps/)

*    12:40 -
*   13:10

*   Hall A

[The Best API Call Is No Call at All: Supercharging Performance with Materialization](https://www.nodetlv.com/events/the-best-api-call-is-no-call-at-all-supercharging-performance-with-materialization/)

Ron Klein

Hebrew | Intermediate | Performance Optimization

Why wait for data when you can have it ready before anyone asks?

[Read More...](https://www.nodetlv.com/events/the-best-api-call-is-no-call-at-all-supercharging-performance-with-materialization)

*    13:15 -
*   13:45

*   Hall A

[Neural Networks in Plain JavaScript](https://www.nodetlv.com/events/neural-networks-in-plain-javascript/)

Yonatan Kra

English | Beginner/Intro

Neural networks are a fantastic mathematical model. But not all of us care much for Linear Algebra and Infi...

[Read More...](https://www.nodetlv.com/events/neural-networks-in-plain-javascript)

*    13:45 -
*   14:45

Lunch Break

*    14:45 -
*   15:15

*   Hall A

[Typescript in Node.js: Capabilities, Limitations, and What It May Mean for the Future of Typescript](https://www.nodetlv.com/events/typescript-in-node-js-capabilities-limitations-and-what-it-may-mean-for-the-future-of-typescript/)

Gil Tayar

English | Intermediate | Node.js Fundamentals

Node.js v23 now supports modules written in TypeScript, without any transpilation. Simple, right?

[Read More...](https://www.nodetlv.com/events/typescript-in-node-js-capabilities-limitations-and-what-it-may-mean-for-the-future-of-typescript/)

*    08:00 -
*   09:00

Check-in & Light Breakfast

*    09:00 -
*   09:20

*   Hall A

[Opening Words](https://www.nodetlv.com/events/opening-words/)

*    09:20 -
*   09:50

*   Hall A

[Keynote: Tooling Like It’s 2025](https://www.nodetlv.com/events/tooling-like-its-2025/)

Josh Goldberg

English | Intermediate | Node.js Fundamentals 

TypeScript! ESLint! Biome! Oh my! So many tools exist that we can choose from as modern developers. Do you ever feel like you're getting lost in a sea of GitHub README.mds and configuration file messes?

[Read More...](https://www.nodetlv.com/events/tooling-like-its-2025/)

*    10:00 -
*   10:30

*   Hall B

[Using Heap Dumps to Find and Fix Node.js Memory and CPU Problems](https://www.nodetlv.com/events/taking-a-dump-using-heap-dumps-to-find-and-fix-nodejs-memory-and-cpu-problems/)

Dan Shappir

English | Intemediate | Testing and Debugging

JavaScript uses Garbage Collection (GC) for memory management. As a result, many developers that use JavaScript based systems, such as NodeJS, assume that they’re free of memory issues...

[Read More...](https://www.nodetlv.com/events/taking-a-dump-using-heap-dumps-to-find-and-fix-nodejs-memory-and-cpu-problems/)

*    10:00 -
*   10:30

*   Hall A

[From Lagging to Lightning: How We Made Our App 10x Faster with ClickHouse](https://www.nodetlv.com/events/from-lagging-to-lightning-how-we-made-our-app-10x-faster-with-clickhouse/)

May Walter

Hebrew | Advanced | Performance Optimization

Achieving high performance in data-driven applications can be challenging—but it’s possible! In this talk, we’ll explore how we achieved a 10x improvement by transitioning to ClickHouse...

[Read More...](https://www.nodetlv.com/events/from-lagging-to-lightning-how-we-made-our-app-10x-faster-with-clickhouse/)

*    10:35 -
*   11:05

*   Hall A

[An HTTP Request Is Just 3 Tcp Packets on Top of Each Other in a Trench Coat](https://www.nodetlv.com/events/an-http-request-is-just-3-tcp-packets-on-top-of-each-other-in-a-trench-coat/)

Yonatan Mevorach

English | Intermediate | Node.js Fundamentals

As Web developers we spend most of our days working with HTTP and the application layer. We know that our data gets transported over TCP...

[Read More...](https://www.nodetlv.com/2025-agenda/an-http-request-is-just-3-tcp-packets-on-top-of-each-other-in-a-trench-coat)

*    10:35 -
*   11:05

*   Hall B

[Eventful Applications: Mastering Reactive Patterns with Node.js](https://www.nodetlv.com/events/eventful-databases-mastering-reactive-patterns-with-node-js/)

Ben Greenberg

English | Beginner/Intro | Performance Optimization

Reactive programming introduces a structured approach to building responsive and resilient systems, making it particularly well-suited ...

[Read More...](https://www.nodetlv.com/events/eventful-databases-mastering-reactive-patterns-with-node-js/)

*    11:05 -
*   11:30

Snack Break

*    11:30 -
*   12:00

*   Hall B

[What is OpenTelemetry? A Look Through node.js](https://www.nodetlv.com/events/what-is-opentelemetry-a-look-through-node-js/)

Ben Stav

Hebrew | Intermediate | Deployment and Scaling

OpenTelemetry is the 2nd most popular CNCF project, and for good reason: It's been going *huge*, disrupting how observability is done...

[Read More...](https://www.nodetlv.com/events/what-is-opentelemetry-a-look-through-node-js)

*    11:30 -
*   12:00

*   Hall A

[E2E Tests: Crime and Punishment](https://www.nodetlv.com/events/e2e-tests-crime-and-punishment/)

Tally Barak

English | Intermediate | Testing and Debugging

E2E testing often feels like a nightmare—slow, complex, and fraught with challenges. This talk cuts through the fear...

[Read More...](https://www.nodetlv.com/events/e2e-tests-crime-and-punishment/)

*    12:05 -
*   12:35

*   Hall A

[Weaponizing LLMs to Hack Your Node.js Apps](https://www.nodetlv.com/events/weaponizing-llms-to-hack-your-node-js-apps/)

Liran Tal

English | Intermediate | Authentication and Security 

Developers have gone full-steam from traditional programming to AI code assistants and vibe coding but what would you know when Claude 3.7 suggests vulnerable code in your Mongoose model hooks?

[Read More...](https://www.nodetlv.com/events/weaponizing-llms-to-hack-your-node-js-apps/)

*    12:05 -
*   12:20

*   Hall B

[Lost Without a Crew: Why Some Secrets Shouldn’t Stay Single](https://www.nodetlv.com/events/lost-without-a-crew-why-some-secrets-shouldnt-stay-single/)

Oren Efraim

Hebrew | Intermediate | Authentication and Security

Ahoy, mateys! Imagine a crew of tech-savvy pirates who discover a hidden treasure but don’t trust each other enough to guard it alone...

[Read More...](https://www.nodetlv.com/events/lost-without-a-crew-why-some-secrets-shouldnt-stay-single)

[](https://www.nodetlv.com/2025-agenda/#agenta_top_anchor)

Download Agenda

[Back to HomePage](https://www.nodetlv.com/)

![Image 5](blob:http://localhost/e8a57f4972516a1d3218894eabc89576)

### Follow NodeTLV on Social media

[![Image 7: facebook_Social-media-icons 225x225 px](https://www.nodetlv.com/wp-content/uploads/2021/09/facebook_Social-media-icons-225x225-px-1.png)](https://www.facebook.com/nodetlv)

[![Image 8: linkedin_Social-media-icons 225x225 px](https://www.nodetlv.com/wp-content/uploads/2021/09/linkedin_Social-media-icons-225x225-px-1.png)](https://www.linkedin.com/showcase/node.tlv/)

[![Image 9: twitter_Social-media-icons 225x225 px](https://www.nodetlv.com/wp-content/uploads/2021/09/twitter_Social-media-icons-225x225-px-1.png)](https://twitter.com/NodeTLV)

[![Image 10: youtube_Social-media-icons 225x225 px](https://www.nodetlv.com/wp-content/uploads/2021/09/youtube_Social-media-icons-225x225-px-1.png)](https://www.youtube.com/channel/UCQ4gb1u0oBO9iJecGp1Hl5w)

[![Image 11: meetup_Social-media-icons 225x225 px](https://www.nodetlv.com/wp-content/uploads/2021/09/meetup_Social-media-icons-225x225-px-1.png)](https://www.meetup.com/NodeJS-Israel)

[![Image 12: Untitled (225 x 225 px) (6)](https://www.nodetlv.com/wp-content/uploads/2024/10/Untitled-225-x-225-px-6.png)](https://www.instagram.com/nodetlvconf)

### Tagline after social media icons

### Don't miss our other events

[Sign up for our Newsletter](https://www.nodetlv.com/js-newsletter/)

Submit

*   [Job Board](https://www.nodetlv.com/jobs/)
*   [Press](https://www.geektime.co.il/nodetlv-2022/)
*   [What is NodeJS?](https://nodejs.org/en/about/)
*   [Code of Conduct](https://www.nodetlv.com/code-of-conduct/)
*   Cancellation Policy

*   [Job Board](https://www.nodetlv.com/jobs/)
*   [Press](https://www.geektime.co.il/nodetlv-2022/)
*   [What is NodeJS?](https://nodejs.org/en/about/)
*   [Code of Conduct](https://www.nodetlv.com/code-of-conduct/)
*   Cancellation Policy

More events
-----------

*   [ReactNext](http://www.react-next.com/)
*   [AI Dev TLV](https://www.aidevtlv.com/)

*   [ReactNext](http://www.react-next.com/)
*   [AI Dev TLV](https://www.aidevtlv.com/)

### Powered by EventHandler

Cancellation Policy
-------------------

Sponsor Cancellation:

In case of cancellation of the event, we will offer a full refund to all attendees and sponsors.

Attendee cancellations:

Up to 30 days prior to the event – 100% Refund. 

30-14 days prior to the event – 50% Refund.

No refund will be offered later than that.
`
      };
    }

    return { contents: 'No mock results found for this URL.' };
  },
});
