import { z } from 'zod';
export declare const AgreementSchema: z.ZodObject<{
    text: z.ZodString;
    date: z.ZodNumber;
    version: z.ZodString;
}, "strip", z.ZodTypeAny, {
    text: string;
    date: number;
    version: string;
}, {
    text: string;
    date: number;
    version: string;
}>;
export type Agreement = z.infer<typeof AgreementSchema>;
export declare const UserSchema: z.ZodObject<{
    displayName: z.ZodString;
    defaultLanguage: z.ZodOptional<z.ZodString>;
    email: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    photoURL: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    uid: z.ZodString;
    isAnonymous: z.ZodOptional<z.ZodBoolean>;
    fontSize: z.ZodNullable<z.ZodOptional<z.ZodNumber>>;
    color: z.ZodOptional<z.ZodString>;
    agreement: z.ZodNullable<z.ZodOptional<z.ZodObject<{
        text: z.ZodString;
        date: z.ZodNumber;
        version: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        text: string;
        date: number;
        version: string;
    }, {
        text: string;
        date: number;
        version: string;
    }>>>;
    role: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    displayName: string;
    uid: string;
    defaultLanguage?: string | undefined;
    email?: string | null | undefined;
    photoURL?: string | null | undefined;
    isAnonymous?: boolean | undefined;
    fontSize?: number | null | undefined;
    color?: string | undefined;
    agreement?: {
        text: string;
        date: number;
        version: string;
    } | null | undefined;
    role?: string | undefined;
}, {
    displayName: string;
    uid: string;
    defaultLanguage?: string | undefined;
    email?: string | null | undefined;
    photoURL?: string | null | undefined;
    isAnonymous?: boolean | undefined;
    fontSize?: number | null | undefined;
    color?: string | undefined;
    agreement?: {
        text: string;
        date: number;
        version: string;
    } | null | undefined;
    role?: string | undefined;
}>;
export type User = z.infer<typeof UserSchema>;
export declare enum Role {
    admin = "admin",
    member = "member",
    parentAdmin = "parent-admin",
    systemAdmin = "system-admin",
    statementCreator = "statement-creator",
    guest = "guest",
    banned = "banned"
}
export declare const RoleSchama: z.ZodEnum<[Role.admin, Role.member, Role.parentAdmin, Role.systemAdmin, Role.statementCreator, Role.guest, Role.banned]>;
