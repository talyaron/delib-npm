"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SimpleStatementSchema = void 0;
exports.statementToSimpleStatement = statementToSimpleStatement;
const valibot_1 = require("valibot");
const User_1 = require("../user/User");
const TypeEnums_1 = require("../TypeEnums");
exports.SimpleStatementSchema = (0, valibot_1.object)({
    statementId: (0, valibot_1.string)(),
    statement: (0, valibot_1.string)(),
    statementType: (0, valibot_1.enum_)(TypeEnums_1.StatementType),
    description: (0, valibot_1.optional)((0, valibot_1.string)()),
    creatorId: (0, valibot_1.string)(),
    creator: User_1.UserSchema,
    parentId: (0, valibot_1.string)(),
    consensus: (0, valibot_1.number)(),
    imageURL: (0, valibot_1.optional)((0, valibot_1.string)()),
    voted: (0, valibot_1.optional)((0, valibot_1.number)()),
    lastSubStatements: (0, valibot_1.optional)((0, valibot_1.array)((0, valibot_1.lazy)(() => exports.SimpleStatementSchema))),
});
function statementToSimpleStatement(statement) {
    const simple = {
        statementId: statement.statementId,
        statement: statement.statement,
        statementType: statement.statementType,
        description: statement.description ?? '',
        creatorId: statement.creatorId,
        creator: statement.creator,
        parentId: statement.parentId,
        consensus: statement.consensus ?? 0,
        voted: statement.voted ?? 0
    };
    if (statement.imagesURL?.main)
        simple.imageURL = statement.imagesURL?.main;
    return simple;
}
