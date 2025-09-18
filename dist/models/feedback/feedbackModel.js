"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FeedbackSchema = void 0;
const valibot_1 = require("valibot");
const User_1 = require("../user/User");
exports.FeedbackSchema = (0, valibot_1.object)({
    feedbackId: (0, valibot_1.string)(),
    statementId: (0, valibot_1.string)(),
    statementTitle: (0, valibot_1.string)(),
    feedbackText: (0, valibot_1.string)(),
    createdAt: (0, valibot_1.number)(),
    creator: User_1.CreatorSchema,
    email: (0, valibot_1.optional)((0, valibot_1.string)())
});
