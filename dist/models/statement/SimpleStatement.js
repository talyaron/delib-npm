"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SimpleStatementSchema = void 0;
exports.statementToSimpleStatement = statementToSimpleStatement;
const valibot_1 = require("valibot");
const User_1 = require("../user/User");
exports.SimpleStatementSchema = (0, valibot_1.object)({
    statementId: (0, valibot_1.string)(),
    statement: (0, valibot_1.string)(),
    description: (0, valibot_1.optional)((0, valibot_1.string)()),
    creatorId: (0, valibot_1.string)(),
    creator: User_1.UserSchema,
    parentId: (0, valibot_1.string)(),
    consensus: (0, valibot_1.number)(),
    voted: (0, valibot_1.optional)((0, valibot_1.number)()),
});
function statementToSimpleStatement(statement) {
    const simple = {
        statementId: statement.statementId,
        statement: statement.statement,
        description: statement.description,
        creatorId: statement.creatorId,
        creator: statement.creator,
        parentId: statement.parentId,
        consensus: statement.consensus,
        voted: statement.voted || 0,
    };
    return simple;
}
