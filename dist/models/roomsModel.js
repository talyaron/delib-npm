"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ParticipantInRoomSchema = exports.roomSettingsSchema = exports.RoomSchema = void 0;
const zod_1 = require("zod");
const usersModels_1 = require("./usersModels");
const statementsModels_1 = require("./statementsModels");
const timersModel_1 = require("./timersModel");
exports.RoomSchema = zod_1.z.object({
    statement: statementsModels_1.StatementSchema,
    roomNumber: zod_1.z.number(),
    roomId: zod_1.z.string(),
});
exports.roomSettingsSchema = zod_1.z.object({
    roomSettingsId: zod_1.z.string(),
    isEdit: zod_1.z.boolean(),
    timers: zod_1.z.array(timersModel_1.SetTimerSchema),
});
exports.ParticipantInRoomSchema = zod_1.z.object({
    user: usersModels_1.UserSchema,
    roomNumber: zod_1.z.number().optional(),
    statement: statementsModels_1.StatementSchema,
    participantInRoomId: zod_1.z.string(),
});
