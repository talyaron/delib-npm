import {z} from 'zod';

export const NotificationSchema = z.object({
    userId: z.string(),
    parentId: z.string(),
    text: z.string(),
    creatorName: z.string(),
    creatorImage: z.string().nullable().optional(),
    createdAt: z.number(),
    read: z.boolean(),
    notificationId: z.string(),
});

export type NotificationType = z.infer<typeof NotificationSchema>;