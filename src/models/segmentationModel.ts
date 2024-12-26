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

export enum fieldMandatoryName{
    displayName = "displayName",
    imageURL = "imageURL",
}

export enum fieldType{
    text = "text",
    number = "number",
    phone = "phone",
    email = "email",
    password = "password",
    date = "date",
    time = "time",
    dateTime = "dateTime",
}

export const fieldTypeSchema = z.enum([fieldType.text, fieldType.number, fieldType.phone, fieldType.email, fieldType.password, fieldType.date, fieldType.time, fieldType.dateTime]);

export const fieldMandatoryNameSchema = z.enum([fieldMandatoryName.displayName, fieldMandatoryName.imageURL]);

// used to segmentalize the data in the database
export const SegmentationSchama = z.object({
    statementId: z.string(),
    title: z.string(),
    fieldMandatoryName: fieldMandatoryNameSchema.optional().or(z.string().optional()),
    order: z.number(),
    type: SegmentationTypeSchema,
    filedType:fieldTypeSchema.optional(),
    isRequired: z.boolean().optional(),
    arrayType: SegmentationTypeSchema.optional(),
    array: z.array(z.any()).optional(),
});

export type Segmentation = z.infer<typeof SegmentationSchama>;