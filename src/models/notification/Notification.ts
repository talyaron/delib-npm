import { object, string, optional, nullable, number, boolean, InferOutput, enum_ } from 'valibot';
import { StatementType } from '../TypeEnums';

export const NotificationSchema = object({
	userId: string(),
	parentId: string(),
	statementId: string(),
	statementType: enum_(StatementType),
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