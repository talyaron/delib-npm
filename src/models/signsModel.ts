import { z } from 'zod';

export const DocumentSignsSchema = z.object({
    documentId: z.string(),
    viewed: z.number(),
    signed: z.number(),
    avgSignatures: z.number(),
});

export type DocumentSigns = z.infer<typeof DocumentSignsSchema>;