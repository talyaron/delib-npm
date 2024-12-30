import { z } from 'zod';
export declare enum ChoseByType {
    topOptions = "topOptions",
    cutoff = "cutoff"
}
export declare const ChoseByTypeSchema: z.ZodEnum<[ChoseByType.topOptions, ChoseByType.cutoff]>;
export declare enum ChoseByEvaluationType {
    consensus = "consensus",
    likes = "likes",
    likesDislikes = "likesDislikes"
}
export declare const ChoseByEvaluationTypeSchema: z.ZodEnum<[ChoseByEvaluationType.consensus, ChoseByEvaluationType.likes, ChoseByEvaluationType.likesDislikes]>;
export declare const ChoseBySchema: z.ZodObject<{
    statementId: z.ZodString;
    choseByType: z.ZodEnum<[ChoseByType.topOptions, ChoseByType.cutoff]>;
    choseByEvaluationType: z.ZodEnum<[ChoseByEvaluationType.consensus, ChoseByEvaluationType.likes, ChoseByEvaluationType.likesDislikes]>;
    number: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    number: number;
    statementId: string;
    choseByType: ChoseByType;
    choseByEvaluationType: ChoseByEvaluationType;
}, {
    number: number;
    statementId: string;
    choseByType: ChoseByType;
    choseByEvaluationType: ChoseByEvaluationType;
}>;
export type ChoseBy = z.infer<typeof ChoseBySchema>;
