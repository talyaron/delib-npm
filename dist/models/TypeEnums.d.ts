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
    massConsensus = "mass-consensus",
    multiStage = "multi-stage"
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
export declare enum Collections {
    statements = "statements",
    termsOfUseAcceptance = "termsOfUseAcceptance",
    statementsSettings = "statementsSettings",
    statementsMetaData = "statementsMeta",
    statementsPasswords = "statementsPasswords",
    statementsSubscribe = "statementsSubscribe",
    massConsensus = "massConsensus",
    massConsensusMembers = "massConsensusMembers",
    massConsensusProcesses = "massConsensusProcesses",
    choseBy = "choseBy",
    participants = "participants",
    rooms = "rooms",
    roomsSettings = "roomsSettings",
    evaluations = "evaluations",
    votes = "votes",
    users = "usersV2",
    usersData = "usersData",
    usersSettings = "usersSettings",
    resultsTriggers = "resultsTriggers",
    results = "results",
    maps = "maps",
    agreements = "agreements",
    timers = "timers-settings",
    timersRooms = "timers-rooms",
    invitations = "invitations",
    evaluators = "evaluators",
    documents = "documents",
    importance = "importance",
    approval = "approval",
    awaitingUsers = "awaitingUsers",
    agrees = "agrees",
    documentsSigns = "documentsSigns",
    signatures = "signatures",
    stages = "stages",
    steps = "steps",
    signUsers = "signUsers",
    statementViews = "statementViews",
    statementSegments = "statementSegments",
    inAppNotifications = "inAppNotifications",
    pushNotifications = "pushNotifications",
    emailNotifications = "emailNotifications",
    askedToBeNotified = "askedToBeNotified"
}
export declare enum Screen {
    TEAM = "team",
    DOC = "doc",
    HOME = "home",
    STATEMENT = "statement",
    CHAT = "chat",
    OPTIONS = "options",
    VOTE = "vote",
    GROUPS = "groups",
    SETTINGS = "settings",
    MASS_QUESTIONS = "mass-questions",
    QUESTIONS_MASS = "questions-mass",
    OPTIONS_CONSENSUS = "options-consensus",
    OPTIONS_NEW = "options-new",
    OPTIONS_RANDOM = "options-random",
    OPTIONS_UPDATED = "options-updated",
    VOTES_CONSENSUS = "votes-consensus",
    VOTESֹֹֹ_VOTED = "votes-voted",
    VOTES_NEW = "votes-new",
    VOTES_RANDOM = "votes-random",
    VOTES_UPDATED = "votes-updated",
    ADMIN_CHOOSE = "admin-choose",
    ADMIN_DIVIDE = "admin-divide",
    QUESTIONS = "questions",
    QUESTIONS_NEW = "questions-new",
    QUESTIONS_RANDOM = "questions-random",
    QUESTIONS_UPDATED = "questions-updated",
    QUESTIONS_CONSENSUS = "questions-consensus",
    INFO = "info",
    PROCESS = "process",
    EXPLANATION = "explanation"
}
export declare enum SortType {
    newest = "newest",
    mostUpdated = "mostUpdated",
    random = "random",
    accepted = "accepted"
}
export declare enum MassConsensusPageUrls {
    introduction = "introduction",
    initialQuestion = "initial-question",// TODO: remove after daniel finishes his ticket
    similarSuggestions = "similar-suggestions",// TODO: remove after daniel finishes his ticket
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
