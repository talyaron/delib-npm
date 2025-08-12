"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDefaultStepsForQuestionType = exports.createDefaultMCQuestion = exports.createDefaultMCSessionSettings = exports.MCQuestionResponseSchema = exports.MCSessionProgressSchema = exports.MCSessionSchema = exports.MCQuestionSchema = exports.MCQuestionContentSchema = exports.MCSessionSettingsSchema = exports.MCQuestionType = exports.MCSessionStatus = void 0;
const valibot_1 = require("valibot");
const massConsensusModel_1 = require("./massConsensusModel");
// ============================================
// ENUMS
// ============================================
var MCSessionStatus;
(function (MCSessionStatus) {
    MCSessionStatus["DRAFT"] = "draft";
    MCSessionStatus["ACTIVE"] = "active";
    MCSessionStatus["COMPLETED"] = "completed";
    MCSessionStatus["ARCHIVED"] = "archived";
})(MCSessionStatus || (exports.MCSessionStatus = MCSessionStatus = {}));
var MCQuestionType;
(function (MCQuestionType) {
    MCQuestionType["FULL_CONSENSUS"] = "full_consensus";
    MCQuestionType["QUICK_VOTE"] = "quick_vote";
    MCQuestionType["BRAINSTORM_ONLY"] = "brainstorm_only";
    MCQuestionType["EVALUATE_ONLY"] = "evaluate_only";
    MCQuestionType["CUSTOM"] = "custom";
})(MCQuestionType || (exports.MCQuestionType = MCQuestionType = {}));
// ============================================
// VALIBOT SCHEMAS
// ============================================
// Session Settings Schema
exports.MCSessionSettingsSchema = (0, valibot_1.object)({
    randomizeQuestions: (0, valibot_1.boolean)(),
    allowSkipping: (0, valibot_1.boolean)(),
    showProgressBar: (0, valibot_1.boolean)(),
    showIntermediateResults: (0, valibot_1.boolean)(),
    sharedSteps: (0, valibot_1.object)({
        introduction: (0, valibot_1.boolean)(),
        userDemographics: (0, valibot_1.boolean)(),
        feedback: (0, valibot_1.boolean)(),
        thankYou: (0, valibot_1.boolean)()
    })
});
// Question Content Schema
exports.MCQuestionContentSchema = (0, valibot_1.object)({
    question: (0, valibot_1.string)(),
    description: (0, valibot_1.optional)((0, valibot_1.string)())
});
// Question Schema
exports.MCQuestionSchema = (0, valibot_1.object)({
    questionId: (0, valibot_1.string)(),
    sessionId: (0, valibot_1.string)(),
    order: (0, valibot_1.number)(),
    content: exports.MCQuestionContentSchema,
    questionType: (0, valibot_1.enum_)(MCQuestionType),
    steps: (0, valibot_1.array)(massConsensusModel_1.MassConsensusStepSchema), // Using existing schema
    required: (0, valibot_1.boolean)()
});
// Session Schema
exports.MCSessionSchema = (0, valibot_1.object)({
    sessionId: (0, valibot_1.string)(),
    statementId: (0, valibot_1.string)(),
    title: (0, valibot_1.string)(),
    description: (0, valibot_1.optional)((0, valibot_1.string)()),
    createdAt: (0, valibot_1.number)(),
    createdBy: (0, valibot_1.string)(),
    questions: (0, valibot_1.array)(exports.MCQuestionSchema),
    settings: exports.MCSessionSettingsSchema,
    status: (0, valibot_1.enum_)(MCSessionStatus)
});
// Session Progress Schema
exports.MCSessionProgressSchema = (0, valibot_1.object)({
    sessionId: (0, valibot_1.string)(),
    participantId: (0, valibot_1.string)(),
    currentQuestionIndex: (0, valibot_1.number)(),
    completedQuestions: (0, valibot_1.array)((0, valibot_1.string)()), // questionIds
    startedAt: (0, valibot_1.number)(),
    lastUpdated: (0, valibot_1.number)(),
    completed: (0, valibot_1.boolean)()
});
// Question Response Schema
exports.MCQuestionResponseSchema = (0, valibot_1.object)({
    questionId: (0, valibot_1.string)(),
    sessionId: (0, valibot_1.string)(),
    participantId: (0, valibot_1.string)(),
    responses: (0, valibot_1.object)({
        suggestions: (0, valibot_1.optional)((0, valibot_1.array)((0, valibot_1.string)())),
        votes: (0, valibot_1.optional)((0, valibot_1.array)((0, valibot_1.string)())), // statementIds
        evaluations: (0, valibot_1.optional)((0, valibot_1.record)((0, valibot_1.string)(), (0, valibot_1.number)())) // statementId -> score
    }),
    completedAt: (0, valibot_1.number)()
});
// ============================================
// DEFAULT VALUES (factory functions)
// ============================================
const createDefaultMCSessionSettings = () => ({
    randomizeQuestions: false,
    allowSkipping: true,
    showProgressBar: true,
    showIntermediateResults: false,
    sharedSteps: {
        introduction: true,
        userDemographics: false,
        feedback: true,
        thankYou: true
    }
});
exports.createDefaultMCSessionSettings = createDefaultMCSessionSettings;
const createDefaultMCQuestion = (sessionId, order) => ({
    sessionId,
    order,
    content: {
        question: '',
        description: undefined
    },
    questionType: MCQuestionType.FULL_CONSENSUS,
    steps: [
        { screen: massConsensusModel_1.MassConsensusPageUrls.question, statementId: '', text: undefined },
        { screen: massConsensusModel_1.MassConsensusPageUrls.topSuggestions, statementId: '', text: undefined },
        { screen: massConsensusModel_1.MassConsensusPageUrls.randomSuggestions, statementId: '', text: undefined },
        { screen: massConsensusModel_1.MassConsensusPageUrls.topSuggestions, statementId: '', text: undefined },
        { screen: massConsensusModel_1.MassConsensusPageUrls.voting, statementId: '', text: undefined }
    ],
    required: true
});
exports.createDefaultMCQuestion = createDefaultMCQuestion;
// ============================================
// QUESTION TYPE TO STEPS MAPPING
// ============================================
const getDefaultStepsForQuestionType = (type, statementId) => {
    const createStep = (screen) => ({
        screen,
        statementId,
        text: undefined
    });
    switch (type) {
        case MCQuestionType.FULL_CONSENSUS:
            return [
                createStep(massConsensusModel_1.MassConsensusPageUrls.question),
                createStep(massConsensusModel_1.MassConsensusPageUrls.topSuggestions),
                createStep(massConsensusModel_1.MassConsensusPageUrls.randomSuggestions),
                createStep(massConsensusModel_1.MassConsensusPageUrls.topSuggestions),
                createStep(massConsensusModel_1.MassConsensusPageUrls.voting)
            ];
        case MCQuestionType.QUICK_VOTE:
            return [
                createStep(massConsensusModel_1.MassConsensusPageUrls.question),
                createStep(massConsensusModel_1.MassConsensusPageUrls.voting)
            ];
        case MCQuestionType.BRAINSTORM_ONLY:
            return [
                createStep(massConsensusModel_1.MassConsensusPageUrls.question),
                createStep(massConsensusModel_1.MassConsensusPageUrls.topSuggestions)
            ];
        case MCQuestionType.EVALUATE_ONLY:
            return [
                createStep(massConsensusModel_1.MassConsensusPageUrls.question),
                createStep(massConsensusModel_1.MassConsensusPageUrls.randomSuggestions),
                createStep(massConsensusModel_1.MassConsensusPageUrls.topSuggestions)
            ];
        case MCQuestionType.CUSTOM:
        default:
            return [createStep(massConsensusModel_1.MassConsensusPageUrls.question)];
    }
};
exports.getDefaultStepsForQuestionType = getDefaultStepsForQuestionType;
