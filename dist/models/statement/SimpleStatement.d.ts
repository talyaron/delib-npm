import { BaseSchema, InferOutput } from 'valibot';
import { Statement } from './StatementTypes';
export declare const SimpleStatementSchema: BaseSchema<any, any, any>;
export type SimpleStatement = InferOutput<typeof SimpleStatementSchema>;
export declare function statementToSimpleStatement(statement: Statement): SimpleStatement;
