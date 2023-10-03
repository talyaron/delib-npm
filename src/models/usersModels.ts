import {z} from 'zod';

export const UserSchema = z.object({
    displayName:z.string(),
    email:z.string().optional().nullable(),
    photoURL:z.string().optional().nullable(),
    uid:z.string(),

}) 

export type User = z.infer<typeof UserSchema>;

export function parseUserFromFirebase (user:any):User|undefined {
    try {
        const {displayName, email, photoURL, uid} = user;
        UserSchema.parse({displayName, email, photoURL, uid});
        return {displayName, email, photoURL, uid};
    } catch (error) {
        console.error(error);
        return undefined;
    }
}