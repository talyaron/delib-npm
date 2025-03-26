"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MassConsensusProcessSchema = exports.MassConsensusMemberSchema = exports.GeneratedStatementSchema = exports.MassConsensusSchema = exports.MassConsensusPageUrlsSchema = void 0;
const valibot_1 = require("valibot");
const TypeEnums_1 = require("../TypeEnums");
const User_1 = require("../user/User");
exports.MassConsensusPageUrlsSchema = (0, valibot_1.enum_)(TypeEnums_1.MassConsensusPageUrls);
exports.MassConsensusSchema = (0, valibot_1.object)({
    texts: (0, valibot_1.optional)((0, valibot_1.object)({
        introduction: (0, valibot_1.string)(),
        suggestionQuestion: (0, valibot_1.string)(),
        similarSuggestions: (0, valibot_1.string)(),
        randomSuggestions: (0, valibot_1.string)(),
        topSuggestions: (0, valibot_1.string)(),
        voting: (0, valibot_1.string)(),
    })),
    steps: (0, valibot_1.array)(exports.MassConsensusPageUrlsSchema),
    currentStep: (0, valibot_1.optional)(exports.MassConsensusPageUrlsSchema),
});
exports.GeneratedStatementSchema = (0, valibot_1.object)({
    statement: (0, valibot_1.string)(),
    statementId: (0, valibot_1.null_)(),
});
exports.MassConsensusMemberSchema = (0, valibot_1.object)({
    statementId: (0, valibot_1.string)(),
    lastUpdate: (0, valibot_1.number)(),
    email: (0, valibot_1.optional)((0, valibot_1.nullable)((0, valibot_1.string)())),
    creator: User_1.CreatorSchema
});
exports.MassConsensusProcessSchema = (0, valibot_1.object)({
    statementId: (0, valibot_1.string)(),
    userTypes: (0, valibot_1.record)(// set a process by user types
    (0, valibot_1.enum_)(User_1.LoginType), (0, valibot_1.object)({
        processName: (0, valibot_1.optional)((0, valibot_1.string)()),
        steps: (0, valibot_1.array)(exports.MassConsensusPageUrlsSchema),
    })),
    default: (0, valibot_1.object)({
        processName: (0, valibot_1.optional)((0, valibot_1.string)()),
        steps: (0, valibot_1.array)(exports.MassConsensusPageUrlsSchema),
    })
});
