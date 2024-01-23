import {z} from 'zod';

export const AgreementSchema = z.object({
    text:z.string(),
    date:z.number(),
    version:z.string(),
})

export type Agreement = z.infer<typeof AgreementSchema>

export const UserSchema = z.object({
    displayName:z.string(),
    defaultLanguage: z.string().length(2).optional(),
    email:z.string().optional().nullable(),
    photoURL:z.string().optional().nullable(),
    uid:z.string(),
    isAnonymous:z.boolean().optional(),
    fontSize:z.number().optional().nullable(),
    color:z.string().optional(),
    agreement:AgreementSchema.optional().nullable(),
    role:z.string().optional(),

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

export const RoleSchama = z.enum([Role.admin, Role.member, Role.parentAdmin, Role.systemAdmin, Role.statementCreator, Role.guest, Role.banned]);



