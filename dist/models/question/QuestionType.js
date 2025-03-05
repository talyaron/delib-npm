"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuestionSettingsSchema = void 0;
const valibot_1 = require("valibot");
const TypeEnums_1 = require("../TypeEnums");
exports.QuestionSettingsSchema = (0, valibot_1.object)({
    isTopQuestion: (0, valibot_1.optional)((0, valibot_1.boolean)()), //used to find the top question and all here descendants.
    questionType: (0, valibot_1.optional)((0, valibot_1.enum_)(TypeEnums_1.QuestionType)), // multi-stage, mass-consensus
    steps: (0, valibot_1.optional)((0, valibot_1.enum_)(TypeEnums_1.QuestionStagesType)),
    stepsAllowed: (0, valibot_1.optional)((0, valibot_1.array)((0, valibot_1.enum_)(TypeEnums_1.QuestionStep))),
    currentStep: (0, valibot_1.optional)((0, valibot_1.enum_)(TypeEnums_1.QuestionStep)),
    currentStage: (0, valibot_1.optional)((0, valibot_1.enum_)(TypeEnums_1.QuestionStage)), //deprecated
});
