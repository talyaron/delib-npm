export declare const FairDivisionSelectionSchema: import("valibot").ObjectSchema<{
    readonly asOption: import("valibot").ObjectSchema<{
        readonly costCoins: import("valibot").OptionalSchema<import("valibot").NumberSchema<undefined>, undefined>;
        readonly selected: import("valibot").BooleanSchema<undefined>;
        readonly updatedAt: import("valibot").OptionalSchema<import("valibot").NumberSchema<undefined>, undefined>;
    }, undefined>;
    readonly asParent: import("valibot").ObjectSchema<{
        readonly isFairDivision: import("valibot").BooleanSchema<undefined>;
    }, undefined>;
}, undefined>;
export type FairDivisionSelection = typeof FairDivisionSelectionSchema;
export declare const FairDivisionUserSelectionSchema: import("valibot").ObjectSchema<{
    readonly userId: import("valibot").StringSchema<undefined>;
    readonly statementId: import("valibot").StringSchema<undefined>;
    readonly investment: import("valibot").NumberSchema<undefined>;
    readonly parentId: import("valibot").StringSchema<undefined>;
}, undefined>;
export type FairDivisionUserSelection = typeof FairDivisionUserSelectionSchema;
