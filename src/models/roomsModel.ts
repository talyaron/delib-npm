import {z} from 'zod';
import { UserSchema } from './usersModels';
export const RoomSchema = z.object({
    statementId:z.string(),
    parentId:z.string(),
    participants:z.array(UserSchema),
});

export type Room = z.infer<typeof RoomSchema>;

export const RoomAskToJoinSchema = z.object({
    participant:UserSchema,
    requestId:z.string(),
    statementId:z.string(),
    parentId:z.string()
});

export type RoomAskToJoin = z.infer<typeof RoomAskToJoinSchema>;

export function getRequestIdToJoinRoom (userId:string, parentId:string):string|undefined {
    try {
        if(!userId || !parentId) throw new Error('userId or parentId is missing');
        return `${userId}--${parentId}`;
    } catch (error) {
        console.error(error);
        return undefined;
    }
    
}