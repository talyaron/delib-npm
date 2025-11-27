"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StatementMetaDataSchema = exports.StatementSchema = exports.LastMessageSchema = void 0;
const valibot_1 = require("valibot");
const TypeEnums_1 = require("../TypeEnums");
const User_1 = require("../user/User");
const Results_1 = require("../results/Results");
const QuestionType_1 = require("../question/QuestionType");
const Agreement_1 = require("../agreement/Agreement");
const stageTypes_1 = require("../stage/stageTypes");
const SimpleStatement_1 = require("./SimpleStatement");
const StatementSettings_1 = require("./StatementSettings");
const UserSettings_1 = require("../user/UserSettings");
const Evaluation_1 = require("../evaluation/Evaluation");
const questionnaireModel_1 = require("../questionnaire/questionnaireModel");
const fairDivision_1 = require("./fairDivision");
const votingModel_1 = require("../vote/votingModel");
const evidenceModel_1 = require("../evidence/evidenceModel");
const popperTypes_1 = require("../popper/popperTypes");
/*
Statement is everything in this app. It is a statement in a chat, an option in a solution, a group, a stage, etc.
Statements are connected to each other in a tree structure, where each statement can have parentStatement, and a list of all parents.
The entity type is StatementType.

*/
exports.LastMessageSchema = (0, valibot_1.object)({
    message: (0, valibot_1.string)(),
    creator: (0, valibot_1.string)(),
    createdAt: (0, valibot_1.number)(),
});
exports.StatementSchema = (0, valibot_1.object)({
    allowAnonymousLogin: (0, valibot_1.optional)((0, valibot_1.boolean)()), // if true, allow anonymous login
    statement: (0, valibot_1.string)(), // the text of the statement
    description: (0, valibot_1.optional)((0, valibot_1.string)()), // the description of the statement
    statementId: (0, valibot_1.string)(), // the id of the statement
    creatorId: (0, valibot_1.string)(), // the id of the creator of the statement
    creator: User_1.UserSchema, // the creator of the statement
    statementType: (0, valibot_1.enum_)(TypeEnums_1.StatementType), // the type of the statement: group, stage, option, chat-message, etc.
    evidence: (0, valibot_1.optional)((0, valibot_1.object)({
        evidenceType: (0, valibot_1.optional)((0, valibot_1.enum_)(evidenceModel_1.EvidenceType)), // the type of evidence: data, testimony, argument, anecdote, fallacy
        support: (0, valibot_1.optional)((0, valibot_1.number)()), // the strength of support of the evidence (-1 to 1): -1 = strongly challenges, 0 = neutral, 1 = strongly supports
        helpfulCount: (0, valibot_1.optional)((0, valibot_1.number)()), // the number of helpful votes for the evidence
        notHelpfulCount: (0, valibot_1.optional)((0, valibot_1.number)()), // the number of not-helpful votes for the evidence
        netScore: (0, valibot_1.optional)((0, valibot_1.number)()), // the net score of the evidence (helpfulCount - notHelpfulCount)
        evidenceWeight: (0, valibot_1.optional)((0, valibot_1.number)()), // calculated weight based on evidence type and vote quality (can be > 1.0)
    })),
    deliberativeElement: (0, valibot_1.optional)((0, valibot_1.enum_)(TypeEnums_1.DeliberativeElement)), // the deliberative element of the statement: need, explanation, question, suggestion, conclusion, etc.
    color: (0, valibot_1.optional)((0, valibot_1.string)()), // it is a color assigned to a statement
    defaultLanguage: (0, valibot_1.optional)((0, valibot_1.string)()), // the default language of the statement
    forceLanguage: (0, valibot_1.optional)((0, valibot_1.boolean)()), // if true, force the language of the statement
    followMe: (0, valibot_1.optional)((0, valibot_1.string)()),
    parentId: (0, valibot_1.string)(), // the id of the parent statement
    parents: (0, valibot_1.optional)((0, valibot_1.array)((0, valibot_1.string)())), // the list of all parents of the statement
    topParentId: (0, valibot_1.string)(), // the id of the top parent of the statement
    hasChildren: (0, valibot_1.optional)((0, valibot_1.boolean)()), // if true, the user can add sub statements to the statement
    lastMessage: (0, valibot_1.optional)((0, valibot_1.object)({
        message: (0, valibot_1.string)(),
        creator: (0, valibot_1.string)(),
        createdAt: (0, valibot_1.number)(),
    })), // the last message in the statement
    lastSubStatements: (0, valibot_1.optional)((0, valibot_1.array)(SimpleStatement_1.SimpleStatementSchema)), // the last sub-statements of the statement
    lastUpdate: (0, valibot_1.number)(), // the last update of the statement
    lastChildUpdate: (0, valibot_1.optional)((0, valibot_1.number)()), // the last update of the last child of the statement
    createdAt: (0, valibot_1.number)(), // the creation date of the statement
    pro: (0, valibot_1.optional)((0, valibot_1.number)()), // the number of supporters of the statement
    con: (0, valibot_1.optional)((0, valibot_1.number)()), // the number of opponents of the statement
    doc: (0, valibot_1.optional)((0, valibot_1.object)({
        isDoc: (0, valibot_1.boolean)(),
        order: (0, valibot_1.number)(),
    })), // I think it is relevant to Freedi-sign
    numberOfOptions: (0, valibot_1.optional)((0, valibot_1.number)()), // the number of options of the statement
    consensus: (0, valibot_1.number)(), // the consensus of the statement
    consensusValid: (0, valibot_1.optional)((0, valibot_1.number)()), // gives a combine number of the level of consensus and its validity
    PopperHebbianScore: (0, valibot_1.optional)(popperTypes_1.PopperHebbianScoreSchema), // the Popper Hebbian score of the statement
    order: (0, valibot_1.optional)((0, valibot_1.number)()), // the order of the statement relative to its siblings
    elementHight: (0, valibot_1.optional)((0, valibot_1.number)()), // the height of the statement. It is used for animation purposes
    top: (0, valibot_1.optional)((0, valibot_1.number)()), // the top of the statement. It is used for animation purposes
    suggestions: (0, valibot_1.optional)((0, valibot_1.number)()), // the number of suggestions of the statement
    optionContributors: (0, valibot_1.optional)((0, valibot_1.number)()), // the number of participants that suggested an option
    massMembers: (0, valibot_1.optional)((0, valibot_1.number)()), // the number of members of the statement
    votes: (0, valibot_1.optional)((0, valibot_1.number)()), // the number of votes for the statement
    topVotedOption: (0, valibot_1.optional)(SimpleStatement_1.SimpleStatementSchema), // the top voted option of the statement
    selections: (0, valibot_1.optional)((0, valibot_1.any)()), // the top-options of the statement
    isSelected: (0, valibot_1.optional)((0, valibot_1.boolean)()), // if true, the statement is selected
    isCluster: (0, valibot_1.optional)((0, valibot_1.boolean)()),
    voted: (0, valibot_1.optional)((0, valibot_1.number)()), // the number of votes for the statement
    totalSubStatements: (0, valibot_1.optional)((0, valibot_1.number)()), // the total number of sub statements of the statement
    membership: (0, valibot_1.optional)(User_1.MembershipSchema), // the membership of the statement
    maxConsensus: (0, valibot_1.optional)((0, valibot_1.number)()), // the maximum consensus of the statement
    selected: (0, valibot_1.optional)((0, valibot_1.boolean)()), // if true, the statement is selected
    isVoted: (0, valibot_1.optional)((0, valibot_1.boolean)()), // if true - this is the top voted option of the statement
    results: (0, valibot_1.optional)((0, valibot_1.array)(SimpleStatement_1.SimpleStatementSchema)), // the results of the statement
    isResult: (0, valibot_1.optional)((0, valibot_1.boolean)()), // if true, the statement a top-statement
    imagesURL: (0, valibot_1.optional)((0, valibot_1.object)({
        main: (0, valibot_1.optional)((0, valibot_1.string)()), // the main image of the statement
        more: (0, valibot_1.optional)((0, valibot_1.array)((0, valibot_1.string)())), // the other images of the statement
    })),
    totalEvaluators: (0, valibot_1.optional)((0, valibot_1.number)()), // the total number of evaluators of the statement
    isInMultiStage: (0, valibot_1.optional)((0, valibot_1.boolean)()), // if true, the statement is in a multi-stage
    documentApproval: (0, valibot_1.optional)(Agreement_1.DocumentApprovalSchema), // the approval of the statement - used for Freedi-sign.
    documentImportance: (0, valibot_1.optional)(Agreement_1.DocumentImportanceSchema), // the importance of the statement - used for Freedi-sign.
    documentAgree: (0, valibot_1.optional)(Agreement_1.AgreeSchema), // the agreement of the statement - used for Freedi-sign.
    stageId: (0, valibot_1.optional)((0, valibot_1.nullable)((0, valibot_1.string)())), // the id of the stage of the statement
    viewed: (0, valibot_1.optional)((0, valibot_1.object)({
        individualViews: (0, valibot_1.optional)((0, valibot_1.number)()), // the number of views of the statement - used for Freedi-sign.
    })),
    stageSelectionType: (0, valibot_1.optional)((0, valibot_1.enum_)(stageTypes_1.StageSelectionType)), // the type of the stage selection of the statement
    creatorData: (0, valibot_1.optional)(UserSettings_1.UserDataSchema), // the creator data of the statement
    isChosen: (0, valibot_1.optional)((0, valibot_1.boolean)()), // if true, the statement is chosen by a vote
    chosenSolutions: (0, valibot_1.optional)((0, valibot_1.array)((0, valibot_1.string)())), // the chosen solutions of the statement
    summary: (0, valibot_1.optional)((0, valibot_1.string)()), // the summary of the statement - should be generated by the AI
    evaluation: (0, valibot_1.optional)(Evaluation_1.StatementEvaluationSchema), // the evaluation of the statement
    evaluationSettings: (0, valibot_1.optional)(Evaluation_1.StatementEvaluationSettingsSchema), // the evaluation settings of the statement	
    importanceData: (0, valibot_1.optional)((0, valibot_1.object)({
        sumImportance: (0, valibot_1.number)(), // the sum of the importance of the statement
        numberOfUsers: (0, valibot_1.number)(), // the number of users who voted for the statement
        numberOfViews: (0, valibot_1.number)(), // the number of views of the statement
    })),
    documentSettings: (0, valibot_1.optional)(//used for Freedi-sign
    (0, valibot_1.object)({
        parentDocumentId: (0, valibot_1.string)(), // the id of the parent document of the statement
        order: (0, valibot_1.number)(), // the order of the statement relative to its siblings
        type: (0, valibot_1.enum_)(TypeEnums_1.DocumentType), // the type of the document
        isTop: (0, valibot_1.boolean)(), // if true, the statement is a top-statement
    })),
    resultsSettings: (0, valibot_1.optional)(Results_1.ResultsSettingsSchema), // the settings of the results of the statement
    steps: (0, valibot_1.optional)(// steps are used to generate a solution using several steps, like suggestion, and then voting
    (0, valibot_1.object)({
        currentStep: User_1.StepSchema,
        allSteps: (0, valibot_1.optional)((0, valibot_1.array)(User_1.StepSchema)),
    })),
    votingSettings: (0, valibot_1.optional)(votingModel_1.VotingSettingsSchema), // the settings of the voting of the statement
    questionSettings: (0, valibot_1.optional)(QuestionType_1.QuestionSettingsSchema), // the settings of the question of the statement
    statementSettings: (0, valibot_1.optional)(StatementSettings_1.StatementSettingsSchema), // the settings of the statement
    joined: (0, valibot_1.optional)((0, valibot_1.array)(User_1.CreatorSchema)), // the joined users of the statement
    hide: (0, valibot_1.optional)((0, valibot_1.boolean)()), // if true, the statement is hidden
    questionnaire: (0, valibot_1.optional)(questionnaireModel_1.QuestionnaireSchema), // if a statement is a questionnaire, it will have this field
    fairDivision: (0, valibot_1.optional)(fairDivision_1.FairDivisionSelectionSchema), // if true, the statement is a fair division
    anchored: (0, valibot_1.optional)((0, valibot_1.boolean)()), // if true, the statement is anchored to be represented in the evaluation.
    randomSeed: (0, valibot_1.optional)((0, valibot_1.number)()), // an optional random seed for the statement
});
exports.StatementMetaDataSchema = (0, valibot_1.object)({
    lastUpdate: (0, valibot_1.number)(),
    numberOfMembers: (0, valibot_1.optional)((0, valibot_1.number)()),
    numberOfEvaluators: (0, valibot_1.optional)((0, valibot_1.number)()),
    numberOfEvaluatedStatements: (0, valibot_1.optional)((0, valibot_1.number)()),
    numberOfFirstSuggesters: (0, valibot_1.optional)((0, valibot_1.number)()),
    numberOfFirstEvaluators: (0, valibot_1.optional)((0, valibot_1.number)()),
    numberOfSecondEvaluators: (0, valibot_1.optional)((0, valibot_1.number)()),
    statementId: (0, valibot_1.string)(),
});
