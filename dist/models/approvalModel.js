"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApprovalSchema = void 0;
const zod_1 = require("zod");
exports.ApprovalSchema = zod_1.z.object({
    approvalId: zod_1.z.string(),
    statementId: zod_1.z.string(),
    documentId: zod_1.z.string(),
    topParentId: zod_1.z.string(),
    userId: zod_1.z.string(),
    approval: zod_1.z.boolean(),
});
