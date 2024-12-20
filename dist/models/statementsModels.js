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
    StatementType.group,
    StatementType.stage
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
    questionType: zod_1.z.enum([QuestionType.singleStep, QuestionType.multipleSteps]), //the type of the question (single-step, multiple-steps)
    currentStage: zod_1.z.enum([QuestionStage.explanation, QuestionStage.suggestion, QuestionStage.firstEvaluation, QuestionStage.secondEvaluation, QuestionStage.voting, QuestionStage.finished]), //the current step of the question
});
exports.DocumentApprovalSchema = zod_1.z.object({
    approved: zod_1.z.number(), // the number of users that approved the statement
    totalVoters: zod_1.z.number(), // the total number of users that approved or rejected the statement
    averageApproval: zod_1.z.number(), // the average approval of the statement
});
exports.DocumentImportanceSchema = zod_1.z.object({
    numberOfUsers: zod_1.z.number(), // the total number of users that evaluated the importance of the statement
    averageImportance: zod_1.z.number(), // the average importance of the statement
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
    access: exports.AccessSchema.optional(), // TODO: remove optional after  (20/4/24)
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
    allowAnonymousLogin: zod_1.z.boolean().optional(), //TODO: remove in the future, because of membersAllowed. if true, non-logged-in users can participate in the statement
    statement: zod_1.z.string(), //the text of the statement
    description: zod_1.z.string().optional(), //the description of the statement
    statementId: zod_1.z.string(),
    creatorId: zod_1.z.string(),
    creator: usersModels_1.UserSchema,
    statementType: exports.SimpleStatementTypeSchema, // used to determine if it a group, question, option or chat message
    deliberativeElement: exports.DeliberativeElementSchema.optional(),
    color: zod_1.z.string().optional(),
    defaultLanguage: zod_1.z.string().length(2).optional(),
    followMe: zod_1.z.string().optional(), // used to help other users to follow the admin
    parentId: zod_1.z.string(),
    parents: zod_1.z.array(zod_1.z.string()).optional(), //all parents of the statement, ordered by the hierarchy
    topParentId: zod_1.z.string(),
    hasChildren: zod_1.z.boolean().optional(), //should be true if the statement can have children. this lets admin prevent having children.
    lastMessage: zod_1.z.string().optional(),
    lastUpdate: zod_1.z.number(),
    lastChildUpdate: zod_1.z.number().optional(), //keep track of the last child update.
    createdAt: zod_1.z.number(),
    pro: zod_1.z.number().optional(), //deprecated
    con: zod_1.z.number().optional(), //deprecated
    doc: zod_1.z.object({
        isDoc: zod_1.z.boolean(),
        order: zod_1.z.number() //if true this means that the statement is the main document
    }).optional(),
    evaluation: zod_1.z
        .object({
        sumEvaluations: zod_1.z.number(), //the summery of evaluations
        agreement: zod_1.z.number(), //the agreement of evaluations
        numberOfEvaluators: zod_1.z.number(), //the number of evaluators
        sumPro: zod_1.z.number().optional(), //sum of pro evaluations
        sumCon: zod_1.z.number().optional(), //sum of con evaluations
    }).optional(), // TODO: remove this field after removing con, pro and consensus from the statement (20/1/24)
    consensus: zod_1.z.number(), //the summery of evaluations
    order: zod_1.z.number().optional(), // TODO: check if this is needed in the future
    elementHight: zod_1.z.number().optional(), // TODO: check if this is needed in the future
    top: zod_1.z.number().optional(), // used to temporally store the top of the statement
    votes: zod_1.z.number().optional(), //TODO: remove (probably not needed)
    selections: zod_1.z.any().optional(), //TODO: rename to optionsVotes
    isSelected: zod_1.z.boolean().optional(),
    importanceData: zod_1.z.object({
        sumImportance: zod_1.z.number(), //the sum of importance of the statement
        numberOfUsers: zod_1.z.number(), //the number of users that evaluated the statement
        numberOfViews: zod_1.z.number(), //the number of users that viewed the statement - it is used in FreeDi-sign
    }).optional(),
    voted: zod_1.z.number().optional(), //TODO: remove (probably not needed)
    totalSubStatements: zod_1.z.number().optional(), //It is being used to know how many statements were not read yetprecated TODO: remove after code changing TODO: change code (see room settings  ) //being for room selection
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
        enableSimilaritiesSearch: zod_1.z.boolean().optional(), //if true, look for similar sub-statements
        enableNotifications: zod_1.z.boolean().optional(), //if true, send notifications to the users
        enableNavigationalElements: zod_1.z.boolean().optional(), //if true, show navigational elements
        show: zod_1.z.boolean().optional(), //if false, the statement will be "deleted" from the user view
    })
        .optional(),
    membership: exports.MembershipSchema.optional(),
    maxConsensus: zod_1.z.number().optional(), //deprecated
    selected: zod_1.z.boolean().optional(), //true if the option was selected in voting
    resultsSettings: zod_1.z
        .object({
        resultsBy: resultsModel_1.ResultsBySchema, //top options, top votes, top fairness etc,
        numberOfResults: zod_1.z.number().optional(), //how many top options will be converted to results
        numberOfSelections: zod_1.z.number().optional(), //how many top votes will be converted to selections
        deep: zod_1.z.number().optional(), //how deep the results will go
        minConsensus: zod_1.z.number().optional(), //used for fairness cutoff: only fairness score above this number will become results
    })
        .optional(),
    results: zod_1.z.array(exports.SimpleStatementSchema).optional(),
    isResult: zod_1.z.boolean().optional(), //true if the statement  was chosen as a preferred option (there can be multiple preferred options, for a parent statement)
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
    isInMultiStage: zod_1.z.boolean().optional(), //used to know if the statement is part of the current multi-stage options
    /** Document settings */
    documentSettings: zod_1.z
        .object({
        parentDocumentId: zod_1.z.string(), //the parent statement id
        order: zod_1.z.number(), // The order of the statement in the document
        type: DocumentTypeSchema, // paragraph or section
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
