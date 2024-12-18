"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TimerStatus = exports.getVoteId = exports.VoteSchema = exports.isAllowedStatementType = exports.statementToSimpleStatement = exports.getRandomUID = exports.getStatementSubscriptionId = exports.maxKeyInObject = exports.EvaluatorSchema = exports.EvaluationSchema = exports.Map = exports.ResultsType = exports.ResultsBySchema = exports.ResultsBy = exports.getRequestIdToJoinRoom = exports.roomSettingsSchema = exports.ParticipantInRoomSchema = exports.RoomSchema = exports.Collections = exports.ScreenSchema = exports.Screen = exports.DeliberativeElement = exports.DeliberativeElementSchema = exports.MembershipSchema = exports.AgreeSchema = exports.DocumentImportanceSchema = exports.DocumentApprovalSchema = exports.DocumentType = exports.QuestionStage = exports.QuestionType = exports.MembersAllowedSchema = exports.membersAllowed = exports.AccessSchema = exports.Access = exports.StatementSubscriptionNotificationSchema = exports.StatementSubscriptionSchema = exports.StatementType = exports.StatementSchema = exports.SimpleStatementSchema = exports.parseUserFromFirebase = exports.UserDataSchema = exports.userSettingsSchema = exports.AgreementSchema = exports.RoleSchema = exports.Role = exports.UserSchema = exports.writeZodError = exports.updateArray = exports.isMember = exports.isOptionFn = void 0;
exports.fieldMandatoryNameSchema = exports.fieldMandatoryName = exports.SegmentationType = exports.SegmentationSchama = exports.StatementViewSchema = exports.StageSchema = exports.MethodSchema = exports.Method = exports.NotificationSchema = exports.PasswordSchema = exports.SignatureSchema = exports.SignatureType = exports.DocumentSignsSchema = exports.AgreeDisagreeEnum = exports.AgreeDisagreeSchema = exports.ApprovalSchema = exports.ImportanceSchema = exports.DocumentSectionSchema = exports.DocumentSchema = exports.allowedScreens = exports.isScreenAllowedUnderStatementType = exports.InvitationSchema = exports.StatementMetaDataSchema = exports.RoomTimerSchema = exports.ParentTimerSchema = exports.SetTimerSchema = exports.TimerStatusSchema = void 0;
var helpers_1 = require("./controllers/helpers");
Object.defineProperty(exports, "isOptionFn", { enumerable: true, get: function () { return helpers_1.isOptionFn; } });
Object.defineProperty(exports, "isMember", { enumerable: true, get: function () { return helpers_1.isMember; } });
Object.defineProperty(exports, "updateArray", { enumerable: true, get: function () { return helpers_1.updateArray; } });
Object.defineProperty(exports, "writeZodError", { enumerable: true, get: function () { return helpers_1.writeZodError; } });
var usersModels_1 = require("./models/usersModels");
Object.defineProperty(exports, "UserSchema", { enumerable: true, get: function () { return usersModels_1.UserSchema; } });
Object.defineProperty(exports, "Role", { enumerable: true, get: function () { return usersModels_1.Role; } });
Object.defineProperty(exports, "RoleSchema", { enumerable: true, get: function () { return usersModels_1.RoleSchema; } });
Object.defineProperty(exports, "AgreementSchema", { enumerable: true, get: function () { return usersModels_1.AgreementSchema; } });
Object.defineProperty(exports, "userSettingsSchema", { enumerable: true, get: function () { return usersModels_1.userSettingsSchema; } });
Object.defineProperty(exports, "UserDataSchema", { enumerable: true, get: function () { return usersModels_1.UserDataSchema; } });
var usersCont_1 = require("./controllers/usersCont");
Object.defineProperty(exports, "parseUserFromFirebase", { enumerable: true, get: function () { return usersCont_1.parseUserFromFirebase; } });
var statementsModels_1 = require("./models/statementsModels");
Object.defineProperty(exports, "SimpleStatementSchema", { enumerable: true, get: function () { return statementsModels_1.SimpleStatementSchema; } });
Object.defineProperty(exports, "StatementSchema", { enumerable: true, get: function () { return statementsModels_1.StatementSchema; } });
Object.defineProperty(exports, "StatementType", { enumerable: true, get: function () { return statementsModels_1.StatementType; } });
Object.defineProperty(exports, "StatementSubscriptionSchema", { enumerable: true, get: function () { return statementsModels_1.StatementSubscriptionSchema; } });
Object.defineProperty(exports, "StatementSubscriptionNotificationSchema", { enumerable: true, get: function () { return statementsModels_1.StatementSubscriptionNotificationSchema; } });
Object.defineProperty(exports, "Access", { enumerable: true, get: function () { return statementsModels_1.Access; } });
Object.defineProperty(exports, "AccessSchema", { enumerable: true, get: function () { return statementsModels_1.AccessSchema; } });
Object.defineProperty(exports, "membersAllowed", { enumerable: true, get: function () { return statementsModels_1.membersAllowed; } });
Object.defineProperty(exports, "MembersAllowedSchema", { enumerable: true, get: function () { return statementsModels_1.MembersAllowedSchema; } });
Object.defineProperty(exports, "QuestionType", { enumerable: true, get: function () { return statementsModels_1.QuestionType; } });
Object.defineProperty(exports, "QuestionStage", { enumerable: true, get: function () { return statementsModels_1.QuestionStage; } });
Object.defineProperty(exports, "DocumentType", { enumerable: true, get: function () { return statementsModels_1.DocumentType; } });
Object.defineProperty(exports, "DocumentApprovalSchema", { enumerable: true, get: function () { return statementsModels_1.DocumentApprovalSchema; } });
Object.defineProperty(exports, "DocumentImportanceSchema", { enumerable: true, get: function () { return statementsModels_1.DocumentImportanceSchema; } });
Object.defineProperty(exports, "AgreeSchema", { enumerable: true, get: function () { return statementsModels_1.AgreeSchema; } });
Object.defineProperty(exports, "MembershipSchema", { enumerable: true, get: function () { return statementsModels_1.MembershipSchema; } });
Object.defineProperty(exports, "DeliberativeElementSchema", { enumerable: true, get: function () { return statementsModels_1.DeliberativeElementSchema; } });
Object.defineProperty(exports, "DeliberativeElement", { enumerable: true, get: function () { return statementsModels_1.DeliberativeElement; } });
var screensAndNavModels_1 = require("./models/screensAndNavModels");
Object.defineProperty(exports, "Screen", { enumerable: true, get: function () { return screensAndNavModels_1.Screen; } });
Object.defineProperty(exports, "ScreenSchema", { enumerable: true, get: function () { return screensAndNavModels_1.ScreenSchema; } });
var collectionsModel_1 = require("./models/collectionsModel");
Object.defineProperty(exports, "Collections", { enumerable: true, get: function () { return collectionsModel_1.Collections; } });
var roomsModel_1 = require("./models/roomsModel");
Object.defineProperty(exports, "RoomSchema", { enumerable: true, get: function () { return roomsModel_1.RoomSchema; } });
Object.defineProperty(exports, "ParticipantInRoomSchema", { enumerable: true, get: function () { return roomsModel_1.ParticipantInRoomSchema; } });
Object.defineProperty(exports, "roomSettingsSchema", { enumerable: true, get: function () { return roomsModel_1.roomSettingsSchema; } });
var roomsCont_1 = require("./controllers/roomsCont");
Object.defineProperty(exports, "getRequestIdToJoinRoom", { enumerable: true, get: function () { return roomsCont_1.getRequestIdToJoinRoom; } });
var resultsModel_1 = require("./models/resultsModel");
Object.defineProperty(exports, "ResultsBy", { enumerable: true, get: function () { return resultsModel_1.ResultsBy; } });
Object.defineProperty(exports, "ResultsBySchema", { enumerable: true, get: function () { return resultsModel_1.ResultsBySchema; } });
Object.defineProperty(exports, "ResultsType", { enumerable: true, get: function () { return resultsModel_1.ResultsType; } });
var mapModel_1 = require("./models/mapModel");
Object.defineProperty(exports, "Map", { enumerable: true, get: function () { return mapModel_1.Map; } });
var evaluationModel_1 = require("./models/evaluationModel");
Object.defineProperty(exports, "EvaluationSchema", { enumerable: true, get: function () { return evaluationModel_1.EvaluationSchema; } });
Object.defineProperty(exports, "EvaluatorSchema", { enumerable: true, get: function () { return evaluationModel_1.EvaluatorSchema; } });
var helpers_2 = require("./controllers/helpers");
Object.defineProperty(exports, "maxKeyInObject", { enumerable: true, get: function () { return helpers_2.maxKeyInObject; } });
Object.defineProperty(exports, "getStatementSubscriptionId", { enumerable: true, get: function () { return helpers_2.getStatementSubscriptionId; } });
Object.defineProperty(exports, "getRandomUID", { enumerable: true, get: function () { return helpers_2.getRandomUID; } });
var statementsCont_1 = require("./controllers/statementsCont");
Object.defineProperty(exports, "statementToSimpleStatement", { enumerable: true, get: function () { return statementsCont_1.statementToSimpleStatement; } });
Object.defineProperty(exports, "isAllowedStatementType", { enumerable: true, get: function () { return statementsCont_1.isAllowedStatementType; } });
var votesModel_1 = require("./models/votesModel");
Object.defineProperty(exports, "VoteSchema", { enumerable: true, get: function () { return votesModel_1.VoteSchema; } });
var voteCont_1 = require("./controllers/voteCont");
Object.defineProperty(exports, "getVoteId", { enumerable: true, get: function () { return voteCont_1.getVoteId; } });
var timersModel_1 = require("./models/timersModel");
Object.defineProperty(exports, "TimerStatus", { enumerable: true, get: function () { return timersModel_1.TimerStatus; } });
Object.defineProperty(exports, "TimerStatusSchema", { enumerable: true, get: function () { return timersModel_1.TimerStatusSchema; } });
Object.defineProperty(exports, "SetTimerSchema", { enumerable: true, get: function () { return timersModel_1.SetTimerSchema; } });
Object.defineProperty(exports, "ParentTimerSchema", { enumerable: true, get: function () { return timersModel_1.ParentTimerSchema; } });
Object.defineProperty(exports, "RoomTimerSchema", { enumerable: true, get: function () { return timersModel_1.RoomTimerSchema; } });
var statementMetaDataModel_1 = require("./models/statementMetaDataModel");
Object.defineProperty(exports, "StatementMetaDataSchema", { enumerable: true, get: function () { return statementMetaDataModel_1.StatementMetaDataSchema; } });
var invitationModel_1 = require("./models/invitationModel");
Object.defineProperty(exports, "InvitationSchema", { enumerable: true, get: function () { return invitationModel_1.InvitationSchema; } });
var screensCont_1 = require("./controllers/screensCont");
Object.defineProperty(exports, "isScreenAllowedUnderStatementType", { enumerable: true, get: function () { return screensCont_1.isScreenAllowedUnderStatementType; } });
Object.defineProperty(exports, "allowedScreens", { enumerable: true, get: function () { return screensCont_1.allowedScreens; } });
var documentsModel_1 = require("./models/documentsModel");
Object.defineProperty(exports, "DocumentSchema", { enumerable: true, get: function () { return documentsModel_1.DocumentSchema; } });
Object.defineProperty(exports, "DocumentSectionSchema", { enumerable: true, get: function () { return documentsModel_1.DocumentSectionSchema; } });
var importanceModel_1 = require("./models/importanceModel");
Object.defineProperty(exports, "ImportanceSchema", { enumerable: true, get: function () { return importanceModel_1.ImportanceSchema; } });
var approvalModel_1 = require("./models/approvalModel");
Object.defineProperty(exports, "ApprovalSchema", { enumerable: true, get: function () { return approvalModel_1.ApprovalSchema; } });
var approveModel_1 = require("./models/approveModel");
Object.defineProperty(exports, "AgreeDisagreeSchema", { enumerable: true, get: function () { return approveModel_1.AgreeDisagreeSchema; } });
Object.defineProperty(exports, "AgreeDisagreeEnum", { enumerable: true, get: function () { return approveModel_1.AgreeDisagreeEnum; } });
var signsModel_1 = require("./models/signsModel");
Object.defineProperty(exports, "DocumentSignsSchema", { enumerable: true, get: function () { return signsModel_1.DocumentSignsSchema; } });
Object.defineProperty(exports, "SignatureType", { enumerable: true, get: function () { return signsModel_1.SignatureType; } });
Object.defineProperty(exports, "SignatureSchema", { enumerable: true, get: function () { return signsModel_1.SignatureSchema; } });
var passwordModel_1 = require("./models/passwordModel");
Object.defineProperty(exports, "PasswordSchema", { enumerable: true, get: function () { return passwordModel_1.PasswordSchema; } });
var notificationsModel_1 = require("./models/notificationsModel");
Object.defineProperty(exports, "NotificationSchema", { enumerable: true, get: function () { return notificationsModel_1.NotificationSchema; } });
var stageModal_1 = require("./models/stageModal");
Object.defineProperty(exports, "Method", { enumerable: true, get: function () { return stageModal_1.Method; } });
Object.defineProperty(exports, "MethodSchema", { enumerable: true, get: function () { return stageModal_1.MethodSchema; } });
Object.defineProperty(exports, "StageSchema", { enumerable: true, get: function () { return stageModal_1.StageSchema; } });
var viewModel_1 = require("./models/viewModel");
Object.defineProperty(exports, "StatementViewSchema", { enumerable: true, get: function () { return viewModel_1.StatementViewSchema; } });
var segmentationModel_1 = require("./models/segmentationModel");
Object.defineProperty(exports, "SegmentationSchama", { enumerable: true, get: function () { return segmentationModel_1.SegmentationSchama; } });
Object.defineProperty(exports, "SegmentationType", { enumerable: true, get: function () { return segmentationModel_1.SegmentationType; } });
Object.defineProperty(exports, "fieldMandatoryName", { enumerable: true, get: function () { return segmentationModel_1.fieldMandatoryName; } });
Object.defineProperty(exports, "fieldMandatoryNameSchema", { enumerable: true, get: function () { return segmentationModel_1.fieldMandatoryNameSchema; } });
