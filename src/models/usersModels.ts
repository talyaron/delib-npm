import {z} from 'zod';

export const UserSchema = z.object({
    displayName:z.string(),
    email:z.string().optional().nullable(),
    photoURL:z.string().optional().nullable(),
    uid:z.string(),
    isAnonymous:z.boolean().optional(),
    fontSize:z.number().optional().nullable(),

}) 

export type User = z.infer<typeof UserSchema>;

export enum AdminRolesEnum {
    admin = 'admin',
    parentAdmin = 'parent-admin',
    systemAdmin = 'system-admin',
    statementCreator = 'statement-creator',
}

export enum Role {
    admin = "admin",
    member = "member",
    parentAdmin = "parent-admin",
    systemAdmin = "system-admin",
    statementCreator = "statement-creator",
    guest = "guest",
}

export const RolesEnumSchama = z.enum([AdminRolesEnum.admin, AdminRolesEnum.parentAdmin, AdminRolesEnum.systemAdmin, AdminRolesEnum.statementCreator]);

