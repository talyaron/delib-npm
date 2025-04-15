"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificationSchema = void 0;
const valibot_1 = require("valibot");
exports.NotificationSchema = (0, valibot_1.object)({
    userId: (0, valibot_1.string)(),
    parentId: (0, valibot_1.string)(),
    statementId: (0, valibot_1.string)(),
    parentStatement: (0, valibot_1.optional)((0, valibot_1.string)()),
    text: (0, valibot_1.string)(),
    creatorId: (0, valibot_1.string)(),
    creatorName: (0, valibot_1.string)(),
    creatorImage: (0, valibot_1.optional)((0, valibot_1.nullable)((0, valibot_1.string)())),
    createdAt: (0, valibot_1.number)(),
    read: (0, valibot_1.boolean)(),
    notificationId: (0, valibot_1.string)(),
});
