import { z } from 'zod';
export const NotificationSchema = z.object({
    userId: z.string(),
    parentId: z.string(),
    parentStatement: z.string().optional(),
    text: z.string(),
    creatorName: z.string(),
    creatorImage: z.string().nullable().optional(),
    createdAt: z.number(),
    read: z.boolean(),
    notificationId: z.string(),
});
//# sourceMappingURL=notificationsModel.js.map