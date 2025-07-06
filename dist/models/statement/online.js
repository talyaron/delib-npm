"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OnlineSchema = void 0;
const valibot_1 = require("valibot");
const User_1 = require("../user/User");
exports.OnlineSchema = (0, valibot_1.object)({
    statementId: (0, valibot_1.string)(),
    onlineId: (0, valibot_1.string)(),
    user: User_1.CreatorSchema,
    lastUpdated: (0, valibot_1.number)(),
    tabInFocus: (0, valibot_1.boolean)(),
});
