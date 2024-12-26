"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SegmentationSchama = exports.FieldMandatoryNameSchema = exports.FieldTypeSchema = exports.FieldType = exports.FieldMandatoryName = exports.SegmentationTypeSchema = exports.SegmentationType = void 0;
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
var FieldMandatoryName;
(function (FieldMandatoryName) {
    FieldMandatoryName["displayName"] = "displayName";
    FieldMandatoryName["imageURL"] = "imageURL";
})(FieldMandatoryName || (exports.FieldMandatoryName = FieldMandatoryName = {}));
var FieldType;
(function (FieldType) {
    FieldType["text"] = "text";
    FieldType["number"] = "number";
    FieldType["tel"] = "tel";
    FieldType["email"] = "email";
    FieldType["password"] = "password";
    FieldType["date"] = "date";
    FieldType["time"] = "time";
    FieldType["datetime"] = "datetime-local";
    FieldType["search"] = "search";
    FieldType["url"] = "url";
    FieldType["file"] = "file";
    FieldType["image"] = "image";
    FieldType["color"] = "color";
    FieldType["checkbox"] = "checkbox";
    FieldType["radio"] = "radio";
    FieldType["range"] = "range";
    FieldType["hidden"] = "hidden";
    FieldType["submit"] = "submit";
    FieldType["reset"] = "reset";
    FieldType["button"] = "button";
    FieldType["week"] = "week";
    FieldType["month"] = "month";
})(FieldType || (exports.FieldType = FieldType = {}));
exports.FieldTypeSchema = zod_1.z.enum(Object.values(FieldType));
exports.FieldMandatoryNameSchema = zod_1.z.enum([FieldMandatoryName.displayName, FieldMandatoryName.imageURL]);
// used to segmentalize the data in the database
exports.SegmentationSchama = zod_1.z.object({
    statementId: zod_1.z.string(),
    title: zod_1.z.string(),
    fieldMandatoryName: exports.FieldMandatoryNameSchema.optional().or(zod_1.z.string().optional()),
    order: zod_1.z.number(),
    type: exports.SegmentationTypeSchema,
    filedType: exports.FieldTypeSchema.optional(),
    isRequired: zod_1.z.boolean().optional(),
    arrayType: exports.SegmentationTypeSchema.optional(),
    array: zod_1.z.array(zod_1.z.any()).optional(),
});
