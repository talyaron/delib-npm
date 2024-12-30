"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChoseBySchema = exports.ChoseByEvaluationTypeSchema = exports.ChoseByEvaluationType = exports.CutoffTypeSchema = exports.CutoffType = void 0;
const zod_1 = require("zod");
var CutoffType;
(function (CutoffType) {
    CutoffType["topOptions"] = "topOptions";
    CutoffType["cutoffValue"] = "cutoffValue";
})(CutoffType || (exports.CutoffType = CutoffType = {}));
exports.CutoffTypeSchema = zod_1.z.enum([CutoffType.topOptions, CutoffType.cutoffValue]);
var ChoseByEvaluationType;
(function (ChoseByEvaluationType) {
    ChoseByEvaluationType["consensus"] = "consensus";
    ChoseByEvaluationType["likes"] = "likes";
    ChoseByEvaluationType["likesDislikes"] = "likesDislikes";
})(ChoseByEvaluationType || (exports.ChoseByEvaluationType = ChoseByEvaluationType = {}));
exports.ChoseByEvaluationTypeSchema = zod_1.z.enum([ChoseByEvaluationType.consensus, ChoseByEvaluationType.likes, ChoseByEvaluationType.likesDislikes]);
exports.ChoseBySchema = zod_1.z.object({
    statementId: zod_1.z.string(),
    CutoffType: exports.CutoffTypeSchema,
    choseByEvaluationType: exports.ChoseByEvaluationTypeSchema,
    number: zod_1.z.number()
});
