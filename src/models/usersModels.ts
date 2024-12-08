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
    banned = "banned",
    unsubscribed = "unsubscribed",
    creator = "statement-creator", //deprecated, do not use. it is only use for legacy data
}

export const RoleSchema = z.enum([Role.admin, Role.member, Role.banned, Role.unsubscribed]);

export const userSettingsSchema = z.object({
    userId:z.string(),
    fontSize:z.number().optional(),
    color:z.string().optional(),
    defaultLanguage: z.string().length(2).optional(),
    agreement:AgreementSchema.optional().nullable(),
    role:RoleSchema.optional(),
    learning:z.object({
        evaluation:z.number().optional(),
        addOptions:z.number().optional(),
    }).optional(),
})

export type UserSettings = z.infer<typeof userSettingsSchema>


export const UserDataSchema = z.object({
    userId:z.string(),
    email:z.string().optional(),
    displayName:z.string().optional(),
    city:z.string().optional(),
    country:z.string().optional(),
    dateOfBirth:z.number().optional()
});

export type UserData = z.infer<typeof UserDataSchema>
