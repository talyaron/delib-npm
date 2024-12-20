import { z } from "zod";
export declare enum StatementType {
    statement = "statement",//chat message TODO: remove from data base result and selection
    option = "option",
    question = "question",
    document = "document",//the main document
    group = "group",//a group statement. resemble folder functionality
    stage = "stage"
}
export declare enum DeliberativeElement {
    explanation = "explanation",
    needs = "needs",
    resource = "resource",
    consideration = "consideration",
    research = "research",
    option = "option",
    general = "general"
}
export declare const DeliberativeElementSchema: z.ZodEnum<[DeliberativeElement.explanation, DeliberativeElement.needs, DeliberativeElement.resource, DeliberativeElement.consideration, DeliberativeElement.research, DeliberativeElement.option, DeliberativeElement.general]>;
export declare enum QuestionType {
    singleStep = "single-step",
    multipleSteps = "multiple-steps"
}
export declare enum QuestionStage {
    explanation = "explanation",
    suggestion = "suggestion",
    firstEvaluation = "firstEvaluation",
    secondEvaluation = "secondEvaluation",
    voting = "voting",
    finished = "finished"
}
export declare const SimpleStatementTypeSchema: z.ZodEnum<[StatementType.statement, StatementType.option, StatementType.question, StatementType.document, StatementType.group, StatementType.stage]>;
export declare const SimpleStatementSchema: z.ZodObject<{
    statementId: z.ZodString;
    statement: z.ZodString;
    creatorId: z.ZodString;
    creator: z.ZodObject<{
        displayName: z.ZodString;
        defaultLanguage: z.ZodOptional<z.ZodString>;
        email: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        photoURL: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        uid: z.ZodString;
        isAnonymous: z.ZodOptional<z.ZodBoolean>;
        fontSize: z.ZodNullable<z.ZodOptional<z.ZodNumber>>;
        color: z.ZodOptional<z.ZodString>;
        agreement: z.ZodNullable<z.ZodOptional<z.ZodObject<{
            text: z.ZodString;
            date: z.ZodNumber;
            version: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            text: string;
            date: number;
            version: string;
        }, {
            text: string;
            date: number;
            version: string;
        }>>>;
        role: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        displayName: string;
        uid: string;
        defaultLanguage?: string | undefined;
        email?: string | null | undefined;
        photoURL?: string | null | undefined;
        isAnonymous?: boolean | undefined;
        fontSize?: number | null | undefined;
        color?: string | undefined;
        agreement?: {
            text: string;
            date: number;
            version: string;
        } | null | undefined;
        role?: string | undefined;
    }, {
        displayName: string;
        uid: string;
        defaultLanguage?: string | undefined;
        email?: string | null | undefined;
        photoURL?: string | null | undefined;
        isAnonymous?: boolean | undefined;
        fontSize?: number | null | undefined;
        color?: string | undefined;
        agreement?: {
            text: string;
            date: number;
            version: string;
        } | null | undefined;
        role?: string | undefined;
    }>;
    parentId: z.ZodString;
    consensus: z.ZodNumber;
    voted: z.ZodOptional<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    statement: string;
    statementId: string;
    creatorId: string;
    creator: {
        displayName: string;
        uid: string;
        defaultLanguage?: string | undefined;
        email?: string | null | undefined;
        photoURL?: string | null | undefined;
        isAnonymous?: boolean | undefined;
        fontSize?: number | null | undefined;
        color?: string | undefined;
        agreement?: {
            text: string;
            date: number;
            version: string;
        } | null | undefined;
        role?: string | undefined;
    };
    parentId: string;
    consensus: number;
    voted?: number | undefined;
}, {
    statement: string;
    statementId: string;
    creatorId: string;
    creator: {
        displayName: string;
        uid: string;
        defaultLanguage?: string | undefined;
        email?: string | null | undefined;
        photoURL?: string | null | undefined;
        isAnonymous?: boolean | undefined;
        fontSize?: number | null | undefined;
        color?: string | undefined;
        agreement?: {
            text: string;
            date: number;
            version: string;
        } | null | undefined;
        role?: string | undefined;
    };
    parentId: string;
    consensus: number;
    voted?: number | undefined;
}>;
export type SimpleStatement = z.infer<typeof SimpleStatementSchema>;
export declare enum Access {
    open = "open",
    close = "close"
}
export declare const AccessSchema: z.ZodEnum<[Access.open, Access.close]>;
export declare enum membersAllowed {
    all = "all",
    nonAnonymous = "nonAnonymous"
}
export declare const MembersAllowedSchema: z.ZodEnum<[membersAllowed.all, membersAllowed.nonAnonymous]>;
declare const QuestionSettingsSchema: z.ZodObject<{
    questionType: z.ZodEnum<[QuestionType.singleStep, QuestionType.multipleSteps]>;
    currentStage: z.ZodEnum<[QuestionStage.explanation, QuestionStage.suggestion, QuestionStage.firstEvaluation, QuestionStage.secondEvaluation, QuestionStage.voting, QuestionStage.finished]>;
}, "strip", z.ZodTypeAny, {
    questionType: QuestionType;
    currentStage: QuestionStage;
}, {
    questionType: QuestionType;
    currentStage: QuestionStage;
}>;
export type QuestionSettings = z.infer<typeof QuestionSettingsSchema>;
export declare const DocumentApprovalSchema: z.ZodObject<{
    approved: z.ZodNumber;
    totalVoters: z.ZodNumber;
    averageApproval: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    approved: number;
    totalVoters: number;
    averageApproval: number;
}, {
    approved: number;
    totalVoters: number;
    averageApproval: number;
}>;
export type DocumentApproval = z.infer<typeof DocumentApprovalSchema>;
export declare const DocumentImportanceSchema: z.ZodObject<{
    numberOfUsers: z.ZodNumber;
    averageImportance: z.ZodNumber;
    sumImportance: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    sumImportance: number;
    numberOfUsers: number;
    averageImportance: number;
}, {
    sumImportance: number;
    numberOfUsers: number;
    averageImportance: number;
}>;
export type DocumentImportance = z.infer<typeof DocumentImportanceSchema>;
export declare const AgreeSchema: z.ZodObject<{
    agree: z.ZodOptional<z.ZodNumber>;
    disagree: z.ZodOptional<z.ZodNumber>;
    avgAgree: z.ZodOptional<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    agree?: number | undefined;
    disagree?: number | undefined;
    avgAgree?: number | undefined;
}, {
    agree?: number | undefined;
    disagree?: number | undefined;
    avgAgree?: number | undefined;
}>;
export type AgreeDocument = z.infer<typeof AgreeSchema>;
export declare const MembershipSchema: z.ZodObject<{
    adminApproveMembers: z.ZodOptional<z.ZodBoolean>;
    access: z.ZodOptional<z.ZodEnum<[Access.open, Access.close]>>;
    typeOfMembersAllowed: z.ZodOptional<z.ZodEnum<[membersAllowed.all, membersAllowed.nonAnonymous]>>;
}, "strip", z.ZodTypeAny, {
    adminApproveMembers?: boolean | undefined;
    access?: Access | undefined;
    typeOfMembersAllowed?: membersAllowed | undefined;
}, {
    adminApproveMembers?: boolean | undefined;
    access?: Access | undefined;
    typeOfMembersAllowed?: membersAllowed | undefined;
}>;
export type Membership = z.infer<typeof MembershipSchema>;
export declare enum DocumentType {
    paragraph = "paragraph",
    section = "section",
    comment = "comment"
}
export declare const StatementSchema: z.ZodObject<{
    allowAnonymousLogin: z.ZodOptional<z.ZodBoolean>;
    statement: z.ZodString;
    description: z.ZodOptional<z.ZodString>;
    statementId: z.ZodString;
    creatorId: z.ZodString;
    creator: z.ZodObject<{
        displayName: z.ZodString;
        defaultLanguage: z.ZodOptional<z.ZodString>;
        email: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        photoURL: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        uid: z.ZodString;
        isAnonymous: z.ZodOptional<z.ZodBoolean>;
        fontSize: z.ZodNullable<z.ZodOptional<z.ZodNumber>>;
        color: z.ZodOptional<z.ZodString>;
        agreement: z.ZodNullable<z.ZodOptional<z.ZodObject<{
            text: z.ZodString;
            date: z.ZodNumber;
            version: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            text: string;
            date: number;
            version: string;
        }, {
            text: string;
            date: number;
            version: string;
        }>>>;
        role: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        displayName: string;
        uid: string;
        defaultLanguage?: string | undefined;
        email?: string | null | undefined;
        photoURL?: string | null | undefined;
        isAnonymous?: boolean | undefined;
        fontSize?: number | null | undefined;
        color?: string | undefined;
        agreement?: {
            text: string;
            date: number;
            version: string;
        } | null | undefined;
        role?: string | undefined;
    }, {
        displayName: string;
        uid: string;
        defaultLanguage?: string | undefined;
        email?: string | null | undefined;
        photoURL?: string | null | undefined;
        isAnonymous?: boolean | undefined;
        fontSize?: number | null | undefined;
        color?: string | undefined;
        agreement?: {
            text: string;
            date: number;
            version: string;
        } | null | undefined;
        role?: string | undefined;
    }>;
    statementType: z.ZodEnum<[StatementType.statement, StatementType.option, StatementType.question, StatementType.document, StatementType.group, StatementType.stage]>;
    deliberativeElement: z.ZodOptional<z.ZodEnum<[DeliberativeElement.explanation, DeliberativeElement.needs, DeliberativeElement.resource, DeliberativeElement.consideration, DeliberativeElement.research, DeliberativeElement.option, DeliberativeElement.general]>>;
    color: z.ZodOptional<z.ZodString>;
    defaultLanguage: z.ZodOptional<z.ZodString>;
    followMe: z.ZodOptional<z.ZodString>;
    parentId: z.ZodString;
    parents: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    topParentId: z.ZodString;
    hasChildren: z.ZodOptional<z.ZodBoolean>;
    lastMessage: z.ZodOptional<z.ZodString>;
    lastUpdate: z.ZodNumber;
    lastChildUpdate: z.ZodOptional<z.ZodNumber>;
    createdAt: z.ZodNumber;
    pro: z.ZodOptional<z.ZodNumber>;
    con: z.ZodOptional<z.ZodNumber>;
    doc: z.ZodOptional<z.ZodObject<{
        isDoc: z.ZodBoolean;
        order: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        isDoc: boolean;
        order: number;
    }, {
        isDoc: boolean;
        order: number;
    }>>;
    evaluation: z.ZodOptional<z.ZodObject<{
        sumEvaluations: z.ZodNumber;
        agreement: z.ZodNumber;
        numberOfEvaluators: z.ZodNumber;
        sumPro: z.ZodOptional<z.ZodNumber>;
        sumCon: z.ZodOptional<z.ZodNumber>;
    }, "strip", z.ZodTypeAny, {
        agreement: number;
        sumEvaluations: number;
        numberOfEvaluators: number;
        sumPro?: number | undefined;
        sumCon?: number | undefined;
    }, {
        agreement: number;
        sumEvaluations: number;
        numberOfEvaluators: number;
        sumPro?: number | undefined;
        sumCon?: number | undefined;
    }>>;
    consensus: z.ZodNumber;
    order: z.ZodOptional<z.ZodNumber>;
    elementHight: z.ZodOptional<z.ZodNumber>;
    top: z.ZodOptional<z.ZodNumber>;
    votes: z.ZodOptional<z.ZodNumber>;
    selections: z.ZodOptional<z.ZodAny>;
    isSelected: z.ZodOptional<z.ZodBoolean>;
    importanceData: z.ZodOptional<z.ZodObject<{
        sumImportance: z.ZodNumber;
        numberOfUsers: z.ZodNumber;
        numberOfViews: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        sumImportance: number;
        numberOfUsers: number;
        numberOfViews: number;
    }, {
        sumImportance: number;
        numberOfUsers: number;
        numberOfViews: number;
    }>>;
    voted: z.ZodOptional<z.ZodNumber>;
    totalSubStatements: z.ZodOptional<z.ZodNumber>;
    statementSettings: z.ZodOptional<z.ZodObject<{
        /** holds the navigation tabs of the statement */
        subScreens: z.ZodOptional<z.ZodArray<z.ZodEnum<[import("./screensAndNavModels").Screen.DOC, import("./screensAndNavModels").Screen.HOME, import("./screensAndNavModels").Screen.STATEMENT, import("./screensAndNavModels").Screen.CHAT, import("./screensAndNavModels").Screen.OPTIONS, import("./screensAndNavModels").Screen.VOTE, import("./screensAndNavModels").Screen.GROUPS, import("./screensAndNavModels").Screen.SETTINGS, import("./screensAndNavModels").Screen.MASS_QUESTIONS, import("./screensAndNavModels").Screen.QUESTIONS_MASS, import("./screensAndNavModels").Screen.OPTIONS_CONSENSUS, import("./screensAndNavModels").Screen.OPTIONS_NEW, import("./screensAndNavModels").Screen.OPTIONS_RANDOM, import("./screensAndNavModels").Screen.OPTIONS_UPDATED, import("./screensAndNavModels").Screen.VOTES_CONSENSUS, import("./screensAndNavModels").Screen.VOTESֹֹֹ_VOTED, import("./screensAndNavModels").Screen.VOTES_NEW, import("./screensAndNavModels").Screen.VOTES_RANDOM, import("./screensAndNavModels").Screen.VOTES_UPDATED, import("./screensAndNavModels").Screen.ADMIN_CHOOSE, import("./screensAndNavModels").Screen.ADMIN_DIVIDE, import("./screensAndNavModels").Screen.QUESTIONS, import("./screensAndNavModels").Screen.QUESTIONS_NEW, import("./screensAndNavModels").Screen.QUESTIONS_RANDOM, import("./screensAndNavModels").Screen.QUESTIONS_UPDATED, import("./screensAndNavModels").Screen.QUESTIONS_CONSENSUS, import("./screensAndNavModels").Screen.INFO]>, "many">>;
        /** if true, non admin users can add options under evaluation screen */
        enableAddEvaluationOption: z.ZodOptional<z.ZodBoolean>;
        /** if true, non admin users can add options under voting screen */
        enableAddVotingOption: z.ZodOptional<z.ZodBoolean>;
        /** if true, the evaluation element will be enhanced */
        enhancedEvaluation: z.ZodOptional<z.ZodBoolean>;
        /** if true, the evaluation element will be shown */
        showEvaluation: z.ZodOptional<z.ZodBoolean>;
        /** if true, only the results will be shown */
        inVotingGetOnlyResults: z.ZodOptional<z.ZodBoolean>;
        enableSimilaritiesSearch: z.ZodOptional<z.ZodBoolean>;
        enableNotifications: z.ZodOptional<z.ZodBoolean>;
        enableNavigationalElements: z.ZodOptional<z.ZodBoolean>;
        show: z.ZodOptional<z.ZodBoolean>;
    }, "strip", z.ZodTypeAny, {
        subScreens?: (import("./screensAndNavModels").Screen.DOC | import("./screensAndNavModels").Screen.HOME | import("./screensAndNavModels").Screen.STATEMENT | import("./screensAndNavModels").Screen.CHAT | import("./screensAndNavModels").Screen.OPTIONS | import("./screensAndNavModels").Screen.VOTE | import("./screensAndNavModels").Screen.GROUPS | import("./screensAndNavModels").Screen.SETTINGS | import("./screensAndNavModels").Screen.MASS_QUESTIONS | import("./screensAndNavModels").Screen.QUESTIONS_MASS | import("./screensAndNavModels").Screen.OPTIONS_CONSENSUS | import("./screensAndNavModels").Screen.OPTIONS_NEW | import("./screensAndNavModels").Screen.OPTIONS_RANDOM | import("./screensAndNavModels").Screen.OPTIONS_UPDATED | import("./screensAndNavModels").Screen.VOTES_CONSENSUS | import("./screensAndNavModels").Screen.VOTESֹֹֹ_VOTED | import("./screensAndNavModels").Screen.VOTES_NEW | import("./screensAndNavModels").Screen.VOTES_RANDOM | import("./screensAndNavModels").Screen.VOTES_UPDATED | import("./screensAndNavModels").Screen.ADMIN_CHOOSE | import("./screensAndNavModels").Screen.ADMIN_DIVIDE | import("./screensAndNavModels").Screen.QUESTIONS | import("./screensAndNavModels").Screen.QUESTIONS_NEW | import("./screensAndNavModels").Screen.QUESTIONS_RANDOM | import("./screensAndNavModels").Screen.QUESTIONS_UPDATED | import("./screensAndNavModels").Screen.QUESTIONS_CONSENSUS | import("./screensAndNavModels").Screen.INFO)[] | undefined;
        enableAddEvaluationOption?: boolean | undefined;
        enableAddVotingOption?: boolean | undefined;
        enhancedEvaluation?: boolean | undefined;
        showEvaluation?: boolean | undefined;
        inVotingGetOnlyResults?: boolean | undefined;
        enableSimilaritiesSearch?: boolean | undefined;
        enableNotifications?: boolean | undefined;
        enableNavigationalElements?: boolean | undefined;
        show?: boolean | undefined;
    }, {
        subScreens?: (import("./screensAndNavModels").Screen.DOC | import("./screensAndNavModels").Screen.HOME | import("./screensAndNavModels").Screen.STATEMENT | import("./screensAndNavModels").Screen.CHAT | import("./screensAndNavModels").Screen.OPTIONS | import("./screensAndNavModels").Screen.VOTE | import("./screensAndNavModels").Screen.GROUPS | import("./screensAndNavModels").Screen.SETTINGS | import("./screensAndNavModels").Screen.MASS_QUESTIONS | import("./screensAndNavModels").Screen.QUESTIONS_MASS | import("./screensAndNavModels").Screen.OPTIONS_CONSENSUS | import("./screensAndNavModels").Screen.OPTIONS_NEW | import("./screensAndNavModels").Screen.OPTIONS_RANDOM | import("./screensAndNavModels").Screen.OPTIONS_UPDATED | import("./screensAndNavModels").Screen.VOTES_CONSENSUS | import("./screensAndNavModels").Screen.VOTESֹֹֹ_VOTED | import("./screensAndNavModels").Screen.VOTES_NEW | import("./screensAndNavModels").Screen.VOTES_RANDOM | import("./screensAndNavModels").Screen.VOTES_UPDATED | import("./screensAndNavModels").Screen.ADMIN_CHOOSE | import("./screensAndNavModels").Screen.ADMIN_DIVIDE | import("./screensAndNavModels").Screen.QUESTIONS | import("./screensAndNavModels").Screen.QUESTIONS_NEW | import("./screensAndNavModels").Screen.QUESTIONS_RANDOM | import("./screensAndNavModels").Screen.QUESTIONS_UPDATED | import("./screensAndNavModels").Screen.QUESTIONS_CONSENSUS | import("./screensAndNavModels").Screen.INFO)[] | undefined;
        enableAddEvaluationOption?: boolean | undefined;
        enableAddVotingOption?: boolean | undefined;
        enhancedEvaluation?: boolean | undefined;
        showEvaluation?: boolean | undefined;
        inVotingGetOnlyResults?: boolean | undefined;
        enableSimilaritiesSearch?: boolean | undefined;
        enableNotifications?: boolean | undefined;
        enableNavigationalElements?: boolean | undefined;
        show?: boolean | undefined;
    }>>;
    membership: z.ZodOptional<z.ZodObject<{
        adminApproveMembers: z.ZodOptional<z.ZodBoolean>;
        access: z.ZodOptional<z.ZodEnum<[Access.open, Access.close]>>;
        typeOfMembersAllowed: z.ZodOptional<z.ZodEnum<[membersAllowed.all, membersAllowed.nonAnonymous]>>;
    }, "strip", z.ZodTypeAny, {
        adminApproveMembers?: boolean | undefined;
        access?: Access | undefined;
        typeOfMembersAllowed?: membersAllowed | undefined;
    }, {
        adminApproveMembers?: boolean | undefined;
        access?: Access | undefined;
        typeOfMembersAllowed?: membersAllowed | undefined;
    }>>;
    maxConsensus: z.ZodOptional<z.ZodNumber>;
    selected: z.ZodOptional<z.ZodBoolean>;
    resultsSettings: z.ZodOptional<z.ZodObject<{
        resultsBy: z.ZodEnum<[import("./resultsModel").ResultsBy.consensusLevel, import("./resultsModel").ResultsBy.topOptions, import("./resultsModel").ResultsBy.checkedBy, import("./resultsModel").ResultsBy.privateCheck]>;
        numberOfResults: z.ZodOptional<z.ZodNumber>;
        numberOfSelections: z.ZodOptional<z.ZodNumber>;
        deep: z.ZodOptional<z.ZodNumber>;
        minConsensus: z.ZodOptional<z.ZodNumber>;
    }, "strip", z.ZodTypeAny, {
        resultsBy: import("./resultsModel").ResultsBy;
        numberOfResults?: number | undefined;
        numberOfSelections?: number | undefined;
        deep?: number | undefined;
        minConsensus?: number | undefined;
    }, {
        resultsBy: import("./resultsModel").ResultsBy;
        numberOfResults?: number | undefined;
        numberOfSelections?: number | undefined;
        deep?: number | undefined;
        minConsensus?: number | undefined;
    }>>;
    results: z.ZodOptional<z.ZodArray<z.ZodObject<{
        statementId: z.ZodString;
        statement: z.ZodString;
        creatorId: z.ZodString;
        creator: z.ZodObject<{
            displayName: z.ZodString;
            defaultLanguage: z.ZodOptional<z.ZodString>;
            email: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            photoURL: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            uid: z.ZodString;
            isAnonymous: z.ZodOptional<z.ZodBoolean>;
            fontSize: z.ZodNullable<z.ZodOptional<z.ZodNumber>>;
            color: z.ZodOptional<z.ZodString>;
            agreement: z.ZodNullable<z.ZodOptional<z.ZodObject<{
                text: z.ZodString;
                date: z.ZodNumber;
                version: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                text: string;
                date: number;
                version: string;
            }, {
                text: string;
                date: number;
                version: string;
            }>>>;
            role: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            displayName: string;
            uid: string;
            defaultLanguage?: string | undefined;
            email?: string | null | undefined;
            photoURL?: string | null | undefined;
            isAnonymous?: boolean | undefined;
            fontSize?: number | null | undefined;
            color?: string | undefined;
            agreement?: {
                text: string;
                date: number;
                version: string;
            } | null | undefined;
            role?: string | undefined;
        }, {
            displayName: string;
            uid: string;
            defaultLanguage?: string | undefined;
            email?: string | null | undefined;
            photoURL?: string | null | undefined;
            isAnonymous?: boolean | undefined;
            fontSize?: number | null | undefined;
            color?: string | undefined;
            agreement?: {
                text: string;
                date: number;
                version: string;
            } | null | undefined;
            role?: string | undefined;
        }>;
        parentId: z.ZodString;
        consensus: z.ZodNumber;
        voted: z.ZodOptional<z.ZodNumber>;
    }, "strip", z.ZodTypeAny, {
        statement: string;
        statementId: string;
        creatorId: string;
        creator: {
            displayName: string;
            uid: string;
            defaultLanguage?: string | undefined;
            email?: string | null | undefined;
            photoURL?: string | null | undefined;
            isAnonymous?: boolean | undefined;
            fontSize?: number | null | undefined;
            color?: string | undefined;
            agreement?: {
                text: string;
                date: number;
                version: string;
            } | null | undefined;
            role?: string | undefined;
        };
        parentId: string;
        consensus: number;
        voted?: number | undefined;
    }, {
        statement: string;
        statementId: string;
        creatorId: string;
        creator: {
            displayName: string;
            uid: string;
            defaultLanguage?: string | undefined;
            email?: string | null | undefined;
            photoURL?: string | null | undefined;
            isAnonymous?: boolean | undefined;
            fontSize?: number | null | undefined;
            color?: string | undefined;
            agreement?: {
                text: string;
                date: number;
                version: string;
            } | null | undefined;
            role?: string | undefined;
        };
        parentId: string;
        consensus: number;
        voted?: number | undefined;
    }>, "many">>;
    isResult: z.ZodOptional<z.ZodBoolean>;
    imagesURL: z.ZodOptional<z.ZodObject<{
        main: z.ZodOptional<z.ZodString>;
        more: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    }, "strip", z.ZodTypeAny, {
        main?: string | undefined;
        more?: string[] | undefined;
    }, {
        main?: string | undefined;
        more?: string[] | undefined;
    }>>;
    /** total statement evaluators */
    totalEvaluators: z.ZodOptional<z.ZodNumber>;
    /** Question settings */
    questionSettings: z.ZodOptional<z.ZodObject<{
        questionType: z.ZodEnum<[QuestionType.singleStep, QuestionType.multipleSteps]>;
        currentStage: z.ZodEnum<[QuestionStage.explanation, QuestionStage.suggestion, QuestionStage.firstEvaluation, QuestionStage.secondEvaluation, QuestionStage.voting, QuestionStage.finished]>;
    }, "strip", z.ZodTypeAny, {
        questionType: QuestionType;
        currentStage: QuestionStage;
    }, {
        questionType: QuestionType;
        currentStage: QuestionStage;
    }>>;
    /** is part of temporary presentation under multi stage question */
    isInMultiStage: z.ZodOptional<z.ZodBoolean>;
    /** Document settings */
    documentSettings: z.ZodOptional<z.ZodObject<{
        parentDocumentId: z.ZodString;
        order: z.ZodNumber;
        type: z.ZodEnum<[DocumentType.paragraph, DocumentType.section, DocumentType.comment]>;
        isTop: z.ZodBoolean;
    }, "strip", z.ZodTypeAny, {
        type: DocumentType;
        order: number;
        parentDocumentId: string;
        isTop: boolean;
    }, {
        type: DocumentType;
        order: number;
        parentDocumentId: string;
        isTop: boolean;
    }>>;
    documentApproval: z.ZodOptional<z.ZodObject<{
        approved: z.ZodNumber;
        totalVoters: z.ZodNumber;
        averageApproval: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        approved: number;
        totalVoters: number;
        averageApproval: number;
    }, {
        approved: number;
        totalVoters: number;
        averageApproval: number;
    }>>;
    documentImportance: z.ZodOptional<z.ZodObject<{
        numberOfUsers: z.ZodNumber;
        averageImportance: z.ZodNumber;
        sumImportance: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        sumImportance: number;
        numberOfUsers: number;
        averageImportance: number;
    }, {
        sumImportance: number;
        numberOfUsers: number;
        averageImportance: number;
    }>>;
    documentAgree: z.ZodOptional<z.ZodObject<{
        agree: z.ZodOptional<z.ZodNumber>;
        disagree: z.ZodOptional<z.ZodNumber>;
        avgAgree: z.ZodOptional<z.ZodNumber>;
    }, "strip", z.ZodTypeAny, {
        agree?: number | undefined;
        disagree?: number | undefined;
        avgAgree?: number | undefined;
    }, {
        agree?: number | undefined;
        disagree?: number | undefined;
        avgAgree?: number | undefined;
    }>>;
    stageId: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    viewed: z.ZodOptional<z.ZodObject<{
        individualViews: z.ZodOptional<z.ZodNumber>;
    }, "strip", z.ZodTypeAny, {
        individualViews?: number | undefined;
    }, {
        individualViews?: number | undefined;
    }>>;
}, "strip", z.ZodTypeAny, {
    statement: string;
    statementId: string;
    creatorId: string;
    creator: {
        displayName: string;
        uid: string;
        defaultLanguage?: string | undefined;
        email?: string | null | undefined;
        photoURL?: string | null | undefined;
        isAnonymous?: boolean | undefined;
        fontSize?: number | null | undefined;
        color?: string | undefined;
        agreement?: {
            text: string;
            date: number;
            version: string;
        } | null | undefined;
        role?: string | undefined;
    };
    statementType: StatementType;
    parentId: string;
    topParentId: string;
    lastUpdate: number;
    createdAt: number;
    consensus: number;
    defaultLanguage?: string | undefined;
    color?: string | undefined;
    evaluation?: {
        agreement: number;
        sumEvaluations: number;
        numberOfEvaluators: number;
        sumPro?: number | undefined;
        sumCon?: number | undefined;
    } | undefined;
    doc?: {
        isDoc: boolean;
        order: number;
    } | undefined;
    allowAnonymousLogin?: boolean | undefined;
    description?: string | undefined;
    deliberativeElement?: DeliberativeElement | undefined;
    followMe?: string | undefined;
    parents?: string[] | undefined;
    hasChildren?: boolean | undefined;
    lastMessage?: string | undefined;
    lastChildUpdate?: number | undefined;
    pro?: number | undefined;
    con?: number | undefined;
    order?: number | undefined;
    elementHight?: number | undefined;
    top?: number | undefined;
    votes?: number | undefined;
    selections?: any;
    isSelected?: boolean | undefined;
    importanceData?: {
        sumImportance: number;
        numberOfUsers: number;
        numberOfViews: number;
    } | undefined;
    voted?: number | undefined;
    totalSubStatements?: number | undefined;
    statementSettings?: {
        subScreens?: (import("./screensAndNavModels").Screen.DOC | import("./screensAndNavModels").Screen.HOME | import("./screensAndNavModels").Screen.STATEMENT | import("./screensAndNavModels").Screen.CHAT | import("./screensAndNavModels").Screen.OPTIONS | import("./screensAndNavModels").Screen.VOTE | import("./screensAndNavModels").Screen.GROUPS | import("./screensAndNavModels").Screen.SETTINGS | import("./screensAndNavModels").Screen.MASS_QUESTIONS | import("./screensAndNavModels").Screen.QUESTIONS_MASS | import("./screensAndNavModels").Screen.OPTIONS_CONSENSUS | import("./screensAndNavModels").Screen.OPTIONS_NEW | import("./screensAndNavModels").Screen.OPTIONS_RANDOM | import("./screensAndNavModels").Screen.OPTIONS_UPDATED | import("./screensAndNavModels").Screen.VOTES_CONSENSUS | import("./screensAndNavModels").Screen.VOTESֹֹֹ_VOTED | import("./screensAndNavModels").Screen.VOTES_NEW | import("./screensAndNavModels").Screen.VOTES_RANDOM | import("./screensAndNavModels").Screen.VOTES_UPDATED | import("./screensAndNavModels").Screen.ADMIN_CHOOSE | import("./screensAndNavModels").Screen.ADMIN_DIVIDE | import("./screensAndNavModels").Screen.QUESTIONS | import("./screensAndNavModels").Screen.QUESTIONS_NEW | import("./screensAndNavModels").Screen.QUESTIONS_RANDOM | import("./screensAndNavModels").Screen.QUESTIONS_UPDATED | import("./screensAndNavModels").Screen.QUESTIONS_CONSENSUS | import("./screensAndNavModels").Screen.INFO)[] | undefined;
        enableAddEvaluationOption?: boolean | undefined;
        enableAddVotingOption?: boolean | undefined;
        enhancedEvaluation?: boolean | undefined;
        showEvaluation?: boolean | undefined;
        inVotingGetOnlyResults?: boolean | undefined;
        enableSimilaritiesSearch?: boolean | undefined;
        enableNotifications?: boolean | undefined;
        enableNavigationalElements?: boolean | undefined;
        show?: boolean | undefined;
    } | undefined;
    membership?: {
        adminApproveMembers?: boolean | undefined;
        access?: Access | undefined;
        typeOfMembersAllowed?: membersAllowed | undefined;
    } | undefined;
    maxConsensus?: number | undefined;
    selected?: boolean | undefined;
    resultsSettings?: {
        resultsBy: import("./resultsModel").ResultsBy;
        numberOfResults?: number | undefined;
        numberOfSelections?: number | undefined;
        deep?: number | undefined;
        minConsensus?: number | undefined;
    } | undefined;
    results?: {
        statement: string;
        statementId: string;
        creatorId: string;
        creator: {
            displayName: string;
            uid: string;
            defaultLanguage?: string | undefined;
            email?: string | null | undefined;
            photoURL?: string | null | undefined;
            isAnonymous?: boolean | undefined;
            fontSize?: number | null | undefined;
            color?: string | undefined;
            agreement?: {
                text: string;
                date: number;
                version: string;
            } | null | undefined;
            role?: string | undefined;
        };
        parentId: string;
        consensus: number;
        voted?: number | undefined;
    }[] | undefined;
    isResult?: boolean | undefined;
    imagesURL?: {
        main?: string | undefined;
        more?: string[] | undefined;
    } | undefined;
    totalEvaluators?: number | undefined;
    questionSettings?: {
        questionType: QuestionType;
        currentStage: QuestionStage;
    } | undefined;
    isInMultiStage?: boolean | undefined;
    documentSettings?: {
        type: DocumentType;
        order: number;
        parentDocumentId: string;
        isTop: boolean;
    } | undefined;
    documentApproval?: {
        approved: number;
        totalVoters: number;
        averageApproval: number;
    } | undefined;
    documentImportance?: {
        sumImportance: number;
        numberOfUsers: number;
        averageImportance: number;
    } | undefined;
    documentAgree?: {
        agree?: number | undefined;
        disagree?: number | undefined;
        avgAgree?: number | undefined;
    } | undefined;
    stageId?: string | null | undefined;
    viewed?: {
        individualViews?: number | undefined;
    } | undefined;
}, {
    statement: string;
    statementId: string;
    creatorId: string;
    creator: {
        displayName: string;
        uid: string;
        defaultLanguage?: string | undefined;
        email?: string | null | undefined;
        photoURL?: string | null | undefined;
        isAnonymous?: boolean | undefined;
        fontSize?: number | null | undefined;
        color?: string | undefined;
        agreement?: {
            text: string;
            date: number;
            version: string;
        } | null | undefined;
        role?: string | undefined;
    };
    statementType: StatementType;
    parentId: string;
    topParentId: string;
    lastUpdate: number;
    createdAt: number;
    consensus: number;
    defaultLanguage?: string | undefined;
    color?: string | undefined;
    evaluation?: {
        agreement: number;
        sumEvaluations: number;
        numberOfEvaluators: number;
        sumPro?: number | undefined;
        sumCon?: number | undefined;
    } | undefined;
    doc?: {
        isDoc: boolean;
        order: number;
    } | undefined;
    allowAnonymousLogin?: boolean | undefined;
    description?: string | undefined;
    deliberativeElement?: DeliberativeElement | undefined;
    followMe?: string | undefined;
    parents?: string[] | undefined;
    hasChildren?: boolean | undefined;
    lastMessage?: string | undefined;
    lastChildUpdate?: number | undefined;
    pro?: number | undefined;
    con?: number | undefined;
    order?: number | undefined;
    elementHight?: number | undefined;
    top?: number | undefined;
    votes?: number | undefined;
    selections?: any;
    isSelected?: boolean | undefined;
    importanceData?: {
        sumImportance: number;
        numberOfUsers: number;
        numberOfViews: number;
    } | undefined;
    voted?: number | undefined;
    totalSubStatements?: number | undefined;
    statementSettings?: {
        subScreens?: (import("./screensAndNavModels").Screen.DOC | import("./screensAndNavModels").Screen.HOME | import("./screensAndNavModels").Screen.STATEMENT | import("./screensAndNavModels").Screen.CHAT | import("./screensAndNavModels").Screen.OPTIONS | import("./screensAndNavModels").Screen.VOTE | import("./screensAndNavModels").Screen.GROUPS | import("./screensAndNavModels").Screen.SETTINGS | import("./screensAndNavModels").Screen.MASS_QUESTIONS | import("./screensAndNavModels").Screen.QUESTIONS_MASS | import("./screensAndNavModels").Screen.OPTIONS_CONSENSUS | import("./screensAndNavModels").Screen.OPTIONS_NEW | import("./screensAndNavModels").Screen.OPTIONS_RANDOM | import("./screensAndNavModels").Screen.OPTIONS_UPDATED | import("./screensAndNavModels").Screen.VOTES_CONSENSUS | import("./screensAndNavModels").Screen.VOTESֹֹֹ_VOTED | import("./screensAndNavModels").Screen.VOTES_NEW | import("./screensAndNavModels").Screen.VOTES_RANDOM | import("./screensAndNavModels").Screen.VOTES_UPDATED | import("./screensAndNavModels").Screen.ADMIN_CHOOSE | import("./screensAndNavModels").Screen.ADMIN_DIVIDE | import("./screensAndNavModels").Screen.QUESTIONS | import("./screensAndNavModels").Screen.QUESTIONS_NEW | import("./screensAndNavModels").Screen.QUESTIONS_RANDOM | import("./screensAndNavModels").Screen.QUESTIONS_UPDATED | import("./screensAndNavModels").Screen.QUESTIONS_CONSENSUS | import("./screensAndNavModels").Screen.INFO)[] | undefined;
        enableAddEvaluationOption?: boolean | undefined;
        enableAddVotingOption?: boolean | undefined;
        enhancedEvaluation?: boolean | undefined;
        showEvaluation?: boolean | undefined;
        inVotingGetOnlyResults?: boolean | undefined;
        enableSimilaritiesSearch?: boolean | undefined;
        enableNotifications?: boolean | undefined;
        enableNavigationalElements?: boolean | undefined;
        show?: boolean | undefined;
    } | undefined;
    membership?: {
        adminApproveMembers?: boolean | undefined;
        access?: Access | undefined;
        typeOfMembersAllowed?: membersAllowed | undefined;
    } | undefined;
    maxConsensus?: number | undefined;
    selected?: boolean | undefined;
    resultsSettings?: {
        resultsBy: import("./resultsModel").ResultsBy;
        numberOfResults?: number | undefined;
        numberOfSelections?: number | undefined;
        deep?: number | undefined;
        minConsensus?: number | undefined;
    } | undefined;
    results?: {
        statement: string;
        statementId: string;
        creatorId: string;
        creator: {
            displayName: string;
            uid: string;
            defaultLanguage?: string | undefined;
            email?: string | null | undefined;
            photoURL?: string | null | undefined;
            isAnonymous?: boolean | undefined;
            fontSize?: number | null | undefined;
            color?: string | undefined;
            agreement?: {
                text: string;
                date: number;
                version: string;
            } | null | undefined;
            role?: string | undefined;
        };
        parentId: string;
        consensus: number;
        voted?: number | undefined;
    }[] | undefined;
    isResult?: boolean | undefined;
    imagesURL?: {
        main?: string | undefined;
        more?: string[] | undefined;
    } | undefined;
    totalEvaluators?: number | undefined;
    questionSettings?: {
        questionType: QuestionType;
        currentStage: QuestionStage;
    } | undefined;
    isInMultiStage?: boolean | undefined;
    documentSettings?: {
        type: DocumentType;
        order: number;
        parentDocumentId: string;
        isTop: boolean;
    } | undefined;
    documentApproval?: {
        approved: number;
        totalVoters: number;
        averageApproval: number;
    } | undefined;
    documentImportance?: {
        sumImportance: number;
        numberOfUsers: number;
        averageImportance: number;
    } | undefined;
    documentAgree?: {
        agree?: number | undefined;
        disagree?: number | undefined;
        avgAgree?: number | undefined;
    } | undefined;
    stageId?: string | null | undefined;
    viewed?: {
        individualViews?: number | undefined;
    } | undefined;
}>;
export type Statement = z.infer<typeof StatementSchema>;
export declare const StatementSubscriptionSchema: z.ZodObject<{
    role: z.ZodEnum<[import("./usersModels").Role.admin, import("./usersModels").Role.member, import("./usersModels").Role.banned, import("./usersModels").Role.unsubscribed]>;
    userId: z.ZodString;
    statementId: z.ZodString;
    lastUpdate: z.ZodNumber;
    createdAt: z.ZodOptional<z.ZodNumber>;
    statementsSubscribeId: z.ZodString;
    statement: z.ZodObject<{
        allowAnonymousLogin: z.ZodOptional<z.ZodBoolean>;
        statement: z.ZodString;
        description: z.ZodOptional<z.ZodString>;
        statementId: z.ZodString;
        creatorId: z.ZodString;
        creator: z.ZodObject<{
            displayName: z.ZodString;
            defaultLanguage: z.ZodOptional<z.ZodString>;
            email: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            photoURL: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            uid: z.ZodString;
            isAnonymous: z.ZodOptional<z.ZodBoolean>;
            fontSize: z.ZodNullable<z.ZodOptional<z.ZodNumber>>;
            color: z.ZodOptional<z.ZodString>;
            agreement: z.ZodNullable<z.ZodOptional<z.ZodObject<{
                text: z.ZodString;
                date: z.ZodNumber;
                version: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                text: string;
                date: number;
                version: string;
            }, {
                text: string;
                date: number;
                version: string;
            }>>>;
            role: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            displayName: string;
            uid: string;
            defaultLanguage?: string | undefined;
            email?: string | null | undefined;
            photoURL?: string | null | undefined;
            isAnonymous?: boolean | undefined;
            fontSize?: number | null | undefined;
            color?: string | undefined;
            agreement?: {
                text: string;
                date: number;
                version: string;
            } | null | undefined;
            role?: string | undefined;
        }, {
            displayName: string;
            uid: string;
            defaultLanguage?: string | undefined;
            email?: string | null | undefined;
            photoURL?: string | null | undefined;
            isAnonymous?: boolean | undefined;
            fontSize?: number | null | undefined;
            color?: string | undefined;
            agreement?: {
                text: string;
                date: number;
                version: string;
            } | null | undefined;
            role?: string | undefined;
        }>;
        statementType: z.ZodEnum<[StatementType.statement, StatementType.option, StatementType.question, StatementType.document, StatementType.group, StatementType.stage]>;
        deliberativeElement: z.ZodOptional<z.ZodEnum<[DeliberativeElement.explanation, DeliberativeElement.needs, DeliberativeElement.resource, DeliberativeElement.consideration, DeliberativeElement.research, DeliberativeElement.option, DeliberativeElement.general]>>;
        color: z.ZodOptional<z.ZodString>;
        defaultLanguage: z.ZodOptional<z.ZodString>;
        followMe: z.ZodOptional<z.ZodString>;
        parentId: z.ZodString;
        parents: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        topParentId: z.ZodString;
        hasChildren: z.ZodOptional<z.ZodBoolean>;
        lastMessage: z.ZodOptional<z.ZodString>;
        lastUpdate: z.ZodNumber;
        lastChildUpdate: z.ZodOptional<z.ZodNumber>;
        createdAt: z.ZodNumber;
        pro: z.ZodOptional<z.ZodNumber>;
        con: z.ZodOptional<z.ZodNumber>;
        doc: z.ZodOptional<z.ZodObject<{
            isDoc: z.ZodBoolean;
            order: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            isDoc: boolean;
            order: number;
        }, {
            isDoc: boolean;
            order: number;
        }>>;
        evaluation: z.ZodOptional<z.ZodObject<{
            sumEvaluations: z.ZodNumber;
            agreement: z.ZodNumber;
            numberOfEvaluators: z.ZodNumber;
            sumPro: z.ZodOptional<z.ZodNumber>;
            sumCon: z.ZodOptional<z.ZodNumber>;
        }, "strip", z.ZodTypeAny, {
            agreement: number;
            sumEvaluations: number;
            numberOfEvaluators: number;
            sumPro?: number | undefined;
            sumCon?: number | undefined;
        }, {
            agreement: number;
            sumEvaluations: number;
            numberOfEvaluators: number;
            sumPro?: number | undefined;
            sumCon?: number | undefined;
        }>>;
        consensus: z.ZodNumber;
        order: z.ZodOptional<z.ZodNumber>;
        elementHight: z.ZodOptional<z.ZodNumber>;
        top: z.ZodOptional<z.ZodNumber>;
        votes: z.ZodOptional<z.ZodNumber>;
        selections: z.ZodOptional<z.ZodAny>;
        isSelected: z.ZodOptional<z.ZodBoolean>;
        importanceData: z.ZodOptional<z.ZodObject<{
            sumImportance: z.ZodNumber;
            numberOfUsers: z.ZodNumber;
            numberOfViews: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            sumImportance: number;
            numberOfUsers: number;
            numberOfViews: number;
        }, {
            sumImportance: number;
            numberOfUsers: number;
            numberOfViews: number;
        }>>;
        voted: z.ZodOptional<z.ZodNumber>;
        totalSubStatements: z.ZodOptional<z.ZodNumber>;
        statementSettings: z.ZodOptional<z.ZodObject<{
            /** holds the navigation tabs of the statement */
            subScreens: z.ZodOptional<z.ZodArray<z.ZodEnum<[import("./screensAndNavModels").Screen.DOC, import("./screensAndNavModels").Screen.HOME, import("./screensAndNavModels").Screen.STATEMENT, import("./screensAndNavModels").Screen.CHAT, import("./screensAndNavModels").Screen.OPTIONS, import("./screensAndNavModels").Screen.VOTE, import("./screensAndNavModels").Screen.GROUPS, import("./screensAndNavModels").Screen.SETTINGS, import("./screensAndNavModels").Screen.MASS_QUESTIONS, import("./screensAndNavModels").Screen.QUESTIONS_MASS, import("./screensAndNavModels").Screen.OPTIONS_CONSENSUS, import("./screensAndNavModels").Screen.OPTIONS_NEW, import("./screensAndNavModels").Screen.OPTIONS_RANDOM, import("./screensAndNavModels").Screen.OPTIONS_UPDATED, import("./screensAndNavModels").Screen.VOTES_CONSENSUS, import("./screensAndNavModels").Screen.VOTESֹֹֹ_VOTED, import("./screensAndNavModels").Screen.VOTES_NEW, import("./screensAndNavModels").Screen.VOTES_RANDOM, import("./screensAndNavModels").Screen.VOTES_UPDATED, import("./screensAndNavModels").Screen.ADMIN_CHOOSE, import("./screensAndNavModels").Screen.ADMIN_DIVIDE, import("./screensAndNavModels").Screen.QUESTIONS, import("./screensAndNavModels").Screen.QUESTIONS_NEW, import("./screensAndNavModels").Screen.QUESTIONS_RANDOM, import("./screensAndNavModels").Screen.QUESTIONS_UPDATED, import("./screensAndNavModels").Screen.QUESTIONS_CONSENSUS, import("./screensAndNavModels").Screen.INFO]>, "many">>;
            /** if true, non admin users can add options under evaluation screen */
            enableAddEvaluationOption: z.ZodOptional<z.ZodBoolean>;
            /** if true, non admin users can add options under voting screen */
            enableAddVotingOption: z.ZodOptional<z.ZodBoolean>;
            /** if true, the evaluation element will be enhanced */
            enhancedEvaluation: z.ZodOptional<z.ZodBoolean>;
            /** if true, the evaluation element will be shown */
            showEvaluation: z.ZodOptional<z.ZodBoolean>;
            /** if true, only the results will be shown */
            inVotingGetOnlyResults: z.ZodOptional<z.ZodBoolean>;
            enableSimilaritiesSearch: z.ZodOptional<z.ZodBoolean>;
            enableNotifications: z.ZodOptional<z.ZodBoolean>;
            enableNavigationalElements: z.ZodOptional<z.ZodBoolean>;
            show: z.ZodOptional<z.ZodBoolean>;
        }, "strip", z.ZodTypeAny, {
            subScreens?: (import("./screensAndNavModels").Screen.DOC | import("./screensAndNavModels").Screen.HOME | import("./screensAndNavModels").Screen.STATEMENT | import("./screensAndNavModels").Screen.CHAT | import("./screensAndNavModels").Screen.OPTIONS | import("./screensAndNavModels").Screen.VOTE | import("./screensAndNavModels").Screen.GROUPS | import("./screensAndNavModels").Screen.SETTINGS | import("./screensAndNavModels").Screen.MASS_QUESTIONS | import("./screensAndNavModels").Screen.QUESTIONS_MASS | import("./screensAndNavModels").Screen.OPTIONS_CONSENSUS | import("./screensAndNavModels").Screen.OPTIONS_NEW | import("./screensAndNavModels").Screen.OPTIONS_RANDOM | import("./screensAndNavModels").Screen.OPTIONS_UPDATED | import("./screensAndNavModels").Screen.VOTES_CONSENSUS | import("./screensAndNavModels").Screen.VOTESֹֹֹ_VOTED | import("./screensAndNavModels").Screen.VOTES_NEW | import("./screensAndNavModels").Screen.VOTES_RANDOM | import("./screensAndNavModels").Screen.VOTES_UPDATED | import("./screensAndNavModels").Screen.ADMIN_CHOOSE | import("./screensAndNavModels").Screen.ADMIN_DIVIDE | import("./screensAndNavModels").Screen.QUESTIONS | import("./screensAndNavModels").Screen.QUESTIONS_NEW | import("./screensAndNavModels").Screen.QUESTIONS_RANDOM | import("./screensAndNavModels").Screen.QUESTIONS_UPDATED | import("./screensAndNavModels").Screen.QUESTIONS_CONSENSUS | import("./screensAndNavModels").Screen.INFO)[] | undefined;
            enableAddEvaluationOption?: boolean | undefined;
            enableAddVotingOption?: boolean | undefined;
            enhancedEvaluation?: boolean | undefined;
            showEvaluation?: boolean | undefined;
            inVotingGetOnlyResults?: boolean | undefined;
            enableSimilaritiesSearch?: boolean | undefined;
            enableNotifications?: boolean | undefined;
            enableNavigationalElements?: boolean | undefined;
            show?: boolean | undefined;
        }, {
            subScreens?: (import("./screensAndNavModels").Screen.DOC | import("./screensAndNavModels").Screen.HOME | import("./screensAndNavModels").Screen.STATEMENT | import("./screensAndNavModels").Screen.CHAT | import("./screensAndNavModels").Screen.OPTIONS | import("./screensAndNavModels").Screen.VOTE | import("./screensAndNavModels").Screen.GROUPS | import("./screensAndNavModels").Screen.SETTINGS | import("./screensAndNavModels").Screen.MASS_QUESTIONS | import("./screensAndNavModels").Screen.QUESTIONS_MASS | import("./screensAndNavModels").Screen.OPTIONS_CONSENSUS | import("./screensAndNavModels").Screen.OPTIONS_NEW | import("./screensAndNavModels").Screen.OPTIONS_RANDOM | import("./screensAndNavModels").Screen.OPTIONS_UPDATED | import("./screensAndNavModels").Screen.VOTES_CONSENSUS | import("./screensAndNavModels").Screen.VOTESֹֹֹ_VOTED | import("./screensAndNavModels").Screen.VOTES_NEW | import("./screensAndNavModels").Screen.VOTES_RANDOM | import("./screensAndNavModels").Screen.VOTES_UPDATED | import("./screensAndNavModels").Screen.ADMIN_CHOOSE | import("./screensAndNavModels").Screen.ADMIN_DIVIDE | import("./screensAndNavModels").Screen.QUESTIONS | import("./screensAndNavModels").Screen.QUESTIONS_NEW | import("./screensAndNavModels").Screen.QUESTIONS_RANDOM | import("./screensAndNavModels").Screen.QUESTIONS_UPDATED | import("./screensAndNavModels").Screen.QUESTIONS_CONSENSUS | import("./screensAndNavModels").Screen.INFO)[] | undefined;
            enableAddEvaluationOption?: boolean | undefined;
            enableAddVotingOption?: boolean | undefined;
            enhancedEvaluation?: boolean | undefined;
            showEvaluation?: boolean | undefined;
            inVotingGetOnlyResults?: boolean | undefined;
            enableSimilaritiesSearch?: boolean | undefined;
            enableNotifications?: boolean | undefined;
            enableNavigationalElements?: boolean | undefined;
            show?: boolean | undefined;
        }>>;
        membership: z.ZodOptional<z.ZodObject<{
            adminApproveMembers: z.ZodOptional<z.ZodBoolean>;
            access: z.ZodOptional<z.ZodEnum<[Access.open, Access.close]>>;
            typeOfMembersAllowed: z.ZodOptional<z.ZodEnum<[membersAllowed.all, membersAllowed.nonAnonymous]>>;
        }, "strip", z.ZodTypeAny, {
            adminApproveMembers?: boolean | undefined;
            access?: Access | undefined;
            typeOfMembersAllowed?: membersAllowed | undefined;
        }, {
            adminApproveMembers?: boolean | undefined;
            access?: Access | undefined;
            typeOfMembersAllowed?: membersAllowed | undefined;
        }>>;
        maxConsensus: z.ZodOptional<z.ZodNumber>;
        selected: z.ZodOptional<z.ZodBoolean>;
        resultsSettings: z.ZodOptional<z.ZodObject<{
            resultsBy: z.ZodEnum<[import("./resultsModel").ResultsBy.consensusLevel, import("./resultsModel").ResultsBy.topOptions, import("./resultsModel").ResultsBy.checkedBy, import("./resultsModel").ResultsBy.privateCheck]>;
            numberOfResults: z.ZodOptional<z.ZodNumber>;
            numberOfSelections: z.ZodOptional<z.ZodNumber>;
            deep: z.ZodOptional<z.ZodNumber>;
            minConsensus: z.ZodOptional<z.ZodNumber>;
        }, "strip", z.ZodTypeAny, {
            resultsBy: import("./resultsModel").ResultsBy;
            numberOfResults?: number | undefined;
            numberOfSelections?: number | undefined;
            deep?: number | undefined;
            minConsensus?: number | undefined;
        }, {
            resultsBy: import("./resultsModel").ResultsBy;
            numberOfResults?: number | undefined;
            numberOfSelections?: number | undefined;
            deep?: number | undefined;
            minConsensus?: number | undefined;
        }>>;
        results: z.ZodOptional<z.ZodArray<z.ZodObject<{
            statementId: z.ZodString;
            statement: z.ZodString;
            creatorId: z.ZodString;
            creator: z.ZodObject<{
                displayName: z.ZodString;
                defaultLanguage: z.ZodOptional<z.ZodString>;
                email: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                photoURL: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                uid: z.ZodString;
                isAnonymous: z.ZodOptional<z.ZodBoolean>;
                fontSize: z.ZodNullable<z.ZodOptional<z.ZodNumber>>;
                color: z.ZodOptional<z.ZodString>;
                agreement: z.ZodNullable<z.ZodOptional<z.ZodObject<{
                    text: z.ZodString;
                    date: z.ZodNumber;
                    version: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    text: string;
                    date: number;
                    version: string;
                }, {
                    text: string;
                    date: number;
                    version: string;
                }>>>;
                role: z.ZodOptional<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                displayName: string;
                uid: string;
                defaultLanguage?: string | undefined;
                email?: string | null | undefined;
                photoURL?: string | null | undefined;
                isAnonymous?: boolean | undefined;
                fontSize?: number | null | undefined;
                color?: string | undefined;
                agreement?: {
                    text: string;
                    date: number;
                    version: string;
                } | null | undefined;
                role?: string | undefined;
            }, {
                displayName: string;
                uid: string;
                defaultLanguage?: string | undefined;
                email?: string | null | undefined;
                photoURL?: string | null | undefined;
                isAnonymous?: boolean | undefined;
                fontSize?: number | null | undefined;
                color?: string | undefined;
                agreement?: {
                    text: string;
                    date: number;
                    version: string;
                } | null | undefined;
                role?: string | undefined;
            }>;
            parentId: z.ZodString;
            consensus: z.ZodNumber;
            voted: z.ZodOptional<z.ZodNumber>;
        }, "strip", z.ZodTypeAny, {
            statement: string;
            statementId: string;
            creatorId: string;
            creator: {
                displayName: string;
                uid: string;
                defaultLanguage?: string | undefined;
                email?: string | null | undefined;
                photoURL?: string | null | undefined;
                isAnonymous?: boolean | undefined;
                fontSize?: number | null | undefined;
                color?: string | undefined;
                agreement?: {
                    text: string;
                    date: number;
                    version: string;
                } | null | undefined;
                role?: string | undefined;
            };
            parentId: string;
            consensus: number;
            voted?: number | undefined;
        }, {
            statement: string;
            statementId: string;
            creatorId: string;
            creator: {
                displayName: string;
                uid: string;
                defaultLanguage?: string | undefined;
                email?: string | null | undefined;
                photoURL?: string | null | undefined;
                isAnonymous?: boolean | undefined;
                fontSize?: number | null | undefined;
                color?: string | undefined;
                agreement?: {
                    text: string;
                    date: number;
                    version: string;
                } | null | undefined;
                role?: string | undefined;
            };
            parentId: string;
            consensus: number;
            voted?: number | undefined;
        }>, "many">>;
        isResult: z.ZodOptional<z.ZodBoolean>;
        imagesURL: z.ZodOptional<z.ZodObject<{
            main: z.ZodOptional<z.ZodString>;
            more: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        }, "strip", z.ZodTypeAny, {
            main?: string | undefined;
            more?: string[] | undefined;
        }, {
            main?: string | undefined;
            more?: string[] | undefined;
        }>>;
        /** total statement evaluators */
        totalEvaluators: z.ZodOptional<z.ZodNumber>;
        /** Question settings */
        questionSettings: z.ZodOptional<z.ZodObject<{
            questionType: z.ZodEnum<[QuestionType.singleStep, QuestionType.multipleSteps]>;
            currentStage: z.ZodEnum<[QuestionStage.explanation, QuestionStage.suggestion, QuestionStage.firstEvaluation, QuestionStage.secondEvaluation, QuestionStage.voting, QuestionStage.finished]>;
        }, "strip", z.ZodTypeAny, {
            questionType: QuestionType;
            currentStage: QuestionStage;
        }, {
            questionType: QuestionType;
            currentStage: QuestionStage;
        }>>;
        /** is part of temporary presentation under multi stage question */
        isInMultiStage: z.ZodOptional<z.ZodBoolean>;
        /** Document settings */
        documentSettings: z.ZodOptional<z.ZodObject<{
            parentDocumentId: z.ZodString;
            order: z.ZodNumber;
            type: z.ZodEnum<[DocumentType.paragraph, DocumentType.section, DocumentType.comment]>;
            isTop: z.ZodBoolean;
        }, "strip", z.ZodTypeAny, {
            type: DocumentType;
            order: number;
            parentDocumentId: string;
            isTop: boolean;
        }, {
            type: DocumentType;
            order: number;
            parentDocumentId: string;
            isTop: boolean;
        }>>;
        documentApproval: z.ZodOptional<z.ZodObject<{
            approved: z.ZodNumber;
            totalVoters: z.ZodNumber;
            averageApproval: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            approved: number;
            totalVoters: number;
            averageApproval: number;
        }, {
            approved: number;
            totalVoters: number;
            averageApproval: number;
        }>>;
        documentImportance: z.ZodOptional<z.ZodObject<{
            numberOfUsers: z.ZodNumber;
            averageImportance: z.ZodNumber;
            sumImportance: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            sumImportance: number;
            numberOfUsers: number;
            averageImportance: number;
        }, {
            sumImportance: number;
            numberOfUsers: number;
            averageImportance: number;
        }>>;
        documentAgree: z.ZodOptional<z.ZodObject<{
            agree: z.ZodOptional<z.ZodNumber>;
            disagree: z.ZodOptional<z.ZodNumber>;
            avgAgree: z.ZodOptional<z.ZodNumber>;
        }, "strip", z.ZodTypeAny, {
            agree?: number | undefined;
            disagree?: number | undefined;
            avgAgree?: number | undefined;
        }, {
            agree?: number | undefined;
            disagree?: number | undefined;
            avgAgree?: number | undefined;
        }>>;
        stageId: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        viewed: z.ZodOptional<z.ZodObject<{
            individualViews: z.ZodOptional<z.ZodNumber>;
        }, "strip", z.ZodTypeAny, {
            individualViews?: number | undefined;
        }, {
            individualViews?: number | undefined;
        }>>;
    }, "strip", z.ZodTypeAny, {
        statement: string;
        statementId: string;
        creatorId: string;
        creator: {
            displayName: string;
            uid: string;
            defaultLanguage?: string | undefined;
            email?: string | null | undefined;
            photoURL?: string | null | undefined;
            isAnonymous?: boolean | undefined;
            fontSize?: number | null | undefined;
            color?: string | undefined;
            agreement?: {
                text: string;
                date: number;
                version: string;
            } | null | undefined;
            role?: string | undefined;
        };
        statementType: StatementType;
        parentId: string;
        topParentId: string;
        lastUpdate: number;
        createdAt: number;
        consensus: number;
        defaultLanguage?: string | undefined;
        color?: string | undefined;
        evaluation?: {
            agreement: number;
            sumEvaluations: number;
            numberOfEvaluators: number;
            sumPro?: number | undefined;
            sumCon?: number | undefined;
        } | undefined;
        doc?: {
            isDoc: boolean;
            order: number;
        } | undefined;
        allowAnonymousLogin?: boolean | undefined;
        description?: string | undefined;
        deliberativeElement?: DeliberativeElement | undefined;
        followMe?: string | undefined;
        parents?: string[] | undefined;
        hasChildren?: boolean | undefined;
        lastMessage?: string | undefined;
        lastChildUpdate?: number | undefined;
        pro?: number | undefined;
        con?: number | undefined;
        order?: number | undefined;
        elementHight?: number | undefined;
        top?: number | undefined;
        votes?: number | undefined;
        selections?: any;
        isSelected?: boolean | undefined;
        importanceData?: {
            sumImportance: number;
            numberOfUsers: number;
            numberOfViews: number;
        } | undefined;
        voted?: number | undefined;
        totalSubStatements?: number | undefined;
        statementSettings?: {
            subScreens?: (import("./screensAndNavModels").Screen.DOC | import("./screensAndNavModels").Screen.HOME | import("./screensAndNavModels").Screen.STATEMENT | import("./screensAndNavModels").Screen.CHAT | import("./screensAndNavModels").Screen.OPTIONS | import("./screensAndNavModels").Screen.VOTE | import("./screensAndNavModels").Screen.GROUPS | import("./screensAndNavModels").Screen.SETTINGS | import("./screensAndNavModels").Screen.MASS_QUESTIONS | import("./screensAndNavModels").Screen.QUESTIONS_MASS | import("./screensAndNavModels").Screen.OPTIONS_CONSENSUS | import("./screensAndNavModels").Screen.OPTIONS_NEW | import("./screensAndNavModels").Screen.OPTIONS_RANDOM | import("./screensAndNavModels").Screen.OPTIONS_UPDATED | import("./screensAndNavModels").Screen.VOTES_CONSENSUS | import("./screensAndNavModels").Screen.VOTESֹֹֹ_VOTED | import("./screensAndNavModels").Screen.VOTES_NEW | import("./screensAndNavModels").Screen.VOTES_RANDOM | import("./screensAndNavModels").Screen.VOTES_UPDATED | import("./screensAndNavModels").Screen.ADMIN_CHOOSE | import("./screensAndNavModels").Screen.ADMIN_DIVIDE | import("./screensAndNavModels").Screen.QUESTIONS | import("./screensAndNavModels").Screen.QUESTIONS_NEW | import("./screensAndNavModels").Screen.QUESTIONS_RANDOM | import("./screensAndNavModels").Screen.QUESTIONS_UPDATED | import("./screensAndNavModels").Screen.QUESTIONS_CONSENSUS | import("./screensAndNavModels").Screen.INFO)[] | undefined;
            enableAddEvaluationOption?: boolean | undefined;
            enableAddVotingOption?: boolean | undefined;
            enhancedEvaluation?: boolean | undefined;
            showEvaluation?: boolean | undefined;
            inVotingGetOnlyResults?: boolean | undefined;
            enableSimilaritiesSearch?: boolean | undefined;
            enableNotifications?: boolean | undefined;
            enableNavigationalElements?: boolean | undefined;
            show?: boolean | undefined;
        } | undefined;
        membership?: {
            adminApproveMembers?: boolean | undefined;
            access?: Access | undefined;
            typeOfMembersAllowed?: membersAllowed | undefined;
        } | undefined;
        maxConsensus?: number | undefined;
        selected?: boolean | undefined;
        resultsSettings?: {
            resultsBy: import("./resultsModel").ResultsBy;
            numberOfResults?: number | undefined;
            numberOfSelections?: number | undefined;
            deep?: number | undefined;
            minConsensus?: number | undefined;
        } | undefined;
        results?: {
            statement: string;
            statementId: string;
            creatorId: string;
            creator: {
                displayName: string;
                uid: string;
                defaultLanguage?: string | undefined;
                email?: string | null | undefined;
                photoURL?: string | null | undefined;
                isAnonymous?: boolean | undefined;
                fontSize?: number | null | undefined;
                color?: string | undefined;
                agreement?: {
                    text: string;
                    date: number;
                    version: string;
                } | null | undefined;
                role?: string | undefined;
            };
            parentId: string;
            consensus: number;
            voted?: number | undefined;
        }[] | undefined;
        isResult?: boolean | undefined;
        imagesURL?: {
            main?: string | undefined;
            more?: string[] | undefined;
        } | undefined;
        totalEvaluators?: number | undefined;
        questionSettings?: {
            questionType: QuestionType;
            currentStage: QuestionStage;
        } | undefined;
        isInMultiStage?: boolean | undefined;
        documentSettings?: {
            type: DocumentType;
            order: number;
            parentDocumentId: string;
            isTop: boolean;
        } | undefined;
        documentApproval?: {
            approved: number;
            totalVoters: number;
            averageApproval: number;
        } | undefined;
        documentImportance?: {
            sumImportance: number;
            numberOfUsers: number;
            averageImportance: number;
        } | undefined;
        documentAgree?: {
            agree?: number | undefined;
            disagree?: number | undefined;
            avgAgree?: number | undefined;
        } | undefined;
        stageId?: string | null | undefined;
        viewed?: {
            individualViews?: number | undefined;
        } | undefined;
    }, {
        statement: string;
        statementId: string;
        creatorId: string;
        creator: {
            displayName: string;
            uid: string;
            defaultLanguage?: string | undefined;
            email?: string | null | undefined;
            photoURL?: string | null | undefined;
            isAnonymous?: boolean | undefined;
            fontSize?: number | null | undefined;
            color?: string | undefined;
            agreement?: {
                text: string;
                date: number;
                version: string;
            } | null | undefined;
            role?: string | undefined;
        };
        statementType: StatementType;
        parentId: string;
        topParentId: string;
        lastUpdate: number;
        createdAt: number;
        consensus: number;
        defaultLanguage?: string | undefined;
        color?: string | undefined;
        evaluation?: {
            agreement: number;
            sumEvaluations: number;
            numberOfEvaluators: number;
            sumPro?: number | undefined;
            sumCon?: number | undefined;
        } | undefined;
        doc?: {
            isDoc: boolean;
            order: number;
        } | undefined;
        allowAnonymousLogin?: boolean | undefined;
        description?: string | undefined;
        deliberativeElement?: DeliberativeElement | undefined;
        followMe?: string | undefined;
        parents?: string[] | undefined;
        hasChildren?: boolean | undefined;
        lastMessage?: string | undefined;
        lastChildUpdate?: number | undefined;
        pro?: number | undefined;
        con?: number | undefined;
        order?: number | undefined;
        elementHight?: number | undefined;
        top?: number | undefined;
        votes?: number | undefined;
        selections?: any;
        isSelected?: boolean | undefined;
        importanceData?: {
            sumImportance: number;
            numberOfUsers: number;
            numberOfViews: number;
        } | undefined;
        voted?: number | undefined;
        totalSubStatements?: number | undefined;
        statementSettings?: {
            subScreens?: (import("./screensAndNavModels").Screen.DOC | import("./screensAndNavModels").Screen.HOME | import("./screensAndNavModels").Screen.STATEMENT | import("./screensAndNavModels").Screen.CHAT | import("./screensAndNavModels").Screen.OPTIONS | import("./screensAndNavModels").Screen.VOTE | import("./screensAndNavModels").Screen.GROUPS | import("./screensAndNavModels").Screen.SETTINGS | import("./screensAndNavModels").Screen.MASS_QUESTIONS | import("./screensAndNavModels").Screen.QUESTIONS_MASS | import("./screensAndNavModels").Screen.OPTIONS_CONSENSUS | import("./screensAndNavModels").Screen.OPTIONS_NEW | import("./screensAndNavModels").Screen.OPTIONS_RANDOM | import("./screensAndNavModels").Screen.OPTIONS_UPDATED | import("./screensAndNavModels").Screen.VOTES_CONSENSUS | import("./screensAndNavModels").Screen.VOTESֹֹֹ_VOTED | import("./screensAndNavModels").Screen.VOTES_NEW | import("./screensAndNavModels").Screen.VOTES_RANDOM | import("./screensAndNavModels").Screen.VOTES_UPDATED | import("./screensAndNavModels").Screen.ADMIN_CHOOSE | import("./screensAndNavModels").Screen.ADMIN_DIVIDE | import("./screensAndNavModels").Screen.QUESTIONS | import("./screensAndNavModels").Screen.QUESTIONS_NEW | import("./screensAndNavModels").Screen.QUESTIONS_RANDOM | import("./screensAndNavModels").Screen.QUESTIONS_UPDATED | import("./screensAndNavModels").Screen.QUESTIONS_CONSENSUS | import("./screensAndNavModels").Screen.INFO)[] | undefined;
            enableAddEvaluationOption?: boolean | undefined;
            enableAddVotingOption?: boolean | undefined;
            enhancedEvaluation?: boolean | undefined;
            showEvaluation?: boolean | undefined;
            inVotingGetOnlyResults?: boolean | undefined;
            enableSimilaritiesSearch?: boolean | undefined;
            enableNotifications?: boolean | undefined;
            enableNavigationalElements?: boolean | undefined;
            show?: boolean | undefined;
        } | undefined;
        membership?: {
            adminApproveMembers?: boolean | undefined;
            access?: Access | undefined;
            typeOfMembersAllowed?: membersAllowed | undefined;
        } | undefined;
        maxConsensus?: number | undefined;
        selected?: boolean | undefined;
        resultsSettings?: {
            resultsBy: import("./resultsModel").ResultsBy;
            numberOfResults?: number | undefined;
            numberOfSelections?: number | undefined;
            deep?: number | undefined;
            minConsensus?: number | undefined;
        } | undefined;
        results?: {
            statement: string;
            statementId: string;
            creatorId: string;
            creator: {
                displayName: string;
                uid: string;
                defaultLanguage?: string | undefined;
                email?: string | null | undefined;
                photoURL?: string | null | undefined;
                isAnonymous?: boolean | undefined;
                fontSize?: number | null | undefined;
                color?: string | undefined;
                agreement?: {
                    text: string;
                    date: number;
                    version: string;
                } | null | undefined;
                role?: string | undefined;
            };
            parentId: string;
            consensus: number;
            voted?: number | undefined;
        }[] | undefined;
        isResult?: boolean | undefined;
        imagesURL?: {
            main?: string | undefined;
            more?: string[] | undefined;
        } | undefined;
        totalEvaluators?: number | undefined;
        questionSettings?: {
            questionType: QuestionType;
            currentStage: QuestionStage;
        } | undefined;
        isInMultiStage?: boolean | undefined;
        documentSettings?: {
            type: DocumentType;
            order: number;
            parentDocumentId: string;
            isTop: boolean;
        } | undefined;
        documentApproval?: {
            approved: number;
            totalVoters: number;
            averageApproval: number;
        } | undefined;
        documentImportance?: {
            sumImportance: number;
            numberOfUsers: number;
            averageImportance: number;
        } | undefined;
        documentAgree?: {
            agree?: number | undefined;
            disagree?: number | undefined;
            avgAgree?: number | undefined;
        } | undefined;
        stageId?: string | null | undefined;
        viewed?: {
            individualViews?: number | undefined;
        } | undefined;
    }>;
    notification: z.ZodDefault<z.ZodBoolean>;
    token: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    totalSubStatementsRead: z.ZodOptional<z.ZodNumber>;
    user: z.ZodObject<{
        displayName: z.ZodString;
        defaultLanguage: z.ZodOptional<z.ZodString>;
        email: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        photoURL: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        uid: z.ZodString;
        isAnonymous: z.ZodOptional<z.ZodBoolean>;
        fontSize: z.ZodNullable<z.ZodOptional<z.ZodNumber>>;
        color: z.ZodOptional<z.ZodString>;
        agreement: z.ZodNullable<z.ZodOptional<z.ZodObject<{
            text: z.ZodString;
            date: z.ZodNumber;
            version: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            text: string;
            date: number;
            version: string;
        }, {
            text: string;
            date: number;
            version: string;
        }>>>;
        role: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        displayName: string;
        uid: string;
        defaultLanguage?: string | undefined;
        email?: string | null | undefined;
        photoURL?: string | null | undefined;
        isAnonymous?: boolean | undefined;
        fontSize?: number | null | undefined;
        color?: string | undefined;
        agreement?: {
            text: string;
            date: number;
            version: string;
        } | null | undefined;
        role?: string | undefined;
    }, {
        displayName: string;
        uid: string;
        defaultLanguage?: string | undefined;
        email?: string | null | undefined;
        photoURL?: string | null | undefined;
        isAnonymous?: boolean | undefined;
        fontSize?: number | null | undefined;
        color?: string | undefined;
        agreement?: {
            text: string;
            date: number;
            version: string;
        } | null | undefined;
        role?: string | undefined;
    }>;
    userAskedForNotification: z.ZodDefault<z.ZodBoolean>;
}, "strip", z.ZodTypeAny, {
    role: import("./usersModels").Role.admin | import("./usersModels").Role.member | import("./usersModels").Role.banned | import("./usersModels").Role.unsubscribed;
    userId: string;
    statement: {
        statement: string;
        statementId: string;
        creatorId: string;
        creator: {
            displayName: string;
            uid: string;
            defaultLanguage?: string | undefined;
            email?: string | null | undefined;
            photoURL?: string | null | undefined;
            isAnonymous?: boolean | undefined;
            fontSize?: number | null | undefined;
            color?: string | undefined;
            agreement?: {
                text: string;
                date: number;
                version: string;
            } | null | undefined;
            role?: string | undefined;
        };
        statementType: StatementType;
        parentId: string;
        topParentId: string;
        lastUpdate: number;
        createdAt: number;
        consensus: number;
        defaultLanguage?: string | undefined;
        color?: string | undefined;
        evaluation?: {
            agreement: number;
            sumEvaluations: number;
            numberOfEvaluators: number;
            sumPro?: number | undefined;
            sumCon?: number | undefined;
        } | undefined;
        doc?: {
            isDoc: boolean;
            order: number;
        } | undefined;
        allowAnonymousLogin?: boolean | undefined;
        description?: string | undefined;
        deliberativeElement?: DeliberativeElement | undefined;
        followMe?: string | undefined;
        parents?: string[] | undefined;
        hasChildren?: boolean | undefined;
        lastMessage?: string | undefined;
        lastChildUpdate?: number | undefined;
        pro?: number | undefined;
        con?: number | undefined;
        order?: number | undefined;
        elementHight?: number | undefined;
        top?: number | undefined;
        votes?: number | undefined;
        selections?: any;
        isSelected?: boolean | undefined;
        importanceData?: {
            sumImportance: number;
            numberOfUsers: number;
            numberOfViews: number;
        } | undefined;
        voted?: number | undefined;
        totalSubStatements?: number | undefined;
        statementSettings?: {
            subScreens?: (import("./screensAndNavModels").Screen.DOC | import("./screensAndNavModels").Screen.HOME | import("./screensAndNavModels").Screen.STATEMENT | import("./screensAndNavModels").Screen.CHAT | import("./screensAndNavModels").Screen.OPTIONS | import("./screensAndNavModels").Screen.VOTE | import("./screensAndNavModels").Screen.GROUPS | import("./screensAndNavModels").Screen.SETTINGS | import("./screensAndNavModels").Screen.MASS_QUESTIONS | import("./screensAndNavModels").Screen.QUESTIONS_MASS | import("./screensAndNavModels").Screen.OPTIONS_CONSENSUS | import("./screensAndNavModels").Screen.OPTIONS_NEW | import("./screensAndNavModels").Screen.OPTIONS_RANDOM | import("./screensAndNavModels").Screen.OPTIONS_UPDATED | import("./screensAndNavModels").Screen.VOTES_CONSENSUS | import("./screensAndNavModels").Screen.VOTESֹֹֹ_VOTED | import("./screensAndNavModels").Screen.VOTES_NEW | import("./screensAndNavModels").Screen.VOTES_RANDOM | import("./screensAndNavModels").Screen.VOTES_UPDATED | import("./screensAndNavModels").Screen.ADMIN_CHOOSE | import("./screensAndNavModels").Screen.ADMIN_DIVIDE | import("./screensAndNavModels").Screen.QUESTIONS | import("./screensAndNavModels").Screen.QUESTIONS_NEW | import("./screensAndNavModels").Screen.QUESTIONS_RANDOM | import("./screensAndNavModels").Screen.QUESTIONS_UPDATED | import("./screensAndNavModels").Screen.QUESTIONS_CONSENSUS | import("./screensAndNavModels").Screen.INFO)[] | undefined;
            enableAddEvaluationOption?: boolean | undefined;
            enableAddVotingOption?: boolean | undefined;
            enhancedEvaluation?: boolean | undefined;
            showEvaluation?: boolean | undefined;
            inVotingGetOnlyResults?: boolean | undefined;
            enableSimilaritiesSearch?: boolean | undefined;
            enableNotifications?: boolean | undefined;
            enableNavigationalElements?: boolean | undefined;
            show?: boolean | undefined;
        } | undefined;
        membership?: {
            adminApproveMembers?: boolean | undefined;
            access?: Access | undefined;
            typeOfMembersAllowed?: membersAllowed | undefined;
        } | undefined;
        maxConsensus?: number | undefined;
        selected?: boolean | undefined;
        resultsSettings?: {
            resultsBy: import("./resultsModel").ResultsBy;
            numberOfResults?: number | undefined;
            numberOfSelections?: number | undefined;
            deep?: number | undefined;
            minConsensus?: number | undefined;
        } | undefined;
        results?: {
            statement: string;
            statementId: string;
            creatorId: string;
            creator: {
                displayName: string;
                uid: string;
                defaultLanguage?: string | undefined;
                email?: string | null | undefined;
                photoURL?: string | null | undefined;
                isAnonymous?: boolean | undefined;
                fontSize?: number | null | undefined;
                color?: string | undefined;
                agreement?: {
                    text: string;
                    date: number;
                    version: string;
                } | null | undefined;
                role?: string | undefined;
            };
            parentId: string;
            consensus: number;
            voted?: number | undefined;
        }[] | undefined;
        isResult?: boolean | undefined;
        imagesURL?: {
            main?: string | undefined;
            more?: string[] | undefined;
        } | undefined;
        totalEvaluators?: number | undefined;
        questionSettings?: {
            questionType: QuestionType;
            currentStage: QuestionStage;
        } | undefined;
        isInMultiStage?: boolean | undefined;
        documentSettings?: {
            type: DocumentType;
            order: number;
            parentDocumentId: string;
            isTop: boolean;
        } | undefined;
        documentApproval?: {
            approved: number;
            totalVoters: number;
            averageApproval: number;
        } | undefined;
        documentImportance?: {
            sumImportance: number;
            numberOfUsers: number;
            averageImportance: number;
        } | undefined;
        documentAgree?: {
            agree?: number | undefined;
            disagree?: number | undefined;
            avgAgree?: number | undefined;
        } | undefined;
        stageId?: string | null | undefined;
        viewed?: {
            individualViews?: number | undefined;
        } | undefined;
    };
    statementId: string;
    lastUpdate: number;
    statementsSubscribeId: string;
    notification: boolean;
    user: {
        displayName: string;
        uid: string;
        defaultLanguage?: string | undefined;
        email?: string | null | undefined;
        photoURL?: string | null | undefined;
        isAnonymous?: boolean | undefined;
        fontSize?: number | null | undefined;
        color?: string | undefined;
        agreement?: {
            text: string;
            date: number;
            version: string;
        } | null | undefined;
        role?: string | undefined;
    };
    userAskedForNotification: boolean;
    createdAt?: number | undefined;
    token?: string[] | undefined;
    totalSubStatementsRead?: number | undefined;
}, {
    role: import("./usersModels").Role.admin | import("./usersModels").Role.member | import("./usersModels").Role.banned | import("./usersModels").Role.unsubscribed;
    userId: string;
    statement: {
        statement: string;
        statementId: string;
        creatorId: string;
        creator: {
            displayName: string;
            uid: string;
            defaultLanguage?: string | undefined;
            email?: string | null | undefined;
            photoURL?: string | null | undefined;
            isAnonymous?: boolean | undefined;
            fontSize?: number | null | undefined;
            color?: string | undefined;
            agreement?: {
                text: string;
                date: number;
                version: string;
            } | null | undefined;
            role?: string | undefined;
        };
        statementType: StatementType;
        parentId: string;
        topParentId: string;
        lastUpdate: number;
        createdAt: number;
        consensus: number;
        defaultLanguage?: string | undefined;
        color?: string | undefined;
        evaluation?: {
            agreement: number;
            sumEvaluations: number;
            numberOfEvaluators: number;
            sumPro?: number | undefined;
            sumCon?: number | undefined;
        } | undefined;
        doc?: {
            isDoc: boolean;
            order: number;
        } | undefined;
        allowAnonymousLogin?: boolean | undefined;
        description?: string | undefined;
        deliberativeElement?: DeliberativeElement | undefined;
        followMe?: string | undefined;
        parents?: string[] | undefined;
        hasChildren?: boolean | undefined;
        lastMessage?: string | undefined;
        lastChildUpdate?: number | undefined;
        pro?: number | undefined;
        con?: number | undefined;
        order?: number | undefined;
        elementHight?: number | undefined;
        top?: number | undefined;
        votes?: number | undefined;
        selections?: any;
        isSelected?: boolean | undefined;
        importanceData?: {
            sumImportance: number;
            numberOfUsers: number;
            numberOfViews: number;
        } | undefined;
        voted?: number | undefined;
        totalSubStatements?: number | undefined;
        statementSettings?: {
            subScreens?: (import("./screensAndNavModels").Screen.DOC | import("./screensAndNavModels").Screen.HOME | import("./screensAndNavModels").Screen.STATEMENT | import("./screensAndNavModels").Screen.CHAT | import("./screensAndNavModels").Screen.OPTIONS | import("./screensAndNavModels").Screen.VOTE | import("./screensAndNavModels").Screen.GROUPS | import("./screensAndNavModels").Screen.SETTINGS | import("./screensAndNavModels").Screen.MASS_QUESTIONS | import("./screensAndNavModels").Screen.QUESTIONS_MASS | import("./screensAndNavModels").Screen.OPTIONS_CONSENSUS | import("./screensAndNavModels").Screen.OPTIONS_NEW | import("./screensAndNavModels").Screen.OPTIONS_RANDOM | import("./screensAndNavModels").Screen.OPTIONS_UPDATED | import("./screensAndNavModels").Screen.VOTES_CONSENSUS | import("./screensAndNavModels").Screen.VOTESֹֹֹ_VOTED | import("./screensAndNavModels").Screen.VOTES_NEW | import("./screensAndNavModels").Screen.VOTES_RANDOM | import("./screensAndNavModels").Screen.VOTES_UPDATED | import("./screensAndNavModels").Screen.ADMIN_CHOOSE | import("./screensAndNavModels").Screen.ADMIN_DIVIDE | import("./screensAndNavModels").Screen.QUESTIONS | import("./screensAndNavModels").Screen.QUESTIONS_NEW | import("./screensAndNavModels").Screen.QUESTIONS_RANDOM | import("./screensAndNavModels").Screen.QUESTIONS_UPDATED | import("./screensAndNavModels").Screen.QUESTIONS_CONSENSUS | import("./screensAndNavModels").Screen.INFO)[] | undefined;
            enableAddEvaluationOption?: boolean | undefined;
            enableAddVotingOption?: boolean | undefined;
            enhancedEvaluation?: boolean | undefined;
            showEvaluation?: boolean | undefined;
            inVotingGetOnlyResults?: boolean | undefined;
            enableSimilaritiesSearch?: boolean | undefined;
            enableNotifications?: boolean | undefined;
            enableNavigationalElements?: boolean | undefined;
            show?: boolean | undefined;
        } | undefined;
        membership?: {
            adminApproveMembers?: boolean | undefined;
            access?: Access | undefined;
            typeOfMembersAllowed?: membersAllowed | undefined;
        } | undefined;
        maxConsensus?: number | undefined;
        selected?: boolean | undefined;
        resultsSettings?: {
            resultsBy: import("./resultsModel").ResultsBy;
            numberOfResults?: number | undefined;
            numberOfSelections?: number | undefined;
            deep?: number | undefined;
            minConsensus?: number | undefined;
        } | undefined;
        results?: {
            statement: string;
            statementId: string;
            creatorId: string;
            creator: {
                displayName: string;
                uid: string;
                defaultLanguage?: string | undefined;
                email?: string | null | undefined;
                photoURL?: string | null | undefined;
                isAnonymous?: boolean | undefined;
                fontSize?: number | null | undefined;
                color?: string | undefined;
                agreement?: {
                    text: string;
                    date: number;
                    version: string;
                } | null | undefined;
                role?: string | undefined;
            };
            parentId: string;
            consensus: number;
            voted?: number | undefined;
        }[] | undefined;
        isResult?: boolean | undefined;
        imagesURL?: {
            main?: string | undefined;
            more?: string[] | undefined;
        } | undefined;
        totalEvaluators?: number | undefined;
        questionSettings?: {
            questionType: QuestionType;
            currentStage: QuestionStage;
        } | undefined;
        isInMultiStage?: boolean | undefined;
        documentSettings?: {
            type: DocumentType;
            order: number;
            parentDocumentId: string;
            isTop: boolean;
        } | undefined;
        documentApproval?: {
            approved: number;
            totalVoters: number;
            averageApproval: number;
        } | undefined;
        documentImportance?: {
            sumImportance: number;
            numberOfUsers: number;
            averageImportance: number;
        } | undefined;
        documentAgree?: {
            agree?: number | undefined;
            disagree?: number | undefined;
            avgAgree?: number | undefined;
        } | undefined;
        stageId?: string | null | undefined;
        viewed?: {
            individualViews?: number | undefined;
        } | undefined;
    };
    statementId: string;
    lastUpdate: number;
    statementsSubscribeId: string;
    user: {
        displayName: string;
        uid: string;
        defaultLanguage?: string | undefined;
        email?: string | null | undefined;
        photoURL?: string | null | undefined;
        isAnonymous?: boolean | undefined;
        fontSize?: number | null | undefined;
        color?: string | undefined;
        agreement?: {
            text: string;
            date: number;
            version: string;
        } | null | undefined;
        role?: string | undefined;
    };
    createdAt?: number | undefined;
    notification?: boolean | undefined;
    token?: string[] | undefined;
    totalSubStatementsRead?: number | undefined;
    userAskedForNotification?: boolean | undefined;
}>;
export type StatementSubscription = z.infer<typeof StatementSubscriptionSchema>;
export declare const StatementSubscriptionNotificationSchema: z.ZodObject<{
    statementId: z.ZodString;
    userId: z.ZodString;
    subscribed: z.ZodBoolean;
    token: z.ZodString;
    notification: z.ZodOptional<z.ZodBoolean>;
}, "strip", z.ZodTypeAny, {
    userId: string;
    statementId: string;
    token: string;
    subscribed: boolean;
    notification?: boolean | undefined;
}, {
    userId: string;
    statementId: string;
    token: string;
    subscribed: boolean;
    notification?: boolean | undefined;
}>;
export type StatementSubscriptionNotification = z.infer<typeof StatementSubscriptionNotificationSchema>;
export {};
