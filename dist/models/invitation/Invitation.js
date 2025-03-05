"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InvitationSchema = void 0;
const valibot_1 = require("valibot");
exports.InvitationSchema = (0, valibot_1.object)({
    pathname: (0, valibot_1.string)(),
    statementId: (0, valibot_1.string)(),
    lastUpdate: (0, valibot_1.number)(),
    number: (0, valibot_1.number)(),
});
