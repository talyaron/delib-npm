import { z } from 'zod';
import { Statement } from './statementsModels';
export declare enum ResultsBy {
    topOne = "topOne",
    consensusLevel = "consensus-level",
    topVote = "topVote",
    topOption = "topOption",
    checkedBy = "checkedBy",
    privateCheck = "privateCheck"
}
export declare const ResultsBySchema: z.ZodEnum<[ResultsBy.topOne, ResultsBy.consensusLevel, ResultsBy.topVote, ResultsBy.topOption, ResultsBy.checkedBy, ResultsBy.privateCheck]>;
export interface Result {
    statementId: string;
    [key: string]: Statement[] | string;
}
