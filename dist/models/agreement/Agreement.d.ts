import { InferOutput, InferInput } from 'valibot';
export declare const AgreementSchema: import("valibot").ObjectSchema<{
    readonly text: import("valibot").StringSchema<undefined>;
    readonly date: import("valibot").NumberSchema<undefined>;
    readonly version: import("valibot").StringSchema<undefined>;
}, undefined>;
export type Agreement = InferInput<typeof AgreementSchema>;
export declare enum AgreeDisagreeEnum {
    Agree = "agree",
    Disagree = "disagree",
    NoOpinion = "noOpinion"
}
export declare const AgreeDisagreeSchema: import("valibot").ObjectSchema<{
    readonly agreeId: import("valibot").StringSchema<undefined>;
    readonly statementId: import("valibot").StringSchema<undefined>;
    readonly documentId: import("valibot").StringSchema<undefined>;
    readonly topParentId: import("valibot").StringSchema<undefined>;
    readonly userId: import("valibot").StringSchema<undefined>;
    readonly agree: import("valibot").NumberSchema<undefined>;
}, undefined>;
export type AgreeDisagree = InferOutput<typeof AgreeDisagreeSchema>;
export declare const AgreeSchema: import("valibot").ObjectSchema<{
    readonly agree: import("valibot").OptionalSchema<import("valibot").NumberSchema<undefined>, undefined>;
    readonly disagree: import("valibot").OptionalSchema<import("valibot").NumberSchema<undefined>, undefined>;
    readonly avgAgree: import("valibot").OptionalSchema<import("valibot").NumberSchema<undefined>, undefined>;
}, undefined>;
export type Agree = InferOutput<typeof AgreeSchema>;
export declare const ImportanceSchema: import("valibot").ObjectSchema<{
    readonly topParentId: import("valibot").StringSchema<undefined>;
    readonly documentId: import("valibot").StringSchema<undefined>;
    readonly parentId: import("valibot").StringSchema<undefined>;
    readonly statementId: import("valibot").StringSchema<undefined>;
    readonly importance: import("valibot").NumberSchema<undefined>;
    readonly userId: import("valibot").StringSchema<undefined>;
}, undefined>;
export type Importance = InferOutput<typeof ImportanceSchema>;
export declare const DocumentApprovalSchema: import("valibot").ObjectSchema<{
    readonly approved: import("valibot").NumberSchema<undefined>;
    readonly totalVoters: import("valibot").NumberSchema<undefined>;
    readonly averageApproval: import("valibot").NumberSchema<undefined>;
}, undefined>;
export type DocumentApproval = InferInput<typeof DocumentApprovalSchema>;
export declare const DocumentImportanceSchema: import("valibot").ObjectSchema<{
    readonly numberOfUsers: import("valibot").NumberSchema<undefined>;
    readonly averageImportance: import("valibot").NumberSchema<undefined>;
    readonly sumImportance: import("valibot").NumberSchema<undefined>;
}, undefined>;
export type DocumentImportance = InferInput<typeof DocumentImportanceSchema>;
