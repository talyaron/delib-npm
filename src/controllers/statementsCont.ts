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
        voted: statement.voted

    };

    //remove properties that are undefined
    if (simple.voted === undefined) delete simple.voted;
    return simple;
}

interface IsAllowedStatementTypeProps { parentStatement: Statement | "top", statement?: Statement, statementType?: StatementType }

export function isAllowedStatementType({ parentStatement, statement, statementType }: IsAllowedStatementTypeProps): boolean {
    try {

        statementType = statementType || statement?.statementType || undefined;
        if (!statementType) throw new Error("No statementType");

        const isOption = statement !== undefined ? isOptionFn(statement) : (statementType === StatementType.option || statementType === StatementType.result);
        const isQuestion = statementType === StatementType.question;
        const isStatement = statementType === StatementType.statement;

        const isParentOption = parentStatement !== "top" && isOptionFn(parentStatement);
        const isParentStatement = parentStatement !== "top" && parentStatement.statementType === StatementType.statement;
        const isParentQuestion = parentStatement === "top" ? true : parentStatement.statementType === StatementType.question;

        //parent statement is a question the child statement can be a question or an option or a statement
        if (isParentQuestion) {
            if (isQuestion) return true;
            if (isStatement) return true;
            if (isOption) return true;
        }

        //parent statement is an option the child statement can be an option or a statement
        if (isParentOption) {
            if (isStatement) return true;
            if (isQuestion) return true;
        }

        //parent statement is a statement the child statement can be a statement or a question
        if (isParentStatement) {
            if (isStatement) return true;
            if (isQuestion) return true;
        }


        return false;
    } catch (error) {
        console.error("isAllowedStatementType error", error);
        return false;
    }
}


