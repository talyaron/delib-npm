"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChoseBySchema = exports.ChoseByTypeSchema = exports.ChoseByType = void 0;
const zod_1 = require("zod");
var ChoseByType;
(function (ChoseByType) {
    ChoseByType["topOptions"] = "topOptions";
    ChoseByType["cutoff"] = "cutoff";
})(ChoseByType || (exports.ChoseByType = ChoseByType = {}));
exports.ChoseByTypeSchema = zod_1.z.enum(Object.values(ChoseByType));
exports.ChoseBySchema = zod_1.z.object({
    statementId: zod_1.z.string(),
    choseByType: exports.ChoseByTypeSchema,
    number: zod_1.z.number().optional(),
});
