"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EvaluatorSchema = exports.EvaluationSchema = void 0;
const zod_1 = require("zod");
const usersModels_1 = require("./usersModels");
exports.EvaluationSchema = zod_1.z.object({
    parentId: zod_1.z.string(),
    evaluationId: zod_1.z.string(),
    statementId: zod_1.z.string(),
    evaluatorId: zod_1.z.string(),
    updatedAt: zod_1.z.number(),
    evaluation: zod_1.z.number(),
    evaluator: usersModels_1.UserSchema.optional(), //in Feb 2023 remove optional
});
exports.EvaluatorSchema = zod_1.z.object({
    evaluatorId: zod_1.z.string().optional(),
    statementId: zod_1.z.string().optional(),
    evaluated: zod_1.z.boolean().optional(),
    suggested: zod_1.z.boolean().optional(),
    firstEvaluation: zod_1.z.boolean().optional(),
    secondEvaluation: zod_1.z.boolean().optional(),
    voted: zod_1.z.boolean().optional(),
});
