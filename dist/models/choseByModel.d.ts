import { z } from 'zod';
export declare enum ChoseByType {
    topOptions = "topOptions",
    cutoff = "cutoff"
}
export declare const ChoseByTypeSchema: z.ZodEnum<[string, ...string[]]>;
export declare enum choseByEvaluationType {
    consensus = "consensus",
    likes = "likes",
    likesDislikes = "likesDislikes"
}
export declare const choseByEvaluationTypeSchema: z.ZodEnum<[string, ...string[]]>;
export declare const ChoseBySchema: z.ZodObject<{
    statementId: z.ZodString;
    choseByType: z.ZodEnum<[string, ...string[]]>;
    choseByEvaluationType: z.ZodEnum<[string, ...string[]]>;
    number: z.ZodOptional<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    statementId: string;
    choseByType: string;
    choseByEvaluationType: string;
    number?: number | undefined;
}, {
    statementId: string;
    choseByType: string;
    choseByEvaluationType: string;
    number?: number | undefined;
}>;
export type ChoseBy = z.infer<typeof ChoseBySchema>;
