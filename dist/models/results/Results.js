"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.defaultResultsSettings = exports.ResultsSettingsSchema = exports.CutoffBy = exports.ResultsBy = void 0;
const valibot_1 = require("valibot");
var ResultsBy;
(function (ResultsBy) {
    ResultsBy["consensus"] = "consensus";
    ResultsBy["mostLiked"] = "mostLiked";
    ResultsBy["averageLikesDislikes"] = "averageLikesDislikes";
    ResultsBy["topOptions"] = "topOptions";
})(ResultsBy || (exports.ResultsBy = ResultsBy = {}));
var CutoffBy;
(function (CutoffBy) {
    CutoffBy["topOptions"] = "topOptions";
    CutoffBy["aboveThreshold"] = "aboveThreshold";
})(CutoffBy || (exports.CutoffBy = CutoffBy = {}));
exports.ResultsSettingsSchema = (0, valibot_1.object)({
    resultsBy: (0, valibot_1.enum_)(ResultsBy),
    cutoffNumber: (0, valibot_1.optional)((0, valibot_1.number)()),
    cutoffBy: (0, valibot_1.optional)((0, valibot_1.enum_)(CutoffBy)),
    numberOfResults: (0, valibot_1.optional)((0, valibot_1.number)()),
    numberOfSelections: (0, valibot_1.optional)((0, valibot_1.number)()),
    deep: (0, valibot_1.optional)((0, valibot_1.number)()),
    minConsensus: (0, valibot_1.optional)((0, valibot_1.number)()),
});
exports.defaultResultsSettings = {
    resultsBy: ResultsBy.consensus,
    cutoffNumber: 0,
    cutoffBy: CutoffBy.topOptions,
    numberOfResults: 5,
    numberOfSelections: 1,
    deep: 2,
    minConsensus: 0.5,
};
