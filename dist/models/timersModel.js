"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoomTimerSchema = exports.ParentTimerSchema = exports.SetTimerSchema = exports.TimerStatusSchema = exports.TimerStatus = void 0;
const zod_1 = require("zod");
const statementsModels_1 = require("./statementsModels");
var TimerStatus;
(function (TimerStatus) {
    TimerStatus["start"] = "start";
    TimerStatus["pause"] = "pause";
    TimerStatus["stop"] = "stop";
    TimerStatus["finish"] = "finish";
})(TimerStatus || (exports.TimerStatus = TimerStatus = {}));
exports.TimerStatusSchema = zod_1.z.enum([
    TimerStatus.start,
    TimerStatus.pause,
    TimerStatus.stop,
    TimerStatus.finish,
]);
exports.SetTimerSchema = zod_1.z.object({
    title: zod_1.z.string(),
    time: zod_1.z.number(),
    order: zod_1.z.number(),
    timerId: zod_1.z.string(),
    statementId: zod_1.z.string(),
});
exports.ParentTimerSchema = zod_1.z.object({
    statement: statementsModels_1.StatementSchema,
    userCanChangeTimer: zod_1.z.boolean().optional(), // if users can change the timer
    timers: zod_1.z.array(exports.SetTimerSchema),
});
exports.RoomTimerSchema = zod_1.z.object({
    title: zod_1.z.string(),
    statementId: zod_1.z.string(),
    roomNumber: zod_1.z.number(),
    initiatorId: zod_1.z.string().optional(),
    roomTimerId: zod_1.z.string(),
    timerSettingId: zod_1.z.string(),
    time: zod_1.z.number(),
    order: zod_1.z.number(),
    state: exports.TimerStatusSchema,
    lastUpdated: zod_1.z.number()
});
//# sourceMappingURL=timersModel.js.map