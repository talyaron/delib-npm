"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseUserFromFirebase = parseUserFromFirebase;
const usersModels_1 = require("../models/usersModels");
function parseUserFromFirebase(user) {
    try {
        if (!user)
            throw new Error('user is missing');
        let { displayName, email, photoURL, uid, isAnonymous } = user;
        if (isAnonymous)
            displayName = 'Anonymous';
        usersModels_1.UserSchema.parse({ displayName, email, photoURL, uid, isAnonymous });
        return { displayName, email, photoURL, uid, isAnonymous };
    }
    catch (error) {
        console.error(error);
        return undefined;
    }
}
//# sourceMappingURL=usersCont.js.map