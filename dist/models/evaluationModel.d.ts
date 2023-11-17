import { z } from 'zod';
export declare const EvaluationSchema: z.ZodObject<{
    parentId: z.ZodString;
    evaluationId: z.ZodString;
    statementId: z.ZodString;
    evaluatorId: z.ZodString;
    updatedAt: z.ZodNumber;
    evaluation: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    statementId: string;
    parentId: string;
    evaluationId: string;
    evaluatorId: string;
    updatedAt: number;
    evaluation: number;
}, {
    statementId: string;
    parentId: string;
    evaluationId: string;
    evaluatorId: string;
    updatedAt: number;
    evaluation: number;
}>;
export type Evaluation = z.infer<typeof EvaluationSchema>;
