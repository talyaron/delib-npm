import { InferOutput } from "valibot";
import { QuestionType } from "../TypeEnums";
import { EvaluationUI } from "../evaluation/Evaluation";
import { CutoffBy } from "../results/Results";
export declare const QuestionnaireQuestionSchema: import("valibot").ObjectSchema<{
    readonly statementId: import("valibot").StringSchema<undefined>;
    readonly questionType: import("valibot").EnumSchema<typeof QuestionType, undefined>;
    readonly evaluationUI: import("valibot").EnumSchema<typeof EvaluationUI, undefined>;
    readonly cutoffBy: import("valibot").EnumSchema<typeof CutoffBy, undefined>;
    readonly number: import("valibot").OptionalSchema<import("valibot").NumberSchema<undefined>, undefined>;
    readonly question: import("valibot").OptionalSchema<import("valibot").StringSchema<undefined>, undefined>;
    readonly description: import("valibot").OptionalSchema<import("valibot").StringSchema<undefined>, undefined>;
    readonly image: import("valibot").OptionalSchema<import("valibot").StringSchema<undefined>, undefined>;
    readonly questionnaireQuestionId: import("valibot").StringSchema<undefined>;
    readonly order: import("valibot").NumberSchema<undefined>;
}, undefined>;
export type QuestionnaireQuestion = InferOutput<typeof QuestionnaireQuestionSchema>;
export declare const QuestionnaireSchema: import("valibot").ObjectSchema<{
    readonly question: import("valibot").StringSchema<undefined>;
    readonly description: import("valibot").OptionalSchema<import("valibot").StringSchema<undefined>, undefined>;
    readonly image: import("valibot").OptionalSchema<import("valibot").StringSchema<undefined>, undefined>;
    readonly createdAt: import("valibot").OptionalSchema<import("valibot").NumberSchema<undefined>, undefined>;
    readonly updatedAt: import("valibot").OptionalSchema<import("valibot").NumberSchema<undefined>, undefined>;
    readonly questions: import("valibot").RecordSchema<import("valibot").StringSchema<undefined>, import("valibot").ObjectSchema<{
        readonly statementId: import("valibot").StringSchema<undefined>;
        readonly questionType: import("valibot").EnumSchema<typeof QuestionType, undefined>;
        readonly evaluationUI: import("valibot").EnumSchema<typeof EvaluationUI, undefined>;
        readonly cutoffBy: import("valibot").EnumSchema<typeof CutoffBy, undefined>;
        readonly number: import("valibot").OptionalSchema<import("valibot").NumberSchema<undefined>, undefined>;
        readonly question: import("valibot").OptionalSchema<import("valibot").StringSchema<undefined>, undefined>;
        readonly description: import("valibot").OptionalSchema<import("valibot").StringSchema<undefined>, undefined>;
        readonly image: import("valibot").OptionalSchema<import("valibot").StringSchema<undefined>, undefined>;
        readonly questionnaireQuestionId: import("valibot").StringSchema<undefined>;
        readonly order: import("valibot").NumberSchema<undefined>;
    }, undefined>, undefined>;
}, undefined>;
export type Questionnaire = InferOutput<typeof QuestionnaireSchema>;
