"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TimerSchema = void 0;
const zod_1 = require("zod");
exports.TimerSchema = zod_1.z.object({
    roomNumber: zod_1.z.number(),
    statementId: zod_1.z.string(),
    parentId: zod_1.z.string(),
    creatorId: zod_1.z.string(),
    adminOnly: zod_1.z.boolean(),
    pause: zod_1.z.boolean(),
    start: zod_1.z.boolean(),
    startTime: zod_1.z.number(),
    timeToCount: zod_1.z.number(),
});
