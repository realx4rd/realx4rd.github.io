import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

/**
 * The whole curriculum lives in `src/content/weeks/*.md`.
 * Maintainers add or edit a week by editing one Markdown file — the
 * frontmatter below drives every page on the site. See MAINTAINING.md.
 */
const day = z.object({
  n: z.number(), // day number within the week (1–5)
  topic: z.string(), // the day's concept, e.g. "The box model"
  learn: z.string(), // what to read/watch (the 20-min "learn" slot)
  build: z.string().optional(), // the guided "code-along" focus
  assignment: z.string(), // the blank-slate "code-alone" micro-exercise
});

const linkResource = z.object({
  label: z.string(),
  url: z.string().url(),
});

const weeks = defineCollection({
  loader: glob({ base: './src/content/weeks', pattern: '**/*.md' }),
  schema: z.object({
    week: z.number(), // 0–12 (0 = Launch Pad onboarding)
    title: z.string(), // e.g. "HTML + web literacy"
    focus: z.string(), // one-line tagline for the week
    phase: z.string(), // "Launch Pad" | "Foundations" | "JavaScript" | "Modern Tooling" | "Capstone"
    phaseNumber: z.number(), // 0–4
    hours: z.number(), // estimated hours for the week
    tech: z.array(z.string()).default([]), // tech badges, e.g. ["HTML"]
    objectives: z.array(z.string()), // 3–5 "by the end you can…" bullets
    days: z.array(day), // the daily breakdown
    project: z
      .object({
        title: z.string(),
        brief: z.string(),
        deploy: z.string().optional(), // where it ships
        rubric: z.array(z.string()), // self/peer-review checklist
      })
      .optional(),
    deliverable: z.string().optional(), // for Week 0 (setup deliverable, no "project")
    milestone: z.boolean().default(false), // phase milestone week?
    proSkills: z.array(z.string()).default([]), // threaded pro-skills active this week
    resources: z.array(linkResource).default([]),
  }),
});

export const collections = { weeks };
