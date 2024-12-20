import { z } from 'zod';
export declare const StepSchema: z.ZodObject<{
    stageId: z.ZodString;
    statementId: z.ZodString;
    stepId: z.ZodString;
    cutOffAmount: z.ZodOptional<z.ZodNumber>;
    method: z.ZodString;
    order: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    statementId: string;
    order: number;
    stageId: string;
    method: string;
    stepId: string;
    cutOffAmount?: number | undefined;
}, {
    statementId: string;
    order: number;
    stageId: string;
    method: string;
    stepId: string;
    cutOffAmount?: number | undefined;
}>;
export type Step = z.infer<typeof StepSchema>;
