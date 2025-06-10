import {
    object,
    string,
    number,
    boolean,
    optional,
    enum_,
    InferOutput,
    array,
} from 'valibot';

export enum UserQuestionType {
    text = 'text',
    textarea = 'textarea',
    checkbox = 'checkbox',
    radio = 'radio',
}

export const UserQuestionTypeSchema = enum_(UserQuestionType);

export const DemographicOptionSchema = object({
    option: string(),
    color: optional(string()),
});

export type DemographicOption = InferOutput<typeof DemographicOptionSchema>;

export const UserQuestionSchema = object({
    question: string(),
    userId:optional(string()),
    type: UserQuestionTypeSchema,
    options: array(DemographicOptionSchema),
    answerOptions: optional(array(string())),
    answer: optional(string()), // can be string, array of strings, or boolean
    statementId: string(),
    order: optional(number()),
    required: optional(boolean()),
    userQuestionId: optional(string()),
});

export type UserQuestion = InferOutput<typeof UserQuestionSchema>;