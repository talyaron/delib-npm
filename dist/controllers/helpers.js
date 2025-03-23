"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createSubscription = createSubscription;
const valibot_1 = require("valibot");
const StatementSubscription_1 = require("../models/statement/StatementSubscription");
const UserSettings_1 = require("../models/user/UserSettings");
function createSubscription({ statement, user, role = UserSettings_1.Role.member, getInAppNotification = true, getEmailNotification = false, getPushNotification = false, }) {
    try {
        const newStatementSubscriptionId = (0, StatementSubscription_1.getStatementSubscriptionId)(statement.statementId, user);
        if (!newStatementSubscriptionId)
            throw new Error('No newStatementSubscriptionId');
        const newSubscription = {
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
        return (0, valibot_1.parse)(StatementSubscription_1.StatementSubscriptionSchema, newSubscription);
    }
    catch (error) {
        console.error(error);
        return undefined;
    }
}
