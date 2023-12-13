import { z } from 'zod';
export declare const UserSchema: z.ZodObject<{
    displayName: z.ZodString;
    email: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    photoURL: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    uid: z.ZodString;
    isAnonymous: z.ZodOptional<z.ZodBoolean>;
    fontSize: z.ZodNullable<z.ZodOptional<z.ZodNumber>>;
    defaultLanguage: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    color: z.ZodOptional<z.ZodString>;
    sign: z.ZodNullable<z.ZodOptional<z.ZodObject<{
        signed: z.ZodBoolean;
        date: z.ZodNumber;
        text: z.ZodString;
        version: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        text: string;
        date: number;
        signed: boolean;
        version: string;
    }, {
        text: string;
        date: number;
        signed: boolean;
        version: string;
    }>>>;
}, "strip", z.ZodTypeAny, {
    displayName: string;
    uid: string;
    email?: string | null | undefined;
    photoURL?: string | null | undefined;
    isAnonymous?: boolean | undefined;
    fontSize?: number | null | undefined;
    defaultLanguage?: string | null | undefined;
    color?: string | undefined;
    sign?: {
        text: string;
        date: number;
        signed: boolean;
        version: string;
    } | null | undefined;
}, {
    displayName: string;
    uid: string;
    email?: string | null | undefined;
    photoURL?: string | null | undefined;
    isAnonymous?: boolean | undefined;
    fontSize?: number | null | undefined;
    defaultLanguage?: string | null | undefined;
    color?: string | undefined;
    sign?: {
        text: string;
        date: number;
        signed: boolean;
        version: string;
    } | null | undefined;
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
