"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StatementSubscriptionNotificationSchema = exports.StatementSubscriptionSchema = exports.StatementSchema = exports.SimpleStatementSchema = exports.StatementType = void 0;
const zod_1 = require("zod");
const usersModels_1 = require("./usersModels");
const screensAndNavModels_1 = require("./screensAndNavModels");
const roomsModel_1 = require("./roomsModel");
const resultsModel_1 = require("./resultsModel");
var StatementType;
(function (StatementType) {
    StatementType["STATEMENT"] = "statement";
    StatementType["GROUP"] = "GROUP";
    StatementType["OPTION"] = "option";
    StatementType["SOLUTION"] = "solution";
})(StatementType || (exports.StatementType = StatementType = {}));
;
const statementType = zod_1.z.enum([StatementType.STATEMENT, StatementType.GROUP, StatementType.OPTION, StatementType.SOLUTION]);
exports.SimpleStatementSchema = zod_1.z.object({
    statementId: zod_1.z.string(),
    statement: zod_1.z.string(),
    creatorId: zod_1.z.string(),
    creator: usersModels_1.UserSchema,
    parentId: zod_1.z.string(),
    consensus: zod_1.z.number(),
});
exports.StatementSchema = zod_1.z.object({
    statement: zod_1.z.string(),
    statementId: zod_1.z.string(),
    creatorId: zod_1.z.string(),
    creator: usersModels_1.UserSchema,
    parentId: zod_1.z.string(),
    hasChildren: zod_1.z.boolean().optional(),
    lastMessage: zod_1.z.string().optional(),
    lastUpdate: zod_1.z.number(),
    createdAt: zod_1.z.number(),
    type: statementType,
    isOption: zod_1.z.boolean().optional(),
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
    resultsBy: resultsModel_1.ResultsBySchema.optional(),
    canHaveChildren: zod_1.z.boolean().optional(),
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
    notification: zod_1.z.boolean().optional()
});
