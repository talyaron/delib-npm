"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StatementSubscriptionNotificationSchema = exports.StatementSubscriptionSchema = exports.StatementSchema = exports.MembersAllowedSchema = exports.membersAllowed = exports.AccessSchema = exports.Access = exports.SimpleStatementSchema = exports.SimpleStatementTypeSchema = exports.StatementType = void 0;
const zod_1 = require("zod");
const usersModels_1 = require("./usersModels");
const screensAndNavModels_1 = require("./screensAndNavModels");
const roomsModel_1 = require("./roomsModel");
const resultsModel_1 = require("./resultsModel");
var StatementType;
(function (StatementType) {
    StatementType["statement"] = "statement";
    StatementType["option"] = "option";
    StatementType["question"] = "question";
    StatementType["result"] = "result";
    StatementType["selection"] = "selection";
})(StatementType || (exports.StatementType = StatementType = {}));
exports.SimpleStatementTypeSchema = zod_1.z.enum([
    StatementType.statement,
    StatementType.option,
    StatementType.question,
    StatementType.result,
    StatementType.selection,
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
exports.StatementSchema = zod_1.z.object({
    allowAnonymousLogin: zod_1.z.boolean().optional(),
    statement: zod_1.z.string(),
    statementId: zod_1.z.string(),
    creatorId: zod_1.z.string(),
    creator: usersModels_1.UserSchema,
    color: zod_1.z.string().optional(),
    defaultLanguage: zod_1.z.string().length(2).optional(),
    followMe: zod_1.z.string().optional(),
    parentId: zod_1.z.string(),
    parents: zod_1.z.array(zod_1.z.string()).optional(),
    topParentId: zod_1.z.string().optional(),
    hasChildren: zod_1.z.boolean().optional(),
    lastMessage: zod_1.z.string().optional(),
    lastUpdate: zod_1.z.number(),
    lastChildUpdate: zod_1.z.number().optional(),
    createdAt: zod_1.z.number(),
    pro: zod_1.z.number().optional(),
    con: zod_1.z.number().optional(),
    evaluation: zod_1.z
        .object({
        sumEvaluations: zod_1.z.number(),
        agreement: zod_1.z.number(),
        numberOfEvaluators: zod_1.z.number(), //the number of evaluators
    }),
    consensus: zod_1.z.number(),
    order: zod_1.z.number().optional(),
    elementHight: zod_1.z.number().optional(),
    votes: zod_1.z.number().optional(),
    selections: zod_1.z.any().optional(),
    isSelected: zod_1.z.boolean().optional(),
    voted: zod_1.z.number().optional(),
    totalSubStatements: zod_1.z.number().optional(),
    subScreens: zod_1.z.array(screensAndNavModels_1.ScreenSchema).optional(),
    roomsState: roomsModel_1.RoomsStateSelectionEnum.optional(),
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
    })
        .optional(),
    membership: zod_1.z
        .object({
        adminApproveMembers: zod_1.z.boolean().optional(),
        access: exports.AccessSchema.optional(),
        typeOfMembersAllowed: exports.MembersAllowedSchema.optional(),
    })
        .optional(),
    maxConsensus: zod_1.z.number().optional(),
    statementType: exports.SimpleStatementTypeSchema.optional(),
    /** true if the option was selected in voting */
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
    // canHaveChildren: z.boolean().optional(), //deprecated
    roomSize: zod_1.z.number().optional(),
    roomsSettings: zod_1.z
        .object({
        //TODO: change code
        roomSize: zod_1.z.number().optional(),
        roomsState: roomsModel_1.RoomsStateSelectionEnum.optional(), //being for room selection
    })
        .optional(),
    imagesURL: zod_1.z
        .object({
        main: zod_1.z.string().optional(),
        more: zod_1.z.array(zod_1.z.string()).optional(),
    })
        .optional(),
    /** total statement evaluators */
    totalEvaluators: zod_1.z.number().optional(),
});
exports.StatementSubscriptionSchema = zod_1.z.object({
    role: usersModels_1.RoleSchema,
    userId: zod_1.z.string(),
    statementId: zod_1.z.string(),
    lastUpdate: zod_1.z.number(),
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
