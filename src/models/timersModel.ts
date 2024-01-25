import {z} from "zod";

export const TimerSchema = z.object({
  roomNumber: z.number(),
  statementId: z.string(),
  parentId: z.string(),
  creatorId: z.string(),
  adminOnly: z.boolean(),
  pause: z.boolean(),
  start: z.boolean(),
  startTime: z.number(),
  timeToCount: z.number(),
});

export type Timer = z.infer<typeof TimerSchema>;