"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isOptionFn = exports.getStatementSubscriptionId = exports.maxKeyInObject = void 0;
const statementsModels_1 = require("../models/statementsModels");
function maxKeyInObject(obj) {
    return Object.keys(obj).reduce((a, b) => obj[a] > obj[b] ? a : b);
}
exports.maxKeyInObject = maxKeyInObject;
function getStatementSubscriptionId(statementId, user) {
    try {
        if (!user || !user.uid)
            throw new Error("No user");
        if (!statementId)
            throw new Error("No statementId");
        return `${user.uid}--${statementId}`;
    }
    catch (error) {
        console.error(error);
        return undefined;
    }
}
exports.getStatementSubscriptionId = getStatementSubscriptionId;
/** enter statement to see if it is an option */
function isOptionFn(statement) {
    try {
        return (statement.statementType === statementsModels_1.StatementType.option ||
            statement.statementType === statementsModels_1.StatementType.result);
    }
    catch (error) {
        console.error(error);
        return false;
    }
}
exports.isOptionFn = isOptionFn;
