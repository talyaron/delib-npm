"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DocumentSignsSchema = void 0;
const zod_1 = require("zod");
exports.DocumentSignsSchema = zod_1.z.object({
    documentId: zod_1.z.string(),
    viewed: zod_1.z.number(),
    signed: zod_1.z.number(),
    avgSignatures: zod_1.z.number(),
});
