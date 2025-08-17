"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuestionnaireSchema = exports.QuestionnaireQuestionSchema = void 0;
const valibot_1 = require("valibot");
const Evaluation_1 = require("../evaluation/Evaluation");
exports.QuestionnaireQuestionSchema = (0, valibot_1.object)({
    questionnaireId: (0, valibot_1.string)(), // unique identifier for the questionnaire
    statementId: (0, valibot_1.string)(), // unique identifier for the statement that the question uses to store data
    evaluationUI: (0, valibot_1.optional)((0, valibot_1.enum_)(Evaluation_1.EvaluationUI)),
    order: (0, valibot_1.number)(), // order of the question in the questionnaire
});
exports.QuestionnaireSchema = (0, valibot_1.object)({
    questionnaireId: (0, valibot_1.string)(), // unique identifier for the questionnaire
    createdAt: (0, valibot_1.optional)((0, valibot_1.number)()), // timestamp of when the questionnaire was created
    updatedAt: (0, valibot_1.optional)((0, valibot_1.number)()), // timestamp of the last update to the questionnaire
    questions: (0, valibot_1.array)(exports.QuestionnaireQuestionSchema), // array of QuestionnaireQuestion
});
