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

