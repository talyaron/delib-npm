import { SimpleStatement, Statement, StatementType } from "../models/statementsModels";
export declare function statementToSimpleStatement(statement: Statement): SimpleStatement;
interface IsAllowedStatementTypeProps {
    parentStatement: Statement | "top";
    statement?: Statement;
    statementType?: StatementType;
}
export declare function isAllowedStatementType({ parentStatement, statement, statementType }: IsAllowedStatementTypeProps): boolean;
export {};
