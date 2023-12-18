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
        email: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        photoURL: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        uid: z.ZodString;
        isAnonymous: z.ZodOptional<z.ZodBoolean>;
        fontSize: z.ZodNullable<z.ZodOptional<z.ZodNumber>>;
        defaultLanguage: z.ZodNullable<z.ZodOptional<z.ZodString>>;
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
        email?: string | null | undefined;
        photoURL?: string | null | undefined;
        isAnonymous?: boolean | undefined;
        fontSize?: number | null | undefined;
        defaultLanguage?: string | null | undefined;
        color?: string | undefined;
        agreement?: {
            text: string;
            date: number;
            version: string;
        } | null | undefined;
    }, {
        displayName: string;
        uid: string;
        email?: string | null | undefined;
        photoURL?: string | null | undefined;
        isAnonymous?: boolean | undefined;
        fontSize?: number | null | undefined;
        defaultLanguage?: string | null | undefined;
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
    creatorId: string;
    creator: {
        displayName: string;
        uid: string;
        email?: string | null | undefined;
        photoURL?: string | null | undefined;
        isAnonymous?: boolean | undefined;
        fontSize?: number | null | undefined;
        defaultLanguage?: string | null | undefined;
        color?: string | undefined;
        agreement?: {
            text: string;
            date: number;
            version: string;
        } | null | undefined;
    };
    consensus: number;
    voted?: number | undefined;
}, {
    statement: string;
    statementId: string;
    parentId: string;
    creatorId: string;
    creator: {
        displayName: string;
        uid: string;
        email?: string | null | undefined;
        photoURL?: string | null | undefined;
        isAnonymous?: boolean | undefined;
        fontSize?: number | null | undefined;
        defaultLanguage?: string | null | undefined;
        color?: string | undefined;
        agreement?: {
            text: string;
            date: number;
            version: string;
        } | null | undefined;
    };
    consensus: number;
    voted?: number | undefined;
}>;
export type SimpleStatement = z.infer<typeof SimpleStatementSchema>;
export declare const StatementSchema: z.ZodObject<{
    statement: z.ZodString;
    statementId: z.ZodString;
    creatorId: z.ZodString;
    creator: z.ZodObject<{
        displayName: z.ZodString;
        email: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        photoURL: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        uid: z.ZodString;
        isAnonymous: z.ZodOptional<z.ZodBoolean>;
        fontSize: z.ZodNullable<z.ZodOptional<z.ZodNumber>>;
        defaultLanguage: z.ZodNullable<z.ZodOptional<z.ZodString>>;
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
        email?: string | null | undefined;
        photoURL?: string | null | undefined;
        isAnonymous?: boolean | undefined;
        fontSize?: number | null | undefined;
        defaultLanguage?: string | null | undefined;
        color?: string | undefined;
        agreement?: {
            text: string;
            date: number;
            version: string;
        } | null | undefined;
    }, {
        displayName: string;
        uid: string;
        email?: string | null | undefined;
        photoURL?: string | null | undefined;
        isAnonymous?: boolean | undefined;
        fontSize?: number | null | undefined;
        defaultLanguage?: string | null | undefined;
        color?: string | undefined;
        agreement?: {
            text: string;
            date: number;
            version: string;
        } | null | undefined;
    }>;
    defaultLanguage: z.ZodOptional<z.ZodString>;
    parentId: z.ZodString;
    parents: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    topParentId: z.ZodOptional<z.ZodString>;
    hasChildren: z.ZodOptional<z.ZodBoolean>;
    lastMessage: z.ZodOptional<z.ZodString>;
    lastUpdate: z.ZodNumber;
    lastChildUpdate: z.ZodOptional<z.ZodNumber>;
    createdAt: z.ZodNumber;
    type: z.ZodOptional<z.ZodString>;
    pro: z.ZodOptional<z.ZodNumber>;
    con: z.ZodOptional<z.ZodNumber>;
    consensus: z.ZodNumber;
    order: z.ZodOptional<z.ZodNumber>;
    elementHight: z.ZodOptional<z.ZodNumber>;
    votes: z.ZodOptional<z.ZodNumber>;
    selections: z.ZodOptional<z.ZodAny>;
    voted: z.ZodOptional<z.ZodNumber>;
    totalSubStatements: z.ZodOptional<z.ZodNumber>;
    subScreens: z.ZodOptional<z.ZodArray<z.ZodEnum<[import("./screensAndNavModels").Screen.DOC, import("./screensAndNavModels").Screen.HOME, import("./screensAndNavModels").Screen.STATEMENT, import("./screensAndNavModels").Screen.CHAT, import("./screensAndNavModels").Screen.OPTIONS, import("./screensAndNavModels").Screen.VOTE, import("./screensAndNavModels").Screen.GROUPS, import("./screensAndNavModels").Screen.OPTIONS_CONSENSUS, import("./screensAndNavModels").Screen.OPTIONS_NEW, import("./screensAndNavModels").Screen.OPTIONS_RANDOM, import("./screensAndNavModels").Screen.OPTIONS_UPDATED, import("./screensAndNavModels").Screen.VOTES_CONSENSUS, import("./screensAndNavModels").Screen.VOTESֹֹֹ_VOTED, import("./screensAndNavModels").Screen.VOTES_NEW, import("./screensAndNavModels").Screen.VOTES_RANDOM, import("./screensAndNavModels").Screen.VOTES_UPDATED, import("./screensAndNavModels").Screen.ADMIN_CHOOSE, import("./screensAndNavModels").Screen.ADMIN_DIVIDE]>, "many">>;
    roomsState: z.ZodOptional<z.ZodEnum<[import("./roomsModel").RoomsStateSelection.SELECT_ROOMS, import("./roomsModel").RoomsStateSelection.DIVIDE]>>;
    maxConsensus: z.ZodOptional<z.ZodNumber>;
    maxConsesusStatement: z.ZodOptional<z.ZodObject<{
        statementId: z.ZodString;
        statement: z.ZodString;
        creatorId: z.ZodString;
        creator: z.ZodObject<{
            displayName: z.ZodString;
            email: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            photoURL: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            uid: z.ZodString;
            isAnonymous: z.ZodOptional<z.ZodBoolean>;
            fontSize: z.ZodNullable<z.ZodOptional<z.ZodNumber>>;
            defaultLanguage: z.ZodNullable<z.ZodOptional<z.ZodString>>;
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
            email?: string | null | undefined;
            photoURL?: string | null | undefined;
            isAnonymous?: boolean | undefined;
            fontSize?: number | null | undefined;
            defaultLanguage?: string | null | undefined;
            color?: string | undefined;
            agreement?: {
                text: string;
                date: number;
                version: string;
            } | null | undefined;
        }, {
            displayName: string;
            uid: string;
            email?: string | null | undefined;
            photoURL?: string | null | undefined;
            isAnonymous?: boolean | undefined;
            fontSize?: number | null | undefined;
            defaultLanguage?: string | null | undefined;
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
        creatorId: string;
        creator: {
            displayName: string;
            uid: string;
            email?: string | null | undefined;
            photoURL?: string | null | undefined;
            isAnonymous?: boolean | undefined;
            fontSize?: number | null | undefined;
            defaultLanguage?: string | null | undefined;
            color?: string | undefined;
            agreement?: {
                text: string;
                date: number;
                version: string;
            } | null | undefined;
        };
        consensus: number;
        voted?: number | undefined;
    }, {
        statement: string;
        statementId: string;
        parentId: string;
        creatorId: string;
        creator: {
            displayName: string;
            uid: string;
            email?: string | null | undefined;
            photoURL?: string | null | undefined;
            isAnonymous?: boolean | undefined;
            fontSize?: number | null | undefined;
            defaultLanguage?: string | null | undefined;
            color?: string | undefined;
            agreement?: {
                text: string;
                date: number;
                version: string;
            } | null | undefined;
        };
        consensus: number;
        voted?: number | undefined;
    }>>;
    statementType: z.ZodOptional<z.ZodEnum<[StatementType.statement, StatementType.option, StatementType.question, StatementType.result]>>;
    resultsSettings: z.ZodOptional<z.ZodObject<{
        resultsBy: z.ZodEnum<[import("./resultsModel").ResultsBy.topOne, import("./resultsModel").ResultsBy.consensusLevel, import("./resultsModel").ResultsBy.topVote, import("./resultsModel").ResultsBy.topOptions, import("./resultsModel").ResultsBy.checkedBy, import("./resultsModel").ResultsBy.privateCheck]>;
        numberOfResults: z.ZodOptional<z.ZodNumber>;
        deep: z.ZodOptional<z.ZodNumber>;
        minConsensus: z.ZodOptional<z.ZodNumber>;
    }, "strip", z.ZodTypeAny, {
        resultsBy: import("./resultsModel").ResultsBy;
        numberOfResults?: number | undefined;
        deep?: number | undefined;
        minConsensus?: number | undefined;
    }, {
        resultsBy: import("./resultsModel").ResultsBy;
        numberOfResults?: number | undefined;
        deep?: number | undefined;
        minConsensus?: number | undefined;
    }>>;
    results: z.ZodOptional<z.ZodArray<z.ZodObject<{
        statementId: z.ZodString;
        statement: z.ZodString;
        creatorId: z.ZodString;
        creator: z.ZodObject<{
            displayName: z.ZodString;
            email: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            photoURL: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            uid: z.ZodString;
            isAnonymous: z.ZodOptional<z.ZodBoolean>;
            fontSize: z.ZodNullable<z.ZodOptional<z.ZodNumber>>;
            defaultLanguage: z.ZodNullable<z.ZodOptional<z.ZodString>>;
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
            email?: string | null | undefined;
            photoURL?: string | null | undefined;
            isAnonymous?: boolean | undefined;
            fontSize?: number | null | undefined;
            defaultLanguage?: string | null | undefined;
            color?: string | undefined;
            agreement?: {
                text: string;
                date: number;
                version: string;
            } | null | undefined;
        }, {
            displayName: string;
            uid: string;
            email?: string | null | undefined;
            photoURL?: string | null | undefined;
            isAnonymous?: boolean | undefined;
            fontSize?: number | null | undefined;
            defaultLanguage?: string | null | undefined;
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
        creatorId: string;
        creator: {
            displayName: string;
            uid: string;
            email?: string | null | undefined;
            photoURL?: string | null | undefined;
            isAnonymous?: boolean | undefined;
            fontSize?: number | null | undefined;
            defaultLanguage?: string | null | undefined;
            color?: string | undefined;
            agreement?: {
                text: string;
                date: number;
                version: string;
            } | null | undefined;
        };
        consensus: number;
        voted?: number | undefined;
    }, {
        statement: string;
        statementId: string;
        parentId: string;
        creatorId: string;
        creator: {
            displayName: string;
            uid: string;
            email?: string | null | undefined;
            photoURL?: string | null | undefined;
            isAnonymous?: boolean | undefined;
            fontSize?: number | null | undefined;
            defaultLanguage?: string | null | undefined;
            color?: string | undefined;
            agreement?: {
                text: string;
                date: number;
                version: string;
            } | null | undefined;
        };
        consensus: number;
        voted?: number | undefined;
    }>, "many">>;
    roomSize: z.ZodOptional<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    statement: string;
    statementId: string;
    parentId: string;
    creatorId: string;
    creator: {
        displayName: string;
        uid: string;
        email?: string | null | undefined;
        photoURL?: string | null | undefined;
        isAnonymous?: boolean | undefined;
        fontSize?: number | null | undefined;
        defaultLanguage?: string | null | undefined;
        color?: string | undefined;
        agreement?: {
            text: string;
            date: number;
            version: string;
        } | null | undefined;
    };
    lastUpdate: number;
    createdAt: number;
    consensus: number;
    defaultLanguage?: string | undefined;
    parents?: string[] | undefined;
    topParentId?: string | undefined;
    hasChildren?: boolean | undefined;
    lastMessage?: string | undefined;
    lastChildUpdate?: number | undefined;
    type?: string | undefined;
    pro?: number | undefined;
    con?: number | undefined;
    order?: number | undefined;
    elementHight?: number | undefined;
    votes?: number | undefined;
    selections?: any;
    voted?: number | undefined;
    totalSubStatements?: number | undefined;
    subScreens?: (import("./screensAndNavModels").Screen.DOC | import("./screensAndNavModels").Screen.HOME | import("./screensAndNavModels").Screen.STATEMENT | import("./screensAndNavModels").Screen.CHAT | import("./screensAndNavModels").Screen.OPTIONS | import("./screensAndNavModels").Screen.VOTE | import("./screensAndNavModels").Screen.GROUPS | import("./screensAndNavModels").Screen.OPTIONS_CONSENSUS | import("./screensAndNavModels").Screen.OPTIONS_NEW | import("./screensAndNavModels").Screen.OPTIONS_RANDOM | import("./screensAndNavModels").Screen.OPTIONS_UPDATED | import("./screensAndNavModels").Screen.VOTES_CONSENSUS | import("./screensAndNavModels").Screen.VOTESֹֹֹ_VOTED | import("./screensAndNavModels").Screen.VOTES_NEW | import("./screensAndNavModels").Screen.VOTES_RANDOM | import("./screensAndNavModels").Screen.VOTES_UPDATED | import("./screensAndNavModels").Screen.ADMIN_CHOOSE | import("./screensAndNavModels").Screen.ADMIN_DIVIDE)[] | undefined;
    roomsState?: import("./roomsModel").RoomsStateSelection | undefined;
    maxConsensus?: number | undefined;
    maxConsesusStatement?: {
        statement: string;
        statementId: string;
        parentId: string;
        creatorId: string;
        creator: {
            displayName: string;
            uid: string;
            email?: string | null | undefined;
            photoURL?: string | null | undefined;
            isAnonymous?: boolean | undefined;
            fontSize?: number | null | undefined;
            defaultLanguage?: string | null | undefined;
            color?: string | undefined;
            agreement?: {
                text: string;
                date: number;
                version: string;
            } | null | undefined;
        };
        consensus: number;
        voted?: number | undefined;
    } | undefined;
    statementType?: StatementType | undefined;
    resultsSettings?: {
        resultsBy: import("./resultsModel").ResultsBy;
        numberOfResults?: number | undefined;
        deep?: number | undefined;
        minConsensus?: number | undefined;
    } | undefined;
    results?: {
        statement: string;
        statementId: string;
        parentId: string;
        creatorId: string;
        creator: {
            displayName: string;
            uid: string;
            email?: string | null | undefined;
            photoURL?: string | null | undefined;
            isAnonymous?: boolean | undefined;
            fontSize?: number | null | undefined;
            defaultLanguage?: string | null | undefined;
            color?: string | undefined;
            agreement?: {
                text: string;
                date: number;
                version: string;
            } | null | undefined;
        };
        consensus: number;
        voted?: number | undefined;
    }[] | undefined;
    roomSize?: number | undefined;
}, {
    statement: string;
    statementId: string;
    parentId: string;
    creatorId: string;
    creator: {
        displayName: string;
        uid: string;
        email?: string | null | undefined;
        photoURL?: string | null | undefined;
        isAnonymous?: boolean | undefined;
        fontSize?: number | null | undefined;
        defaultLanguage?: string | null | undefined;
        color?: string | undefined;
        agreement?: {
            text: string;
            date: number;
            version: string;
        } | null | undefined;
    };
    lastUpdate: number;
    createdAt: number;
    consensus: number;
    defaultLanguage?: string | undefined;
    parents?: string[] | undefined;
    topParentId?: string | undefined;
    hasChildren?: boolean | undefined;
    lastMessage?: string | undefined;
    lastChildUpdate?: number | undefined;
    type?: string | undefined;
    pro?: number | undefined;
    con?: number | undefined;
    order?: number | undefined;
    elementHight?: number | undefined;
    votes?: number | undefined;
    selections?: any;
    voted?: number | undefined;
    totalSubStatements?: number | undefined;
    subScreens?: (import("./screensAndNavModels").Screen.DOC | import("./screensAndNavModels").Screen.HOME | import("./screensAndNavModels").Screen.STATEMENT | import("./screensAndNavModels").Screen.CHAT | import("./screensAndNavModels").Screen.OPTIONS | import("./screensAndNavModels").Screen.VOTE | import("./screensAndNavModels").Screen.GROUPS | import("./screensAndNavModels").Screen.OPTIONS_CONSENSUS | import("./screensAndNavModels").Screen.OPTIONS_NEW | import("./screensAndNavModels").Screen.OPTIONS_RANDOM | import("./screensAndNavModels").Screen.OPTIONS_UPDATED | import("./screensAndNavModels").Screen.VOTES_CONSENSUS | import("./screensAndNavModels").Screen.VOTESֹֹֹ_VOTED | import("./screensAndNavModels").Screen.VOTES_NEW | import("./screensAndNavModels").Screen.VOTES_RANDOM | import("./screensAndNavModels").Screen.VOTES_UPDATED | import("./screensAndNavModels").Screen.ADMIN_CHOOSE | import("./screensAndNavModels").Screen.ADMIN_DIVIDE)[] | undefined;
    roomsState?: import("./roomsModel").RoomsStateSelection | undefined;
    maxConsensus?: number | undefined;
    maxConsesusStatement?: {
        statement: string;
        statementId: string;
        parentId: string;
        creatorId: string;
        creator: {
            displayName: string;
            uid: string;
            email?: string | null | undefined;
            photoURL?: string | null | undefined;
            isAnonymous?: boolean | undefined;
            fontSize?: number | null | undefined;
            defaultLanguage?: string | null | undefined;
            color?: string | undefined;
            agreement?: {
                text: string;
                date: number;
                version: string;
            } | null | undefined;
        };
        consensus: number;
        voted?: number | undefined;
    } | undefined;
    statementType?: StatementType | undefined;
    resultsSettings?: {
        resultsBy: import("./resultsModel").ResultsBy;
        numberOfResults?: number | undefined;
        deep?: number | undefined;
        minConsensus?: number | undefined;
    } | undefined;
    results?: {
        statement: string;
        statementId: string;
        parentId: string;
        creatorId: string;
        creator: {
            displayName: string;
            uid: string;
            email?: string | null | undefined;
            photoURL?: string | null | undefined;
            isAnonymous?: boolean | undefined;
            fontSize?: number | null | undefined;
            defaultLanguage?: string | null | undefined;
            color?: string | undefined;
            agreement?: {
                text: string;
                date: number;
                version: string;
            } | null | undefined;
        };
        consensus: number;
        voted?: number | undefined;
    }[] | undefined;
    roomSize?: number | undefined;
}>;
export type Statement = z.infer<typeof StatementSchema>;
export declare const StatementSubscriptionSchema: z.ZodObject<{
    role: z.ZodEnum<[import("./usersModels").Role.admin, import("./usersModels").Role.member, import("./usersModels").Role.parentAdmin, import("./usersModels").Role.systemAdmin, import("./usersModels").Role.statementCreator, import("./usersModels").Role.guest, import("./usersModels").Role.banned]>;
    userId: z.ZodString;
    statementId: z.ZodString;
    lastUpdate: z.ZodNumber;
    statementsSubscribeId: z.ZodString;
    statement: z.ZodObject<{
        statement: z.ZodString;
        statementId: z.ZodString;
        creatorId: z.ZodString;
        creator: z.ZodObject<{
            displayName: z.ZodString;
            email: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            photoURL: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            uid: z.ZodString;
            isAnonymous: z.ZodOptional<z.ZodBoolean>;
            fontSize: z.ZodNullable<z.ZodOptional<z.ZodNumber>>;
            defaultLanguage: z.ZodNullable<z.ZodOptional<z.ZodString>>;
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
            email?: string | null | undefined;
            photoURL?: string | null | undefined;
            isAnonymous?: boolean | undefined;
            fontSize?: number | null | undefined;
            defaultLanguage?: string | null | undefined;
            color?: string | undefined;
            agreement?: {
                text: string;
                date: number;
                version: string;
            } | null | undefined;
        }, {
            displayName: string;
            uid: string;
            email?: string | null | undefined;
            photoURL?: string | null | undefined;
            isAnonymous?: boolean | undefined;
            fontSize?: number | null | undefined;
            defaultLanguage?: string | null | undefined;
            color?: string | undefined;
            agreement?: {
                text: string;
                date: number;
                version: string;
            } | null | undefined;
        }>;
        defaultLanguage: z.ZodOptional<z.ZodString>;
        parentId: z.ZodString;
        parents: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        topParentId: z.ZodOptional<z.ZodString>;
        hasChildren: z.ZodOptional<z.ZodBoolean>;
        lastMessage: z.ZodOptional<z.ZodString>;
        lastUpdate: z.ZodNumber;
        lastChildUpdate: z.ZodOptional<z.ZodNumber>;
        createdAt: z.ZodNumber;
        type: z.ZodOptional<z.ZodString>;
        pro: z.ZodOptional<z.ZodNumber>;
        con: z.ZodOptional<z.ZodNumber>;
        consensus: z.ZodNumber;
        order: z.ZodOptional<z.ZodNumber>;
        elementHight: z.ZodOptional<z.ZodNumber>;
        votes: z.ZodOptional<z.ZodNumber>;
        selections: z.ZodOptional<z.ZodAny>;
        voted: z.ZodOptional<z.ZodNumber>;
        totalSubStatements: z.ZodOptional<z.ZodNumber>;
        subScreens: z.ZodOptional<z.ZodArray<z.ZodEnum<[import("./screensAndNavModels").Screen.DOC, import("./screensAndNavModels").Screen.HOME, import("./screensAndNavModels").Screen.STATEMENT, import("./screensAndNavModels").Screen.CHAT, import("./screensAndNavModels").Screen.OPTIONS, import("./screensAndNavModels").Screen.VOTE, import("./screensAndNavModels").Screen.GROUPS, import("./screensAndNavModels").Screen.OPTIONS_CONSENSUS, import("./screensAndNavModels").Screen.OPTIONS_NEW, import("./screensAndNavModels").Screen.OPTIONS_RANDOM, import("./screensAndNavModels").Screen.OPTIONS_UPDATED, import("./screensAndNavModels").Screen.VOTES_CONSENSUS, import("./screensAndNavModels").Screen.VOTESֹֹֹ_VOTED, import("./screensAndNavModels").Screen.VOTES_NEW, import("./screensAndNavModels").Screen.VOTES_RANDOM, import("./screensAndNavModels").Screen.VOTES_UPDATED, import("./screensAndNavModels").Screen.ADMIN_CHOOSE, import("./screensAndNavModels").Screen.ADMIN_DIVIDE]>, "many">>;
        roomsState: z.ZodOptional<z.ZodEnum<[import("./roomsModel").RoomsStateSelection.SELECT_ROOMS, import("./roomsModel").RoomsStateSelection.DIVIDE]>>;
        maxConsensus: z.ZodOptional<z.ZodNumber>;
        maxConsesusStatement: z.ZodOptional<z.ZodObject<{
            statementId: z.ZodString;
            statement: z.ZodString;
            creatorId: z.ZodString;
            creator: z.ZodObject<{
                displayName: z.ZodString;
                email: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                photoURL: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                uid: z.ZodString;
                isAnonymous: z.ZodOptional<z.ZodBoolean>;
                fontSize: z.ZodNullable<z.ZodOptional<z.ZodNumber>>;
                defaultLanguage: z.ZodNullable<z.ZodOptional<z.ZodString>>;
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
                email?: string | null | undefined;
                photoURL?: string | null | undefined;
                isAnonymous?: boolean | undefined;
                fontSize?: number | null | undefined;
                defaultLanguage?: string | null | undefined;
                color?: string | undefined;
                agreement?: {
                    text: string;
                    date: number;
                    version: string;
                } | null | undefined;
            }, {
                displayName: string;
                uid: string;
                email?: string | null | undefined;
                photoURL?: string | null | undefined;
                isAnonymous?: boolean | undefined;
                fontSize?: number | null | undefined;
                defaultLanguage?: string | null | undefined;
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
            creatorId: string;
            creator: {
                displayName: string;
                uid: string;
                email?: string | null | undefined;
                photoURL?: string | null | undefined;
                isAnonymous?: boolean | undefined;
                fontSize?: number | null | undefined;
                defaultLanguage?: string | null | undefined;
                color?: string | undefined;
                agreement?: {
                    text: string;
                    date: number;
                    version: string;
                } | null | undefined;
            };
            consensus: number;
            voted?: number | undefined;
        }, {
            statement: string;
            statementId: string;
            parentId: string;
            creatorId: string;
            creator: {
                displayName: string;
                uid: string;
                email?: string | null | undefined;
                photoURL?: string | null | undefined;
                isAnonymous?: boolean | undefined;
                fontSize?: number | null | undefined;
                defaultLanguage?: string | null | undefined;
                color?: string | undefined;
                agreement?: {
                    text: string;
                    date: number;
                    version: string;
                } | null | undefined;
            };
            consensus: number;
            voted?: number | undefined;
        }>>;
        statementType: z.ZodOptional<z.ZodEnum<[StatementType.statement, StatementType.option, StatementType.question, StatementType.result]>>;
        resultsSettings: z.ZodOptional<z.ZodObject<{
            resultsBy: z.ZodEnum<[import("./resultsModel").ResultsBy.topOne, import("./resultsModel").ResultsBy.consensusLevel, import("./resultsModel").ResultsBy.topVote, import("./resultsModel").ResultsBy.topOptions, import("./resultsModel").ResultsBy.checkedBy, import("./resultsModel").ResultsBy.privateCheck]>;
            numberOfResults: z.ZodOptional<z.ZodNumber>;
            deep: z.ZodOptional<z.ZodNumber>;
            minConsensus: z.ZodOptional<z.ZodNumber>;
        }, "strip", z.ZodTypeAny, {
            resultsBy: import("./resultsModel").ResultsBy;
            numberOfResults?: number | undefined;
            deep?: number | undefined;
            minConsensus?: number | undefined;
        }, {
            resultsBy: import("./resultsModel").ResultsBy;
            numberOfResults?: number | undefined;
            deep?: number | undefined;
            minConsensus?: number | undefined;
        }>>;
        results: z.ZodOptional<z.ZodArray<z.ZodObject<{
            statementId: z.ZodString;
            statement: z.ZodString;
            creatorId: z.ZodString;
            creator: z.ZodObject<{
                displayName: z.ZodString;
                email: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                photoURL: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                uid: z.ZodString;
                isAnonymous: z.ZodOptional<z.ZodBoolean>;
                fontSize: z.ZodNullable<z.ZodOptional<z.ZodNumber>>;
                defaultLanguage: z.ZodNullable<z.ZodOptional<z.ZodString>>;
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
                email?: string | null | undefined;
                photoURL?: string | null | undefined;
                isAnonymous?: boolean | undefined;
                fontSize?: number | null | undefined;
                defaultLanguage?: string | null | undefined;
                color?: string | undefined;
                agreement?: {
                    text: string;
                    date: number;
                    version: string;
                } | null | undefined;
            }, {
                displayName: string;
                uid: string;
                email?: string | null | undefined;
                photoURL?: string | null | undefined;
                isAnonymous?: boolean | undefined;
                fontSize?: number | null | undefined;
                defaultLanguage?: string | null | undefined;
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
            creatorId: string;
            creator: {
                displayName: string;
                uid: string;
                email?: string | null | undefined;
                photoURL?: string | null | undefined;
                isAnonymous?: boolean | undefined;
                fontSize?: number | null | undefined;
                defaultLanguage?: string | null | undefined;
                color?: string | undefined;
                agreement?: {
                    text: string;
                    date: number;
                    version: string;
                } | null | undefined;
            };
            consensus: number;
            voted?: number | undefined;
        }, {
            statement: string;
            statementId: string;
            parentId: string;
            creatorId: string;
            creator: {
                displayName: string;
                uid: string;
                email?: string | null | undefined;
                photoURL?: string | null | undefined;
                isAnonymous?: boolean | undefined;
                fontSize?: number | null | undefined;
                defaultLanguage?: string | null | undefined;
                color?: string | undefined;
                agreement?: {
                    text: string;
                    date: number;
                    version: string;
                } | null | undefined;
            };
            consensus: number;
            voted?: number | undefined;
        }>, "many">>;
        roomSize: z.ZodOptional<z.ZodNumber>;
    }, "strip", z.ZodTypeAny, {
        statement: string;
        statementId: string;
        parentId: string;
        creatorId: string;
        creator: {
            displayName: string;
            uid: string;
            email?: string | null | undefined;
            photoURL?: string | null | undefined;
            isAnonymous?: boolean | undefined;
            fontSize?: number | null | undefined;
            defaultLanguage?: string | null | undefined;
            color?: string | undefined;
            agreement?: {
                text: string;
                date: number;
                version: string;
            } | null | undefined;
        };
        lastUpdate: number;
        createdAt: number;
        consensus: number;
        defaultLanguage?: string | undefined;
        parents?: string[] | undefined;
        topParentId?: string | undefined;
        hasChildren?: boolean | undefined;
        lastMessage?: string | undefined;
        lastChildUpdate?: number | undefined;
        type?: string | undefined;
        pro?: number | undefined;
        con?: number | undefined;
        order?: number | undefined;
        elementHight?: number | undefined;
        votes?: number | undefined;
        selections?: any;
        voted?: number | undefined;
        totalSubStatements?: number | undefined;
        subScreens?: (import("./screensAndNavModels").Screen.DOC | import("./screensAndNavModels").Screen.HOME | import("./screensAndNavModels").Screen.STATEMENT | import("./screensAndNavModels").Screen.CHAT | import("./screensAndNavModels").Screen.OPTIONS | import("./screensAndNavModels").Screen.VOTE | import("./screensAndNavModels").Screen.GROUPS | import("./screensAndNavModels").Screen.OPTIONS_CONSENSUS | import("./screensAndNavModels").Screen.OPTIONS_NEW | import("./screensAndNavModels").Screen.OPTIONS_RANDOM | import("./screensAndNavModels").Screen.OPTIONS_UPDATED | import("./screensAndNavModels").Screen.VOTES_CONSENSUS | import("./screensAndNavModels").Screen.VOTESֹֹֹ_VOTED | import("./screensAndNavModels").Screen.VOTES_NEW | import("./screensAndNavModels").Screen.VOTES_RANDOM | import("./screensAndNavModels").Screen.VOTES_UPDATED | import("./screensAndNavModels").Screen.ADMIN_CHOOSE | import("./screensAndNavModels").Screen.ADMIN_DIVIDE)[] | undefined;
        roomsState?: import("./roomsModel").RoomsStateSelection | undefined;
        maxConsensus?: number | undefined;
        maxConsesusStatement?: {
            statement: string;
            statementId: string;
            parentId: string;
            creatorId: string;
            creator: {
                displayName: string;
                uid: string;
                email?: string | null | undefined;
                photoURL?: string | null | undefined;
                isAnonymous?: boolean | undefined;
                fontSize?: number | null | undefined;
                defaultLanguage?: string | null | undefined;
                color?: string | undefined;
                agreement?: {
                    text: string;
                    date: number;
                    version: string;
                } | null | undefined;
            };
            consensus: number;
            voted?: number | undefined;
        } | undefined;
        statementType?: StatementType | undefined;
        resultsSettings?: {
            resultsBy: import("./resultsModel").ResultsBy;
            numberOfResults?: number | undefined;
            deep?: number | undefined;
            minConsensus?: number | undefined;
        } | undefined;
        results?: {
            statement: string;
            statementId: string;
            parentId: string;
            creatorId: string;
            creator: {
                displayName: string;
                uid: string;
                email?: string | null | undefined;
                photoURL?: string | null | undefined;
                isAnonymous?: boolean | undefined;
                fontSize?: number | null | undefined;
                defaultLanguage?: string | null | undefined;
                color?: string | undefined;
                agreement?: {
                    text: string;
                    date: number;
                    version: string;
                } | null | undefined;
            };
            consensus: number;
            voted?: number | undefined;
        }[] | undefined;
        roomSize?: number | undefined;
    }, {
        statement: string;
        statementId: string;
        parentId: string;
        creatorId: string;
        creator: {
            displayName: string;
            uid: string;
            email?: string | null | undefined;
            photoURL?: string | null | undefined;
            isAnonymous?: boolean | undefined;
            fontSize?: number | null | undefined;
            defaultLanguage?: string | null | undefined;
            color?: string | undefined;
            agreement?: {
                text: string;
                date: number;
                version: string;
            } | null | undefined;
        };
        lastUpdate: number;
        createdAt: number;
        consensus: number;
        defaultLanguage?: string | undefined;
        parents?: string[] | undefined;
        topParentId?: string | undefined;
        hasChildren?: boolean | undefined;
        lastMessage?: string | undefined;
        lastChildUpdate?: number | undefined;
        type?: string | undefined;
        pro?: number | undefined;
        con?: number | undefined;
        order?: number | undefined;
        elementHight?: number | undefined;
        votes?: number | undefined;
        selections?: any;
        voted?: number | undefined;
        totalSubStatements?: number | undefined;
        subScreens?: (import("./screensAndNavModels").Screen.DOC | import("./screensAndNavModels").Screen.HOME | import("./screensAndNavModels").Screen.STATEMENT | import("./screensAndNavModels").Screen.CHAT | import("./screensAndNavModels").Screen.OPTIONS | import("./screensAndNavModels").Screen.VOTE | import("./screensAndNavModels").Screen.GROUPS | import("./screensAndNavModels").Screen.OPTIONS_CONSENSUS | import("./screensAndNavModels").Screen.OPTIONS_NEW | import("./screensAndNavModels").Screen.OPTIONS_RANDOM | import("./screensAndNavModels").Screen.OPTIONS_UPDATED | import("./screensAndNavModels").Screen.VOTES_CONSENSUS | import("./screensAndNavModels").Screen.VOTESֹֹֹ_VOTED | import("./screensAndNavModels").Screen.VOTES_NEW | import("./screensAndNavModels").Screen.VOTES_RANDOM | import("./screensAndNavModels").Screen.VOTES_UPDATED | import("./screensAndNavModels").Screen.ADMIN_CHOOSE | import("./screensAndNavModels").Screen.ADMIN_DIVIDE)[] | undefined;
        roomsState?: import("./roomsModel").RoomsStateSelection | undefined;
        maxConsensus?: number | undefined;
        maxConsesusStatement?: {
            statement: string;
            statementId: string;
            parentId: string;
            creatorId: string;
            creator: {
                displayName: string;
                uid: string;
                email?: string | null | undefined;
                photoURL?: string | null | undefined;
                isAnonymous?: boolean | undefined;
                fontSize?: number | null | undefined;
                defaultLanguage?: string | null | undefined;
                color?: string | undefined;
                agreement?: {
                    text: string;
                    date: number;
                    version: string;
                } | null | undefined;
            };
            consensus: number;
            voted?: number | undefined;
        } | undefined;
        statementType?: StatementType | undefined;
        resultsSettings?: {
            resultsBy: import("./resultsModel").ResultsBy;
            numberOfResults?: number | undefined;
            deep?: number | undefined;
            minConsensus?: number | undefined;
        } | undefined;
        results?: {
            statement: string;
            statementId: string;
            parentId: string;
            creatorId: string;
            creator: {
                displayName: string;
                uid: string;
                email?: string | null | undefined;
                photoURL?: string | null | undefined;
                isAnonymous?: boolean | undefined;
                fontSize?: number | null | undefined;
                defaultLanguage?: string | null | undefined;
                color?: string | undefined;
                agreement?: {
                    text: string;
                    date: number;
                    version: string;
                } | null | undefined;
            };
            consensus: number;
            voted?: number | undefined;
        }[] | undefined;
        roomSize?: number | undefined;
    }>;
    notification: z.ZodOptional<z.ZodBoolean>;
    token: z.ZodOptional<z.ZodString>;
    totalSubStatementsRead: z.ZodOptional<z.ZodNumber>;
    user: z.ZodObject<{
        displayName: z.ZodString;
        email: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        photoURL: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        uid: z.ZodString;
        isAnonymous: z.ZodOptional<z.ZodBoolean>;
        fontSize: z.ZodNullable<z.ZodOptional<z.ZodNumber>>;
        defaultLanguage: z.ZodNullable<z.ZodOptional<z.ZodString>>;
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
        email?: string | null | undefined;
        photoURL?: string | null | undefined;
        isAnonymous?: boolean | undefined;
        fontSize?: number | null | undefined;
        defaultLanguage?: string | null | undefined;
        color?: string | undefined;
        agreement?: {
            text: string;
            date: number;
            version: string;
        } | null | undefined;
    }, {
        displayName: string;
        uid: string;
        email?: string | null | undefined;
        photoURL?: string | null | undefined;
        isAnonymous?: boolean | undefined;
        fontSize?: number | null | undefined;
        defaultLanguage?: string | null | undefined;
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
        email?: string | null | undefined;
        photoURL?: string | null | undefined;
        isAnonymous?: boolean | undefined;
        fontSize?: number | null | undefined;
        defaultLanguage?: string | null | undefined;
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
        creatorId: string;
        creator: {
            displayName: string;
            uid: string;
            email?: string | null | undefined;
            photoURL?: string | null | undefined;
            isAnonymous?: boolean | undefined;
            fontSize?: number | null | undefined;
            defaultLanguage?: string | null | undefined;
            color?: string | undefined;
            agreement?: {
                text: string;
                date: number;
                version: string;
            } | null | undefined;
        };
        lastUpdate: number;
        createdAt: number;
        consensus: number;
        defaultLanguage?: string | undefined;
        parents?: string[] | undefined;
        topParentId?: string | undefined;
        hasChildren?: boolean | undefined;
        lastMessage?: string | undefined;
        lastChildUpdate?: number | undefined;
        type?: string | undefined;
        pro?: number | undefined;
        con?: number | undefined;
        order?: number | undefined;
        elementHight?: number | undefined;
        votes?: number | undefined;
        selections?: any;
        voted?: number | undefined;
        totalSubStatements?: number | undefined;
        subScreens?: (import("./screensAndNavModels").Screen.DOC | import("./screensAndNavModels").Screen.HOME | import("./screensAndNavModels").Screen.STATEMENT | import("./screensAndNavModels").Screen.CHAT | import("./screensAndNavModels").Screen.OPTIONS | import("./screensAndNavModels").Screen.VOTE | import("./screensAndNavModels").Screen.GROUPS | import("./screensAndNavModels").Screen.OPTIONS_CONSENSUS | import("./screensAndNavModels").Screen.OPTIONS_NEW | import("./screensAndNavModels").Screen.OPTIONS_RANDOM | import("./screensAndNavModels").Screen.OPTIONS_UPDATED | import("./screensAndNavModels").Screen.VOTES_CONSENSUS | import("./screensAndNavModels").Screen.VOTESֹֹֹ_VOTED | import("./screensAndNavModels").Screen.VOTES_NEW | import("./screensAndNavModels").Screen.VOTES_RANDOM | import("./screensAndNavModels").Screen.VOTES_UPDATED | import("./screensAndNavModels").Screen.ADMIN_CHOOSE | import("./screensAndNavModels").Screen.ADMIN_DIVIDE)[] | undefined;
        roomsState?: import("./roomsModel").RoomsStateSelection | undefined;
        maxConsensus?: number | undefined;
        maxConsesusStatement?: {
            statement: string;
            statementId: string;
            parentId: string;
            creatorId: string;
            creator: {
                displayName: string;
                uid: string;
                email?: string | null | undefined;
                photoURL?: string | null | undefined;
                isAnonymous?: boolean | undefined;
                fontSize?: number | null | undefined;
                defaultLanguage?: string | null | undefined;
                color?: string | undefined;
                agreement?: {
                    text: string;
                    date: number;
                    version: string;
                } | null | undefined;
            };
            consensus: number;
            voted?: number | undefined;
        } | undefined;
        statementType?: StatementType | undefined;
        resultsSettings?: {
            resultsBy: import("./resultsModel").ResultsBy;
            numberOfResults?: number | undefined;
            deep?: number | undefined;
            minConsensus?: number | undefined;
        } | undefined;
        results?: {
            statement: string;
            statementId: string;
            parentId: string;
            creatorId: string;
            creator: {
                displayName: string;
                uid: string;
                email?: string | null | undefined;
                photoURL?: string | null | undefined;
                isAnonymous?: boolean | undefined;
                fontSize?: number | null | undefined;
                defaultLanguage?: string | null | undefined;
                color?: string | undefined;
                agreement?: {
                    text: string;
                    date: number;
                    version: string;
                } | null | undefined;
            };
            consensus: number;
            voted?: number | undefined;
        }[] | undefined;
        roomSize?: number | undefined;
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
        email?: string | null | undefined;
        photoURL?: string | null | undefined;
        isAnonymous?: boolean | undefined;
        fontSize?: number | null | undefined;
        defaultLanguage?: string | null | undefined;
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
        creatorId: string;
        creator: {
            displayName: string;
            uid: string;
            email?: string | null | undefined;
            photoURL?: string | null | undefined;
            isAnonymous?: boolean | undefined;
            fontSize?: number | null | undefined;
            defaultLanguage?: string | null | undefined;
            color?: string | undefined;
            agreement?: {
                text: string;
                date: number;
                version: string;
            } | null | undefined;
        };
        lastUpdate: number;
        createdAt: number;
        consensus: number;
        defaultLanguage?: string | undefined;
        parents?: string[] | undefined;
        topParentId?: string | undefined;
        hasChildren?: boolean | undefined;
        lastMessage?: string | undefined;
        lastChildUpdate?: number | undefined;
        type?: string | undefined;
        pro?: number | undefined;
        con?: number | undefined;
        order?: number | undefined;
        elementHight?: number | undefined;
        votes?: number | undefined;
        selections?: any;
        voted?: number | undefined;
        totalSubStatements?: number | undefined;
        subScreens?: (import("./screensAndNavModels").Screen.DOC | import("./screensAndNavModels").Screen.HOME | import("./screensAndNavModels").Screen.STATEMENT | import("./screensAndNavModels").Screen.CHAT | import("./screensAndNavModels").Screen.OPTIONS | import("./screensAndNavModels").Screen.VOTE | import("./screensAndNavModels").Screen.GROUPS | import("./screensAndNavModels").Screen.OPTIONS_CONSENSUS | import("./screensAndNavModels").Screen.OPTIONS_NEW | import("./screensAndNavModels").Screen.OPTIONS_RANDOM | import("./screensAndNavModels").Screen.OPTIONS_UPDATED | import("./screensAndNavModels").Screen.VOTES_CONSENSUS | import("./screensAndNavModels").Screen.VOTESֹֹֹ_VOTED | import("./screensAndNavModels").Screen.VOTES_NEW | import("./screensAndNavModels").Screen.VOTES_RANDOM | import("./screensAndNavModels").Screen.VOTES_UPDATED | import("./screensAndNavModels").Screen.ADMIN_CHOOSE | import("./screensAndNavModels").Screen.ADMIN_DIVIDE)[] | undefined;
        roomsState?: import("./roomsModel").RoomsStateSelection | undefined;
        maxConsensus?: number | undefined;
        maxConsesusStatement?: {
            statement: string;
            statementId: string;
            parentId: string;
            creatorId: string;
            creator: {
                displayName: string;
                uid: string;
                email?: string | null | undefined;
                photoURL?: string | null | undefined;
                isAnonymous?: boolean | undefined;
                fontSize?: number | null | undefined;
                defaultLanguage?: string | null | undefined;
                color?: string | undefined;
                agreement?: {
                    text: string;
                    date: number;
                    version: string;
                } | null | undefined;
            };
            consensus: number;
            voted?: number | undefined;
        } | undefined;
        statementType?: StatementType | undefined;
        resultsSettings?: {
            resultsBy: import("./resultsModel").ResultsBy;
            numberOfResults?: number | undefined;
            deep?: number | undefined;
            minConsensus?: number | undefined;
        } | undefined;
        results?: {
            statement: string;
            statementId: string;
            parentId: string;
            creatorId: string;
            creator: {
                displayName: string;
                uid: string;
                email?: string | null | undefined;
                photoURL?: string | null | undefined;
                isAnonymous?: boolean | undefined;
                fontSize?: number | null | undefined;
                defaultLanguage?: string | null | undefined;
                color?: string | undefined;
                agreement?: {
                    text: string;
                    date: number;
                    version: string;
                } | null | undefined;
            };
            consensus: number;
            voted?: number | undefined;
        }[] | undefined;
        roomSize?: number | undefined;
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
