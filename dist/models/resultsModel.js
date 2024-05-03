"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResultsType = exports.ResultsBySchema = exports.ResultsBy = void 0;
const zod_1 = require("zod");
const statementsModels_1 = require("./statementsModels");
var ResultsBy;
(function (ResultsBy) {
    ResultsBy["consensusLevel"] = "consensus-level";
    ResultsBy["topOptions"] = "topOptions";
    ResultsBy["checkedBy"] = "checkedBy";
    ResultsBy["privateCheck"] = "privateCheck";
})(ResultsBy || (exports.ResultsBy = ResultsBy = {}));
exports.ResultsBySchema = zod_1.z.enum([ResultsBy.consensusLevel, ResultsBy.topOptions, ResultsBy.checkedBy, ResultsBy.privateCheck]);
const resultsSchema = zod_1.z.object({
    statement: statementsModels_1.StatementSchema,
    results: zod_1.z.array(statementsModels_1.StatementSchema),
});
var ResultsType;
(function (ResultsType) {
    ResultsType["normal"] = "normal";
    ResultsType["full"] = "full";
})(ResultsType || (exports.ResultsType = ResultsType = {}));
