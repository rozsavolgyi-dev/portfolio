import { z, defineCollection } from 'astro:content';
// Behozzuk az Astro 5 új loaderét:
import { glob } from 'astro/loaders';

const projectsCollection = defineCollection({
  // Expliciten megadjuk, hogy a 'src/content/projects' mappában keresse a .md fájlokat
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    client: z.string().optional(),
    // A coerce.date() megengedőbb, így biztosan nem hasal el a validáción
    publishDate: z.coerce.date(), 
    tags: z.array(z.string()),
    coverImage: z.string().optional(),
  }),
});

export const collections = {
  'projects': projectsCollection,
};