import { z } from "zod";
export declare const ImportanceSchema: z.ZodObject<{
    topParentId: z.ZodString;
    documentId: z.ZodString;
    parentId: z.ZodString;
    statementId: z.ZodString;
    importance: z.ZodNumber;
    userId: z.ZodString;
}, "strip", z.ZodTypeAny, {
    userId: string;
    statementId: string;
    parentId: string;
    topParentId: string;
    importance: number;
    documentId: string;
}, {
    userId: string;
    statementId: string;
    parentId: string;
    topParentId: string;
    importance: number;
    documentId: string;
}>;
export type Importance = z.infer<typeof ImportanceSchema>;
