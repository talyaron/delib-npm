import { InferOutput } from 'valibot';
export declare const PolarizationGroupSchema: import("valibot").ObjectSchema<{
    readonly groupId: import("valibot").StringSchema<undefined>;
    readonly groupName: import("valibot").StringSchema<undefined>;
    readonly average: import("valibot").NumberSchema<undefined>;
    readonly numberOfMembers: import("valibot").NumberSchema<undefined>;
    readonly color: import("valibot").StringSchema<undefined>;
    readonly mad: import("valibot").NumberSchema<undefined>;
}, undefined>;
export declare const PolarizationAxisSchema: import("valibot").ObjectSchema<{
    readonly groupingQuestionId: import("valibot").StringSchema<undefined>;
    readonly groupingQuestionText: import("valibot").StringSchema<undefined>;
    readonly axisAverageAgreement: import("valibot").NumberSchema<undefined>;
    readonly axisMAD: import("valibot").NumberSchema<undefined>;
    readonly groups: import("valibot").ArraySchema<import("valibot").ObjectSchema<{
        readonly groupId: import("valibot").StringSchema<undefined>;
        readonly groupName: import("valibot").StringSchema<undefined>;
        readonly average: import("valibot").NumberSchema<undefined>;
        readonly numberOfMembers: import("valibot").NumberSchema<undefined>;
        readonly color: import("valibot").StringSchema<undefined>;
        readonly mad: import("valibot").NumberSchema<undefined>;
    }, undefined>, undefined>;
}, undefined>;
export type PolarizationAxis = InferOutput<typeof PolarizationAxisSchema>;
export type PolarizationGroup = InferOutput<typeof PolarizationGroupSchema>;
export declare const PolarizationMetricsSchema: import("valibot").ObjectSchema<{
    readonly statementId: import("valibot").StringSchema<undefined>;
    readonly totalEvaluators: import("valibot").NumberSchema<undefined>;
    readonly overallMAD: import("valibot").NumberSchema<undefined>;
    readonly averageAgreement: import("valibot").NumberSchema<undefined>;
    readonly lastUpdated: import("valibot").NumberSchema<undefined>;
    readonly axes: import("valibot").ArraySchema<import("valibot").ObjectSchema<{
        readonly groupingQuestionId: import("valibot").StringSchema<undefined>;
        readonly groupingQuestionText: import("valibot").StringSchema<undefined>;
        readonly axisAverageAgreement: import("valibot").NumberSchema<undefined>;
        readonly axisMAD: import("valibot").NumberSchema<undefined>;
        readonly groups: import("valibot").ArraySchema<import("valibot").ObjectSchema<{
            readonly groupId: import("valibot").StringSchema<undefined>;
            readonly groupName: import("valibot").StringSchema<undefined>;
            readonly average: import("valibot").NumberSchema<undefined>;
            readonly numberOfMembers: import("valibot").NumberSchema<undefined>;
            readonly color: import("valibot").StringSchema<undefined>;
            readonly mad: import("valibot").NumberSchema<undefined>;
        }, undefined>, undefined>;
    }, undefined>, undefined>;
}, undefined>;
export type PolarizationMetrics = InferOutput<typeof PolarizationMetricsSchema>;
