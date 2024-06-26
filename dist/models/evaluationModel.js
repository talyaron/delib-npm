"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EvaluationSchema = void 0;
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
