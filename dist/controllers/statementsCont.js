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
        voted: statement.voted || 0
    };
    //remove properties that are undefined
    return simple;
}
exports.statementToSimpleStatement = statementToSimpleStatement;
function isAllowedStatementType({ parentStatement, statement, statementType }) {
    try {
        // Tal Yaron: 03/07/2024 - I changed to enable every type under every type, because I have seen that people are trying to add options under options...
        // maybe in the future we will need to change it back to the original logic
        statementType = statementType || statement?.statementType || undefined;
        if (!statementType)
            throw new Error("No statementType");
        const isOption = statement !== undefined ? (0, helpers_1.isOptionFn)(statement) : (statementType === statementsModels_1.StatementType.option);
        const isQuestion = statementType === statementsModels_1.StatementType.question;
        const isStatement = statementType === statementsModels_1.StatementType.statement;
        const isParentOption = parentStatement !== "top" && (0, helpers_1.isOptionFn)(parentStatement);
        const isParentStatement = parentStatement !== "top" && parentStatement.statementType === statementsModels_1.StatementType.statement;
        const isParentQuestion = parentStatement === "top" ? true : parentStatement.statementType === statementsModels_1.StatementType.question;
        //parent statement is a question the child statement can be a question or an option or a statement
        // if (isParentQuestion) {
        //     if (isQuestion) return true;
        //     if (isStatement) return true;
        //     if (isOption) return true;
        // }
        //parent statement is an option the child statement can be an option or a statement
        // if (isParentOption) {
        //     if (isStatement) return true;
        //     if (isQuestion) return true;
        //     if (isOption) return true;
        // }
        //parent statement is a statement the child statement can be a statement or a question
        // if (isParentStatement) {
        //     if (isStatement) return true;
        //     if (isQuestion) return true;
        //     if (isOption) return true;
        // }
        return true;
    }
    catch (error) {
        console.error("isAllowedStatementType error", error);
        return false;
    }
}
exports.isAllowedStatementType = isAllowedStatementType;
