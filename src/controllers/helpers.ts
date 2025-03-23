import { parse } from "valibot";
import { getStatementSubscriptionId, StatementSubscription, StatementSubscriptionSchema } from "../models/statement/StatementSubscription";
import { Statement } from "../models/statement/StatementTypes";
import { Creator, User } from "../models/user/User";
import { Role } from "../models/user/UserSettings";

interface SetSubscriptionProps {
    statement: Statement;
    user: User | Creator;
    role?: Role;
    getInAppNotification?: boolean;
    getEmailNotification?: boolean;
    getPushNotification?: boolean;
}

export function createSubscription({
    statement,
    user,
    role = Role.member,
    getInAppNotification = true,
    getEmailNotification = false,
    getPushNotification = false,

}: SetSubscriptionProps): StatementSubscription | undefined {
    try {
        const newStatementSubscriptionId = getStatementSubscriptionId(
            statement.statementId,
            user
        );
        if (!newStatementSubscriptionId)
            throw new Error('No newStatementSubscriptionId');
        const newSubscription: StatementSubscription = {
            statementId: statement.statementId,
            role,
            lastUpdate: Date.now(),
            statement: statement,
            statementsSubscribeId: newStatementSubscriptionId,
            user: statement.creator,
            userId: user.uid,
            getInAppNotification,
            getEmailNotification,
            getPushNotification,
        };

        return parse(StatementSubscriptionSchema, newSubscription);
    } catch (error) {
        console.error(error);

        return undefined;
    }
}