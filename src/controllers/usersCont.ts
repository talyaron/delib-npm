import { User, UserSchema } from "../models/usersModels";

export function parseUserFromFirebase (user:any|undefined):User|undefined {
    try {
        if(!user) throw new Error('user is missing');

        const {displayName, email, photoURL, uid, isAnonymous} = user;
        UserSchema.parse({displayName, email, photoURL, uid, isAnonymous});
        return {displayName, email, photoURL, uid, isAnonymous};
    } catch (error) {
        console.error(error);
        return undefined;
    }
}

