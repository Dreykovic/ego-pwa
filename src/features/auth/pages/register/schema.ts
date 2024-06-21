import { z } from 'zod';

export const RegisterSchema = z
  .object({
    firstName: z.string().min(2, { message: 'Le prénom est obligatoire' }),
    lastName: z.string().min(2, { message: 'Le nom est obligatoire' }),
    email: z.string().email({ message: "L'email est invalide" }),
    password: z.string().min(6, {
      message: 'Le mot de passe doit contenir au moins 6 caractères',
    }),
    phoneNumber: z
      .string()
      .min(2, { message: 'Le numéro de téléphone est obligatoire' }),
    confirmPassword: z.string().min(6, {
      message:
        'La confirmation du mot de passe doit contenir au moins 6 caractères',
    }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Les mots de passe ne correspondent pas',
    path: ['confirmPassword'], // path of error
  });

export type RegisterFormValues = z.infer<typeof RegisterSchema>;
