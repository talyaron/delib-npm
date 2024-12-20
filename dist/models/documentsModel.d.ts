import { z } from "zod";
export declare const DocumentSchema: z.ZodObject<{
    parentStatementId: z.ZodString;
    parentId: z.ZodString;
    documentId: z.ZodString;
    documentSectionId: z.ZodString;
    order: z.ZodNumber;
    isTitle: z.ZodBoolean;
    text: z.ZodString;
    creatorId: z.ZodString;
    pro: z.ZodNumber;
    con: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    text: string;
    creatorId: string;
    parentId: string;
    pro: number;
    con: number;
    order: number;
    parentStatementId: string;
    documentId: string;
    documentSectionId: string;
    isTitle: boolean;
}, {
    text: string;
    creatorId: string;
    parentId: string;
    pro: number;
    con: number;
    order: number;
    parentStatementId: string;
    documentId: string;
    documentSectionId: string;
    isTitle: boolean;
}>;
export type Document = z.infer<typeof DocumentSchema>;
export declare const DocumentSectionSchema: z.ZodObject<{
    parentStatementId: z.ZodString;
    parentId: z.ZodString;
    documentSectionId: z.ZodString;
    order: z.ZodNumber;
    creatorId: z.ZodString;
    pro: z.ZodNumber;
    con: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    creatorId: string;
    parentId: string;
    pro: number;
    con: number;
    order: number;
    parentStatementId: string;
    documentSectionId: string;
}, {
    creatorId: string;
    parentId: string;
    pro: number;
    con: number;
    order: number;
    parentStatementId: string;
    documentSectionId: string;
}>;
export type DocumentSection = z.infer<typeof DocumentSectionSchema>;
