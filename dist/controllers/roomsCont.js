"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRequestIdToJoinRoom = void 0;
function getRequestIdToJoinRoom(userId, parentId) {
    try {
        if (!userId || !parentId)
            throw new Error('userId or parentId is missing');
        return `${userId}--${parentId}`;
    }
    catch (error) {
        console.error(error);
        return undefined;
    }
}
exports.getRequestIdToJoinRoom = getRequestIdToJoinRoom;
