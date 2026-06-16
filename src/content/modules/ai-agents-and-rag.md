---
title: "AI agents & RAG"
focus: "The high-value end of AI work: tool-using agents and answering questions over custom data."
hours: 34
tech: ["LLM APIs", "AI"]
objectives:
  - "Explain what an AI agent is — tools, the action loop — and when to use one instead of a plain LLM call."
  - "Build a simple tool-using agent with function calling so the model can take actions, not just talk."
  - "Chunk and embed a set of documents and perform vector similarity search over them."
  - "Build a complete RAG pipeline — retrieve relevant context, augment the prompt, generate a grounded answer."
  - "Understand the real costs, limits, and failure modes of agents and RAG so you can set client expectations honestly."
days:
  - n: 1
    topic: "What agents are"
    learn: "The difference between a plain LLM call and an agent: tools, the action loop, and when the complexity is worth it."
    build: "Read the tool-use docs for your chosen provider and trace the request/response cycle for a single tool call on paper."
    assignment: "Write a one-page plain-English explanation of the agent loop — what happens between the user's message and the model's final answer when tools are involved. No code yet."
    time: "~5h"
    details: "An agent is not magic — it is an LLM in a loop with access to tools. The model reads a message, decides whether to call a tool, you run that tool and send the result back, the model decides whether it needs another tool or is ready to answer. That loop is the whole thing. Understanding it on paper before writing code means you'll debug it correctly when it breaks — and it will break. The key question isn't 'how do I build an agent?' but 'does this problem actually need one?' A single well-crafted prompt often beats a five-tool agent for speed, cost, and reliability."
    steps:
      - "Read the function calling overview for your LLM provider — OpenAI or Anthropic links are in the day resources."
      - "Draw the agent loop on paper: user message → LLM → tool call? → run tool → result back to LLM → repeat or answer."
      - "Identify three scenarios where an agent makes sense (needs external data, needs to take an action, needs to chain decisions) and three where it doesn't (pure text generation, a single lookup, anything a well-written prompt can handle)."
      - "Note the failure modes: the model calls the wrong tool, the tool errors, the loop runs forever. Write down how you'd detect each one."
      - "Read your provider's pricing page and calculate the rough cost of a 10-turn agent conversation with a mid-size model."
    stuck: "Confused about the difference between a tool and a function? They're the same thing — 'function calling' (OpenAI) and 'tool use' (Anthropic) are two names for the same mechanism. The model emits a structured request to call a function you define; you run it and return the result."
    resources:
      - label: "OpenAI — Function calling"
        url: "https://platform.openai.com/docs/guides/function-calling"
      - label: "Anthropic — Tool use"
        url: "https://docs.anthropic.com/en/docs/build-with-claude/tool-use"
  - n: 2
    topic: "Build a simple tool-using agent"
    learn: "How to define a tool schema, send it to the model, handle the tool-call response, and feed the result back — the minimal agent loop in code."
    build: "Code a working two-tool agent: one tool that gets the current date/time, one that does a simple calculation. Watch the model decide when to call each."
    assignment: "Extend your agent with a third tool of your choice — a weather API, a currency converter, a random-fact fetcher. Make sure your loop handles the case where the model calls no tool at all."
    time: "~7h"
    details: "The first working tool call is the most satisfying moment in this whole track. You define a tool as a JSON schema — its name, what it does, its parameters — pass that schema alongside the user message, and the model returns a structured tool-call object instead of a text answer. You parse it, run the real function, and send the result back in a 'tool result' message. The model then decides whether to answer or call another tool. Keep this first agent tiny: two tools, a simple while loop, and a hard cap on iterations so it cannot run forever."
    steps:
      - "Set up a new script file and install your provider's SDK (e.g. npm install openai or pip install anthropic)."
      - "Define your first tool as a JSON schema object with a name, description, and parameters object."
      - "Send a user message to the API along with the tool definition in the tools parameter."
      - "Check the response: if the model returned a tool_use or tool_calls block, parse out the function name and arguments."
      - "Run your local function with those arguments and capture the return value."
      - "Send a follow-up message with the tool result back to the API."
      - "Add a while loop that repeats until the model returns a plain text answer or you hit a maximum iteration count (set it to 5 to start)."
      - "Log every step — what the model requested, what your tool returned — so you can trace the loop when it misbehaves."
    stuck: "Getting an error that the tool result message is malformed? The format differs between providers — Anthropic expects a 'tool_result' content block inside a user-role message; OpenAI expects a separate message with role 'tool'. Check the exact format in the docs rather than guessing."
    resources:
      - label: "OpenAI — Function calling"
        url: "https://platform.openai.com/docs/guides/function-calling"
      - label: "Anthropic — Tool use"
        url: "https://docs.anthropic.com/en/docs/build-with-claude/tool-use"
      - label: "Prompt Engineering Guide — RAG"
        url: "https://www.promptingguide.ai/techniques/rag"
  - n: 3
    topic: "Embeddings & vector search"
    learn: "What embeddings are (numbers that encode meaning), how chunking works, and how similarity search finds the most relevant chunk for a query."
    build: "Chunk a short document (a FAQ page or a policy doc), embed each chunk, and write a similarity search that returns the top-3 chunks for a test query."
    assignment: "Take a real-world document — a terms-of-service, a product manual, a company FAQ — chunk it into ~300-token pieces, embed the chunks, and run five test queries. Print the top result for each."
    time: "~7h"
    details: "An embedding is a list of numbers — a vector — that encodes the semantic meaning of a piece of text. Two chunks about similar topics end up close together in that number-space; unrelated chunks end up far apart. Cosine similarity measures that distance: 1.0 means identical meaning, 0.0 means completely unrelated. Chunking is the unglamorous work that determines quality: chunks too long lose precision, chunks too short lose context. A practical starting point is 300–500 tokens with a 50-token overlap so sentences that span a chunk boundary are not cut in half."
    steps:
      - "Pick a document of 1,000–3,000 words — a real FAQ or policy page works well."
      - "Write a function that splits the document into chunks of roughly 300 tokens, with 50-token overlap between consecutive chunks."
      - "Call your provider's embeddings endpoint (e.g. OpenAI text-embedding-3-small) for each chunk and store the resulting vectors alongside the chunk text."
      - "Write a cosine-similarity function that takes two vectors and returns a score between 0 and 1."
      - "For a test query, embed the query text the same way you embedded the chunks."
      - "Score every chunk against the query embedding and sort by score descending."
      - "Print the top-3 chunks and their scores. Do the results make intuitive sense for the query?"
      - "Try a query the document doesn't cover — confirm that the top result's score is noticeably lower than when the topic is present."
    stuck: "Similarity scores all look similar and unhelpful? Make sure you're embedding both chunks and queries with the same model — mixing models gives meaningless scores. Also check that you're normalising the vectors before computing cosine similarity, or use a library (numpy's dot product on unit-norm vectors) rather than hand-rolling the math."
    resources:
      - label: "Supabase — Vector & embeddings"
        url: "https://supabase.com/docs/guides/ai"
      - label: "Prompt Engineering Guide — RAG"
        url: "https://www.promptingguide.ai/techniques/rag"
      - label: "OpenAI — Embeddings"
        url: "https://platform.openai.com/docs/guides/embeddings"
  - n: 4
    topic: "Build a RAG pipeline"
    learn: "How retrieve → augment → generate fits together as a system, and where each step can go wrong."
    build: "Wire your Day 3 vector search into a complete pipeline: embed the query, retrieve the top-3 chunks, inject them into the prompt, generate an answer, and return a source reference alongside it."
    assignment: "Extend the pipeline to handle the 'not found' case: if no chunk scores above a threshold you choose (e.g. 0.75), the assistant should say 'I don't have information on that in my documents' rather than hallucinating an answer."
    time: "~7h"
    details: "RAG is retrieve, augment, generate — three steps that work together to ground the model's answers in your documents instead of its training data. Retrieve: embed the user's question and find the most relevant chunks. Augment: prepend those chunks to the system prompt so the model has the evidence in front of it. Generate: ask the model to answer using only the provided context. The 'not found' threshold is the part most tutorials skip, and it's the most important for a client-grade product — without it, the model will answer confidently from its own training data when the answer isn't in your docs, which is exactly the hallucination you built RAG to prevent."
    steps:
      - "Start with the embeddings and similarity search from Day 3."
      - "Write a retrieve(query) function that embeds the query, runs similarity search, and returns the top-3 chunks above a minimum score threshold."
      - "Write a build_prompt(chunks, query) function that formats the retrieved chunks as a numbered context block and appends the user's question."
      - "Send the augmented prompt to the LLM with an instruction in the system prompt: 'Answer using only the provided context. If the answer is not in the context, say so.'"
      - "Log which chunks were retrieved alongside the answer so you can audit the pipeline's reasoning."
      - "Test with five questions the document covers and two it doesn't. Confirm the decline message appears for the out-of-scope questions."
      - "Add a 'sources' field to your output that lists which chunk(s) the answer drew from."
    stuck: "Model still hallucinating even with the instruction? Try making the instruction more explicit: 'Do not use any knowledge outside the provided context blocks. If the context does not contain the answer, respond with exactly: I don\\'t have that information in my documents.' Being precise about the fallback phrase makes it easier to detect programmatically."
    resources:
      - label: "Prompt Engineering Guide — RAG"
        url: "https://www.promptingguide.ai/techniques/rag"
      - label: "Supabase — Vector & embeddings"
        url: "https://supabase.com/docs/guides/ai"
      - label: "Anthropic — Tool use"
        url: "https://docs.anthropic.com/en/docs/build-with-claude/tool-use"
  - n: 5
    topic: "Reliability, evaluation, cost & capstone"
    learn: "How to evaluate RAG quality, estimate and control costs, set guardrails, and present AI work to a client honestly."
    build: "Run a mini evaluation on your pipeline: create a set of 10 question-answer pairs and measure how often your assistant gets it right. Tune one thing based on what you find."
    assignment: "Combine everything into the capstone: a small RAG assistant over a document set of your choice, deployed locally or online, with a written note on its cost per 1,000 queries and its known failure modes."
    time: "~8h"
    details: "Agents and RAG are not magic — they fail in predictable ways that you can measure and improve. Chunking strategy affects retrieval quality. Retrieval threshold affects whether you answer or decline. Model choice affects cost by an order of magnitude. A freelancer who can honestly tell a client 'this costs about $0.02 per query, has an 85% accuracy on in-scope questions, and declines gracefully when the answer isn't there' is worth far more than one who demos a shiny prototype and leaves. Evaluation doesn't have to be elaborate: twenty question-answer pairs and a manual pass/fail gets you signal in an hour."
    steps:
      - "Write 10 question-answer pairs that your document set covers, and 3 out-of-scope questions."
      - "Run each question through your RAG pipeline and record: did it retrieve the right chunk? Did it answer correctly? Did it decline the out-of-scope questions?"
      - "Identify the single biggest failure pattern — wrong chunk, hallucinated answer, incorrect decline — and fix one thing (chunk size, threshold, prompt wording)."
      - "Re-run the evaluation and compare before/after."
      - "Open your provider's pricing page and calculate: embedding cost per 1,000 documents, query cost per 1,000 queries at your average chunk count. Write it down."
      - "Write a one-paragraph limitations note: what kinds of questions it handles well, what kinds it doesn't, what a user should not trust it for."
      - "Package the assistant as a simple script or minimal UI and confirm it runs end-to-end: a real question comes in, real chunks are retrieved, a real answer goes out."
    stuck: "Evaluation feels subjective? It is at first — that's normal. Grade each answer as pass, partial, or fail using your own judgment, then count the totals. Even rough numbers (7/10 correct, 2/10 hallucinated, 1/10 wrong decline) give you enough signal to know whether your changes helped. Don't wait for a perfect evaluation harness before iterating."
    resources:
      - label: "Prompt Engineering Guide — RAG"
        url: "https://www.promptingguide.ai/techniques/rag"
      - label: "OpenAI — Function calling"
        url: "https://platform.openai.com/docs/guides/function-calling"
      - label: "Supabase — Vector & embeddings"
        url: "https://supabase.com/docs/guides/ai"
project:
  title: "A RAG assistant over custom docs"
  brief: "Build an assistant that answers questions over a specific document set — a company FAQ, a product manual, a set of policies — using retrieval so answers are grounded in real data, not hallucinated. This is the kind of AI work clients will actually pay for."
  deploy: "Local or deployed"
  rubric:
    - "Documents are chunked and embedded with a sensible chunk size and overlap strategy"
    - "Vector similarity search retrieves the most relevant context chunks for each query"
    - "The LLM answers using only the retrieved context — not its training data"
    - "The assistant declines or says 'not found' when the answer is not in the documents"
    - "A written note covers estimated cost per 1,000 queries and at least two known limitations"
milestone: true
proSkills: ["AI-Leverage & Defensibility"]
resources:
  - label: "OpenAI — Function calling"
    url: "https://platform.openai.com/docs/guides/function-calling"
  - label: "Anthropic — Tool use"
    url: "https://docs.anthropic.com/en/docs/build-with-claude/tool-use"
  - label: "Prompt Engineering Guide — RAG"
    url: "https://www.promptingguide.ai/techniques/rag"
  - label: "Supabase — Vector & embeddings"
    url: "https://supabase.com/docs/guides/ai"
---

## The module in one sentence

This is the high end of AI freelance work — building systems that use tools and answer
questions over real data, not systems that just call an API and hope for the best.

## What we're really building

Most developers who "add AI" to a project do two things: call the chat completions endpoint
and paste the output into the UI. That's fine for a weekend experiment. It is not what
clients with real problems and real budgets need.

**Agents** let a model take actions: look things up, run calculations, call external APIs,
chain decisions across multiple steps. **RAG** (retrieval-augmented generation) lets a
model answer questions over your specific documents — a knowledge base, a policy library,
a product catalogue — without hallucinating facts it doesn't know. These two capabilities
are the reason enterprise clients hire AI developers rather than just using ChatGPT.

The technical surface area here is deliberately manageable: a provider SDK, an embeddings
endpoint, and either a vector database or a simple in-memory cosine-similarity function.
No framework magic. You build the loop yourself so you understand every step, which means
you can debug it, tune it, and explain it to a client in plain English.

## The honest truth about failure modes

RAG fails in two ways that matter: it retrieves the wrong chunk (retrieval failure), or
it ignores the retrieved chunk and answers from training data anyway (grounding failure).
Agents fail in three ways: the model calls the wrong tool, the tool errors silently, or
the loop runs too many iterations and burns through your API budget.

None of these are edge cases. They happen on real documents with real queries. The
difference between a prototype and a production system is that you've measured these
failure rates, reduced the ones you can, and been honest with the client about the ones
you can't. By the end of this module you'll know how to do all three.

## Using AI on this module — and why the irony is intentional

You are building AI systems. Use AI freely to explain concepts, debug error messages, and
review code you've already written. That is the workflow. What you should not do is ask
an AI to generate your chunking logic, your similarity search, or your prompt template
and then paste it in without understanding it — because the first time a client asks "why
does it give wrong answers for questions about X?" you need to be able to look at your
pipeline and diagnose the problem. The AI-as-tutor rule still holds: AI explains, you
build, you understand, you own it.
