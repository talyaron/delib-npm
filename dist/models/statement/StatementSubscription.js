"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StatementViewSchema = exports.StatementSubscriptionSchema = void 0;
exports.getStatementSubscriptionId = getStatementSubscriptionId;
const valibot_1 = require("valibot");
const User_1 = require("../user/User");
const StatementTypes_1 = require("./StatementTypes");
const UserSettings_1 = require("../user/UserSettings");
exports.StatementSubscriptionSchema = (0, valibot_1.object)({
    role: (0, valibot_1.enum_)(UserSettings_1.Role),
    userId: (0, valibot_1.string)(),
    statementId: (0, valibot_1.string)(),
    lastUpdate: (0, valibot_1.number)(),
    createdAt: (0, valibot_1.optional)((0, valibot_1.number)()),
    statementsSubscribeId: (0, valibot_1.string)(),
    statement: StatementTypes_1.StatementSchema,
    token: (0, valibot_1.optional)((0, valibot_1.array)((0, valibot_1.string)())),
    totalSubStatementsRead: (0, valibot_1.optional)((0, valibot_1.number)()),
    user: User_1.UserSchema,
});
function getStatementSubscriptionId(statementId, user) {
    return `${user.uid}--${statementId}`;
}
exports.StatementViewSchema = (0, valibot_1.object)({
    statementId: (0, valibot_1.string)(),
    userId: (0, valibot_1.string)(),
    viewed: (0, valibot_1.number)(),
    lastViewed: (0, valibot_1.number)(),
    parentDocumentId: (0, valibot_1.string)(),
});
