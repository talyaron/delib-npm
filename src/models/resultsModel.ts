import {z} from 'zod';
import { Statement, StatementSchema } from './statementsModels';

export enum ResultsBy {
    consensusLevel = "consensus-level",
    topOptions = "topOptions",
    checkedBy = "checkedBy",
    privateCheck = "privateCheck"
}

export const ResultsBySchema = z.enum([ ResultsBy.consensusLevel, ResultsBy.topOptions, ResultsBy.checkedBy, ResultsBy.privateCheck]);


export type Results = {
    top: Statement;
    sub: Results[];
};


const resultsSchema = z.object({
    statement: StatementSchema,
    results: z.array(StatementSchema),
});

export enum ResultsType {
    normal = "normal",
    full = "full",
}



