"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChoseBySchema = exports.ChoseByEvaluationType = exports.CutoffType = void 0;
exports.defaultChoseBySettings = defaultChoseBySettings;
const valibot_1 = require("valibot");
var CutoffType;
(function (CutoffType) {
    CutoffType["topOptions"] = "topOptions";
    CutoffType["cutoffValue"] = "cutoffValue";
})(CutoffType || (exports.CutoffType = CutoffType = {}));
var ChoseByEvaluationType;
(function (ChoseByEvaluationType) {
    ChoseByEvaluationType["consensus"] = "consensus";
    ChoseByEvaluationType["likes"] = "likes";
    ChoseByEvaluationType["likesDislikes"] = "likesDislikes";
})(ChoseByEvaluationType || (exports.ChoseByEvaluationType = ChoseByEvaluationType = {}));
exports.ChoseBySchema = (0, valibot_1.object)({
    statementId: (0, valibot_1.string)(),
    cutoffType: (0, valibot_1.enum_)(CutoffType),
    choseByEvaluationType: (0, valibot_1.enum_)(ChoseByEvaluationType),
    number: (0, valibot_1.number)(),
});
function defaultChoseBySettings(statementId) {
    return {
        number: 1,
        cutoffType: CutoffType.topOptions,
        choseByEvaluationType: ChoseByEvaluationType.consensus,
        statementId,
    };
}
