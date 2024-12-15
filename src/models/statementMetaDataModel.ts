import { z } from "zod";



export const StatementMetaDataSchema = z.object({
  lastUpdate: z.number(),
  numberOfMembers: z.number().optional(),
  numberOfEvaluators: z.number().optional(),
  numberOfEvaluatedStatements: z.number().optional(),
  numberOfFirstSuggesters: z.number().optional(),
  numberOfFirstEvaluators: z.number().optional(),
  numberOfSecondEvaluators: z.number().optional(),
  statementId: z.string(),
});

export type StatementMetaData = z.infer<typeof StatementMetaDataSchema>;