export { User, UserSchema, parseUserFromFirebase } from './models/usersModels';
export { Statement, StatementSchema, StatementType, StatementSubscription, StatementSubscriptionSchema, StatementSubscriptionNotificationSchema } from './models/statementsModels';
export { Screen, ScreenSchema, NavObject } from './models/screensAndNavModels';
export { Collections } from './models/collectionsModel';
export { Room, RoomSchema, RoomAskToJoin, RoomAskToJoinSchema, getRequestIdToJoinRoom } from './models/roomsModel';
export declare function sayHello(name: string): string;
