import { z } from 'zod';
export declare const UserSchema: z.ZodObject<{
    displayName: z.ZodString;
    email: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    photoURL: z.ZodOptional<z.ZodString>;
    uid: z.ZodString;
}, "strip", z.ZodTypeAny, {
    displayName: string;
    uid: string;
    email?: string | null | undefined;
    photoURL?: string | undefined;
}, {
    displayName: string;
    uid: string;
    email?: string | null | undefined;
    photoURL?: string | undefined;
}>;
export type User = z.infer<typeof UserSchema>;
