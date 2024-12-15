"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userSettingsSchema = exports.RoleSchema = exports.Role = exports.UserSchema = exports.AgreementSchema = void 0;
const zod_1 = require("zod");
exports.AgreementSchema = zod_1.z.object({
    text: zod_1.z.string(),
    date: zod_1.z.number(),
    version: zod_1.z.string(),
});
exports.UserSchema = zod_1.z.object({
    displayName: zod_1.z.string(),
    defaultLanguage: zod_1.z.string().length(2).optional(),
    email: zod_1.z.string().optional().nullable(),
    photoURL: zod_1.z.string().optional().nullable(),
    uid: zod_1.z.string(),
    isAnonymous: zod_1.z.boolean().optional(),
    fontSize: zod_1.z.number().optional().nullable(),
    color: zod_1.z.string().optional(),
    agreement: exports.AgreementSchema.optional().nullable(),
    role: zod_1.z.string().optional(),
});
var Role;
(function (Role) {
    Role["admin"] = "admin";
    Role["member"] = "member";
    Role["banned"] = "banned";
    Role["unsubscribed"] = "unsubscribed";
    Role["creator"] = "statement-creator";
})(Role || (exports.Role = Role = {}));
exports.RoleSchema = zod_1.z.enum([Role.admin, Role.member, Role.banned, Role.unsubscribed]);
exports.userSettingsSchema = zod_1.z.object({
    userId: zod_1.z.string(),
    fontSize: zod_1.z.number().optional(),
    color: zod_1.z.string().optional(),
    defaultLanguage: zod_1.z.string().length(2).optional(),
    agreement: exports.AgreementSchema.optional().nullable(),
    role: exports.RoleSchema.optional(),
    learning: zod_1.z.object({
        evaluation: zod_1.z.number().optional(),
        addOptions: zod_1.z.number().optional(),
    }).optional(),
});
