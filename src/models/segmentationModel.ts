import {array, z} from "zod";

export enum SegmentationType {
    number = "number",
    string = "string",
    boolean = "boolean",
    date = "date",
    array = "array",
    object = "object",
    geoPoint = "geoPoint",
    reference = "reference",
}

export const SegmentationTypeSchema = z.enum([SegmentationType.number, SegmentationType.string, SegmentationType.boolean, SegmentationType.date, SegmentationType.array, SegmentationType.object, SegmentationType.geoPoint, SegmentationType.reference]);

export enum fieldMandatoryName{
    displayName = "displayName",
    imageURL = "imageURL",
}

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

export type Segmentation = z.infer<typeof SegmentationSchama>;