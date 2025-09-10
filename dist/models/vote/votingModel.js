"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VotingSettingsSchema = exports.VoteSchema = void 0;
exports.getVoteId = getVoteId;
const valibot_1 = require("valibot");
const User_1 = require("../user/User");
exports.VoteSchema = (0, valibot_1.object)({
    voteId: (0, valibot_1.string)(),
    statementId: (0, valibot_1.string)(),
    userId: (0, valibot_1.string)(),
    parentId: (0, valibot_1.string)(),
    lastUpdate: (0, valibot_1.number)(),
    createdAt: (0, valibot_1.number)(),
    voter: (0, valibot_1.optional)(User_1.UserSchema),
});
function getVoteId(userId, parentId) {
    return `${userId}--${parentId}`;
}
exports.VotingSettingsSchema = (0, valibot_1.object)({
    showPercentages: (0, valibot_1.optional)((0, valibot_1.boolean)()),
    showHighetRelativeToViewedOptions: (0, valibot_1.optional)((0, valibot_1.boolean)()),
});
