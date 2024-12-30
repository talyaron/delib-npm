import { z } from 'zod';

export enum ChoseByType {
    topOptions = "topOptions",
    cutoff = "cutoff"
}

export const ChoseByTypeSchema = z.enum([ChoseByType.topOptions, ChoseByType.cutoff]);

export enum ChoseByEvaluationType {
   consensus = "consensus",
   likes = "likes",
   likesDislikes = "likesDislikes",
}

export const ChoseByEvaluationTypeSchema = z.enum([ChoseByEvaluationType.consensus, ChoseByEvaluationType.likes, ChoseByEvaluationType.likesDislikes]);

export const ChoseBySchema = z.object({
    statementId: z.string(),
    choseByType: ChoseByTypeSchema,
    choseByEvaluationType: ChoseByEvaluationTypeSchema,
    number: z.number()
});

export type ChoseBy = z.infer<typeof ChoseBySchema>;