"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChoseBySchema = exports.choseByEvaluationTypeSchema = exports.choseByEvaluationType = exports.ChoseByTypeSchema = exports.ChoseByType = void 0;
const zod_1 = require("zod");
var ChoseByType;
(function (ChoseByType) {
    ChoseByType["topOptions"] = "topOptions";
    ChoseByType["cutoff"] = "cutoff";
})(ChoseByType || (exports.ChoseByType = ChoseByType = {}));
exports.ChoseByTypeSchema = zod_1.z.enum(Object.values(ChoseByType));
var choseByEvaluationType;
(function (choseByEvaluationType) {
    choseByEvaluationType["consensus"] = "consensus";
    choseByEvaluationType["likes"] = "likes";
    choseByEvaluationType["likesDislikes"] = "likesDislikes";
})(choseByEvaluationType || (exports.choseByEvaluationType = choseByEvaluationType = {}));
exports.choseByEvaluationTypeSchema = zod_1.z.enum(Object.values(choseByEvaluationType));
exports.ChoseBySchema = zod_1.z.object({
    statementId: zod_1.z.string(),
    choseByType: exports.ChoseByTypeSchema,
    choseByEvaluationType: exports.choseByEvaluationTypeSchema,
    number: zod_1.z.number().optional(),
});
