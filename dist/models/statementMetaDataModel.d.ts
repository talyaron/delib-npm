import { z } from "zod";
export declare const StatementMetaDataSchema: z.ZodObject<{
    lastUpdate: z.ZodNumber;
    numberOfMembers: z.ZodOptional<z.ZodNumber>;
    numberOfEvaluators: z.ZodOptional<z.ZodNumber>;
    numberOfEvaluatedStatements: z.ZodOptional<z.ZodNumber>;
    numberOfFirstSuggesters: z.ZodOptional<z.ZodNumber>;
    numberOfFirstEvaluators: z.ZodOptional<z.ZodNumber>;
    numberOfSecondEvaluators: z.ZodOptional<z.ZodNumber>;
    statementId: z.ZodString;
}, "strip", z.ZodTypeAny, {
    statementId: string;
    lastUpdate: number;
    numberOfMembers?: number | undefined;
    numberOfEvaluators?: number | undefined;
    numberOfEvaluatedStatements?: number | undefined;
    numberOfFirstSuggesters?: number | undefined;
    numberOfFirstEvaluators?: number | undefined;
    numberOfSecondEvaluators?: number | undefined;
}, {
    statementId: string;
    lastUpdate: number;
    numberOfMembers?: number | undefined;
    numberOfEvaluators?: number | undefined;
    numberOfEvaluatedStatements?: number | undefined;
    numberOfFirstSuggesters?: number | undefined;
    numberOfFirstEvaluators?: number | undefined;
    numberOfSecondEvaluators?: number | undefined;
}>;
export type StatementMetaData = z.infer<typeof StatementMetaDataSchema>;
