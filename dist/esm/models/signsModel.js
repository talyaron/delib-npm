import { z } from 'zod';
export const DocumentSignsSchema = z.object({
    documentId: z.string(),
    viewed: z.number(),
    signed: z.number(),
    rejected: z.number(),
    avgSignatures: z.number(),
    totalSignaturesLevel: z.number(),
});
export var SignatureType;
(function (SignatureType) {
    SignatureType["signed"] = "signed";
    SignatureType["rejected"] = "rejected";
    SignatureType["viewed"] = "viewed";
})(SignatureType || (SignatureType = {}));
export const SignatureSchema = z.object({
    signatureId: z.string(),
    documentId: z.string(),
    userId: z.string(),
    signed: z.nativeEnum(SignatureType),
    date: z.string(),
    levelOfSignature: z.number(),
});
//# sourceMappingURL=signsModel.js.map