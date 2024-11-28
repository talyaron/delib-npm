import { z } from 'zod';
export declare enum Method {
    description = "description",
    questions = "questions",
    needs = "needs",
    suggestions = "suggestions",
    voting = "voting",
    summary = "summary"
}
export declare const MethodSchema: z.ZodEnum<z.Writeable<any>>;
export declare const StageSchema: z.ZodObject<{
    statementId: z.ZodString;
    stageId: z.ZodString;
    shortId: z.ZodNumber;
    image: z.ZodOptional<z.ZodAny>;
    title: z.ZodOptional<z.ZodString>;
    description: z.ZodOptional<z.ZodString>;
    order: z.ZodNumber;
    method: z.ZodEnum<z.Writeable<any>>;
    enabled: z.ZodOptional<z.ZodBoolean>;
}, "strip", z.ZodTypeAny, {
    order: number;
    statementId: string;
    stageId: string;
    shortId: number;
    image?: any;
    title?: string | undefined;
    description?: string | undefined;
    method?: any;
    enabled?: boolean | undefined;
}, {
    order: number;
    statementId: string;
    stageId: string;
    shortId: number;
    image?: any;
    title?: string | undefined;
    description?: string | undefined;
    method?: any;
    enabled?: boolean | undefined;
}>;
export type Stage = z.infer<typeof StageSchema>;
