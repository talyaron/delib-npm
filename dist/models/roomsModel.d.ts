import { z } from 'zod';
export declare const RoomSchema: z.ZodObject<{
    statementId: z.ZodString;
    parentId: z.ZodString;
    participants: z.ZodArray<z.ZodObject<{
        displayName: z.ZodString;
        email: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        photoURL: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        uid: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        displayName: string;
        uid: string;
        email?: string | null | undefined;
        photoURL?: string | null | undefined;
    }, {
        displayName: string;
        uid: string;
        email?: string | null | undefined;
        photoURL?: string | null | undefined;
    }>, "many">;
}, "strip", z.ZodTypeAny, {
    statementId: string;
    parentId: string;
    participants: {
        displayName: string;
        uid: string;
        email?: string | null | undefined;
        photoURL?: string | null | undefined;
    }[];
}, {
    statementId: string;
    parentId: string;
    participants: {
        displayName: string;
        uid: string;
        email?: string | null | undefined;
        photoURL?: string | null | undefined;
    }[];
}>;
export type Room = z.infer<typeof RoomSchema>;
export declare const RoomAskToJoinSchema: z.ZodObject<{
    participant: z.ZodObject<{
        displayName: z.ZodString;
        email: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        photoURL: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        uid: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        displayName: string;
        uid: string;
        email?: string | null | undefined;
        photoURL?: string | null | undefined;
    }, {
        displayName: string;
        uid: string;
        email?: string | null | undefined;
        photoURL?: string | null | undefined;
    }>;
    requestId: z.ZodString;
    statementId: z.ZodString;
    parentId: z.ZodString;
}, "strip", z.ZodTypeAny, {
    statementId: string;
    parentId: string;
    participant: {
        displayName: string;
        uid: string;
        email?: string | null | undefined;
        photoURL?: string | null | undefined;
    };
    requestId: string;
}, {
    statementId: string;
    parentId: string;
    participant: {
        displayName: string;
        uid: string;
        email?: string | null | undefined;
        photoURL?: string | null | undefined;
    };
    requestId: string;
}>;
export type RoomAskToJoin = z.infer<typeof RoomAskToJoinSchema>;
export declare function getRequestIdToJoinRoom(userId: string, parentId: string): string | undefined;
