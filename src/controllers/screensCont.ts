import { Screen, allScreens } from "../models/screensAndNavModels";
import { Statement, StatementType } from "../models/statementsModels";
import { isOptionFn } from "./helpers";

export function isScreenAllowedUnderStatementType(statement: Statement | undefined, screen: Screen) {
    try {
        if (!statement) return true;

        //if option or statement, prevent options subScreens
        if (isOptionFn(statement) || statement.statementType === StatementType.statement) {
            if (screen === Screen.OPTIONS || screen === Screen.VOTE) return false;
        }

        return true;
    } catch (error) {
        console.error(error);

        return true;
    }
}

export function allowedScreens(statement: Statement | undefined, screens: Screen[] |undefined): Screen[] {
    try {
        if (!statement) throw new Error("No statement");
        if (!screens) throw new Error("No screens");
      
        const _allowedScreens = new Set([... allScreens.filter(screen => isScreenAllowedUnderStatementType(statement, screen) && screens.includes(screen))]);
        const allowedScreens = Array.from(_allowedScreens);

        console.log("allowedScreens", allowedScreens, `on statement ${statement.statement}`);
        return allowedScreens.length > 0 ? allowedScreens : [Screen.OPTIONS, Screen.VOTE, Screen.CHAT];
        
    } catch (error) {
        console.error(error);
        return [Screen.CHAT];
    }
}