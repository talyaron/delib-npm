import { UserSchema } from "../models/usersModels";
export function parseUserFromFirebase(user) {
    try {
        if (!user)
            throw new Error('user is missing');
        let { displayName, email, photoURL, uid, isAnonymous } = user;
        if (isAnonymous)
            displayName = 'Anonymous';
        UserSchema.parse({ displayName, email, photoURL, uid, isAnonymous });
        return { displayName, email, photoURL, uid, isAnonymous };
    }
    catch (error) {
        console.error(error);
        return undefined;
    }
}
//# sourceMappingURL=usersCont.js.map