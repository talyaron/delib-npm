import { Firestore } from "@firebase/firestore";
import { Statement } from "../../../models/statementsModels";
import { User } from "../../../models/usersModels";
interface SetEvaluationProps {
    statement: Statement;
    evaluation: number;
    DB: Firestore;
    user: User;
}
export declare function setEvaluationToDB({ statement, evaluation, DB, user }: SetEvaluationProps): Promise<void>;
export {};
