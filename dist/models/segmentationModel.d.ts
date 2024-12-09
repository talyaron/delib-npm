import { z } from "zod";
export declare const SegmentationType: z.ZodEnum<["number", "string", "boolean", "date", "array", "object", "geoPoint", "reference"]>;
export declare const SegmentationSchama: z.ZodObject<{
    statementId: z.ZodString;
    title: z.ZodString;
    type: z.ZodEnum<["number", "string", "boolean", "date", "array", "object", "geoPoint", "reference"]>;
    isRequired: z.ZodOptional<z.ZodBoolean>;
    arrayType: z.ZodOptional<z.ZodEnum<["number", "string", "boolean", "date", "array", "object", "geoPoint", "reference"]>>;
}, "strip", z.ZodTypeAny, {
    type: "string" | "number" | "boolean" | "object" | "date" | "array" | "geoPoint" | "reference";
    title: string;
    statementId: string;
    isRequired?: boolean | undefined;
    arrayType?: "string" | "number" | "boolean" | "object" | "date" | "array" | "geoPoint" | "reference" | undefined;
}, {
    type: "string" | "number" | "boolean" | "object" | "date" | "array" | "geoPoint" | "reference";
    title: string;
    statementId: string;
    isRequired?: boolean | undefined;
    arrayType?: "string" | "number" | "boolean" | "object" | "date" | "array" | "geoPoint" | "reference" | undefined;
}>;
export type Segmentation = z.infer<typeof SegmentationSchama>;
