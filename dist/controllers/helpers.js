"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createSubscription = createSubscription;
exports.updateArray = updateArray;
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
function updateArray(currentArray, newItem, updateByProperty) {
    // Check if property exists early to avoid unnecessary operations
    if (newItem[updateByProperty] === undefined) {
        console.error(`Item doesn't have property ${updateByProperty}`);
        return currentArray;
    }
    const index = currentArray.findIndex((item) => item[updateByProperty] === newItem[updateByProperty]);
    // If item not found, just return a new array with the item added
    if (index === -1) {
        return [...currentArray, newItem];
    }
    // Check if the item actually needs to be updated
    // Avoid unnecessary spread operations and comparisons
    const existingItem = currentArray[index];
    let needsUpdate = false;
    // Compare only the keys in newItem for changes
    for (const key in newItem) {
        if (existingItem[key] !== newItem[key]) {
            needsUpdate = true;
            break;
        }
    }
    // Only create a new array if an update is needed
    if (!needsUpdate) {
        return currentArray;
    }
    // Create a new array with the updated item
    const result = [...currentArray];
    result[index] = { ...existingItem, ...newItem };
    return result;
}
