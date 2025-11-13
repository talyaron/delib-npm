import { InferOutput } from 'valibot';
export declare const PopperHebbianScoreSchema: import("valibot").ObjectSchema<{
    readonly statementId: import("valibot").StringSchema<undefined>;
    readonly totalScore: import("valibot").NumberSchema<undefined>;
    readonly corroborationLevel: import("valibot").NumberSchema<undefined>;
    readonly evidenceCount: import("valibot").NumberSchema<undefined>;
    readonly status: import("valibot").PicklistSchema<["looking-good", "under-discussion", "needs-fixing"], undefined>;
    readonly lastCalculated: import("valibot").NumberSchema<undefined>;
}, undefined>;
export type PopperHebbianScore = InferOutput<typeof PopperHebbianScoreSchema>;
