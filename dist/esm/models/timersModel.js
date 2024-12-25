import { z } from "zod";
import { StatementSchema } from "./statementsModels";
export var TimerStatus;
(function (TimerStatus) {
    TimerStatus["start"] = "start";
    TimerStatus["pause"] = "pause";
    TimerStatus["stop"] = "stop";
    TimerStatus["finish"] = "finish";
})(TimerStatus || (TimerStatus = {}));
export const TimerStatusSchema = z.enum([
    TimerStatus.start,
    TimerStatus.pause,
    TimerStatus.stop,
    TimerStatus.finish,
]);
export const SetTimerSchema = z.object({
    title: z.string(),
    time: z.number(),
    order: z.number(),
    timerId: z.string(),
    statementId: z.string(),
});
export const ParentTimerSchema = z.object({
    statement: StatementSchema,
    userCanChangeTimer: z.boolean().optional(), // if users can change the timer
    timers: z.array(SetTimerSchema),
});
export const RoomTimerSchema = z.object({
    title: z.string(),
    statementId: z.string(),
    roomNumber: z.number(),
    initiatorId: z.string().optional(),
    roomTimerId: z.string(),
    timerSettingId: z.string(),
    time: z.number(),
    order: z.number(),
    state: TimerStatusSchema,
    lastUpdated: z.number()
});
//# sourceMappingURL=timersModel.js.map