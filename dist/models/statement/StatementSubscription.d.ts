import { InferOutput } from 'valibot';
import { Creator, User } from '../user/User';
import { Role } from '../user/UserSettings';
export declare const StatementSubscriptionSchema: import("valibot").ObjectSchema<{
    readonly role: import("valibot").EnumSchema<typeof Role, undefined>;
    readonly userId: import("valibot").StringSchema<undefined>;
    readonly statementId: import("valibot").StringSchema<undefined>;
    readonly lastUpdate: import("valibot").NumberSchema<undefined>;
    readonly createdAt: import("valibot").OptionalSchema<import("valibot").NumberSchema<undefined>, undefined>;
    readonly statementsSubscribeId: import("valibot").StringSchema<undefined>;
    readonly statement: import("valibot").BaseSchema<any, any, any>;
    readonly lastSubStatements: import("valibot").OptionalSchema<import("valibot").ArraySchema<import("valibot").BaseSchema<any, any, any>, undefined>, undefined>;
    readonly tokens: import("valibot").OptionalSchema<import("valibot").ArraySchema<import("valibot").StringSchema<undefined>, undefined>, undefined>;
    readonly totalSubStatementsRead: import("valibot").OptionalSchema<import("valibot").NumberSchema<undefined>, undefined>;
    readonly lastReadTimestamp: import("valibot").OptionalSchema<import("valibot").NumberSchema<undefined>, undefined>;
    readonly user: import("valibot").ObjectSchema<{
        readonly displayName: import("valibot").StringSchema<undefined>;
        readonly defaultLanguage: import("valibot").OptionalSchema<import("valibot").StringSchema<undefined>, undefined>;
        readonly email: import("valibot").OptionalSchema<import("valibot").NullableSchema<import("valibot").StringSchema<undefined>, undefined>, undefined>;
        readonly photoURL: import("valibot").OptionalSchema<import("valibot").NullableSchema<import("valibot").StringSchema<undefined>, undefined>, undefined>;
        readonly uid: import("valibot").StringSchema<undefined>;
        readonly isAnonymous: import("valibot").OptionalSchema<import("valibot").BooleanSchema<undefined>, undefined>;
        readonly fontSize: import("valibot").OptionalSchema<import("valibot").NullableSchema<import("valibot").NumberSchema<undefined>, undefined>, undefined>;
        readonly color: import("valibot").OptionalSchema<import("valibot").StringSchema<undefined>, undefined>;
        readonly agreement: import("valibot").OptionalSchema<import("valibot").NullableSchema<import("valibot").ObjectSchema<{
            readonly text: import("valibot").StringSchema<undefined>;
            readonly date: import("valibot").NumberSchema<undefined>;
            readonly version: import("valibot").StringSchema<undefined>;
        }, undefined>, undefined>, undefined>;
        readonly role: import("valibot").OptionalSchema<import("valibot").StringSchema<undefined>, undefined>;
    }, undefined>;
    readonly getInAppNotification: import("valibot").OptionalSchema<import("valibot").BooleanSchema<undefined>, undefined>;
    readonly getEmailNotification: import("valibot").OptionalSchema<import("valibot").BooleanSchema<undefined>, undefined>;
    readonly getPushNotification: import("valibot").OptionalSchema<import("valibot").BooleanSchema<undefined>, undefined>;
}, undefined>;
export type StatementSubscription = InferOutput<typeof StatementSubscriptionSchema>;
export declare function getStatementSubscriptionId(statementId: string, user: User | Creator): string | undefined;
export declare const StatementViewSchema: import("valibot").ObjectSchema<{
    readonly statementId: import("valibot").StringSchema<undefined>;
    readonly userId: import("valibot").StringSchema<undefined>;
    readonly viewed: import("valibot").NumberSchema<undefined>;
    readonly lastViewed: import("valibot").NumberSchema<undefined>;
    readonly parentDocumentId: import("valibot").StringSchema<undefined>;
}, undefined>;
export type StatementView = InferOutput<typeof StatementViewSchema>;
export declare const WaitingMemberSchema: import("valibot").ObjectSchema<{
    readonly adminId: import("valibot").StringSchema<undefined>;
    readonly role: import("valibot").EnumSchema<typeof Role, undefined>;
    readonly userId: import("valibot").StringSchema<undefined>;
    readonly statementId: import("valibot").StringSchema<undefined>;
    readonly lastUpdate: import("valibot").NumberSchema<undefined>;
    readonly createdAt: import("valibot").OptionalSchema<import("valibot").NumberSchema<undefined>, undefined>;
    readonly statementsSubscribeId: import("valibot").StringSchema<undefined>;
    readonly statement: import("valibot").BaseSchema<any, any, any>;
    readonly lastSubStatements: import("valibot").OptionalSchema<import("valibot").ArraySchema<import("valibot").BaseSchema<any, any, any>, undefined>, undefined>;
    readonly tokens: import("valibot").OptionalSchema<import("valibot").ArraySchema<import("valibot").StringSchema<undefined>, undefined>, undefined>;
    readonly totalSubStatementsRead: import("valibot").OptionalSchema<import("valibot").NumberSchema<undefined>, undefined>;
    readonly lastReadTimestamp: import("valibot").OptionalSchema<import("valibot").NumberSchema<undefined>, undefined>;
    readonly user: import("valibot").ObjectSchema<{
        readonly displayName: import("valibot").StringSchema<undefined>;
        readonly defaultLanguage: import("valibot").OptionalSchema<import("valibot").StringSchema<undefined>, undefined>;
        readonly email: import("valibot").OptionalSchema<import("valibot").NullableSchema<import("valibot").StringSchema<undefined>, undefined>, undefined>;
        readonly photoURL: import("valibot").OptionalSchema<import("valibot").NullableSchema<import("valibot").StringSchema<undefined>, undefined>, undefined>;
        readonly uid: import("valibot").StringSchema<undefined>;
        readonly isAnonymous: import("valibot").OptionalSchema<import("valibot").BooleanSchema<undefined>, undefined>;
        readonly fontSize: import("valibot").OptionalSchema<import("valibot").NullableSchema<import("valibot").NumberSchema<undefined>, undefined>, undefined>;
        readonly color: import("valibot").OptionalSchema<import("valibot").StringSchema<undefined>, undefined>;
        readonly agreement: import("valibot").OptionalSchema<import("valibot").NullableSchema<import("valibot").ObjectSchema<{
            readonly text: import("valibot").StringSchema<undefined>;
            readonly date: import("valibot").NumberSchema<undefined>;
            readonly version: import("valibot").StringSchema<undefined>;
        }, undefined>, undefined>, undefined>;
        readonly role: import("valibot").OptionalSchema<import("valibot").StringSchema<undefined>, undefined>;
    }, undefined>;
    readonly getInAppNotification: import("valibot").OptionalSchema<import("valibot").BooleanSchema<undefined>, undefined>;
    readonly getEmailNotification: import("valibot").OptionalSchema<import("valibot").BooleanSchema<undefined>, undefined>;
    readonly getPushNotification: import("valibot").OptionalSchema<import("valibot").BooleanSchema<undefined>, undefined>;
}, undefined>;
export type WaitingMember = InferOutput<typeof WaitingMemberSchema>;
