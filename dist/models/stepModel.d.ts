import { z } from 'zod';
export declare const StepSchema: z.ZodObject<{
    stageId: z.ZodString;
    statementId: z.ZodString;
    stepId: z.ZodString;
    cutOffAmount: z.ZodOptional<z.ZodNumber>;
    method: z.ZodString;
    order: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    order: number;
    method: string;
    statementId: string;
    stageId: string;
    stepId: string;
    cutOffAmount?: number | undefined;
}, {
    order: number;
    method: string;
    statementId: string;
    stageId: string;
    stepId: string;
    cutOffAmount?: number | undefined;
}>;
export type Step = z.infer<typeof StepSchema>;
