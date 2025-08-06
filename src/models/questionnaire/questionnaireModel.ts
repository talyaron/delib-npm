import { array, object, enum_, string, optional, description, InferOutput, number, record } from "valibot";
import { StatementSchema } from "../statement/StatementTypes";
import { QuestionType } from "../TypeEnums";
import { EvaluationUI } from "../evaluation/Evaluation";
import { CutoffBy } from "../results/Results";

export const QuestionnaireQuestionSchema = object({
    statementId: string(), // unique identifier for the statement that the question uses to store data
    questionType: enum_(QuestionType),
    evaluationUI: enum_(EvaluationUI),
    cutoffBy: enum_(CutoffBy),
    number: optional(number()), // optional number to cut off by
    question: optional(string()), // optional question text
    description: optional(string()), // optional description of the question
    image: optional(string()), // optional image URL for the question
    questionnaireQuestionId: string(), // unique identifier for the questionnaire question
    order: number(), // order of the question in the questionnaire
}); 

export type QuestionnaireQuestion = InferOutput<typeof QuestionnaireQuestionSchema>;

export const QuestionnaireSchema = object({
    question: string(), // the main question of the questionnaire
    description: optional(string()), // optional description of the questionnaire
    image: optional(string()), // optional image URL for the questionnaire
    createdAt: optional(number()), // timestamp of when the questionnaire was created
    updatedAt: optional(number()), // timestamp of the last update to the questionnaire
    questions: record(string(), QuestionnaireQuestionSchema), // map of questionnaireQuestionId -> QuestionnaireQuestion
});

export type Questionnaire = InferOutput<typeof QuestionnaireSchema>;