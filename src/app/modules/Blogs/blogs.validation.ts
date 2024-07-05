import { z } from "zod";

const createBlogValidationSchema = z.object({
  title: z.string(),
  category: z.string(),
  coverPhoto: z.string(),
  content: z.string(),
});

const updateBlogValidationSchema = z.object({
  title: z.string().optional(),
  category: z.string().optional(),
  coverPhoto: z.string().optional(),
  content: z.string().optional(),
});

export { createBlogValidationSchema, updateBlogValidationSchema };
