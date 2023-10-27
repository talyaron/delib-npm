"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RolesEnumSchama = exports.Role = exports.AdminRolesEnum = exports.UserSchema = void 0;
const zod_1 = require("zod");
exports.UserSchema = zod_1.z.object({
    displayName: zod_1.z.string(),
    email: zod_1.z.string().optional().nullable(),
    photoURL: zod_1.z.string().optional().nullable(),
    uid: zod_1.z.string(),
    isAnonymous: zod_1.z.boolean().optional(),
    fontSize: zod_1.z.number().optional().nullable(),
});
var AdminRolesEnum;
(function (AdminRolesEnum) {
    AdminRolesEnum["admin"] = "admin";
    AdminRolesEnum["parentAdmin"] = "parent-admin";
    AdminRolesEnum["systemAdmin"] = "system-admin";
    AdminRolesEnum["statementCreator"] = "statement-creator";
})(AdminRolesEnum || (exports.AdminRolesEnum = AdminRolesEnum = {}));
var Role;
(function (Role) {
    Role["admin"] = "admin";
    Role["member"] = "member";
    Role["parentAdmin"] = "parent-admin";
    Role["systemAdmin"] = "system-admin";
    Role["statementCreator"] = "statement-creator";
    Role["guest"] = "guest";
})(Role || (exports.Role = Role = {}));
exports.RolesEnumSchama = zod_1.z.enum([AdminRolesEnum.admin, AdminRolesEnum.parentAdmin, AdminRolesEnum.systemAdmin, AdminRolesEnum.statementCreator]);
