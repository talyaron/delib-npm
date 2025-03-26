"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginType = exports.CreatorSchema = exports.StepSchema = exports.MembershipSchema = exports.UserSchema = void 0;
const valibot_1 = require("valibot");
const TypeEnums_1 = require("../TypeEnums");
const Agreement_1 = require("../agreement/Agreement");
exports.UserSchema = (0, valibot_1.object)({
    displayName: (0, valibot_1.string)(),
    defaultLanguage: (0, valibot_1.optional)((0, valibot_1.string)()),
    email: (0, valibot_1.optional)((0, valibot_1.nullable)((0, valibot_1.string)())),
    photoURL: (0, valibot_1.optional)((0, valibot_1.nullable)((0, valibot_1.string)())),
    uid: (0, valibot_1.string)(),
    isAnonymous: (0, valibot_1.optional)((0, valibot_1.boolean)()),
    fontSize: (0, valibot_1.optional)((0, valibot_1.nullable)((0, valibot_1.number)())),
    color: (0, valibot_1.optional)((0, valibot_1.string)()),
    agreement: (0, valibot_1.optional)((0, valibot_1.nullable)(Agreement_1.AgreementSchema)),
    role: (0, valibot_1.optional)((0, valibot_1.string)()),
});
exports.MembershipSchema = (0, valibot_1.object)({
    adminApproveMembers: (0, valibot_1.optional)((0, valibot_1.boolean)()),
    access: (0, valibot_1.optional)((0, valibot_1.enum_)(TypeEnums_1.Access)),
    typeOfMembersAllowed: (0, valibot_1.optional)((0, valibot_1.enum_)(TypeEnums_1.membersAllowed)),
});
exports.StepSchema = (0, valibot_1.object)({
    stepId: (0, valibot_1.string)(),
    stepType: (0, valibot_1.enum_)(TypeEnums_1.StepType),
    instructions: (0, valibot_1.optional)((0, valibot_1.string)()),
    duration: (0, valibot_1.optional)((0, valibot_1.number)()),
    endTime: (0, valibot_1.optional)((0, valibot_1.number)()),
    order: (0, valibot_1.optional)((0, valibot_1.number)()),
});
exports.CreatorSchema = (0, valibot_1.object)({
    displayName: (0, valibot_1.string)(),
    photoURL: (0, valibot_1.optional)((0, valibot_1.nullable)((0, valibot_1.string)())),
    uid: (0, valibot_1.string)(),
});
var LoginType;
(function (LoginType) {
    LoginType["google"] = "google";
    LoginType["anonymous"] = "anonymous";
})(LoginType || (exports.LoginType = LoginType = {}));
