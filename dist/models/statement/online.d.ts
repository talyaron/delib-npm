import { InferOutput } from "valibot";
export declare const OnlineSchema: import("valibot").ObjectSchema<{
    readonly statementId: import("valibot").StringSchema<undefined>;
    readonly onlineId: import("valibot").StringSchema<undefined>;
    readonly user: import("valibot").ObjectSchema<{
        readonly displayName: import("valibot").StringSchema<undefined>;
        readonly photoURL: import("valibot").OptionalSchema<import("valibot").NullableSchema<import("valibot").StringSchema<undefined>, undefined>, undefined>;
        readonly uid: import("valibot").StringSchema<undefined>;
        readonly isAnonymous: import("valibot").OptionalSchema<import("valibot").BooleanSchema<undefined>, undefined>;
        readonly email: import("valibot").OptionalSchema<import("valibot").NullableSchema<import("valibot").StringSchema<undefined>, undefined>, undefined>;
        readonly advanceUser: import("valibot").OptionalSchema<import("valibot").BooleanSchema<undefined>, undefined>;
    }, undefined>;
    readonly lastUpdated: import("valibot").NumberSchema<undefined>;
    readonly tabInFocus: import("valibot").BooleanSchema<undefined>;
}, undefined>;
export type Online = InferOutput<typeof OnlineSchema>;
