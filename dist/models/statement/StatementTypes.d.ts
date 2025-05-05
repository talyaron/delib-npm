import { InferOutput } from 'valibot';
import { DeliberativeElement, DocumentType, StatementType } from '../TypeEnums';
import { StageSelectionType } from '../stage/stageTypes';
export declare const StatementSchema: import("valibot").ObjectSchema<{
    readonly allowAnonymousLogin: import("valibot").OptionalSchema<import("valibot").BooleanSchema<undefined>, undefined>;
    readonly statement: import("valibot").StringSchema<undefined>;
    readonly description: import("valibot").OptionalSchema<import("valibot").StringSchema<undefined>, undefined>;
    readonly statementId: import("valibot").StringSchema<undefined>;
    readonly creatorId: import("valibot").StringSchema<undefined>;
    readonly creator: import("valibot").ObjectSchema<{
        readonly displayName: import("valibot").StringSchema<undefined>;
        readonly defaultLanguage: import("valibot").OptionalSchema<import("valibot").StringSchema<undefined>, undefined>;
        readonly email: import("valibot").OptionalSchema<import("valibot").NullableSchema<import("valibot").StringSchema<undefined>, undefined>, undefined>;
        readonly photoURL: import("valibot").OptionalSchema<import("valibot").NullableSchema<import("valibot").StringSchema<undefined>, undefined>, undefined>;
        readonly uid: import("valibot").StringSchema<undefined>;
        readonly isAnonymous: import("valibot").OptionalSchema<import("valibot").BooleanSchema<undefined>, undefined>;
        readonly fontSize: import("valibot").OptionalSchema<import("valibot").NullableSchema<import("valibot").NumberSchema<undefined>, undefined>, undefined>;
        readonly color: import("valibot").OptionalSchema<import("valibot").StringSchema<undefined>, undefined>;
        readonly agreement: import("valibot").OptionalSchema<import("valibot").NullableSchema<import("valibot").ObjectSchema<{
            readonly text: import("valibot").StringSchema<undefined>;
            readonly date: import("valibot").NumberSchema<undefined>;
            readonly version: import("valibot").StringSchema<undefined>;
        }, undefined>, undefined>, undefined>;
        readonly role: import("valibot").OptionalSchema<import("valibot").StringSchema<undefined>, undefined>;
    }, undefined>;
    readonly statementType: import("valibot").EnumSchema<typeof StatementType, undefined>;
    readonly deliberativeElement: import("valibot").OptionalSchema<import("valibot").EnumSchema<typeof DeliberativeElement, undefined>, undefined>;
    readonly color: import("valibot").OptionalSchema<import("valibot").StringSchema<undefined>, undefined>;
    readonly defaultLanguage: import("valibot").OptionalSchema<import("valibot").StringSchema<undefined>, undefined>;
    readonly followMe: import("valibot").OptionalSchema<import("valibot").StringSchema<undefined>, undefined>;
    readonly parentId: import("valibot").StringSchema<undefined>;
    readonly parents: import("valibot").OptionalSchema<import("valibot").ArraySchema<import("valibot").StringSchema<undefined>, undefined>, undefined>;
    readonly topParentId: import("valibot").StringSchema<undefined>;
    readonly hasChildren: import("valibot").OptionalSchema<import("valibot").BooleanSchema<undefined>, undefined>;
    readonly lastMessage: import("valibot").OptionalSchema<import("valibot").ObjectSchema<{
        readonly message: import("valibot").StringSchema<undefined>;
        readonly creator: import("valibot").StringSchema<undefined>;
        readonly createdAt: import("valibot").NumberSchema<undefined>;
    }, undefined>, undefined>;
    readonly lastUpdate: import("valibot").NumberSchema<undefined>;
    readonly lastChildUpdate: import("valibot").OptionalSchema<import("valibot").NumberSchema<undefined>, undefined>;
    readonly createdAt: import("valibot").NumberSchema<undefined>;
    readonly pro: import("valibot").OptionalSchema<import("valibot").NumberSchema<undefined>, undefined>;
    readonly con: import("valibot").OptionalSchema<import("valibot").NumberSchema<undefined>, undefined>;
    readonly doc: import("valibot").OptionalSchema<import("valibot").ObjectSchema<{
        readonly isDoc: import("valibot").BooleanSchema<undefined>;
        readonly order: import("valibot").NumberSchema<undefined>;
    }, undefined>, undefined>;
    readonly consensus: import("valibot").NumberSchema<undefined>;
    readonly order: import("valibot").OptionalSchema<import("valibot").NumberSchema<undefined>, undefined>;
    readonly elementHight: import("valibot").OptionalSchema<import("valibot").NumberSchema<undefined>, undefined>;
    readonly top: import("valibot").OptionalSchema<import("valibot").NumberSchema<undefined>, undefined>;
    readonly suggestions: import("valibot").OptionalSchema<import("valibot").NumberSchema<undefined>, undefined>;
    readonly optionContributors: import("valibot").OptionalSchema<import("valibot").NumberSchema<undefined>, undefined>;
    readonly massMembers: import("valibot").OptionalSchema<import("valibot").NumberSchema<undefined>, undefined>;
    readonly votes: import("valibot").OptionalSchema<import("valibot").NumberSchema<undefined>, undefined>;
    readonly topVotedOption: import("valibot").OptionalSchema<import("valibot").ObjectSchema<{
        readonly statementId: import("valibot").StringSchema<undefined>;
        readonly statement: import("valibot").StringSchema<undefined>;
        readonly statementType: import("valibot").EnumSchema<typeof StatementType, undefined>;
        readonly description: import("valibot").OptionalSchema<import("valibot").StringSchema<undefined>, undefined>;
        readonly creatorId: import("valibot").StringSchema<undefined>;
        readonly creator: import("valibot").ObjectSchema<{
            readonly displayName: import("valibot").StringSchema<undefined>;
            readonly defaultLanguage: import("valibot").OptionalSchema<import("valibot").StringSchema<undefined>, undefined>;
            readonly email: import("valibot").OptionalSchema<import("valibot").NullableSchema<import("valibot").StringSchema<undefined>, undefined>, undefined>;
            readonly photoURL: import("valibot").OptionalSchema<import("valibot").NullableSchema<import("valibot").StringSchema<undefined>, undefined>, undefined>;
            readonly uid: import("valibot").StringSchema<undefined>;
            readonly isAnonymous: import("valibot").OptionalSchema<import("valibot").BooleanSchema<undefined>, undefined>;
            readonly fontSize: import("valibot").OptionalSchema<import("valibot").NullableSchema<import("valibot").NumberSchema<undefined>, undefined>, undefined>;
            readonly color: import("valibot").OptionalSchema<import("valibot").StringSchema<undefined>, undefined>;
            readonly agreement: import("valibot").OptionalSchema<import("valibot").NullableSchema<import("valibot").ObjectSchema<{
                readonly text: import("valibot").StringSchema<undefined>;
                readonly date: import("valibot").NumberSchema<undefined>;
                readonly version: import("valibot").StringSchema<undefined>;
            }, undefined>, undefined>, undefined>;
            readonly role: import("valibot").OptionalSchema<import("valibot").StringSchema<undefined>, undefined>;
        }, undefined>;
        readonly parentId: import("valibot").StringSchema<undefined>;
        readonly consensus: import("valibot").NumberSchema<undefined>;
        readonly imageURL: import("valibot").OptionalSchema<import("valibot").StringSchema<undefined>, undefined>;
        readonly voted: import("valibot").OptionalSchema<import("valibot").NumberSchema<undefined>, undefined>;
    }, undefined>, undefined>;
    readonly selections: import("valibot").OptionalSchema<import("valibot").AnySchema, undefined>;
    readonly isSelected: import("valibot").OptionalSchema<import("valibot").BooleanSchema<undefined>, undefined>;
    readonly isCluster: import("valibot").OptionalSchema<import("valibot").BooleanSchema<undefined>, undefined>;
    readonly voted: import("valibot").OptionalSchema<import("valibot").NumberSchema<undefined>, undefined>;
    readonly totalSubStatements: import("valibot").OptionalSchema<import("valibot").NumberSchema<undefined>, undefined>;
    readonly membership: import("valibot").OptionalSchema<import("valibot").ObjectSchema<{
        readonly adminApproveMembers: import("valibot").OptionalSchema<import("valibot").BooleanSchema<undefined>, undefined>;
        readonly access: import("valibot").OptionalSchema<import("valibot").EnumSchema<typeof import("../TypeEnums").Access, undefined>, undefined>;
        readonly typeOfMembersAllowed: import("valibot").OptionalSchema<import("valibot").EnumSchema<typeof import("../TypeEnums").membersAllowed, undefined>, undefined>;
    }, undefined>, undefined>;
    readonly maxConsensus: import("valibot").OptionalSchema<import("valibot").NumberSchema<undefined>, undefined>;
    readonly selected: import("valibot").OptionalSchema<import("valibot").BooleanSchema<undefined>, undefined>;
    readonly isVoted: import("valibot").OptionalSchema<import("valibot").BooleanSchema<undefined>, undefined>;
    readonly results: import("valibot").OptionalSchema<import("valibot").ArraySchema<import("valibot").ObjectSchema<{
        readonly statementId: import("valibot").StringSchema<undefined>;
        readonly statement: import("valibot").StringSchema<undefined>;
        readonly statementType: import("valibot").EnumSchema<typeof StatementType, undefined>;
        readonly description: import("valibot").OptionalSchema<import("valibot").StringSchema<undefined>, undefined>;
        readonly creatorId: import("valibot").StringSchema<undefined>;
        readonly creator: import("valibot").ObjectSchema<{
            readonly displayName: import("valibot").StringSchema<undefined>;
            readonly defaultLanguage: import("valibot").OptionalSchema<import("valibot").StringSchema<undefined>, undefined>;
            readonly email: import("valibot").OptionalSchema<import("valibot").NullableSchema<import("valibot").StringSchema<undefined>, undefined>, undefined>;
            readonly photoURL: import("valibot").OptionalSchema<import("valibot").NullableSchema<import("valibot").StringSchema<undefined>, undefined>, undefined>;
            readonly uid: import("valibot").StringSchema<undefined>;
            readonly isAnonymous: import("valibot").OptionalSchema<import("valibot").BooleanSchema<undefined>, undefined>;
            readonly fontSize: import("valibot").OptionalSchema<import("valibot").NullableSchema<import("valibot").NumberSchema<undefined>, undefined>, undefined>;
            readonly color: import("valibot").OptionalSchema<import("valibot").StringSchema<undefined>, undefined>;
            readonly agreement: import("valibot").OptionalSchema<import("valibot").NullableSchema<import("valibot").ObjectSchema<{
                readonly text: import("valibot").StringSchema<undefined>;
                readonly date: import("valibot").NumberSchema<undefined>;
                readonly version: import("valibot").StringSchema<undefined>;
            }, undefined>, undefined>, undefined>;
            readonly role: import("valibot").OptionalSchema<import("valibot").StringSchema<undefined>, undefined>;
        }, undefined>;
        readonly parentId: import("valibot").StringSchema<undefined>;
        readonly consensus: import("valibot").NumberSchema<undefined>;
        readonly imageURL: import("valibot").OptionalSchema<import("valibot").StringSchema<undefined>, undefined>;
        readonly voted: import("valibot").OptionalSchema<import("valibot").NumberSchema<undefined>, undefined>;
    }, undefined>, undefined>, undefined>;
    readonly isResult: import("valibot").OptionalSchema<import("valibot").BooleanSchema<undefined>, undefined>;
    readonly imagesURL: import("valibot").OptionalSchema<import("valibot").ObjectSchema<{
        readonly main: import("valibot").OptionalSchema<import("valibot").StringSchema<undefined>, undefined>;
        readonly more: import("valibot").OptionalSchema<import("valibot").ArraySchema<import("valibot").StringSchema<undefined>, undefined>, undefined>;
    }, undefined>, undefined>;
    readonly totalEvaluators: import("valibot").OptionalSchema<import("valibot").NumberSchema<undefined>, undefined>;
    readonly isInMultiStage: import("valibot").OptionalSchema<import("valibot").BooleanSchema<undefined>, undefined>;
    readonly documentApproval: import("valibot").OptionalSchema<import("valibot").ObjectSchema<{
        readonly approved: import("valibot").NumberSchema<undefined>;
        readonly totalVoters: import("valibot").NumberSchema<undefined>;
        readonly averageApproval: import("valibot").NumberSchema<undefined>;
    }, undefined>, undefined>;
    readonly documentImportance: import("valibot").OptionalSchema<import("valibot").ObjectSchema<{
        readonly numberOfUsers: import("valibot").NumberSchema<undefined>;
        readonly averageImportance: import("valibot").NumberSchema<undefined>;
        readonly sumImportance: import("valibot").NumberSchema<undefined>;
    }, undefined>, undefined>;
    readonly documentAgree: import("valibot").OptionalSchema<import("valibot").ObjectSchema<{
        readonly agree: import("valibot").OptionalSchema<import("valibot").NumberSchema<undefined>, undefined>;
        readonly disagree: import("valibot").OptionalSchema<import("valibot").NumberSchema<undefined>, undefined>;
        readonly avgAgree: import("valibot").OptionalSchema<import("valibot").NumberSchema<undefined>, undefined>;
    }, undefined>, undefined>;
    readonly stageId: import("valibot").OptionalSchema<import("valibot").NullableSchema<import("valibot").StringSchema<undefined>, undefined>, undefined>;
    readonly viewed: import("valibot").OptionalSchema<import("valibot").ObjectSchema<{
        readonly individualViews: import("valibot").OptionalSchema<import("valibot").NumberSchema<undefined>, undefined>;
    }, undefined>, undefined>;
    readonly stageSelectionType: import("valibot").OptionalSchema<import("valibot").EnumSchema<typeof StageSelectionType, undefined>, undefined>;
    readonly creatorData: import("valibot").OptionalSchema<import("valibot").ObjectSchema<{
        readonly userId: import("valibot").StringSchema<undefined>;
        readonly email: import("valibot").OptionalSchema<import("valibot").StringSchema<undefined>, undefined>;
        readonly displayName: import("valibot").OptionalSchema<import("valibot").StringSchema<undefined>, undefined>;
        readonly city: import("valibot").OptionalSchema<import("valibot").StringSchema<undefined>, undefined>;
        readonly country: import("valibot").OptionalSchema<import("valibot").StringSchema<undefined>, undefined>;
        readonly dateOfBirth: import("valibot").OptionalSchema<import("valibot").NumberSchema<undefined>, undefined>;
    }, undefined>, undefined>;
    readonly isChosen: import("valibot").OptionalSchema<import("valibot").BooleanSchema<undefined>, undefined>;
    readonly chosenSolutions: import("valibot").OptionalSchema<import("valibot").ArraySchema<import("valibot").StringSchema<undefined>, undefined>, undefined>;
    readonly summary: import("valibot").OptionalSchema<import("valibot").StringSchema<undefined>, undefined>;
    readonly evaluation: import("valibot").OptionalSchema<import("valibot").ObjectSchema<{
        readonly sumEvaluations: import("valibot").NumberSchema<undefined>;
        readonly agreement: import("valibot").NumberSchema<undefined>;
        readonly numberOfEvaluators: import("valibot").NumberSchema<undefined>;
        readonly sumPro: import("valibot").OptionalSchema<import("valibot").NumberSchema<undefined>, undefined>;
        readonly sumCon: import("valibot").OptionalSchema<import("valibot").NumberSchema<undefined>, undefined>;
        readonly viewed: import("valibot").OptionalSchema<import("valibot").NumberSchema<undefined>, undefined>;
        readonly evaluationRandomNumber: import("valibot").OptionalSchema<import("valibot").NumberSchema<undefined>, undefined>;
        readonly selectionFunction: import("valibot").OptionalSchema<import("valibot").EnumSchema<typeof import("../evaluation/Evaluation").SelectionFunction, undefined>, undefined>;
    }, undefined>, undefined>;
    readonly evaluationSettings: import("valibot").OptionalSchema<import("valibot").ObjectSchema<{
        readonly evaluationUI: import("valibot").EnumSchema<typeof import("../evaluation/Evaluation").EvaluationUI, undefined>;
    }, undefined>, undefined>;
    readonly importanceData: import("valibot").OptionalSchema<import("valibot").ObjectSchema<{
        readonly sumImportance: import("valibot").NumberSchema<undefined>;
        readonly numberOfUsers: import("valibot").NumberSchema<undefined>;
        readonly numberOfViews: import("valibot").NumberSchema<undefined>;
    }, undefined>, undefined>;
    readonly documentSettings: import("valibot").OptionalSchema<import("valibot").ObjectSchema<{
        readonly parentDocumentId: import("valibot").StringSchema<undefined>;
        readonly order: import("valibot").NumberSchema<undefined>;
        readonly type: import("valibot").EnumSchema<typeof DocumentType, undefined>;
        readonly isTop: import("valibot").BooleanSchema<undefined>;
    }, undefined>, undefined>;
    readonly resultsSettings: import("valibot").OptionalSchema<import("valibot").ObjectSchema<{
        readonly resultsBy: import("valibot").EnumSchema<typeof import("../results/Results").ResultsBy, undefined>;
        readonly cutoffNumber: import("valibot").OptionalSchema<import("valibot").NumberSchema<undefined>, undefined>;
        readonly cutoffBy: import("valibot").EnumSchema<typeof import("../results/Results").CutoffBy, undefined>;
        readonly numberOfResults: import("valibot").OptionalSchema<import("valibot").NumberSchema<undefined>, undefined>;
        readonly numberOfSelections: import("valibot").OptionalSchema<import("valibot").NumberSchema<undefined>, undefined>;
        readonly deep: import("valibot").OptionalSchema<import("valibot").NumberSchema<undefined>, undefined>;
        readonly minConsensus: import("valibot").OptionalSchema<import("valibot").NumberSchema<undefined>, undefined>;
    }, undefined>, undefined>;
    readonly steps: import("valibot").OptionalSchema<import("valibot").ObjectSchema<{
        readonly currentStep: import("valibot").ObjectSchema<{
            readonly stepId: import("valibot").StringSchema<undefined>;
            readonly stepType: import("valibot").EnumSchema<typeof import("../TypeEnums").StepType, undefined>;
            readonly instructions: import("valibot").OptionalSchema<import("valibot").StringSchema<undefined>, undefined>;
            readonly duration: import("valibot").OptionalSchema<import("valibot").NumberSchema<undefined>, undefined>;
            readonly endTime: import("valibot").OptionalSchema<import("valibot").NumberSchema<undefined>, undefined>;
            readonly order: import("valibot").OptionalSchema<import("valibot").NumberSchema<undefined>, undefined>;
        }, undefined>;
        readonly allSteps: import("valibot").OptionalSchema<import("valibot").ArraySchema<import("valibot").ObjectSchema<{
            readonly stepId: import("valibot").StringSchema<undefined>;
            readonly stepType: import("valibot").EnumSchema<typeof import("../TypeEnums").StepType, undefined>;
            readonly instructions: import("valibot").OptionalSchema<import("valibot").StringSchema<undefined>, undefined>;
            readonly duration: import("valibot").OptionalSchema<import("valibot").NumberSchema<undefined>, undefined>;
            readonly endTime: import("valibot").OptionalSchema<import("valibot").NumberSchema<undefined>, undefined>;
            readonly order: import("valibot").OptionalSchema<import("valibot").NumberSchema<undefined>, undefined>;
        }, undefined>, undefined>, undefined>;
    }, undefined>, undefined>;
    readonly questionSettings: import("valibot").OptionalSchema<import("valibot").ObjectSchema<{
        readonly isTopQuestion: import("valibot").OptionalSchema<import("valibot").BooleanSchema<undefined>, undefined>;
        readonly questionType: import("valibot").OptionalSchema<import("valibot").EnumSchema<typeof import("../TypeEnums").QuestionType, undefined>, undefined>;
        readonly steps: import("valibot").OptionalSchema<import("valibot").EnumSchema<typeof import("../TypeEnums").QuestionStagesType, undefined>, undefined>;
        readonly stepsAllowed: import("valibot").OptionalSchema<import("valibot").ArraySchema<import("valibot").EnumSchema<typeof import("../TypeEnums").QuestionStep, undefined>, undefined>, undefined>;
        readonly currentStep: import("valibot").OptionalSchema<import("valibot").EnumSchema<typeof import("../TypeEnums").QuestionStep, undefined>, undefined>;
        readonly currentStage: import("valibot").OptionalSchema<import("valibot").EnumSchema<typeof import("../TypeEnums").QuestionStage, undefined>, undefined>;
    }, undefined>, undefined>;
    readonly statementSettings: import("valibot").OptionalSchema<import("valibot").ObjectSchema<{
        readonly subScreens: import("valibot").OptionalSchema<import("valibot").ArraySchema<import("valibot").StringSchema<undefined>, undefined>, undefined>;
        readonly enableAddEvaluationOption: import("valibot").OptionalSchema<import("valibot").BooleanSchema<undefined>, undefined>;
        readonly enableAddVotingOption: import("valibot").OptionalSchema<import("valibot").BooleanSchema<undefined>, undefined>;
        readonly enhancedEvaluation: import("valibot").OptionalSchema<import("valibot").BooleanSchema<undefined>, undefined>;
        readonly showEvaluation: import("valibot").OptionalSchema<import("valibot").BooleanSchema<undefined>, undefined>;
        readonly inVotingGetOnlyResults: import("valibot").OptionalSchema<import("valibot").BooleanSchema<undefined>, undefined>;
        readonly enableSimilaritiesSearch: import("valibot").OptionalSchema<import("valibot").BooleanSchema<undefined>, undefined>;
        readonly enableNavigationalElements: import("valibot").OptionalSchema<import("valibot").BooleanSchema<undefined>, undefined>;
        readonly show: import("valibot").OptionalSchema<import("valibot").BooleanSchema<undefined>, undefined>;
        readonly deliberationType: import("valibot").OptionalSchema<import("valibot").EnumSchema<typeof import("../TypeEnums").DeliberationType, undefined>, undefined>;
        readonly hasChat: import("valibot").OptionalSchema<import("valibot").BooleanSchema<undefined>, undefined>;
        readonly hasChildren: import("valibot").OptionalSchema<import("valibot").BooleanSchema<undefined>, undefined>;
        readonly numberOfOptionsPerUser: import("valibot").OptionalSchema<import("valibot").NumberSchema<undefined>, undefined>;
    }, undefined>, undefined>;
}, undefined>;
export type Statement = InferOutput<typeof StatementSchema>;
export declare const StatementMetaDataSchema: import("valibot").ObjectSchema<{
    readonly lastUpdate: import("valibot").NumberSchema<undefined>;
    readonly numberOfMembers: import("valibot").OptionalSchema<import("valibot").NumberSchema<undefined>, undefined>;
    readonly numberOfEvaluators: import("valibot").OptionalSchema<import("valibot").NumberSchema<undefined>, undefined>;
    readonly numberOfEvaluatedStatements: import("valibot").OptionalSchema<import("valibot").NumberSchema<undefined>, undefined>;
    readonly numberOfFirstSuggesters: import("valibot").OptionalSchema<import("valibot").NumberSchema<undefined>, undefined>;
    readonly numberOfFirstEvaluators: import("valibot").OptionalSchema<import("valibot").NumberSchema<undefined>, undefined>;
    readonly numberOfSecondEvaluators: import("valibot").OptionalSchema<import("valibot").NumberSchema<undefined>, undefined>;
    readonly statementId: import("valibot").StringSchema<undefined>;
}, undefined>;
export type StatementMetaData = InferOutput<typeof StatementMetaDataSchema>;
