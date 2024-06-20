import { z } from 'zod';

export const LoginPasswordSchema = z.object({
  password: z.string().min(1, { message: 'Le mot de passe est obligatoire' }),
});
export type LoginPasswordFormValues = z.infer<typeof LoginPasswordSchema>;
