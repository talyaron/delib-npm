"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoleSchama = exports.Role = exports.UserSchema = exports.AgreementSchema = void 0;
const zod_1 = require("zod");
exports.AgreementSchema = zod_1.z.object({
    text: zod_1.z.string(),
    date: zod_1.z.number(),
    version: zod_1.z.string(),
});
exports.UserSchema = zod_1.z.object({
    displayName: zod_1.z.string(),
    email: zod_1.z.string().optional().nullable(),
    photoURL: zod_1.z.string().optional().nullable(),
    uid: zod_1.z.string(),
    isAnonymous: zod_1.z.boolean().optional(),
    fontSize: zod_1.z.number().optional().nullable(),
    defaultLanguage: zod_1.z.string().optional().nullable(),
    color: zod_1.z.string().optional(),
    agreement: exports.AgreementSchema.optional().nullable(),
});
var Role;
(function (Role) {
    Role["admin"] = "admin";
    Role["member"] = "member";
    Role["parentAdmin"] = "parent-admin";
    Role["systemAdmin"] = "system-admin";
    Role["statementCreator"] = "statement-creator";
    Role["guest"] = "guest";
    Role["banned"] = "banned";
})(Role || (exports.Role = Role = {}));
exports.RoleSchama = zod_1.z.enum([Role.admin, Role.member, Role.parentAdmin, Role.systemAdmin, Role.statementCreator, Role.guest, Role.banned]);
