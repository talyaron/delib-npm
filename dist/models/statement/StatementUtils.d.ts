import { Statement } from './StatementTypes';
import { StatementType } from '../TypeEnums';
import { StageSelectionType } from '../stage/stageTypes';
import { User } from '../user/User';
interface CreateBasicStatementProps {
    parentStatement: Statement;
    user: User;
    stageSelectionType?: StageSelectionType;
    statementType?: StatementType;
    statement: string;
    description?: string;
}
export declare function createBasicStatement({ parentStatement, user, stageSelectionType, statementType, statement, description, }: CreateBasicStatementProps): Statement | undefined;
export {};
