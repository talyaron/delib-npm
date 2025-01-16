import { StageType } from "../models/stageModal";
import { SimpleStatement, Statement, StatementType } from "../models/statementsModels";
import { User } from "../models/usersModels";
export declare function statementToSimpleStatement(statement: Statement): SimpleStatement;
interface IsAllowedStatementTypeProps {
    parentStatement: Statement | "top";
    statement?: Statement;
    statementType?: StatementType;
}
export declare function isAllowedStatementType({ parentStatement, statement, statementType }: IsAllowedStatementTypeProps): boolean;
interface createBasicStatementProps {
    parentStatement: Statement;
    user: User;
    stageType?: StageType;
    statement: string;
    description?: string;
}
export declare function createBasicStatement({ parentStatement, user, stageType, statement, description, }: createBasicStatementProps): Statement | undefined;
export {};
