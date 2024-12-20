"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VoteSchema = void 0;
const zod_1 = require("zod");
const usersModels_1 = require("./usersModels");
exports.VoteSchema = zod_1.z.object({
    voteId: zod_1.z.string(),
    statementId: zod_1.z.string(),
    userId: zod_1.z.string(),
    parentId: zod_1.z.string(),
    lastUpdate: zod_1.z.number(),
    createdAt: zod_1.z.number(),
    voter: usersModels_1.UserSchema.optional(), //in Feb 2023 remove optional
});
//# sourceMappingURL=votesModel.js.map