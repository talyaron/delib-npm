export { User, UserSchema } from './models/usersModels';
export { Statement, StatementSchema, StatementType, StatementSubscription, StatementSubscriptionSchema, StatementSubscriptionNotificationSchema } from './models/statementsModels';


export function sayHello(name: string) {
  return `Hello ${name}`;
}

