"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PasswordSchema = void 0;
const zod_1 = require("zod");
exports.PasswordSchema = zod_1.z.object({
    hashPassword: zod_1.z.string(),
    statementId: zod_1.z.string(),
});
//# sourceMappingURL=passwordModel.js.map