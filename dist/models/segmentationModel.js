"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SegmentationSchama = exports.fieldMandatoryNameSchema = exports.fieldMandatoryName = exports.SegmentationTypeSchema = exports.SegmentationType = void 0;
const zod_1 = require("zod");
var SegmentationType;
(function (SegmentationType) {
    SegmentationType["number"] = "number";
    SegmentationType["string"] = "string";
    SegmentationType["boolean"] = "boolean";
    SegmentationType["date"] = "date";
    SegmentationType["array"] = "array";
    SegmentationType["object"] = "object";
    SegmentationType["geoPoint"] = "geoPoint";
    SegmentationType["reference"] = "reference";
})(SegmentationType || (exports.SegmentationType = SegmentationType = {}));
exports.SegmentationTypeSchema = zod_1.z.enum([SegmentationType.number, SegmentationType.string, SegmentationType.boolean, SegmentationType.date, SegmentationType.array, SegmentationType.object, SegmentationType.geoPoint, SegmentationType.reference]);
var fieldMandatoryName;
(function (fieldMandatoryName) {
    fieldMandatoryName["displayName"] = "displayName";
    fieldMandatoryName["imageURL"] = "imageURL";
})(fieldMandatoryName || (exports.fieldMandatoryName = fieldMandatoryName = {}));
exports.fieldMandatoryNameSchema = zod_1.z.enum([fieldMandatoryName.displayName, fieldMandatoryName.imageURL]);
// used to segmentalize the data in the database
exports.SegmentationSchama = zod_1.z.object({
    statementId: zod_1.z.string(),
    title: zod_1.z.string(),
    fieldMandatoryName: exports.fieldMandatoryNameSchema.optional(),
    order: zod_1.z.number(),
    type: exports.SegmentationTypeSchema,
    isRequired: zod_1.z.boolean().optional(),
    arrayType: exports.SegmentationTypeSchema.optional(),
    array: zod_1.z.array(zod_1.z.any()).optional(),
});
