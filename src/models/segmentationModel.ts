import { z} from "zod";

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

export enum FieldMandatoryName{
    displayName = "displayName",
    imageURL = "imageURL",
}

export enum FieldType {
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

export const FieldTypeSchema = z.enum(Object.values(FieldType) as [string, ...string[]]);

export const FieldMandatoryNameSchema = z.enum([FieldMandatoryName.displayName, FieldMandatoryName.imageURL]);

// used to segmentalize the data in the database
export const SegmentationSchama = z.object({
    statementId: z.string(),
    title: z.string(),
    fieldMandatoryName: FieldMandatoryNameSchema.optional().or(z.string().optional()),
    order: z.number(),
    type: SegmentationTypeSchema,
    filedType:FieldTypeSchema.optional(),
    isRequired: z.boolean().optional(),
    arrayType: SegmentationTypeSchema.optional(),
    array: z.array(z.any()).optional(),
});

export type Segmentation = z.infer<typeof SegmentationSchama>;