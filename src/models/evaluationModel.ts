import { z } from 'zod';
import { UserSchema } from './usersModels';

export const EvaluationSchema = z.object({
    parentId: z.string(),
    evaluationId: z.string(),
    statementId: z.string(),
    evaluatorId: z.string(),
    updatedAt: z.number(),
    evaluation: z.number(),
    evaluator: UserSchema.optional(), //in Feb 2023 remove optional
});

export type Evaluation = z.infer<typeof EvaluationSchema>;