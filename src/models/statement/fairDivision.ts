import { boolean, number, object, optional } from "valibot";

//used to se if the option was selected in a fair division 
export const FairDivisionSelectionSchema = object({
    selected: boolean(), // true if the user selected this option
    updatedAt: optional(number()), // the last time the user updated their selection
});