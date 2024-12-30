import { z } from 'zod';

export enum CutoffType {
    topOptions = "topOptions",
    cutoffValue = "cutoffValue",
}

export const CutoffTypeSchema = z.enum([CutoffType.topOptions, CutoffType.cutoffValue]);

export enum ChoseByEvaluationType {
   consensus = "consensus",
   likes = "likes",
   likesDislikes = "likesDislikes",
}

export const ChoseByEvaluationTypeSchema = z.enum([ChoseByEvaluationType.consensus, ChoseByEvaluationType.likes, ChoseByEvaluationType.likesDislikes]);

export const ChoseBySchema = z.object({
    statementId: z.string(),
    cutoffType: CutoffTypeSchema,
    choseByEvaluationType: ChoseByEvaluationTypeSchema,
    number: z.number()
});

export type ChoseBy = z.infer<typeof ChoseBySchema>;

export function defaultChoseBySettings(statementId: string): ChoseBy {
    return {
        number: 1,
        cutoffType: CutoffType.topOptions,
        choseByEvaluationType: ChoseByEvaluationType.consensus,
        statementId: statementId
    };
}