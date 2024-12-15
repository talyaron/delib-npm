import { SimpleStatement, Statement, StatementSchema } from "./statementsModels";

//used for storing maps of discussions
export type _Map = {
    statementId: string,
    statement: string,
    lastMessage: string,
    lastUpdate: number,
    results: SimpleStatement[],
    children: _Map[]; //only questions are children

};

export interface MapIndex {
    map: _Map,
    index: Array<{
        key: string,
        path: string[]
    }>,
    lastUpdate: number,
}

interface IndexObject {
    key: string,
    path: string[]
}

export class Map {
    private _statements: Statement[] = [];
    private _mapId: string = '';
    private _lastUpdate: number = 0;
    private _map: _Map = {} as _Map;

    constructor(statement: Statement) {
        try {
            if (statement.parentId !== 'top') throw new Error('statement must be top statement');
            this._statements.push(statement);
            const numberOfTops = this._statements.filter(statement => statement.parentId === 'top').length;
            if (numberOfTops > 1) throw new Error('cannot have more than one top statement');
            this._mapId = statement.statementId;
        } catch (error) {
            console.error(error);
        }
    }

    //add statement to map only if it has a parent statement
    addStatement(statement: Statement) {
        try {
            StatementSchema.parse(statement);
            if (statement.topParentId !== 'top') return;
            //find parent statement
            const parentStatement = this._statements.find(statement => statement.statementId === statement.parentId);
            if (!parentStatement) throw new Error('parent statement not found');
//check if statement already exists
            const statementExists = this._statements.findIndex(s => s.statementId === statement.statementId);
            if(statementExists !== -1) throw new Error('statement already exists');

            this._statements.push(statement);

            this.mapStatements();
            this._lastUpdate = Date.now();
        } catch (error) {
            console.error(error);
        }
    }

    //set statments from db
    setStatements(statements: Statement[]) {
        try {
            statements.forEach(statement => {
             
                this.addStatement(statement);
            });
        } catch (error) {
            console.error(error);
        }
    }

    //create a map object of statements
    mapStatements() {
        try {
            //top statement
            const topStatement = this._statements.find(statement => statement.parentId === 'top');
            if (!topStatement) throw new Error('top statement not found');

            //create map object
            const map = this.createSingleMap(topStatement);

            //map statements

            //map children
            map.children = this.mapChildren(topStatement.statementId);

            //set map
            this._map = map;
            return map;

        } catch (error) {
            console.error(error);
        }
    }

    mapChildren(statementId: string): _Map[] {
        try {
            //find all statements with parentId === statementId
            const children = this._statements.filter(statement => statement.parentId === statementId);
            if (!children.length) return [];
            //map each child
            return children.map(child => {
                const childMap = this.createSingleMap(child);
               
                childMap.children = this.mapChildren(child.statementId);
                return childMap;
            });
        } catch (error) {
            console.error(error);
            return [];
        }
    }

    createSingleMap(statement: Statement): _Map {
        return {
            statementId: statement.statementId,
            statement: statement.statement,
            lastMessage: statement.lastMessage || "",
            lastUpdate: statement.lastUpdate,
            results: [],
            children: [],
        }
    }

    get map(): _Map {
        return this._map;
    }
    get mapId(): string {
        return this._mapId;
    }
    get lastUpdate(): number {
        return this._lastUpdate;
    }   
}

