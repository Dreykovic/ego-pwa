import { z } from 'zod';

export const LoginPhoneSchema = z.object({
  phoneNumber: z
    .string()
    .min(2, { message: 'Le numéro de téléphone est obligatoire' }),
});

export type LoginPhoneFormValues = z.infer<typeof LoginPhoneSchema>;
