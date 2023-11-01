"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResultsBySchema = exports.ResultsBy = void 0;
const zod_1 = require("zod");
const statementsModels_1 = require("./statementsModels");
var ResultsBy;
(function (ResultsBy) {
    ResultsBy["topOne"] = "topOne";
    ResultsBy["consensusLevel"] = "consensus-level";
    ResultsBy["topVote"] = "topVote";
    ResultsBy["topOption"] = "topOption";
    ResultsBy["checkedBy"] = "checkedBy";
    ResultsBy["privateCheck"] = "privateCheck";
})(ResultsBy || (exports.ResultsBy = ResultsBy = {}));
exports.ResultsBySchema = zod_1.z.enum([ResultsBy.topOne, ResultsBy.consensusLevel, ResultsBy.topVote, ResultsBy.topOption, ResultsBy.checkedBy, ResultsBy.privateCheck]);
//create a zod schema for result with infinte subResults of resutls
// var _resultsSchema:any = z.object({
//     statementId: z.string(),
//     results: z.array(StatementSchema),
//     subResults: z.array(_resultsSchema).optional(),
// });
// export const ResultsSchema = _resultsSchema;
const resultsSchema = zod_1.z.object({
    statement: statementsModels_1.StatementSchema,
    results: zod_1.z.array(statementsModels_1.StatementSchema),
});
