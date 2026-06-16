---
title: "Git & GitHub"
focus: "Save your work forever, undo any mistake, and start your public portfolio."
hours: 16
tech: ["Git", "GitHub"]
objectives:
  - "Explain version control and the core commit loop in plain words."
  - "Build a clean, meaningful commit history on a real project."
  - "Branch and merge, and resolve a simple merge conflict without panic."
  - "Push, clone, and open pull requests on GitHub."
  - "Use your GitHub profile and READMEs as the start of a public portfolio."
days:
  - n: 1
    topic: "Why version control + the core loop"
    learn: "What Git is, why it exists, and the four commands you'll run every single day: init, status, add, commit."
    build: "Initialize a repo, make a file, and commit it with a message that actually says something useful."
    assignment: "Make five meaningful commits on a small project folder — each message explaining the *why*, not just the what."
    time: "~3h"
    details: "Git is a time machine for your code. Every commit is a snapshot you can return to, so you can experiment freely without fear of breaking something permanently. The core loop — check status, stage the changes you want (add), save a snapshot (commit) — takes about ten seconds once it becomes muscle memory. The hard part isn't the commands; it's writing commit messages that mean something to future-you."
    steps:
      - "Create a new folder for a small project (anything — a notes file, a to-do list). Open it in VS Code."
      - "Run git init in the integrated terminal to turn the folder into a repository."
      - "Create a file, then run git status to see it listed as 'untracked'."
      - "Stage it with git add <filename>, then run git status again to see it turn green."
      - "Commit it with git commit -m \"Add initial project file\" — note the present-tense, imperative message style."
      - "Make a small change to the file, then run the add → commit loop again with a new message."
      - "Repeat two more times, each time writing a message that explains the purpose of the change."
    stuck: "If git commit opens a confusing text editor (Vim), type :q! and press Enter to escape. Then run git config --global core.editor \"code --wait\" to use VS Code as your commit editor instead."
    resources:
      - label: "Pro Git — Getting started: what is Git?"
        url: "https://git-scm.com/book/en/v2/Getting-Started-What-is-Git%3F"
      - label: "git — the simple guide"
        url: "https://rogerdudler.github.io/git-guide/"
      - label: "The Odin Project — Git Basics"
        url: "https://www.theodinproject.com/paths/foundations/courses/foundations"
  - n: 2
    topic: "Reading history & undoing safely"
    learn: "git log and git diff to read the past; git restore and git revert to undo without destroying history; .gitignore to keep noise out."
    build: "Browse your commit history, diff two commits, and practise two different kinds of undo."
    assignment: "Intentionally 'break' your project file, then undo it two different ways — once by discarding unstaged changes, once by reverting a commit."
    time: "~3h"
    details: "Knowing how to read history and undo safely is what separates developers who trust Git from developers who are scared of it. git log shows the story of your project; git diff shows exactly what changed between any two points. For undoing: git restore brings a file back to its last committed state (unstaged edits disappear); git revert creates a new commit that cancels a previous one — the safe choice, because it never rewrites public history."
    steps:
      - "Run git log in your project folder and read through the commits you made yesterday."
      - "Run git log --oneline to get a compact summary — note each commit's short hash."
      - "Run git diff HEAD~1 HEAD to see what changed between your last two commits."
      - "Edit a file and intentionally break it, then run git restore <filename> to discard the change."
      - "Make a commit you want to undo, then run git revert HEAD and confirm the new 'undo' commit."
      - "Create a .gitignore file, add *.log and node_modules/ to it, and commit it."
      - "Run git status again to confirm ignored files no longer appear."
    stuck: "Confused by git revert vs git reset? Stick with git revert for now — it always adds a new commit rather than changing history, so it's safe to use even after you've pushed to GitHub."
    resources:
      - label: "Pro Git — Viewing the commit history"
        url: "https://git-scm.com/book/en/v2/Git-Basics-Viewing-the-Commit-History"
      - label: "Pro Git — Undoing things"
        url: "https://git-scm.com/book/en/v2/Git-Basics-Undoing-Things"
      - label: "git — the simple guide"
        url: "https://rogerdudler.github.io/git-guide/"
  - n: 3
    topic: "Branching & merging"
    learn: "What a branch is, and the everyday loop: branch, switch, make changes, merge back, resolve a conflict."
    build: "Create a feature branch, add some commits, then merge it into main and walk through a simple conflict resolution."
    assignment: "Create two branches that both edit the same line of a file, then merge them and manually resolve the conflict — then commit the result."
    time: "~3h"
    details: "A branch is just a separate timeline for your work. You branch to keep experimental or in-progress changes away from the stable version, and you merge when they're ready. Merge conflicts sound alarming but they're just Git saying 'two timelines changed the same spot — which version should win?' Once you've resolved one intentionally, you stop dreading them."
    steps:
      - "Run git branch feature/experiment to create a new branch."
      - "Run git switch feature/experiment to move onto it (you'll see the branch name in your terminal prompt if you use a prompt that shows it)."
      - "Make two commits on this branch — add a new section to your file."
      - "Switch back to main with git switch main and confirm those changes are gone."
      - "Run git merge feature/experiment to bring the changes in."
      - "Now create a second branch that edits the same line as a change you made on main, then try to merge it — Git will report a conflict."
      - "Open the file, find the conflict markers (<<<, ===, >>>), delete the unwanted version and the markers, then save, git add, and git commit."
    stuck: "If the merge conflict markers confuse you, search for '<<<' in the file — everything between '<<<' and '===' is from your current branch, and everything between '===' and '>>>' is from the incoming branch. Delete the version you don't want, plus all three marker lines, then save."
    resources:
      - label: "Pro Git — Branching and merging"
        url: "https://git-scm.com/book/en/v2/Git-Branching-Basic-Branching-and-Merging"
      - label: "The Odin Project — Git Basics"
        url: "https://www.theodinproject.com/paths/foundations/courses/foundations"
  - n: 4
    topic: "GitHub: remotes, push, clone, PRs"
    learn: "What a remote is; connecting a local repo to GitHub; pushing and cloning; opening your first pull request."
    build: "Push your project from Day 1 to a GitHub repo, then clone it fresh into a separate folder to confirm it works."
    assignment: "Create a branch, push it to GitHub, and open a pull request against main — then merge it through the GitHub UI."
    time: "~3h"
    details: "Everything so far has lived only on your machine. GitHub is the online copy — a backup, a collaboration point, and the start of your public portfolio. Pushing uploads your commits; cloning downloads someone else's (or your own) repo. Pull requests are the professional way to propose and review changes before they land in main — even on a solo project, they build the habit."
    steps:
      - "Create a new repository on github.com (no README, no .gitignore — you'll push yours)."
      - "Copy the remote URL, then run git remote add origin <url> in your local project."
      - "Run git push -u origin main to upload your commits for the first time."
      - "Refresh the GitHub page and confirm your commits are there."
      - "On a different path on your machine, run git clone <url> new-folder to pull it down fresh."
      - "Back in the original folder, create a branch, make a commit, and push the branch with git push origin <branch-name>."
      - "Open GitHub, find the 'Compare & pull request' prompt, write a short PR description, and open the PR. Merge it."
    stuck: "Push rejected with 'permission denied'? GitHub no longer accepts your account password over HTTPS. Run gh auth login (GitHub CLI) or create a Personal Access Token in GitHub settings and paste it when prompted for a password."
    resources:
      - label: "GitHub Skills — Introduction to GitHub"
        url: "https://github.com/skills/introduction-to-github"
      - label: "Pro Git — Working with remotes"
        url: "https://git-scm.com/book/en/v2/Git-Basics-Working-with-Remotes"
      - label: "git — the simple guide"
        url: "https://rogerdudler.github.io/git-guide/"
  - n: 5
    topic: "Collaboration & your README-as-bio"
    learn: "How forking works; PR etiquette; what makes a great repo README; and setting up a profile README that introduces you as a developer."
    build: "Write a README for your project using the standard sections, then create a profile README on GitHub."
    assignment: "Draft and publish your GitHub profile README with an intro, your current stack, and what you're working on — and make at least one more commit so your green squares grow."
    time: "~4h"
    details: "Your GitHub profile is the first thing a potential client or employer sees — and unlike a CV, it shows work in progress rather than claims. A profile README (a special repo named exactly like your username) lets you write a developer bio that lives at the top of your profile. Meanwhile, a great project README tells strangers — and future-you — what a repo does, how to run it, and why it exists. Both habits compound: every commit adds a green square, and every green square is public evidence you show up."
    steps:
      - "On GitHub, create a new repository named exactly your GitHub username (e.g. janedoe/janedoe)."
      - "Check the 'Add a README' box, then clone the repo locally."
      - "Write an intro paragraph, a 'What I'm learning' section, and a list of your current tech stack."
      - "Push the changes and visit your GitHub profile page to confirm the README appears at the top."
      - "Go to your project repo and open its README.md. Add a title, one-paragraph description, a 'How to run it' section, and a 'Stack' section."
      - "Fork any public repository you find interesting (the Fork button is top-right on any GitHub repo)."
      - "Explore the fork on your own account, make a trivial change, and look at what 'Compare & pull request' would offer you — but don't open the PR unless you have something genuine to contribute."
    stuck: "Profile README not appearing? The repository name must match your username exactly, capitalisation included. Double-check both and make sure the repo is public."
    resources:
      - label: "GitHub Docs — Managing your profile README"
        url: "https://docs.github.com/en/account-and-profile/setting-up-and-managing-your-github-profile/customizing-your-profile/managing-your-profile-readme"
      - label: "GitHub Skills — Introduction to GitHub"
        url: "https://github.com/skills/introduction-to-github"
      - label: "Pro Git — Distributed workflows"
        url: "https://git-scm.com/book/en/v2/Distributed-Git-Distributed-Workflows"
project:
  title: "Your project, on GitHub"
  brief: "Put a real project on GitHub with a clear README, then create a profile README that introduces you as a developer — the start of your public portfolio."
  deploy: "GitHub"
  rubric:
    - "A clean commit history with meaningful, present-tense messages that explain the why"
    - "A project README covering purpose, stack, and how to run it"
    - "A sensible .gitignore that excludes noise (OS files, logs, node_modules)"
    - "A profile README that introduces you, lists your current stack, and says what you're working on"
    - "At least a few days of green contribution squares — proof you showed up consistently"
milestone: false
proSkills: ["Git ritual", "Proof-of-Work Portfolio"]
resources:
  - label: "Pro Git (free book)"
    url: "https://git-scm.com/book/en/v2"
  - label: "git — the simple guide"
    url: "https://rogerdudler.github.io/git-guide/"
  - label: "GitHub Skills — Introduction to GitHub"
    url: "https://github.com/skills/introduction-to-github"
  - label: "The Odin Project — Git Basics"
    url: "https://www.theodinproject.com/paths/foundations/courses/foundations"
  - label: "GitHub Docs — Managing your profile README"
    url: "https://docs.github.com/en/account-and-profile/setting-up-and-managing-your-github-profile/customizing-your-profile/managing-your-profile-readme"
---

## The module in one sentence

Git is the undo button, the time machine, and the proof-of-work record that every
developer on earth relies on — and by the end of this module yours will be live on the
internet.

## What we're really learning

Most beginners treat Git like a chore: type a few magic commands, move on. That's the
wrong frame. Git is a **confidence machine**. The moment you know you can undo any
mistake, you stop being cautious and start experimenting freely. The moment your work is
on GitHub, you have a public record that says *I showed up and built things* — and that
record is more persuasive to clients and employers than any CV entry.

The core loop is deliberately small: **status → add → commit**. Ten seconds of ritual at
the end of every work session. What takes practice is writing commit messages that mean
something — not "fix stuff" or "WIP", but "Add contact form validation for empty fields".
Future-you, and anyone you ever collaborate with, will be grateful.

## Branches are not scary

A lot of beginners avoid branches and just commit straight to main. That works until it
doesn't — usually the moment you need to try something risky, or work with someone else.
A branch is just a separate timeline. You make one with a word, switch to it, do your
work, and merge it back when it's ready. Merge conflicts, once you've resolved one on
purpose (Day 3), stop being something to fear and become a two-minute annoyance.

## Your portfolio starts here

Day 5 is intentionally about the **public-facing side** of Git. Your GitHub profile is
the first thing a potential client searches for. A profile README, a clean commit history,
and a few weeks of green squares together say more than "I know Git" ever could. Every
commit you make from this module forward is building that record — treat it that way.

> **Treat AI as a tutor here, not a shortcut.** It is very tempting to ask an AI
> "what's the git command to...?" for everything. Do that a few times and you'll find you
> still panic when the internet is slow or the AI guesses wrong. The commands in this
> module are worth memorising — there are only about twelve that matter. Do each day's
> steps yourself first, check the Pro Git book when you're stuck, and use AI to *explain*
> output you don't understand, not to replace the typing.
