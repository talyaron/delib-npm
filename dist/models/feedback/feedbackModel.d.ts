import { InferOutput } from "valibot";
export declare const FeedbackSchema: import("valibot").ObjectSchema<{
    readonly feedbackId: import("valibot").StringSchema<undefined>;
    readonly statementId: import("valibot").StringSchema<undefined>;
    readonly statementTitle: import("valibot").StringSchema<undefined>;
    readonly feedbackText: import("valibot").StringSchema<undefined>;
    readonly createdAt: import("valibot").NumberSchema<undefined>;
    readonly creator: import("valibot").ObjectSchema<{
        readonly displayName: import("valibot").StringSchema<undefined>;
        readonly photoURL: import("valibot").OptionalSchema<import("valibot").NullableSchema<import("valibot").StringSchema<undefined>, undefined>, undefined>;
        readonly uid: import("valibot").StringSchema<undefined>;
        readonly isAnonymous: import("valibot").OptionalSchema<import("valibot").BooleanSchema<undefined>, undefined>;
        readonly email: import("valibot").OptionalSchema<import("valibot").NullableSchema<import("valibot").StringSchema<undefined>, undefined>, undefined>;
        readonly advanceUser: import("valibot").OptionalSchema<import("valibot").BooleanSchema<undefined>, undefined>;
    }, undefined>;
    readonly email: import("valibot").OptionalSchema<import("valibot").StringSchema<undefined>, undefined>;
}, undefined>;
export type Feedback = InferOutput<typeof FeedbackSchema>;
