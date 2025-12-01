"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoomParticipantSchema = exports.RoomSchema = exports.RoomSettingsSchema = exports.RoomSettingsStatusSchema = exports.DemographicTagSchema = void 0;
const valibot_1 = require("valibot");
const User_1 = require("../user/User");
// Demographic Tag Schema
exports.DemographicTagSchema = (0, valibot_1.object)({
    questionId: (0, valibot_1.string)(),
    questionText: (0, valibot_1.string)(),
    answer: (0, valibot_1.string)(),
    color: (0, valibot_1.optional)((0, valibot_1.string)()),
});
// Room Settings Status
exports.RoomSettingsStatusSchema = (0, valibot_1.picklist)(['draft', 'active', 'archived']);
// Room Settings Schema
exports.RoomSettingsSchema = (0, valibot_1.object)({
    settingsId: (0, valibot_1.string)(),
    statementId: (0, valibot_1.string)(),
    topParentId: (0, valibot_1.string)(),
    roomSize: (0, valibot_1.pipe)((0, valibot_1.number)(), (0, valibot_1.minValue)(2)),
    scrambleByQuestions: (0, valibot_1.array)((0, valibot_1.string)()),
    createdAt: (0, valibot_1.number)(),
    lastUpdate: (0, valibot_1.number)(),
    createdBy: User_1.CreatorSchema,
    status: exports.RoomSettingsStatusSchema,
    totalRooms: (0, valibot_1.pipe)((0, valibot_1.number)(), (0, valibot_1.minValue)(0)),
    totalParticipants: (0, valibot_1.pipe)((0, valibot_1.number)(), (0, valibot_1.minValue)(0)),
    notificationSent: (0, valibot_1.boolean)(),
    notificationSentAt: (0, valibot_1.optional)((0, valibot_1.number)()),
});
// Room Schema
exports.RoomSchema = (0, valibot_1.object)({
    roomId: (0, valibot_1.string)(),
    settingsId: (0, valibot_1.string)(),
    statementId: (0, valibot_1.string)(),
    roomNumber: (0, valibot_1.pipe)((0, valibot_1.number)(), (0, valibot_1.minValue)(1)),
    roomName: (0, valibot_1.optional)((0, valibot_1.string)()),
    participants: (0, valibot_1.array)((0, valibot_1.string)()),
    createdAt: (0, valibot_1.number)(),
});
// Room Participant Schema
exports.RoomParticipantSchema = (0, valibot_1.object)({
    participantId: (0, valibot_1.string)(),
    settingsId: (0, valibot_1.string)(),
    statementId: (0, valibot_1.string)(),
    roomId: (0, valibot_1.string)(),
    roomNumber: (0, valibot_1.pipe)((0, valibot_1.number)(), (0, valibot_1.minValue)(1)),
    userId: (0, valibot_1.string)(),
    userName: (0, valibot_1.string)(),
    demographicTags: (0, valibot_1.array)(exports.DemographicTagSchema),
    assignedAt: (0, valibot_1.number)(),
    notified: (0, valibot_1.boolean)(),
});
