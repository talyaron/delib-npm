import { InferOutput } from 'valibot';
export declare enum SurveyStatus {
    draft = "draft",
    active = "active",
    closed = "closed"
}
export declare const SurveyStatusSchema: import("valibot").EnumSchema<typeof SurveyStatus, undefined>;
export declare const SurveySettingsSchema: import("valibot").ObjectSchema<{
    /** Can users skip questions without minimum evaluations? */
    readonly allowSkipping: import("valibot").BooleanSchema<undefined>;
    /** Can users navigate back to previous questions? */
    readonly allowReturning: import("valibot").BooleanSchema<undefined>;
    /** Minimum evaluations required before "Next" is enabled */
    readonly minEvaluationsPerQuestion: import("valibot").NumberSchema<undefined>;
    /** Show question list on welcome screen */
    readonly showQuestionPreview: import("valibot").OptionalSchema<import("valibot").BooleanSchema<undefined>, undefined>;
    /** Randomize question order per participant */
    readonly randomizeQuestions: import("valibot").OptionalSchema<import("valibot").BooleanSchema<undefined>, undefined>;
}, undefined>;
export type SurveySettings = InferOutput<typeof SurveySettingsSchema>;
export declare const SurveySchema: import("valibot").ObjectSchema<{
    readonly surveyId: import("valibot").StringSchema<undefined>;
    readonly title: import("valibot").StringSchema<undefined>;
    readonly description: import("valibot").OptionalSchema<import("valibot").StringSchema<undefined>, undefined>;
    readonly creatorId: import("valibot").StringSchema<undefined>;
    /** Ordered array of statementIds (questions) */
    readonly questionIds: import("valibot").ArraySchema<import("valibot").StringSchema<undefined>, undefined>;
    readonly settings: import("valibot").ObjectSchema<{
        /** Can users skip questions without minimum evaluations? */
        readonly allowSkipping: import("valibot").BooleanSchema<undefined>;
        /** Can users navigate back to previous questions? */
        readonly allowReturning: import("valibot").BooleanSchema<undefined>;
        /** Minimum evaluations required before "Next" is enabled */
        readonly minEvaluationsPerQuestion: import("valibot").NumberSchema<undefined>;
        /** Show question list on welcome screen */
        readonly showQuestionPreview: import("valibot").OptionalSchema<import("valibot").BooleanSchema<undefined>, undefined>;
        /** Randomize question order per participant */
        readonly randomizeQuestions: import("valibot").OptionalSchema<import("valibot").BooleanSchema<undefined>, undefined>;
    }, undefined>;
    /** Survey lifecycle status */
    readonly status: import("valibot").EnumSchema<typeof SurveyStatus, undefined>;
    /** Total responses started */
    readonly responseCount: import("valibot").OptionalSchema<import("valibot").NumberSchema<undefined>, undefined>;
    /** Total completions */
    readonly completionCount: import("valibot").OptionalSchema<import("valibot").NumberSchema<undefined>, undefined>;
    readonly createdAt: import("valibot").NumberSchema<undefined>;
    readonly lastUpdate: import("valibot").NumberSchema<undefined>;
}, undefined>;
export type Survey = InferOutput<typeof SurveySchema>;
export declare const SurveyProgressSchema: import("valibot").ObjectSchema<{
    /** Format: ${surveyId}--${userId} */
    readonly progressId: import("valibot").StringSchema<undefined>;
    readonly surveyId: import("valibot").StringSchema<undefined>;
    readonly userId: import("valibot").StringSchema<undefined>;
    /** 0-based index of current question */
    readonly currentQuestionIndex: import("valibot").NumberSchema<undefined>;
    /** Array of completed questionIds */
    readonly completedQuestionIds: import("valibot").ArraySchema<import("valibot").StringSchema<undefined>, undefined>;
    /** Timestamp when user started the survey */
    readonly startedAt: import("valibot").NumberSchema<undefined>;
    /** Timestamp of last update */
    readonly lastUpdated: import("valibot").NumberSchema<undefined>;
    /** True when user has completed all questions */
    readonly isCompleted: import("valibot").BooleanSchema<undefined>;
}, undefined>;
export type SurveyProgress = InferOutput<typeof SurveyProgressSchema>;
export declare const DEFAULT_SURVEY_SETTINGS: SurveySettings;
