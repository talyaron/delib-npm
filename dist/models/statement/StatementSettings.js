"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StatementSettingsSchema = exports.evaluationType = void 0;
const valibot_1 = require("valibot");
const TypeEnums_1 = require("../TypeEnums");
var evaluationType;
(function (evaluationType) {
    evaluationType["likeDislike"] = "like-dislike";
    evaluationType["range"] = "range";
    evaluationType["singleLike"] = "single-like";
})(evaluationType || (exports.evaluationType = evaluationType = {}));
exports.StatementSettingsSchema = (0, valibot_1.object)({
    subScreens: (0, valibot_1.optional)((0, valibot_1.array)((0, valibot_1.string)())),
    enableAddEvaluationOption: (0, valibot_1.optional)((0, valibot_1.boolean)()),
    enableEvaluation: (0, valibot_1.optional)((0, valibot_1.boolean)()), // if false, the user cannot evaluate or vote
    enableAddNewSubQuestionsButton: (0, valibot_1.optional)((0, valibot_1.boolean)()),
    defaultLookForSimilarities: (0, valibot_1.optional)((0, valibot_1.boolean)()),
    isSubmitMode: (0, valibot_1.optional)((0, valibot_1.boolean)()), // should a submit button appear in the bottom. it transfer to a thank you page when clicked. It is just used for the user to feel that he finished evaluating.
    enableAddVotingOption: (0, valibot_1.optional)((0, valibot_1.boolean)()),
    enhancedEvaluation: (0, valibot_1.optional)((0, valibot_1.boolean)()),
    evaluationType: (0, valibot_1.optional)((0, valibot_1.enum_)(evaluationType)),
    joiningEnabled: (0, valibot_1.optional)((0, valibot_1.boolean)()),
    showEvaluation: (0, valibot_1.optional)((0, valibot_1.boolean)()),
    inVotingGetOnlyResults: (0, valibot_1.optional)((0, valibot_1.boolean)()),
    enableSimilaritiesSearch: (0, valibot_1.optional)((0, valibot_1.boolean)()),
    enableNavigationalElements: (0, valibot_1.optional)((0, valibot_1.boolean)()),
    show: (0, valibot_1.optional)((0, valibot_1.boolean)()),
    deliberationType: (0, valibot_1.optional)((0, valibot_1.enum_)(TypeEnums_1.DeliberationType)),
    hasChat: (0, valibot_1.optional)((0, valibot_1.boolean)()),
    hasChildren: (0, valibot_1.optional)((0, valibot_1.boolean)()),
    numberOfOptionsPerUser: (0, valibot_1.optional)((0, valibot_1.number)()),
    enableAIImprovement: (0, valibot_1.optional)((0, valibot_1.boolean)()),
    popperianDiscussionEnabled: (0, valibot_1.optional)((0, valibot_1.boolean)()),
    popperianPreCheckEnabled: (0, valibot_1.optional)((0, valibot_1.boolean)()),
});
