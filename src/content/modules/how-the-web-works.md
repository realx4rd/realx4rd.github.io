---
title: "How the web (and computers) really work"
focus: "The mental models behind everything you'll build — from binary to browsers."
hours: 16
tech: ["Web", "HTTP"]
objectives:
  - "Explain in plain words how the internet, servers, and HTTP fit together."
  - "Trace exactly what happens between pressing Enter on a URL and seeing the page."
  - "Read the browser Network tab to debug a real request."
  - "Understand how computers represent data — binary, text, and files."
  - "Explain DNS, hosting, and HTTPS at a high level."
days:
  - n: 1
    topic: "How computers represent everything"
    learn: "Binary, bits and bytes, how text becomes numbers (ASCII/Unicode), and what a file format really is."
    build: "Inspect a plain text file and an image in a hex viewer to see the raw bytes underneath."
    assignment: "Convert the letters of your first name to their ASCII decimal values by hand, then verify them with an online table."
    time: "~3h"
    details: "Everything a computer stores — text, images, audio, code — is ultimately a sequence of 1s and 0s. A bit is a single 1 or 0; eight bits make a byte, which can hold 256 different values. ASCII maps the numbers 0–127 to characters, and Unicode extends that idea to cover every human script. A file format is just an agreed-on convention for arranging bytes so programs know how to read them."
    steps:
      - "Open the CS50x lecture notes on data (Week 0) and read the section on binary and ASCII."
      - "In your terminal, run xxd yourfile.txt | head to see the hex dump of a plain text file."
      - "Identify the hex value for a letter you recognise — for example, 68 is ASCII 'h'."
      - "Open a small image (JPG or PNG) and run xxd on it; notice the first few bytes are always the same — this is the magic number that tells the OS what format the file is."
      - "Look up your full name in an ASCII table and write out each character's decimal value."
    stuck: "xxd not found? On Windows use certutil -dump or open the file in VS Code's hex editor extension. On Mac xxd ships with the system."
    resources:
      - label: "CS50x — Week 0 (binary, ASCII, Unicode)"
        url: "https://cs50.harvard.edu/x/"
      - label: "MDN — What is a URL? (character encoding aside)"
        url: "https://developer.mozilla.org/en-US/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_URL"
  - n: 2
    topic: "The internet: clients, servers, and DNS"
    learn: "What a server is, how IP addresses and DNS work, and how data travels as packets."
    build: "Ping a domain and run nslookup (or dig) in the terminal to watch DNS do its job live."
    assignment: "In your own words, explain the difference between an IP address and a domain name, and why both exist."
    time: "~3h"
    details: "The internet is a huge network of computers that communicate by breaking data into small packets and routing them independently — they may take different paths and arrive out of order, and TCP reassembles them correctly. Every device has a numeric IP address. DNS (the Domain Name System) is the phone book that translates a human-friendly name like example.com into the IP address a router can use. A server is just a computer running software that listens for and responds to requests."
    steps:
      - "In your terminal, run ping -c 4 google.com and watch the IP address that appears next to the domain name."
      - "Run nslookup google.com (or dig google.com on Mac/Linux) and read the Answer Section — that numeric string is the IP DNS resolved the name to."
      - "Read the Cloudflare explainer on DNS linked below."
      - "Open MDN's 'How does the Internet work?' article and sketch the client → DNS → server → client journey on paper."
      - "Write a two-sentence explanation of DNS in your own words and keep it in your notes."
    stuck: "nslookup not found? Try dig instead on Mac/Linux. On Windows, nslookup is built in — open Command Prompt (not PowerShell) if it's missing."
    resources:
      - label: "Cloudflare — What is DNS?"
        url: "https://www.cloudflare.com/learning/dns/what-is-dns/"
      - label: "MDN — How does the Internet work?"
        url: "https://developer.mozilla.org/en-US/docs/Learn_web_development/Howto/Web_mechanics/How_does_the_Internet_work"
  - n: 3
    topic: "HTTP, the language of the web"
    learn: "HTTP requests and responses, the most common methods (GET/POST), headers, status codes, and HTTPS."
    build: "Use curl in the terminal to fire a real HTTP request and read the response headers."
    assignment: "Find three different HTTP status codes in the Network tab of a real site — explain what each means."
    time: "~3h"
    details: "HTTP is the text-based protocol that browsers and servers use to talk. Every exchange is a request from the client and a response from the server. The request has a method (GET fetches, POST submits data), a path, and headers (key-value metadata). The response has a status code — 200 is OK, 301 is a redirect, 404 is not found, 500 is a server error — and headers, and usually a body. HTTPS is HTTP with TLS encryption layered on top, which is why your browser shows a padlock."
    steps:
      - "Run curl -I https://example.com in the terminal and read the response headers."
      - "Identify the status code (200), the Content-Type header, and the Date header."
      - "Read the MDN HTTP overview article linked below."
      - "Open DevTools on any real site, go to the Network tab, reload, and click the first request."
      - "In the Headers panel, find the Request Method, Status Code, and at least one response header. Write them in your notes."
    stuck: "curl not installed on Windows? Use curl.exe in PowerShell (it ships with Windows 10+), or install Git for Windows which includes it."
    resources:
      - label: "MDN — An overview of HTTP"
        url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/Overview"
      - label: "MDN — HTTP response status codes"
        url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status"
  - n: 4
    topic: "What a browser actually does"
    learn: "How the browser parses HTML into a DOM, applies CSS, runs JavaScript, paints the page, and what caching means."
    build: "Open the Network tab, reload a page, and identify each phase: HTML document, stylesheets, scripts, images."
    assignment: "Load any webpage with DevTools open and write a numbered list of every distinct resource type the browser fetches — in the order it fetches them."
    time: "~3h"
    details: "When the browser receives the HTML, it builds a tree of objects called the DOM (Document Object Model). CSS is then applied to compute each element's style. JavaScript can modify both. The browser then paints pixels to the screen in a multi-step process: layout (where things go), paint (what they look like), and composite (layering). Caching lets the browser skip re-downloading files it already has, which is why a hard-refresh (Ctrl+Shift+R) sometimes fixes a stale page."
    steps:
      - "Open any page in Chrome and press F12 to open DevTools, then switch to the Network tab."
      - "Press Ctrl+Shift+R (hard reload) to clear the cache and capture every request."
      - "Filter by 'Doc' to find the initial HTML document; note its size and time."
      - "Filter by 'CSS', 'JS', and 'Img' in turn — observe the waterfall and how later resources depend on the first."
      - "Reload a second time without clearing the cache and notice which files are now served from cache (status 304 or 'from disk cache')."
    stuck: "Network tab is empty after reload? Make sure DevTools was open before you reloaded — it only records requests that happen while it is active."
    resources:
      - label: "MDN — Populating the page: how browsers work"
        url: "https://developer.mozilla.org/en-US/docs/Web/Performance/Guides/How_browsers_work"
      - label: "Chrome DevTools — Network panel overview"
        url: "https://developer.chrome.com/docs/devtools/network"
  - n: 5
    topic: "Hosting, domains, and the full picture"
    learn: "Where sites live (servers, CDNs), how domains are registered and pointed, and the complete URL-to-pixels journey end to end."
    build: "Trace one full request cycle — from typing a URL to seeing the page — and annotate a screenshot of the Network tab for that same request."
    assignment: "Write your deliverable: a step-by-step written explanation of what happens when you press Enter on a URL, backed by your annotated Network tab screenshot."
    time: "~4h"
    details: "Hosting means renting space on a server (or a CDN, which has many servers around the world) so your files are reachable at a public IP. A domain registrar lets you lease a human-readable name and point its DNS records at that IP. HTTPS adds a TLS certificate to prove the server is who it claims to be. Put it all together: you type a URL, your OS asks DNS for the IP, your browser opens a TCP connection, TLS handshakes for HTTPS, the browser sends an HTTP GET, the server responds with HTML, and the browser parses and renders the page."
    steps:
      - "Open a fresh browser tab with DevTools Network tab open."
      - "Navigate to a site you use daily and let it fully load."
      - "Take a screenshot of the Network tab waterfall."
      - "Annotate the screenshot (in any image editor or even on paper) labelling: the initial HTML request, the first CSS file, the first JS file, and any third-party requests."
      - "Write out the full URL-to-pixels journey in plain numbered steps — aim for at least eight steps — and attach your annotated screenshot as the evidence."
    stuck: "Not sure where to host your annotated screenshot? Save it as a PNG in your project folder and reference it from your written notes — no need to upload it anywhere yet."
    resources:
      - label: "MDN — How does the Internet work?"
        url: "https://developer.mozilla.org/en-US/docs/Learn_web_development/Howto/Web_mechanics/How_does_the_Internet_work"
      - label: "Cloudflare — What is a CDN?"
        url: "https://www.cloudflare.com/learning/cdn/what-is-a-cdn/"
deliverable: "A written, step-by-step explanation of what happens between pressing Enter on a URL and seeing the page — backed by your own annotated screenshot of the browser Network tab."
milestone: false
proSkills: ["How to learn", "Debug-first reflex"]
resources:
  - label: "CS50x — Harvard's free intro CS course"
    url: "https://cs50.harvard.edu/x/"
  - label: "MDN — How does the Internet work?"
    url: "https://developer.mozilla.org/en-US/docs/Learn_web_development/Howto/Web_mechanics/How_does_the_Internet_work"
  - label: "MDN — An overview of HTTP"
    url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/Overview"
  - label: "MDN — Populating the page: how browsers work"
    url: "https://developer.mozilla.org/en-US/docs/Web/Performance/Guides/How_browsers_work"
  - label: "Cloudflare — What is DNS?"
    url: "https://www.cloudflare.com/learning/dns/what-is-dns/"
---

## Why this module exists

Every bug you will ever debug lives somewhere on the journey between a URL and a pixel.
A broken request, a wrong status code, a cached file, a misconfigured server — they all
have a specific location in a chain you can trace. Knowing that chain is what separates
a developer who guesses from one who knows where to look.

This module is not about memorising facts. It's about building **mental models** — durable
pictures in your head that let you reason about a system you've never seen before.

## The four models to lock in

**Bits and bytes are the foundation.** Everything your computer stores or transmits is
numbers, and numbers are just patterns of on/off switches. Once you see that, file
formats, character encoding, and network packets all follow naturally.

**The internet is a postal system for packets.** Data is broken into chunks, each
labelled with a destination IP address, and the network routes them to their destination
— possibly by different paths. TCP makes sure they arrive and are reassembled in order.

**HTTP is a conversation.** The browser asks (request), the server answers (response).
Every exchange has a method, a path, headers, and a status code. Reading that
conversation in DevTools is the most useful debugging skill you will ever have.

**The browser is a rendering engine.** It does not just display files — it parses,
builds a tree (the DOM), computes styles, and paints. Understanding the steps helps you
predict where things will go wrong and why a hard-refresh sometimes fixes what a normal
reload doesn't.

## Your AI-tutor tip for this module

When something is unclear, do not ask an AI "what is DNS?" and copy the answer. Instead,
ask: *"Give me an analogy for how DNS works, then give me two things that can go wrong
with it and how I'd spot them."* The analogy builds intuition; the failure modes build
your debug-first reflex. The goal is a mental model you can use independently — not a
definition you'll forget by tomorrow.

## What comes next

With these models in place, every topic that follows — HTML, CSS, JavaScript, APIs,
deployment — has a home. You'll know *why* a CSS file needs to be linked separately, why
a form uses POST instead of GET, and why "it works on my machine" is a hosting problem.
The rest of the course is just filling in the details of a picture you can already see.
