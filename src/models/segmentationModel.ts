import {array, z} from "zod";

export const SegmentationType = z.enum(["number", "string", "boolean", "date", "array", "object", 'geoPoint', 'reference']);

// used to segmentalize the data in the database
export const SegmentationSchama = z.object({
    statementId: z.string(),
    title: z.string(),
    type: SegmentationType,
    isRequired: z.boolean().optional(),
    arrayType: SegmentationType.optional(),
});

export type Segmentation = z.infer<typeof SegmentationSchama>;