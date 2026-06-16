---
title: "AI automation (n8n, Make & Zapier)"
focus: "Automate real business workflows with AI — the fastest path to your first paid work."
hours: 36
tech: ["n8n", "No-code", "AI"]
objectives:
  - "Explain workflow automation and why businesses pay good money for it."
  - "Build working automations in n8n (and understand Make / Zapier well enough to switch)."
  - "Connect apps with triggers, actions, webhooks, and API calls."
  - "Move and transform data between steps: mapping, filtering, and conditionals."
  - "Add an AI step that classifies, drafts, or summarises — and pitch the result as a measurable business outcome."
days:
  - n: 1
    topic: "The automation landscape + your first workflow"
    learn: "What automation tools actually are, how they differ (n8n vs Make vs Zapier), and the core mental model: trigger → node → action."
    build: "Create a free n8n Cloud account (or Make) and wire up a two-node 'Hello world' that emails you when a form is submitted."
    assignment: "Build a workflow that watches an RSS feed and posts each new item to a Google Sheet. No code — just nodes."
    time: "~7h"
    details: "Automation platforms are visual plumbing. Every workflow has the same skeleton: something that fires it (a trigger), one or more steps that do things (nodes or actions), and a destination. n8n is open-source and self-hostable; Make is polished and visual; Zapier has the biggest library of app connectors. All three share the same concepts — learn one well and the others are just UI differences. The first 20 minutes you spend reading the docs will save 20 hours of trial and error."
    steps:
      - "Sign up for n8n Cloud at app.n8n.cloud (free tier is enough). If you prefer Make, make.com has a free plan too."
      - "Open a blank workflow. Add a 'Schedule Trigger' node set to run every hour."
      - "Add an 'RSS Read' node — point it at any blog's feed URL (e.g. https://hnrss.org/frontpage)."
      - "Add a 'Google Sheets' node set to Append Row. Map 'title' and 'link' from the RSS output."
      - "Hit 'Test workflow' and watch rows appear in your sheet. Read the output panel — every node shows exactly what data it received and passed on."
      - "Read the n8n 'Understanding the data structure' doc page before Day 2."
    stuck: "Google Sheets refusing to connect? Make sure you granted all requested OAuth scopes during the connection flow — revoke and re-authorise if needed."
    resources:
      - label: "n8n — Documentation"
        url: "https://docs.n8n.io/"
      - label: "n8n — Courses (free)"
        url: "https://docs.n8n.io/courses/"
      - label: "Make — Help center"
        url: "https://www.make.com/en/help/home"
  - n: 2
    topic: "Triggers, actions & connecting apps"
    learn: "The difference between polling and instant (webhook) triggers, how to receive a webhook, and what an API call node does."
    build: "Replace your Schedule trigger with a real webhook — fire it from a browser or Postman and watch n8n catch it in real time."
    assignment: "Build a Typeform (or any form tool) → Slack notification workflow: when a form is submitted, post a message with the respondent's name and email."
    time: "~7h"
    details: "Polling triggers check for new data every N minutes — cheap but slow. Webhook triggers fire the instant something happens, which is what clients actually want when they say 'real time'. The distinction matters because many business use cases (support tickets, payment notifications, lead capture) only feel snappy with webhooks. The 'HTTP Request' node is your escape hatch when there's no built-in integration: if an app has any REST API, you can talk to it."
    steps:
      - "Delete the Schedule trigger. Add a 'Webhook' trigger node; copy the test URL it gives you."
      - "Open a new browser tab, paste the URL, and add '?name=Ada&email=ada@example.com' to the end. Hit Enter."
      - "Back in n8n, the trigger node should show 'Data received'. Inspect the body — you can see your query params."
      - "Add a 'Slack' node (or 'Gmail' if you don't use Slack) set to Send Message. Map the name and email fields into the message text."
      - "Test end-to-end, then switch the webhook URL from 'test' to 'production' — that's the live URL you give clients."
      - "Explore the n8n app node library: search for a tool your client uses and see if there's a pre-built integration."
    stuck: "Webhook not firing? Make sure you're hitting the test URL (not the production one) while the workflow is in 'listening' mode — click 'Test workflow' first."
    resources:
      - label: "n8n — Documentation"
        url: "https://docs.n8n.io/"
      - label: "n8n — Courses (free)"
        url: "https://docs.n8n.io/courses/"
      - label: "Zapier — Learn"
        url: "https://zapier.com/learn/"
  - n: 3
    topic: "Moving & transforming data between nodes"
    learn: "Expressions and the n8n data model: how to reference previous node output, filter items, and branch with IF / Switch nodes."
    build: "Add a conditional: if the form submission has a budget field over £1 000, route it to a 'hot lead' Slack channel; otherwise to a general one."
    assignment: "Extend yesterday's Typeform workflow. Add a 'Set' node that formats the data into a clean object, then an IF node that splits leads by budget. Test both branches fire correctly."
    time: "~7h"
    details: "Raw webhook payloads are rarely in the shape you need. The 'Set' node lets you rename, combine, and reformat fields before passing them on. Expressions (those {{ }} wrappers) are how you reference data from earlier nodes — they look scarier than they are: most of the time you drag a field from the input panel and n8n writes the expression for you. IF and Switch nodes are the logic gates that make automations genuinely smart rather than just connective tissue."
    steps:
      - "Add a 'Set' node after your webhook. Create three fields: fullName (combine first + last), email, and budgetGBP (coerce the string to a number with toNumber())."
      - "Add an IF node. Condition: budgetGBP is greater than 1000."
      - "Connect the 'true' branch to a Slack node posting to #hot-leads; connect 'false' to #all-leads."
      - "Trigger the webhook twice — once with budget=500 and once with budget=2000 — and confirm each message lands in the right channel."
      - "Read the n8n expressions docs: understand $json, $node, and $items — these three get you through 90% of real work."
    stuck: "Expression returning 'undefined'? Open the input panel on the node and drag the exact field name in — n8n will autocomplete the correct path."
    resources:
      - label: "n8n — Documentation"
        url: "https://docs.n8n.io/"
      - label: "Make — Help center"
        url: "https://www.make.com/en/help/home"
      - label: "Zapier — Learn"
        url: "https://zapier.com/learn/"
  - n: 4
    topic: "AI inside automations"
    learn: "How to add an LLM node (n8n's AI Agent or OpenAI node) to classify, draft, or summarise — and when AI actually adds value versus adding cost."
    build: "Add an OpenAI 'Chat Message' node to your lead workflow. Prompt it to write a personalised first-response email draft based on the lead's details."
    assignment: "Build a standalone 'inbox triage' workflow: take a plain-text email body (hardcode it for now), classify it as 'support', 'sales', or 'other' using an LLM, then route it with a Switch node."
    time: "~7h"
    details: "AI steps are most valuable when they replace something a human currently does slowly — writing a first-response email, tagging a support ticket, summarising a long form submission. The key discipline is to be specific in your prompt: give the LLM a tight output format (e.g. 'respond with exactly one word: support, sales, or other') so the Switch node downstream can parse it reliably. Vague prompts produce vague outputs that break the rest of the workflow."
    steps:
      - "In n8n, add an 'OpenAI' node (or 'AI Agent' node). Connect it to your OpenAI API key."
      - "Set the model to gpt-4o-mini (cheap and fast for classification tasks)."
      - "Write a system prompt: 'You are a lead-qualification assistant. Based on the details provided, write a warm, two-sentence first-response email. Use the lead's first name. Do not invent any details not given.'"
      - "In the user message, use an expression to inject the lead name, email, and budget from earlier nodes."
      - "Add a 'Set' node to store the AI output as draftEmail, then add a Gmail node set to 'Create Draft' — pass draftEmail as the body."
      - "Test the full flow and read the draft it creates. Edit the prompt until you'd be comfortable sending that draft to a real client."
    stuck: "AI node erroring? Check your OpenAI API key is set correctly in n8n Credentials, and that the model name is spelled exactly right (gpt-4o-mini, not gpt4-mini)."
    resources:
      - label: "n8n — Documentation"
        url: "https://docs.n8n.io/"
      - label: "n8n — Courses (free)"
        url: "https://docs.n8n.io/courses/"
      - label: "Make — Help center"
        url: "https://www.make.com/en/help/home"
  - n: 5
    topic: "A real business automation — and how to sell it"
    learn: "How to frame an automation as a client outcome ('saves X hours/week'), where to find your first automation client, and how to price and hand over a workflow."
    build: "Build the full end-to-end project workflow (see below). Then write the one-paragraph pitch for it."
    assignment: "Record a 3-minute Loom of you triggering the workflow live, narrating what it does and the time it saves. This is your demo reel."
    time: "~7h"
    details: "Clients don't buy 'n8n workflows' — they buy back their time. 'This form-to-CRM pipeline replaces 45 minutes of manual data entry per day' is a product. 'A workflow with six nodes' is not. The fastest route to paid work is to find one person who does something repetitive (a freelancer manually copying leads into a spreadsheet, a small business owner typing the same follow-up email every day) and automate that one thing for free or cheap. The case study that comes from it is worth more than the fee."
    steps:
      - "Build the full project workflow (contact form → enrich → AI summary → CRM/sheet) — see the project brief below."
      - "Time how long the manual version would take: literally do it by hand once and measure."
      - "Write a one-paragraph pitch: 'This automation handles [task]. Previously it took [time]. Now it runs in seconds, every time, with no manual steps. That's approximately [hours] saved per week.'"
      - "Share the workflow to n8n Cloud (or export the JSON) so a client or assessor can import it."
      - "Post the Loom in your cohort channel and ask for one piece of feedback on the pitch."
    stuck: "Not sure what to automate for the project? Start with the classic: 'Someone fills out a Typeform, I manually copy their details into a Google Sheet and send a reply.' That's a workflow. Build the automated version."
    resources:
      - label: "n8n — Documentation"
        url: "https://docs.n8n.io/"
      - label: "n8n — Courses (free)"
        url: "https://docs.n8n.io/courses/"
      - label: "Zapier — Learn"
        url: "https://zapier.com/learn/"
project:
  title: "A business automation that saves real time"
  brief: "Build a working automation that solves a concrete business task end to end — for example: a contact form that enriches the lead, uses AI to draft a reply, and logs it to a sheet or CRM. Frame it as 'saves X hours/week'."
  deploy: "n8n Cloud / Make / Zapier"
  rubric:
    - "A trigger that fires automatically (webhook, form submission, or schedule)"
    - "At least 3 connected steps with data flowing correctly between them"
    - "One AI step that adds real value (classification, drafting, or summarisation)"
    - "Data correctly mapped between nodes — no undefined fields"
    - "A one-paragraph pitch describing the outcome and the time saved"
milestone: false
proSkills: ["AI-Leverage & Defensibility", "Niche & Positioning", "Visibility & Pipeline"]
resources:
  - label: "n8n — Documentation"
    url: "https://docs.n8n.io/"
  - label: "n8n — Courses (free)"
    url: "https://docs.n8n.io/courses/"
  - label: "Make — Help center"
    url: "https://www.make.com/en/help/home"
  - label: "Zapier — Learn"
    url: "https://zapier.com/learn/"
---

## Why this module exists

Most web development skills are crowded. Automation is not — yet. A freelancer who can walk into a small business, spot the copy-paste drudgery, and replace it with a workflow that runs itself every time, forever, is solving a problem the owner already understands and already feels. That is a short sales cycle. The AI layer is what makes it defensible: any non-technical person can wire up a Zapier zap, but knowing *when* and *how* to add an LLM step that actually improves the output is still rare enough to charge real money for.

## The mental model that unlocks everything

Every automation — whatever the tool — is the same three things:

1. **A trigger** — something that says "go now" (a form submission, a new email, a scheduled time, a webhook fired by another system).
2. **Steps** — nodes or actions that fetch, transform, or create data.
3. **A destination** — a sheet, a CRM, an email, a Slack message, anything.

Learn to see any business process as a trigger-steps-destination sequence and you can automate it. The tools (n8n, Make, Zapier) are just different UIs for the same idea.

## n8n, Make, or Zapier — which one?

Use **n8n** as your primary learning environment. It is open-source, the free cloud tier is generous, and it exposes enough of what's happening under the hood that you'll genuinely understand the data model — not just click things until they work. **Make** has a beautiful visual canvas that many clients prefer; worth a day to compare. **Zapier** has the largest app library and the gentlest learning curve, which makes it the default for non-technical clients who want to manage their own zaps. Knowing all three at a surface level makes you more sellable. Being expert in one makes you actually useful.

## Selling the outcome, not the tech

Clients do not care about nodes. They care about getting two hours of their Friday afternoon back. Your job in every conversation is to translate what you build into time or money: "This workflow replaces the 30 minutes you spend every morning copying form responses into your CRM. It fires the moment the form is submitted, 24 hours a day, without you touching it." That sentence is a product. Price accordingly.
