import { z } from "zod";

export const StatementMetaDataQuestionSchema = z.object({
    lastUpdate: z.number(),
    numberOfMembers: z.number().optional(),
    statementId: z.string()
  });
  
  export type StatementMetaDataQuestion = z.infer<typeof StatementMetaDataQuestionSchema>;

  export const StatementMetaDataSchema = z.object({
    question: StatementMetaDataQuestionSchema
  });

    export type StatementMetaData = z.infer<typeof StatementMetaDataSchema>;