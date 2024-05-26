import { Statement } from "../models/statementsModels";
import { User } from "../models/usersModels";
export declare function maxKeyInObject(obj: {
    [key: string]: number;
}): string;
export declare function getStatementSubscriptionId(statementId: string, user: User): string | undefined;
/** enter statement to see if it is an option */
export declare function isOptionFn(statement: Statement): boolean;
