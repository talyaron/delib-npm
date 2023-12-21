import { z } from "zod";
import { UserSchema } from "./usersModels";

export const VoteSchema = z.object({
    voteId: z.string(),
    statementId: z.string(),
    userId: z.string(),
    parentId: z.string(),
    lastUpdate: z.number(),
    createdAt: z.number(),
    voter:UserSchema.optional(), //in Feb 2023 remove optional
});

export type Vote = z.infer<typeof VoteSchema>;

