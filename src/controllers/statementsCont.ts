import { Screen, allScreens } from "../models/screensAndNavModels";
import { SimpleStatement, Statement, StatementType } from "../models/statementsModels";
import { isOptionFn } from "./helpers";

export function statementToSimpleStatement(statement: Statement): SimpleStatement {
    const simple: SimpleStatement = {
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

interface IsAllowedStatementTypeProps { parentStatement: Statement | "top", statement?: Statement, statementType?: StatementType }

export function isAllowedStatementType({ parentStatement, statement, statementType }: IsAllowedStatementTypeProps): boolean {
    try {
// Tal Yaron: 03/07/2024 - I changed to enable every type under every type, because I have seen that people are trying to add options under options...
// maybe in the future we will need to change it back to the original logic
        statementType = statementType || statement?.statementType || undefined;
        if (!statementType) throw new Error("No statementType");

        const isOption = statement !== undefined ? isOptionFn(statement) : (statementType === StatementType.option || statementType === StatementType.result);
        const isQuestion = statementType === StatementType.question;
        const isStatement = statementType === StatementType.statement;

        const isParentOption = parentStatement !== "top" && isOptionFn(parentStatement);
        const isParentStatement = parentStatement !== "top" && parentStatement.statementType === StatementType.statement;
        const isParentQuestion = parentStatement === "top" ? true : parentStatement.statementType === StatementType.question;

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
    } catch (error) {
        console.error("isAllowedStatementType error", error);
        return false;
    }
}


