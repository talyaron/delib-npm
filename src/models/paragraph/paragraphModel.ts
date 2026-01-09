import { ParagraphType } from "../TypeEnums";
import * as v from 'valibot';

export const ParagraphSchema = v.object({
    paragraphId: v.string(),
    type: v.enum(ParagraphType),
    content: v.string(),
    order: v.number(),
    listType: v.optional(v.union([v.literal('ul'), v.literal('ol')]))
});

export type Paragraph = v.InferInput<typeof ParagraphSchema>;