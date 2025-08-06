export declare enum StatementType {
    statement = "statement",
    option = "option",
    question = "question",
    document = "document",
    group = "group"
}
export declare enum DeliberativeElement {
    explanation = "explanation",
    needs = "needs",
    resource = "resource",
    consideration = "consideration",
    research = "research",
    option = "option",
    general = "general"
}
export declare enum QuestionStage {
    explanation = "explanation",
    suggestion = "suggestion",
    firstEvaluation = "firstEvaluation",
    secondEvaluation = "secondEvaluation",
    voting = "voting",
    finished = "finished"
}
export declare enum Access {
    open = "open",//TODO: remove in the future (at about jun  2025) for legacy purposes.
    openToAll = "openToAll",//used to allow anonymous users and all the rest.
    openForRegistered = "openForRegistered",//only user with login can join the deliberation.
    moderated = "moderated",//only users that are approved by the admin can join the deliberation.
    secret = "secret"
}
export declare enum membersAllowed {
    all = "all",
    nonAnonymous = "nonAnonymous"
}
export declare enum QuestionType {
    simple = "simple",
    massConsensus = "mass-consensus",
    multiStage = "multi-stage",
    questionnaire = "questionnaire"
}
export declare enum QuestionStagesType {
    singleStage = "singleStage",
    document = "document"
}
export declare enum DocumentType {
    paragraph = "paragraph",
    section = "section",
    comment = "comment"
}
export declare enum DeliberationType {
    chat = "chat",
    options = "options",
    voting = "voting"
}
export declare enum StepType {
    chat = "chat",
    options = "options",
    addOptions = "addOptions",
    randomOptions = "randomOptions",
    topOptions = "topOptions",
    voting = "voting"
}
/** All delib's collections */
export declare enum Screen {
    team = "team",
    doc = "doc",
    home = "home",
    statement = "statement",
    chat = "chat",
    options = "options",
    settings = "settings",
    mindMap = "mind-map",
    agreementMap = "agreement-map",
    polarizationIndex = "polarization-index"
}
export declare enum SortType {
    newest = "newest",
    mostUpdated = "mostUpdated",
    random = "random",
    accepted = "accepted"
}
export declare enum MassConsensusPageUrls {
    introduction = "introduction",
    userDemographics = "user-demographics",
    initialQuestion = "initial-question",
    question = "question",
    randomSuggestions = "random-suggestions",
    topSuggestions = "top-suggestions",
    voting = "voting",
    leaveFeedback = "leave-feedback",
    thankYou = "thank-you"
}
export declare enum QuestionStep {
    explanation = "explanation",
    suggestion = "suggestion",
    randomEvaluation = "random-evaluation",
    topEvaluation = "top-evaluation",
    voting = "voting",
    finished = "finished",
    other = "other"
}
