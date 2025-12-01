import { InferOutput } from 'valibot';
export declare const DemographicTagSchema: import("valibot").ObjectSchema<{
    readonly questionId: import("valibot").StringSchema<undefined>;
    readonly questionText: import("valibot").StringSchema<undefined>;
    readonly answer: import("valibot").StringSchema<undefined>;
    readonly color: import("valibot").OptionalSchema<import("valibot").StringSchema<undefined>, undefined>;
}, undefined>;
export type DemographicTag = InferOutput<typeof DemographicTagSchema>;
export declare const RoomSettingsStatusSchema: import("valibot").PicklistSchema<["draft", "active", "archived"], undefined>;
export type RoomSettingsStatus = InferOutput<typeof RoomSettingsStatusSchema>;
export declare const RoomSettingsSchema: import("valibot").ObjectSchema<{
    readonly settingsId: import("valibot").StringSchema<undefined>;
    readonly statementId: import("valibot").StringSchema<undefined>;
    readonly topParentId: import("valibot").StringSchema<undefined>;
    readonly roomSize: import("valibot").SchemaWithPipe<[import("valibot").NumberSchema<undefined>, import("valibot").MinValueAction<number, 2, undefined>]>;
    readonly scrambleByQuestions: import("valibot").ArraySchema<import("valibot").StringSchema<undefined>, undefined>;
    readonly createdAt: import("valibot").NumberSchema<undefined>;
    readonly lastUpdate: import("valibot").NumberSchema<undefined>;
    readonly createdBy: import("valibot").ObjectSchema<{
        readonly displayName: import("valibot").StringSchema<undefined>;
        readonly photoURL: import("valibot").OptionalSchema<import("valibot").NullableSchema<import("valibot").StringSchema<undefined>, undefined>, undefined>;
        readonly uid: import("valibot").StringSchema<undefined>;
        readonly isAnonymous: import("valibot").OptionalSchema<import("valibot").BooleanSchema<undefined>, undefined>;
        readonly email: import("valibot").OptionalSchema<import("valibot").NullableSchema<import("valibot").StringSchema<undefined>, undefined>, undefined>;
        readonly advanceUser: import("valibot").OptionalSchema<import("valibot").BooleanSchema<undefined>, undefined>;
    }, undefined>;
    readonly status: import("valibot").PicklistSchema<["draft", "active", "archived"], undefined>;
    readonly totalRooms: import("valibot").SchemaWithPipe<[import("valibot").NumberSchema<undefined>, import("valibot").MinValueAction<number, 0, undefined>]>;
    readonly totalParticipants: import("valibot").SchemaWithPipe<[import("valibot").NumberSchema<undefined>, import("valibot").MinValueAction<number, 0, undefined>]>;
    readonly notificationSent: import("valibot").BooleanSchema<undefined>;
    readonly notificationSentAt: import("valibot").OptionalSchema<import("valibot").NumberSchema<undefined>, undefined>;
}, undefined>;
export type RoomSettings = InferOutput<typeof RoomSettingsSchema>;
export declare const RoomSchema: import("valibot").ObjectSchema<{
    readonly roomId: import("valibot").StringSchema<undefined>;
    readonly settingsId: import("valibot").StringSchema<undefined>;
    readonly statementId: import("valibot").StringSchema<undefined>;
    readonly roomNumber: import("valibot").SchemaWithPipe<[import("valibot").NumberSchema<undefined>, import("valibot").MinValueAction<number, 1, undefined>]>;
    readonly roomName: import("valibot").OptionalSchema<import("valibot").StringSchema<undefined>, undefined>;
    readonly participants: import("valibot").ArraySchema<import("valibot").StringSchema<undefined>, undefined>;
    readonly createdAt: import("valibot").NumberSchema<undefined>;
}, undefined>;
export type Room = InferOutput<typeof RoomSchema>;
export declare const RoomParticipantSchema: import("valibot").ObjectSchema<{
    readonly participantId: import("valibot").StringSchema<undefined>;
    readonly settingsId: import("valibot").StringSchema<undefined>;
    readonly statementId: import("valibot").StringSchema<undefined>;
    readonly roomId: import("valibot").StringSchema<undefined>;
    readonly roomNumber: import("valibot").SchemaWithPipe<[import("valibot").NumberSchema<undefined>, import("valibot").MinValueAction<number, 1, undefined>]>;
    readonly userId: import("valibot").StringSchema<undefined>;
    readonly userName: import("valibot").StringSchema<undefined>;
    readonly demographicTags: import("valibot").ArraySchema<import("valibot").ObjectSchema<{
        readonly questionId: import("valibot").StringSchema<undefined>;
        readonly questionText: import("valibot").StringSchema<undefined>;
        readonly answer: import("valibot").StringSchema<undefined>;
        readonly color: import("valibot").OptionalSchema<import("valibot").StringSchema<undefined>, undefined>;
    }, undefined>, undefined>;
    readonly assignedAt: import("valibot").NumberSchema<undefined>;
    readonly notified: import("valibot").BooleanSchema<undefined>;
}, undefined>;
export type RoomParticipant = InferOutput<typeof RoomParticipantSchema>;
