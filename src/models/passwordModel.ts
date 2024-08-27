import {z} from 'zod';

export const PasswordSchema = z.object({
    hashPassword: z.string(),
    statementId: z.string(),
})

export type Password = z.infer<typeof PasswordSchema>;