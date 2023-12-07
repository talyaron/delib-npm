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
  statement: z.string(),
  statementId: z.string(),
  creatorId: z.string(),
  creator: UserSchema,
  parentId: z.string(),
  parents: z.array(z.string()).optional(), //all parents of the statement, orderd by the hirarchy
  topParentId: z.string().optional(), //the upper most statement in the hirarchy
  hasChildren: z.boolean().optional(), //should be true if the statement can have children. this lets admin prevent having children.
  lastMessage: z.string().optional(),
  lastUpdate: z.number(),
  lastChildUpdate: z.number().optional(), //keep track of the last child update.
  createdAt: z.number(),
  type: z.string().optional(),
  pro: z.number().optional(),
  con: z.number().optional(),
  consensus: z.number(),
  order: z.number().optional(),
  elementHight: z.number().optional(),
  votes: z.number().optional(),
  selections: z.any().optional(), //object of votes by userId
  voted: z.number().optional(),
  totalSubStatements: z.number().optional(),
  subScreens: z.array(ScreenSchema).optional(),
  roomsState: RoomsStateSelectionEnum.optional(),
  maxConsensus: z.number().optional(),
  maxConsesusStatement: SimpleStatementSchema.optional(),
  statementType: SimpleStatementTypeSchema.optional(),
  resultsSettings: z
    .object({
      resultsBy: ResultsBySchema,
      numberOfResults: z.number().optional(),
      deep: z.number().optional(),
      minConsensus: z.number().optional(),
      solutions: z.array(SimpleStatementSchema).optional(),
    })
    .optional(),
  results: z.array(SimpleStatementSchema).optional(),
  canHaveChildren: z.boolean().optional(),
  roomSize: z.number().optional(),
  defaultLanguage: z.string().optional(),
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
