"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StepSchema = void 0;
const zod_1 = require("zod");
exports.StepSchema = zod_1.z.object({
    stageId: zod_1.z.string(),
    statementId: zod_1.z.string(),
    stepId: zod_1.z.string(),
    cutOffAmount: zod_1.z.number().optional(),
    method: zod_1.z.string(),
    order: zod_1.z.number(), //the order of the step in the list of steps
});
