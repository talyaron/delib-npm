"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRequestIdToJoinRoom = exports.RoomAskToJoinSchema = exports.RoomSchema = void 0;
const zod_1 = require("zod");
const usersModels_1 = require("./usersModels");
exports.RoomSchema = zod_1.z.object({
    statementId: zod_1.z.string(),
    parentId: zod_1.z.string(),
    participants: zod_1.z.array(usersModels_1.UserSchema),
});
exports.RoomAskToJoinSchema = zod_1.z.object({
    participant: usersModels_1.UserSchema,
    requestId: zod_1.z.string(),
    statementId: zod_1.z.string(),
    parentId: zod_1.z.string()
});
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
