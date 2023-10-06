"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserSchema = void 0;
const zod_1 = require("zod");
exports.UserSchema = zod_1.z.object({
    displayName: zod_1.z.string(),
    email: zod_1.z.string().optional().nullable(),
    photoURL: zod_1.z.string().optional().nullable(),
    uid: zod_1.z.string(),
});
