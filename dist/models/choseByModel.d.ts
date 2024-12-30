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
    CutoffType: z.ZodEnum<[CutoffType.topOptions, CutoffType.cutoffValue]>;
    choseByEvaluationType: z.ZodEnum<[ChoseByEvaluationType.consensus, ChoseByEvaluationType.likes, ChoseByEvaluationType.likesDislikes]>;
    number: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    number: number;
    statementId: string;
    CutoffType: CutoffType;
    choseByEvaluationType: ChoseByEvaluationType;
}, {
    number: number;
    statementId: string;
    CutoffType: CutoffType;
    choseByEvaluationType: ChoseByEvaluationType;
}>;
export type ChoseBy = z.infer<typeof ChoseBySchema>;
