import { InferOutput } from 'valibot';
export declare const EvaluationSchema: import("valibot").ObjectSchema<{
    readonly parentId: import("valibot").StringSchema<undefined>;
    readonly evaluationId: import("valibot").StringSchema<undefined>;
    readonly statementId: import("valibot").StringSchema<undefined>;
    readonly evaluatorId: import("valibot").StringSchema<undefined>;
    readonly updatedAt: import("valibot").NumberSchema<undefined>;
    readonly evaluation: import("valibot").NumberSchema<undefined>;
    readonly evaluator: import("valibot").OptionalSchema<import("valibot").ObjectSchema<{
        readonly displayName: import("valibot").StringSchema<undefined>;
        readonly defaultLanguage: import("valibot").OptionalSchema<import("valibot").StringSchema<undefined>, undefined>;
        readonly email: import("valibot").OptionalSchema<import("valibot").NullableSchema<import("valibot").StringSchema<undefined>, undefined>, undefined>;
        readonly photoURL: import("valibot").OptionalSchema<import("valibot").NullableSchema<import("valibot").StringSchema<undefined>, undefined>, undefined>;
        readonly uid: import("valibot").StringSchema<undefined>;
        readonly isAnonymous: import("valibot").OptionalSchema<import("valibot").BooleanSchema<undefined>, undefined>;
        readonly fontSize: import("valibot").OptionalSchema<import("valibot").NullableSchema<import("valibot").NumberSchema<undefined>, undefined>, undefined>;
        readonly color: import("valibot").OptionalSchema<import("valibot").StringSchema<undefined>, undefined>;
        readonly agreement: import("valibot").OptionalSchema<import("valibot").NullableSchema<import("valibot").ObjectSchema<{
            readonly text: import("valibot").StringSchema<undefined>;
            readonly date: import("valibot").NumberSchema<undefined>;
            readonly version: import("valibot").StringSchema<undefined>;
        }, undefined>, undefined>, undefined>;
        readonly role: import("valibot").OptionalSchema<import("valibot").StringSchema<undefined>, undefined>;
    }, undefined>, undefined>;
}, undefined>;
export type Evaluation = InferOutput<typeof EvaluationSchema>;
export declare const EvaluatorSchema: import("valibot").ObjectSchema<{
    readonly evaluatorId: import("valibot").OptionalSchema<import("valibot").StringSchema<undefined>, undefined>;
    readonly statementId: import("valibot").OptionalSchema<import("valibot").StringSchema<undefined>, undefined>;
    readonly evaluated: import("valibot").OptionalSchema<import("valibot").BooleanSchema<undefined>, undefined>;
    readonly suggested: import("valibot").OptionalSchema<import("valibot").BooleanSchema<undefined>, undefined>;
    readonly firstEvaluation: import("valibot").OptionalSchema<import("valibot").BooleanSchema<undefined>, undefined>;
    readonly secondEvaluation: import("valibot").OptionalSchema<import("valibot").BooleanSchema<undefined>, undefined>;
    readonly voted: import("valibot").OptionalSchema<import("valibot").BooleanSchema<undefined>, undefined>;
}, undefined>;
export type Evaluator = InferOutput<typeof EvaluatorSchema>;
export declare enum SelectionFunction {
    random = "random",
    top = "top",
    vote = "vote"
}
export declare const StatementEvaluationSchema: import("valibot").ObjectSchema<{
    readonly sumEvaluations: import("valibot").NumberSchema<undefined>;
    readonly asParentTotalEvaluators: import("valibot").OptionalSchema<import("valibot").NumberSchema<undefined>, undefined>;
    readonly agreement: import("valibot").NumberSchema<undefined>;
    readonly numberOfEvaluators: import("valibot").NumberSchema<undefined>;
    readonly sumPro: import("valibot").OptionalSchema<import("valibot").NumberSchema<undefined>, undefined>;
    readonly sumCon: import("valibot").OptionalSchema<import("valibot").NumberSchema<undefined>, undefined>;
    readonly viewed: import("valibot").OptionalSchema<import("valibot").NumberSchema<undefined>, undefined>;
    readonly evaluationRandomNumber: import("valibot").OptionalSchema<import("valibot").NumberSchema<undefined>, undefined>;
    readonly selectionFunction: import("valibot").OptionalSchema<import("valibot").EnumSchema<typeof SelectionFunction, undefined>, undefined>;
}, undefined>;
export type StatementEvaluation = InferOutput<typeof StatementEvaluationSchema>;
export declare enum EvaluationUI {
    suggestions = "suggestions",
    voting = "voting",
    checkbox = "checkbox",
    clustering = "clustering"
}
export declare const StatementEvaluationSettingsSchema: import("valibot").ObjectSchema<{
    readonly evaluationUI: import("valibot").EnumSchema<typeof EvaluationUI, undefined>;
}, undefined>;
export type StatementEvaluationSettings = InferOutput<typeof StatementEvaluationSettingsSchema>;
