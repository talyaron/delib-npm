import { z } from 'zod';
export declare const PasswordSchema: z.ZodObject<{
    hashPassword: z.ZodString;
    statementId: z.ZodString;
}, "strip", z.ZodTypeAny, {
    statementId: string;
    hashPassword: string;
}, {
    statementId: string;
    hashPassword: string;
}>;
export type Password = z.infer<typeof PasswordSchema>;
