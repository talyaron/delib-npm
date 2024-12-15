"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setEvaluationToDB = void 0;
const firestore_1 = require("@firebase/firestore");
const collectionsModel_1 = require("../../../models/collectionsModel");
async function setEvaluationToDB({ statement, evaluation, DB, user }) {
    try {
        if (typeof evaluation !== "number")
            throw new Error("Evaluation is not a number");
        if (evaluation < -1 || evaluation > 1)
            throw new Error("Evaluation is not in range");
        //ids
        const parentId = statement.parentId;
        if (!parentId)
            throw new Error("ParentId is undefined");
        const statementId = statement.statementId;
        const userId = user?.uid;
        if (!userId)
            throw new Error("User is undefined");
        const evaluationId = `${userId}--${statementId}`;
        //set evaluation to db
        const evaluationRef = (0, firestore_1.doc)(DB, collectionsModel_1.Collections.evaluations, evaluationId);
        await (0, firestore_1.setDoc)(evaluationRef, {
            parentId,
            evaluationId,
            statementId,
            evaluatorId: userId,
            updatedAt: firestore_1.Timestamp.now().toMillis(),
            evaluation,
            evaluator: user,
        });
    }
    catch (error) {
        console.error(error);
    }
}
exports.setEvaluationToDB = setEvaluationToDB;
