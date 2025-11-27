import { InferOutput } from 'valibot';
import { QuestionStage, QuestionStagesType, QuestionStep, QuestionType } from '../TypeEnums';
export declare const QuestionSettingsSchema: import("valibot").ObjectSchema<{
    readonly isTopQuestion: import("valibot").OptionalSchema<import("valibot").BooleanSchema<undefined>, undefined>;
    readonly questionType: import("valibot").OptionalSchema<import("valibot").EnumSchema<typeof QuestionType, undefined>, undefined>;
    readonly askUserForASolutionBeforeEvaluation: import("valibot").OptionalSchema<import("valibot").BooleanSchema<undefined>, undefined>;
    readonly steps: import("valibot").OptionalSchema<import("valibot").EnumSchema<typeof QuestionStagesType, undefined>, undefined>;
    readonly stepsAllowed: import("valibot").OptionalSchema<import("valibot").ArraySchema<import("valibot").EnumSchema<typeof QuestionStep, undefined>, undefined>, undefined>;
    readonly currentStep: import("valibot").OptionalSchema<import("valibot").EnumSchema<typeof QuestionStep, undefined>, undefined>;
    readonly currentStage: import("valibot").OptionalSchema<import("valibot").EnumSchema<typeof QuestionStage, undefined>, undefined>;
}, undefined>;
export type QuestionSettings = InferOutput<typeof QuestionSettingsSchema>;
