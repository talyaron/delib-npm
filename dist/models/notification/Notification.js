"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificationReadStatusSchema = exports.ReadContext = exports.NotificationSchema = void 0;
const valibot_1 = require("valibot");
const TypeEnums_1 = require("../TypeEnums");
exports.NotificationSchema = (0, valibot_1.object)({
    userId: (0, valibot_1.string)(),
    parentId: (0, valibot_1.string)(),
    statementId: (0, valibot_1.string)(),
    statementType: (0, valibot_1.enum_)(TypeEnums_1.StatementType),
    parentStatement: (0, valibot_1.optional)((0, valibot_1.string)()),
    questionType: (0, valibot_1.optional)((0, valibot_1.enum_)(TypeEnums_1.QuestionType)),
    text: (0, valibot_1.string)(),
    creatorId: (0, valibot_1.string)(),
    creatorName: (0, valibot_1.string)(),
    creatorImage: (0, valibot_1.optional)((0, valibot_1.nullable)((0, valibot_1.string)())),
    createdAt: (0, valibot_1.number)(),
    read: (0, valibot_1.boolean)(),
    notificationId: (0, valibot_1.string)(),
    readAt: (0, valibot_1.optional)((0, valibot_1.number)()),
    viewedInList: (0, valibot_1.optional)((0, valibot_1.boolean)()),
    viewedInContext: (0, valibot_1.optional)((0, valibot_1.boolean)())
});
var ReadContext;
(function (ReadContext) {
    ReadContext["LIST"] = "list";
    ReadContext["CHAT"] = "chat";
    ReadContext["STATEMENT"] = "statement";
})(ReadContext || (exports.ReadContext = ReadContext = {}));
;
exports.NotificationReadStatusSchema = (0, valibot_1.object)({
    userId: (0, valibot_1.string)(),
    notificationId: (0, valibot_1.string)(),
    statementId: (0, valibot_1.string)(),
    readAt: (0, valibot_1.number)(),
    readContext: (0, valibot_1.enum_)(ReadContext)
});
