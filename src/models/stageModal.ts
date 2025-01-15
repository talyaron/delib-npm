import { z } from 'zod';
import { Statement, StatementType } from './statementsModels';
import { getRandomUID } from '../controllers/helpers';
import { createBasicStatement } from '../controllers/statementsCont';

//The types of deliberative processes that a stage can take
export enum StageType {
    explanation = 'explanation',
    questions = 'questions',   
    needs = 'needs',
    suggestions = 'suggestions',
    hypothesis = 'hypothesis',
    voting = 'voting', 
    conclusion = 'conclusion',
    summary = 'summary',
    other = 'other',
}

export const StageTypeSchema = z.enum([StageType.explanation, StageType.questions, StageType.needs, StageType.suggestions, StageType.voting, StageType.summary, StageType.conclusion, StageType.hypothesis, StageType.other]);

export class StageClass {
    private stages: Statement[] = [];
    private statement!: Statement;
    basicStagesTypes = [StageType.explanation, StageType.needs, StageType.questions, StageType.suggestions, StageType.summary]

    constructor(statement: Statement) {
        try {

            this.statement = statement;
            this.stages = this.createBasicStages();
        } catch (error) {
            console.error(error);
        }
    }

    private createBasicStages() {
        try {
            const stages: Statement[] = []
            this.basicStagesTypes.forEach(stageType => {
                const newStage = this.createStage(stageType)
                if (!newStage) throw new Error("Could not create stage")
                stages.push(newStage);
            })
            return stages
        } catch (error) {
            console.error(error);
            return []
        }
    }

    private createStage(stageType: StageType) {
        try {
            const newStage:Statement|undefined =createBasicStatement({
                parentStatement: this.statement,
                user: this.statement.creator,
                stageType: stageType,
                statement: this.convertToStageTitle(stageType),
                description: "",
            })
            if (!newStage) throw new Error("Could not create stage")
            return newStage;
        } catch (error) {
            console.error(error);
        }
    }


    private convertToStageTitle(stageType: StageType | undefined): string {
        if (!stageType) return "Unknown"
        switch (stageType) {
            case StageType.explanation:
                return "Explanation"
            case StageType.needs:
                return "Needs"
            case StageType.questions:
                return "Questions"
            case StageType.suggestions:
                return "Suggestions"
            case StageType.summary:
                return "Summary"
            default:
                return "Unknown"
        }
    }

    get getBasicStages() {
        return this.stages;
    }
}