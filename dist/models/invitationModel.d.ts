import { z } from 'zod';
export declare const InvitationSchema: z.ZodObject<{
    pathname: z.ZodString;
    statementId: z.ZodString;
    lastUpdate: z.ZodNumber;
    number: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    number: number;
    statementId: string;
    lastUpdate: number;
    pathname: string;
}, {
    number: number;
    statementId: string;
    lastUpdate: number;
    pathname: string;
}>;
export type Invitation = z.infer<typeof InvitationSchema>;
