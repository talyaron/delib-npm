"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isMember = isMember;
exports.maxKeyInObject = maxKeyInObject;
exports.getRandomUID = getRandomUID;
const UserSettings_1 = require("./user/UserSettings");
function isMember(role) {
    if (role === UserSettings_1.Role.admin || role === UserSettings_1.Role.member || role === UserSettings_1.Role.creator)
        return true;
    return false;
}
function maxKeyInObject(obj) {
    try {
        if (obj === undefined)
            throw new Error('obj is undefined');
        let maxKey = Object.keys(obj)[0];
        let maxValue = obj[maxKey];
        for (const key in obj) {
            if (obj[key] > maxValue) {
                maxValue = obj[key];
                maxKey = key;
            }
        }
        return maxKey;
    }
    catch (error) {
        console.error(error);
        return '';
    }
}
function getRandomUID(numberOfChars = 12) {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-0123456789';
    let randomString = '';
    for (let i = 0; i < numberOfChars; i++) {
        randomString += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return randomString;
}
