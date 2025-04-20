import { InferOutput } from 'valibot';
export declare enum Role {
    admin = "admin",
    member = "member",
    banned = "banned",
    waiting = "waiting",
    unsubscribed = "unsubscribed",
    creator = "statement-creator"
}
export declare enum Languages {
    english = "en",
    hebrew = "he",
    arabic = "ar"
}
export declare const userSettingsSchema: import("valibot").ObjectSchema<{
    readonly userId: import("valibot").StringSchema<undefined>;
    readonly fontSize: import("valibot").OptionalSchema<import("valibot").NumberSchema<undefined>, undefined>;
    readonly color: import("valibot").OptionalSchema<import("valibot").StringSchema<undefined>, undefined>;
    readonly defaultLanguage: import("valibot").OptionalSchema<import("valibot").EnumSchema<typeof Languages, undefined>, undefined>;
    readonly ent: import("valibot").OptionalSchema<import("valibot").NullableSchema<import("valibot").ObjectSchema<{
        readonly text: import("valibot").StringSchema<undefined>;
        readonly date: import("valibot").NumberSchema<undefined>;
        readonly version: import("valibot").StringSchema<undefined>;
    }, undefined>, undefined>, undefined>;
    readonly role: import("valibot").OptionalSchema<import("valibot").EnumSchema<typeof Role, undefined>, undefined>;
    readonly learning: import("valibot").OptionalSchema<import("valibot").ObjectSchema<{
        readonly evaluation: import("valibot").OptionalSchema<import("valibot").NumberSchema<undefined>, undefined>;
        readonly addOptions: import("valibot").OptionalSchema<import("valibot").NumberSchema<undefined>, undefined>;
    }, undefined>, undefined>;
}, undefined>;
export type UserSettings = InferOutput<typeof userSettingsSchema>;
export declare const UserDataSchema: import("valibot").ObjectSchema<{
    readonly userId: import("valibot").StringSchema<undefined>;
    readonly email: import("valibot").OptionalSchema<import("valibot").StringSchema<undefined>, undefined>;
    readonly displayName: import("valibot").OptionalSchema<import("valibot").StringSchema<undefined>, undefined>;
    readonly city: import("valibot").OptionalSchema<import("valibot").StringSchema<undefined>, undefined>;
    readonly country: import("valibot").OptionalSchema<import("valibot").StringSchema<undefined>, undefined>;
    readonly dateOfBirth: import("valibot").OptionalSchema<import("valibot").NumberSchema<undefined>, undefined>;
}, undefined>;
export type UserData = InferOutput<typeof UserDataSchema>;
