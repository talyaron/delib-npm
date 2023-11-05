"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoomsStateSelectionEnum = exports.RoomsStateSelection = exports.LobbyRoomsSchema = exports.RoomAskToJoinSchema = exports.RoomSchema = void 0;
const zod_1 = require("zod");
const usersModels_1 = require("./usersModels");
const statementsModels_1 = require("./statementsModels");
exports.RoomSchema = zod_1.z.object({
    statementId: zod_1.z.string(),
    parentId: zod_1.z.string(),
    participants: zod_1.z.array(usersModels_1.UserSchema),
});
exports.RoomAskToJoinSchema = zod_1.z.object({
    participant: usersModels_1.UserSchema,
    statement: zod_1.z.union([statementsModels_1.StatementSchema, zod_1.z.undefined()]),
    requestId: zod_1.z.string(),
    statementId: zod_1.z.string().optional(),
    parentId: zod_1.z.string(),
    roomNumber: zod_1.z.number().optional(),
    approved: zod_1.z.boolean().optional(),
    lastUpdate: zod_1.z.number().optional(),
});
exports.LobbyRoomsSchema = zod_1.z.object({
    joinersCount: zod_1.z.number(),
    parentId: zod_1.z.string(),
    statementId: zod_1.z.string()
});
//enum for zod rooms state selection
var RoomsStateSelection;
(function (RoomsStateSelection) {
    RoomsStateSelection["SELECT_ROOMS"] = "SELECT_ROOMS";
    RoomsStateSelection["DIVIDE"] = "DIVIDE";
})(RoomsStateSelection || (exports.RoomsStateSelection = RoomsStateSelection = {}));
;
//zod for rooms state selection
exports.RoomsStateSelectionEnum = zod_1.z.enum([RoomsStateSelection.SELECT_ROOMS, RoomsStateSelection.DIVIDE]);
