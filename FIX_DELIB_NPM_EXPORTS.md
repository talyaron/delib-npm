# Fix for delib-npm v5.6.42 Export Issues

## Problem Summary
Version 5.6.42 of delib-npm incorrectly exports enums as type-only exports (`export type`), which causes TypeScript compilation errors when projects try to use these enums as values.

## Root Cause
When you updated the exports in delib-npm, enums were mistakenly exported using `export type { ... }` syntax. However, TypeScript enums have both compile-time type meanings AND runtime value meanings, so they must be exported as regular values.

## Affected Exports
The following enums are incorrectly exported as types but should be value exports:
- `ResultsBy` (used as `ResultsBy.consensus`, `ResultsBy.mostLiked`, etc.)
- `CutoffBy` (used as `CutoffBy.topOptions`, `CutoffBy.aboveThreshold`)
- `MassConsensusPageUrls` (used as `MassConsensusPageUrls.introduction`, etc.)

## How to Fix in delib-npm

### In your `src/index.ts` file:

1. **Find and fix the Results exports** (around line 22 in compiled index.d.ts):
```typescript
// WRONG (current in v5.6.42):
export type { Results, ResultsSettings, ResultsBy, CutoffBy } from "./models/results/Results";
export { ResultsSettingsSchema, defaultResultsSettings } from "./models/results/Results";

// CORRECT (should be):
export {
  Results,           // If Results is a class or has runtime value
  ResultsBy,         // Enum - must be value export
  CutoffBy,          // Enum - must be value export
  ResultsSettingsSchema,
  defaultResultsSettings
} from "./models/results/Results";
export type {
  ResultsSettings    // Only if this is a pure type/interface
} from "./models/results/Results";
```

2. **Find and fix the MassConsensus exports** (around line 16 in compiled index.d.ts):
```typescript
// WRONG (current in v5.6.42):
export type {
  MassConsensusPageUrls,
  MassConsensus,
  GeneratedStatement,
  MassConsensusMember,
  MassConsensusProcess,
  MassConsensusStep
} from "./models/massConsensus/massConsensusModel";

// CORRECT (should be):
export {
  MassConsensusPageUrls,  // Enum - must be value export
  // Add any schemas or other runtime values here
} from "./models/massConsensus/massConsensusModel";
export type {
  MassConsensus,          // If these are interfaces/types
  GeneratedStatement,
  MassConsensusMember,
  MassConsensusProcess,
  MassConsensusStep
} from "./models/massConsensus/massConsensusModel";
```

## Quick Rule to Remember

### Export as VALUES (regular `export`):
- **Enums** - Always export as values (they exist at runtime)
- **Classes** - Have runtime constructors
- **Functions** - Called at runtime
- **Constants** - Runtime values
- **Zod/Valibot Schemas** - Runtime validation objects

### Export as TYPES (`export type`):
- **Interfaces** - Only exist at compile time
- **Type aliases** - Only exist at compile time
- **Type-only imports** that are re-exported

## How to Verify an Enum
If the code uses it with dot notation like:
- `MyEnum.SomeValue`
- `ResultsBy.consensus`
- `MassConsensusPageUrls.introduction`

Then it's definitely an enum and needs to be a **value export**.

## Testing Your Fix
1. After making changes, build the package: `npm run build`
2. Check the generated `dist/index.d.ts` file - it should show:
   - Enums in regular `export { ... }`
   - Interfaces/types in `export type { ... }`
3. Test in a consuming project with `isolatedModules: true` in tsconfig
4. Run `npm run typecheck` in the consuming project

## Version 5.6.41 Reference
Version 5.6.41 had the correct exports. You can see in its `dist/index.d.ts`:
```typescript
// Line 13 - Correct in v5.6.41:
export { Results, ResultsSettings, ResultsSettingsSchema, ResultsBy, CutoffBy, defaultResultsSettings } from "./models/results/Results";

// Line 10 - Correct in v5.6.41:
export { MassConsensusPageUrls, MassConsensus, MassConsensusSchema, ... } from "./models/massConsensus/massConsensusModel";
```

## Important Note
The root issue is that v5.6.42 accidentally changed value exports to type exports for enums. Since enums are used as values in code (e.g., `ResultsBy.consensus`), they must be exported as values, not types.

## Also Check
Make sure your npm publish process doesn't include the `src` folder - only `dist` should be published. Add to `.npmignore` if needed:
```
src/
*.ts
!*.d.ts
tsconfig.json
```