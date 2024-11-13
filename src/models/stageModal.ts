import {z} from 'zod';

//The types of deliberative processes that a stage can take
export enum Method{
    suggestions = 'suggestions',
    voting = 'voting',
    discussion = 'discussion',
    explanation = 'explanation',
    result = 'result',
    summary = 'summary',
    consultation = 'consultation',
    clustering = 'clustering',
}


export const MethodSchema = z.enum(Object.values(Method) as any);

export const StageSchema = z.object({
    statementId: z.string(), //the id of the statement that this stage belongs to
    stageId: z.string(),
    image: z.any().optional(),
    title: z.string().optional(),
    description: z.string().optional(),  
    order: z.number(), //the order of the stage in the list of stages
    method: MethodSchema //what type of process this stage is
});

export type Stage = z.infer<typeof StageSchema>;