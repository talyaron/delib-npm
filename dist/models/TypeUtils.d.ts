import { Role } from './user/UserSettings';
export declare function isMember(role: Role | undefined): boolean;
export declare function maxKeyInObject(obj: {
    [key: string]: number;
}): string;
export declare function getRandomUID(numberOfChars?: number): string;
