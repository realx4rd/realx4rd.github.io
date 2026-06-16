---
title: "Command line basics"
focus: "Drive your machine from the terminal — the way every developer actually works."
hours: 14
tech: ["Terminal", "Bash"]
objectives:
  - "Navigate the file system confidently using pwd, ls, and cd — from any starting point."
  - "Create, move, copy, and delete files and folders without touching a mouse."
  - "Use pipes and redirects to chain commands and capture output."
  - "Find things fast with grep and find, even inside large projects."
  - "Run dev tools and npm scripts from the terminal and understand environment variables."
days:
  - n: 1
    topic: "Finding your way around"
    learn: "What a shell is, how a terminal differs from a GUI, and the navigation commands you need every day: pwd, ls, and cd."
    build: "Open a terminal, run pwd to see where you are, list files with ls (macOS/Linux) or dir (Windows), and practice moving between folders with cd."
    assignment: "Starting from your home folder, navigate into a sub-folder two levels deep and back out using only the keyboard — then describe what each command printed."
    time: "~2.5h"
    details: "The terminal is just a text interface to the same file system you already use by clicking. The shell (Bash on macOS/Linux, PowerShell on Windows) reads what you type and runs it. Three commands — pwd (print working directory), ls/dir (list files), and cd (change directory) — cover 80 % of what you need to move around comfortably. Tab-completion is the shortcut that makes the whole thing click: press Tab mid-filename and the shell fills the rest in for you."
    steps:
      - "Open your terminal: Terminal app on macOS, Git Bash or Windows Terminal on Windows."
      - "Run pwd (macOS/Linux) or cd (Windows PowerShell with no arguments) to see your current path."
      - "Run ls (macOS/Linux) or dir (Windows) to list the contents of the current folder."
      - "Run cd Documents (or any folder that exists) to move into it, then pwd again to confirm."
      - "Run cd .. to go up one level, and cd ~ (macOS/Linux) or cd $HOME (Windows) to jump back to your home folder."
      - "Try tab-completion: type cd Doc and press Tab — the shell should complete it to Documents/."
      - "Use ls -l (macOS/Linux) or dir /w (Windows) to see file sizes and dates alongside names."
    stuck: "Tab key not completing anything? Make sure the folder you're trying to complete actually exists in your current location — run ls first to confirm what's there."
    resources:
      - label: "The Odin Project — Command line basics"
        url: "https://www.theodinproject.com/lessons/foundations-command-line-basics"
      - label: "MDN — Command line crash course"
        url: "https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started/Environment_setup/Command_line"
      - label: "MIT Missing Semester — The Shell"
        url: "https://missing.csail.mit.edu/2020/course-shell/"
  - n: 2
    topic: "Creating and managing files"
    learn: "mkdir, touch/New-Item, cp, mv, and rm — and the safe habits around deletion."
    build: "Scaffold a project folder tree from scratch: no Finder or File Explorer allowed."
    assignment: "Create a folder called my-project with sub-folders css, js, and images inside it, add an index.html file at the root, then rename the js folder to scripts."
    time: "~2.5h"
    details: "These six commands let you build, rearrange, and clean up a project entirely from the keyboard. The one to treat with respect is rm: unlike the Recycle Bin, it deletes immediately and permanently. Use rm -i (interactive mode, asks before each delete) while you are building the habit. On Windows PowerShell, Remove-Item is the equivalent, and it will prompt you for folders by default."
    steps:
      - "Create a project folder: mkdir my-project, then cd my-project to enter it."
      - "Create sub-folders in one go: mkdir css js images (macOS/Linux) or mkdir css; mkdir js; mkdir images (Windows)."
      - "Create an empty file: touch index.html (macOS/Linux) or ni index.html (Windows PowerShell shorthand for New-Item)."
      - "Copy the file: cp index.html about.html (macOS/Linux) or Copy-Item index.html about.html (Windows)."
      - "Rename a folder with mv: mv js scripts (macOS/Linux) or Rename-Item js scripts (Windows)."
      - "Delete a file carefully: rm -i about.html (macOS/Linux) or Remove-Item about.html (Windows) — confirm when prompted."
      - "Run ls (or dir) to check the final structure looks right."
    stuck: "Got 'No such file or directory'? You are probably not in the folder you think you are. Run pwd and ls to reorient, then adjust your path."
    resources:
      - label: "MDN — Command line crash course"
        url: "https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started/Environment_setup/Command_line"
      - label: "Microsoft — PowerShell basics (Windows users)"
        url: "https://learn.microsoft.com/en-us/powershell/scripting/learn/ps101/01-getting-started"
  - n: 3
    topic: "Viewing, editing, and redirects"
    learn: "Reading files with cat, less, head, and tail; writing output with echo and the redirect operators > and >>; and making quick edits with nano."
    build: "Print a file's contents, grab just its first and last ten lines, and redirect the output into a new file."
    assignment: "Create a file called notes.txt using echo and >, append two more lines with >>, then open it in nano and add a third line — all without leaving the terminal."
    time: "~3h"
    details: "Once you can navigate and create files, you need to read and write them. cat prints a whole file at once; less lets you scroll through it page by page (press q to quit); head and tail show just the first or last lines — essential for previewing log files. The redirect operators > and >> are tiny but powerful: > overwrites a file with output, >> appends. nano is the friendliest terminal text editor: Ctrl+O to save, Ctrl+X to exit."
    steps:
      - "Create a sample file: echo 'Hello, terminal' > notes.txt"
      - "Print it: cat notes.txt. Notice it prints one line."
      - "Append two more lines: echo 'Line two' >> notes.txt and echo 'Line three' >> notes.txt"
      - "View with less: less notes.txt — press Space to page down, q to quit."
      - "Try head -n 2 notes.txt and tail -n 1 notes.txt to see specific lines."
      - "Open notes.txt in nano: nano notes.txt. Add a line, press Ctrl+O and Enter to save, then Ctrl+X to exit."
      - "On Windows (PowerShell), use Get-Content notes.txt instead of cat, and notepad notes.txt instead of nano."
    stuck: "Stuck inside less? Press q to quit — it does not close if you press Ctrl+C. If nano feels frozen, try Ctrl+C first, then Ctrl+X."
    resources:
      - label: "MDN — Command line crash course"
        url: "https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started/Environment_setup/Command_line"
      - label: "MIT Missing Semester — The Shell"
        url: "https://missing.csail.mit.edu/2020/course-shell/"
  - n: 4
    topic: "Pipes and power tools"
    learn: "The pipe operator |, plus grep, wc, find, and history — chaining commands to do real work fast."
    build: "Search for a word inside files, count lines, and find a file buried several folders deep — all with one-liners."
    assignment: "Inside your my-project folder from Day 2, use find to locate index.html, then use grep to search for a word inside a text file, and pipe the output of ls into grep to filter the listing."
    time: "~3h"
    details: "The pipe | is the idea that makes the terminal genuinely powerful: it takes the output of one command and feeds it as input to the next. grep searches text for a pattern; wc -l counts lines; find locates files by name or type anywhere in the tree. You can combine them: ls | grep '.html' filters a listing to show only HTML files, and find . -name '*.md' | wc -l counts every Markdown file in a project. history shows every command you have run — grep it to find commands you have forgotten."
    steps:
      - "Search for a word in a file: grep 'Hello' notes.txt. It prints every matching line."
      - "Make the search case-insensitive: grep -i 'hello' notes.txt"
      - "Count matching lines: grep -c 'Line' notes.txt"
      - "Pipe ls into grep: ls | grep '.txt' (macOS/Linux) or dir | findstr '.txt' (Windows) to filter listings."
      - "Count total files in a folder: ls | wc -l (macOS/Linux)."
      - "Find a file by name: find . -name 'index.html' (macOS/Linux) or Get-ChildItem -Recurse -Filter 'index.html' (Windows PowerShell)."
      - "Check your command history: history | grep 'mkdir' (macOS/Linux) to recall past commands."
    stuck: "grep shows nothing? Check your search term is spelled correctly, and remember it is case-sensitive by default — add the -i flag to ignore case."
    resources:
      - label: "MIT Missing Semester — The Shell"
        url: "https://missing.csail.mit.edu/2020/course-shell/"
      - label: "The Odin Project — Command line basics"
        url: "https://www.theodinproject.com/lessons/foundations-command-line-basics"
      - label: "Microsoft — PowerShell basics (Windows users)"
        url: "https://learn.microsoft.com/en-us/powershell/scripting/learn/ps101/01-getting-started"
  - n: 5
    topic: "The developer workflow"
    learn: "Running node and npm scripts, what environment variables are and how to set them, what .gitignore is for, and a full review of the week."
    build: "Initialise a Node project with npm init, add a start script to package.json, and run it from the terminal."
    assignment: "Scaffold a project folder from scratch, run npm init -y to create a package.json, add a 'start' script that echoes 'Server starting…', then run npm start and record your screen or write a transcript of the session — this is your deliverable."
    time: "~3h"
    details: "Every modern JavaScript dev tool — Vite, Next.js, Astro — runs from the terminal as an npm script. Understanding how to read a package.json, add a script, and run it bridges everything you have learned this week to the real workflow you will use for the rest of the course. Environment variables (set with export NAME=value on macOS/Linux or $env:NAME='value' in PowerShell) let you pass secrets and configuration to programs without hard-coding them. And .gitignore is simply a list of file patterns Git should never track — node_modules belongs there on every project."
    steps:
      - "Create a fresh folder: mkdir terminal-project && cd terminal-project"
      - "Initialise Node: npm init -y to generate package.json without the interactive prompts."
      - "Open package.json in nano (or your editor) and add a scripts section: { \"start\": \"echo 'Server starting...'\" }"
      - "Run the script: npm start. You should see 'Server starting…' printed."
      - "Set a temporary environment variable: export GREETING='Hello' (macOS/Linux) or $env:GREETING='Hello' (PowerShell), then echo $GREETING to check it."
      - "Create a .gitignore file: echo 'node_modules' > .gitignore and cat it to confirm."
      - "Review the week: use only the terminal to navigate your projects, list files, view a file, grep inside it, and run your npm script — no mouse."
    stuck: "npm is not found? Node.js includes npm, so run node --version first. If Node is missing, install it from nodejs.org — it is free and takes two minutes."
    resources:
      - label: "The Odin Project — Command line basics"
        url: "https://www.theodinproject.com/lessons/foundations-command-line-basics"
      - label: "MDN — Command line crash course"
        url: "https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started/Environment_setup/Command_line"
      - label: "Microsoft — PowerShell basics (Windows users)"
        url: "https://learn.microsoft.com/en-us/powershell/scripting/learn/ps101/01-getting-started"
deliverable: "A short screen recording or written transcript showing you scaffold a project folder, create and organise files, and use a pipe with grep — entirely from the terminal."
milestone: false
proSkills: ["Workshop fluency"]
resources:
  - label: "The Odin Project — Command line basics"
    url: "https://www.theodinproject.com/lessons/foundations-command-line-basics"
  - label: "MDN — Command line crash course"
    url: "https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started/Environment_setup/Command_line"
  - label: "MIT Missing Semester — The Shell"
    url: "https://missing.csail.mit.edu/2020/course-shell/"
  - label: "Microsoft — PowerShell basics (Windows users)"
    url: "https://learn.microsoft.com/en-us/powershell/scripting/learn/ps101/01-getting-started"
---

## The terminal in one sentence

The terminal is the same file system you already know — folders, files, moving things around — but driven entirely by text, which makes it **faster, scriptable, and shareable** in a way that clicking never is.

## Why every developer uses this

GUIs hide what is actually happening. The terminal exposes it. When you run `npm install`, `git push`, or `vite build`, those tools have no graphical interface — they only speak terminal. Every job posting, every open-source README, every "getting started" guide assumes you can open a terminal and follow along without freezing. Comfort here is not optional.

The good news: you only need a small set of commands. The ten or so you learn this week cover the vast majority of real work. Everything else you can look up when you need it.

## Windows vs macOS/Linux

Most of the web's documentation assumes Bash (the default on macOS and Linux). On Windows, **PowerShell** is the modern equivalent and is installed by default. The concepts are identical — the command names differ slightly. Where they diverge, each day spells it out:

- `ls` (macOS/Linux) = `dir` (Windows)
- `touch file.txt` (macOS/Linux) = `ni file.txt` or `New-Item file.txt` (Windows PowerShell)
- `export VAR=value` (macOS/Linux) = `$env:VAR='value'` (Windows PowerShell)

Installing **Git for Windows** also gives you **Git Bash**, a terminal that understands Bash commands on Windows — many developers prefer it for this reason.

## Treat AI as a command explainer, not a command vending machine

It is tempting to ask an AI "give me the command to do X" and paste it in. Resist. For the terminal especially, paste-and-run is dangerous — a command you do not understand can delete things you cannot get back. Instead, use AI to *explain* a command you just looked up: *"What does find . -name '*.md' -type f actually do, step by step?"* Build the understanding first; reach for autocomplete second.
