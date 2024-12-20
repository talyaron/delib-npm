"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isScreenAllowedUnderStatementType = isScreenAllowedUnderStatementType;
exports.allowedScreens = allowedScreens;
const screensAndNavModels_1 = require("../models/screensAndNavModels");
const statementsModels_1 = require("../models/statementsModels");
const helpers_1 = require("./helpers");
function isScreenAllowedUnderStatementType(statement, screen) {
    try {
        if (!statement)
            return true;
        //if option or statement, prevent options subScreens
        if ((0, helpers_1.isOptionFn)(statement) || statement.statementType === statementsModels_1.StatementType.statement) {
            if (screen === screensAndNavModels_1.Screen.OPTIONS || screen === screensAndNavModels_1.Screen.VOTE)
                return false;
        }
        return true;
    }
    catch (error) {
        console.error(error);
        return true;
    }
}
function allowedScreens(statement, screens) {
    try {
        if (!statement)
            throw new Error("No statement");
        if (!screens)
            throw new Error("No screens");
        const _allowedScreens = new Set([...screensAndNavModels_1.allScreens.filter(screen => isScreenAllowedUnderStatementType(statement, screen) && screens.includes(screen))]);
        const allowedScreens = Array.from(_allowedScreens);
        console.log("allowedScreens", allowedScreens, `on statement ${statement.statement}`);
        return allowedScreens.length > 0 ? allowedScreens : [screensAndNavModels_1.Screen.OPTIONS, screensAndNavModels_1.Screen.VOTE, screensAndNavModels_1.Screen.CHAT];
    }
    catch (error) {
        console.error(error);
        return [screensAndNavModels_1.Screen.CHAT];
    }
}
//# sourceMappingURL=screensCont.js.map