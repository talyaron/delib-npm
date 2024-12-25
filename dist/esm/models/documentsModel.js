import { z } from "zod";
export const DocumentSchema = z.object({
    parentStatementId: z.string(),
    parentId: z.string(),
    documentId: z.string(),
    documentSectionId: z.string(),
    order: z.number(),
    isTitle: z.boolean(),
    text: z.string(),
    creatorId: z.string(),
    pro: z.number(),
    con: z.number()
});
export const DocumentSectionSchema = z.object({
    parentStatementId: z.string(),
    parentId: z.string(),
    documentSectionId: z.string(),
    order: z.number(),
    creatorId: z.string(),
    pro: z.number(),
    con: z.number()
});
//# sourceMappingURL=documentsModel.js.map