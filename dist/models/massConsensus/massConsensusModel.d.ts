import { InferOutput } from 'valibot';
import { MassConsensusPageUrls } from '../TypeEnums';
export declare const MassConsensusPageUrlsSchema: import("valibot").EnumSchema<typeof MassConsensusPageUrls, undefined>;
export declare const MassConsensusSchema: import("valibot").ObjectSchema<{
    readonly texts: import("valibot").OptionalSchema<import("valibot").ObjectSchema<{
        readonly introduction: import("valibot").StringSchema<undefined>;
        readonly suggestionQuestion: import("valibot").StringSchema<undefined>;
        readonly similarSuggestions: import("valibot").StringSchema<undefined>;
        readonly randomSuggestions: import("valibot").StringSchema<undefined>;
        readonly topSuggestions: import("valibot").StringSchema<undefined>;
        readonly voting: import("valibot").StringSchema<undefined>;
    }, undefined>, undefined>;
    readonly steps: import("valibot").ArraySchema<import("valibot").EnumSchema<typeof MassConsensusPageUrls, undefined>, undefined>;
    readonly currentStep: import("valibot").OptionalSchema<import("valibot").EnumSchema<typeof MassConsensusPageUrls, undefined>, undefined>;
}, undefined>;
export type MassConsensus = InferOutput<typeof MassConsensusSchema>;
export declare const GeneratedStatementSchema: import("valibot").ObjectSchema<{
    readonly statement: import("valibot").StringSchema<undefined>;
    readonly statementId: import("valibot").NullSchema<undefined>;
}, undefined>;
export type GeneratedStatement = InferOutput<typeof GeneratedStatementSchema>;
export declare const MassConsensusMemberSchema: import("valibot").ObjectSchema<{
    readonly statementId: import("valibot").StringSchema<undefined>;
    readonly lastUpdate: import("valibot").NumberSchema<undefined>;
    readonly email: import("valibot").OptionalSchema<import("valibot").NullableSchema<import("valibot").StringSchema<undefined>, undefined>, undefined>;
    readonly creator: import("valibot").ObjectSchema<{
        readonly displayName: import("valibot").StringSchema<undefined>;
        readonly photoURL: import("valibot").OptionalSchema<import("valibot").NullableSchema<import("valibot").StringSchema<undefined>, undefined>, undefined>;
        readonly uid: import("valibot").StringSchema<undefined>;
    }, undefined>;
}, undefined>;
export type MassConsensusMember = InferOutput<typeof MassConsensusMemberSchema>;
