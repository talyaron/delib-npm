"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StatementMetaDataSchema = exports.StatementMetaDataQuestionSchema = void 0;
const zod_1 = require("zod");
exports.StatementMetaDataQuestionSchema = zod_1.z.object({
    lastUpdate: zod_1.z.number(),
    numberOfMembers: zod_1.z.number().optional(),
});
exports.StatementMetaDataSchema = zod_1.z.object({
    question: exports.StatementMetaDataQuestionSchema,
    statementId: zod_1.z.string()
});
