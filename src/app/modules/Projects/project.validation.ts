import { z } from "zod";

const createProjectValidationSchema = z.object({
  name: z.string(),
  description: z.string(),
  features: z.array(z.string()),
  technologies: z.array(z.string()),
  liveLink: z.string(),
  frontendRepo: z.string(),
  backendRepo: z.string(),
  image: z.string(),
});

const updateProjectValidationSchema = z.object({
  name: z.string().optional(),
  description: z.string().optional(),
  features: z.array(z.string()).optional(),
  technologies: z.array(z.string()).optional(),
  liveLink: z.string().optional(),
  frontendRepo: z.string().optional(),
  backendRepo: z.string().optional(),
  image: z.string().optional(),
});

export { createProjectValidationSchema, updateProjectValidationSchema };
