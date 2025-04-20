import { InferOutput } from 'valibot';
import { Access, membersAllowed, StepType } from '../TypeEnums';
export declare const UserSchema: import("valibot").ObjectSchema<{
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
export type User = InferOutput<typeof UserSchema>;
export declare const MembershipSchema: import("valibot").ObjectSchema<{
    readonly adminApproveMembers: import("valibot").OptionalSchema<import("valibot").BooleanSchema<undefined>, undefined>;
    readonly access: import("valibot").OptionalSchema<import("valibot").EnumSchema<typeof Access, undefined>, undefined>;
    readonly typeOfMembersAllowed: import("valibot").OptionalSchema<import("valibot").EnumSchema<typeof membersAllowed, undefined>, undefined>;
}, undefined>;
export type Membership = InferOutput<typeof MembershipSchema>;
export declare const StepSchema: import("valibot").ObjectSchema<{
    readonly stepId: import("valibot").StringSchema<undefined>;
    readonly stepType: import("valibot").EnumSchema<typeof StepType, undefined>;
    readonly instructions: import("valibot").OptionalSchema<import("valibot").StringSchema<undefined>, undefined>;
    readonly duration: import("valibot").OptionalSchema<import("valibot").NumberSchema<undefined>, undefined>;
    readonly endTime: import("valibot").OptionalSchema<import("valibot").NumberSchema<undefined>, undefined>;
    readonly order: import("valibot").OptionalSchema<import("valibot").NumberSchema<undefined>, undefined>;
}, undefined>;
export type Step = InferOutput<typeof StepSchema>;
export declare const CreatorSchema: import("valibot").ObjectSchema<{
    readonly displayName: import("valibot").StringSchema<undefined>;
    readonly photoURL: import("valibot").OptionalSchema<import("valibot").NullableSchema<import("valibot").StringSchema<undefined>, undefined>, undefined>;
    readonly uid: import("valibot").StringSchema<undefined>;
    readonly isAnonymous: import("valibot").OptionalSchema<import("valibot").BooleanSchema<undefined>, undefined>;
}, undefined>;
export type Creator = InferOutput<typeof CreatorSchema>;
export declare enum LoginType {
    default = "default",
    google = "google",
    anonymous = "anonymous"
}
