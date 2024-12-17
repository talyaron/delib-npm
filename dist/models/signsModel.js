"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SignatureSchema = exports.SignatureType = exports.DocumentSignsSchema = void 0;
const zod_1 = require("zod");
exports.DocumentSignsSchema = zod_1.z.object({
    documentId: zod_1.z.string(),
    viewed: zod_1.z.number(),
    signed: zod_1.z.number(),
    rejected: zod_1.z.number(),
    avgSignatures: zod_1.z.number(),
    totalSignaturesLevel: zod_1.z.number(),
});
var SignatureType;
(function (SignatureType) {
    SignatureType["signed"] = "signed";
    SignatureType["rejected"] = "rejected";
    SignatureType["viewed"] = "viewed";
})(SignatureType || (exports.SignatureType = SignatureType = {}));
exports.SignatureSchema = zod_1.z.object({
    signatureId: zod_1.z.string(),
    documentId: zod_1.z.string(),
    userId: zod_1.z.string(),
    signed: zod_1.z.nativeEnum(SignatureType),
    date: zod_1.z.string(),
    levelOfSignature: zod_1.z.number(),
});
