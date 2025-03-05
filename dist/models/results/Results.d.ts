import { InferOutput } from 'valibot';
import { Statement } from '../statement/StatementTypes';
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
export type Results = {
    top: Statement;
    sub: Results[];
};
export declare const ResultsSettingsSchema: import("valibot").ObjectSchema<{
    readonly resultsBy: import("valibot").EnumSchema<typeof ResultsBy, undefined>;
    readonly cutoffNumber: import("valibot").OptionalSchema<import("valibot").NumberSchema<undefined>, undefined>;
    readonly numberOfResults: import("valibot").OptionalSchema<import("valibot").NumberSchema<undefined>, undefined>;
    readonly numberOfSelections: import("valibot").OptionalSchema<import("valibot").NumberSchema<undefined>, undefined>;
    readonly deep: import("valibot").OptionalSchema<import("valibot").NumberSchema<undefined>, undefined>;
    readonly minConsensus: import("valibot").OptionalSchema<import("valibot").NumberSchema<undefined>, undefined>;
}, undefined>;
export type ResultsSettings = InferOutput<typeof ResultsSettingsSchema>;
