import { z } from 'zod';

export const LoginEmailSchema = z.object({
  email: z.string().min(0,{ message: "L'email est invalide" }),
});

export type LoginEmailFormValues = z.infer<typeof LoginEmailSchema>;
