import { object, string, optional, nullable, number, boolean, InferOutput } from 'valibot';

export const NotificationSchema = object({
	userId: string(),
	parentId: string(),
	statementId: string(),
	parentStatement: optional(string()),
	text: string(),
	creatorId: string(),
	creatorName: string(),
	creatorImage: optional(nullable(string())),
	createdAt: number(),
	read: boolean(),
	notificationId: string(),
});

export type NotificationType = InferOutput<typeof NotificationSchema>;