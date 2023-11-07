import { z } from 'zod';
import { Statement } from './statementsModels';
export declare enum ResultsBy {
    topOne = "topOne",
    consensusLevel = "consensus-level",
    topVote = "topVote",
    topOptions = "topOptions",
    checkedBy = "checkedBy",
    privateCheck = "privateCheck"
}
export declare const ResultsBySchema: z.ZodEnum<any>;
export interface Result {
    statementId: string;
    [key: string]: Statement[] | string;
}
