import { z } from 'zod';
import { Statement } from './statementsModels';
export declare const RoomSchema: z.ZodObject<{
    statementId: z.ZodString;
    parentId: z.ZodString;
    participants: z.ZodArray<z.ZodObject<{
        displayName: z.ZodString;
        email: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        photoURL: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        uid: z.ZodString;
        isAnonymous: z.ZodOptional<z.ZodBoolean>;
        fontSize: z.ZodNullable<z.ZodOptional<z.ZodNumber>>;
        defaultLanguage: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        color: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        displayName: string;
        uid: string;
        email?: string | null | undefined;
        photoURL?: string | null | undefined;
        isAnonymous?: boolean | undefined;
        fontSize?: number | null | undefined;
        defaultLanguage?: string | null | undefined;
        color?: string | undefined;
    }, {
        displayName: string;
        uid: string;
        email?: string | null | undefined;
        photoURL?: string | null | undefined;
        isAnonymous?: boolean | undefined;
        fontSize?: number | null | undefined;
        defaultLanguage?: string | null | undefined;
        color?: string | undefined;
    }>, "many">;
}, "strip", z.ZodTypeAny, {
    statementId: string;
    parentId: string;
    participants: {
        displayName: string;
        uid: string;
        email?: string | null | undefined;
        photoURL?: string | null | undefined;
        isAnonymous?: boolean | undefined;
        fontSize?: number | null | undefined;
        defaultLanguage?: string | null | undefined;
        color?: string | undefined;
    }[];
}, {
    statementId: string;
    parentId: string;
    participants: {
        displayName: string;
        uid: string;
        email?: string | null | undefined;
        photoURL?: string | null | undefined;
        isAnonymous?: boolean | undefined;
        fontSize?: number | null | undefined;
        defaultLanguage?: string | null | undefined;
        color?: string | undefined;
    }[];
}>;
export type Room = z.infer<typeof RoomSchema>;
export declare const RoomAskToJoinSchema: z.ZodObject<{
    participant: z.ZodObject<{
        displayName: z.ZodString;
        email: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        photoURL: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        uid: z.ZodString;
        isAnonymous: z.ZodOptional<z.ZodBoolean>;
        fontSize: z.ZodNullable<z.ZodOptional<z.ZodNumber>>;
        defaultLanguage: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        color: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        displayName: string;
        uid: string;
        email?: string | null | undefined;
        photoURL?: string | null | undefined;
        isAnonymous?: boolean | undefined;
        fontSize?: number | null | undefined;
        defaultLanguage?: string | null | undefined;
        color?: string | undefined;
    }, {
        displayName: string;
        uid: string;
        email?: string | null | undefined;
        photoURL?: string | null | undefined;
        isAnonymous?: boolean | undefined;
        fontSize?: number | null | undefined;
        defaultLanguage?: string | null | undefined;
        color?: string | undefined;
    }>;
    statement: z.ZodUnion<[z.ZodObject<{
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
        }, "strip", z.ZodTypeAny, {
            displayName: string;
            uid: string;
            email?: string | null | undefined;
            photoURL?: string | null | undefined;
            isAnonymous?: boolean | undefined;
            fontSize?: number | null | undefined;
            defaultLanguage?: string | null | undefined;
            color?: string | undefined;
        }, {
            displayName: string;
            uid: string;
            email?: string | null | undefined;
            photoURL?: string | null | undefined;
            isAnonymous?: boolean | undefined;
            fontSize?: number | null | undefined;
            defaultLanguage?: string | null | undefined;
            color?: string | undefined;
        }>;
        parentId: z.ZodString;
        parents: z.ZodArray<z.ZodString, "many">;
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
        roomsState: z.ZodOptional<z.ZodEnum<[RoomsStateSelection.SELECT_ROOMS, RoomsStateSelection.DIVIDE]>>;
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
            }, "strip", z.ZodTypeAny, {
                displayName: string;
                uid: string;
                email?: string | null | undefined;
                photoURL?: string | null | undefined;
                isAnonymous?: boolean | undefined;
                fontSize?: number | null | undefined;
                defaultLanguage?: string | null | undefined;
                color?: string | undefined;
            }, {
                displayName: string;
                uid: string;
                email?: string | null | undefined;
                photoURL?: string | null | undefined;
                isAnonymous?: boolean | undefined;
                fontSize?: number | null | undefined;
                defaultLanguage?: string | null | undefined;
                color?: string | undefined;
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
            };
            consensus: number;
            voted?: number | undefined;
        }>>;
        statementType: z.ZodOptional<z.ZodEnum<[import("./statementsModels").StatementType.statement, import("./statementsModels").StatementType.option, import("./statementsModels").StatementType.question, import("./statementsModels").StatementType.result]>>;
        resultsSettings: z.ZodOptional<z.ZodObject<{
            resultsBy: z.ZodEnum<[import("./resultsModel").ResultsBy.topOne, import("./resultsModel").ResultsBy.consensusLevel, import("./resultsModel").ResultsBy.topVote, import("./resultsModel").ResultsBy.topOptions, import("./resultsModel").ResultsBy.checkedBy, import("./resultsModel").ResultsBy.privateCheck]>;
            numberOfResults: z.ZodOptional<z.ZodNumber>;
            deep: z.ZodOptional<z.ZodNumber>;
            minConsensus: z.ZodOptional<z.ZodNumber>;
            solutions: z.ZodOptional<z.ZodArray<z.ZodObject<{
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
                }, "strip", z.ZodTypeAny, {
                    displayName: string;
                    uid: string;
                    email?: string | null | undefined;
                    photoURL?: string | null | undefined;
                    isAnonymous?: boolean | undefined;
                    fontSize?: number | null | undefined;
                    defaultLanguage?: string | null | undefined;
                    color?: string | undefined;
                }, {
                    displayName: string;
                    uid: string;
                    email?: string | null | undefined;
                    photoURL?: string | null | undefined;
                    isAnonymous?: boolean | undefined;
                    fontSize?: number | null | undefined;
                    defaultLanguage?: string | null | undefined;
                    color?: string | undefined;
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
                };
                consensus: number;
                voted?: number | undefined;
            }>, "many">>;
        }, "strip", z.ZodTypeAny, {
            resultsBy: import("./resultsModel").ResultsBy;
            numberOfResults?: number | undefined;
            deep?: number | undefined;
            minConsensus?: number | undefined;
            solutions?: {
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
                };
                consensus: number;
                voted?: number | undefined;
            }[] | undefined;
        }, {
            resultsBy: import("./resultsModel").ResultsBy;
            numberOfResults?: number | undefined;
            deep?: number | undefined;
            minConsensus?: number | undefined;
            solutions?: {
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
                };
                consensus: number;
                voted?: number | undefined;
            }[] | undefined;
        }>>;
        results: z.ZodOptional<z.ZodObject<{
            votes: z.ZodArray<z.ZodObject<{
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
                }, "strip", z.ZodTypeAny, {
                    displayName: string;
                    uid: string;
                    email?: string | null | undefined;
                    photoURL?: string | null | undefined;
                    isAnonymous?: boolean | undefined;
                    fontSize?: number | null | undefined;
                    defaultLanguage?: string | null | undefined;
                    color?: string | undefined;
                }, {
                    displayName: string;
                    uid: string;
                    email?: string | null | undefined;
                    photoURL?: string | null | undefined;
                    isAnonymous?: boolean | undefined;
                    fontSize?: number | null | undefined;
                    defaultLanguage?: string | null | undefined;
                    color?: string | undefined;
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
                };
                consensus: number;
                voted?: number | undefined;
            }>, "many">;
            consensus: z.ZodArray<z.ZodObject<{
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
                }, "strip", z.ZodTypeAny, {
                    displayName: string;
                    uid: string;
                    email?: string | null | undefined;
                    photoURL?: string | null | undefined;
                    isAnonymous?: boolean | undefined;
                    fontSize?: number | null | undefined;
                    defaultLanguage?: string | null | undefined;
                    color?: string | undefined;
                }, {
                    displayName: string;
                    uid: string;
                    email?: string | null | undefined;
                    photoURL?: string | null | undefined;
                    isAnonymous?: boolean | undefined;
                    fontSize?: number | null | undefined;
                    defaultLanguage?: string | null | undefined;
                    color?: string | undefined;
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
                };
                consensus: number;
                voted?: number | undefined;
            }>, "many">;
        }, "strip", z.ZodTypeAny, {
            consensus: {
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
                };
                consensus: number;
                voted?: number | undefined;
            }[];
            votes: {
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
                };
                consensus: number;
                voted?: number | undefined;
            }[];
        }, {
            consensus: {
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
                };
                consensus: number;
                voted?: number | undefined;
            }[];
            votes: {
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
                };
                consensus: number;
                voted?: number | undefined;
            }[];
        }>>;
        canHaveChildren: z.ZodOptional<z.ZodBoolean>;
        roomSize: z.ZodOptional<z.ZodNumber>;
        defaultLanguage: z.ZodOptional<z.ZodString>;
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
        };
        parents: string[];
        lastUpdate: number;
        createdAt: number;
        consensus: number;
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
        roomsState?: RoomsStateSelection | undefined;
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
            };
            consensus: number;
            voted?: number | undefined;
        } | undefined;
        statementType?: import("./statementsModels").StatementType | undefined;
        resultsSettings?: {
            resultsBy: import("./resultsModel").ResultsBy;
            numberOfResults?: number | undefined;
            deep?: number | undefined;
            minConsensus?: number | undefined;
            solutions?: {
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
                };
                consensus: number;
                voted?: number | undefined;
            }[] | undefined;
        } | undefined;
        results?: {
            consensus: {
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
                };
                consensus: number;
                voted?: number | undefined;
            }[];
            votes: {
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
                };
                consensus: number;
                voted?: number | undefined;
            }[];
        } | undefined;
        canHaveChildren?: boolean | undefined;
        roomSize?: number | undefined;
        defaultLanguage?: string | undefined;
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
        };
        parents: string[];
        lastUpdate: number;
        createdAt: number;
        consensus: number;
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
        roomsState?: RoomsStateSelection | undefined;
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
            };
            consensus: number;
            voted?: number | undefined;
        } | undefined;
        statementType?: import("./statementsModels").StatementType | undefined;
        resultsSettings?: {
            resultsBy: import("./resultsModel").ResultsBy;
            numberOfResults?: number | undefined;
            deep?: number | undefined;
            minConsensus?: number | undefined;
            solutions?: {
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
                };
                consensus: number;
                voted?: number | undefined;
            }[] | undefined;
        } | undefined;
        results?: {
            consensus: {
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
                };
                consensus: number;
                voted?: number | undefined;
            }[];
            votes: {
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
                };
                consensus: number;
                voted?: number | undefined;
            }[];
        } | undefined;
        canHaveChildren?: boolean | undefined;
        roomSize?: number | undefined;
        defaultLanguage?: string | undefined;
    }>, z.ZodUndefined]>;
    requestId: z.ZodString;
    statementId: z.ZodOptional<z.ZodString>;
    parentId: z.ZodString;
    roomNumber: z.ZodOptional<z.ZodNumber>;
    approved: z.ZodOptional<z.ZodBoolean>;
    lastUpdate: z.ZodOptional<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    parentId: string;
    participant: {
        displayName: string;
        uid: string;
        email?: string | null | undefined;
        photoURL?: string | null | undefined;
        isAnonymous?: boolean | undefined;
        fontSize?: number | null | undefined;
        defaultLanguage?: string | null | undefined;
        color?: string | undefined;
    };
    requestId: string;
    statement?: {
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
        };
        parents: string[];
        lastUpdate: number;
        createdAt: number;
        consensus: number;
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
        roomsState?: RoomsStateSelection | undefined;
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
            };
            consensus: number;
            voted?: number | undefined;
        } | undefined;
        statementType?: import("./statementsModels").StatementType | undefined;
        resultsSettings?: {
            resultsBy: import("./resultsModel").ResultsBy;
            numberOfResults?: number | undefined;
            deep?: number | undefined;
            minConsensus?: number | undefined;
            solutions?: {
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
                };
                consensus: number;
                voted?: number | undefined;
            }[] | undefined;
        } | undefined;
        results?: {
            consensus: {
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
                };
                consensus: number;
                voted?: number | undefined;
            }[];
            votes: {
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
                };
                consensus: number;
                voted?: number | undefined;
            }[];
        } | undefined;
        canHaveChildren?: boolean | undefined;
        roomSize?: number | undefined;
        defaultLanguage?: string | undefined;
    } | undefined;
    statementId?: string | undefined;
    roomNumber?: number | undefined;
    approved?: boolean | undefined;
    lastUpdate?: number | undefined;
}, {
    parentId: string;
    participant: {
        displayName: string;
        uid: string;
        email?: string | null | undefined;
        photoURL?: string | null | undefined;
        isAnonymous?: boolean | undefined;
        fontSize?: number | null | undefined;
        defaultLanguage?: string | null | undefined;
        color?: string | undefined;
    };
    requestId: string;
    statement?: {
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
        };
        parents: string[];
        lastUpdate: number;
        createdAt: number;
        consensus: number;
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
        roomsState?: RoomsStateSelection | undefined;
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
            };
            consensus: number;
            voted?: number | undefined;
        } | undefined;
        statementType?: import("./statementsModels").StatementType | undefined;
        resultsSettings?: {
            resultsBy: import("./resultsModel").ResultsBy;
            numberOfResults?: number | undefined;
            deep?: number | undefined;
            minConsensus?: number | undefined;
            solutions?: {
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
                };
                consensus: number;
                voted?: number | undefined;
            }[] | undefined;
        } | undefined;
        results?: {
            consensus: {
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
                };
                consensus: number;
                voted?: number | undefined;
            }[];
            votes: {
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
                };
                consensus: number;
                voted?: number | undefined;
            }[];
        } | undefined;
        canHaveChildren?: boolean | undefined;
        roomSize?: number | undefined;
        defaultLanguage?: string | undefined;
    } | undefined;
    statementId?: string | undefined;
    roomNumber?: number | undefined;
    approved?: boolean | undefined;
    lastUpdate?: number | undefined;
}>;
export type RoomAskToJoin = z.infer<typeof RoomAskToJoinSchema>;
export declare const LobbyRoomsSchema: z.ZodObject<{
    joinersCount: z.ZodNumber;
    parentId: z.ZodString;
    statementId: z.ZodString;
}, "strip", z.ZodTypeAny, {
    statementId: string;
    parentId: string;
    joinersCount: number;
}, {
    statementId: string;
    parentId: string;
    joinersCount: number;
}>;
export type LobbyRooms = z.infer<typeof LobbyRoomsSchema>;
export declare enum RoomsStateSelection {
    SELECT_ROOMS = "SELECT_ROOMS",
    DIVIDE = "DIVIDE"
}
export declare const RoomsStateSelectionEnum: z.ZodEnum<[RoomsStateSelection.SELECT_ROOMS, RoomsStateSelection.DIVIDE]>;
export interface RoomDivied {
    roomNumber: number;
    statement: Statement;
    room: Array<RoomAskToJoin>;
}
