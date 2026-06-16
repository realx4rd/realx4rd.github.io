---
title: "LLM APIs & prompt engineering"
focus: "Build with large language models the way professionals do — through their APIs."
hours: 40
tech: ["LLM APIs", "AI"]
objectives:
  - "Call LLM APIs (OpenAI and Anthropic) from your own code — not a wrapper, the real API."
  - "Engineer reliable prompts using system and user roles, few-shot examples, and precise instructions."
  - "Request and parse structured JSON output you can actually use inside your application code."
  - "Control token usage, temperature, and cost so you are never surprised by a bill or a runaway loop."
  - "Handle API errors and rate limits gracefully, and keep API keys out of your code permanently."
days:
  - n: 1
    topic: "How LLMs work — tokens, context windows, and your first API call"
    learn: "What a token is, how context windows set the limits of what a model can 'see', and how an API request is structured at the lowest level."
    build: "Read the OpenAI and Anthropic quickstart docs, get an API key for at least one, and make your first raw HTTP or SDK call from a Node script."
    assignment: "Write a Node script that sends a single user message to an LLM API and prints the response text to the console — no framework, no wrapper library beyond the official SDK."
    time: "~8h"
    details: "LLMs work on tokens, not characters — roughly four characters per token in English. The context window is the total number of tokens the model can hold in memory at once: your prompt, the conversation history, and the response all count against it. Understanding this model early means you will never be blindsided by a truncated response or an unexpected cost. For your first call, focus on the shape of the request: a model name, a messages array, and what comes back in the response object."
    steps:
      - "Sign up for an OpenAI account at platform.openai.com and create an API key under API Keys — keep it somewhere safe, never in code."
      - "Optionally also sign up at console.anthropic.com and generate an Anthropic API key — you will use both providers this week."
      - "Create a new folder (llm-sandbox), run npm init -y, and install the OpenAI SDK: npm install openai."
      - "Create a .env file with OPENAI_API_KEY=your-key-here and a .gitignore that includes .env."
      - "Install dotenv: npm install dotenv. Create index.js, load the key with require('dotenv').config(), and import OpenAI."
      - "Write a minimal completion call: pass a messages array with one user message and console.log the response."
      - "Run the script, read the raw response object in full — notice id, model, usage (tokens!), and choices[0].message.content."
    stuck: "Getting an authentication error? Your API key is probably being passed incorrectly — the OpenAI SDK reads it from the OPENAI_API_KEY environment variable automatically if you have dotenv loading your .env file before the import."
    resources:
      - label: "OpenAI — API quickstart"
        url: "https://platform.openai.com/docs/quickstart"
      - label: "Anthropic — Get started"
        url: "https://docs.anthropic.com/en/docs/get-started"
  - n: 2
    topic: "Prompt engineering — system prompts, roles, and being specific"
    learn: "The difference between the system role and the user role, why specificity beats cleverness, and what few-shot examples actually do."
    build: "Rewrite the same prompt three ways (vague → specific → with examples) and compare the outputs side by side."
    assignment: "Write three variations of a prompt for the same task — e.g. 'summarise a news article' — and document what changed in the output quality and consistency with each revision."
    time: "~8h"
    details: "The system prompt is where you give the model its job description: its persona, the task it should perform, any rules it must follow, and the format of its output. The user message is then just the specific input. Most beginners dump everything into the user message and wonder why results are inconsistent. The other lever is few-shot examples: showing the model two or three input→output pairs inside the prompt is often more effective than any amount of adjective-heavy instruction. These are not tricks — they are the core of professional prompt engineering."
    steps:
      - "Write a prompt that asks the model to classify a customer message as 'positive', 'negative', or 'neutral' — start as vague as possible."
      - "Run it ten times with different inputs and notice how inconsistent the output format is."
      - "Rewrite the system prompt to specify the exact task, forbid any explanation, and demand a single word back."
      - "Add two few-shot examples to the prompt: one labelled positive, one labelled negative."
      - "Run the same ten inputs again and compare consistency — log both rounds to a file so you can read them side by side."
      - "Try using the Anthropic SDK for the same task: npm install @anthropic-ai/sdk, add ANTHROPIC_API_KEY to .env, and port your prompt."
      - "Compare how each provider responds to the same system prompt — note any differences."
    stuck: "Output is still inconsistent even with a detailed prompt? Try ending your system prompt with 'Reply with only the word — nothing else.' Models follow explicit constraints better than implicit expectations."
    resources:
      - label: "Prompt Engineering Guide"
        url: "https://www.promptingguide.ai/"
      - label: "OpenAI — Prompt engineering"
        url: "https://platform.openai.com/docs/guides/prompt-engineering"
      - label: "Anthropic — Prompt engineering overview"
        url: "https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/overview"
  - n: 3
    topic: "Structured output — asking for JSON and parsing it safely"
    learn: "How to instruct a model to return JSON, how to validate and parse it defensively, and when to use JSON mode or structured outputs vs. free-form instructions."
    build: "Build a function that takes a block of text and returns a typed JavaScript object — extracted via an LLM — with at least three fields."
    assignment: "Write a extractMetadata(text) function that calls an LLM, requests JSON output, parses the result, and throws a clear error if the response cannot be parsed — then test it with at least one 'bad' input that would trick a naive prompt."
    time: "~8h"
    details: "Getting a model to return structured data is where LLMs become genuinely useful inside applications — you can take unstructured text and turn it into a database row, a typed object, or a form pre-fill. The challenge is that models sometimes return almost-JSON: with a markdown code fence around it, with a trailing comma, or with a narrative sentence before the object. Defensive parsing means: strip fences if present, try JSON.parse inside a try/catch, and validate the shape of the result before passing it deeper into your code."
    steps:
      - "Write a system prompt that says exactly: 'Return only a JSON object — no markdown, no explanation.' Include the schema as a comment in the prompt, e.g. { title: string, author: string, year: number }."
      - "Pass a short article or book blurb as the user message and log the raw response.content."
      - "Wrap JSON.parse(response) in a try/catch — if it throws, log the raw text so you can debug."
      - "Add a stripping step: if the text starts with ``` , remove the first and last lines before parsing."
      - "Check that all expected keys are present and the right type — throw an informative error if not."
      - "Test with intentionally tricky input: a passage that mentions multiple people, or contains curly braces."
      - "If you want to go further, look at OpenAI's structured outputs (response_format: { type: 'json_object' }) — but understand the manual approach first."
    stuck: "JSON.parse is throwing even after you strip the code fence? Log the raw string character by character — there is often an invisible Unicode character or a trailing newline. String.trim() is your first move."
    resources:
      - label: "OpenAI — Prompt engineering"
        url: "https://platform.openai.com/docs/guides/prompt-engineering"
      - label: "Prompt Engineering Guide"
        url: "https://www.promptingguide.ai/"
      - label: "Anthropic — Prompt engineering overview"
        url: "https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/overview"
  - n: 4
    topic: "Parameters, tokens & cost — temperature, max_tokens, and streaming"
    learn: "What temperature controls (and when to turn it down), how max_tokens limits the response, how to read the usage object to estimate cost, and how streaming works."
    build: "Add token counting to your Day 1 script, experiment with temperature 0 vs 0.9 on the same creative prompt, and wire up a streaming response."
    assignment: "Write a script that calls the same prompt ten times at temperature 0 and ten times at temperature 0.9, logs both sets of outputs and their token counts, and prints the total estimated cost for all twenty calls."
    time: "~8h"
    details: "Temperature is the most misunderstood parameter in LLM work. It controls randomness — temperature 0 gives you the most deterministic, consistent output (use it for extraction, classification, structured data); high temperature (0.7–1.0) gives you more varied, creative output (use it for brainstorming, copywriting). max_tokens sets a hard ceiling on the response length and prevents runaway generation. Every API call returns a usage object with prompt_tokens and completion_tokens — multiply by the model's per-token price to know exactly what you spent. Streaming sends tokens back as they are generated, which makes long responses feel instant in a UI."
    steps:
      - "Take your Day 1 script and add console.log(response.usage) to see real token counts."
      - "Look up the per-token price for the model you are using on the provider's pricing page."
      - "Write a small helper: function estimateCost(usage, inputPrice, outputPrice) that returns the estimated cost in cents."
      - "Run the same classification prompt ten times at temperature 0 — count how many times the output is identical."
      - "Run it ten times at temperature 0.9 — compare the variance."
      - "Add max_tokens: 100 to a request and send a prompt that would normally generate a long response — observe what happens when the limit is hit."
      - "Try a streaming call: use the SDK's streaming method and print each chunk to the console as it arrives — notice you get words, not a single payload."
    stuck: "Streaming output looks like garbled chunks in your terminal? You are printing the raw event objects. For OpenAI, each chunk's text lives at chunk.choices[0].delta.content — check it for null before printing."
    resources:
      - label: "OpenAI — API quickstart"
        url: "https://platform.openai.com/docs/quickstart"
      - label: "Anthropic — Get started"
        url: "https://docs.anthropic.com/en/docs/get-started"
      - label: "Prompt Engineering Guide"
        url: "https://www.promptingguide.ai/"
  - n: 5
    topic: "Reliability & security — errors, rate limits, key hygiene, and a mini eval"
    learn: "How to handle API errors and rate-limit retries gracefully, why environment variables are non-negotiable for key security, and what a basic eval is and why you want one."
    build: "Add retry logic with exponential back-off to your API calls, write a five-example eval that scores your Day 2 classifier, and audit your project for any hard-coded secrets."
    assignment: "Integrate a try/catch around every API call in your codebase, add a retry wrapper that handles 429 (rate limit) errors with a short wait, write a runEval() function that checks your classifier against five labelled examples and prints the accuracy — then fix anything the eval fails."
    time: "~8h"
    details: "LLM APIs fail — not rarely, but routinely. Rate limits (429), server errors (500), and network timeouts are all normal at production scale. Wrapping every call in a retry loop with exponential back-off (wait 1s, then 2s, then 4s) makes your tool reliable without hammering the API. Key hygiene is simpler: API keys live in .env files that are in .gitignore, they are never interpolated into strings in source files, and they are never logged. An eval is just a script that runs your prompt against inputs you already know the correct answer for and measures accuracy — even five examples will catch prompt regressions when you change something."
    steps:
      - "Wrap an API call in try/catch and log the error's status code and message — trigger a real error by passing a bad model name."
      - "Write an async function callWithRetry(fn, maxRetries = 3) that calls fn, and on a 429 response waits (1000ms * 2^attempt) before retrying."
      - "Test your retry logic by temporarily lowering your rate limit (or mocking a 429 response) and confirming the waits happen."
      - "Run git log --all -- '*.env' to confirm no .env file was ever committed — if it was, rotate the key immediately."
      - "Write a plain array of five labelled test cases for your Day 2 classifier: [{input: '...', expected: 'positive'}, ...]."
      - "Write runEval() that iterates the array, calls your classifier for each, and increments a correct counter."
      - "Print the accuracy (e.g. '4/5 correct') — if it is under 100%, investigate the failing case and improve your prompt."
    stuck: "Your retry function keeps retrying on every error, not just rate limits? Check err.status (OpenAI) or err.statusCode (Anthropic) — only retry on 429 and 500+, not on 400 (bad request) errors, which will always fail and you are paying per retry."
    resources:
      - label: "OpenAI — API quickstart"
        url: "https://platform.openai.com/docs/quickstart"
      - label: "Anthropic — Get started"
        url: "https://docs.anthropic.com/en/docs/get-started"
      - label: "Anthropic — Prompt engineering overview"
        url: "https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/overview"
project:
  title: "An LLM-powered tool"
  brief: "Build a small but genuinely useful tool that calls an LLM API — e.g. a text summariser, a tagger/classifier, or a writing assistant — returning structured output, with keys kept out of your code."
  deploy: "Local or a serverless function"
  rubric:
    - "Calls a real LLM API from code (OpenAI or Anthropic) — not a wrapper or no-code tool"
    - "Has a thoughtfully engineered system prompt that produces consistent, reliable output"
    - "Returns and parses structured JSON — handles malformed responses without crashing"
    - "API key loaded from an environment variable, never hard-coded or committed to git"
    - "Handles an API error gracefully — the tool gives a clear message instead of throwing an unhandled exception"
milestone: false
proSkills: ["AI-Leverage & Defensibility"]
resources:
  - label: "OpenAI — API quickstart"
    url: "https://platform.openai.com/docs/quickstart"
  - label: "Anthropic — Get started"
    url: "https://docs.anthropic.com/en/docs/get-started"
  - label: "Prompt Engineering Guide"
    url: "https://www.promptingguide.ai/"
  - label: "OpenAI — Prompt engineering"
    url: "https://platform.openai.com/docs/guides/prompt-engineering"
  - label: "Anthropic — Prompt engineering overview"
    url: "https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/overview"
---

## The module in one sentence

This is where you gain the skill that separates a developer who uses AI tools from one who **builds** AI tools — and in 2026, that gap is where the real freelance leverage lives.

## What we're really learning

Most tutorials hand you a pre-built chatbot wrapper and call it "AI development." That is not what this module is. We work at the level of the API: raw HTTP requests, the messages array, the system and user roles, the response object, and the usage count. Understanding this layer means you can wire an LLM into any tool you build — not just the one the tutorial imagined.

The deeper skill is **prompt engineering**: the discipline of communicating with a model precisely enough that it does the same thing reliably across hundreds of inputs. A vague prompt that "usually works" is not production code. A prompt with a clear system role, explicit constraints, and two or three examples — tested against inputs you know the answer to — is a thing you can ship to a client with confidence.

We also cover the economics. Every call costs money and burns tokens. Knowing how to read a usage object, estimate a cost, and set sensible limits is what keeps a side project from becoming an unexpected invoice.

## Why structured output is the real unlock

Asking an LLM to "help" with a task is useful. Asking it to return a JSON object with specific fields you then feed into your database, your UI, or your next function call is **programmable intelligence** — and that is a different category of useful. Day 3's work on structured output is the hinge of this module. Once you can reliably extract typed data from unstructured text, a whole class of automation becomes possible: tagging, classification, extraction, enrichment. That is billable work.

## AI as tutor, not as code vending machine

The irony of a module about building with AI is that it is tempting to ask AI to do all the work. Resist, especially here. Copy-pasting a prompt someone else engineered and a response parser someone else debugged teaches you nothing you can transfer. Write the prompts yourself — even the ones that fail — and use AI to explain *why* they failed: "My classifier is returning 'Neutral' when I expect 'Negative' for this input — what about my system prompt might be causing that?" That conversation is how you build the intuition this module is really after.
