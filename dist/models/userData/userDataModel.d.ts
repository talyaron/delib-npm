import * as v from 'valibot';
export declare enum UserQuestionType {
    text = "text",
    textarea = "textarea",
    checkbox = "checkbox",
    radio = "radio"
}
export declare const UserQuestionTypeSchema: v.EnumSchema<typeof UserQuestionType, undefined>;
export declare const UserQuestionSchema: v.ObjectSchema<{
    readonly question: v.StringSchema<undefined>;
    readonly type: v.EnumSchema<typeof UserQuestionType, undefined>;
    readonly options: v.ArraySchema<v.StringSchema<undefined>, undefined>;
    readonly statementId: v.StringSchema<undefined>;
    readonly order: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
    readonly required: v.OptionalSchema<v.BooleanSchema<undefined>, undefined>;
}, undefined>;
export type UserQuestion = v.InferOutput<typeof UserQuestionSchema>;
