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
    parentId: z.ZodString;
    stageId: z.ZodString;
    title: z.ZodOptional<z.ZodString>;
    description: z.ZodOptional<z.ZodString>;
    order: z.ZodNumber;
    method: z.ZodEnum<z.Writeable<any>>;
}, "strip", z.ZodTypeAny, {
    order: number;
    parentId: string;
    stageId: string;
    title?: string | undefined;
    description?: string | undefined;
    method?: any;
}, {
    order: number;
    parentId: string;
    stageId: string;
    title?: string | undefined;
    description?: string | undefined;
    method?: any;
}>;
export type Stage = z.infer<typeof StageSchema>;
