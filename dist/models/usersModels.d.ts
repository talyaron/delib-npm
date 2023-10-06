import { z } from 'zod';
export declare const UserSchema: z.ZodObject<{
    displayName: z.ZodString;
    email: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    photoURL: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    uid: z.ZodString;
}, "strip", z.ZodTypeAny, {
    displayName: string;
    uid: string;
    email?: string | null | undefined;
    photoURL?: string | null | undefined;
}, {
    displayName: string;
    uid: string;
    email?: string | null | undefined;
    photoURL?: string | null | undefined;
}>;
export type User = z.infer<typeof UserSchema>;
