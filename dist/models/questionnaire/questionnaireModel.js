"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuestionnaireSchema = exports.QuestionnaireQuestionSchema = void 0;
const valibot_1 = require("valibot");
const TypeEnums_1 = require("../TypeEnums");
const Evaluation_1 = require("../evaluation/Evaluation");
const Results_1 = require("../results/Results");
exports.QuestionnaireQuestionSchema = (0, valibot_1.object)({
    statementId: (0, valibot_1.string)(), // unique identifier for the statement that the question uses to store data
    questionType: (0, valibot_1.enum_)(TypeEnums_1.QuestionType),
    evaluationUI: (0, valibot_1.enum_)(Evaluation_1.EvaluationUI),
    cutoffBy: (0, valibot_1.enum_)(Results_1.CutoffBy),
    number: (0, valibot_1.optional)((0, valibot_1.number)()), // optional number to cut off by
    question: (0, valibot_1.optional)((0, valibot_1.string)()), // optional question text
    description: (0, valibot_1.optional)((0, valibot_1.string)()), // optional description of the question
    image: (0, valibot_1.optional)((0, valibot_1.string)()), // optional image URL for the question
    questionnaireQuestionId: (0, valibot_1.string)(), // unique identifier for the questionnaire question
    order: (0, valibot_1.number)(), // order of the question in the questionnaire
});
exports.QuestionnaireSchema = (0, valibot_1.object)({
    question: (0, valibot_1.string)(), // the main question of the questionnaire
    description: (0, valibot_1.optional)((0, valibot_1.string)()), // optional description of the questionnaire
    image: (0, valibot_1.optional)((0, valibot_1.string)()), // optional image URL for the questionnaire
    createdAt: (0, valibot_1.optional)((0, valibot_1.number)()), // timestamp of when the questionnaire was created
    updatedAt: (0, valibot_1.optional)((0, valibot_1.number)()), // timestamp of the last update to the questionnaire
    questions: (0, valibot_1.record)((0, valibot_1.string)(), exports.QuestionnaireQuestionSchema), // map of questionnaireQuestionId -> QuestionnaireQuestion
});
