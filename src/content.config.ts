import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const work = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/work' }),
  schema: z.object({
    title: z.string(),
    role: z.string(),
    years: z.string(),
    track: z.enum(['research-to-company', 'research', 'industry']).default('research'),
    // Path from question to company: rendered as a stepper on tiles and case studies
    path: z.array(z.object({ stage: z.string(), detail: z.string(), year: z.string().optional() })).optional(),
    papers: z.array(z.object({ title: z.string(), venue: z.string(), href: z.string().optional() })).optional(),
    summary: z.string(),
    order: z.number(),
    link: z.string().url().optional(),   // live product / company site
    featured: z.boolean().default(false), // shows on the Profile page
    image: z.string().optional(),         // path under /public, e.g. /media/work/scramble.jpg
    video: z.string().optional(),         // optional cover video for the case-study page, e.g. /media/work/scramble.mp4
    outcome: z.string().optional(),       // one line: what it produced
  }),
});

// A project is one research thread: a card on /projects/ with role, impact, output, methods, and its publications.
const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),          // one short line under the title
    years: z.string(),
    role: z.string(),             // a few words, e.g. "Inventor · Technical advisor"
    output: z.string(),           // comma-separated types, rendered as pills: "Artifact, Papers, Patents"
    process: z.object({           // the arc every project follows; one short line per step
      design: z.string(),
      evaluate: z.string(),
      implement: z.string(),
    }),
    venues: z.array(z.string()).default([]), // short venue tags, e.g. ["CHI 2021", "GI 2024"]
    image: z.string().optional(), // blurred card background, e.g. /media/projects/<slug>.jpg
    link: z.string().optional(),  // case-study page or external link
    order: z.number(),
  }),
});

export const collections = { projects, work };
