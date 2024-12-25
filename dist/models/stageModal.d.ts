import { z } from 'zod';
export declare enum StageType {
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
export declare const StageTypeSchema: z.ZodEnum<[StageType.explanation, StageType.questions, StageType.needs, StageType.suggestions, StageType.voting, StageType.summary, StageType.conclusion, StageType.hypothesis, StageType.other]>;
