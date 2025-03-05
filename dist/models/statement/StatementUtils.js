"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createBasicStatement = createBasicStatement;
const StatementTypes_1 = require("./StatementTypes");
const TypeEnums_1 = require("../TypeEnums");
const TypeUtils_1 = require("../TypeUtils");
const stageTypes_1 = require("../stage/stageTypes");
const valibot_1 = require("valibot");
function createBasicStatement({ parentStatement, user, stageSelectionType, statementType, statement, description, }) {
    try {
        const newStatement = {
            statement: statement,
            description: description ?? '',
            statementType: statementType ?? TypeEnums_1.StatementType.statement,
            parentId: parentStatement.statementId,
            stageSelectionType: stageSelectionType ?? stageTypes_1.StageSelectionType.consensus,
            creatorId: user.uid,
            creator: user,
            consensus: 0,
            voted: 0,
            statementId: (0, TypeUtils_1.getRandomUID)(),
            topParentId: parentStatement.topParentId || parentStatement.statementId,
            parents: parentStatement.parents
                ? [...parentStatement.parents]
                : [],
            lastUpdate: new Date().getTime(),
            createdAt: new Date().getTime(),
        };
        return (0, valibot_1.parse)(StatementTypes_1.StatementSchema, newStatement);
    }
    catch (error) {
        console.error(error);
        return undefined;
    }
}
