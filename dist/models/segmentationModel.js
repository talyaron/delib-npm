"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SegmentationSchama = exports.fieldMandatoryNameSchema = exports.fieldTypeSchema = exports.fieldType = exports.fieldMandatoryName = exports.SegmentationTypeSchema = exports.SegmentationType = void 0;
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
var fieldType;
(function (fieldType) {
    fieldType["text"] = "text";
    fieldType["number"] = "number";
    fieldType["phone"] = "phone";
    fieldType["email"] = "email";
    fieldType["password"] = "password";
    fieldType["date"] = "date";
    fieldType["time"] = "time";
    fieldType["dateTime"] = "dateTime";
})(fieldType || (exports.fieldType = fieldType = {}));
exports.fieldTypeSchema = zod_1.z.enum([fieldType.text, fieldType.number, fieldType.phone, fieldType.email, fieldType.password, fieldType.date, fieldType.time, fieldType.dateTime]);
exports.fieldMandatoryNameSchema = zod_1.z.enum([fieldMandatoryName.displayName, fieldMandatoryName.imageURL]);
// used to segmentalize the data in the database
exports.SegmentationSchama = zod_1.z.object({
    statementId: zod_1.z.string(),
    title: zod_1.z.string(),
    fieldMandatoryName: exports.fieldMandatoryNameSchema.optional().or(zod_1.z.string().optional()),
    order: zod_1.z.number(),
    type: exports.SegmentationTypeSchema,
    filedType: exports.fieldTypeSchema.optional(),
    isRequired: zod_1.z.boolean().optional(),
    arrayType: exports.SegmentationTypeSchema.optional(),
    array: zod_1.z.array(zod_1.z.any()).optional(),
});
