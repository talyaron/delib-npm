"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImportanceSchema = void 0;
const zod_1 = require("zod");
exports.ImportanceSchema = zod_1.z.object({
    topParentId: zod_1.z.string(),
    topDocumentId: zod_1.z.string(),
    parentId: zod_1.z.string(),
    statementId: zod_1.z.string(),
    importance: zod_1.z.number(),
    userId: zod_1.z.string(),
});
