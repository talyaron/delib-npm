import { z } from "zod";
export const ImportanceSchema = z.object({
    topParentId: z.string(),
    documentId: z.string(),
    parentId: z.string(),
    statementId: z.string(),
    importance: z.number(),
    userId: z.string(),
});
//# sourceMappingURL=importanceModel.js.map