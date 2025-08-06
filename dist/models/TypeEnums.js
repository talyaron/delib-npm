"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuestionStep = exports.MassConsensusPageUrls = exports.SortType = exports.Screen = exports.StepType = exports.DeliberationType = exports.DocumentType = exports.QuestionStagesType = exports.QuestionType = exports.membersAllowed = exports.Access = exports.QuestionStage = exports.DeliberativeElement = exports.StatementType = void 0;
var StatementType;
(function (StatementType) {
    StatementType["statement"] = "statement";
    StatementType["option"] = "option";
    StatementType["question"] = "question";
    StatementType["document"] = "document";
    StatementType["group"] = "group";
})(StatementType || (exports.StatementType = StatementType = {}));
var DeliberativeElement;
(function (DeliberativeElement) {
    DeliberativeElement["explanation"] = "explanation";
    DeliberativeElement["needs"] = "needs";
    DeliberativeElement["resource"] = "resource";
    DeliberativeElement["consideration"] = "consideration";
    DeliberativeElement["research"] = "research";
    DeliberativeElement["option"] = "option";
    DeliberativeElement["general"] = "general";
})(DeliberativeElement || (exports.DeliberativeElement = DeliberativeElement = {}));
var QuestionStage;
(function (QuestionStage) {
    QuestionStage["explanation"] = "explanation";
    QuestionStage["suggestion"] = "suggestion";
    QuestionStage["firstEvaluation"] = "firstEvaluation";
    QuestionStage["secondEvaluation"] = "secondEvaluation";
    QuestionStage["voting"] = "voting";
    QuestionStage["finished"] = "finished";
})(QuestionStage || (exports.QuestionStage = QuestionStage = {}));
var Access;
(function (Access) {
    Access["open"] = "open";
    Access["openToAll"] = "openToAll";
    Access["openForRegistered"] = "openForRegistered";
    Access["moderated"] = "moderated";
    Access["secret"] = "secret";
})(Access || (exports.Access = Access = {}));
var membersAllowed;
(function (membersAllowed) {
    membersAllowed["all"] = "all";
    membersAllowed["nonAnonymous"] = "nonAnonymous";
})(membersAllowed || (exports.membersAllowed = membersAllowed = {}));
var QuestionType;
(function (QuestionType) {
    QuestionType["simple"] = "simple";
    QuestionType["massConsensus"] = "mass-consensus";
    QuestionType["multiStage"] = "multi-stage";
    QuestionType["questionnaire"] = "questionnaire";
})(QuestionType || (exports.QuestionType = QuestionType = {}));
var QuestionStagesType;
(function (QuestionStagesType) {
    QuestionStagesType["singleStage"] = "singleStage";
    QuestionStagesType["document"] = "document";
})(QuestionStagesType || (exports.QuestionStagesType = QuestionStagesType = {}));
var DocumentType;
(function (DocumentType) {
    DocumentType["paragraph"] = "paragraph";
    DocumentType["section"] = "section";
    DocumentType["comment"] = "comment";
})(DocumentType || (exports.DocumentType = DocumentType = {}));
var DeliberationType;
(function (DeliberationType) {
    DeliberationType["chat"] = "chat";
    DeliberationType["options"] = "options";
    DeliberationType["voting"] = "voting";
})(DeliberationType || (exports.DeliberationType = DeliberationType = {}));
var StepType;
(function (StepType) {
    StepType["chat"] = "chat";
    StepType["options"] = "options";
    StepType["addOptions"] = "addOptions";
    StepType["randomOptions"] = "randomOptions";
    StepType["topOptions"] = "topOptions";
    StepType["voting"] = "voting";
})(StepType || (exports.StepType = StepType = {}));
/** All delib's collections */
var Screen;
(function (Screen) {
    Screen["team"] = "team";
    Screen["doc"] = "doc";
    Screen["home"] = "home";
    Screen["statement"] = "statement";
    Screen["chat"] = "chat";
    Screen["options"] = "options";
    Screen["settings"] = "settings";
    Screen["mindMap"] = "mind-map";
    Screen["agreementMap"] = "agreement-map";
    Screen["polarizationIndex"] = "polarization-index";
})(Screen || (exports.Screen = Screen = {}));
var SortType;
(function (SortType) {
    SortType["newest"] = "newest";
    SortType["mostUpdated"] = "mostUpdated";
    SortType["random"] = "random";
    SortType["accepted"] = "accepted";
})(SortType || (exports.SortType = SortType = {}));
var MassConsensusPageUrls;
(function (MassConsensusPageUrls) {
    MassConsensusPageUrls["introduction"] = "introduction";
    MassConsensusPageUrls["userDemographics"] = "user-demographics";
    MassConsensusPageUrls["initialQuestion"] = "initial-question";
    MassConsensusPageUrls["question"] = "question";
    MassConsensusPageUrls["randomSuggestions"] = "random-suggestions";
    MassConsensusPageUrls["topSuggestions"] = "top-suggestions";
    MassConsensusPageUrls["voting"] = "voting";
    MassConsensusPageUrls["leaveFeedback"] = "leave-feedback";
    MassConsensusPageUrls["thankYou"] = "thank-you";
})(MassConsensusPageUrls || (exports.MassConsensusPageUrls = MassConsensusPageUrls = {}));
var QuestionStep;
(function (QuestionStep) {
    QuestionStep["explanation"] = "explanation";
    QuestionStep["suggestion"] = "suggestion";
    QuestionStep["randomEvaluation"] = "random-evaluation";
    QuestionStep["topEvaluation"] = "top-evaluation";
    QuestionStep["voting"] = "voting";
    QuestionStep["finished"] = "finished";
    QuestionStep["other"] = "other";
})(QuestionStep || (exports.QuestionStep = QuestionStep = {}));
