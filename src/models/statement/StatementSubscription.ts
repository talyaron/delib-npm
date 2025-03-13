import {
	object,
	string,
	number,
	optional,
	array,
	enum_,
	InferOutput,
	boolean,
} from 'valibot';
import { Creator, CreatorSchema, User, UserSchema } from '../user/User';
import { Role } from '../user/UserSettings';
import { StatementSchema } from './StatementTypes';

export const StatementSubscriptionSchema = object({
	role: enum_(Role),
	userId: string(),
	statementId: string(),
	lastUpdate: number(),
	createdAt: optional(number()),
	statementsSubscribeId: string(),
	statement: StatementSchema,
	token: optional(array(string())),
	totalSubStatementsRead: optional(number()),
	user: UserSchema || CreatorSchema,
	getInAppNotification: optional(boolean()),
	getEmailNotification: optional(boolean()),
	getPushNotification: optional(boolean()),
});

export type StatementSubscription = InferOutput<
	typeof StatementSubscriptionSchema
>;

export function getStatementSubscriptionId(
	statementId: string,
	user: User | Creator
): string | undefined {
	return `${user.uid}--${statementId}`;
}

export const StatementViewSchema = object({
	statementId: string(),
	userId: string(),
	viewed: number(),
	lastViewed: number(),
	parentDocumentId: string(),
});

export type StatementView = InferOutput<typeof StatementViewSchema>;
