import { defineCollection, z } from 'astro:content';

const maroquinerieCollection = defineCollection({
    type: 'data',
    schema: z.object({
        title: z.string(),
        image: z.object({
            url: z.string(),
            alt: z.string()
        }),
    })
});

const realisationCollection = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        image: z.object({
            url: z.string(),
            alt: z.string()
        }),
    })
});
// Exportez le type de votre collection
export const collections = {
    'maroquinerie': maroquinerieCollection,
    'realisation': realisationCollection
}
