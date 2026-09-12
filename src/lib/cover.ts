import type { CollectionEntry } from 'astro:content';

// Cover image for a work entry. Falls back to a plain SVG placeholder in public/work/<slug>.svg.
export const cover = (e: CollectionEntry<'work'>) => e.data.image ?? `/work/${e.id}.svg`;
