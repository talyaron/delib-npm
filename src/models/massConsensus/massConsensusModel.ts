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
	userTypes: record( // set a process by user types
		enum_(LoginType), 
		object({
			processName: optional(string()),
			steps: array(MassConsensusPageUrlsSchema),
		})
	),
	default: object({
		processName: optional(string()),
		steps: array(MassConsensusPageUrlsSchema),
	})
});

export type MassConsensusProcess = InferOutput<typeof MassConsensusProcessSchema>;




