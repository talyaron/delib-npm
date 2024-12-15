import { Screen } from "../models/screensAndNavModels";
import { Statement } from "../models/statementsModels";
export declare function isScreenAllowedUnderStatementType(statement: Statement | undefined, screen: Screen): boolean;
export declare function allowedScreens(statement: Statement | undefined, screens: Screen[] | undefined): Screen[];
