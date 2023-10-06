"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseUserFromFirebase = void 0;
const usersModels_1 = require("../models/usersModels");
function parseUserFromFirebase(user) {
    try {
        if (!user)
            throw new Error('user is missing');
        const { displayName, email, photoURL, uid } = user;
        usersModels_1.UserSchema.parse({ displayName, email, photoURL, uid });
        return { displayName, email, photoURL, uid };
    }
    catch (error) {
        console.error(error);
        return undefined;
    }
}
exports.parseUserFromFirebase = parseUserFromFirebase;
