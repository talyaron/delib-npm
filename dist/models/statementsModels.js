"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StatementSubscriptionNotificationSchema = exports.StatementSubscriptionSchema = exports.StatementSchema = exports.DocumentType = exports.MembershipSchema = exports.AgreeSchema = exports.DocumentImportanceSchema = exports.DocumentApprovalSchema = exports.MembersAllowedSchema = exports.membersAllowed = exports.AccessSchema = exports.Access = exports.SimpleStatementSchema = exports.SimpleStatementTypeSchema = exports.QuestionStage = exports.QuestionType = exports.DeliberativeElementSchema = exports.DeliberativeElement = exports.StatementType = void 0;
const zod_1 = require("zod");
const usersModels_1 = require("./usersModels");
const screensAndNavModels_1 = require("./screensAndNavModels");
const resultsModel_1 = require("./resultsModel");
var StatementType;
(function (StatementType) {
    StatementType["statement"] = "statement";
    StatementType["option"] = "option";
    StatementType["question"] = "question";
    StatementType["document"] = "document";
    StatementType["group"] = "group";
    StatementType["stage"] = "stage";
})(StatementType || (exports.StatementType = StatementType = {}));
var DeliberativeElement;
(function (DeliberativeElement) {
    DeliberativeElement["explanation"] = "explanation";
    DeliberativeElement["needs"] = "needs";
    DeliberativeElement["resource"] = "resource";
    DeliberativeElement["consideration"] = "consideration";
    DeliberativeElement["research"] = "research";
    DeliberativeElement["option"] = "option";
    DeliberativeElement["general"] = "general";
})(DeliberativeElement || (exports.DeliberativeElement = DeliberativeElement = {}));
exports.DeliberativeElementSchema = zod_1.z.enum([
    DeliberativeElement.explanation,
    DeliberativeElement.needs,
    DeliberativeElement.resource,
    DeliberativeElement.consideration,
    DeliberativeElement.research,
    DeliberativeElement.option,
    DeliberativeElement.general
]);
var QuestionType;
(function (QuestionType) {
    QuestionType["singleStep"] = "single-step";
    QuestionType["multipleSteps"] = "multiple-steps";
})(QuestionType || (exports.QuestionType = QuestionType = {}));
var QuestionStage;
(function (QuestionStage) {
    QuestionStage["explanation"] = "explanation";
    QuestionStage["suggestion"] = "suggestion";
    QuestionStage["firstEvaluation"] = "firstEvaluation";
    QuestionStage["secondEvaluation"] = "secondEvaluation";
    QuestionStage["voting"] = "voting";
    QuestionStage["finished"] = "finished";
})(QuestionStage || (exports.QuestionStage = QuestionStage = {}));
exports.SimpleStatementTypeSchema = zod_1.z.enum([
    StatementType.statement,
    StatementType.option,
    StatementType.question,
    StatementType.document,
    StatementType.group
]);
exports.SimpleStatementSchema = zod_1.z.object({
    statementId: zod_1.z.string(),
    statement: zod_1.z.string(),
    creatorId: zod_1.z.string(),
    creator: usersModels_1.UserSchema,
    parentId: zod_1.z.string(),
    consensus: zod_1.z.number(),
    voted: zod_1.z.number().optional(),
});
var Access;
(function (Access) {
    Access["open"] = "open";
    Access["close"] = "close";
})(Access || (exports.Access = Access = {}));
exports.AccessSchema = zod_1.z.enum([Access.open, Access.close]);
var membersAllowed;
(function (membersAllowed) {
    membersAllowed["all"] = "all";
    membersAllowed["nonAnonymous"] = "nonAnonymous";
})(membersAllowed || (exports.membersAllowed = membersAllowed = {}));
exports.MembersAllowedSchema = zod_1.z.enum([
    membersAllowed.all,
    membersAllowed.nonAnonymous,
]);
const QuestionSettingsSchema = zod_1.z.object({
    questionType: zod_1.z.enum([QuestionType.singleStep, QuestionType.multipleSteps]),
    currentStage: zod_1.z.enum([QuestionStage.explanation, QuestionStage.suggestion, QuestionStage.firstEvaluation, QuestionStage.secondEvaluation, QuestionStage.voting, QuestionStage.finished]), //the current step of the question
});
exports.DocumentApprovalSchema = zod_1.z.object({
    approved: zod_1.z.number(),
    totalVoters: zod_1.z.number(),
    averageApproval: zod_1.z.number(), // the average approval of the statement
});
exports.DocumentImportanceSchema = zod_1.z.object({
    numberOfUsers: zod_1.z.number(),
    averageImportance: zod_1.z.number(),
    sumImportance: zod_1.z.number(), // the sum of importance of the statement
});
exports.AgreeSchema = zod_1.z.object({
    agree: zod_1.z.number().optional(),
    disagree: zod_1.z.number().optional(),
    avgAgree: zod_1.z.number().optional(),
});
exports.MembershipSchema = zod_1.z
    .object({
    adminApproveMembers: zod_1.z.boolean().optional(),
    access: exports.AccessSchema.optional(),
    typeOfMembersAllowed: exports.MembersAllowedSchema.optional(),
});
var DocumentType;
(function (DocumentType) {
    DocumentType["paragraph"] = "paragraph";
    DocumentType["section"] = "section";
    DocumentType["comment"] = "comment";
})(DocumentType || (exports.DocumentType = DocumentType = {}));
const DocumentTypeSchema = zod_1.z.enum([DocumentType.paragraph, DocumentType.section, DocumentType.comment]);
exports.StatementSchema = zod_1.z.object({
    allowAnonymousLogin: zod_1.z.boolean().optional(),
    statement: zod_1.z.string(),
    description: zod_1.z.string().optional(),
    statementId: zod_1.z.string(),
    creatorId: zod_1.z.string(),
    creator: usersModels_1.UserSchema,
    statementType: exports.SimpleStatementTypeSchema,
    deliberativeElement: exports.DeliberativeElementSchema.optional(),
    color: zod_1.z.string().optional(),
    defaultLanguage: zod_1.z.string().length(2).optional(),
    followMe: zod_1.z.string().optional(),
    parentId: zod_1.z.string(),
    parents: zod_1.z.array(zod_1.z.string()).optional(),
    topParentId: zod_1.z.string(),
    hasChildren: zod_1.z.boolean().optional(),
    lastMessage: zod_1.z.string().optional(),
    lastUpdate: zod_1.z.number(),
    lastChildUpdate: zod_1.z.number().optional(),
    createdAt: zod_1.z.number(),
    pro: zod_1.z.number().optional(),
    con: zod_1.z.number().optional(),
    doc: zod_1.z.object({
        isDoc: zod_1.z.boolean(),
        order: zod_1.z.number() //if true this means that the statement is the main document
    }).optional(),
    evaluation: zod_1.z
        .object({
        sumEvaluations: zod_1.z.number(),
        agreement: zod_1.z.number(),
        numberOfEvaluators: zod_1.z.number(),
        sumPro: zod_1.z.number().optional(),
        sumCon: zod_1.z.number().optional(), //sum of con evaluations
    }).optional(),
    consensus: zod_1.z.number(),
    order: zod_1.z.number().optional(),
    elementHight: zod_1.z.number().optional(),
    top: zod_1.z.number().optional(),
    votes: zod_1.z.number().optional(),
    selections: zod_1.z.any().optional(),
    isSelected: zod_1.z.boolean().optional(),
    importanceData: zod_1.z.object({
        sumImportance: zod_1.z.number(),
        numberOfUsers: zod_1.z.number(),
        numberOfViews: zod_1.z.number(), //the number of users that viewed the statement - it is used in FreeDi-sign
    }).optional(),
    voted: zod_1.z.number().optional(),
    totalSubStatements: zod_1.z.number().optional(),
    subScreens: zod_1.z.array(screensAndNavModels_1.ScreenSchema).optional(),
    statementSettings: zod_1.z
        .object({
        /** holds the navigation tabs of the statement */
        subScreens: zod_1.z.array(screensAndNavModels_1.ScreenSchema).optional(),
        /** if true, non admin users can add options under evaluation screen */
        enableAddEvaluationOption: zod_1.z.boolean().optional(),
        /** if true, non admin users can add options under voting screen */
        enableAddVotingOption: zod_1.z.boolean().optional(),
        /** if true, the evaluation element will be enhanced */
        enhancedEvaluation: zod_1.z.boolean().optional(),
        /** if true, the evaluation element will be shown */
        showEvaluation: zod_1.z.boolean().optional(),
        /** if true, only the results will be shown */
        inVotingGetOnlyResults: zod_1.z.boolean().optional(),
        enableSimilaritiesSearch: zod_1.z.boolean().optional(),
        enableNotifications: zod_1.z.boolean().optional(),
        enableNavigationalElements: zod_1.z.boolean().optional(),
        show: zod_1.z.boolean().optional(), //if false, the statement will be "deleted" from the user view
    })
        .optional(),
    membership: exports.MembershipSchema.optional(),
    maxConsensus: zod_1.z.number().optional(),
    selected: zod_1.z.boolean().optional(),
    resultsSettings: zod_1.z
        .object({
        resultsBy: resultsModel_1.ResultsBySchema,
        numberOfResults: zod_1.z.number().optional(),
        numberOfSelections: zod_1.z.number().optional(),
        deep: zod_1.z.number().optional(),
        minConsensus: zod_1.z.number().optional(), //used for fairness cutoff: only fairness score above this number will become results
    })
        .optional(),
    results: zod_1.z.array(exports.SimpleStatementSchema).optional(),
    isResult: zod_1.z.boolean().optional(),
    // canHaveChildren: z.boolean().optional(), //deprecated
    imagesURL: zod_1.z
        .object({
        main: zod_1.z.string().optional(),
        more: zod_1.z.array(zod_1.z.string()).optional(),
    })
        .optional(),
    /** total statement evaluators */
    totalEvaluators: zod_1.z.number().optional(),
    /** Question settings */
    questionSettings: QuestionSettingsSchema.optional(),
    /** is part of temporary presentation under multi stage question */
    isInMultiStage: zod_1.z.boolean().optional(),
    /** Document settings */
    documentSettings: zod_1.z
        .object({
        parentDocumentId: zod_1.z.string(),
        order: zod_1.z.number(),
        type: DocumentTypeSchema,
        isTop: zod_1.z.boolean(), // if true this means that the statement is the top level of the document
    }).optional(),
    documentApproval: exports.DocumentApprovalSchema.optional(),
    documentImportance: exports.DocumentImportanceSchema.optional(),
    documentAgree: exports.AgreeSchema.optional(),
    //** Stage setting */
    stageId: zod_1.z.string().optional().nullable(),
    viewed: zod_1.z.object({
        individualViews: zod_1.z.number().optional(),
    }).optional() //The process associated with this statement. The value will be null if the process was moved to a different statement and no new process has been assigned to this statement. 
});
exports.StatementSubscriptionSchema = zod_1.z.object({
    role: usersModels_1.RoleSchema,
    userId: zod_1.z.string(),
    statementId: zod_1.z.string(),
    lastUpdate: zod_1.z.number(),
    createdAt: zod_1.z.number().optional(),
    statementsSubscribeId: zod_1.z.string(),
    statement: exports.StatementSchema,
    notification: zod_1.z.boolean().default(false),
    token: zod_1.z.array(zod_1.z.string()).optional(),
    totalSubStatementsRead: zod_1.z.number().optional(),
    user: usersModels_1.UserSchema,
    userAskedForNotification: zod_1.z.boolean().default(false),
});
exports.StatementSubscriptionNotificationSchema = zod_1.z.object({
    statementId: zod_1.z.string(),
    userId: zod_1.z.string(),
    subscribed: zod_1.z.boolean(),
    token: zod_1.z.string(),
    notification: zod_1.z.boolean().optional(),
});
