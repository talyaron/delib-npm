import { z } from 'zod';
export var AgreeDisagreeEnum;
(function (AgreeDisagreeEnum) {
    AgreeDisagreeEnum["Agree"] = "agree";
    AgreeDisagreeEnum["Disagree"] = "disagree";
    AgreeDisagreeEnum["NoOpinion"] = "noOpinion";
})(AgreeDisagreeEnum || (AgreeDisagreeEnum = {}));
export const AgreeDisagreeSchema = z.object({
    agreeId: z.string(),
    statementId: z.string(),
    documentId: z.string(),
    topParentId: z.string(),
    userId: z.string(),
    agree: z.number(),
});
//# sourceMappingURL=approveModel.js.map