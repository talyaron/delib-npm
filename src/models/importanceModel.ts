import { z } from "zod";

export const ImportanceSchema = z.object({
    topParentId: z.string(),
    topDocumentId: z.string(),
    parentId: z.string(),
    statementId: z.string(),
    importance: z.number(),
    userId: z.string(),
});

export type Importance = z.infer<typeof ImportanceSchema>;