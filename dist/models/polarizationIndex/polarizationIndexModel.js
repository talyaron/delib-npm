"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PolarizationIndexSchema = exports.AxesItemSchema = exports.DemographicGroupSchema = void 0;
const valibot_1 = require("valibot");
const userDataModel_1 = require("../userData/userDataModel");
// Schema for individual group within an axis
exports.DemographicGroupSchema = (0, valibot_1.object)({
    mad: (0, valibot_1.number)(),
    mean: (0, valibot_1.number)(),
    n: (0, valibot_1.number)(),
    option: userDataModel_1.DemographicOptionSchema,
});
// Schema for axes items
exports.AxesItemSchema = (0, valibot_1.object)({
    axId: (0, valibot_1.string)(),
    groups: (0, valibot_1.array)(exports.DemographicGroupSchema),
    question: (0, valibot_1.string)(),
    groupsMAD: (0, valibot_1.number)(),
});
// Main schema
exports.PolarizationIndexSchema = (0, valibot_1.object)({
    averageAgreement: (0, valibot_1.number)(),
    lastUpdated: (0, valibot_1.number)(),
    overallMAD: (0, valibot_1.number)(),
    overallMean: (0, valibot_1.number)(),
    overallN: (0, valibot_1.number)(),
    parentId: (0, valibot_1.string)(),
    statement: (0, valibot_1.string)(),
    statementId: (0, valibot_1.string)(),
    color: (0, valibot_1.string)(),
    axes: (0, valibot_1.array)(exports.AxesItemSchema),
});
