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



export enum Role {
    admin = "admin",
    member = "member",
    parentAdmin = "parent-admin",
    systemAdmin = "system-admin",
    statementCreator = "statement-creator",
    guest = "guest",
    banned = "banned",
}

export const RolesEnumSchama = z.enum([Role.admin, Role.member, Role.parentAdmin, Role.systemAdmin, Role.statementCreator, Role.guest, Role.banned]);

