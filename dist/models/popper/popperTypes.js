"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PopperHebbianScoreSchema = void 0;
const valibot_1 = require("valibot");
exports.PopperHebbianScoreSchema = (0, valibot_1.object)({
    statementId: (0, valibot_1.string)(),
    totalScore: (0, valibot_1.number)(),
    corroborationLevel: (0, valibot_1.number)(), // Should be [0, 1] but not enforced by schema
    evidenceCount: (0, valibot_1.number)(), // Should be non-negative integer
    status: (0, valibot_1.picklist)(['looking-good', 'under-discussion', 'needs-fixing']),
    lastCalculated: (0, valibot_1.number)() //milliseconds since epoch
});
