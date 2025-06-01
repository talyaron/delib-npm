import { object, string, number, array, InferOutput } from 'valibot';

// Schema for individual group within an axis
export const PolarizationGroupSchema = object({
    groupId: string(),           // "sports_123_option_0"
    groupName: string(),         // "Football Lovers"
    average: number(),           // -1 to +1 (group's average opinion)
    numberOfMembers: number(),             // Number of people in this group
    color: string(),             // Hex color for charts (e.g., "#ef4444")
    mad: number()                // Within-group polarization (0 to 1)
});

// Schema for each polarization axis
export const PolarizationAxisSchema = object({
    groupingQuestionId: string(),     // e.g., "sports_question_123"
    groupingQuestionText: string(),   // e.g., "Which sport do you prefer?"

    // Axis-specific polarization metrics
    axisAverageAgreement: number(),            // Average for this axis grouping (-1 to +1)
    axisMAD: number(),               // MAD for this axis grouping (0 to 1)   

    // All groups for this axis
    groups: array(PolarizationGroupSchema)
});

export type PolarizationAxis = InferOutput<typeof PolarizationAxisSchema>;
export type PolarizationGroup = InferOutput<typeof PolarizationGroupSchema>;

// Main polarization metrics schema
export const PolarizationMetricsSchema = object({
    statementId: string(),          // ID of the statement this polarization belongs to
    // Overall polarization (across all users, regardless of grouping)
    totalEvaluators: number(),          // Total number of evaluators
    overallMAD: number(),            // 0 to 1 (Y-axis on triangle plot)
    averageAgreement: number(),         // Overall direction
    lastUpdated: number(),           // Timestamp of last calculation

    // Multiple polarization axes (one per grouping question)
    axes: array(PolarizationAxisSchema)
});

export type PolarizationMetrics = InferOutput<typeof PolarizationMetricsSchema>;

// Export the main schema
