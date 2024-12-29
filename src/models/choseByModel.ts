import { z } from 'zod';

export enum ChoseByType {
    topOptions = "topOptions",
    cutoff = "cutoff"
}

export const ChoseByTypeSchema = z.enum([ChoseByType.topOptions, ChoseByType.cutoff]);

export enum choseByEvaluationType {
   consensus = "consensus",
   likes = "likes",
   likesDislikes = "likesDislikes",
}

export const choseByEvaluationTypeSchema = z.enum(Object.values(choseByEvaluationType) as [choseByEvaluationType, ...choseByEvaluationType[]]);

export const ChoseBySchema = z.object({
    statementId: z.string(),
    choseByType: ChoseByTypeSchema,
    choseByEvaluationType: choseByEvaluationTypeSchema,
    number: z.number()
});

export type ChoseBy = z.infer<typeof ChoseBySchema>;