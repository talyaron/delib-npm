"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getStatementSubscriptionId = exports.maxKeyInObject = void 0;
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
