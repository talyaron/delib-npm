import { z } from "zod";

export const VoteSchema = z.object({
    voteId: z.string(),
    statementId: z.string(),
    userId: z.string(),
    parentId: z.string(),
    lastUpdate: z.number(),
    createdAt: z.number(),
});

export type Vote = z.infer<typeof voteSchema>;

