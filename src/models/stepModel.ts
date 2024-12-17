import { z } from 'zod';

export const StepSchema = z.object({
    stageId: z.string(), //the id of the stage that this step belongs to
    statementId: z.string(), //the id of the statement that this step belongs to
    stepId: z.string(),
    cutOffAmount: z.number().optional(), //how much will continue from the previous steps to the next step.
    method: z.string(), //what type of process this step is
    order: z.number(), //the order of the step in the list of steps
});

export type Step = z.infer<typeof StepSchema>;