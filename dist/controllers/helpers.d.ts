import { User } from "../models/usersModels";
export declare function maxKeyInObject(obj: {
    [key: string]: number;
}): string;
export declare function getStatementSubscriptionId(statementId: string, user: User): string | undefined;
