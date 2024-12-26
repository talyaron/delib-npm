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
export declare enum fieldType {
    text = "text",
    number = "number",
    phone = "phone",
    email = "email",
    password = "password",
    date = "date",
    time = "time",
    dateTime = "dateTime"
}
export declare const fieldTypeSchema: z.ZodEnum<[fieldType.text, fieldType.number, fieldType.phone, fieldType.email, fieldType.password, fieldType.date, fieldType.time, fieldType.dateTime]>;
export declare const fieldMandatoryNameSchema: z.ZodEnum<[fieldMandatoryName.displayName, fieldMandatoryName.imageURL]>;
export declare const SegmentationSchama: z.ZodObject<{
    statementId: z.ZodString;
    title: z.ZodString;
    fieldMandatoryName: z.ZodUnion<[z.ZodOptional<z.ZodEnum<[fieldMandatoryName.displayName, fieldMandatoryName.imageURL]>>, z.ZodOptional<z.ZodString>]>;
    order: z.ZodNumber;
    type: z.ZodEnum<[SegmentationType.number, SegmentationType.string, SegmentationType.boolean, SegmentationType.date, SegmentationType.array, SegmentationType.object, SegmentationType.geoPoint, SegmentationType.reference]>;
    filedType: z.ZodOptional<z.ZodEnum<[fieldType.text, fieldType.number, fieldType.phone, fieldType.email, fieldType.password, fieldType.date, fieldType.time, fieldType.dateTime]>>;
    isRequired: z.ZodOptional<z.ZodBoolean>;
    arrayType: z.ZodOptional<z.ZodEnum<[SegmentationType.number, SegmentationType.string, SegmentationType.boolean, SegmentationType.date, SegmentationType.array, SegmentationType.object, SegmentationType.geoPoint, SegmentationType.reference]>>;
    array: z.ZodOptional<z.ZodArray<z.ZodAny, "many">>;
}, "strip", z.ZodTypeAny, {
    type: SegmentationType;
    order: number;
    title: string;
    statementId: string;
    array?: any[] | undefined;
    fieldMandatoryName?: string | undefined;
    filedType?: fieldType | undefined;
    isRequired?: boolean | undefined;
    arrayType?: SegmentationType | undefined;
}, {
    type: SegmentationType;
    order: number;
    title: string;
    statementId: string;
    array?: any[] | undefined;
    fieldMandatoryName?: string | undefined;
    filedType?: fieldType | undefined;
    isRequired?: boolean | undefined;
    arrayType?: SegmentationType | undefined;
}>;
export type Segmentation = z.infer<typeof SegmentationSchama>;
