import {z} from 'zod';

export enum SortType {
    newest = "newest",
    mostUpdated = "mostUpdated",
    random = "random",
    accepted = "accepted"
}

export const SortTypeSchema = z.enum(Object.values(SortType) as [SortType, ...SortType[]]);