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
    statement: zod_1.z.string(),
    statementId: zod_1.z.string(),
    creatorId: zod_1.z.string(),
    creator: usersModels_1.UserSchema,
    parentId: zod_1.z.string(),
    parents: zod_1.z.array(zod_1.z.string()).optional(),
    topParentId: zod_1.z.string().optional(),
    hasChildren: zod_1.z.boolean().optional(),
    lastMessage: zod_1.z.string().optional(),
    lastUpdate: zod_1.z.number(),
    lastChildUpdate: zod_1.z.number().optional(),
    createdAt: zod_1.z.number(),
    type: zod_1.z.string().optional(),
    pro: zod_1.z.number().optional(),
    con: zod_1.z.number().optional(),
    consensus: zod_1.z.number(),
    order: zod_1.z.number().optional(),
    elementHight: zod_1.z.number().optional(),
    votes: zod_1.z.number().optional(),
    selections: zod_1.z.any().optional(),
    voted: zod_1.z.number().optional(),
    totalSubStatements: zod_1.z.number().optional(),
    subScreens: zod_1.z.array(screensAndNavModels_1.ScreenSchema).optional(),
    roomsState: roomsModel_1.RoomsStateSelectionEnum.optional(),
    maxConsensus: zod_1.z.number().optional(),
    maxConsesusStatement: exports.SimpleStatementSchema.optional(),
    statementType: exports.SimpleStatementTypeSchema.optional(),
    resultsSettings: zod_1.z
        .object({
        resultsBy: resultsModel_1.ResultsBySchema,
        numberOfResults: zod_1.z.number().optional(),
        deep: zod_1.z.number().optional(),
        minConsensus: zod_1.z.number().optional()
    })
        .optional(),
    results: zod_1.z.array(exports.SimpleStatementSchema).optional(),
    canHaveChildren: zod_1.z.boolean().optional(),
    roomSize: zod_1.z.number().optional(),
    defaultLanguage: zod_1.z.string().optional(),
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
