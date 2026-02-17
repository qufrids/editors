import { z } from "zod";

import type { NewsletterFormData } from "@/types";

export const newsletterSchema = z.object({
  email: z.email("Please enter a valid email address"),
});

export type NewsletterSchemaData = z.infer<typeof newsletterSchema>;

// Compile-time check to keep schema aligned with NewsletterFormData.
type _NewsletterSchemaMatchesType = NewsletterSchemaData extends NewsletterFormData ? true : never;