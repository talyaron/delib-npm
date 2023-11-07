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

export const ResultsBySchema = z.enum([ResultsBy.topOne, ResultsBy.consensusLevel, ResultsBy.topVote, ResultsBy.topOption, ResultsBy.checkedBy, ResultsBy.privateCheck]);

export interface Result {
    statementId: string;
    [key: string]: Statement[] | string;
}
//create a zod schema for result with infinte subResults of resutls

// var _resultsSchema:any = z.object({
//     statementId: z.string(),
//     results: z.array(StatementSchema),
//     subResults: z.array(_resultsSchema).optional(),
// });

// export const ResultsSchema = _resultsSchema;

const resultsSchema = z.object({
    statement: StatementSchema,
    results: z.array(StatementSchema),
});


