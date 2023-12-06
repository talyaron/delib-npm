import {z} from 'zod';
import { Statement, StatementSchema } from './statementsModels';

export enum ResultsBy {
    topOne = "topOne",
    consensusLevel = "consensus-level",
    topVote = "topVote",
    topOptions = "topOptions",
    checkedBy = "checkedBy",
    privateCheck = "privateCheck"
}

export const ResultsBySchema = z.enum([ResultsBy.topOne, ResultsBy.consensusLevel, ResultsBy.topVote, ResultsBy.topOptions, ResultsBy.checkedBy, ResultsBy.privateCheck]);


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



