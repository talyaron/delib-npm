"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StatementEvaluationSettingsSchema = exports.EvaluationUI = exports.StatementEvaluationSchema = exports.SelectionFunction = exports.EvaluatorSchema = exports.EvaluationSchema = void 0;
const valibot_1 = require("valibot");
const User_1 = require("../user/User");
exports.EvaluationSchema = (0, valibot_1.object)({
    parentId: (0, valibot_1.string)(),
    evaluationId: (0, valibot_1.string)(),
    statementId: (0, valibot_1.string)(),
    evaluatorId: (0, valibot_1.string)(),
    updatedAt: (0, valibot_1.number)(),
    evaluation: (0, valibot_1.number)(),
    evaluator: (0, valibot_1.optional)(User_1.UserSchema),
});
exports.EvaluatorSchema = (0, valibot_1.object)({
    evaluatorId: (0, valibot_1.optional)((0, valibot_1.string)()),
    statementId: (0, valibot_1.optional)((0, valibot_1.string)()),
    evaluated: (0, valibot_1.optional)((0, valibot_1.boolean)()),
    suggested: (0, valibot_1.optional)((0, valibot_1.boolean)()),
    firstEvaluation: (0, valibot_1.optional)((0, valibot_1.boolean)()),
    secondEvaluation: (0, valibot_1.optional)((0, valibot_1.boolean)()),
    voted: (0, valibot_1.optional)((0, valibot_1.boolean)()),
});
var SelectionFunction;
(function (SelectionFunction) {
    SelectionFunction["random"] = "random";
    SelectionFunction["top"] = "top";
    SelectionFunction["vote"] = "vote";
})(SelectionFunction || (exports.SelectionFunction = SelectionFunction = {}));
exports.StatementEvaluationSchema = (0, valibot_1.object)({
    sumEvaluations: (0, valibot_1.number)(),
    agreement: (0, valibot_1.number)(),
    numberOfEvaluators: (0, valibot_1.number)(),
    sumPro: (0, valibot_1.optional)((0, valibot_1.number)()),
    sumCon: (0, valibot_1.optional)((0, valibot_1.number)()),
    viewed: (0, valibot_1.optional)((0, valibot_1.number)()),
    evaluationRandomNumber: (0, valibot_1.optional)((0, valibot_1.number)()),
    selectionFunction: (0, valibot_1.optional)((0, valibot_1.enum_)(SelectionFunction)), // it is used for selecting in mass consensus random, voting and top suggestions
});
var EvaluationUI;
(function (EvaluationUI) {
    EvaluationUI["suggestions"] = "suggestions";
    EvaluationUI["voting"] = "voting";
    EvaluationUI["checkbox"] = "checkbox";
})(EvaluationUI || (exports.EvaluationUI = EvaluationUI = {}));
exports.StatementEvaluationSettingsSchema = (0, valibot_1.object)({
    evaluationUI: (0, valibot_1.enum_)(EvaluationUI),
});
