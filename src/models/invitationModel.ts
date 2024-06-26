import {z} from 'zod';

export const InvitationSchema = z.object({
   pathname: z.string(),
   statementId: z.string(),
   lastUpdate: z.number(),
   number: z.number(),
});

export type Invitation = z.infer<typeof InvitationSchema>;