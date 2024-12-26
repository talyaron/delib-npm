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
export declare enum FieldMandatoryName {
    displayName = "displayName",
    imageURL = "imageURL"
}
export declare enum FieldType {
    text = "text",
    number = "number",
    tel = "tel",
    email = "email",
    password = "password",
    date = "date",
    time = "time",
    datetime = "datetime-local",
    search = "search",
    url = "url",
    file = "file",
    image = "image",
    color = "color",
    checkbox = "checkbox",
    radio = "radio",
    range = "range",
    hidden = "hidden",
    submit = "submit",
    reset = "reset",
    button = "button",
    week = "week",
    month = "month"
}
export declare const FieldTypeSchema: z.ZodEnum<[string, ...string[]]>;
export declare const FieldMandatoryNameSchema: z.ZodEnum<[FieldMandatoryName.displayName, FieldMandatoryName.imageURL]>;
export declare const SegmentationSchama: z.ZodObject<{
    statementId: z.ZodString;
    title: z.ZodString;
    fieldMandatoryName: z.ZodUnion<[z.ZodOptional<z.ZodEnum<[FieldMandatoryName.displayName, FieldMandatoryName.imageURL]>>, z.ZodOptional<z.ZodString>]>;
    order: z.ZodNumber;
    type: z.ZodEnum<[SegmentationType.number, SegmentationType.string, SegmentationType.boolean, SegmentationType.date, SegmentationType.array, SegmentationType.object, SegmentationType.geoPoint, SegmentationType.reference]>;
    filedType: z.ZodOptional<z.ZodEnum<[string, ...string[]]>>;
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
    filedType?: string | undefined;
    isRequired?: boolean | undefined;
    arrayType?: SegmentationType | undefined;
}, {
    type: SegmentationType;
    order: number;
    title: string;
    statementId: string;
    array?: any[] | undefined;
    fieldMandatoryName?: string | undefined;
    filedType?: string | undefined;
    isRequired?: boolean | undefined;
    arrayType?: SegmentationType | undefined;
}>;
export type Segmentation = z.infer<typeof SegmentationSchama>;
