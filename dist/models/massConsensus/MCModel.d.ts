import { InferOutput } from 'valibot';
import { MassConsensusPageUrls, MassConsensusStep } from './massConsensusModel';
export declare enum MCSessionStatus {
    DRAFT = "draft",
    ACTIVE = "active",
    COMPLETED = "completed",
    ARCHIVED = "archived"
}
export declare enum MCQuestionType {
    FULL_CONSENSUS = "full_consensus",
    QUICK_VOTE = "quick_vote",
    BRAINSTORM_ONLY = "brainstorm_only",
    EVALUATE_ONLY = "evaluate_only",
    CUSTOM = "custom"
}
export declare const MCSessionSettingsSchema: import("valibot").ObjectSchema<{
    readonly randomizeQuestions: import("valibot").BooleanSchema<undefined>;
    readonly allowSkipping: import("valibot").BooleanSchema<undefined>;
    readonly showProgressBar: import("valibot").BooleanSchema<undefined>;
    readonly showIntermediateResults: import("valibot").BooleanSchema<undefined>;
    readonly sharedSteps: import("valibot").ObjectSchema<{
        readonly introduction: import("valibot").BooleanSchema<undefined>;
        readonly userDemographics: import("valibot").BooleanSchema<undefined>;
        readonly feedback: import("valibot").BooleanSchema<undefined>;
        readonly thankYou: import("valibot").BooleanSchema<undefined>;
    }, undefined>;
}, undefined>;
export declare const MCQuestionContentSchema: import("valibot").ObjectSchema<{
    readonly question: import("valibot").StringSchema<undefined>;
    readonly description: import("valibot").OptionalSchema<import("valibot").StringSchema<undefined>, undefined>;
}, undefined>;
export declare const MCQuestionSchema: import("valibot").ObjectSchema<{
    readonly questionId: import("valibot").StringSchema<undefined>;
    readonly sessionId: import("valibot").StringSchema<undefined>;
    readonly order: import("valibot").NumberSchema<undefined>;
    readonly content: import("valibot").ObjectSchema<{
        readonly question: import("valibot").StringSchema<undefined>;
        readonly description: import("valibot").OptionalSchema<import("valibot").StringSchema<undefined>, undefined>;
    }, undefined>;
    readonly questionType: import("valibot").EnumSchema<typeof MCQuestionType, undefined>;
    readonly steps: import("valibot").ArraySchema<import("valibot").ObjectSchema<{
        readonly screen: import("valibot").EnumSchema<typeof MassConsensusPageUrls, undefined>;
        readonly text: import("valibot").OptionalSchema<import("valibot").StringSchema<undefined>, undefined>;
        readonly statementId: import("valibot").StringSchema<undefined>;
    }, undefined>, undefined>;
    readonly required: import("valibot").BooleanSchema<undefined>;
}, undefined>;
export declare const MCSessionSchema: import("valibot").ObjectSchema<{
    readonly sessionId: import("valibot").StringSchema<undefined>;
    readonly statementId: import("valibot").StringSchema<undefined>;
    readonly title: import("valibot").StringSchema<undefined>;
    readonly description: import("valibot").OptionalSchema<import("valibot").StringSchema<undefined>, undefined>;
    readonly createdAt: import("valibot").NumberSchema<undefined>;
    readonly createdBy: import("valibot").StringSchema<undefined>;
    readonly questions: import("valibot").ArraySchema<import("valibot").ObjectSchema<{
        readonly questionId: import("valibot").StringSchema<undefined>;
        readonly sessionId: import("valibot").StringSchema<undefined>;
        readonly order: import("valibot").NumberSchema<undefined>;
        readonly content: import("valibot").ObjectSchema<{
            readonly question: import("valibot").StringSchema<undefined>;
            readonly description: import("valibot").OptionalSchema<import("valibot").StringSchema<undefined>, undefined>;
        }, undefined>;
        readonly questionType: import("valibot").EnumSchema<typeof MCQuestionType, undefined>;
        readonly steps: import("valibot").ArraySchema<import("valibot").ObjectSchema<{
            readonly screen: import("valibot").EnumSchema<typeof MassConsensusPageUrls, undefined>;
            readonly text: import("valibot").OptionalSchema<import("valibot").StringSchema<undefined>, undefined>;
            readonly statementId: import("valibot").StringSchema<undefined>;
        }, undefined>, undefined>;
        readonly required: import("valibot").BooleanSchema<undefined>;
    }, undefined>, undefined>;
    readonly settings: import("valibot").ObjectSchema<{
        readonly randomizeQuestions: import("valibot").BooleanSchema<undefined>;
        readonly allowSkipping: import("valibot").BooleanSchema<undefined>;
        readonly showProgressBar: import("valibot").BooleanSchema<undefined>;
        readonly showIntermediateResults: import("valibot").BooleanSchema<undefined>;
        readonly sharedSteps: import("valibot").ObjectSchema<{
            readonly introduction: import("valibot").BooleanSchema<undefined>;
            readonly userDemographics: import("valibot").BooleanSchema<undefined>;
            readonly feedback: import("valibot").BooleanSchema<undefined>;
            readonly thankYou: import("valibot").BooleanSchema<undefined>;
        }, undefined>;
    }, undefined>;
    readonly status: import("valibot").EnumSchema<typeof MCSessionStatus, undefined>;
}, undefined>;
export declare const MCSessionProgressSchema: import("valibot").ObjectSchema<{
    readonly sessionId: import("valibot").StringSchema<undefined>;
    readonly participantId: import("valibot").StringSchema<undefined>;
    readonly currentQuestionIndex: import("valibot").NumberSchema<undefined>;
    readonly completedQuestions: import("valibot").ArraySchema<import("valibot").StringSchema<undefined>, undefined>;
    readonly startedAt: import("valibot").NumberSchema<undefined>;
    readonly lastUpdated: import("valibot").NumberSchema<undefined>;
    readonly completed: import("valibot").BooleanSchema<undefined>;
}, undefined>;
export declare const MCQuestionResponseSchema: import("valibot").ObjectSchema<{
    readonly questionId: import("valibot").StringSchema<undefined>;
    readonly sessionId: import("valibot").StringSchema<undefined>;
    readonly participantId: import("valibot").StringSchema<undefined>;
    readonly responses: import("valibot").ObjectSchema<{
        readonly suggestions: import("valibot").OptionalSchema<import("valibot").ArraySchema<import("valibot").StringSchema<undefined>, undefined>, undefined>;
        readonly votes: import("valibot").OptionalSchema<import("valibot").ArraySchema<import("valibot").StringSchema<undefined>, undefined>, undefined>;
        readonly evaluations: import("valibot").OptionalSchema<import("valibot").RecordSchema<import("valibot").StringSchema<undefined>, import("valibot").NumberSchema<undefined>, undefined>, undefined>;
    }, undefined>;
    readonly completedAt: import("valibot").NumberSchema<undefined>;
}, undefined>;
export type MCSessionSettings = InferOutput<typeof MCSessionSettingsSchema>;
export type MCQuestionContent = InferOutput<typeof MCQuestionContentSchema>;
export type MCQuestion = InferOutput<typeof MCQuestionSchema>;
export type MCSession = InferOutput<typeof MCSessionSchema>;
export type MCSessionProgress = InferOutput<typeof MCSessionProgressSchema>;
export type MCQuestionResponse = InferOutput<typeof MCQuestionResponseSchema>;
export type MCSessionCreate = Omit<MCSession, 'sessionId' | 'createdAt'>;
export type MCSessionUpdate = Partial<Omit<MCSession, 'sessionId' | 'createdAt' | 'createdBy'>>;
export type MCQuestionCreate = Omit<MCQuestion, 'questionId'>;
export type MCQuestionOrder = {
    questionId: string;
    order: number;
};
export declare const createDefaultMCSessionSettings: () => MCSessionSettings;
export declare const createDefaultMCQuestion: (sessionId: string, order: number) => MCQuestionCreate;
export declare const getDefaultStepsForQuestionType: (type: MCQuestionType, statementId: string) => MassConsensusStep[];
