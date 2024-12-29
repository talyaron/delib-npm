import { z } from 'zod';
export declare enum ChoseByType {
    topOptions = "topOptions",
    cutoff = "cutoff"
}
export declare const ChoseByTypeSchema: z.ZodEnum<[ChoseByType.topOptions, ChoseByType.cutoff]>;
export declare enum choseByEvaluationType {
    consensus = "consensus",
    likes = "likes",
    likesDislikes = "likesDislikes"
}
export declare const choseByEvaluationTypeSchema: z.ZodEnum<[choseByEvaluationType, ...choseByEvaluationType[]]>;
export declare const ChoseBySchema: z.ZodObject<{
    statementId: z.ZodString;
    choseByType: z.ZodEnum<[ChoseByType.topOptions, ChoseByType.cutoff]>;
    choseByEvaluationType: z.ZodEnum<[choseByEvaluationType, ...choseByEvaluationType[]]>;
    number: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    number: number;
    statementId: string;
    choseByType: ChoseByType;
    choseByEvaluationType: choseByEvaluationType;
}, {
    number: number;
    statementId: string;
    choseByType: ChoseByType;
    choseByEvaluationType: choseByEvaluationType;
}>;
export type ChoseBy = z.infer<typeof ChoseBySchema>;
