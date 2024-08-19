import { z } from 'zod';
export declare const DocumentSignsSchema: z.ZodObject<{
    documentId: z.ZodString;
    viewed: z.ZodNumber;
    signed: z.ZodNumber;
    avgSignatures: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    documentId: string;
    viewed: number;
    signed: number;
    avgSignatures: number;
}, {
    documentId: string;
    viewed: number;
    signed: number;
    avgSignatures: number;
}>;
export type DocumentSigns = z.infer<typeof DocumentSignsSchema>;
