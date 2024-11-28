import { z } from 'zod';
export declare const DocumentSignsSchema: z.ZodObject<{
    documentId: z.ZodString;
    viewed: z.ZodNumber;
    signed: z.ZodNumber;
    rejected: z.ZodNumber;
    avgSignatures: z.ZodNumber;
    totalSignaturesLevel: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    rejected: number;
    documentId: string;
    viewed: number;
    signed: number;
    avgSignatures: number;
    totalSignaturesLevel: number;
}, {
    rejected: number;
    documentId: string;
    viewed: number;
    signed: number;
    avgSignatures: number;
    totalSignaturesLevel: number;
}>;
export type DocumentSigns = z.infer<typeof DocumentSignsSchema>;
export declare const SignatureSchema: z.ZodObject<{
    signatureId: z.ZodString;
    documentId: z.ZodString;
    userId: z.ZodString;
    signed: z.ZodBoolean;
    date: z.ZodString;
    levelOfSignature: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    date: string;
    userId: string;
    documentId: string;
    signed: boolean;
    signatureId: string;
    levelOfSignature: number;
}, {
    date: string;
    userId: string;
    documentId: string;
    signed: boolean;
    signatureId: string;
    levelOfSignature: number;
}>;
export type Signature = z.infer<typeof SignatureSchema>;
export declare const SignUsersSchema: z.ZodObject<{
    documentId: z.ZodString;
    userId: z.ZodString;
    signed: z.ZodBoolean;
}, "strip", z.ZodTypeAny, {
    userId: string;
    documentId: string;
    signed: boolean;
}, {
    userId: string;
    documentId: string;
    signed: boolean;
}>;
export type SignUsers = z.infer<typeof SignUsersSchema>;
