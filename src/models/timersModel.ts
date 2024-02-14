import { z } from "zod";
import { StatementSchema } from "./statementsModels";

export enum TimerStatus {
  start = "start",
  pause = "pause",
  stop = "stop",
  finish = "finish",
}

export const TimerStatusSchema = z.enum([
  TimerStatus.start,
  TimerStatus.pause,
  TimerStatus.stop,
  TimerStatus.finish,
]);

export const SetTimerSchema = z.object({
  time: z.number(),
  name: z.string(),
  order: z.number(),
  timerId: z.string(),
  statementId: z.string(),
});

export type SetTimer = z.infer<typeof SetTimerSchema>;

export const ParentTimerSchema = z.object({
  statement: StatementSchema,
  userCanChangeTimer: z.boolean().optional(), // if users can change the timer
  timers: z.array(SetTimerSchema),
});

export type ParentTimer = z.infer<typeof ParentTimerSchema>;

export const RoomTimerSchema = z.object({
  statementId: z.string(),
  roomNumber: z.number(),
  initiatorId: z.string().optional(),
  time: z.number(),
  order: z.number(),
  active: z.boolean(),
  state: TimerStatusSchema,
  lastUpdated:z.number()
});

export type RoomTimer = z.infer<typeof RoomTimerSchema>;
