"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StatementSettingsSchema = void 0;
const valibot_1 = require("valibot");
const TypeEnums_1 = require("../TypeEnums");
exports.StatementSettingsSchema = (0, valibot_1.object)({
    subScreens: (0, valibot_1.optional)((0, valibot_1.array)((0, valibot_1.string)())),
    enableAddEvaluationOption: (0, valibot_1.optional)((0, valibot_1.boolean)()),
    enableAddVotingOption: (0, valibot_1.optional)((0, valibot_1.boolean)()),
    enhancedEvaluation: (0, valibot_1.optional)((0, valibot_1.boolean)()),
    showEvaluation: (0, valibot_1.optional)((0, valibot_1.boolean)()),
    inVotingGetOnlyResults: (0, valibot_1.optional)((0, valibot_1.boolean)()),
    enableSimilaritiesSearch: (0, valibot_1.optional)((0, valibot_1.boolean)()),
    enableNavigationalElements: (0, valibot_1.optional)((0, valibot_1.boolean)()),
    show: (0, valibot_1.optional)((0, valibot_1.boolean)()),
    deliberationType: (0, valibot_1.optional)((0, valibot_1.enum_)(TypeEnums_1.DeliberationType)),
    hasChat: (0, valibot_1.optional)((0, valibot_1.boolean)()),
    hasChildren: (0, valibot_1.optional)((0, valibot_1.boolean)()),
    numberOfOptionsPerUser: (0, valibot_1.optional)((0, valibot_1.number)())
});
