import { InferOutput } from 'valibot';
import { QuestionType, StatementType } from '../TypeEnums';
export declare const NotificationSchema: import("valibot").ObjectSchema<{
    readonly userId: import("valibot").StringSchema<undefined>;
    readonly parentId: import("valibot").StringSchema<undefined>;
    readonly statementId: import("valibot").StringSchema<undefined>;
    readonly statementType: import("valibot").EnumSchema<typeof StatementType, undefined>;
    readonly parentStatement: import("valibot").OptionalSchema<import("valibot").StringSchema<undefined>, undefined>;
    readonly questionType: import("valibot").OptionalSchema<import("valibot").EnumSchema<typeof QuestionType, undefined>, undefined>;
    readonly text: import("valibot").StringSchema<undefined>;
    readonly creatorId: import("valibot").StringSchema<undefined>;
    readonly creatorName: import("valibot").StringSchema<undefined>;
    readonly creatorImage: import("valibot").OptionalSchema<import("valibot").NullableSchema<import("valibot").StringSchema<undefined>, undefined>, undefined>;
    readonly createdAt: import("valibot").NumberSchema<undefined>;
    readonly read: import("valibot").BooleanSchema<undefined>;
    readonly notificationId: import("valibot").StringSchema<undefined>;
    readonly readAt: import("valibot").OptionalSchema<import("valibot").NumberSchema<undefined>, undefined>;
    readonly viewedInList: import("valibot").OptionalSchema<import("valibot").BooleanSchema<undefined>, undefined>;
    readonly viewedInContext: import("valibot").OptionalSchema<import("valibot").BooleanSchema<undefined>, undefined>;
}, undefined>;
export type NotificationType = InferOutput<typeof NotificationSchema>;
export declare enum ReadContext {
    LIST = "list",
    CHAT = "chat",
    STATEMENT = "statement"
}
export declare const NotificationReadStatusSchema: import("valibot").ObjectSchema<{
    readonly userId: import("valibot").StringSchema<undefined>;
    readonly notificationId: import("valibot").StringSchema<undefined>;
    readonly statementId: import("valibot").StringSchema<undefined>;
    readonly readAt: import("valibot").NumberSchema<undefined>;
    readonly readContext: import("valibot").EnumSchema<typeof ReadContext, undefined>;
}, undefined>;
export type NotificationReadStatusType = InferOutput<typeof NotificationReadStatusSchema>;
