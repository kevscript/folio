import { z } from "zod";

export const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, { message: "Name must contain at least 2 characters." })
    .max(100, { message: "Name must contain at most 100 characters." }),
  email: z.string().trim().email({ message: "Must be a valid email." }),
  message: z
    .string()
    .trim()
    .min(2, { message: "Message must contain at least 2 characters." })
    .max(1000, { message: "Message must contain at most 1000 characters." }),
});
