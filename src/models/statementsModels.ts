import { z } from "zod";
import { RoleSchema, UserSchema } from "./usersModels";
import { ScreenSchema } from "./screensAndNavModels";
import { RoomsStateSelectionEnum } from "./roomsModel";
import { ResultsBySchema } from "./resultsModel";

export enum StatementType {
  statement = "statement",
  option = "option",
  question = "question",
  result = "result", //the top evaluated statements
  selection = "selection", //the top voting statements
}

export enum QuestionType{
  singleStep = "single-step",
  multipleSteps = "multiple-steps",
}

export enum QuestionStage{
  explanation = "explanation",
  suggestion = "suggestion",
  firstEvaluation = "firstEvaluation",
  secondEvaluation = "secondEvaluation",
  voting = "voting",
  finished = "finished",
}

export const SimpleStatementTypeSchema = z.enum([
  StatementType.statement,
  StatementType.option,
  StatementType.question,
  StatementType.result,
  StatementType.selection,
]);


export const SimpleStatementSchema = z.object({
  statementId: z.string(),
  statement: z.string(),
  creatorId: z.string(),
  creator: UserSchema,
  parentId: z.string(),
  consensus: z.number(),
  voted: z.number().optional(),
});

export type SimpleStatement = z.infer<typeof SimpleStatementSchema>;

export enum Access {
  open = "open",
  close = "close",
}

export const AccessSchema = z.enum([Access.open, Access.close]);

export enum membersAllowed {
  all = "all",
  nonAnonymous = "nonAnonymous",
}

export const MembersAllowedSchema = z.enum([
  membersAllowed.all,
  membersAllowed.nonAnonymous,
]);

const QuestionSettingsSchema = z.object({
  questionType: z.enum([QuestionType.singleStep, QuestionType.multipleSteps]), //the type of the question (single-step, multiple-steps)
  currentStage: z.enum([QuestionStage.explanation, QuestionStage.suggestion, QuestionStage.firstEvaluation, QuestionStage.secondEvaluation, QuestionStage.voting, QuestionStage.finished]), //the current step of the question
})

export type QuestionSettings = z.infer<typeof QuestionSettingsSchema>;

export const StatementSchema = z.object({
  allowAnonymousLogin: z.boolean().optional(), //TODO: remove in the future, because of membersAllowed. if true, non-logged-in users can participate in the statement
  statement: z.string(), //the text of the statement
  statementId: z.string(),
  creatorId: z.string(),
  creator: UserSchema,
  color: z.string().optional(),
  defaultLanguage: z.string().length(2).optional(),
  followMe: z.string().optional(),   // used to help other users to follow the admin
  parentId: z.string(),
  parents: z.array(z.string()).optional(), //all parents of the statement, ordered by the hierarchy
  topParentId: z.string().optional(), //the upper most statement in the hierarchy
  hasChildren: z.boolean().optional(), //should be true if the statement can have children. this lets admin prevent having children.
  lastMessage: z.string().optional(),
  lastUpdate: z.number(),
  lastChildUpdate: z.number().optional(), //keep track of the last child update.
  createdAt: z.number(),
  pro: z.number().optional(), //deprecated
  con: z.number().optional(), //deprecated
  doc:z.object({
    isDoc: z.boolean(),
    order:z.number() //if true this means that the statement is the main document
  }).optional(),
  evaluation: z
  .object({
    sumEvaluations: z.number(), //the summery of evaluations
    agreement: z.number(), //the agreement of evaluations
    numberOfEvaluators: z.number(), //the number of evaluators
  }).optional(),// TODO: remove this field after removing con, pro and consensus from the statement (20/1/24)
  consensus: z.number(), //the summery of evaluations
  order: z.number().optional(), // TODO: check if this is needed in the future
  elementHight: z.number().optional(), // TODO: check if this is needed in the future
  votes: z.number().optional(), //TODO: remove (probably not needed)
  selections: z.any().optional(), //TODO: rename to optionsVotes
  isSelected: z.boolean().optional(),
  voted: z.number().optional(), //TODO: remove (probably not needed)
  totalSubStatements: z.number().optional(), //It is being used to know how many statements were not read yet
  subScreens: z.array(ScreenSchema).optional(), //deprecated TODO: remove after code changing TODO: change code (see room settings  )
  roomsState: RoomsStateSelectionEnum.optional(), //being for room selection
  statementSettings: z
    .object({
      /** holds the navigation tabs of the statement */
      subScreens: z.array(ScreenSchema).optional(),
      /** if true, non admin users can add options under evaluation screen */
      enableAddEvaluationOption: z.boolean().optional(),
      /** if true, non admin users can add options under voting screen */
      enableAddVotingOption: z.boolean().optional(),
      /** if true, the evaluation element will be enhanced */
      enhancedEvaluation: z.boolean().optional(),
      /** if true, the evaluation element will be shown */
      showEvaluation: z.boolean().optional(),
      /** if true, only the results will be shown */
      inVotingGetOnlyResults: z.boolean().optional(),
      enableSimilaritiesSearch: z.boolean().optional(), //if true, look for similar sub-statements
      enableNotifications: z.boolean().optional(), //if true, send notifications to the users
    })
    .optional(),
  membership: z
    .object({
      adminApproveMembers: z.boolean().optional(),
      access: AccessSchema.optional(), // TODO: remove optional after  (20/4/24)
      typeOfMembersAllowed: MembersAllowedSchema.optional(),
    })
    .optional(),
  maxConsensus: z.number().optional(), //deprecated
  statementType: SimpleStatementTypeSchema.optional(),
  /** true if the option was selected in voting */
  selected: z.boolean().optional(),
  resultsSettings: z
    .object({
      resultsBy: ResultsBySchema, //top options, top votes, top fairness etc,
      numberOfResults: z.number().optional(), //how many top options will be converted to results
      numberOfSelections: z.number().optional(), //how many top votes will be converted to selections
      deep: z.number().optional(), //how deep the results will go
      minConsensus: z.number().optional(), //used for fairness cutoff: only fairness score above this number will become results
    })
    .optional(),
  results: z.array(SimpleStatementSchema).optional(),
  // canHaveChildren: z.boolean().optional(), //deprecated
  roomSize: z.number().optional(), //deprecated TODO: change code
  roomsSettings: z
    .object({
      //TODO: change code
      roomSize: z.number().optional(),
      roomsState: RoomsStateSelectionEnum.optional(), //being for room selection
    })
    .optional(),
  imagesURL: z
    .object({
      main: z.string().optional(),
      more: z.array(z.string()).optional(),
    })
    .optional(),
  /** total statement evaluators */
  totalEvaluators: z.number().optional(),
  /** Question settings */
  questionSettings: QuestionSettingsSchema.optional(),
  /** is part of temporary presentation under multi stage question */
  isPartOfTempPresentation: z.boolean().optional(),
  /** Document settings */ 
  documentSettings: z
    .object({
      isMainDocument: z.boolean(), //if true this means that the statement is the main document
      isPartOfDocument: z.boolean(), //if true this means that the statement is part of a document (or the main document)
      mainDocumentId: z.string(), //the main document id
      parentId:z.string(), // The parent document id refers to the statement that this child statement belongs to.
      order:z.number() // The order of the statement in the document
    })
    .optional(),
});

export type Statement = z.infer<typeof StatementSchema>;

export const StatementSubscriptionSchema = z.object({
  role: RoleSchema,
  userId: z.string(),
  statementId: z.string(),
  lastUpdate: z.number(),
  statementsSubscribeId: z.string(),
  statement: StatementSchema, 
  notification: z.boolean().default(false),
  token: z.array(z.string()).optional(),
  totalSubStatementsRead: z.number().optional(),
  user: UserSchema,
  userAskedForNotification: z.boolean().default(false),
});

export type StatementSubscription = z.infer<typeof StatementSubscriptionSchema>;

export const StatementSubscriptionNotificationSchema = z.object({
  statementId: z.string(),
  userId: z.string(),
  subscribed: z.boolean(),
  token: z.string(),
  notification: z.boolean().optional(),
});

export type StatementSubscriptionNotification = z.infer<
  typeof StatementSubscriptionNotificationSchema
>;


