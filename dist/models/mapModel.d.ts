import { Statement } from "./statementsModels";
export type Map = {
    top: {
        statementId: string;
        statement: string;
        lastMessage: string;
        lastUpdate: number;
        results: Statement[];
    };
    children?: Map[];
};
export interface MapIndex {
    map: Map;
    index: Array<{
        key: string;
        path: string[];
    }>;
    lastUpdate: number;
}
