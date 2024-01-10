import { z } from 'zod';
import { Statement } from './statementsModels';
export declare const RoomSchema: z.ZodObject<{
    statementId: z.ZodString;
    parentId: z.ZodString;
    participants: z.ZodArray<z.ZodObject<{
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
    }>, "many">;
}, "strip", z.ZodTypeAny, {
    statementId: string;
    parentId: string;
    participants: {
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
    }[];
}, {
    statementId: string;
    parentId: string;
    participants: {
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
    }[];
}>;
export type Room = z.infer<typeof RoomSchema>;
export declare const RoomAskToJoinSchema: z.ZodObject<{
    participant: z.ZodObject<{
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
    statement: z.ZodUnion<[z.ZodObject<{
        statement: z.ZodString;
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
        color: z.ZodOptional<z.ZodString>;
        defaultLanguage: z.ZodOptional<z.ZodString>;
        parentId: z.ZodString;
        parents: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        topParentId: z.ZodOptional<z.ZodString>;
        hasChildren: z.ZodOptional<z.ZodBoolean>;
        lastMessage: z.ZodOptional<z.ZodString>;
        lastUpdate: z.ZodNumber;
        lastChildUpdate: z.ZodOptional<z.ZodNumber>;
        createdAt: z.ZodNumber;
        pro: z.ZodOptional<z.ZodNumber>;
        con: z.ZodOptional<z.ZodNumber>;
        evaluation: z.ZodOptional<z.ZodObject<{
            pro: z.ZodOptional<z.ZodNumber>;
            con: z.ZodOptional<z.ZodNumber>;
            fairness: z.ZodOptional<z.ZodNumber>;
        }, "strip", z.ZodTypeAny, {
            pro?: number | undefined;
            con?: number | undefined;
            fairness?: number | undefined;
        }, {
            pro?: number | undefined;
            con?: number | undefined;
            fairness?: number | undefined;
        }>>;
        consensus: z.ZodNumber;
        order: z.ZodOptional<z.ZodNumber>;
        elementHight: z.ZodOptional<z.ZodNumber>;
        votes: z.ZodOptional<z.ZodNumber>;
        selections: z.ZodOptional<z.ZodAny>;
        isSelected: z.ZodOptional<z.ZodBoolean>;
        voted: z.ZodOptional<z.ZodNumber>;
        totalSubStatements: z.ZodOptional<z.ZodNumber>;
        subScreens: z.ZodOptional<z.ZodArray<z.ZodEnum<[import("./screensAndNavModels").Screen.DOC, import("./screensAndNavModels").Screen.HOME, import("./screensAndNavModels").Screen.STATEMENT, import("./screensAndNavModels").Screen.CHAT, import("./screensAndNavModels").Screen.OPTIONS, import("./screensAndNavModels").Screen.VOTE, import("./screensAndNavModels").Screen.GROUPS, import("./screensAndNavModels").Screen.SETTINGS, import("./screensAndNavModels").Screen.MASS_QUESTIONS, import("./screensAndNavModels").Screen.OPTIONS_CONSENSUS, import("./screensAndNavModels").Screen.OPTIONS_NEW, import("./screensAndNavModels").Screen.OPTIONS_RANDOM, import("./screensAndNavModels").Screen.OPTIONS_UPDATED, import("./screensAndNavModels").Screen.VOTES_CONSENSUS, import("./screensAndNavModels").Screen.VOTESֹֹֹ_VOTED, import("./screensAndNavModels").Screen.VOTES_NEW, import("./screensAndNavModels").Screen.VOTES_RANDOM, import("./screensAndNavModels").Screen.VOTES_UPDATED, import("./screensAndNavModels").Screen.ADMIN_CHOOSE, import("./screensAndNavModels").Screen.ADMIN_DIVIDE, import("./screensAndNavModels").Screen.QUESTIONS, import("./screensAndNavModels").Screen.QUESTIONS_NEW, import("./screensAndNavModels").Screen.QUESTIONS_RANDOM, import("./screensAndNavModels").Screen.QUESTIONS_UPDATED, import("./screensAndNavModels").Screen.QUESTIONS_CONSENSUS]>, "many">>;
        roomsState: z.ZodOptional<z.ZodEnum<[RoomsStateSelection.SELECT_ROOMS, RoomsStateSelection.DIVIDE]>>;
        statementSettings: z.ZodOptional<z.ZodObject<{
            subScreens: z.ZodOptional<z.ZodArray<z.ZodEnum<[import("./screensAndNavModels").Screen.DOC, import("./screensAndNavModels").Screen.HOME, import("./screensAndNavModels").Screen.STATEMENT, import("./screensAndNavModels").Screen.CHAT, import("./screensAndNavModels").Screen.OPTIONS, import("./screensAndNavModels").Screen.VOTE, import("./screensAndNavModels").Screen.GROUPS, import("./screensAndNavModels").Screen.SETTINGS, import("./screensAndNavModels").Screen.MASS_QUESTIONS, import("./screensAndNavModels").Screen.OPTIONS_CONSENSUS, import("./screensAndNavModels").Screen.OPTIONS_NEW, import("./screensAndNavModels").Screen.OPTIONS_RANDOM, import("./screensAndNavModels").Screen.OPTIONS_UPDATED, import("./screensAndNavModels").Screen.VOTES_CONSENSUS, import("./screensAndNavModels").Screen.VOTESֹֹֹ_VOTED, import("./screensAndNavModels").Screen.VOTES_NEW, import("./screensAndNavModels").Screen.VOTES_RANDOM, import("./screensAndNavModels").Screen.VOTES_UPDATED, import("./screensAndNavModels").Screen.ADMIN_CHOOSE, import("./screensAndNavModels").Screen.ADMIN_DIVIDE, import("./screensAndNavModels").Screen.QUESTIONS, import("./screensAndNavModels").Screen.QUESTIONS_NEW, import("./screensAndNavModels").Screen.QUESTIONS_RANDOM, import("./screensAndNavModels").Screen.QUESTIONS_UPDATED, import("./screensAndNavModels").Screen.QUESTIONS_CONSENSUS]>, "many">>;
            enableAddEvaluationOption: z.ZodOptional<z.ZodBoolean>;
            enableAddVotingOption: z.ZodOptional<z.ZodBoolean>;
        }, "strip", z.ZodTypeAny, {
            subScreens?: import("./screensAndNavModels").Screen[] | undefined;
            enableAddEvaluationOption?: boolean | undefined;
            enableAddVotingOption?: boolean | undefined;
        }, {
            subScreens?: import("./screensAndNavModels").Screen[] | undefined;
            enableAddEvaluationOption?: boolean | undefined;
            enableAddVotingOption?: boolean | undefined;
        }>>;
        maxConsensus: z.ZodOptional<z.ZodNumber>;
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
            consensus: number;
            voted?: number | undefined;
        }>>;
        statementType: z.ZodOptional<z.ZodEnum<[import("./statementsModels").StatementType.statement, import("./statementsModels").StatementType.option, import("./statementsModels").StatementType.question, import("./statementsModels").StatementType.result]>>;
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
            consensus: number;
            voted?: number | undefined;
        }>, "many">>;
        roomSize: z.ZodOptional<z.ZodNumber>;
        roomsSettings: z.ZodOptional<z.ZodObject<{
            roomSize: z.ZodOptional<z.ZodNumber>;
            roomsState: z.ZodOptional<z.ZodEnum<[RoomsStateSelection.SELECT_ROOMS, RoomsStateSelection.DIVIDE]>>;
        }, "strip", z.ZodTypeAny, {
            roomSize?: number | undefined;
            roomsState?: RoomsStateSelection | undefined;
        }, {
            roomSize?: number | undefined;
            roomsState?: RoomsStateSelection | undefined;
        }>>;
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
    }, "strip", z.ZodTypeAny, {
        statement: string;
        statementId: string;
        parentId: string;
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
        };
        lastUpdate: number;
        createdAt: number;
        consensus: number;
        color?: string | undefined;
        defaultLanguage?: string | undefined;
        parents?: string[] | undefined;
        topParentId?: string | undefined;
        hasChildren?: boolean | undefined;
        lastMessage?: string | undefined;
        lastChildUpdate?: number | undefined;
        pro?: number | undefined;
        con?: number | undefined;
        evaluation?: {
            pro?: number | undefined;
            con?: number | undefined;
            fairness?: number | undefined;
        } | undefined;
        order?: number | undefined;
        elementHight?: number | undefined;
        votes?: number | undefined;
        selections?: any;
        isSelected?: boolean | undefined;
        voted?: number | undefined;
        totalSubStatements?: number | undefined;
        subScreens?: import("./screensAndNavModels").Screen[] | undefined;
        roomsState?: RoomsStateSelection | undefined;
        statementSettings?: {
            subScreens?: import("./screensAndNavModels").Screen[] | undefined;
            enableAddEvaluationOption?: boolean | undefined;
            enableAddVotingOption?: boolean | undefined;
        } | undefined;
        maxConsensus?: number | undefined;
        maxConsesusStatement?: {
            statement: string;
            statementId: string;
            parentId: string;
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
        } | undefined;
        results?: {
            statement: string;
            statementId: string;
            parentId: string;
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
            };
            consensus: number;
            voted?: number | undefined;
        }[] | undefined;
        roomSize?: number | undefined;
        roomsSettings?: {
            roomSize?: number | undefined;
            roomsState?: RoomsStateSelection | undefined;
        } | undefined;
        imagesURL?: {
            main?: string | undefined;
            more?: string[] | undefined;
        } | undefined;
    }, {
        statement: string;
        statementId: string;
        parentId: string;
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
        };
        lastUpdate: number;
        createdAt: number;
        consensus: number;
        color?: string | undefined;
        defaultLanguage?: string | undefined;
        parents?: string[] | undefined;
        topParentId?: string | undefined;
        hasChildren?: boolean | undefined;
        lastMessage?: string | undefined;
        lastChildUpdate?: number | undefined;
        pro?: number | undefined;
        con?: number | undefined;
        evaluation?: {
            pro?: number | undefined;
            con?: number | undefined;
            fairness?: number | undefined;
        } | undefined;
        order?: number | undefined;
        elementHight?: number | undefined;
        votes?: number | undefined;
        selections?: any;
        isSelected?: boolean | undefined;
        voted?: number | undefined;
        totalSubStatements?: number | undefined;
        subScreens?: import("./screensAndNavModels").Screen[] | undefined;
        roomsState?: RoomsStateSelection | undefined;
        statementSettings?: {
            subScreens?: import("./screensAndNavModels").Screen[] | undefined;
            enableAddEvaluationOption?: boolean | undefined;
            enableAddVotingOption?: boolean | undefined;
        } | undefined;
        maxConsensus?: number | undefined;
        maxConsesusStatement?: {
            statement: string;
            statementId: string;
            parentId: string;
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
        } | undefined;
        results?: {
            statement: string;
            statementId: string;
            parentId: string;
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
            };
            consensus: number;
            voted?: number | undefined;
        }[] | undefined;
        roomSize?: number | undefined;
        roomsSettings?: {
            roomSize?: number | undefined;
            roomsState?: RoomsStateSelection | undefined;
        } | undefined;
        imagesURL?: {
            main?: string | undefined;
            more?: string[] | undefined;
        } | undefined;
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
    requestId: string;
    statement?: {
        statement: string;
        statementId: string;
        parentId: string;
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
        };
        lastUpdate: number;
        createdAt: number;
        consensus: number;
        color?: string | undefined;
        defaultLanguage?: string | undefined;
        parents?: string[] | undefined;
        topParentId?: string | undefined;
        hasChildren?: boolean | undefined;
        lastMessage?: string | undefined;
        lastChildUpdate?: number | undefined;
        pro?: number | undefined;
        con?: number | undefined;
        evaluation?: {
            pro?: number | undefined;
            con?: number | undefined;
            fairness?: number | undefined;
        } | undefined;
        order?: number | undefined;
        elementHight?: number | undefined;
        votes?: number | undefined;
        selections?: any;
        isSelected?: boolean | undefined;
        voted?: number | undefined;
        totalSubStatements?: number | undefined;
        subScreens?: import("./screensAndNavModels").Screen[] | undefined;
        roomsState?: RoomsStateSelection | undefined;
        statementSettings?: {
            subScreens?: import("./screensAndNavModels").Screen[] | undefined;
            enableAddEvaluationOption?: boolean | undefined;
            enableAddVotingOption?: boolean | undefined;
        } | undefined;
        maxConsensus?: number | undefined;
        maxConsesusStatement?: {
            statement: string;
            statementId: string;
            parentId: string;
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
        } | undefined;
        results?: {
            statement: string;
            statementId: string;
            parentId: string;
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
            };
            consensus: number;
            voted?: number | undefined;
        }[] | undefined;
        roomSize?: number | undefined;
        roomsSettings?: {
            roomSize?: number | undefined;
            roomsState?: RoomsStateSelection | undefined;
        } | undefined;
        imagesURL?: {
            main?: string | undefined;
            more?: string[] | undefined;
        } | undefined;
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
    requestId: string;
    statement?: {
        statement: string;
        statementId: string;
        parentId: string;
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
        };
        lastUpdate: number;
        createdAt: number;
        consensus: number;
        color?: string | undefined;
        defaultLanguage?: string | undefined;
        parents?: string[] | undefined;
        topParentId?: string | undefined;
        hasChildren?: boolean | undefined;
        lastMessage?: string | undefined;
        lastChildUpdate?: number | undefined;
        pro?: number | undefined;
        con?: number | undefined;
        evaluation?: {
            pro?: number | undefined;
            con?: number | undefined;
            fairness?: number | undefined;
        } | undefined;
        order?: number | undefined;
        elementHight?: number | undefined;
        votes?: number | undefined;
        selections?: any;
        isSelected?: boolean | undefined;
        voted?: number | undefined;
        totalSubStatements?: number | undefined;
        subScreens?: import("./screensAndNavModels").Screen[] | undefined;
        roomsState?: RoomsStateSelection | undefined;
        statementSettings?: {
            subScreens?: import("./screensAndNavModels").Screen[] | undefined;
            enableAddEvaluationOption?: boolean | undefined;
            enableAddVotingOption?: boolean | undefined;
        } | undefined;
        maxConsensus?: number | undefined;
        maxConsesusStatement?: {
            statement: string;
            statementId: string;
            parentId: string;
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
        } | undefined;
        results?: {
            statement: string;
            statementId: string;
            parentId: string;
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
            };
            consensus: number;
            voted?: number | undefined;
        }[] | undefined;
        roomSize?: number | undefined;
        roomsSettings?: {
            roomSize?: number | undefined;
            roomsState?: RoomsStateSelection | undefined;
        } | undefined;
        imagesURL?: {
            main?: string | undefined;
            more?: string[] | undefined;
        } | undefined;
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
