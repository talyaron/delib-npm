"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserQuestionSchema = exports.DemographicOptionSchema = exports.UserQuestionTypeSchema = exports.UserQuestionType = void 0;
const valibot_1 = require("valibot");
var UserQuestionType;
(function (UserQuestionType) {
    UserQuestionType["text"] = "text";
    UserQuestionType["textarea"] = "textarea";
    UserQuestionType["checkbox"] = "checkbox";
    UserQuestionType["radio"] = "radio";
})(UserQuestionType || (exports.UserQuestionType = UserQuestionType = {}));
exports.UserQuestionTypeSchema = (0, valibot_1.enum_)(UserQuestionType);
exports.DemographicOptionSchema = (0, valibot_1.object)({
    option: (0, valibot_1.string)(),
    color: (0, valibot_1.optional)((0, valibot_1.string)()),
});
exports.UserQuestionSchema = (0, valibot_1.object)({
    question: (0, valibot_1.string)(),
    userId: (0, valibot_1.optional)((0, valibot_1.string)()),
    type: exports.UserQuestionTypeSchema,
    options: (0, valibot_1.array)(exports.DemographicOptionSchema),
    answerOptions: (0, valibot_1.optional)((0, valibot_1.array)((0, valibot_1.string)())),
    answer: (0, valibot_1.optional)((0, valibot_1.string)()), // can be string, array of strings, or boolean
    statementId: (0, valibot_1.string)(),
    order: (0, valibot_1.optional)((0, valibot_1.number)()),
    required: (0, valibot_1.optional)((0, valibot_1.boolean)()),
    userQuestionId: (0, valibot_1.optional)((0, valibot_1.string)()),
});
