import { z } from "zod";
export declare const StatementMetaDataQuestionSchema: z.ZodObject<{
    lastUpdate: z.ZodNumber;
    numberOfMembers: z.ZodOptional<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    lastUpdate: number;
    numberOfMembers?: number | undefined;
}, {
    lastUpdate: number;
    numberOfMembers?: number | undefined;
}>;
export type StatementMetaDataQuestion = z.infer<typeof StatementMetaDataQuestionSchema>;
export declare const StatementMetaDataSchema: z.ZodObject<{
    question: z.ZodObject<{
        lastUpdate: z.ZodNumber;
        numberOfMembers: z.ZodOptional<z.ZodNumber>;
    }, "strip", z.ZodTypeAny, {
        lastUpdate: number;
        numberOfMembers?: number | undefined;
    }, {
        lastUpdate: number;
        numberOfMembers?: number | undefined;
    }>;
    statementId: z.ZodString;
}, "strip", z.ZodTypeAny, {
    statementId: string;
    question: {
        lastUpdate: number;
        numberOfMembers?: number | undefined;
    };
}, {
    statementId: string;
    question: {
        lastUpdate: number;
        numberOfMembers?: number | undefined;
    };
}>;
export type StatementMetaData = z.infer<typeof StatementMetaDataSchema>;
