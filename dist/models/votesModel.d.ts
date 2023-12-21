import { z } from "zod";
export declare const VoteSchema: z.ZodObject<{
    voteId: z.ZodString;
    statementId: z.ZodString;
    userId: z.ZodString;
    parentId: z.ZodString;
    lastUpdate: z.ZodNumber;
    createdAt: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    statementId: string;
    parentId: string;
    lastUpdate: number;
    createdAt: number;
    userId: string;
    voteId: string;
}, {
    statementId: string;
    parentId: string;
    lastUpdate: number;
    createdAt: number;
    userId: string;
    voteId: string;
}>;
export type Vote = z.infer<typeof VoteSchema>;
