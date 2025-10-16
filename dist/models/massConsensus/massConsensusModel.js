"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.defaultStageTemplates = exports.MassConsensusMemberSchema = exports.MassConsensusProcessSchema = exports.MassConsensusStageSchema = exports.PostActionConfigSchema = exports.ExplanationConfigSchema = exports.ExplanationDisplayModeSchema = exports.MassConsensusPageUrlsSchema = exports.MassConsensusPageUrls = exports.MassConsensusStageTypeSchema = exports.MassConsensusStageType = void 0;
const valibot_1 = require("valibot");
const User_1 = require("../user/User");
// ============================================
// Stage Types (can be reused multiple times)
// ============================================
var MassConsensusStageType;
(function (MassConsensusStageType) {
    MassConsensusStageType["introduction"] = "introduction";
    MassConsensusStageType["userDemographics"] = "user-demographics";
    MassConsensusStageType["question"] = "question";
    MassConsensusStageType["randomSuggestions"] = "random-suggestions";
    MassConsensusStageType["topSuggestions"] = "top-suggestions";
    MassConsensusStageType["voting"] = "voting";
    MassConsensusStageType["leaveFeedback"] = "leave-feedback";
    MassConsensusStageType["thankYou"] = "thank-you";
    MassConsensusStageType["mySuggestions"] = "my-suggestions";
    MassConsensusStageType["results"] = "results";
    // Future stage types
    MassConsensusStageType["discussion"] = "discussion";
    MassConsensusStageType["prioritization"] = "prioritization";
    MassConsensusStageType["review"] = "review";
})(MassConsensusStageType || (exports.MassConsensusStageType = MassConsensusStageType = {}));
exports.MassConsensusStageTypeSchema = (0, valibot_1.enum_)(MassConsensusStageType);
// Keep for backward compatibility
var MassConsensusPageUrls;
(function (MassConsensusPageUrls) {
    MassConsensusPageUrls["introduction"] = "introduction";
    MassConsensusPageUrls["userDemographics"] = "user-demographics";
    MassConsensusPageUrls["initialQuestion"] = "initial-question";
    MassConsensusPageUrls["question"] = "question";
    MassConsensusPageUrls["randomSuggestions"] = "random-suggestions";
    MassConsensusPageUrls["topSuggestions"] = "top-suggestions";
    MassConsensusPageUrls["voting"] = "voting";
    MassConsensusPageUrls["leaveFeedback"] = "leave-feedback";
    MassConsensusPageUrls["thankYou"] = "thank-you";
    MassConsensusPageUrls["mySuggestions"] = "my-suggestions";
    MassConsensusPageUrls["results"] = "results";
})(MassConsensusPageUrls || (exports.MassConsensusPageUrls = MassConsensusPageUrls = {}));
exports.MassConsensusPageUrlsSchema = (0, valibot_1.enum_)(MassConsensusPageUrls);
// ============================================
// Display modes for explanations
// ============================================
exports.ExplanationDisplayModeSchema = (0, valibot_1.union)([
    (0, valibot_1.literal)('card'),
    (0, valibot_1.literal)('tooltip'),
    (0, valibot_1.literal)('modal'),
    (0, valibot_1.literal)('inline'),
    (0, valibot_1.literal)('toast'),
    (0, valibot_1.literal)('banner'),
    (0, valibot_1.literal)('drawer')
]);
// ============================================
// Explanation Configuration
// ============================================
exports.ExplanationConfigSchema = (0, valibot_1.object)({
    enabled: (0, valibot_1.optional)((0, valibot_1.boolean)()),
    title: (0, valibot_1.optional)((0, valibot_1.string)()),
    content: (0, valibot_1.string)(),
    displayMode: (0, valibot_1.optional)(exports.ExplanationDisplayModeSchema),
    showOnlyFirstTime: (0, valibot_1.optional)((0, valibot_1.boolean)()),
    dismissible: (0, valibot_1.optional)((0, valibot_1.boolean)()),
    displayDuration: (0, valibot_1.optional)((0, valibot_1.number)()), // milliseconds, 0 = manual dismiss
    icon: (0, valibot_1.optional)((0, valibot_1.string)()), // icon identifier
    customClass: (0, valibot_1.optional)((0, valibot_1.string)()), // for custom styling
});
// ============================================
// Post-action feedback configuration
// ============================================
exports.PostActionConfigSchema = (0, valibot_1.object)({
    enabled: (0, valibot_1.optional)((0, valibot_1.boolean)()),
    content: (0, valibot_1.string)(),
    successMessage: (0, valibot_1.optional)((0, valibot_1.string)()),
    errorMessage: (0, valibot_1.optional)((0, valibot_1.string)()),
    buttons: (0, valibot_1.optional)((0, valibot_1.array)((0, valibot_1.object)({
        label: (0, valibot_1.string)(),
        action: (0, valibot_1.union)([
            (0, valibot_1.literal)('continue'), // Go to next stage
            (0, valibot_1.literal)('viewMySuggestions'), // Navigate to my suggestions
            (0, valibot_1.literal)('addAnother'), // Reset current stage
            (0, valibot_1.literal)('skip'), // Skip to next
            (0, valibot_1.literal)('custom') // Custom action
        ]),
        primary: (0, valibot_1.optional)((0, valibot_1.boolean)()),
        customUrl: (0, valibot_1.optional)((0, valibot_1.string)()), // For custom action
    }))),
    autoAdvance: (0, valibot_1.optional)((0, valibot_1.object)({
        enabled: (0, valibot_1.boolean)(),
        delay: (0, valibot_1.number)(), // milliseconds
        target: (0, valibot_1.optional)((0, valibot_1.union)([
            (0, valibot_1.literal)('next'),
            (0, valibot_1.literal)('specific'),
        ])),
        targetStageId: (0, valibot_1.optional)((0, valibot_1.string)()), // If target is 'specific'
    })),
    displayMode: (0, valibot_1.optional)(exports.ExplanationDisplayModeSchema),
});
// ============================================
// MAIN: Mass Consensus Stage (array element)
// ============================================
exports.MassConsensusStageSchema = (0, valibot_1.object)({
    // Unique identifier for this stage instance
    id: (0, valibot_1.string)(), // e.g., "question-1", "question-2", "voting-final"
    // Stage type (can repeat)
    type: exports.MassConsensusStageTypeSchema,
    // Display text for this specific instance
    title: (0, valibot_1.optional)((0, valibot_1.string)()), // e.g., "First Question", "Follow-up Question"
    description: (0, valibot_1.optional)((0, valibot_1.string)()),
    // Navigation
    url: (0, valibot_1.optional)((0, valibot_1.string)()), // Custom URL if different from type default
    order: (0, valibot_1.number)(), // Position in the process
    // Conditionals
    skipable: (0, valibot_1.optional)((0, valibot_1.boolean)()),
    required: (0, valibot_1.optional)((0, valibot_1.boolean)()),
    condition: (0, valibot_1.optional)((0, valibot_1.string)()), // Expression to evaluate if stage should show
    // Explanations
    beforeStage: (0, valibot_1.optional)(exports.ExplanationConfigSchema),
    afterAction: (0, valibot_1.optional)(exports.PostActionConfigSchema),
    // Stage-specific configuration
    config: (0, valibot_1.optional)((0, valibot_1.object)({
        // For question stages
        questionText: (0, valibot_1.optional)((0, valibot_1.string)()),
        maxSuggestions: (0, valibot_1.optional)((0, valibot_1.number)()),
        minCharacters: (0, valibot_1.optional)((0, valibot_1.number)()),
        maxCharacters: (0, valibot_1.optional)((0, valibot_1.number)()),
        // For evaluation stages
        proposalsPerBatch: (0, valibot_1.optional)((0, valibot_1.number)()),
        evaluationType: (0, valibot_1.optional)((0, valibot_1.union)([
            (0, valibot_1.literal)('rating'),
            (0, valibot_1.literal)('ranking'),
            (0, valibot_1.literal)('comparison')
        ])),
        // For voting stages
        votingMethod: (0, valibot_1.optional)((0, valibot_1.union)([
            (0, valibot_1.literal)('single'),
            (0, valibot_1.literal)('multiple'),
            (0, valibot_1.literal)('ranked')
        ])),
        maxVotes: (0, valibot_1.optional)((0, valibot_1.number)()),
        // Generic
        timeLimit: (0, valibot_1.optional)((0, valibot_1.number)()), // seconds
        customData: (0, valibot_1.optional)((0, valibot_1.record)((0, valibot_1.string)(), (0, valibot_1.string)())),
    })),
    // Tracking
    analytics: (0, valibot_1.optional)((0, valibot_1.object)({
        trackEntry: (0, valibot_1.optional)((0, valibot_1.boolean)()),
        trackExit: (0, valibot_1.optional)((0, valibot_1.boolean)()),
        trackDuration: (0, valibot_1.optional)((0, valibot_1.boolean)()),
        customEvents: (0, valibot_1.optional)((0, valibot_1.array)((0, valibot_1.string)())),
    })),
});
// ============================================
// Process Definition
// ============================================
exports.MassConsensusProcessSchema = (0, valibot_1.object)({
    statementId: (0, valibot_1.string)(),
    version: (0, valibot_1.string)(), // Process version for migrations
    // Array of stages - the actual process flow
    stages: (0, valibot_1.array)(exports.MassConsensusStageSchema),
    // Login-type specific overrides
    loginTypeOverrides: (0, valibot_1.optional)((0, valibot_1.record)((0, valibot_1.enum_)(User_1.LoginType), (0, valibot_1.object)({
        stageOverrides: (0, valibot_1.optional)((0, valibot_1.record)((0, valibot_1.string)(), exports.MassConsensusStageSchema)), // stage.id -> override
        excludeStages: (0, valibot_1.optional)((0, valibot_1.array)((0, valibot_1.string)())), // stage ids to skip
        additionalStages: (0, valibot_1.optional)((0, valibot_1.array)(exports.MassConsensusStageSchema)), // extra stages for this login type
    }))),
    // Global settings
    settings: (0, valibot_1.optional)((0, valibot_1.object)({
        explanationsEnabled: (0, valibot_1.optional)((0, valibot_1.boolean)()),
        defaultExplanationMode: (0, valibot_1.optional)(exports.ExplanationDisplayModeSchema),
        progressIndicator: (0, valibot_1.optional)((0, valibot_1.boolean)()),
        allowBackNavigation: (0, valibot_1.optional)((0, valibot_1.boolean)()),
        saveProgress: (0, valibot_1.optional)((0, valibot_1.boolean)()),
        resumeFromLastStage: (0, valibot_1.optional)((0, valibot_1.boolean)()),
        completionRedirectUrl: (0, valibot_1.optional)((0, valibot_1.string)()),
    })),
    // Metadata
    createdAt: (0, valibot_1.number)(),
    updatedAt: (0, valibot_1.optional)((0, valibot_1.number)()),
    createdBy: (0, valibot_1.string)(),
    updatedBy: (0, valibot_1.optional)((0, valibot_1.string)()),
});
// ============================================
// Member tracking
// ============================================
exports.MassConsensusMemberSchema = (0, valibot_1.object)({
    statementId: (0, valibot_1.string)(),
    lastUpdate: (0, valibot_1.number)(),
    email: (0, valibot_1.optional)((0, valibot_1.nullable)((0, valibot_1.string)())),
    creator: User_1.CreatorSchema,
    // Progress tracking
    progress: (0, valibot_1.optional)((0, valibot_1.object)({
        currentStageId: (0, valibot_1.string)(),
        completedStages: (0, valibot_1.array)((0, valibot_1.object)({
            stageId: (0, valibot_1.string)(),
            completedAt: (0, valibot_1.number)(),
            duration: (0, valibot_1.optional)((0, valibot_1.number)()), // seconds spent
        })),
        seenExplanations: (0, valibot_1.array)((0, valibot_1.string)()), // stage ids where explanation was shown
        skippedStages: (0, valibot_1.optional)((0, valibot_1.array)((0, valibot_1.string)())),
    })),
    // User preferences
    preferences: (0, valibot_1.optional)((0, valibot_1.object)({
        dontShowExplanations: (0, valibot_1.optional)((0, valibot_1.boolean)()),
        preferredExplanationMode: (0, valibot_1.optional)(exports.ExplanationDisplayModeSchema),
    })),
});
// ============================================
// Default stage templates
// ============================================
exports.defaultStageTemplates = {
    [MassConsensusStageType.introduction]: {
        type: MassConsensusStageType.introduction,
        title: "Welcome",
        skipable: true,
        beforeStage: {
            enabled: true,
            title: "Welcome to Mass Consensus",
            content: "This process helps identify the best ideas through collective evaluation.",
            displayMode: 'card',
            showOnlyFirstTime: false,
        },
    },
    [MassConsensusStageType.userDemographics]: {
        type: MassConsensusStageType.userDemographics,
        title: "About You",
        skipable: true,
        beforeStage: {
            content: "Help us understand the diversity of participants (optional).",
            displayMode: 'inline',
            showOnlyFirstTime: true,
        },
    },
    [MassConsensusStageType.question]: {
        type: MassConsensusStageType.question,
        title: "Your Suggestion",
        required: false,
        skipable: true,
        beforeStage: {
            title: "Share Your Ideas",
            content: "Submit your suggestion. It will be randomly shown to others for evaluation.",
            displayMode: 'tooltip',
            showOnlyFirstTime: true,
        },
        afterAction: {
            enabled: true,
            content: "Your suggestion has been added!",
            successMessage: "It will be evaluated by other participants.",
            buttons: [
                { label: "View My Suggestions", action: 'viewMySuggestions', primary: false },
                { label: "Add Another", action: 'addAnother', primary: false },
                { label: "Continue", action: 'continue', primary: true },
            ],
            displayMode: 'modal',
        },
        config: {
            minCharacters: 10,
            maxCharacters: 500,
            maxSuggestions: 3,
        },
    },
    [MassConsensusStageType.randomSuggestions]: {
        type: MassConsensusStageType.randomSuggestions,
        title: "Evaluate Suggestions",
        skipable: false,
        beforeStage: {
            title: "Random Evaluation",
            content: "Rate 6 random suggestions. Everyone sees different ones for fairness.",
            displayMode: 'card',
            showOnlyFirstTime: true,
        },
        afterAction: {
            content: "Great job! All suggestions evaluated.",
            displayMode: 'toast',
            autoAdvance: {
                enabled: true,
                delay: 2000,
                target: 'next',
            },
        },
        config: {
            proposalsPerBatch: 6,
            evaluationType: 'rating',
        },
    },
    [MassConsensusStageType.topSuggestions]: {
        type: MassConsensusStageType.topSuggestions,
        title: "Top Suggestions",
        skipable: true,
        beforeStage: {
            content: "Review the highest-rated suggestions.",
            displayMode: 'inline',
        },
    },
    [MassConsensusStageType.voting]: {
        type: MassConsensusStageType.voting,
        title: "Final Vote",
        required: true,
        beforeStage: {
            content: "Cast your vote for the best suggestion.",
            displayMode: 'tooltip',
        },
        afterAction: {
            content: "Thank you for voting!",
            displayMode: 'toast',
            autoAdvance: {
                enabled: true,
                delay: 1500,
                target: 'next',
            },
        },
        config: {
            votingMethod: 'single',
            maxVotes: 1,
        },
    },
    [MassConsensusStageType.results]: {
        type: MassConsensusStageType.results,
        title: "Results",
        skipable: false,
        beforeStage: {
            content: "See how everyone voted.",
            displayMode: 'inline',
        },
    },
    [MassConsensusStageType.leaveFeedback]: {
        type: MassConsensusStageType.leaveFeedback,
        title: "Feedback",
        skipable: true,
        beforeStage: {
            content: "Help us improve this process.",
            displayMode: 'inline',
        },
    },
    [MassConsensusStageType.thankYou]: {
        type: MassConsensusStageType.thankYou,
        title: "Thank You",
        skipable: false,
    },
    [MassConsensusStageType.mySuggestions]: {
        type: MassConsensusStageType.mySuggestions,
        title: "My Suggestions",
        skipable: true,
    },
    // Future types
    [MassConsensusStageType.discussion]: {
        type: MassConsensusStageType.discussion,
        title: "Discussion",
        skipable: true,
    },
    [MassConsensusStageType.prioritization]: {
        type: MassConsensusStageType.prioritization,
        title: "Prioritize",
        skipable: false,
    },
    [MassConsensusStageType.review]: {
        type: MassConsensusStageType.review,
        title: "Review",
        skipable: true,
    },
};
