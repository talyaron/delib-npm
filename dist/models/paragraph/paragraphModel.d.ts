import { ParagraphType } from "../TypeEnums";
import * as v from 'valibot';
export declare const ParagraphSchema: v.ObjectSchema<{
    readonly paragraphId: v.StringSchema<undefined>;
    readonly type: v.EnumSchema<typeof ParagraphType, undefined>;
    readonly content: v.StringSchema<undefined>;
    readonly order: v.NumberSchema<undefined>;
    readonly listType: v.OptionalSchema<v.UnionSchema<[v.LiteralSchema<"ul", undefined>, v.LiteralSchema<"ol", undefined>], undefined>, undefined>;
}, undefined>;
export type Paragraph = v.InferInput<typeof ParagraphSchema>;
