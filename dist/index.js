"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sayHello = exports.ScreenSchema = exports.Screen = exports.StatementSubscriptionNotificationSchema = exports.StatementSubscriptionSchema = exports.StatementType = exports.StatementSchema = exports.parseUserFromFirebase = exports.UserSchema = void 0;
var usersModels_1 = require("./models/usersModels");
Object.defineProperty(exports, "UserSchema", { enumerable: true, get: function () { return usersModels_1.UserSchema; } });
Object.defineProperty(exports, "parseUserFromFirebase", { enumerable: true, get: function () { return usersModels_1.parseUserFromFirebase; } });
var statementsModels_1 = require("./models/statementsModels");
Object.defineProperty(exports, "StatementSchema", { enumerable: true, get: function () { return statementsModels_1.StatementSchema; } });
Object.defineProperty(exports, "StatementType", { enumerable: true, get: function () { return statementsModels_1.StatementType; } });
Object.defineProperty(exports, "StatementSubscriptionSchema", { enumerable: true, get: function () { return statementsModels_1.StatementSubscriptionSchema; } });
Object.defineProperty(exports, "StatementSubscriptionNotificationSchema", { enumerable: true, get: function () { return statementsModels_1.StatementSubscriptionNotificationSchema; } });
var screensAndNavModels_1 = require("./models/screensAndNavModels");
Object.defineProperty(exports, "Screen", { enumerable: true, get: function () { return screensAndNavModels_1.Screen; } });
Object.defineProperty(exports, "ScreenSchema", { enumerable: true, get: function () { return screensAndNavModels_1.ScreenSchema; } });
function sayHello(name) {
    return `Hello ${name}`;
}
exports.sayHello = sayHello;
