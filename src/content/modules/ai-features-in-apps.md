---
title: "AI features in real apps"
focus: "Put AI inside a real full-stack app — securely, with great UX."
hours: 40
tech: ["LLM APIs", "React", "Node.js"]
objectives:
  - "Architect an AI feature correctly — API key stays on the server, always, with no exceptions."
  - "Build a backend endpoint that calls an LLM API and streams the response to the client."
  - "Build a React chat or assistant UI that renders a streaming response with real loading and error states."
  - "Add guardrails: a system prompt that shapes the model's behaviour, input length limits, and graceful empty and error handling."
  - "Manage latency and cost so the feature is usable and doesn't silently drain your budget."
days:
  - n: 1
    topic: "Architecture of an AI feature"
    learn: "Why the API key must live on the server — and what a backend proxy is and why you need one."
    build: "Draw the request flow for an AI feature: browser → your API → LLM provider → your API → browser. Identify where the key lives and what happens if it leaks."
    assignment: "Write a half-page plain-English explanation of why a frontend-only LLM integration is dangerous, and sketch the server-proxy architecture you'll build this week."
    time: "~6h"
    details: "An LLM API key is a billing credential — anyone who has it can run requests at your expense and against any content policy. If you put it in a React app or a .env.local that ships to the browser, it will be found: in the bundle, in the network tab, in a GitHub repo someone forgot to add to .gitignore. The correct architecture is a thin backend proxy: your React app calls your own server endpoint, your server holds the key in an environment variable and calls the LLM API, and the key never leaves the server. This pattern also gives you the right place to add rate limiting, logging, and input validation — which you'll need before you ship anything real."
    steps:
      - "Search your browser's DevTools Network tab on any public AI-powered web app and see what the frontend actually calls — notice it always calls the company's own API, not OpenAI directly."
      - "Open the Vercel AI SDK docs and read the 'Why stream from a server route?' section to understand the streaming proxy pattern."
      - "Sketch the two architectures side by side: (A) React → OpenAI directly, (B) React → your /api/chat → OpenAI. Write down the risks of A."
      - "Create a new Node/Express project (or a Next.js API route if you prefer). Add dotenv, create a .env file, and add it to .gitignore before writing a single line of logic."
      - "Add a placeholder POST /api/chat route that logs the request body and returns { message: 'ok' } — no LLM call yet."
      - "Test the route with curl. Confirm it works and that no key exists in the code."
      - "Write your half-page explanation for the assignment — explain it to a non-technical client, not to another developer."
    stuck: "Not sure what 'server-side' means in this context? If the code runs in the browser, users can see it. If it runs in Node.js on a server or serverless function, they can't. That's the only distinction that matters for key security."
    resources:
      - label: "Vercel AI SDK — Getting started"
        url: "https://sdk.vercel.ai/docs"
      - label: "OpenAI — API reference"
        url: "https://platform.openai.com/docs/api-reference/streaming"
  - n: 2
    topic: "The backend endpoint — call the LLM and stream the response"
    learn: "How streaming works at the HTTP level (Server-Sent Events / chunked transfer); how to call an LLM API from Node.js and pipe the stream to the client."
    build: "Wire up the real LLM call in your backend route and confirm you can see streamed tokens in a terminal curl command before the React UI exists."
    assignment: "Your backend POST /api/chat endpoint must accept a messages array, call the LLM, and stream the response back. Test it with curl — you must see tokens arriving one by one before you move to Day 3."
    time: "~8h"
    details: "Streaming is the reason chat UIs feel fast even when the full response takes ten seconds — the model sends tokens as soon as it generates them, and you show each one immediately rather than waiting for the whole response. Under the hood, this is a chunked HTTP response: the server keeps the connection open and writes data incrementally. The Vercel AI SDK handles most of this boilerplate for you, but understanding what it's doing means you can debug it and adapt it. Test your endpoint with curl before touching React — the curl output will make the streaming behaviour concrete, and it's far easier to isolate API bugs without a UI in the way."
    steps:
      - "Install the Vercel AI SDK (or the official OpenAI or Anthropic SDK) and add your API key to your .env — never to any file that gets committed."
      - "In your POST /api/chat route, read the messages array from the request body."
      - "Call the LLM using the SDK's streaming method — with the Vercel AI SDK this is streamText; with the raw OpenAI SDK it's openai.chat.completions.create({ stream: true })."
      - "Pipe or write the stream to the HTTP response, setting Content-Type to text/event-stream."
      - "Run curl -N -X POST http://localhost:3000/api/chat -H 'Content-Type: application/json' -d '{\"messages\":[{\"role\":\"user\",\"content\":\"Say hello in exactly five words.\"}]}' and watch tokens stream in."
      - "Add a hard limit: if the incoming messages array exceeds 20 items or the latest message exceeds 2 000 characters, return a 400 error before calling the LLM."
      - "Add a try/catch around the LLM call and return a 500 with a short, safe error message — never expose the raw API error to the client."
    stuck: "Getting a 401 or 403 from the LLM provider? Double-check your .env key has no trailing space, and confirm you're loading it with process.env.OPENAI_API_KEY (or whichever provider) after calling dotenv.config(). The most common cause is the env file not loading before the key is read."
    resources:
      - label: "Vercel AI SDK — Getting started"
        url: "https://sdk.vercel.ai/docs"
      - label: "OpenAI — Streaming responses"
        url: "https://platform.openai.com/docs/api-reference/streaming"
      - label: "Anthropic — Streaming messages"
        url: "https://docs.anthropic.com/en/docs/build-with-claude/streaming"
  - n: 3
    topic: "The React UI — chat interface and streaming display"
    learn: "How to consume a streaming response in React: reading from a ReadableStream, updating state incrementally, and showing loading states that feel good."
    build: "Build a minimal chat UI in React that calls your /api/chat endpoint and renders each token as it arrives."
    assignment: "A working chat UI: the user types a message, hits send, and sees the response stream in word by word. An animated indicator shows while the stream is in flight. The input is disabled while streaming so the user can't send a second message before the first finishes."
    time: "~9h"
    details: "Consuming a stream in React is different from a regular fetch — you read from the response body's ReadableStream using a reader in a loop, decoding each chunk and appending it to a state variable. The Vercel AI SDK's useChat hook handles this for you and is worth knowing; building it manually once first means you understand what the hook is hiding. The most important UX detail is immediate feedback: the input locks, a loading indicator appears, and the first token should appear within a second or two. Users who see a blank screen for three seconds assume something broke."
    steps:
      - "Create a Chat component with a messages array in state, an input field, and a send button."
      - "On submit, append the user's message to the messages array and POST it to /api/chat."
      - "Read the streaming response using response.body.getReader() and a while loop that decodes each Uint8Array chunk with TextDecoder."
      - "Append each decoded chunk to a currentAssistantMessage string in state, so the UI updates token by token."
      - "When the stream ends, push the completed assistant message into the messages array and clear the in-progress string."
      - "Disable the input and show a '...' or spinner while isStreaming is true."
      - "Scroll the message list to the bottom after each new chunk so the latest token is always visible."
    stuck: "Chunks arriving as garbled or incomplete JSON? The chunks from a streaming LLM are plain text tokens, not JSON objects — just append the raw string. If you're using the Vercel AI SDK's data-stream protocol, read its docs on parseStreamPart; otherwise, stick to the raw text approach for simplicity."
    resources:
      - label: "React — Learn"
        url: "https://react.dev/learn"
      - label: "Vercel AI SDK — Getting started"
        url: "https://sdk.vercel.ai/docs"
      - label: "Anthropic — Streaming messages"
        url: "https://docs.anthropic.com/en/docs/build-with-claude/streaming"
  - n: 4
    topic: "UX and guardrails — system prompts, limits, and error handling"
    learn: "System prompts and how they shape model behaviour; input validation and length limits; handling empty, slow, and failed responses gracefully."
    build: "Add a system prompt to your backend that defines what your AI feature does. Add character-count feedback to the input and write the three states every AI UI needs: loading, error, and empty."
    assignment: "Your AI feature must have: a system prompt that limits and focuses its behaviour; a visible character counter that warns at 80 % of the limit; an error state with a retry button; and an empty-response guard that never shows a blank assistant bubble."
    time: "~8h"
    details: "A system prompt is the most powerful tool you have for making an AI feature actually useful — it tells the model who it is, what it should and shouldn't do, and how it should format its answers. Without one, you get a general-purpose chatbot that can go anywhere, which is usually the wrong product. Input limits exist because LLM APIs charge per token and because very long inputs genuinely degrade response quality; show users how much of the limit they've used so limits feel fair rather than arbitrary. Error handling for AI features has a specific pattern: the stream might start and then fail mid-response, so you need to handle both 'the request failed' and 'the stream cut off early' as distinct states."
    steps:
      - "Add a system parameter (or a first message with role: system) to your LLM call that describes the feature: who the assistant is, what it focuses on, what it should decline, and the desired response format."
      - "Test the system prompt by sending messages that should be in scope and a few that should be politely declined — iterate on the wording until it behaves as intended."
      - "Add a MAX_CHARS constant (e.g. 2000) and a character counter below the input; turn it amber at 80 % and red at 100 %."
      - "Prevent form submission if the input is empty or exceeds the limit."
      - "In your React fetch logic, wrap the stream read in try/catch and set an error state string on failure."
      - "Render an error message with a 'Try again' button that clears the error and lets the user resubmit the same message."
      - "Guard against an empty streamed response: if the completed assistant message is blank or only whitespace, show a fallback message like 'Sorry, I wasn't able to generate a response. Please try again.'"
    stuck: "System prompt not changing the model's behaviour? Make sure the system message is the first item in the messages array and has role: 'system' — sending it as a user message will work but is much less reliable. Also check that you're not accidentally sending the system prompt as part of the conversation history on subsequent turns."
    resources:
      - label: "Anthropic — Streaming messages"
        url: "https://docs.anthropic.com/en/docs/build-with-claude/streaming"
      - label: "OpenAI — Streaming responses"
        url: "https://platform.openai.com/docs/api-reference/streaming"
      - label: "Vercel AI SDK — Getting started"
        url: "https://sdk.vercel.ai/docs"
  - n: 5
    topic: "Polish and deploy the AI feature end to end"
    learn: "Deploying a Node backend with environment variables to Vercel or a serverless host; verifying the key is never in the bundle; a cost and latency sanity check."
    build: "Deploy the full stack, verify the API key is invisible to the browser, and do a five-point sanity check on cost, latency, and error handling in production."
    assignment: "Your AI feature must be live at a public URL. Run the five-point checklist below, fix anything that fails, and add the live URL plus a one-paragraph description of what the feature does and how you secured it to your portfolio README."
    time: "~9h"
    details: "Deployment is the test that matters: environment variables that worked locally sometimes don't survive the move to production, and streaming responses that worked on your machine sometimes behave differently behind a CDN or serverless function. The five-point checklist is your production acceptance test — treat anything that fails as a blocker, not a nice-to-have. Cost awareness is a professional skill: check your LLM provider's dashboard after deploying, set a spend limit if your provider offers one, and know roughly how much each feature request costs. A feature that works but costs ten cents per query is a support ticket waiting to happen."
    steps:
      - "Push your backend to Vercel (as API routes or a serverless function) or Render, and add your LLM API key as an environment variable in the hosting dashboard — never in your code or committed config."
      - "Deploy your React frontend to Vercel and set the API base URL as an environment variable pointing to your production backend."
      - "Open the deployed frontend, open DevTools, go to the Network tab, and confirm no request goes directly to api.openai.com or api.anthropic.com — all LLM traffic must go through your own domain."
      - "Search the JavaScript bundle in the Sources tab for your API key substring — it must not appear."
      - "Send five test messages and confirm: (1) streaming works, (2) the error state triggers if you temporarily break the API, (3) the loading indicator appears and disappears correctly, (4) the input limit is enforced, (5) the system prompt keeps responses on-topic."
      - "Check your LLM provider's usage dashboard; estimate the cost of 100 users sending 5 messages per day and write that number in your README."
      - "Write the one-paragraph README entry: what the feature does, how the architecture keeps the key safe, and what you'd add next."
    stuck: "Environment variable undefined in production? Vercel requires variables to be added in the project settings under Environment Variables — changes take effect on the next deployment, not immediately. Trigger a redeploy after adding them and check the function logs in the Vercel dashboard for the actual error."
    resources:
      - label: "Vercel AI SDK — Getting started"
        url: "https://sdk.vercel.ai/docs"
      - label: "OpenAI — Streaming responses"
        url: "https://platform.openai.com/docs/api-reference/streaming"
      - label: "React — Learn"
        url: "https://react.dev/learn"
project:
  title: "A deployed app with a real AI feature"
  brief: "Add a genuinely useful AI feature to a full-stack app — e.g. an AI assistant, a smart summariser, or a support chatbot — with the key safe on the server and a streaming UI."
  deploy: "Vercel (+ a serverless or Node backend)"
  rubric:
    - "API key never reaches the browser — verified by searching the network tab and JS bundle in DevTools"
    - "Backend endpoint calls the LLM and streams the response through your own server"
    - "React UI streams or cleanly shows the response — no blank assistant bubbles, no layout jumps"
    - "Loading and error states handled — spinner while streaming, retry button on failure"
    - "Deployed at a live URL with the feature fully working in production"
milestone: false
proSkills: ["AI-Leverage & Defensibility", "Proof-of-Work Portfolio"]
resources:
  - label: "Vercel AI SDK — Getting started"
    url: "https://sdk.vercel.ai/docs"
  - label: "OpenAI — Streaming responses"
    url: "https://platform.openai.com/docs/api-reference/streaming"
  - label: "Anthropic — Streaming messages"
    url: "https://docs.anthropic.com/en/docs/build-with-claude/streaming"
  - label: "React — Learn"
    url: "https://react.dev/learn"
---

## The module in one sentence

AI features are just API calls — and this week you'll learn to make them correctly: key
on the server, stream to the client, guardrails in place, deployed and live.

## What we're really learning

The hard part of adding AI to an app is not the LLM call. The hard part is doing it in a
way that's secure, that feels fast, and that doesn't collapse under bad input or a slow
network. Most tutorials show you the call. This module builds the whole thing.

The mental model is a three-layer sandwich: **React UI → your own backend endpoint → LLM
provider.** Your backend is the only layer that touches the API key — it authenticates to
the LLM provider on your behalf, and the browser never sees anything but your own domain.
That layer is also where you put your system prompt, your input limits, and your logging.
Understanding why the layers exist makes every debugging session shorter and every client
conversation easier.

## AI as a tool, not a shortcut

There is a specific irony in using AI to help you build AI features: it's genuinely useful
for explaining error messages, generating boilerplate fetch logic, and talking through the
trade-off between session context and token cost — and it will also confidently generate
code that puts your API key in the frontend. Always verify the architecture yourself.
Understand the proxy pattern before you let a code generator write it for you.

The other thing to do manually: test the system prompt. No AI tool can tell you whether
your assistant stays on-topic under adversarial input — you have to send the edge-case
messages yourself and read the responses. That's not paranoia; that's quality assurance.

## Why this belongs in your portfolio

Clients who are not technical still know the phrase "AI feature." A deployed app that
demonstrably uses an LLM — with a live URL, a clean UI, and a one-paragraph explanation
of how you kept the key safe — says something specific about your skills that a static
landing page cannot. It shows you understand how to integrate external APIs, how to handle
async and streaming data, and how to think about security. That's a real, differentiating
signal in a market full of people who have done the tutorial but not the deployment.
