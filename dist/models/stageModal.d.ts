import { z } from 'zod';
export declare enum Method {
    explanation = "explanation",
    questions = "questions",
    needs = "needs",
    suggestions = "suggestions",
    hypothesis = "hypothesis",
    voting = "voting",
    conclusion = "conclusion",
    summary = "summary",
    other = "other"
}
export declare const MethodSchema: z.ZodEnum<[Method.explanation, Method.questions, Method.needs, Method.suggestions, Method.voting, Method.summary, Method.conclusion, Method.hypothesis, Method.other]>;
export declare const StageSchema: z.ZodObject<{
    statementId: z.ZodString;
    stageId: z.ZodString;
    shortId: z.ZodNumber;
    image: z.ZodOptional<z.ZodAny>;
    title: z.ZodOptional<z.ZodString>;
    description: z.ZodOptional<z.ZodString>;
    order: z.ZodNumber;
    method: z.ZodEnum<[Method.explanation, Method.questions, Method.needs, Method.suggestions, Method.voting, Method.summary, Method.conclusion, Method.hypothesis, Method.other]>;
    enabled: z.ZodOptional<z.ZodBoolean>;
}, "strip", z.ZodTypeAny, {
    order: number;
    method: Method;
    statementId: string;
    stageId: string;
    shortId: number;
    title?: string | undefined;
    image?: any;
    description?: string | undefined;
    enabled?: boolean | undefined;
}, {
    order: number;
    method: Method;
    statementId: string;
    stageId: string;
    shortId: number;
    title?: string | undefined;
    image?: any;
    description?: string | undefined;
    enabled?: boolean | undefined;
}>;
export type Stage = z.infer<typeof StageSchema>;
