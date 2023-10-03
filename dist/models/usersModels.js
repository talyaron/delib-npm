"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseUserFromFirebase = exports.UserSchema = void 0;
const zod_1 = require("zod");
exports.UserSchema = zod_1.z.object({
    displayName: zod_1.z.string(),
    email: zod_1.z.string().optional().nullable(),
    photoURL: zod_1.z.string().optional().nullable(),
    uid: zod_1.z.string(),
});
function parseUserFromFirebase(user) {
    try {
        const { displayName, email, photoURL, uid } = user;
        exports.UserSchema.parse({ displayName, email, photoURL, uid });
        return { displayName, email, photoURL, uid };
    }
    catch (error) {
        console.error(error);
        return undefined;
    }
}
exports.parseUserFromFirebase = parseUserFromFirebase;
