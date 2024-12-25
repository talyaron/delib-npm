import { z } from "zod";
export var SegmentationType;
(function (SegmentationType) {
    SegmentationType["number"] = "number";
    SegmentationType["string"] = "string";
    SegmentationType["boolean"] = "boolean";
    SegmentationType["date"] = "date";
    SegmentationType["array"] = "array";
    SegmentationType["object"] = "object";
    SegmentationType["geoPoint"] = "geoPoint";
    SegmentationType["reference"] = "reference";
})(SegmentationType || (SegmentationType = {}));
export const SegmentationTypeSchema = z.enum([SegmentationType.number, SegmentationType.string, SegmentationType.boolean, SegmentationType.date, SegmentationType.array, SegmentationType.object, SegmentationType.geoPoint, SegmentationType.reference]);
export var fieldMandatoryName;
(function (fieldMandatoryName) {
    fieldMandatoryName["displayName"] = "displayName";
    fieldMandatoryName["imageURL"] = "imageURL";
})(fieldMandatoryName || (fieldMandatoryName = {}));
export const fieldMandatoryNameSchema = z.enum([fieldMandatoryName.displayName, fieldMandatoryName.imageURL]);
// used to segmentalize the data in the database
export const SegmentationSchama = z.object({
    statementId: z.string(),
    title: z.string(),
    fieldMandatoryName: fieldMandatoryNameSchema.optional(),
    order: z.number(),
    type: SegmentationTypeSchema,
    isRequired: z.boolean().optional(),
    arrayType: SegmentationTypeSchema.optional(),
    array: z.array(z.any()).optional(),
});
//# sourceMappingURL=segmentationModel.js.map