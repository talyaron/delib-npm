export enum StatementType {
	statement = 'statement',
	option = 'option',
	question = 'question',
	document = 'document',
	group = 'group'
}



export enum DeliberativeElement {
	explanation = 'explanation',
	needs = 'needs',
	resource = 'resource',
	consideration = 'consideration',
	research = 'research',
	option = 'option',
	general = 'general',
}

export enum QuestionStage {
	explanation = 'explanation',
	suggestion = 'suggestion',
	firstEvaluation = 'firstEvaluation',
	secondEvaluation = 'secondEvaluation',
	voting = 'voting',
	finished = 'finished',
}

export enum Access {
	open = 'open',//TODO: remove in the future (at about jun  2025) for legacy purposes.
	openToAll = 'openToAll', //used to allow anonymous users and all the rest.
	openForRegistered = 'openForRegistered', //only user with login can join the deliberation.
	moderated = 'moderated', //only users that are approved by the admin can join the deliberation.
	secret = 'secret', //only users that are invited by the admin can join the deliberation.
	
}

export enum membersAllowed {
	all = 'all',
	nonAnonymous = 'nonAnonymous',
}

export enum QuestionType {
	massConsensus = 'mass-consensus',
	multiStage = 'multi-stage',
}

export enum QuestionStagesType {
	singleStage = 'singleStage',
	document = 'document',
}

export enum DocumentType {
	paragraph = 'paragraph',
	section = 'section',
	comment = 'comment',
}

export enum DeliberationType {
	chat = 'chat',
	options = 'options',
	voting = 'voting',
}

export enum StepType {
	chat = 'chat',
	options = 'options',
	addOptions = 'addOptions',
	randomOptions = 'randomOptions',
	topOptions = 'topOptions',
	voting = 'voting',
}

/** All delib's collections */
export enum Collections {
	statements = 'statements',
	termsOfUseAcceptance = 'termsOfUseAcceptance',
	statementsSettings = 'statementsSettings',
	statementsMetaData = 'statementsMeta',
	statementsPasswords = 'statementsPasswords',
	statementsSubscribe = 'statementsSubscribe',
	massConsensus = 'massConsensus',
	massConsensusMembers = 'massConsensusMembers',
	massConsensusProcesses = 'massConsensusProcesses',
	choseBy = 'choseBy',
	participants = 'participants',
	rooms = 'rooms',
	roomsSettings = 'roomsSettings',
	evaluations = 'evaluations',
	votes = 'votes',
	users = 'usersV2',
	usersData = 'usersData',
	usersSettings = 'usersSettings',
	resultsTriggers = 'resultsTriggers',
	results = 'results',
	maps = 'maps',
	agreements = 'agreements',
	timers = 'timers-settings',
	timersRooms = 'timers-rooms',
	invitations = 'invitations',
	evaluators = 'evaluators',
	documents = 'documents',
	importance = 'importance',
	approval = 'approval',
	awaitingUsers = 'awaitingUsers',
	agrees = 'agrees',
	documentsSigns = 'documentsSigns',
	signatures = 'signatures',
	stages = 'stages',
	steps = 'steps',
	signUsers = 'signUsers',
	statementViews = 'statementViews',
	statementSegments = 'statementSegments',
	inAppNotifications = 'inAppNotifications',
	pushNotifications = 'pushNotifications',
	emailNotifications = 'emailNotifications',
	askedToBeNotified = 'askedToBeNotified',
}

export enum Screen {
	team = 'team',
	doc = 'doc',
	home = 'home',
	statement = 'statement',
	chat = 'chat',
	options = 'options',
	settings = 'settings',
	mindMap = 'mind-map',
	agreementMap = 'agreement-map',
}

export enum SortType {
	newest = 'newest',
	mostUpdated = 'mostUpdated',
	random = 'random',
	accepted = 'accepted',
}

export enum MassConsensusPageUrls {
	introduction = "introduction",
	initialQuestion = "initial-question", // TODO: remove after daniel finishes his ticket
	similarSuggestions = "similar-suggestions",// TODO: remove after daniel finishes his ticket
	question = "question",
	randomSuggestions = "random-suggestions",
	topSuggestions = "top-suggestions",
	voting = "voting",
	leaveFeedback = "leave-feedback",
	thankYou = "thank-you"
}

export enum QuestionStep {
	explanation = 'explanation',
	suggestion = 'suggestion',
	randomEvaluation = 'random-evaluation',
	topEvaluation = 'top-evaluation',
	voting = 'voting',
	finished = 'finished',
	other = 'other',
}
