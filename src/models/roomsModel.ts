import { z } from "zod";
import { UserSchema } from "./usersModels";
import { StatementSchema } from "./statementsModels";
import { SetTimerSchema } from "./timersModel";


export const RoomSchema = z.object({
  statement: StatementSchema,
  roomNumber: z.number(),
  roomId: z.string(),
});

export type Room = z.infer<typeof RoomSchema>;

export const roomSettingsSchema = z.object({
  statementId: z.string(),
  isEdit: z.boolean(),
  participantsPerRoom: z.number(),
  timers:z.array(SetTimerSchema),
})

export type RoomSettings = z.infer<typeof roomSettingsSchema>;

export const ParticipantInRoomSchema = z.object({
  user: UserSchema,
  roomNumber: z.number().optional(),
  statement: StatementSchema,
  participantInRoomId: z.string(),
});

export type ParticipantInRoom = z.infer<typeof ParticipantInRoomSchema>;
