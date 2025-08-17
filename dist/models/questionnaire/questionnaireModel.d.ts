import { InferOutput } from "valibot";
import { EvaluationUI } from "../evaluation/Evaluation";
export declare const QuestionnaireQuestionSchema: import("valibot").ObjectSchema<{
    readonly questionnaireId: import("valibot").StringSchema<undefined>;
    readonly statementId: import("valibot").StringSchema<undefined>;
    readonly evaluationUI: import("valibot").OptionalSchema<import("valibot").EnumSchema<typeof EvaluationUI, undefined>, undefined>;
    readonly order: import("valibot").NumberSchema<undefined>;
}, undefined>;
export type QuestionnaireQuestion = InferOutput<typeof QuestionnaireQuestionSchema>;
export declare const QuestionnaireSchema: import("valibot").ObjectSchema<{
    readonly questionnaireId: import("valibot").StringSchema<undefined>;
    readonly createdAt: import("valibot").OptionalSchema<import("valibot").NumberSchema<undefined>, undefined>;
    readonly updatedAt: import("valibot").OptionalSchema<import("valibot").NumberSchema<undefined>, undefined>;
    readonly questions: import("valibot").ArraySchema<import("valibot").ObjectSchema<{
        readonly questionnaireId: import("valibot").StringSchema<undefined>;
        readonly statementId: import("valibot").StringSchema<undefined>;
        readonly evaluationUI: import("valibot").OptionalSchema<import("valibot").EnumSchema<typeof EvaluationUI, undefined>, undefined>;
        readonly order: import("valibot").NumberSchema<undefined>;
    }, undefined>, undefined>;
}, undefined>;
export type Questionnaire = InferOutput<typeof QuestionnaireSchema>;
