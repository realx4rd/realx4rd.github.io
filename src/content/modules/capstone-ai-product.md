---
title: "Capstone: ship an AI product"
focus: "One complete, deployed, full-stack AI product — your proof you can build real things."
hours: 50
tech: ["React", "Node.js", "LLM APIs"]
objectives:
  - "Scope a real AI product down to a shippable MVP with a one-page spec."
  - "Build the full stack: React front-end, Node/serverless back-end, and a persistent database."
  - "Integrate a live LLM feature securely — API key server-side, inputs validated."
  - "Deploy to production and pass a basic performance and accessibility audit."
  - "Write a case study and record a short demo video that you can send to clients."
days:
  - n: 1
    topic: "Scope the MVP"
    learn: "What makes an AI product actually useful — and how to cut scope ruthlessly without cutting value."
    build: "List ten ideas, filter to one, and draft a one-page product spec."
    assignment: "Write your spec: problem, target user, the one core AI action, data model (rough), and a list of everything explicitly out of scope."
    time: "~8h"
    details: "Most capstone projects fail in scope, not skill. A product that does one thing well for one specific person is infinitely more impressive than an idea that tries to do everything and ships nothing. Your spec is a constraint document — every feature you write down as out-of-scope is a future you can add after launch. The AI feature should solve a real pain point, not just exist for novelty. Ask: would someone pay for this? Would I use it myself?"
    steps:
      - "Brainstorm ten product ideas in a plain text file — no filtering yet."
      - "For each idea, write one sentence on who the target user is and what painful thing the AI solves."
      - "Cross out anything that needs data you can't easily access, or that requires more than one AI action to be useful."
      - "Pick one. Write a one-page spec: problem statement, target user persona, the single core AI feature, rough data model (what you're storing and why), and a numbered list of things explicitly not in v1."
      - "Read your spec aloud. If you can't explain it to a stranger in 60 seconds, simplify it."
    stuck: "Can't pick an idea? Pick the one you'd use yourself — you'll make better judgment calls on a problem you understand."
    resources:
      - label: "Anthropic — Build with Claude"
        url: "https://docs.anthropic.com/en/docs/build-with-claude/overview"
      - label: "Vercel AI SDK — Docs"
        url: "https://sdk.vercel.ai/docs"
  - n: 2
    topic: "Build the core"
    learn: "Connecting React, a serverless back-end, and a real database into one working system."
    build: "Scaffold the project, wire up your database schema, and build the core CRUD UI — no AI feature yet."
    assignment: "You should be able to create, read, update, and delete your main resource through the UI before the AI touches anything."
    time: "~12h"
    details: "Resist the urge to start with the AI feature — it is the most exciting part and will distract you from building a solid foundation. The best AI features sit on top of working products; they do not carry broken ones. Get your data flowing end-to-end first: React form submits to a serverless function, which writes to and reads from your database. Once that loop is solid, adding the AI layer is fast. Use Supabase for your database — the free tier is generous and the client library is minimal."
    steps:
      - "Create a new project with Vite (React) and initialise a Vercel project with the CLI."
      - "Set up a Supabase project and create your core table(s). Add a .env.local for your keys — add it to .gitignore immediately."
      - "Build one API route (Vercel serverless function or similar) that reads from and writes to your database. Test it with curl or a REST client before touching the UI."
      - "Build the minimum UI: a form to create your main resource and a list that shows existing records."
      - "Deploy to Vercel staging and confirm the live URL talks to your database."
    stuck: "CORS error when your React app calls your API? Add the correct Access-Control-Allow-Origin header in your serverless function, or make sure your API and front-end share the same Vercel project."
    resources:
      - label: "Supabase — Docs"
        url: "https://supabase.com/docs"
      - label: "Vercel AI SDK — Docs"
        url: "https://sdk.vercel.ai/docs"
  - n: 3
    topic: "Build the AI feature + integrate everything"
    learn: "Calling an LLM from a server-side function — streaming, error handling, and keeping the key secret."
    build: "Implement the core AI action end-to-end: UI triggers it, server calls the LLM, result writes to or returns from your database."
    assignment: "Your AI feature should work on the live Vercel staging URL with real data before you call this day done."
    time: "~12h"
    details: "Your LLM API key must live in an environment variable on the server — never in the browser bundle, never committed to git. The Vercel AI SDK makes this natural: stream responses from a serverless function to the client, so the UI feels fast even for long generations. Write a prompt that is specific and testable — if you can't describe what a good output looks like, you can't know when it's working. Build in a graceful error state now, not later: what does the UI show when the LLM call fails or times out?"
    steps:
      - "Add your LLM API key to Vercel environment variables (never hardcode it)."
      - "Create a serverless API route that accepts your input, builds a prompt, calls the LLM using the Vercel AI SDK, and streams the response."
      - "Wire the React UI to call that route and display the streamed output — a loading skeleton or progress indicator is required."
      - "After the LLM responds, write the result to your database so users can see their history."
      - "Test three edge cases: empty input, a very long input, and a simulated API failure (temporarily use a bad key)."
    stuck: "Streaming not showing up in the browser? Make sure you are reading the response as a ReadableStream on the client — fetch the route and pipe the body, not JSON.parse the whole response."
    resources:
      - label: "Vercel AI SDK — Docs"
        url: "https://sdk.vercel.ai/docs"
      - label: "Anthropic — Build with Claude"
        url: "https://docs.anthropic.com/en/docs/build-with-claude/overview"
  - n: 4
    topic: "Polish, secure, and deploy"
    learn: "Production hygiene: auth, input validation, error states, Core Web Vitals, and accessibility basics."
    build: "Lock down the app, add auth if users need separate data, fix the three most obvious UX rough edges, run a Lighthouse audit."
    assignment: "Your production URL should score at least 85 on Lighthouse performance, have no missing alt text, and show a sensible error state for every failure point you can trigger."
    time: "~10h"
    details: "Polish is where most freelancers' work falls apart under client review. Spend deliberate time on things that are invisible when they work and glaring when they don't: a 404 page, a loading state that actually communicates progress, an error message that tells the user what to do next. If your product stores per-user data, add authentication now — Supabase Auth is free and integrates with your existing database in an afternoon. Validate all inputs server-side; the client is not a trust boundary."
    steps:
      - "Add Supabase Auth (or a similar provider) if your product needs user accounts. Gate the database writes behind the authenticated user's ID."
      - "Add server-side input validation to every API route: reject empty strings, enforce max length, return 400 with a helpful message."
      - "Add loading, error, and empty-state UI components to every async operation."
      - "Run Lighthouse in Chrome DevTools. Fix images without alt text, colour contrast failures, and any render-blocking resources."
      - "Merge to your main branch and confirm the production Vercel deploy is fully working."
    stuck: "Lighthouse performance score is low? The most common culprit is a large unoptimised image. Compress it or switch to a next-gen format — a single fix often jumps the score by 20 points."
    resources:
      - label: "web.dev — Core Web Vitals"
        url: "https://web.dev/articles/vitals"
      - label: "Supabase — Docs"
        url: "https://supabase.com/docs"
  - n: 5
    topic: "Document, case study, and demo video"
    learn: "How great portfolios work — the case study format that convinces clients who have no technical context."
    build: "Write a thorough README, a structured case study, and record a 1–2 minute demo video."
    assignment: "Send your production URL, GitHub repo, and case study to a non-technical friend and ask them to explain back to you what your product does and what problem it solves."
    time: "~8h"
    details: "The hardest part of freelancing is not building things — it is explaining their value to someone who does not care about the technical details. Your case study should answer three questions a client will actually ask: what problem does this solve, how did you approach building it, and what would you do differently next time? The demo video is your elevator pitch. Record it in one take if you can — conversational and real is better than polished and stilted. A two-minute screencast with your voice over it is all you need."
    steps:
      - "Write a README: project overview, tech stack, setup instructions, environment variables required, and a link to the live demo."
      - "Write a 400–600 word case study structured as: the problem, your approach, the AI feature and why it matters, one thing that went wrong and how you fixed it, and what you'd do differently."
      - "Record a 1–2 minute screen recording. Start on the live URL, show the core workflow, trigger the AI feature, and narrate what it does and who it's for."
      - "Upload the video to YouTube (unlisted is fine) or Loom, and link it from the README and case study."
      - "Do a final check: open the repo on a fresh browser tab and confirm the README alone is enough to understand the project."
    stuck: "Case study feels generic? Replace any sentence that could apply to any project with one specific detail — a number, a specific decision, a real constraint you hit. Specificity is what makes it convincing."
    resources:
      - label: "Anthropic — Build with Claude"
        url: "https://docs.anthropic.com/en/docs/build-with-claude/overview"
      - label: "web.dev — Core Web Vitals"
        url: "https://web.dev/articles/vitals"
project:
  title: "Your capstone AI product"
  brief: "Design, build, and ship a complete AI-powered product that solves a real problem — the single strongest piece in your portfolio and the proof you bring to clients."
  deploy: "Vercel + Supabase (or similar)"
  rubric:
    - "A deployed, working full-stack app at a public URL anyone can open"
    - "A genuinely useful AI feature with the LLM call made server-side"
    - "Persistent data — records survive page refreshes and work across sessions"
    - "Secure: no committed secrets, input validation on every API route"
    - "A README, a case study, and a short demo video (1–2 min) linked from the repo"
milestone: true
proSkills: ["Proof-of-Work Portfolio", "AI-Leverage & Defensibility"]
resources:
  - label: "Vercel AI SDK — Docs"
    url: "https://sdk.vercel.ai/docs"
  - label: "Supabase — Docs"
    url: "https://supabase.com/docs"
  - label: "web.dev — Core Web Vitals"
    url: "https://web.dev/articles/vitals"
  - label: "Anthropic — Build with Claude"
    url: "https://docs.anthropic.com/en/docs/build-with-claude/overview"
---

## This is where everything becomes real

You have learned to structure markup, style it, write JavaScript, manage data, build APIs,
and deploy code to the internet. This module is not about learning another tool — it is about
**synthesizing everything into one thing you made**, that solves a real problem, for a real
person, powered by AI.

Clients do not hire you because of your vocabulary. They hire you because they can point at
something you built and believe you can build something like that for them. Your capstone is
that thing. Treat it accordingly.

## Why the AI feature is the easy part

The AI integration is genuinely not the hard part of this module. Calling an LLM API is a
dozen lines of code once you understand what you are doing. What is hard — and what separates
strong portfolios from weak ones — is everything around the AI feature: the data model that
makes results persistent, the UI state that communicates progress without confusing the user,
the validation that stops bad input from ever reaching the model, and the case study that makes
the whole thing legible to someone who has never touched the code.

The AI feature is a lever. The rest of your product is the machine it operates. Build the
machine first.

## The one rule that matters

**Ship something real, not something impressive.** A narrow tool that solves one specific pain
point for one specific user is worth ten sprawling ideas that never quite work. Scope down until
it feels almost embarrassingly small — then ship that. You can add features after clients start
paying you. You cannot impress anyone with an unfinished project, no matter how ambitious the
idea was.

## What comes next

A working, deployed, documented, AI-powered product in your portfolio changes the conversation
you have with potential clients. You are no longer explaining what you *could* build — you are
pointing at what you *did* build. That is the difference between hunting for work and being
sought out for it.
