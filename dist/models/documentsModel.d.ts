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
    order: number;
    text: string;
    parentId: string;
    creatorId: string;
    pro: number;
    con: number;
    parentStatementId: string;
    documentId: string;
    documentSectionId: string;
    isTitle: boolean;
}, {
    order: number;
    text: string;
    parentId: string;
    creatorId: string;
    pro: number;
    con: number;
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
    order: number;
    parentId: string;
    creatorId: string;
    pro: number;
    con: number;
    parentStatementId: string;
    documentSectionId: string;
}, {
    order: number;
    parentId: string;
    creatorId: string;
    pro: number;
    con: number;
    parentStatementId: string;
    documentSectionId: string;
}>;
export type DocumentSection = z.infer<typeof DocumentSectionSchema>;
