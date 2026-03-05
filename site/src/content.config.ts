import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const news = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/news' }),
  schema: z.object({
    title: z.string(),
    date: z.string(),
    category: z.string(),
    description: z.string().optional(),
    link: z.string().url().optional(),
  }),
});

export const collections = { news };
