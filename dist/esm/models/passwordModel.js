import { z } from 'zod';
export const PasswordSchema = z.object({
    hashPassword: z.string(),
    statementId: z.string(),
});
//# sourceMappingURL=passwordModel.js.map