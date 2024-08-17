import { z } from 'zod'

export enum AgreeDisagreeEnum{
    Agree = 'agree',
    Disagree = 'disagree',
    NoOpinion = 'noOpinion'

}

export const AgreeDisagreeSchema = z.object({
    agreeId: z.string(),
    statementId: z.string(),
    documentId: z.string(),
    topParentId: z.string(),
    userId: z.string(),
    agree: z.enum([AgreeDisagreeEnum.Agree, AgreeDisagreeEnum.Disagree, AgreeDisagreeEnum.NoOpinion]),
});

export type AgreeDisagree = z.infer<typeof AgreeDisagreeSchema>;