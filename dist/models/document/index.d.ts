import { InferOutput } from 'valibot';
export declare const DocumentSignsSchema: import("valibot").ObjectSchema<{
    readonly documentId: import("valibot").StringSchema<undefined>;
    readonly viewed: import("valibot").NumberSchema<undefined>;
    readonly signed: import("valibot").NumberSchema<undefined>;
    readonly rejected: import("valibot").NumberSchema<undefined>;
    readonly avgSignatures: import("valibot").NumberSchema<undefined>;
    readonly totalSignaturesLevel: import("valibot").NumberSchema<undefined>;
}, undefined>;
export type DocumentSigns = InferOutput<typeof DocumentSignsSchema>;
export declare enum SignatureType {
    signed = "signed",
    rejected = "rejected",
    viewed = "viewed"
}
export declare const SignatureSchema: import("valibot").ObjectSchema<{
    readonly signatureId: import("valibot").StringSchema<undefined>;
    readonly documentId: import("valibot").StringSchema<undefined>;
    readonly userId: import("valibot").StringSchema<undefined>;
    readonly signed: import("valibot").EnumSchema<typeof SignatureType, undefined>;
    readonly date: import("valibot").StringSchema<undefined>;
    readonly levelOfSignature: import("valibot").NumberSchema<undefined>;
}, undefined>;
export type Signature = InferOutput<typeof SignatureSchema>;
