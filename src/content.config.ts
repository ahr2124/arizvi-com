import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    summary: z.string(),
    draft: z.boolean().default(false),
  }),
});

const work = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/work' }),
  schema: z.object({
    title: z.string(),
    role: z.string(),
    years: z.string(),
    kind: z.enum(['venture', 'industry', 'research']),
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

// A resource is a link or a file worth sharing: reading lists, templates, datasets, checklists.
const resources = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/resources' }),
  schema: z.object({
    title: z.string(),
    href: z.string(),          // external URL or a path under /public
    group: z.string(),         // e.g. "Flying", "HCI methods", "Product"
    note: z.string(),
    order: z.number().default(100),
  }),
});

// A tool is a self-contained AI-generated page for one use case, living in /public/tools/<slug>.html
const tools = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/tools' }),
  schema: z.object({
    title: z.string(),
    href: z.string(),
    useCase: z.string(),       // one line: who it's for and what it does
    date: z.coerce.date(),
  }),
});

// A project is one research thread: a card on /projects/ with role, impact, output, methods, and its publications.
const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),          // one short line under the title
    years: z.string(),
    role: z.string(),             // a few words, e.g. "Inventor · Founder"
    impact: z.string(),           // a few words with numbers, e.g. "3 patents · 2 papers · A company"
    output: z.string(),           // comma-separated types, rendered as pills: "Artefact, Papers, Patents"
    methods: z.string(),          // a few words, e.g. "Field study · Phenomenological analysis"
    venues: z.array(z.string()).default([]), // short venue tags, e.g. ["CHI 2021", "GI 2024"]
    image: z.string().optional(), // blurred card background, e.g. /media/projects/<slug>.jpg
    link: z.string().optional(),  // case-study page or external link
    order: z.number(),
  }),
});

export const collections = { projects, blog, work, resources, tools };
