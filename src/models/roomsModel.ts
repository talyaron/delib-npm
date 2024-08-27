import { z } from "zod";
import { UserSchema } from "./usersModels";
import { Statement, StatementSchema } from "./statementsModels";
import { statementToSimpleStatement } from "../controllers/statementsCont";
export const RoomSchema = z.object({
  statementId: z.string(),
  parentId: z.string(),
  participants: z.array(UserSchema),
});

export type Room = z.infer<typeof RoomSchema>;

export const ParticipantSchema = z.object({
  participant: UserSchema,
  statement: z.union([StatementSchema, z.undefined()]),
  requestId: z.string(),
  statementId: z.string().optional(),
  parentId: z.string(),
  roomNumber: z.number().optional(),
  approved: z.boolean().optional(),
  lastUpdate: z.number().optional(),
  paradigmAxes: z
    .array(
      z.object({ paradigmAxis: z.string(), value: z.number().optional() }).optional()
    )
    .optional(),
});

export type Participant = z.infer<typeof ParticipantSchema>;

export const LobbyRoomsSchema = z.object({
  joinersCount: z.number(),
  parentId: z.string(),
  statementId: z.string(),
});

export type LobbyRooms = z.infer<typeof LobbyRoomsSchema>;

//enum for zod rooms state selection
export enum RoomsStateSelection {
  chooseRoom = "chooseRoom",
  inRoom = "inRoom",
}

//zod for rooms state selection
export const RoomsStateSelectionEnum = z.enum([
  RoomsStateSelection.chooseRoom,
  RoomsStateSelection.inRoom,
]);
// export const roomsStateSelection

export const RoomDiviedSchema = z.object({
  roomNumber: z.number(),
  statement: StatementSchema,
  participants: z.array(ParticipantSchema),
});

export type RoomDivied = z.infer<typeof RoomDiviedSchema>;

export const ParticipantInRoomSchema = z.object({
  user: UserSchema,
  roomNumber: z.number().optional(),
  statement: StatementSchema,
});

export type ParticipantInRoom = z.infer<typeof ParticipantInRoomSchema>;
