import { z } from 'zod';
export declare enum Method {
    description = "description",
    questions = "questions",
    needs = "needs",
    suggestions = "suggestions",
    voting = "voting",
    summary = "summary"
}
export declare const MethodSchema: z.ZodEnum<[Method.description, Method.questions, Method.needs, Method.suggestions, Method.voting, Method.summary]>;
export declare const StageSchema: z.ZodObject<{
    statementId: z.ZodString;
    stageId: z.ZodString;
    shortId: z.ZodNumber;
    image: z.ZodOptional<z.ZodAny>;
    title: z.ZodOptional<z.ZodString>;
    description: z.ZodOptional<z.ZodString>;
    order: z.ZodNumber;
    method: z.ZodEnum<[Method.description, Method.questions, Method.needs, Method.suggestions, Method.voting, Method.summary]>;
    enabled: z.ZodOptional<z.ZodBoolean>;
}, "strip", z.ZodTypeAny, {
    statementId: string;
    order: number;
    stageId: string;
    shortId: number;
    method: Method;
    description?: string | undefined;
    title?: string | undefined;
    image?: any;
    enabled?: boolean | undefined;
}, {
    statementId: string;
    order: number;
    stageId: string;
    shortId: number;
    method: Method;
    description?: string | undefined;
    title?: string | undefined;
    image?: any;
    enabled?: boolean | undefined;
}>;
export type Stage = z.infer<typeof StageSchema>;