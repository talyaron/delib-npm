"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SignatureSchema = exports.SignatureType = exports.DocumentSignsSchema = void 0;
const valibot_1 = require("valibot");
exports.DocumentSignsSchema = (0, valibot_1.object)({
    documentId: (0, valibot_1.string)(),
    viewed: (0, valibot_1.number)(),
    signed: (0, valibot_1.number)(),
    rejected: (0, valibot_1.number)(),
    avgSignatures: (0, valibot_1.number)(),
    totalSignaturesLevel: (0, valibot_1.number)(),
});
var SignatureType;
(function (SignatureType) {
    SignatureType["signed"] = "signed";
    SignatureType["rejected"] = "rejected";
    SignatureType["viewed"] = "viewed";
})(SignatureType || (exports.SignatureType = SignatureType = {}));
exports.SignatureSchema = (0, valibot_1.object)({
    signatureId: (0, valibot_1.string)(),
    documentId: (0, valibot_1.string)(),
    userId: (0, valibot_1.string)(),
    signed: (0, valibot_1.enum_)(SignatureType),
    date: (0, valibot_1.string)(),
    levelOfSignature: (0, valibot_1.number)(),
});
