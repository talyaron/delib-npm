import { z } from 'zod';

export const DocumentSignsSchema = z.object({
    documentId: z.string(),
    viewed: z.number(),
    signed: z.number(),
    rejected: z.number(),
    avgSignatures: z.number(),
});

export type DocumentSigns = z.infer<typeof DocumentSignsSchema>;

export const SignatureSchema = z.object({
    signatureId: z.string(),
    documentId: z.string(),
    userId: z.string(),
    signed: z.boolean(),
    date: z.string(),
    levelOfSignature: z.number(),
});

export type Signature = z.infer<typeof SignatureSchema>;