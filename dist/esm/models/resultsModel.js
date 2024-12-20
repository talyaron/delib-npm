import { z } from 'zod';
import { StatementSchema } from './statementsModels';
/** used by evaluation subScreen */
export var ResultsBy;
(function (ResultsBy) {
    /** all options above a specific consensus level will be approved */
    ResultsBy["consensusLevel"] = "consensus-level";
    /** X top options will be approved */
    ResultsBy["topOptions"] = "topOptions";
    /** options that were checked by X percentage of users will be approved */
    ResultsBy["checkedBy"] = "checkedBy";
    /** options that were checked by a specific user will be approved for user */
    ResultsBy["privateCheck"] = "privateCheck";
})(ResultsBy || (ResultsBy = {}));
export const ResultsBySchema = z.enum([ResultsBy.consensusLevel, ResultsBy.topOptions, ResultsBy.checkedBy, ResultsBy.privateCheck]);
const resultsSchema = z.object({
    statement: StatementSchema,
    results: z.array(StatementSchema),
});
export var ResultsType;
(function (ResultsType) {
    ResultsType["normal"] = "normal";
    ResultsType["full"] = "full";
})(ResultsType || (ResultsType = {}));
//# sourceMappingURL=resultsModel.js.map