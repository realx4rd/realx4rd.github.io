---
title: "Deploy & performance"
focus: "Ship real projects to the world — fast, secure, and on your own domain."
hours: 16
tech: ["Vercel", "Git"]
objectives:
  - "Deploy a site or app to Vercel or Netlify straight from a GitHub repository."
  - "Use environment variables to keep secrets out of version control — permanently."
  - "Connect a custom domain with HTTPS in under ten minutes."
  - "Measure and meaningfully improve your Core Web Vitals using Lighthouse."
  - "Use preview deploys and instant rollbacks as your safety net for every future project."
days:
  - n: 1
    topic: "Deploy from GitHub to Vercel"
    learn: "How continuous deployment works: connect a repo, Vercel builds on every push, and your site is live in under two minutes."
    build: "Import an existing GitHub repo into Vercel and watch the first automatic deploy complete."
    assignment: "Deploy any project you've built — even the Week 1 About Me page — to a live Vercel URL using GitHub as the source."
    time: "~3h"
    details: "Continuous deployment means you never manually upload files again. You push to GitHub, Vercel detects the change, builds your project, and swaps in the new version — usually in under 60 seconds. The mental model to lock in: your GitHub repo is the single source of truth; Vercel is just a machine that watches it and does the deployment work for you. Every push to main becomes a production deploy automatically."
    steps:
      - "Create a free Vercel account at vercel.com and connect it to your GitHub account."
      - "Click 'Add New Project', search for a repo you've already pushed to GitHub, and import it."
      - "Accept the default build settings for now (Vercel detects most frameworks automatically). Click Deploy."
      - "Watch the build log scroll by — it will show you exactly what Vercel is running. Your URL appears when it finishes."
      - "Make a trivial change to your project locally, commit it, and push to GitHub."
      - "Go back to the Vercel dashboard and watch a new deploy trigger automatically within seconds."
      - "Click the live URL and confirm the change is visible — you just did a production deploy by writing code normally."
    stuck: "Build failed on the first deploy? Read the build log — it usually says exactly which file or command caused the error. A missing dependency in package.json or an import that works locally but not in production is the most common culprit."
    resources:
      - label: "Vercel Docs — Get started"
        url: "https://vercel.com/docs"
      - label: "Netlify Docs — Get started"
        url: "https://docs.netlify.com/"
      - label: "GitHub Pages — Quickstart"
        url: "https://docs.github.com/en/pages/quickstart"
  - n: 2
    topic: "Build settings & environment variables"
    learn: "How to configure build commands and output directories — and why environment variables are the only safe place for secrets."
    build: "Add a test environment variable in the Vercel dashboard and confirm your app can read it at runtime."
    assignment: "If your project uses any API key or sensitive config, move it out of your source code and into an environment variable on Vercel. Verify nothing secret is in your git history."
    time: "~3h"
    details: "An environment variable is a value that lives on the server, not in your code. This matters enormously: if you hard-code an API key in a JavaScript file and push it to a public GitHub repo, it is exposed — permanently, even after you delete it, because git history remembers everything. The rule is simple and absolute: anything secret goes in an environment variable, never in code. Vercel and Netlify both have a first-class UI for this, and the values are injected at build time or runtime without ever touching your repository."
    steps:
      - "In the Vercel dashboard, open your project, go to Settings → Environment Variables."
      - "Add a variable named HELLO with value world. Set it for the Production environment and click Save."
      - "Trigger a new deploy (push a small commit, or use the 'Redeploy' button in the Vercel UI)."
      - "In your project code, read the variable with process.env.HELLO (Node) or import.meta.env.HELLO (Vite/Astro) and log or display it to confirm Vercel is injecting it."
      - "Run git log and git show on any old commits to check that no secrets are already in your history. If one is, rotate the key immediately with the service that issued it."
      - "Add .env and .env.local to your .gitignore if they're not there already."
      - "Create a .env.example file with placeholder values (HELLO=your-value-here) and commit it — this documents what variables the project needs without exposing real values."
    stuck: "Variable shows up as undefined at runtime? Environment variables added in Vercel take effect on the next deploy — if you added one after your last build, trigger a redeploy from the Vercel dashboard."
    resources:
      - label: "Vercel Docs — Environment variables"
        url: "https://vercel.com/docs/environment-variables"
      - label: "Netlify Docs — Environment variables"
        url: "https://docs.netlify.com/environment-variables/overview/"
  - n: 3
    topic: "Custom domains & HTTPS"
    learn: "How DNS works well enough to point a domain at Vercel; what HTTPS certificates are and why Vercel handles them automatically."
    build: "Add a custom domain (or a free subdomain from your registrar) to your Vercel project and confirm HTTPS is live."
    assignment: "Point a domain — even a cheap .com or a free subdomain from Freenom or your registrar — at your Vercel deployment. Confirm the padlock appears in the browser."
    time: "~3h"
    details: "A custom domain is what separates 'I have a Vercel URL' from 'I have a website'. The process is the same everywhere: you buy a domain from a registrar, add a DNS record that points it at Vercel's servers, and Vercel automatically provisions an HTTPS certificate (via Let's Encrypt) within minutes. You don't touch SSL settings at all — Vercel handles it. The only moving part is the DNS record, and Vercel's dashboard tells you exactly what to add. Propagation can take up to 48 hours but is usually under 15 minutes."
    steps:
      - "In the Vercel dashboard, open your project and go to Settings → Domains."
      - "Type in your domain name (e.g. yourname.com or portfolio.yourname.com) and click Add."
      - "Vercel will show you exactly which DNS records to add — usually an A record for the root domain and a CNAME for www."
      - "Log in to wherever you bought your domain (Namecheap, GoDaddy, Cloudflare, etc.) and add those records in the DNS settings."
      - "Come back to the Vercel Domains page after a few minutes and refresh — the status should change from 'Pending' to a green checkmark."
      - "Visit your custom domain in a browser and confirm the padlock appears — HTTPS is working."
      - "Try visiting the http:// version and confirm it redirects automatically to https://."
    stuck: "Domain showing 'Invalid Configuration' after 15 minutes? Double-check the DNS record values you copied from Vercel — one wrong character in a CNAME target will prevent it from resolving. Copy-paste rather than typing."
    resources:
      - label: "Vercel Docs — Custom domains"
        url: "https://vercel.com/docs/domains"
      - label: "Netlify Docs — Custom domains"
        url: "https://docs.netlify.com/domains-https/custom-domains/"
  - n: 4
    topic: "Performance: Lighthouse, Core Web Vitals & images"
    learn: "What Core Web Vitals are (LCP, CLS, INP), how to run Lighthouse, and the highest-leverage fix: correctly sized and compressed images."
    build: "Run Lighthouse on your live site, read the Performance report, and apply at least two concrete fixes."
    assignment: "Compress your largest image with Squoosh, update it in your project, redeploy, and run Lighthouse again to measure the before and after difference."
    time: "~3h"
    details: "Core Web Vitals are the three metrics Google uses to measure whether a page feels fast: LCP (Largest Contentful Paint — how quickly the main content loads), CLS (Cumulative Layout Shift — whether things jump around as the page loads), and INP (Interaction to Next Paint — how quickly the page responds to clicks and taps). Lighthouse runs in Chrome DevTools and scores all three, plus accessibility and SEO, giving you a prioritised list of exactly what to fix. For most portfolio and project sites, images are the single biggest performance culprit — one uncompressed hero image can drop your LCP score by 20 points."
    steps:
      - "Open your deployed site in Chrome, open DevTools (F12), and go to the Lighthouse tab."
      - "Select 'Mobile', check 'Performance', and click 'Analyze page load'. Wait for the score."
      - "Read the 'Opportunities' section — it lists the highest-impact fixes in order. Note your starting LCP and Performance score."
      - "Find the largest image on your page. Download it if needed, then open squoosh.app and compress it — WebP at 80% quality is a good starting point. Compare the file sizes before and after."
      - "Replace the original image in your project with the compressed version. Commit and push."
      - "Add width and height attributes to any img tags that are missing them — this fixes CLS by reserving space before the image loads."
      - "Run Lighthouse again on the redeployed site and compare the scores. Take a screenshot of the before and after."
    stuck: "Lighthouse score varies between runs? Run it three times and average the results — scores on real networks vary by a few points naturally. For a stable score, use the 'Throttling' setting in Lighthouse to simulate a consistent connection."
    resources:
      - label: "web.dev — Core Web Vitals"
        url: "https://web.dev/articles/vitals"
      - label: "Squoosh — image compression tool"
        url: "https://squoosh.app/"
  - n: 5
    topic: "Preview deploys, rollbacks & pre-launch checklist"
    learn: "How preview deploys give every branch its own URL; how to roll back to any previous deploy in one click; and a practical pre-launch checklist."
    build: "Open a branch, push a change, and find its preview URL in the Vercel dashboard — then roll back production to an earlier deploy."
    assignment: "Work through the pre-launch checklist on your project. Fix anything that fails. Screenshot a passing Lighthouse score and a clean checklist as your project submission."
    time: "~4h"
    details: "Preview deploys are one of the most underrated features of modern hosting. Every branch and every pull request gets its own unique URL — you can share it with a client, review it on your phone, or run Lighthouse on it before it ever touches production. Rollbacks are equally powerful: if you deploy a broken version, you can revert to any previous deploy in the Vercel dashboard in under 30 seconds, with no git gymnastics required. Together, these two features mean you can ship faster and worry less — the safety net is always there."
    steps:
      - "Create a new branch in your project: git switch -c improve/performance."
      - "Make a visible change (update some text, tweak a colour). Commit and push the branch."
      - "Open the Vercel dashboard and find the new deployment that was created for your branch — it has its own URL separate from production."
      - "Click the preview URL and confirm your change is live there but not on your main production domain."
      - "Now simulate a bad deploy: merge a typo into main, push, and wait for it to deploy to production."
      - "In the Vercel dashboard, go to Deployments, find the deploy before the typo, click its three-dot menu, and choose 'Promote to Production' (or 'Instant Rollback') to restore the previous version."
      - "Work through the pre-launch checklist in the module body below, fixing any items that fail on your project."
    stuck: "Can't find the rollback option? In Vercel, go to your project's Deployments tab, hover over any older deployment, click the three dots (...), and look for 'Promote to Production' or 'Instant Rollback'. Every deployment you've ever made is listed there."
    resources:
      - label: "Vercel Docs — Preview deployments"
        url: "https://vercel.com/docs/deployments/preview-deployments"
      - label: "Vercel Docs — Instant rollback"
        url: "https://vercel.com/docs/deployments/instant-rollback"
      - label: "web.dev — Core Web Vitals"
        url: "https://web.dev/articles/vitals"
project:
  title: "A polished, live deployment"
  brief: "Take an earlier project, deploy it to a live URL with continuous deploys from GitHub, point a custom domain (or free subdomain) at it, and tune it to a strong Lighthouse score. This is the version you send to clients and add to your portfolio — it needs to be real, fast, and professional."
  deploy: "Vercel or Netlify"
  rubric:
    - "Live URL that redeploys automatically on every git push to main"
    - "No secrets committed — all sensitive config uses environment variables"
    - "Custom domain or subdomain with HTTPS (padlock visible in browser)"
    - "Lighthouse Performance score of 90 or above on mobile"
    - "An optimised, correctly sized hero image (WebP or AVIF, with width and height attributes)"
milestone: false
proSkills: ["Proof-of-Work Portfolio", "AI-Leverage & Defensibility"]
resources:
  - label: "Vercel Docs"
    url: "https://vercel.com/docs"
  - label: "Netlify Docs"
    url: "https://docs.netlify.com/"
  - label: "web.dev — Core Web Vitals"
    url: "https://web.dev/articles/vitals"
  - label: "Squoosh — image compression"
    url: "https://squoosh.app/"
  - label: "GitHub Pages — Quickstart"
    url: "https://docs.github.com/en/pages/quickstart"
---

## The module in one sentence

Deploying is not a final step — it is a habit you build from day one, and by the end of
this module every project you touch will ship automatically the moment you push.

## What we're really learning

Most beginners treat deployment as something that happens "at the end" — finish the code,
then figure out how to get it online. Flip that. Professionals deploy on day one and keep
the live site updated throughout. The reason is practical: **a broken deploy is always
easier to debug close to when you introduced the problem**. If you deploy after six weeks
of development and it breaks, you have six weeks of changes to investigate. If you deploy
on day one and keep continuous deployment running, a broken build tells you exactly which
commit caused it.

Vercel and Netlify exist to make this effortless. Connect your GitHub repo, and every
push to main becomes a live production update — automatically, in under a minute. That
means your portfolio URL is always current, your client demos are always live, and you
build the deployment habit without thinking about it.

## Secrets belong in variables, not code

This is the rule that protects your clients and your reputation. An API key in your source
code is a ticking clock: the moment that repo is public — or even just accessible to
someone you did not intend — the key is compromised. Rotating a leaked API key is
embarrassing at best and a serious security incident at worst. Environment variables solve
this at the source. They are invisible to git, invisible to anyone reading your code, and
trivially easy to set in Vercel or Netlify's dashboard. The habit costs you 30 seconds
to set up and prevents a category of mistake that can end client relationships.

## Pre-launch checklist

Before you call any project done and put it in your portfolio, run through this list:

- **Live URL works** — open it in an incognito window (no cached assets, no cookies)
- **Auto-deploy is connected** — push a tiny commit and confirm the site updates within 2 minutes
- **No secrets in git** — run `git log -p | grep -i "key\|secret\|token\|password"` and confirm nothing sensitive appears
- **HTTPS active** — the padlock is visible; the http:// version redirects to https://
- **Lighthouse Performance ≥ 90 on mobile** — run in Chrome DevTools → Lighthouse → Mobile
- **Images are optimised** — check the Lighthouse "Opportunities" panel; no image should be flagged as oversized
- **Core Web Vitals pass** — LCP under 2.5 s, CLS under 0.1, INP under 200 ms
- **404 page exists** — visit a made-up path (e.g. `/does-not-exist`) and confirm you get a sensible error, not a blank screen

A site that passes this checklist is a professional deliverable. One that doesn't is a
liability. The difference is usually a couple of hours of focused fixes — and Lighthouse
tells you exactly where to spend them.

## AI as tutor, not autopilot

It is tempting to ask an AI to "fix my Lighthouse score" and copy whatever it produces.
Resist. The point of this module is that you understand *why* a slow LCP is bad, what
causes CLS, and which image format is appropriate and when. Ask AI to explain a Lighthouse
diagnostic you don't understand. Ask it to compare WebP and AVIF trade-offs. But do the
Squoosh compression yourself, read your own DNS records, and watch your own deploy logs
scroll by. The understanding you build here compounds into every project for the rest of
your career — and when a client asks "why is my site slow?" you'll have a real answer.
