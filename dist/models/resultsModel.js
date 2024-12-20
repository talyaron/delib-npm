"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResultsType = exports.ResultsBySchema = exports.ResultsBy = void 0;
const zod_1 = require("zod");
const statementsModels_1 = require("./statementsModels");
/** used by evaluation subScreen */
var ResultsBy;
(function (ResultsBy) {
    /** all options above a specific consensus level will be approved */
    ResultsBy["consensusLevel"] = "consensus-level";
    /** X top options will be approved */
    ResultsBy["topOptions"] = "topOptions";
    /** options that were checked by X percentage of users will be approved */
    ResultsBy["checkedBy"] = "checkedBy";
    /** options that were checked by a specific user will be approved for user */
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
//# sourceMappingURL=resultsModel.js.map