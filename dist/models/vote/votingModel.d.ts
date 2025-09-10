import { InferOutput } from 'valibot';
export declare const VoteSchema: import("valibot").ObjectSchema<{
    readonly voteId: import("valibot").StringSchema<undefined>;
    readonly statementId: import("valibot").StringSchema<undefined>;
    readonly userId: import("valibot").StringSchema<undefined>;
    readonly parentId: import("valibot").StringSchema<undefined>;
    readonly lastUpdate: import("valibot").NumberSchema<undefined>;
    readonly createdAt: import("valibot").NumberSchema<undefined>;
    readonly voter: import("valibot").OptionalSchema<import("valibot").ObjectSchema<{
        readonly displayName: import("valibot").StringSchema<undefined>;
        readonly defaultLanguage: import("valibot").OptionalSchema<import("valibot").StringSchema<undefined>, undefined>;
        readonly email: import("valibot").OptionalSchema<import("valibot").NullableSchema<import("valibot").StringSchema<undefined>, undefined>, undefined>;
        readonly photoURL: import("valibot").OptionalSchema<import("valibot").NullableSchema<import("valibot").StringSchema<undefined>, undefined>, undefined>;
        readonly uid: import("valibot").StringSchema<undefined>;
        readonly isAnonymous: import("valibot").OptionalSchema<import("valibot").BooleanSchema<undefined>, undefined>;
        readonly fontSize: import("valibot").OptionalSchema<import("valibot").NullableSchema<import("valibot").NumberSchema<undefined>, undefined>, undefined>;
        readonly color: import("valibot").OptionalSchema<import("valibot").StringSchema<undefined>, undefined>;
        readonly agreement: import("valibot").OptionalSchema<import("valibot").NullableSchema<import("valibot").ObjectSchema<{
            readonly text: import("valibot").StringSchema<undefined>;
            readonly date: import("valibot").NumberSchema<undefined>;
            readonly version: import("valibot").StringSchema<undefined>;
        }, undefined>, undefined>, undefined>;
        readonly role: import("valibot").OptionalSchema<import("valibot").StringSchema<undefined>, undefined>;
    }, undefined>, undefined>;
}, undefined>;
export type Vote = InferOutput<typeof VoteSchema>;
export declare function getVoteId(userId: string, parentId: string): string;
export declare const VotingSettingsSchema: import("valibot").ObjectSchema<{
    readonly showPercentages: import("valibot").OptionalSchema<import("valibot").BooleanSchema<undefined>, undefined>;
    readonly showHighetRelativeToViewedOptions: import("valibot").OptionalSchema<import("valibot").BooleanSchema<undefined>, undefined>;
}, undefined>;
export type VotingSettings = InferOutput<typeof VotingSettingsSchema>;
