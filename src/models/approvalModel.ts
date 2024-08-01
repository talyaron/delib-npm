import { z } from 'zod'

export const ApprovalSchema = z.object({
    approvalId: z.string(),
    statementId: z.string(),
    documentId: z.string(),
    topParentId: z.string(),
    userId: z.string(),
    approval: z.boolean(),
});

export type Approval = z.infer<typeof ApprovalSchema>;