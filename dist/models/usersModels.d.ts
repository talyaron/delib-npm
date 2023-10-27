import { z } from 'zod';
export declare const UserSchema: z.ZodObject<{
    displayName: z.ZodString;
    email: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    photoURL: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    uid: z.ZodString;
    isAnonymous: z.ZodOptional<z.ZodBoolean>;
    fontSize: z.ZodNullable<z.ZodOptional<z.ZodNumber>>;
}, "strip", z.ZodTypeAny, {
    displayName: string;
    uid: string;
    email?: string | null | undefined;
    photoURL?: string | null | undefined;
    isAnonymous?: boolean | undefined;
    fontSize?: number | null | undefined;
}, {
    displayName: string;
    uid: string;
    email?: string | null | undefined;
    photoURL?: string | null | undefined;
    isAnonymous?: boolean | undefined;
    fontSize?: number | null | undefined;
}>;
export type User = z.infer<typeof UserSchema>;
export declare enum AdminRolesEnum {
    admin = "admin",
    parentAdmin = "parent-admin",
    systemAdmin = "system-admin",
    statementCreator = "statement-creator"
}
export declare enum Role {
    admin = "admin",
    member = "member",
    parentAdmin = "parent-admin",
    systemAdmin = "system-admin",
    statementCreator = "statement-creator",
    guest = "guest"
}
export declare const RolesEnumSchama: z.ZodEnum<[AdminRolesEnum.admin, AdminRolesEnum.parentAdmin, AdminRolesEnum.systemAdmin, AdminRolesEnum.statementCreator]>;
