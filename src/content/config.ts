import { defineCollection, z } from 'astro:content';

// ============================================================
// Content collections.
//
// `work`      , the unified, in-depth write-ups. Each entry is one project,
//                tagged by `context` as internship or personal work.
// `experience`, lightweight role summaries that render as a timeline and can
//                link into the matching `work` write-ups.
//
// To add a project: drop a new .md file into src/content/work/ with the
// frontmatter below. No code changes needed.
// ============================================================

const work = defineCollection({
  type: 'content',
  schema: z.object({
    /** Project title. */
    title: z.string(),
    /** One or two sentence summary shown on cards and at the top of the page. */
    summary: z.string(),
    /** Date the work was done / shipped (YYYY-MM-DD). Used for ordering. */
    date: z.coerce.date(),
    /** Where the work came from. Drives the card label and filtering. */
    context: z.enum(['internship', 'personal']),
    /** Company name, shown when context is "internship". */
    company: z.string().optional(),
    /** Tech stack tags. */
    tech: z.array(z.string()).default([]),
    /** Show on the home page's featured row. */
    featured: z.boolean().default(false),
    /** List this project in the Projects section of the Resume page (mirror the resume PDF). */
    onResume: z.boolean().default(false),
    /** Current state of the work. */
    status: z.enum(['shipped', 'wip', 'archived']).default('shipped'),
    /** Source repo URL (optional). */
    repo: z.string().url().optional(),
    /** Live demo or video walkthrough URL (optional). TODO: add when you have one. */
    demo: z.string().url().optional(),
    /** Cover/hero image path, e.g. "/images/my-project/cover.png". TODO: add. */
    cover: z.string().optional(),
    /** Manual sort override (lower = earlier). Falls back to date when unset. */
    order: z.number().optional(),
    /** Hide from listings without deleting the file. */
    draft: z.boolean().default(false),
  }),
});

const experience = defineCollection({
  type: 'content',
  schema: z.object({
    company: z.string(),
    role: z.string(),
    location: z.string().optional(),
    /** e.g. "Jun 2025". Kept as a string so "Present" is allowed for endDate. */
    startDate: z.string(),
    endDate: z.string(),
    /** Used only for chronological sorting (YYYY-MM-DD of the start). */
    sortDate: z.coerce.date(),
    tech: z.array(z.string()).default([]),
    summary: z.string(),
    logo: z.string().optional(),
    /** Slugs of related `work` entries to link into, e.g. ["example-internship-project"]. */
    related: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

export const collections = { work, experience };
