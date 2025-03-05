"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApprovalSchema = void 0;
const valibot_1 = require("valibot");
exports.ApprovalSchema = (0, valibot_1.object)({
    approvalId: (0, valibot_1.string)(),
    statementId: (0, valibot_1.string)(),
    documentId: (0, valibot_1.string)(),
    topParentId: (0, valibot_1.string)(),
    userId: (0, valibot_1.string)(),
    approval: (0, valibot_1.boolean)(),
});
