import { z } from 'zod';
export declare const StatementViewSchema: z.ZodObject<{
    statementId: z.ZodString;
    userId: z.ZodString;
    viewed: z.ZodNumber;
    lastViewed: z.ZodNumber;
    parentDocumentId: z.ZodString;
}, "strip", z.ZodTypeAny, {
    userId: string;
    statementId: string;
    viewed: number;
    parentDocumentId: string;
    lastViewed: number;
}, {
    userId: string;
    statementId: string;
    viewed: number;
    parentDocumentId: string;
    lastViewed: number;
}>;
export type StatementView = z.infer<typeof StatementViewSchema>;
