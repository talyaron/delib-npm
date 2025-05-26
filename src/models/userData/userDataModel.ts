import * as v from 'valibot';

export enum UserQuestionType {
    text = 'text',
    textarea = 'textarea',
    checkbox = 'checkbox',
    radio = 'radio',
}

export const UserQuestionTypeSchema = v.enum(UserQuestionType);

export const UserQuestionSchema = v.object({
    question: v.string(),
    type: UserQuestionTypeSchema,
    options: v.optional(v.array(v.string())),
});

export type UserQuestion = v.InferOutput<typeof UserQuestionSchema>;