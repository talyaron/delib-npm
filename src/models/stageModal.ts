import { z } from 'zod';

//The types of deliberative processes that a stage can take
export enum Method {
    description = 'description',
    questions = 'questions',   
    needs = 'needs',
    suggestions = 'suggestions',
    voting = 'voting', 
    summary = 'summary'
}

export const MethodSchema = z.enum(Object.values(Method) as any);

export const StageSchema = z.object({
    statementId: z.string(), //the id of the statement that this stage belongs to
    stageId: z.string(),
    shortId: z.number(), //the short id of url of the stage
    image: z.any().optional(),
    title: z.string().optional(),
    description: z.string().optional(),
    order: z.number(), //the order of the stage in the list of stages
    method: MethodSchema, //what type of process this stage is
    enabled: z.boolean().optional(), //whether the stage is enabled or not
});

export type Stage = z.infer<typeof StageSchema>;