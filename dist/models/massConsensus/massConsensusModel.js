"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MassConsensusProcessSchema = exports.MassConsensusMemberSchema = exports.MassConsensusStepSchema = exports.GeneratedStatementSchema = exports.MassConsensusSchema = exports.MassConsensusPageUrlsSchema = exports.MassConsensusPageUrls = void 0;
const valibot_1 = require("valibot");
const User_1 = require("../user/User");
var MassConsensusPageUrls;
(function (MassConsensusPageUrls) {
    MassConsensusPageUrls["introduction"] = "introduction";
    MassConsensusPageUrls["userDemographics"] = "user-demographics";
    MassConsensusPageUrls["initialQuestion"] = "initial-question";
    MassConsensusPageUrls["question"] = "question";
    MassConsensusPageUrls["randomSuggestions"] = "random-suggestions";
    MassConsensusPageUrls["topSuggestions"] = "top-suggestions";
    MassConsensusPageUrls["voting"] = "voting";
    MassConsensusPageUrls["leaveFeedback"] = "leave-feedback";
    MassConsensusPageUrls["thankYou"] = "thank-you";
})(MassConsensusPageUrls || (exports.MassConsensusPageUrls = MassConsensusPageUrls = {}));
exports.MassConsensusPageUrlsSchema = (0, valibot_1.enum_)(MassConsensusPageUrls);
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
exports.MassConsensusStepSchema = (0, valibot_1.object)({
    screen: exports.MassConsensusPageUrlsSchema,
    text: (0, valibot_1.optional)((0, valibot_1.string)()),
});
exports.MassConsensusMemberSchema = (0, valibot_1.object)({
    statementId: (0, valibot_1.string)(),
    lastUpdate: (0, valibot_1.number)(),
    email: (0, valibot_1.optional)((0, valibot_1.nullable)((0, valibot_1.string)())),
    creator: User_1.CreatorSchema
});
exports.MassConsensusProcessSchema = (0, valibot_1.object)({
    statementId: (0, valibot_1.string)(),
    loginTypes: (0, valibot_1.record)((0, valibot_1.enum_)(User_1.LoginType), (0, valibot_1.object)({
        steps: (0, valibot_1.array)(exports.MassConsensusStepSchema),
        processName: (0, valibot_1.optional)((0, valibot_1.string)()),
        currentStep: (0, valibot_1.optional)((0, valibot_1.number)()),
    }))
});
