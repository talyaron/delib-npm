import {z} from 'zod';
import { Statement, StatementSchema } from "./statementsModels";

//used for storing maps of discussions
export type Map = {
    top: {
        statementId: string,
        statement: string,
        lastMessage: string,
        lastUpdate: number,
        results: Statement[],
    };
    children?: Map[]; //only questions are children
    
};

export interface MapIndex{
    map:Map,
    index: Array<{
        key: string,
        path: string[]
    }>,
    lastUpdate:number,
}

// export const MapSchema = z.object({
//     top: StatementSchema,
//     children: z.array(MapSchema).optional(),
// });