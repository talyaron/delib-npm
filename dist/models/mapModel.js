"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Map = void 0;
const statementsModels_1 = require("./statementsModels");
class Map {
    _statements = [];
    _mapId = '';
    _lastUpdate = 0;
    _map = {};
    constructor(statement) {
        try {
            if (statement.parentId !== 'top')
                throw new Error('statement must be top statement');
            this._statements.push(statement);
            const numberOfTops = this._statements.filter(statement => statement.parentId === 'top').length;
            if (numberOfTops > 1)
                throw new Error('cannot have more than one top statement');
            this._mapId = statement.statementId;
        }
        catch (error) {
            console.error(error);
        }
    }
    //add statement to map only if it has a parent statement
    addStatement(statement) {
        try {
            statementsModels_1.StatementSchema.parse(statement);
            if (statement.topParentId !== 'top')
                return;
            //find parent statement
            const parentStatement = this._statements.find(statement => statement.statementId === statement.parentId);
            if (!parentStatement)
                throw new Error('parent statement not found');
            //check if statement already exists
            const statementExists = this._statements.findIndex(s => s.statementId === statement.statementId);
            if (statementExists !== -1)
                throw new Error('statement already exists');
            this._statements.push(statement);
            this.mapStatements();
            this._lastUpdate = Date.now();
        }
        catch (error) {
            console.error(error);
        }
    }
    //set statments from db
    setStatements(statements) {
        try {
            statements.forEach(statement => {
                this.addStatement(statement);
            });
        }
        catch (error) {
            console.error(error);
        }
    }
    //create a map object of statements
    mapStatements() {
        try {
            //top statement
            const topStatement = this._statements.find(statement => statement.parentId === 'top');
            if (!topStatement)
                throw new Error('top statement not found');
            //create map object
            const map = this.createSingleMap(topStatement);
            //map statements
            //map children
            map.children = this.mapChildren(topStatement.statementId);
            //set map
            this._map = map;
            return map;
        }
        catch (error) {
            console.error(error);
        }
    }
    mapChildren(statementId) {
        try {
            //find all statements with parentId === statementId
            const children = this._statements.filter(statement => statement.parentId === statementId);
            if (!children.length)
                return [];
            //map each child
            return children.map(child => {
                const childMap = this.createSingleMap(child);
                childMap.children = this.mapChildren(child.statementId);
                return childMap;
            });
        }
        catch (error) {
            console.error(error);
            return [];
        }
    }
    createSingleMap(statement) {
        return {
            statementId: statement.statementId,
            statement: statement.statement,
            lastMessage: statement.lastMessage || "",
            lastUpdate: statement.lastUpdate,
            results: [],
            children: [],
        };
    }
    get map() {
        return this._map;
    }
    get mapId() {
        return this._mapId;
    }
    get lastUpdate() {
        return this._lastUpdate;
    }
}
exports.Map = Map;
