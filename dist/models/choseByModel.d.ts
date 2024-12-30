import { z } from 'zod';
export declare enum CutoffType {
    topOptions = "topOptions",
    cutoffValue = "cutoffValue"
}
export declare const CutoffTypeSchema: z.ZodEnum<[CutoffType.topOptions, CutoffType.cutoffValue]>;
export declare enum ChoseByEvaluationType {
    consensus = "consensus",
    likes = "likes",
    likesDislikes = "likesDislikes"
}
export declare const ChoseByEvaluationTypeSchema: z.ZodEnum<[ChoseByEvaluationType.consensus, ChoseByEvaluationType.likes, ChoseByEvaluationType.likesDislikes]>;
export declare const ChoseBySchema: z.ZodObject<{
    statementId: z.ZodString;
    cutoffType: z.ZodEnum<[CutoffType.topOptions, CutoffType.cutoffValue]>;
    choseByEvaluationType: z.ZodEnum<[ChoseByEvaluationType.consensus, ChoseByEvaluationType.likes, ChoseByEvaluationType.likesDislikes]>;
    number: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    number: number;
    statementId: string;
    cutoffType: CutoffType;
    choseByEvaluationType: ChoseByEvaluationType;
}, {
    number: number;
    statementId: string;
    cutoffType: CutoffType;
    choseByEvaluationType: ChoseByEvaluationType;
}>;
export type ChoseBy = z.infer<typeof ChoseBySchema>;
export declare function defaultChoseBySettings(statementId: string): ChoseBy;
