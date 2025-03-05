import { InferOutput } from 'valibot';
export declare const InvitationSchema: import("valibot").ObjectSchema<{
    readonly pathname: import("valibot").StringSchema<undefined>;
    readonly statementId: import("valibot").StringSchema<undefined>;
    readonly lastUpdate: import("valibot").NumberSchema<undefined>;
    readonly number: import("valibot").NumberSchema<undefined>;
}, undefined>;
export type Invitation = InferOutput<typeof InvitationSchema>;
