import { z } from 'zod';
export declare enum Method {
    suggestions = "suggestions",
    voting = "voting",
    discussion = "discussion",
    explanation = "explanation",
    result = "result",
    summary = "summary",
    consultation = "consultation",
    clustering = "clustering"
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
}, "strip", z.ZodTypeAny, {
    order: number;
    statementId: string;
    stageId: string;
    shortId: number;
    image?: any;
    title?: string | undefined;
    description?: string | undefined;
    method?: any;
}, {
    order: number;
    statementId: string;
    stageId: string;
    shortId: number;
    image?: any;
    title?: string | undefined;
    description?: string | undefined;
    method?: any;
}>;
export type Stage = z.infer<typeof StageSchema>;
