import { Statement, StatementType } from "../models/statementsModels";
import { Role, User } from "../models/usersModels";

export function maxKeyInObject(obj: { [key: string]: number }): string {
    return Object.keys(obj).reduce((a, b) => obj[a] > obj[b] ? a : b);
}

export function getStatementSubscriptionId(
    statementId: string,
    user: User,
): string | undefined {
    try {
        if (!user || !user.uid) throw new Error("No user");
        if (!statementId) throw new Error("No statementId");

        return `${user.uid}--${statementId}`;
    } catch (error) {
        console.error(error);

        return undefined;
    }
}

/** enter statement to see if it is an option */
export function isOptionFn(statement: Statement): boolean {
    try {
        return (
            statement.statementType === StatementType.option ||
            statement.statementType === StatementType.result
        );
    } catch (error) {
        console.error(error);

        return false;
    }
}

export function isMember(role:Role):boolean{
    if(role === Role.admin || role === Role.member || role === Role.creator) return true;
    return false;
}