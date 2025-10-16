import { InferOutput } from 'valibot';
import { LoginType } from '../user/User';
export declare enum MassConsensusStageType {
    introduction = "introduction",
    userDemographics = "user-demographics",
    question = "question",
    randomSuggestions = "random-suggestions",
    topSuggestions = "top-suggestions",
    voting = "voting",
    leaveFeedback = "leave-feedback",
    thankYou = "thank-you",
    mySuggestions = "my-suggestions",
    results = "results",
    discussion = "discussion",
    prioritization = "prioritization",
    review = "review"
}
export declare const MassConsensusStageTypeSchema: import("valibot").EnumSchema<typeof MassConsensusStageType, undefined>;
export declare enum MassConsensusPageUrls {
    introduction = "introduction",
    userDemographics = "user-demographics",
    initialQuestion = "initial-question",
    question = "question",
    randomSuggestions = "random-suggestions",
    topSuggestions = "top-suggestions",
    voting = "voting",
    leaveFeedback = "leave-feedback",
    thankYou = "thank-you",
    mySuggestions = "my-suggestions",
    results = "results"
}
export declare const MassConsensusPageUrlsSchema: import("valibot").EnumSchema<typeof MassConsensusPageUrls, undefined>;
export declare const ExplanationDisplayModeSchema: import("valibot").UnionSchema<[import("valibot").LiteralSchema<"card", undefined>, import("valibot").LiteralSchema<"tooltip", undefined>, import("valibot").LiteralSchema<"modal", undefined>, import("valibot").LiteralSchema<"inline", undefined>, import("valibot").LiteralSchema<"toast", undefined>, import("valibot").LiteralSchema<"banner", undefined>, import("valibot").LiteralSchema<"drawer", undefined>], undefined>;
export type ExplanationDisplayMode = InferOutput<typeof ExplanationDisplayModeSchema>;
export declare const ExplanationConfigSchema: import("valibot").ObjectSchema<{
    readonly enabled: import("valibot").OptionalSchema<import("valibot").BooleanSchema<undefined>, undefined>;
    readonly title: import("valibot").OptionalSchema<import("valibot").StringSchema<undefined>, undefined>;
    readonly content: import("valibot").StringSchema<undefined>;
    readonly displayMode: import("valibot").OptionalSchema<import("valibot").UnionSchema<[import("valibot").LiteralSchema<"card", undefined>, import("valibot").LiteralSchema<"tooltip", undefined>, import("valibot").LiteralSchema<"modal", undefined>, import("valibot").LiteralSchema<"inline", undefined>, import("valibot").LiteralSchema<"toast", undefined>, import("valibot").LiteralSchema<"banner", undefined>, import("valibot").LiteralSchema<"drawer", undefined>], undefined>, undefined>;
    readonly showOnlyFirstTime: import("valibot").OptionalSchema<import("valibot").BooleanSchema<undefined>, undefined>;
    readonly dismissible: import("valibot").OptionalSchema<import("valibot").BooleanSchema<undefined>, undefined>;
    readonly displayDuration: import("valibot").OptionalSchema<import("valibot").NumberSchema<undefined>, undefined>;
    readonly icon: import("valibot").OptionalSchema<import("valibot").StringSchema<undefined>, undefined>;
    readonly customClass: import("valibot").OptionalSchema<import("valibot").StringSchema<undefined>, undefined>;
}, undefined>;
export type ExplanationConfig = InferOutput<typeof ExplanationConfigSchema>;
export declare const PostActionConfigSchema: import("valibot").ObjectSchema<{
    readonly enabled: import("valibot").OptionalSchema<import("valibot").BooleanSchema<undefined>, undefined>;
    readonly content: import("valibot").StringSchema<undefined>;
    readonly successMessage: import("valibot").OptionalSchema<import("valibot").StringSchema<undefined>, undefined>;
    readonly errorMessage: import("valibot").OptionalSchema<import("valibot").StringSchema<undefined>, undefined>;
    readonly buttons: import("valibot").OptionalSchema<import("valibot").ArraySchema<import("valibot").ObjectSchema<{
        readonly label: import("valibot").StringSchema<undefined>;
        readonly action: import("valibot").UnionSchema<[import("valibot").LiteralSchema<"continue", undefined>, import("valibot").LiteralSchema<"viewMySuggestions", undefined>, import("valibot").LiteralSchema<"addAnother", undefined>, import("valibot").LiteralSchema<"skip", undefined>, import("valibot").LiteralSchema<"custom", undefined>], undefined>;
        readonly primary: import("valibot").OptionalSchema<import("valibot").BooleanSchema<undefined>, undefined>;
        readonly customUrl: import("valibot").OptionalSchema<import("valibot").StringSchema<undefined>, undefined>;
    }, undefined>, undefined>, undefined>;
    readonly autoAdvance: import("valibot").OptionalSchema<import("valibot").ObjectSchema<{
        readonly enabled: import("valibot").BooleanSchema<undefined>;
        readonly delay: import("valibot").NumberSchema<undefined>;
        readonly target: import("valibot").OptionalSchema<import("valibot").UnionSchema<[import("valibot").LiteralSchema<"next", undefined>, import("valibot").LiteralSchema<"specific", undefined>], undefined>, undefined>;
        readonly targetStageId: import("valibot").OptionalSchema<import("valibot").StringSchema<undefined>, undefined>;
    }, undefined>, undefined>;
    readonly displayMode: import("valibot").OptionalSchema<import("valibot").UnionSchema<[import("valibot").LiteralSchema<"card", undefined>, import("valibot").LiteralSchema<"tooltip", undefined>, import("valibot").LiteralSchema<"modal", undefined>, import("valibot").LiteralSchema<"inline", undefined>, import("valibot").LiteralSchema<"toast", undefined>, import("valibot").LiteralSchema<"banner", undefined>, import("valibot").LiteralSchema<"drawer", undefined>], undefined>, undefined>;
}, undefined>;
export type PostActionConfig = InferOutput<typeof PostActionConfigSchema>;
export declare const MassConsensusStageSchema: import("valibot").ObjectSchema<{
    readonly id: import("valibot").StringSchema<undefined>;
    readonly type: import("valibot").EnumSchema<typeof MassConsensusStageType, undefined>;
    readonly title: import("valibot").OptionalSchema<import("valibot").StringSchema<undefined>, undefined>;
    readonly description: import("valibot").OptionalSchema<import("valibot").StringSchema<undefined>, undefined>;
    readonly url: import("valibot").OptionalSchema<import("valibot").StringSchema<undefined>, undefined>;
    readonly order: import("valibot").NumberSchema<undefined>;
    readonly skipable: import("valibot").OptionalSchema<import("valibot").BooleanSchema<undefined>, undefined>;
    readonly required: import("valibot").OptionalSchema<import("valibot").BooleanSchema<undefined>, undefined>;
    readonly condition: import("valibot").OptionalSchema<import("valibot").StringSchema<undefined>, undefined>;
    readonly beforeStage: import("valibot").OptionalSchema<import("valibot").ObjectSchema<{
        readonly enabled: import("valibot").OptionalSchema<import("valibot").BooleanSchema<undefined>, undefined>;
        readonly title: import("valibot").OptionalSchema<import("valibot").StringSchema<undefined>, undefined>;
        readonly content: import("valibot").StringSchema<undefined>;
        readonly displayMode: import("valibot").OptionalSchema<import("valibot").UnionSchema<[import("valibot").LiteralSchema<"card", undefined>, import("valibot").LiteralSchema<"tooltip", undefined>, import("valibot").LiteralSchema<"modal", undefined>, import("valibot").LiteralSchema<"inline", undefined>, import("valibot").LiteralSchema<"toast", undefined>, import("valibot").LiteralSchema<"banner", undefined>, import("valibot").LiteralSchema<"drawer", undefined>], undefined>, undefined>;
        readonly showOnlyFirstTime: import("valibot").OptionalSchema<import("valibot").BooleanSchema<undefined>, undefined>;
        readonly dismissible: import("valibot").OptionalSchema<import("valibot").BooleanSchema<undefined>, undefined>;
        readonly displayDuration: import("valibot").OptionalSchema<import("valibot").NumberSchema<undefined>, undefined>;
        readonly icon: import("valibot").OptionalSchema<import("valibot").StringSchema<undefined>, undefined>;
        readonly customClass: import("valibot").OptionalSchema<import("valibot").StringSchema<undefined>, undefined>;
    }, undefined>, undefined>;
    readonly afterAction: import("valibot").OptionalSchema<import("valibot").ObjectSchema<{
        readonly enabled: import("valibot").OptionalSchema<import("valibot").BooleanSchema<undefined>, undefined>;
        readonly content: import("valibot").StringSchema<undefined>;
        readonly successMessage: import("valibot").OptionalSchema<import("valibot").StringSchema<undefined>, undefined>;
        readonly errorMessage: import("valibot").OptionalSchema<import("valibot").StringSchema<undefined>, undefined>;
        readonly buttons: import("valibot").OptionalSchema<import("valibot").ArraySchema<import("valibot").ObjectSchema<{
            readonly label: import("valibot").StringSchema<undefined>;
            readonly action: import("valibot").UnionSchema<[import("valibot").LiteralSchema<"continue", undefined>, import("valibot").LiteralSchema<"viewMySuggestions", undefined>, import("valibot").LiteralSchema<"addAnother", undefined>, import("valibot").LiteralSchema<"skip", undefined>, import("valibot").LiteralSchema<"custom", undefined>], undefined>;
            readonly primary: import("valibot").OptionalSchema<import("valibot").BooleanSchema<undefined>, undefined>;
            readonly customUrl: import("valibot").OptionalSchema<import("valibot").StringSchema<undefined>, undefined>;
        }, undefined>, undefined>, undefined>;
        readonly autoAdvance: import("valibot").OptionalSchema<import("valibot").ObjectSchema<{
            readonly enabled: import("valibot").BooleanSchema<undefined>;
            readonly delay: import("valibot").NumberSchema<undefined>;
            readonly target: import("valibot").OptionalSchema<import("valibot").UnionSchema<[import("valibot").LiteralSchema<"next", undefined>, import("valibot").LiteralSchema<"specific", undefined>], undefined>, undefined>;
            readonly targetStageId: import("valibot").OptionalSchema<import("valibot").StringSchema<undefined>, undefined>;
        }, undefined>, undefined>;
        readonly displayMode: import("valibot").OptionalSchema<import("valibot").UnionSchema<[import("valibot").LiteralSchema<"card", undefined>, import("valibot").LiteralSchema<"tooltip", undefined>, import("valibot").LiteralSchema<"modal", undefined>, import("valibot").LiteralSchema<"inline", undefined>, import("valibot").LiteralSchema<"toast", undefined>, import("valibot").LiteralSchema<"banner", undefined>, import("valibot").LiteralSchema<"drawer", undefined>], undefined>, undefined>;
    }, undefined>, undefined>;
    readonly config: import("valibot").OptionalSchema<import("valibot").ObjectSchema<{
        readonly questionText: import("valibot").OptionalSchema<import("valibot").StringSchema<undefined>, undefined>;
        readonly maxSuggestions: import("valibot").OptionalSchema<import("valibot").NumberSchema<undefined>, undefined>;
        readonly minCharacters: import("valibot").OptionalSchema<import("valibot").NumberSchema<undefined>, undefined>;
        readonly maxCharacters: import("valibot").OptionalSchema<import("valibot").NumberSchema<undefined>, undefined>;
        readonly proposalsPerBatch: import("valibot").OptionalSchema<import("valibot").NumberSchema<undefined>, undefined>;
        readonly evaluationType: import("valibot").OptionalSchema<import("valibot").UnionSchema<[import("valibot").LiteralSchema<"rating", undefined>, import("valibot").LiteralSchema<"ranking", undefined>, import("valibot").LiteralSchema<"comparison", undefined>], undefined>, undefined>;
        readonly votingMethod: import("valibot").OptionalSchema<import("valibot").UnionSchema<[import("valibot").LiteralSchema<"single", undefined>, import("valibot").LiteralSchema<"multiple", undefined>, import("valibot").LiteralSchema<"ranked", undefined>], undefined>, undefined>;
        readonly maxVotes: import("valibot").OptionalSchema<import("valibot").NumberSchema<undefined>, undefined>;
        readonly timeLimit: import("valibot").OptionalSchema<import("valibot").NumberSchema<undefined>, undefined>;
        readonly customData: import("valibot").OptionalSchema<import("valibot").RecordSchema<import("valibot").StringSchema<undefined>, import("valibot").StringSchema<undefined>, undefined>, undefined>;
    }, undefined>, undefined>;
    readonly analytics: import("valibot").OptionalSchema<import("valibot").ObjectSchema<{
        readonly trackEntry: import("valibot").OptionalSchema<import("valibot").BooleanSchema<undefined>, undefined>;
        readonly trackExit: import("valibot").OptionalSchema<import("valibot").BooleanSchema<undefined>, undefined>;
        readonly trackDuration: import("valibot").OptionalSchema<import("valibot").BooleanSchema<undefined>, undefined>;
        readonly customEvents: import("valibot").OptionalSchema<import("valibot").ArraySchema<import("valibot").StringSchema<undefined>, undefined>, undefined>;
    }, undefined>, undefined>;
}, undefined>;
export type MassConsensusStage = InferOutput<typeof MassConsensusStageSchema>;
export declare const MassConsensusProcessSchema: import("valibot").ObjectSchema<{
    readonly statementId: import("valibot").StringSchema<undefined>;
    readonly version: import("valibot").StringSchema<undefined>;
    readonly stages: import("valibot").ArraySchema<import("valibot").ObjectSchema<{
        readonly id: import("valibot").StringSchema<undefined>;
        readonly type: import("valibot").EnumSchema<typeof MassConsensusStageType, undefined>;
        readonly title: import("valibot").OptionalSchema<import("valibot").StringSchema<undefined>, undefined>;
        readonly description: import("valibot").OptionalSchema<import("valibot").StringSchema<undefined>, undefined>;
        readonly url: import("valibot").OptionalSchema<import("valibot").StringSchema<undefined>, undefined>;
        readonly order: import("valibot").NumberSchema<undefined>;
        readonly skipable: import("valibot").OptionalSchema<import("valibot").BooleanSchema<undefined>, undefined>;
        readonly required: import("valibot").OptionalSchema<import("valibot").BooleanSchema<undefined>, undefined>;
        readonly condition: import("valibot").OptionalSchema<import("valibot").StringSchema<undefined>, undefined>;
        readonly beforeStage: import("valibot").OptionalSchema<import("valibot").ObjectSchema<{
            readonly enabled: import("valibot").OptionalSchema<import("valibot").BooleanSchema<undefined>, undefined>;
            readonly title: import("valibot").OptionalSchema<import("valibot").StringSchema<undefined>, undefined>;
            readonly content: import("valibot").StringSchema<undefined>;
            readonly displayMode: import("valibot").OptionalSchema<import("valibot").UnionSchema<[import("valibot").LiteralSchema<"card", undefined>, import("valibot").LiteralSchema<"tooltip", undefined>, import("valibot").LiteralSchema<"modal", undefined>, import("valibot").LiteralSchema<"inline", undefined>, import("valibot").LiteralSchema<"toast", undefined>, import("valibot").LiteralSchema<"banner", undefined>, import("valibot").LiteralSchema<"drawer", undefined>], undefined>, undefined>;
            readonly showOnlyFirstTime: import("valibot").OptionalSchema<import("valibot").BooleanSchema<undefined>, undefined>;
            readonly dismissible: import("valibot").OptionalSchema<import("valibot").BooleanSchema<undefined>, undefined>;
            readonly displayDuration: import("valibot").OptionalSchema<import("valibot").NumberSchema<undefined>, undefined>;
            readonly icon: import("valibot").OptionalSchema<import("valibot").StringSchema<undefined>, undefined>;
            readonly customClass: import("valibot").OptionalSchema<import("valibot").StringSchema<undefined>, undefined>;
        }, undefined>, undefined>;
        readonly afterAction: import("valibot").OptionalSchema<import("valibot").ObjectSchema<{
            readonly enabled: import("valibot").OptionalSchema<import("valibot").BooleanSchema<undefined>, undefined>;
            readonly content: import("valibot").StringSchema<undefined>;
            readonly successMessage: import("valibot").OptionalSchema<import("valibot").StringSchema<undefined>, undefined>;
            readonly errorMessage: import("valibot").OptionalSchema<import("valibot").StringSchema<undefined>, undefined>;
            readonly buttons: import("valibot").OptionalSchema<import("valibot").ArraySchema<import("valibot").ObjectSchema<{
                readonly label: import("valibot").StringSchema<undefined>;
                readonly action: import("valibot").UnionSchema<[import("valibot").LiteralSchema<"continue", undefined>, import("valibot").LiteralSchema<"viewMySuggestions", undefined>, import("valibot").LiteralSchema<"addAnother", undefined>, import("valibot").LiteralSchema<"skip", undefined>, import("valibot").LiteralSchema<"custom", undefined>], undefined>;
                readonly primary: import("valibot").OptionalSchema<import("valibot").BooleanSchema<undefined>, undefined>;
                readonly customUrl: import("valibot").OptionalSchema<import("valibot").StringSchema<undefined>, undefined>;
            }, undefined>, undefined>, undefined>;
            readonly autoAdvance: import("valibot").OptionalSchema<import("valibot").ObjectSchema<{
                readonly enabled: import("valibot").BooleanSchema<undefined>;
                readonly delay: import("valibot").NumberSchema<undefined>;
                readonly target: import("valibot").OptionalSchema<import("valibot").UnionSchema<[import("valibot").LiteralSchema<"next", undefined>, import("valibot").LiteralSchema<"specific", undefined>], undefined>, undefined>;
                readonly targetStageId: import("valibot").OptionalSchema<import("valibot").StringSchema<undefined>, undefined>;
            }, undefined>, undefined>;
            readonly displayMode: import("valibot").OptionalSchema<import("valibot").UnionSchema<[import("valibot").LiteralSchema<"card", undefined>, import("valibot").LiteralSchema<"tooltip", undefined>, import("valibot").LiteralSchema<"modal", undefined>, import("valibot").LiteralSchema<"inline", undefined>, import("valibot").LiteralSchema<"toast", undefined>, import("valibot").LiteralSchema<"banner", undefined>, import("valibot").LiteralSchema<"drawer", undefined>], undefined>, undefined>;
        }, undefined>, undefined>;
        readonly config: import("valibot").OptionalSchema<import("valibot").ObjectSchema<{
            readonly questionText: import("valibot").OptionalSchema<import("valibot").StringSchema<undefined>, undefined>;
            readonly maxSuggestions: import("valibot").OptionalSchema<import("valibot").NumberSchema<undefined>, undefined>;
            readonly minCharacters: import("valibot").OptionalSchema<import("valibot").NumberSchema<undefined>, undefined>;
            readonly maxCharacters: import("valibot").OptionalSchema<import("valibot").NumberSchema<undefined>, undefined>;
            readonly proposalsPerBatch: import("valibot").OptionalSchema<import("valibot").NumberSchema<undefined>, undefined>;
            readonly evaluationType: import("valibot").OptionalSchema<import("valibot").UnionSchema<[import("valibot").LiteralSchema<"rating", undefined>, import("valibot").LiteralSchema<"ranking", undefined>, import("valibot").LiteralSchema<"comparison", undefined>], undefined>, undefined>;
            readonly votingMethod: import("valibot").OptionalSchema<import("valibot").UnionSchema<[import("valibot").LiteralSchema<"single", undefined>, import("valibot").LiteralSchema<"multiple", undefined>, import("valibot").LiteralSchema<"ranked", undefined>], undefined>, undefined>;
            readonly maxVotes: import("valibot").OptionalSchema<import("valibot").NumberSchema<undefined>, undefined>;
            readonly timeLimit: import("valibot").OptionalSchema<import("valibot").NumberSchema<undefined>, undefined>;
            readonly customData: import("valibot").OptionalSchema<import("valibot").RecordSchema<import("valibot").StringSchema<undefined>, import("valibot").StringSchema<undefined>, undefined>, undefined>;
        }, undefined>, undefined>;
        readonly analytics: import("valibot").OptionalSchema<import("valibot").ObjectSchema<{
            readonly trackEntry: import("valibot").OptionalSchema<import("valibot").BooleanSchema<undefined>, undefined>;
            readonly trackExit: import("valibot").OptionalSchema<import("valibot").BooleanSchema<undefined>, undefined>;
            readonly trackDuration: import("valibot").OptionalSchema<import("valibot").BooleanSchema<undefined>, undefined>;
            readonly customEvents: import("valibot").OptionalSchema<import("valibot").ArraySchema<import("valibot").StringSchema<undefined>, undefined>, undefined>;
        }, undefined>, undefined>;
    }, undefined>, undefined>;
    readonly loginTypeOverrides: import("valibot").OptionalSchema<import("valibot").RecordSchema<import("valibot").EnumSchema<typeof LoginType, undefined>, import("valibot").ObjectSchema<{
        readonly stageOverrides: import("valibot").OptionalSchema<import("valibot").RecordSchema<import("valibot").StringSchema<undefined>, import("valibot").ObjectSchema<{
            readonly id: import("valibot").StringSchema<undefined>;
            readonly type: import("valibot").EnumSchema<typeof MassConsensusStageType, undefined>;
            readonly title: import("valibot").OptionalSchema<import("valibot").StringSchema<undefined>, undefined>;
            readonly description: import("valibot").OptionalSchema<import("valibot").StringSchema<undefined>, undefined>;
            readonly url: import("valibot").OptionalSchema<import("valibot").StringSchema<undefined>, undefined>;
            readonly order: import("valibot").NumberSchema<undefined>;
            readonly skipable: import("valibot").OptionalSchema<import("valibot").BooleanSchema<undefined>, undefined>;
            readonly required: import("valibot").OptionalSchema<import("valibot").BooleanSchema<undefined>, undefined>;
            readonly condition: import("valibot").OptionalSchema<import("valibot").StringSchema<undefined>, undefined>;
            readonly beforeStage: import("valibot").OptionalSchema<import("valibot").ObjectSchema<{
                readonly enabled: import("valibot").OptionalSchema<import("valibot").BooleanSchema<undefined>, undefined>;
                readonly title: import("valibot").OptionalSchema<import("valibot").StringSchema<undefined>, undefined>;
                readonly content: import("valibot").StringSchema<undefined>;
                readonly displayMode: import("valibot").OptionalSchema<import("valibot").UnionSchema<[import("valibot").LiteralSchema<"card", undefined>, import("valibot").LiteralSchema<"tooltip", undefined>, import("valibot").LiteralSchema<"modal", undefined>, import("valibot").LiteralSchema<"inline", undefined>, import("valibot").LiteralSchema<"toast", undefined>, import("valibot").LiteralSchema<"banner", undefined>, import("valibot").LiteralSchema<"drawer", undefined>], undefined>, undefined>;
                readonly showOnlyFirstTime: import("valibot").OptionalSchema<import("valibot").BooleanSchema<undefined>, undefined>;
                readonly dismissible: import("valibot").OptionalSchema<import("valibot").BooleanSchema<undefined>, undefined>;
                readonly displayDuration: import("valibot").OptionalSchema<import("valibot").NumberSchema<undefined>, undefined>;
                readonly icon: import("valibot").OptionalSchema<import("valibot").StringSchema<undefined>, undefined>;
                readonly customClass: import("valibot").OptionalSchema<import("valibot").StringSchema<undefined>, undefined>;
            }, undefined>, undefined>;
            readonly afterAction: import("valibot").OptionalSchema<import("valibot").ObjectSchema<{
                readonly enabled: import("valibot").OptionalSchema<import("valibot").BooleanSchema<undefined>, undefined>;
                readonly content: import("valibot").StringSchema<undefined>;
                readonly successMessage: import("valibot").OptionalSchema<import("valibot").StringSchema<undefined>, undefined>;
                readonly errorMessage: import("valibot").OptionalSchema<import("valibot").StringSchema<undefined>, undefined>;
                readonly buttons: import("valibot").OptionalSchema<import("valibot").ArraySchema<import("valibot").ObjectSchema<{
                    readonly label: import("valibot").StringSchema<undefined>;
                    readonly action: import("valibot").UnionSchema<[import("valibot").LiteralSchema<"continue", undefined>, import("valibot").LiteralSchema<"viewMySuggestions", undefined>, import("valibot").LiteralSchema<"addAnother", undefined>, import("valibot").LiteralSchema<"skip", undefined>, import("valibot").LiteralSchema<"custom", undefined>], undefined>;
                    readonly primary: import("valibot").OptionalSchema<import("valibot").BooleanSchema<undefined>, undefined>;
                    readonly customUrl: import("valibot").OptionalSchema<import("valibot").StringSchema<undefined>, undefined>;
                }, undefined>, undefined>, undefined>;
                readonly autoAdvance: import("valibot").OptionalSchema<import("valibot").ObjectSchema<{
                    readonly enabled: import("valibot").BooleanSchema<undefined>;
                    readonly delay: import("valibot").NumberSchema<undefined>;
                    readonly target: import("valibot").OptionalSchema<import("valibot").UnionSchema<[import("valibot").LiteralSchema<"next", undefined>, import("valibot").LiteralSchema<"specific", undefined>], undefined>, undefined>;
                    readonly targetStageId: import("valibot").OptionalSchema<import("valibot").StringSchema<undefined>, undefined>;
                }, undefined>, undefined>;
                readonly displayMode: import("valibot").OptionalSchema<import("valibot").UnionSchema<[import("valibot").LiteralSchema<"card", undefined>, import("valibot").LiteralSchema<"tooltip", undefined>, import("valibot").LiteralSchema<"modal", undefined>, import("valibot").LiteralSchema<"inline", undefined>, import("valibot").LiteralSchema<"toast", undefined>, import("valibot").LiteralSchema<"banner", undefined>, import("valibot").LiteralSchema<"drawer", undefined>], undefined>, undefined>;
            }, undefined>, undefined>;
            readonly config: import("valibot").OptionalSchema<import("valibot").ObjectSchema<{
                readonly questionText: import("valibot").OptionalSchema<import("valibot").StringSchema<undefined>, undefined>;
                readonly maxSuggestions: import("valibot").OptionalSchema<import("valibot").NumberSchema<undefined>, undefined>;
                readonly minCharacters: import("valibot").OptionalSchema<import("valibot").NumberSchema<undefined>, undefined>;
                readonly maxCharacters: import("valibot").OptionalSchema<import("valibot").NumberSchema<undefined>, undefined>;
                readonly proposalsPerBatch: import("valibot").OptionalSchema<import("valibot").NumberSchema<undefined>, undefined>;
                readonly evaluationType: import("valibot").OptionalSchema<import("valibot").UnionSchema<[import("valibot").LiteralSchema<"rating", undefined>, import("valibot").LiteralSchema<"ranking", undefined>, import("valibot").LiteralSchema<"comparison", undefined>], undefined>, undefined>;
                readonly votingMethod: import("valibot").OptionalSchema<import("valibot").UnionSchema<[import("valibot").LiteralSchema<"single", undefined>, import("valibot").LiteralSchema<"multiple", undefined>, import("valibot").LiteralSchema<"ranked", undefined>], undefined>, undefined>;
                readonly maxVotes: import("valibot").OptionalSchema<import("valibot").NumberSchema<undefined>, undefined>;
                readonly timeLimit: import("valibot").OptionalSchema<import("valibot").NumberSchema<undefined>, undefined>;
                readonly customData: import("valibot").OptionalSchema<import("valibot").RecordSchema<import("valibot").StringSchema<undefined>, import("valibot").StringSchema<undefined>, undefined>, undefined>;
            }, undefined>, undefined>;
            readonly analytics: import("valibot").OptionalSchema<import("valibot").ObjectSchema<{
                readonly trackEntry: import("valibot").OptionalSchema<import("valibot").BooleanSchema<undefined>, undefined>;
                readonly trackExit: import("valibot").OptionalSchema<import("valibot").BooleanSchema<undefined>, undefined>;
                readonly trackDuration: import("valibot").OptionalSchema<import("valibot").BooleanSchema<undefined>, undefined>;
                readonly customEvents: import("valibot").OptionalSchema<import("valibot").ArraySchema<import("valibot").StringSchema<undefined>, undefined>, undefined>;
            }, undefined>, undefined>;
        }, undefined>, undefined>, undefined>;
        readonly excludeStages: import("valibot").OptionalSchema<import("valibot").ArraySchema<import("valibot").StringSchema<undefined>, undefined>, undefined>;
        readonly additionalStages: import("valibot").OptionalSchema<import("valibot").ArraySchema<import("valibot").ObjectSchema<{
            readonly id: import("valibot").StringSchema<undefined>;
            readonly type: import("valibot").EnumSchema<typeof MassConsensusStageType, undefined>;
            readonly title: import("valibot").OptionalSchema<import("valibot").StringSchema<undefined>, undefined>;
            readonly description: import("valibot").OptionalSchema<import("valibot").StringSchema<undefined>, undefined>;
            readonly url: import("valibot").OptionalSchema<import("valibot").StringSchema<undefined>, undefined>;
            readonly order: import("valibot").NumberSchema<undefined>;
            readonly skipable: import("valibot").OptionalSchema<import("valibot").BooleanSchema<undefined>, undefined>;
            readonly required: import("valibot").OptionalSchema<import("valibot").BooleanSchema<undefined>, undefined>;
            readonly condition: import("valibot").OptionalSchema<import("valibot").StringSchema<undefined>, undefined>;
            readonly beforeStage: import("valibot").OptionalSchema<import("valibot").ObjectSchema<{
                readonly enabled: import("valibot").OptionalSchema<import("valibot").BooleanSchema<undefined>, undefined>;
                readonly title: import("valibot").OptionalSchema<import("valibot").StringSchema<undefined>, undefined>;
                readonly content: import("valibot").StringSchema<undefined>;
                readonly displayMode: import("valibot").OptionalSchema<import("valibot").UnionSchema<[import("valibot").LiteralSchema<"card", undefined>, import("valibot").LiteralSchema<"tooltip", undefined>, import("valibot").LiteralSchema<"modal", undefined>, import("valibot").LiteralSchema<"inline", undefined>, import("valibot").LiteralSchema<"toast", undefined>, import("valibot").LiteralSchema<"banner", undefined>, import("valibot").LiteralSchema<"drawer", undefined>], undefined>, undefined>;
                readonly showOnlyFirstTime: import("valibot").OptionalSchema<import("valibot").BooleanSchema<undefined>, undefined>;
                readonly dismissible: import("valibot").OptionalSchema<import("valibot").BooleanSchema<undefined>, undefined>;
                readonly displayDuration: import("valibot").OptionalSchema<import("valibot").NumberSchema<undefined>, undefined>;
                readonly icon: import("valibot").OptionalSchema<import("valibot").StringSchema<undefined>, undefined>;
                readonly customClass: import("valibot").OptionalSchema<import("valibot").StringSchema<undefined>, undefined>;
            }, undefined>, undefined>;
            readonly afterAction: import("valibot").OptionalSchema<import("valibot").ObjectSchema<{
                readonly enabled: import("valibot").OptionalSchema<import("valibot").BooleanSchema<undefined>, undefined>;
                readonly content: import("valibot").StringSchema<undefined>;
                readonly successMessage: import("valibot").OptionalSchema<import("valibot").StringSchema<undefined>, undefined>;
                readonly errorMessage: import("valibot").OptionalSchema<import("valibot").StringSchema<undefined>, undefined>;
                readonly buttons: import("valibot").OptionalSchema<import("valibot").ArraySchema<import("valibot").ObjectSchema<{
                    readonly label: import("valibot").StringSchema<undefined>;
                    readonly action: import("valibot").UnionSchema<[import("valibot").LiteralSchema<"continue", undefined>, import("valibot").LiteralSchema<"viewMySuggestions", undefined>, import("valibot").LiteralSchema<"addAnother", undefined>, import("valibot").LiteralSchema<"skip", undefined>, import("valibot").LiteralSchema<"custom", undefined>], undefined>;
                    readonly primary: import("valibot").OptionalSchema<import("valibot").BooleanSchema<undefined>, undefined>;
                    readonly customUrl: import("valibot").OptionalSchema<import("valibot").StringSchema<undefined>, undefined>;
                }, undefined>, undefined>, undefined>;
                readonly autoAdvance: import("valibot").OptionalSchema<import("valibot").ObjectSchema<{
                    readonly enabled: import("valibot").BooleanSchema<undefined>;
                    readonly delay: import("valibot").NumberSchema<undefined>;
                    readonly target: import("valibot").OptionalSchema<import("valibot").UnionSchema<[import("valibot").LiteralSchema<"next", undefined>, import("valibot").LiteralSchema<"specific", undefined>], undefined>, undefined>;
                    readonly targetStageId: import("valibot").OptionalSchema<import("valibot").StringSchema<undefined>, undefined>;
                }, undefined>, undefined>;
                readonly displayMode: import("valibot").OptionalSchema<import("valibot").UnionSchema<[import("valibot").LiteralSchema<"card", undefined>, import("valibot").LiteralSchema<"tooltip", undefined>, import("valibot").LiteralSchema<"modal", undefined>, import("valibot").LiteralSchema<"inline", undefined>, import("valibot").LiteralSchema<"toast", undefined>, import("valibot").LiteralSchema<"banner", undefined>, import("valibot").LiteralSchema<"drawer", undefined>], undefined>, undefined>;
            }, undefined>, undefined>;
            readonly config: import("valibot").OptionalSchema<import("valibot").ObjectSchema<{
                readonly questionText: import("valibot").OptionalSchema<import("valibot").StringSchema<undefined>, undefined>;
                readonly maxSuggestions: import("valibot").OptionalSchema<import("valibot").NumberSchema<undefined>, undefined>;
                readonly minCharacters: import("valibot").OptionalSchema<import("valibot").NumberSchema<undefined>, undefined>;
                readonly maxCharacters: import("valibot").OptionalSchema<import("valibot").NumberSchema<undefined>, undefined>;
                readonly proposalsPerBatch: import("valibot").OptionalSchema<import("valibot").NumberSchema<undefined>, undefined>;
                readonly evaluationType: import("valibot").OptionalSchema<import("valibot").UnionSchema<[import("valibot").LiteralSchema<"rating", undefined>, import("valibot").LiteralSchema<"ranking", undefined>, import("valibot").LiteralSchema<"comparison", undefined>], undefined>, undefined>;
                readonly votingMethod: import("valibot").OptionalSchema<import("valibot").UnionSchema<[import("valibot").LiteralSchema<"single", undefined>, import("valibot").LiteralSchema<"multiple", undefined>, import("valibot").LiteralSchema<"ranked", undefined>], undefined>, undefined>;
                readonly maxVotes: import("valibot").OptionalSchema<import("valibot").NumberSchema<undefined>, undefined>;
                readonly timeLimit: import("valibot").OptionalSchema<import("valibot").NumberSchema<undefined>, undefined>;
                readonly customData: import("valibot").OptionalSchema<import("valibot").RecordSchema<import("valibot").StringSchema<undefined>, import("valibot").StringSchema<undefined>, undefined>, undefined>;
            }, undefined>, undefined>;
            readonly analytics: import("valibot").OptionalSchema<import("valibot").ObjectSchema<{
                readonly trackEntry: import("valibot").OptionalSchema<import("valibot").BooleanSchema<undefined>, undefined>;
                readonly trackExit: import("valibot").OptionalSchema<import("valibot").BooleanSchema<undefined>, undefined>;
                readonly trackDuration: import("valibot").OptionalSchema<import("valibot").BooleanSchema<undefined>, undefined>;
                readonly customEvents: import("valibot").OptionalSchema<import("valibot").ArraySchema<import("valibot").StringSchema<undefined>, undefined>, undefined>;
            }, undefined>, undefined>;
        }, undefined>, undefined>, undefined>;
    }, undefined>, undefined>, undefined>;
    readonly settings: import("valibot").OptionalSchema<import("valibot").ObjectSchema<{
        readonly explanationsEnabled: import("valibot").OptionalSchema<import("valibot").BooleanSchema<undefined>, undefined>;
        readonly defaultExplanationMode: import("valibot").OptionalSchema<import("valibot").UnionSchema<[import("valibot").LiteralSchema<"card", undefined>, import("valibot").LiteralSchema<"tooltip", undefined>, import("valibot").LiteralSchema<"modal", undefined>, import("valibot").LiteralSchema<"inline", undefined>, import("valibot").LiteralSchema<"toast", undefined>, import("valibot").LiteralSchema<"banner", undefined>, import("valibot").LiteralSchema<"drawer", undefined>], undefined>, undefined>;
        readonly progressIndicator: import("valibot").OptionalSchema<import("valibot").BooleanSchema<undefined>, undefined>;
        readonly allowBackNavigation: import("valibot").OptionalSchema<import("valibot").BooleanSchema<undefined>, undefined>;
        readonly saveProgress: import("valibot").OptionalSchema<import("valibot").BooleanSchema<undefined>, undefined>;
        readonly resumeFromLastStage: import("valibot").OptionalSchema<import("valibot").BooleanSchema<undefined>, undefined>;
        readonly completionRedirectUrl: import("valibot").OptionalSchema<import("valibot").StringSchema<undefined>, undefined>;
    }, undefined>, undefined>;
    readonly createdAt: import("valibot").NumberSchema<undefined>;
    readonly updatedAt: import("valibot").OptionalSchema<import("valibot").NumberSchema<undefined>, undefined>;
    readonly createdBy: import("valibot").StringSchema<undefined>;
    readonly updatedBy: import("valibot").OptionalSchema<import("valibot").StringSchema<undefined>, undefined>;
}, undefined>;
export type MassConsensusProcess = InferOutput<typeof MassConsensusProcessSchema>;
export declare const MassConsensusMemberSchema: import("valibot").ObjectSchema<{
    readonly statementId: import("valibot").StringSchema<undefined>;
    readonly lastUpdate: import("valibot").NumberSchema<undefined>;
    readonly email: import("valibot").OptionalSchema<import("valibot").NullableSchema<import("valibot").StringSchema<undefined>, undefined>, undefined>;
    readonly creator: import("valibot").ObjectSchema<{
        readonly displayName: import("valibot").StringSchema<undefined>;
        readonly photoURL: import("valibot").OptionalSchema<import("valibot").NullableSchema<import("valibot").StringSchema<undefined>, undefined>, undefined>;
        readonly uid: import("valibot").StringSchema<undefined>;
        readonly isAnonymous: import("valibot").OptionalSchema<import("valibot").BooleanSchema<undefined>, undefined>;
        readonly email: import("valibot").OptionalSchema<import("valibot").NullableSchema<import("valibot").StringSchema<undefined>, undefined>, undefined>;
        readonly advanceUser: import("valibot").OptionalSchema<import("valibot").BooleanSchema<undefined>, undefined>;
    }, undefined>;
    readonly progress: import("valibot").OptionalSchema<import("valibot").ObjectSchema<{
        readonly currentStageId: import("valibot").StringSchema<undefined>;
        readonly completedStages: import("valibot").ArraySchema<import("valibot").ObjectSchema<{
            readonly stageId: import("valibot").StringSchema<undefined>;
            readonly completedAt: import("valibot").NumberSchema<undefined>;
            readonly duration: import("valibot").OptionalSchema<import("valibot").NumberSchema<undefined>, undefined>;
        }, undefined>, undefined>;
        readonly seenExplanations: import("valibot").ArraySchema<import("valibot").StringSchema<undefined>, undefined>;
        readonly skippedStages: import("valibot").OptionalSchema<import("valibot").ArraySchema<import("valibot").StringSchema<undefined>, undefined>, undefined>;
    }, undefined>, undefined>;
    readonly preferences: import("valibot").OptionalSchema<import("valibot").ObjectSchema<{
        readonly dontShowExplanations: import("valibot").OptionalSchema<import("valibot").BooleanSchema<undefined>, undefined>;
        readonly preferredExplanationMode: import("valibot").OptionalSchema<import("valibot").UnionSchema<[import("valibot").LiteralSchema<"card", undefined>, import("valibot").LiteralSchema<"tooltip", undefined>, import("valibot").LiteralSchema<"modal", undefined>, import("valibot").LiteralSchema<"inline", undefined>, import("valibot").LiteralSchema<"toast", undefined>, import("valibot").LiteralSchema<"banner", undefined>, import("valibot").LiteralSchema<"drawer", undefined>], undefined>, undefined>;
    }, undefined>, undefined>;
}, undefined>;
export type MassConsensusMember = InferOutput<typeof MassConsensusMemberSchema>;
export declare const defaultStageTemplates: Record<MassConsensusStageType, Partial<MassConsensusStage>>;
