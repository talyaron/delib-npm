"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StatementSubscriptionNotificationSchema = exports.StatementSubscriptionSchema = exports.StatementSchema = exports.SimpleStatementSchema = exports.SimpleStatementTypeSchema = exports.StatementType = void 0;
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
})(StatementType || (exports.StatementType = StatementType = {}));
exports.SimpleStatementTypeSchema = zod_1.z.enum([
    StatementType.statement,
    StatementType.option,
    StatementType.question,
    StatementType.result,
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
exports.StatementSchema = zod_1.z.object({
    consensus: zod_1.z.number(),
    createdAt: zod_1.z.number(),
    creator: usersModels_1.UserSchema,
    creatorId: zod_1.z.string(),
    defaultLanguage: zod_1.z.string().length(2).optional(),
    elementHight: zod_1.z.number().optional(),
    evaluation: zod_1.z
        .object({
        con: zod_1.z.number().optional(),
        fairness: zod_1.z.number().optional(),
        pro: zod_1.z.number().optional(),
    })
        .optional(),
    hasChildren: zod_1.z.boolean().optional(),
    imagesURL: zod_1.z.object({
        main: zod_1.z.string().optional(),
        more: zod_1.z.array(zod_1.z.string()).optional()
    }).optional(),
    lastChildUpdate: zod_1.z.number().optional(),
    lastMessage: zod_1.z.string().optional(),
    lastUpdate: zod_1.z.number(),
    maxConsesusStatement: exports.SimpleStatementSchema.optional(),
    maxConsensus: zod_1.z.number().optional(),
    order: zod_1.z.number().optional(),
    parentId: zod_1.z.string(),
    parents: zod_1.z.array(zod_1.z.string()).optional(),
    pro: zod_1.z.number().optional(),
    results: zod_1.z.array(exports.SimpleStatementSchema).optional(),
    resultsSettings: zod_1.z
        .object({
        deep: zod_1.z.number().optional(),
        minConsensus: zod_1.z.number().optional(),
        numberOfResults: zod_1.z.number().optional(),
        resultsBy: resultsModel_1.ResultsBySchema, //top options, top votes, top fairness etc,
    })
        .optional(),
    roomSize: zod_1.z.number().optional(),
    roomsSettings: zod_1.z
        .object({
        //TODO: change code
        roomSize: zod_1.z.number().optional(),
        roomsState: roomsModel_1.RoomsStateSelectionEnum.optional(), //being for room selection
    })
        .optional(),
    roomsState: roomsModel_1.RoomsStateSelectionEnum.optional(),
    selections: zod_1.z.any().optional(),
    statement: zod_1.z.string(),
    statementId: zod_1.z.string(),
    statementSettings: zod_1.z
        .object({
        enableAddEvaluationOption: zod_1.z.boolean().optional(),
        enableAddVotingOption: zod_1.z.boolean().optional(),
        subScreens: zod_1.z.array(screensAndNavModels_1.ScreenSchema).optional(), //holds the navigation tabs of the statement
    })
        .optional(),
    statementType: exports.SimpleStatementTypeSchema.optional(),
    subScreens: zod_1.z.array(screensAndNavModels_1.ScreenSchema).optional(),
    totalSubStatements: zod_1.z.number().optional(),
    topParentId: zod_1.z.string(),
    votes: zod_1.z.number().optional(),
    voted: zod_1.z.number().optional(), //TODO: remove (probably not needed)
});
exports.StatementSubscriptionSchema = zod_1.z.object({
    role: usersModels_1.RoleSchama,
    userId: zod_1.z.string(),
    statementId: zod_1.z.string(),
    lastUpdate: zod_1.z.number(),
    statementsSubscribeId: zod_1.z.string(),
    statement: exports.StatementSchema,
    notification: zod_1.z.boolean().optional(),
    token: zod_1.z.string().optional(),
    totalSubStatementsRead: zod_1.z.number().optional(),
    user: usersModels_1.UserSchema,
});
exports.StatementSubscriptionNotificationSchema = zod_1.z.object({
    statementId: zod_1.z.string(),
    userId: zod_1.z.string(),
    subscribed: zod_1.z.boolean(),
    token: zod_1.z.string(),
    notification: zod_1.z.boolean().optional(),
});
