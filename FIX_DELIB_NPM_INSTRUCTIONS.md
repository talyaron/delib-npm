# Instructions to Fix TypeScript Export Issues in delib-npm Package

## Problem
The delib-npm package has TypeScript compilation errors when used in projects with `isolatedModules: true`. The package is re-exporting types without using the `export type` syntax, which is required when `isolatedModules` is enabled.

## Task
Fix all TypeScript re-export statements in the delib-npm package to use proper type exports.

## Instructions for Claude

Please fix the TypeScript export issues in the delib-npm package by following these steps:

1. **Open the file**: `node_modules/delib-npm/src/index.ts` (or in your delib-npm source repository: `src/index.ts`)

2. **Fix the following exports** by separating type exports from value exports:

### Current problematic patterns to fix:

```typescript
// WRONG - Mixed type and value exports
export { Agreement, AgreementSchema } from "./models/agreements/Agreement";
export { Vote, VoteSchema, getVoteId, VotingSettings } from "./models/vote/votingModel";
```

### Should be changed to:

```typescript
// CORRECT - Separate type and value exports
export type { Agreement } from "./models/agreements/Agreement";
export { AgreementSchema } from "./models/agreements/Agreement";

export type { Vote, VotingSettings } from "./models/vote/votingModel";
export { VoteSchema, getVoteId } from "./models/vote/votingModel";
```

## Specific Lines to Fix

Based on the errors, fix these exports in `src/index.ts`:

1. **Line 25-35**: Separate type exports for Agreement, AgreeDisagree, Agree, Importance, DocumentApproval, DocumentImportance
2. **Line 41**: Separate Approval (type) from ApprovalSchema (value)
3. **Line 45**: Export ChoseBy as type
4. **Line 54-56**: Export DocumentSigns and Signature as types
5. **Line 63-69**: Export Evaluation, Evaluator, StatementEvaluation, StatementEvaluationSettings as types
6. **Line 76**: Separate Invitation (type) from InvitationSchema (value)
7. **Line 81-90**: Export MassConsensus, GeneratedStatement, MassConsensusMember, MassConsensusProcess, MassConsensusStep as types
8. **Line 95**: Separate NotificationType, ReadContext, NotificationReadStatusType (types) from schemas (values)
9. **Line 98**: Separate QuestionSettings (type) from QuestionSettingsSchema (value)
10. **Line 101**: Separate Results, ResultsSettings, ResultsBy, CutoffBy (types) from defaultResultsSettings (value)
11. **Line 108-130**: Export SimpleStatement, StatementSettings, StatementSubscription, StatementView, WaitingMember, Statement, LastMessage, StatementMetaData as types
12. **Line 137-152**: Export User, Membership, Step, Creator, UserSettings, UserData as types
13. **Line 162**: Separate Vote, VotingSettings (types) from VoteSchema, getVoteId (values)
14. **Line 164**: Separate StatementSnapShot (type) from statementSnapShotSchema (value)
15. **Line 167**: Separate UserDemographicQuestion, DemographicOption (types) from UserDemographicQuestionSchema (value)
16. **Line 174-177**: Export PolarizationIndex, AxesItem, DemographicGroup as types
17. **Line 183**: Export Online as type
18. **Line 188-190**: Export Questionnaire, QuestionnaireQuestion as types
19. **Line 196-198**: Export FairDivisionSelection, FairDivisionUserSelection as types

## General Rules

1. **Types, interfaces, and type aliases** should use `export type { ... }`
2. **Values (functions, constants, classes with runtime code, schemas)** should use regular `export { ... }`
3. **Enums** can be exported normally with `export { ... }` as they have both type and value meanings
4. When in doubt about whether something is a type or value:
   - If it only exists at compile time (interface, type alias) → use `export type`
   - If it exists at runtime (function, const, class) → use regular `export`
   - Zod schemas are values → use regular `export`

## Testing
After making these changes:
1. Run `npm run build` or `tsc` in the delib-npm project
2. Ensure no TypeScript errors remain
3. Test that the package still works correctly in projects that import it

## Example of a fully corrected export section:

```typescript
// Type exports
export type {
  Agreement,
  AgreeDisagree,
  Agree,
  Importance,
  DocumentApproval,
  DocumentImportance
} from "./models/agreements/Agreement";

// Value exports
export {
  AgreementSchema,
  AgreeDisagreeSchema,
  AgreeSchema,
  ImportanceSchema,
  DocumentApprovalSchema,
  DocumentImportanceSchema
} from "./models/agreements/Agreement";
```

This will ensure the package works correctly with TypeScript projects that have `isolatedModules: true` enabled.