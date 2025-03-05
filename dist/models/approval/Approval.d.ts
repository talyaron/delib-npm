import { InferOutput } from 'valibot';
export declare const ApprovalSchema: import("valibot").ObjectSchema<{
    readonly approvalId: import("valibot").StringSchema<undefined>;
    readonly statementId: import("valibot").StringSchema<undefined>;
    readonly documentId: import("valibot").StringSchema<undefined>;
    readonly topParentId: import("valibot").StringSchema<undefined>;
    readonly userId: import("valibot").StringSchema<undefined>;
    readonly approval: import("valibot").BooleanSchema<undefined>;
}, undefined>;
export type Approval = InferOutput<typeof ApprovalSchema>;
