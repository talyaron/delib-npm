"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScreenSchema = exports.Screen = void 0;
const zod_1 = require("zod");
var Screen;
(function (Screen) {
    Screen["HOME"] = "home";
    Screen["STATEMENT"] = "statement";
    Screen["CHAT"] = "chat";
    Screen["OPTIONS"] = "options";
    Screen["VOTE"] = "vote";
    Screen["GROUPS"] = "groups";
    Screen["SETTINGS"] = "settings";
    Screen["OPTIONS_CONSENSUS"] = "options-consensus";
    Screen["OPTIONS_NEW"] = "options-new";
    Screen["OPTIONS_RANDOM"] = "options-random";
    Screen["OPTIONS_UPDATED"] = "options-updated";
    Screen["VOTES_CONSENSUS"] = "votes-consensus";
    Screen["VOTES\u05B9\u05B9\u05B9_VOTED"] = "votes-voted";
    Screen["VOTES_NEW"] = "votes-new";
    Screen["VOTES_RANDOM"] = "votes-random";
    Screen["VOTES_UPDATED"] = "votes-updated";
})(Screen || (exports.Screen = Screen = {}));
//zod schema of screen
exports.ScreenSchema = zod_1.z.enum([
    Screen.HOME,
    Screen.STATEMENT,
    Screen.CHAT,
    Screen.OPTIONS,
    Screen.VOTE,
    Screen.GROUPS,
    Screen.OPTIONS_CONSENSUS,
    Screen.OPTIONS_NEW,
    Screen.OPTIONS_RANDOM,
    Screen.OPTIONS_UPDATED,
    Screen.VOTES_CONSENSUS,
    Screen.VOTESֹֹֹ_VOTED,
    Screen.VOTES_NEW,
    Screen.VOTES_RANDOM,
    Screen.VOTES_UPDATED,
]);
