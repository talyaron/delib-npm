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
export declare const ResultsBySchema: z.ZodEnum<[ResultsBy.topOne, ResultsBy.consensusLevel, ResultsBy.topVote, ResultsBy.topOptions, ResultsBy.checkedBy, ResultsBy.privateCheck]>;
export type Results = {
    top: Statement;
    sub?: Results[];
};
