"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.statementSnapShotSchema = void 0;
const valibot_1 = require("valibot");
const StatementTypes_1 = require("./StatementTypes");
exports.statementSnapShotSchema = (0, valibot_1.object)({
    topic: StatementTypes_1.StatementSchema,
    descendants: (0, valibot_1.array)(StatementTypes_1.StatementSchema),
    createdAt: (0, valibot_1.number)(),
    clusters: (0, valibot_1.array)((0, valibot_1.string)()),
    name: (0, valibot_1.optional)((0, valibot_1.string)()),
});
