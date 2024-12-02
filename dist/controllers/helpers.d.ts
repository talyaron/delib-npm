import { ZodError } from "zod";
import { Statement } from "../models/statementsModels";
import { Role, User } from "../models/usersModels";
export declare function maxKeyInObject(obj: {
    [key: string]: number;
}): string;
export declare function getStatementSubscriptionId(statementId: string, user: User): string | undefined;
/** enter statement to see if it is an option */
export declare function isOptionFn(statement: Statement): boolean;
export declare function isMember(role: Role | undefined): boolean;
export declare function updateArray<T>(currentArray: Array<T>, newItem: T, updateByProperty: keyof T & string): Array<T>;
export declare function writeZodError(error: ZodError, object: unknown): void;
export declare function getRandomUID(numberOfChars?: number): string;
