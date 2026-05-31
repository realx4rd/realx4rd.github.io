---
week: 0
title: "Launch Pad"
focus: "Set up your machine, accounts, and a how-to-learn mindset — before any HTML."
phase: "Launch Pad"
phaseNumber: 0
hours: 7
tech: ["VS Code", "Terminal", "Git", "GitHub", "DevTools"]
objectives:
  - "Write, format, and preview code in VS Code with Live Server."
  - "Run the everyday terminal commands without fear."
  - "Track your work with Git and push it to GitHub — your first green squares."
  - "Inspect and debug any page with browser DevTools."
  - "Use AI assistants to learn faster without skipping understanding."
days:
  - n: 1
    topic: "Set up your workshop (VS Code)"
    learn: "Install VS Code plus the Prettier and Live Server extensions, and meet Emmet."
    build: "Open a folder, create index.html, type ! then Tab to scaffold it with Emmet, and preview with Live Server."
    assignment: "From a blank file, use Emmet to generate a page skeleton and add three headings — auto-formatted on save by Prettier."
    time: "~60 min"
    details: "Your editor, terminal, and browser are the three tools you'll touch every single day. Setting them up well now — with auto-formatting and live reload — removes a hundred tiny frustrations later. VS Code is the industry-standard editor, Prettier keeps your code tidy automatically, and Live Server refreshes the page the instant you save."
    steps:
      - "Download and install VS Code from code.visualstudio.com."
      - "Open the Extensions panel (the four-squares icon) and install 'Prettier - Code formatter' and 'Live Server'."
      - "Create a folder for the course and open it with File → Open Folder."
      - "Add index.html, type an exclamation mark, and press Tab to expand the Emmet starter template."
      - "Add a heading inside the body, then right-click the file and choose 'Open with Live Server'."
    stuck: "If the ! shortcut doesn't expand, check the file ends in .html and the language mode in the bottom-right of VS Code says HTML."
    resources:
      - label: "VS Code — Getting started docs"
        url: "https://code.visualstudio.com/docs"
      - label: "Emmet — HTML abbreviations cheat sheet"
        url: "https://docs.emmet.io/cheat-sheet/"
  - n: 2
    topic: "Talk to your computer (the terminal)"
    learn: "Why developers use a terminal, and the handful of commands you actually need."
    build: "Make folders and files from the terminal: cd, ls/dir, mkdir, and touch/New-Item."
    assignment: "Create a projects folder with a week-0 project inside it — entirely from the terminal."
    time: "~60 min"
    details: "The terminal looks intimidating, but you only need a handful of commands to be productive. It's just a text-based way to do what you already do by clicking through folders — and it's how you'll run Git, dev servers, and build tools for the rest of your career. Getting comfortable now pays off every single week after this."
    steps:
      - "Open the integrated terminal in VS Code with View → Terminal."
      - "Run pwd to print the folder you're currently in."
      - "Run ls (Mac/Linux) or dir (Windows) to list what's inside it."
      - "Run mkdir projects to make a folder, then cd projects to move into it."
      - "Create a file with touch index.html (Mac/Linux) or ni index.html (Windows PowerShell), then cd .. to go back up."
    stuck: "Lost in the folders? pwd always tells you exactly where you are, and cd ~ takes you back to your home folder."
    resources:
      - label: "MDN — Command line crash course"
        url: "https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started/Environment_setup/Command_line"
      - label: "The Odin Project — Command line basics"
        url: "https://www.theodinproject.com/lessons/foundations-command-line-basics"
  - n: 3
    topic: "Save your work forever (Git & GitHub)"
    learn: "What version control is, plus the minimal loop: status to add to commit to push."
    build: "Create a GitHub account, make a repository, and push your Week-0 folder to it."
    assignment: "Make a small change, then commit and push it — and watch a new green square appear on your profile."
    time: "~75 min"
    details: "Git saves snapshots of your work on your computer; GitHub stores a copy online and shows your activity. The core loop is small — status, add, commit, push — and you'll run it daily. Pushing to GitHub also starts your public portfolio and those green contribution squares that prove you showed up."
    steps:
      - "Install Git from git-scm.com, then set your name and email with the two git config --global commands."
      - "Create a free account at github.com and make a new empty repository."
      - "In your Week-0 folder, run git init, then git add . and git commit -m \"First commit\"."
      - "Connect it with git remote add origin <url> and upload with git push -u origin main."
      - "Make a small edit, then commit and push again to see a fresh green square."
    stuck: "Push rejected for a password? GitHub no longer accepts your account password over HTTPS — create a Personal Access Token, or install the GitHub CLI and run gh auth login."
    resources:
      - label: "git — the simple guide (rogerdudler)"
        url: "https://rogerdudler.github.io/git-guide/"
      - label: "GitHub Skills — Introduction to GitHub"
        url: "https://github.com/skills/introduction-to-github"
  - n: 4
    topic: "Look under the hood (browser DevTools)"
    learn: "Inspecting elements, reading the Console, and switching to device/responsive mode."
    build: "Open any website, change its text in the Elements panel, and log a message in the Console."
    assignment: "Use DevTools to find a heading on a live site, edit its text, and screenshot the result."
    time: "~60 min"
    details: "Browser DevTools let you inspect any page's HTML, tweak its CSS live, read errors in the Console, and simulate phones with device mode. This is where you'll diagnose almost every bug for the rest of the course, so a guided tour now pays off constantly."
    steps:
      - "On any website, right-click an element and choose Inspect (or press F12)."
      - "In the Elements panel, hover the HTML to highlight parts of the page, and double-click text to edit it."
      - "In the Styles pane, change a CSS value and watch the page update live."
      - "Open the Console tab and type 2 + 2 to confirm it runs JavaScript."
      - "Toggle the device toolbar to preview the page at phone width."
    stuck: "Your edits vanish on refresh — that's expected. DevTools is a scratchpad for experiments, not a way to save changes to the real site."
    resources:
      - label: "Chrome DevTools — Overview"
        url: "https://developer.chrome.com/docs/devtools/overview"
      - label: "MDN — What are browser developer tools?"
        url: "https://developer.mozilla.org/en-US/docs/Learn_web_development/Howto/Tools_and_setup/What_are_browser_developer_tools"
  - n: 5
    topic: "Learn how to learn (+ your AI rules)"
    learn: "Reading docs (MDN), searching well, the debugging mindset, and using AI to learn — not to copy."
    build: "Write your personal AI code-of-conduct and pin it where you study."
    assignment: "Run the Ownership Test on one small task: solve it yourself first, then compare with an AI's answer."
    time: "~60 min"
    details: "The fastest learners aren't the ones who memorise most — they're the ones who know how to find answers and verify them. Read primary docs (MDN), search error messages well, and treat AI as a tutor that explains rather than a vending machine that answers. In 2026 the real core skill is being able to explain and verify any code you ship."
    steps:
      - "Pick one MDN page and read it start to finish without skimming."
      - "Write your personal AI code-of-conduct: when you will use AI, and when you won't."
      - "Take one small task and solve it fully on your own first — an AI-free rep."
      - "Then ask an AI to explain its approach and compare it with yours."
      - "Pin your rules somewhere you study."
    stuck: "Tempted to paste an answer you don't understand? Ask the AI to 'explain this line by line and give me two practice tasks without solutions' instead."
    resources:
      - label: "MDN — Learn web development"
        url: "https://developer.mozilla.org/en-US/docs/Learn_web_development"
      - label: "The Odin Project — Foundations path"
        url: "https://www.theodinproject.com/paths/foundations/courses/foundations"
deliverable: "A configured machine, a GitHub account, and your Week-0 folder pushed live with at least two commits."
milestone: false
proSkills: ["Git ritual", "Debug-first reflex", "How to learn", "AI code-of-conduct"]
resources:
  - label: "VS Code — Getting Started"
    url: "https://code.visualstudio.com/docs/introvideos/basics"
  - label: "Git — the simple guide"
    url: "https://rogerdudler.github.io/git-guide/"
  - label: "GitHub Skills — Introduction to GitHub"
    url: "https://skills.github.com/"
  - label: "Chrome DevTools — Open & overview"
    url: "https://developer.chrome.com/docs/devtools/overview"
  - label: "MDN — Getting started with the web"
    url: "https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started"
---

## Why Week 0 exists

Most people who quit learning to code quit in the first two weeks — not because the
code is too hard, but because their **tools** fight them. A misconfigured editor, a
scary terminal, and no way to save or share work turns every small task into a battle.

This week we remove that friction. By Friday your machine is a real developer's
workshop, your work is backed up on GitHub, and you have a clear, honest way to learn.
**Nothing here is throwaway** — these are the exact habits you'll use every single day
for the rest of the course (and your career).

> **Pace:** ~7 hours, spread however suits you. There's no code to "get right" yet —
> just set things up and get comfortable. Take screenshots when something works; they're
> great motivation to look back on.

## Your setup checklist

- [ ] **VS Code** installed, with **Prettier** (auto-format) and **Live Server** (instant preview)
- [ ] Comfortable opening a **terminal** and moving between folders
- [ ] **Git** installed and your name/email configured
- [ ] A **GitHub** account, with your Week-0 folder pushed to a repo
- [ ] You've opened **DevTools** and changed something on a live page
- [ ] Your **AI code-of-conduct** is written and pinned where you study

## Your AI code-of-conduct (read this twice)

In 2026, AI can write code for you instantly. That's exactly why beginners have to be
careful: it's easy to *rent* answers and never actually learn. The single most valuable
skill now is being able to **verify and explain** what code does. Use AI as a patient
tutor, not a vending machine:

- **The Ownership Test** — *"If the AI vanished tomorrow, could I still solve this?"* If
  the honest answer keeps being "no," you're leaning too hard.
- **The AI-free rep** — for every new concept, solve at least one exercise completely on
  your own *before* you compare with an AI's version.
- **Explain-it-back** — your code isn't "done" until you can narrate what every line does.
- **Ask for lessons, not answers** — e.g. *"Explain the box model with two examples, then
  give me three practice tasks **without** solutions."* For bugs: *"Explain this error and
  two things to check **before** you suggest a fix."*

## How to learn (the house rules)

These four rules keep you out of "tutorial hell" — the trap of endlessly watching without
ever building:

1. **20-minute watch cap.** After 20 minutes of reading or watching, you build something.
2. **Code-along, then code-alone.** Every guided example is followed by a blank-slate
   version you write yourself.
3. **No paste-without-retype.** If you copy a snippet, retype it and explain it.
4. **Stuck for 30 minutes? Ask.** Rubber-duck it, search it, then ask a human or the
   community. Silent struggling is the #1 reason people give up.

When you can tick every box on the checklist above, you're ready for Week 1. Welcome to
the workshop. 🛠️
