"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InvitationSchema = void 0;
const zod_1 = require("zod");
exports.InvitationSchema = zod_1.z.object({
    pathname: zod_1.z.string(),
    statementId: zod_1.z.string(),
    lastUpdate: zod_1.z.number(),
    number: zod_1.z.number(),
});
