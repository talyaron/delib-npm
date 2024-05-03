import { z } from 'zod';
import { Statement } from './statementsModels';
export declare enum ResultsBy {
    consensusLevel = "consensus-level",
    topOptions = "topOptions",
    checkedBy = "checkedBy",
    privateCheck = "privateCheck"
}
export declare const ResultsBySchema: z.ZodEnum<[ResultsBy.consensusLevel, ResultsBy.topOptions, ResultsBy.checkedBy, ResultsBy.privateCheck]>;
export type Results = {
    top: Statement;
    sub: Results[];
};
export declare enum ResultsType {
    normal = "normal",
    full = "full"
}
