"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SegmentationSchama = exports.SegmentationType = void 0;
const zod_1 = require("zod");
exports.SegmentationType = zod_1.z.enum(["number", "string", "boolean", "date", "array", "object", 'geoPoint', 'reference']);
// used to segmentalize the data in the database
exports.SegmentationSchama = zod_1.z.object({
    statementId: zod_1.z.string(),
    title: zod_1.z.string(),
    type: exports.SegmentationType,
    isRequired: zod_1.z.boolean().optional(),
    arrayType: exports.SegmentationType.optional(),
});
