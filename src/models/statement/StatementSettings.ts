import {
	object,
	optional,
	array,
	string,
	boolean,
	enum_,
	InferOutput,
	number,
} from 'valibot';
import { DeliberationType } from '../TypeEnums';

export const StatementSettingsSchema = object({
	subScreens: optional(array(string())),
	enableAddEvaluationOption: optional(boolean()),
	enableAddNewSubQuestionsButton: optional(boolean()),
	enableAddVotingOption: optional(boolean()),
	enhancedEvaluation: optional(boolean()),
	joiningEnabled: optional(boolean()),
	showEvaluation: optional(boolean()),
	inVotingGetOnlyResults: optional(boolean()),
	enableSimilaritiesSearch: optional(boolean()),
	enableNavigationalElements: optional(boolean()),
	show: optional(boolean()),
	deliberationType: optional(enum_(DeliberationType)),
	hasChat: optional(boolean()),
	hasChildren: optional(boolean()),
	numberOfOptionsPerUser: optional(number())
});

export type StatementSettings = InferOutput<typeof StatementSettingsSchema>;
