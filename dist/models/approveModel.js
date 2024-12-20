"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AgreeDisagreeSchema = exports.AgreeDisagreeEnum = void 0;
const zod_1 = require("zod");
var AgreeDisagreeEnum;
(function (AgreeDisagreeEnum) {
    AgreeDisagreeEnum["Agree"] = "agree";
    AgreeDisagreeEnum["Disagree"] = "disagree";
    AgreeDisagreeEnum["NoOpinion"] = "noOpinion";
})(AgreeDisagreeEnum || (exports.AgreeDisagreeEnum = AgreeDisagreeEnum = {}));
exports.AgreeDisagreeSchema = zod_1.z.object({
    agreeId: zod_1.z.string(),
    statementId: zod_1.z.string(),
    documentId: zod_1.z.string(),
    topParentId: zod_1.z.string(),
    userId: zod_1.z.string(),
    agree: zod_1.z.number(),
});
//# sourceMappingURL=approveModel.js.map