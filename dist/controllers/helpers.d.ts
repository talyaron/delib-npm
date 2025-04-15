import { StatementSubscription } from "../models/statement/StatementSubscription";
import { Statement } from "../models/statement/StatementTypes";
import { Creator, User } from "../models/user/User";
import { Role } from "../models/user/UserSettings";
interface SetSubscriptionProps {
    statement: Statement;
    user: User | Creator;
    role?: Role;
    getInAppNotification?: boolean;
    getEmailNotification?: boolean;
    getPushNotification?: boolean;
}
export declare function createSubscription({ statement, user, role, getInAppNotification, getEmailNotification, getPushNotification, }: SetSubscriptionProps): StatementSubscription | undefined;
export declare function updateArray<T>(currentArray: Array<T>, newItem: T, updateByProperty: keyof T & string): Array<T>;
export {};
