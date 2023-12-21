"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getVoteId = void 0;
function getVoteId(userId, parentId) {
    return `${userId}--${parentId}`;
}
exports.getVoteId = getVoteId;
