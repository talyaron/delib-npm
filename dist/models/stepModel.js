"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StepSchema = void 0;
const zod_1 = require("zod");
exports.StepSchema = zod_1.z.object({
    stageId: zod_1.z.string(), //the id of the stage that this step belongs to
    statementId: zod_1.z.string(), //the id of the statement that this step belongs to
    stepId: zod_1.z.string(),
    cutOffAmount: zod_1.z.number().optional(), //how much will continue from the previous steps to the next step.
    method: zod_1.z.string(), //what type of process this step is
    order: zod_1.z.number(), //the order of the step in the list of steps
});
