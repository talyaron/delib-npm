"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StatementMetaDataSchema = void 0;
const zod_1 = require("zod");
exports.StatementMetaDataSchema = zod_1.z.object({
    lastUpdate: zod_1.z.number(),
    numberOfMembers: zod_1.z.number().optional(),
    numberOfEvaluators: zod_1.z.number().optional(),
    numberOfEvaluatedStatements: zod_1.z.number().optional(),
    numberOfFirstSuggesters: zod_1.z.number().optional(),
    numberOfFirstEvaluators: zod_1.z.number().optional(),
    numberOfSecondEvaluators: zod_1.z.number().optional(),
    statementId: zod_1.z.string(),
});
//# sourceMappingURL=statementMetaDataModel.js.map