import { z } from 'zod';
import { Statement } from './statementsModels';
/** used by evaluation subScreen */
export declare enum ResultsBy {
    /** all options above a specific consensus level will be approved */
    consensusLevel = "consensus-level",
    /** X top options will be approved */
    topOptions = "topOptions",
    /** options that were checked by X percentage of users will be approved */
    checkedBy = "checkedBy",
    /** options that were checked by a specific user will be approved for user */
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
