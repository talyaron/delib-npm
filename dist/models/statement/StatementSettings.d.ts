import { InferOutput } from 'valibot';
import { DeliberationType } from '../TypeEnums';
export declare const StatementSettingsSchema: import("valibot").ObjectSchema<{
    readonly subScreens: import("valibot").OptionalSchema<import("valibot").ArraySchema<import("valibot").StringSchema<undefined>, undefined>, undefined>;
    readonly enableAddEvaluationOption: import("valibot").OptionalSchema<import("valibot").BooleanSchema<undefined>, undefined>;
    readonly enableAddVotingOption: import("valibot").OptionalSchema<import("valibot").BooleanSchema<undefined>, undefined>;
    readonly enhancedEvaluation: import("valibot").OptionalSchema<import("valibot").BooleanSchema<undefined>, undefined>;
    readonly showEvaluation: import("valibot").OptionalSchema<import("valibot").BooleanSchema<undefined>, undefined>;
    readonly inVotingGetOnlyResults: import("valibot").OptionalSchema<import("valibot").BooleanSchema<undefined>, undefined>;
    readonly enableSimilaritiesSearch: import("valibot").OptionalSchema<import("valibot").BooleanSchema<undefined>, undefined>;
    readonly enableNavigationalElements: import("valibot").OptionalSchema<import("valibot").BooleanSchema<undefined>, undefined>;
    readonly show: import("valibot").OptionalSchema<import("valibot").BooleanSchema<undefined>, undefined>;
    readonly deliberationType: import("valibot").OptionalSchema<import("valibot").EnumSchema<typeof DeliberationType, undefined>, undefined>;
    readonly hasChat: import("valibot").OptionalSchema<import("valibot").BooleanSchema<undefined>, undefined>;
    readonly hasChildren: import("valibot").OptionalSchema<import("valibot").BooleanSchema<undefined>, undefined>;
    readonly numberOfOptionsPerUser: import("valibot").OptionalSchema<import("valibot").NumberSchema<undefined>, undefined>;
}, undefined>;
export type StatementSettings = InferOutput<typeof StatementSettingsSchema>;
