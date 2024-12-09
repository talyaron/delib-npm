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
export declare enum fieldMandatoryName {
    displayName = "displayName",
    imageURL = "imageURL"
}
export declare const fieldMandatoryNameSchema: z.ZodEnum<[fieldMandatoryName.displayName, fieldMandatoryName.imageURL]>;
export declare const SegmentationSchama: z.ZodObject<{
    statementId: z.ZodString;
    title: z.ZodString;
    fieldMandatoryName: z.ZodOptional<z.ZodEnum<[fieldMandatoryName.displayName, fieldMandatoryName.imageURL]>>;
    order: z.ZodNumber;
    type: z.ZodEnum<[SegmentationType.number, SegmentationType.string, SegmentationType.boolean, SegmentationType.date, SegmentationType.array, SegmentationType.object, SegmentationType.geoPoint, SegmentationType.reference]>;
    isRequired: z.ZodOptional<z.ZodBoolean>;
    arrayType: z.ZodOptional<z.ZodEnum<[SegmentationType.number, SegmentationType.string, SegmentationType.boolean, SegmentationType.date, SegmentationType.array, SegmentationType.object, SegmentationType.geoPoint, SegmentationType.reference]>>;
    array: z.ZodOptional<z.ZodArray<z.ZodAny, "many">>;
}, "strip", z.ZodTypeAny, {
    type: SegmentationType;
    order: number;
    title: string;
    statementId: string;
    fieldMandatoryName?: fieldMandatoryName | undefined;
    isRequired?: boolean | undefined;
    arrayType?: SegmentationType | undefined;
    array?: any[] | undefined;
}, {
    type: SegmentationType;
    order: number;
    title: string;
    statementId: string;
    fieldMandatoryName?: fieldMandatoryName | undefined;
    isRequired?: boolean | undefined;
    arrayType?: SegmentationType | undefined;
    array?: any[] | undefined;
}>;
export type Segmentation = z.infer<typeof SegmentationSchama>;
