"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserDataSchema = exports.userSettingsSchema = exports.Languages = exports.Role = void 0;
const valibot_1 = require("valibot");
const Agreement_1 = require("../agreement/Agreement");
var Role;
(function (Role) {
    Role["admin"] = "admin";
    Role["member"] = "member";
    Role["banned"] = "banned";
    Role["waiting"] = "waiting";
    Role["unsubscribed"] = "unsubscribed";
    Role["creator"] = "statement-creator";
})(Role || (exports.Role = Role = {}));
var Languages;
(function (Languages) {
    Languages["english"] = "en";
    Languages["hebrew"] = "he";
    Languages["arabic"] = "ar";
})(Languages || (exports.Languages = Languages = {}));
exports.userSettingsSchema = (0, valibot_1.object)({
    userId: (0, valibot_1.string)(),
    fontSize: (0, valibot_1.optional)((0, valibot_1.number)()),
    color: (0, valibot_1.optional)((0, valibot_1.string)()),
    defaultLanguage: (0, valibot_1.optional)((0, valibot_1.enum_)(Languages)),
    ent: (0, valibot_1.optional)((0, valibot_1.nullable)(Agreement_1.AgreementSchema)),
    role: (0, valibot_1.optional)((0, valibot_1.enum_)(Role)),
    learning: (0, valibot_1.optional)((0, valibot_1.object)({
        evaluation: (0, valibot_1.optional)((0, valibot_1.number)()),
        addOptions: (0, valibot_1.optional)((0, valibot_1.number)()),
    })),
});
exports.UserDataSchema = (0, valibot_1.object)({
    userId: (0, valibot_1.string)(),
    email: (0, valibot_1.optional)((0, valibot_1.string)()),
    displayName: (0, valibot_1.optional)((0, valibot_1.string)()),
    city: (0, valibot_1.optional)((0, valibot_1.string)()),
    country: (0, valibot_1.optional)((0, valibot_1.string)()),
    dateOfBirth: (0, valibot_1.optional)((0, valibot_1.number)()),
});
