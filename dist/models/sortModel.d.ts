import { z } from 'zod';
export declare enum SortType {
    newest = "newest",
    mostUpdated = "mostUpdated",
    random = "random",
    accepted = "accepted"
}
export declare const SortTypeSchema: z.ZodEnum<[SortType, ...SortType[]]>;
