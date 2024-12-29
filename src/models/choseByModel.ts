import { z } from 'zod';

export enum ChoseByType {
    topOptions = "topOptions",
    cutoff = "cutoff"
}

export const ChoseByTypeSchema = z.enum(Object.values(ChoseByType) as [string, ...string[]]);

export const ChoseBySchema = z.object({
    statementId: z.string(),
    choseByType: ChoseByTypeSchema,
    number: z.number().optional(),
});

export type ChoseBy = z.infer<typeof ChoseBySchema>;