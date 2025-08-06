"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CutoffBy = exports.ResultsBy = exports.ResultsSettingsSchema = exports.QuestionSettingsSchema = exports.NotificationSchema = exports.MassConsensusProcessSchema = exports.MassConsensusMemberSchema = exports.GeneratedStatementSchema = exports.MassConsensusPageUrlsSchema = exports.MassConsensusSchema = exports.InvitationSchema = exports.EvaluationUI = exports.SelectionFunction = exports.StatementEvaluationSettingsSchema = exports.StatementEvaluationSchema = exports.EvaluatorSchema = exports.EvaluationSchema = exports.SignatureType = exports.SignatureSchema = exports.DocumentSignsSchema = exports.defaultChoseBySettings = exports.ChoseByEvaluationType = exports.CutoffType = exports.ChoseBySchema = exports.ApprovalSchema = exports.AgreeDisagreeEnum = exports.DocumentImportanceSchema = exports.DocumentApprovalSchema = exports.ImportanceSchema = exports.AgreeSchema = exports.AgreeDisagreeSchema = exports.AgreementSchema = exports.functionConfig = exports.getRandomUID = exports.maxKeyInObject = exports.isMember = exports.QuestionStep = exports.MassConsensusPageUrls = exports.SortType = exports.Screen = exports.StepType = exports.DeliberationType = exports.DocumentType = exports.QuestionStagesType = exports.QuestionType = exports.membersAllowed = exports.Access = exports.QuestionStage = exports.DeliberativeElement = exports.StatementType = void 0;
exports.QuestionnaireQuestionSchema = exports.QuestionnaireSchema = exports.OnlineSchema = exports.DemographicGroupSchema = exports.AxesItemSchema = exports.PolarizationIndexSchema = exports.Collections = exports.DemographicOptionSchema = exports.UserQuestionSchema = exports.UserQuestionType = exports.statementSnapShotSchema = exports.getVoteId = exports.VoteSchema = exports.updateArray = exports.createSubscription = exports.UserDataSchema = exports.userSettingsSchema = exports.Languages = exports.Role = exports.LoginType = exports.CreatorSchema = exports.StepSchema = exports.MembershipSchema = exports.UserSchema = exports.createBasicStatement = exports.StatementMetaDataSchema = exports.StatementSchema = exports.LastMessageSchema = exports.WaitingMemberSchema = exports.StatementViewSchema = exports.getStatementSubscriptionId = exports.StatementSubscriptionSchema = exports.StatementSettingsSchema = exports.statementToSimpleStatement = exports.SimpleStatementSchema = exports.StageSelectionType = exports.defaultResultsSettings = void 0;
// Base types and utilities
var TypeEnums_1 = require("./models/TypeEnums");
Object.defineProperty(exports, "StatementType", { enumerable: true, get: function () { return TypeEnums_1.StatementType; } });
Object.defineProperty(exports, "DeliberativeElement", { enumerable: true, get: function () { return TypeEnums_1.DeliberativeElement; } });
Object.defineProperty(exports, "QuestionStage", { enumerable: true, get: function () { return TypeEnums_1.QuestionStage; } });
Object.defineProperty(exports, "Access", { enumerable: true, get: function () { return TypeEnums_1.Access; } });
Object.defineProperty(exports, "membersAllowed", { enumerable: true, get: function () { return TypeEnums_1.membersAllowed; } });
Object.defineProperty(exports, "QuestionType", { enumerable: true, get: function () { return TypeEnums_1.QuestionType; } });
Object.defineProperty(exports, "QuestionStagesType", { enumerable: true, get: function () { return TypeEnums_1.QuestionStagesType; } });
Object.defineProperty(exports, "DocumentType", { enumerable: true, get: function () { return TypeEnums_1.DocumentType; } });
Object.defineProperty(exports, "DeliberationType", { enumerable: true, get: function () { return TypeEnums_1.DeliberationType; } });
Object.defineProperty(exports, "StepType", { enumerable: true, get: function () { return TypeEnums_1.StepType; } });
Object.defineProperty(exports, "Screen", { enumerable: true, get: function () { return TypeEnums_1.Screen; } });
Object.defineProperty(exports, "SortType", { enumerable: true, get: function () { return TypeEnums_1.SortType; } });
Object.defineProperty(exports, "MassConsensusPageUrls", { enumerable: true, get: function () { return TypeEnums_1.MassConsensusPageUrls; } });
Object.defineProperty(exports, "QuestionStep", { enumerable: true, get: function () { return TypeEnums_1.QuestionStep; } });
var TypeUtils_1 = require("./models/TypeUtils");
Object.defineProperty(exports, "isMember", { enumerable: true, get: function () { return TypeUtils_1.isMember; } });
Object.defineProperty(exports, "maxKeyInObject", { enumerable: true, get: function () { return TypeUtils_1.maxKeyInObject; } });
Object.defineProperty(exports, "getRandomUID", { enumerable: true, get: function () { return TypeUtils_1.getRandomUID; } });
var ConfigFunctions_1 = require("./models/ConfigFunctions");
Object.defineProperty(exports, "functionConfig", { enumerable: true, get: function () { return ConfigFunctions_1.functionConfig; } });
// Agreement models
var Agreement_1 = require("./models/agreement/Agreement");
Object.defineProperty(exports, "AgreementSchema", { enumerable: true, get: function () { return Agreement_1.AgreementSchema; } });
Object.defineProperty(exports, "AgreeDisagreeSchema", { enumerable: true, get: function () { return Agreement_1.AgreeDisagreeSchema; } });
Object.defineProperty(exports, "AgreeSchema", { enumerable: true, get: function () { return Agreement_1.AgreeSchema; } });
Object.defineProperty(exports, "ImportanceSchema", { enumerable: true, get: function () { return Agreement_1.ImportanceSchema; } });
Object.defineProperty(exports, "DocumentApprovalSchema", { enumerable: true, get: function () { return Agreement_1.DocumentApprovalSchema; } });
Object.defineProperty(exports, "DocumentImportanceSchema", { enumerable: true, get: function () { return Agreement_1.DocumentImportanceSchema; } });
Object.defineProperty(exports, "AgreeDisagreeEnum", { enumerable: true, get: function () { return Agreement_1.AgreeDisagreeEnum; } });
// Approval models
var Approval_1 = require("./models/approval/Approval");
Object.defineProperty(exports, "ApprovalSchema", { enumerable: true, get: function () { return Approval_1.ApprovalSchema; } });
// ChoseBy models
var ChoseByTypes_1 = require("./models/choseBy/ChoseByTypes");
Object.defineProperty(exports, "ChoseBySchema", { enumerable: true, get: function () { return ChoseByTypes_1.ChoseBySchema; } });
Object.defineProperty(exports, "CutoffType", { enumerable: true, get: function () { return ChoseByTypes_1.CutoffType; } });
Object.defineProperty(exports, "ChoseByEvaluationType", { enumerable: true, get: function () { return ChoseByTypes_1.ChoseByEvaluationType; } });
Object.defineProperty(exports, "defaultChoseBySettings", { enumerable: true, get: function () { return ChoseByTypes_1.defaultChoseBySettings; } });
// Document models
var index_1 = require("./models/document/index");
Object.defineProperty(exports, "DocumentSignsSchema", { enumerable: true, get: function () { return index_1.DocumentSignsSchema; } });
Object.defineProperty(exports, "SignatureSchema", { enumerable: true, get: function () { return index_1.SignatureSchema; } });
Object.defineProperty(exports, "SignatureType", { enumerable: true, get: function () { return index_1.SignatureType; } });
// Evaluation models
var Evaluation_1 = require("./models/evaluation/Evaluation");
Object.defineProperty(exports, "EvaluationSchema", { enumerable: true, get: function () { return Evaluation_1.EvaluationSchema; } });
Object.defineProperty(exports, "EvaluatorSchema", { enumerable: true, get: function () { return Evaluation_1.EvaluatorSchema; } });
Object.defineProperty(exports, "StatementEvaluationSchema", { enumerable: true, get: function () { return Evaluation_1.StatementEvaluationSchema; } });
Object.defineProperty(exports, "StatementEvaluationSettingsSchema", { enumerable: true, get: function () { return Evaluation_1.StatementEvaluationSettingsSchema; } });
Object.defineProperty(exports, "SelectionFunction", { enumerable: true, get: function () { return Evaluation_1.SelectionFunction; } });
Object.defineProperty(exports, "EvaluationUI", { enumerable: true, get: function () { return Evaluation_1.EvaluationUI; } });
// Invitation models
var Invitation_1 = require("./models/invitation/Invitation");
Object.defineProperty(exports, "InvitationSchema", { enumerable: true, get: function () { return Invitation_1.InvitationSchema; } });
// MassConsensus models
var massConsensusModel_1 = require("./models/massConsensus/massConsensusModel");
Object.defineProperty(exports, "MassConsensusSchema", { enumerable: true, get: function () { return massConsensusModel_1.MassConsensusSchema; } });
Object.defineProperty(exports, "MassConsensusPageUrlsSchema", { enumerable: true, get: function () { return massConsensusModel_1.MassConsensusPageUrlsSchema; } });
Object.defineProperty(exports, "GeneratedStatementSchema", { enumerable: true, get: function () { return massConsensusModel_1.GeneratedStatementSchema; } });
Object.defineProperty(exports, "MassConsensusMemberSchema", { enumerable: true, get: function () { return massConsensusModel_1.MassConsensusMemberSchema; } });
Object.defineProperty(exports, "MassConsensusProcessSchema", { enumerable: true, get: function () { return massConsensusModel_1.MassConsensusProcessSchema; } });
// Notification models
var Notification_1 = require("./models/notification/Notification");
Object.defineProperty(exports, "NotificationSchema", { enumerable: true, get: function () { return Notification_1.NotificationSchema; } });
// Question models
var QuestionType_1 = require("./models/question/QuestionType");
Object.defineProperty(exports, "QuestionSettingsSchema", { enumerable: true, get: function () { return QuestionType_1.QuestionSettingsSchema; } });
// Results models
var Results_1 = require("./models/results/Results");
Object.defineProperty(exports, "ResultsSettingsSchema", { enumerable: true, get: function () { return Results_1.ResultsSettingsSchema; } });
Object.defineProperty(exports, "ResultsBy", { enumerable: true, get: function () { return Results_1.ResultsBy; } });
Object.defineProperty(exports, "CutoffBy", { enumerable: true, get: function () { return Results_1.CutoffBy; } });
Object.defineProperty(exports, "defaultResultsSettings", { enumerable: true, get: function () { return Results_1.defaultResultsSettings; } });
// Stage models
var stageTypes_1 = require("./models/stage/stageTypes");
Object.defineProperty(exports, "StageSelectionType", { enumerable: true, get: function () { return stageTypes_1.StageSelectionType; } });
// Statement models
var SimpleStatement_1 = require("./models/statement/SimpleStatement");
Object.defineProperty(exports, "SimpleStatementSchema", { enumerable: true, get: function () { return SimpleStatement_1.SimpleStatementSchema; } });
Object.defineProperty(exports, "statementToSimpleStatement", { enumerable: true, get: function () { return SimpleStatement_1.statementToSimpleStatement; } });
var StatementSettings_1 = require("./models/statement/StatementSettings");
Object.defineProperty(exports, "StatementSettingsSchema", { enumerable: true, get: function () { return StatementSettings_1.StatementSettingsSchema; } });
var StatementSubscription_1 = require("./models/statement/StatementSubscription");
Object.defineProperty(exports, "StatementSubscriptionSchema", { enumerable: true, get: function () { return StatementSubscription_1.StatementSubscriptionSchema; } });
Object.defineProperty(exports, "getStatementSubscriptionId", { enumerable: true, get: function () { return StatementSubscription_1.getStatementSubscriptionId; } });
Object.defineProperty(exports, "StatementViewSchema", { enumerable: true, get: function () { return StatementSubscription_1.StatementViewSchema; } });
Object.defineProperty(exports, "WaitingMemberSchema", { enumerable: true, get: function () { return StatementSubscription_1.WaitingMemberSchema; } });
var StatementTypes_1 = require("./models/statement/StatementTypes");
Object.defineProperty(exports, "LastMessageSchema", { enumerable: true, get: function () { return StatementTypes_1.LastMessageSchema; } });
Object.defineProperty(exports, "StatementSchema", { enumerable: true, get: function () { return StatementTypes_1.StatementSchema; } });
Object.defineProperty(exports, "StatementMetaDataSchema", { enumerable: true, get: function () { return StatementTypes_1.StatementMetaDataSchema; } });
var StatementUtils_1 = require("./models/statement/StatementUtils");
Object.defineProperty(exports, "createBasicStatement", { enumerable: true, get: function () { return StatementUtils_1.createBasicStatement; } });
// User models
var User_1 = require("./models/user/User");
Object.defineProperty(exports, "UserSchema", { enumerable: true, get: function () { return User_1.UserSchema; } });
Object.defineProperty(exports, "MembershipSchema", { enumerable: true, get: function () { return User_1.MembershipSchema; } });
Object.defineProperty(exports, "StepSchema", { enumerable: true, get: function () { return User_1.StepSchema; } });
Object.defineProperty(exports, "CreatorSchema", { enumerable: true, get: function () { return User_1.CreatorSchema; } });
Object.defineProperty(exports, "LoginType", { enumerable: true, get: function () { return User_1.LoginType; } });
var UserSettings_1 = require("./models/user/UserSettings");
Object.defineProperty(exports, "Role", { enumerable: true, get: function () { return UserSettings_1.Role; } });
Object.defineProperty(exports, "Languages", { enumerable: true, get: function () { return UserSettings_1.Languages; } });
Object.defineProperty(exports, "userSettingsSchema", { enumerable: true, get: function () { return UserSettings_1.userSettingsSchema; } });
Object.defineProperty(exports, "UserDataSchema", { enumerable: true, get: function () { return UserSettings_1.UserDataSchema; } });
var helpers_1 = require("./controllers/helpers");
Object.defineProperty(exports, "createSubscription", { enumerable: true, get: function () { return helpers_1.createSubscription; } });
Object.defineProperty(exports, "updateArray", { enumerable: true, get: function () { return helpers_1.updateArray; } });
// Vote models
var index_2 = require("./models/vote/index");
Object.defineProperty(exports, "VoteSchema", { enumerable: true, get: function () { return index_2.VoteSchema; } });
Object.defineProperty(exports, "getVoteId", { enumerable: true, get: function () { return index_2.getVoteId; } });
var StatementSnapShot_1 = require("./models/statement/StatementSnapShot");
Object.defineProperty(exports, "statementSnapShotSchema", { enumerable: true, get: function () { return StatementSnapShot_1.statementSnapShotSchema; } });
var userDataModel_1 = require("./models/userData/userDataModel");
Object.defineProperty(exports, "UserQuestionType", { enumerable: true, get: function () { return userDataModel_1.UserQuestionType; } });
Object.defineProperty(exports, "UserQuestionSchema", { enumerable: true, get: function () { return userDataModel_1.UserQuestionSchema; } });
Object.defineProperty(exports, "DemographicOptionSchema", { enumerable: true, get: function () { return userDataModel_1.DemographicOptionSchema; } });
var collectionsModel_1 = require("./models/collections/collectionsModel");
Object.defineProperty(exports, "Collections", { enumerable: true, get: function () { return collectionsModel_1.Collections; } });
var polarizationIndexModel_1 = require("./models/polarizationIndex/polarizationIndexModel");
Object.defineProperty(exports, "PolarizationIndexSchema", { enumerable: true, get: function () { return polarizationIndexModel_1.PolarizationIndexSchema; } });
Object.defineProperty(exports, "AxesItemSchema", { enumerable: true, get: function () { return polarizationIndexModel_1.AxesItemSchema; } });
Object.defineProperty(exports, "DemographicGroupSchema", { enumerable: true, get: function () { return polarizationIndexModel_1.DemographicGroupSchema; } });
var online_1 = require("./models/statement/online");
Object.defineProperty(exports, "OnlineSchema", { enumerable: true, get: function () { return online_1.OnlineSchema; } });
var questionnaireModel_1 = require("./models/questionnaire/questionnaireModel");
Object.defineProperty(exports, "QuestionnaireSchema", { enumerable: true, get: function () { return questionnaireModel_1.QuestionnaireSchema; } });
Object.defineProperty(exports, "QuestionnaireQuestionSchema", { enumerable: true, get: function () { return questionnaireModel_1.QuestionnaireQuestionSchema; } });
