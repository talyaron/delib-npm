"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChoseBySchema = exports.ChoseByEvaluationTypeSchema = exports.ChoseByEvaluationType = exports.ChoseByTypeSchema = exports.ChoseByType = void 0;
const zod_1 = require("zod");
var ChoseByType;
(function (ChoseByType) {
    ChoseByType["topOptions"] = "topOptions";
    ChoseByType["cutoff"] = "cutoff";
})(ChoseByType || (exports.ChoseByType = ChoseByType = {}));
exports.ChoseByTypeSchema = zod_1.z.enum([ChoseByType.topOptions, ChoseByType.cutoff]);
var ChoseByEvaluationType;
(function (ChoseByEvaluationType) {
    ChoseByEvaluationType["consensus"] = "consensus";
    ChoseByEvaluationType["likes"] = "likes";
    ChoseByEvaluationType["likesDislikes"] = "likesDislikes";
})(ChoseByEvaluationType || (exports.ChoseByEvaluationType = ChoseByEvaluationType = {}));
exports.ChoseByEvaluationTypeSchema = zod_1.z.enum([ChoseByEvaluationType.consensus, ChoseByEvaluationType.likes, ChoseByEvaluationType.likesDislikes]);
exports.ChoseBySchema = zod_1.z.object({
    statementId: zod_1.z.string(),
    choseByType: exports.ChoseByTypeSchema,
    choseByEvaluationType: exports.ChoseByEvaluationTypeSchema,
    number: zod_1.z.number()
});
