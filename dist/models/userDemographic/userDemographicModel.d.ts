import { InferOutput } from 'valibot';
export declare enum UserDemographicQuestionType {
    text = "text",
    textarea = "textarea",
    checkbox = "checkbox",
    radio = "radio"
}
export declare enum DemographicQuestionScope {
    group = "group",
    statement = "statement"
}
export declare const DemographicQuestionScopeSchema: import("valibot").EnumSchema<typeof DemographicQuestionScope, undefined>;
export declare const UserQuestionTypeSchema: import("valibot").EnumSchema<typeof UserDemographicQuestionType, undefined>;
export declare const DemographicOptionSchema: import("valibot").ObjectSchema<{
    readonly option: import("valibot").StringSchema<undefined>;
    readonly color: import("valibot").OptionalSchema<import("valibot").StringSchema<undefined>, undefined>;
}, undefined>;
export type DemographicOption = InferOutput<typeof DemographicOptionSchema>;
export declare const UserDemographicQuestionSchema: import("valibot").ObjectSchema<{
    readonly question: import("valibot").StringSchema<undefined>;
    readonly userId: import("valibot").OptionalSchema<import("valibot").StringSchema<undefined>, undefined>;
    readonly type: import("valibot").EnumSchema<typeof UserDemographicQuestionType, undefined>;
    readonly options: import("valibot").ArraySchema<import("valibot").ObjectSchema<{
        readonly option: import("valibot").StringSchema<undefined>;
        readonly color: import("valibot").OptionalSchema<import("valibot").StringSchema<undefined>, undefined>;
    }, undefined>, undefined>;
    readonly answerOptions: import("valibot").OptionalSchema<import("valibot").ArraySchema<import("valibot").StringSchema<undefined>, undefined>, undefined>;
    readonly answer: import("valibot").OptionalSchema<import("valibot").StringSchema<undefined>, undefined>;
    readonly statementId: import("valibot").StringSchema<undefined>;
    readonly order: import("valibot").OptionalSchema<import("valibot").NumberSchema<undefined>, undefined>;
    readonly required: import("valibot").OptionalSchema<import("valibot").BooleanSchema<undefined>, undefined>;
    readonly userQuestionId: import("valibot").OptionalSchema<import("valibot").StringSchema<undefined>, undefined>;
    readonly topParentId: import("valibot").OptionalSchema<import("valibot").StringSchema<undefined>, undefined>;
    readonly scope: import("valibot").OptionalSchema<import("valibot").EnumSchema<typeof DemographicQuestionScope, undefined>, undefined>;
}, undefined>;
export type UserDemographicQuestion = InferOutput<typeof UserDemographicQuestionSchema>;
