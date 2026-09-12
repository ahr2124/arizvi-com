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
    summary: z.string(),
    order: z.number(),
    link: z.string().url().optional(),   // live product / company site
    featured: z.boolean().default(false), // shows on the Profile page
    image: z.string().optional(),         // path under /public, e.g. /work/scramble.jpg
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

export const collections = { blog, work, resources, tools };
