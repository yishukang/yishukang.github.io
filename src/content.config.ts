import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const work = defineCollection({
  loader: glob({ pattern: ["*.md", "!_template.md"], base: "./src/content/work" }),
  schema: z.object({
    title_en: z.string(),
    title_zh: z.string(),
    category: z.enum(["xiaohongshu", "poster", "event"]),
    date: z.date(),
    image: z.string().default(""),
    aspect: z.string().default("3/4"),
    description_en: z.string(),
    description_zh: z.string(),
    featured: z.boolean().default(false)
  })
});

export const collections = { work };
