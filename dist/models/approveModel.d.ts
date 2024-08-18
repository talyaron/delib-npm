import { z } from 'zod';
export declare enum AgreeDisagreeEnum {
    Agree = "agree",
    Disagree = "disagree",
    NoOpinion = "noOpinion"
}
export declare const AgreeDisagreeSchema: z.ZodObject<{
    agreeId: z.ZodString;
    statementId: z.ZodString;
    documentId: z.ZodString;
    topParentId: z.ZodString;
    userId: z.ZodString;
    agree: z.ZodEnum<[AgreeDisagreeEnum.Agree, AgreeDisagreeEnum.Disagree, AgreeDisagreeEnum.NoOpinion]>;
}, "strip", z.ZodTypeAny, {
    statementId: string;
    topParentId: string;
    agree: AgreeDisagreeEnum;
    userId: string;
    documentId: string;
    agreeId: string;
}, {
    statementId: string;
    topParentId: string;
    agree: AgreeDisagreeEnum;
    userId: string;
    documentId: string;
    agreeId: string;
}>;
export type AgreeDisagree = z.infer<typeof AgreeDisagreeSchema>;
