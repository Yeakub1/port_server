import { z } from "zod";

const skillValidationSchema = z.object({
  name: z.string(),
});

export { skillValidationSchema };
