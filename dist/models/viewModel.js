"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StatementViewSchema = void 0;
const zod_1 = require("zod");
exports.StatementViewSchema = zod_1.z.object({
    statementId: zod_1.z.string(),
    userId: zod_1.z.string(),
    viewed: zod_1.z.number(),
    lastViewed: zod_1.z.number(),
    parentDocumentId: zod_1.z.string()
});
