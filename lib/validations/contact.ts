import { z } from "zod";

import type { ContactFormData } from "@/types";

export const contactSchema = z.object({
  name: z.string().trim().min(2, "Name must be at least 2 characters long").max(100),
  email: z.email("Please enter a valid email address"),
  phone: z
    .string()
    .trim()
    .max(30)
    .optional()
    .or(z.literal("")),
  subject: z
    .string()
    .trim()
    .max(150)
    .optional()
    .or(z.literal("")),
  message: z.string().trim().min(10, "Message must be at least 10 characters long").max(5000),
});

export type ContactSchemaData = z.infer<typeof contactSchema>;

// Compile-time check to keep schema aligned with ContactFormData.
type _ContactSchemaMatchesType = ContactSchemaData extends ContactFormData ? true : never;