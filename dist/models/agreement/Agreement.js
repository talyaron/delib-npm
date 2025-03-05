"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DocumentImportanceSchema = exports.DocumentApprovalSchema = exports.ImportanceSchema = exports.AgreeSchema = exports.AgreeDisagreeSchema = exports.AgreeDisagreeEnum = exports.AgreementSchema = void 0;
const valibot_1 = require("valibot");
exports.AgreementSchema = (0, valibot_1.object)({
    text: (0, valibot_1.string)(),
    date: (0, valibot_1.number)(),
    version: (0, valibot_1.string)(),
});
var AgreeDisagreeEnum;
(function (AgreeDisagreeEnum) {
    AgreeDisagreeEnum["Agree"] = "agree";
    AgreeDisagreeEnum["Disagree"] = "disagree";
    AgreeDisagreeEnum["NoOpinion"] = "noOpinion";
})(AgreeDisagreeEnum || (exports.AgreeDisagreeEnum = AgreeDisagreeEnum = {}));
exports.AgreeDisagreeSchema = (0, valibot_1.object)({
    agreeId: (0, valibot_1.string)(),
    statementId: (0, valibot_1.string)(),
    documentId: (0, valibot_1.string)(),
    topParentId: (0, valibot_1.string)(),
    userId: (0, valibot_1.string)(),
    agree: (0, valibot_1.number)(),
});
exports.AgreeSchema = (0, valibot_1.object)({
    agree: (0, valibot_1.optional)((0, valibot_1.number)()),
    disagree: (0, valibot_1.optional)((0, valibot_1.number)()),
    avgAgree: (0, valibot_1.optional)((0, valibot_1.number)()),
});
exports.ImportanceSchema = (0, valibot_1.object)({
    topParentId: (0, valibot_1.string)(),
    documentId: (0, valibot_1.string)(),
    parentId: (0, valibot_1.string)(),
    statementId: (0, valibot_1.string)(),
    importance: (0, valibot_1.number)(),
    userId: (0, valibot_1.string)(),
});
exports.DocumentApprovalSchema = (0, valibot_1.object)({
    approved: (0, valibot_1.number)(),
    totalVoters: (0, valibot_1.number)(),
    averageApproval: (0, valibot_1.number)(),
});
exports.DocumentImportanceSchema = (0, valibot_1.object)({
    numberOfUsers: (0, valibot_1.number)(),
    averageImportance: (0, valibot_1.number)(),
    sumImportance: (0, valibot_1.number)(),
});
