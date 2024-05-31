import { z } from "zod";
export declare const StatementMetaDataQuestionSchema: z.ZodObject<{
    lastUpdate: z.ZodNumber;
    numberOfMembers: z.ZodOptional<z.ZodNumber>;
    statementId: z.ZodString;
}, "strip", z.ZodTypeAny, {
    statementId: string;
    lastUpdate: number;
    numberOfMembers?: number | undefined;
}, {
    statementId: string;
    lastUpdate: number;
    numberOfMembers?: number | undefined;
}>;
export type StatementMetaDataQuestion = z.infer<typeof StatementMetaDataQuestionSchema>;
export declare const StatementMetaDataSchema: z.ZodObject<{
    question: z.ZodObject<{
        lastUpdate: z.ZodNumber;
        numberOfMembers: z.ZodOptional<z.ZodNumber>;
        statementId: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        statementId: string;
        lastUpdate: number;
        numberOfMembers?: number | undefined;
    }, {
        statementId: string;
        lastUpdate: number;
        numberOfMembers?: number | undefined;
    }>;
}, "strip", z.ZodTypeAny, {
    question: {
        statementId: string;
        lastUpdate: number;
        numberOfMembers?: number | undefined;
    };
}, {
    question: {
        statementId: string;
        lastUpdate: number;
        numberOfMembers?: number | undefined;
    };
}>;
export type StatementMetaData = z.infer<typeof StatementMetaDataSchema>;
