import {z} from 'zod';

export enum ResultsBy {
    topOne = "topOne",
    consensusLevel = "consensus-level",
    topVote = "topVote",
    topOption = "topOption",
    checkedBy = "checkedBy",
    privateCheck = "privateCheck"
}

export const ResultsBySchema = z.enum([ResultsBy.topOne, ResultsBy.consensusLevel, ResultsBy.topVote, ResultsBy.topOption, ResultsBy.checkedBy, ResultsBy.privateCheck]);