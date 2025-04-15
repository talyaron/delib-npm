import {
	array,
	object,
	string,
	enum_,
	optional,
	null_,
	InferOutput,
	number,
	nullable,
	record,
} from 'valibot';
import { MassConsensusPageUrls } from '../TypeEnums';
import { CreatorSchema, LoginType } from '../user/User';


export const MassConsensusPageUrlsSchema = enum_(MassConsensusPageUrls);

export const MassConsensusSchema = object({
	texts: optional(
		object({
			introduction: string(),
			suggestionQuestion: string(),
			similarSuggestions: string(),
			randomSuggestions: string(),
			topSuggestions: string(),
			voting: string(),
		})
	),
	steps: array(MassConsensusPageUrlsSchema),
	currentStep: optional(MassConsensusPageUrlsSchema),
});

export type MassConsensus = InferOutput<typeof MassConsensusSchema>;

export const GeneratedStatementSchema = object({
	statement: string(),
	statementId: null_(),
});

export type GeneratedStatement = InferOutput<typeof GeneratedStatementSchema>;

export const MassConsensusMemberSchema = object({
	statementId: string(),
	lastUpdate: number(),
	email: optional(nullable(string())),
	creator: CreatorSchema
});

export type MassConsensusMember = InferOutput<typeof MassConsensusMemberSchema>;

export const MassConsensusProcessSchema = object({
	statementId: string(),
	loginTypes: record(
		enum_(LoginType),
		object({
			steps: array(MassConsensusPageUrlsSchema),
			processName: optional(string()),
			currentStep: optional(number()),
		})
	)
});

export type MassConsensusProcess = InferOutput<typeof MassConsensusProcessSchema>;




