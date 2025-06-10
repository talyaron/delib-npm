import { InferOutput } from 'valibot';
export declare const DemographicGroupSchema: import("valibot").ObjectSchema<{
    readonly mad: import("valibot").NumberSchema<undefined>;
    readonly mean: import("valibot").NumberSchema<undefined>;
    readonly n: import("valibot").NumberSchema<undefined>;
    readonly option: import("valibot").ObjectSchema<{
        readonly option: import("valibot").StringSchema<undefined>;
        readonly color: import("valibot").OptionalSchema<import("valibot").StringSchema<undefined>, undefined>;
    }, undefined>;
}, undefined>;
export type DemographicGroup = InferOutput<typeof DemographicGroupSchema>;
export declare const AxesItemSchema: import("valibot").ObjectSchema<{
    readonly axId: import("valibot").StringSchema<undefined>;
    readonly groups: import("valibot").ArraySchema<import("valibot").ObjectSchema<{
        readonly mad: import("valibot").NumberSchema<undefined>;
        readonly mean: import("valibot").NumberSchema<undefined>;
        readonly n: import("valibot").NumberSchema<undefined>;
        readonly option: import("valibot").ObjectSchema<{
            readonly option: import("valibot").StringSchema<undefined>;
            readonly color: import("valibot").OptionalSchema<import("valibot").StringSchema<undefined>, undefined>;
        }, undefined>;
    }, undefined>, undefined>;
    readonly question: import("valibot").StringSchema<undefined>;
    readonly groupsMAD: import("valibot").NumberSchema<undefined>;
}, undefined>;
export type AxesItem = InferOutput<typeof AxesItemSchema>;
export declare const PolarizationIndexSchema: import("valibot").ObjectSchema<{
    readonly averageAgreement: import("valibot").NumberSchema<undefined>;
    readonly lastUpdated: import("valibot").NumberSchema<undefined>;
    readonly overallMAD: import("valibot").NumberSchema<undefined>;
    readonly overallMean: import("valibot").NumberSchema<undefined>;
    readonly overallN: import("valibot").NumberSchema<undefined>;
    readonly parentId: import("valibot").StringSchema<undefined>;
    readonly statement: import("valibot").StringSchema<undefined>;
    readonly statementId: import("valibot").StringSchema<undefined>;
    readonly color: import("valibot").StringSchema<undefined>;
    readonly axes: import("valibot").ArraySchema<import("valibot").ObjectSchema<{
        readonly axId: import("valibot").StringSchema<undefined>;
        readonly groups: import("valibot").ArraySchema<import("valibot").ObjectSchema<{
            readonly mad: import("valibot").NumberSchema<undefined>;
            readonly mean: import("valibot").NumberSchema<undefined>;
            readonly n: import("valibot").NumberSchema<undefined>;
            readonly option: import("valibot").ObjectSchema<{
                readonly option: import("valibot").StringSchema<undefined>;
                readonly color: import("valibot").OptionalSchema<import("valibot").StringSchema<undefined>, undefined>;
            }, undefined>;
        }, undefined>, undefined>;
        readonly question: import("valibot").StringSchema<undefined>;
        readonly groupsMAD: import("valibot").NumberSchema<undefined>;
    }, undefined>, undefined>;
}, undefined>;
export type PolarizationIndex = InferOutput<typeof PolarizationIndexSchema>;
