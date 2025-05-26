"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserQuestionSchema = exports.UserQuestionTypeSchema = exports.UserQuestionType = void 0;
const v = require("valibot");
var UserQuestionType;
(function (UserQuestionType) {
    UserQuestionType["text"] = "text";
    UserQuestionType["textarea"] = "textarea";
    UserQuestionType["checkbox"] = "checkbox";
    UserQuestionType["radio"] = "radio";
})(UserQuestionType || (exports.UserQuestionType = UserQuestionType = {}));
exports.UserQuestionTypeSchema = v.enum(UserQuestionType);
exports.UserQuestionSchema = v.object({
    question: v.string(),
    type: exports.UserQuestionTypeSchema,
    options: v.optional(v.array(v.string())),
});
