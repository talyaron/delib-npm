import { z } from "zod";
export declare enum SegmentationType {
    number = "number",
    string = "string",
    boolean = "boolean",
    date = "date",
    array = "array",
    object = "object",
    geoPoint = "geoPoint",
    reference = "reference"
}
export declare const SegmentationTypeSchema: z.ZodEnum<[SegmentationType.number, SegmentationType.string, SegmentationType.boolean, SegmentationType.date, SegmentationType.array, SegmentationType.object, SegmentationType.geoPoint, SegmentationType.reference]>;
export declare const SegmentationSchama: z.ZodObject<{
    statementId: z.ZodString;
    title: z.ZodString;
    type: z.ZodEnum<[SegmentationType.number, SegmentationType.string, SegmentationType.boolean, SegmentationType.date, SegmentationType.array, SegmentationType.object, SegmentationType.geoPoint, SegmentationType.reference]>;
    isRequired: z.ZodOptional<z.ZodBoolean>;
    arrayType: z.ZodOptional<z.ZodEnum<[SegmentationType.number, SegmentationType.string, SegmentationType.boolean, SegmentationType.date, SegmentationType.array, SegmentationType.object, SegmentationType.geoPoint, SegmentationType.reference]>>;
}, "strip", z.ZodTypeAny, {
    type: SegmentationType;
    title: string;
    statementId: string;
    isRequired?: boolean | undefined;
    arrayType?: SegmentationType | undefined;
}, {
    type: SegmentationType;
    title: string;
    statementId: string;
    isRequired?: boolean | undefined;
    arrayType?: SegmentationType | undefined;
}>;
export type Segmentation = z.infer<typeof SegmentationSchama>;
