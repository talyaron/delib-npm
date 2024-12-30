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
    CutoffType: CutoffTypeSchema,
    choseByEvaluationType: ChoseByEvaluationTypeSchema,
    number: z.number()
});

export type ChoseBy = z.infer<typeof ChoseBySchema>;