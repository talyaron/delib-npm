import { z } from "zod";
import { UserSchema } from "./usersModels";
import { StatementSchema } from "./statementsModels";
import { SetTimerSchema } from "./timersModel";
export const RoomSchema = z.object({
    statement: StatementSchema,
    roomNumber: z.number(),
    roomId: z.string(),
});
export const roomSettingsSchema = z.object({
    statementId: z.string(),
    isEdit: z.boolean(),
    participantsPerRoom: z.number(),
    timers: z.array(SetTimerSchema),
});
export const ParticipantInRoomSchema = z.object({
    user: UserSchema,
    roomNumber: z.number().optional(),
    statement: StatementSchema,
    participantInRoomId: z.string(),
});
//# sourceMappingURL=roomsModel.js.map