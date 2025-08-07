"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FairDivisionUserSelectionSchema = exports.FairDivisionSelectionSchema = void 0;
const valibot_1 = require("valibot");
//used to se if the option was selected in a fair division, and as a parent, does it have a fair division mechanism
exports.FairDivisionSelectionSchema = (0, valibot_1.object)({
    asOption: (0, valibot_1.object)({
        costCoins: (0, valibot_1.optional)((0, valibot_1.number)()), // the cost of the option to the users
        selected: (0, valibot_1.boolean)(), // true if the option is selected
        updatedAt: (0, valibot_1.optional)((0, valibot_1.number)()), // the last time the option was updated (in milliseconds)
    }),
    asParent: (0, valibot_1.object)({
        isFairDivision: (0, valibot_1.boolean)(), // true if the parent has fair division mechanism for selecting options
    })
});
//used to store user slections on fair division. is stored on fairDivision collection
exports.FairDivisionUserSelectionSchema = (0, valibot_1.object)({
    userId: (0, valibot_1.string)(), // the id of the user
    statementId: (0, valibot_1.string)(), // the id of the statement
    investment: (0, valibot_1.number)(), // The measure of the user's willingness to select this option
    parentId: (0, valibot_1.string)(), // the id of the parent statement
});
