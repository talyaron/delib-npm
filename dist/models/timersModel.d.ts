import { z } from "zod";
export declare const TimerSchema: z.ZodObject<{
    roomNumber: z.ZodNumber;
    statementId: z.ZodString;
    parentId: z.ZodString;
    creatorId: z.ZodString;
    adminOnly: z.ZodBoolean;
    pause: z.ZodBoolean;
    start: z.ZodBoolean;
    startTime: z.ZodNumber;
    timeToCount: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    startTime: number;
    pause: boolean;
    start: boolean;
    statementId: string;
    parentId: string;
    creatorId: string;
    roomNumber: number;
    adminOnly: boolean;
    timeToCount: number;
}, {
    startTime: number;
    pause: boolean;
    start: boolean;
    statementId: string;
    parentId: string;
    creatorId: string;
    roomNumber: number;
    adminOnly: boolean;
    timeToCount: number;
}>;
export type Timer = z.infer<typeof TimerSchema>;
