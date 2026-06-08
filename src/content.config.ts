import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const photoCollections = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/collections' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      slug: z.string(),
      location: z.string(),
      year: z.number(),
      continent: z.string(),
      date: z.coerce.date(),
      description: z.string(),
      cover: image(),
      photos: z.array(
        z.object({
          src: z.string(),
          alt: z.string(),
          width: z.number(),
          height: z.number(),
          layout: z.enum(['full', 'half']),
        })
      ),
      order: z.number().default(0),
      forSale: z.boolean().default(false),
      price: z.number().optional(),
    }),
});

export const collections = {
  collections: photoCollections,
};
