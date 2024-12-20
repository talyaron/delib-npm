"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DocumentSectionSchema = exports.DocumentSchema = void 0;
const zod_1 = require("zod");
exports.DocumentSchema = zod_1.z.object({
    parentStatementId: zod_1.z.string(),
    parentId: zod_1.z.string(),
    documentId: zod_1.z.string(),
    documentSectionId: zod_1.z.string(),
    order: zod_1.z.number(),
    isTitle: zod_1.z.boolean(),
    text: zod_1.z.string(),
    creatorId: zod_1.z.string(),
    pro: zod_1.z.number(),
    con: zod_1.z.number()
});
exports.DocumentSectionSchema = zod_1.z.object({
    parentStatementId: zod_1.z.string(),
    parentId: zod_1.z.string(),
    documentSectionId: zod_1.z.string(),
    order: zod_1.z.number(),
    creatorId: zod_1.z.string(),
    pro: zod_1.z.number(),
    con: zod_1.z.number()
});
//# sourceMappingURL=documentsModel.js.map