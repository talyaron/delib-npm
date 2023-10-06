import { User, UserSchema } from "../models/usersModels";

export function parseUserFromFirebase (user:any|undefined):User|undefined {
    try {
        if(!user) throw new Error('user is missing');

        const {displayName, email, photoURL, uid} = user;
        UserSchema.parse({displayName, email, photoURL, uid});
        return {displayName, email, photoURL, uid};
    } catch (error) {
        console.error(error);
        return undefined;
    }
}

