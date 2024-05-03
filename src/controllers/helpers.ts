import { User } from "../models/usersModels";

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