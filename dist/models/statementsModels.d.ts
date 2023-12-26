import { z } from "zod";
export declare enum StatementType {
    statement = "statement",
    option = "option",
    question = "question",
    result = "result"
}
export declare const SimpleStatementTypeSchema: z.ZodEnum<[StatementType.statement, StatementType.option, StatementType.question, StatementType.result]>;
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
    }>;
    parentId: z.ZodString;
    consensus: z.ZodNumber;
    voted: z.ZodOptional<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    statement: string;
    statementId: string;
    parentId: string;
    consensus: number;
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
    };
    creatorId: string;
    voted?: number | undefined;
}, {
    statement: string;
    statementId: string;
    parentId: string;
    consensus: number;
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
    };
    creatorId: string;
    voted?: number | undefined;
}>;
export type SimpleStatement = z.infer<typeof SimpleStatementSchema>;
export declare const StatementSchema: z.ZodObject<{
    consensus: z.ZodNumber;
    createdAt: z.ZodNumber;
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
    }>;
    creatorId: z.ZodString;
    defaultLanguage: z.ZodOptional<z.ZodString>;
    elementHight: z.ZodOptional<z.ZodNumber>;
    evaluation: z.ZodOptional<z.ZodObject<{
        con: z.ZodOptional<z.ZodNumber>;
        fairness: z.ZodOptional<z.ZodNumber>;
        pro: z.ZodOptional<z.ZodNumber>;
    }, "strip", z.ZodTypeAny, {
        con?: number | undefined;
        fairness?: number | undefined;
        pro?: number | undefined;
    }, {
        con?: number | undefined;
        fairness?: number | undefined;
        pro?: number | undefined;
    }>>;
    hasChildren: z.ZodOptional<z.ZodBoolean>;
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
    lastChildUpdate: z.ZodOptional<z.ZodNumber>;
    lastMessage: z.ZodOptional<z.ZodString>;
    lastUpdate: z.ZodNumber;
    maxConsesusStatement: z.ZodOptional<z.ZodObject<{
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
        }>;
        parentId: z.ZodString;
        consensus: z.ZodNumber;
        voted: z.ZodOptional<z.ZodNumber>;
    }, "strip", z.ZodTypeAny, {
        statement: string;
        statementId: string;
        parentId: string;
        consensus: number;
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
        };
        creatorId: string;
        voted?: number | undefined;
    }, {
        statement: string;
        statementId: string;
        parentId: string;
        consensus: number;
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
        };
        creatorId: string;
        voted?: number | undefined;
    }>>;
    maxConsensus: z.ZodOptional<z.ZodNumber>;
    order: z.ZodOptional<z.ZodNumber>;
    parentId: z.ZodString;
    parents: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    pro: z.ZodOptional<z.ZodNumber>;
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
        }>;
        parentId: z.ZodString;
        consensus: z.ZodNumber;
        voted: z.ZodOptional<z.ZodNumber>;
    }, "strip", z.ZodTypeAny, {
        statement: string;
        statementId: string;
        parentId: string;
        consensus: number;
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
        };
        creatorId: string;
        voted?: number | undefined;
    }, {
        statement: string;
        statementId: string;
        parentId: string;
        consensus: number;
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
        };
        creatorId: string;
        voted?: number | undefined;
    }>, "many">>;
    resultsSettings: z.ZodOptional<z.ZodObject<{
        deep: z.ZodOptional<z.ZodNumber>;
        minConsensus: z.ZodOptional<z.ZodNumber>;
        numberOfResults: z.ZodOptional<z.ZodNumber>;
        resultsBy: z.ZodEnum<[import("./resultsModel").ResultsBy.topOne, import("./resultsModel").ResultsBy.consensusLevel, import("./resultsModel").ResultsBy.topVote, import("./resultsModel").ResultsBy.topOptions, import("./resultsModel").ResultsBy.checkedBy, import("./resultsModel").ResultsBy.privateCheck]>;
    }, "strip", z.ZodTypeAny, {
        resultsBy: import("./resultsModel").ResultsBy;
        deep?: number | undefined;
        minConsensus?: number | undefined;
        numberOfResults?: number | undefined;
    }, {
        resultsBy: import("./resultsModel").ResultsBy;
        deep?: number | undefined;
        minConsensus?: number | undefined;
        numberOfResults?: number | undefined;
    }>>;
    roomSize: z.ZodOptional<z.ZodNumber>;
    roomsSettings: z.ZodOptional<z.ZodObject<{
        roomSize: z.ZodOptional<z.ZodNumber>;
        roomsState: z.ZodOptional<z.ZodEnum<[import("./roomsModel").RoomsStateSelection.SELECT_ROOMS, import("./roomsModel").RoomsStateSelection.DIVIDE]>>;
    }, "strip", z.ZodTypeAny, {
        roomSize?: number | undefined;
        roomsState?: import("./roomsModel").RoomsStateSelection | undefined;
    }, {
        roomSize?: number | undefined;
        roomsState?: import("./roomsModel").RoomsStateSelection | undefined;
    }>>;
    roomsState: z.ZodOptional<z.ZodEnum<[import("./roomsModel").RoomsStateSelection.SELECT_ROOMS, import("./roomsModel").RoomsStateSelection.DIVIDE]>>;
    selections: z.ZodOptional<z.ZodAny>;
    statement: z.ZodString;
    statementId: z.ZodString;
    statementSettings: z.ZodOptional<z.ZodObject<{
        enableAddEvaluationOption: z.ZodOptional<z.ZodBoolean>;
        enableAddVotingOption: z.ZodOptional<z.ZodBoolean>;
        subScreens: z.ZodOptional<z.ZodArray<z.ZodEnum<[import("./screensAndNavModels").Screen.DOC, import("./screensAndNavModels").Screen.HOME, import("./screensAndNavModels").Screen.STATEMENT, import("./screensAndNavModels").Screen.CHAT, import("./screensAndNavModels").Screen.OPTIONS, import("./screensAndNavModels").Screen.VOTE, import("./screensAndNavModels").Screen.GROUPS, import("./screensAndNavModels").Screen.SETTINGS, import("./screensAndNavModels").Screen.QUESTIONS_MASS, import("./screensAndNavModels").Screen.OPTIONS_CONSENSUS, import("./screensAndNavModels").Screen.OPTIONS_NEW, import("./screensAndNavModels").Screen.OPTIONS_RANDOM, import("./screensAndNavModels").Screen.OPTIONS_UPDATED, import("./screensAndNavModels").Screen.VOTES_CONSENSUS, import("./screensAndNavModels").Screen.VOTESֹֹֹ_VOTED, import("./screensAndNavModels").Screen.VOTES_NEW, import("./screensAndNavModels").Screen.VOTES_RANDOM, import("./screensAndNavModels").Screen.VOTES_UPDATED, import("./screensAndNavModels").Screen.ADMIN_CHOOSE, import("./screensAndNavModels").Screen.ADMIN_DIVIDE]>, "many">>;
    }, "strip", z.ZodTypeAny, {
        enableAddEvaluationOption?: boolean | undefined;
        enableAddVotingOption?: boolean | undefined;
        subScreens?: import("./screensAndNavModels").Screen[] | undefined;
    }, {
        enableAddEvaluationOption?: boolean | undefined;
        enableAddVotingOption?: boolean | undefined;
        subScreens?: import("./screensAndNavModels").Screen[] | undefined;
    }>>;
    statementType: z.ZodOptional<z.ZodEnum<[StatementType.statement, StatementType.option, StatementType.question, StatementType.result]>>;
    subScreens: z.ZodOptional<z.ZodArray<z.ZodEnum<[import("./screensAndNavModels").Screen.DOC, import("./screensAndNavModels").Screen.HOME, import("./screensAndNavModels").Screen.STATEMENT, import("./screensAndNavModels").Screen.CHAT, import("./screensAndNavModels").Screen.OPTIONS, import("./screensAndNavModels").Screen.VOTE, import("./screensAndNavModels").Screen.GROUPS, import("./screensAndNavModels").Screen.SETTINGS, import("./screensAndNavModels").Screen.QUESTIONS_MASS, import("./screensAndNavModels").Screen.OPTIONS_CONSENSUS, import("./screensAndNavModels").Screen.OPTIONS_NEW, import("./screensAndNavModels").Screen.OPTIONS_RANDOM, import("./screensAndNavModels").Screen.OPTIONS_UPDATED, import("./screensAndNavModels").Screen.VOTES_CONSENSUS, import("./screensAndNavModels").Screen.VOTESֹֹֹ_VOTED, import("./screensAndNavModels").Screen.VOTES_NEW, import("./screensAndNavModels").Screen.VOTES_RANDOM, import("./screensAndNavModels").Screen.VOTES_UPDATED, import("./screensAndNavModels").Screen.ADMIN_CHOOSE, import("./screensAndNavModels").Screen.ADMIN_DIVIDE]>, "many">>;
    totalSubStatements: z.ZodOptional<z.ZodNumber>;
    topParentId: z.ZodString;
    votes: z.ZodOptional<z.ZodNumber>;
    voted: z.ZodOptional<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    statement: string;
    statementId: string;
    parentId: string;
    consensus: number;
    createdAt: number;
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
    };
    creatorId: string;
    lastUpdate: number;
    topParentId: string;
    defaultLanguage?: string | undefined;
    elementHight?: number | undefined;
    evaluation?: {
        con?: number | undefined;
        fairness?: number | undefined;
        pro?: number | undefined;
    } | undefined;
    hasChildren?: boolean | undefined;
    imagesURL?: {
        main?: string | undefined;
        more?: string[] | undefined;
    } | undefined;
    lastChildUpdate?: number | undefined;
    lastMessage?: string | undefined;
    maxConsesusStatement?: {
        statement: string;
        statementId: string;
        parentId: string;
        consensus: number;
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
        };
        creatorId: string;
        voted?: number | undefined;
    } | undefined;
    maxConsensus?: number | undefined;
    order?: number | undefined;
    parents?: string[] | undefined;
    pro?: number | undefined;
    results?: {
        statement: string;
        statementId: string;
        parentId: string;
        consensus: number;
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
        };
        creatorId: string;
        voted?: number | undefined;
    }[] | undefined;
    resultsSettings?: {
        resultsBy: import("./resultsModel").ResultsBy;
        deep?: number | undefined;
        minConsensus?: number | undefined;
        numberOfResults?: number | undefined;
    } | undefined;
    roomSize?: number | undefined;
    roomsSettings?: {
        roomSize?: number | undefined;
        roomsState?: import("./roomsModel").RoomsStateSelection | undefined;
    } | undefined;
    roomsState?: import("./roomsModel").RoomsStateSelection | undefined;
    selections?: any;
    statementSettings?: {
        enableAddEvaluationOption?: boolean | undefined;
        enableAddVotingOption?: boolean | undefined;
        subScreens?: import("./screensAndNavModels").Screen[] | undefined;
    } | undefined;
    statementType?: StatementType | undefined;
    subScreens?: import("./screensAndNavModels").Screen[] | undefined;
    totalSubStatements?: number | undefined;
    votes?: number | undefined;
    voted?: number | undefined;
}, {
    statement: string;
    statementId: string;
    parentId: string;
    consensus: number;
    createdAt: number;
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
    };
    creatorId: string;
    lastUpdate: number;
    topParentId: string;
    defaultLanguage?: string | undefined;
    elementHight?: number | undefined;
    evaluation?: {
        con?: number | undefined;
        fairness?: number | undefined;
        pro?: number | undefined;
    } | undefined;
    hasChildren?: boolean | undefined;
    imagesURL?: {
        main?: string | undefined;
        more?: string[] | undefined;
    } | undefined;
    lastChildUpdate?: number | undefined;
    lastMessage?: string | undefined;
    maxConsesusStatement?: {
        statement: string;
        statementId: string;
        parentId: string;
        consensus: number;
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
        };
        creatorId: string;
        voted?: number | undefined;
    } | undefined;
    maxConsensus?: number | undefined;
    order?: number | undefined;
    parents?: string[] | undefined;
    pro?: number | undefined;
    results?: {
        statement: string;
        statementId: string;
        parentId: string;
        consensus: number;
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
        };
        creatorId: string;
        voted?: number | undefined;
    }[] | undefined;
    resultsSettings?: {
        resultsBy: import("./resultsModel").ResultsBy;
        deep?: number | undefined;
        minConsensus?: number | undefined;
        numberOfResults?: number | undefined;
    } | undefined;
    roomSize?: number | undefined;
    roomsSettings?: {
        roomSize?: number | undefined;
        roomsState?: import("./roomsModel").RoomsStateSelection | undefined;
    } | undefined;
    roomsState?: import("./roomsModel").RoomsStateSelection | undefined;
    selections?: any;
    statementSettings?: {
        enableAddEvaluationOption?: boolean | undefined;
        enableAddVotingOption?: boolean | undefined;
        subScreens?: import("./screensAndNavModels").Screen[] | undefined;
    } | undefined;
    statementType?: StatementType | undefined;
    subScreens?: import("./screensAndNavModels").Screen[] | undefined;
    totalSubStatements?: number | undefined;
    votes?: number | undefined;
    voted?: number | undefined;
}>;
export type Statement = z.infer<typeof StatementSchema>;
export declare const StatementSubscriptionSchema: z.ZodObject<{
    role: z.ZodEnum<[import("./usersModels").Role.admin, import("./usersModels").Role.member, import("./usersModels").Role.parentAdmin, import("./usersModels").Role.systemAdmin, import("./usersModels").Role.statementCreator, import("./usersModels").Role.guest, import("./usersModels").Role.banned]>;
    userId: z.ZodString;
    statementId: z.ZodString;
    lastUpdate: z.ZodNumber;
    statementsSubscribeId: z.ZodString;
    statement: z.ZodObject<{
        consensus: z.ZodNumber;
        createdAt: z.ZodNumber;
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
        }>;
        creatorId: z.ZodString;
        defaultLanguage: z.ZodOptional<z.ZodString>;
        elementHight: z.ZodOptional<z.ZodNumber>;
        evaluation: z.ZodOptional<z.ZodObject<{
            con: z.ZodOptional<z.ZodNumber>;
            fairness: z.ZodOptional<z.ZodNumber>;
            pro: z.ZodOptional<z.ZodNumber>;
        }, "strip", z.ZodTypeAny, {
            con?: number | undefined;
            fairness?: number | undefined;
            pro?: number | undefined;
        }, {
            con?: number | undefined;
            fairness?: number | undefined;
            pro?: number | undefined;
        }>>;
        hasChildren: z.ZodOptional<z.ZodBoolean>;
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
        lastChildUpdate: z.ZodOptional<z.ZodNumber>;
        lastMessage: z.ZodOptional<z.ZodString>;
        lastUpdate: z.ZodNumber;
        maxConsesusStatement: z.ZodOptional<z.ZodObject<{
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
            }>;
            parentId: z.ZodString;
            consensus: z.ZodNumber;
            voted: z.ZodOptional<z.ZodNumber>;
        }, "strip", z.ZodTypeAny, {
            statement: string;
            statementId: string;
            parentId: string;
            consensus: number;
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
            };
            creatorId: string;
            voted?: number | undefined;
        }, {
            statement: string;
            statementId: string;
            parentId: string;
            consensus: number;
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
            };
            creatorId: string;
            voted?: number | undefined;
        }>>;
        maxConsensus: z.ZodOptional<z.ZodNumber>;
        order: z.ZodOptional<z.ZodNumber>;
        parentId: z.ZodString;
        parents: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        pro: z.ZodOptional<z.ZodNumber>;
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
            }>;
            parentId: z.ZodString;
            consensus: z.ZodNumber;
            voted: z.ZodOptional<z.ZodNumber>;
        }, "strip", z.ZodTypeAny, {
            statement: string;
            statementId: string;
            parentId: string;
            consensus: number;
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
            };
            creatorId: string;
            voted?: number | undefined;
        }, {
            statement: string;
            statementId: string;
            parentId: string;
            consensus: number;
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
            };
            creatorId: string;
            voted?: number | undefined;
        }>, "many">>;
        resultsSettings: z.ZodOptional<z.ZodObject<{
            deep: z.ZodOptional<z.ZodNumber>;
            minConsensus: z.ZodOptional<z.ZodNumber>;
            numberOfResults: z.ZodOptional<z.ZodNumber>;
            resultsBy: z.ZodEnum<[import("./resultsModel").ResultsBy.topOne, import("./resultsModel").ResultsBy.consensusLevel, import("./resultsModel").ResultsBy.topVote, import("./resultsModel").ResultsBy.topOptions, import("./resultsModel").ResultsBy.checkedBy, import("./resultsModel").ResultsBy.privateCheck]>;
        }, "strip", z.ZodTypeAny, {
            resultsBy: import("./resultsModel").ResultsBy;
            deep?: number | undefined;
            minConsensus?: number | undefined;
            numberOfResults?: number | undefined;
        }, {
            resultsBy: import("./resultsModel").ResultsBy;
            deep?: number | undefined;
            minConsensus?: number | undefined;
            numberOfResults?: number | undefined;
        }>>;
        roomSize: z.ZodOptional<z.ZodNumber>;
        roomsSettings: z.ZodOptional<z.ZodObject<{
            roomSize: z.ZodOptional<z.ZodNumber>;
            roomsState: z.ZodOptional<z.ZodEnum<[import("./roomsModel").RoomsStateSelection.SELECT_ROOMS, import("./roomsModel").RoomsStateSelection.DIVIDE]>>;
        }, "strip", z.ZodTypeAny, {
            roomSize?: number | undefined;
            roomsState?: import("./roomsModel").RoomsStateSelection | undefined;
        }, {
            roomSize?: number | undefined;
            roomsState?: import("./roomsModel").RoomsStateSelection | undefined;
        }>>;
        roomsState: z.ZodOptional<z.ZodEnum<[import("./roomsModel").RoomsStateSelection.SELECT_ROOMS, import("./roomsModel").RoomsStateSelection.DIVIDE]>>;
        selections: z.ZodOptional<z.ZodAny>;
        statement: z.ZodString;
        statementId: z.ZodString;
        statementSettings: z.ZodOptional<z.ZodObject<{
            enableAddEvaluationOption: z.ZodOptional<z.ZodBoolean>;
            enableAddVotingOption: z.ZodOptional<z.ZodBoolean>;
            subScreens: z.ZodOptional<z.ZodArray<z.ZodEnum<[import("./screensAndNavModels").Screen.DOC, import("./screensAndNavModels").Screen.HOME, import("./screensAndNavModels").Screen.STATEMENT, import("./screensAndNavModels").Screen.CHAT, import("./screensAndNavModels").Screen.OPTIONS, import("./screensAndNavModels").Screen.VOTE, import("./screensAndNavModels").Screen.GROUPS, import("./screensAndNavModels").Screen.SETTINGS, import("./screensAndNavModels").Screen.QUESTIONS_MASS, import("./screensAndNavModels").Screen.OPTIONS_CONSENSUS, import("./screensAndNavModels").Screen.OPTIONS_NEW, import("./screensAndNavModels").Screen.OPTIONS_RANDOM, import("./screensAndNavModels").Screen.OPTIONS_UPDATED, import("./screensAndNavModels").Screen.VOTES_CONSENSUS, import("./screensAndNavModels").Screen.VOTESֹֹֹ_VOTED, import("./screensAndNavModels").Screen.VOTES_NEW, import("./screensAndNavModels").Screen.VOTES_RANDOM, import("./screensAndNavModels").Screen.VOTES_UPDATED, import("./screensAndNavModels").Screen.ADMIN_CHOOSE, import("./screensAndNavModels").Screen.ADMIN_DIVIDE]>, "many">>;
        }, "strip", z.ZodTypeAny, {
            enableAddEvaluationOption?: boolean | undefined;
            enableAddVotingOption?: boolean | undefined;
            subScreens?: import("./screensAndNavModels").Screen[] | undefined;
        }, {
            enableAddEvaluationOption?: boolean | undefined;
            enableAddVotingOption?: boolean | undefined;
            subScreens?: import("./screensAndNavModels").Screen[] | undefined;
        }>>;
        statementType: z.ZodOptional<z.ZodEnum<[StatementType.statement, StatementType.option, StatementType.question, StatementType.result]>>;
        subScreens: z.ZodOptional<z.ZodArray<z.ZodEnum<[import("./screensAndNavModels").Screen.DOC, import("./screensAndNavModels").Screen.HOME, import("./screensAndNavModels").Screen.STATEMENT, import("./screensAndNavModels").Screen.CHAT, import("./screensAndNavModels").Screen.OPTIONS, import("./screensAndNavModels").Screen.VOTE, import("./screensAndNavModels").Screen.GROUPS, import("./screensAndNavModels").Screen.SETTINGS, import("./screensAndNavModels").Screen.QUESTIONS_MASS, import("./screensAndNavModels").Screen.OPTIONS_CONSENSUS, import("./screensAndNavModels").Screen.OPTIONS_NEW, import("./screensAndNavModels").Screen.OPTIONS_RANDOM, import("./screensAndNavModels").Screen.OPTIONS_UPDATED, import("./screensAndNavModels").Screen.VOTES_CONSENSUS, import("./screensAndNavModels").Screen.VOTESֹֹֹ_VOTED, import("./screensAndNavModels").Screen.VOTES_NEW, import("./screensAndNavModels").Screen.VOTES_RANDOM, import("./screensAndNavModels").Screen.VOTES_UPDATED, import("./screensAndNavModels").Screen.ADMIN_CHOOSE, import("./screensAndNavModels").Screen.ADMIN_DIVIDE]>, "many">>;
        totalSubStatements: z.ZodOptional<z.ZodNumber>;
        topParentId: z.ZodString;
        votes: z.ZodOptional<z.ZodNumber>;
        voted: z.ZodOptional<z.ZodNumber>;
    }, "strip", z.ZodTypeAny, {
        statement: string;
        statementId: string;
        parentId: string;
        consensus: number;
        createdAt: number;
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
        };
        creatorId: string;
        lastUpdate: number;
        topParentId: string;
        defaultLanguage?: string | undefined;
        elementHight?: number | undefined;
        evaluation?: {
            con?: number | undefined;
            fairness?: number | undefined;
            pro?: number | undefined;
        } | undefined;
        hasChildren?: boolean | undefined;
        imagesURL?: {
            main?: string | undefined;
            more?: string[] | undefined;
        } | undefined;
        lastChildUpdate?: number | undefined;
        lastMessage?: string | undefined;
        maxConsesusStatement?: {
            statement: string;
            statementId: string;
            parentId: string;
            consensus: number;
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
            };
            creatorId: string;
            voted?: number | undefined;
        } | undefined;
        maxConsensus?: number | undefined;
        order?: number | undefined;
        parents?: string[] | undefined;
        pro?: number | undefined;
        results?: {
            statement: string;
            statementId: string;
            parentId: string;
            consensus: number;
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
            };
            creatorId: string;
            voted?: number | undefined;
        }[] | undefined;
        resultsSettings?: {
            resultsBy: import("./resultsModel").ResultsBy;
            deep?: number | undefined;
            minConsensus?: number | undefined;
            numberOfResults?: number | undefined;
        } | undefined;
        roomSize?: number | undefined;
        roomsSettings?: {
            roomSize?: number | undefined;
            roomsState?: import("./roomsModel").RoomsStateSelection | undefined;
        } | undefined;
        roomsState?: import("./roomsModel").RoomsStateSelection | undefined;
        selections?: any;
        statementSettings?: {
            enableAddEvaluationOption?: boolean | undefined;
            enableAddVotingOption?: boolean | undefined;
            subScreens?: import("./screensAndNavModels").Screen[] | undefined;
        } | undefined;
        statementType?: StatementType | undefined;
        subScreens?: import("./screensAndNavModels").Screen[] | undefined;
        totalSubStatements?: number | undefined;
        votes?: number | undefined;
        voted?: number | undefined;
    }, {
        statement: string;
        statementId: string;
        parentId: string;
        consensus: number;
        createdAt: number;
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
        };
        creatorId: string;
        lastUpdate: number;
        topParentId: string;
        defaultLanguage?: string | undefined;
        elementHight?: number | undefined;
        evaluation?: {
            con?: number | undefined;
            fairness?: number | undefined;
            pro?: number | undefined;
        } | undefined;
        hasChildren?: boolean | undefined;
        imagesURL?: {
            main?: string | undefined;
            more?: string[] | undefined;
        } | undefined;
        lastChildUpdate?: number | undefined;
        lastMessage?: string | undefined;
        maxConsesusStatement?: {
            statement: string;
            statementId: string;
            parentId: string;
            consensus: number;
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
            };
            creatorId: string;
            voted?: number | undefined;
        } | undefined;
        maxConsensus?: number | undefined;
        order?: number | undefined;
        parents?: string[] | undefined;
        pro?: number | undefined;
        results?: {
            statement: string;
            statementId: string;
            parentId: string;
            consensus: number;
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
            };
            creatorId: string;
            voted?: number | undefined;
        }[] | undefined;
        resultsSettings?: {
            resultsBy: import("./resultsModel").ResultsBy;
            deep?: number | undefined;
            minConsensus?: number | undefined;
            numberOfResults?: number | undefined;
        } | undefined;
        roomSize?: number | undefined;
        roomsSettings?: {
            roomSize?: number | undefined;
            roomsState?: import("./roomsModel").RoomsStateSelection | undefined;
        } | undefined;
        roomsState?: import("./roomsModel").RoomsStateSelection | undefined;
        selections?: any;
        statementSettings?: {
            enableAddEvaluationOption?: boolean | undefined;
            enableAddVotingOption?: boolean | undefined;
            subScreens?: import("./screensAndNavModels").Screen[] | undefined;
        } | undefined;
        statementType?: StatementType | undefined;
        subScreens?: import("./screensAndNavModels").Screen[] | undefined;
        totalSubStatements?: number | undefined;
        votes?: number | undefined;
        voted?: number | undefined;
    }>;
    notification: z.ZodOptional<z.ZodBoolean>;
    token: z.ZodOptional<z.ZodString>;
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
    }>;
}, "strip", z.ZodTypeAny, {
    role: import("./usersModels").Role;
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
    };
    statement: {
        statement: string;
        statementId: string;
        parentId: string;
        consensus: number;
        createdAt: number;
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
        };
        creatorId: string;
        lastUpdate: number;
        topParentId: string;
        defaultLanguage?: string | undefined;
        elementHight?: number | undefined;
        evaluation?: {
            con?: number | undefined;
            fairness?: number | undefined;
            pro?: number | undefined;
        } | undefined;
        hasChildren?: boolean | undefined;
        imagesURL?: {
            main?: string | undefined;
            more?: string[] | undefined;
        } | undefined;
        lastChildUpdate?: number | undefined;
        lastMessage?: string | undefined;
        maxConsesusStatement?: {
            statement: string;
            statementId: string;
            parentId: string;
            consensus: number;
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
            };
            creatorId: string;
            voted?: number | undefined;
        } | undefined;
        maxConsensus?: number | undefined;
        order?: number | undefined;
        parents?: string[] | undefined;
        pro?: number | undefined;
        results?: {
            statement: string;
            statementId: string;
            parentId: string;
            consensus: number;
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
            };
            creatorId: string;
            voted?: number | undefined;
        }[] | undefined;
        resultsSettings?: {
            resultsBy: import("./resultsModel").ResultsBy;
            deep?: number | undefined;
            minConsensus?: number | undefined;
            numberOfResults?: number | undefined;
        } | undefined;
        roomSize?: number | undefined;
        roomsSettings?: {
            roomSize?: number | undefined;
            roomsState?: import("./roomsModel").RoomsStateSelection | undefined;
        } | undefined;
        roomsState?: import("./roomsModel").RoomsStateSelection | undefined;
        selections?: any;
        statementSettings?: {
            enableAddEvaluationOption?: boolean | undefined;
            enableAddVotingOption?: boolean | undefined;
            subScreens?: import("./screensAndNavModels").Screen[] | undefined;
        } | undefined;
        statementType?: StatementType | undefined;
        subScreens?: import("./screensAndNavModels").Screen[] | undefined;
        totalSubStatements?: number | undefined;
        votes?: number | undefined;
        voted?: number | undefined;
    };
    statementId: string;
    lastUpdate: number;
    userId: string;
    statementsSubscribeId: string;
    notification?: boolean | undefined;
    token?: string | undefined;
    totalSubStatementsRead?: number | undefined;
}, {
    role: import("./usersModels").Role;
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
    };
    statement: {
        statement: string;
        statementId: string;
        parentId: string;
        consensus: number;
        createdAt: number;
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
        };
        creatorId: string;
        lastUpdate: number;
        topParentId: string;
        defaultLanguage?: string | undefined;
        elementHight?: number | undefined;
        evaluation?: {
            con?: number | undefined;
            fairness?: number | undefined;
            pro?: number | undefined;
        } | undefined;
        hasChildren?: boolean | undefined;
        imagesURL?: {
            main?: string | undefined;
            more?: string[] | undefined;
        } | undefined;
        lastChildUpdate?: number | undefined;
        lastMessage?: string | undefined;
        maxConsesusStatement?: {
            statement: string;
            statementId: string;
            parentId: string;
            consensus: number;
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
            };
            creatorId: string;
            voted?: number | undefined;
        } | undefined;
        maxConsensus?: number | undefined;
        order?: number | undefined;
        parents?: string[] | undefined;
        pro?: number | undefined;
        results?: {
            statement: string;
            statementId: string;
            parentId: string;
            consensus: number;
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
            };
            creatorId: string;
            voted?: number | undefined;
        }[] | undefined;
        resultsSettings?: {
            resultsBy: import("./resultsModel").ResultsBy;
            deep?: number | undefined;
            minConsensus?: number | undefined;
            numberOfResults?: number | undefined;
        } | undefined;
        roomSize?: number | undefined;
        roomsSettings?: {
            roomSize?: number | undefined;
            roomsState?: import("./roomsModel").RoomsStateSelection | undefined;
        } | undefined;
        roomsState?: import("./roomsModel").RoomsStateSelection | undefined;
        selections?: any;
        statementSettings?: {
            enableAddEvaluationOption?: boolean | undefined;
            enableAddVotingOption?: boolean | undefined;
            subScreens?: import("./screensAndNavModels").Screen[] | undefined;
        } | undefined;
        statementType?: StatementType | undefined;
        subScreens?: import("./screensAndNavModels").Screen[] | undefined;
        totalSubStatements?: number | undefined;
        votes?: number | undefined;
        voted?: number | undefined;
    };
    statementId: string;
    lastUpdate: number;
    userId: string;
    statementsSubscribeId: string;
    notification?: boolean | undefined;
    token?: string | undefined;
    totalSubStatementsRead?: number | undefined;
}>;
export type StatementSubscription = z.infer<typeof StatementSubscriptionSchema>;
export declare const StatementSubscriptionNotificationSchema: z.ZodObject<{
    statementId: z.ZodString;
    userId: z.ZodString;
    subscribed: z.ZodBoolean;
    token: z.ZodString;
    notification: z.ZodOptional<z.ZodBoolean>;
}, "strip", z.ZodTypeAny, {
    statementId: string;
    userId: string;
    token: string;
    subscribed: boolean;
    notification?: boolean | undefined;
}, {
    statementId: string;
    userId: string;
    token: string;
    subscribed: boolean;
    notification?: boolean | undefined;
}>;
export type StatementSubscriptionNotification = z.infer<typeof StatementSubscriptionNotificationSchema>;
