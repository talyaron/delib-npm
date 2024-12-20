import { z } from 'zod';
export declare const EvaluationSchema: z.ZodObject<{
    parentId: z.ZodString;
    evaluationId: z.ZodString;
    statementId: z.ZodString;
    evaluatorId: z.ZodString;
    updatedAt: z.ZodNumber;
    evaluation: z.ZodNumber;
    evaluator: z.ZodOptional<z.ZodObject<{
        displayName: z.ZodString;
        defaultLanguage: z.ZodOptional<z.ZodString>;
        email: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        photoURL: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        uid: z.ZodString;
        isAnonymous: z.ZodOptional<z.ZodBoolean>;
        fontSize: z.ZodNullable<z.ZodOptional<z.ZodNumber>>;
        color: z.ZodOptional<z.ZodString>;
        agreement: z.ZodNullable<z.ZodOptional<z.ZodObject<{
            text: z.ZodString;
            date: z.ZodNumber;
            version: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            text: string;
            date: number;
            version: string;
        }, {
            text: string;
            date: number;
            version: string;
        }>>>;
        role: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        displayName: string;
        uid: string;
        defaultLanguage?: string | undefined;
        email?: string | null | undefined;
        photoURL?: string | null | undefined;
        isAnonymous?: boolean | undefined;
        fontSize?: number | null | undefined;
        color?: string | undefined;
        agreement?: {
            text: string;
            date: number;
            version: string;
        } | null | undefined;
        role?: string | undefined;
    }, {
        displayName: string;
        uid: string;
        defaultLanguage?: string | undefined;
        email?: string | null | undefined;
        photoURL?: string | null | undefined;
        isAnonymous?: boolean | undefined;
        fontSize?: number | null | undefined;
        color?: string | undefined;
        agreement?: {
            text: string;
            date: number;
            version: string;
        } | null | undefined;
        role?: string | undefined;
    }>>;
}, "strip", z.ZodTypeAny, {
    evaluation: number;
    statementId: string;
    parentId: string;
    evaluationId: string;
    evaluatorId: string;
    updatedAt: number;
    evaluator?: {
        displayName: string;
        uid: string;
        defaultLanguage?: string | undefined;
        email?: string | null | undefined;
        photoURL?: string | null | undefined;
        isAnonymous?: boolean | undefined;
        fontSize?: number | null | undefined;
        color?: string | undefined;
        agreement?: {
            text: string;
            date: number;
            version: string;
        } | null | undefined;
        role?: string | undefined;
    } | undefined;
}, {
    evaluation: number;
    statementId: string;
    parentId: string;
    evaluationId: string;
    evaluatorId: string;
    updatedAt: number;
    evaluator?: {
        displayName: string;
        uid: string;
        defaultLanguage?: string | undefined;
        email?: string | null | undefined;
        photoURL?: string | null | undefined;
        isAnonymous?: boolean | undefined;
        fontSize?: number | null | undefined;
        color?: string | undefined;
        agreement?: {
            text: string;
            date: number;
            version: string;
        } | null | undefined;
        role?: string | undefined;
    } | undefined;
}>;
export type Evaluation = z.infer<typeof EvaluationSchema>;
export declare const EvaluatorSchema: z.ZodObject<{
    evaluatorId: z.ZodOptional<z.ZodString>;
    statementId: z.ZodOptional<z.ZodString>;
    evaluated: z.ZodOptional<z.ZodBoolean>;
    suggested: z.ZodOptional<z.ZodBoolean>;
    firstEvaluation: z.ZodOptional<z.ZodBoolean>;
    secondEvaluation: z.ZodOptional<z.ZodBoolean>;
    voted: z.ZodOptional<z.ZodBoolean>;
}, "strip", z.ZodTypeAny, {
    statementId?: string | undefined;
    voted?: boolean | undefined;
    firstEvaluation?: boolean | undefined;
    secondEvaluation?: boolean | undefined;
    evaluatorId?: string | undefined;
    evaluated?: boolean | undefined;
    suggested?: boolean | undefined;
}, {
    statementId?: string | undefined;
    voted?: boolean | undefined;
    firstEvaluation?: boolean | undefined;
    secondEvaluation?: boolean | undefined;
    evaluatorId?: string | undefined;
    evaluated?: boolean | undefined;
    suggested?: boolean | undefined;
}>;
export type Evaluator = z.infer<typeof EvaluatorSchema>;
