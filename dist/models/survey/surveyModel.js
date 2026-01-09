"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DEFAULT_SURVEY_SETTINGS = exports.SurveyProgressSchema = exports.SurveySchema = exports.SurveySettingsSchema = exports.SurveyStatusSchema = exports.SurveyStatus = void 0;
const valibot_1 = require("valibot");
// ============================================
// Survey Status Enum
// ============================================
var SurveyStatus;
(function (SurveyStatus) {
    SurveyStatus["draft"] = "draft";
    SurveyStatus["active"] = "active";
    SurveyStatus["closed"] = "closed";
})(SurveyStatus || (exports.SurveyStatus = SurveyStatus = {}));
exports.SurveyStatusSchema = (0, valibot_1.enum_)(SurveyStatus);
// ============================================
// Survey Settings Schema
// ============================================
exports.SurveySettingsSchema = (0, valibot_1.object)({
    /** Can users skip questions without minimum evaluations? */
    allowSkipping: (0, valibot_1.boolean)(),
    /** Can users navigate back to previous questions? */
    allowReturning: (0, valibot_1.boolean)(),
    /** Minimum evaluations required before "Next" is enabled */
    minEvaluationsPerQuestion: (0, valibot_1.number)(),
    /** Show question list on welcome screen */
    showQuestionPreview: (0, valibot_1.optional)((0, valibot_1.boolean)()),
    /** Randomize question order per participant */
    randomizeQuestions: (0, valibot_1.optional)((0, valibot_1.boolean)()),
});
// ============================================
// Survey Schema (Main Type)
// ============================================
exports.SurveySchema = (0, valibot_1.object)({
    surveyId: (0, valibot_1.string)(),
    title: (0, valibot_1.string)(),
    description: (0, valibot_1.optional)((0, valibot_1.string)()),
    creatorId: (0, valibot_1.string)(),
    /** Ordered array of statementIds (questions) */
    questionIds: (0, valibot_1.array)((0, valibot_1.string)()),
    settings: exports.SurveySettingsSchema,
    /** Survey lifecycle status */
    status: exports.SurveyStatusSchema,
    /** Total responses started */
    responseCount: (0, valibot_1.optional)((0, valibot_1.number)()),
    /** Total completions */
    completionCount: (0, valibot_1.optional)((0, valibot_1.number)()),
    createdAt: (0, valibot_1.number)(),
    lastUpdate: (0, valibot_1.number)(),
});
// ============================================
// Survey Progress Schema (User's progress)
// ============================================
exports.SurveyProgressSchema = (0, valibot_1.object)({
    /** Format: ${surveyId}--${userId} */
    progressId: (0, valibot_1.string)(),
    surveyId: (0, valibot_1.string)(),
    userId: (0, valibot_1.string)(),
    /** 0-based index of current question */
    currentQuestionIndex: (0, valibot_1.number)(),
    /** Array of completed questionIds */
    completedQuestionIds: (0, valibot_1.array)((0, valibot_1.string)()),
    /** Timestamp when user started the survey */
    startedAt: (0, valibot_1.number)(),
    /** Timestamp of last update */
    lastUpdated: (0, valibot_1.number)(),
    /** True when user has completed all questions */
    isCompleted: (0, valibot_1.boolean)(),
});
// ============================================
// Default Settings
// ============================================
exports.DEFAULT_SURVEY_SETTINGS = {
    allowSkipping: false,
    allowReturning: true,
    minEvaluationsPerQuestion: 3,
    showQuestionPreview: false,
    randomizeQuestions: false,
};
