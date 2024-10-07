"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificationSchema = void 0;
const zod_1 = require("zod");
exports.NotificationSchema = zod_1.z.object({
    userId: zod_1.z.string(),
    parentId: zod_1.z.string(),
    text: zod_1.z.string(),
    creatorName: zod_1.z.string(),
    creatorImage: zod_1.z.string().nullable().optional(),
    createdAt: zod_1.z.number(),
    read: zod_1.z.boolean(),
    notificationId: zod_1.z.string(),
});
