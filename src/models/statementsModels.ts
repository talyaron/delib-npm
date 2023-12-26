import { z } from "zod";
import { RoleSchama, UserSchema } from "./usersModels";
import { ScreenSchema } from "./screensAndNavModels";
import { RoomsStateSelectionEnum } from "./roomsModel";
import { ResultsBySchema } from "./resultsModel";

export enum StatementType {
  statement = "statement",
  option = "option",
  question = "question",
  result = "result",
}

export const SimpleStatementTypeSchema = z.enum([
  StatementType.statement,
  StatementType.option,
  StatementType.question,
  StatementType.result,
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

export const StatementSchema = z.object({
  consensus: z.number(), //depracted
  createdAt: z.number(),
  creator: UserSchema,
  creatorId: z.string(),
  defaultLanguage: z.string().length(2).optional(),
  elementHight: z.number().optional(), // TODO: check if this is needed in the future
  evaluation: z
    .object({
      con: z.number().optional(),
      fairness: z.number().optional(),
      pro: z.number().optional(),
    })
    .optional(), // TODO: remove this field after removing con, pro and consensus from the statement (20/1/24)
  hasChildren: z.boolean().optional(), //should be true if the statement can have children. this lets admin prevent having children.
  imagesURL:z.object({
    main:z.string().optional(),
    more:z.array(z.string()).optional()
  }).optional(),
  lastChildUpdate: z.number().optional(), //keep track of the last child update.
  lastMessage: z.string().optional(),
  lastUpdate: z.number(),
  maxConsesusStatement: SimpleStatementSchema.optional(), //TODO: remove (probably not needed)
  maxConsensus: z.number().optional(), //depracted
  order: z.number().optional(), // TODO: check if this is needed in the future
  parentId: z.string(),
  parents: z.array(z.string()).optional(), //all parents of the statement, orderd by the hirarchy
  pro: z.number().optional(), //depracted
  results: z.array(SimpleStatementSchema).optional(),
  resultsSettings: z
    .object({
      deep: z.number().optional(), //how deep the results will go
      minConsensus: z.number().optional(), //used for fariness cutoff: only fairness score above this number will become results
      numberOfResults: z.number().optional(), //how many results will be converted to results
      resultsBy: ResultsBySchema, //top options, top votes, top fairness etc,
    })
    .optional(),
  roomSize: z.number().optional(), //deprecated TODO: change code
  roomsSettings: z
    .object({
      //TODO: change code
      roomSize: z.number().optional(),
      roomsState: RoomsStateSelectionEnum.optional(), //being for room selection
    })
    .optional(),
  roomsState: RoomsStateSelectionEnum.optional(), //being for room selection
  selections: z.any().optional(), //TODO: rename to optionsVotes
  statement: z.string(), //the text of the statement
  statementId: z.string(),
  statementSettings: z
    .object({
      enableAddEvaluationOption: z.boolean().optional(), //if true, non admin users can add options under evaluation screen
      enableAddVotingOption: z.boolean().optional(), //if true, non admin users can add options under voting screen
      subScreens: z.array(ScreenSchema).optional(), //holds the navigation tabs of the statement
    })
    .optional(),
  statementType: SimpleStatementTypeSchema.optional(),
  subScreens: z.array(ScreenSchema).optional(), //deprecated TODO: remove after code changing TODO: change code (see room settings  )
  totalSubStatements: z.number().optional(), //It is being used to know howm mant statements were not read yet
  votes: z.number().optional(), //TODO: remove (probably not needed)
  voted: z.number().optional(), //TODO: remove (probably not needed)
});

export type Statement = z.infer<typeof StatementSchema>;

export const StatementSubscriptionSchema = z.object({
  role: RoleSchama,
  userId: z.string(),
  statementId: z.string(),
  lastUpdate: z.number(),
  statementsSubscribeId: z.string(),
  statement: StatementSchema,
  notification: z.boolean().optional(),
  token: z.string().optional(),
  totalSubStatementsRead: z.number().optional(),
  user: UserSchema,
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
