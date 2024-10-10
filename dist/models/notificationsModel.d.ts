import { z } from 'zod';
export declare const NotificationSchema: z.ZodObject<{
    userId: z.ZodString;
    parentId: z.ZodString;
    parentStatement: z.ZodOptional<z.ZodString>;
    text: z.ZodString;
    creatorName: z.ZodString;
    creatorImage: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    createdAt: z.ZodNumber;
    read: z.ZodBoolean;
    notificationId: z.ZodString;
}, "strip", z.ZodTypeAny, {
    text: string;
    userId: string;
    parentId: string;
    createdAt: number;
    creatorName: string;
    read: boolean;
    notificationId: string;
    parentStatement?: string | undefined;
    creatorImage?: string | null | undefined;
}, {
    text: string;
    userId: string;
    parentId: string;
    createdAt: number;
    creatorName: string;
    read: boolean;
    notificationId: string;
    parentStatement?: string | undefined;
    creatorImage?: string | null | undefined;
}>;
export type NotificationType = z.infer<typeof NotificationSchema>;
