import { z } from 'zod';
export declare const ApprovalSchema: z.ZodObject<{
    approvalId: z.ZodString;
    statementId: z.ZodString;
    documentId: z.ZodString;
    topParentId: z.ZodString;
    userId: z.ZodString;
    approval: z.ZodBoolean;
}, "strip", z.ZodTypeAny, {
    statementId: string;
    topParentId: string;
    userId: string;
    approval: boolean;
    documentId: string;
    approvalId: string;
}, {
    statementId: string;
    topParentId: string;
    userId: string;
    approval: boolean;
    documentId: string;
    approvalId: string;
}>;
export type Approval = z.infer<typeof ApprovalSchema>;
