"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResultsSettingsSchema = exports.ResultsBy = void 0;
const valibot_1 = require("valibot");
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
exports.ResultsSettingsSchema = (0, valibot_1.object)({
    resultsBy: (0, valibot_1.enum_)(ResultsBy),
    cutoffNumber: (0, valibot_1.optional)((0, valibot_1.number)()),
    numberOfResults: (0, valibot_1.optional)((0, valibot_1.number)()),
    numberOfSelections: (0, valibot_1.optional)((0, valibot_1.number)()),
    deep: (0, valibot_1.optional)((0, valibot_1.number)()),
    minConsensus: (0, valibot_1.optional)((0, valibot_1.number)()),
});
