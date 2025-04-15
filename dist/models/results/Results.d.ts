import { InferOutput } from 'valibot';
import { Statement } from '../statement/StatementTypes';
export declare enum ResultsBy {
    consensus = "consensus",
    mostLiked = "mostLiked",
    averageLikesDislikes = "averageLikesDislikes"
}
export declare enum CutoffBy {
    topOptions = "topOptions",
    aboveThreshold = "aboveThreshold"
}
export type Results = {
    top: Statement;
    sub: Results[];
};
export declare const ResultsSettingsSchema: import("valibot").ObjectSchema<{
    readonly resultsBy: import("valibot").EnumSchema<typeof ResultsBy, undefined>;
    readonly cutoffNumber: import("valibot").OptionalSchema<import("valibot").NumberSchema<undefined>, undefined>;
    readonly cutoffBy: import("valibot").EnumSchema<typeof CutoffBy, undefined>;
    readonly numberOfResults: import("valibot").OptionalSchema<import("valibot").NumberSchema<undefined>, undefined>;
    readonly numberOfSelections: import("valibot").OptionalSchema<import("valibot").NumberSchema<undefined>, undefined>;
    readonly deep: import("valibot").OptionalSchema<import("valibot").NumberSchema<undefined>, undefined>;
    readonly minConsensus: import("valibot").OptionalSchema<import("valibot").NumberSchema<undefined>, undefined>;
}, undefined>;
export type ResultsSettings = InferOutput<typeof ResultsSettingsSchema>;
export declare const defaultResultsSettings: ResultsSettings;
