import { z } from "zod";
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
        role?: string | undefined;
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
        role?: string | undefined;
    }[];
}>;
export type Room = z.infer<typeof RoomSchema>;
export declare const ParticipantSchema: z.ZodObject<{
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
    statement: z.ZodUnion<[z.ZodObject<{
        allowAnonymousLogin: z.ZodOptional<z.ZodBoolean>;
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
            order: number;
            isDoc: boolean;
        }, {
            order: number;
            isDoc: boolean;
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
        votes: z.ZodOptional<z.ZodNumber>;
        selections: z.ZodOptional<z.ZodAny>;
        isSelected: z.ZodOptional<z.ZodBoolean>;
        importanceData: z.ZodOptional<z.ZodObject<{
            sumImportance: z.ZodNumber;
            numberOfUsers: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            sumImportance: number;
            numberOfUsers: number;
        }, {
            sumImportance: number;
            numberOfUsers: number;
        }>>;
        voted: z.ZodOptional<z.ZodNumber>;
        totalSubStatements: z.ZodOptional<z.ZodNumber>;
        subScreens: z.ZodOptional<z.ZodArray<z.ZodEnum<[import("./screensAndNavModels").Screen.DOC, import("./screensAndNavModels").Screen.HOME, import("./screensAndNavModels").Screen.STATEMENT, import("./screensAndNavModels").Screen.CHAT, import("./screensAndNavModels").Screen.OPTIONS, import("./screensAndNavModels").Screen.VOTE, import("./screensAndNavModels").Screen.GROUPS, import("./screensAndNavModels").Screen.SETTINGS, import("./screensAndNavModels").Screen.MASS_QUESTIONS, import("./screensAndNavModels").Screen.QUESTIONS_MASS, import("./screensAndNavModels").Screen.OPTIONS_CONSENSUS, import("./screensAndNavModels").Screen.OPTIONS_NEW, import("./screensAndNavModels").Screen.OPTIONS_RANDOM, import("./screensAndNavModels").Screen.OPTIONS_UPDATED, import("./screensAndNavModels").Screen.VOTES_CONSENSUS, import("./screensAndNavModels").Screen.VOTESֹֹֹ_VOTED, import("./screensAndNavModels").Screen.VOTES_NEW, import("./screensAndNavModels").Screen.VOTES_RANDOM, import("./screensAndNavModels").Screen.VOTES_UPDATED, import("./screensAndNavModels").Screen.ADMIN_CHOOSE, import("./screensAndNavModels").Screen.ADMIN_DIVIDE, import("./screensAndNavModels").Screen.QUESTIONS, import("./screensAndNavModels").Screen.QUESTIONS_NEW, import("./screensAndNavModels").Screen.QUESTIONS_RANDOM, import("./screensAndNavModels").Screen.QUESTIONS_UPDATED, import("./screensAndNavModels").Screen.QUESTIONS_CONSENSUS, import("./screensAndNavModels").Screen.INFO]>, "many">>;
        roomsState: z.ZodOptional<z.ZodEnum<[RoomsStateSelection.chooseRoom, RoomsStateSelection.inRoom]>>;
        statementSettings: z.ZodOptional<z.ZodObject<{
            subScreens: z.ZodOptional<z.ZodArray<z.ZodEnum<[import("./screensAndNavModels").Screen.DOC, import("./screensAndNavModels").Screen.HOME, import("./screensAndNavModels").Screen.STATEMENT, import("./screensAndNavModels").Screen.CHAT, import("./screensAndNavModels").Screen.OPTIONS, import("./screensAndNavModels").Screen.VOTE, import("./screensAndNavModels").Screen.GROUPS, import("./screensAndNavModels").Screen.SETTINGS, import("./screensAndNavModels").Screen.MASS_QUESTIONS, import("./screensAndNavModels").Screen.QUESTIONS_MASS, import("./screensAndNavModels").Screen.OPTIONS_CONSENSUS, import("./screensAndNavModels").Screen.OPTIONS_NEW, import("./screensAndNavModels").Screen.OPTIONS_RANDOM, import("./screensAndNavModels").Screen.OPTIONS_UPDATED, import("./screensAndNavModels").Screen.VOTES_CONSENSUS, import("./screensAndNavModels").Screen.VOTESֹֹֹ_VOTED, import("./screensAndNavModels").Screen.VOTES_NEW, import("./screensAndNavModels").Screen.VOTES_RANDOM, import("./screensAndNavModels").Screen.VOTES_UPDATED, import("./screensAndNavModels").Screen.ADMIN_CHOOSE, import("./screensAndNavModels").Screen.ADMIN_DIVIDE, import("./screensAndNavModels").Screen.QUESTIONS, import("./screensAndNavModels").Screen.QUESTIONS_NEW, import("./screensAndNavModels").Screen.QUESTIONS_RANDOM, import("./screensAndNavModels").Screen.QUESTIONS_UPDATED, import("./screensAndNavModels").Screen.QUESTIONS_CONSENSUS, import("./screensAndNavModels").Screen.INFO]>, "many">>;
            enableAddEvaluationOption: z.ZodOptional<z.ZodBoolean>;
            enableAddVotingOption: z.ZodOptional<z.ZodBoolean>;
            enhancedEvaluation: z.ZodOptional<z.ZodBoolean>;
            showEvaluation: z.ZodOptional<z.ZodBoolean>;
            inVotingGetOnlyResults: z.ZodOptional<z.ZodBoolean>;
            enableSimilaritiesSearch: z.ZodOptional<z.ZodBoolean>;
            enableNotifications: z.ZodOptional<z.ZodBoolean>;
            show: z.ZodOptional<z.ZodBoolean>;
        }, "strip", z.ZodTypeAny, {
            subScreens?: import("./screensAndNavModels").Screen[] | undefined;
            enableAddEvaluationOption?: boolean | undefined;
            enableAddVotingOption?: boolean | undefined;
            enhancedEvaluation?: boolean | undefined;
            showEvaluation?: boolean | undefined;
            inVotingGetOnlyResults?: boolean | undefined;
            enableSimilaritiesSearch?: boolean | undefined;
            enableNotifications?: boolean | undefined;
            show?: boolean | undefined;
        }, {
            subScreens?: import("./screensAndNavModels").Screen[] | undefined;
            enableAddEvaluationOption?: boolean | undefined;
            enableAddVotingOption?: boolean | undefined;
            enhancedEvaluation?: boolean | undefined;
            showEvaluation?: boolean | undefined;
            inVotingGetOnlyResults?: boolean | undefined;
            enableSimilaritiesSearch?: boolean | undefined;
            enableNotifications?: boolean | undefined;
            show?: boolean | undefined;
        }>>;
        membership: z.ZodOptional<z.ZodObject<{
            adminApproveMembers: z.ZodOptional<z.ZodBoolean>;
            access: z.ZodOptional<z.ZodEnum<[import("./statementsModels").Access.open, import("./statementsModels").Access.close]>>;
            typeOfMembersAllowed: z.ZodOptional<z.ZodEnum<[import("./statementsModels").membersAllowed.all, import("./statementsModels").membersAllowed.nonAnonymous]>>;
        }, "strip", z.ZodTypeAny, {
            adminApproveMembers?: boolean | undefined;
            access?: import("./statementsModels").Access | undefined;
            typeOfMembersAllowed?: import("./statementsModels").membersAllowed | undefined;
        }, {
            adminApproveMembers?: boolean | undefined;
            access?: import("./statementsModels").Access | undefined;
            typeOfMembersAllowed?: import("./statementsModels").membersAllowed | undefined;
        }>>;
        maxConsensus: z.ZodOptional<z.ZodNumber>;
        statementType: z.ZodOptional<z.ZodEnum<[import("./statementsModels").StatementType.statement, import("./statementsModels").StatementType.option, import("./statementsModels").StatementType.question, import("./statementsModels").StatementType.result, import("./statementsModels").StatementType.selection, import("./statementsModels").StatementType.document]>>;
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
                role?: string | undefined;
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
                role?: string | undefined;
            };
            consensus: number;
            voted?: number | undefined;
        }>, "many">>;
        roomSize: z.ZodOptional<z.ZodNumber>;
        roomsSettings: z.ZodOptional<z.ZodObject<{
            roomSize: z.ZodOptional<z.ZodNumber>;
            roomsState: z.ZodOptional<z.ZodEnum<[RoomsStateSelection.chooseRoom, RoomsStateSelection.inRoom]>>;
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
        totalEvaluators: z.ZodOptional<z.ZodNumber>;
        questionSettings: z.ZodOptional<z.ZodObject<{
            questionType: z.ZodEnum<[import("./statementsModels").QuestionType.singleStep, import("./statementsModels").QuestionType.multipleSteps]>;
            currentStage: z.ZodEnum<[import("./statementsModels").QuestionStage.explanation, import("./statementsModels").QuestionStage.suggestion, import("./statementsModels").QuestionStage.firstEvaluation, import("./statementsModels").QuestionStage.secondEvaluation, import("./statementsModels").QuestionStage.voting, import("./statementsModels").QuestionStage.finished]>;
        }, "strip", z.ZodTypeAny, {
            questionType: import("./statementsModels").QuestionType;
            currentStage: import("./statementsModels").QuestionStage;
        }, {
            questionType: import("./statementsModels").QuestionType;
            currentStage: import("./statementsModels").QuestionStage;
        }>>;
        isPartOfTempPresentation: z.ZodOptional<z.ZodBoolean>;
        documentSettings: z.ZodOptional<z.ZodObject<{
            parentDocumentId: z.ZodString;
            order: z.ZodNumber;
            type: z.ZodEnum<[import("./statementsModels").DocumentType.paragraph, import("./statementsModels").DocumentType.section, import("./statementsModels").DocumentType.comment]>;
            isTop: z.ZodBoolean;
        }, "strip", z.ZodTypeAny, {
            type: import("./statementsModels").DocumentType;
            order: number;
            parentDocumentId: string;
            isTop: boolean;
        }, {
            type: import("./statementsModels").DocumentType;
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
            role?: string | undefined;
        };
        topParentId: string;
        lastUpdate: number;
        createdAt: number;
        consensus: number;
        allowAnonymousLogin?: boolean | undefined;
        color?: string | undefined;
        defaultLanguage?: string | undefined;
        followMe?: string | undefined;
        parents?: string[] | undefined;
        hasChildren?: boolean | undefined;
        lastMessage?: string | undefined;
        lastChildUpdate?: number | undefined;
        pro?: number | undefined;
        con?: number | undefined;
        doc?: {
            order: number;
            isDoc: boolean;
        } | undefined;
        evaluation?: {
            agreement: number;
            sumEvaluations: number;
            numberOfEvaluators: number;
            sumPro?: number | undefined;
            sumCon?: number | undefined;
        } | undefined;
        order?: number | undefined;
        elementHight?: number | undefined;
        votes?: number | undefined;
        selections?: any;
        isSelected?: boolean | undefined;
        importanceData?: {
            sumImportance: number;
            numberOfUsers: number;
        } | undefined;
        voted?: number | undefined;
        totalSubStatements?: number | undefined;
        subScreens?: import("./screensAndNavModels").Screen[] | undefined;
        roomsState?: RoomsStateSelection | undefined;
        statementSettings?: {
            subScreens?: import("./screensAndNavModels").Screen[] | undefined;
            enableAddEvaluationOption?: boolean | undefined;
            enableAddVotingOption?: boolean | undefined;
            enhancedEvaluation?: boolean | undefined;
            showEvaluation?: boolean | undefined;
            inVotingGetOnlyResults?: boolean | undefined;
            enableSimilaritiesSearch?: boolean | undefined;
            enableNotifications?: boolean | undefined;
            show?: boolean | undefined;
        } | undefined;
        membership?: {
            adminApproveMembers?: boolean | undefined;
            access?: import("./statementsModels").Access | undefined;
            typeOfMembersAllowed?: import("./statementsModels").membersAllowed | undefined;
        } | undefined;
        maxConsensus?: number | undefined;
        statementType?: import("./statementsModels").StatementType | undefined;
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
                role?: string | undefined;
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
        totalEvaluators?: number | undefined;
        questionSettings?: {
            questionType: import("./statementsModels").QuestionType;
            currentStage: import("./statementsModels").QuestionStage;
        } | undefined;
        isPartOfTempPresentation?: boolean | undefined;
        documentSettings?: {
            type: import("./statementsModels").DocumentType;
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
            role?: string | undefined;
        };
        topParentId: string;
        lastUpdate: number;
        createdAt: number;
        consensus: number;
        allowAnonymousLogin?: boolean | undefined;
        color?: string | undefined;
        defaultLanguage?: string | undefined;
        followMe?: string | undefined;
        parents?: string[] | undefined;
        hasChildren?: boolean | undefined;
        lastMessage?: string | undefined;
        lastChildUpdate?: number | undefined;
        pro?: number | undefined;
        con?: number | undefined;
        doc?: {
            order: number;
            isDoc: boolean;
        } | undefined;
        evaluation?: {
            agreement: number;
            sumEvaluations: number;
            numberOfEvaluators: number;
            sumPro?: number | undefined;
            sumCon?: number | undefined;
        } | undefined;
        order?: number | undefined;
        elementHight?: number | undefined;
        votes?: number | undefined;
        selections?: any;
        isSelected?: boolean | undefined;
        importanceData?: {
            sumImportance: number;
            numberOfUsers: number;
        } | undefined;
        voted?: number | undefined;
        totalSubStatements?: number | undefined;
        subScreens?: import("./screensAndNavModels").Screen[] | undefined;
        roomsState?: RoomsStateSelection | undefined;
        statementSettings?: {
            subScreens?: import("./screensAndNavModels").Screen[] | undefined;
            enableAddEvaluationOption?: boolean | undefined;
            enableAddVotingOption?: boolean | undefined;
            enhancedEvaluation?: boolean | undefined;
            showEvaluation?: boolean | undefined;
            inVotingGetOnlyResults?: boolean | undefined;
            enableSimilaritiesSearch?: boolean | undefined;
            enableNotifications?: boolean | undefined;
            show?: boolean | undefined;
        } | undefined;
        membership?: {
            adminApproveMembers?: boolean | undefined;
            access?: import("./statementsModels").Access | undefined;
            typeOfMembersAllowed?: import("./statementsModels").membersAllowed | undefined;
        } | undefined;
        maxConsensus?: number | undefined;
        statementType?: import("./statementsModels").StatementType | undefined;
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
                role?: string | undefined;
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
        totalEvaluators?: number | undefined;
        questionSettings?: {
            questionType: import("./statementsModels").QuestionType;
            currentStage: import("./statementsModels").QuestionStage;
        } | undefined;
        isPartOfTempPresentation?: boolean | undefined;
        documentSettings?: {
            type: import("./statementsModels").DocumentType;
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
    }>, z.ZodUndefined]>;
    requestId: z.ZodString;
    statementId: z.ZodOptional<z.ZodString>;
    parentId: z.ZodString;
    roomNumber: z.ZodOptional<z.ZodNumber>;
    approved: z.ZodOptional<z.ZodBoolean>;
    lastUpdate: z.ZodOptional<z.ZodNumber>;
    paradigmAxes: z.ZodOptional<z.ZodArray<z.ZodOptional<z.ZodObject<{
        paradigmAxis: z.ZodString;
        value: z.ZodOptional<z.ZodNumber>;
    }, "strip", z.ZodTypeAny, {
        paradigmAxis: string;
        value?: number | undefined;
    }, {
        paradigmAxis: string;
        value?: number | undefined;
    }>>, "many">>;
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
        role?: string | undefined;
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
            role?: string | undefined;
        };
        topParentId: string;
        lastUpdate: number;
        createdAt: number;
        consensus: number;
        allowAnonymousLogin?: boolean | undefined;
        color?: string | undefined;
        defaultLanguage?: string | undefined;
        followMe?: string | undefined;
        parents?: string[] | undefined;
        hasChildren?: boolean | undefined;
        lastMessage?: string | undefined;
        lastChildUpdate?: number | undefined;
        pro?: number | undefined;
        con?: number | undefined;
        doc?: {
            order: number;
            isDoc: boolean;
        } | undefined;
        evaluation?: {
            agreement: number;
            sumEvaluations: number;
            numberOfEvaluators: number;
            sumPro?: number | undefined;
            sumCon?: number | undefined;
        } | undefined;
        order?: number | undefined;
        elementHight?: number | undefined;
        votes?: number | undefined;
        selections?: any;
        isSelected?: boolean | undefined;
        importanceData?: {
            sumImportance: number;
            numberOfUsers: number;
        } | undefined;
        voted?: number | undefined;
        totalSubStatements?: number | undefined;
        subScreens?: import("./screensAndNavModels").Screen[] | undefined;
        roomsState?: RoomsStateSelection | undefined;
        statementSettings?: {
            subScreens?: import("./screensAndNavModels").Screen[] | undefined;
            enableAddEvaluationOption?: boolean | undefined;
            enableAddVotingOption?: boolean | undefined;
            enhancedEvaluation?: boolean | undefined;
            showEvaluation?: boolean | undefined;
            inVotingGetOnlyResults?: boolean | undefined;
            enableSimilaritiesSearch?: boolean | undefined;
            enableNotifications?: boolean | undefined;
            show?: boolean | undefined;
        } | undefined;
        membership?: {
            adminApproveMembers?: boolean | undefined;
            access?: import("./statementsModels").Access | undefined;
            typeOfMembersAllowed?: import("./statementsModels").membersAllowed | undefined;
        } | undefined;
        maxConsensus?: number | undefined;
        statementType?: import("./statementsModels").StatementType | undefined;
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
                role?: string | undefined;
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
        totalEvaluators?: number | undefined;
        questionSettings?: {
            questionType: import("./statementsModels").QuestionType;
            currentStage: import("./statementsModels").QuestionStage;
        } | undefined;
        isPartOfTempPresentation?: boolean | undefined;
        documentSettings?: {
            type: import("./statementsModels").DocumentType;
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
    } | undefined;
    statementId?: string | undefined;
    roomNumber?: number | undefined;
    approved?: boolean | undefined;
    lastUpdate?: number | undefined;
    paradigmAxes?: ({
        paradigmAxis: string;
        value?: number | undefined;
    } | undefined)[] | undefined;
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
        role?: string | undefined;
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
            role?: string | undefined;
        };
        topParentId: string;
        lastUpdate: number;
        createdAt: number;
        consensus: number;
        allowAnonymousLogin?: boolean | undefined;
        color?: string | undefined;
        defaultLanguage?: string | undefined;
        followMe?: string | undefined;
        parents?: string[] | undefined;
        hasChildren?: boolean | undefined;
        lastMessage?: string | undefined;
        lastChildUpdate?: number | undefined;
        pro?: number | undefined;
        con?: number | undefined;
        doc?: {
            order: number;
            isDoc: boolean;
        } | undefined;
        evaluation?: {
            agreement: number;
            sumEvaluations: number;
            numberOfEvaluators: number;
            sumPro?: number | undefined;
            sumCon?: number | undefined;
        } | undefined;
        order?: number | undefined;
        elementHight?: number | undefined;
        votes?: number | undefined;
        selections?: any;
        isSelected?: boolean | undefined;
        importanceData?: {
            sumImportance: number;
            numberOfUsers: number;
        } | undefined;
        voted?: number | undefined;
        totalSubStatements?: number | undefined;
        subScreens?: import("./screensAndNavModels").Screen[] | undefined;
        roomsState?: RoomsStateSelection | undefined;
        statementSettings?: {
            subScreens?: import("./screensAndNavModels").Screen[] | undefined;
            enableAddEvaluationOption?: boolean | undefined;
            enableAddVotingOption?: boolean | undefined;
            enhancedEvaluation?: boolean | undefined;
            showEvaluation?: boolean | undefined;
            inVotingGetOnlyResults?: boolean | undefined;
            enableSimilaritiesSearch?: boolean | undefined;
            enableNotifications?: boolean | undefined;
            show?: boolean | undefined;
        } | undefined;
        membership?: {
            adminApproveMembers?: boolean | undefined;
            access?: import("./statementsModels").Access | undefined;
            typeOfMembersAllowed?: import("./statementsModels").membersAllowed | undefined;
        } | undefined;
        maxConsensus?: number | undefined;
        statementType?: import("./statementsModels").StatementType | undefined;
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
                role?: string | undefined;
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
        totalEvaluators?: number | undefined;
        questionSettings?: {
            questionType: import("./statementsModels").QuestionType;
            currentStage: import("./statementsModels").QuestionStage;
        } | undefined;
        isPartOfTempPresentation?: boolean | undefined;
        documentSettings?: {
            type: import("./statementsModels").DocumentType;
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
    } | undefined;
    statementId?: string | undefined;
    roomNumber?: number | undefined;
    approved?: boolean | undefined;
    lastUpdate?: number | undefined;
    paradigmAxes?: ({
        paradigmAxis: string;
        value?: number | undefined;
    } | undefined)[] | undefined;
}>;
export type Participant = z.infer<typeof ParticipantSchema>;
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
    chooseRoom = "chooseRoom",
    inRoom = "inRoom"
}
export declare const RoomsStateSelectionEnum: z.ZodEnum<[RoomsStateSelection.chooseRoom, RoomsStateSelection.inRoom]>;
export declare const RoomDiviedSchema: z.ZodObject<{
    roomNumber: z.ZodNumber;
    statement: z.ZodObject<{
        allowAnonymousLogin: z.ZodOptional<z.ZodBoolean>;
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
            order: number;
            isDoc: boolean;
        }, {
            order: number;
            isDoc: boolean;
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
        votes: z.ZodOptional<z.ZodNumber>;
        selections: z.ZodOptional<z.ZodAny>;
        isSelected: z.ZodOptional<z.ZodBoolean>;
        importanceData: z.ZodOptional<z.ZodObject<{
            sumImportance: z.ZodNumber;
            numberOfUsers: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            sumImportance: number;
            numberOfUsers: number;
        }, {
            sumImportance: number;
            numberOfUsers: number;
        }>>;
        voted: z.ZodOptional<z.ZodNumber>;
        totalSubStatements: z.ZodOptional<z.ZodNumber>;
        subScreens: z.ZodOptional<z.ZodArray<z.ZodEnum<[import("./screensAndNavModels").Screen.DOC, import("./screensAndNavModels").Screen.HOME, import("./screensAndNavModels").Screen.STATEMENT, import("./screensAndNavModels").Screen.CHAT, import("./screensAndNavModels").Screen.OPTIONS, import("./screensAndNavModels").Screen.VOTE, import("./screensAndNavModels").Screen.GROUPS, import("./screensAndNavModels").Screen.SETTINGS, import("./screensAndNavModels").Screen.MASS_QUESTIONS, import("./screensAndNavModels").Screen.QUESTIONS_MASS, import("./screensAndNavModels").Screen.OPTIONS_CONSENSUS, import("./screensAndNavModels").Screen.OPTIONS_NEW, import("./screensAndNavModels").Screen.OPTIONS_RANDOM, import("./screensAndNavModels").Screen.OPTIONS_UPDATED, import("./screensAndNavModels").Screen.VOTES_CONSENSUS, import("./screensAndNavModels").Screen.VOTESֹֹֹ_VOTED, import("./screensAndNavModels").Screen.VOTES_NEW, import("./screensAndNavModels").Screen.VOTES_RANDOM, import("./screensAndNavModels").Screen.VOTES_UPDATED, import("./screensAndNavModels").Screen.ADMIN_CHOOSE, import("./screensAndNavModels").Screen.ADMIN_DIVIDE, import("./screensAndNavModels").Screen.QUESTIONS, import("./screensAndNavModels").Screen.QUESTIONS_NEW, import("./screensAndNavModels").Screen.QUESTIONS_RANDOM, import("./screensAndNavModels").Screen.QUESTIONS_UPDATED, import("./screensAndNavModels").Screen.QUESTIONS_CONSENSUS, import("./screensAndNavModels").Screen.INFO]>, "many">>;
        roomsState: z.ZodOptional<z.ZodEnum<[RoomsStateSelection.chooseRoom, RoomsStateSelection.inRoom]>>;
        statementSettings: z.ZodOptional<z.ZodObject<{
            subScreens: z.ZodOptional<z.ZodArray<z.ZodEnum<[import("./screensAndNavModels").Screen.DOC, import("./screensAndNavModels").Screen.HOME, import("./screensAndNavModels").Screen.STATEMENT, import("./screensAndNavModels").Screen.CHAT, import("./screensAndNavModels").Screen.OPTIONS, import("./screensAndNavModels").Screen.VOTE, import("./screensAndNavModels").Screen.GROUPS, import("./screensAndNavModels").Screen.SETTINGS, import("./screensAndNavModels").Screen.MASS_QUESTIONS, import("./screensAndNavModels").Screen.QUESTIONS_MASS, import("./screensAndNavModels").Screen.OPTIONS_CONSENSUS, import("./screensAndNavModels").Screen.OPTIONS_NEW, import("./screensAndNavModels").Screen.OPTIONS_RANDOM, import("./screensAndNavModels").Screen.OPTIONS_UPDATED, import("./screensAndNavModels").Screen.VOTES_CONSENSUS, import("./screensAndNavModels").Screen.VOTESֹֹֹ_VOTED, import("./screensAndNavModels").Screen.VOTES_NEW, import("./screensAndNavModels").Screen.VOTES_RANDOM, import("./screensAndNavModels").Screen.VOTES_UPDATED, import("./screensAndNavModels").Screen.ADMIN_CHOOSE, import("./screensAndNavModels").Screen.ADMIN_DIVIDE, import("./screensAndNavModels").Screen.QUESTIONS, import("./screensAndNavModels").Screen.QUESTIONS_NEW, import("./screensAndNavModels").Screen.QUESTIONS_RANDOM, import("./screensAndNavModels").Screen.QUESTIONS_UPDATED, import("./screensAndNavModels").Screen.QUESTIONS_CONSENSUS, import("./screensAndNavModels").Screen.INFO]>, "many">>;
            enableAddEvaluationOption: z.ZodOptional<z.ZodBoolean>;
            enableAddVotingOption: z.ZodOptional<z.ZodBoolean>;
            enhancedEvaluation: z.ZodOptional<z.ZodBoolean>;
            showEvaluation: z.ZodOptional<z.ZodBoolean>;
            inVotingGetOnlyResults: z.ZodOptional<z.ZodBoolean>;
            enableSimilaritiesSearch: z.ZodOptional<z.ZodBoolean>;
            enableNotifications: z.ZodOptional<z.ZodBoolean>;
            show: z.ZodOptional<z.ZodBoolean>;
        }, "strip", z.ZodTypeAny, {
            subScreens?: import("./screensAndNavModels").Screen[] | undefined;
            enableAddEvaluationOption?: boolean | undefined;
            enableAddVotingOption?: boolean | undefined;
            enhancedEvaluation?: boolean | undefined;
            showEvaluation?: boolean | undefined;
            inVotingGetOnlyResults?: boolean | undefined;
            enableSimilaritiesSearch?: boolean | undefined;
            enableNotifications?: boolean | undefined;
            show?: boolean | undefined;
        }, {
            subScreens?: import("./screensAndNavModels").Screen[] | undefined;
            enableAddEvaluationOption?: boolean | undefined;
            enableAddVotingOption?: boolean | undefined;
            enhancedEvaluation?: boolean | undefined;
            showEvaluation?: boolean | undefined;
            inVotingGetOnlyResults?: boolean | undefined;
            enableSimilaritiesSearch?: boolean | undefined;
            enableNotifications?: boolean | undefined;
            show?: boolean | undefined;
        }>>;
        membership: z.ZodOptional<z.ZodObject<{
            adminApproveMembers: z.ZodOptional<z.ZodBoolean>;
            access: z.ZodOptional<z.ZodEnum<[import("./statementsModels").Access.open, import("./statementsModels").Access.close]>>;
            typeOfMembersAllowed: z.ZodOptional<z.ZodEnum<[import("./statementsModels").membersAllowed.all, import("./statementsModels").membersAllowed.nonAnonymous]>>;
        }, "strip", z.ZodTypeAny, {
            adminApproveMembers?: boolean | undefined;
            access?: import("./statementsModels").Access | undefined;
            typeOfMembersAllowed?: import("./statementsModels").membersAllowed | undefined;
        }, {
            adminApproveMembers?: boolean | undefined;
            access?: import("./statementsModels").Access | undefined;
            typeOfMembersAllowed?: import("./statementsModels").membersAllowed | undefined;
        }>>;
        maxConsensus: z.ZodOptional<z.ZodNumber>;
        statementType: z.ZodOptional<z.ZodEnum<[import("./statementsModels").StatementType.statement, import("./statementsModels").StatementType.option, import("./statementsModels").StatementType.question, import("./statementsModels").StatementType.result, import("./statementsModels").StatementType.selection, import("./statementsModels").StatementType.document]>>;
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
                role?: string | undefined;
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
                role?: string | undefined;
            };
            consensus: number;
            voted?: number | undefined;
        }>, "many">>;
        roomSize: z.ZodOptional<z.ZodNumber>;
        roomsSettings: z.ZodOptional<z.ZodObject<{
            roomSize: z.ZodOptional<z.ZodNumber>;
            roomsState: z.ZodOptional<z.ZodEnum<[RoomsStateSelection.chooseRoom, RoomsStateSelection.inRoom]>>;
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
        totalEvaluators: z.ZodOptional<z.ZodNumber>;
        questionSettings: z.ZodOptional<z.ZodObject<{
            questionType: z.ZodEnum<[import("./statementsModels").QuestionType.singleStep, import("./statementsModels").QuestionType.multipleSteps]>;
            currentStage: z.ZodEnum<[import("./statementsModels").QuestionStage.explanation, import("./statementsModels").QuestionStage.suggestion, import("./statementsModels").QuestionStage.firstEvaluation, import("./statementsModels").QuestionStage.secondEvaluation, import("./statementsModels").QuestionStage.voting, import("./statementsModels").QuestionStage.finished]>;
        }, "strip", z.ZodTypeAny, {
            questionType: import("./statementsModels").QuestionType;
            currentStage: import("./statementsModels").QuestionStage;
        }, {
            questionType: import("./statementsModels").QuestionType;
            currentStage: import("./statementsModels").QuestionStage;
        }>>;
        isPartOfTempPresentation: z.ZodOptional<z.ZodBoolean>;
        documentSettings: z.ZodOptional<z.ZodObject<{
            parentDocumentId: z.ZodString;
            order: z.ZodNumber;
            type: z.ZodEnum<[import("./statementsModels").DocumentType.paragraph, import("./statementsModels").DocumentType.section, import("./statementsModels").DocumentType.comment]>;
            isTop: z.ZodBoolean;
        }, "strip", z.ZodTypeAny, {
            type: import("./statementsModels").DocumentType;
            order: number;
            parentDocumentId: string;
            isTop: boolean;
        }, {
            type: import("./statementsModels").DocumentType;
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
            role?: string | undefined;
        };
        topParentId: string;
        lastUpdate: number;
        createdAt: number;
        consensus: number;
        allowAnonymousLogin?: boolean | undefined;
        color?: string | undefined;
        defaultLanguage?: string | undefined;
        followMe?: string | undefined;
        parents?: string[] | undefined;
        hasChildren?: boolean | undefined;
        lastMessage?: string | undefined;
        lastChildUpdate?: number | undefined;
        pro?: number | undefined;
        con?: number | undefined;
        doc?: {
            order: number;
            isDoc: boolean;
        } | undefined;
        evaluation?: {
            agreement: number;
            sumEvaluations: number;
            numberOfEvaluators: number;
            sumPro?: number | undefined;
            sumCon?: number | undefined;
        } | undefined;
        order?: number | undefined;
        elementHight?: number | undefined;
        votes?: number | undefined;
        selections?: any;
        isSelected?: boolean | undefined;
        importanceData?: {
            sumImportance: number;
            numberOfUsers: number;
        } | undefined;
        voted?: number | undefined;
        totalSubStatements?: number | undefined;
        subScreens?: import("./screensAndNavModels").Screen[] | undefined;
        roomsState?: RoomsStateSelection | undefined;
        statementSettings?: {
            subScreens?: import("./screensAndNavModels").Screen[] | undefined;
            enableAddEvaluationOption?: boolean | undefined;
            enableAddVotingOption?: boolean | undefined;
            enhancedEvaluation?: boolean | undefined;
            showEvaluation?: boolean | undefined;
            inVotingGetOnlyResults?: boolean | undefined;
            enableSimilaritiesSearch?: boolean | undefined;
            enableNotifications?: boolean | undefined;
            show?: boolean | undefined;
        } | undefined;
        membership?: {
            adminApproveMembers?: boolean | undefined;
            access?: import("./statementsModels").Access | undefined;
            typeOfMembersAllowed?: import("./statementsModels").membersAllowed | undefined;
        } | undefined;
        maxConsensus?: number | undefined;
        statementType?: import("./statementsModels").StatementType | undefined;
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
                role?: string | undefined;
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
        totalEvaluators?: number | undefined;
        questionSettings?: {
            questionType: import("./statementsModels").QuestionType;
            currentStage: import("./statementsModels").QuestionStage;
        } | undefined;
        isPartOfTempPresentation?: boolean | undefined;
        documentSettings?: {
            type: import("./statementsModels").DocumentType;
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
            role?: string | undefined;
        };
        topParentId: string;
        lastUpdate: number;
        createdAt: number;
        consensus: number;
        allowAnonymousLogin?: boolean | undefined;
        color?: string | undefined;
        defaultLanguage?: string | undefined;
        followMe?: string | undefined;
        parents?: string[] | undefined;
        hasChildren?: boolean | undefined;
        lastMessage?: string | undefined;
        lastChildUpdate?: number | undefined;
        pro?: number | undefined;
        con?: number | undefined;
        doc?: {
            order: number;
            isDoc: boolean;
        } | undefined;
        evaluation?: {
            agreement: number;
            sumEvaluations: number;
            numberOfEvaluators: number;
            sumPro?: number | undefined;
            sumCon?: number | undefined;
        } | undefined;
        order?: number | undefined;
        elementHight?: number | undefined;
        votes?: number | undefined;
        selections?: any;
        isSelected?: boolean | undefined;
        importanceData?: {
            sumImportance: number;
            numberOfUsers: number;
        } | undefined;
        voted?: number | undefined;
        totalSubStatements?: number | undefined;
        subScreens?: import("./screensAndNavModels").Screen[] | undefined;
        roomsState?: RoomsStateSelection | undefined;
        statementSettings?: {
            subScreens?: import("./screensAndNavModels").Screen[] | undefined;
            enableAddEvaluationOption?: boolean | undefined;
            enableAddVotingOption?: boolean | undefined;
            enhancedEvaluation?: boolean | undefined;
            showEvaluation?: boolean | undefined;
            inVotingGetOnlyResults?: boolean | undefined;
            enableSimilaritiesSearch?: boolean | undefined;
            enableNotifications?: boolean | undefined;
            show?: boolean | undefined;
        } | undefined;
        membership?: {
            adminApproveMembers?: boolean | undefined;
            access?: import("./statementsModels").Access | undefined;
            typeOfMembersAllowed?: import("./statementsModels").membersAllowed | undefined;
        } | undefined;
        maxConsensus?: number | undefined;
        statementType?: import("./statementsModels").StatementType | undefined;
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
                role?: string | undefined;
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
        totalEvaluators?: number | undefined;
        questionSettings?: {
            questionType: import("./statementsModels").QuestionType;
            currentStage: import("./statementsModels").QuestionStage;
        } | undefined;
        isPartOfTempPresentation?: boolean | undefined;
        documentSettings?: {
            type: import("./statementsModels").DocumentType;
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
    }>;
    participants: z.ZodArray<z.ZodObject<{
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
        statement: z.ZodUnion<[z.ZodObject<{
            allowAnonymousLogin: z.ZodOptional<z.ZodBoolean>;
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
                order: number;
                isDoc: boolean;
            }, {
                order: number;
                isDoc: boolean;
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
            votes: z.ZodOptional<z.ZodNumber>;
            selections: z.ZodOptional<z.ZodAny>;
            isSelected: z.ZodOptional<z.ZodBoolean>;
            importanceData: z.ZodOptional<z.ZodObject<{
                sumImportance: z.ZodNumber;
                numberOfUsers: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                sumImportance: number;
                numberOfUsers: number;
            }, {
                sumImportance: number;
                numberOfUsers: number;
            }>>;
            voted: z.ZodOptional<z.ZodNumber>;
            totalSubStatements: z.ZodOptional<z.ZodNumber>;
            subScreens: z.ZodOptional<z.ZodArray<z.ZodEnum<[import("./screensAndNavModels").Screen.DOC, import("./screensAndNavModels").Screen.HOME, import("./screensAndNavModels").Screen.STATEMENT, import("./screensAndNavModels").Screen.CHAT, import("./screensAndNavModels").Screen.OPTIONS, import("./screensAndNavModels").Screen.VOTE, import("./screensAndNavModels").Screen.GROUPS, import("./screensAndNavModels").Screen.SETTINGS, import("./screensAndNavModels").Screen.MASS_QUESTIONS, import("./screensAndNavModels").Screen.QUESTIONS_MASS, import("./screensAndNavModels").Screen.OPTIONS_CONSENSUS, import("./screensAndNavModels").Screen.OPTIONS_NEW, import("./screensAndNavModels").Screen.OPTIONS_RANDOM, import("./screensAndNavModels").Screen.OPTIONS_UPDATED, import("./screensAndNavModels").Screen.VOTES_CONSENSUS, import("./screensAndNavModels").Screen.VOTESֹֹֹ_VOTED, import("./screensAndNavModels").Screen.VOTES_NEW, import("./screensAndNavModels").Screen.VOTES_RANDOM, import("./screensAndNavModels").Screen.VOTES_UPDATED, import("./screensAndNavModels").Screen.ADMIN_CHOOSE, import("./screensAndNavModels").Screen.ADMIN_DIVIDE, import("./screensAndNavModels").Screen.QUESTIONS, import("./screensAndNavModels").Screen.QUESTIONS_NEW, import("./screensAndNavModels").Screen.QUESTIONS_RANDOM, import("./screensAndNavModels").Screen.QUESTIONS_UPDATED, import("./screensAndNavModels").Screen.QUESTIONS_CONSENSUS, import("./screensAndNavModels").Screen.INFO]>, "many">>;
            roomsState: z.ZodOptional<z.ZodEnum<[RoomsStateSelection.chooseRoom, RoomsStateSelection.inRoom]>>;
            statementSettings: z.ZodOptional<z.ZodObject<{
                subScreens: z.ZodOptional<z.ZodArray<z.ZodEnum<[import("./screensAndNavModels").Screen.DOC, import("./screensAndNavModels").Screen.HOME, import("./screensAndNavModels").Screen.STATEMENT, import("./screensAndNavModels").Screen.CHAT, import("./screensAndNavModels").Screen.OPTIONS, import("./screensAndNavModels").Screen.VOTE, import("./screensAndNavModels").Screen.GROUPS, import("./screensAndNavModels").Screen.SETTINGS, import("./screensAndNavModels").Screen.MASS_QUESTIONS, import("./screensAndNavModels").Screen.QUESTIONS_MASS, import("./screensAndNavModels").Screen.OPTIONS_CONSENSUS, import("./screensAndNavModels").Screen.OPTIONS_NEW, import("./screensAndNavModels").Screen.OPTIONS_RANDOM, import("./screensAndNavModels").Screen.OPTIONS_UPDATED, import("./screensAndNavModels").Screen.VOTES_CONSENSUS, import("./screensAndNavModels").Screen.VOTESֹֹֹ_VOTED, import("./screensAndNavModels").Screen.VOTES_NEW, import("./screensAndNavModels").Screen.VOTES_RANDOM, import("./screensAndNavModels").Screen.VOTES_UPDATED, import("./screensAndNavModels").Screen.ADMIN_CHOOSE, import("./screensAndNavModels").Screen.ADMIN_DIVIDE, import("./screensAndNavModels").Screen.QUESTIONS, import("./screensAndNavModels").Screen.QUESTIONS_NEW, import("./screensAndNavModels").Screen.QUESTIONS_RANDOM, import("./screensAndNavModels").Screen.QUESTIONS_UPDATED, import("./screensAndNavModels").Screen.QUESTIONS_CONSENSUS, import("./screensAndNavModels").Screen.INFO]>, "many">>;
                enableAddEvaluationOption: z.ZodOptional<z.ZodBoolean>;
                enableAddVotingOption: z.ZodOptional<z.ZodBoolean>;
                enhancedEvaluation: z.ZodOptional<z.ZodBoolean>;
                showEvaluation: z.ZodOptional<z.ZodBoolean>;
                inVotingGetOnlyResults: z.ZodOptional<z.ZodBoolean>;
                enableSimilaritiesSearch: z.ZodOptional<z.ZodBoolean>;
                enableNotifications: z.ZodOptional<z.ZodBoolean>;
                show: z.ZodOptional<z.ZodBoolean>;
            }, "strip", z.ZodTypeAny, {
                subScreens?: import("./screensAndNavModels").Screen[] | undefined;
                enableAddEvaluationOption?: boolean | undefined;
                enableAddVotingOption?: boolean | undefined;
                enhancedEvaluation?: boolean | undefined;
                showEvaluation?: boolean | undefined;
                inVotingGetOnlyResults?: boolean | undefined;
                enableSimilaritiesSearch?: boolean | undefined;
                enableNotifications?: boolean | undefined;
                show?: boolean | undefined;
            }, {
                subScreens?: import("./screensAndNavModels").Screen[] | undefined;
                enableAddEvaluationOption?: boolean | undefined;
                enableAddVotingOption?: boolean | undefined;
                enhancedEvaluation?: boolean | undefined;
                showEvaluation?: boolean | undefined;
                inVotingGetOnlyResults?: boolean | undefined;
                enableSimilaritiesSearch?: boolean | undefined;
                enableNotifications?: boolean | undefined;
                show?: boolean | undefined;
            }>>;
            membership: z.ZodOptional<z.ZodObject<{
                adminApproveMembers: z.ZodOptional<z.ZodBoolean>;
                access: z.ZodOptional<z.ZodEnum<[import("./statementsModels").Access.open, import("./statementsModels").Access.close]>>;
                typeOfMembersAllowed: z.ZodOptional<z.ZodEnum<[import("./statementsModels").membersAllowed.all, import("./statementsModels").membersAllowed.nonAnonymous]>>;
            }, "strip", z.ZodTypeAny, {
                adminApproveMembers?: boolean | undefined;
                access?: import("./statementsModels").Access | undefined;
                typeOfMembersAllowed?: import("./statementsModels").membersAllowed | undefined;
            }, {
                adminApproveMembers?: boolean | undefined;
                access?: import("./statementsModels").Access | undefined;
                typeOfMembersAllowed?: import("./statementsModels").membersAllowed | undefined;
            }>>;
            maxConsensus: z.ZodOptional<z.ZodNumber>;
            statementType: z.ZodOptional<z.ZodEnum<[import("./statementsModels").StatementType.statement, import("./statementsModels").StatementType.option, import("./statementsModels").StatementType.question, import("./statementsModels").StatementType.result, import("./statementsModels").StatementType.selection, import("./statementsModels").StatementType.document]>>;
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
                    role?: string | undefined;
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
                    role?: string | undefined;
                };
                consensus: number;
                voted?: number | undefined;
            }>, "many">>;
            roomSize: z.ZodOptional<z.ZodNumber>;
            roomsSettings: z.ZodOptional<z.ZodObject<{
                roomSize: z.ZodOptional<z.ZodNumber>;
                roomsState: z.ZodOptional<z.ZodEnum<[RoomsStateSelection.chooseRoom, RoomsStateSelection.inRoom]>>;
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
            totalEvaluators: z.ZodOptional<z.ZodNumber>;
            questionSettings: z.ZodOptional<z.ZodObject<{
                questionType: z.ZodEnum<[import("./statementsModels").QuestionType.singleStep, import("./statementsModels").QuestionType.multipleSteps]>;
                currentStage: z.ZodEnum<[import("./statementsModels").QuestionStage.explanation, import("./statementsModels").QuestionStage.suggestion, import("./statementsModels").QuestionStage.firstEvaluation, import("./statementsModels").QuestionStage.secondEvaluation, import("./statementsModels").QuestionStage.voting, import("./statementsModels").QuestionStage.finished]>;
            }, "strip", z.ZodTypeAny, {
                questionType: import("./statementsModels").QuestionType;
                currentStage: import("./statementsModels").QuestionStage;
            }, {
                questionType: import("./statementsModels").QuestionType;
                currentStage: import("./statementsModels").QuestionStage;
            }>>;
            isPartOfTempPresentation: z.ZodOptional<z.ZodBoolean>;
            documentSettings: z.ZodOptional<z.ZodObject<{
                parentDocumentId: z.ZodString;
                order: z.ZodNumber;
                type: z.ZodEnum<[import("./statementsModels").DocumentType.paragraph, import("./statementsModels").DocumentType.section, import("./statementsModels").DocumentType.comment]>;
                isTop: z.ZodBoolean;
            }, "strip", z.ZodTypeAny, {
                type: import("./statementsModels").DocumentType;
                order: number;
                parentDocumentId: string;
                isTop: boolean;
            }, {
                type: import("./statementsModels").DocumentType;
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
                role?: string | undefined;
            };
            topParentId: string;
            lastUpdate: number;
            createdAt: number;
            consensus: number;
            allowAnonymousLogin?: boolean | undefined;
            color?: string | undefined;
            defaultLanguage?: string | undefined;
            followMe?: string | undefined;
            parents?: string[] | undefined;
            hasChildren?: boolean | undefined;
            lastMessage?: string | undefined;
            lastChildUpdate?: number | undefined;
            pro?: number | undefined;
            con?: number | undefined;
            doc?: {
                order: number;
                isDoc: boolean;
            } | undefined;
            evaluation?: {
                agreement: number;
                sumEvaluations: number;
                numberOfEvaluators: number;
                sumPro?: number | undefined;
                sumCon?: number | undefined;
            } | undefined;
            order?: number | undefined;
            elementHight?: number | undefined;
            votes?: number | undefined;
            selections?: any;
            isSelected?: boolean | undefined;
            importanceData?: {
                sumImportance: number;
                numberOfUsers: number;
            } | undefined;
            voted?: number | undefined;
            totalSubStatements?: number | undefined;
            subScreens?: import("./screensAndNavModels").Screen[] | undefined;
            roomsState?: RoomsStateSelection | undefined;
            statementSettings?: {
                subScreens?: import("./screensAndNavModels").Screen[] | undefined;
                enableAddEvaluationOption?: boolean | undefined;
                enableAddVotingOption?: boolean | undefined;
                enhancedEvaluation?: boolean | undefined;
                showEvaluation?: boolean | undefined;
                inVotingGetOnlyResults?: boolean | undefined;
                enableSimilaritiesSearch?: boolean | undefined;
                enableNotifications?: boolean | undefined;
                show?: boolean | undefined;
            } | undefined;
            membership?: {
                adminApproveMembers?: boolean | undefined;
                access?: import("./statementsModels").Access | undefined;
                typeOfMembersAllowed?: import("./statementsModels").membersAllowed | undefined;
            } | undefined;
            maxConsensus?: number | undefined;
            statementType?: import("./statementsModels").StatementType | undefined;
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
                    role?: string | undefined;
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
            totalEvaluators?: number | undefined;
            questionSettings?: {
                questionType: import("./statementsModels").QuestionType;
                currentStage: import("./statementsModels").QuestionStage;
            } | undefined;
            isPartOfTempPresentation?: boolean | undefined;
            documentSettings?: {
                type: import("./statementsModels").DocumentType;
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
                role?: string | undefined;
            };
            topParentId: string;
            lastUpdate: number;
            createdAt: number;
            consensus: number;
            allowAnonymousLogin?: boolean | undefined;
            color?: string | undefined;
            defaultLanguage?: string | undefined;
            followMe?: string | undefined;
            parents?: string[] | undefined;
            hasChildren?: boolean | undefined;
            lastMessage?: string | undefined;
            lastChildUpdate?: number | undefined;
            pro?: number | undefined;
            con?: number | undefined;
            doc?: {
                order: number;
                isDoc: boolean;
            } | undefined;
            evaluation?: {
                agreement: number;
                sumEvaluations: number;
                numberOfEvaluators: number;
                sumPro?: number | undefined;
                sumCon?: number | undefined;
            } | undefined;
            order?: number | undefined;
            elementHight?: number | undefined;
            votes?: number | undefined;
            selections?: any;
            isSelected?: boolean | undefined;
            importanceData?: {
                sumImportance: number;
                numberOfUsers: number;
            } | undefined;
            voted?: number | undefined;
            totalSubStatements?: number | undefined;
            subScreens?: import("./screensAndNavModels").Screen[] | undefined;
            roomsState?: RoomsStateSelection | undefined;
            statementSettings?: {
                subScreens?: import("./screensAndNavModels").Screen[] | undefined;
                enableAddEvaluationOption?: boolean | undefined;
                enableAddVotingOption?: boolean | undefined;
                enhancedEvaluation?: boolean | undefined;
                showEvaluation?: boolean | undefined;
                inVotingGetOnlyResults?: boolean | undefined;
                enableSimilaritiesSearch?: boolean | undefined;
                enableNotifications?: boolean | undefined;
                show?: boolean | undefined;
            } | undefined;
            membership?: {
                adminApproveMembers?: boolean | undefined;
                access?: import("./statementsModels").Access | undefined;
                typeOfMembersAllowed?: import("./statementsModels").membersAllowed | undefined;
            } | undefined;
            maxConsensus?: number | undefined;
            statementType?: import("./statementsModels").StatementType | undefined;
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
                    role?: string | undefined;
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
            totalEvaluators?: number | undefined;
            questionSettings?: {
                questionType: import("./statementsModels").QuestionType;
                currentStage: import("./statementsModels").QuestionStage;
            } | undefined;
            isPartOfTempPresentation?: boolean | undefined;
            documentSettings?: {
                type: import("./statementsModels").DocumentType;
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
        }>, z.ZodUndefined]>;
        requestId: z.ZodString;
        statementId: z.ZodOptional<z.ZodString>;
        parentId: z.ZodString;
        roomNumber: z.ZodOptional<z.ZodNumber>;
        approved: z.ZodOptional<z.ZodBoolean>;
        lastUpdate: z.ZodOptional<z.ZodNumber>;
        paradigmAxes: z.ZodOptional<z.ZodArray<z.ZodOptional<z.ZodObject<{
            paradigmAxis: z.ZodString;
            value: z.ZodOptional<z.ZodNumber>;
        }, "strip", z.ZodTypeAny, {
            paradigmAxis: string;
            value?: number | undefined;
        }, {
            paradigmAxis: string;
            value?: number | undefined;
        }>>, "many">>;
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
            role?: string | undefined;
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
                role?: string | undefined;
            };
            topParentId: string;
            lastUpdate: number;
            createdAt: number;
            consensus: number;
            allowAnonymousLogin?: boolean | undefined;
            color?: string | undefined;
            defaultLanguage?: string | undefined;
            followMe?: string | undefined;
            parents?: string[] | undefined;
            hasChildren?: boolean | undefined;
            lastMessage?: string | undefined;
            lastChildUpdate?: number | undefined;
            pro?: number | undefined;
            con?: number | undefined;
            doc?: {
                order: number;
                isDoc: boolean;
            } | undefined;
            evaluation?: {
                agreement: number;
                sumEvaluations: number;
                numberOfEvaluators: number;
                sumPro?: number | undefined;
                sumCon?: number | undefined;
            } | undefined;
            order?: number | undefined;
            elementHight?: number | undefined;
            votes?: number | undefined;
            selections?: any;
            isSelected?: boolean | undefined;
            importanceData?: {
                sumImportance: number;
                numberOfUsers: number;
            } | undefined;
            voted?: number | undefined;
            totalSubStatements?: number | undefined;
            subScreens?: import("./screensAndNavModels").Screen[] | undefined;
            roomsState?: RoomsStateSelection | undefined;
            statementSettings?: {
                subScreens?: import("./screensAndNavModels").Screen[] | undefined;
                enableAddEvaluationOption?: boolean | undefined;
                enableAddVotingOption?: boolean | undefined;
                enhancedEvaluation?: boolean | undefined;
                showEvaluation?: boolean | undefined;
                inVotingGetOnlyResults?: boolean | undefined;
                enableSimilaritiesSearch?: boolean | undefined;
                enableNotifications?: boolean | undefined;
                show?: boolean | undefined;
            } | undefined;
            membership?: {
                adminApproveMembers?: boolean | undefined;
                access?: import("./statementsModels").Access | undefined;
                typeOfMembersAllowed?: import("./statementsModels").membersAllowed | undefined;
            } | undefined;
            maxConsensus?: number | undefined;
            statementType?: import("./statementsModels").StatementType | undefined;
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
                    role?: string | undefined;
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
            totalEvaluators?: number | undefined;
            questionSettings?: {
                questionType: import("./statementsModels").QuestionType;
                currentStage: import("./statementsModels").QuestionStage;
            } | undefined;
            isPartOfTempPresentation?: boolean | undefined;
            documentSettings?: {
                type: import("./statementsModels").DocumentType;
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
        } | undefined;
        statementId?: string | undefined;
        roomNumber?: number | undefined;
        approved?: boolean | undefined;
        lastUpdate?: number | undefined;
        paradigmAxes?: ({
            paradigmAxis: string;
            value?: number | undefined;
        } | undefined)[] | undefined;
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
            role?: string | undefined;
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
                role?: string | undefined;
            };
            topParentId: string;
            lastUpdate: number;
            createdAt: number;
            consensus: number;
            allowAnonymousLogin?: boolean | undefined;
            color?: string | undefined;
            defaultLanguage?: string | undefined;
            followMe?: string | undefined;
            parents?: string[] | undefined;
            hasChildren?: boolean | undefined;
            lastMessage?: string | undefined;
            lastChildUpdate?: number | undefined;
            pro?: number | undefined;
            con?: number | undefined;
            doc?: {
                order: number;
                isDoc: boolean;
            } | undefined;
            evaluation?: {
                agreement: number;
                sumEvaluations: number;
                numberOfEvaluators: number;
                sumPro?: number | undefined;
                sumCon?: number | undefined;
            } | undefined;
            order?: number | undefined;
            elementHight?: number | undefined;
            votes?: number | undefined;
            selections?: any;
            isSelected?: boolean | undefined;
            importanceData?: {
                sumImportance: number;
                numberOfUsers: number;
            } | undefined;
            voted?: number | undefined;
            totalSubStatements?: number | undefined;
            subScreens?: import("./screensAndNavModels").Screen[] | undefined;
            roomsState?: RoomsStateSelection | undefined;
            statementSettings?: {
                subScreens?: import("./screensAndNavModels").Screen[] | undefined;
                enableAddEvaluationOption?: boolean | undefined;
                enableAddVotingOption?: boolean | undefined;
                enhancedEvaluation?: boolean | undefined;
                showEvaluation?: boolean | undefined;
                inVotingGetOnlyResults?: boolean | undefined;
                enableSimilaritiesSearch?: boolean | undefined;
                enableNotifications?: boolean | undefined;
                show?: boolean | undefined;
            } | undefined;
            membership?: {
                adminApproveMembers?: boolean | undefined;
                access?: import("./statementsModels").Access | undefined;
                typeOfMembersAllowed?: import("./statementsModels").membersAllowed | undefined;
            } | undefined;
            maxConsensus?: number | undefined;
            statementType?: import("./statementsModels").StatementType | undefined;
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
                    role?: string | undefined;
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
            totalEvaluators?: number | undefined;
            questionSettings?: {
                questionType: import("./statementsModels").QuestionType;
                currentStage: import("./statementsModels").QuestionStage;
            } | undefined;
            isPartOfTempPresentation?: boolean | undefined;
            documentSettings?: {
                type: import("./statementsModels").DocumentType;
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
        } | undefined;
        statementId?: string | undefined;
        roomNumber?: number | undefined;
        approved?: boolean | undefined;
        lastUpdate?: number | undefined;
        paradigmAxes?: ({
            paradigmAxis: string;
            value?: number | undefined;
        } | undefined)[] | undefined;
    }>, "many">;
}, "strip", z.ZodTypeAny, {
    statement: {
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
            role?: string | undefined;
        };
        topParentId: string;
        lastUpdate: number;
        createdAt: number;
        consensus: number;
        allowAnonymousLogin?: boolean | undefined;
        color?: string | undefined;
        defaultLanguage?: string | undefined;
        followMe?: string | undefined;
        parents?: string[] | undefined;
        hasChildren?: boolean | undefined;
        lastMessage?: string | undefined;
        lastChildUpdate?: number | undefined;
        pro?: number | undefined;
        con?: number | undefined;
        doc?: {
            order: number;
            isDoc: boolean;
        } | undefined;
        evaluation?: {
            agreement: number;
            sumEvaluations: number;
            numberOfEvaluators: number;
            sumPro?: number | undefined;
            sumCon?: number | undefined;
        } | undefined;
        order?: number | undefined;
        elementHight?: number | undefined;
        votes?: number | undefined;
        selections?: any;
        isSelected?: boolean | undefined;
        importanceData?: {
            sumImportance: number;
            numberOfUsers: number;
        } | undefined;
        voted?: number | undefined;
        totalSubStatements?: number | undefined;
        subScreens?: import("./screensAndNavModels").Screen[] | undefined;
        roomsState?: RoomsStateSelection | undefined;
        statementSettings?: {
            subScreens?: import("./screensAndNavModels").Screen[] | undefined;
            enableAddEvaluationOption?: boolean | undefined;
            enableAddVotingOption?: boolean | undefined;
            enhancedEvaluation?: boolean | undefined;
            showEvaluation?: boolean | undefined;
            inVotingGetOnlyResults?: boolean | undefined;
            enableSimilaritiesSearch?: boolean | undefined;
            enableNotifications?: boolean | undefined;
            show?: boolean | undefined;
        } | undefined;
        membership?: {
            adminApproveMembers?: boolean | undefined;
            access?: import("./statementsModels").Access | undefined;
            typeOfMembersAllowed?: import("./statementsModels").membersAllowed | undefined;
        } | undefined;
        maxConsensus?: number | undefined;
        statementType?: import("./statementsModels").StatementType | undefined;
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
                role?: string | undefined;
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
        totalEvaluators?: number | undefined;
        questionSettings?: {
            questionType: import("./statementsModels").QuestionType;
            currentStage: import("./statementsModels").QuestionStage;
        } | undefined;
        isPartOfTempPresentation?: boolean | undefined;
        documentSettings?: {
            type: import("./statementsModels").DocumentType;
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
    };
    participants: {
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
            role?: string | undefined;
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
                role?: string | undefined;
            };
            topParentId: string;
            lastUpdate: number;
            createdAt: number;
            consensus: number;
            allowAnonymousLogin?: boolean | undefined;
            color?: string | undefined;
            defaultLanguage?: string | undefined;
            followMe?: string | undefined;
            parents?: string[] | undefined;
            hasChildren?: boolean | undefined;
            lastMessage?: string | undefined;
            lastChildUpdate?: number | undefined;
            pro?: number | undefined;
            con?: number | undefined;
            doc?: {
                order: number;
                isDoc: boolean;
            } | undefined;
            evaluation?: {
                agreement: number;
                sumEvaluations: number;
                numberOfEvaluators: number;
                sumPro?: number | undefined;
                sumCon?: number | undefined;
            } | undefined;
            order?: number | undefined;
            elementHight?: number | undefined;
            votes?: number | undefined;
            selections?: any;
            isSelected?: boolean | undefined;
            importanceData?: {
                sumImportance: number;
                numberOfUsers: number;
            } | undefined;
            voted?: number | undefined;
            totalSubStatements?: number | undefined;
            subScreens?: import("./screensAndNavModels").Screen[] | undefined;
            roomsState?: RoomsStateSelection | undefined;
            statementSettings?: {
                subScreens?: import("./screensAndNavModels").Screen[] | undefined;
                enableAddEvaluationOption?: boolean | undefined;
                enableAddVotingOption?: boolean | undefined;
                enhancedEvaluation?: boolean | undefined;
                showEvaluation?: boolean | undefined;
                inVotingGetOnlyResults?: boolean | undefined;
                enableSimilaritiesSearch?: boolean | undefined;
                enableNotifications?: boolean | undefined;
                show?: boolean | undefined;
            } | undefined;
            membership?: {
                adminApproveMembers?: boolean | undefined;
                access?: import("./statementsModels").Access | undefined;
                typeOfMembersAllowed?: import("./statementsModels").membersAllowed | undefined;
            } | undefined;
            maxConsensus?: number | undefined;
            statementType?: import("./statementsModels").StatementType | undefined;
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
                    role?: string | undefined;
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
            totalEvaluators?: number | undefined;
            questionSettings?: {
                questionType: import("./statementsModels").QuestionType;
                currentStage: import("./statementsModels").QuestionStage;
            } | undefined;
            isPartOfTempPresentation?: boolean | undefined;
            documentSettings?: {
                type: import("./statementsModels").DocumentType;
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
        } | undefined;
        statementId?: string | undefined;
        roomNumber?: number | undefined;
        approved?: boolean | undefined;
        lastUpdate?: number | undefined;
        paradigmAxes?: ({
            paradigmAxis: string;
            value?: number | undefined;
        } | undefined)[] | undefined;
    }[];
    roomNumber: number;
}, {
    statement: {
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
            role?: string | undefined;
        };
        topParentId: string;
        lastUpdate: number;
        createdAt: number;
        consensus: number;
        allowAnonymousLogin?: boolean | undefined;
        color?: string | undefined;
        defaultLanguage?: string | undefined;
        followMe?: string | undefined;
        parents?: string[] | undefined;
        hasChildren?: boolean | undefined;
        lastMessage?: string | undefined;
        lastChildUpdate?: number | undefined;
        pro?: number | undefined;
        con?: number | undefined;
        doc?: {
            order: number;
            isDoc: boolean;
        } | undefined;
        evaluation?: {
            agreement: number;
            sumEvaluations: number;
            numberOfEvaluators: number;
            sumPro?: number | undefined;
            sumCon?: number | undefined;
        } | undefined;
        order?: number | undefined;
        elementHight?: number | undefined;
        votes?: number | undefined;
        selections?: any;
        isSelected?: boolean | undefined;
        importanceData?: {
            sumImportance: number;
            numberOfUsers: number;
        } | undefined;
        voted?: number | undefined;
        totalSubStatements?: number | undefined;
        subScreens?: import("./screensAndNavModels").Screen[] | undefined;
        roomsState?: RoomsStateSelection | undefined;
        statementSettings?: {
            subScreens?: import("./screensAndNavModels").Screen[] | undefined;
            enableAddEvaluationOption?: boolean | undefined;
            enableAddVotingOption?: boolean | undefined;
            enhancedEvaluation?: boolean | undefined;
            showEvaluation?: boolean | undefined;
            inVotingGetOnlyResults?: boolean | undefined;
            enableSimilaritiesSearch?: boolean | undefined;
            enableNotifications?: boolean | undefined;
            show?: boolean | undefined;
        } | undefined;
        membership?: {
            adminApproveMembers?: boolean | undefined;
            access?: import("./statementsModels").Access | undefined;
            typeOfMembersAllowed?: import("./statementsModels").membersAllowed | undefined;
        } | undefined;
        maxConsensus?: number | undefined;
        statementType?: import("./statementsModels").StatementType | undefined;
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
                role?: string | undefined;
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
        totalEvaluators?: number | undefined;
        questionSettings?: {
            questionType: import("./statementsModels").QuestionType;
            currentStage: import("./statementsModels").QuestionStage;
        } | undefined;
        isPartOfTempPresentation?: boolean | undefined;
        documentSettings?: {
            type: import("./statementsModels").DocumentType;
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
    };
    participants: {
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
            role?: string | undefined;
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
                role?: string | undefined;
            };
            topParentId: string;
            lastUpdate: number;
            createdAt: number;
            consensus: number;
            allowAnonymousLogin?: boolean | undefined;
            color?: string | undefined;
            defaultLanguage?: string | undefined;
            followMe?: string | undefined;
            parents?: string[] | undefined;
            hasChildren?: boolean | undefined;
            lastMessage?: string | undefined;
            lastChildUpdate?: number | undefined;
            pro?: number | undefined;
            con?: number | undefined;
            doc?: {
                order: number;
                isDoc: boolean;
            } | undefined;
            evaluation?: {
                agreement: number;
                sumEvaluations: number;
                numberOfEvaluators: number;
                sumPro?: number | undefined;
                sumCon?: number | undefined;
            } | undefined;
            order?: number | undefined;
            elementHight?: number | undefined;
            votes?: number | undefined;
            selections?: any;
            isSelected?: boolean | undefined;
            importanceData?: {
                sumImportance: number;
                numberOfUsers: number;
            } | undefined;
            voted?: number | undefined;
            totalSubStatements?: number | undefined;
            subScreens?: import("./screensAndNavModels").Screen[] | undefined;
            roomsState?: RoomsStateSelection | undefined;
            statementSettings?: {
                subScreens?: import("./screensAndNavModels").Screen[] | undefined;
                enableAddEvaluationOption?: boolean | undefined;
                enableAddVotingOption?: boolean | undefined;
                enhancedEvaluation?: boolean | undefined;
                showEvaluation?: boolean | undefined;
                inVotingGetOnlyResults?: boolean | undefined;
                enableSimilaritiesSearch?: boolean | undefined;
                enableNotifications?: boolean | undefined;
                show?: boolean | undefined;
            } | undefined;
            membership?: {
                adminApproveMembers?: boolean | undefined;
                access?: import("./statementsModels").Access | undefined;
                typeOfMembersAllowed?: import("./statementsModels").membersAllowed | undefined;
            } | undefined;
            maxConsensus?: number | undefined;
            statementType?: import("./statementsModels").StatementType | undefined;
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
                    role?: string | undefined;
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
            totalEvaluators?: number | undefined;
            questionSettings?: {
                questionType: import("./statementsModels").QuestionType;
                currentStage: import("./statementsModels").QuestionStage;
            } | undefined;
            isPartOfTempPresentation?: boolean | undefined;
            documentSettings?: {
                type: import("./statementsModels").DocumentType;
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
        } | undefined;
        statementId?: string | undefined;
        roomNumber?: number | undefined;
        approved?: boolean | undefined;
        lastUpdate?: number | undefined;
        paradigmAxes?: ({
            paradigmAxis: string;
            value?: number | undefined;
        } | undefined)[] | undefined;
    }[];
    roomNumber: number;
}>;
export type RoomDivied = z.infer<typeof RoomDiviedSchema>;
