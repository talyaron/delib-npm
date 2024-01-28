import { z } from "zod";
import { StatementSchema } from "./statementsModels";



export enum TimerStatus {
  start = "start",
  pause = "pause",
  stop = "stop",
}

export const TimerStatusSchema = z.enum([
  TimerStatus.start,
  TimerStatus.pause,
  TimerStatus.stop,
]);

export const SetTimerSchema = z.object({
    time: z.number(),
    name: z.string(),
    stage:z.string(),
});

export type SetTimer = z.infer<typeof SetTimerSchema>;



export const ParentTimerSchema = z.object({
  statement: StatementSchema,
  userCanChangeTimer: z.boolean().optional(), // if users can chage the timer
  timers:z.array(SetTimerSchema)
});

export type ParentTimer = z.infer<typeof ParentTimerSchema>;

export const RoomTimerSchema = z.object({
  statement: StatementSchema,
  roomNumber: z.number(),
  stage: z.string(),
  timerStatus: TimerStatusSchema,
  startTime: z.number().optional(),
  timeToCount: z.number().optional(), //coming from the parent timer
});

export type RoomTimer = z.infer<typeof RoomTimerSchema>;
