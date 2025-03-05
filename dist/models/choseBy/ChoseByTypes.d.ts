import { InferInput } from 'valibot';
export declare enum CutoffType {
    topOptions = "topOptions",
    cutoffValue = "cutoffValue"
}
export declare enum ChoseByEvaluationType {
    consensus = "consensus",
    likes = "likes",
    likesDislikes = "likesDislikes"
}
export declare const ChoseBySchema: import("valibot").ObjectSchema<{
    readonly statementId: import("valibot").StringSchema<undefined>;
    readonly cutoffType: import("valibot").EnumSchema<typeof CutoffType, undefined>;
    readonly choseByEvaluationType: import("valibot").EnumSchema<typeof ChoseByEvaluationType, undefined>;
    readonly number: import("valibot").NumberSchema<undefined>;
}, undefined>;
export type ChoseBy = InferInput<typeof ChoseBySchema>;
export declare function defaultChoseBySettings(statementId: string): {
    number: number;
    cutoffType: CutoffType;
    choseByEvaluationType: ChoseByEvaluationType;
    statementId: string;
};
