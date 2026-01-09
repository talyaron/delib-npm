"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ParagraphSchema = void 0;
const TypeEnums_1 = require("../TypeEnums");
const v = require("valibot");
exports.ParagraphSchema = v.object({
    paragraphId: v.string(),
    type: v.enum(TypeEnums_1.ParagraphType),
    content: v.string(),
    order: v.number(),
    listType: v.optional(v.union([v.literal('ul'), v.literal('ol')]))
});
