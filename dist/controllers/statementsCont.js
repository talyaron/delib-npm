"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.statementToSimpleStatement = void 0;
function statementToSimpleStatement(statement) {
    const simple = {
        statementId: statement.statementId,
        statement: statement.statement,
        creatorId: statement.creatorId,
        creator: statement.creator,
        parentId: statement.parentId,
        consensus: statement.consensus,
        voted: statement.voted
    };
    //remove properties that are undefined
    if (simple.voted === undefined)
        delete simple.voted;
    return simple;
}
exports.statementToSimpleStatement = statementToSimpleStatement;
