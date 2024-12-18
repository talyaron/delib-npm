import {z} from 'zod';

export const StatementViewSchema = z.object({
    statementId: z.string(),
    userId: z.string(),
    viewed:z.number(),
     lastViewed: z.number(),
     parentDocumentId: z.string()
});

export type StatementView = z.infer<typeof StatementViewSchema>;