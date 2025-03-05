import { InferOutput, number, object, optional, string } from 'valibot';
import { Statement } from './StatementTypes';
import { UserSchema } from '../user/User';

export const SimpleStatementSchema = object({
	statementId: string(),
	statement: string(),
	description: optional(string()),
	creatorId: string(),
	creator: UserSchema,
	parentId: string(),
	consensus: number(),
	imageURL: optional(string()),
	voted: optional(number()),
});

export type SimpleStatement = InferOutput<typeof SimpleStatementSchema>;

export function statementToSimpleStatement(
	statement: Statement
): SimpleStatement {
	const simple: SimpleStatement = {
		statementId: statement.statementId,
		statement: statement.statement,
		description: statement.description ?? '',
		creatorId: statement.creatorId,
		creator: statement.creator,
		parentId: statement.parentId,
		consensus: statement.consensus ?? 0,
		voted: statement.voted ?? 0
	};

	if (statement.imagesURL?.main) simple.imageURL = statement.imagesURL?.main;

	return simple;
}
