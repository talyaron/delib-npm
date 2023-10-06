import {z} from 'zod';
import { UserSchema } from './usersModels';
import { StatementSchema } from './statementsModels';
export const RoomSchema = z.object({
    statementId:z.string(),
    parentId:z.string(),
    participants:z.array(UserSchema),
});

export type Room = z.infer<typeof RoomSchema>;

export const RoomAskToJoinSchema = z.object({
    participant:UserSchema,
    statement:StatementSchema,
    requestId:z.string(),
    statementId:z.string(),
    parentId:z.string()
});



export type RoomAskToJoin = z.infer<typeof RoomAskToJoinSchema>;

export const LobbyRoomsSchema = z.object({
    joinersCount:z.number(),
    parentId:z.string(),
    statementId:z.string()
});

export type LobbyRooms = z.infer<typeof LobbyRoomsSchema>;

//enum for zod rooms state selection
export enum RoomsStateSelection {
    SELECT_ROOMS = 'SELECT_ROOMS',
    DIVIDE = 'DIVIDE',
};

//zod for rooms state selection
export const RoomsStateSelectionEnum = z.enum([RoomsStateSelection.SELECT_ROOMS, RoomsStateSelection.DIVIDE]);
// export const roomsStateSelection