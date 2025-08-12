import {
    object,
    string,
    number,
    boolean,
    array,
    optional,
    enum_,
    record,
    InferOutput
  } from 'valibot';
import { MassConsensusPageUrls, MassConsensusStep, MassConsensusStepSchema } from './massConsensusModel';

  // ============================================
  // ENUMS
  // ============================================

  export enum MCSessionStatus {
    DRAFT = 'draft',
    ACTIVE = 'active',
    COMPLETED = 'completed',
    ARCHIVED = 'archived'
  }

  export enum MCQuestionType {
    FULL_CONSENSUS = 'full_consensus',
    QUICK_VOTE = 'quick_vote',
    BRAINSTORM_ONLY = 'brainstorm_only',
    EVALUATE_ONLY = 'evaluate_only',
    CUSTOM = 'custom'
  }

  // ============================================
  // VALIBOT SCHEMAS
  // ============================================

  // Session Settings Schema
  export const MCSessionSettingsSchema = object({
    randomizeQuestions: boolean(),
    allowSkipping: boolean(),
    showProgressBar: boolean(),
    showIntermediateResults: boolean(),
    sharedSteps: object({
      introduction: boolean(),
      userDemographics: boolean(),
      feedback: boolean(),
      thankYou: boolean()
    })
  });



  // Question Content Schema
  export const MCQuestionContentSchema = object({
    question: string(),
    description: optional(string())
  });

  // Question Schema
  export const MCQuestionSchema = object({
    questionId: string(),
    sessionId: string(),
    order: number(),
    content: MCQuestionContentSchema,
    questionType: enum_(MCQuestionType),
    steps: array(MassConsensusStepSchema), // Using existing schema
    required: boolean()
  });

  // Session Schema
  export const MCSessionSchema = object({
    sessionId: string(),
    statementId: string(),
    title: string(),
    description: optional(string()),
    createdAt: number(),
    createdBy: string(),
    questions: array(MCQuestionSchema),
    settings: MCSessionSettingsSchema,
    status: enum_(MCSessionStatus)
  });

  // Session Progress Schema
  export const MCSessionProgressSchema = object({
    sessionId: string(),
    participantId: string(),
    currentQuestionIndex: number(),
    completedQuestions: array(string()), // questionIds
    startedAt: number(),
    lastUpdated: number(),
    completed: boolean()
  });

  // Question Response Schema
  export const MCQuestionResponseSchema = object({
    questionId: string(),
    sessionId: string(),
    participantId: string(),
    responses: object({
      suggestions: optional(array(string())),
      votes: optional(array(string())), // statementIds
      evaluations: optional(record(string(), number())) // statementId -> score
    }),
    completedAt: number()
  });

  // ============================================
  // TYPE INFERENCES
  // ============================================

  export type MCSessionSettings = InferOutput<typeof MCSessionSettingsSchema>;
  export type MCQuestionContent = InferOutput<typeof MCQuestionContentSchema>;
  export type MCQuestion = InferOutput<typeof MCQuestionSchema>;
  export type MCSession = InferOutput<typeof MCSessionSchema>;
  export type MCSessionProgress = InferOutput<typeof MCSessionProgressSchema>;
  export type MCQuestionResponse = InferOutput<typeof MCQuestionResponseSchema>;

  // ============================================
  // HELPER TYPES (for convenience)
  // ============================================

  // For creating a new session
  export type MCSessionCreate = Omit<MCSession, 'sessionId' | 'createdAt'>;

  // For updating a session
  export type MCSessionUpdate = Partial<Omit<MCSession, 'sessionId' | 'createdAt' | 'createdBy'>>;

  // For creating a new question
  export type MCQuestionCreate = Omit<MCQuestion, 'questionId'>;

  // For reordering questions
  export type MCQuestionOrder = {
    questionId: string;
    order: number;
  };

  // ============================================
  // DEFAULT VALUES (factory functions)
  // ============================================

  export const createDefaultMCSessionSettings = (): MCSessionSettings => ({
    randomizeQuestions: false,
    allowSkipping: true,
    showProgressBar: true,
    showIntermediateResults: false,
    sharedSteps: {
      introduction: true,
      userDemographics: false,
      feedback: true,
      thankYou: true
    }
  });

  export const createDefaultMCQuestion = (
    sessionId: string,
    order: number
  ): MCQuestionCreate => ({
    sessionId,
    order,
    content: {
      question: '',
      description: undefined
    },
    questionType: MCQuestionType.FULL_CONSENSUS,
    steps: [
      { screen: MassConsensusPageUrls.question, statementId: '', text: undefined },
      { screen: MassConsensusPageUrls.topSuggestions, statementId: '', text: undefined },
      { screen: MassConsensusPageUrls.randomSuggestions, statementId: '', text: undefined },
      { screen: MassConsensusPageUrls.topSuggestions, statementId: '', text: undefined },
      { screen: MassConsensusPageUrls.voting, statementId: '', text: undefined }
    ],
    required: true
  });

  // ============================================
  // QUESTION TYPE TO STEPS MAPPING
  // ============================================

  export const getDefaultStepsForQuestionType = (
    type: MCQuestionType,
    statementId: string
  ): MassConsensusStep[] => {
    const createStep = (screen: MassConsensusPageUrls): MassConsensusStep => ({
      screen,
      statementId,
      text: undefined
    });

    switch (type) {
      case MCQuestionType.FULL_CONSENSUS:
        return [
          createStep(MassConsensusPageUrls.question),
          createStep(MassConsensusPageUrls.topSuggestions),
          createStep(MassConsensusPageUrls.randomSuggestions),
          createStep(MassConsensusPageUrls.topSuggestions),
          createStep(MassConsensusPageUrls.voting)
        ];

      case MCQuestionType.QUICK_VOTE:
        return [
          createStep(MassConsensusPageUrls.question),
          createStep(MassConsensusPageUrls.voting)
        ];

      case MCQuestionType.BRAINSTORM_ONLY:
        return [
          createStep(MassConsensusPageUrls.question),
          createStep(MassConsensusPageUrls.topSuggestions)
        ];

      case MCQuestionType.EVALUATE_ONLY:
        return [
          createStep(MassConsensusPageUrls.question),
          createStep(MassConsensusPageUrls.randomSuggestions),
          createStep(MassConsensusPageUrls.topSuggestions)
        ];

      case MCQuestionType.CUSTOM:
      default:
        return [createStep(MassConsensusPageUrls.question)];
    }
  };