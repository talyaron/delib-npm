"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StageClass = exports.StageTypeSchema = exports.StageType = void 0;
const zod_1 = require("zod");
const statementsCont_1 = require("../controllers/statementsCont");
//The types of deliberative processes that a stage can take
var StageType;
(function (StageType) {
    StageType["explanation"] = "explanation";
    StageType["questions"] = "questions";
    StageType["needs"] = "needs";
    StageType["suggestions"] = "suggestions";
    StageType["hypothesis"] = "hypothesis";
    StageType["voting"] = "voting";
    StageType["conclusion"] = "conclusion";
    StageType["summary"] = "summary";
    StageType["other"] = "other";
})(StageType || (exports.StageType = StageType = {}));
exports.StageTypeSchema = zod_1.z.enum([StageType.explanation, StageType.questions, StageType.needs, StageType.suggestions, StageType.voting, StageType.summary, StageType.conclusion, StageType.hypothesis, StageType.other]);
class StageClass {
    stages = [];
    statement;
    basicStagesTypes = [StageType.explanation, StageType.needs, StageType.questions, StageType.suggestions, StageType.summary];
    createBasicStages(statement) {
        try {
            const stages = [];
            this.basicStagesTypes.forEach(stageType => {
                const newStage = this.createStage(statement, stageType);
                if (!newStage)
                    throw new Error("Could not create stage");
                stages.push(newStage);
            });
            return stages;
        }
        catch (error) {
            console.error(error);
            return [];
        }
    }
    createStage(statement, stageType) {
        try {
            const newStage = (0, statementsCont_1.createBasicStatement)({
                parentStatement: statement,
                user: statement.creator,
                stageType: stageType,
                statement: this.convertToStageTitle(stageType),
                description: "",
            });
            if (!newStage)
                throw new Error("Could not create stage");
            return newStage;
        }
        catch (error) {
            console.error(error);
        }
    }
    convertToStageTitle(stageType) {
        if (!stageType)
            return "Unknown";
        switch (stageType) {
            case StageType.explanation:
                return "Explanation";
            case StageType.needs:
                return "Needs";
            case StageType.questions:
                return "Questions";
            case StageType.suggestions:
                return "Suggestions";
            case StageType.summary:
                return "Summary";
            default:
                return "Unknown";
        }
    }
    get getBasicStages() {
        return this.stages;
    }
}
exports.StageClass = StageClass;
