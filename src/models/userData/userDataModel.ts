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
    options: v.array(v.string()),
    statementId: v.string(),
    order: v.optional(v.number()),
    required: v.optional(v.boolean()),
});

export type UserQuestion = v.InferOutput<typeof UserQuestionSchema>;