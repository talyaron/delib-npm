import { StatementType } from "../models/statementsModels";
import { Role } from "../models/usersModels";
export function maxKeyInObject(obj) {
    return Object.keys(obj).reduce((a, b) => obj[a] > obj[b] ? a : b);
}
export function getStatementSubscriptionId(statementId, user) {
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
export function isOptionFn(statement) {
    try {
        return (statement.statementType === StatementType.option);
    }
    catch (error) {
        console.error(error);
        return false;
    }
}
export function isMember(role) {
    if (role === Role.admin || role === Role.member || role === Role.creator)
        return true;
    return false;
}
export function updateArray(currentArray, newItem, updateByProperty) {
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
export function writeZodError(error, object) {
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
export function getRandomUID(stringLength = 12) {
    const chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-";
    const array = new Uint8Array(stringLength);
    crypto.getRandomValues(array);
    let result = "";
    for (let i = 0; i < stringLength; i++) {
        result += chars[array[i] % chars.length];
    }
    return result;
}
//# sourceMappingURL=helpers.js.map