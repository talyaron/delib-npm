import { SimpleStatement, Statement } from "../models/statementsModels";

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
    return simple;
}
