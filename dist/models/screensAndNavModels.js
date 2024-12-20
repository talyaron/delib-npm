"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.allScreens = exports.ScreenSchema = exports.Screen = void 0;
const zod_1 = require("zod");
var Screen;
(function (Screen) {
    Screen["TEAM"] = "team";
    Screen["DOC"] = "doc";
    Screen["HOME"] = "home";
    Screen["STATEMENT"] = "statement";
    Screen["CHAT"] = "chat";
    Screen["OPTIONS"] = "options";
    Screen["VOTE"] = "vote";
    Screen["GROUPS"] = "groups";
    Screen["SETTINGS"] = "settings";
    Screen["MASS_QUESTIONS"] = "mass-questions";
    Screen["QUESTIONS_MASS"] = "questions-mass";
    Screen["OPTIONS_CONSENSUS"] = "options-consensus";
    Screen["OPTIONS_NEW"] = "options-new";
    Screen["OPTIONS_RANDOM"] = "options-random";
    Screen["OPTIONS_UPDATED"] = "options-updated";
    Screen["VOTES_CONSENSUS"] = "votes-consensus";
    Screen["VOTES\u05B9\u05B9\u05B9_VOTED"] = "votes-voted";
    Screen["VOTES_NEW"] = "votes-new";
    Screen["VOTES_RANDOM"] = "votes-random";
    Screen["VOTES_UPDATED"] = "votes-updated";
    Screen["ADMIN_CHOOSE"] = "admin-choose";
    Screen["ADMIN_DIVIDE"] = "admin-divide";
    Screen["QUESTIONS"] = "questions";
    Screen["QUESTIONS_NEW"] = "questions-new";
    Screen["QUESTIONS_RANDOM"] = "questions-random";
    Screen["QUESTIONS_UPDATED"] = "questions-updated";
    Screen["QUESTIONS_CONSENSUS"] = "questions-consensus";
    Screen["INFO"] = "info";
    Screen["PROCESS"] = "process";
    Screen["EXPLANATION"] = "explanation";
})(Screen || (exports.Screen = Screen = {}));
//zod schema of screen
exports.ScreenSchema = zod_1.z.enum([
    Screen.DOC,
    Screen.HOME,
    Screen.STATEMENT,
    Screen.CHAT,
    Screen.OPTIONS,
    Screen.VOTE,
    Screen.GROUPS,
    Screen.SETTINGS,
    Screen.MASS_QUESTIONS,
    Screen.QUESTIONS_MASS,
    Screen.OPTIONS_CONSENSUS,
    Screen.OPTIONS_NEW,
    Screen.OPTIONS_RANDOM,
    Screen.OPTIONS_UPDATED,
    Screen.VOTES_CONSENSUS,
    Screen.VOTESֹֹֹ_VOTED,
    Screen.VOTES_NEW,
    Screen.VOTES_RANDOM,
    Screen.VOTES_UPDATED,
    Screen.ADMIN_CHOOSE,
    Screen.ADMIN_DIVIDE,
    Screen.QUESTIONS,
    Screen.QUESTIONS_NEW,
    Screen.QUESTIONS_RANDOM,
    Screen.QUESTIONS_UPDATED,
    Screen.QUESTIONS_CONSENSUS,
    Screen.INFO,
]);
exports.allScreens = [Screen.OPTIONS, Screen.VOTE, Screen.QUESTIONS, Screen.STATEMENT, Screen.DOC, Screen.GROUPS, Screen.HOME, Screen.MASS_QUESTIONS, Screen.OPTIONS, Screen.SETTINGS];
//# sourceMappingURL=screensAndNavModels.js.map