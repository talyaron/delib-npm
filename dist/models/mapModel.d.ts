import { Statement } from "./statementsModels";
export type _Map = {
    statementId: string;
    statement: string;
    lastMessage: string;
    lastUpdate: number;
    results: Statement[];
    children: _Map[];
};
export interface MapIndex {
    map: _Map;
    index: Array<{
        key: string;
        path: string[];
    }>;
    lastUpdate: number;
}
export declare class Map {
    private _statements;
    private _mapId;
    private _lastUpdate;
    private _map;
    constructor(statement: Statement);
    addStatement(statement: Statement): void;
    setStatements(statements: Statement[]): void;
    mapStatements(): void;
    mapChildren(statementId: string): _Map[];
    createSingleMap(statement: Statement): _Map;
    get map(): _Map;
    get mapId(): string;
    get lastUpdate(): number;
}
