import { z } from "zod";
export declare enum Screen {
    TEAM = "team",
    DOC = "doc",
    HOME = "home",
    STATEMENT = "statement",
    CHAT = "chat",
    OPTIONS = "options",
    VOTE = "vote",
    GROUPS = "groups",
    SETTINGS = "settings",
    MASS_QUESTIONS = "mass-questions",
    QUESTIONS_MASS = "questions-mass",
    OPTIONS_CONSENSUS = "options-consensus",
    OPTIONS_NEW = "options-new",
    OPTIONS_RANDOM = "options-random",
    OPTIONS_UPDATED = "options-updated",
    VOTES_CONSENSUS = "votes-consensus",
    VOTESֹֹֹ_VOTED = "votes-voted",
    VOTES_NEW = "votes-new",
    VOTES_RANDOM = "votes-random",
    VOTES_UPDATED = "votes-updated",
    ADMIN_CHOOSE = "admin-choose",
    ADMIN_DIVIDE = "admin-divide",
    QUESTIONS = "questions",
    QUESTIONS_NEW = "questions-new",
    QUESTIONS_RANDOM = "questions-random",
    QUESTIONS_UPDATED = "questions-updated",
    QUESTIONS_CONSENSUS = "questions-consensus",
    INFO = "info",
    PROCESS = "process",
    EXPLANATION = "explanation"
}
export declare const ScreenSchema: z.ZodEnum<[Screen.DOC, Screen.HOME, Screen.STATEMENT, Screen.CHAT, Screen.OPTIONS, Screen.VOTE, Screen.GROUPS, Screen.SETTINGS, Screen.MASS_QUESTIONS, Screen.QUESTIONS_MASS, Screen.OPTIONS_CONSENSUS, Screen.OPTIONS_NEW, Screen.OPTIONS_RANDOM, Screen.OPTIONS_UPDATED, Screen.VOTES_CONSENSUS, Screen.VOTESֹֹֹ_VOTED, Screen.VOTES_NEW, Screen.VOTES_RANDOM, Screen.VOTES_UPDATED, Screen.ADMIN_CHOOSE, Screen.ADMIN_DIVIDE, Screen.QUESTIONS, Screen.QUESTIONS_NEW, Screen.QUESTIONS_RANDOM, Screen.QUESTIONS_UPDATED, Screen.QUESTIONS_CONSENSUS, Screen.INFO]>;
export declare const allScreens: Screen[];
export interface NavObject {
    link: Screen;
    name: string;
    id: string;
    default?: boolean;
    icon: any;
}
