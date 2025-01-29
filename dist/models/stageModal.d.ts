import { z } from 'zod';
import { Statement, StatementType } from './statementsModels';
export declare enum StageType {
    explanation = "explanation",
    questions = "questions",
    needs = "needs",
    suggestions = "suggestions",
    hypothesis = "hypothesis",
    voting = "voting",
    conclusion = "conclusion",
    summary = "summary",
    other = "other"
}
export declare const StageTypeSchema: z.ZodEnum<[StageType.explanation, StageType.questions, StageType.needs, StageType.suggestions, StageType.voting, StageType.summary, StageType.conclusion, StageType.hypothesis, StageType.other]>;
export declare class StageClass {
    private basicStagesTypes;
    createBasicStages(statement: Statement): {
        statement: string;
        statementId: string;
        creatorId: string;
        creator: {
            displayName: string;
            uid: string;
            color?: string | undefined;
            fontSize?: number | null | undefined;
            role?: string | undefined;
            email?: string | null | undefined;
            defaultLanguage?: string | undefined;
            photoURL?: string | null | undefined;
            isAnonymous?: boolean | undefined;
            agreement?: {
                text: string;
                date: number;
                version: string;
            } | null | undefined;
        };
        statementType: StatementType;
        parentId: string;
        topParentId: string;
        lastUpdate: number;
        createdAt: number;
        consensus: number;
        top?: number | undefined;
        color?: string | undefined;
        order?: number | undefined;
        summary?: string | undefined;
        description?: string | undefined;
        defaultLanguage?: string | undefined;
        evaluation?: {
            agreement: number;
            sumEvaluations: number;
            numberOfEvaluators: number;
            sumPro?: number | undefined;
            sumCon?: number | undefined;
        } | undefined;
        doc?: {
            order: number;
            isDoc: boolean;
        } | undefined;
        allowAnonymousLogin?: boolean | undefined;
        deliberativeElement?: import("./statementsModels").DeliberativeElement | undefined;
        followMe?: string | undefined;
        parents?: string[] | undefined;
        hasChildren?: boolean | undefined;
        lastMessage?: string | undefined;
        lastChildUpdate?: number | undefined;
        pro?: number | undefined;
        con?: number | undefined;
        elementHight?: number | undefined;
        votes?: number | undefined;
        selections?: any;
        isSelected?: boolean | undefined;
        voted?: number | undefined;
        totalSubStatements?: number | undefined;
        membership?: {
            adminApproveMembers?: boolean | undefined;
            access?: import("./statementsModels").Access | undefined;
            typeOfMembersAllowed?: import("./statementsModels").membersAllowed | undefined;
        } | undefined;
        maxConsensus?: number | undefined;
        selected?: boolean | undefined;
        results?: {
            statement: string;
            statementId: string;
            creatorId: string;
            creator: {
                displayName: string;
                uid: string;
                color?: string | undefined;
                fontSize?: number | null | undefined;
                role?: string | undefined;
                email?: string | null | undefined;
                defaultLanguage?: string | undefined;
                photoURL?: string | null | undefined;
                isAnonymous?: boolean | undefined;
                agreement?: {
                    text: string;
                    date: number;
                    version: string;
                } | null | undefined;
            };
            parentId: string;
            consensus: number;
            description?: string | undefined;
            voted?: number | undefined;
        }[] | undefined;
        isResult?: boolean | undefined;
        imagesURL?: {
            main?: string | undefined;
            more?: string[] | undefined;
        } | undefined;
        totalEvaluators?: number | undefined;
        isInMultiStage?: boolean | undefined;
        documentApproval?: {
            approved: number;
            totalVoters: number;
            averageApproval: number;
        } | undefined;
        documentImportance?: {
            numberOfUsers: number;
            averageImportance: number;
            sumImportance: number;
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
        stageType?: StageType | undefined;
        creatorData?: {
            userId: string;
            country?: string | undefined;
            email?: string | undefined;
            displayName?: string | undefined;
            city?: string | undefined;
            dateOfBirth?: number | undefined;
        } | undefined;
        isChosen?: boolean | undefined;
        chosenSolutions?: string[] | undefined;
        importanceData?: {
            numberOfUsers: number;
            sumImportance: number;
            numberOfViews: number;
        } | undefined;
        documentSettings?: {
            type: import("./statementsModels").DocumentType;
            order: number;
            parentDocumentId: string;
            isTop: boolean;
        } | undefined;
        resultsSettings?: {
            resultsBy: import("./resultsModel").ResultsBy;
            cutoffNumber?: number | undefined;
            numberOfResults?: number | undefined;
            numberOfSelections?: number | undefined;
            deep?: number | undefined;
            minConsensus?: number | undefined;
        } | undefined;
        steps?: {
            currentStep: {
                stepId: string;
                stepType: import("./statementsModels").StepType;
                endTime?: number | undefined;
                order?: number | undefined;
                duration?: number | undefined;
                instructions?: string | undefined;
            };
            allSteps?: {
                stepId: string;
                stepType: import("./statementsModels").StepType;
                endTime?: number | undefined;
                order?: number | undefined;
                duration?: number | undefined;
                instructions?: string | undefined;
            }[] | undefined;
        } | undefined;
        questionSettings?: {
            questionType?: import("./statementsModels").QuestionType | undefined;
            currentStage?: import("./statementsModels").QuestionStage | undefined;
        } | undefined;
        statementSettings?: {
            show?: boolean | undefined;
            hasChildren?: boolean | undefined;
            subScreens?: (import("./screensAndNavModels").Screen.DOC | import("./screensAndNavModels").Screen.HOME | import("./screensAndNavModels").Screen.STATEMENT | import("./screensAndNavModels").Screen.CHAT | import("./screensAndNavModels").Screen.OPTIONS | import("./screensAndNavModels").Screen.VOTE | import("./screensAndNavModels").Screen.GROUPS | import("./screensAndNavModels").Screen.SETTINGS | import("./screensAndNavModels").Screen.MASS_QUESTIONS | import("./screensAndNavModels").Screen.QUESTIONS_MASS | import("./screensAndNavModels").Screen.OPTIONS_CONSENSUS | import("./screensAndNavModels").Screen.OPTIONS_NEW | import("./screensAndNavModels").Screen.OPTIONS_RANDOM | import("./screensAndNavModels").Screen.OPTIONS_UPDATED | import("./screensAndNavModels").Screen.VOTES_CONSENSUS | import("./screensAndNavModels").Screen.VOTESֹֹֹ_VOTED | import("./screensAndNavModels").Screen.VOTES_NEW | import("./screensAndNavModels").Screen.VOTES_RANDOM | import("./screensAndNavModels").Screen.VOTES_UPDATED | import("./screensAndNavModels").Screen.ADMIN_CHOOSE | import("./screensAndNavModels").Screen.ADMIN_DIVIDE | import("./screensAndNavModels").Screen.QUESTIONS | import("./screensAndNavModels").Screen.QUESTIONS_NEW | import("./screensAndNavModels").Screen.QUESTIONS_RANDOM | import("./screensAndNavModels").Screen.QUESTIONS_UPDATED | import("./screensAndNavModels").Screen.QUESTIONS_CONSENSUS | import("./screensAndNavModels").Screen.INFO)[] | undefined;
            enableAddEvaluationOption?: boolean | undefined;
            enableAddVotingOption?: boolean | undefined;
            enhancedEvaluation?: boolean | undefined;
            showEvaluation?: boolean | undefined;
            inVotingGetOnlyResults?: boolean | undefined;
            enableSimilaritiesSearch?: boolean | undefined;
            enableNotifications?: boolean | undefined;
            enableNavigationalElements?: boolean | undefined;
            deliberationType?: import("./statementsModels").DeliberationType | undefined;
            hasChat?: boolean | undefined;
        } | undefined;
    }[];
    private createStage;
    convertToStageTitle(stageType: StageType | undefined): string;
    basicStages(statement: Statement): {
        statement: string;
        statementId: string;
        creatorId: string;
        creator: {
            displayName: string;
            uid: string;
            color?: string | undefined;
            fontSize?: number | null | undefined;
            role?: string | undefined;
            email?: string | null | undefined;
            defaultLanguage?: string | undefined;
            photoURL?: string | null | undefined;
            isAnonymous?: boolean | undefined;
            agreement?: {
                text: string;
                date: number;
                version: string;
            } | null | undefined;
        };
        statementType: StatementType;
        parentId: string;
        topParentId: string;
        lastUpdate: number;
        createdAt: number;
        consensus: number;
        top?: number | undefined;
        color?: string | undefined;
        order?: number | undefined;
        summary?: string | undefined;
        description?: string | undefined;
        defaultLanguage?: string | undefined;
        evaluation?: {
            agreement: number;
            sumEvaluations: number;
            numberOfEvaluators: number;
            sumPro?: number | undefined;
            sumCon?: number | undefined;
        } | undefined;
        doc?: {
            order: number;
            isDoc: boolean;
        } | undefined;
        allowAnonymousLogin?: boolean | undefined;
        deliberativeElement?: import("./statementsModels").DeliberativeElement | undefined;
        followMe?: string | undefined;
        parents?: string[] | undefined;
        hasChildren?: boolean | undefined;
        lastMessage?: string | undefined;
        lastChildUpdate?: number | undefined;
        pro?: number | undefined;
        con?: number | undefined;
        elementHight?: number | undefined;
        votes?: number | undefined;
        selections?: any;
        isSelected?: boolean | undefined;
        voted?: number | undefined;
        totalSubStatements?: number | undefined;
        membership?: {
            adminApproveMembers?: boolean | undefined;
            access?: import("./statementsModels").Access | undefined;
            typeOfMembersAllowed?: import("./statementsModels").membersAllowed | undefined;
        } | undefined;
        maxConsensus?: number | undefined;
        selected?: boolean | undefined;
        results?: {
            statement: string;
            statementId: string;
            creatorId: string;
            creator: {
                displayName: string;
                uid: string;
                color?: string | undefined;
                fontSize?: number | null | undefined;
                role?: string | undefined;
                email?: string | null | undefined;
                defaultLanguage?: string | undefined;
                photoURL?: string | null | undefined;
                isAnonymous?: boolean | undefined;
                agreement?: {
                    text: string;
                    date: number;
                    version: string;
                } | null | undefined;
            };
            parentId: string;
            consensus: number;
            description?: string | undefined;
            voted?: number | undefined;
        }[] | undefined;
        isResult?: boolean | undefined;
        imagesURL?: {
            main?: string | undefined;
            more?: string[] | undefined;
        } | undefined;
        totalEvaluators?: number | undefined;
        isInMultiStage?: boolean | undefined;
        documentApproval?: {
            approved: number;
            totalVoters: number;
            averageApproval: number;
        } | undefined;
        documentImportance?: {
            numberOfUsers: number;
            averageImportance: number;
            sumImportance: number;
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
        stageType?: StageType | undefined;
        creatorData?: {
            userId: string;
            country?: string | undefined;
            email?: string | undefined;
            displayName?: string | undefined;
            city?: string | undefined;
            dateOfBirth?: number | undefined;
        } | undefined;
        isChosen?: boolean | undefined;
        chosenSolutions?: string[] | undefined;
        importanceData?: {
            numberOfUsers: number;
            sumImportance: number;
            numberOfViews: number;
        } | undefined;
        documentSettings?: {
            type: import("./statementsModels").DocumentType;
            order: number;
            parentDocumentId: string;
            isTop: boolean;
        } | undefined;
        resultsSettings?: {
            resultsBy: import("./resultsModel").ResultsBy;
            cutoffNumber?: number | undefined;
            numberOfResults?: number | undefined;
            numberOfSelections?: number | undefined;
            deep?: number | undefined;
            minConsensus?: number | undefined;
        } | undefined;
        steps?: {
            currentStep: {
                stepId: string;
                stepType: import("./statementsModels").StepType;
                endTime?: number | undefined;
                order?: number | undefined;
                duration?: number | undefined;
                instructions?: string | undefined;
            };
            allSteps?: {
                stepId: string;
                stepType: import("./statementsModels").StepType;
                endTime?: number | undefined;
                order?: number | undefined;
                duration?: number | undefined;
                instructions?: string | undefined;
            }[] | undefined;
        } | undefined;
        questionSettings?: {
            questionType?: import("./statementsModels").QuestionType | undefined;
            currentStage?: import("./statementsModels").QuestionStage | undefined;
        } | undefined;
        statementSettings?: {
            show?: boolean | undefined;
            hasChildren?: boolean | undefined;
            subScreens?: (import("./screensAndNavModels").Screen.DOC | import("./screensAndNavModels").Screen.HOME | import("./screensAndNavModels").Screen.STATEMENT | import("./screensAndNavModels").Screen.CHAT | import("./screensAndNavModels").Screen.OPTIONS | import("./screensAndNavModels").Screen.VOTE | import("./screensAndNavModels").Screen.GROUPS | import("./screensAndNavModels").Screen.SETTINGS | import("./screensAndNavModels").Screen.MASS_QUESTIONS | import("./screensAndNavModels").Screen.QUESTIONS_MASS | import("./screensAndNavModels").Screen.OPTIONS_CONSENSUS | import("./screensAndNavModels").Screen.OPTIONS_NEW | import("./screensAndNavModels").Screen.OPTIONS_RANDOM | import("./screensAndNavModels").Screen.OPTIONS_UPDATED | import("./screensAndNavModels").Screen.VOTES_CONSENSUS | import("./screensAndNavModels").Screen.VOTESֹֹֹ_VOTED | import("./screensAndNavModels").Screen.VOTES_NEW | import("./screensAndNavModels").Screen.VOTES_RANDOM | import("./screensAndNavModels").Screen.VOTES_UPDATED | import("./screensAndNavModels").Screen.ADMIN_CHOOSE | import("./screensAndNavModels").Screen.ADMIN_DIVIDE | import("./screensAndNavModels").Screen.QUESTIONS | import("./screensAndNavModels").Screen.QUESTIONS_NEW | import("./screensAndNavModels").Screen.QUESTIONS_RANDOM | import("./screensAndNavModels").Screen.QUESTIONS_UPDATED | import("./screensAndNavModels").Screen.QUESTIONS_CONSENSUS | import("./screensAndNavModels").Screen.INFO)[] | undefined;
            enableAddEvaluationOption?: boolean | undefined;
            enableAddVotingOption?: boolean | undefined;
            enhancedEvaluation?: boolean | undefined;
            showEvaluation?: boolean | undefined;
            inVotingGetOnlyResults?: boolean | undefined;
            enableSimilaritiesSearch?: boolean | undefined;
            enableNotifications?: boolean | undefined;
            enableNavigationalElements?: boolean | undefined;
            deliberationType?: import("./statementsModels").DeliberationType | undefined;
            hasChat?: boolean | undefined;
        } | undefined;
    }[];
    get getBasicStagesTypes(): StageType[];
}
