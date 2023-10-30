"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResultsBySchema = exports.ResultsBy = void 0;
const zod_1 = require("zod");
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
