import { z } from 'zod';

//The types of deliberative processes that a stage can take
export enum StageType {
    explanation = 'explanation',
    questions = 'questions',   
    needs = 'needs',
    suggestions = 'suggestions',
    hypothesis = 'hypothesis',
    voting = 'voting', 
    conclusion = 'conclusion',
    summary = 'summary',
    other = 'other',
}

export const StageTypeSchema = z.enum([StageType.explanation, StageType.questions, StageType.needs, StageType.suggestions, StageType.voting, StageType.summary, StageType.conclusion, StageType.hypothesis, StageType.other]);

