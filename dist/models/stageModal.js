"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StageSchema = exports.MethodSchema = exports.Method = void 0;
const zod_1 = require("zod");
//The types of deliberative processes that a stage can take
var Method;
(function (Method) {
    Method["description"] = "description";
    Method["questions"] = "questions";
    Method["needs"] = "needs";
    Method["suggestions"] = "suggestions";
    Method["voting"] = "voting";
    Method["summary"] = "summary";
})(Method || (exports.Method = Method = {}));
exports.MethodSchema = zod_1.z.enum([Method.description, Method.questions, Method.needs, Method.suggestions, Method.voting, Method.summary]);
exports.StageSchema = zod_1.z.object({
    statementId: zod_1.z.string(), //the id of the statement that this stage belongs to
    stageId: zod_1.z.string(),
    shortId: zod_1.z.number(), //the short id of url of the stage
    image: zod_1.z.any().optional(),
    title: zod_1.z.string().optional(),
    description: zod_1.z.string().optional(),
    order: zod_1.z.number(), //the order of the stage in the list of stages
    method: exports.MethodSchema, //what type of process this stage is
    enabled: zod_1.z.boolean().optional(), //whether the stage is enabled or not
});
