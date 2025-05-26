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
    readonly options: v.OptionalSchema<v.ArraySchema<v.StringSchema<undefined>, undefined>, undefined>;
}, undefined>;
export type UserQuestion = v.InferOutput<typeof UserQuestionSchema>;
