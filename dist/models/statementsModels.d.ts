import { z } from 'zod';
export declare enum StatementType {
    STATEMENT = "statement",
    GROUP = "GROUP",
    OPTION = "option"
}
export declare const StatementSchema: z.ZodObject<{
    statement: z.ZodString;
    statementId: z.ZodString;
    creatorId: z.ZodString;
    creator: z.ZodObject<{
        displayName: z.ZodString;
        email: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        photoURL: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        uid: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        displayName: string;
        uid: string;
        email?: string | null | undefined;
        photoURL?: string | null | undefined;
    }, {
        displayName: string;
        uid: string;
        email?: string | null | undefined;
        photoURL?: string | null | undefined;
    }>;
    parentId: z.ZodString;
    hasChildren: z.ZodOptional<z.ZodBoolean>;
    lastMessage: z.ZodOptional<z.ZodString>;
    lastUpdate: z.ZodNumber;
    createdAt: z.ZodNumber;
    type: z.ZodEnum<[StatementType.STATEMENT, StatementType.GROUP, StatementType.OPTION]>;
    isOption: z.ZodOptional<z.ZodBoolean>;
    pro: z.ZodOptional<z.ZodNumber>;
    con: z.ZodOptional<z.ZodNumber>;
    consensus: z.ZodNumber;
    order: z.ZodOptional<z.ZodNumber>;
    elementHight: z.ZodOptional<z.ZodNumber>;
    votes: z.ZodOptional<z.ZodNumber>;
    selections: z.ZodOptional<z.ZodAny>;
    voted: z.ZodOptional<z.ZodNumber>;
    totalSubStatements: z.ZodOptional<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    type: StatementType;
    statement: string;
    statementId: string;
    creatorId: string;
    creator: {
        displayName: string;
        uid: string;
        email?: string | null | undefined;
        photoURL?: string | null | undefined;
    };
    parentId: string;
    lastUpdate: number;
    createdAt: number;
    consensus: number;
    hasChildren?: boolean | undefined;
    lastMessage?: string | undefined;
    isOption?: boolean | undefined;
    pro?: number | undefined;
    con?: number | undefined;
    order?: number | undefined;
    elementHight?: number | undefined;
    votes?: number | undefined;
    selections?: any;
    voted?: number | undefined;
    totalSubStatements?: number | undefined;
}, {
    type: StatementType;
    statement: string;
    statementId: string;
    creatorId: string;
    creator: {
        displayName: string;
        uid: string;
        email?: string | null | undefined;
        photoURL?: string | null | undefined;
    };
    parentId: string;
    lastUpdate: number;
    createdAt: number;
    consensus: number;
    hasChildren?: boolean | undefined;
    lastMessage?: string | undefined;
    isOption?: boolean | undefined;
    pro?: number | undefined;
    con?: number | undefined;
    order?: number | undefined;
    elementHight?: number | undefined;
    votes?: number | undefined;
    selections?: any;
    voted?: number | undefined;
    totalSubStatements?: number | undefined;
}>;
export type Statement = z.infer<typeof StatementSchema>;
export declare const StatementSubscriptionSchema: z.ZodObject<{
    role: z.ZodString;
    userId: z.ZodString;
    statementId: z.ZodString;
    lastUpdate: z.ZodNumber;
    statementsSubscribeId: z.ZodString;
    statement: z.ZodObject<{
        statement: z.ZodString;
        statementId: z.ZodString;
        creatorId: z.ZodString;
        creator: z.ZodObject<{
            displayName: z.ZodString;
            email: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            photoURL: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            uid: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            displayName: string;
            uid: string;
            email?: string | null | undefined;
            photoURL?: string | null | undefined;
        }, {
            displayName: string;
            uid: string;
            email?: string | null | undefined;
            photoURL?: string | null | undefined;
        }>;
        parentId: z.ZodString;
        hasChildren: z.ZodOptional<z.ZodBoolean>;
        lastMessage: z.ZodOptional<z.ZodString>;
        lastUpdate: z.ZodNumber;
        createdAt: z.ZodNumber;
        type: z.ZodEnum<[StatementType.STATEMENT, StatementType.GROUP, StatementType.OPTION]>;
        isOption: z.ZodOptional<z.ZodBoolean>;
        pro: z.ZodOptional<z.ZodNumber>;
        con: z.ZodOptional<z.ZodNumber>;
        consensus: z.ZodNumber;
        order: z.ZodOptional<z.ZodNumber>;
        elementHight: z.ZodOptional<z.ZodNumber>;
        votes: z.ZodOptional<z.ZodNumber>;
        selections: z.ZodOptional<z.ZodAny>;
        voted: z.ZodOptional<z.ZodNumber>;
        totalSubStatements: z.ZodOptional<z.ZodNumber>;
    }, "strip", z.ZodTypeAny, {
        type: StatementType;
        statement: string;
        statementId: string;
        creatorId: string;
        creator: {
            displayName: string;
            uid: string;
            email?: string | null | undefined;
            photoURL?: string | null | undefined;
        };
        parentId: string;
        lastUpdate: number;
        createdAt: number;
        consensus: number;
        hasChildren?: boolean | undefined;
        lastMessage?: string | undefined;
        isOption?: boolean | undefined;
        pro?: number | undefined;
        con?: number | undefined;
        order?: number | undefined;
        elementHight?: number | undefined;
        votes?: number | undefined;
        selections?: any;
        voted?: number | undefined;
        totalSubStatements?: number | undefined;
    }, {
        type: StatementType;
        statement: string;
        statementId: string;
        creatorId: string;
        creator: {
            displayName: string;
            uid: string;
            email?: string | null | undefined;
            photoURL?: string | null | undefined;
        };
        parentId: string;
        lastUpdate: number;
        createdAt: number;
        consensus: number;
        hasChildren?: boolean | undefined;
        lastMessage?: string | undefined;
        isOption?: boolean | undefined;
        pro?: number | undefined;
        con?: number | undefined;
        order?: number | undefined;
        elementHight?: number | undefined;
        votes?: number | undefined;
        selections?: any;
        voted?: number | undefined;
        totalSubStatements?: number | undefined;
    }>;
    notification: z.ZodOptional<z.ZodBoolean>;
    token: z.ZodOptional<z.ZodString>;
    totalSubStatementsRead: z.ZodOptional<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    role: string;
    statement: {
        type: StatementType;
        statement: string;
        statementId: string;
        creatorId: string;
        creator: {
            displayName: string;
            uid: string;
            email?: string | null | undefined;
            photoURL?: string | null | undefined;
        };
        parentId: string;
        lastUpdate: number;
        createdAt: number;
        consensus: number;
        hasChildren?: boolean | undefined;
        lastMessage?: string | undefined;
        isOption?: boolean | undefined;
        pro?: number | undefined;
        con?: number | undefined;
        order?: number | undefined;
        elementHight?: number | undefined;
        votes?: number | undefined;
        selections?: any;
        voted?: number | undefined;
        totalSubStatements?: number | undefined;
    };
    statementId: string;
    lastUpdate: number;
    userId: string;
    statementsSubscribeId: string;
    notification?: boolean | undefined;
    token?: string | undefined;
    totalSubStatementsRead?: number | undefined;
}, {
    role: string;
    statement: {
        type: StatementType;
        statement: string;
        statementId: string;
        creatorId: string;
        creator: {
            displayName: string;
            uid: string;
            email?: string | null | undefined;
            photoURL?: string | null | undefined;
        };
        parentId: string;
        lastUpdate: number;
        createdAt: number;
        consensus: number;
        hasChildren?: boolean | undefined;
        lastMessage?: string | undefined;
        isOption?: boolean | undefined;
        pro?: number | undefined;
        con?: number | undefined;
        order?: number | undefined;
        elementHight?: number | undefined;
        votes?: number | undefined;
        selections?: any;
        voted?: number | undefined;
        totalSubStatements?: number | undefined;
    };
    statementId: string;
    lastUpdate: number;
    userId: string;
    statementsSubscribeId: string;
    notification?: boolean | undefined;
    token?: string | undefined;
    totalSubStatementsRead?: number | undefined;
}>;
export type StatementSubscription = z.infer<typeof StatementSubscriptionSchema>;
export declare const StatementSubscriptionNotificationSchema: z.ZodObject<{
    statementId: z.ZodString;
    userId: z.ZodString;
    subscribed: z.ZodBoolean;
    token: z.ZodString;
    notification: z.ZodOptional<z.ZodBoolean>;
}, "strip", z.ZodTypeAny, {
    statementId: string;
    userId: string;
    token: string;
    subscribed: boolean;
    notification?: boolean | undefined;
}, {
    statementId: string;
    userId: string;
    token: string;
    subscribed: boolean;
    notification?: boolean | undefined;
}>;
export type StatementSubscriptionNotification = z.infer<typeof StatementSubscriptionNotificationSchema>;
