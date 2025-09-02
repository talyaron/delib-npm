"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserDemographicQuestionSchema = exports.DemographicOptionSchema = exports.UserQuestionTypeSchema = exports.UserDemographicQuestionType = void 0;
const valibot_1 = require("valibot");
var UserDemographicQuestionType;
(function (UserDemographicQuestionType) {
    UserDemographicQuestionType["text"] = "text";
    UserDemographicQuestionType["textarea"] = "textarea";
    UserDemographicQuestionType["checkbox"] = "checkbox";
    UserDemographicQuestionType["radio"] = "radio";
})(UserDemographicQuestionType || (exports.UserDemographicQuestionType = UserDemographicQuestionType = {}));
exports.UserQuestionTypeSchema = (0, valibot_1.enum_)(UserDemographicQuestionType);
exports.DemographicOptionSchema = (0, valibot_1.object)({
    option: (0, valibot_1.string)(),
    color: (0, valibot_1.optional)((0, valibot_1.string)()),
});
exports.UserDemographicQuestionSchema = (0, valibot_1.object)({
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
