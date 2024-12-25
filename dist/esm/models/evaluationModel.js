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
export const EvaluatorSchema = z.object({
    evaluatorId: z.string().optional(),
    statementId: z.string().optional(),
    evaluated: z.boolean().optional(),
    suggested: z.boolean().optional(),
    firstEvaluation: z.boolean().optional(),
    secondEvaluation: z.boolean().optional(),
    voted: z.boolean().optional(),
});
//# sourceMappingURL=evaluationModel.js.map