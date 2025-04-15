import { InferOutput } from 'valibot';
export declare const NotificationSchema: import("valibot").ObjectSchema<{
    readonly userId: import("valibot").StringSchema<undefined>;
    readonly parentId: import("valibot").StringSchema<undefined>;
    readonly statementId: import("valibot").StringSchema<undefined>;
    readonly parentStatement: import("valibot").OptionalSchema<import("valibot").StringSchema<undefined>, undefined>;
    readonly text: import("valibot").StringSchema<undefined>;
    readonly creatorId: import("valibot").StringSchema<undefined>;
    readonly creatorName: import("valibot").StringSchema<undefined>;
    readonly creatorImage: import("valibot").OptionalSchema<import("valibot").NullableSchema<import("valibot").StringSchema<undefined>, undefined>, undefined>;
    readonly createdAt: import("valibot").NumberSchema<undefined>;
    readonly read: import("valibot").BooleanSchema<undefined>;
    readonly notificationId: import("valibot").StringSchema<undefined>;
}, undefined>;
export type NotificationType = InferOutput<typeof NotificationSchema>;
