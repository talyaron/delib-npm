"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StageTypeSchema = exports.StageType = void 0;
const zod_1 = require("zod");
//The types of deliberative processes that a stage can take
var StageType;
(function (StageType) {
    StageType["explanation"] = "explanation";
    StageType["questions"] = "questions";
    StageType["needs"] = "needs";
    StageType["suggestions"] = "suggestions";
    StageType["hypothesis"] = "hypothesis";
    StageType["voting"] = "voting";
    StageType["conclusion"] = "conclusion";
    StageType["summary"] = "summary";
    StageType["other"] = "other";
})(StageType || (exports.StageType = StageType = {}));
exports.StageTypeSchema = zod_1.z.enum([StageType.explanation, StageType.questions, StageType.needs, StageType.suggestions, StageType.voting, StageType.summary, StageType.conclusion, StageType.hypothesis, StageType.other]);
