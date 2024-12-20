import { z } from 'zod';
//The types of deliberative processes that a stage can take
export var Method;
(function (Method) {
    Method["description"] = "description";
    Method["questions"] = "questions";
    Method["needs"] = "needs";
    Method["suggestions"] = "suggestions";
    Method["voting"] = "voting";
    Method["summary"] = "summary";
})(Method || (Method = {}));
export const MethodSchema = z.enum([Method.description, Method.questions, Method.needs, Method.suggestions, Method.voting, Method.summary]);
export const StageSchema = z.object({
    statementId: z.string(), //the id of the statement that this stage belongs to
    stageId: z.string(),
    shortId: z.number(), //the short id of url of the stage
    image: z.any().optional(),
    title: z.string().optional(),
    description: z.string().optional(),
    order: z.number(), //the order of the stage in the list of stages
    method: MethodSchema, //what type of process this stage is
    enabled: z.boolean().optional(), //whether the stage is enabled or not
});
//# sourceMappingURL=stageModal.js.map