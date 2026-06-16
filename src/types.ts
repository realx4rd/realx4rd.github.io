/**
 * Shared content types reused across BOTH content collections:
 *   - `weeks`   (the original 12-week course)
 *   - `modules` (the new freelancer-foundation lessons)
 *
 * Keeping these here lets `DayCard` (and anything else) accept a day from either
 * collection without coupling to one of them.
 */

export interface LinkResource {
  label: string;
  url: string;
}

/** One day within a week/module: the learn → build → assignment loop, plus optional go-deeper. */
export interface Day {
  /** Day number within its week/module (1–5). */
  n: number;
  /** The day's concept, e.g. "The box model". */
  topic: string;
  /** What to read/watch (the short "learn" slot). */
  learn: string;
  /** The guided "code-along" focus. */
  build?: string;
  /** The blank-slate "code-alone" micro-exercise. */
  assignment: string;
  /** Glanceable estimate, e.g. "~90 min". */
  time?: string;
  /** 2–4 sentence deeper explanation / mental model. */
  details?: string;
  /** Step-by-step build walkthrough. */
  steps: string[];
  /** One "if you're stuck, try this" recovery tip. */
  stuck?: string;
  /** Precise per-day links. */
  resources: LinkResource[];
}
