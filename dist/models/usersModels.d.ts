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
    color?: string | undefined;
    fontSize?: number | null | undefined;
    role?: string | undefined;
    email?: string | null | undefined;
    defaultLanguage?: string | undefined;
    photoURL?: string | null | undefined;
    isAnonymous?: boolean | undefined;
    agreement?: {
        text: string;
        date: number;
        version: string;
    } | null | undefined;
}, {
    displayName: string;
    uid: string;
    color?: string | undefined;
    fontSize?: number | null | undefined;
    role?: string | undefined;
    email?: string | null | undefined;
    defaultLanguage?: string | undefined;
    photoURL?: string | null | undefined;
    isAnonymous?: boolean | undefined;
    agreement?: {
        text: string;
        date: number;
        version: string;
    } | null | undefined;
}>;
export type User = z.infer<typeof UserSchema>;
export declare enum Role {
    admin = "admin",
    member = "member",
    banned = "banned",
    unsubscribed = "unsubscribed",
    creator = "statement-creator"
}
export declare const RoleSchema: z.ZodEnum<[Role.admin, Role.member, Role.banned, Role.unsubscribed]>;
export declare const userSettingsSchema: z.ZodObject<{
    userId: z.ZodString;
    fontSize: z.ZodOptional<z.ZodNumber>;
    color: z.ZodOptional<z.ZodString>;
    defaultLanguage: z.ZodOptional<z.ZodString>;
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
    role: z.ZodOptional<z.ZodEnum<[Role.admin, Role.member, Role.banned, Role.unsubscribed]>>;
    learning: z.ZodOptional<z.ZodObject<{
        evaluation: z.ZodOptional<z.ZodNumber>;
        addOptions: z.ZodOptional<z.ZodNumber>;
    }, "strip", z.ZodTypeAny, {
        evaluation?: number | undefined;
        addOptions?: number | undefined;
    }, {
        evaluation?: number | undefined;
        addOptions?: number | undefined;
    }>>;
}, "strip", z.ZodTypeAny, {
    userId: string;
    color?: string | undefined;
    fontSize?: number | undefined;
    role?: Role.admin | Role.member | Role.banned | Role.unsubscribed | undefined;
    defaultLanguage?: string | undefined;
    agreement?: {
        text: string;
        date: number;
        version: string;
    } | null | undefined;
    learning?: {
        evaluation?: number | undefined;
        addOptions?: number | undefined;
    } | undefined;
}, {
    userId: string;
    color?: string | undefined;
    fontSize?: number | undefined;
    role?: Role.admin | Role.member | Role.banned | Role.unsubscribed | undefined;
    defaultLanguage?: string | undefined;
    agreement?: {
        text: string;
        date: number;
        version: string;
    } | null | undefined;
    learning?: {
        evaluation?: number | undefined;
        addOptions?: number | undefined;
    } | undefined;
}>;
export type UserSettings = z.infer<typeof userSettingsSchema>;
export declare const UserDataSchema: z.ZodObject<{
    userId: z.ZodString;
    email: z.ZodOptional<z.ZodString>;
    displayName: z.ZodOptional<z.ZodString>;
    city: z.ZodOptional<z.ZodString>;
    country: z.ZodOptional<z.ZodString>;
    dateOfBirth: z.ZodOptional<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    userId: string;
    country?: string | undefined;
    email?: string | undefined;
    displayName?: string | undefined;
    city?: string | undefined;
    dateOfBirth?: number | undefined;
}, {
    userId: string;
    country?: string | undefined;
    email?: string | undefined;
    displayName?: string | undefined;
    city?: string | undefined;
    dateOfBirth?: number | undefined;
}>;
export type UserData = z.infer<typeof UserDataSchema>;
