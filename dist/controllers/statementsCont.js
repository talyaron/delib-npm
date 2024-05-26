"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isAllowedStatementType = exports.statementToSimpleStatement = void 0;
const statementsModels_1 = require("../models/statementsModels");
const helpers_1 = require("./helpers");
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
function isAllowedStatementType({ parentStatement, statement, statementType }) {
    try {
        statementType = statementType || statement?.statementType || undefined;
        if (!statementType)
            throw new Error("No statementType");
        const isOption = statement !== undefined ? (0, helpers_1.isOptionFn)(statement) : (statementType === statementsModels_1.StatementType.option || statementType === statementsModels_1.StatementType.result);
        const isQuestion = statementType === statementsModels_1.StatementType.question;
        const isStatement = statementType === statementsModels_1.StatementType.statement;
        const isParentOption = parentStatement !== "top" && (0, helpers_1.isOptionFn)(parentStatement);
        const isParentStatement = parentStatement !== "top" && parentStatement.statementType === statementsModels_1.StatementType.statement;
        const isParentQuestion = parentStatement === "top" ? true : parentStatement.statementType === statementsModels_1.StatementType.question;
        //parent statement is a question the child statement can be a question or an option or a statement
        if (isParentQuestion) {
            if (isQuestion)
                return true;
            if (isStatement)
                return true;
            if (isOption)
                return true;
        }
        //parent statement is an option the child statement can be an option or a statement
        if (isParentOption) {
            if (isStatement)
                return true;
            if (isQuestion)
                return true;
        }
        //parent statement is a statement the child statement can be a statement or a question
        if (isParentStatement) {
            if (isStatement)
                return true;
            if (isQuestion)
                return true;
        }
        return false;
    }
    catch (error) {
        console.error("isAllowedStatementType error", error);
        return false;
    }
}
exports.isAllowedStatementType = isAllowedStatementType;
