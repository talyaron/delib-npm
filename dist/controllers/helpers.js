"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.maxKeyInObject = maxKeyInObject;
exports.getStatementSubscriptionId = getStatementSubscriptionId;
exports.isOptionFn = isOptionFn;
exports.isMember = isMember;
exports.updateArray = updateArray;
exports.writeZodError = writeZodError;
exports.getRandomUID = getRandomUID;
const statementsModels_1 = require("../models/statementsModels");
const usersModels_1 = require("../models/usersModels");
function maxKeyInObject(obj) {
    return Object.keys(obj).reduce((a, b) => obj[a] > obj[b] ? a : b);
}
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
/** enter statement to see if it is an option */
function isOptionFn(statement) {
    try {
        return (statement.statementType === statementsModels_1.StatementType.option);
    }
    catch (error) {
        console.error(error);
        return false;
    }
}
function isMember(role) {
    if (role === usersModels_1.Role.admin || role === usersModels_1.Role.member || role === usersModels_1.Role.creator)
        return true;
    return false;
}
function updateArray(currentArray, newItem, updateByProperty) {
    try {
        const arrayTemp = [...currentArray];
        if (!newItem[updateByProperty]) {
            throw new Error(`Item doesn't have property ${updateByProperty}`);
        }
        //find in array;
        const index = arrayTemp.findIndex((item) => item[updateByProperty] === newItem[updateByProperty]);
        if (index === -1)
            arrayTemp.push(newItem);
        else {
            const oldItem = JSON.stringify(arrayTemp[index]);
            const newItemString = JSON.stringify({
                ...arrayTemp[index],
                ...newItem,
            });
            if (oldItem !== newItemString)
                arrayTemp[index] = { ...arrayTemp[index], ...newItem };
        }
        return arrayTemp;
    }
    catch (error) {
        console.error(error);
        return currentArray;
    }
}
function writeZodError(error, object) {
    try {
        error.issues.forEach((issue) => {
            console.error(`Error at ${issue.path.join('.')}: ${issue.message} (${issue.code})`);
            console.info("Object sent:", object);
        });
    }
    catch (error) {
        console.error(error);
    }
}
function getRandomUID(stringLength = 12) {
    const chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-";
    const array = new Uint8Array(stringLength);
    crypto.getRandomValues(array);
    let result = "";
    for (let i = 0; i < stringLength; i++) {
        result += chars[array[i] % chars.length];
    }
    return result;
}
