"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SortTypeSchema = exports.SortType = void 0;
const zod_1 = require("zod");
var SortType;
(function (SortType) {
    SortType["newest"] = "newest";
    SortType["mostUpdated"] = "mostUpdated";
    SortType["random"] = "random";
    SortType["accepted"] = "accepted";
})(SortType || (exports.SortType = SortType = {}));
exports.SortTypeSchema = zod_1.z.enum(Object.values(SortType));
